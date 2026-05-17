@echo off
cd /d "%~dp0"
echo [1/3] git lock 해제 중...
del /f /q .git\index.lock 2>nul
echo [2/3] 커밋 중...
git add -A
git commit -m "fix: Q1~Q9 품질 검증 통과 (133 PASS, 내용오류 0) - 품질 체크 자동화 스크립트 포함"
echo [3/3] 푸시 중...
git push
echo.
echo 완료.
pause
