# 팩트시트 — 기초연금 (financial-assets-bank-balance)

**타이틀** 기초연금 금융재산 조회와 통장 잔액 기준, 현금 한도와 공제 범위

## 0. 관할 확정

| 항목 | 내용 |
|---|---|
| 1차 출처 | 보건복지부 고시 — 기초연금 지급대상자 선정기준액, 기준연금액 및 소득인정액 산정 세부기준 · 국가법령정보센터 — 기초연금법 시행규칙 · 국가법령정보센터 — 기초연금법 시행령 · 국가법령정보센터 — 기초연금법 제10조(소득인정액) |
| 추출본 | scripts/output/source-financial-assets-bank-balance.txt (71083자, Playwright) |

## 0-B. 원문 캡처 확인 — 화면을 눈(vision)으로 읽은 기록

- financial-assets-bank-balance-1.png: 국가법령정보센터, 보건복지부고시 제2026-156호 '기초연금 지급대상자 선정기준액,기준연금액 및 소득인정액 산정 세부기준에 관한 고시'(시행 2026.7.30): 제2조 2026년 선정기준액 단독가구 월 2,470,000원·부부가구 월 3,952,000원, 제3조 2026년도 기준연금액 34만9,700원, 제4조 무료임차소득 부과 기준 주택 시가표준액 6억원 이상, 제6조 근로소득 기본공제액 월 116만원.
- financial-assets-bank-balance-2.png: 국가법령정보센터, 기초연금법 시행규칙(보건복지부령 제1180호, 시행 2026.7.30) 제2조(소득평가액 산정방식)·제3조(재산가액의 산정): 소득에서 제외하는 항목 14호 목록(기초생활보장급여·장애수당·양육보조금·실업급여·근로장려금 등)과 재산가액 산정 방법 각 호(시가표준액 등) 나열, 표는 아니고 조문 목록.
- financial-assets-bank-balance-3.png: 국가법령정보센터, 기초연금법 시행령(대통령령 제36371호, 시행 2026.7.30) 제2조(소득의 범위): 근로소득·사업소득·재산소득(이자·연금소득)·공적이전소득 항목을 조문으로 나열, 이자소득은 '보건복지부장관이 정하여 고시하는 금액 이상의 소득'만 포함한다고 명시(구체적 금액은 이 화면에 없음).
- financial-assets-bank-balance-4.png: 국가법령정보센터, 기초연금법(법률 제21065호, 시행 2025.10.1) 제10조(기초연금 지급의 신청)·제11조(조사·질문 등): 신청 시 제출 동의 대상으로 금융정보(예금 평균잔액 등)·신용정보·보험정보를 규정, 제11조에서 보건복지부장관·지자체장의 금융·재산 조사 권한을 명시.

## 1. 수치 표 (글에 들어간 숫자 — 핵심콕콕 기준)

| 항목 | 값 | 1차 출처 | 교차 출처 |
|---|---|---|---|
| 금융재산 공제 | 금융재산 가액 중 2,000만원까지는 재산산정에서 제외 | https://www.law.go.kr/%ED%96%89%EC%A0%95%EA%B7%9C%EC%B9%99/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EC%A7%80%EA%B8%89%EB%8C%80%EC%83%81%EC%9E%90%EC%84%A0%EC%A0%95%EA%B8%B0%EC%A4%80%EC%95%A1,%EA%B8%B0%EC%A4%80%EC%97%B0%EA%B8%88%EC%95%A1%EB%B0%8F%EC%86%8C%EB%93%9D%EC%9D%B8%EC%A0%95%EC%95%A1%EC%82%B0%EC%A0%95%EC%84%B8%EB%B6%80%EA%B8%B0%EC%A4%80%EC%97%90%EA%B4%80%ED%95%9C%EA%B3%A0%EC%8B%9C | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95%EC%8B%9C%ED%96%89%EA%B7%9C%EC%B9%99 |
| 이자소득 제외 | 이자소득이 있는 경우 월 4만원을 소득산정에서 제외 | https://www.law.go.kr/%ED%96%89%EC%A0%95%EA%B7%9C%EC%B9%99/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EC%A7%80%EA%B8%89%EB%8C%80%EC%83%81%EC%9E%90%EC%84%A0%EC%A0%95%EA%B8%B0%EC%A4%80%EC%95%A1,%EA%B8%B0%EC%A4%80%EC%97%B0%EA%B8%88%EC%95%A1%EB%B0%8F%EC%86%8C%EB%93%9D%EC%9D%B8%EC%A0%95%EC%95%A1%EC%82%B0%EC%A0%95%EC%84%B8%EB%B6%80%EA%B8%B0%EC%A4%80%EC%97%90%EA%B4%80%ED%95%9C%EA%B3%A0%EC%8B%9C | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95%EC%8B%9C%ED%96%89%EA%B7%9C%EC%B9%99 |
| 재산의 소득환산율 | 100분의 4 | https://www.law.go.kr/%ED%96%89%EC%A0%95%EA%B7%9C%EC%B9%99/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EC%A7%80%EA%B8%89%EB%8C%80%EC%83%81%EC%9E%90%EC%84%A0%EC%A0%95%EA%B8%B0%EC%A4%80%EC%95%A1,%EA%B8%B0%EC%A4%80%EC%97%B0%EA%B8%88%EC%95%A1%EB%B0%8F%EC%86%8C%EB%93%9D%EC%9D%B8%EC%A0%95%EC%95%A1%EC%82%B0%EC%A0%95%EC%84%B8%EB%B6%80%EA%B8%B0%EC%A4%80%EC%97%90%EA%B4%80%ED%95%9C%EA%B3%A0%EC%8B%9C | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95%EC%8B%9C%ED%96%89%EA%B7%9C%EC%B9%99 |
| 2026년 선정기준액 단독가구 | 월 소득인정액 2,470,000원 | https://www.law.go.kr/%ED%96%89%EC%A0%95%EA%B7%9C%EC%B9%99/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EC%A7%80%EA%B8%89%EB%8C%80%EC%83%81%EC%9E%90%EC%84%A0%EC%A0%95%EA%B8%B0%EC%A4%80%EC%95%A1,%EA%B8%B0%EC%A4%80%EC%97%B0%EA%B8%88%EC%95%A1%EB%B0%8F%EC%86%8C%EB%93%9D%EC%9D%B8%EC%A0%95%EC%95%A1%EC%82%B0%EC%A0%95%EC%84%B8%EB%B6%80%EA%B8%B0%EC%A4%80%EC%97%90%EA%B4%80%ED%95%9C%EA%B3%A0%EC%8B%9C | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95%EC%8B%9C%ED%96%89%EA%B7%9C%EC%B9%99 |
| 2026년 선정기준액 부부가구 | 월 소득인정액 3,952,000원 | https://www.law.go.kr/%ED%96%89%EC%A0%95%EA%B7%9C%EC%B9%99/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EC%A7%80%EA%B8%89%EB%8C%80%EC%83%81%EC%9E%90%EC%84%A0%EC%A0%95%EA%B8%B0%EC%A4%80%EC%95%A1,%EA%B8%B0%EC%A4%80%EC%97%B0%EA%B8%88%EC%95%A1%EB%B0%8F%EC%86%8C%EB%93%9D%EC%9D%B8%EC%A0%95%EC%95%A1%EC%82%B0%EC%A0%95%EC%84%B8%EB%B6%80%EA%B8%B0%EC%A4%80%EC%97%90%EA%B4%80%ED%95%9C%EA%B3%A0%EC%8B%9C | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95%EC%8B%9C%ED%96%89%EA%B7%9C%EC%B9%99 |
| 2026년 기준연금액 | 34만9천7백원 | https://www.law.go.kr/%ED%96%89%EC%A0%95%EA%B7%9C%EC%B9%99/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EC%A7%80%EA%B8%89%EB%8C%80%EC%83%81%EC%9E%90%EC%84%A0%EC%A0%95%EA%B8%B0%EC%A4%80%EC%95%A1,%EA%B8%B0%EC%A4%80%EC%97%B0%EA%B8%88%EC%95%A1%EB%B0%8F%EC%86%8C%EB%93%9D%EC%9D%B8%EC%A0%95%EC%95%A1%EC%82%B0%EC%A0%95%EC%84%B8%EB%B6%80%EA%B8%B0%EC%A4%80%EC%97%90%EA%B4%80%ED%95%9C%EA%B3%A0%EC%8B%9C | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95%EC%8B%9C%ED%96%89%EA%B7%9C%EC%B9%99 |
| 금융재산의 범위 | 금융자산과 보험상품(시행령 제3조제1항제2호) | https://www.law.go.kr/%ED%96%89%EC%A0%95%EA%B7%9C%EC%B9%99/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EC%A7%80%EA%B8%89%EB%8C%80%EC%83%81%EC%9E%90%EC%84%A0%EC%A0%95%EA%B8%B0%EC%A4%80%EC%95%A1,%EA%B8%B0%EC%A4%80%EC%97%B0%EA%B8%88%EC%95%A1%EB%B0%8F%EC%86%8C%EB%93%9D%EC%9D%B8%EC%A0%95%EC%95%A1%EC%82%B0%EC%A0%95%EC%84%B8%EB%B6%80%EA%B8%B0%EC%A4%80%EC%97%90%EA%B4%80%ED%95%9C%EA%B3%A0%EC%8B%9C | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95%EC%8B%9C%ED%96%89%EA%B7%9C%EC%B9%99 |
| 신청 시 제출 서류 | 금융정보ㆍ신용정보ㆍ보험정보 제공 동의서면(배우자 포함) | https://www.law.go.kr/%ED%96%89%EC%A0%95%EA%B7%9C%EC%B9%99/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EC%A7%80%EA%B8%89%EB%8C%80%EC%83%81%EC%9E%90%EC%84%A0%EC%A0%95%EA%B8%B0%EC%A4%80%EC%95%A1,%EA%B8%B0%EC%A4%80%EC%97%B0%EA%B8%88%EC%95%A1%EB%B0%8F%EC%86%8C%EB%93%9D%EC%9D%B8%EC%A0%95%EC%95%A1%EC%82%B0%EC%A0%95%EC%84%B8%EB%B6%80%EA%B8%B0%EC%A4%80%EC%97%90%EA%B4%80%ED%95%9C%EA%B3%A0%EC%8B%9C | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95%EC%8B%9C%ED%96%89%EA%B7%9C%EC%B9%99 |
| 조회 방식 | 본인 조회가 아니라 보건복지부장관이 금융기관등에 제공을 요청 | https://www.law.go.kr/%ED%96%89%EC%A0%95%EA%B7%9C%EC%B9%99/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EC%A7%80%EA%B8%89%EB%8C%80%EC%83%81%EC%9E%90%EC%84%A0%EC%A0%95%EA%B8%B0%EC%A4%80%EC%95%A1,%EA%B8%B0%EC%A4%80%EC%97%B0%EA%B8%88%EC%95%A1%EB%B0%8F%EC%86%8C%EB%93%9D%EC%9D%B8%EC%A0%95%EC%95%A1%EC%82%B0%EC%A0%95%EC%84%B8%EB%B6%80%EA%B8%B0%EC%A4%80%EC%97%90%EA%B4%80%ED%95%9C%EA%B3%A0%EC%8B%9C | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95%EC%8B%9C%ED%96%89%EA%B7%9C%EC%B9%99 |
| 근거 | 국가법령정보센터 — 기초연금법ㆍ시행령ㆍ시행규칙ㆍ보건복지부고시 제2026-156호 (2026-09-19 확인) | https://www.law.go.kr/%ED%96%89%EC%A0%95%EA%B7%9C%EC%B9%99/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EC%A7%80%EA%B8%89%EB%8C%80%EC%83%81%EC%9E%90%EC%84%A0%EC%A0%95%EA%B8%B0%EC%A4%80%EC%95%A1,%EA%B8%B0%EC%A4%80%EC%97%B0%EA%B8%88%EC%95%A1%EB%B0%8F%EC%86%8C%EB%93%9D%EC%9D%B8%EC%A0%95%EC%95%A1%EC%82%B0%EC%A0%95%EC%84%B8%EB%B6%80%EA%B8%B0%EC%A4%80%EC%97%90%EA%B4%80%ED%95%9C%EA%B3%A0%EC%8B%9C | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95%EC%8B%9C%ED%96%89%EA%B7%9C%EC%B9%99 |

## 2. 행동 검증 (버튼이 실제로 되는가)

- /policy/basic-pension/income-recognition-calc/ — ✓ 열림 (내부 경로)
- /policy/basic-pension/disqualification/ — ✓ 열림 (내부 경로)
- /policy/basic-pension — ✓ 열림 (내부 경로)

## 3. 단서 조항 (긍정문 뒤집는 '다만' — 본문에 반영한 것)

- 금융재산 2,000만원 초과분만 재산의 소득환산액 계산에 반영되며, 뺀 후 금액이 0보다 작으면 0으로 계산 — 고시 제9조ㆍ시행규칙 제4조제1항제2호
- 이자소득이 있는 경우 월 4만원을 소득산정에서 제외하되, 차감 후 0보다 작으면 0으로 계산 — 고시 제6조의2

## 4. 확보하지 못한 것 (본문에 쓰지 않음)

- 대도시ㆍ중소도시ㆍ농어촌별 기본재산액 공제 금액 — 고시 제8조가 지역별 구분만 나열하고 실제 금액 표는 이번 캡처에 담기지 않아 쓰지 않음
- 시행령 제2조제1항제3호가목의 이자소득 산정 제외 기준액(보건복지부장관이 정하여 고시하는 금액) 자체의 구체 액수 — 이 화면에는 없고, 월 4만원은 별도 조문(고시 제6조의2)의 소득산정 제외액이라 혼동하지 않도록 구분해 씀
- 시행령 제14조(금융정보등의 범위) 조문 본문 — 캡처에 중간 생략으로 빠져 있어 구체 항목을 쓰지 않음
- 통장 잔액 얼마면 기초연금에서 탈락한다는 단일 수치 — 소득평가액과 재산의 소득환산액을 합산한 소득인정액 전체로 판정되어 법령에 단일 통장잔액 기준이 없음

_2026-09-19 scripts/article.mjs_
