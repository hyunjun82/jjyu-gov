@echo off
chcp 65001 > nul
echo.
echo ====================================
echo  Git Commit + Push (Quick)
echo ====================================
echo.

cd /d %~dp0

echo Removing stale git locks if present...
if exist .git\index.lock del /f .git\index.lock
if exist .git\HEAD.lock del /f .git\HEAD.lock

echo.
echo Staging all changes...
git add -A

echo.
echo Writing commit message...
(
  echo feat: TOC missing 4 policies added ^(total 104^)
  echo.
  echo - child-development-account.ts ^(id=10^) didim savings account
  echo - hypertension-medical-fee.ts ^(id=41^) hypertension diabetes registry
  echo - disabled-women-childcare.ts ^(id=79^) disabled women childcare special
  echo - pregnancy-medical-benefit.ts ^(id=128^) pregnancy medical benefit card
  echo - manifest.ts wired all 4 policies
) > .git\COMMIT_MSG_TMP.txt

echo.
echo Committing...
git commit -F .git\COMMIT_MSG_TMP.txt
del .git\COMMIT_MSG_TMP.txt 2>nul

echo.
echo Pushing to GitHub...
git push origin main

if errorlevel 1 (
  echo.
  echo X Push FAILED. Check credentials.
  pause
  exit /b 1
)

echo.
echo ============================================
echo  OK Pushed! Cloudflare deploy in ~3min
echo  https://gov.jjyu.co.kr
echo ============================================
echo.
pause
