#!/bin/bash
# ============================================================
# check-spoke-quality.sh  v4
# 스포크 파일 품질 게이트
# [1] Format B 감지: function Content() 있고 qa: 없으면 즉시 FAIL
# [2] qa[] >= 3  AND  total q: >= 6  (빈 글 방지 최소선만)
#     2026-08-08 변경: 원래 qa>=7 고정이었다. 그래서 타이틀이 3~4개를 약속한 글에도
#     7개를 채우느라 억지 소제목을 붙였다(실손 스포크 24개가 전부 정확히 7개였다).
#     소제목 개수는 타이틀이 정한다 — 타이틀에 든 롱테일 키워드마다 질문형 소제목
#     하나씩, 사용자가 실제로 궁금해하는 게 더 있으면 그때 추가.
#     "타이틀이 약속한 걸 소제목이 덮는가"는 check-user-value(타이틀↔소제목)와
#     check-title-body-match.sh 가 이미 검사한다. 개수 하한은 중복이고,
#     '부피를 늘리지 말고 내용을 맞춰라'는 다른 게이트와 반대로 밀고 있었다.
# 미달 시 exit 1 -> pre-push hook 차단
#
# v4: origin/main 대비 이번 push로 새로 추가/수정된 스포크 .tsx만 검사.
#     전체 스캔은 CHECK_ALL_SPOKES=1 환경변수로 강제 가능(정기 감사용).
# ============================================================

shopt -s globstar nullglob

CONTENT_DIR="app/policy/[id]/[spoke]/content"
PASS=0
FAIL=0
FAIL_LIST=""
FORMAT_B_LIST=""
FORMAT_B=0

if [ "$CHECK_ALL_SPOKES" = "1" ]; then
  FILES=("$CONTENT_DIR"/**/*.tsx)
else
  BASE=$(git merge-base HEAD origin/main 2>/dev/null || echo "origin/main")
  mapfile -t FILES < <(git diff --name-only --diff-filter=ACMR "$BASE" HEAD -- "$CONTENT_DIR" 2>/dev/null | grep '\.tsx$')
  if [ ${#FILES[@]} -eq 0 ]; then
    echo "============================================"
    echo " 스포크 품질 검증 결과"
    echo "============================================"
    echo " 변경된 스포크 파일 없음 -- 검사 생략, push 허용"
    echo " (전체 재검사: CHECK_ALL_SPOKES=1 bash scripts/check-spoke-quality.sh)"
    exit 0
  fi
fi

for f in "${FILES[@]}"; do
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

  if [ "$qa_count" -lt 3 ] || [ "$total_q" -lt 6 ]; then
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
  echo "미달 파일 목록 (qa<3 또는 total q:<6):"
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
