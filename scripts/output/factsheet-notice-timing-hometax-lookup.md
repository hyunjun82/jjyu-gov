# 팩트시트 — 종합소득세 중간예납 (notice-timing-hometax-lookup)

**타이틀** 종합소득세 중간예납 고지서 언제 오나요, 고지세액 조회와 금액이 다를 때

## 0. 관할 확정

| 항목 | 내용 |
|---|---|
| 1차 출처 | 정책브리핑(korea.kr) — 11월은 종합소득세 중간예납의 달 · 국세청 보도자료(korea.kr) — 11월, 개인사업자는 중간예납 잊지 마세요 · 국세청(nts.go.kr) — 홈택스·인터넷지로·인터넷뱅킹·ARS 납부 절차 안내 · 법제처 국가법령정보센터 — 소득세법(전문) |
| 추출본 | scripts/output/source-notice-timing-hometax-lookup.txt (405761자, Playwright) |

## 0-B. 원문 캡처 확인 — 화면을 눈(vision)으로 읽은 기록

- notice-timing-hometax-lookup-1.png: 정책브리핑(korea.kr) 2025.11.06 기사 '11월은 종합소득세 중간예납의 달' — 개인사업자 중간예납 12월 1일까지 납부, 50만원 미만·이자배당연금근로기타소득자 등 고지 제외 대상자, 주계액 신고 기한 12월 1일(월), 분할납부 기준금액 2025년 12월 1일 이후 2026년 2월 2일까지, 재난·재해 시 최대 9개월(중소기업 2년) 연장 안내
- notice-timing-hometax-lookup-2.png: 위 정책브리핑 기사와 유사한 카드뉴스형 페이지를 길게 이어붙인 캡처로 글자가 작아 잘 안 보이고, 중간에 홈택스 로그인/신고 화면 스크린샷 2개(붉은 테두리 강조 박스 포함)가 섞여 있으나 구체적 행·열 수치는 해상도상 식별 불가
- notice-timing-hometax-lookup-3.png: 국세청(nts.go.kr) '중간예납 안내' 페이지 — '금융기관별 전자납부 방법' 표에 은행명(경남·광주·국민·기업·농협중앙회·대구·부산·수협중앙회·신한·하나·우체국·전북·제일·제주·우리은행, 삼성카드·신한카드·하나카드)별 인터넷주소·ARS전화번호(예: 국민은행 1588-9999, 농협중앙회 1588-2100)·ARS 연결방법이 행마다 기재됨
- notice-timing-hometax-lookup-4.png: 국가법령정보센터(law.go.kr) 소득세법 조문 화면 — 상단에 [시행 2026.7.1.] [법률 제21221호, 2025.12.23., 일부개정] 표시, 제1장 총칙에서 제1조(목적)·제1조의2(정의)·제2조(납세의무) 조문 전문이 보이고 중간예납 관련 조문은 이 화면 범위에는 없음

## 1. 수치 표 (글에 들어간 숫자 — 핵심콕콕 기준)

| 항목 | 값 | 1차 출처 | 교차 출처 |
|---|---|---|---|
| 고지 대상 | 종합소득이 있는 개인사업자 | https://www.korea.kr/news/policyNewsView.do?newsId=148954110 | https://www.korea.kr/briefing/pressReleaseView.do?newsId=156724560 |
| 고지서 발송 | 11월 1일부터 11월 15일 사이 | https://www.korea.kr/news/policyNewsView.do?newsId=148954110 | https://www.korea.kr/briefing/pressReleaseView.do?newsId=156724560 |
| 납부기한 | 2026년 11월 30일(월)까지 | https://www.korea.kr/news/policyNewsView.do?newsId=148954110 | https://www.korea.kr/briefing/pressReleaseView.do?newsId=156724560 |
| 중간예납세액 계산식 | 직전 과세기간의 종합소득세액(중간예납기준액) × 1/2 | https://www.korea.kr/news/policyNewsView.do?newsId=148954110 | https://www.korea.kr/briefing/pressReleaseView.do?newsId=156724560 |
| 고지 제외 대상 | 중간예납세액 50만 원 미만, 이자·배당·근로·연금·기타소득만 있는 자 등 | https://www.korea.kr/news/policyNewsView.do?newsId=148954110 | https://www.korea.kr/briefing/pressReleaseView.do?newsId=156724560 |
| 미납 시 가산세 | 납부지연가산세 3% + 1일당 0.022% | https://www.korea.kr/news/policyNewsView.do?newsId=148954110 | https://www.korea.kr/briefing/pressReleaseView.do?newsId=156724560 |
| 추계액 신고 기준 | 중간예납 추계액이 전년도 종합소득세액의 30%보다 작은 경우 | https://www.korea.kr/news/policyNewsView.do?newsId=148954110 | https://www.korea.kr/briefing/pressReleaseView.do?newsId=156724560 |
| 추계액 신고 기한 | 2026년 11월 30일(월)까지 | https://www.korea.kr/news/policyNewsView.do?newsId=148954110 | https://www.korea.kr/briefing/pressReleaseView.do?newsId=156724560 |
| 분할납부 기준 | 중간예납 고지세액 또는 추계액이 1천만 원을 초과하는 경우 | https://www.korea.kr/news/policyNewsView.do?newsId=148954110 | https://www.korea.kr/briefing/pressReleaseView.do?newsId=156724560 |
| 분납 세액 납부기한 | 2027년 2월 1일(월)까지 | https://www.korea.kr/news/policyNewsView.do?newsId=148954110 | https://www.korea.kr/briefing/pressReleaseView.do?newsId=156724560 |
| 납부기한 연장 | 최대 9개월까지, 특별재난지역 중소기업은 최대 2년까지 | https://www.korea.kr/news/policyNewsView.do?newsId=148954110 | https://www.korea.kr/briefing/pressReleaseView.do?newsId=156724560 |
| 근거 | 국세청 종합소득세 중간예납 안내 (2026-09-20 확인) | https://www.korea.kr/news/policyNewsView.do?newsId=148954110 | https://www.korea.kr/briefing/pressReleaseView.do?newsId=156724560 |

## 2. 행동 검증 (버튼이 실제로 되는가)

- https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?mi=2237&cntntsId=7774 — ✓ 열림 (국세청>국세신고안내>개인신고안내>종합소득세>중간예납 안내> 중간예납세액의 계산 및 납부방법)
- /policy/income-tax-interim-payment — ✓ 열림 (내부 경로)
- https://www.korea.kr/briefing/pressReleaseView.do?newsId=156724560 — ✓ 열림 (11월, 개인사업자는 중간예납 잊지 마세요 - 보도자료 | 브리핑룸 | 대한민국 정책브리핑)

## 3. 단서 조항 (긍정문 뒤집는 '다만' — 본문에 반영한 것)

- keyFactsHighlights.고지 대상 값을 keyFacts 값 안에 실제로 있는 조각(개인사업자)으로 교체함 — 다른 필드는 변경하지 않음

## 4. 확보하지 못한 것 (본문에 쓰지 않음)

- law.go.kr 소득세법 조문 화면은 캡처 범위에 중간예납(제65조) 조문 본문이 없어 인용하지 않음
- 추계액 신고 계산 사례(도매업 A씨, 75만 원/30만 원/150만 원)는 카드4가 이미 다른 A씨 계산 사례를 쓰고 있어 중복을 피해 생략
- 납세담보 면제 금액(생산적 중소기업 1억 원, 그 외 사업자 7천만 원)은 이번 4개 소제목 주제와 직접 관련이 없어 사용하지 않음
- 특별재난지역 구체 지역명(’25.3월 경기·경남 등 4개 지자체 10개 읍·면·동 등)은 이번 소제목과 무관해 사용하지 않음

_2026-09-20 scripts/article.mjs_
