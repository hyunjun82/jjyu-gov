# ✅ 통과 — unpaid-penalty-seizure

- 타이틀: 종합소득세 중간예납 미납하면 어떻게 되나요, 가산세와 독촉장 압류까지 (spec 고정 — 사장님이 줌)
- 키워드: 종합소득세 중간예납 · 허브: 종합소득세 중간예납이란 무엇인가요, 고지 대상 기준과 꼭 내야 하는지 (/policy/income-tax-interim-payment) · 폴더: 중간예납
- 실행: 2026. 9. 20. 오후 12:12:38 · 총 6.9분 · 고친 횟수 0 · 모델 sonnet
- 글: app/policy/[id]/[spoke]/content/중간예납/중간예납미납압류.tsx → https://gov.jjyu.co.kr/policy/income-tax-interim-payment/unpaid-penalty-seizure/
- 정본으로 쓴 글: app/policy/[id]/[spoke]/content/실손보험/나이별실비보험료.tsx

## 단계별 시간·사용량
| 단계 | 시간 | 모델 호출 | 입력 토큰 | 출력 토큰 | 환산 $ |
|---|---|---|---|---|---|
| guard | 0.0분 | - | - | - | - |
| plan | 0.0분 | - | - | - | - |
| cta | 0.0분 | - | - | - | - |
| collect | 0.0분 | - | - | - | - |
| captures | 0.0분 | - | - | - | - |
| write | 5.2분 | 1 | 114k | 35k | 0.76 |
| gates | 1.5분 | - | - | - | - |
| **합계** | **6.9분** | **1** | **114k** | **35k** | **0.76** |

> 구독이라 실제 청구는 없습니다. 환산 $ 는 사용 한도를 얼마나 먹었는지의 척도입니다. 호출마다 고정비(시스템 프롬프트) 약 3만 토큰이 붙습니다.

## 설계도 (구성표)
- 타이틀·소제목: spec 고정 (글자 그대로)
1. 중간예납을 안 내면 어떻게 되나요?
2. 가산세는 얼마나 붙나요?
3. 독촉장을 받으면 어떻게 하나요?  ← 버튼 슬롯
4. 계속 밀리면 압류까지 가나요?  ← 버튼 슬롯
- 상단 버튼: [중간예납 고지세액 조회하기] → /policy/income-tax-interim-payment/notice-timing-hometax-lookup/
- qa3 버튼: [밀린 중간예납 세액 계산하기] → /policy/income-tax-interim-payment/tax-calculation-half-rule/
- qa4 버튼: [독촉장 받으면 바로 납부하기] → https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?mi=2237&cntntsId=7774
  - ✓ /policy/income-tax-interim-payment/notice-timing-hometax-lookup/ (내부 경로)
  - ✓ /policy/income-tax-interim-payment/tax-calculation-half-rule/ (내부 경로)
  - ✓ https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?mi=2237&cntntsId=7774 (국세청>국세신고안내>개인신고안내>종합소득세>중간예납 안내> 중간예납세액의 계산 및 납부방법)
- 출처: https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95/%EC%A0%9C65%EC%A1%B0 , https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B5%AD%EC%84%B8%EA%B8%B0%EB%B3%B8%EB%B2%95 , https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B5%AD%EC%84%B8%EC%A7%95%EC%88%98%EB%B2%95 , https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?mi=2237&cntntsId=7774
- 오해 소지: 중간예납을 안 내도 5월 확정신고 때 한 번에 정산하면 된다고 착각 / 가산세는 한 번만 붙는다고 생각하지만 실제로는 미납 일수만큼 매일 가산 / 독촉장을 받아도 계속 미루면 별일 없을 거라 생각하지만 압류로 이어질 수 있음

## 증거
- 추출본 scripts/output/source-unpaid-penalty-seizure.txt 240376자 · 캡처 4장 (scripts/output/captures/unpaid-penalty-seizure-*.png)
  - unpaid-penalty-seizure-1.png: 법제처 국가법령정보센터, 소득세법 제65조(중간예납) 조문 화면. 시행 2026.1.1. 법률 제21221호, 중간예납세액=중간예납기준액의 1/2, 11월 30일까지 징수·11월 1~15일 납부고지서 발급, 중간예납추계액 계산식(종합소득과세표준=중간예납기간 종합소득금액×2-이월결손금-종합소득공제) 표시.
  - unpaid-penalty-seizure-2.png: 법제처 국가법령정보센터, 국세기본법 제1조(목적)·제2조(정의) 화면. 시행 2026.8.11. 법률 제21860호, 국세 항목(가.소득세~타.농어촌특별세)과 강제징수비·가산세·공과금 등 용어 정의 나열, 압류·보관·운반·매각 비용 관련 조문 보임.
  - unpaid-penalty-seizure-3.png: 법제처 국가법령정보센터, 국세징수법 제1~4조 화면. 시행 2026.6.2. 법률 제21713호, 제3조(징수의 순위) 1.강제징수비 2.국세(가산세 제외) 3.가산세 순서로 명시, 체납·체납액 정의 조문 보임.
  - unpaid-penalty-seizure-4.png: 국세청 홈택스 '중간예납 안내' 페이지, 인터넷·ARS·ATM 국세전자납부 방법과 은행별 접속표(경남은행 www.knbank.co.kr ARS 1588-8585, 국민은행 1588-9999, 농협중앙회 1588-2100, 신한은행 1544-8000, 우리은행 1588-5000 등 금융기관명·인터넷주소·ARS전화번호·접속방법 열로 구성된 표) 표시.

## 검사 (회차별)
| 검사 | 초안 |
|---|---|
| tsc (타입) | ✓ |
| 원문 대조 (check-source-match) | ✓ |
| 수치 ↔ 출처 (check-source-backing) | ✓ |
| 버튼 도배 (check-button-variety) | ✓ |
| 승인 도장 (check-stage-approval) | ✓ |
| 출처 링크 (check-source-links) | ✓ |
| 배선 (verify-integrity) | ✓ |
| 화면 (dev 렌더) | ✓ |

## 렌더 캡처
![unpaid-penalty-seizure](unpaid-penalty-seizure.png)

## 다음
- 이 보고서와 캡처를 보고 승인 → 배치가 다 끝나면 한 번에 커밋·푸시 (pre-push 게이트가 한 번 더 본다). 자동 푸시는 없다.
- 산출물: scripts/output/{plan,stage2,outline,factsheet,spec}-unpaid-penalty-seizure.* · source-unpaid-penalty-seizure.txt · captures/unpaid-penalty-seizure-*.png
