---
name: gov-write
description: >
  정부지원금 콘텐츠 자동 생성 파이프라인.
  키워드를 받아 최신 데이터 수집 → 정부 카드뉴스 수집 → data/policies/{slug}.ts 작성 →
  Q1~Q13 품질 자가검증 → 자동 수정 → 사람 승인 → 푸시까지 자동 실행.
  Use when: 정부지원금, 복지정책, 보조금 관련 글을 작성할 때.
user-invocable: true
argument-hint: "[키워드]"
---

# /gov-write — 정부지원금 정책 페이지 자동 생성

키워드 `$ARGUMENTS`를 받아 아래 파이프라인을 순서대로 실행한다.

---

## 🚦 시작은 무조건 이 한 줄 (2026-08-13 사장님 확정 — "3개 자동화하게 만들라고")

```
npx tsx scripts/write.ts "$ARGUMENTS"
```

이게 지금 어느 단계인지, 다음에 뭘 해야 하는지 말해준다. **출력에 나온 단계만 한다.**
아래 Phase 0~7 설명은 각 단계를 어떻게 하는지에 대한 참고서지, 실행 순서가 아니다.

### 시스템은 이 4개가 전부다

```
1  타이틀    reference/titles 캡처를 Read 로 열고 → 실검색어 조각으로 조립
2  구성표    hero 서론 + 질문형 소제목 + 버튼 문구·목적지  → 채팅에 올려 승인받고 멈춤
3  사실      Playwright 로 1차 출처 열고 텍스트 + 화면 캡처로 대조 (팩트시트)
4  마무리    npx tsx scripts/write.ts "{키워드}" --final  → 오차·오해 소지 전수 검토
```

**순서를 뒤집으면 사후 수정이 되고, 사후에는 안 고친다.**
본문 파일은 4단계 직전에 처음 만든다. 2단계 승인 전에 본문을 쓰면 훅이 저장을 막는다
(`require-title-log.mjs` — 1·2·3단계를 글 한 편마다 검사한다).

---

## ⚠️ 절대 규칙 (어기면 작업 중단)

1. **추정·예시 수치 절대 금지** — 모든 숫자는 정부 1차 출처에서만
2. **Q1~Q13 품질 기준을 작성 도중 충족** — 다 쓴 후 검증 X, 쓰면서 충족
3. `python3 scripts/check-quality.py {slug}` PASS 전까지 사용자에게 결과 제시 금지
4. PASS 후에도 **사용자 승인 없이 푸시 금지**
5. **병렬 처리 절대 금지** — 정부 출처 수집·검증은 반드시 Claude in Chrome 단독 순차 실행
6. **데이터 작성 ↔ 출처 대조 교차 실행** — qa 항목 1개 작성 → 즉시 출처 페이지 대조 → 다음 항목
7. **중복 검사 먼저** — 쓰기 전에 `npx tsx scripts/check-duplicate.ts --all 2>&1 | grep {키워드}` 로
   같은 주제가 이미 있는지 확인. 있으면 새 글 대신 기존 글 보강. (2026-08-01 부모급여 스포크를
   다 쓰고 폐기한 교훈 — 쓰고 나서 아는 건 늦다)
8. **후킹 4축 필수** — 타이틀·cue는 `docs/hook-patterns.md` 정본을 따른다. 손실회피/숫자대비/
   시간압박(검증된 마감만)/자기대입 중 1축 이상. "확인하세요·클릭하세요" 류 밋밋한 설명형은
   H축 게이트가 차단한다. **시간압박 재료(마감일·선착순 여부)는 반드시 Playwright로 공식
   공고에서 확인한 것만** — 추측 후킹은 절대규칙 1 위반.
9. **CTA는 행동 지점 딥링크** — applyUrl·act.url이 기관 메인/루트면 freshness C축이 차단.
   그 카드의 행동(조회는 조회 화면, 신청은 접수 화면)으로 목적지를 나눈다.

---

## 품질 기준 (작성 도중 실시간 충족 — 임계값은 스크립트가 원천)

> data/policies/{slug}.ts 파일을 작성할 때 아래 기준을 충족하면서 써야 한다.
> 다 쓰고 나서 맞추는 것이 아니라, 항목을 추가할 때마다 즉시 확인한다.

**임계값을 여기 적지 않는다.** `scripts/verify-quality.ts` 가 단일 진실 원천이다.
과거 CLAUDE.md 가 Q10을 잘못 적고 Q11~Q13을 누락해 스크립트와 어긋난 전력이 있고,
2026-08-08 점검에서 이 스킬이 같은 실수를 반복하고 있는 것이 확인됐다
(스킬은 Q1~Q9 만 알고 있었고, 실제로는 Q10~Q13 이 더 있어 push 가 막혔다).

실제 항목·임계값은 이 명령으로 확인한다:

```bash
npm run verify -- {slug}          # 항목별 PASS/FAIL 과 실제 값이 그대로 나온다
```

작성 중에는 아래 순서만 지킨다 — 숫자는 검증 명령이 알려준다.

### qa 항목 작성 순서 (매 항목마다)

```
1. anchor + question 입력
2. intro 입력 → 즉시 글자 수 확인 (< 200자이면 그 자리에서 보완)
3. highlights 입력 (누적 개수 확인)
4. table 또는 box 반드시 1개 이상 입력  ← Q3 충족
5. sourceNote 입력  ← Q7 충족
6. 다음 qa로 이동
```

### qa 작성 완료 후 즉시 확인

```
npm run verify -- {slug}

  → Q1~Q13 항목별로 PASS/FAIL 과 실제 값이 나온다.
    숫자를 여기 적어두지 않는다 — 적어두면 스크립트가 바뀔 때 어긋난다.
```

9개 모두 ✓ 이후에만 파일을 저장한다. 미달 항목은 저장 전에 수정한다.

---

## Phase -1: 중복·기존 커버 확인 (생략 불가 — 헛수고 방지)

```bash
# 이 주제를 이미 다루고 있나? 허브·스포크 1,700개 전체와 대조
npx tsx scripts/check-duplicate.ts --all 2>&1 | grep -i "{키워드}"
grep -rl "{키워드}" data/policies/*.ts | head
```

- 같은 주제 허브가 있으면 → **신규 허브 금지**, 그 허브의 미커버 검색어를 스포크로 확장
  (승자 클러스터 전략: 이미 유입이 검증된 허브의 연관검색어부터 먹는다)
- 완전히 새 주제일 때만 Phase 0으로.
- **병렬 배치 시 이 단계는 에이전트를 띄우기 전에 항목별로 전부 끝낸다** (2026-08-01 사고:
  상속 4개 허브를 병렬 발주했다가 4개 전부 기존 파일과 충돌해 전량 중지. 검사 비용 30초를
  아끼려다 에이전트 4개 비용을 날렸다). 검사는 파일명 grep이 아니라 **제목까지**:
  ```bash
  grep -l "{키워드}" data/policies/*.ts | xargs grep -m1 "title:"   # 매칭 파일의 제목 전부 눈으로 확인
  ```

---

## Phase 0: 기준 케이스 학습 (생략 불가)

### 0-A. 타이틀 캡처 — 주제를 받으면 이것부터 Read 한다

**주제를 받고 가장 먼저 하는 행동.** 타이틀 후보를 입에 올리기 전에 연다.
주제와 가장 가까운 1장은 반드시, 가능하면 5장 전부.

```
Read: C:\Users\user\gov-jjyu\reference\titles\대출 타이틀.png
Read: C:\Users\user\gov-jjyu\reference\titles\보험타이틀.png
Read: C:\Users\user\gov-jjyu\reference\titles\생활타이틀.png
Read: C:\Users\user\gov-jjyu\reference\titles\세금 타이틀.png
Read: C:\Users\user\gov-jjyu\reference\titles\연금 타이틀.png
```

열고 나서 채운다 — 이 두 줄을 못 쓰면 안 연 것이다.
- 어느 캡처의 어느 줄을 봤나 (그 타이틀을 그대로 옮겨적기):
- 그 구조를 왜 고르나 (한 문장):

**왜 여기 있나 (2026-08-08)**: 이 캡처는 CLAUDE.md 산문과 push 시점 리마인더에만
적혀 있었고, 정작 작업을 시작할 때 읽는 이 문서에는 없었다. 그래서 매번 건너뛰었다.
"기억하고 있다"로 넘어가지 않는다 — 카드뉴스 이미지를 매번 여는 것과 같은 자리다.

### 0-B. 카드뉴스 기준 케이스

```
Read: C:\Users\user\gov-jjyu\reference\cards\청년미래적금\01.jpg ~ 07.jpg
Read: C:\Users\user\gov-jjyu\reference\cards\고유가지원금\01.jpg ~ 08.jpg
```

이 두 케이스보다 정보량이 적으면 작성 중단 후 보강.

### 0-C. 이 세 가지가 전부다 (사장님 확정)

1. **캡처 보고 타이틀** — 0-A 를 먼저 하고, 실검색어 조각으로 조립한다. `~법` 종결 금지
2. **버튼 문구가 클릭하게** — 서론 마지막 문장에서 버튼 동사가 나온다
3. **소제목은 사용자 궁금증** — 사용자가 실제로 묻는 말로 먼저 확정하고, 그 단어로 타이틀을 조립한다

나머지(품질·오차·오해 소지)는 이 셋 다음이다.

---

## Phase 1: 최신 데이터 수집 (생략 불가)

```
WebSearch: "2026년 {keyword} 금액 기준"
WebSearch: "2026년 {keyword} 신청 대상 자격"
WebSearch: "{keyword} site:korea.kr OR site:gov.kr"
```

### 정부 카드뉴스 수집 (병렬 금지 — Claude in Chrome 순차 실행)

> **병렬 수집 절대 금지.** 카드 한 장씩 순서대로 읽고, 읽은 내용을 즉시 data 파일에 반영한 뒤 다음 카드로 이동한다.

실행 순서:
```
1. Chrome 으로 정부 카드뉴스 URL 접속
2. 카드 1장 텍스트 추출 → data 파일 해당 qa 항목에 즉시 반영
3. 반영 내용과 카드 원문 1:1 대조 확인 (수치·표 일치 여부)
4. ✓ 확인 후 다음 카드로 이동
5. N장 모두 완료까지 반복
```

금지:
- 여러 카드를 한꺼번에 모아서 나중에 입력하는 방식 금지
- 정부 카드뉴스에 없는 수치 추가 금지
- 정부 카드뉴스에 있는 수치 누락 금지
- 기억·추정으로 수치 입력 금지 — 반드시 Chrome 화면에서 복사

---

## Phase 2: 정책 유형 분류

| 유형 | 표준 Q 7개 |
|------|-----------|
| cash | 금액/누가/기간/방법/거동불편/중복/예외 |
| savings | 매칭/조건/한도/만기/중도해지/세제/가입 |
| loan | 한도/금리/대상/상환/거치/은행/연체 |
| service | 서비스/대상/본인부담/한도/이용처/유효/신청 |
| training | 금액/대상/기관/유효/실업급여/연장/신청 |
| facility | 대상/등급/부담/시설/기간/신청/이의 |
| tax | 공제금액/대상/한도/요건/시기/소급/중복 |

---

## Phase 3: data/policies/{slug}.ts 작성

아래 템플릿을 사용하며, `npm run verify` 기준을 충족하면서 작성한다.

```typescript
export const {PolicyName}Policy: PolicyData = {
  id: '{id}',
  slug: '{slug}',
  type: '{type}',
  title: '{title}',
  org: '{부처명}',

  keyFacts: {
    지원유형: {
      value: '...',
      source: { url: '...', cardIndex: 1, text: '...', verifiedAt: '2026-05-17' },
    },
    // 정부 카드뉴스 핵심 항목 모두 포함
  },

  qa: [
    // Q1: 3개 이상 (2026-08-08 — 개수는 타이틀이 정한다)
    {
      anchor: '...',
      question: '...?',
      intro: '...',          // Q2: 200자 이상 — 작성 직후 확인
      highlights: ['...'],   // Q6: 누적 15개 이상
      table: { ... },        // Q3+Q4: 각 qa 시각 요소 필수, 전체 2개 이상
      box: { ... },          // Q3+Q5: 전체 3개 이상
      sourceNote: '* 출처: {부처} 카드뉴스 ({날짜})',  // Q7: 모든 qa
    },
    // ... 소제목 개수는 타이틀이 약속한 키워드 수를 따른다
  ],

  faq: [
    { question: '...?', answer: '...' },
    // Q8: 5개 이상
  ],

  sources: [
    { title: '...', url: 'https://...' },
    // Q9: URL 3개 이상
  ],
};
```

---

## Phase 4: 자동 품질 검증 (파일 저장 즉시 실행)

```bash
npm run verify -- {slug}                      # Q1~Q13 구조 품질
npx tsx scripts/check-click-value.ts          # 타이틀 행동성·버튼 슬롯·외부 누수
npx tsx scripts/check-cue-value.ts            # 문구·버튼 7축 + H(후킹 부재)
npx tsx scripts/check-user-value.ts           # 타이틀↔소제목·버튼 CTA
npx tsx scripts/check-freshness.ts            # 검수일·딥링크·지난 마감
npx tsx scripts/check-duplicate.ts            # 기존 글과 겹침
bash scripts/check-spoke-quality.sh           # (스포크일 때) Format A·소제목 하한
```

전부 커밋 후에 돌려야 실제 검사가 된다(게이트는 origin/main...HEAD diff만 본다).

- **PASS** → Phase 5로 진행
- **FAIL** → 오류 항목 즉시 수정 후 재실행 (사용자 보고 없이 자동 수정)
- **3회 FAIL** → 오류 내용과 함께 사용자에게 보고

---

## Phase 5: 와이어링

```typescript
// data/policies/manifest.ts 추가
{ id: '{id}', slug: '{slug}', title: '{title}', org: '{org}', type: '{type}' }

// app/page.tsx FEATURED — slug + badge 만 추가 (데이터 하드코딩 절대 금지)
{ slug: '{slug}', badge: '신규' }

// app/sitemap.ts 에 slug 추가
```

---

## Phase 6: 사람 승인 및 푸시

```
[검증 결과]
파일: data/policies/{slug}.ts
Q1~Q13: 전체 PASS ✓
정부 카드뉴스: {URL}

푸시하려면 "확인" 또는 "푸시"라고 말씀해주세요.
```

승인 후:
```bash
git add -A
git commit -m "feat: {slug} 추가 (Q1~Q13 PASS)"
git push
```

pre-push hook이 게이트 전체를 자동 실행 → FAIL이면 push 차단.

---

## Phase 7: 네프콘 짝 글 (유입 엔진 — 생략하면 글이 안 읽힌다)

> 확인된 사실(2026-08-01): gov 트래픽·수익의 핵심 유입은 오가닉이 아니라
> **네이버 프리미엄콘텐츠(머니위키) 백링크**다. 삼성미소금융 허브 = 네프콘 조회 3,787.
> 글만 쓰고 끝내면 아무도 안 온다.

새 허브·스포크 1개마다 `docs/nepcon-drafts.md` 형식으로 짝 글 초안을 추가한다:
- 제목: hook-patterns 4축 적용 (gov 타이틀과 다르게 — 같으면 중복 콘텐츠)
- 구성: 리드(후킹) + 핵심 요약 + 표 1개 + **gov 딥링크 2회(본문 중간·끝)**
- 전문을 다 주지 않는다 — 상세는 gov로 넘겨야 백링크가 산다
- 사용자가 스튜디오에서 발행 (발행 자체는 사람 몫)

---

## 스포크 작성 워크플로우 (gov-write 확장)

### ⚠️ 스포크 품질 기준 (check-spoke-quality.sh 자동 검증)

**여기에도 임계값을 적지 않는다** (2026-08-08 — 이 표에 qa ≥ 7 이 남아 있어
같은 문서 안에서도 기준이 두 가지였다). 실제 값은 스크립트가 알려준다:

```bash
bash scripts/check-spoke-quality.sh    # Format A · qa 개수 하한
npm run verify -- {slug}               # Q1~Q13 항목별 실제 값
```

**소제목 개수는 타이틀이 정한다.** 하한은 빈 글 방지용일 뿐이고,
타이틀이 약속한 롱테일 키워드마다 질문형 소제목 하나가 기준이다.
미달 파일은 git push 시 자동 차단된다.

### 스포크 파일 생성 순서

```
1. 검색 키워드 수집 (Google PAA + Naver 연관검색어)
2. 타이틀 4개 확정 (사용자 승인 후)
3. 템플릿: .claude/skills/gov-write/templates/spoke-template.tsx 복사
4. {PLACEHOLDER} 채우기 — 소제목 개수는 타이틀이 정한다(고정 7개 아님). 각 intro 200자 이상
5. faqData 5개 작성 (실제 PAA/검색 쿼리 기반)
6. sources — 정부 1차 출처 (개수는 verify 가 검사)
7. registry.ts import + SpokesRegistry 등록
8. data/policies/{slug}.ts spokes[] 배열 업데이트
9. npm run verify:spokes → PASS 확인 후 사용자 승인 요청
```

### 자가 점검 (파일 저장 전 필수)

```
[ ] npm run verify -- {slug}            → Q1~Q13 전체 PASS
[ ] bash scripts/check-spoke-quality.sh → Format A · 소제목 하한
[ ] 타이틀이 약속한 키워드를 소제목이 다 덮었나 (개수가 아니라 커버리지)
[ ] 각 qa에 table 또는 box 있음

수치를 여기 적지 않는다. 스크립트가 실제 값과 기준을 같이 출력한다.
```

6개 모두 ✓ 이후에만 저장.

### 배치 작업 한도

- 1 세션 = 최대 4개 정책 × 4 스포크 = 16파일
- 16파일 작성 후 npm run verify:spokes PASS → 사용자 승인 → push
- push 후 다음 배치 시작

## 문구 선확정 (2026-08-02 확정 — 순서를 바꾼다)

본문을 먼저 쓰고 문구를 끼워 넣으면 후킹이 될 수가 없다. 순서는 이렇다.

1. Playwright로 공식 공고 원문 확보 (수치·자격·마감·접수처)
2. **문구 초안 파일을 먼저 만든다** — `heroHook` + 카드별 `act:{cue,label,url}` 만
3. `npx tsx scripts/check-cue-value.ts --draft <초안파일>` → ✅ 나올 때까지 고친다
4. 채팅창에 문구·버튼 전부 나열해 사용자 승인
5. 그 다음에 본문(intro·table·box)을 쓴다
6. 전체 게이트 → 커밋 → 빌드 → 푸시

왜 바꿨나: 게이트가 글을 다 쓴 뒤에만 돌아서 "300만원을 대주는데"(비문)와
버튼 7개 전부 "…확인하기"(도배)를 사후에 발견했다. 문구가 이 프로젝트에서
제일 중요한데 제일 마지막에 검사받고 있었다. 본문을 쓴 뒤 문구를 고치면
문단까지 같이 손봐야 해서 실제로는 안 고치게 된다.
