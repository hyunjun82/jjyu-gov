# ✅ 통과 — closed-business-notice-refund

- 타이틀: 폐업 후 종합소득세 중간예납 고지서, 납부 의무와 환급 신청 방법 (spec 고정 — 사장님이 줌)
- 키워드: 종합소득세 중간예납 · 허브: 종합소득세 중간예납이란 무엇인가요, 고지 대상 기준과 꼭 내야 하는지 (/policy/income-tax-interim-payment) · 폴더: 중간예납
- 실행: 2026. 9. 20. 오전 11:40:34 · 총 13.6분 · 고친 횟수 1 · 모델 sonnet
- 글: app/policy/[id]/[spoke]/content/중간예납/폐업중간예납환급.tsx → https://gov.jjyu.co.kr/policy/income-tax-interim-payment/closed-business-notice-refund/
- 정본으로 쓴 글: app/policy/[id]/[spoke]/content/실손보험/나이별실비보험료.tsx

## 단계별 시간·사용량
| 단계 | 시간 | 모델 호출 | 입력 토큰 | 출력 토큰 | 환산 $ |
|---|---|---|---|---|---|
| guard | 0.1분 | - | - | - | - |
| plan | 2.0분 | 1 | 56k | 8k | 0.20 |
| cta | 0.0분 | - | - | - | - |
| collect | 0.8분 | - | - | - | - |
| captures | 0.4분 | 1 | 103k | 2k | 0.14 |
| write | 5.0분 | 1 | 114k | 28k | 0.69 |
| gates | 3.7분 | - | - | - | - |
| fix | 1.6분 | 1 | 112k | 8k | 0.49 |
| **합계** | **13.6분** | **4** | **386k** | **47k** | **1.52** |

> 구독이라 실제 청구는 없습니다. 환산 $ 는 사용 한도를 얼마나 먹었는지의 척도입니다. 호출마다 고정비(시스템 프롬프트) 약 3만 토큰이 붙습니다.

## 설계도 (구성표)
- 타이틀·소제목: spec 고정 (글자 그대로)
1. 폐업했는데도 중간예납 고지서가 오나요?
2. 폐업했으면 내지 않아도 되나요?
3. 이미 낸 돈은 돌려받을 수 있나요?  ← 버튼 슬롯
4. 환급은 어디에 신청하나요?  ← 버튼 슬롯
- 상단 버튼: [내 고지세액 열람하기] → /policy/income-tax-interim-payment/notice-timing-hometax-lookup/
- qa3 버튼: [중간예납 전체 정리하기] → /policy/income-tax-interim-payment
- qa4 버튼: [기납부세액 환급 찾기] → /policy/income-tax-interim-payment/prepaid-credit-may-refund/
  - ✓ /policy/income-tax-interim-payment/notice-timing-hometax-lookup/ (내부 경로)
  - ✓ /policy/income-tax-interim-payment (내부 경로)
  - ✓ /policy/income-tax-interim-payment/prepaid-credit-may-refund/ (내부 경로)
- 출처: https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95 , https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95/%EC%A0%9C65%EC%A1%B0 , https://www.law.go.kr/%ED%96%89%EC%A0%95%EA%B7%9C%EC%B9%99/%EC%86%8C%EB%93%9D%EC%84%B8%EC%82%AC%EB%AC%B4%EC%B2%98%EB%A6%AC%EA%B7%9C%EC%A0%95 , https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?mi=2237&cntntsId=7774
- 오해 소지: 폐업 신고만 하면 중간예납 고지서가 자동으로 취소된다고 오해한다 / 이미 낸 중간예납 세액은 폐업하면 그냥 사라지는 돈이라고 생각한다 / 환급은 국세청이 알아서 계좌로 넣어준다고 생각해 따로 신청하지 않는다

## 증거
- 추출본 scripts/output/source-closed-business-notice-refund.txt 440584자 · 캡처 4장 (scripts/output/captures/closed-business-notice-refund-*.png)
  - closed-business-notice-refund-1.png: 법제처 국가법령정보센터, 소득세법 조문 화면(시행 2026.7.1, 법률 제21221호). 제1조(목적), 제1조의2(정의: 거주자·비거주자·내국법인·외국법인·사업자), 제2조(납세의무) 조문 전문이 보임.
  - closed-business-notice-refund-2.png: 법제처 국가법령정보센터, 소득세법(시행 2026.1.1, 법률 제21221호) 제65조(중간예납) 조문 전문. 중간예납기준액의 2분의 1 납부, 11월 30일 고지·징수, 중간예납추계액 계산식 박스(종합소득산출세액÷2 - 세액공제액 등)가 보임.
  - closed-business-notice-refund-3.png: 법제처 행정규칙, 소득세사무처리규정(시행 2026.7.1, 국세청훈령 제2743호) 화면. 제1조(목적), 제2조(정의) 1~22호 용어 정의(사업자·소득자료·금융소득자료·과세자료·현장확인·세무서장 등)가 나열됨.
  - closed-business-notice-refund-4.png: 국세청 홈택스 '국세신고안내 > 중간예납 안내' 페이지. 탭 3개(중간예납제도의 취지 및 납부대상자/중간납부세액의 계산 및 납부방법/중간예납추계액 신고 안내) 중 가운데 탭 선택 상태. 아래 표에 금융기관명·인터넷주소·ARS전화번호·접속방법 행이 은행·카드사별로 나열(홈택스 hometax.go.kr, 경남은행 knbank ARS 1588-8585, 국민은행 kbstar ARS 1588-9999 경로 881→국번없이(4)→사용자등록번호, 기업은행 ibk, 농협중앙회 nonghyup, 대구은행 dgb, 부산은행 busanbank, 수협중앙회 suhyup, 신한은행 shinhan, 하나은행 kebhana, 우체국 epostbank, 전북은행 jbbank, 제일은행 standardchartered, 제주은행 jejubank, 우리은행 wooribank, 삼성카드 samsungcard, 신한카드 shinhancard, 하나카드 hanacard).

## 검사 (회차별)
| 검사 | 초안 | 고침 1 |
|---|---|---|
| tsc (타입) | ✓ | ✓ |
| 원문 대조 (check-source-match) | ✓ | ✓ |
| 수치 ↔ 출처 (check-source-backing) | ✓ | ✓ |
| 버튼 도배 (check-button-variety) | ✗ | ✓ |
| 승인 도장 (check-stage-approval) | ✓ | ✓ |
| 출처 링크 (check-source-links) | ✓ | ✓ |
| 배선 (verify-integrity) | ✓ | ✓ |
| 화면 (dev 렌더) | ✓ | ✓ |

## 실패 내용 — 초안
### 버튼 도배 (check-button-variety)
```
❌ [중간예납] 상단 버튼 — 끝 어절 "조회하기" 이 3/7개 (43%). 상한 40%. 같은 틀을 돌려쓰고 있다.
```

## 렌더 캡처
![closed-business-notice-refund](closed-business-notice-refund.png)

## 다음
- 이 보고서와 캡처를 보고 승인 → 배치가 다 끝나면 한 번에 커밋·푸시 (pre-push 게이트가 한 번 더 본다). 자동 푸시는 없다.
- 산출물: scripts/output/{plan,stage2,outline,factsheet,spec}-closed-business-notice-refund.* · source-closed-business-notice-refund.txt · captures/closed-business-notice-refund-*.png
