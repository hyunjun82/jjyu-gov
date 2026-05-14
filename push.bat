@echo off
echo.
echo ====================================
echo  Quality Verify + Build + Push
echo ====================================
echo.

echo [1/3] Quality verify...
call npm run verify:all
if errorlevel 1 (
  echo.
  echo X Quality verify FAILED. Push blocked.
  exit /b 1
)
echo [1/3] OK
echo.

echo [2/3] Build verify...
call npm run build
if errorlevel 1 (
  echo.
  echo X Build FAILED. Push blocked.
  exit /b 1
)
echo [2/3] OK
echo.

echo [3/3] Commit + Push...
git add .
set /p commit_msg="Commit message (Enter=default): "
if "%commit_msg%"=="" set commit_msg=feat: policy update
git commit -m "%commit_msg%"
git push origin main > push.log 2>&1

if errorlevel 1 (
  echo.
  echo X Push FAILED. Check push.log
  exit /b 1
)

echo.
echo ============================================
echo  OK Push complete. Cloudflare deploy in 3min
echo  https://gov.jjyu.co.kr
echo ============================================
echo.
