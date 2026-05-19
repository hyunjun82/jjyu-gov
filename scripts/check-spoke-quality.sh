#!/bin/bash
# ============================================================
# check-spoke-quality.sh  v2
# 스포크 파일 품질 게이트
# qa[] ≥ 7  AND  total q: ≥ 12 (qa 7 + faqData 5)
# 미달 시 exit 1 → pre-push hook 차단
# ============================================================

shopt -s globstar nullglob

CONTENT_DIR="app/policy/[id]/[spoke]/content"
PASS=0
FAIL=0
SKIP=0
FAIL_LIST=""

for f in "$CONTENT_DIR"/**/*.tsx; do
  [ -f "$f" ] || continue

  # grep -c는 0 매치 시 exit code 1 → 변수에 바로 받고 true로 무시
  qa_count=$(grep -c '^\s*q:' "$f" 2>/dev/null); qa_count=${qa_count:-0}
  total_q=$(grep -c 'q:'     "$f" 2>/dev/null); total_q=${total_q:-0}

  if [ "$qa_count" -lt 7 ] || [ "$total_q" -lt 12 ]; then
    FAIL=$((FAIL + 1))
    FAIL_LIST="$FAIL_LIST\n  ✗ $f  (qa=$qa_count, total=$total_q)"
  else
    PASS=$((PASS + 1))
  fi
done

echo "============================================"
echo " 스포크 품질 검증 결과"
echo "============================================"
echo " PASS: $PASS개"
echo " FAIL: $FAIL개"

if [ "$FAIL" -gt 0 ]; then
  echo ""
  echo "미달 파일 목록 (qa<7 또는 total q:<12):"
  printf "%b\n" "$FAIL_LIST"
  echo ""
  echo "❌ 품질 미달 스포크 ${FAIL}개 — push 차단"
  exit 1
else
  echo ""
  echo "✅ 모든 스포크 품질 통과 — push 허용"
  exit 0
fi
