# 구성표 — hwadam-forest (허브 / 메인 글)

- 키워드: 화담숲
- 타이틀: 화담숲 예약부터 입장료 모노레일 요금까지, 예약 시간 지나면 입장 못 하나
- 캡처: reference/titles/생활타이틀.png — "유학생, 영주권자, 비거주자 해외송금 한도 및 필요 서류 총정리"
- 패턴: ③ 절차 처음~끝 묶음형(docs/title-corpus-kb.md) + ⑥ 함정 경고형 종결
- 추출본: scripts/output/source-hwadam-forest.txt · scripts/output/source-hwadam-faq-all.txt
- 역할: 9편 스포크가 모이는 허브. 스포크 버튼은 전부 이 허브로 오고, 이 허브 버튼만 실제 예약 페이지로 나간다.

## hero

서론: 성수기 기간(10/23~11/15)과 예매 오픈(9/16 13시)을 먼저 박고,
예약 시간 외에는 입장이 안 된다는 점 → 그래서 예매 화면부터 봐야 한다로 연결.

- 상단 버튼 1개 (승부처) — "화담숲 예매하기" — https://www.hwadamsup.com/pc/ko/reservation/resMain

## 소제목 · 버튼

| 위치 | 소제목 | 버튼 |
|---|---|---|
| qa 1 | 화담숲 예약은 어디서 어떻게 하나요? | hero 버튼이 받음 (act 없음) |
| qa 2 | 화담숲 입장료는 얼마이고 모노레일은 포함인가요? | — |
| qa 3 | 가을 성수기에는 무엇이 달라지나요? | **슬롯** — https://www.hwadamsup.com/pc/ko/board/notice-detail?id=2159 |
| qa 4 | 예약한 시간에 못 가면 환불이 되나요? | — |
| qa 5 | 모노레일은 꼭 타야 하나요? | **슬롯** — https://www.hwadamsup.com/pc/ko/guide/monorail |
| qa 6 | 서울에서 화담숲까지 어떻게 가나요? | **슬롯(마지막)** — https://www.hwadamsup.com/pc/ko/board/notice-detail?id=2126 |

## 버튼 목적지 확인 (Playwright 직접 열어봄, 2026-09-18)

- https://www.hwadamsup.com/pc/ko/reservation/resMain — 로그인 없이 열린다. 상품 안내·예매 6단계·
  취소 수수료가 다 있고 여기서 NOL로 넘어간다. 세션 토큰 없는 고정 URL.
- https://www.hwadamsup.com/pc/ko/board/notice-detail?id=2159 — 가을 성수기 예매 오픈 안내(본문 이미지)
- https://www.hwadamsup.com/pc/ko/guide/monorail — 모노레일 구간·요금·실시간 잔여 시간표
- https://www.hwadamsup.com/pc/ko/board/notice-detail?id=2126 — 순환버스 시간표

## 묶는 스포크 9편 (사장님 확정 타이틀·소제목 그대로)

1. hwadam-reservation-open       화담숲 예약 오픈 시간과 티켓팅 방법, 매진돼도 취소표 잡는 법
2. hwadam-reservation-change     못 가게 된 화담숲 예약 시간 변경과 부분취소, 기간 지나면 양도도 되나요
3. hwadam-entry-time-late        예약 시간에 늦은 화담숲 입장, 조기 입장과 현장 발권은 되나요
4. hwadam-admission-fee          화담숲 입장료에 모노레일이 포함인지, 광주시민 할인과 초대권 적용
5. hwadam-monorail-course        화담숲 모노레일 꼭 타야 하나요, 예약 방법과 코스 구간 운행 시간
6. hwadam-autumn-foliage-peak    화담숲 단풍 절정 놓치지 않는 시기, 11월 축제 기간과 봄 벚꽃 개화
7. hwadam-course-time            화담숲 한 바퀴 도는 시간과 추천 코스, 유모차 휠체어와 반려견 동반
8. hwadam-transport-shuttle      서울에서 화담숲 가는 법, 대중교통과 곤지암역 셔틀버스 주차장 팁
9. hwadam-food-lodging           화담숲 도시락 반입과 내부 식당, 번지없는 주막과 근처 맛집 숙소
