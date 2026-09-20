# 팩트시트 — 종합소득세 중간예납 (estimated-return-reduction)

**타이틀** 중간예납 추계액 신고로 세액이 줄어드나요, 대상 조건과 신고서 작성법

## 0. 관할 확정

| 항목 | 내용 |
|---|---|
| 1차 출처 | 법제처 — 소득세법 제65조(중간예납) · 법제처 — 소득세법 시행령 · 정책브리핑 보도자료 — 11월, 개인사업자는 중간예납 잊지 마세요 |
| 추출본 | scripts/output/source-estimated-return-reduction.txt (17859자, Playwright) |

## 0-B. 원문 캡처 확인 — 화면을 눈(vision)으로 읽은 기록

- estimated-return-reduction-1.png: 국가법령정보센터 소득세법(시행 2026.1.1, 법률 제21221호) 제65조(중간예납) 조문 화면 — 1항~9항, 세율은 '기본세율', 중간예납세액=중간예납기준액의 100분의 30, 신고기한 11월1일~11월30일, 하단에 '중간예납추계액=(중간예납기간 종료일까지 종합소득에 대한 감면세액·세액공제액·토지등매매차익 예정신고 산출세액·수시부과세액 및 원천징수세액)÷2×종합소득산출세액' 계산식 박스가 보임.
- estimated-return-reduction-2.png: 국가법령정보센터 소득세법 시행령(시행 2026.7.1, 대통령령 제36343호) 제125조(중간예납추계액의 신고와 조사결정) 조문 화면 — ①법 제65조제3항 또는 제5항에 따른 신고서 제출 의무, ②미신고 시 법 제80조 준용 조사결정 규정만 있고 표나 수치는 없음.
- estimated-return-reduction-4.png: 제목 '11월, 개인사업자는 중간예납 잊지 마세요'라는 블로그/뉴스형 페이지 캡처인데, 실제 이미지가 1400x12503px를 224x2000으로 축소 표시해 글자가 너무 작아 본문 문단·표의 구체적 수치·항목명은 읽을 수 없음(스크롤이 매우 긴 페이지, 하단에 초록색 배너·홈택스로 보이는 스크린샷 삽입만 형태로 식별됨).

## 1. 수치 표 (글에 들어간 숫자 — 핵심콕콕 기준)

| 항목 | 값 | 1차 출처 | 교차 출처 |
|---|---|---|---|
| 신고 요건(임의) | 중간예납추계액이 중간예납기준액의 100분의 30에 미달하는 경우 (소득세법 제65조③) | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95/%EC%A0%9C65%EC%A1%B0 | https://www.law.go.kr/lsLinkCommonInfo.do?lsJoLnkSeq=1032471989 |
| 신고 요건(의무) | 중간예납기준액이 없는 복식부기의무자가 중간예납기간 중 사업소득이 있는 경우 (제65조⑤) | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95/%EC%A0%9C65%EC%A1%B0 | https://www.law.go.kr/lsLinkCommonInfo.do?lsJoLnkSeq=1032471989 |
| 신고·납부 기한 | 11월 1일부터 11월 30일까지 (제65조③⑤⑥) | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95/%EC%A0%9C65%EC%A1%B0 | https://www.law.go.kr/lsLinkCommonInfo.do?lsJoLnkSeq=1032471989 |
| 신고 후 효과 | 제1항에 따른 중간예납세액의 결정은 없었던 것으로 봄 (제65조④) | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95/%EC%A0%9C65%EC%A1%B0 | https://www.law.go.kr/lsLinkCommonInfo.do?lsJoLnkSeq=1032471989 |
| 추계액 계산식 | 종합소득과세표준 = (중간예납기간의 종합소득금액×2) - 이월결손금 - 종합소득공제 (제65조⑧) | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95/%EC%A0%9C65%EC%A1%B0 | https://www.law.go.kr/lsLinkCommonInfo.do?lsJoLnkSeq=1032471989 |
| 복식부기의무자 기준(광업·도소매 등) | 직전연도 수입금액 3억 원 이상 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95/%EC%A0%9C65%EC%A1%B0 | https://www.law.go.kr/lsLinkCommonInfo.do?lsJoLnkSeq=1032471989 |
| 복식부기의무자 기준(음식·숙박 등) | 직전연도 수입금액 1억 5천만 원 이상 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95/%EC%A0%9C65%EC%A1%B0 | https://www.law.go.kr/lsLinkCommonInfo.do?lsJoLnkSeq=1032471989 |
| 복식부기의무자 기준(서비스·보건 등) | 직전연도 수입금액 7천 5백만 원 이상 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95/%EC%A0%9C65%EC%A1%B0 | https://www.law.go.kr/lsLinkCommonInfo.do?lsJoLnkSeq=1032471989 |
| 전문직(변호사·의사·세무사 등) | 수입금액 관계없이 복식부기의무자 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95/%EC%A0%9C65%EC%A1%B0 | https://www.law.go.kr/lsLinkCommonInfo.do?lsJoLnkSeq=1032471989 |
| 신고 안 하면 | 관할 세무서장이 종합소득금액을 조사 결정 (시행령 제125조②) | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95/%EC%A0%9C65%EC%A1%B0 | https://www.law.go.kr/lsLinkCommonInfo.do?lsJoLnkSeq=1032471989 |
| 신고서 제출 | 재정경제부령이 정하는 중간예납추계액신고서를 관할 세무서장에게 제출 (시행령 제125조①) | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95/%EC%A0%9C65%EC%A1%B0 | https://www.law.go.kr/lsLinkCommonInfo.do?lsJoLnkSeq=1032471989 |
| 지방소득세 | 중간예납 제도 없음, 개인지방소득세는 신고 안 함 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95/%EC%A0%9C65%EC%A1%B0 | https://www.law.go.kr/lsLinkCommonInfo.do?lsJoLnkSeq=1032471989 |

## 2. 행동 검증 (버튼이 실제로 되는가)

- /policy/income-tax-interim-payment/tax-calculation-half-rule/ — ✓ 열림 (내부 경로)
- /policy/income-tax-interim-payment — ✓ 열림 (내부 경로)
- /policy/income-tax-interim-payment/notice-timing-hometax-lookup/ — ✓ 열림 (내부 경로)

## 3. 단서 조항 (긍정문 뒤집는 '다만' — 본문에 반영한 것)

- 결손이어도 복식부기의무자(제65조⑤)는 신고 의무가 있고 안 하면 시행령 제125조②로 조사결정된다는 단서를 Q4에 반영
- 추계액이 50만 원 미만이면 신고만 하고 납부는 안 해도 된다는 단서를 Q1·Q4에 반영
- 임의신고자(③)는 결손이어도 신고 의무는 아니고 안 하면 고지액을 그대로 낸다는 단서를 Q4에 반영
- faqData[1].sourceUrl 오타(소득소득세법) 수정 및 cue 두 개의 끝 어절을 서로 다르게 수정

## 4. 확보하지 못한 것 (본문에 쓰지 않음)

- 국세청 보도자료의 ‘11.3.(월)부터’·‘152만 명’·‘12.1.(월)까지’·‘24년 귀속’ 등은 2025년(작년) 특정 수치라 올해 것처럼 쓰지 않음
- 제65조⑧ 3호 계산식은 추출본에서 항목만 보이고 내용이 잘려 있어 인용하지 않음
- 붙임2 납부기한 연장신청 경로는 이번 소제목(추계신고)과 무관해 쓰지 않음
- 정책브리핑 PDF(fileId=197512892) 링크는 열리지 않아 근거로 쓰지 않음
- 분납 사례(1천만 원 초과 시 분납) 수치는 이번 네 소제목과 무관해 쓰지 않음

_2026-09-20 scripts/article.mjs_
