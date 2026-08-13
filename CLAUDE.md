# gov-jjyu — 정부지원사업 자동화

> 키워드 1개 → 캡처 보고 타이틀 → 구성표 승인 → Playwright 대조 작성 → 검증 → 사람 승인 후 푸시.
> 세부 규칙은 여기 적지 않는다 — 훅과 게이트가 강제하고, 이 파일은 색인이다. (상한 80줄, pre-push가 차단)

## 시스템 = 4단계 (이게 전부)

```
시작:  npx tsx scripts/write.ts "{키워드}"     ← 어느 단계인지·다음 할 일을 알려준다
1 타이틀   reference/titles/ 캡처를 Read → 실검색어(collect-keywords) 조각으로만 조립
2 구성표   hero서론+소제목+버튼문구·목적지 → 채팅에 올려 승인받고 멈춤 (본문 금지)
3 사실     Playwright로 1차 출처 열고 텍스트+화면캡처 대조 → 팩트시트
4 마무리   npx tsx scripts/write.ts "{키워드}" --final  (게이트 11종 일괄) → 커밋
```

건너뛰면 훅(`require-title-log.mjs`)이 저장을 막고, push는 `.githooks/pre-push`가 막는다.
⚠ 수집만으로 끝나지 않는다 — **원문에 있는데 글에 없는 항목**(이벤트·단서·고유명)이 최다 실수. 옮겨 적은 뒤 원문과 역방향 대조.

## 절대 규칙 (기계가 못 잡는 것만)

1. **추정·예시 수치 금지** — 모든 숫자는 1차 출처에서만. 블로그·언론을 1차처럼 인용 금지.
2. **단일 공식 페이지도 맹신 금지** — 수치는 2개 이상 출처 교차 + 계산 정합성 검산(정부 페이지에도 오타 있다: worklife 350↔400만, 보도자료 "싱씽몰").
3. **사람 승인 후에만 푸시** — 자동 푸시 금지.
4. **정부 슬로건·로고·캐릭터 금지**, 가짜 후기·임의 통계 금지.
5. 봇 차단 사이트(nhis 등) 접근 폴백: Claude in Chrome → law.go.kr/easylaw → korea.kr/보도자료 PDF → 그래도 없으면 "공식 채널 확인" 안내. "접근 불가"는 거의 없다.
6. 검증 못 한 항목은 본문에 쓰지 말고 팩트시트 "쓰지 않는 것"에 사유와 함께 기록.

## 정본 색인 (규칙의 단일 소스 — 여기 복사 금지)

| 무엇 | 어디 (자동 로드/강제) |
|---|---|
| 타이틀·구성표·버튼슬롯[2,4,끝] | `.claude/rules/title-workflow.md` (policy 파일 작업 시 자동) |
| 문구·버튼 6단계 흐름 | `.claude/rules/action-copy.md` + `check-cue-value.ts` |
| 데이터 스키마·7유형 | `.claude/rules/policy-data-schema.md` |
| 디자인·Format A | `.claude/rules/design-system.md` + `check-spoke-quality.sh` |
| 빌드·404 진단 | `.claude/rules/build-deploy.md` |
| 품질 임계값 Q1~Q13 | `scripts/verify-quality.ts` (문서 복사 금지) |
| push 게이트 12단 진본 | `.githooks/pre-push` (core.hooksPath) |
| 저장 차단 훅 | `scripts/hooks/require-title-log.mjs` + `title-log-rule.mjs` |
| 타이틀 스타일·KB 패턴 | `docs/title-style-24.md` · `docs/title-corpus-kb.md` |
| 후킹 4축 | `docs/hook-patterns.md` |
| 버튼 문구 정본 | `docs/button-copy.md` |
| 키워드 선정 4축 | `scripts/keyword-checklist.ts` |
| 기준 카드뉴스(작성 전 Read 필수) | `reference/cards/청년미래적금/` · `reference/cards/고유가지원금/` (`docs/reference-card-baseline.md`) |

## 배포·필수 표기

- gov.jjyu.co.kr (Cloudflare Pages, push→자동 빌드) / GitHub: hyunjun82/jjyu-gov
- 정적 export라 redirects() 무효 — 301은 `public/_redirects`만. URL은 영문 lowercase-hyphen만.
- 페이지 필수: 면책 문구 · 검수일 · 에디터 표기 · 출처 딥링크 · "최종 자격은 공식 채널 확인".
