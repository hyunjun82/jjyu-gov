# 리라이트 — 실업급여 스포크 11편 (2026-10-15, 노출 없는 옛 글). 60일 노출 0. 옛 글(5~8월 작성)은 서론 없음·카드 7~12개. 자동완성 수요가 확인된 글만(상한액·하한액·계산기·신청방법·신청기간·구직활동·입금일·권고사직·계약만료·자발적퇴사·이직확인서·일용직). 2027 상한액 검색이 시작돼 연말에도 쓰는 주제
# 타이틀·소제목: 사장님이 10-15 "노출 없는 글부터"라고 지시해 짠 안. 네이버 자동완성에 실제로 있는 말만 소제목으로 쓰고, 타이틀 끝말은 마지막 소제목의 명사로 맺는다. 주소(slug)는 그대로
# 업그레이드 원칙: ①서론 200자 안에서 검색한 질문의 답을 먼저 말하고 바로 할 일로 넘긴다 ②소제목 카드는 4개, 카드마다 소제목 → (행동이 있으면 버튼) → 표 → 설명 ③숫자·비교·단계가 있는 카드는 표(3열 이하)로, 4개 중 최소 3개에 표 ④어려운 용어는 처음 한 번 풀어 쓰고 문장은 짧게, 한 문장에 숫자 둘 이하 ⑤옛 글의 사실 중 원문으로 확인되지 않는 것은 쓰지 않는다
# 원문: 고용24 실업급여(구직급여) 제도안내(systId=SI00000387)·고용보험 누리집(ei.go.kr)·고용노동부(moel.go.kr). 2026-10-15 Playwright 로 직접 연다
# 주의(쓰지 않는 것): 후기·블로그, 개별 사례 단정(받는다/못 받는다), 원문에 없는 금액·날짜·횟수, 고객센터 운영시간 같은 바뀌는 값, 다음 연도(2027) 상·하한액(고시 전이면 원문에 없다)
# 주의(상한하한액 편): 고용24 제도안내 페이지의 하한액 61,568원은 '23년 값이라 지금 값이 아니다 — 절대 쓰지 않는다. 2026년 상한액은 고용노동부 보도자료(국무회의 의결)의 값(66,000원에서 68,100원으로 인상)만 쓰고, 하한액은 법정 계산식(최저임금의 80% × 1일 소정근로시간)을 원문 근거 그대로 설명하되 계산한 2026 금액을 원문에서 찾지 못하면 notUsed 로 두고 쓰지 않는다. 연도 이름표를 항상 붙인다
# 주의(구분): ①상·하한액·소정급여일수·수급기간은 원문 표기 그대로(연도·이름표 포함) ②이직 사유별 수급 가능 여부는 원문에 적힌 기준과 예시 그대로, 개별 단정 금지 ③한정 표현(다만·경우에만·예외)을 빠뜨리지 않는다
# 주의(행동): 독자가 지금 할 일 = 고용24 실업급여 안내에서 내 경우를 바로 알아보거나 신청·조회하는 것. 상단 버튼 라벨은 '주제어 + 알아보기/조회하기' 형태로 짧게, 끝말을 '확인하기'로만 쓰지 않는다. 서론의 행동 문장에 라벨 낱말을 그대로 쓴다
# 주의(서론=클릭 공식, 사장님 10-13): 서론은 버튼을 누르게 만드는 글이다. 첫 문장은 독자가 검색한 질문의 답, 숫자는 하나만, '다만 …에 따라 갈려서' 식 반전 한 번, 마지막은 '내 …'를 주어로 한 행동 한 문장(숙제형 '확인해 두세요' 금지). 상단 버튼 href 는 spec 의 button 주소로 보낸다. 계산기·도구는 만들지 않는다
# 타이틀중복허용: 실업급여·구직급여처럼 제도 이름이 겹쳐도 뜻이 같은 낱말은 허용
hub: job-seeker-benefit
dir: 실업급여
cat: 지원금
catSlug: fund
---
slug: 상한하한액
file: 상한하한액
export: 실업급여상한하한SpokeContent
title: 실업급여 상한액과 하한액은 얼마인가요? 한 달 기준부터 실수령액까지
sub: 실업급여 상한액
sub: 실업급여 하한액
sub: 실업급여 상한액 한달
sub: 실업급여 하한액 실수령액
source: https://www.moel.go.kr/news/enews/report/enewsView.do?news_seq=18736
source: https://www.work24.go.kr/cm/c/f/1100/selecSystInfo.do?systId=SI00000387
source: https://www.law.go.kr/법령/고용보험법
button: https://www.work24.go.kr/cm/c/f/1100/selecSystInfo.do?systId=SI00000387
cta: ☞ 고용24 실업급여 제도 알아보기
---
slug: 모의계산
file: 모의계산
export: 실업급여모의계산SpokeContent
title: 실업급여는 얼마나 받나요? 계산기부터 기간까지
sub: 실업급여 계산기
sub: 2026년 실업급여 계산기
sub: 실업급여 계산기 기간
sub: 실업급여 계산법
source: https://www.work24.go.kr/cm/c/f/1100/selecSystInfo.do?systId=SI00000387
source: https://www.ei.go.kr
source: https://www.moel.go.kr
button: https://www.work24.go.kr/cm/c/f/1100/selecSystInfo.do?systId=SI00000387
cta: ☞ 고용24 실업급여 계산 알아보기
---
slug: 신청방법
file: 신청방법
export: 실업급여신청방법SpokeContent
title: 실업급여 신청방법은 어떻게 되나요? 준비물부터 절차, 서류까지
sub: 실업급여 신청방법
sub: 실업급여 신청 준비물
sub: 실업급여 신청절차
sub: 실업급여 신청서류
source: https://www.work24.go.kr/cm/c/f/1100/selecSystInfo.do?systId=SI00000387
source: https://www.ei.go.kr
source: https://www.moel.go.kr
button: https://www.work24.go.kr/cm/c/f/1100/selecSystInfo.do?systId=SI00000387
cta: ☞ 고용24 실업급여 신청 알아보기
---
slug: 신청기간
file: 신청기간
export: 실업급여신청기간SpokeContent
title: 퇴사 후 실업급여 신청기간은 언제까지인가요? 기한부터 놓쳤을 때까지
sub: 퇴사후 실업급여 신청기간
sub: 실업급여 신청기간 놓치면
sub: 실업급여 신청기간 해외
sub: 실업급여 신청기간 14일
source: https://www.work24.go.kr/cm/c/f/1100/selecSystInfo.do?systId=SI00000387
source: https://www.ei.go.kr
source: https://www.moel.go.kr
button: https://www.work24.go.kr/cm/c/f/1100/selecSystInfo.do?systId=SI00000387
cta: ☞ 고용24 실업급여 신청기간 알아보기
---
slug: 구직활동
file: 구직활동
export: 실업급여구직활동SpokeContent
title: 실업급여 구직활동은 어떻게 인정받나요? 방법부터 제출까지
sub: 실업급여 구직활동 인정
sub: 실업급여 구직활동 방법
sub: 실업급여 구직활동 제출 방법
sub: 실업급여 구직활동 4차
source: https://www.work24.go.kr/cm/c/f/1100/selecSystInfo.do?systId=SI00000387
source: https://www.ei.go.kr
source: https://www.moel.go.kr
button: https://www.work24.go.kr/cm/c/f/1100/selecSystInfo.do?systId=SI00000387
cta: ☞ 고용24 실업인정 알아보기
---
slug: 입금일
file: 입금일
export: 실업급여입금일SpokeContent
title: 실업급여는 언제 들어오나요? 1차 입금일부터 공휴일까지
sub: 실업급여 입금일
sub: 실업급여 입금일 1차
sub: 실업급여 입금일 2차
sub: 실업급여 입금일 공휴일
source: https://www.work24.go.kr/cm/c/f/1100/selecSystInfo.do?systId=SI00000387
source: https://www.ei.go.kr
source: https://www.moel.go.kr
button: https://www.work24.go.kr/cm/c/f/1100/selecSystInfo.do?systId=SI00000387
cta: ☞ 고용24 실업인정일 조회하기
---
slug: 권고사직
file: 권고사직
export: 실업급여권고사직SpokeContent
title: 권고사직도 실업급여 받을 수 있나요? 조건부터 서류까지
sub: 실업급여 권고사직 조건
sub: 실업급여 권고사직 코드
sub: 실업급여 권고사직 사유
sub: 실업급여 권고사직 서류
source: https://www.work24.go.kr/cm/c/f/1100/selecSystInfo.do?systId=SI00000387
source: https://www.ei.go.kr
source: https://www.moel.go.kr
button: https://www.work24.go.kr/cm/c/f/1100/selecSystInfo.do?systId=SI00000387
cta: ☞ 고용24 실업급여 수급자격 알아보기
---
slug: 계약만료
file: 계약만료
export: 실업급여계약만료SpokeContent
title: 계약만료도 실업급여 받을 수 있나요? 코드부터 서류까지
sub: 실업급여 계약만료
sub: 실업급여 계약만료 코드
sub: 실업급여 계약만료 서류
sub: 실업급여 계약만료 자진퇴사
source: https://www.work24.go.kr/cm/c/f/1100/selecSystInfo.do?systId=SI00000387
source: https://www.ei.go.kr
source: https://www.moel.go.kr
button: https://www.work24.go.kr/cm/c/f/1100/selecSystInfo.do?systId=SI00000387
cta: ☞ 고용24 실업급여 수급자격 알아보기
---
slug: 자발적퇴사
file: 자발적퇴사
export: 자발적퇴사SpokeContent
title: 자발적으로 퇴사해도 실업급여 받을 수 있나요? 기준부터 받는 법까지
sub: 실업급여 자발적퇴사
sub: 실업급여 자발적퇴사 받는법
sub: 실업급여 자발적퇴사 기준
sub: 실업급여 자발적퇴사 청년
source: https://www.work24.go.kr/cm/c/f/1100/selecSystInfo.do?systId=SI00000387
source: https://www.ei.go.kr
source: https://www.moel.go.kr
button: https://www.work24.go.kr/cm/c/f/1100/selecSystInfo.do?systId=SI00000387
cta: ☞ 고용24 실업급여 수급자격 알아보기
---
slug: 이직확인서
file: 이직확인서
export: 실업급여이직확인서SpokeContent
title: 실업급여 이직확인서는 어떻게 받나요? 요청부터 코드까지
sub: 실업급여 이직확인서
sub: 실업급여 이직확인서 처리중
sub: 실업급여 이직확인서 요청
sub: 실업급여 이직확인서 코드
source: https://www.work24.go.kr/cm/c/f/1100/selecSystInfo.do?systId=SI00000387
source: https://www.ei.go.kr
source: https://www.moel.go.kr
button: https://www.work24.go.kr/cm/c/f/1100/selecSystInfo.do?systId=SI00000387
cta: ☞ 고용24 이직확인서 알아보기
---
slug: 일용직
file: 일용직
export: 실업급여일용직SpokeContent
title: 일용직도 실업급여 받을 수 있나요? 조건부터 금액까지
sub: 실업급여 일용직
sub: 실업급여 일용직 조건
sub: 실업급여 일용직 90일
sub: 실업급여 일용직 금액
source: https://www.work24.go.kr/cm/c/f/1100/selecSystInfo.do?systId=SI00000387
source: https://www.ei.go.kr
source: https://www.moel.go.kr
button: https://www.work24.go.kr/cm/c/f/1100/selecSystInfo.do?systId=SI00000387
cta: ☞ 고용24 실업급여 수급자격 알아보기
