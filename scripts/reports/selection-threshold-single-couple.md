# ✅ 통과 — selection-threshold-single-couple

- 타이틀: 기초연금 선정기준액과 단독 부부가구 차이, 하위 70% 기준 확인 (spec 고정 — 사장님이 줌)
- 키워드: 기초연금 · 허브: 기초연금 월 34만9700원, 소득인정액 기준과 국민연금 감액 여부 (/policy/basic-pension) · 폴더: 기초연금
- 실행: 2026. 9. 19. 오전 11:45:46 · 총 7.0분 · 고친 횟수 0 · 모델 sonnet
- 글: app/policy/[id]/[spoke]/content/기초연금/선정기준액단독부부차이.tsx → https://gov.jjyu.co.kr/policy/basic-pension/selection-threshold-single-couple/
- 정본으로 쓴 글: app/policy/[id]/[spoke]/content/실손보험/나이별실비보험료.tsx

## 단계별 시간·사용량
| 단계 | 시간 | 모델 호출 | 입력 토큰 | 출력 토큰 | 환산 $ |
|---|---|---|---|---|---|
| guard | 0.0분 | - | - | - | - |
| plan | 0.0분 | - | - | - | - |
| cta | 0.0분 | - | - | - | - |
| collect | 0.0분 | - | - | - | - |
| captures | 0.0분 | - | - | - | - |
| write | 5.0분 | 1 | 129k | 33k | 0.82 |
| gates | 1.9분 | - | - | - | - |
| **합계** | **7.0분** | **1** | **129k** | **33k** | **0.82** |

> 구독이라 실제 청구는 없습니다. 환산 $ 는 사용 한도를 얼마나 먹었는지의 척도입니다. 호출마다 고정비(시스템 프롬프트) 약 3만 토큰이 붙습니다.

## 설계도 (구성표)
- 타이틀·소제목: spec 고정 (글자 그대로)
1. 선정기준액은 무엇을 기준으로 정해지나요?
2. 단독가구와 부부가구 기준은 얼마씩 다른가요?
3. 소득 하위 70%는 어떻게 가려내나요?  ← 버튼 슬롯
4. 내가 기준 안에 드는지 어디서 확인하나요?  ← 버튼 슬롯
- 상단 버튼: [소득인정액 확인하기] → /policy/basic-pension/income-recognition-calc/
- qa3 버튼: [기초연금 계산하기] → /policy/basic-pension/calculation-formula/
- qa4 버튼: [탈락 조건 확인하기] → /policy/basic-pension/disqualification/
  - ✓ /policy/basic-pension/income-recognition-calc/ (내부 경로)
  - ✓ /policy/basic-pension/calculation-formula/ (내부 경로)
  - ✓ /policy/basic-pension/disqualification/ (내부 경로)
- 출처: https://law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95%20%EC%8B%9C%ED%96%89%EB%A0%B9 , https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95%EC%8B%9C%ED%96%89%EA%B7%9C%EC%B9%99 , https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95/(20251001,21065,20251001)/%EC%A0%9C10%EC%A1%B0
- 오해 소지: 선정기준액을 넘으면 무조건 못 받는다고 오해하지만 실제 판단 기준은 소득인정액이다 / 단독가구와 부부가구 선정기준액이 같다고 생각하는 경우가 많다 / 하위 70%가 매년 고정된 금액이라 착각하기 쉽지만 실제로는 해마다 새로 정해진다

## 증거
- 추출본 scripts/output/source-selection-threshold-single-couple.txt 65177자 · 캡처 3장 (scripts/output/captures/selection-threshold-single-couple-*.png)
  - selection-threshold-single-couple-1.png: 법제처 국가법령정보센터, 기초연금법 시행령[시행 2026.7.30.][대통령령 제36371호] 제2조(소득의 범위) 조문 — 근로소득·사업소득·재산소득·공적이전소득 4개 호와 세부 목록만 보이고, 선정기준액 금액·비율 숫자는 이 화면에 없음.
  - selection-threshold-single-couple-2.png: 법제처 국가법령정보센터, 기초연금법 시행규칙[시행 2026.7.30.][보건복지부령 제1180호] 제2조(소득평가액 산정방식)·제3조(재산가액의 산정) 조문 — 소득 제외 항목 1~14호 나열(기초생활보장급여, 장애수당, 양육보조금, 실업급여, 근로장려금 등)과 주택 소득환산식(시가표준액×10000분의78÷12)만 보이고, 선정기준액 구체 금액은 없음.
  - selection-threshold-single-couple-3.png: 법제처 국가법령정보센터, 기초연금법[시행 2025.10.1.][법률 제21065호] 제10조(기초연금 지급의 신청)·제10조의2(관련 정보의 제공)·제11조(조사·질문 등) 조문 — 신청 절차·동의서·금융정보 제공·조사 권한 내용만 보이고, 단독·부부가구 선정기준액 금액은 이 화면에 없음.

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
![selection-threshold-single-couple](selection-threshold-single-couple.png)

## 다음
- 이 보고서와 캡처를 보고 승인 → 배치가 다 끝나면 한 번에 커밋·푸시 (pre-push 게이트가 한 번 더 본다). 자동 푸시는 없다.
- 산출물: scripts/output/{plan,stage2,outline,factsheet,spec}-selection-threshold-single-couple.* · source-selection-threshold-single-couple.txt · captures/selection-threshold-single-couple-*.png
