# ✅ 통과 — new-business-freelancer-eligibility

- 타이틀: 신규사업자와 프리랜서 중간예납 대상 여부, 첫해 기준과 근로소득 겸업 (spec 고정 — 사장님이 줌)
- 키워드: 종합소득세 중간예납 · 허브: 종합소득세 중간예납이란 무엇인가요, 고지 대상 기준과 꼭 내야 하는지 (/policy/income-tax-interim-payment) · 폴더: 중간예납
- 실행: 2026. 9. 20. 오전 11:57:50 · 총 12.2분 · 고친 횟수 1 · 모델 sonnet
- 글: app/policy/[id]/[spoke]/content/중간예납/신규프리랜서중간예납.tsx → https://gov.jjyu.co.kr/policy/income-tax-interim-payment/new-business-freelancer-eligibility/
- 정본으로 쓴 글: app/policy/[id]/[spoke]/content/실손보험/나이별실비보험료.tsx

## 단계별 시간·사용량
| 단계 | 시간 | 모델 호출 | 입력 토큰 | 출력 토큰 | 환산 $ |
|---|---|---|---|---|---|
| guard | 0.0분 | - | - | - | - |
| plan | 2.0분 | 1 | 56k | 9k | 0.21 |
| cta | 0.0분 | - | - | - | - |
| collect | 0.7분 | - | - | - | - |
| captures | 0.5분 | 1 | 257k | 1k | 0.16 |
| write | 5.2분 | 1 | 301k | 33k | 0.73 |
| fix | 1.4분 | 1 | 241k | 8k | 0.35 |
| gates | 2.3분 | - | - | - | - |
| **합계** | **12.2분** | **4** | **855k** | **51k** | **1.45** |

> 구독이라 실제 청구는 없습니다. 환산 $ 는 사용 한도를 얼마나 먹었는지의 척도입니다. 호출마다 고정비(시스템 프롬프트) 약 3만 토큰이 붙습니다.

## 설계도 (구성표)
- 타이틀·소제목: spec 고정 (글자 그대로)
1. 올해 사업을 시작했는데 중간예납 대상인가요?
2. 첫해에는 기준이 되는 세금이 없지 않나요?
3. 프리랜서도 고지서가 오나요?  ← 버튼 슬롯
4. 직장 다니면서 사업소득이 있으면 어떻게 되나요?  ← 버튼 슬롯
- 상단 버튼: [내 중간예납 여부 확인하기] → /policy/income-tax-interim-payment
- qa3 버튼: [프리랜서 고지 내역 조회하기] → /policy/income-tax-interim-payment/notice-timing-hometax-lookup/
- qa4 버튼: [겸업자 중간예납 세액 계산하기] → /policy/income-tax-interim-payment/tax-calculation-half-rule/
  - ✓ /policy/income-tax-interim-payment (내부 경로)
  - ✓ /policy/income-tax-interim-payment/notice-timing-hometax-lookup/ (내부 경로)
  - ✓ /policy/income-tax-interim-payment/tax-calculation-half-rule/ (내부 경로)
- 출처: https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95/%EC%A0%9C65%EC%A1%B0 , https://www.law.go.kr/lsInfoP.do?lsiSeq=22305 , https://portal.scourt.go.kr/pgp/main.on?w2xPath=PGP1012M01&&jisCntntsSrno=2026000036690&&prvsNo=64&&prvsBrncNo=0&&jisCntntsKndCd=03&&viewDvsCd=01&c=900 , https://www.law.go.kr/lsLinkCommonInfo.do?lsJoLnkSeq=1032471989
- 오해 소지: 사업자등록만 하면 첫해부터 무조건 중간예납 대상이라고 오해 / 프리랜서는 사업소득자니 무조건 중간예납 고지서가 온다고 오해 / 근로소득자는 중간예납과 무관하다고 오해(사업소득 겸업 시 해당될 수 있음)

## 증거
- 추출본 scripts/output/source-new-business-freelancer-eligibility.txt 13815자 · 캡처 4장 (scripts/output/captures/new-business-freelancer-eligibility-*.png)
  - new-business-freelancer-eligibility-1.png: 국가법령정보센터, 소득세법 제65조(중간예납) 본문 화면 — 1항 중간예납세액(전년세액 2분의1), 3항 중간예납추계액(기준액 100분의30 미만 시 신고), 8항 계산식 박스(중간예납추계액=종합소득산출세액/2 - 감면세액 등), 법률 제21221호 2025.12.23. 일부개정 표시.
  - new-business-freelancer-eligibility-2.png: 국가법령정보센터 연혁법령, 대통령령 제9962호 1980.7.11. 제정 '소득세및법인세중간예납등특례규정' — 제1조(소득세의 중간예납세액) 부가가치세 과세표준 100분의50·100분의80 기준 표, 제2조(법인세의 중간예납세액) 동일 구조.
  - new-business-freelancer-eligibility-3.png: 국가법령정보센터 법령조문 화면, 소득세법 시행규칙 제64조(중간예납에서 제외되는 소득) 2026.05.22 일부개정(제33호) — 1호 저술가·화가·배우 등 자유직업소득, 2호 보험모집인 등 독립적 지위 소득, 3호 방문판매업무 수당, 4·5호 조특법 관련 공동사업, 하단 관련판례 서울고등법원 2018.01.09 선고 2017누66345 판결(종합소득세부과처분무효확인) 1건.
  - new-business-freelancer-eligibility-4.png: 국가법령정보센터 조문정보, 소득세법 시행령[시행 2026.7.1.][대통령령 제36343호, 2026.5.22. 일부개정] 제125조(중간예납추계액의 신고와 조사결정) — 1항 법 제65조제3항·제5항 신고서 제출 규정, 2항 신고 안 하면 법 제80조 준용해 세무서장이 조사결정 가능.

## 검사 (회차별)
| 검사 | 초안 | 고침 1 |
|---|---|---|
| 사전 검사 (article-check) | ✗ | · |
| tsc (타입) | · | ✓ |
| 원문 대조 (check-source-match) | · | ✓ |
| 수치 ↔ 출처 (check-source-backing) | · | ✓ |
| 버튼 도배 (check-button-variety) | · | ✓ |
| 승인 도장 (check-stage-approval) | · | ✓ |
| 출처 링크 (check-source-links) | · | ✓ |
| 배선 (verify-integrity) | · | ✓ |
| 화면 (dev 렌더) | · | ✓ |

## 실패 내용 — 초안
### 사전 검사 (article-check)
```
❌ 근거 없는 말: 대개 — 원문에 비율이 있으면 그 수치를, 없으면 조건문으로
```

## 렌더 캡처
![new-business-freelancer-eligibility](new-business-freelancer-eligibility.png)

## 다음
- 이 보고서와 캡처를 보고 승인 → 배치가 다 끝나면 한 번에 커밋·푸시 (pre-push 게이트가 한 번 더 본다). 자동 푸시는 없다.
- 산출물: scripts/output/{plan,stage2,outline,factsheet,spec}-new-business-freelancer-eligibility.* · source-new-business-freelancer-eligibility.txt · captures/new-business-freelancer-eligibility-*.png
