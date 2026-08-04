#!/bin/bash
# export-action-copy.sh — 행동 문구·버튼 시스템을 다른 도메인으로 이식한다
#
# 왜 필요한가 (2026-08-02):
#   gov 에서 만든 게이트·정본이 law·loan·pension·eitc 에는 없다.
#   하위도메인 글을 다 합치면 1만 개가 넘는데 수익이 안 나는 이유가 여기 있다.
#   글을 더 쓰는 것보다 이 시스템을 옮기는 게 먼저다.
#
# 사용:
#   bash scripts/export-action-copy.sh /c/Users/user/law-jjyu
#
# 옮기는 것: 게이트 스크립트 + 정본 문서 + 자동 로드 규칙
# 옮기지 않는 것: 정책 데이터(도메인마다 다름), pre-push hook(수동 배선)

set -e
TARGET="$1"
if [ -z "$TARGET" ]; then
  echo "대상 저장소 경로를 넣어라: bash scripts/export-action-copy.sh /c/Users/user/law-jjyu"
  exit 1
fi
if [ ! -d "$TARGET" ]; then
  echo "그런 디렉터리가 없다: $TARGET"
  exit 1
fi

SRC="$(git rev-parse --show-toplevel)"
mkdir -p "$TARGET/scripts" "$TARGET/docs" "$TARGET/.claude/rules" "$TARGET/.claude/skills/action-copy"

cp "$SRC/scripts/check-cue-value.ts"  "$TARGET/scripts/"
cp "$SRC/scripts/check-freshness.ts"  "$TARGET/scripts/"
cp "$SRC/docs/button-copy.md"         "$TARGET/docs/"
cp "$SRC/.claude/rules/action-copy.md" "$TARGET/.claude/rules/"
cp "$SRC/.claude/skills/action-copy/SKILL.md" "$TARGET/.claude/skills/action-copy/"

echo "옮김: check-cue-value.ts · check-freshness.ts · button-copy.md · action-copy.md · skills/action-copy(생성기)"
echo ""
echo "이제 대상 저장소에서 손볼 것 두 가지:"
echo ""
echo "1) 데이터 경로 — check-cue-value.ts 의 ROOT 를 그 저장소 구조에 맞춘다"
echo "     현재: const ROOT = 'data/policies';"
echo ""
echo "2) pre-push 배선 — .git/hooks/pre-push 에 아래를 넣는다"
cat <<'HOOK'

     npx tsx "$ROOT/scripts/check-cue-value.ts"
     if [ $? -ne 0 ]; then
       echo "🚫 push 차단 — 행동 문구·버튼 기준 미달"
       exit 1
     fi
HOOK
echo ""
echo "그리고 그 저장소 CLAUDE.md 최상단에 절대규칙 0번(행동 문구 1순위)을 복사해 둔다."
echo "규칙은 자동 로드되는 자리에 있어야 다음 세션에도 지켜진다."
