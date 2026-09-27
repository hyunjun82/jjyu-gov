---
paths:
  - "data/policies/**"
---

> 글 작성 절차(수집·사실·작성·대조)는 CLAUDE.md 의 scripts/gov 파이프라인이 정본이다. 이 파일은 화면·데이터 규칙만 다룬다.

# 정책 데이터 스키마 (1:1 대조 가능 구조)

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

## 글 구성

새 글은 소제목 4개(spec 순서 그대로)·FAQ 2개 — `scripts/gov/check-article.mjs` 가 강제한다. 새 허브의 `type` 은 파이프라인이 `'service'` 로 고정한다. 옛 글은 그대로 둔다.

## 콘텐츠 오배치 방지 규칙

- **`app/page.tsx` FEATURED 배열에 slug + badge 만 추가** — title·org·amount·deadline 직접 하드코딩 절대 금지. 모든 정책 데이터는 `PoliciesBySlug[slug]`에서 자동 조회됨.
- **`related` 필드에 숫자 ID 사용 금지** — `data/policies/*.ts`의 `related` 배열에는 반드시 slug 문자열 사용.
- **manifest 단일 소스 원칙** — 정책 ID·slug·title 등 메타데이터는 반드시 `data/policies/manifest.ts`에서 조회. 앱 코드에 정책명·금액·부처명 하드코딩 금지.
