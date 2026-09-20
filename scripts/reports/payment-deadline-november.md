# ✅ 통과 — payment-deadline-november

- 타이틀: 종합소득세 중간예납 납부 기한과 11월 일정, 카드 납부와 납기 연장 (spec 고정 — 사장님이 줌)
- 키워드: 종합소득세 중간예납 · 허브: 종합소득세 중간예납이란 무엇인가요, 고지 대상 기준과 꼭 내야 하는지 (/policy/income-tax-interim-payment) · 폴더: 중간예납
- 실행: 2026. 9. 20. 오전 10:37:14 · 총 9.9분 · 고친 횟수 0 · 모델 sonnet
- 글: app/policy/[id]/[spoke]/content/중간예납/중간예납납부기한11월.tsx → https://gov.jjyu.co.kr/policy/income-tax-interim-payment/payment-deadline-november/
- 정본으로 쓴 글: app/policy/[id]/[spoke]/content/실손보험/나이별실비보험료.tsx

## 단계별 시간·사용량
| 단계 | 시간 | 모델 호출 | 입력 토큰 | 출력 토큰 | 환산 $ |
|---|---|---|---|---|---|
| guard | 0.1분 | - | - | - | - |
| plan | 3.7분 | 2 | 111k | 19k | 0.43 |
| cta | 0.1분 | - | - | - | - |
| collect | 0.7분 | - | - | - | - |
| captures | 0.3분 | 1 | 101k | 777 | 0.12 |
| write | 3.7분 | 1 | 103k | 20k | 0.56 |
| gates | 1.3분 | - | - | - | - |
| **합계** | **9.9분** | **4** | **315k** | **40k** | **1.11** |

> 구독이라 실제 청구는 없습니다. 환산 $ 는 사용 한도를 얼마나 먹었는지의 척도입니다. 호출마다 고정비(시스템 프롬프트) 약 3만 토큰이 붙습니다.

## 설계도 (구성표)
- 타이틀·소제목: spec 고정 (글자 그대로)
1. 중간예납은 몇 월에 내나요?
2. 납부 기한은 11월 며칠까지인가요?
3. 카드로도 납부할 수 있나요?  ← 버튼 슬롯
4. 납기 연장을 신청할 수 있나요?  ← 버튼 슬롯
- 상단 버튼: [카드 납부방법 확인하기] → https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?mi=2237&cntntsId=7774
- qa3 버튼: [내 고지세액 조회하기] → /policy/income-tax-interim-payment/notice-timing-hometax-lookup/
- qa4 버튼: [중간예납 세액 계산하기] → /policy/income-tax-interim-payment/tax-calculation-half-rule/
  - ✓ https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?mi=2237&cntntsId=7774 (국세청>국세신고안내>개인신고안내>종합소득세>중간예납 안내> 중간예납세액의 계산 및 납부방법)
  - ✓ /policy/income-tax-interim-payment/notice-timing-hometax-lookup/ (내부 경로)
  - ✓ /policy/income-tax-interim-payment/tax-calculation-half-rule/ (내부 경로)
- 출처: https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95/%EC%A0%9C65%EC%A1%B0 , https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?mi=2237&cntntsId=7774 , https://www.law.go.kr/%ED%96%89%EC%A0%95%EA%B7%9C%EC%B9%99/%EC%86%8C%EB%93%9D%EC%84%B8%EC%82%AC%EB%AC%B4%EC%B2%98%EB%A6%AC%EA%B7%9C%EC%A0%95
- 오해 소지: 신용카드 포인트나 무이자 할부가 중간예납에도 무조건 된다고 착각(수수료 발생 사실을 놓침) / 납기 연장을 특별한 사유 없이 그냥 신청만 하면 되는 줄 착각 / 11월 30일이 아니라 종합소득세 확정신고 기간(5월)과 혼동해 날짜를 착각

## 증거
- 추출본 scripts/output/source-payment-deadline-november.txt 69135자 · 캡처 3장 (scripts/output/captures/payment-deadline-november-*.png)
  - payment-deadline-november-1.png: 국가법령정보센터 소득세법 제65조(중간예납) 조문 화면, 시행 2026.1.1./법률 제21221호, 중간예납기간 1월1일~6월30일, 납부고지서 발급 11월1일~11월15일, 납부기한 11월30일, 중간예납추계액 신고 100분의 30 미달 시 11월1일~11월30일 신고
  - payment-deadline-november-2.png: 국세청 홈택스 '중간예납 안내' 페이지, 탭 3개(중간예납제도의 취지 및 납부대상자/중간예납세액의 계산 및 납부방법/중간예납추계액 신고 안내), 인터넷·ARS·ATM 전자납부 방법과 은행별 인터넷주소·ARS전화번호·접속방법 표(경남은행 1588-8585, 국민은행 1588-9999, 신한은행 1544-8000, 우리은행 1588-5000 등 19개 금융기관 나열)
  - payment-deadline-november-3.png: 국가법령정보센터 행정규칙 '소득세사무처리규정' 본문, 시행 2026.7.1./국세청훈령 제2743호, 제1장 총칙 제1조(목적)·제2조(정의) 조문 나열(사업자·소득자료·금융소득자료·과세자료 등 용어 정의 22개 항목), 중간예납 관련 구체 수치는 이 화면에 없음

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
![payment-deadline-november](payment-deadline-november.png)

## 다음
- 이 보고서와 캡처를 보고 승인 → 배치가 다 끝나면 한 번에 커밋·푸시 (pre-push 게이트가 한 번 더 본다). 자동 푸시는 없다.
- 산출물: scripts/output/{plan,stage2,outline,factsheet,spec}-payment-deadline-november.* · source-payment-deadline-november.txt · captures/payment-deadline-november-*.png
