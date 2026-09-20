# 팩트시트 — 종합소득세 중간예납 (unpaid-penalty-seizure)

**타이틀** 종합소득세 중간예납 미납하면 어떻게 되나요, 가산세와 독촉장 압류까지

## 0. 관할 확정

| 항목 | 내용 |
|---|---|
| 1차 출처 | 국가법령정보센터 — 소득세법 제65조(중간예납) · 국가법령정보센터 — 국세기본법(납부지연가산세) · 국가법령정보센터 — 국세징수법(독촉·압류) · 국세청 홈택스 — 세금 납부 절차 안내 |
| 추출본 | scripts/output/source-unpaid-penalty-seizure.txt (240376자, Playwright) |

## 0-B. 원문 캡처 확인 — 화면을 눈(vision)으로 읽은 기록

- unpaid-penalty-seizure-1.png: 법제처 국가법령정보센터, 소득세법 제65조(중간예납) 조문 화면. 시행 2026.1.1. 법률 제21221호, 중간예납세액=중간예납기준액의 1/2, 11월 30일까지 징수·11월 1~15일 납부고지서 발급, 중간예납추계액 계산식(종합소득과세표준=중간예납기간 종합소득금액×2-이월결손금-종합소득공제) 표시.
- unpaid-penalty-seizure-2.png: 법제처 국가법령정보센터, 국세기본법 제1조(목적)·제2조(정의) 화면. 시행 2026.8.11. 법률 제21860호, 국세 항목(가.소득세~타.농어촌특별세)과 강제징수비·가산세·공과금 등 용어 정의 나열, 압류·보관·운반·매각 비용 관련 조문 보임.
- unpaid-penalty-seizure-3.png: 법제처 국가법령정보센터, 국세징수법 제1~4조 화면. 시행 2026.6.2. 법률 제21713호, 제3조(징수의 순위) 1.강제징수비 2.국세(가산세 제외) 3.가산세 순서로 명시, 체납·체납액 정의 조문 보임.
- unpaid-penalty-seizure-4.png: 국세청 홈택스 '중간예납 안내' 페이지, 인터넷·ARS·ATM 국세전자납부 방법과 은행별 접속표(경남은행 www.knbank.co.kr ARS 1588-8585, 국민은행 1588-9999, 농협중앙회 1588-2100, 신한은행 1544-8000, 우리은행 1588-5000 등 금융기관명·인터넷주소·ARS전화번호·접속방법 열로 구성된 표) 표시.

## 1. 수치 표 (글에 들어간 숫자 — 핵심콕콕 기준)

| 항목 | 값 | 1차 출처 | 교차 출처 |
|---|---|---|---|
| 중간예납세액 계산 | 중간예납기준액의 2분의 1에 해당하는 금액(1천원 미만 단수는 버림) | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95/%EC%A0%9C65%EC%A1%B0 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B5%AD%EC%84%B8%EA%B8%B0%EB%B3%B8%EB%B2%95 |
| 납부고지서 발급 | 11월 1일부터 11월 15일까지 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95/%EC%A0%9C65%EC%A1%B0 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B5%AD%EC%84%B8%EA%B8%B0%EB%B3%B8%EB%B2%95 |
| 징수 기한 | 11월 30일까지 세무서장이 징수 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95/%EC%A0%9C65%EC%A1%B0 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B5%AD%EC%84%B8%EA%B8%B0%EB%B3%B8%EB%B2%95 |
| 미납 시 분할납부 고지 | 다음 연도 1월 1일부터 1월 15일까지 새 고지서 발급 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95/%EC%A0%9C65%EC%A1%B0 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B5%AD%EC%84%B8%EA%B8%B0%EB%B3%B8%EB%B2%95 |
| 가산세 정의 | 세법에 따라 산출한 세액에 가산하여 징수하는 금액(국세기본법 제2조) | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95/%EC%A0%9C65%EC%A1%B0 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B5%AD%EC%84%B8%EA%B8%B0%EB%B3%B8%EB%B2%95 |
| 납부지연가산세 근거 | 국세기본법 제47조의4가 규정 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95/%EC%A0%9C65%EC%A1%B0 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B5%AD%EC%84%B8%EA%B8%B0%EB%B3%B8%EB%B2%95 |
| 징수 순위 | 1.강제징수비 2.국세(가산세 제외) 3.가산세(국세징수법 제3조) | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95/%EC%A0%9C65%EC%A1%B0 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B5%AD%EC%84%B8%EA%B8%B0%EB%B3%B8%EB%B2%95 |
| 체납의 정의 | 국세를 지정납부기한까지 납부하지 아니하는 것(국세징수법 제2조) | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95/%EC%A0%9C65%EC%A1%B0 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B5%AD%EC%84%B8%EA%B8%B0%EB%B3%B8%EB%B2%95 |
| 독촉장 발급 시기 | 지정납부기한이 지난 후 10일 이내 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95/%EC%A0%9C65%EC%A1%B0 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B5%AD%EC%84%B8%EA%B8%B0%EB%B3%B8%EB%B2%95 |
| 독촉장 납부기한 | 독촉을 하는 날부터 20일 이내의 범위 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95/%EC%A0%9C65%EC%A1%B0 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B5%AD%EC%84%B8%EA%B8%B0%EB%B3%B8%EB%B2%95 |
| 강제징수비 | 재산의 압류, 보관, 운반과 매각에 든 비용(국세기본법 제2조) | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95/%EC%A0%9C65%EC%A1%B0 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B5%AD%EC%84%B8%EA%B8%B0%EB%B3%B8%EB%B2%95 |
| 근거 | 국가법령정보센터 소득세법·국세기본법·국세징수법, 국세청 홈택스 (2026-09-20 확인) | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95/%EC%A0%9C65%EC%A1%B0 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B5%AD%EC%84%B8%EA%B8%B0%EB%B3%B8%EB%B2%95 |

## 2. 행동 검증 (버튼이 실제로 되는가)

- /policy/income-tax-interim-payment/notice-timing-hometax-lookup/ — ✓ 열림 (내부 경로)
- /policy/income-tax-interim-payment/tax-calculation-half-rule/ — ✓ 열림 (내부 경로)
- https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?mi=2237&cntntsId=7774 — ✓ 열림 (국세청>국세신고안내>개인신고안내>종합소득세>중간예납 안내> 중간예납세액의 계산 및 납부방법)

## 3. 단서 조항 (긍정문 뒤집는 '다만' — 본문에 반영한 것)

- 소득세법 제65조 2항의 단서 — 11월 30일 미납분 중 분할납부 대상 세액은 고지가 없었던 것으로 보고 다음 연도 1월 1일부터 1월 15일까지 재고지된다는 내용을 q1 본문·box에 반영
- 국세기본법 부칙 제3조의 경과조치 단서 — 2026년 6월 30일 이전 지정납부기한 경과분은 종전 규정을 따른다는 내용을 q2 본문에 반영
- 국세징수법 제13조의 납부기한 연장 사유(재난·도난·사업손실·6개월 이상 질병 등) 단서를 FAQ2에 반영

## 4. 확보하지 못한 것 (본문에 쓰지 않음)

- 납부지연가산세의 구체적 세율(1일당 %) — 국세기본법 제47조의4 본문이 이번 조회에서 캡처되지 않아 쓰지 않음
- 압류의 요건·절차·압류금지재산 등 국세징수법 제31조~제63조 본문 — 목차만 캡처되고 조문 본문이 없어 쓰지 않음
- 국세기본법 제83조(고지금액의 최저한) 본문 — 목차만 캡처돼 소액부징수 기준은 쓰지 않음
- 홈택스 페이지의 인터넷·ARS·ATM 전자납부 은행별 접속 정보 — 중간예납 미납·가산세·압류 주제와 직접 관련이 없어 쓰지 않음

_2026-09-20 scripts/article.mjs_
