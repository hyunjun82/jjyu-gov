# ✅ 통과 — homeowner-official-price-deduction

- 타이틀: 집 있어도 기초연금 되나요, 공시지가 확인과 대도시 농어촌 공제 차이 (spec 고정 — 사장님이 줌)
- 키워드: 기초연금 · 허브: 기초연금 월 34만9700원, 소득인정액 기준과 국민연금 감액 여부 (/policy/basic-pension) · 폴더: 기초연금
- 실행: 2026. 9. 19. 오전 11:55:04 · 총 8.8분 · 고친 횟수 0 · 모델 sonnet
- 글: app/policy/[id]/[spoke]/content/기초연금/주택재산공제.tsx → https://gov.jjyu.co.kr/policy/basic-pension/homeowner-official-price-deduction/
- 정본으로 쓴 글: app/policy/[id]/[spoke]/content/실손보험/나이별실비보험료.tsx

## 단계별 시간·사용량
| 단계 | 시간 | 모델 호출 | 입력 토큰 | 출력 토큰 | 환산 $ |
|---|---|---|---|---|---|
| guard | 0.0분 | - | - | - | - |
| plan | 0.0분 | - | - | - | - |
| cta | 0.0분 | - | - | - | - |
| collect | 0.0분 | - | - | - | - |
| captures | 0.0분 | - | - | - | - |
| write | 6.4분 | 1 | 101k | 37k | 0.72 |
| gates | 2.2분 | - | - | - | - |
| **합계** | **8.8분** | **1** | **101k** | **37k** | **0.72** |

> 구독이라 실제 청구는 없습니다. 환산 $ 는 사용 한도를 얼마나 먹었는지의 척도입니다. 호출마다 고정비(시스템 프롬프트) 약 3만 토큰이 붙습니다.

## 설계도 (구성표)
- 타이틀·소제목: spec 고정 (글자 그대로)
1. 집이 있어도 기초연금을 받을 수 있나요?
2. 아파트 공시지가는 어디서 확인하나요?
3. 대도시와 농어촌은 공제액이 다른가요?  ← 버튼 슬롯
4. 농어촌으로 이사하면 유리해지나요?  ← 버튼 슬롯
- 상단 버튼: [아파트 공시가격 조회하기] → https://www.realtyprice.kr:447/notice/gsindex.htm
- qa3 버튼: [내 소득인정액 계산하기] → /policy/basic-pension/income-recognition-calc/
- qa4 버튼: [지역별 선정기준액 확인하기] → /policy/basic-pension/selection-threshold-single-couple/
  - ✓ https://www.realtyprice.kr:447/notice/gsindex.htm (부동산공시가격 알리미)
  - ✓ /policy/basic-pension/income-recognition-calc/ (내부 경로)
  - ✓ /policy/basic-pension/selection-threshold-single-couple/ (내부 경로)
- 출처: https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95%20%EC%8B%9C%ED%96%89%EB%A0%B9 , https://www.law.go.kr/%ED%96%89%EC%A0%95%EA%B7%9C%EC%B9%99/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EC%A7%80%EA%B8%89%EB%8C%80%EC%83%81%EC%9E%90%EC%84%A0%EC%A0%95%EA%B8%B0%EC%A4%80%EC%95%A1,%EA%B8%B0%EC%A4%80%EC%97%B0%EA%B8%88%EC%95%A1%EB%B0%8F%EC%86%8C%EB%93%9D%EC%9D%B8%EC%A0%95%EC%95%A1%EC%82%B0%EC%A0%95%EC%84%B8%EB%B6%80%EA%B8%B0%EC%A4%80%EC%97%90%EA%B4%80%ED%95%9C%EA%B3%A0%EC%8B%9C , https://www.law.go.kr/lsLinkCommonInfo.do?lsJoLnkSeq=1029098327 , ✗ https://www.realtyprice.kr:447/notice/gsindex.htm
- 오해 소지: 집이 있으면 기초연금은 무조건 탈락한다는 오해 (실제는 공제 후 남은 금액만 재산으로 반영) / 공시지가와 실거래 시세를 같은 금액으로 착각 / 대도시든 농어촌이든 재산 공제액이 똑같다고 생각

## 증거
- 추출본 scripts/output/source-homeowner-official-price-deduction.txt 36885자 · 캡처 4장 (scripts/output/captures/homeowner-official-price-deduction-*.png)
  - homeowner-official-price-deduction-1.png: 국가법령정보센터, 기초연금법 시행령[시행 2026.7.30.][대통령령 제36371호] 제2조(소득의 범위) 화면 — 제2항: 본인 및 배우자가 1촌 이내 직계비속 소유 주택(주택가격이 보건복지부장관이 정하여 고시하는 금액 이상인 경우에 한정)에 거주하면 그 금액을 소득으로 산정한다는 조문이 보인다.
  - homeowner-official-price-deduction-2.png: 국가법령정보센터, 기초연금 지급대상자 선정기준액·기준연금액 및 소득인정액 산정 세부기준 고시[시행 2026.7.30.][보건복지부고시 제2026-156호] — 제2조: 2026년 선정기준액 단독가구 월 소득인정액 2,470,000원·부부가구 3,952,000원, 제3조: 2026년 기준연금액 34만9천7백원, 제4조(무료임차소득 부과 기준 주택): 1촌 이내 직계비속 소유 주택 기준은 시가표준액 6억원 이상.
  - homeowner-official-price-deduction-3.png: 국가법령정보센터, 기초연금법 시행규칙[시행 2026.7.30.][보건복지부령 제1180호] 제2조 제2항 — 소득에 포함되는 금액은 본인 및 배우자가 거주하는 1촌 이내 직계비속 소유 주택의 시가표준액에 10000분의 78을 곱한 후 12로 나눈 금액으로 한다는 계산식 조문이 보인다.
  - homeowner-official-price-deduction-4.png: 부동산공시가격알리미(realtyprice.kr) 메인화면, 팝업창 '2026년 7.1 기준 개별지공시지가 열람 및 의견제출 기간 2026.9.1~2026.9.22' 노출 중이며 본문의 주택공시가격(공동주택·표준주택)·토지공시지가(표준지·개별지) 열람 메뉴 카드만 보이고 실제 가격 수치나 검색 결과 화면은 없다.

## 검사 (회차별)
| 검사 | 초안 |
|---|---|
| tsc (타입) | ✓ |
| 원문 대조 (check-source-match) | ✓ |
| 수치 ↔ 출처 (check-source-backing) | ✓ |
| 버튼 도배 (check-button-variety) | ✓ |
| 승인 도장 (check-stage-approval) | ✓ |
| 출처 링크 (check-source-links) | ✓ |
| 배선 (verify-integrity) | ✓ |
| 화면 (dev 렌더) | ✓ |

## 메모
- 근거로 쓰지 않은 출처: https://www.realtyprice.kr:447/notice/gsindex.htm (본문에 주제어(기초연금)가 없다 — 다른 문서)

## 렌더 캡처
![homeowner-official-price-deduction](homeowner-official-price-deduction.png)

## 다음
- 이 보고서와 캡처를 보고 승인 → 배치가 다 끝나면 한 번에 커밋·푸시 (pre-push 게이트가 한 번 더 본다). 자동 푸시는 없다.
- 산출물: scripts/output/{plan,stage2,outline,factsheet,spec}-homeowner-official-price-deduction.* · source-homeowner-official-price-deduction.txt · captures/homeowner-official-price-deduction-*.png
