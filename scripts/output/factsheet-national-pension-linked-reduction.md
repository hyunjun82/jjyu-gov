# 팩트시트 — 기초연금 (national-pension-linked-reduction)

**타이틀** 국민연금 수령액별 기초연금 감액 계산, 연계감액 기준과 폐지 여부

## 0. 관할 확정

| 항목 | 내용 |
|---|---|
| 1차 출처 | 국가법령정보센터 — 기초연금법 제8조(기초연금액의 감액) · 금융감독원 — [플러스 연금 Cafe] 기초연금 받는다면 국민연금이 줄어들까? · 국가법령정보센터 — 기초연금법 제10조(기준연금액) · 정책브리핑 — 대통령의 기초연금 제도 개선 지시 |
| 추출본 | scripts/output/source-national-pension-linked-reduction.txt (46063자, Playwright) |

## 0-B. 원문 캡처 확인 — 화면을 눈(vision)으로 읽은 기록

- national-pension-linked-reduction-1.png: 국가법령정보센터 기초연금법[시행 2025.10.1.][법률 제21065호] 제8조(기초연금액의 감액) 화면, 부부 감액(①본인·배우자 모두 수급자 시 각각 100분의 20 감액)과 소득역전 방지 감액(②③, 대통령령 위임 ④)조문 전문이 좌측 목차 '제8조 기초연금액의 감액' 아래 표시됨.
- national-pension-linked-reduction-2.png: 금융감독원 e-금융교육센터 콘텐츠 상세 화면, 영상 '[플러스 연금 Cafe] 기초연금 받는다면 국민연금이 줄어들까?'(제작 투자자교육협의회, 조회수 36회, 17분41초) — 콘텐츠 소개 표에 고유번호 투교협-영상/애니메이션-417, 개발연도 2023, 교육대상 중장년기·노년기·장애인으로 기재.
- national-pension-linked-reduction-3.png: 국가법령정보센터 기초연금법 조문 화면, 제10조(기초연금 지급의 신청)·제10조의2(기초연금 관련 정보의 제공)·제11조(조사·질문 등) 3개 조문 전문이 나열되어 있고 국민연금·건강보험 등 소득재산 자료 제공 근거(제11조제2항제1호라목)가 보임, 국민연금 연계 감액 관련 수치는 없음.
- national-pension-linked-reduction-4.png: 정책브리핑(korea.kr) 뉴스 화면, 제목 '이 대통령, 기초연금의 국내 거주기간 요건 설정 등 제도 개선 지시'(2026.09.03, 정책브리핑) — 국적 취득 시기와 무관하게 지급되는 기초연금 제도의 형평성 문제를 지적하며 국내 거주기간 요건 설정 등 제도 개선을 지시했다는 본문, 국민연금 연계 감액에 대한 내용·수치는 없음.

## 1. 수치 표 (글에 들어간 숫자 — 핵심콕콕 기준)

| 항목 | 값 | 1차 출처 | 교차 출처 |
|---|---|---|---|
| 감액 없이 전액 받는 기준 | 국민연금 급여액등이 기준연금액의 100분의 150 이하인 사람 (제6조제1항) | https://www.law.go.kr/lsLinkCommonInfo.do?lsJoLnkSeq=1030188869 | https://www.fss.or.kr/edu/fec/contMng/view.do?menuNo=300017&contentsSlno=636 |
| 완화 구간 | 100분의 150 초과 100분의 200 이하인 사람은 제5조 산정금액 이상으로 대통령령에 따라 달리 정할 수 있음 (제6조제2항) | https://www.law.go.kr/lsLinkCommonInfo.do?lsJoLnkSeq=1030188869 | https://www.fss.or.kr/edu/fec/contMng/view.do?menuNo=300017&contentsSlno=636 |
| 산정 산식 | 기준연금액에서 소득재분배급여금액의 3분의 2를 뺀 금액(0보다 작으면 0)에 부가연금액(기준연금액의 2분의 1)을 더한 금액 (제5조제5항) | https://www.law.go.kr/lsLinkCommonInfo.do?lsJoLnkSeq=1030188869 | https://www.fss.or.kr/edu/fec/contMng/view.do?menuNo=300017&contentsSlno=636 |
| 기초연금액 한도 | 제5조제4항부터 제6항까지 산정한 금액이 기준연금액을 초과하면 기준연금액을 기초연금액으로 봄 (제7조) | https://www.law.go.kr/lsLinkCommonInfo.do?lsJoLnkSeq=1030188869 | https://www.fss.or.kr/edu/fec/contMng/view.do?menuNo=300017&contentsSlno=636 |
| 부부 둘 다 수급자면 | 각각의 기초연금액에서 기초연금액의 100분의 20에 해당하는 금액을 감액 (제8조제1항, 연계감액과는 별개) | https://www.law.go.kr/lsLinkCommonInfo.do?lsJoLnkSeq=1030188869 | https://www.fss.or.kr/edu/fec/contMng/view.do?menuNo=300017&contentsSlno=636 |
| 소득역전방지 감액 | 소득인정액과 기초연금액을 합산한 금액이 선정기준액 이상이면 초과 금액의 범위에서 기초연금액의 일부를 감액할 수 있음 (제8조제2항) | https://www.law.go.kr/lsLinkCommonInfo.do?lsJoLnkSeq=1030188869 | https://www.fss.or.kr/edu/fec/contMng/view.do?menuNo=300017&contentsSlno=636 |
| 감액 세부기준 | 제2항 및 제3항에 따른 감액의 세부적인 기준은 대통령령으로 정함 (제8조제4항) | https://www.law.go.kr/lsLinkCommonInfo.do?lsJoLnkSeq=1030188869 | https://www.fss.or.kr/edu/fec/contMng/view.do?menuNo=300017&contentsSlno=636 |
| 가장 최근 개정 | 법률 제21065호(2025년 10월 1일 시행, 타법개정)는 제5조제2항의 ’통계청장’을 ’국가데이터처장’으로 바꾼 개정이며 연계감액 조항은 그대로임 | https://www.law.go.kr/lsLinkCommonInfo.do?lsJoLnkSeq=1030188869 | https://www.fss.or.kr/edu/fec/contMng/view.do?menuNo=300017&contentsSlno=636 |
| 근거 | 국가법령정보센터 기초연금법 제5조·제6조·제7조·제8조 (2026-09-19 확인) | https://www.law.go.kr/lsLinkCommonInfo.do?lsJoLnkSeq=1030188869 | https://www.fss.or.kr/edu/fec/contMng/view.do?menuNo=300017&contentsSlno=636 |

## 2. 행동 검증 (버튼이 실제로 되는가)

- https://www.fss.or.kr/fss/lifeplan/lifeplanIndex/index.do?menuNo=201101 — ✓ 열림 (통합연금포털 | 통합연금포털 | 금융소비자보호 |)
- /policy/basic-pension/calculation-formula/ — ✓ 열림 (내부 경로)
- /policy/basic-pension/2027-increase/ — ✓ 열림 (내부 경로)

## 3. 단서 조항 (긍정문 뒤집는 '다만' — 본문에 반영한 것)

- 제6조제2항의 100분의 150 초과 100분의 200 이하 완화 구간을 본문 표에 반영
- 제8조의 부부감액(100분의 20)·소득역전방지감액을 연계감액(제6조)과 별개 조문으로 구분해 반영
- 제5조제5항 산식의 ’뺀 값이 0보다 작으면 0으로 한다’ 단서를 본문·box에 반영
- 법률 제21065호 개정이 ’통계청장→국가데이터처장’ 명칭 변경일 뿐 연계감액 조항과 무관하다는 점을 부칙 원문으로 반영

## 4. 확보하지 못한 것 (본문에 쓰지 않음)

- 2021년 기준연금액 30만원(제5조제3항) — 국민연금 연계감액 산식과 무관한 특정 연도 값이라 혼동 방지 위해 제외
- 제5조의2 저소득 기초연금 수급권자 특례(소득인정액 100분의 40 이하, 기준연금액 30만원) — 이번 주제(국민연금 연계감액)와 다른 트랙이라 제외
- 제5조제6항 연계노령연금 수급권자에 대한 별도 산식 — 니치 대상자 조항이라 이번 4개 소제목 답변 밀도상 생략
- 금감원 e-금융교육센터 영상 콘텐츠(투교협-영상/애니메이션-417, 조회수 36회, 17분41초, 개발연도 2023) — 제목·메타데이터만 있고 연계감액 계산에 쓸 수치나 문장이 없어 제외

_2026-09-19 scripts/article.mjs_
