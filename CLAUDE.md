# gov-jjyu — 정부지원사업 자동화 시스템

> **목표**: 키워드 1개 입력 → 정부 카드뉴스 형식 콘텐츠 자동 생성 → 1:1 정부 자료 대조 검증 → 자동 빌드·푸시 → 라이브 배포

이 문서는 Claude가 이 프로젝트에 들어올 때 가장 먼저 읽는 마스터 컨텍스트다. 모든 작업의 기준점.

---

## 1. 절대 규칙 (어길 시 작업 중단)

1. **추정·예시 수치 절대 금지** — 모든 숫자는 정부 1차 출처에서만
2. **출처 명시 의무** — 모든 필드에 `source: { url, cardIndex, text, verifiedAt }`
3. **1:1 대조 검증 통과 전 푸시 금지** — `scripts/verify-policy.ts` PASS 필수
4. **정부 슬로건/로고/캐릭터 사용 금지** — "민생에 플러스" 등 정부 표어 X
5. **사용자 검증 후에만 푸시** — 자동 푸시 X, 반드시 사람 승인

### ⚠️ 스포크 Format B 절대 금지 (2026-05 근본 버그)

> **배경**: `function Content()` JSX 방식(Format B)으로 작성된 스포크는 SpokeClient.tsx의 `spoke.Content` 경로로 렌더링되어 QACard 컴포넌트를 완전히 우회한다. 결과: 번호배지·네이비헤더·핵심콕콕 박스가 없는 날것 JSX로 표시됨. 허브 페이지와 UI/UX가 완전히 다른 상태. 363개 파일이 이 방식으로 작성되어 전량 재작성 필요.

**스포크 파일 작성 시 유일한 올바른 형식 (Format A):**
```typescript
import type { SpokeData } from '../../SpokeClient';
export const XxxSpokeContent: SpokeData = {
  h1: '...',
  qa: [  // ← 반드시 qa[] 배열 7개
    { q: '...', anchor: '...', intro: '...', highlights: [...], table: {...}, box: {...} },
    // ...
  ],
  faqData: [...],  // 5개
  sources: [...],  // 3개 이상
};
```

**절대 금지 (Format B):**
```typescript
// ❌ 이 방식으로 절대 작성하지 말 것
function Content() { return (<> ... </>) }
export const XxxSpokeContent: SpokeData = { Content, faqData: [...] };
```

- `function Content()` 작성 금지
- SpokeData에 `Content` 프로퍼티 추가 금지
- `qa: [...]` 없는 스포크 파일 금지
- 위반 시 `check-spoke-quality.sh`가 Format B로 감지하고 push 차단

### ⚠️ 콘텐츠 오배치 방지 규칙 (2026-05 버그 재발 방지)

> **배경**: 홈 카드 dummy 숫자 ID와 manifest PoliciesById 숫자 ID가 불일치해 클릭 시 엉뚱한 정책이 표시되는 치명적 버그가 발생했다. 아래 규칙을 반드시 준수할 것.

6. **`app/page.tsx` FEATURED 배열에 slug + badge 만 추가** — title·org·amount·deadline 직접 하드코딩 절대 금지. 모든 정책 데이터는 `PoliciesBySlug[slug]` 에서 자동 조회됨.
7. **`app/policy/[id]/[spoke]/SpokeClient.tsx` 직접 수정 금지** — spoke 콘텐츠·매핑을 이 파일에 추가하지 말 것. 새 spoke 추가 시 반드시 `data/spokes/registry.ts` 에만 등록.
8. **spoke 추가 시 `data/spokes/registry.ts` 업데이트 필수** — 새 정책에 spoke 페이지를 만들 때: ① `app/policy/[id]/[spoke]/content/{policySlug}/{spokeSlug}.tsx` 생성 → ② `registry.ts` import 추가 → ③ `SpokesRegistry` 에 등록. 이 세 단계 중 하나라도 빠지면 spoke 페이지가 404.
9. **`related` 필드에 숫자 ID 사용 금지** — `data/policies/*.ts` 의 `related` 배열에는 반드시 slug 문자열 사용. 예: `{ id: 'youth-tomorrow-savings', title: '청년내일저축계좌' }`. 숫자 id 사용 시 관련 정책 링크가 잘못된 페이지로 이동.
10. **manifest 단일 소스 원칙** — 정책 ID·slug·title 등 메타데이터는 반드시 `data/policies/manifest.ts` 에서 조회. 앱 코드(page.tsx, Client 컴포넌트 등)에 정책명·금액·부처명 하드코딩 금지.

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

## 2-B. 스포크 타이틀 → 스포크 작성 워크플로우

```
사용자: "기초연금 스포크 써줘" 또는 "장애인연금 스포크 4개"
   ↓
[Step 1] Chrome — Google 검색: {키워드}
         수집: 자동완성 / PAA 질문 / 하단 관련검색어 8개 / 상위 블로그 제목
[Step 2] Chrome — Naver 검색: {키워드}
         수집: 연관검색어 / VIEW 상위 글 제목 / 지식iN 질문 제목
[Step 3] 수집된 실제 검색어 → 6개 패턴으로 타이틀 4개 작성
         ※ 패턴 F(시점+범위형) 최대 2개, 동일 패턴 연속 금지
         ※ 연도(2026)는 맨 앞에만 또는 생략
         ※ "총정리" 등 금지어 없음
[Step 4] 타이틀 사용자 확인 후 → 스포크 tsx 파일 4개 작성
[Step 5] registry.ts import + SpokesRegistry 등록
[Step 6] data/policies/{slug}.ts spokes 배열 업데이트
[Step 7] 사용자 git push --no-verify origin main
```

### 연관 키워드 묶음 규칙
같은 검색에서 함께 등장하는 유사 정책은 한 타이틀에 묶는다.
- 장애인연금 ↔ 장애수당 → "장애인연금 vs 장애수당, 어떻게 다르고 중복 되나"
- 근로장려금 ↔ 자녀장려금 → "근로장려금 받는데 자녀장려금도 같이 신청되나"
- 실업급여 ↔ 알바 → "실업급여 받으면서 알바 하면 신고해야 하나 | 소득 기준"

상세 패턴은 `docs/spoke-title-guide.md` 참조.

---

## 3. 정책 7유형 분류

| 유형 | 예시 | 표준 Q&A 7개 |
|---|---|---|
| `cash` | 고유가지원금·기초연금·부모급여 | 금액/누가/기간/방법/거동불편/중복/예외 |
| `savings` | 청년미래적금·청년도약계좌 | 매칭/조건/한도/만기/중도해지/세제/가입 |
| `loan` | 햇살론·새도약론 | 한도/금리/대상/상환/거치/은행/연체 |
| `service` | 아이돌봄·에너지바우처 | 서비스/대상/본인부담/한도/이용처/유효/신청 |
| `training` | 내일배움카드 | 금액/대상/기관/유효/실업급여/연장/신청 |
| `facility` | 장기요양·한부모시설 | 대상/등급/부담/시설/기간/신청/이의 |
| `tax` | 자녀세액공제 | 공제금액/대상/한도/요건/시기/소급/중복 |

자동 분류 로직: `lib/policy-types.ts`의 `TYPE_QUESTIONS` 참조.

---

## 4. 데이터 스키마 (1:1 대조 가능 구조)

```typescript
// data/policies/{keyword}.ts
export const 정책명Policy: PolicyData = {
  id: '3',
  type: 'cash',
  title: '2026 근로장려금',
  org: '국세청',

  // 모든 필드에 source 명시 — 자동 검증의 기준
  keyFacts: {
    지원유형: {
      value: '근로·사업소득에 따른 환급형 세액공제',
      source: {
        url: 'https://www.nts.go.kr/...',
        cardIndex: 1,
        text: '근로장려금은 근로·사업소득이 있는 가구에 환급',
        verifiedAt: '2026-05-13',
      },
    },
    최대지급액: {
      value: '단독가구 165만원',
      source: {
        url: 'https://www.nts.go.kr/...',
        cardIndex: 2,
        text: '단독가구 최대 165만원',
        verifiedAt: '2026-05-13',
      },
    },
    // ...
  },

  qa: [/* ... */],
  eligibility: [/* ... */],
  faq: [/* ... */],
  sources: [/* ... */],
};
```

모든 `value`는 `source.text`와 1:1 매칭되어야 한다.

---

## 5. 디자인 시스템

### 컬러 토큰 (`tailwind.config.ts`)
```
gov.navy: #003D88        — KRDS 표준 정부 블루
gov.orange: #F5A623      — 번호 배지
gov.highlight: #FFE873   — 형광 강조
gov.text: #191F28
gov.muted: #8B95A1
gov.border: #E5E8EB
```

### 카드뉴스 비주얼 표준
- 카드 헤더: 네이비 풀바, 22px bold 흰색 + 40px 오렌지 번호 배지
- 본문: 16px / line-height 1.8
- 핵심 단어: 노란 형광 강조 (`<Hi>` 컴포넌트)
- 카드 모서리: rounded-2xl (16px)
- 그림자: 0 4px 16px rgba(0, 61, 136, 0.08)

### 페이지 구조 (모든 정책 공통)
```
1. 헤더 (브레드크럼·제목·메타·에디터·CTA)
2. 접이식 목차 (7개 질문 · 기본 닫힘)
3. 핵심콕콕 (9행 키-값 · 노란 형광)
4. Q1~Q7 카드 (유형별 표준 질문)
5. FAQ (5개)
6. 출처 (정부 1차 자료 + 카드 인덱스)
7. 관련 정책
8. 사이드바 (스포크 9개)
```

---

## 6. 폴더 구조

```
app/
  layout.tsx                              ← 사이트 헤더·푸터
  page.tsx                                ← 홈
  policy/[id]/page.tsx                    ← 서버 컴포넌트 (얇음)
  policy/[id]/PolicyDetailClient.tsx      ← 클라이언트 (메인 렌더러)
  policy/[id]/[spoke]/                    ← 스포크 페이지
  og/[id]/route.tsx                       ← 자동 썸네일 (구현 예정)
  sitemap.ts                              ← 자동 sitemap

components/
  QACard.tsx                              ← 정부 카드뉴스 Q&A
  KeyFactsBox.tsx                         ← 핵심콕콕 박스
  CollapsibleTOC.tsx                      ← 접이식 목차
  PolicySidebar.tsx                       ← 스포크 사이드바

data/policies/
  {keyword}.ts                            ← 정책 데이터 (source 필드 포함)
  index.ts                                ← 정책 목록·메타

lib/
  policy-types.ts                         ← 7유형·TYPE_QUESTIONS·표준 스키마
  schema.ts                               ← JSON-LD 생성기
  verify.ts                               ← 자동 검증 (구현 예정)

scripts/
  collect-keywords.ts                     ← 검색어 수집 (이미 있음)
  extract-policy.ts                       ← 정부 자료 → JSON (구현 예정)
  verify-policy.ts                        ← 1:1 대조 검증 (구현 예정)
  generate-thumbnail.ts                   ← 썸네일 자동 (구현 예정)

.claude/
  skills/gov-write/SKILL.md               ← 메인 스킬 (워크플로우)
  hooks/                                  ← Stop 훅 (자동 검증)
  settings.json                           ← Claude 설정
```

---

## 7. 자동 1:1 대조 검증 시스템

### 스크립트: `scripts/verify-policy.ts`

```bash
# 단일 정책 검증
npm run verify -- 청년미래적금

# 전체 정책 검증
npm run verify -- --all
```

### 동작
1. `data/policies/{keyword}.ts` 로드
2. 모든 필드의 `source.url` Playwright로 접속
3. 카드뉴스 텍스트 추출 (`source.cardIndex`로 위치 특정)
4. `source.text`와 실제 페이지 텍스트 매칭
5. `value`와 매칭된 원본의 정보 일치 여부 확인
6. 불일치 발견 시 RED 출력 + 빌드 차단

### CI 통합
- `git push` 전 자동 실행 (pre-push hook)
- Cloudflare Pages 빌드 전 검증 (next.config.mjs)
- 매주 1회 cron으로 정부 자료 변경 감지 → 알림

---

## 8. 워크플로우 명령어

### 신규 정책 추가
```bash
# Claude Cowork에서
/gov-write 근로장려금

# 또는 자연어
"근로장려금 만들어줘"
```

### 단순 검증
```bash
npm run verify -- 청년미래적금
```

### 빌드·푸시
```bash
npm run build
git add . && git commit -m "feat: 근로장려금 추가" && git push
```

또는 `push.bat`

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

## 10. 우선순위 다음 작업

1. **`scripts/extract-policy.ts`** — 정부 카드뉴스 URL → JSON 자동 추출
2. **`scripts/verify-policy.ts`** — 1:1 대조 자동 검증
3. **`app/og/[id]/route.tsx`** — 디스커버 썸네일 자동 생성 (1080x1080)
4. **`app/sitemap.ts`** — 정책 추가 시 자동 등록
5. **데이터 스키마 마이그레이션** — 기존 청년미래적금에 `source` 필드 추가
6. **`.claude/hooks/`** — Stop 훅으로 자동 검증

---

## 11. 사이트 정보

- 도메인: gov.jjyu.co.kr (Cloudflare Pages)
- GitHub: hyunjun82/jjyu-gov
- 배포: GitHub push → Cloudflare 자동 빌드
- 빌드: Next.js 15 App Router + React 19 + Tailwind 3 + TypeScript 5
- 페이지 라우팅: /policy/[id] · /policy/[id]/[spoke]
- 핵심 컴포넌트: QACard · KeyFactsBox · CollapsibleTOC · PolicySidebar

---

## 12. 검수 표준 (모든 페이지 통과 필수)

```
[ ] 모든 수치가 정부 1차 출처와 100% 일치
[ ] 모든 필드에 source 명시 (url + text + verifiedAt)
[ ] 추정/예시 표현 0개
[ ] 출처 URL이 깊은 링크 (메인 X)
[ ] 면책 문구 페이지 하단
[ ] 검수일 표시
[ ] JSON-LD 4종 (Article·Breadcrumb·FAQ·ItemList)
[ ] 모바일 반응형 정상
[ ] 빌드 성공 (npm run build)
[ ] 1:1 대조 검증 통과 (npm run verify)
```

이 12개 모두 PASS 후에만 push.

---

## 13. 품질 기준 (정량 측정, 자동 검증)

신규 정책 작성 시 아래 10개 기준을 모두 충족해야 한다. 미달 시 작성자(Claude) 자동 재작성.

```
[Q1]  qa 배열 길이 ≥ 7
[Q2]  각 qa[i].intro 본문 길이 ≥ 200자
[Q3]  각 qa[i]에 시각 요소 ≥ 1개 (table, box, hasEligibilityChecker, hasApplyMethodTabs 중 하나)
[Q4]  qa 안 table 총 개수 ≥ 2
[Q5]  qa 안 box 총 개수 ≥ 3 (box + box2 모두 카운트)
[Q6]  qa 안 highlights 총 개수 ≥ 15 (각 qa[i].highlights 합계)
[Q7]  모든 keyFacts·qa·table·box에 source 또는 sourceNote 명시
[Q8]  faq 배열 길이 ≥ 5 (정부 자료 또는 PAA 기반)
[Q9]  sources 배열 길이 ≥ 3
[Q10] 정부 카드뉴스 텍스트와 1:1 매칭 (자동 검증 스크립트로 확인)
```

검증 명령:
```bash
npm run verify -- {정책명}
# 또는
npm run verify -- --all
```

검증 통과율 80% 미만이면 빌드·푸시 차단.

---

## 14. 기준 케이스 = 정부 공식 카드뉴스 원본

**진짜 기준은 정부 공식 카드뉴스. 우리 데이터 파일이 아님.**

### 기준 A — 청년미래적금 (savings 유형)
- 정부 자료: 금융위 카드뉴스 7장
- URL: https://www.fsc.go.kr/no040101?cnId=3187
- 발표일: 2026.04.24
- 카드 내용:
  - 카드 1: 표지 (청년미래적금 6월 출시 예정)
  - 카드 2: 매월 50만원, 3년 만기, 정부 기여금, 이자소득세 면제
  - 카드 3: 비대면 앱, 연 2회(6·12월), 자산형성 중복 OK
  - 카드 4: 만 19~34세 + 병역 6년 + 1991.1~5월 특례
  - 카드 5: 총급여 7,500만/연매출 3억 + 가구 중위 200%
  - 카드 6: 일반형 6% / 우대형 12% (4케이스)
  - 카드 7: 도약계좌 → 미래적금 갈아타기

### 기준 B — 고유가 피해지원금 (cash 유형)
- 정부 자료: 행정안전부 정책브리핑 카드뉴스 8장
- URL: https://www.korea.kr/multi/visualNewsView.do?newsId=148963017
- 발표일: 2026.04.20
- 카드 내용:
  - 카드 1: 표지
  - 카드 2: 지급 금액표 (소득×지역 4×3)
  - 카드 3: 우대지원지역 vs 특별지원지역 (89개 시군)
  - 카드 4: 사전 알림 (20개 앱 + 국민비서)
  - 카드 5: 신청 기간 (1차·2차) + 요일제
  - 카드 6: 누가 신청 (성인·미성년)
  - 카드 7: 거동 불편 시 찾아가는 신청
  - 카드 8: 1차 받으면 2차 신청 불가

### 작성 워크플로우 (필수 순서)

**Phase 0: 기준 케이스 강제 학습 (생략 불가)**

신규 정책 작성 전 반드시 다음 폴더의 이미지를 **모두 Read 도구로 직접 본다**:

```
C:\Users\user\gov-jjyu\reference\cards\청년미래적금\01.jpg ~ 07.jpg  (7장)
C:\Users\user\gov-jjyu\reference\cards\고유가지원금\01.jpg ~ 08.jpg  (8장)
```

확인할 것:
- 각 카드의 정보 분량 (텍스트 양)
- 표·그래프·박스 사용 패턴
- 형광 강조 단어 사용 빈도
- 정보 위계 (제목·핵심·디테일·주의사항)
- 시각 요소의 종류와 배치

**이 두 케이스보다 정보 깊이·시각 요소·정확도가 떨어지면 작성 X. 무조건 동등 또는 우수 품질이어야 함.**

**Phase 1~7 (이미지 학습 후)**

1. 신규 정책 키워드 확인
2. **정부 공식 카드뉴스 URL 찾기** (korea.kr 또는 부처 사이트)
3. **카드 한 장씩 캡처 + 텍스트 추출** (Claude in Chrome)
4. 우리 데이터 파일에 모든 정부 카드 내용 1:1 매칭으로 포함
5. 정부 카드뉴스에 있는데 우리 글에 빠진 정보 = 0 (완전 매칭)
6. 정부 카드뉴스에 없는 정보 추가 = 0 (추가 금지)
7. **기준 케이스 2개와 비교 자가 점검**:
   - Q&A 카드 수: 청년미래적금(7) / 고유가지원금(8) 이상
   - 표 개수: 청년미래적금(3) / 고유가지원금(3) 이상
   - 박스 개수: 청년미래적금(4) / 고유가지원금(3) 이상
   - 형광 강조: 청년미래적금(20+) / 고유가지원금(20+) 이상
   - 분량: 청년미래적금 본문 / 고유가지원금 본문 이상
8. `npm run verify` 실행
9. 기준 미달 시 정부 카드뉴스 원본 + reference 이미지 다시 확인 → 누락 항목 보강
10. 통과 시 푸시

### 1:1 매칭 검증 기준

신규 정책 데이터에 다음이 있어야 한다:
- 정부 카드뉴스 N장 → 우리 페이지 Q&A N개 이상
- 정부 카드의 모든 수치 → 우리 데이터에 동일 수치
- 정부 카드의 모든 표 → 우리 데이터에 동일 표 구조
- 정부 카드의 출처·발표일·부처 → 우리 페이지 출처 섹션
- 정부 카드 텍스트 90% 이상이 우리 페이지에 포함

### 절대 금지

- 정부 카드뉴스 원본 안 보고 일반 지식으로 작성 X
- 정부 카드에 있는 수치·정책 누락 X
- 정부 카드에 없는 수치·예시 추가 X
- 정부 카드보다 정보량 적게 X
- 검증 통과 전 푸시 X

