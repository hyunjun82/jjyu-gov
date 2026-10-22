# 리라이트 — 에너지바우처 스포크 6편 (2026-10-15, 노출 없는 옛 글). 60일 노출 0. 옛 글(7·8월 작성)은 서론 없음·카드 7~10개. 시즌: 동절기 신청·사용(겨울에도 받는 제도)이라 냉방지원금·하절기 글은 이번에 뺀다
# 타이틀·소제목: 사장님이 10-15 "노출 없는 글부터, 시즌 지난 건 말고"라고 지시해 짠 안. 네이버 자동완성에 실제로 있는 말(에너지바우처 자동신청·대상·대상 조회·기초수급자·신청기간·동절기 기간·금액·지원금액·잔액조회 방법·안됨·환급·전기요금 차감·사용방법·신청방법 고객번호·복지로 온라인 신청·동절기 사용기간)로 소제목을 잡고, 6편끼리 소제목이 겹치지 않게 했다. 주소(slug)는 그대로
# 업그레이드 원칙: ①서론 200자 안에서 검색한 질문의 답을 먼저 말하고 바로 할 일로 넘긴다 ②소제목 카드는 4개, 카드마다 소제목 → (행동이 있으면 버튼) → 표 → 설명 ③숫자·비교·단계가 있는 카드는 표(3열 이하)로, 4개 중 최소 3개에 표 ④어려운 용어는 처음 한 번 풀어 쓰고 문장은 짧게, 한 문장에 숫자 둘 이하 ⑤옛 글의 사실 중 원문으로 확인되지 않는 것은 쓰지 않는다
# 원문: 한국에너지공단 에너지바우처 신청안내(apl_info)·사용안내(use_info)·지원내용(support_info)·복지로. 2026-10-15 Playwright 로 직접 연다
# 주의(쓰지 않는 것): 하절기·냉방 전용 금액·기간(이번 묶음은 동절기 중심), 지자체별 추가 사업(부산·동백전 등 원문에 없는 것), 후기·블로그, 원문에 없는 금액·날짜, 콜센터 운영시간 같은 바뀌는 값
# 주의(구분): ①대상 가구 요건(생계·의료·주거·교육급여 수급자 + 노인·영유아·장애인·임산부 등 세대원 조건)은 원문 표기 그대로 ②자동신청 되는 경우와 직접 신청해야 하는 경우의 구분은 원문 문구 그대로 ③지원 금액은 가구원수별 표 값 그대로(세대원 수·동절기/하절기 이름표 포함) ④신청 기간·사용 기간 날짜는 원문에 적힌 연도 그대로 ⑤한정 표현(다만·경우에만·예외)을 빠뜨리지 않는다
# 주의(행동): 독자가 지금 할 일 = 내가 대상인지 에너지바우처 안내에서 바로 가려 보고 신청·사용·조회하는 것. 상단 버튼 라벨은 '주제어 + 신청하기/조회하기/알아보기' 형태로 짧게, 끝말을 '확인하기'로만 쓰지 않는다. 서론의 행동 문장에 라벨 낱말을 그대로 쓴다
# 주의(서론=클릭 공식, 사장님 10-13): 서론은 버튼을 누르게 만드는 글이다. 첫 문장은 독자가 검색한 질문의 답, 숫자는 하나만, '다만 …에 따라 갈려서' 식 반전 한 번, 마지막은 '내 …'를 주어로 한 행동 한 문장(숙제형 '확인해 두세요' 금지). 상단 버튼 href 는 spec 의 button 주소로 보낸다. 계산기·도구는 만들지 않는다
hub: energy-voucher
dir: 에너지바우처
cat: 복지
catSlug: welfare
---
slug: 자동신청
file: 자동신청
export: 에너지바우처자동신청SpokeContent
title: 기초수급자는 에너지바우처가 자동으로 나올까, 대상 조회 방법
sub: 에너지바우처 자동신청
sub: 에너지바우처 기초수급자
sub: 에너지바우처 대상 조회
sub: 에너지바우처 대상자
source: https://www.energyv.or.kr/info/apl_info.do
source: https://www.energyv.or.kr/info/support_info.do
source: https://www.energyv.or.kr/info/use_info.do
button: https://www.energyv.or.kr/info/apl_info.do
cta: ☞ 에너지바우처 신청 안내 알아보기
---
slug: 신청기간
file: 신청기간
export: 에너지바우처신청기간SpokeContent
title: 에너지바우처 동절기 신청은 언제까지, 지원금액도 함께 확인
sub: 에너지바우처 신청기간
sub: 에너지바우처 동절기 기간
sub: 에너지바우처 동절기 금액
sub: 에너지바우처 지원금액
source: https://www.energyv.or.kr/info/apl_info.do
source: https://www.energyv.or.kr/info/support_info.do
source: https://www.energyv.or.kr/info/use_info.do
button: https://www.energyv.or.kr/info/apl_info.do
cta: ☞ 에너지바우처 신청기간 알아보기
---
slug: 잔액조회
file: 잔액조회
export: 에너지바우처잔액SpokeContent
title: 에너지바우처 잔액 조회, 안 될 때 확인할 곳과 환급
sub: 에너지바우처 잔액조회
sub: 에너지바우처 잔액조회 방법
sub: 에너지바우처 잔액조회 안됨
sub: 에너지바우처 환급
source: https://www.energyv.or.kr/info/use_info.do
source: https://www.energyv.or.kr/info/support_info.do
source: https://www.energyv.or.kr
button: https://www.energyv.or.kr/info/use_info.do
cta: ☞ 에너지바우처 잔액 조회하기
---
slug: 전기요금할인
file: 전기요금할인
export: 에너지바우처전기할인SpokeContent
title: 에너지바우처와 전기요금 복지할인, 중복해서 받으면 차감될까
sub: 에너지바우처 전기요금 차감
sub: 에너지바우처 복지할인
sub: 전기요금 복지할인 중복
sub: 에너지바우처 전기요금 내는법
source: https://www.energyv.or.kr/info/support_info.do
source: https://www.energyv.or.kr/info/use_info.do
source: https://cyber.kepco.co.kr
button: https://www.energyv.or.kr/info/use_info.do
cta: ☞ 에너지바우처 사용 안내 알아보기
---
slug: 신청방법
file: 신청방법
export: 에너지바우처신청방법SpokeContent
title: 에너지바우처 신청 방법, 복지로 온라인으로 접수하고 고객번호 챙기기
sub: 에너지바우처 신청방법
sub: 에너지바우처 복지로
sub: 에너지바우처 복지로 온라인 신청
sub: 에너지바우처 신청방법 고객번호
source: https://www.energyv.or.kr/info/apl_info.do
source: https://www.bokjiro.go.kr/ssis-tbu/
source: https://www.energyv.or.kr/info/support_info.do
button: https://www.energyv.or.kr/info/apl_info.do
cta: ☞ 에너지바우처 신청하기
---
slug: winter-application-usage-guide
file: 동절기신청사용법
export: 에너지바우처동절기신청사용법SpokeContent
title: 에너지바우처 동절기에 어디서 쓸 수 있나, 사용기간과 결제 방법
sub: 에너지바우처 동절기 사용기간
sub: 에너지바우처 사용처
sub: 에너지바우처 전기요금 사용방법
sub: 에너지바우처 동절기 신청
source: https://www.energyv.or.kr/info/use_info.do
source: https://www.energyv.or.kr/info/apl_info.do
source: https://www.energyv.or.kr/info/support_info.do
button: https://www.energyv.or.kr/info/use_info.do
cta: ☞ 에너지바우처 사용 안내 알아보기
