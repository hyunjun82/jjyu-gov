# 팩트시트 — 종합소득세 중간예납 (closed-business-notice-refund)

**타이틀** 폐업 후 종합소득세 중간예납 고지서, 납부 의무와 환급 신청 방법

## 0. 관할 확정

| 항목 | 내용 |
|---|---|
| 1차 출처 | 법제처 국가법령정보센터 — 소득세법 전문 · 법제처 국가법령정보센터 — 소득세법 제65조(중간예납) · 국세청 — 소득세사무처리규정(행정규칙) · 국세청 — 세금 납부 방법 안내(홈택스·인터넷지로·ARS) |
| 추출본 | scripts/output/source-closed-business-notice-refund.txt (440584자, Playwright) |

## 0-B. 원문 캡처 확인 — 화면을 눈(vision)으로 읽은 기록

- closed-business-notice-refund-1.png: 법제처 국가법령정보센터, 소득세법 조문 화면(시행 2026.7.1, 법률 제21221호). 제1조(목적), 제1조의2(정의: 거주자·비거주자·내국법인·외국법인·사업자), 제2조(납세의무) 조문 전문이 보임.
- closed-business-notice-refund-2.png: 법제처 국가법령정보센터, 소득세법(시행 2026.1.1, 법률 제21221호) 제65조(중간예납) 조문 전문. 중간예납기준액의 2분의 1 납부, 11월 30일 고지·징수, 중간예납추계액 계산식 박스(종합소득산출세액÷2 - 세액공제액 등)가 보임.
- closed-business-notice-refund-3.png: 법제처 행정규칙, 소득세사무처리규정(시행 2026.7.1, 국세청훈령 제2743호) 화면. 제1조(목적), 제2조(정의) 1~22호 용어 정의(사업자·소득자료·금융소득자료·과세자료·현장확인·세무서장 등)가 나열됨.
- closed-business-notice-refund-4.png: 국세청 홈택스 '국세신고안내 > 중간예납 안내' 페이지. 탭 3개(중간예납제도의 취지 및 납부대상자/중간납부세액의 계산 및 납부방법/중간예납추계액 신고 안내) 중 가운데 탭 선택 상태. 아래 표에 금융기관명·인터넷주소·ARS전화번호·접속방법 행이 은행·카드사별로 나열(홈택스 hometax.go.kr, 경남은행 knbank ARS 1588-8585, 국민은행 kbstar ARS 1588-9999 경로 881→국번없이(4)→사용자등록번호, 기업은행 ibk, 농협중앙회 nonghyup, 대구은행 dgb, 부산은행 busanbank, 수협중앙회 suhyup, 신한은행 shinhan, 하나은행 kebhana, 우체국 epostbank, 전북은행 jbbank, 제일은행 standardchartered, 제주은행 jejubank, 우리은행 wooribank, 삼성카드 samsungcard, 신한카드 shinhancard, 하나카드 hanacard).

## 1. 수치 표 (글에 들어간 숫자 — 핵심콕콕 기준)

| 항목 | 값 | 1차 출처 | 교차 출처 |
|---|---|---|---|
| 중간예납세액 계산 | 직전 과세기간 중간예납기준액의 2분의 1 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95/%EC%A0%9C65%EC%A1%B0 |
| 고지서 발급 기간 | 11월 1일부터 11월 15일까지 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95/%EC%A0%9C65%EC%A1%B0 |
| 징수(납부) 기한 | 11월 30일까지 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95/%EC%A0%9C65%EC%A1%B0 |
| 중간예납기간 | 1월 1일부터 6월 30일까지 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95/%EC%A0%9C65%EC%A1%B0 |
| 추계액 신고 요건 | 중간예납추계액이 중간예납기준액의 100분의 30에 미달할 때 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95/%EC%A0%9C65%EC%A1%B0 |
| 추계액 신고·납부 기간 | 11월 1일부터 11월 30일까지 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95/%EC%A0%9C65%EC%A1%B0 |
| 신고 시 효과 | 신고하면 중간예납세액의 결정은 없었던 것으로 봄 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95/%EC%A0%9C65%EC%A1%B0 |
| 미납분 처리 | 분할납부 가능 세액은 다음 연도 1월 1일부터 1월 15일까지 새 고지서 발급 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95/%EC%A0%9C65%EC%A1%B0 |
| 기준액 계산 시 공제 | 제85조에 따른 환급세액을 공제한 금액 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95/%EC%A0%9C65%EC%A1%B0 |
| 단수 처리 | 1천원 미만의 단수금액은 버림 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95/%EC%A0%9C65%EC%A1%B0 |
| 근거 | 법제처 국가법령정보센터 — 소득세법 제65조(중간예납) (2026-09-20 확인) | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95/%EC%A0%9C65%EC%A1%B0 |

## 2. 행동 검증 (버튼이 실제로 되는가)

- /policy/income-tax-interim-payment/notice-timing-hometax-lookup/ — ✓ 열림 (내부 경로)
- /policy/income-tax-interim-payment — ✓ 열림 (내부 경로)
- /policy/income-tax-interim-payment/prepaid-credit-may-refund/ — ✓ 열림 (내부 경로)

## 3. 단서 조항 (긍정문 뒤집는 '다만' — 본문에 반영한 것)

- 제65조 제1항의 제외 대상은 대통령령으로 정하는 소득만 있는 자와 과세기간 개시일 현재 사업자가 아닌 신규 사업자뿐이며, 폐업자를 제외하는 규정은 본문에 없다는 사실을 q1 카드에 그대로 반영함
- 제65조 제3항의 추계액 신고는 중간예납추계액이 중간예납기준액의 100분의 30에 미달할 때만 가능하다는 조건을 q2·keyFacts에 숫자 그대로 반영함(100분의 30, 11월 1일~11월 30일)
- 제65조 제2항의 분할납부 미납 시 처리(다음 연도 1월 1일부터 1월 15일까지 재고지)를 keyFacts에 반영함
- 버튼 도배 지적으로 heroAct.label을 '내 고지세액 조회하기'에서 '내 고지세액 열람하기'로 바꿔 '조회하기' 종결 반복을 없앰

## 4. 확보하지 못한 것 (본문에 쓰지 않음)

- 소득세사무처리규정 제154조(폐업조합원 등에 관한 처리)는 조문 목록에만 있고 본문이 캡처되지 않아, 폐업 관련 세부 처리 절차의 근거로 인용하지 않음
- 환급 신청의 구체적 기한(특정 월일)은 이번 추출본에 없어 본문·FAQ에 특정 날짜로 쓰지 않고 '확정신고 절차 안에서 정산' 수준으로만 서술함
- 인터넷지로 주소가 원문 안에서 giro.kr과 giro.or.kr 두 가지로 다르게 표기돼 있어(교차검증 안 됨) 표·본문에 넣지 않음
- 소득세사무처리규정 제2조의 용어 정의(소득자료·현장확인 등 20여 개)는 폐업·환급 주제와 직접 관련이 없어 사용하지 않음

_2026-09-20 scripts/article.mjs_
