# ✅ 통과 — working-income-report-senior-job

- 타이틀: 기초연금 받으며 일할 때 소득 신고, 노인일자리와 근로소득 공제 차이 (spec 고정 — 사장님이 줌)
- 키워드: 기초연금 · 허브: 기초연금 월 34만9700원, 소득인정액 기준과 국민연금 감액 여부 (/policy/basic-pension) · 폴더: 기초연금
- 실행: 2026. 9. 19. 오후 4:50:08 · 총 10.2분 · 고친 횟수 0 · 모델 sonnet
- 글: app/policy/[id]/[spoke]/content/기초연금/노인일자리소득공제차이.tsx → https://gov.jjyu.co.kr/policy/basic-pension/working-income-report-senior-job/
- 정본으로 쓴 글: app/policy/[id]/[spoke]/content/실손보험/나이별실비보험료.tsx

## 단계별 시간·사용량
| 단계 | 시간 | 모델 호출 | 입력 토큰 | 출력 토큰 | 환산 $ |
|---|---|---|---|---|---|
| guard | 0.0분 | - | - | - | - |
| plan | 2.1분 | 1 | 68k | 9k | 0.27 |
| cta | 0.0분 | - | - | - | - |
| collect | 0.5분 | - | - | - | - |
| captures | 0.4분 | 1 | 202k | 739 | 0.14 |
| write | 4.7분 | 1 | 122k | 30k | 0.75 |
| gates | 2.4분 | - | - | - | - |
| **합계** | **10.2분** | **3** | **392k** | **40k** | **1.16** |

> 구독이라 실제 청구는 없습니다. 환산 $ 는 사용 한도를 얼마나 먹었는지의 척도입니다. 호출마다 고정비(시스템 프롬프트) 약 3만 토큰이 붙습니다.

## 설계도 (구성표)
- 타이틀·소제목: spec 고정 (글자 그대로)
1. 기초연금을 받으면서 일을 해도 되나요?
2. 새로 생긴 소득은 신고해야 하나요?
3. 노인일자리 수입도 소득으로 잡히나요?  ← 버튼 슬롯
4. 노인일자리와 일반 근로소득은 공제가 다른가요?  ← 버튼 슬롯
- 상단 버튼: [내 소득인정액 계산하기] → /policy/basic-pension/income-recognition-calc/
- qa3 버튼: [복지로 소득신고 방법 비교하기] → /policy/basic-pension/apply-bokjiro-vs-community-center/
- qa4 버튼: [소득초과 지급정지 사유 확인하기] → /policy/basic-pension/payment-suspension/
  - ✓ /policy/basic-pension/income-recognition-calc/ (내부 경로)
  - ✓ /policy/basic-pension/apply-bokjiro-vs-community-center/ (내부 경로)
  - ✓ /policy/basic-pension/payment-suspension/ (내부 경로)
- 출처: https://law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95%20%EC%8B%9C%ED%96%89%EB%A0%B9 , https://www.law.go.kr/%ED%96%89%EC%A0%95%EA%B7%9C%EC%B9%99/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EC%A7%80%EA%B8%89%EB%8C%80%EC%83%81%EC%9E%90%EC%84%A0%EC%A0%95%EA%B8%B0%EC%A4%80%EC%95%A1,%EA%B8%B0%EC%A4%80%EC%97%B0%EA%B8%88%EC%95%A1%EB%B0%8F%EC%86%8C%EB%93%9D%EC%9D%B8%EC%A0%95%EC%95%A1%EC%82%B0%EC%A0%95%EC%84%B8%EB%B6%80%EA%B8%B0%EC%A4%80%EC%97%90%EA%B4%80%ED%95%9C%EA%B3%A0%EC%8B%9C , https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95/(20251001,21065,20251001)/%EC%A0%9C10%EC%A1%B0
- 오해 소지: 아르바이트나 재취업을 하면 기초연금이 무조건 끊긴다고 오해하지만 실제로는 근로소득공제 후 재계산된다 / 노인일자리 수입은 전부 소득에서 빠진다고 생각하지만 사업 종류에 따라 소득으로 잡히는 경우도 있다 / 소득이 늘어도 알리지 않으면 당장은 문제없다고 여기지만 나중에 환수 대상이 될 수 있다

## 증거
- 추출본 scripts/output/source-working-income-report-senior-job.txt 57162자 · 캡처 3장 (scripts/output/captures/working-income-report-senior-job-*.png)
  - working-income-report-senior-job-1.png: 국가법령정보센터 '기초연금법 시행령'(시행 2026.7.30, 대통령령 제36371호) 제2조 소득의 범위 조문 화면, 근로소득·사업소득·재산소득·공적이전소득 항목 나열이며 표는 없음
  - working-income-report-senior-job-2.png: 국가법령정보센터 '기초연금 지급대상자 선정기준액, 기준연금액 및 소득인정액 산정 세부기준에 관한 고시'(보건복지부고시 제2026-156호, 2026.7.28) 화면, 제2조에 2026년 선정기준액 단독가구 월 2,470,000원·부부가구 월 3,952,000원, 제3조에 2026년 기준연금액 34만9천7백원, 제6조에 근로소득 기본공제액 월 116만원 표기(표 형식 아님, 조문 텍스트)
  - working-income-report-senior-job-3.png: 국가법령정보센터 '기초연금법'(시행 2025.10.1, 법률 제21065호) 제10조(지급의 신청)~제11조(조사·질문 등) 조문 화면, 금융정보·신용정보·보험정보 제공 동의 절차 설명이며 표는 없음

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
![working-income-report-senior-job](working-income-report-senior-job.png)

## 다음
- 이 보고서와 캡처를 보고 승인 → 배치가 다 끝나면 한 번에 커밋·푸시 (pre-push 게이트가 한 번 더 본다). 자동 푸시는 없다.
- 산출물: scripts/output/{plan,stage2,outline,factsheet,spec}-working-income-report-senior-job.* · source-working-income-report-senior-job.txt · captures/working-income-report-senior-job-*.png
