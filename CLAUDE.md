# gov-jjyu — 정부지원사업 자동화

> spec(타이틀·소제목·1차 출처 URL) → 수집 → 사실 → 작성 → 코드 대조·합격 시험 → 사람 승인 후 푸시.
> 세부 규칙은 여기 적지 않는다 — 코드가 강제하고, 이 파일은 색인이다. (상한 80줄, pre-push가 차단)

## 시스템 = scripts/gov (2026-09-23 전환 — 판정은 전부 코드, 모델은 사실 뽑기·작성 두 번만)

```
spec  scripts/specs/{주제}.md — slug: cat: catSlug: title: sub:(정확히 4줄) source:(1차 출처) button:(버튼 목적지)
① 수집 collect.mjs   Playwright: 본문·표(행·열)·iframe(법령)·PDF(PDF.js)·이미지 크롭·행동 링크. 시민기자·블로그 자동 제외
② 사실 모델 → facts.json(30개 이내) → verify-facts.mjs: 인용=원문 글자 그대로, 값 숫자⊂인용, 이미지 두 번 읽기,
       한정 표현(계획·예정·선착순·필수·불가…)은 keepWord(살림)/keepWhy(안 살리는 이유) 판단 필수
③ 작성 모델 → data/policies/{slug}.ts — 소제목 4·FAQ 2, 카드 = 소제목→버튼→표(3열 이하)→텍스트
④ 대조 check-article.mjs: 숫자·단위·금액 이름표·범위어·범위 순서·한정 표현·필수·표·구성 → 틀린 곳만 고침(2회)
⑤ 시험 test-mutations.mjs: 오차 10종을 자동으로 넣어 전부 잡아야 통과 → 보고서 scripts/reports/{slug}.md
```

실행: `node scripts/gov/run.mjs scripts/specs/{주제}.md` (약 9분, 중간 개입 없음). 모델 호출은 저장소 밖에서 한다(옛 규칙 차단).
- 한 편짜리: 타이틀·소제목은 내가 네이버 자동완성 + 행동 키워드로 짓는다. 허브·스포크 확장: 사장님 spec 글자 그대로.
- 스포크 쓰기는 아직 옛 `npm run article`(이관 전). 옛 글은 건드리지 않는다.
- push는 `.githooks/pre-push`가 막는다. facts.json 이 있는 글은 원문 대조 게이트가 새 검사기로 넘긴다.

## 절대 규칙 (기계가 못 잡는 것만)

1. **추정·예시 수치 금지** — 모든 숫자는 1차 출처에서만. 블로그·언론을 1차처럼 인용 금지.
2. **단일 공식 페이지도 맹신 금지** — 수치는 2개 이상 출처 교차 + 계산 정합성 검산(정부 페이지에도 오타 있다: worklife 350↔400만, 보도자료 "싱씽몰").
3. **사람 승인 후에만 푸시** — 자동 푸시 금지.
4. **정부 슬로건·로고·캐릭터 금지**, 가짜 후기·임의 통계 금지.
5. 봇 차단 사이트(nhis 등) 접근 폴백: Claude in Chrome → law.go.kr/easylaw → korea.kr/보도자료 PDF → 그래도 없으면 "공식 채널 확인" 안내. "접근 불가"는 거의 없다.
6. 검증 못 한 항목은 본문에 쓰지 말고 팩트시트 "쓰지 않는 것"에 사유와 함께 기록.
7. **사장님이 준 타이틀·소제목은 글자 그대로** — 어색해 보여도 그대로. 문제는 보고서 메모 한 줄로만.

## 정본 색인 (규칙의 단일 소스 — 여기 복사 금지)

| 무엇 | 어디 (자동 로드/강제) |
|---|---|
| 타이틀·소제목 = spec 그대로 | `.claude/rules/title-workflow.md` (policy 파일 작업 시 자동) |
| 문구·버튼 6단계 흐름 | `.claude/rules/action-copy.md` (버튼 슬롯은 `scripts/new-spoke.ts` 가 잡는다) |
| 데이터 스키마·7유형 | `.claude/rules/policy-data-schema.md` |
| 디자인·Format A | `.claude/rules/design-system.md` + `scripts/check-type-shape.ts` |
| 빌드·404 진단 | `.claude/rules/build-deploy.md` |
| 새 글 품질 = 코드 대조 | `scripts/gov/check-article.mjs` + `verify-facts.mjs` (검사기를 고치면 `test-mutations.mjs` 로 다시 시험) |
| 옛 글 품질 = 원문 대조 | `scripts/check-source-match.ts` (단위 붙은 숫자만 센다 — 새 글에 쓰지 않는다) |
| **게이트 만들 때 반드시** | `scripts/lib/evidence.ts` — 근거는 `evidenceFor()` 로만 찾고, `judgeable(f, 만든날)` 로 옛 글은 심판하지 않는다 (게이트마다 다르게 찾으면 판정이 갈리고, 소급 차단하면 사람이 게이트를 끈다) |
| push 게이트 진본 | `.githooks/pre-push` (core.hooksPath) |
| 파이프라인 사전 검사 | `scripts/lib/article-check.mjs` (설계도·초안을 파일에 쓰기 전에 잡는다) |
| 후킹 4축 (서론·cue 용) | `docs/hook-patterns.md` |
| 버튼 문구 정본 | `docs/button-copy.md` |
| 기준 카드뉴스(작성 전 Read 필수) | `reference/cards/청년미래적금/` · `reference/cards/고유가지원금/` (`docs/reference-card-baseline.md`) |

## 배포·필수 표기

- gov.jjyu.co.kr (Cloudflare Pages, push→자동 빌드) / GitHub: hyunjun82/jjyu-gov
- 정적 export라 redirects() 무효 — 301은 `public/_redirects`만. URL은 영문 lowercase-hyphen만.
- 페이지 필수: 면책 문구 · 검수일 · 에디터 표기 · 출처 딥링크 · "최종 자격은 공식 채널 확인".
