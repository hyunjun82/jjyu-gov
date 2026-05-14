@echo off
echo Quick push (skip verify/build)
git add .
git commit -m "feat: policy 4 first-meet voucher"
git push origin main
echo.
echo Done. Wait 3 min for Cloudflare deploy.
echo Check: https://gov.jjyu.co.kr/policy/4
