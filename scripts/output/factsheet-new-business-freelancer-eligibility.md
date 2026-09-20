# 팩트시트 — 종합소득세 중간예납 (new-business-freelancer-eligibility)

**타이틀** 신규사업자와 프리랜서 중간예납 대상 여부, 첫해 기준과 근로소득 겸업

## 0. 관할 확정

| 항목 | 내용 |
|---|---|
| 1차 출처 | 국가법령정보센터 — 소득세법 제65조(중간예납) · 국가법령정보센터 — 소득세및법인세중간예납등특례규정 · 찾기쉬운 생활법령 연계 — 중간예납에서 제외되는 소득 · 국가법령정보센터 — 소득세법 시행령(종합소득 계산 관련) |
| 추출본 | scripts/output/source-new-business-freelancer-eligibility.txt (13815자, Playwright) |

## 0-B. 원문 캡처 확인 — 화면을 눈(vision)으로 읽은 기록

- new-business-freelancer-eligibility-1.png: 국가법령정보센터, 소득세법 제65조(중간예납) 본문 화면 — 1항 중간예납세액(전년세액 2분의1), 3항 중간예납추계액(기준액 100분의30 미만 시 신고), 8항 계산식 박스(중간예납추계액=종합소득산출세액/2 - 감면세액 등), 법률 제21221호 2025.12.23. 일부개정 표시.
- new-business-freelancer-eligibility-2.png: 국가법령정보센터 연혁법령, 대통령령 제9962호 1980.7.11. 제정 '소득세및법인세중간예납등특례규정' — 제1조(소득세의 중간예납세액) 부가가치세 과세표준 100분의50·100분의80 기준 표, 제2조(법인세의 중간예납세액) 동일 구조.
- new-business-freelancer-eligibility-3.png: 국가법령정보센터 법령조문 화면, 소득세법 시행규칙 제64조(중간예납에서 제외되는 소득) 2026.05.22 일부개정(제33호) — 1호 저술가·화가·배우 등 자유직업소득, 2호 보험모집인 등 독립적 지위 소득, 3호 방문판매업무 수당, 4·5호 조특법 관련 공동사업, 하단 관련판례 서울고등법원 2018.01.09 선고 2017누66345 판결(종합소득세부과처분무효확인) 1건.
- new-business-freelancer-eligibility-4.png: 국가법령정보센터 조문정보, 소득세법 시행령[시행 2026.7.1.][대통령령 제36343호, 2026.5.22. 일부개정] 제125조(중간예납추계액의 신고와 조사결정) — 1항 법 제65조제3항·제5항 신고서 제출 규정, 2항 신고 안 하면 법 제80조 준용해 세무서장이 조사결정 가능.

## 1. 수치 표 (글에 들어간 숫자 — 핵심콕콕 기준)

| 항목 | 값 | 1차 출처 | 교차 출처 |
|---|---|---|---|
| 중간예납 대상 | 종합소득이 있는 거주자(제65조 제1항) | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95/%EC%A0%9C65%EC%A1%B0 | https://www.law.go.kr/lsInfoP.do?lsiSeq=22305 |
| 신규사업자 제외 | 해당 과세기간의 개시일 현재 사업자가 아닌 자로서 그 과세기간 중 신규로 사업을 시작한 자는 제외 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95/%EC%A0%9C65%EC%A1%B0 | https://www.law.go.kr/lsInfoP.do?lsiSeq=22305 |
| 중간예납기간 | 1월 1일부터 6월 30일까지 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95/%EC%A0%9C65%EC%A1%B0 | https://www.law.go.kr/lsInfoP.do?lsiSeq=22305 |
| 중간예납세액 | 중간예납기준액의 2분의 1(1천원 미만 단수는 버림) | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95/%EC%A0%9C65%EC%A1%B0 | https://www.law.go.kr/lsInfoP.do?lsiSeq=22305 |
| 고지서 발급 | 11월 1일부터 11월 15일까지 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95/%EC%A0%9C65%EC%A1%B0 | https://www.law.go.kr/lsInfoP.do?lsiSeq=22305 |
| 납부기한 | 11월 30일까지 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95/%EC%A0%9C65%EC%A1%B0 | https://www.law.go.kr/lsInfoP.do?lsiSeq=22305 |
| 기준액 없는 복식부기의무자 | 중간예납기간 중 사업소득이 있으면 11월 1일부터 11월 30일까지 신고 (제65조 제5항) | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95/%EC%A0%9C65%EC%A1%B0 | https://www.law.go.kr/lsInfoP.do?lsiSeq=22305 |
| 중간예납추계액 신고 | 중간예납기준액의 100분의 30에 미달하면 11월 1일부터 11월 30일까지 신고 가능 (제65조 제3항) | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95/%EC%A0%9C65%EC%A1%B0 | https://www.law.go.kr/lsInfoP.do?lsiSeq=22305 |
| 중간예납에서 제외되는 소득 | 자영 예술가·스포츠 서비스업·보험모집인 등·방문판매업무 등 (시행규칙 제64조) | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95/%EC%A0%9C65%EC%A1%B0 | https://www.law.go.kr/lsInfoP.do?lsiSeq=22305 |
| 중간예납기준액 구성 | 직전 과세기간의 중간예납세액 + 확정신고납부세액 + 추가납부세액 + 기한후신고납부세액·추가자진납부세액 - 환급세액 (제65조 제7항) | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95/%EC%A0%9C65%EC%A1%B0 | https://www.law.go.kr/lsInfoP.do?lsiSeq=22305 |
| 근거 | 국가법령정보센터 소득세법 제65조·시행규칙 제64조 (2026-09-20 확인) | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95/%EC%A0%9C65%EC%A1%B0 | https://www.law.go.kr/lsInfoP.do?lsiSeq=22305 |

## 2. 행동 검증 (버튼이 실제로 되는가)

- /policy/income-tax-interim-payment — ✓ 열림 (내부 경로)
- /policy/income-tax-interim-payment/notice-timing-hometax-lookup/ — ✓ 열림 (내부 경로)
- /policy/income-tax-interim-payment/tax-calculation-half-rule/ — ✓ 열림 (내부 경로)

## 3. 단서 조항 (긍정문 뒤집는 '다만' — 본문에 반영한 것)

- 신규사업자 제외는 그 과세기간 중 신규로 사업을 시작한 경우에만 적용되며, 업종 추가 등 기존 사업자의 확장은 포함하지 않음
- 중간예납기준액이 없어도 복식부기의무자는 11월 1일부터 11월 30일까지 중간예납추계액을 신고해야 함(제65조 제5항)
- 시행규칙 제64조 3호(방문판매업무)의 제외는 법 제144조의2에 따른 사업소득세액 연말정산을 전제로 함
- 근로소득과 사업소득을 함께 가진 겸업자를 별도로 제외하는 문구는 제65조 제1항에 없음

## 4. 확보하지 못한 것 (본문에 쓰지 않음)

- 1980년 대통령령 제9962호 '소득세및법인세중간예납등특례규정'(부가가치세 과세표준 100분의50·100분의80 기준) — 1980년 한시 특례 규정이라 현재 적용되지 않아 쓰지 않음
- 제65조 제1항의 '대통령령으로 정하는 소득만이 있는 자'(제외 대상)의 구체적 범위 — 해당 시행령 조문을 확인하지 못해 어떤 소득인지는 쓰지 않음
- '신규사업자는 다음 해 5월 확정신고 때 낸다'는 구체적 시점 — 제76조 본문을 확인하지 못해 날짜는 쓰지 않음

_2026-09-20 scripts/article.mjs_
