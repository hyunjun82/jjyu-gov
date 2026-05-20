#!/bin/bash
# ============================================================
# check-spoke-quality.sh  v3
# 스포크 파일 품질 게이트
# [1] Format B 감지: function Content() 있고 qa: 없으면 즉시 FAIL
# [2] qa[] >= 7  AND  total q: >= 12 (qa 7 + faqData 5)
# 미달 시 exit 1 -> pre-push hook 차단
# ============================================================

shopt -s globstar nullglob

CONTENT_DIR="app/policy/[id]/[spoke]/content"
PASS=0
FAIL=0
FAIL_LIST=""
FORMAT_B_LIST=""
FORMAT_B=0

for f in "$CONTENT_DIR"/**/*.tsx; do
  [ -f "$f" ] || continue

  # Format B 감지: function Content() 있고 qa: 없으면 -> Format B
  has_content_fn=$(grep -ac 'function Content()' "$f" 2>/dev/null); has_content_fn=${has_content_fn:-0}
  has_qa=$(grep -ac '^\s*qa:\s*\[' "$f" 2>/dev/null); has_qa=${has_qa:-0}

  if [ "$has_content_fn" -gt 0 ] && [ "$has_qa" -eq 0 ]; then
    FORMAT_B=$((FORMAT_B + 1))
    FORMAT_B_LIST="$FORMAT_B_LIST\n  x [FORMAT_B] $f"
    FAIL=$((FAIL + 1))
    continue
  fi

  # grep -a: 한국어 UTF-8 파일을 텍스트로 처리 (바이너리 인식 방지)
  qa_count=$(grep -ac '^\s*q:' "$f" 2>/dev/null); qa_count=${qa_count:-0}
  total_q=$(grep -ac 'q:' "$f" 2>/dev/null); total_q=${total_q:-0}

  if [ "$qa_count" -lt 7 ] || [ "$total_q" -lt 12 ]; then
    FAIL=$((FAIL + 1))
    FAIL_LIST="$FAIL_LIST\n  x $f  (qa=$qa_count, total=$total_q)"
  else
    PASS=$((PASS + 1))
  fi
done

echo "============================================"
echo " 스포크 품질 검증 결과"
echo "============================================"
echo " PASS: ${PASS}개"
echo " FAIL: ${FAIL}개  (Format B: ${FORMAT_B}개 포함)"

if [ "$FORMAT_B" -gt 0 ]; then
  echo ""
  echo "Format B 파일 (function Content -> qa[] 변환 필요):"
  printf "%b\n" "$FORMAT_B_LIST"
fi

if [ -n "$FAIL_LIST" ]; then
  echo ""
  echo "미달 파일 목록 (qa<7 또는 total q:<12):"
  printf "%b\n" "$FAIL_LIST"
fi

if [ "$FAIL" -gt 0 ]; then
  echo ""
  echo "품질 미달 스포크 ${FAIL}개 -- push 차단"
  exit 1
else
  echo ""
  echo "모든 스포크 품질 통과 -- push 허용"
  exit 0
fi
