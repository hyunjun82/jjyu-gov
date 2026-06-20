# gov-jjyu — 정부지원사업 자동화 시스템

> **목표**: 키워드 1개 입력 → 정부 카드뉴스 형식 콘텐츠 자동 생성 → 1:1 정부 자료 대조 검증 → 자동 빌드·푸시 → 라이브 배포

이 문서는 Claude가 이 프로젝트에 들어올 때 가장 먼저 읽는 마스터 컨텍스트다. 모든 작업의 기준점.

---

## 1. 절대 규칙 (어길 시 작업 중단)

1. **추정·예시 수치 절대 금지** — 모든 숫자는 정부 1차 출처에서만
2. **출처 명시 의무** — 모든 필드에 `source: { url, cardIndex, text, verifiedAt }`
3. **1:1 대조 검증 통과 전 푸시 금지** — `scripts/verify-policy.ts` PASS 필수
4. **정부 슬로건/로고/캐릭터 사용 금지** — "민생에 플러스" 등 정부 표어 X
5. **사용자 검증 후에만 푸시** — 자동 푸시 X, 반드시 사람 승인
6. **타이틀은 무조건 실제 검색어로** — 모든 신규 허브·스포크 타이틀은 **네이버+구글 실제 사용자 검색어**(자동완성·연관검색어·PAA)를 **Playwright로 직접 수집**해 그 문자열을 기반으로 작성한다. 머릿속으로 지어내거나 KB식 스타일만 흉내 내는 것 **금지**. 두 포털 교차 확인 필수. (상세: §2-B)
7. **모든 정보는 공식 홈페이지 Playwright 직접 대조** — 해당 사업의 **공식 홈페이지/보도자료를 Playwright로 일일이 열어** 수치·조건·일정을 1:1 대조한 뒤에만 작성한다. 블로그·언론 2차 출처를 1차처럼 인용 **금지**. 검증 못 한 수치는 쓰지 말고 "공식 채널 확인"으로 안내. 품질 오차 0이 목표.
   - ⚠️ **단일 공식 페이지도 맹신 금지** (2026-06 테스트로 발견): 고용노동부 worklife.kr가 6+6 5개월차를 350만으로 표기했으나, 다수 출처+계단식(+50만) 논리상 실제는 **400만**이었다 — 즉 정부 페이지에도 오타가 있다. **수치는 ① 2개 이상 출처 교차 ② 계산·논리 정합성(계단식·합계 등) 검산** 후 확정. 기존 데이터와 어긋나면 어느 쪽이 맞는지 교차로 판정한 뒤에만 수정.
   - ⚠️ **기관별 공식사이트 접근성 차이 → 접근 폴백 위계** (2026-06 테스트로 발견): 고용노동부 worklife.kr는 정적 HTML이라 Playwright로 잘 읽히지만, **건강보험공단(nhis.or.kr)은 봇 차단**("정상적이지 않은 접근으로 차단되었습니다" 알림)으로 Playwright·WebFetch가 막힌다. 접근이 막히면 아래 순서로 뚫는다:
     1. **Claude in Chrome (실제 크롬 세션)** — Playwright(헤드리스 자동화)가 봇 차단당해도, 사용자의 진짜 로그인 크롬으로 열면 사람처럼 보여 **대부분 뚫린다**. NHIS·정부24 등 차단 사이트의 1순위 해법.
     2. **법령 원문 우회** — 국가법령정보 law.go.kr / 찾기쉬운생활법령 easylaw.go.kr (시행령·고시 원문). 실제로 NHIS 차단 시 easylaw로 육아휴직 건강보험료 경감 조문을 WebFetch로 확보 성공.
     3. **대한민국 정책브리핑 korea.kr** / 기관 **보도자료 PDF**.
     4. 그래도 확보 불가 시에만 본문에 단정하지 말고 "해당 공단/콜센터 확인" 안내.
   - 즉 **"접근 불가"는 거의 없다 — Playwright 아니면 Claude in Chrome으로 대부분 열린다.** 도메인별 신뢰 출처 매핑: 고용=worklife/moel, 건보=easylaw/law.go.kr(또는 Chrome으로 nhis), 연금=korea.kr/law.go.kr, 금융=fsc/은행연합회.

---

## 🚨 404 진단 절대 규칙 (2026-05 4시간 헛수고 재발 방지)

> **배경**: 한글 spoke URL 404 사건. 7번 추측으로 헛다리만 짚어 4시간 낭비. 진짜 원인은 단순한 빌드 설정 누락이었음. 다음에 비슷한 404 발생 시 아래 순서를 무조건 지킬 것.

### ❌ 절대 하지 말 것
- 코드만 보고 원인 추측 → 추측은 99% 빗나간다
- "한글 URL이라서", "Cloudflare WAF라서" 등 가설 만들고 fix 시도
- `output: 'export'`, `dynamicParams` 같은 설정을 검증 없이 토글
- 한 번에 여러 변경 합쳐 push → 어떤 변경이 작동했는지 분간 불가
- 사용자에게 "이번이 마지막" 약속 → 약속 깨면 신뢰만 잃음

### ✅ 무조건 이 순서대로
**0단계: 사실 수집 (추측 X)**
```bash
# (1) 실제 응답 코드
curl -sI "https://gov.jjyu.co.kr/<문제URL>" | head -5
# (2) cf-cache-status 확인 — DYNAMIC=SSR, HIT/MISS=정적
# (3) 빌드 ID — 새 배포 반영됐는지
curl -s "https://gov.jjyu.co.kr/" | grep -oE '"b":"[^"]+"'
# (4) 정상 페이지의 _next/chunks 경로 — 어떤 라우트가 빌드됐는지
curl -s "https://gov.jjyu.co.kr/" | grep -oE 'static/chunks/app/[^"]+'
```

**1단계: 빌드 로그 직접 보기 — 진짜 답은 여기 있다**
- Cloudflare 대시보드 → Deployments → 최신 배포 "자세히 보기" → 빌드 로그
- 또는 로컬 `cd C:\Users\user\gov-jjyu && set NODE_OPTIONS=--max-old-space-size=8192 && npm run build > build.log 2>&1`
- 로그 끝부분 `Route (app)` 표 확인 — 각 라우트별 generate된 path 개수
- **이 표 보기 전엔 코드 한 줄도 고치지 말 것**

**2단계: 변경은 1개씩, 푸시 후 즉시 검증**
- 1개 변경 → push → 5분 대기 → curl로 응답 확인
- 효과 없으면 되돌리고 다른 가설
- 절대 여러 변경 합치지 말 것

### 🎯 이 프로젝트의 빌드/배포 단일 정답
**한 번이라도 만지면 아래 4개 모두 정확히 이 상태여야 함.** 어느 하나라도 빠지면 404 폭발.

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

### 📋 404 발생 시 체크리스트 (순서대로)
- [ ] curl로 실제 응답 코드 + cf-cache-status 확인 (DYNAMIC이면 SSR 모드 = next.config 잘못됨)
- [ ] git log로 최신 commit이 push됐는지 확인 (origin/main 매칭)
- [ ] Cloudflare 대시보드에서 최신 배포 status (녹색 ✓, 빨간 ✗, 노란 회전)
- [ ] 위 단일 정답 5개 항목과 현재 코드 비교 — 어느 것 빠졌는지
- [ ] **로컬 빌드 1번 끝까지 돌려서 Route 표 확인**
- [ ] Cloudflare 빌드 로그 끝부분 Route 표 확인
- [ ] 그래도 모르면 사용자에게 빌드 로그 캡처 요청 (이걸 안 보면 평생 추측만 함)

### 💡 이번에 실제 일어났던 404 원인 7가지 (전부 빌드 산출물 누락이 진짜 이유)
1. ~~한글 URL slug 등록 안 됨~~ (틀림 — slug 등록과 무관)
2. ~~Cloudflare WAF가 한글 차단~~ (틀림 — 400은 curl raw 때만, 브라우저는 인코딩)
3. ~~tsbuildinfo 캐시 stale~~ (부분 정답 — 청소는 필요했지만 직접 원인은 아님)
4. ~~dynamicParams=false 때문~~ (틀림 — true로 바꿔도 그대로)
5. ~~output:export가 spoke 깨뜨림~~ (틀림 — 오히려 export가 정답이었음)
6. ~~SpokesRegistry import 누락~~ (틀림 — 425개 다 정상)
7. **`tsconfig.json`에 `baseUrl` 누락 → `@/components/*` 등 모든 import 해석 실패 → 빌드 부분 실패 → spoke 라우트 산출물에서 누락** (이게 진짜)
8. **`wrangler.toml` 없음 → Cloudflare가 `out/` 폴더를 자동 인식 못함** (이것도 진짜)

**교훈**: 404의 진짜 원인은 99% 빌드/배포 설정. 콘텐츠나 URL slug가 아니다. 다음에는 무조건 빌드 로그부터 봐라.

### ⚠️ spoke slug 영문/한글 mismatch 룰 (2026-05 발견)

> **배경**: 빌드 설정 다 고치고 한글 spoke URL은 살아남(`/policy/basic-pension/수급자격/` = 200)에도 영문 spoke URL은 404(`/policy/138/interest-rate`). 진짜 원인은 정책 데이터의 spokes 배열과 SpokesRegistry 키의 이름 mismatch.

**현 상태 (정합성 깨짐)**:
- `data/policies/*.ts`의 `spokes` 배열: **영문 slug** (예: `'interest-rate'`, `'eligibility'`)
- `data/spokes/registry.ts`의 등록 키: **한글** (예: `'금리한도연9912퍼센트조건'`)

**결과**: 정책 메인 페이지의 사이드바·관련 링크가 정책 데이터의 영문 slug로 URL 생성 → 그 URL은 registry에 없음 → **사이트 내부 모든 영문 spoke 링크가 죽은 링크 (404)**

**룰**:
1. **새 정책 작성 시 반드시 둘 중 하나로 통일**:
   - 옵션 A (권장): 둘 다 한글 slug로 통일 — registry의 키 그대로 정책 spokes 배열에 사용
   - 옵션 B: 둘 다 영문 slug로 통일 — 정책 데이터의 spokes 배열 slug를 registry 키로도 사용
2. **기존 정책 수정 시 자동 동기화 스크립트 사용** (TBD `scripts/sync-spoke-slugs.ts`)
3. **PolicySidebar·관련 링크 생성 시점에 mismatch 자동 검출** 후 build warning

**검증 명령** (구현 예정):
```bash
npm run verify:spokes  # 모든 정책의 spokes 배열 slug가 registry에 존재하는지 검사
```

미통과 정책은 push 차단.

### 🚨 시스템 진단 결과 (2026-05 전수 점검)

> **배경**: spoke URL 전수 검증 결과, 정책 199개 중 87%가 시스템 룰을 위반하고 있음. 이게 모든 404의 근본 원인.

**현황 (2026-05 기준)**:
- 한글 slug 정책: **24개** (CLAUDE.md 옵션 A 룰 준수)
- 영문 slug 정책: **116개** (룰 위반)
- 혼합 정책: **47개** (혼란 — 한글/영문 같이 사용)
- manifest 누락 정책: **6개** (data/policies/*.ts 파일은 있지만 manifest.ts에 import 안 됨)

**현재 적용된 완화 조치**:
1. `lib/policy-aliases.ts` 의 `getSpokeListForPolicy()` — 사이드바·홈카드가 SpokesRegistry 한글 키로만 링크 생성 → 사이트 내부 죽은 링크 0
2. `SpokeEnAliases` — 정책 영문 slug ↔ registry 한글 키 인덱스 매핑 (부정확, 25% 작동)
3. `SpokeClient` — 매핑 못 찾은 spoke 는 정책 메인으로 자동 redirect (404 표시 0)
4. `generateStaticParams` — 영문 spoke URL 무조건 등록 (빌드 산출물 보장)

**근본 해결 (TBD)**:
- 116개 정책 + 47개 혼합 정책의 spokes 배열 slug 를 한글로 통일 (옵션 A)
- SpokesRegistry 한글 키와 1:1 매칭되도록 LLM 자동 매핑 스크립트 작성
- `scripts/sync-spoke-slugs.ts` 구현 후 일괄 적용
- 신규 정책 작성 시 push hook 에서 mismatch 검출 차단

**검증 명령**:
```bash
python3 scripts/audit-spoke-slugs.py  # 영문/한글/혼합 정책 통계
npm run verify:spokes                 # mismatch 차단
```

### ⚠️ 스포크 Format B 절대 금지 (2026-05 근본 버그)

> **배경**: `function Content()` JSX 방식(Format B)으로 작성된 스포크는 SpokeClient.tsx의 `spoke.Content` 경로로 렌더링되어 QACard 컴포넌트를 완전히 우회한다. 결과: 번호배지·네이비헤더·핵심콕콕 박스가 없는 날것 JSX로 표시됨. 허브 페이지와 UI/UX가 완전히 다른 상태. 363개 파일이 이 방식으로 작성되어 전량 재작성 필요.

**스포크 파일 작성 시 유일한 올바른 형식 (Format A):**
```typescript
import type { SpokeData } from '../../SpokeClient';
export const XxxSpokeContent: SpokeData = {
  h1: '...',
  qa: [  // ← 반드시 qa[] 배열 7개
    { q: '...', anchor: '...', intro: '...', highlights: [...], table: {...}, box: {...} },
    // ...
  ],
  faqData: [...],  // 5개
  sources: [...],  // 3개 이상
};
```

**절대 금지 (Format B):**
```typescript
// ❌ 이 방식으로 절대 작성하지 말 것
function Content() { return (<> ... </>) }
export const XxxSpokeContent: SpokeData = { Content, faqData: [...] };
```

- `function Content()` 작성 금지
- SpokeData에 `Content` 프로퍼티 추가 금지
- `qa: [...]` 없는 스포크 파일 금지
- 위반 시 `check-spoke-quality.sh`가 Format B로 감지하고 push 차단

### ⚠️ 콘텐츠 오배치 방지 규칙 (2026-05 버그 재발 방지)

> **배경**: 홈 카드 dummy 숫자 ID와 manifest PoliciesById 숫자 ID가 불일치해 클릭 시 엉뚱한 정책이 표시되는 치명적 버그가 발생했다. 아래 규칙을 반드시 준수할 것.

6. **`app/page.tsx` FEATURED 배열에 slug + badge 만 추가** — title·org·amount·deadline 직접 하드코딩 절대 금지. 모든 정책 데이터는 `PoliciesBySlug[slug]` 에서 자동 조회됨.
7. **`app/policy/[id]/[spoke]/SpokeClient.tsx` 직접 수정 금지** — spoke 콘텐츠·매핑을 이 파일에 추가하지 말 것. 새 spoke 추가 시 반드시 `data/spokes/registry.ts` 에만 등록.
8. **spoke 추가 시 `data/spokes/registry.ts` 업데이트 필수** — 새 정책에 spoke 페이지를 만들 때: ① `app/policy/[id]/[spoke]/content/{policySlug}/{spokeSlug}.tsx` 생성 → ② `registry.ts` import 추가 → ③ `SpokesRegistry` 에 등록. 이 세 단계 중 하나라도 빠지면 spoke 페이지가 404.
9. **`related` 필드에 숫자 ID 사용 금지** — `data/policies/*.ts` 의 `related` 배열에는 반드시 slug 문자열 사용. 예: `{ id: 'youth-tomorrow-savings', title: '청년내일저축계좌' }`. 숫자 id 사용 시 관련 정책 링크가 잘못된 페이지로 이동.
10. **manifest 단일 소스 원칙** — 정책 ID·slug·title 등 메타데이터는 반드시 `data/policies/manifest.ts` 에서 조회. 앱 코드(page.tsx, Client 컴포넌트 등)에 정책명·금액·부처명 하드코딩 금지.

---

## 2. 키워드 → 페이지 자동 워크플로우

```
사용자: "근로장려금" 또는 /gov-write 근로장려금
   ↓
[Phase 0] 최신 데이터 검색 (WebSearch 3회)
[Phase 1] 정부 카드뉴스 자동 수집 (Claude in Chrome)
[Phase 2] 7유형 자동 분류 + Q1~Q4 사고
[Phase 3] 데이터 추출 → data/policies/{keyword}.ts 생성
[Phase 4] 와이어링 자동 (policies 객체·spokeLists·sitemap)
[Phase 5] 1:1 대조 검증 (scripts/verify-policy.ts)
[Phase 6] 사람 검증 (제시되는 차이점만 확인)
[Phase 7] git commit + push + Cloudflare 배포
```

상세 단계는 `.claude/skills/gov-write/SKILL.md` 참조.

---

## 2-B. 스포크 타이틀 → 스포크 작성 워크플로우

```
사용자: "기초연금 스포크 써줘" 또는 "장애인연금 스포크 4개"
   ↓
[Step 0] 공식 출처 확정 — 해당 사업 공식 홈페이지/보도자료 URL 확보 (Playwright로 연다)
[Step 1] Playwright — Google 자동완성 수집 (절대규칙 6)
         · suggestqueries.google.com/complete/search?client=firefox&hl=ko&q={씨앗어}
           를 하위 주제 씨앗어마다 fetch → 실제 자동완성 문자열 확보
         · google.com/search 결과의 "관련 질문(PAA)" + 하단 관련검색어
[Step 2] Playwright — 네이버 자동완성 수집 (절대규칙 6)
         · naver.com 검색창(#query)에 씨앗어 입력→input 이벤트 발생→
           드롭다운 li 텍스트 읽기 (ac.search.naver.com 직접 fetch는 CORS로 막힘)
         · VIEW/지식iN 상위 질문 제목
[Step 3] Google·네이버 교차 확인된 실제 검색어 → 타이틀 작성
         ※ 타이틀 문자열은 수집한 자동완성 키워드 조합을 그대로 반영
         ※ KB생각 스타일: 질문 일색 X, "~방법/~기준/~차이" 등 서술·명사형 다수 + 질문 일부
         ※ 구분선("|") 최대 1개, 양쪽 다 완결된 절 — 키워드 조각 갖다붙이기 금지
         ※ 연도(2026)는 맨 앞에만 또는 생략 / "총정리" 등 금지어 없음
[Step 4] 공식 홈페이지 Playwright 1:1 대조 (절대규칙 7) — 타이틀별 수치·조건 검증
         ※ 검증 못 한 수치는 본문에 쓰지 말고 "공식 채널(콜센터) 확인"으로 안내
[Step 5] 타이틀 사용자 확인 후 → 스포크 tsx 파일 작성 (Format A, 아래 품질 게이트 충족)
[Step 6] registry.ts import(고유 export명) + SpokesRegistry 등록
[Step 7] data/policies/{slug}.ts spokes 배열 업데이트
[Step 8] 빌드(npm run build) + check-spoke-quality.sh 통과 확인 → 사용자 승인 → push
```

### 🚨 신규 스포크 작성 시 필수 통과 게이트 (이거 어기면 push 차단/빌드 실패 — 실제로 당함)
1. **스포크당 `qa[]` ≥ 7개**, 그리고 `q:` 총합 ≥ 12개(qa 7 + faqData 5). `scripts/check-spoke-quality.sh`가 pre-push에서 검사. **5개로 만들면 push 차단된다.**
2. **Format A 필수** — `qa: [{ q, anchor, intro, highlights, table?/box? }]` 구조. `function Content()`(Format B) 금지.
3. **export 이름 고유** — registry에 이미 있는 이름과 충돌 금지(예: `군인SpokeContent` 중복 → `미래적금군인SpokeContent`처럼 접두사).
4. **manifest id 채번** — `PoliciesById`의 최대 숫자 +1. 4개 맵 모두 등록(ById/BySlug × Policies/Spokes).
5. **수치 내부 정합성** — 같은 값이 허브·스포크에 반복될 때 전수 일치(검색: `grep -rn "<수치>"`). 금리·기여금·수령액 계산이 서로 모순되지 않게.
6. **한글 slug 통일**(옵션 A) — 정책 spokes 배열 slug = registry 키 = content 폴더/파일명.

### 연관 키워드 묶음 규칙
같은 검색에서 함께 등장하는 유사 정책은 한 타이틀에 묶는다.
- 장애인연금 ↔ 장애수당 → "장애인연금 vs 장애수당, 어떻게 다르고 중복 되나"
- 근로장려금 ↔ 자녀장려금 → "근로장려금 받는데 자녀장려금도 같이 신청되나"
- 실업급여 ↔ 알바 → "실업급여 받으면서 알바 하면 신고해야 하나 | 소득 기준"

상세 패턴은 `docs/spoke-title-guide.md` 참조.

---

## 3. 정책 7유형 분류

| 유형 | 예시 | 표준 Q&A 7개 |
|---|---|---|
| `cash` | 고유가지원금·기초연금·부모급여 | 금액/누가/기간/방법/거동불편/중복/예외 |
| `savings` | 청년미래적금·청년도약계좌 | 매칭/조건/한도/만기/중도해지/세제/가입 |
| `loan` | 햇살론·새도약론 | 한도/금리/대상/상환/거치/은행/연체 |
| `service` | 아이돌봄·에너지바우처 | 서비스/대상/본인부담/한도/이용처/유효/신청 |
| `training` | 내일배움카드 | 금액/대상/기관/유효/실업급여/연장/신청 |
| `facility` | 장기요양·한부모시설 | 대상/등급/부담/시설/기간/신청/이의 |
| `tax` | 자녀세액공제 | 공제금액/대상/한도/요건/시기/소급/중복 |

자동 분류 로직: `lib/policy-types.ts`의 `TYPE_QUESTIONS` 참조.

---

## 4. 데이터 스키마 (1:1 대조 가능 구조)

```typescript
// data/policies/{keyword}.ts
export const 정책명Policy: PolicyData = {
  id: '3',
  type: 'cash',
  title: '2026 근로장려금',
  org: '국세청',

  // 모든 필드에 source 명시 — 자동 검증의 기준
  keyFacts: {
    지원유형: {
      value: '근로·사업소득에 따른 환급형 세액공제',
      source: {
        url: 'https://www.nts.go.kr/...',
        cardIndex: 1,
        text: '근로장려금은 근로·사업소득이 있는 가구에 환급',
        verifiedAt: '2026-05-13',
      },
    },
    최대지급액: {
      value: '단독가구 165만원',
      source: {
        url: 'https://www.nts.go.kr/...',
        cardIndex: 2,
        text: '단독가구 최대 165만원',
        verifiedAt: '2026-05-13',
      },
    },
    // ...
  },

  qa: [/* ... */],
  eligibility: [/* ... */],
  faq: [/* ... */],
  sources: [/* ... */],
};
```

모든 `value`는 `source.text`와 1:1 매칭되어야 한다.

---

## 5. 디자인 시스템

### 컬러 토큰 (`tailwind.config.ts`)
```
gov.navy: #003D88        — KRDS 표준 정부 블루
gov.orange: #F5A623      — 번호 배지
gov.highlight: #FFE873   — 형광 강조
gov.text: #191F28
gov.muted: #8B95A1
gov.border: #E5E8EB
```

### 카드뉴스 비주얼 표준
- 카드 헤더: 네이비 풀바, 22px bold 흰색 + 40px 오렌지 번호 배지
- 본문: 16px / line-height 1.8
- 핵심 단어: 노란 형광 강조 (`<Hi>` 컴포넌트)
- 카드 모서리: rounded-2xl (16px)
- 그림자: 0 4px 16px rgba(0, 61, 136, 0.08)

### 페이지 구조 (모든 정책 공통)
```
1. 헤더 (브레드크럼·제목·메타·에디터·CTA)
2. 접이식 목차 (7개 질문 · 기본 닫힘)
3. 핵심콕콕 (9행 키-값 · 노란 형광)
4. Q1~Q7 카드 (유형별 표준 질문)
5. FAQ (5개)
6. 출처 (정부 1차 자료 + 카드 인덱스)
7. 관련 정책
8. 사이드바 (스포크 9개)
```

---

## 6. 폴더 구조

```
app/
  layout.tsx                              ← 사이트 헤더·푸터
  page.tsx                                ← 홈
  policy/[id]/page.tsx                    ← 서버 컴포넌트 (얇음)
  policy/[id]/PolicyDetailClient.tsx      ← 클라이언트 (메인 렌더러)
  policy/[id]/[spoke]/                    ← 스포크 페이지
  og/[id]/route.tsx                       ← 자동 썸네일 (구현 예정)
  sitemap.ts                              ← 자동 sitemap

components/
  QACard.tsx                              ← 정부 카드뉴스 Q&A
  KeyFactsBox.tsx                         ← 핵심콕콕 박스
  CollapsibleTOC.tsx                      ← 접이식 목차
  PolicySidebar.tsx                       ← 스포크 사이드바

data/policies/
  {keyword}.ts                            ← 정책 데이터 (source 필드 포함)
  index.ts                                ← 정책 목록·메타

lib/
  policy-types.ts                         ← 7유형·TYPE_QUESTIONS·표준 스키마
  schema.ts                               ← JSON-LD 생성기
  verify.ts                               ← 자동 검증 (구현 예정)

scripts/
  collect-keywords.ts                     ← 검색어 수집 (이미 있음)
  extract-policy.ts                       ← 정부 자료 → JSON (구현 예정)
  verify-policy.ts                        ← 1:1 대조 검증 (구현 예정)
  generate-thumbnail.ts                   ← 썸네일 자동 (구현 예정)

.claude/
  skills/gov-write/SKILL.md               ← 메인 스킬 (워크플로우)
  hooks/                                  ← Stop 훅 (자동 검증)
  settings.json                           ← Claude 설정
```

---

## 7. 자동 1:1 대조 검증 시스템

### 스크립트: `scripts/verify-policy.ts`

```bash
# 단일 정책 검증
npm run verify -- 청년미래적금

# 전체 정책 검증
npm run verify -- --all
```

### 동작
1. `data/policies/{keyword}.ts` 로드
2. 모든 필드의 `source.url` Playwright로 접속
3. 카드뉴스 텍스트 추출 (`source.cardIndex`로 위치 특정)
4. `source.text`와 실제 페이지 텍스트 매칭
5. `value`와 매칭된 원본의 정보 일치 여부 확인
6. 불일치 발견 시 RED 출력 + 빌드 차단

### CI 통합
- `git push` 전 자동 실행 (pre-push hook)
- Cloudflare Pages 빌드 전 검증 (next.config.mjs)
- 매주 1회 cron으로 정부 자료 변경 감지 → 알림

---

## 8. 워크플로우 명령어

### 신규 정책 추가
```bash
# Claude Cowork에서
/gov-write 근로장려금

# 또는 자연어
"근로장려금 만들어줘"
```

### 단순 검증
```bash
npm run verify -- 청년미래적금
```

### 빌드·푸시
```bash
npm run build
git add . && git commit -m "feat: 근로장려금 추가" && git push
```

또는 `push.bat`

---

## 9. 콘텐츠 작성 금지·필수 사항

### 금지
- "민생에 플러스", "행정안전부" 등 정부 슬로건/부처 단독 표기
- 정부 로고, 태극기, 캐릭터 이미지
- "약 ", "정도", "대략" 등 추측 표현
- 가짜 수혜자 후기·임의 통계
- "1차 출처 미확인" 상태 푸시

### 필수
- 모든 페이지 하단 면책 문구: "본 사이트는 정부 공식 사이트가 아닙니다. 정보 출처는 [부처] 공식 자료입니다."
- 검수일 명시 (`마지막 검수: YYYY.MM.DD`)
- 에디터 표기: "정부지원사업 에디터 · [출처] 공식 자료 기반"
- 출처 URL 깊은 링크 (메인이 아닌 해당 정책 페이지)
- "최종 자격은 [정부 채널]에서 확인" 안내

---

## 10. 우선순위 다음 작업

1. **`scripts/extract-policy.ts`** — 정부 카드뉴스 URL → JSON 자동 추출
2. **`scripts/verify-policy.ts`** — 1:1 대조 자동 검증
3. **`app/og/[id]/route.tsx`** — 디스커버 썸네일 자동 생성 (1080x1080)
4. **`app/sitemap.ts`** — 정책 추가 시 자동 등록
5. **데이터 스키마 마이그레이션** — 기존 청년미래적금에 `source` 필드 추가
6. **`.claude/hooks/`** — Stop 훅으로 자동 검증

---

## 11. 사이트 정보

- 도메인: gov.jjyu.co.kr (Cloudflare Pages)
- GitHub: hyunjun82/jjyu-gov
- 배포: GitHub push → Cloudflare 자동 빌드
- 빌드: Next.js 15 App Router + React 19 + Tailwind 3 + TypeScript 5
- 페이지 라우팅: /policy/[id] · /policy/[id]/[spoke]
- 핵심 컴포넌트: QACard · KeyFactsBox · CollapsibleTOC · PolicySidebar

---

## 12. 검수 표준 (모든 페이지 통과 필수)

```
[ ] 모든 수치가 정부 1차 출처와 100% 일치
[ ] 모든 필드에 source 명시 (url + text + verifiedAt)
[ ] 추정/예시 표현 0개
[ ] 출처 URL이 깊은 링크 (메인 X)
[ ] 면책 문구 페이지 하단
[ ] 검수일 표시
[ ] JSON-LD 4종 (Article·Breadcrumb·FAQ·ItemList)
[ ] 모바일 반응형 정상
[ ] 빌드 성공 (npm run build)
[ ] 1:1 대조 검증 통과 (npm run verify)
```

이 12개 모두 PASS 후에만 push.

---

## 13. 품질 기준 (정량 측정, 자동 검증)

신규 정책 작성 시 아래 10개 기준을 모두 충족해야 한다. 미달 시 작성자(Claude) 자동 재작성.

```
[Q1]  qa 배열 길이 ≥ 7
[Q2]  각 qa[i].intro 본문 길이 ≥ 200자
[Q3]  각 qa[i]에 시각 요소 ≥ 1개 (table, box, hasEligibilityChecker, hasApplyMethodTabs 중 하나)
[Q4]  qa 안 table 총 개수 ≥ 2
[Q5]  qa 안 box 총 개수 ≥ 3 (box + box2 모두 카운트)
[Q6]  qa 안 highlights 총 개수 ≥ 15 (각 qa[i].highlights 합계)
[Q7]  모든 keyFacts·qa·table·box에 source 또는 sourceNote 명시
[Q8]  faq 배열 길이 ≥ 5 (정부 자료 또는 PAA 기반)
[Q9]  sources 배열 길이 ≥ 3
[Q10] 정부 카드뉴스 텍스트와 1:1 매칭 (자동 검증 스크립트로 확인)
```

검증 명령:
```bash
npm run verify -- {정책명}
# 또는
npm run verify -- --all
```

검증 통과율 80% 미만이면 빌드·푸시 차단.

---

## 14. 기준 케이스 = 정부 공식 카드뉴스 원본

**진짜 기준은 정부 공식 카드뉴스. 우리 데이터 파일이 아님.**

### 기준 A — 청년미래적금 (savings 유형)
- 정부 자료: 금융위 카드뉴스 7장
- URL: https://www.fsc.go.kr/no040101?cnId=3187
- 발표일: 2026.04.24
- 카드 내용:
  - 카드 1: 표지 (청년미래적금 6월 출시 예정)
  - 카드 2: 매월 50만원, 3년 만기, 정부 기여금, 이자소득세 면제
  - 카드 3: 비대면 앱, 연 2회(6·12월), 자산형성 중복 OK
  - 카드 4: 만 19~34세 + 병역 6년 + 1991.1~5월 특례
  - 카드 5: 총급여 7,500만/연매출 3억 + 가구 중위 200%
  - 카드 6: 일반형 6% / 우대형 12% (4케이스)
  - 카드 7: 도약계좌 → 미래적금 갈아타기

### 기준 B — 고유가 피해지원금 (cash 유형)
- 정부 자료: 행정안전부 정책브리핑 카드뉴스 8장
- URL: https://www.korea.kr/multi/visualNewsView.do?newsId=148963017
- 발표일: 2026.04.20
- 카드 내용:
  - 카드 1: 표지
  - 카드 2: 지급 금액표 (소득×지역 4×3)
  - 카드 3: 우대지원지역 vs 특별지원지역 (89개 시군)
  - 카드 4: 사전 알림 (20개 앱 + 국민비서)
  - 카드 5: 신청 기간 (1차·2차) + 요일제
  - 카드 6: 누가 신청 (성인·미성년)
  - 카드 7: 거동 불편 시 찾아가는 신청
  - 카드 8: 1차 받으면 2차 신청 불가

### 작성 워크플로우 (필수 순서)

**Phase 0: 기준 케이스 강제 학습 (생략 불가)**

신규 정책 작성 전 반드시 다음 폴더의 이미지를 **모두 Read 도구로 직접 본다**:

```
C:\Users\user\gov-jjyu\reference\cards\청년미래적금\01.jpg ~ 07.jpg  (7장)
C:\Users\user\gov-jjyu\reference\cards\고유가지원금\01.jpg ~ 08.jpg  (8장)
```

확인할 것:
- 각 카드의 정보 분량 (텍스트 양)
- 표·그래프·박스 사용 패턴
- 형광 강조 단어 사용 빈도
- 정보 위계 (제목·핵심·디테일·주의사항)
- 시각 요소의 종류와 배치

**이 두 케이스보다 정보 깊이·시각 요소·정확도가 떨어지면 작성 X. 무조건 동등 또는 우수 품질이어야 함.**

**Phase 1~7 (이미지 학습 후)**

1. 신규 정책 키워드 확인
2. **정부 공식 카드뉴스 URL 찾기** (korea.kr 또는 부처 사이트)
3. **카드 한 장씩 캡처 + 텍스트 추출** (Claude in Chrome)
4. 우리 데이터 파일에 모든 정부 카드 내용 1:1 매칭으로 포함
5. 정부 카드뉴스에 있는데 우리 글에 빠진 정보 = 0 (완전 매칭)
6. 정부 카드뉴스에 없는 정보 추가 = 0 (추가 금지)
7. **기준 케이스 2개와 비교 자가 점검**:
   - Q&A 카드 수: 청년미래적금(7) / 고유가지원금(8) 이상
   - 표 개수: 청년미래적금(3) / 고유가지원금(3) 이상
   - 박스 개수: 청년미래적금(4) / 고유가지원금(3) 이상
   - 형광 강조: 청년미래적금(20+) / 고유가지원금(20+) 이상
   - 분량: 청년미래적금 본문 / 고유가지원금 본문 이상
8. `npm run verify` 실행
9. 기준 미달 시 정부 카드뉴스 원본 + reference 이미지 다시 확인 → 누락 항목 보강
10. 통과 시 푸시

### 1:1 매칭 검증 기준

신규 정책 데이터에 다음이 있어야 한다:
- 정부 카드뉴스 N장 → 우리 페이지 Q&A N개 이상
- 정부 카드의 모든 수치 → 우리 데이터에 동일 수치
- 정부 카드의 모든 표 → 우리 데이터에 동일 표 구조
- 정부 카드의 출처·발표일·부처 → 우리 페이지 출처 섹션
- 정부 카드 텍스트 90% 이상이 우리 페이지에 포함

### 절대 금지

- 정부 카드뉴스 원본 안 보고 일반 지식으로 작성 X
- 정부 카드에 있는 수치·정책 누락 X
- 정부 카드에 없는 수치·예시 추가 X
- 정부 카드보다 정보량 적게 X
- 검증 통과 전 푸시 X

