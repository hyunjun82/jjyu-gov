#!/bin/bash
# pre-push hook: ① 배선 무결성(고아 허브·매니페스트) ② 스포크 품질 미달 시 push 차단
ROOT="$(git rev-parse --show-toplevel)"

# ── ① 배선 무결성 게이트 (registry↔manifest 고아 검출) ──
echo "🔗 배선 무결성 검증 중 (고아 허브·매니페스트 정합)..."
npx tsx "$ROOT/scripts/verify-integrity.ts" --strict
INTEG=$?
if [ $INTEG -ne 0 ]; then
  echo ""
  echo "🚫 push 차단됨 — 배선 오류(고아 허브 등). 허브 데이터파일+manifest 배선을 맞춘 뒤 재push"
  echo "   (무시하려면: git push --no-verify)"
  exit $INTEG
fi

# ── ② 스포크 품질 게이트 ──
echo "🔍 스포크 품질 검증 중..."
bash "$ROOT/scripts/check-spoke-quality.sh"
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
  echo ""
  echo "🚫 push 차단됨 — 위 파일들을 수정 후 재push"
  echo "   (품질 무시하고 push하려면: git push --no-verify)"
  exit $EXIT_CODE
fi

# ── ③ 사용자 중심 게이트 (타이틀↔소제목 / 버튼 CTA) ──
# 변경된 정책 파일만 검사한다. 기존 위반분까지 보면 아무것도 push 못 한다.
echo "🎯 사용자 중심 검증 중 (타이틀↔소제목·버튼 CTA)..."
npx tsx "$ROOT/scripts/check-user-value.ts"
UV=$?
if [ $UV -ne 0 ]; then
  echo ""
  echo "🚫 push 차단됨 — 부피를 늘리지 말고 타이틀·버튼을 내용에 맞춘다"
  echo "   (무시하려면: git push --no-verify)"
  exit $UV
fi

# ── ③-2 클릭 유도 게이트 (변경된 스포크만) ──
# 정보를 잘 정리한 글이 아니라 누르게 되는 글이어야 한다.
# 전면광고는 내부 이동에서만 뜨고, 그게 수익의 지렛대다.
echo "👆 클릭 유도 검증 중 (제목 행동성·버튼 슬롯·외부 누수)..."
npx tsx "$ROOT/scripts/check-click-value.ts"
CV=$?
if [ $CV -ne 0 ]; then
  echo ""
  echo "🚫 push 차단됨 — 제목을 행동으로 끝내고 본문 외부링크를 빼라"
  echo "   (무시하려면: git push --no-verify)"
  exit $CV
fi

# ── ③-3 문구·버튼 게이트 (변경된 허브만) ──
# 이 프로젝트에서 가장 중요한 규칙인데 게이트가 없어서 703개 중 9개만 지켜졌다.
# 버튼만 놓으면 아무도 안 누른다 — 누를 이유를 버튼 바로 위에 둔다.
echo "🎯 문구·버튼 검증 중 (문구 누락·도배·목적지 분산)..."
npx tsx "$ROOT/scripts/check-cue-value.ts"
QV=$?
if [ $QV -ne 0 ]; then
  echo ""
  echo "🚫 push 차단됨 — 카드마다 act: { cue, label, url } 을 채워라"
  echo "   현황 확인: npx tsx scripts/check-cue-value.ts --all"
  echo "   (무시하려면: git push --no-verify)"
  exit $QV
fi

# ── ③-4 수치 신선도 게이트 (변경된 허브만) ──
# 형식 게이트가 다 통과해도 금액이 작년 값이면 아무 소용이 없다.
# 2026-08-01 영유아보육료(2024·2025년 값 혼재)·학자금 생활비(150만→200만) 오차를
# 우연히 발견했다. 검수일 만료·CTA 루트·지난 연도 인용을 여기서 막는다.
echo "📅 수치 신선도 검증 중 (검수 만료·출처 대조 가능·죽은 CTA)..."
npx tsx "$ROOT/scripts/check-freshness.ts"
FR=$?
if [ $FR -ne 0 ]; then
  echo ""
  echo "🚫 push 차단됨 — 공식 출처를 Playwright로 다시 열어 수치를 대조하고 verifiedAt 을 갱신하라"
  echo "   현황 확인: npx tsx scripts/check-freshness.ts --all"
  echo "   (무시하려면: git push --no-verify)"
  exit $FR
fi

# ── ③-5 중복 게이트 (변경된 글이 기존 글과 겹치나) ──
# 1,689개 규모에서 사람이 기억으로 중복을 피하는 건 불가능하다.
# 같은 주제를 두 번 쓰면 둘 다 순위가 안 나온다.
echo "🔁 중복 검증 중 (제목·소제목이 기존 글과 겹치나)..."
npx tsx "$ROOT/scripts/check-duplicate.ts"
DP=$?
if [ $DP -ne 0 ]; then
  echo ""
  echo "🚫 push 차단됨 — 기존 글을 보강하거나 이 글의 각도를 바꿔라(대상·시점·상황별)"
  echo "   현황 확인: npx tsx scripts/check-duplicate.ts --all"
  echo "   (무시하려면: git push --no-verify)"
  exit $DP
fi

# ── ④ 콘텐츠 품질 Q1~Q13 (변경분만) ──
# 680개 전수는 3분 걸려 push마다 돌리기엔 무겁다. 이번에 건드린 정책만 본다.
CHANGED=$(git diff --name-only origin/main...HEAD -- data/policies 2>/dev/null \
  | grep -E 'data/policies/[a-z0-9-]+\.ts$' | xargs -r -n1 basename | sed 's/\.ts$//' | grep -v '^manifest$')
if [ -n "$CHANGED" ]; then
  echo "📋 콘텐츠 품질 Q1~Q13 검증 중..."
  for slug in $CHANGED; do
    npm run verify --silent -- "$slug" > /tmp/uv_$slug.log 2>&1 || {
      echo "🚫 push 차단됨 — $slug 품질 미달"
      tail -20 /tmp/uv_$slug.log
      exit 1
    }
  done
  echo "   ✅ $(echo "$CHANGED" | wc -w)개 통과"
fi

exit 0
