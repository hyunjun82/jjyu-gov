# ✅ 통과 — vehicle-value-3000cc

- 타이틀: 기초연금 차량가액 조회와 산정 기준, 3000cc 배기량과 2대 보유 차이 (spec 고정 — 사장님이 줌)
- 키워드: 기초연금 · 허브: 기초연금 월 34만9700원, 소득인정액 기준과 국민연금 감액 여부 (/policy/basic-pension) · 폴더: 기초연금
- 실행: 2026. 9. 19. 오후 12:24:06 · 총 13.3분 · 고친 횟수 1 · 모델 sonnet
- 글: app/policy/[id]/[spoke]/content/기초연금/차량가액산정기준.tsx → https://gov.jjyu.co.kr/policy/basic-pension/vehicle-value-3000cc/
- 정본으로 쓴 글: app/policy/[id]/[spoke]/content/실손보험/나이별실비보험료.tsx

## 단계별 시간·사용량
| 단계 | 시간 | 모델 호출 | 입력 토큰 | 출력 토큰 | 환산 $ |
|---|---|---|---|---|---|
| guard | 0.0분 | - | - | - | - |
| plan | 0.0분 | - | - | - | - |
| cta | 0.0분 | - | - | - | - |
| collect | 0.9분 | - | - | - | - |
| captures | 0.7분 | 1 | 315k | 1k | 0.19 |
| write | 5.9분 | 1 | 127k | 39k | 0.86 |
| gates | 4.3분 | - | - | - | - |
| fix | 1.5분 | 1 | 125k | 9k | 0.55 |
| **합계** | **13.3분** | **3** | **567k** | **49k** | **1.60** |

> 구독이라 실제 청구는 없습니다. 환산 $ 는 사용 한도를 얼마나 먹었는지의 척도입니다. 호출마다 고정비(시스템 프롬프트) 약 3만 토큰이 붙습니다.

## 설계도 (구성표)
- 타이틀·소제목: spec 고정 (글자 그대로)
1. 차량가액은 어디서 조회하나요?
2. 차량가액은 어떤 기준으로 산정되나요?
3. 3000cc가 넘으면 무조건 탈락인가요?  ← 버튼 슬롯
4. 차가 두 대면 계산이 어떻게 달라지나요?  ← 버튼 슬롯
- 상단 버튼: [소득인정액 계산하기] → /policy/basic-pension/income-recognition-calc/
- qa3 버튼: [차량가액 계산 공식 확인하기] → /policy/basic-pension/calculation-formula/
- qa4 버튼: [기초연금 탈락 조건 확인하기] → /policy/basic-pension/disqualification/
  - ✓ /policy/basic-pension/income-recognition-calc/ (내부 경로)
  - ✓ /policy/basic-pension/calculation-formula/ (내부 경로)
  - ✓ /policy/basic-pension/disqualification/ (내부 경로)
- 출처: https://law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95%20%EC%8B%9C%ED%96%89%EB%A0%B9 , https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95%EC%8B%9C%ED%96%89%EA%B7%9C%EC%B9%99 , https://www.law.go.kr/%ED%96%89%EC%A0%95%EA%B7%9C%EC%B9%99/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EC%A7%80%EA%B8%89%EB%8C%80%EC%83%81%EC%9E%90%EC%84%A0%EC%A0%95%EA%B8%B0%EC%A4%80%EC%95%A1,%EA%B8%B0%EC%A4%80%EC%97%B0%EA%B8%88%EC%95%A1%EB%B0%8F%EC%86%8C%EB%93%9D%EC%9D%B8%EC%A0%95%EC%95%A1%EC%82%B0%EC%A0%95%EC%84%B8%EB%B6%80%EA%B8%B0%EC%A4%80%EC%97%90%EA%B4%80%ED%95%9C%EA%B3%A0%EC%8B%9C , ✗ https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%A7%80%EB%B0%A9%EC%84%B8%EB%B2%95%20%EC%8B%9C%ED%96%89%EB%A0%B9 , ✗ https://www.wetax.go.kr/tcp/loi/J030801M01.do
- 오해 소지: 3000cc 넘으면 무조건 탈락이라는 오해 — 실제로는 소득인정액 전체를 합산한 뒤 선정기준액과 비교한다 / 차량가액을 구매가격 그대로로 아는 오해 — 실제로는 감가상각을 반영한 차량기준가액표를 적용한다 / 차 2대면 그냥 가액을 두 배로 계산한다는 오해 — 대수·용도에 따라 처리 방식이 달라질 수 있다

## 증거
- 추출본 scripts/output/source-vehicle-value-3000cc.txt 95130자 · 캡처 5장 (scripts/output/captures/vehicle-value-3000cc-*.png)
  - vehicle-value-3000cc-1.png: 국가법령정보센터 '기초연금법 시행령'(시행 2026.7.30, 대통령령 제36371호) 본문 화면, 제2조(소득의 범위)에서 근로소득·사업소득·재산소득·공적이전소득 항목을 나열하나 자동차·3000cc 관련 조문은 보이지 않음.
  - vehicle-value-3000cc-2.png: 국가법령정보센터 '기초연금법 시행규칙'(시행 2026.7.30, 보건복지부령 제1180호) 화면, 제2조(소득평가액 산정방식)와 제3조(재산가액의 산정) 각호(지방세법 시행령 준용 시가표준액 등)를 보여주나 3000cc·자동차 기준 수치는 없음.
  - vehicle-value-3000cc-3.png: 국가법령정보센터 '기초연금 지급대상자 선정기준액, 기준연금액 및 소득인정액 산정 세부기준에 관한 고시'(보건복지부고시 제2026-156호, 시행 2026.7.30) 화면, 제5조(재산의 범위에서 제외되는 자동차 기준)가 보이지만 배기량 수치(3000cc)는 텍스트에 나타나지 않고 '영 제3조제1항제1호자목 단서에 규정된 자동차'라고만 표기됨; 제2조는 2026년 선정기준액(단독 2,470,000원/부부 3,952,000원), 제3조는 2026년 기준연금액 34만9천7백원을 명시.
  - vehicle-value-3000cc-4.png: 국가법령정보센터 '지방세법 시행령'(시행 2026.9.18, 대통령령 제36586호) 화면, 제4조(건축물 등의 시가표준액 산정기준) 제3호에 '차량: 차량의 종류·승차정원별·최대적재량별·제조연도별 제조가격(수입 시 수입가격)과 거래가격 등을 고려해 정한 기준가격에 경과연수별 잔존가치율을 적용'이라고만 규정, 3000cc 구체 수치는 없음.
  - vehicle-value-3000cc-5.png: 위택스(wetax.go.kr) '지방세 미리계산 > 취득세(부동산)' 입력 화면(2026-09-19 기준), 과세표준액·거래유형·조정대상지역 여부·소유주택 수·매매계약일자 등 입력란과 하단 취득세율표(1주택~4주택 이상, 조정대상지역 1~12%)가 보이나 자동차세·3000cc 관련 탭은 열려 있지 않고 값도 입력되지 않은 빈 화면.

## 검사 (회차별)
| 검사 | 초안 | 고침 1 |
|---|---|---|
| tsc (타입) | ✓ | ✓ |
| 원문 대조 (check-source-match) | ✓ | ✓ |
| 수치 ↔ 출처 (check-source-backing) | ✓ | ✓ |
| 버튼 도배 (check-button-variety) | ✗ | ✓ |
| 승인 도장 (check-stage-approval) | ✓ | ✓ |
| 출처 링크 (check-source-links) | ✓ | ✓ |
| 배선 (verify-integrity) | ✓ | ✓ |
| 화면 (dev 렌더) | ✓ | ✓ |

## 실패 내용 — 초안
### 버튼 도배 (check-button-variety)
```
❌ [기초연금] 상단 버튼 — 첫 어절 "내" 이 8/17개 (47%). 상한 40%. 문장을 같은 말로 열고 있다.
```

## 메모
- 근거로 쓰지 않은 출처: https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%A7%80%EB%B0%A9%EC%84%B8%EB%B2%95%20%EC%8B%9C%ED%96%89%EB%A0%B9 (본문에 주제어(기초연금)가 없다 — 다른 문서) / https://www.wetax.go.kr/tcp/loi/J030801M01.do (본문에 주제어(기초연금)가 없다 — 다른 문서)

## 렌더 캡처
![vehicle-value-3000cc](vehicle-value-3000cc.png)

## 다음
- 이 보고서와 캡처를 보고 승인 → 배치가 다 끝나면 한 번에 커밋·푸시 (pre-push 게이트가 한 번 더 본다). 자동 푸시는 없다.
- 산출물: scripts/output/{plan,stage2,outline,factsheet,spec}-vehicle-value-3000cc.* · source-vehicle-value-3000cc.txt · captures/vehicle-value-3000cc-*.png
