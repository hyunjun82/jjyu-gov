---
paths:
  - "components/**"
  - "app/**/*.tsx"
---

# 디자인 시스템

## 컬러 토큰 (`tailwind.config.ts`)
```
gov.navy: #003D88        — KRDS 표준 정부 블루
gov.orange: #F5A623      — 번호 배지
gov.highlight: #FFE873   — 형광 강조
gov.text: #191F28
gov.muted: #8B95A1
gov.border: #E5E8EB
```

## 카드뉴스 비주얼 표준
- 카드 헤더: 네이비 풀바, 22px bold 흰색 + 40px 오렌지 번호 배지
- 본문: 16px / line-height 1.8
- 핵심 단어: 노란 형광 강조 (`<Hi>` 컴포넌트)
- 카드 모서리: rounded-2xl (16px)
- 그림자: 0 4px 16px rgba(0, 61, 136, 0.08)

## 페이지 구조 (모든 정책 공통)
1. 헤더 (브레드크럼·제목·메타·에디터·CTA)
2. 접이식 목차 (7개 질문 · 기본 닫힘)
3. 핵심콕콕 (9행 키-값 · 노란 형광)
4. Q1~Q7 카드 (유형별 표준 질문)
5. FAQ (5개)
6. 출처 (정부 1차 자료 + 카드 인덱스)
7. 관련 정책
8. 사이드바 (스포크 9개)

## 핵심 컴포넌트
- `QACard.tsx` — 정부 카드뉴스 Q&A (Format A 필수, `function Content()` 금지 — 상세는 프로젝트 CLAUDE.md 참조)
- `KeyFactsBox.tsx` — 핵심콕콕 박스
- `CollapsibleTOC.tsx` — 접이식 목차
- `PolicySidebar.tsx` — 스포크 사이드바

## 수정 금지 파일
- **`app/policy/[id]/[spoke]/SpokeClient.tsx` 직접 수정 금지** — spoke 콘텐츠·매핑을 이 파일에 추가하지 말 것. 새 spoke 추가 시 반드시 `data/spokes/registry.ts`에만 등록.
- spoke 추가 3단계: ① `app/policy/[id]/[spoke]/content/{policySlug}/{spokeSlug}.tsx` 생성 → ② `registry.ts` import 추가 → ③ `SpokesRegistry`에 등록. 하나라도 빠지면 404.

## 스포크 Format A만 허용 (Format B 절대 금지)

> 배경(2026-05): `function Content()` JSX 방식(Format B)은 `spoke.Content` 경로로 렌더링되어 QACard를 완전히 우회 — 번호배지·네이비헤더·핵심콕콕 박스 없이 날것 JSX로 표시됨. 363개 파일이 이 방식이라 전량 재작성해야 했음.

```typescript
// ✅ Format A — 유일한 올바른 형식
import type { SpokeData } from '../../SpokeClient';
export const XxxSpokeContent: SpokeData = {
  h1: '...',
  qa: [ /* ≥7개: { q, anchor, intro, highlights, table?, box? } */ ],
  faqData: [...],  // 5개
  sources: [...],  // 3개 이상
};
```
```typescript
// ❌ Format B — 절대 금지
function Content() { return (<> ... </>) }
export const XxxSpokeContent: SpokeData = { Content, faqData: [...] };
```
`function Content()` 작성 금지, `SpokeData`에 `Content` 프로퍼티 추가 금지, `qa: [...]` 없는 스포크 금지. 위반 시 `check-spoke-quality.sh`가 pre-push에서 차단.

## 콘텐츠 오배치 방지 (2026-05 버그 재발 방지)

> 배경: 홈 카드 dummy 숫자 ID와 manifest `PoliciesById` 숫자 ID 불일치로 클릭 시 엉뚱한 정책이 표시된 사고 발생.

- **`app/page.tsx` FEATURED 배열엔 slug + badge만** — title·org·amount·deadline 하드코딩 금지. `PoliciesBySlug[slug]`에서 자동 조회.
- **`related` 필드는 반드시 slug 문자열** — 숫자 id 금지 (예: `{ id: 'youth-tomorrow-savings', title: '청년내일저축계좌' }`).
- **manifest 단일 소스 원칙** — 정책 메타데이터는 `data/policies/manifest.ts`에서만 조회, 앱 코드에 하드코딩 금지.
