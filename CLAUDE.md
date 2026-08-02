# gov-jjyu — 정부지원사업 자동화 시스템

> **목표**: 키워드 1개 입력 → 정부 카드뉴스 형식 콘텐츠 자동 생성 → 1:1 정부 자료 대조 검증 → 자동 빌드·푸시 → 라이브 배포

이 문서는 Claude가 이 프로젝트에 들어올 때 가장 먼저 읽는 마스터 컨텍스트다. 모든 작업의 기준점.

---

## 1. 절대 규칙 (어길 시 작업 중단)

0. **행동 문구·버튼이 1순위** (2026-08-02 확정) — 방문자 100명이 들어와도 버튼을 안 누르면 수익은 0에 가깝다. 글 개수가 아니라 클릭률이 수익을 정한다. 정본 `docs/button-copy.md`, 자동 로드 규칙 `.claude/rules/action-copy.md`.
   - **흐름 6단계**: 공감 → 대안이 왜 어려운가 → 그래서 이게 있다(금액) → 다만 다 되는 건 아니다 → **그럼 확인부터 하셔야겠죠[대상 확인 버튼]** → 기간[신청 버튼]
   - **버튼 2~3개**. 카드마다 짜내면 "확인하기" 도배가 된다. 버튼 문구는 앞 문장에서 나온다.
   - **문체는 말하듯**: "최대 1억까지 지원이 가능한데요. 8월 12일까지라 열흘 정도 남았습니다." 단정형으로 끊으면 공고문이다.
   - **순서**: 공고 확인 → 문구 초안 → `check-cue-value.ts --draft` 통과 → **채팅에 문구 나열해 승인** → 본문. 본문부터 쓰면 문구는 끼워넣기가 되고 사후에는 안 고친다.
   - 지적받은 어색한 표현은 `check-cue-value.ts` 의 `AWKWARD`(K축)에 등록한다. 이 목록이 늘어나는 게 시스템이 배우는 방식이다.

1. **추정·예시 수치 절대 금지** — 모든 숫자는 정부 1차 출처에서만

**모든 글은 "행동 키워드" 기반으로 작성 — 특히 허브는 무조건** (2026-07-17 확정) — 타이틀·본문이 "정보 전달"에서 끝나면 안 되고, 반드시 사용자가 실제로 누를 수 있는 행동(신청하기·조회하기·다운로드·접수하기 등)으로 귀결돼야 한다.
   - 타이틀 자체에 행동 동사를 포함: 글을 다 읽으면 사용자가 뭘 "눌러야" 하는지 명확해야 한다. 정보만 나열하고 끝나는 타이틀(예: "OO란 무엇인가")은 지양.
   - ⚠️ **"~하는 법"으로 끝내는 건 금지** (2026-07-30 확정). 과거 이 규칙을 "제목 끝에 하는 법을 붙인다"로 잘못 굳혀서 허브 타이틀 1233개 중 **422개(34%)가 '~법'으로 끝나는 도배 상태**가 됐다. 같은 어미가 사이트 전체에 반복되면 포털이 기계 생성으로 볼 여지가 생긴다. **행동 동사는 문장 안에 두고 종결은 매번 다르게** — 정본 `docs/title-style-24.md` 24개처럼 물음형·시나리오형으로 끝낸다: "티켓 어디서 예매하나", "늦으면 못 받는 이유는?", "며칠 받나", "놓치면 어떻게 되나", "1분이면 끝". `check-click-value.ts`의 D축(종결어미 도배)이 신규 글에서 이를 차단한다.
   - **행동 동사는 그 기관이 실제로 쓰는 말로.** 예: HUG 든든전세주택은 메뉴명이 "모집공고 및 입주신청"이라 '청약신청'이 아니라 **입주신청**이 맞다(표의 "청약 접수기간"은 일정 표기일 뿐). 기관이 쓰는 동사를 Playwright로 확인한 뒤 타이틀에 넣는다.
   - CTA 버튼(`applyUrl`/`ctaLabel`)은 그 글의 행동 키워드와 정확히 일치하는 목적지로 연결: 신청서 다운로드 글이면 서식 다운로드 페이지로, 조회 글이면 조회 시스템으로, 신청 글이면 온라인 신청 페이지로 — 뭉뚱그려 기관 메인 홈페이지로 보내지 말 것.
   - **허브는 예외 없이 적용.** 스포크는 주제 특성상 행동 유도가 약할 수 있어도(예: 개념 설명), 허브 최소 1곳(대표 qa 또는 CTA)에는 반드시 명확한 행동 동선이 있어야 한다.
   - 이 원칙은 매 세션 다시 설명받지 않아도 항상 적용되는 프로젝트 표준이다.
   - **후킹 정본 `docs/hook-patterns.md`** (2026-08-01 확정): 타이틀·cue는 손실회피/숫자대비/시간압박(검증된 마감만)/자기대입 4축 중 1축 이상. `check-cue-value.ts` H축이 밋밋한 설명형을 차단하고, `check-freshness.ts` E축이 지난 마감 문구를 차단한다. 시간압박 재료(마감일·선착순)는 Playwright로 공식 공고에서 확인한 것만.
2. **출처 명시 의무** — 모든 필드에 `source: { url, cardIndex, text, verifiedAt }`
3. **1:1 대조 검증 통과 전 푸시 금지** — `scripts/verify-policy.ts` PASS 필수
4. **정부 슬로건/로고/캐릭터 사용 금지** — "민생에 플러스" 등 정부 표어 X
5. **사용자 검증 후에만 푸시** — 자동 푸시 X, 반드시 사람 승인
6. **타이틀은 무조건 실제 검색어로** — 모든 신규 허브·스포크 타이틀은 **네이버+구글 실제 사용자 검색어**(자동완성·연관검색어·PAA)를 **Playwright로 직접 수집**해 그 문자열을 기반으로 작성한다. 머릿속으로 지어내거나 KB식 스타일만 흉내 내는 것 **금지**. 두 포털 교차 확인 필수. (상세: §2-B)
7. **모든 정보는 공식 홈페이지 Playwright 직접 대조** — 해당 사업의 **공식 홈페이지/보도자료를 Playwright로 일일이 열어** 수치·조건·일정을 1:1 대조한 뒤에만 작성한다. 블로그·언론 2차 출처를 1차처럼 인용 **금지**. 검증 못 한 수치는 쓰지 말고 "공식 채널 확인"으로 안내. 품질 오차 0이 목표.
   - ⚠️ **단일 공식 페이지도 맹신 금지** (2026-06 테스트로 발견): 고용노동부 worklife.kr가 6+6 5개월차를 350만으로 표기했으나, 다수 출처+계단식(+50만) 논리상 실제는 **400만**이었다 — 즉 정부 페이지에도 오타가 있다. **수치는 ① 2개 이상 출처 교차 ② 계산·논리 정합성(계단식·합계 등) 검산** 후 확정. 기존 데이터와 어긋나면 어느 쪽이 맞는지 교차로 판정한 뒤에만 수정.
   - ⚠️ **기관별 공식사이트 접근성 차이 → 접근 폴백 위계** (2026-06 테스트로 발견): 고용노동부 worklife.kr는 정적 HTML이라 Playwright로 잘 읽히지만, **건강보험공단(nhis.or.kr)은 봇 차단**("정상적이지 않은 접근으로 차단되었습니다" 알림)으로 Playwright·WebFetch가 막힌다. 접근이 막히면 아래 순서로 뚫는다:
     1. **Claude in Chrome (실제 크롬 세션)** — Playwright(헤드리스 자동화)가 봇 차단당해도, 사용자의 진짜 로그인 크롬으로 열면 사람처럼 보여 **대부분 뚫린다**. NHIS·정부24 등 차단 사이트의 1순위 해법.
     2. **법령 원문 우회** — 국가법령정보 law.go.kr / 찾기쉬운생활법령 easylaw.go.kr (시행령·고시 원문). 실제로 NHIS 차단 시 easylaw로 육아휴직 건강보험료 경감 조문을 WebFetch로 확보 성공.
     3. **대한민국 정책브리핑 korea.kr** / 기관 **보도자료 PDF**.
     4. 그래도 확보 불가 시에만 본문에 단정하지 말고 "해당 공단/콜센터 확인" 안내.
   - 즉 **"접근 불가"는 거의 없다 — Playwright 아니면 Claude in Chrome으로 대부분 열린다.** 도메인별 신뢰 출처 매핑: 고용=worklife/moel, 건보=easylaw/law.go.kr(또는 Chrome으로 nhis), 연금=korea.kr/law.go.kr, 금융=fsc/은행연합회.
8. **URL은 전부 영문 — 한글·영문 혼합 절대 금지** (2026-07-03 확정). 신규 스포크·정책 slug는 **영문 lowercase-hyphen만**, registry 키 = 정책 spokes 배열 slug = 영문으로 통일. 영문 허브 + 한글 스포크 혼합 금지(카톡·커뮤니티 공유 시 `%EB%B3%80…`로 깨져 클릭률↓·GA4 분석 불가). content 폴더/파일명은 한글 유지 가능(URL은 registry 키가 결정). 기존 한글 URL 이전은 **Cloudflare `public/_redirects` 301**만 사용 — `next.config`의 `redirects()`는 `output:'export'`라 무시되니 금지. 상세: §"spoke slug 영문 통일 룰".

---

## 🚨 404 진단 · 빌드/배포 규칙

> `next.config.mjs`/`tsconfig.json`/`wrangler.toml`/`.gitignore`/dynamic route 설정의 "단일 정답" + 404 진단 순서는 `.claude/rules/build-deploy.md`(해당 파일 작업 시 자동 로드)에 있다. 과거 인시던트 전체 기록: `docs/404-postmortem-2026-05.md`.
>
> 절대 하지 말 것: 코드만 보고 원인 추측(반드시 curl→git log→로컬 build Route 표 확인 순서), 여러 변경 한 번에 push.

## ⚠️ 스포크 Format A만 허용 · 콘텐츠 오배치 방지

> 상세(Format B 금지 예시, FEATURED/related/manifest 하드코딩 금지 규칙)는 `.claude/rules/design-system.md` 참조 (`app/**/*.tsx` 작업 시 자동 로드). 핵심만: 스포크는 반드시 `qa[]` 배열 구조(Format A), `function Content()`(Format B) 금지 — 위반 시 `check-spoke-quality.sh`가 push 차단. spoke 추가는 반드시 `data/spokes/registry.ts` 경유, `SpokeClient.tsx` 직접 수정 금지.

---

## 2. 키워드 → 페이지 자동 워크플로우

```
사용자: "근로장려금" 또는 /gov-write 근로장려금
   ↓
[Phase 0] 최신 데이터 검색 (WebSearch 3회)
[Phase 1] 정부 카드뉴스 자동 수집 (Claude in Chrome)
[Phase 2] 7유형 자동 분류 + Q1~Q4 사고
[Phase 3] 데이터 추출 → data/policies/{keyword}.ts 생성
[Phase 4] 와이어링 자동 (policies 객체·spokeLists·sitemap)
[Phase 5] 1:1 대조 검증 (scripts/verify-policy.ts)
[Phase 6] 사람 검증 (제시되는 차이점만 확인)
[Phase 7] git commit + push + Cloudflare 배포
```

상세 단계는 `.claude/skills/gov-write/SKILL.md` 참조.

---

## 2-B. 스포크 타이틀 → 스포크 작성 워크플로우 (요약)

전체 Step 0-7 절차(검색어 수집 스크립트/Playwright SERP 수확 방법, 타이틀 합성 세부 규칙)는 `.claude/skills/gov-write/SKILL.md` 참조. 핵심 순서만:
0) 공식 출처 확정(Playwright) → 1) `npx tsx scripts/collect-keywords.ts "{키워드}"`(자동완성) + Playwright로 네이버/구글 SERP PAA·연관검색어 직접 수확(생략 금지, 절대규칙 6) → 2) `docs/title-style-24.md` 정본 스타일로 타이틀 합성 → 3) 공식 홈페이지 Playwright 1:1 대조(절대규칙 7) → 4) 사용자 확인 후 Format A로 스포크 작성 → 5) `registry.ts` 등록 → 6) `data/policies/{slug}.ts` spokes 배열 업데이트 → 7) 품질 게이트 통과 후 push.

### 🚨 신규 스포크 필수 통과 게이트 (어기면 push 차단 — 실제로 당함)
1. **`qa[]` ≥ 7개**, `q:` 총합 ≥ 12개(qa 7 + faqData 5) — `check-spoke-quality.sh`가 검사.
2. **Format A 필수**(Format B 금지 — 상세 `.claude/rules/design-system.md`).
3. **export 이름 고유** — registry 기존 이름과 충돌 시 접두사 추가.
4. **manifest id 채번** — `PoliciesById` 최대 숫자 +1, 4개 맵(ById/BySlug × Policies/Spokes) 모두 등록.
5. **수치 내부 정합성** — 허브·스포크 반복 수치 전수 일치 (`grep -rn "<수치>"`로 확인).
6. **영문 slug 통일**(절대규칙 8) — spokes 배열 slug = registry 키 = 영문 lowercase-hyphen.
7. **타이틀 ↔ 본문 일치** — `bash scripts/check-title-body-match.sh {정책폴더}`로 검증, `[숫자]` 경고 반드시 해소.
8. **타이틀은 실제 포털 검색어 기반** — `collect-keywords.ts` 결과 없이 창작 금지, 스타일은 `docs/title-style-24.md`.

### 연관 키워드 묶음 규칙
같은 검색에서 함께 등장하는 유사 정책은 한 타이틀에 묶는다. 예: "장애인연금 vs 장애수당, 어떻게 다르고 중복되나" / "근로장려금 받는데 자녀장려금도 같이 신청되나". 상세 패턴 24개는 `docs/title-style-24.md` (`docs/spoke-title-guide.md`는 보조).

---

## 3~6. 정책 7유형·데이터 스키마·디자인 시스템·폴더 구조

- **정책 7유형 분류 + 데이터 스키마**(`PolicyData` 예시, source 1:1 매칭 규칙): `.claude/rules/policy-data-schema.md` — `data/policies/**` 작업 시 자동 로드.
- **디자인 시스템**(컬러 토큰·카드뉴스 비주얼 표준·페이지 구조·수정 금지 파일): `.claude/rules/design-system.md` — `components/**`, `app/**/*.tsx` 작업 시 자동 로드.
- **폴더 구조**: 코드베이스에서 직접 확인 (`app/`, `components/`, `data/policies/`, `lib/`, `scripts/`, `.claude/skills/gov-write/SKILL.md`).

---

## 7~8. 검증·워크플로우 명령어

- **1:1 소스 대조**(source.text가 실제 페이지에 있는지, cardIndex로 위치 특정, 불일치 시 RED 출력): `npx tsx scripts/verify-policy.ts {slug}`
- **구조·품질 체크**(Q1~Q10, §13): `npm run verify -- {정책명}` / `npm run verify -- --all` (`scripts/verify-quality.ts`, package.json에 등록됨)
- `git push` 전 pre-push hook에서 자동 실행됨.
- 신규 정책: `/gov-write 근로장려금` 또는 자연어 "근로장려금 만들어줘"
- 빌드·푸시: `npm run build` → `git add . && git commit -m "..." && git push` (또는 `push.bat`)

---

## 9. 콘텐츠 작성 금지·필수 사항

### 금지
- "민생에 플러스", "행정안전부" 등 정부 슬로건/부처 단독 표기
- 정부 로고, 태극기, 캐릭터 이미지
- "약 ", "정도", "대략" 등 추측 표현
- 가짜 수혜자 후기·임의 통계
- "1차 출처 미확인" 상태 푸시

### 필수
- 모든 페이지 하단 면책 문구: "본 사이트는 정부 공식 사이트가 아닙니다. 정보 출처는 [부처] 공식 자료입니다."
- 검수일 명시 (`마지막 검수: YYYY.MM.DD`)
- 에디터 표기: "정부지원사업 에디터 · [출처] 공식 자료 기반"
- 출처 URL 깊은 링크 (메인이 아닌 해당 정책 페이지)
- "최종 자격은 [정부 채널]에서 확인" 안내

---

## 11. 배포

- 도메인: gov.jjyu.co.kr (Cloudflare Pages) / GitHub: hyunjun82/jjyu-gov
- **push → Cloudflare 자동 빌드**. 별도 배포 명령 없음
- 정적 export(`output:'export'`)라 서버 기능·`redirects()` 안 먹는다 → 301은 `public/_redirects`만

---

## 12~13. 검증

**`verify` Skill 참조** — 실행 순서·자주 걸리는 함정(Q11 titleKeywords, Q2 글자수, Q12 정규식)이 거기 있다.

품질 기준 수치(Q1~Q13 항목·임계값)는 `scripts/verify-quality.ts`가 단일 진실 원천이다.
**문서에 복사해두지 않는다** — 과거 CLAUDE.md가 Q10을 잘못 적고 Q11~Q13을 누락해 스크립트와 어긋난 전력이 있다.

자동 검증으로 안 잡히는 항목만 사람이 확인:
```
[ ] 면책 문구 페이지 하단
[ ] JSON-LD 4종 (Article·Breadcrumb·FAQ·ItemList)
[ ] 모바일 반응형
[ ] applyUrl이 딥링크인가 (기관 메인 X — 절대규칙 1)
```

---

## 14. 기준 케이스 = 정부 공식 카드뉴스 원본

**진짜 기준은 정부 카드뉴스, 우리 데이터 파일이 아니다.** 신규 정책 작성 전 반드시 아래 두 폴더의 레퍼런스 이미지를 Read로 직접 본다 (생략 불가):
```
C:\Users\user\gov-jjyu\reference\cards\청년미래적금\01.jpg ~ 07.jpg  (savings 유형 기준)
C:\Users\user\gov-jjyu\reference\cards\고유가지원금\01.jpg ~ 08.jpg  (cash 유형 기준)
```
이 두 케이스보다 정보 깊이·시각 요소·정확도가 떨어지면 작성 금지. 카드 상세 내용·자가점검 수치 기준(Q&A/표/박스/형광강조 개수)·전체 Phase 0-7 실행 절차는 `docs/reference-card-baseline.md`와 `.claude/skills/gov-write/SKILL.md`에 있다.

절대 금지: 카드뉴스 원본 안 보고 작성 / 카드에 있는 수치 누락 / 카드에 없는 수치 추가 / 검증 통과 전 푸시.

