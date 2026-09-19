# ✅ 통과 — payment-date-weekend-delay

- 타이틀: 기초연금 입금일 확인과 주말 지급, 지연될 때 문의처와 통지서까지 (spec 고정 — 사장님이 줌)
- 키워드: 기초연금 · 허브: 기초연금 월 34만9700원, 소득인정액 기준과 국민연금 감액 여부 (/policy/basic-pension) · 폴더: 기초연금
- 실행: 2026. 9. 19. 오후 4:22:36 · 총 15.5분 · 고친 횟수 0 · 모델 sonnet
- 글: app/policy/[id]/[spoke]/content/기초연금/입금일주말지연문의.tsx → https://gov.jjyu.co.kr/policy/basic-pension/payment-date-weekend-delay/
- 정본으로 쓴 글: app/policy/[id]/[spoke]/content/실손보험/나이별실비보험료.tsx

## 단계별 시간·사용량
| 단계 | 시간 | 모델 호출 | 입력 토큰 | 출력 토큰 | 환산 $ |
|---|---|---|---|---|---|
| guard | 0.0분 | - | - | - | - |
| plan | 6.4분 | 3 | 282k | 32k | 0.91 |
| cta | 0.0분 | - | - | - | - |
| collect | 0.7분 | - | - | - | - |
| captures | 0.4분 | 1 | 103k | 1k | 0.13 |
| write | 6.4분 | 1 | 127k | 37k | 0.85 |
| gates | 1.5분 | - | - | - | - |
| **합계** | **15.5분** | **5** | **512k** | **70k** | **1.89** |

> 구독이라 실제 청구는 없습니다. 환산 $ 는 사용 한도를 얼마나 먹었는지의 척도입니다. 호출마다 고정비(시스템 프롬프트) 약 3만 토큰이 붙습니다.

## 설계도 (구성표)
- 타이틀·소제목: spec 고정 (글자 그대로)
1. 기초연금은 매달 며칠에 들어오나요?
2. 입금일이 주말이나 공휴일이면 언제 들어오나요?
3. 입금이 늦어지면 어디에 문의하나요?  ← 버튼 슬롯
4. 통지서에 금액이 안 적혀 있으면 어떻게 하나요?  ← 버튼 슬롯
- 상단 버튼: [첫 입금 시기 확인하기] → /policy/basic-pension/review-period-first-payment/
- qa3 버튼: [지급정지 사유 확인하기] → /policy/basic-pension/payment-suspension/
- qa4 버튼: [내 소득인정액 계산하기] → /policy/basic-pension/income-recognition-calc/
  - ✓ /policy/basic-pension/review-period-first-payment/ (내부 경로)
  - ✓ /policy/basic-pension/payment-suspension/ (내부 경로)
  - ✓ /policy/basic-pension/income-recognition-calc/ (내부 경로)
- 출처: https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95/(20251001,21065,20251001)/%EC%A0%9C10%EC%A1%B0 , https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95%20%EC%8B%9C%ED%96%89%EB%A0%B9 , https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95%EC%8B%9C%ED%96%89%EA%B7%9C%EC%B9%99 , https://www.korea.kr/briefing/pressReleaseView.do?newsId=156770183
- 오해 소지: 지급일이 매번 25일로 고정이라고 생각하지만 주말·공휴일이면 그 전날로 당겨질 수 있다 / 통지서에 금액이 안 나오면 무조건 오류라고 생각하지만 별도 사유가 있을 수 있다

## 증거
- 추출본 scripts/output/source-payment-date-weekend-delay.txt 76254자 · 캡처 4장 (scripts/output/captures/payment-date-weekend-delay-*.png)
  - payment-date-weekend-delay-1.png: 국가법령정보센터 '기초연금법' 조문 화면 — 제10조(기초연금 지급의 신청), 제10조의2(기초연금 관련 정보의 제공), 제11조(조사·질문 등) 본문이 보이고, 지급일이나 주말 지연 관련 내용은 없음
  - payment-date-weekend-delay-2.png: 국가법령정보센터 '기초연금법 시행령'[시행 2026.7.30., 대통령령 제36371호] 화면 — 제1조(목적), 제2조(소득의 범위) 1~4호(근로소득·사업소득·재산소득·공적이전소득) 표가 보이나 지급일·주말 지연 관련 조문은 없음
  - payment-date-weekend-delay-3.png: 국가법령정보센터 '기초연금법 시행규칙'[시행 2026.6.18., 보건복지부령 제1180호] 화면 — 제2조(소득역가액 산정방식) 1~14호 항목과 제3조(재산가액의 산정) 1~5호가 보이며, 지급일·주말 지연 내용은 없음
  - payment-date-weekend-delay-4.png: 대한민국 정책브리핑(korea.kr) 2026.7.9. 보건복지부 보도자료 '기초연금 온라인 신청 언제 어디서나, 더욱 간편하게' — '25년 접수 887,431명 중 온라인 29,903명(3.4%)' 수치와 온라인 신청 절차 개선안 표(1~5단계: 신청동의→본인인증→기본정보→개방정보→금융정보 제공 동의 등)가 보이나, 지급일이나 주말 지연 관련 내용은 없음

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
![payment-date-weekend-delay](payment-date-weekend-delay.png)

## 다음
- 이 보고서와 캡처를 보고 승인 → 배치가 다 끝나면 한 번에 커밋·푸시 (pre-push 게이트가 한 번 더 본다). 자동 푸시는 없다.
- 산출물: scripts/output/{plan,stage2,outline,factsheet,spec}-payment-date-weekend-delay.* · source-payment-date-weekend-delay.txt · captures/payment-date-weekend-delay-*.png
