# ✅ 통과 — installment-split-payment

- 타이틀: 종합소득세 중간예납 분납 기준과 신청, 분납 고지서와 2차 납부 기한 (spec 고정 — 사장님이 줌)
- 키워드: 종합소득세 중간예납 · 허브: 종합소득세 중간예납이란 무엇인가요, 고지 대상 기준과 꼭 내야 하는지 (/policy/income-tax-interim-payment) · 폴더: 중간예납
- 실행: 2026. 9. 20. 오전 10:50:09 · 총 12.9분 · 고친 횟수 1 · 모델 sonnet
- 글: app/policy/[id]/[spoke]/content/중간예납/중간예납분납기준.tsx → https://gov.jjyu.co.kr/policy/income-tax-interim-payment/installment-split-payment/
- 정본으로 쓴 글: app/policy/[id]/[spoke]/content/실손보험/나이별실비보험료.tsx

## 단계별 시간·사용량
| 단계 | 시간 | 모델 호출 | 입력 토큰 | 출력 토큰 | 환산 $ |
|---|---|---|---|---|---|
| guard | 0.1분 | - | - | - | - |
| plan | 2.0분 | 1 | 56k | 10k | 0.22 |
| cta | 0.1분 | - | - | - | - |
| collect | 0.7분 | - | - | - | - |
| captures | 0.4분 | 1 | 257k | 1k | 0.17 |
| write | 5.0분 | 1 | 249k | 28k | 0.79 |
| gates | 3.0분 | - | - | - | - |
| fix | 1.6분 | 1 | 112k | 9k | 0.49 |
| **합계** | **12.9분** | **4** | **674k** | **48k** | **1.67** |

> 구독이라 실제 청구는 없습니다. 환산 $ 는 사용 한도를 얼마나 먹었는지의 척도입니다. 호출마다 고정비(시스템 프롬프트) 약 3만 토큰이 붙습니다.

## 설계도 (구성표)
- 타이틀·소제목: spec 고정 (글자 그대로)
1. 중간예납도 나눠 낼 수 있나요?
2. 얼마를 넘어야 분납이 되나요?
3. 분납은 어떻게 신청하나요?  ← 버튼 슬롯
4. 분납 2차분은 언제까지 내나요?  ← 버튼 슬롯
- 상단 버튼: [내 중간예납 세액 조회하기] → /policy/income-tax-interim-payment/notice-timing-hometax-lookup/
- qa3 버튼: [분납 홈택스로 신청하기] → https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?mi=2237&cntntsId=7774
- qa4 버튼: [중간예납 납부기한 확인하기] → /policy/income-tax-interim-payment/payment-deadline-november/
  - ✓ /policy/income-tax-interim-payment/notice-timing-hometax-lookup/ (내부 경로)
  - ✓ https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?mi=2237&cntntsId=7774 (국세청>국세신고안내>개인신고안내>종합소득세>중간예납 안내> 중간예납세액의 계산 및 납부방법)
  - ✓ /policy/income-tax-interim-payment/payment-deadline-november/ (내부 경로)
- 출처: https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95/%EC%A0%9C65%EC%A1%B0 , https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95 , https://www.law.go.kr/%ED%96%89%EC%A0%95%EA%B7%9C%EC%B9%99/%EC%86%8C%EB%93%9D%EC%84%B8%EC%82%AC%EB%AC%B4%EC%B2%98%EB%A6%AC%EA%B7%9C%EC%A0%95 , https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?mi=2237&cntntsId=7774
- 오해 소지: 중간예납은 무조건 한 번에 내야 한다고 오해 / 분납을 신청하면 전체 세액이 줄어든다고 착각(실제론 납부 시기만 나뉨) / 확정신고 분납과 중간예납 분납 기준이 같은 줄 알고 헷갈림

## 증거
- 추출본 scripts/output/source-installment-split-payment.txt 440568자 · 캡처 4장 (scripts/output/captures/installment-split-payment-*.png)
  - installment-split-payment-1.png: 법제처 국가법령정보센터 소득세법(시행 2026.1.1., 법률 제21221호) 제65조(중간예납) 조문 화면 — 분납 관련 제2항, 중간예납세액 결정·납부고지서, 중간예납추계액 계산식(종합소득산출세액/2 - 세액공제액 등) 박스 표시, 납세지 관할 세무서장·11월30일 기한 텍스트만 있고 표는 없음
  - installment-split-payment-2.png: 법제처 국가법령정보센터 소득세법(시행 2026.7.1., 법률 제21221호) 본문 첫 화면 — 제1장 총칙, 제1조(목적)·제1조의2(정의: 거주자·비거주자·내국법인·외국법인·사업자)·제2조(납세의무) 조문, 분할납부 관련 내용은 이 페이지에 보이지 않음
  - installment-split-payment-3.png: 법제처 국가법령정보센터 소득세사무처리규정(국세청훈령 제2743호, 시행 2026.7.1.) 제1장 총칙 화면 — 제1조(목적)·제2조(정의) 1~22호 용어 정의(사업자, 소득자료, 금융소득자료, 과세자료, 신고내용확인, 현장확인, 전산매체, 송부, 통보, 이송, 반송, 조회, 인계인수, 주소지서장, 사업장서장, 세무서장, 소득세담당과장 등) 나열, 분할납부 조항은 보이지 않음
  - installment-split-payment-4.png: 국세청 홈택스 '중간예납 안내' 페이지(국세신고안내>개인신고안내>종합소득세>중간예납) — 탭 3개(중간예납제도의 취지 및 납부대상자/중간예납세액의 계산 및 납부방법/중간예납추계액 신고 안내) 중 가운데 탭 선택, '금융기관별 전자납부 방법' 표에 은행명·인터넷주소·ARS전화번호·인터넷접속방법·ARS연결방법 열이 있고 행은 홈택스서비스·경남은행·광주은행·국민은행·기업은행·농협중앙회·대구은행·부산은행·수협중앙회·신한은행·하나은행·우체국·전북은행·제일은행·제주은행·우리은행·삼성카드·신한카드·하나카드 순으로 나열, 각 행에 ARS전화번호(예: 국민은행 1588-9999, 기업은행 1588-2588)와 접속경로 문구가 적혀 있음

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
❌ [중간예납] 상단 버튼 — 끝 어절 "확인하기" 이 3/5개 (60%). 상한 40%. 같은 틀을 돌려쓰고 있다.
```

## 렌더 캡처
![installment-split-payment](installment-split-payment.png)

## 다음
- 이 보고서와 캡처를 보고 승인 → 배치가 다 끝나면 한 번에 커밋·푸시 (pre-push 게이트가 한 번 더 본다). 자동 푸시는 없다.
- 산출물: scripts/output/{plan,stage2,outline,factsheet,spec}-installment-split-payment.* · source-installment-split-payment.txt · captures/installment-split-payment-*.png
