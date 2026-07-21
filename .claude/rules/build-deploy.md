---
paths:
  - "next.config.mjs"
  - "tsconfig.json"
  - "wrangler.toml"
  - ".gitignore"
  - "app/policy/[id]/page.tsx"
  - "app/policy/[id]/[spoke]/page.tsx"
---

# 빌드/배포 단일 정답

과거 인시던트(2026-05, 한글 URL 404 → 4시간 낭비) 전체 기록: `docs/404-postmortem-2026-05.md`.
**한 번이라도 이 파일들을 만지면 아래 상태와 정확히 일치해야 함. 어느 하나라도 빠지면 404 폭발.**

1. **`next.config.mjs`** — 정확히 이 5개 옵션
   ```js
   const nextConfig = {
     output: 'export',                    // ← Cloudflare Pages는 SSR 어댑터 없음. 정적 export 필수
     trailingSlash: true,                 // ← 한글 URL 일관성
     images: { unoptimized: true },       // ← export 모드 필수
     eslint: { ignoreDuringBuilds: true },
     typescript: { ignoreBuildErrors: true },
     webpack: (config) => {
       config.resolve.alias = { ...(config.resolve.alias || {}), '@': __dirname };
       return config;
     },
   };
   ```

2. **`tsconfig.json`** — `baseUrl` 반드시 명시
   ```json
   {
     "compilerOptions": {
       "baseUrl": ".",                    // ← 이거 없으면 @/ import 전부 실패. 404의 진짜 원인이었음
       "paths": { "@/*": ["./*"] }
     }
   }
   ```

3. **`wrangler.toml`** (루트) — Cloudflare에 출력 디렉토리 강제 지정
   ```toml
   name = "jjyu-gov"
   compatibility_date = "2024-09-23"
   pages_build_output_dir = "./out"     # ← 대시보드 설정 무시하고 강제로 out/ 서빙
   ```

4. **dynamic route 설정** — `output:'export'` 모드와 호환
   - `app/policy/[id]/page.tsx`: `dynamicParams = false`
   - `app/policy/[id]/[spoke]/page.tsx`: `dynamicParams = false` + `generateStaticParams`에 try-catch 안전가드
   - `generateStaticParams`가 빈 배열 반환하면 라우트 전체가 404 → try-catch 필수

5. **`.gitignore`** — 빌드 산출물 절대 git에 들어가면 안 됨
   ```
   /.next/
   /out/
   tsconfig.tsbuildinfo
   *.tsbuildinfo
   .playwright-mcp/
   ```

## 404 발생 시 진단 순서 (추측 금지)
1. `curl -sI "https://gov.jjyu.co.kr/<문제URL>"` — 응답 코드 + `cf-cache-status`(DYNAMIC=SSR 잘못됨, HIT/MISS=정상)
2. `git log` — 최신 commit push 확인, Cloudflare 대시보드에서 배포 상태 확인
3. 로컬 `NODE_OPTIONS=--max-old-space-size=8192 NODE_ENV=production npx next build` 끝까지 돌려서 `Route (app)` 표 확인 — **이 표 보기 전엔 코드 고치지 말 것**
4. 변경은 1개씩 → push → curl로 즉시 검증. 효과 없으면 되돌리고 다른 가설.
5. 그래도 원인 불명이면 사용자에게 빌드 로그 캡처 요청.

현재 spoke slug 정합성 현황: `npx tsx scripts/verify-integrity.ts --strict` 실행해서 확인 (절대규칙: URL은 전부 영문 lowercase-hyphen).
