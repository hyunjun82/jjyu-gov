# 팩트시트 — 기초연금 (income-reversal-reduction)

**타이틀** 기초연금 소득역전방지 감액, 얼마부터 깎이고 얼마까지 남나

## 0. 관할 확정

| 항목 | 내용 |
|---|---|
| 1차 출처 | 국가법령정보센터 — 기초연금법 제8조(기초연금액의 감액) · 국가법령정보센터 — 기초연금법 시행령 · 보건복지부 고시 — 기초연금 선정기준액·기준연금액 및 소득인정액 산정 세부기준 |
| 추출본 | scripts/output/source-income-reversal-reduction.txt (34592자, Playwright) |

## 0-B. 원문 캡처 확인 — 화면을 눈(vision)으로 읽은 기록

- income-reversal-reduction-1.png: 국가법령정보센터, 기초연금법[시행 2025.10.1, 법률 제21065호] 제8조(기초연금액의 감액) 조문 화면 — ①부부 모두 수급권자면 각자 기초연금액의 100분의 20 감액, ②③소득인정액과 기초연금액 합산이 선정기준액 초과 시 초과분 범위에서 일부 감액, ④세부기준은 대통령령.
- income-reversal-reduction-2.png: 국가법령정보센터, 기초연금법 시행령[시행 2026.7.30, 대통령령 제36371호] 제2조(소득의 범위) 조문 화면 — 근로소득·사업소득·재산소득(이자·연금소득)·공적이전소득(국민연금·공무원연금·군인연금 등) 항목별 산정 범위를 나열, 표는 아니고 조문 텍스트.
- income-reversal-reduction-3.png: 국가법령정보센터, 보건복지부고시 제2026-156호(기초연금 지급대상자 선정기준액·기준연금액 및 소득인정액 산정 세부기준) 화면 — 제2조: 2026년도 선정기준액 단독가구 월 소득인정액 2,470,000원·부부가구 3,952,000원, 제3조: 2026년도 기준연금액 34만9천7백원, 제4조: 무료임차소득 부과 기준 주택 시가표준액 6억원 이상, 제6조: 근로소득 기본공제액 월 116만원·추가공제 100분의 30, 제6조의2: 이자소득 월 4만원 공제, 제6조의3: 보상금·수당 소득산정 제외 월 43만원 이하.

## 1. 수치 표 (글에 들어간 숫자 — 핵심콕콕 기준)

| 항목 | 값 | 1차 출처 | 교차 출처 |
|---|---|---|---|
| 감액 근거 | 기초연금법 제8조(기초연금액의 감액) | https://www.law.go.kr/lsLinkCommonInfo.do?lsJoLnkSeq=1030188869 | https://law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95%20%EC%8B%9C%ED%96%89%EB%A0%B9 |
| 감액 조건 | 소득인정액과 기초연금액을 합산한 금액이 선정기준액 이상인 경우 | https://www.law.go.kr/lsLinkCommonInfo.do?lsJoLnkSeq=1030188869 | https://law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95%20%EC%8B%9C%ED%96%89%EB%A0%B9 |
| 2026년 선정기준액(단독가구) | 2,470,000원 | https://www.law.go.kr/lsLinkCommonInfo.do?lsJoLnkSeq=1030188869 | https://law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95%20%EC%8B%9C%ED%96%89%EB%A0%B9 |
| 2026년 선정기준액(부부가구) | 3,952,000원 | https://www.law.go.kr/lsLinkCommonInfo.do?lsJoLnkSeq=1030188869 | https://law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95%20%EC%8B%9C%ED%96%89%EB%A0%B9 |
| 2026년 기준연금액 | 34만9천7백원 | https://www.law.go.kr/lsLinkCommonInfo.do?lsJoLnkSeq=1030188869 | https://law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95%20%EC%8B%9C%ED%96%89%EB%A0%B9 |
| 단독가구 감액 하한 | 기준연금액의 100분의 10 | https://www.law.go.kr/lsLinkCommonInfo.do?lsJoLnkSeq=1030188869 | https://law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95%20%EC%8B%9C%ED%96%89%EB%A0%B9 |
| 부부가구 감액 하한 | 기준연금액의 100분의 20 | https://www.law.go.kr/lsLinkCommonInfo.do?lsJoLnkSeq=1030188869 | https://law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95%20%EC%8B%9C%ED%96%89%EB%A0%B9 |
| 부부 동시 수급 시 별도 감액 | 각각의 기초연금액에서 100분의 20에 해당하는 금액 감액(제8조①) | https://www.law.go.kr/lsLinkCommonInfo.do?lsJoLnkSeq=1030188869 | https://law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95%20%EC%8B%9C%ED%96%89%EB%A0%B9 |
| 부부가구 선정기준액 배율 | 배우자가 없는 노인가구 선정기준액의 100분의 160 | https://www.law.go.kr/lsLinkCommonInfo.do?lsJoLnkSeq=1030188869 | https://law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95%20%EC%8B%9C%ED%96%89%EB%A0%B9 |
| 세부기준 근거 | 감액의 세부적인 기준은 대통령령으로 정함(제8조④) | https://www.law.go.kr/lsLinkCommonInfo.do?lsJoLnkSeq=1030188869 | https://law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95%20%EC%8B%9C%ED%96%89%EB%A0%B9 |

## 2. 행동 검증 (버튼이 실제로 되는가)

- /policy/basic-pension/income-recognition-calc/ — ✓ 열림 (내부 경로)
- /policy/basic-pension/selection-threshold-single-couple/ — ✓ 열림 (내부 경로)
- /policy/basic-pension/calculation-formula/ — ✓ 열림 (내부 경로)

## 3. 단서 조항 (긍정문 뒤집는 '다만' — 본문에 반영한 것)

- 제8조①의 부부 동시수급 100분의 20 감액은 소득역전방지 감액(제8조②)과 별개 조항이지만 Q4에서 함께 다룸 — 숫자는 원문 그대로 인용
- 시행령 제11조⑤ 단서(부부 중 1명 몫이 기준연금액의 100분의 10 미만이면 100분의 10 지급)를 Q4 본문에 반영

## 4. 확보하지 못한 것 (본문에 쓰지 않음)

- 감액 후 실제 원화 금액(예: 34만9천7백원의 10%)은 계산 결과이며 원문에 없는 숫자라 쓰지 않음 — 100분의 10·100분의 20 비율로만 표기
- 저소득자 선정기준액·제5조의2·제8조③에 따른 저소득자 특례 감액은 이번 추출본에 구체 금액이 없어 본문에서 다루지 않음
- 2018년 부칙 경과조치(2만원·4만원 단위 절상 특례)는 2026년 현재 적용되지 않는 과거 규정이라 쓰지 않음

_2026-09-19 scripts/article.mjs_
