# 팩트시트 — 기초연금 (increase-400k-abolition-rumor)

**타이틀** 기초연금 40만원 인상 시기와 폐지설, 연계감액 개편으로 달라지는 금액

## 0. 관할 확정

| 항목 | 내용 |
|---|---|
| 1차 출처 | 정책브리핑(대통령실) — 기초연금 국내 거주기간 요건 설정 등 제도 개선 지시 · 국가법령정보센터 — 기초연금법 제8조(기초연금액의 감액) · 금융감독원 통합연금포털 — [플러스 연금 Cafe] 기초연금 받는다면 국민연금이 줄어들까? · 보건복지부 행정규칙 — 기초연금 지급대상자 선정기준액, 기준연금액 및 소득인정액 산정세부기준 |
| 추출본 | scripts/output/source-increase-400k-abolition-rumor.txt (28356자, Playwright) |

## 0-B. 원문 캡처 확인 — 화면을 눈(vision)으로 읽은 기록

- increase-400k-abolition-rumor-1.png: 정책브리핑(korea.kr) 기사 '이 대통령, 기초연금의 국내 거주기간 요건 설정 등 제도 개선 지시'(2026.09.03), 국적 취득 시기와 무관하게 지급되는 기초연금 형평성 문제로 거주기간 요건 설정 등 제도 개선을 지시했다는 내용, 금액 수치는 본문에 없음
- increase-400k-abolition-rumor-2.png: 국가법령정보센터 기초연금법 조문정보, [시행 2025.10.1.][법률 제21065호] 제8조(기초연금액의 감액) 1~4항 전문 — 본인·배우자 모두 수급권자면 기초연금액의 100분의 20 감액 등 감액 기준 조문만 표시, 금액 수치 없음
- increase-400k-abolition-rumor-3.png: 금융감독원 e-금융교육센터 콘텐츠 페이지, 투자자교육협의회 제작 영상 '[플러스 연금 Cafe] 기초연금 받는다면 국민연금이 줄어들까?'(조회수 38회, 17분41초, 개발연도 2023) 소개·상세정보 화면, 국민연금-기초연금 연계감액 설명 영상이며 구체적 금액 수치는 화면에 없음
- increase-400k-abolition-rumor-4.png: 국가법령정보센터 행정규칙 '기초연금 지급대상자 선정기준액, 기준연금액 및 소득인정액 산정 세부기준에 관한 고시'[시행 2026.7.30.][보건복지부고시 제2026-156호], 제2조 2026년도 선정기준액 단독가구 월 소득인정액 2,470,000원·부부가구 3,952,000원, 제3조 2026년도 기준연금액 34만9천7백원, 제4조 무료임차소득 부과기준 주택 시가표준액 6억원 이상, 제6조 근로소득 기본공제액 월116만원 등 조문 표시

## 1. 수치 표 (글에 들어간 숫자 — 핵심콕콕 기준)

| 항목 | 값 | 1차 출처 | 교차 출처 |
|---|---|---|---|
| 확인된 2026년 기준연금액 | 34만9천7백원 | https://www.korea.kr/news/policyNewsView.do?newsId=148971175 | https://www.law.go.kr/lsLinkCommonInfo.do?lsJoLnkSeq=1030188869 |
| 40만원 인상 관련 공식 발표 | 이번 확인 출처에는 없음 | https://www.korea.kr/news/policyNewsView.do?newsId=148971175 | https://www.law.go.kr/lsLinkCommonInfo.do?lsJoLnkSeq=1030188869 |
| 폐지설 관련 실제 지시 내용 | 국내 거주기간 요건 설정 등 제도 개선 지시(2026.09.03) | https://www.korea.kr/news/policyNewsView.do?newsId=148971175 | https://www.law.go.kr/lsLinkCommonInfo.do?lsJoLnkSeq=1030188869 |
| 부부 감액 비율(법 제8조1항) | 100분의 20 | https://www.korea.kr/news/policyNewsView.do?newsId=148971175 | https://www.law.go.kr/lsLinkCommonInfo.do?lsJoLnkSeq=1030188869 |
| 국민연금 연계감액 근거 | 법 제8조2항, 세부기준은 대통령령 위임(제4항) | https://www.korea.kr/news/policyNewsView.do?newsId=148971175 | https://www.law.go.kr/lsLinkCommonInfo.do?lsJoLnkSeq=1030188869 |
| 2026년 선정기준액 단독가구 | 2,470,000원 | https://www.korea.kr/news/policyNewsView.do?newsId=148971175 | https://www.law.go.kr/lsLinkCommonInfo.do?lsJoLnkSeq=1030188869 |
| 2026년 선정기준액 부부가구 | 3,952,000원 | https://www.korea.kr/news/policyNewsView.do?newsId=148971175 | https://www.law.go.kr/lsLinkCommonInfo.do?lsJoLnkSeq=1030188869 |
| 고시 근거 | 보건복지부고시 제2026-156호(2026. 7. 30. 시행) | https://www.korea.kr/news/policyNewsView.do?newsId=148971175 | https://www.law.go.kr/lsLinkCommonInfo.do?lsJoLnkSeq=1030188869 |

## 2. 행동 검증 (버튼이 실제로 되는가)

- /policy/basic-pension/calculation-formula/ — ✓ 열림 (내부 경로)
- /policy/basic-pension/2027-increase/ — ✓ 열림 (내부 경로)
- /policy/basic-pension/national-pension-linked-reduction/ — ✓ 열림 (내부 경로)

## 3. 단서 조항 (긍정문 뒤집는 '다만' — 본문에 반영한 것)

- 정책브리핑 기사의 지시 내용이 ’폐지’가 아니라 ’거주기간 요건 설정 등 제도 개선’이라는 원문 그대로를 카드2 box에 반영
- 기초연금법 제8조 제2항의 감액 세부기준이 제4항에 따라 대통령령에 위임돼 있다는 단서를 카드3·카드4에 반영

## 4. 확보하지 못한 것 (본문에 쓰지 않음)

- 40만원 인상 확정 시기·로드맵 — 확인 출처 안에 해당 발표가 없어 카드1에서 ’없음’으로만 명시하고 2027-increase 허브로 안내
- 연계감액 개편(안)의 구체적 내용과 시행일 — 확정 발표 자료가 없어 카드3·4에서 ’없음’으로만 명시
- 폐지설의 구체적 발단(청원·법안명 등) — 확인 출처에 없어 다루지 않음
- 국민연금 수령액별 실제 감액 예시 금액 — 대통령령 위임 사항이라 세부 계산식 원문이 확인되지 않아 제외
- 기초연금법 제8조 제3항(저소득자 선정기준액 관련) — 이번 소제목 4개와 직접 연결되지 않아 제외

_2026-09-19 scripts/article.mjs_
