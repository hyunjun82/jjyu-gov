# 팩트시트 — 기초연금 (apply-bokjiro-vs-community-center)

**타이틀** 신청 안 하면 못 받는 기초연금, 복지로 온라인과 주민센터 방문 비교

## 0. 관할 확정

| 항목 | 내용 |
|---|---|
| 1차 출처 | 국가법령정보센터 — 기초연금법 제10조(신청) · 정책브리핑 — 기초연금 온라인 신청 언제 어디서나, 더욱 간편하게 · 정책브리핑 카드뉴스 — '기초연금' 더 편하게, 놓치지 않도록 · 국가법령정보센터 — 기초연금법 시행규칙(신청서식·구비서류) |
| 추출본 | scripts/output/source-apply-bokjiro-vs-community-center.txt (57271자, Playwright) |

## 0-B. 원문 캡처 확인 — 화면을 눈(vision)으로 읽은 기록

- apply-bokjiro-vs-community-center-1.png: 국가법령정보센터 기초연금법(시행 2025.10.1, 법률 제21065호) 조문 화면, 제10조(기초연금 지급의 신청)~제11조(조사·질문 등)까지 보이며 신청권자로 특별자치시장·특별자치도지사·시장·군수·구청장이 명시되고 금융정보·신용정보·보험정보 제공 동의 조항이 나옴.
- apply-bokjiro-vs-community-center-2.png: 정책브리핑(korea.kr) 보건복지부 2026.07.09자 보도자료 '기초연금 온라인 신청 언제 어디서나, 더욱 간편하게' 전문, 그래프로 '25년 신청 887,431명 중 온라인 29,903명(3.4%)·지방청 826,171명(93.1%)·구비서류 31,357명(3.5%)' 수치와 하단 절차 개선표(1~5-2단계, 현행vs개편안, 4-1 금융정보 제공동의 항목 강조)가 보임.
- apply-bokjiro-vs-community-center-3.png: 정책브리핑 카드/한컷 뉴스 2026.05.27자 '기초연금 더 편하게, 놓치지 않도록' 카드뉴스, 수급희망 이력관리 신청자는 재신청 불요 개선 내용과 '기대효과: 약 6.7만 명 신청주의 개선 혜택, '26.3월 기준 신청안내자 총 약 6.7만 명 중 수급가능성 확인된 미신청자 3.8만 명(약 57%)', 시행일 2026.7월 표기.
- apply-bokjiro-vs-community-center-4.png: 국가법령정보센터 기초연금법 시행규칙(시행 2026.7.30, 보건복지부령 제1180호) 조문 화면, 제2조(소득평가액 산정방식)에서 국민기초생활보장급여·장애수당·장애인연금 등 제외 소득 14개 항목 목록과 제3조(재산가액의 산정) 시가표준액 산정 방법이 보임.

## 1. 수치 표 (글에 들어간 숫자 — 핵심콕콕 기준)

| 항목 | 값 | 1차 출처 | 교차 출처 |
|---|---|---|---|
| 신청권자 | 기초연금 수급희망자 또는 보건복지부령으로 정하는 대리인 (기초연금법 제10조제1항) | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95/(20251001,21065,20251001)/%EC%A0%9C10%EC%A1%B0 | https://www.korea.kr/briefing/pressReleaseView.do?newsId=156770183 |
| 신청 접수처 | 특별자치시장·특별자치도지사·시장·군수·구청장 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95/(20251001,21065,20251001)/%EC%A0%9C10%EC%A1%B0 | https://www.korea.kr/briefing/pressReleaseView.do?newsId=156770183 |
| 2025년 신청 경로 | 887,431명 중 온라인 29,903명(3.4%) · 지방정부 826,171명(93.1%) · 연금공단 31,357명(3.5%) | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95/(20251001,21065,20251001)/%EC%A0%9C10%EC%A1%B0 | https://www.korea.kr/briefing/pressReleaseView.do?newsId=156770183 |
| 온라인 임시저장 사유 | 총 2,467건 중 정보제공동의 917건(37.2%) · 구비서류작성 937건(38%) | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95/(20251001,21065,20251001)/%EC%A0%9C10%EC%A1%B0 | https://www.korea.kr/briefing/pressReleaseView.do?newsId=156770183 |
| 10월 개편 | 배우자 금융정보 동의에 모바일 메시지(SMS) 동의 신설 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95/(20251001,21065,20251001)/%EC%A0%9C10%EC%A1%B0 | https://www.korea.kr/briefing/pressReleaseView.do?newsId=156770183 |
| 서류 제출 개선 | 추가서류 사전 제출에서 즉시 첨부 또는 추후 제출(방문·온라인)로 개선 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95/(20251001,21065,20251001)/%EC%A0%9C10%EC%A1%B0 | https://www.korea.kr/briefing/pressReleaseView.do?newsId=156770183 |
| 수급희망 이력관리 유효기간 | 신청서 제출일부터 5년 (시행규칙 제7조의2) | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95/(20251001,21065,20251001)/%EC%A0%9C10%EC%A1%B0 | https://www.korea.kr/briefing/pressReleaseView.do?newsId=156770183 |
| 수급희망 이력관리 개선 | 수급가능성 확인되면 별도 신청없이 신청한 것으로 간주 (2026년 7월분부터) | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95/(20251001,21065,20251001)/%EC%A0%9C10%EC%A1%B0 | https://www.korea.kr/briefing/pressReleaseView.do?newsId=156770183 |
| 개선 대상 규모 | 신청안내자 약 6.7만 명 중 수급가능성 확인된 미신청자 3.8만 명(약 57%) | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95/(20251001,21065,20251001)/%EC%A0%9C10%EC%A1%B0 | https://www.korea.kr/briefing/pressReleaseView.do?newsId=156770183 |
| 대리 신청 가능자 | 「민법」 제777조에 따른 친족, 사회복지전담공무원 등 관계 공무원 (시행규칙 제6조) | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95/(20251001,21065,20251001)/%EC%A0%9C10%EC%A1%B0 | https://www.korea.kr/briefing/pressReleaseView.do?newsId=156770183 |
| 방문 시 신분증명서류 | 주민등록증·자동차운전면허증·장애인등록증·여권 중 하나(사본 포함) | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95/(20251001,21065,20251001)/%EC%A0%9C10%EC%A1%B0 | https://www.korea.kr/briefing/pressReleaseView.do?newsId=156770183 |
| 지급결정 처리기간 | 접수일부터 30일 이내, 특별한 사유 있으면 60일 이내 (시행규칙 제8조제1항) | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95/(20251001,21065,20251001)/%EC%A0%9C10%EC%A1%B0 | https://www.korea.kr/briefing/pressReleaseView.do?newsId=156770183 |

## 2. 행동 검증 (버튼이 실제로 되는가)

- https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveTWAT52011M.do?wlfareInfoId=WLF00000060 — ✓ 열림 (복지서비스>서비스 찾기>복지서비스 상세(중앙) | 복지로)
- /policy/basic-pension/required-documents/ — ✓ 열림 (내부 경로)

## 3. 단서 조항 (긍정문 뒤집는 '다만' — 본문에 반영한 것)

- 대리 신청은 「민법」 제777조에 따른 친족, 사회복지전담공무원 등 관계 공무원으로 제한됨 — 시행규칙 제6조를 그대로 카드에 인용
- 수급희망 이력관리도 신청서를 최초 한 번은 제출해야 적용되고 유효기간은 5년(시행규칙 제7조의2) — Q1 카드에 반영
- 지급결정 처리기간은 소득·재산 조사에 시일이 걸리면 30일에서 60일로 늘어날 수 있음(시행규칙 제8조제1항) — Q4 카드에 반영
- heroAct 필드명이 href로 잘못되어 있어 화면 렌더가 전부(h1·상단버튼·핵심콕콕) 실패했던 것을 url로 수정함 — 나머지 필드는 그대로 둠

## 4. 확보하지 못한 것 (본문에 쓰지 않음)

- spec.faq의 '기초연금 신청은 생일 몇 개월 전부터 가능한가요?'는 이번 추출본(법 제10조·시행규칙·보도자료 2건)에 해당 기간 규정이 없어 쓰지 않고, 검증 가능한 다른 질문(수급희망 이력관리 유효기간)으로 대체함
- 온라인·방문 각각의 실제 평균 처리일수를 비교한 공식 수치는 추출본에 없어, 두 방식에 동일하게 적용되는 시행규칙 제8조의 30일·60일 기준까지만 씀
- 2026년 3월 기준 '6.7만 명·3.8만 명(약 57%)' 수치는 수급희망 이력관리 신청자에 한정된 값이라 전체 미신청자 규모로 확대 해석하지 않음

_2026-09-19 scripts/article.mjs_
