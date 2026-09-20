# ✅ 통과 — tax-calculation-half-rule

- 타이틀: 종합소득세 중간예납 세액 계산, 전년도 납부액 절반이 되는 이유와 기준 (spec 고정 — 사장님이 줌)
- 키워드: 종합소득세 중간예납 · 허브: 종합소득세 중간예납이란 무엇인가요, 고지 대상 기준과 꼭 내야 하는지 (/policy/income-tax-interim-payment) · 폴더: 중간예납
- 실행: 2026. 9. 20. 오전 10:25:09 · 총 1.5분 · 고친 횟수 0 · 모델 sonnet
- 글: app/policy/[id]/[spoke]/content/중간예납/중간예납세액계산.tsx → https://gov.jjyu.co.kr/policy/income-tax-interim-payment/tax-calculation-half-rule/
- 정본으로 쓴 글: app/policy/[id]/[spoke]/content/실손보험/나이별실비보험료.tsx

## 단계별 시간·사용량
| 단계 | 시간 | 모델 호출 | 입력 토큰 | 출력 토큰 | 환산 $ |
|---|---|---|---|---|---|
| guard | 0.0분 | - | - | - | - |
| plan | 0.0분 | - | - | - | - |
| cta | 0.0분 | - | - | - | - |
| collect | 0.0분 | - | - | - | - |
| captures | 0.0분 | - | - | - | - |
| write | 0.0분 | - | - | - | - |
| gates | 1.4분 | - | - | - | - |
| **합계** | **1.5분** | **0** | **0** | **0** | **0.00** |

> 구독이라 실제 청구는 없습니다. 환산 $ 는 사용 한도를 얼마나 먹었는지의 척도입니다. 호출마다 고정비(시스템 프롬프트) 약 3만 토큰이 붙습니다.

## 설계도 (구성표)
- 타이틀·소제목: spec 고정 (글자 그대로)
1. 중간예납 세액은 어떻게 계산되나요?
2. 전년도에 낸 세금의 절반이 맞나요?
3. 왜 절반으로 정해져 있나요?  ← 버튼 슬롯
4. 올해 소득이 줄었는데도 그대로 나오나요?  ← 버튼 슬롯
- 상단 버튼: [중간예납 총정리 확인하기] → /policy/income-tax-interim-payment
- qa3 버튼: [고지세액 직접 비교하기] → /policy/income-tax-interim-payment/notice-timing-hometax-lookup/
- qa4 버튼: [국세청 안내 확인하기] → https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?mi=2237&cntntsId=7774
  - ✓ /policy/income-tax-interim-payment (내부 경로)
  - ✓ /policy/income-tax-interim-payment/notice-timing-hometax-lookup/ (내부 경로)
  - ✓ https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?mi=2237&cntntsId=7774 (국세청>국세신고안내>개인신고안내>종합소득세>중간예납 안내> 중간예납세액의 계산 및 납부방법)
- 출처: https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95 , https://www.korea.kr/news/policyNewsView.do?newsId=148954110 , https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?mi=2237&cntntsId=7774 , https://www.korea.kr/briefing/pressReleaseView.do?newsId=156724560
- 오해 소지: 중간예납을 종합소득세와 별개인 새로운 세금으로 오해 / 올해 소득이 줄면 중간예납 고지세액도 자동으로 줄어든다고 오해 / 절반 계산이 전년도 세액을 단순히 반으로 나눈 것뿐이라고 오해(실제는 법정 산식·단수처리가 적용됨)

## 증거
- 추출본 scripts/output/source-tax-calculation-half-rule.txt 405877자 · 캡처 4장 (scripts/output/captures/tax-calculation-half-rule-*.png)
  - tax-calculation-half-rule-1.png: 법제처 국가법령정보센터 소득세법 조문 화면(시행 2026.7.1, 법률 제21221호 2025.12.23 일부개정) — 제1장 총칙 제1조(목적)·제1조의2(정의)·제2조(납세의무)만 보이고, 중간예납세액 1/2 계산 관련 조문은 화면에 없음(스크롤 더 필요)
  - tax-calculation-half-rule-2.png: 정책브리핑(korea.kr) 국세청 카드뉴스 기사 '11월은 종합소득세 중간예납의 달'(2025.11.06, 1/4) — 납부기한 2025년 12월 1일, 미납시 납부지연가산세 3%+1일당 0.022%, 중간예납세액 50만원 미만 등 고지 제외 대상자, 분할납부는 고지세액 1천만원 초과시 분납세액 2026년 2월 28일까지
  - tax-calculation-half-rule-3.png: 국세청 홈페이지 '국세신고안내>종합소득세>중간예납 안내' 페이지, '중간예납세액의 계산 및 납부방법' 탭 — 인터넷/ARS/ATM 전자납부 방법과 은행별 접속표(경남·광주·국민·기업·농협중앙회·대구·부산·수협중앙회·신한·하나·우체국·전북·제일·제주·우리은행, 삼성·신한·하나카드의 인터넷주소·ARS전화번호·접속방법)만 보이고, 세액 1/2 계산 규정 자체는 이 화면에 없음
  - tax-calculation-half-rule-4.png: 세금 관련 사이트의 '11월, 개인사업자는 중간예납 잊지 마세요' 기사 전체 페이지를 세로로 길게 캡처한 화면인데, 원본이 지나치게 압축되어(1400x12503→224x2000) 표의 열 이름·행 이름·금액·숫자가 흐려서 읽을 수 없음

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
![tax-calculation-half-rule](tax-calculation-half-rule.png)

## 다음
- 이 보고서와 캡처를 보고 승인 → 배치가 다 끝나면 한 번에 커밋·푸시 (pre-push 게이트가 한 번 더 본다). 자동 푸시는 없다.
- 산출물: scripts/output/{plan,stage2,outline,factsheet,spec}-tax-calculation-half-rule.* · source-tax-calculation-half-rule.txt · captures/tax-calculation-half-rule-*.png
