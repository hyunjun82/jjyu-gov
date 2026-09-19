# ✅ 통과 — objection-90days

- 타이틀: 기초연금 이의신청 방법과 90일 기한, 결과 통지와 행정심판까지 (spec 고정 — 사장님이 줌)
- 키워드: 기초연금 · 허브: 기초연금 월 34만9700원, 소득인정액 기준과 국민연금 감액 여부 (/policy/basic-pension) · 폴더: 기초연금
- 실행: 2026. 9. 19. 오후 9:00:39 · 총 9.6분 · 고친 횟수 0 · 모델 sonnet
- 글: app/policy/[id]/[spoke]/content/기초연금/이의신청기한행정심판.tsx → https://gov.jjyu.co.kr/policy/basic-pension/objection-90days/
- 정본으로 쓴 글: app/policy/[id]/[spoke]/content/실손보험/나이별실비보험료.tsx

## 단계별 시간·사용량
| 단계 | 시간 | 모델 호출 | 입력 토큰 | 출력 토큰 | 환산 $ |
|---|---|---|---|---|---|
| guard | 0.0분 | - | - | - | - |
| plan | 2.7분 | 1 | 68k | 14k | 0.32 |
| cta | 0.0분 | - | - | - | - |
| collect | 0.5분 | - | - | - | - |
| captures | 0.2분 | 1 | 101k | 829 | 0.12 |
| write | 4.5분 | 1 | 130k | 27k | 0.76 |
| gates | 1.5분 | - | - | - | - |
| **합계** | **9.6분** | **3** | **299k** | **42k** | **1.20** |

> 구독이라 실제 청구는 없습니다. 환산 $ 는 사용 한도를 얼마나 먹었는지의 척도입니다. 호출마다 고정비(시스템 프롬프트) 약 3만 토큰이 붙습니다.

## 설계도 (구성표)
- 타이틀·소제목: spec 고정 (글자 그대로)
1. 이의신청은 언제까지 어디에 하나요?
2. 어떤 서류를 내야 하나요?
3. 결과는 며칠 안에 알려 주나요?  ← 버튼 슬롯
4. 이의신청도 안 되면 행정심판으로 가나요?  ← 버튼 슬롯
- 상단 버튼: [이의신청 접수처 확인하기] → /policy/basic-pension/apply-bokjiro-vs-community-center/
- qa3 버튼: [탈락 재신청 시기 알아두기] → /policy/basic-pension/rejection-reason-reapply/
- qa4 버튼: [심사 기간 미리 챙기기] → /policy/basic-pension/review-period-first-payment/
  - ✓ /policy/basic-pension/apply-bokjiro-vs-community-center/ (내부 경로)
  - ✓ /policy/basic-pension/rejection-reason-reapply/ (내부 경로)
  - ✓ /policy/basic-pension/review-period-first-payment/ (내부 경로)
- 출처: https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95 , https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95%20%EC%8B%9C%ED%96%89%EB%A0%B9 , https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95%EC%8B%9C%ED%96%89%EA%B7%9C%EC%B9%99
- 오해 소지: 이의신청 기한이 따로 없어 아무 때나 낼 수 있다고 착각하지만, 결정을 안 날부터 90일 이내로 제한됩니다 / 이의신청과 행정심판을 같은 절차로 혼동하지만, 이의신청은 지자체 재심사이고 행정심판은 별도의 불복 절차입니다 / 이의신청만 내면 지급이 곧바로 재개된다고 오해하지만, 결과 통보 전까지는 기존 결정이 유지됩니다

## 증거
- 추출본 scripts/output/source-objection-90days.txt 65074자 · 캡처 3장 (scripts/output/captures/objection-90days-*.png)
  - objection-90days-1.png: 법제처 국가법령정보센터, 기초연금법 [시행 2025.10.1][법률 제21065호] 본문 화면. 제1조(목적)~제4조(국가와 지방자치단체의 책무) 표시, 제3조(기초연금 수급권자의 범위 등) ①65세 이상·소득인정액이 선정기준액 이하 ②선정기준액은 65세 이상 수급자 중 100분의 70 수준. 이의신청·90일 기한 문구는 이 화면에 안 보임.
  - objection-90days-2.png: 법제처, 기초연금법 시행령 [시행 2026.7.30][대통령령 제36371호] 본문. 제1조(목적)·제2조(소득의 범위) ①법 제2조제4호 소득평가액 산정 범위 1.근로소득 2.사업소득 3.재산소득(가.이자소득 나.연금소득) 4.공적이전소득(가.보상금 나.수당 1)~7)) 나열. 이의신청·90일 관련 조문은 화면에 없음.
  - objection-90days-3.png: 법제처, 기초연금법 시행규칙 [시행 2026.7.30][보건복지부령 제1180호] 본문. 제2조(소득역가산 산정방식) ①법 제2조제4호 소득평가액에서 제외하는 금액 1~14호(국민기초생활보장급여, 장애인복지법 장애수당, 고용보험법 제37조 실업급여 등) 나열, 제3조(재산가액의 산정) 시작 부분. 이의신청·90일 기한 조문은 화면에 보이지 않음.

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
![objection-90days](objection-90days.png)

## 다음
- 이 보고서와 캡처를 보고 승인 → 배치가 다 끝나면 한 번에 커밋·푸시 (pre-push 게이트가 한 번 더 본다). 자동 푸시는 없다.
- 산출물: scripts/output/{plan,stage2,outline,factsheet,spec}-objection-90days.* · source-objection-90days.txt · captures/objection-90days-*.png
