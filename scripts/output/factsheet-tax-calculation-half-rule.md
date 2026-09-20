# 팩트시트 — 종합소득세 중간예납 (tax-calculation-half-rule)

**타이틀** 종합소득세 중간예납 세액 계산, 전년도 납부액 절반이 되는 이유와 기준

## 0. 관할 확정

| 항목 | 내용 |
|---|---|
| 1차 출처 | 국가법령정보센터 — 소득세법(제65조 중간예납 포함 전체 조문) · 정책브리핑 — 11월은 종합소득세 중간예납의 달 · 국세청 — 중간예납 고지·납부 절차 안내 · 정책브리핑 보도자료 — 11월, 개인사업자는 꼭 중간예납 하세요 |
| 추출본 | scripts/output/source-tax-calculation-half-rule.txt (405877자, Playwright) |

## 0-B. 원문 캡처 확인 — 화면을 눈(vision)으로 읽은 기록

- tax-calculation-half-rule-1.png: 법제처 국가법령정보센터 소득세법 조문 화면(시행 2026.7.1, 법률 제21221호 2025.12.23 일부개정) — 제1장 총칙 제1조(목적)·제1조의2(정의)·제2조(납세의무)만 보이고, 중간예납세액 1/2 계산 관련 조문은 화면에 없음(스크롤 더 필요)
- tax-calculation-half-rule-2.png: 정책브리핑(korea.kr) 국세청 카드뉴스 기사 '11월은 종합소득세 중간예납의 달'(2025.11.06, 1/4) — 납부기한 2025년 12월 1일, 미납시 납부지연가산세 3%+1일당 0.022%, 중간예납세액 50만원 미만 등 고지 제외 대상자, 분할납부는 고지세액 1천만원 초과시 분납세액 2026년 2월 28일까지
- tax-calculation-half-rule-3.png: 국세청 홈페이지 '국세신고안내>종합소득세>중간예납 안내' 페이지, '중간예납세액의 계산 및 납부방법' 탭 — 인터넷/ARS/ATM 전자납부 방법과 은행별 접속표(경남·광주·국민·기업·농협중앙회·대구·부산·수협중앙회·신한·하나·우체국·전북·제일·제주·우리은행, 삼성·신한·하나카드의 인터넷주소·ARS전화번호·접속방법)만 보이고, 세액 1/2 계산 규정 자체는 이 화면에 없음
- tax-calculation-half-rule-4.png: 세금 관련 사이트의 '11월, 개인사업자는 중간예납 잊지 마세요' 기사 전체 페이지를 세로로 길게 캡처한 화면인데, 원본이 지나치게 압축되어(1400x12503→224x2000) 표의 열 이름·행 이름·금액·숫자가 흐려서 읽을 수 없음

## 1. 수치 표 (글에 들어간 숫자 — 핵심콕콕 기준)

| 항목 | 값 | 1차 출처 | 교차 출처 |
|---|---|---|---|
| 중간예납세액 계산식 | 직전 과세기간의 종합소득세액(=중간예납기준액) × 1/2 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95 | https://www.korea.kr/news/policyNewsView.do?newsId=148954110 |
| 중간예납기준액 | 전년도 중간예납세액 + 확정신고납부세액 + 결정·수정신고 등에 따른 추가 납부세액(가산세포함) - 환급세액 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95 | https://www.korea.kr/news/policyNewsView.do?newsId=148954110 |
| 계산 예시 | (2,000,000원 + 6,000,000원) × 1/2 = 4,000,000원 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95 | https://www.korea.kr/news/policyNewsView.do?newsId=148954110 |
| 고지 제외 기준 | 중간예납세액이 50만 원 미만인 경우 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95 | https://www.korea.kr/news/policyNewsView.do?newsId=148954110 |
| 미납 시 가산세 | 납부지연가산세(3% + 1일당 0.022%) 부과 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95 | https://www.korea.kr/news/policyNewsView.do?newsId=148954110 |
| 분할납부 기준 | 중간예납 고지세액 또는 추계액이 1천만 원을 초과하는 경우 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95 | https://www.korea.kr/news/policyNewsView.do?newsId=148954110 |
| 추계액 신고 기준 | 상반기 사업실적으로 계산한 중간예납 추계액이 전년도 종합소득세액의 30%보다 작은 경우 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95 | https://www.korea.kr/news/policyNewsView.do?newsId=148954110 |
| 추계액 소액 처리 | 추계액이 50만 원 미만인 경우 신고만 하고 납부는 하지 않음 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95 | https://www.korea.kr/news/policyNewsView.do?newsId=148954110 |
| 납부기한 연장 | 최대 9개월까지 연장 가능(특별재난지역 중소기업은 최대 2년까지) | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95 | https://www.korea.kr/news/policyNewsView.do?newsId=148954110 |
| 근거 | 국세청 보도자료 11월, 개인사업자는 중간예납 잊지 마세요(2025-11-02 발표) · 소득세법 제65조(중간예납) | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95 | https://www.korea.kr/news/policyNewsView.do?newsId=148954110 |

## 2. 행동 검증 (버튼이 실제로 되는가)

- /policy/income-tax-interim-payment — ✓ 열림 (내부 경로)
- /policy/income-tax-interim-payment/notice-timing-hometax-lookup/ — ✓ 열림 (내부 경로)
- https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?mi=2237&cntntsId=7774 — ✓ 열림 (국세청>국세신고안내>개인신고안내>종합소득세>중간예납 안내> 중간예납세액의 계산 및 납부방법)

## 3. 단서 조항 (긍정문 뒤집는 '다만' — 본문에 반영한 것)

- 50만 원 미만 고지 제외 — keyFacts·qa2·faq1에 반영
- 1천만 원 초과 시 분할납부(2천만원 이하/초과 기준) — qa2에 반영
- 상반기 추계액이 전년도 세액 30% 미만이면 추계신고 가능 — qa3·qa4·faq2에 반영
- 화면 검사(h1·상단 버튼·핵심콕콕)가 500과 함께 떨어졌으나 h1·heroAct.href·keyFacts 필드명은 정본 이름 그대로임 — dev 서버를 --from gates 로 재기동해 재검사 필요

## 4. 확보하지 못한 것 (본문에 쓰지 않음)

- 소득세법 제65조 본문 — 법제처 캡처가 조문 목차까지만 보여줘 조문 내용을 확인하지 못함(tax-calculation-half-rule-1.png)
- 국세청 홈페이지 중간예납제도의 취지 및 납부대상자 탭 본문 — 캡처가 중간예납세액의 계산 및 납부방법 탭(전자납부 은행 안내)만 보여줘 취지 설명 문장을 확인하지 못함(tax-calculation-half-rule-3.png)
- 2025년 12월 1일 납부기한·152만 명 대상자·’24년 귀속 등 연도에 매인 수치 — 작년(2025) 자료뿐이라 올해 기준으로 쓰지 않음
- 재난지역 사례(2025.3월 경기·경남 등)의 구체 지역·날짜 — 연도에 매인 사례라 쓰지 않고, 최대 9개월/2년 연장이라는 항구 규정만 사용
- tax-calculation-half-rule-4.png(정책브리핑 뷰어 캡처) — 압축으로 표 숫자가 흐려 읽을 수 없어 같은 보도자료의 텍스트본을 대신 사용

_2026-09-20 scripts/article.mjs_
