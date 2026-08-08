---
paths:
  - "data/policies/**"
---

## ⚠ 글을 쓰기 전 — gov 시스템 4단계 (2026-08-08 확정)

```
1. reference/titles 캡처를 Read 한다 → 타이틀
   대출 타이틀.png / 보험타이틀.png / 생활타이틀.png / 세금 타이틀.png / 연금 타이틀.png
2. 구성표를 만들어 승인받는다 (hero+상단버튼 / 소제목 몇 개 / 버튼 슬롯)
   ★ 이때 버튼 목적지(딥링크)를 Playwright 로 먼저 연다.
     로그인·인증이 걸리는지, 세션 토큰이 붙어 못 박는 URL인지까지 확인.
     목적지가 확정되기 전에는 버튼 문구를 쓰지 않는다.
3. Playwright 로 1차 출처 텍스트 + 이미지 캡처 → 사실 확정 (팩트시트)
4. 그 사실로 타이틀 → 서론·버튼 문구 → 본문 (서론은 타이틀 항목을 풀버전으로 편다)
```

- **소제목 개수는 타이틀이 정한다.** 고정 7개 아님(2026-08-08 하한 3으로 변경)
- **버튼은 qa 인덱스 2·4·마지막에만 렌더**된다 (`SpokeClient.tsx` 171행)
- **행동(청구 방법)은 최상단** — Clarity 실측 상단 50~57% / 중간 0~1클릭
- 소제목 문구는 `collect-keywords` 로 수집한 **실검색어 그대로**
- 전문: `.claude/rules/title-workflow.md`



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

## 정책 7유형 분류

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

## 콘텐츠 오배치 방지 규칙

- **`app/page.tsx` FEATURED 배열에 slug + badge 만 추가** — title·org·amount·deadline 직접 하드코딩 절대 금지. 모든 정책 데이터는 `PoliciesBySlug[slug]`에서 자동 조회됨.
- **`related` 필드에 숫자 ID 사용 금지** — `data/policies/*.ts`의 `related` 배열에는 반드시 slug 문자열 사용.
- **manifest 단일 소스 원칙** — 정책 ID·slug·title 등 메타데이터는 반드시 `data/policies/manifest.ts`에서 조회. 앱 코드에 정책명·금액·부처명 하드코딩 금지.
