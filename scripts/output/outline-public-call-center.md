# 구성표 — 공공기관 고객센터 (public-call-center)

**타이틀** 공공기관 고객센터 전화번호 조회, 상담직원 6시 넘으면 왜 안 나올까?

## 왜 이 허브가 따로 있나
회사 허브(보험·카드·대출)는 "번호가 갈린다" 가 걸리는 지점이다.
기관은 다르다 — 번호는 하나인데 **시간이 지나면 창구가 닫히고 남는 게 기관마다 다르다.**

  국민연금공단 1355     평일 09~18시 · 그 밖에는 ARS 셀프서비스 (증명서 발급은 제외)
  근로복지공단 1588-0075 평일 09~18시 · 토·일요일과 공휴일 아예 휴무
  고용노동부 1350       평일 09:00~18:00 · 그 뒤는 당직실 052-701-5300 (고용·노동상담 제한)
  국세청 126            평일 9시~18시 · 탈세제보만 24시간

## 화면
허브는 components/CallCenterHub.tsx 가 그린다 — 데이터 파일의 qa 는 화면에 안 나온다.
(핵심콕콕 구성표 자리가 아니다 — 2026-09-01 사장님 지적)

## 버튼 목적지 (browser_navigate 로 직접 열어 확인)
https://www.nps.or.kr/main.do
  → 열림. "국민연금 고객센터: 국번없이 1355(유료, 평일 09시~18시)" 가 이 페이지에 있다.

빼기로 한 것
https://www.nps.or.kr/  (루트) → gate.do 로 튕긴다. 게이트 페이지라 본문이 없다.
https://www.moel.go.kr/minwon/counsel/counselInfo.do → 404. 고용노동부 상담 안내는 1350.moel.go.kr 쪽이다.

## 쓰지 않는 것
- 지사·세무서 개별 번호 (수백 개라 이 페이지가 다룰 수 없다)
- 평균 대기시간 (공식 발표 없음)
- 확인 못 한 기관의 번호

## 1차 출처
https://www.nps.or.kr/main.do  ·  https://www.nps.or.kr/comm/footer/getOHAH0001M0.do
https://www.comwel.or.kr/comwel/cust/cybr/info.jsp
https://1350.moel.go.kr/home/hp/ch/callchat.do
https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?mi=6694&cntntsId=8104
