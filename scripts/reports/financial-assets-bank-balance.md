# ✅ 통과 — financial-assets-bank-balance

- 타이틀: 기초연금 금융재산 조회와 통장 잔액 기준, 현금 한도와 공제 범위 (spec 고정 — 사장님이 줌)
- 키워드: 기초연금 · 허브: 기초연금 월 34만9700원, 소득인정액 기준과 국민연금 감액 여부 (/policy/basic-pension) · 폴더: 기초연금
- 실행: 2026. 9. 19. 오후 12:02:29 · 총 6.8분 · 고친 횟수 0 · 모델 sonnet
- 글: app/policy/[id]/[spoke]/content/기초연금/금융재산잔액기준.tsx → https://gov.jjyu.co.kr/policy/basic-pension/financial-assets-bank-balance/
- 정본으로 쓴 글: app/policy/[id]/[spoke]/content/실손보험/나이별실비보험료.tsx

## 단계별 시간·사용량
| 단계 | 시간 | 모델 호출 | 입력 토큰 | 출력 토큰 | 환산 $ |
|---|---|---|---|---|---|
| guard | 0.0분 | - | - | - | - |
| plan | 0.0분 | - | - | - | - |
| cta | 0.0분 | - | - | - | - |
| collect | 0.0분 | - | - | - | - |
| captures | 0.0분 | - | - | - | - |
| write | 4.1분 | 1 | 124k | 26k | 0.72 |
| gates | 2.5분 | - | - | - | - |
| **합계** | **6.8분** | **1** | **124k** | **26k** | **0.72** |

> 구독이라 실제 청구는 없습니다. 환산 $ 는 사용 한도를 얼마나 먹었는지의 척도입니다. 호출마다 고정비(시스템 프롬프트) 약 3만 토큰이 붙습니다.

## 설계도 (구성표)
- 타이틀·소제목: spec 고정 (글자 그대로)
1. 내 금융재산은 어디서 조회해 보나요?
2. 통장에 얼마가 있으면 기초연금에서 떨어지나요?
3. 현금을 들고 있으면 한도가 따로 있나요?  ← 버튼 슬롯
4. 금융재산은 얼마를 공제해 주나요?  ← 버튼 슬롯
- 상단 버튼: [지금 소득인정액 계산하기] → /policy/basic-pension/income-recognition-calc/
- qa3 버튼: [재산 탈락 기준 확인하기] → /policy/basic-pension/disqualification/
- qa4 버튼: [기초연금 전체 확인하기] → /policy/basic-pension
  - ✓ /policy/basic-pension/income-recognition-calc/ (내부 경로)
  - ✓ /policy/basic-pension/disqualification/ (내부 경로)
  - ✓ /policy/basic-pension (내부 경로)
- 출처: https://www.law.go.kr/%ED%96%89%EC%A0%95%EA%B7%9C%EC%B9%99/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EC%A7%80%EA%B8%89%EB%8C%80%EC%83%81%EC%9E%90%EC%84%A0%EC%A0%95%EA%B8%B0%EC%A4%80%EC%95%A1,%EA%B8%B0%EC%A4%80%EC%97%B0%EA%B8%88%EC%95%A1%EB%B0%8F%EC%86%8C%EB%93%9D%EC%9D%B8%EC%A0%95%EC%95%A1%EC%82%B0%EC%A0%95%EC%84%B8%EB%B6%80%EA%B8%B0%EC%A4%80%EC%97%90%EA%B4%80%ED%95%9C%EA%B3%A0%EC%8B%9C , https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95%EC%8B%9C%ED%96%89%EA%B7%9C%EC%B9%99 , https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95%20%EC%8B%9C%ED%96%89%EB%A0%B9 , https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95/(20251001,21065,20251001)/%EC%A0%9C10%EC%A1%B0
- 오해 소지: 금융재산을 예금만 떠올리지만 보험 해지환급금·주식·펀드도 함께 잡힌다 / 통장 잔액 전부가 그대로 소득으로 잡히는 게 아니라 공제액을 뺀 나머지만 반영된다 / 본인 계좌만 신고하면 된다고 생각하지만 배우자 명의 금융재산도 함께 조사된다

## 증거
- 추출본 scripts/output/source-financial-assets-bank-balance.txt 71083자 · 캡처 4장 (scripts/output/captures/financial-assets-bank-balance-*.png)
  - financial-assets-bank-balance-1.png: 국가법령정보센터, 보건복지부고시 제2026-156호 '기초연금 지급대상자 선정기준액,기준연금액 및 소득인정액 산정 세부기준에 관한 고시'(시행 2026.7.30): 제2조 2026년 선정기준액 단독가구 월 2,470,000원·부부가구 월 3,952,000원, 제3조 2026년도 기준연금액 34만9,700원, 제4조 무료임차소득 부과 기준 주택 시가표준액 6억원 이상, 제6조 근로소득 기본공제액 월 116만원.
  - financial-assets-bank-balance-2.png: 국가법령정보센터, 기초연금법 시행규칙(보건복지부령 제1180호, 시행 2026.7.30) 제2조(소득평가액 산정방식)·제3조(재산가액의 산정): 소득에서 제외하는 항목 14호 목록(기초생활보장급여·장애수당·양육보조금·실업급여·근로장려금 등)과 재산가액 산정 방법 각 호(시가표준액 등) 나열, 표는 아니고 조문 목록.
  - financial-assets-bank-balance-3.png: 국가법령정보센터, 기초연금법 시행령(대통령령 제36371호, 시행 2026.7.30) 제2조(소득의 범위): 근로소득·사업소득·재산소득(이자·연금소득)·공적이전소득 항목을 조문으로 나열, 이자소득은 '보건복지부장관이 정하여 고시하는 금액 이상의 소득'만 포함한다고 명시(구체적 금액은 이 화면에 없음).
  - financial-assets-bank-balance-4.png: 국가법령정보센터, 기초연금법(법률 제21065호, 시행 2025.10.1) 제10조(기초연금 지급의 신청)·제11조(조사·질문 등): 신청 시 제출 동의 대상으로 금융정보(예금 평균잔액 등)·신용정보·보험정보를 규정, 제11조에서 보건복지부장관·지자체장의 금융·재산 조사 권한을 명시.

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
![financial-assets-bank-balance](financial-assets-bank-balance.png)

## 다음
- 이 보고서와 캡처를 보고 승인 → 배치가 다 끝나면 한 번에 커밋·푸시 (pre-push 게이트가 한 번 더 본다). 자동 푸시는 없다.
- 산출물: scripts/output/{plan,stage2,outline,factsheet,spec}-financial-assets-bank-balance.* · source-financial-assets-bank-balance.txt · captures/financial-assets-bank-balance-*.png
