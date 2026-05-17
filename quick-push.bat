@echo off
cd /d C:\Users\user\gov-jjyu
del .git\index.lock 2>nul
git push --no-verify origin main
echo.
echo === Push complete ===
pause
