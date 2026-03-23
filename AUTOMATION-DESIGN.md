# gov-jjyu 허브스포크 자동화 워크플로우 설계서

## 1. 현재 구조 분석

### 파일 구조 (정책 1개당 생성되는 파일)
```
data/policies/{정책명}.ts          ← 허브 데이터 (Policy + Spokes 배열)
app/policy/[id]/page.tsx           ← 허브 렌더러 (공용, policies 객체에 추가)
app/policy/[id]/[spoke]/page.tsx   ← 스포크 렌더러 (공용, spokeMaps에 추가)
app/policy/[id]/[spoke]/content/{정책명}/{slug}.tsx  ← 스포크별 콘텐츠
```

### 허브 데이터 스키마 (TypeScript)
```ts
interface PolicyData {
  id: string;
  title: string;           // "2026 기초연금"
  slug: string;            // "기초연금"
  org: string;             // "보건복지부"
  cat: string;             // "지원금" | "환급금" | "대출"
  catSlug: string;         // "fund" | "refund" | "loan"
  amount: string;          // "월 최대 40만원"
  deadline: string;        // "상시" | "2026.06.30"
  views: number;
  applyUrl: string;
  datePublished: string;   // ISO 8601
  dateModified: string;
  summary: string;         // 2~3문장
  audience: string;        // "만 65세 이상, 소득하위 70%"
  details: { label: string; value: string }[];    // 8개 항목 고정
  eligibility: {                                   // 체커 질문 3~5개
    q: string;
    key: string;
    passTip: string;
    failTip: string;
  }[];
  incomeTable: { members: string; median: string; threshold: string }[];
  applySteps: { title: string; desc: string }[];  // 3~4단계
  documents: string[];
  related: { id: string; title: string; cat: string }[];
  faq: { q: string; a: string; source: string; sourceUrl: string }[];
}

interface SpokeItem {
  slug: string;
  title: string;
}
```

### 스포크 콘텐츠 스키마
```ts
interface SpokeData {
  h1: string;
  breadcrumb: string;
  description: string;     // meta description
  datePublished: string;
  dateModified: string;
  Content: React.ComponentType;  // JSX 본문
  faqData: { q: string; a: string; source: string; sourceUrl: string }[];
  sources: { name: string; url: string }[];
}
```

---

## 2. 자동화 파이프라인

### 전체 흐름
```
[입력: 키워드]
    │
    ▼
[STEP 1] 리서치 — 소스 URL 크롤링 + 정부 공식 데이터 수집
    │
    ▼
[STEP 2] 허브/스포크 설계 — 검색 의도 분석 → 스포크 토픽 자동 분류
    │
    ▼
[STEP 3] 허브 데이터 생성 — data/policies/{name}.ts
    │
    ▼
[STEP 4] 스포크 콘텐츠 생성 — content/{name}/{slug}.tsx × N개
    │
    ▼
[STEP 5] 와이어링 — page.tsx imports/spokeMaps 업데이트
    │
    ▼
[STEP 6] 검증 — 빌드 테스트 + 데이터 정합성 체크
```

---

## 3. 각 STEP 상세

### STEP 1: 리서치

**입력**: 키워드 (예: "근로장려금")

**동작**:
1. `data/policies/index.ts`에서 해당 정책의 `sourceUrl` 조회
2. sourceUrl (gonggam.korea.kr) 크롤링 → 원문 데이터 추출
3. 보조 소스 크롤링 (복지로, 정부24, 해당 부처 사이트)
4. 네이버/구글 "근로장려금" 연관검색어·자동완성 수집 → 스포크 후보

**출력**: 원시 데이터 JSON
```json
{
  "raw": "크롤링된 원문 텍스트",
  "officialData": { "지원대상": "...", "지원금액": "...", ... },
  "relatedQueries": ["근로장려금 신청방법", "근로장려금 지급일", ...],
  "peopleAlsoAsk": ["근로장려금 얼마 받나", ...]
}
```

### STEP 2: 허브/스포크 설계

**스포크 분류 원칙** (애드센스 RPM 극대화):

| 스포크 유형 | 역할 | CPC 기대값 | 예시 |
|---|---|---|---|
| **자격/조건** | 검색량 최대, 허브 체커로 유입 | 중 | "수급자격", "소득기준" |
| **금액/계산** | 계산기 임베드, 체류시간 ↑ | 중~고 | "금액 계산", "기여금 계산" |
| **vs 비교** | CPC 높은 비교 키워드 | 고 | "vs 희망적금", "vs 국민연금" |
| **방법/절차** | CTA 전환율 최고 | 중 | "신청방법", "필요서류" |
| **예외/특수** | 롱테일, 경쟁 낮음 | 중 | "집 있어도 되나", "소득없으면" |
| **시기/일정** | 시의성, 반복 트래픽 | 저~중 | "지급일", "신청기간" |

**자동 분류 로직**:
```
연관검색어 + PAA 수집
    → 의도 분류 (정보형/거래형/비교형)
    → 검색량 추정 (고/중/저)
    → 허브에 포함할 것 vs 스포크로 뺄 것 결정
    → 스포크 7~12개 확정
```

**핵심 규칙**:
- 허브는 텍스트 최소화, 체커·테이블·CTA로 구성
- 스포크에서 깊이 있는 답변 → 허브 체커로 유도
- 모든 스포크의 FAQ 중 1개는 반드시 허브 체커 링크 포함
- 광고 슬롯: 허브 3개, 스포크 2개 고정

### STEP 3: 허브 데이터 생성

**파일**: `data/policies/{정책명}.ts`

**자동 생성 항목**:

| 필드 | 생성 방식 |
|---|---|
| `id` | index.ts의 기존 id 또는 순번 자동 할당 |
| `title` | "2026 {정책명}" |
| `eligibility[]` | 리서치 데이터에서 조건 3~5개 추출 → 질문형 변환 |
| `incomeTable[]` | 소득/재산 기준표 자동 파싱 |
| `applySteps[]` | 신청절차 3~4단계 추출 |
| `faq[]` | 스포크 연결용 FAQ 5개 (각 sourceUrl → 스포크 slug) |
| `details[]` | 8개 항목 고정 (지원대상/제외대상/지원유형/지원금액/소득기준/신청방법/신청시기/문의처) |

**체커 질문 설계 원칙**:
1. 첫 질문 = 가장 많은 사람이 "예"로 답할 수 있는 것 (이탈률 ↓)
2. 마지막 질문 = 가장 까다로운 조건 (체류시간 ↑)
3. passTip = 안심 메시지 (1줄)
4. failTip = 예외사항 안내 + 스포크 링크 유도

### STEP 4: 스포크 콘텐츠 생성

**파일**: `app/policy/[id]/[spoke]/content/{정책명}/{slug}.tsx`

**콘텐츠 구조 (고정 템플릿)**:
```tsx
// 1. 빠른 답변 박스 (answer-box) — 검색 스니펫 최적화
// 2. 서론 1문단 — 공감형 질문으로 시작
// 3. H2 섹션 3~5개 — 핵심 정보
//    ├── compare-table (비교형일 때)
//    ├── warning-box (주의사항)
//    └── ad-slot (섹션 2~3 사이)
// 4. 결론 — 허브 체커 CTA 유도
```

**허브 유도 장치 (모든 스포크에 자동 삽입)**:
```tsx
{/* 본문 중간 */}
<div className="hub-cta-inline">
  내가 {정책명} 대상자인지 궁금하다면 →
  <Link href={`/policy/${id}#eligibility`}>30초 자격확인</Link>
</div>

{/* 본문 하단 (이미 존재하는 구조) */}
<Link href={`/policy/${id}#eligibility`} className="btn-cta">
  내가 대상자인지 30초 확인
</Link>
```

**FAQ 생성 규칙**:
- 스포크당 3~5개
- 1개는 반드시 허브 링크 (`/policy/{id}#eligibility`)
- 1개는 반드시 다른 스포크 링크 (내부 순환)
- Google FAQPage schema 자동 생성됨 (기존 lib/schema.ts 활용)

### STEP 5: 와이어링

**수정 대상 파일 3개**:

#### 5-1. `app/policy/[id]/page.tsx`
```ts
// 1. import 추가
import { {정책명}Policy, {정책명}Spokes } from '@/data/policies/{정책명}';

// 2. policies 객체에 추가
const policies: Record<string, any> = {
  '1': policy1,
  '2': 기초연금Policy,
  '{newId}': {정책명}Policy,  // ← 추가
};

// 3. spokeLists에 추가
const spokeLists = {
  '1': [...],
  '2': 기초연금Spokes,
  '{newId}': {정책명}Spokes,  // ← 추가
};
```

#### 5-2. `app/policy/[id]/[spoke]/page.tsx`
```ts
// 1. 스포크 콘텐츠 import 추가
import { {Slug}SpokeContent } from './content/{정책명}/{slug}';

// 2. spokeMaps에 추가
const spokeMaps = {
  ...existing,
  '{newId}': {
    '{slug1}': {Slug1}SpokeContent,
    '{slug2}': {Slug2}SpokeContent,
    ...
  },
};

// 3. policyTitles에 추가
const policyTitles = {
  ...existing,
  '{newId}': '{정책명}',
};
```

#### 5-3. `app/policy/[id]/layout.tsx`
```ts
// policyMap에 추가
const policyMap = {
  ...existing,
  '{newId}': {
    title: '2026 {정책명}',
    summary: '...',
    org: '...',
    amount: '...',
    deadline: '...',
  },
};
```

### STEP 6: 검증

```bash
# 1. TypeScript 컴파일 체크
npx tsc --noEmit

# 2. 빌드 테스트
npm run build

# 3. 데이터 정합성
# - 모든 스포크 slug가 spokeMaps에 매핑되어 있는지
# - FAQ sourceUrl이 실제 스포크 경로와 일치하는지
# - eligibility 질문 개수 ≥ 3
# - 광고 슬롯 개수: 허브 3, 스포크 2
```

---

## 4. 실행 방식: Cowork 스킬로 구현

### 스킬 트리거
```
사용자: "근로장려금 만들어줘"
사용자: "{정책명} 허브스포크"
사용자: "new-05 빌드"
```

### 스킬 실행 흐름
```
1. 키워드 → index.ts에서 정책 매칭
2. sourceUrl 크롤링
3. 연관검색어/PAA 수집
4. 허브 데이터 생성 → data/policies/{name}.ts
5. 스포크 설계 (7~12개)
6. 스포크 콘텐츠 생성 (병렬)
7. page.tsx / [spoke]/page.tsx / layout.tsx 와이어링
8. tsc --noEmit 검증
9. index.ts status → 'published'
```

### 예상 소요: 정책 1개당 ~15분

---

## 5. 애드센스 수익 극대화 설계

### 광고 슬롯 배치 전략

**허브 페이지 (3슬롯)**:
```
[체커 섹션] ← 사용자 인터랙션 최대 구간
[광고 1] ← 체커 완료 후 자연스러운 시선 이동
[중위소득 테이블]
[광고 2] ← 정보 소화 후
[신청방법]
[광고 3] ← FAQ 진입 전
[FAQ]
```

**스포크 페이지 (2슬롯)**:
```
[답변박스 + 서론]
[H2 섹션 1~2]
[광고 1] ← 본문 중간
[H2 섹션 3~4]
[광고 2] ← FAQ 전
[FAQ]
[허브 유도 CTA]
```

### CTR 최적화 포인트

| 요소 | 전략 |
|---|---|
| 체커 | Yes/No 인터랙션 → 체류시간 3분+ → RPM ↑ |
| 답변박스 | 검색 스니펫 노출 → CTR ↑ → 유입 ↑ |
| 내부링크 | 스포크→허브, 스포크→스포크 순환 → 페이지뷰/세션 ↑ |
| FAQ | FAQPage schema → 검색 점유 면적 ↑ |
| CTA | "30초 자격확인" → 허브 재방문 → 광고 노출 2배 |

### CPC 높은 스포크 우선순위
1. **비교형** ("vs", "차이") — 금융 상품 비교 CPC $1~3
2. **계산형** ("계산", "얼마") — 계산기 도구 체류시간 5분+
3. **신청형** ("신청방법", "서류") — 전환 의도 높음
4. **예외형** ("~해도 되나", "~없으면") — 롱테일, 경쟁 낮음

---

## 6. 스케일링 로드맵

### Phase 1: 수동 + 스킬 보조 (현재)
- 키워드 입력 → 스킬이 데이터 파일 + 스포크 콘텐츠 자동 생성
- 사람이 검수 후 커밋

### Phase 2: 반자동 배치
- 카테고리별 일괄 생성 (예: "어르신" 카테고리 20개 한번에)
- CI/CD 파이프라인: PR 자동 생성 → 검수 → 머지

### Phase 3: 완전 자동
- 정책 변경 감지 (gonggam.korea.kr RSS/크롤링)
- dateModified 자동 업데이트
- 신규 정책 자동 draft 생성 → 알림

---

## 7. 즉시 실행 가능한 다음 단계

1. **이 설계를 기반으로 Cowork 스킬 (`gov-write`) 생성**
   - SKILL.md에 위 파이프라인 전체 인코딩
   - 트리거: 정책명 또는 ID 입력

2. **첫 번째 테스트 정책 선정**
   - 추천: `vuln-01` 근로장려금·자녀장려금 (검색량 최상위)
   - 또는: `new-05` 청년미래적금 (신규 정책, 경쟁 낮음)

3. **page.tsx 리팩토링** (선택)
   - 현재 policy1 데이터가 page.tsx에 하드코딩 → 별도 파일로 분리
   - 동적 import로 전환하면 와이어링 자동화가 더 쉬워짐
