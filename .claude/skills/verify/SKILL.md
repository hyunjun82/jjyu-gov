---
name: verify
description: 콘텐츠·배선 품질 검증 파이프라인. data/policies/*.ts 또는 스포크를 작성·수정한 뒤, push 전에 무엇을 어떤 순서로 돌리고 실패를 어떻게 읽는지. 품질 기준 수치가 필요할 때도 이 문서를 본다.
---

# 검증 파이프라인

**스크립트가 단일 진실 원천이다.** 기준 수치를 문서에 복사해두면 스크립트와 어긋난다(실제로 어긋난 전력이 있다 — 아래 §함정).

## 순서

```bash
npm run verify -- {slug}          # ① 콘텐츠 품질 Q1~Q13
bash scripts/check-title-body-match.sh {slug}   # ② 타이틀↔본문 일치
npx tsx scripts/verify-integrity.ts --strict    # ③ 허브·매니페스트 배선
NODE_ENV=production npm run build               # ④ 빌드 (5,500+ 페이지, 5~7분)
```

전체 재검사는 `npm run verify -- --all` (680개, 약 3분).

## ① npm run verify

`scripts/verify-quality.ts` 가 Q1~Q13을 검사한다. **항목과 임계값은 스크립트에서 직접 읽어라** — 여기 옮겨 적지 않는다.

```bash
grep -oE "id: 'Q[0-9]+', label: '[^']+'" scripts/verify-quality.ts
```

- 통과 기준: **13개 중 80% 이상**이면 `PASS` (`verify-quality.ts:189`)
- 목표는 100%. 오늘까지 680개 전부 13/13이다
- `--all` 은 하나라도 80% 미만이면 exit 1

## ② check-title-body-match.sh

타이틀 키워드가 본문에 실제로 등장하는지 본다. `[숫자]` 경고는 반드시 해소.
휴리스틱이라 활용형·표기차로 오탐이 난다 — 표시된 항목을 직접 열어 확인한다.

## ③ verify-integrity.ts

고아 허브·매니페스트 불일치를 잡는다. **pre-push hook에서 자동 실행**되므로 여기서 실패하면 push 자체가 막힌다.

## ④ 빌드

`next.config`가 타입 검사를 건너뛰므로 `npx tsc --noEmit` 에러는 대부분 기존 문제다.
내가 고친 파일에 에러가 있는지만 확인하면 된다.

---

# 자주 걸리는 함정

## Q11 (title keywords in body)

`titleKeywords.k1~k4` 는 **본문(`qa[].q` + `qa[].intro` + `faq[]`)에 그대로 등장하는 문자열**이어야 한다.

- ❌ `summary`·`keyFacts.source.text` 에서 따오면 실패 — 이 필드들은 스캔 대상이 아니다
- ❌ 괄호·따옴표·띄어쓰기 하나만 달라도 실패
- ✅ 본문에서 문장을 그대로 복사해 붙인다

**타이틀을 바꾸면 titleKeywords도 같이 고쳐야 한다.** 본문은 안 건드려도 된다.

## Q2 (intro 200자)

`.length` 그대로 센다. HTML·공백 정규화 없음. **눈으로 재지 말고 측정하라**:

```bash
node -e "
const c=require('fs').readFileSync('data/policies/{slug}.ts','utf8');
const m=c.match(/anchor: '{anchor}',\n      intro: '([^']+)'/);
console.log(m ? m[1].length : 'NOT FOUND');
"
```

체감상 충분해 보여도 190자대인 경우가 많다.

## Q12 (추측 표현 금지)

정규식이 좁다 — 오탐을 피하려고 이렇게 짜여 있다:
- `/약\s*\d/` → **숫자 바로 앞의 "약"만** 걸린다 ("약 400만원" ❌ / "계약" ✅)
- `/\s정도\s/` → **앞뒤가 공백일 때만** ("어느 정도 마련" ❌ / "정도의" ✅)

걸리면 표현을 바꾼다: `약 400만원` → `400만원가량`

## Q10 — 문서와 어긋났던 항목

`CLAUDE.md`가 한때 Q10을 "정부 카드뉴스 1:1 매칭"으로, Q11~Q13은 아예 없는 것으로 적어두고 있었다.
**실제 Q10은 `keyFacts` 개수 ≥ 9**다. 스크립트를 믿어라.

## verify-policy.ts

export 이름 규칙이 안 맞아 실패한다(`youth-driver-license-subsidyPolicy` 로 찾음).
`npm run verify`(verify-quality)와 다른 스크립트다. 혼동 주의.

---

# push 전 체크

```bash
npx tsx scripts/verify-integrity.ts --strict   # 배선
NODE_ENV=production npm run build              # 빌드
git add {변경파일 경로 나열}                    # -A / . 금지
git commit -m "..."
git push origin main                            # hook이 integrity+spoke 재검사
```

`git add -A` 나 `git add .` 는 쓰지 않는다 — 루트에 로그·이미지 등 미추적 파일이 다수 있다.
