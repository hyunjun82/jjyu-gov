# 팩트시트 — 기초연금 (calculation-formula)

**타이틀** 기초연금 지급액 계산 공식, 감액 적용 순서와 최저 지급액

## 0. 관할 확정

| 항목 | 내용 |
|---|---|
| 1차 출처 | 국가법령정보센터 — 기초연금법 제8조(기초연금액의 감액) · 보건복지부 행정규칙 — 기초연금 지급대상자 선정기준액·기준연금액 및 소득인정액 산정방법 고시 · 국가법령정보센터 — 기초연금법 시행령 · 금융감독원 — [플러스 연금 Cafe] 기초연금 받는다면 국민연금이 줄어들까? |
| 추출본 | scripts/output/source-calculation-formula.txt (46974자, Playwright) |

## 0-B. 원문 캡처 확인 — 화면을 눈(vision)으로 읽은 기록

- calculation-formula-1.png: 법제처 국가법령정보센터, 기초연금법[시행 2025.10.1][법률 제21065호] 제8조(기초연금액의 감액) 조문 화면 — ①본인·배우자 모두 수급자면 각각 기초연금액의 100분의 20 감액, ②③소득인정액과 합산 시 선정기준액·저소득자 선정기준액 초과분 감액 규정, ④세부기준은 대통령령.
- calculation-formula-2.png: 법제처 국가법령정보센터, 행정규칙 '기초연금 지급대상자 선정기준액, 기준연금액 및 소득인정액 산정 세부기준에 관한 고시'[시행 2026.7.30, 보건복지부고시 제2026-156호] — 제2조 2026년 선정기준액: 단독가구 월 2,470,000원/부부가구 월 3,952,000원, 제3조 2026년도 기준연금액 34만9천7백원, 제6조 근로소득 기본공제액 월116만원·추가공제 30%.
- calculation-formula-3.png: 법제처 국가법령정보센터, 기초연금법 시행령[시행 2026.7.30, 대통령령 제36371호] 제2조(소득의 범위) — 근로소득·사업소득·재산소득(이자·연금소득)·공적이전소득(국민연금법·공무원연금법 등 각 법률 나열) 항목을 소득범위로 규정, 표는 아니고 조문 목록 형태.
- calculation-formula-4.png: 금융감독원 e-금융교육센터, 콘텐츠 상세페이지 '[플러스 연금 Cafe] 기초연금 받는다면 국민연금이 줄어들까?' 영상(투자자교육협의회 제작, 조회수 41회, 재생시간 17분41초, 2023년 개발, 고유번호 투교협-영상/애니메이션-417) — 국민연금·기초연금 연계 감액 설명 영상 소개일 뿐 구체 수치 표는 없음.

## 1. 수치 표 (글에 들어간 숫자 — 핵심콕콕 기준)

| 항목 | 값 | 1차 출처 | 교차 출처 |
|---|---|---|---|
| 2026년 기준연금액 | 34만9천7백원 | https://www.law.go.kr/lsLinkCommonInfo.do?lsJoLnkSeq=1030188869 | https://www.law.go.kr/%ED%96%89%EC%A0%95%EA%B7%9C%EC%B9%99/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EC%A7%80%EA%B8%89%EB%8C%80%EC%83%81%EC%9E%90%EC%84%A0%EC%A0%95%EA%B8%B0%EC%A4%80%EC%95%A1,%EA%B8%B0%EC%A4%80%EC%97%B0%EA%B8%88%EC%95%A1%EB%B0%8F%EC%86%8C%EB%93%9D%EC%9D%B8%EC%A0%95%EC%95%A1%EC%82%B0%EC%A0%95%EC%84%B8%EB%B6%80%EA%B8%B0%EC%A4%80%EC%97%90%EA%B4%80%ED%95%9C%EA%B3%A0%EC%8B%9C |
| 2026년 선정기준액(단독) | 월 소득인정액 2,470,000원 | https://www.law.go.kr/lsLinkCommonInfo.do?lsJoLnkSeq=1030188869 | https://www.law.go.kr/%ED%96%89%EC%A0%95%EA%B7%9C%EC%B9%99/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EC%A7%80%EA%B8%89%EB%8C%80%EC%83%81%EC%9E%90%EC%84%A0%EC%A0%95%EA%B8%B0%EC%A4%80%EC%95%A1,%EA%B8%B0%EC%A4%80%EC%97%B0%EA%B8%88%EC%95%A1%EB%B0%8F%EC%86%8C%EB%93%9D%EC%9D%B8%EC%A0%95%EC%95%A1%EC%82%B0%EC%A0%95%EC%84%B8%EB%B6%80%EA%B8%B0%EC%A4%80%EC%97%90%EA%B4%80%ED%95%9C%EA%B3%A0%EC%8B%9C |
| 2026년 선정기준액(부부) | 월 소득인정액 3,952,000원 | https://www.law.go.kr/lsLinkCommonInfo.do?lsJoLnkSeq=1030188869 | https://www.law.go.kr/%ED%96%89%EC%A0%95%EA%B7%9C%EC%B9%99/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EC%A7%80%EA%B8%89%EB%8C%80%EC%83%81%EC%9E%90%EC%84%A0%EC%A0%95%EA%B8%B0%EC%A4%80%EC%95%A1,%EA%B8%B0%EC%A4%80%EC%97%B0%EA%B8%88%EC%95%A1%EB%B0%8F%EC%86%8C%EB%93%9D%EC%9D%B8%EC%A0%95%EC%95%A1%EC%82%B0%EC%A0%95%EC%84%B8%EB%B6%80%EA%B8%B0%EC%A4%80%EC%97%90%EA%B4%80%ED%95%9C%EA%B3%A0%EC%8B%9C |
| 부부감액 | 본인과 배우자가 모두 수급권자인 경우 각각의 기초연금액에서 100분의 20 감액 | https://www.law.go.kr/lsLinkCommonInfo.do?lsJoLnkSeq=1030188869 | https://www.law.go.kr/%ED%96%89%EC%A0%95%EA%B7%9C%EC%B9%99/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EC%A7%80%EA%B8%89%EB%8C%80%EC%83%81%EC%9E%90%EC%84%A0%EC%A0%95%EA%B8%B0%EC%A4%80%EC%95%A1,%EA%B8%B0%EC%A4%80%EC%97%B0%EA%B8%88%EC%95%A1%EB%B0%8F%EC%86%8C%EB%93%9D%EC%9D%B8%EC%A0%95%EC%95%A1%EC%82%B0%EC%A0%95%EC%84%B8%EB%B6%80%EA%B8%B0%EC%A4%80%EC%97%90%EA%B4%80%ED%95%9C%EA%B3%A0%EC%8B%9C |
| 소득인정액 합산감액 | 합산 금액이 선정기준액 이상이면 초과분 범위에서 일부 감액 | https://www.law.go.kr/lsLinkCommonInfo.do?lsJoLnkSeq=1030188869 | https://www.law.go.kr/%ED%96%89%EC%A0%95%EA%B7%9C%EC%B9%99/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EC%A7%80%EA%B8%89%EB%8C%80%EC%83%81%EC%9E%90%EC%84%A0%EC%A0%95%EA%B8%B0%EC%A4%80%EC%95%A1,%EA%B8%B0%EC%A4%80%EC%97%B0%EA%B8%88%EC%95%A1%EB%B0%8F%EC%86%8C%EB%93%9D%EC%9D%B8%EC%A0%95%EC%95%A1%EC%82%B0%EC%A0%95%EC%84%B8%EB%B6%80%EA%B8%B0%EC%A4%80%EC%97%90%EA%B4%80%ED%95%9C%EA%B3%A0%EC%8B%9C |
| 감액 적용 순서 | 부부감액(제8조①) 반영 후 그 금액 기준으로 소득인정액 합산감액(제8조②) 적용 | https://www.law.go.kr/lsLinkCommonInfo.do?lsJoLnkSeq=1030188869 | https://www.law.go.kr/%ED%96%89%EC%A0%95%EA%B7%9C%EC%B9%99/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EC%A7%80%EA%B8%89%EB%8C%80%EC%83%81%EC%9E%90%EC%84%A0%EC%A0%95%EA%B8%B0%EC%A4%80%EC%95%A1,%EA%B8%B0%EC%A4%80%EC%97%B0%EA%B8%88%EC%95%A1%EB%B0%8F%EC%86%8C%EB%93%9D%EC%9D%B8%EC%A0%95%EC%95%A1%EC%82%B0%EC%A0%95%EC%84%B8%EB%B6%80%EA%B8%B0%EC%A4%80%EC%97%90%EA%B4%80%ED%95%9C%EA%B3%A0%EC%8B%9C |
| 국민연금 연계 산식 | 기준연금액의 100분의 250에서 국민연금 급여액을 뺀 금액과 법 제5조 산정액(기준연금액 초과시 기준연금액) 중 큰 금액 | https://www.law.go.kr/lsLinkCommonInfo.do?lsJoLnkSeq=1030188869 | https://www.law.go.kr/%ED%96%89%EC%A0%95%EA%B7%9C%EC%B9%99/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EC%A7%80%EA%B8%89%EB%8C%80%EC%83%81%EC%9E%90%EC%84%A0%EC%A0%95%EA%B8%B0%EC%A4%80%EC%95%A1,%EA%B8%B0%EC%A4%80%EC%97%B0%EA%B8%88%EC%95%A1%EB%B0%8F%EC%86%8C%EB%93%9D%EC%9D%B8%EC%A0%95%EC%95%A1%EC%82%B0%EC%A0%95%EC%84%B8%EB%B6%80%EA%B8%B0%EC%A4%80%EC%97%90%EA%B4%80%ED%95%9C%EA%B3%A0%EC%8B%9C |
| 소득재분배급여금액 조정 | 가입기간 20년 초과·미만 1년마다 1천분의 50씩 가감 | https://www.law.go.kr/lsLinkCommonInfo.do?lsJoLnkSeq=1030188869 | https://www.law.go.kr/%ED%96%89%EC%A0%95%EA%B7%9C%EC%B9%99/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EC%A7%80%EA%B8%89%EB%8C%80%EC%83%81%EC%9E%90%EC%84%A0%EC%A0%95%EA%B8%B0%EC%A4%80%EC%95%A1,%EA%B8%B0%EC%A4%80%EC%97%B0%EA%B8%88%EC%95%A1%EB%B0%8F%EC%86%8C%EB%93%9D%EC%9D%B8%EC%A0%95%EC%95%A1%EC%82%B0%EC%A0%95%EC%84%B8%EB%B6%80%EA%B8%B0%EC%A4%80%EC%97%90%EA%B4%80%ED%95%9C%EA%B3%A0%EC%8B%9C |
| 단독가구 최저 지급액 | 기준연금액의 100분의 10 | https://www.law.go.kr/lsLinkCommonInfo.do?lsJoLnkSeq=1030188869 | https://www.law.go.kr/%ED%96%89%EC%A0%95%EA%B7%9C%EC%B9%99/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EC%A7%80%EA%B8%89%EB%8C%80%EC%83%81%EC%9E%90%EC%84%A0%EC%A0%95%EA%B8%B0%EC%A4%80%EC%95%A1,%EA%B8%B0%EC%A4%80%EC%97%B0%EA%B8%88%EC%95%A1%EB%B0%8F%EC%86%8C%EB%93%9D%EC%9D%B8%EC%A0%95%EC%95%A1%EC%82%B0%EC%A0%95%EC%84%B8%EB%B6%80%EA%B8%B0%EC%A4%80%EC%97%90%EA%B4%80%ED%95%9C%EA%B3%A0%EC%8B%9C |
| 부부 각자 최저 지급액 | 기준연금액의 100분의 20 | https://www.law.go.kr/lsLinkCommonInfo.do?lsJoLnkSeq=1030188869 | https://www.law.go.kr/%ED%96%89%EC%A0%95%EA%B7%9C%EC%B9%99/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EC%A7%80%EA%B8%89%EB%8C%80%EC%83%81%EC%9E%90%EC%84%A0%EC%A0%95%EA%B8%B0%EC%A4%80%EC%95%A1,%EA%B8%B0%EC%A4%80%EC%97%B0%EA%B8%88%EC%95%A1%EB%B0%8F%EC%86%8C%EB%93%9D%EC%9D%B8%EC%A0%95%EC%95%A1%EC%82%B0%EC%A0%95%EC%84%B8%EB%B6%80%EA%B8%B0%EC%A4%80%EC%97%90%EA%B4%80%ED%95%9C%EA%B3%A0%EC%8B%9C |
| 부부 1명 몫 하한 | 기준연금액의 100분의 10 미만이면 100분의 10으로 상향 | https://www.law.go.kr/lsLinkCommonInfo.do?lsJoLnkSeq=1030188869 | https://www.law.go.kr/%ED%96%89%EC%A0%95%EA%B7%9C%EC%B9%99/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EC%A7%80%EA%B8%89%EB%8C%80%EC%83%81%EC%9E%90%EC%84%A0%EC%A0%95%EA%B8%B0%EC%A4%80%EC%95%A1,%EA%B8%B0%EC%A4%80%EC%97%B0%EA%B8%88%EC%95%A1%EB%B0%8F%EC%86%8C%EB%93%9D%EC%9D%B8%EC%A0%95%EC%95%A1%EC%82%B0%EC%A0%95%EC%84%B8%EB%B6%80%EA%B8%B0%EC%A4%80%EC%97%90%EA%B4%80%ED%95%9C%EA%B3%A0%EC%8B%9C |
| 근거 | 기초연금법 제8조·시행령 제10조·제11조, 보건복지부고시 제2026-156호 (2026-09-19 확인) | https://www.law.go.kr/lsLinkCommonInfo.do?lsJoLnkSeq=1030188869 | https://www.law.go.kr/%ED%96%89%EC%A0%95%EA%B7%9C%EC%B9%99/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EC%A7%80%EA%B8%89%EB%8C%80%EC%83%81%EC%9E%90%EC%84%A0%EC%A0%95%EA%B8%B0%EC%A4%80%EC%95%A1,%EA%B8%B0%EC%A4%80%EC%97%B0%EA%B8%88%EC%95%A1%EB%B0%8F%EC%86%8C%EB%93%9D%EC%9D%B8%EC%A0%95%EC%95%A1%EC%82%B0%EC%A0%95%EC%84%B8%EB%B6%80%EA%B8%B0%EC%A4%80%EC%97%90%EA%B4%80%ED%95%9C%EA%B3%A0%EC%8B%9C |

## 2. 행동 검증 (버튼이 실제로 되는가)

- /policy/basic-pension/income-recognition-calc/ — ✓ 열림 (내부 경로)
- /policy/basic-pension/national-pension-linked-reduction/ — ✓ 열림 (내부 경로)
- /policy/basic-pension/financial-assets-bank-balance/ — ✓ 열림 (내부 경로)

## 3. 단서 조항 (긍정문 뒤집는 '다만' — 본문에 반영한 것)

- 제8조제1항 부부감액(100분의 20)이 제8조제2항 소득인정액 합산감액보다 먼저 반영된다는 순서를 본문에 조문 그대로 인용했다
- 시행령 제11조의 최저 지급액이 단독 100분의 10, 부부 각자 100분의 20, 1명 몫 하한 100분의 10이라는 세 가지 기준을 구분해 표로 반영했다
- 국민연금 연계 산식(제10조)에서 두 금액 중 '큰 금액'을 적용한다는 단서를 그대로 반영했다
- 상단 버튼 라벨이 다른 스포크와 중복돼 '내 소득인정액 지금 계산하기'로 바꿨다

## 4. 확보하지 못한 것 (본문에 쓰지 않음)

- 금융감독원 e-금융교육센터 영상(계산formula-4)은 국민연금-기초연금 연계 개념 소개일 뿐 구체 수치가 없어 본문에 쓰지 않음
- 제8조제3항·저소득자 선정기준액(제5조의2) 관련 감액은 이번 소제목이 다루는 부부감액·연계산식·순서·최저지급과 다른 별도 감액 유형이라 쓰지 않음
- 소득재분배급여금액 산정의 구체 수치표(시행령 별표1)는 추출본에 '별표 1에 따라 산정한 금액'이라는 조문 인용만 있고 표 내용 자체가 없어 쓰지 않음
- 선정기준액에 100분의 160을 곱하는 배우자 유무 산정방식(시행령 제4조②)은 이번 소제목과 직접 관련이 없어 쓰지 않음

_2026-09-19 scripts/article.mjs_
