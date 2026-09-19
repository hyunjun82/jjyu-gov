# 팩트시트 — 기초연금 (telecom-discount-tax-free-savings)

**타이틀** 기초연금 수급자 통신비 감면 신청, 비과세종합저축 가입과 교통비까지

## 0. 관할 확정

| 항목 | 내용 |
|---|---|
| 1차 출처 | 국가법령정보센터 — 전기통신사업법 시행령 전문 · 행정규칙 — 기초연금 지급대상자 선정기준액·소득인정액 산정 세부기준 |
| 추출본 | scripts/output/source-telecom-discount-tax-free-savings.txt (137467자, Playwright) |

## 0-B. 원문 캡처 확인 — 화면을 눈(vision)으로 읽은 기록

- telecom-discount-tax-free-savings-1.png: 금융감독원 '금융상품한눈에' 비과세종합저축 페이지 — 가입대상은 만 65세 이상자·장애인·독립유공자·국가유공상이자·기초생활수급자·고엽제후유의증환자·5·18민주화운동부상자, 가입한도 총 5천만원, 주의사항에 가입가능기간 2025.12.31.까지, 관련법규 조세특례제한법 제88조의2
- telecom-discount-tax-free-savings-2.png: 국가법령정보센터 전기통신사업법 시행령[시행 2026.4.28.][대통령령 제36281호] 제1장 총칙 화면 — 제2조(보편적 역무의 내용)에 유선전화·인터넷 가입자접속·긴급통신용 전화·장애인 저소득층 등 요금감면 서비스 항목이 나열되나, 통신요금 할인율·감면 대상자 소득기준 수치는 이 화면에 보이지 않음
- telecom-discount-tax-free-savings-3.png: 국가법령정보센터 국민기초생활 보장법[시행 2025.10.1.][법률 제21065호] 제1장 총칙 화면 — 제2조(정의)에 수급권자·수급자·수급품·보장기관·부양의무자·최저보장수준·최저생계비·개별가구·소득인정액·차상위계층·기준 중위소득 용어 정의만 있고, 통신비 감면과 관련된 구체 수치는 보이지 않음
- telecom-discount-tax-free-savings-4.png: 국가법령정보센터 '기초연금 지급대상자 선정기준액, 기준연금액 및 소득인정액 산정 세부기준에 관한 고시'[시행 2026.7.30.][보건복지부고시 제2026-156호] — 제2조 2026년도 선정기준액: 단독가구 월 소득인정액 2,470,000원·부부가구 3,952,000원, 제3조 2026년도 기준연금액 34만9천7백원, 제4조 무료임차소득 부과 기준 주택 시가표준액 6억원 이상

## 1. 수치 표 (글에 들어간 숫자 — 핵심콕콕 기준)

| 항목 | 값 | 1차 출처 | 교차 출처 |
|---|---|---|---|
| 통신비 감면 대상자(기초연금 관련 근거) | 전기통신사업법 시행령 제2조제3항제10호 — 「기초연금법」 제2조제3호에 따른 기초연금 수급자 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%A0%84%EA%B8%B0%ED%86%B5%EC%8B%A0%EC%82%AC%EC%97%85%EB%B2%95%20%EC%8B%9C%ED%96%89%EB%A0%B9 | https://www.law.go.kr/%ED%96%89%EC%A0%95%EA%B7%9C%EC%B9%99/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EC%A7%80%EA%B8%89%EB%8C%80%EC%83%81%EC%9E%90%EC%84%A0%EC%A0%95%EA%B8%B0%EC%A4%80%EC%95%A1,%EA%B8%B0%EC%A4%80%EC%97%B0%EA%B8%88%EC%95%A1%EB%B0%8F%EC%86%8C%EB%93%9D%EC%9D%B8%EC%A0%95%EC%95%A1%EC%82%B0%EC%A0%95%EC%84%B8%EB%B6%80%EA%B8%B0%EC%A4%80%EC%97%90%EA%B4%80%ED%95%9C%EA%B3%A0%EC%8B%9C |
| 감면 서비스 범위(8~10호 해당자) | 이동전화 서비스, 개인 휴대통신 서비스, 아이엠티이천 서비스, 엘티이 서비스 및 아이엠티이천이십 서비스로 한정 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%A0%84%EA%B8%B0%ED%86%B5%EC%8B%A0%EC%82%AC%EC%97%85%EB%B2%95%20%EC%8B%9C%ED%96%89%EB%A0%B9 | https://www.law.go.kr/%ED%96%89%EC%A0%95%EA%B7%9C%EC%B9%99/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EC%A7%80%EA%B8%89%EB%8C%80%EC%83%81%EC%9E%90%EC%84%A0%EC%A0%95%EA%B8%B0%EC%A4%80%EC%95%A1,%EA%B8%B0%EC%A4%80%EC%97%B0%EA%B8%88%EC%95%A1%EB%B0%8F%EC%86%8C%EB%93%9D%EC%9D%B8%EC%A0%95%EC%95%A1%EC%82%B0%EC%A0%95%EC%84%B8%EB%B6%80%EA%B8%B0%EC%A4%80%EC%97%90%EA%B4%80%ED%95%9C%EA%B3%A0%EC%8B%9C |
| 감면 신청 주체(1호 외의 경우) | 감면 대상자 본인 (8호·9호는 가구원 각각) | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%A0%84%EA%B8%B0%ED%86%B5%EC%8B%A0%EC%82%AC%EC%97%85%EB%B2%95%20%EC%8B%9C%ED%96%89%EB%A0%B9 | https://www.law.go.kr/%ED%96%89%EC%A0%95%EA%B7%9C%EC%B9%99/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EC%A7%80%EA%B8%89%EB%8C%80%EC%83%81%EC%9E%90%EC%84%A0%EC%A0%95%EA%B8%B0%EC%A4%80%EC%95%A1,%EA%B8%B0%EC%A4%80%EC%97%B0%EA%B8%88%EC%95%A1%EB%B0%8F%EC%86%8C%EB%93%9D%EC%9D%B8%EC%A0%95%EC%95%A1%EC%82%B0%EC%A0%95%EC%84%B8%EB%B6%80%EA%B8%B0%EC%A4%80%EC%97%90%EA%B4%80%ED%95%9C%EA%B3%A0%EC%8B%9C |
| 구체적 감면기준(비율 등) | 전기통신사업자의 사업규모, 서비스 요금수준 등을 고려해 과학기술정보통신부장관이 고시로 정함 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%A0%84%EA%B8%B0%ED%86%B5%EC%8B%A0%EC%82%AC%EC%97%85%EB%B2%95%20%EC%8B%9C%ED%96%89%EB%A0%B9 | https://www.law.go.kr/%ED%96%89%EC%A0%95%EA%B7%9C%EC%B9%99/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EC%A7%80%EA%B8%89%EB%8C%80%EC%83%81%EC%9E%90%EC%84%A0%EC%A0%95%EA%B8%B0%EC%A4%80%EC%95%A1,%EA%B8%B0%EC%A4%80%EC%97%B0%EA%B8%88%EC%95%A1%EB%B0%8F%EC%86%8C%EB%93%9D%EC%9D%B8%EC%A0%95%EC%95%A1%EC%82%B0%EC%A0%95%EC%84%B8%EB%B6%80%EA%B8%B0%EC%A4%80%EC%97%90%EA%B4%80%ED%95%9C%EA%B3%A0%EC%8B%9C |
| 비과세종합저축 가입대상 | 만 65세 이상자ㆍ장애인ㆍ독립유공자ㆍ국가유공상이자ㆍ기초생활수급자ㆍ고엽제후유의증환자ㆍ5ㆍ18민주화운동부상자 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%A0%84%EA%B8%B0%ED%86%B5%EC%8B%A0%EC%82%AC%EC%97%85%EB%B2%95%20%EC%8B%9C%ED%96%89%EB%A0%B9 | https://www.law.go.kr/%ED%96%89%EC%A0%95%EA%B7%9C%EC%B9%99/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EC%A7%80%EA%B8%89%EB%8C%80%EC%83%81%EC%9E%90%EC%84%A0%EC%A0%95%EA%B8%B0%EC%A4%80%EC%95%A1,%EA%B8%B0%EC%A4%80%EC%97%B0%EA%B8%88%EC%95%A1%EB%B0%8F%EC%86%8C%EB%93%9D%EC%9D%B8%EC%A0%95%EC%95%A1%EC%82%B0%EC%A0%95%EC%84%B8%EB%B6%80%EA%B8%B0%EC%A4%80%EC%97%90%EA%B4%80%ED%95%9C%EA%B3%A0%EC%8B%9C |
| 비과세종합저축 가입한도 | 총 5천만원 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%A0%84%EA%B8%B0%ED%86%B5%EC%8B%A0%EC%82%AC%EC%97%85%EB%B2%95%20%EC%8B%9C%ED%96%89%EB%A0%B9 | https://www.law.go.kr/%ED%96%89%EC%A0%95%EA%B7%9C%EC%B9%99/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EC%A7%80%EA%B8%89%EB%8C%80%EC%83%81%EC%9E%90%EC%84%A0%EC%A0%95%EA%B8%B0%EC%A4%80%EC%95%A1,%EA%B8%B0%EC%A4%80%EC%97%B0%EA%B8%88%EC%95%A1%EB%B0%8F%EC%86%8C%EB%93%9D%EC%9D%B8%EC%A0%95%EC%95%A1%EC%82%B0%EC%A0%95%EC%84%B8%EB%B6%80%EA%B8%B0%EC%A4%80%EC%97%90%EA%B4%80%ED%95%9C%EA%B3%A0%EC%8B%9C |
| 비과세종합저축 가입가능기간 | 2025.12.31.까지 (화면 표시 기준) | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%A0%84%EA%B8%B0%ED%86%B5%EC%8B%A0%EC%82%AC%EC%97%85%EB%B2%95%20%EC%8B%9C%ED%96%89%EB%A0%B9 | https://www.law.go.kr/%ED%96%89%EC%A0%95%EA%B7%9C%EC%B9%99/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EC%A7%80%EA%B8%89%EB%8C%80%EC%83%81%EC%9E%90%EC%84%A0%EC%A0%95%EA%B8%B0%EC%A4%80%EC%95%A1,%EA%B8%B0%EC%A4%80%EC%97%B0%EA%B8%88%EC%95%A1%EB%B0%8F%EC%86%8C%EB%93%9D%EC%9D%B8%EC%A0%95%EC%95%A1%EC%82%B0%EC%A0%95%EC%84%B8%EB%B6%80%EA%B8%B0%EC%A4%80%EC%97%90%EA%B4%80%ED%95%9C%EA%B3%A0%EC%8B%9C |
| 비과세종합저축 관련법규 | 조세특례제한법 제88조의2 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%A0%84%EA%B8%B0%ED%86%B5%EC%8B%A0%EC%82%AC%EC%97%85%EB%B2%95%20%EC%8B%9C%ED%96%89%EB%A0%B9 | https://www.law.go.kr/%ED%96%89%EC%A0%95%EA%B7%9C%EC%B9%99/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EC%A7%80%EA%B8%89%EB%8C%80%EC%83%81%EC%9E%90%EC%84%A0%EC%A0%95%EA%B8%B0%EC%A4%80%EC%95%A1,%EA%B8%B0%EC%A4%80%EC%97%B0%EA%B8%88%EC%95%A1%EB%B0%8F%EC%86%8C%EB%93%9D%EC%9D%B8%EC%A0%95%EC%95%A1%EC%82%B0%EC%A0%95%EC%84%B8%EB%B6%80%EA%B8%B0%EC%A4%80%EC%97%90%EA%B4%80%ED%95%9C%EA%B3%A0%EC%8B%9C |
| 2026년 기초연금 선정기준액 | 단독가구 월 소득인정액 2,470,000원 · 부부가구 3,952,000원 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%A0%84%EA%B8%B0%ED%86%B5%EC%8B%A0%EC%82%AC%EC%97%85%EB%B2%95%20%EC%8B%9C%ED%96%89%EB%A0%B9 | https://www.law.go.kr/%ED%96%89%EC%A0%95%EA%B7%9C%EC%B9%99/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EC%A7%80%EA%B8%89%EB%8C%80%EC%83%81%EC%9E%90%EC%84%A0%EC%A0%95%EA%B8%B0%EC%A4%80%EC%95%A1,%EA%B8%B0%EC%A4%80%EC%97%B0%EA%B8%88%EC%95%A1%EB%B0%8F%EC%86%8C%EB%93%9D%EC%9D%B8%EC%A0%95%EC%95%A1%EC%82%B0%EC%A0%95%EC%84%B8%EB%B6%80%EA%B8%B0%EC%A4%80%EC%97%90%EA%B4%80%ED%95%9C%EA%B3%A0%EC%8B%9C |
| 2026년 기초연금 기준연금액 | 34만9천7백원 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%A0%84%EA%B8%B0%ED%86%B5%EC%8B%A0%EC%82%AC%EC%97%85%EB%B2%95%20%EC%8B%9C%ED%96%89%EB%A0%B9 | https://www.law.go.kr/%ED%96%89%EC%A0%95%EA%B7%9C%EC%B9%99/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EC%A7%80%EA%B8%89%EB%8C%80%EC%83%81%EC%9E%90%EC%84%A0%EC%A0%95%EA%B8%B0%EC%A4%80%EC%95%A1,%EA%B8%B0%EC%A4%80%EC%97%B0%EA%B8%88%EC%95%A1%EB%B0%8F%EC%86%8C%EB%93%9D%EC%9D%B8%EC%A0%95%EC%95%A1%EC%82%B0%EC%A0%95%EC%84%B8%EB%B6%80%EA%B8%B0%EC%A4%80%EC%97%90%EA%B4%80%ED%95%9C%EA%B3%A0%EC%8B%9C |
| 교통비ㆍ에너지바우처 규정 여부 | 전기통신사업법 시행령ㆍ기초연금 고시 모두 규정 없음 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%A0%84%EA%B8%B0%ED%86%B5%EC%8B%A0%EC%82%AC%EC%97%85%EB%B2%95%20%EC%8B%9C%ED%96%89%EB%A0%B9 | https://www.law.go.kr/%ED%96%89%EC%A0%95%EA%B7%9C%EC%B9%99/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EC%A7%80%EA%B8%89%EB%8C%80%EC%83%81%EC%9E%90%EC%84%A0%EC%A0%95%EA%B8%B0%EC%A4%80%EC%95%A1,%EA%B8%B0%EC%A4%80%EC%97%B0%EA%B8%88%EC%95%A1%EB%B0%8F%EC%86%8C%EB%93%9D%EC%9D%B8%EC%A0%95%EC%95%A1%EC%82%B0%EC%A0%95%EC%84%B8%EB%B6%80%EA%B8%B0%EC%A4%80%EC%97%90%EA%B4%80%ED%95%9C%EA%B3%A0%EC%8B%9C |

## 2. 행동 검증 (버튼이 실제로 되는가)

- /policy/basic-pension/income-recognition-calc/ — ✓ 열림 (내부 경로)
- https://finlife.fss.or.kr/finlife/main/contents.do?menuNo=700067 — ✓ 열림 (비과세종합저축 | 절세금융상품 | 저축 | 금융감독원 금융상품통합비교공시 금융상품한눈에)
- /policy/basic-pension/selection-threshold-single-couple/ — ✓ 열림 (내부 경로)

## 3. 단서 조항 (긍정문 뒤집는 '다만' — 본문에 반영한 것)

- 전기통신사업법 시행령 제2조제3항 단서: 8~10호 해당자는 감면 서비스가 이동전화 서비스 등 5종으로 한정됨 — 카드2 본문·box에 원문 그대로 인용
- 같은 조 제4항: 신청 주체는 원칙적으로 감면 대상자 본인이며, 1호·4호·7호 단서 해당자만 가구원 또는 세대주가 신청 — 카드1 본문·표에 반영
- 비과세종합저축 가입가능기간이 2025.12.31.까지로 표시(캡처 시점보다 앞선 날짜) — 카드3에서 갱신 여부 미확인이라고 명시

## 4. 확보하지 못한 것 (본문에 쓰지 않음)

- 통신비 감면율(%)이나 구체적 감면 금액 — 시행령 제2조⑤에 의해 별도 고시로 위임돼 있고 이번 추출본에 그 고시 원문이 없어 쓰지 않음
- 통신비 감면 신청 접수 기관(주민센터·통신사 등 구체 창구) — 이 조문에 명시되지 않아 쓰지 않음
- 비과세종합저축 가입대상과 기초연금 수급자 자격의 단정적 연결 — 가입대상 목록에 ‘기초연금 수급자’라는 표현이 없어 ‘만 65세 이상자’ 등 목록만 그대로 인용하고 단정하지 않음
- 교통비 할인·에너지바우처 관련 내용 전부 — 이번 두 출처(전기통신사업법 시행령, 기초연금 고시)에 규정이 없어 쓰지 않음
- 비과세종합저축 가입가능기간 연장 여부 — 캡처에는 2025.12.31.까지로만 표시돼 있고 갱신 공지를 확인하지 못해 추정하지 않음

_2026-09-19 scripts/article.mjs_
