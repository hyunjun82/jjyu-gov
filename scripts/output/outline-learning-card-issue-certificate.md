# 구성표 — learning-card-issue-certificate

- 타이틀: 내일배움카드 발급확인서 발급과 출력 방법, 신청 내역 조회와 제출처
- 확정: 사장님이 14~26편 세트로 직접 확정 (2026-09-18, 세트 25번). 타이틀·소제목 4개 원문 그대로.
- 허브: /policy/learning-card

## 소제목 (사장님 확정, 변경 금지)

1. 내일배움카드 발급확인서는 어디서 뽑나요?
2. 출력은 어떤 방식으로 하나요?
3. 지난 신청 내역은 어디서 조회하나요?
4. 발급확인서는 어디에 제출하나요?

## 4번 소제목 처리 방침

고용24가 공식으로 밝힌 제출처는 카드영업점(은행) 한 곳이다 (FAQ 115).
훈련기관·회사 제출은 안내에 없으므로 만들어 쓰지 않고, 확인된 곳만 적는다.

## 근거

- 고용24 FAQ 346 (2025-04-25) — 로그인 → 전체메뉴 → 마이페이지 → 내 전자지갑
  → 고용24 전자지갑 → 국민내일배움카드 확인서 발급신청
- 고용24 FAQ 115 (2023-09-25) — 마이페이지 > 훈련관리 > 국민내일배움카드 > [발급확인서],
  카드영업점(은행) 방문 재발급 시 출력 지참, 출력이 어려우면 스마트폰 앱 화면 제시로 대체,
  카드영업점 검색은 기관찾기 [훈련지원기관] 탭, 재발급 카드는 수령 다음 날부터 사용
- 딥링크 실측 — selectCardRequestList.do 는 비로그인 시 openLginPage.do?forwardUrl= 로 넘어간다
- 운영규정 제7조제1항 — 접수일부터 7일 이내 계좌발급 여부 통지
- 운영규정 제11조 — 계좌의 발급(카드 발급) 관련
- 추출본: source-learning-card-certificate-faq.txt · source-learning-card-operating-rule.txt

## 버튼 (3개 — 상단 1 + qa 2)

- 상단(heroAct) — 발급확인서 화면 열기 — https://www.work24.go.kr/cm/z/b/0210/openLginPage.do?forwardUrl=/hr/h/a/4110/selectCardRequestList.do
- qa3(신청 내역) — 직업훈련 이력 조회하기 — https://www.work24.go.kr/cm/z/b/0210/openLginPage.do?loginGbn=EBM01&loginMessage=3&forwardUrl=/hr/h/a/1300/selectOccpTrngHistPost.do
- qa4(제출처) — 카드영업점 찾기 — https://www.work24.go.kr/cm/c/d/0190/retrieveInstSrchLst.do?tabNo=3
