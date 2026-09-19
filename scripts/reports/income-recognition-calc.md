# ✅ 통과 — income-recognition-calc

- 타이틀: 기초연금 소득인정액 계산, 소득평가액과 재산 환산액 차이부터 모의계산까지 (spec 고정 — 사장님이 줌)
- 키워드: 기초연금 · 허브: 기초연금 월 34만9700원, 소득인정액 기준과 국민연금 감액 여부 (/policy/basic-pension) · 폴더: 기초연금
- 실행: 2026. 9. 19. 오전 11:38:13 · 총 8.1분 · 고친 횟수 0 · 모델 sonnet
- 글: app/policy/[id]/[spoke]/content/기초연금/소득인정액계산.tsx → https://gov.jjyu.co.kr/policy/basic-pension/income-recognition-calc/
- 정본으로 쓴 글: app/policy/[id]/[spoke]/content/실손보험/나이별실비보험료.tsx

## 단계별 시간·사용량
| 단계 | 시간 | 모델 호출 | 입력 토큰 | 출력 토큰 | 환산 $ |
|---|---|---|---|---|---|
| guard | 0.0분 | - | - | - | - |
| plan | 0.0분 | - | - | - | - |
| cta | 0.0분 | - | - | - | - |
| collect | 0.0분 | - | - | - | - |
| captures | 0.0분 | - | - | - | - |
| write | 5.1분 | 1 | 251k | 34k | 0.87 |
| gates | 2.7분 | - | - | - | - |
| **합계** | **8.1분** | **1** | **251k** | **34k** | **0.87** |

> 구독이라 실제 청구는 없습니다. 환산 $ 는 사용 한도를 얼마나 먹었는지의 척도입니다. 호출마다 고정비(시스템 프롬프트) 약 3만 토큰이 붙습니다.

## 설계도 (구성표)
- 타이틀·소제목: spec 고정 (글자 그대로)
1. 소득인정액은 어떻게 계산되나요?
2. 소득평가액에는 무엇이 들어가나요?
3. 재산 환산액은 소득평가액과 무엇이 다른가요?  ← 버튼 슬롯
4. 모의계산기로 미리 계산해 볼 수 있나요?  ← 버튼 슬롯
- 상단 버튼: [예상 수급액 계산하기] → /policy/basic-pension/calculation-formula/
- qa3 버튼: [재산 기준 미리 살피기] → /policy/basic-pension/disqualification/
- qa4 버튼: [기초연금 총정리 열기] → /policy/basic-pension
  - ✓ /policy/basic-pension/calculation-formula/ (내부 경로)
  - ✓ /policy/basic-pension/disqualification/ (내부 경로)
  - ✓ /policy/basic-pension (내부 경로)
- 출처: https://www.law.go.kr/%ED%96%89%EC%A0%95%EA%B7%9C%EC%B9%99/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EC%A7%80%EA%B8%89%EB%8C%80%EC%83%81%EC%9E%90%EC%84%A0%EC%A0%95%EA%B8%B0%EC%A4%80%EC%95%A1,%EA%B8%B0%EC%A4%80%EC%97%B0%EA%B8%88%EC%95%A1%EB%B0%8F%EC%86%8C%EB%93%9D%EC%9D%B8%EC%A0%95%EC%95%A1%EC%82%B0%EC%A0%95%EC%84%B8%EB%B6%80%EA%B8%B0%EC%A4%80%EC%97%90%EA%B4%80%ED%95%9C%EA%B3%A0%EC%8B%9C , https://law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95%20%EC%8B%9C%ED%96%89%EB%A0%B9 , https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95%EC%8B%9C%ED%96%89%EA%B7%9C%EC%B9%99
- 오해 소지: 월급이나 국민연금만 소득으로 잡힌다고 생각하지만, 집·예금 같은 재산도 소득으로 환산돼 소득인정액에 더해진다 / 재산 시가 전체가 그대로 소득으로 잡힌다고 오해하지만 기본재산액 공제·부채 차감 후 환산율을 곱한 금액만 반영된다 / 소득평가액과 재산의 소득환산액을 같은 것으로 헷갈리지만 계산 방식과 반영되는 항목이 서로 다르다

## 증거
- 추출본 scripts/output/source-income-recognition-calc.txt 47573자 · 캡처 3장 (scripts/output/captures/income-recognition-calc-*.png)
  - income-recognition-calc-1.png: 법제처 국가법령정보센터, '기초연금 지급대상자 선정기준액, 기준연금액 및 소득인정액 산정 세부기준에 관한 고시'(보건복지부고시 제2026-156호, 2026.7.28. 일부개정, 시행 2026.7.30.) 조문 화면. 제2조: 2026년도 선정기준액은 배우자 없는 노인가구 월 소득인정액 2,470,000원, 배우자 있는 노인가구 3,952,000원. 제3조: 2026년도 기준연금액은 34만9천7백원. 제6조 제1호: 근로소득 기본공제액 월 116만원, 제2호: 기본공제 초과분의 100분의 30 추가공제. 제6조의2: 이자소득 월 4만원 공제. 제6조의3: 보상금·수당 소득산정 제외 기준 월 43만원 이하.
  - income-recognition-calc-2.png: 법제처 국가법령정보센터, '기초연금법 시행령'(대통령령 제36371호, 2026.6.2. 일부개정, 시행 2026.7.30.) 조문 화면. 제2조(소득의 범위) ①: 소득평가액 산정 대상은 1.근로소득(소득세법 제20조제1항), 2.사업소득(소득세법 제19조), 3.재산소득(가.이자소득 나.연금소득), 4.공적이전소득(국민연금법·공무원연금법 등 각종 법률에 따른 연금·급여, 단 가·나목의 보상금·수당은 제외) 항목이 조문 텍스트로 나열됨. 표 형태 아님, 법조문 리스트.
  - income-recognition-calc-3.png: 법제처 국가법령정보센터, '기초연금법 시행규칙'(보건복지부령 제1180호, 2026.6.18. 일부개정, 시행 2026.7.30.) 조문 화면. 제2조(소득평가액 산정방식) ①: 소득에서 제외하는 항목 1~14호 나열(국민기초생활보장급여, 장애수당, 장애인연금, 양육보조금, 아동양육비, 실업급여, 근로장려금, 지원금 등). ② 무료임차소득 산정식: 주택 시가표준액에 10000분의 78을 곱한 후 12로 나눈 금액. 제3조(재산가액의 산정): 재산 종류별 시가표준액 산정 근거 법령 1~5호 나열, 표 아닌 조문 텍스트.

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

## 렌더 캡처
![income-recognition-calc](income-recognition-calc.png)

## 다음
- 이 보고서와 캡처를 보고 승인 → 배치가 다 끝나면 한 번에 커밋·푸시 (pre-push 게이트가 한 번 더 본다). 자동 푸시는 없다.
- 산출물: scripts/output/{plan,stage2,outline,factsheet,spec}-income-recognition-calc.* · source-income-recognition-calc.txt · captures/income-recognition-calc-*.png
