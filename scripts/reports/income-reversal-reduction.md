# ✅ 통과 — income-reversal-reduction

- 타이틀: 기초연금 소득역전방지 감액, 얼마부터 깎이고 얼마까지 남나 (spec 고정 — 사장님이 줌)
- 키워드: 기초연금 · 허브: 기초연금 월 34만9700원, 소득인정액 기준과 국민연금 감액 여부 (/policy/basic-pension) · 폴더: 기초연금
- 실행: 2026. 9. 19. 오후 8:33:55 · 총 2.1분 · 고친 횟수 0 · 모델 sonnet
- 글: app/policy/[id]/[spoke]/content/기초연금/소득역전방지감액.tsx → https://gov.jjyu.co.kr/policy/basic-pension/income-reversal-reduction/
- 정본으로 쓴 글: app/policy/[id]/[spoke]/content/실손보험/나이별실비보험료.tsx

## 단계별 시간·사용량
| 단계 | 시간 | 모델 호출 | 입력 토큰 | 출력 토큰 | 환산 $ |
|---|---|---|---|---|---|
| guard | 0.0분 | - | - | - | - |
| plan | 0.0분 | - | - | - | - |
| cta | 0.0분 | - | - | - | - |
| collect | 0.0분 | - | - | - | - |
| captures | 0.0분 | - | - | - | - |
| write | 0.0분 | - | - | - | - |
| gates | 1.9분 | - | - | - | - |
| **합계** | **2.1분** | **0** | **0** | **0** | **0.00** |

> 구독이라 실제 청구는 없습니다. 환산 $ 는 사용 한도를 얼마나 먹었는지의 척도입니다. 호출마다 고정비(시스템 프롬프트) 약 3만 토큰이 붙습니다.

## 설계도 (구성표)
- 타이틀·소제목: spec 고정 (글자 그대로)
1. 소득역전방지 감액은 왜 있나요?
2. 소득인정액이 얼마일 때부터 깎이나요?
3. 얼마까지 깎이고 최소 얼마는 남나요?  ← 버튼 슬롯
4. 부부가구는 어떻게 다르게 적용되나요?  ← 버튼 슬롯
- 상단 버튼: [깎이는 구간 확인하기] → /policy/basic-pension/income-recognition-calc/
- qa3 버튼: [선정기준액부터 확인하기] → /policy/basic-pension/selection-threshold-single-couple/
- qa4 버튼: [감액 계산공식 확인하기] → /policy/basic-pension/calculation-formula/
  - ✓ /policy/basic-pension/income-recognition-calc/ (내부 경로)
  - ✓ /policy/basic-pension/selection-threshold-single-couple/ (내부 경로)
  - ✓ /policy/basic-pension/calculation-formula/ (내부 경로)
- 출처: https://www.law.go.kr/lsLinkCommonInfo.do?lsJoLnkSeq=1030188869 , https://law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95%20%EC%8B%9C%ED%96%89%EB%A0%B9 , https://www.law.go.kr/%ED%96%89%EC%A0%95%EA%B7%9C%EC%B9%99/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EC%A7%80%EA%B8%89%EB%8C%80%EC%83%81%EC%9E%90%EC%84%A0%EC%A0%95%EA%B8%B0%EC%A4%80%EC%95%A1,%EA%B8%B0%EC%A4%80%EC%97%B0%EA%B8%88%EC%95%A1%EB%B0%8F%EC%86%8C%EB%93%9D%EC%9D%B8%EC%A0%95%EC%95%A1%EC%82%B0%EC%A0%95%EC%84%B8%EB%B6%80%EA%B8%B0%EC%A4%80%EC%97%90%EA%B4%80%ED%95%9C%EA%B3%A0%EC%8B%9C
- 오해 소지: 감액 대상이 되면 기초연금을 아예 못 받는다고 오해하지만 최저 지급액은 따로 보장된다 / 국민연금 연계감액과 같은 제도로 착각하지만 소득역전방지 감액은 별도로 적용되는 다른 장치다 / 부부가구는 소득역전방지 감액이 적용되지 않는다고 오해하지만 부부도 선정기준액 기준으로 걸린다

## 증거
- 추출본 scripts/output/source-income-reversal-reduction.txt 34592자 · 캡처 3장 (scripts/output/captures/income-reversal-reduction-*.png)
  - income-reversal-reduction-1.png: 국가법령정보센터, 기초연금법[시행 2025.10.1, 법률 제21065호] 제8조(기초연금액의 감액) 조문 화면 — ①부부 모두 수급권자면 각자 기초연금액의 100분의 20 감액, ②③소득인정액과 기초연금액 합산이 선정기준액 초과 시 초과분 범위에서 일부 감액, ④세부기준은 대통령령.
  - income-reversal-reduction-2.png: 국가법령정보센터, 기초연금법 시행령[시행 2026.7.30, 대통령령 제36371호] 제2조(소득의 범위) 조문 화면 — 근로소득·사업소득·재산소득(이자·연금소득)·공적이전소득(국민연금·공무원연금·군인연금 등) 항목별 산정 범위를 나열, 표는 아니고 조문 텍스트.
  - income-reversal-reduction-3.png: 국가법령정보센터, 보건복지부고시 제2026-156호(기초연금 지급대상자 선정기준액·기준연금액 및 소득인정액 산정 세부기준) 화면 — 제2조: 2026년도 선정기준액 단독가구 월 소득인정액 2,470,000원·부부가구 3,952,000원, 제3조: 2026년도 기준연금액 34만9천7백원, 제4조: 무료임차소득 부과 기준 주택 시가표준액 6억원 이상, 제6조: 근로소득 기본공제액 월 116만원·추가공제 100분의 30, 제6조의2: 이자소득 월 4만원 공제, 제6조의3: 보상금·수당 소득산정 제외 월 43만원 이하.

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
![income-reversal-reduction](income-reversal-reduction.png)

## 다음
- 이 보고서와 캡처를 보고 승인 → 배치가 다 끝나면 한 번에 커밋·푸시 (pre-push 게이트가 한 번 더 본다). 자동 푸시는 없다.
- 산출물: scripts/output/{plan,stage2,outline,factsheet,spec}-income-reversal-reduction.* · source-income-reversal-reduction.txt · captures/income-reversal-reduction-*.png
