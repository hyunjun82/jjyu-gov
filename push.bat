@echo off
git init
git config user.email "bot@example.com"
git config user.name "AI Assistant"
git add .
git commit -m "First commit: Initialize Next.js Hub & Spoke template with Interactive Checker"
git branch -M main
git remote add origin https://github.com/hyunjun82/jjyu-gov.git
git push -u origin main --force > push.log 2>&1
