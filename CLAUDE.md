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
