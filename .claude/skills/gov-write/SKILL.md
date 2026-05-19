---
name: gov-write
description: >
  정부지원금 콘텐츠 자동 생성 파이프라인.
  키워드를 받아 최신 데이터 수집 → 정부 카드뉴스 수집 → data/policies/{slug}.ts 작성 →
  Q1~Q9 품질 자가검증 → 자동 수정 → 사람 승인 → 푸시까지 자동 실행.
  Use when: 정부지원금, 복지정책, 보조금 관련 글을 작성할 때.
user-invocable: true
argument-hint: "[키워드]"
---

# /gov-write — 정부지원금 정책 페이지 자동 생성

키워드 `$ARGUMENTS`를 받아 아래 파이프라인을 순서대로 실행한다.

---

## ⚠️ 절대 규칙 (어기면 작업 중단)

1. **추정·예시 수치 절대 금지** — 모든 숫자는 정부 1차 출처에서만
2. **Q1~Q9 품질 기준을 작성 도중 충족** — 다 쓴 후 검증 X, 쓰면서 충족
3. `python3 scripts/check-quality.py {slug}` PASS 전까지 사용자에게 결과 제시 금지
4. PASS 후에도 **사용자 승인 없이 푸시 금지**
5. **병렬 처리 절대 금지** — 정부 출처 수집·검증은 반드시 Claude in Chrome 단독 순차 실행
6. **데이터 작성 ↔ 출처 대조 교차 실행** — qa 항목 1개 작성 → 즉시 출처 페이지 대조 → 다음 항목

---

## Q1~Q9 품질 기준 (작성 도중 실시간 충족 필수)

> data/policies/{slug}.ts 파일을 작성할 때 아래 기준을 충족하면서 써야 한다.
> 다 쓰고 나서 맞추는 것이 아니라, 항목을 추가할 때마다 즉시 확인한다.

| 기준 | 조건 | 작성 중 체크 포인트 |
|------|------|-------------------|
| Q1 | qa 배열 ≥ 7개 | 7번째 qa 항목 작성 후 ✓ |
| Q2 | 각 intro ≥ 200자 | intro 입력 후 글자 수 세고 ✓ |
| Q3 | 각 qa에 시각 요소 ≥ 1개 | qa 항목마다 table/box/box2 중 하나 필수 |
| Q4 | qa 전체 table ≥ 2개 | 2번째 table 추가 후 ✓ |
| Q5 | qa 전체 box ≥ 3개 | 3번째 box/box2 추가 후 ✓ |
| Q6 | highlights 합계 ≥ 15개 | 각 qa highlights 추가하며 누적 수 확인 |
| Q7 | 모든 qa에 sourceNote 명시 | qa 항목 닫기 전 sourceNote 추가 |
| Q8 | faq ≥ 5개 | 5번째 faq 작성 후 ✓ |
| Q9 | sources URL ≥ 3개 | 3번째 source 추가 후 ✓ |

### qa 항목 작성 순서 (매 항목마다)

```
1. anchor + question 입력
2. intro 입력 → 즉시 글자 수 확인 (< 200자이면 그 자리에서 보완)
3. highlights 입력 (누적 개수 확인)
4. table 또는 box 반드시 1개 이상 입력  ← Q3 충족
5. sourceNote 입력  ← Q7 충족
6. 다음 qa로 이동
```

### qa 7개 완료 후 즉시 확인

```
Q1 qa 개수:       __개  (≥7 ?)
Q2 최소 intro:    __자  (≥200 ?)
Q3 시각없는 qa:   __개  (=0 이어야 함)
Q4 table 합계:    __개  (≥2 ?)
Q5 box 합계:      __개  (≥3 ?)
Q6 highlights:    __개  (≥15 ?)
Q7 sourceNote:    __개  (=qa개수 ?)
Q8 faq 개수:      __개  (≥5 ?)
Q9 sources URL:   __개  (≥3 ?)
```

9개 모두 ✓ 이후에만 파일을 저장한다. 미달 항목은 저장 전에 수정한다.

---

## Phase 0: 기준 케이스 학습 (생략 불가)

신규 정책 작성 전 아래 이미지를 Read 도구로 직접 확인한다.

```
Read: C:\Users\user\gov-jjyu\reference\cards\청년미래적금\01.jpg ~ 07.jpg
Read: C:\Users\user\gov-jjyu\reference\cards\고유가지원금\01.jpg ~ 08.jpg
```

이 두 케이스보다 정보량이 적으면 작성 중단 후 보강.

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

아래 템플릿을 사용하며, Q1~Q9 기준을 충족하면서 작성한다.

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
    // Q1: 7개 이상
    {
      anchor: '...',
      question: '...?',
      intro: '...',          // Q2: 200자 이상 — 작성 직후 확인
      highlights: ['...'],   // Q6: 누적 15개 이상
      table: { ... },        // Q3+Q4: 각 qa 시각 요소 필수, 전체 2개 이상
      box: { ... },          // Q3+Q5: 전체 3개 이상
      sourceNote: '* 출처: {부처} 카드뉴스 ({날짜})',  // Q7: 모든 qa
    },
    // ... 총 7개 이상
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
python3 scripts/check-quality.py {slug}
```

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
Q1~Q9: 전체 PASS ✓
정부 카드뉴스: {URL}

푸시하려면 "확인" 또는 "푸시"라고 말씀해주세요.
```

승인 후:
```bash
git add -A
git commit -m "feat: {slug} 추가 (Q1~Q9 PASS)"
git push
```

pre-push hook이 check-quality.py 자동 실행 → FAIL이면 push 차단.

---

## 스포크 작성 워크플로우 (gov-write 확장)

### ⚠️ 스포크 품질 기준 (check-spoke-quality.sh 자동 검증)

| 기준 | 조건 | 게이트 |
|------|------|--------|
| qa[] 개수 | ≥ 7개 | pre-push 차단 |
| 각 intro | ≥ 200자 | 작성 중 확인 |
| faqData[] | ≥ 5개 | pre-push 차단 |
| sources[] | ≥ 3개 | 작성 중 확인 |
| 전체 q: 개수 | ≥ 12개 (qa 7 + faqData 5) | pre-push 차단 |

**미달 파일은 `npm run verify:spokes` 또는 git push 시 자동 차단됨.**

### 스포크 파일 생성 순서

```
1. 검색 키워드 수집 (Google PAA + Naver 연관검색어)
2. 타이틀 4개 확정 (사용자 승인 후)
3. 템플릿: .claude/skills/gov-write/templates/spoke-template.tsx 복사
4. {PLACEHOLDER} 채우기 — qa 7개 필수, 각 intro 200자 이상
5. faqData 5개 작성 (실제 PAA/검색 쿼리 기반)
6. sources 3개 이상 (정부 1차 출처)
7. registry.ts import + SpokesRegistry 등록
8. data/policies/{slug}.ts spokes[] 배열 업데이트
9. npm run verify:spokes → PASS 확인 후 사용자 승인 요청
```

### 자가 점검 (파일 저장 전 필수)

```
[ ] qa[] 개수: __개  (≥7)
[ ] 가장 짧은 intro: __자  (≥200)
[ ] faqData[] 개수: __개  (≥5)
[ ] sources[] 개수: __개  (≥3)
[ ] 각 qa에 table 또는 box 있음
[ ] highlights 총합: __개  (≥15 권장)
```

6개 모두 ✓ 이후에만 저장.

### 배치 작업 한도

- 1 세션 = 최대 4개 정책 × 4 스포크 = 16파일
- 16파일 작성 후 npm run verify:spokes PASS → 사용자 승인 → push
- push 후 다음 배치 시작
