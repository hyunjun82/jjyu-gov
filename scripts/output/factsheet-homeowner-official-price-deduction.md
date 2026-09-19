# 팩트시트 — 기초연금 (homeowner-official-price-deduction)

**타이틀** 집 있어도 기초연금 되나요, 공시지가 확인과 대도시 농어촌 공제 차이

## 0. 관할 확정

| 항목 | 내용 |
|---|---|
| 1차 출처 | 국가법령정보센터 — 기초연금법 시행령 · 국가법령정보센터 — 기초연금 지급대상자 선정기준액·소득인정액 산정 세부기준 고시 · 국가법령정보센터 — 기초연금법 시행규칙 제3조 |
| 추출본 | scripts/output/source-homeowner-official-price-deduction.txt (36885자, Playwright) |

## 0-B. 원문 캡처 확인 — 화면을 눈(vision)으로 읽은 기록

- homeowner-official-price-deduction-1.png: 국가법령정보센터, 기초연금법 시행령[시행 2026.7.30.][대통령령 제36371호] 제2조(소득의 범위) 화면 — 제2항: 본인 및 배우자가 1촌 이내 직계비속 소유 주택(주택가격이 보건복지부장관이 정하여 고시하는 금액 이상인 경우에 한정)에 거주하면 그 금액을 소득으로 산정한다는 조문이 보인다.
- homeowner-official-price-deduction-2.png: 국가법령정보센터, 기초연금 지급대상자 선정기준액·기준연금액 및 소득인정액 산정 세부기준 고시[시행 2026.7.30.][보건복지부고시 제2026-156호] — 제2조: 2026년 선정기준액 단독가구 월 소득인정액 2,470,000원·부부가구 3,952,000원, 제3조: 2026년 기준연금액 34만9천7백원, 제4조(무료임차소득 부과 기준 주택): 1촌 이내 직계비속 소유 주택 기준은 시가표준액 6억원 이상.
- homeowner-official-price-deduction-3.png: 국가법령정보센터, 기초연금법 시행규칙[시행 2026.7.30.][보건복지부령 제1180호] 제2조 제2항 — 소득에 포함되는 금액은 본인 및 배우자가 거주하는 1촌 이내 직계비속 소유 주택의 시가표준액에 10000분의 78을 곱한 후 12로 나눈 금액으로 한다는 계산식 조문이 보인다.
- homeowner-official-price-deduction-4.png: 부동산공시가격알리미(realtyprice.kr) 메인화면, 팝업창 '2026년 7.1 기준 개별지공시지가 열람 및 의견제출 기간 2026.9.1~2026.9.22' 노출 중이며 본문의 주택공시가격(공동주택·표준주택)·토지공시지가(표준지·개별지) 열람 메뉴 카드만 보이고 실제 가격 수치나 검색 결과 화면은 없다.

## 1. 수치 표 (글에 들어간 숫자 — 핵심콕콕 기준)

| 항목 | 값 | 1차 출처 | 교차 출처 |
|---|---|---|---|
| 집값이 소득에 반영되는 방식 | 재산가액 합산액에서 기본재산액을 뺀 금액에 소득환산율 100분의 4를 곱해 12로 나눈 금액 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95%20%EC%8B%9C%ED%96%89%EB%A0%B9 | https://www.law.go.kr/%ED%96%89%EC%A0%95%EA%B7%9C%EC%B9%99/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EC%A7%80%EA%B8%89%EB%8C%80%EC%83%81%EC%9E%90%EC%84%A0%EC%A0%95%EA%B8%B0%EC%A4%80%EC%95%A1,%EA%B8%B0%EC%A4%80%EC%97%B0%EA%B8%88%EC%95%A1%EB%B0%8F%EC%86%8C%EB%93%9D%EC%9D%B8%EC%A0%95%EC%95%A1%EC%82%B0%EC%A0%95%EC%84%B8%EB%B6%80%EA%B8%B0%EC%A4%80%EC%97%90%EA%B4%80%ED%95%9C%EA%B3%A0%EC%8B%9C |
| 기본재산액 지역 구분(대도시) | 특별시, 광역시의 "구"(도ㆍ농 복합군 포함), 특례시 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95%20%EC%8B%9C%ED%96%89%EB%A0%B9 | https://www.law.go.kr/%ED%96%89%EC%A0%95%EA%B7%9C%EC%B9%99/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EC%A7%80%EA%B8%89%EB%8C%80%EC%83%81%EC%9E%90%EC%84%A0%EC%A0%95%EA%B8%B0%EC%A4%80%EC%95%A1,%EA%B8%B0%EC%A4%80%EC%97%B0%EA%B8%88%EC%95%A1%EB%B0%8F%EC%86%8C%EB%93%9D%EC%9D%B8%EC%A0%95%EC%95%A1%EC%82%B0%EC%A0%95%EC%84%B8%EB%B6%80%EA%B8%B0%EC%A4%80%EC%97%90%EA%B4%80%ED%95%9C%EA%B3%A0%EC%8B%9C |
| 기본재산액 지역 구분(중소도시) | 도의 "시"와 세종특별자치시 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95%20%EC%8B%9C%ED%96%89%EB%A0%B9 | https://www.law.go.kr/%ED%96%89%EC%A0%95%EA%B7%9C%EC%B9%99/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EC%A7%80%EA%B8%89%EB%8C%80%EC%83%81%EC%9E%90%EC%84%A0%EC%A0%95%EA%B8%B0%EC%A4%80%EC%95%A1,%EA%B8%B0%EC%A4%80%EC%97%B0%EA%B8%88%EC%95%A1%EB%B0%8F%EC%86%8C%EB%93%9D%EC%9D%B8%EC%A0%95%EC%95%A1%EC%82%B0%EC%A0%95%EC%84%B8%EB%B6%80%EA%B8%B0%EC%A4%80%EC%97%90%EA%B4%80%ED%95%9C%EA%B3%A0%EC%8B%9C |
| 기본재산액 지역 구분(농어촌) | 도의 "군" | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95%20%EC%8B%9C%ED%96%89%EB%A0%B9 | https://www.law.go.kr/%ED%96%89%EC%A0%95%EA%B7%9C%EC%B9%99/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EC%A7%80%EA%B8%89%EB%8C%80%EC%83%81%EC%9E%90%EC%84%A0%EC%A0%95%EA%B8%B0%EC%A4%80%EC%95%A1,%EA%B8%B0%EC%A4%80%EC%97%B0%EA%B8%88%EC%95%A1%EB%B0%8F%EC%86%8C%EB%93%9D%EC%9D%B8%EC%A0%95%EC%95%A1%EC%82%B0%EC%A0%95%EC%84%B8%EB%B6%80%EA%B8%B0%EC%A4%80%EC%97%90%EA%B4%80%ED%95%9C%EA%B3%A0%EC%8B%9C |
| 자녀 명의 주택에 거주할 때 기준 | 시가표준액 6억원 이상 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95%20%EC%8B%9C%ED%96%89%EB%A0%B9 | https://www.law.go.kr/%ED%96%89%EC%A0%95%EA%B7%9C%EC%B9%99/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EC%A7%80%EA%B8%89%EB%8C%80%EC%83%81%EC%9E%90%EC%84%A0%EC%A0%95%EA%B8%B0%EC%A4%80%EC%95%A1,%EA%B8%B0%EC%A4%80%EC%97%B0%EA%B8%88%EC%95%A1%EB%B0%8F%EC%86%8C%EB%93%9D%EC%9D%B8%EC%A0%95%EC%95%A1%EC%82%B0%EC%A0%95%EC%84%B8%EB%B6%80%EA%B8%B0%EC%A4%80%EC%97%90%EA%B4%80%ED%95%9C%EA%B3%A0%EC%8B%9C |
| 자녀 명의 주택 거주 시 소득 계산식 | 시가표준액에 10000분의 78을 곱한 후 12로 나눈 금액 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95%20%EC%8B%9C%ED%96%89%EB%A0%B9 | https://www.law.go.kr/%ED%96%89%EC%A0%95%EA%B7%9C%EC%B9%99/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EC%A7%80%EA%B8%89%EB%8C%80%EC%83%81%EC%9E%90%EC%84%A0%EC%A0%95%EA%B8%B0%EC%A4%80%EC%95%A1,%EA%B8%B0%EC%A4%80%EC%97%B0%EA%B8%88%EC%95%A1%EB%B0%8F%EC%86%8C%EB%93%9D%EC%9D%B8%EC%A0%95%EC%95%A1%EC%82%B0%EC%A0%95%EC%84%B8%EB%B6%80%EA%B8%B0%EC%A4%80%EC%97%90%EA%B4%80%ED%95%9C%EA%B3%A0%EC%8B%9C |
| 금융재산 중 재산산정 제외 한도 | 2,000만원까지 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95%20%EC%8B%9C%ED%96%89%EB%A0%B9 | https://www.law.go.kr/%ED%96%89%EC%A0%95%EA%B7%9C%EC%B9%99/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EC%A7%80%EA%B8%89%EB%8C%80%EC%83%81%EC%9E%90%EC%84%A0%EC%A0%95%EA%B8%B0%EC%A4%80%EC%95%A1,%EA%B8%B0%EC%A4%80%EC%97%B0%EA%B8%88%EC%95%A1%EB%B0%8F%EC%86%8C%EB%93%9D%EC%9D%B8%EC%A0%95%EC%95%A1%EC%82%B0%EC%A0%95%EC%84%B8%EB%B6%80%EA%B8%B0%EC%A4%80%EC%97%90%EA%B4%80%ED%95%9C%EA%B3%A0%EC%8B%9C |
| 2026년 선정기준액(단독가구) | 월 소득인정액 2,470,000원 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95%20%EC%8B%9C%ED%96%89%EB%A0%B9 | https://www.law.go.kr/%ED%96%89%EC%A0%95%EA%B7%9C%EC%B9%99/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EC%A7%80%EA%B8%89%EB%8C%80%EC%83%81%EC%9E%90%EC%84%A0%EC%A0%95%EA%B8%B0%EC%A4%80%EC%95%A1,%EA%B8%B0%EC%A4%80%EC%97%B0%EA%B8%88%EC%95%A1%EB%B0%8F%EC%86%8C%EB%93%9D%EC%9D%B8%EC%A0%95%EC%95%A1%EC%82%B0%EC%A0%95%EC%84%B8%EB%B6%80%EA%B8%B0%EC%A4%80%EC%97%90%EA%B4%80%ED%95%9C%EA%B3%A0%EC%8B%9C |
| 2026년 선정기준액(부부가구) | 월 소득인정액 3,952,000원 | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95%20%EC%8B%9C%ED%96%89%EB%A0%B9 | https://www.law.go.kr/%ED%96%89%EC%A0%95%EA%B7%9C%EC%B9%99/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EC%A7%80%EA%B8%89%EB%8C%80%EC%83%81%EC%9E%90%EC%84%A0%EC%A0%95%EA%B8%B0%EC%A4%80%EC%95%A1,%EA%B8%B0%EC%A4%80%EC%97%B0%EA%B8%88%EC%95%A1%EB%B0%8F%EC%86%8C%EB%93%9D%EC%9D%B8%EC%A0%95%EC%95%A1%EC%82%B0%EC%A0%95%EC%84%B8%EB%B6%80%EA%B8%B0%EC%A4%80%EC%97%90%EA%B4%80%ED%95%9C%EA%B3%A0%EC%8B%9C |
| 근거 | 국가법령정보센터 — 기초연금법 시행령ㆍ시행규칙ㆍ고시 (2026-09-19 확인) | https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95%20%EC%8B%9C%ED%96%89%EB%A0%B9 | https://www.law.go.kr/%ED%96%89%EC%A0%95%EA%B7%9C%EC%B9%99/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EC%A7%80%EA%B8%89%EB%8C%80%EC%83%81%EC%9E%90%EC%84%A0%EC%A0%95%EA%B8%B0%EC%A4%80%EC%95%A1,%EA%B8%B0%EC%A4%80%EC%97%B0%EA%B8%88%EC%95%A1%EB%B0%8F%EC%86%8C%EB%93%9D%EC%9D%B8%EC%A0%95%EC%95%A1%EC%82%B0%EC%A0%95%EC%84%B8%EB%B6%80%EA%B8%B0%EC%A4%80%EC%97%90%EA%B4%80%ED%95%9C%EA%B3%A0%EC%8B%9C |

## 2. 행동 검증 (버튼이 실제로 되는가)

- https://www.realtyprice.kr:447/notice/gsindex.htm — ✓ 열림 (부동산공시가격 알리미)
- /policy/basic-pension/income-recognition-calc/ — ✓ 열림 (내부 경로)
- /policy/basic-pension/selection-threshold-single-couple/ — ✓ 열림 (내부 경로)

## 3. 단서 조항 (긍정문 뒤집는 '다만' — 본문에 반영한 것)

- 재산의 소득환산액 계산에서 '뺀 후의 금액이 0보다 작은 경우에는 0으로 한다'는 단서를 q1과 box에 반영함
- 임대보증금은 공시가격의 100분의 50 범위내 비율만 부채로 공제된다는 단서를 FAQ1에 반영함
- 자동차는 차량가액 4천만원 이상인 경우만 재산에 반영된다는 단서를 q4에 반영함

## 4. 확보하지 못한 것 (본문에 쓰지 않음)

- 고시 제8조가 정한 지역별 기본재산한도액의 실제 금액(대도시ㆍ중소도시ㆍ농어촌별 원 단위) — 조문 캡처에는 적용지역 구분 문구만 있고 금액이 담긴 표 부분이 캡처되지 않아 쓰지 않음. q3는 구분 기준까지만 서술함
- 부동산공시가격알리미에서 실제 아파트 공동주택가격 예시 금액 — 캡처 시점에 안내 팝업만 있었고 조회 결과 화면(구체 시가표준액)이 없어 쓰지 않음
- '대도시일수록 공제 폭이 상대적으로 작다'는 방향성 단정 — 지역별 실제 공제 금액을 확인하지 못해 방향성조차 단정하지 않고 heroHook에서도 방향성 없이 서술함

_2026-09-19 scripts/article.mjs_
