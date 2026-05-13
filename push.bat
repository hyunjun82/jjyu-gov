@echo off
chcp 65001 > nul
echo.
echo ====================================
echo  품질 검증 + 빌드 + 푸시 통합 스크립트
echo ====================================
echo.

REM ── 1단계: 품질 검증 (10가지 기준) ──
echo [1/3] 품질 검증 시작...
call npm run verify:all
if errorlevel 1 (
  echo.
  echo ============================================
  echo  X 품질 검증 실패. 푸시 차단.
  echo  reference/cards/ 이미지를 다시 보고 보강하세요.
  echo ============================================
  exit /b 1
)
echo.
echo [1/3] ✓ 품질 검증 통과
echo.

REM ── 2단계: 빌드 검증 ──
echo [2/3] 빌드 검증 시작...
call npm run build
if errorlevel 1 (
  echo.
  echo ============================================
  echo  X 빌드 실패. 푸시 차단.
  echo ============================================
  exit /b 1
)
echo.
echo [2/3] ✓ 빌드 통과
echo.

REM ── 3단계: 커밋 + 푸시 ──
echo [3/3] 커밋 + 푸시...
git add .
set /p commit_msg="커밋 메시지 입력 (엔터=기본 메시지): "
if "%commit_msg%"=="" set commit_msg=feat: 정책 데이터 업데이트
git commit -m "%commit_msg%"
git push origin main > push.log 2>&1

if errorlevel 1 (
  echo.
  echo X 푸시 실패. push.log 확인.
  exit /b 1
)

echo.
echo ============================================
echo  ✓ 푸시 완료. Cloudflare 자동 배포 대기 (3분)
echo  https://gov.jjyu.co.kr 에서 확인하세요.
echo ============================================
echo.
