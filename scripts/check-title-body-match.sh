#!/bin/bash
# ============================================================
# check-title-body-match.sh
# 타이틀(h1) ↔ 본문 소제목/내용 일치 검출
#
# 목적: 타이틀이 약속한 핵심 키워드(특히 숫자+단위, 고유명사)가
#       본문(qa[].q / intro / box / table)에 실제로 다뤄지는지 검사.
#       타이틀만 그럴듯하고 본문이 딴소리인 경우를 잡는다.
#
# 사용:
#   bash scripts/check-title-body-match.sh                # 전체 스캔
#   bash scripts/check-title-body-match.sh 근로장려금     # 특정 정책 폴더만
#
# 출력: 의심 파일 + 본문에 없는 타이틀 키워드 목록 (WARNING)
# 종료코드: 0 (경고만, push 차단 안 함 — 휴리스틱이라 오탐 가능)
# ============================================================

shopt -s globstar nullglob

CONTENT_DIR="app/policy/[id]/[spoke]/content"
FILTER="${1:-}"

# 타이틀에 흔히 들어가지만 본문 일치 검사에서 제외할 일반어(불용어)
STOP="총정리|방법|조건|기준|얼마|언제|어떻게|되나|될까|받나|받을|하나|하면|경우|정리|신청|지원|제도|가능|무엇|이란|에서|까지|부터|그리고|이거|이게|이건|모든|관련|확인|차이|비교|주의|안내|대상|혜택|얼마나|어디|누가|왜|및|등|로|을|를|은|는|이|가|의|와|과|도|만|더|법은|법|건"

WARN=0
WARN_REPORT=""

for f in "$CONTENT_DIR"/**/*.tsx; do
  [ -f "$f" ] || continue
  [ -n "$FILTER" ] && [[ "$f" != *"$FILTER"* ]] && continue

  # h1 추출 (첫 h1: '...' 라인)
  h1=$(grep -aoE "h1:\s*'[^']+'" "$f" | head -1 | sed "s/h1:\s*'//; s/'$//")
  [ -z "$h1" ] && continue

  # 본문 = h1 라인을 제외한 파일 전체 (qa q/intro/box/table/highlights 다 포함)
  body=$(grep -av "h1:" "$f")

  # 타이틀을 토큰화: 공백·구분기호로 분리
  tokens=$(echo "$h1" | sed -E "s/[][(),?:|·\/~%\"'!.]/ /g")

  missing=""
  for raw in $tokens; do
    # 후행 조사·접미사 제거 (계산법→계산, 7천만원까지→7천만원, 소득별→소득)
    t=$(echo "$raw" | sed -E 's/(까지|부터|별로|별|와는|과는|에서|으로|에게|이나|이랑|랑|와|과|은|는|이|가|을|를|의|도|만|에|로|나|법|들|께)$//')
    # 길이 2 미만 제외
    [ "${#t}" -lt 2 ] && continue
    # 불용어 제외
    echo "$t" | grep -qE "^($STOP)$" && continue

    # 강신호: 숫자+단위 토큰 (180일, 50세, 7일, 330만, 12개월 등)
    is_num=$(echo "$t" | grep -cE "[0-9]")

    # 본문에 토큰이 등장하는지 (부분일치 허용 — 한국어는 단어 내 공백 없음)
    if ! echo "$body" | grep -qF "$t"; then
      # 숫자 토큰이 빠지면 강한 불일치 신호로 [숫자] 표시
      if [ "$is_num" -gt 0 ]; then
        missing="$missing  [숫자]$t"
      else
        missing="$missing  $t"
      fi
    fi
  done

  if [ -n "$missing" ]; then
    WARN=$((WARN + 1))
    short=$(echo "$f" | sed "s|$CONTENT_DIR/||")
    WARN_REPORT="$WARN_REPORT\n  ⚠ $short\n     타이틀: $h1\n     본문에 없음:$missing"
  fi
done

echo "============================================"
echo " 타이틀 ↔ 본문 일치 검사"
echo "============================================"
if [ "$WARN" -gt 0 ]; then
  echo " 의심 파일: ${WARN}개 (타이틀 키워드가 본문에 안 보임)"
  printf "%b\n" "$WARN_REPORT"
  echo ""
  echo " ※ [숫자] 표시는 강한 불일치 신호 — 타이틀의 수치를 본문에서 반드시 다뤄야 함."
  echo " ※ 휴리스틱이라 오탐 가능. 표시된 항목을 직접 확인해 타이틀/본문을 맞추세요."
else
  echo " ✅ 의심 파일 없음 — 타이틀 키워드가 모두 본문에 등장"
fi
exit 0
