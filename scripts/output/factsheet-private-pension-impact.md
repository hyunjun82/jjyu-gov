# 팩트시트 — 기초연금 (private-pension-impact)

**타이틀** 개인연금 받으면 기초연금 깎이나요, 연금저축·즉시연금 반영 차이

## 0. 관할 확정

| 항목 | 내용 |
|---|---|
| 1차 출처 | 금융감독원 — [플러스 연금 Cafe] 기초연금 받는다면 국민연금이 줄어들까? · 국가법령정보센터 — 기초연금법 제10조(소득인정액의 산정) |
| 추출본 | scripts/output/source-private-pension-impact.txt (35879자, Playwright) |

## 0-B. 원문 캡처 확인 — 화면을 눈(vision)으로 읽은 기록

- private-pension-impact-1.png: 금융감독원 e-금융교육센터, [플러스 연금 Cafe] '기초연금 받는다면 국민연금이 줄어들까?' 영상 상세페이지, 제작 투자자교육협의회·조회수 40회·17분 41초, 개발연도 2023·교육대상 중장년기/노년기/장애인
- private-pension-impact-2.png: 국가법령정보센터, '해당 한글주소명을 찾을 수 없습니다' 오류 페이지 — 한글 법령주소 접속 실패, 표·조문 내용 없음
- private-pension-impact-3.png: 국가법령정보센터 기초연금법 조문 화면(시행 2025.10.1, 법률 제21065호), 제10조(기초연금 지급의 신청)·제10조의2(기초연금 관련 정보의 제공)·제11조(조사·질문 등) 전문 노출, 국민연금·개인연금 감액 관련 조항은 안 보임
- private-pension-impact-4.png: 금융감독원 통합연금포털 '소비자 유의사항 > 유지/해지 단계' 페이지, 해지(중도인출)시 과세 표(구분: 부득이한 사유/그 외 사유 × 개시 전/개시 후 연금수령 한도내·초과 — 기타소득세 16.5%, 연금소득세 3.3~5.5%), 하단 자금 인출 순서 플로우(과세제외금액→이연퇴직소득→과세대상소득, 퇴직소득세 70%, 분리과세 1,500만원 기준 3.3~5.5%/16.5%)

## 1. 수치 표 (글에 들어간 숫자 — 핵심콕콕 기준)

| 항목 | 값 | 1차 출처 | 교차 출처 |
|---|---|---|---|
| 소득인정액 정의 | 본인 및 배우자의 소득평가액과 재산의 소득환산액을 합산한 금액(제2조4호) | https://www.fss.or.kr/edu/fec/contMng/view.do?menuNo=300017&contentsSlno=636 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95/(20251001,21065,20251001)/%EC%A0%9C10%EC%A1%B0 |
| 소득·재산 범위 위임 | 소득 및 재산의 범위는 대통령령, 산정방법은 보건복지부령으로 정함(제2조4호) | https://www.fss.or.kr/edu/fec/contMng/view.do?menuNo=300017&contentsSlno=636 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95/(20251001,21065,20251001)/%EC%A0%9C10%EC%A1%B0 |
| 기초연금 배제 열거(제3조③) | 공무원연금법·공무원 재해보상법·사립학교교직원 연금법·군인연금법·군인 재해보상법·별정우체국법·직역연계법에 따른 연금 | https://www.fss.or.kr/edu/fec/contMng/view.do?menuNo=300017&contentsSlno=636 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95/(20251001,21065,20251001)/%EC%A0%9C10%EC%A1%B0 |
| 개인연금 열거 여부 | 제3조③·제11조②1호라목 어디에도 연금저축·퇴직연금·즉시연금 열거 없음 | https://www.fss.or.kr/edu/fec/contMng/view.do?menuNo=300017&contentsSlno=636 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95/(20251001,21065,20251001)/%EC%A0%9C10%EC%A1%B0 |
| 수급자 비율 기준 | 65세 이상 중 100분의 70 수준이 되도록 선정기준액 결정(제3조②) | https://www.fss.or.kr/edu/fec/contMng/view.do?menuNo=300017&contentsSlno=636 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95/(20251001,21065,20251001)/%EC%A0%9C10%EC%A1%B0 |
| 저소득자 기준연금액 | 소득인정액 100분의 40 이하 → 기준연금액 30만원(제5조의2①) | https://www.fss.or.kr/edu/fec/contMng/view.do?menuNo=300017&contentsSlno=636 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95/(20251001,21065,20251001)/%EC%A0%9C10%EC%A1%B0 |
| 부부 감액률 | 본인·배우자 모두 수급권자면 각각 100분의 20 감액(제8조①) | https://www.fss.or.kr/edu/fec/contMng/view.do?menuNo=300017&contentsSlno=636 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95/(20251001,21065,20251001)/%EC%A0%9C10%EC%A1%B0 |
| 합산 초과시 감액 | 소득인정액과 기초연금액 합산액이 선정기준액 이상이면 초과분 범위에서 감액(제8조②) | https://www.fss.or.kr/edu/fec/contMng/view.do?menuNo=300017&contentsSlno=636 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95/(20251001,21065,20251001)/%EC%A0%9C10%EC%A1%B0 |
| 조사 가능 금융자료 | 금융정보, 신용정보 및 보험정보(제11조②1호가목) | https://www.fss.or.kr/edu/fec/contMng/view.do?menuNo=300017&contentsSlno=636 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95/(20251001,21065,20251001)/%EC%A0%9C10%EC%A1%B0 |
| 조사 가능 재산자료 | 토지, 건축물, 자동차, 선박, 항공기 등(제11조②1호다목) | https://www.fss.or.kr/edu/fec/contMng/view.do?menuNo=300017&contentsSlno=636 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95/(20251001,21065,20251001)/%EC%A0%9C10%EC%A1%B0 |
| 근거 | 국가법령정보센터 기초연금법 제2·3·5의2·8·11조 (2026-09-19 확인) | https://www.fss.or.kr/edu/fec/contMng/view.do?menuNo=300017&contentsSlno=636 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95/(20251001,21065,20251001)/%EC%A0%9C10%EC%A1%B0 |

## 2. 행동 검증 (버튼이 실제로 되는가)

- https://www.fss.or.kr/fss/lifeplan/lifeplanIndex/index.do?menuNo=201101 — ✓ 열림 (통합연금포털 | 통합연금포털 | 금융소비자보호 |)
- /policy/basic-pension/national-pension-linked-reduction/ — ✓ 열림 (내부 경로)
- /policy/basic-pension/income-recognition-calc/ — ✓ 열림 (내부 경로)

## 3. 단서 조항 (긍정문 뒤집는 '다만' — 본문에 반영한 것)

- 제3조③ 배제 열거(공무원연금·군인연금·별정우체국연금·직역연계연금)에 개인연금이 없다는 점을 본문에 반영
- 제8조① 부부 100분의 20 감액, 제8조② 선정기준액 초과분 감액 조건을 본문에 반영
- 제5조의2① 저소득자(소득인정액 100분의 40 이하) 기준연금액 30만원 특례를 본문에 반영

## 4. 확보하지 못한 것 (본문에 쓰지 않음)

- 연금저축·퇴직연금·즉시연금 각각의 소득인정액 반영 방식 — 대통령령·보건복지부령에 위임돼 있으나 이번 추출본에 해당 하위법령 원문이 없어 확인 못함
- 수령 방식(연금 vs 일시금)별 소득인정액 차이 — 조문에 규정이 없고 하위법령도 미확인
- 개인연금 인출 시 과세 기준(기타소득세·연금소득세 등, 통합연금포털 자료) — 기초연금 소득인정액과 무관한 별개(세금) 사안이라 제외. 해당 출처는 설계도 검증 단계에서 이미 ok:false로 처리됨
- 국가법령정보센터 행정규칙(기초연금 소득인정액 산정 세부기준 고시) — 접속 시 '해당 한글주소명을 찾을 수 없습니다' 오류로 원문 확인 불가

_2026-09-19 scripts/article.mjs_
