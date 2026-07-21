# 404 진단 사후 기록 (2026-05)

> CLAUDE.md에서 분리된 과거 인시던트 기록. 활성 규칙이 아니라 "다음에 비슷한 문제가 나면 여기부터 봐라"는 참고 자료.
> 지금도 유효한 체크리스트(빌드 단일 정답 5개)는 CLAUDE.md §"빌드·배포 체크리스트"에 남아있음.

## 배경
한글 spoke URL 404 사건. 7번 추측으로 헛다리만 짚어 4시간 낭비. 진짜 원인은 단순한 빌드 설정 누락이었음.

## 실제 원인 7가지 (전부 빌드 산출물 누락이 진짜 이유)
1. ~~한글 URL slug 등록 안 됨~~ (틀림)
2. ~~Cloudflare WAF가 한글 차단~~ (틀림 — 400은 curl raw 때만, 브라우저는 인코딩)
3. ~~tsbuildinfo 캐시 stale~~ (부분 정답 — 직접 원인은 아님)
4. ~~dynamicParams=false 때문~~ (틀림)
5. ~~output:export가 spoke 깨뜨림~~ (틀림 — 오히려 export가 정답)
6. ~~SpokesRegistry import 누락~~ (틀림)
7. **`tsconfig.json`에 `baseUrl` 누락 → `@/` import 전부 실패 → 빌드 부분 실패** (진짜 원인)
8. **`wrangler.toml` 없음 → Cloudflare가 `out/` 폴더를 자동 인식 못함** (진짜 원인)

**교훈**: 404의 진짜 원인은 99% 빌드/배포 설정. 콘텐츠나 URL slug가 아니다. 빌드 로그부터 봐라.

## 진단 순서 (재발 시 사용)
1. `curl -sI "https://gov.jjyu.co.kr/<문제URL>"` — 실제 응답 코드 + `cf-cache-status`(DYNAMIC=SSR 잘못됨, HIT/MISS=정상)
2. `git log` — 최신 commit이 push됐는지
3. Cloudflare 대시보드 — 최신 배포 상태
4. 로컬 `next build` 끝까지 돌려서 `Route (app)` 표 확인 — **이거 보기 전엔 코드 고치지 말 것**
5. 변경은 1개씩, push 후 즉시 curl로 검증 (여러 변경 합치면 원인 특정 불가)

## spoke slug 영문/한글 mismatch (2026-05 발견, 2026-07-03 규칙으로 해결됨)
- 당시 상태: `data/policies/*.ts`의 spokes 배열은 영문 slug인데 `registry.ts` 키는 한글 → 정합성 깨져 영문 spoke 링크 전부 404.
- 완화 조치(당시 임시): `policy-aliases.ts`의 별칭 매핑, 매핑 실패 시 정책 메인으로 자동 redirect.
- **현재는 CLAUDE.md 절대규칙 8번("URL 전부 영문")으로 근본 해결 방향 확정**. 기존 한글 스포크는 `public/_redirects` 301로 단계적 이전 중.

## 2026-05 시점 스냅샷 (참고용, 지금은 stale — 최신 수치는 `verify-integrity.ts` 실행해서 확인)
- 한글 slug 정책 24개, 영문 slug 정책 116개, 혼합 47개, manifest 누락 6개.
- 완화: `getSpokeListForPolicy()`가 사이드바 링크를 registry 키 기준으로만 생성 → 사이트 내부 죽은 링크 0 유지.
