# ✅ 통과 — move-address-account-change

- 타이틀: 기초연금 이사와 전입 신고, 주소 변경 후 금액 변화와 계좌변경 방법 (spec 고정 — 사장님이 줌)
- 키워드: 기초연금 · 허브: 기초연금 월 34만9700원, 소득인정액 기준과 국민연금 감액 여부 (/policy/basic-pension) · 폴더: 기초연금
- 실행: 2026. 9. 19. 오후 4:39:27 · 총 16.2분 · 고친 횟수 0 · 모델 sonnet
- 글: app/policy/[id]/[spoke]/content/기초연금/이사주소계좌변경.tsx → https://gov.jjyu.co.kr/policy/basic-pension/move-address-account-change/
- 정본으로 쓴 글: app/policy/[id]/[spoke]/content/실손보험/나이별실비보험료.tsx

## 단계별 시간·사용량
| 단계 | 시간 | 모델 호출 | 입력 토큰 | 출력 토큰 | 환산 $ |
|---|---|---|---|---|---|
| guard | 0.0분 | - | - | - | - |
| plan | 7.2분 | 3 | 282k | 38k | 0.98 |
| cta | 0.0분 | - | - | - | - |
| collect | 0.7분 | - | - | - | - |
| captures | 0.6분 | 1 | 103k | 1k | 0.13 |
| write | 6.3분 | 1 | 128k | 40k | 0.88 |
| gates | 1.3분 | - | - | - | - |
| **합계** | **16.2분** | **5** | **512k** | **79k** | **1.99** |

> 구독이라 실제 청구는 없습니다. 환산 $ 는 사용 한도를 얼마나 먹었는지의 척도입니다. 호출마다 고정비(시스템 프롬프트) 약 3만 토큰이 붙습니다.

## 설계도 (구성표)
- 타이틀·소제목: spec 고정 (글자 그대로)
1. 다른 시도로 이사하면 기초연금이 끊기나요?
2. 전입 신고를 하면 따로 알려야 하나요?
3. 자녀 집으로 주소를 옮기면 금액이 달라지나요?  ← 버튼 슬롯
4. 연금 받는 계좌는 어떻게 바꾸나요?  ← 버튼 슬롯
- 상단 버튼: [복지로 온라인 이용하기] → /policy/basic-pension/apply-bokjiro-vs-community-center/
- qa3 버튼: [소득인정액 다시 계산하기] → /policy/basic-pension/income-recognition-calc/
- qa4 버튼: [입금일 지연 문의하기] → /policy/basic-pension/payment-date-weekend-delay/
  - ✓ /policy/basic-pension/apply-bokjiro-vs-community-center/ (내부 경로)
  - ✓ /policy/basic-pension/income-recognition-calc/ (내부 경로)
  - ✓ /policy/basic-pension/payment-date-weekend-delay/ (내부 경로)
- 출처: https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95%20%EC%8B%9C%ED%96%89%EB%A0%B9 , https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95%EC%8B%9C%ED%96%89%EA%B7%9C%EC%B9%99 , https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95/(20251001,21065,20251001)/%EC%A0%9C10%EC%A1%B0 , https://www.korea.kr/briefing/pressReleaseView.do?newsId=156770183
- 오해 소지: 전입신고만 하면 기초연금 관련 신고가 자동으로 끝난다고 생각하지만, 주소·계좌 변경은 따로 신고해야 한다 / 자녀 집으로 들어가면 금액이 그대로거나 늘 거라 생각하지만, 무상임차로 재산이 잡혀 줄어들 수도 있다

## 증거
- 추출본 scripts/output/source-move-address-account-change.txt 76244자 · 캡처 4장 (scripts/output/captures/move-address-account-change-*.png)
  - move-address-account-change-1.png: 국가법령정보센터 '기초연금법 시행령' 조문 화면(시행 2026.7.30, 대통령령 제36371호), 제2조(소득의 범위)에서 근로소득·사업소득·재산소득·공적이전소득 항목과 근거 법령 나열, 이전주소·계좌변경 관련 조문은 화면에 없음
  - move-address-account-change-2.png: 국가법령정보센터 '기초연금법 시행규칙' 화면(시행 2026.7.30, 보건복지부령 제1180호), 제2조(소득평가액 산정방식)에 소득 제외 항목 1~14호(기초생활보장급여·장애수당·양육보조금·실업급여 등)와 제3조(재산가액의 산정) 시가표준액 산정방법 나열, 계좌·주소변경 관련 내용 없음
  - move-address-account-change-3.png: 국가법령정보센터 '기초연금법' 조문 화면(시행 2025.10.1, 법률 제21065호), 제10조(기초연금 지급의 신청)·제10조의2(관련 정보의 제공)·제11조(조사·질문 등) 조문 표시, 신청·동의서·자료제출 절차만 있고 주소이전·계좌변경 전용 조항은 보이지 않음
  - move-address-account-change-4.png: 대한민국 정책브리핑(korea.kr) 보도자료 페이지, 제목 '기초연금 온라인 신청 언제 어디서나, 더욱 간편하게'(2026.7.9 보건복지부), 본문에 온라인 신청 이용률(25년 상반기 887,431명 중 온라인 29,903명(3.4%))과 하단 '기초연금 온라인 간편 신청 절차 개선안' 표(단계 1~5, 현행 vs 개편 후 비교: 4-1 금융정보 제공 동의, 4-2 가구정보 계좌정보 입력, 4-3 수급희망이력관리신청 클릭 시, 5-1/5-2 소득재산 신고) 수록, 주소이전에 따른 계좌변경 전용 안내는 화면에 없음

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
![move-address-account-change](move-address-account-change.png)

## 다음
- 이 보고서와 캡처를 보고 승인 → 배치가 다 끝나면 한 번에 커밋·푸시 (pre-push 게이트가 한 번 더 본다). 자동 푸시는 없다.
- 산출물: scripts/output/{plan,stage2,outline,factsheet,spec}-move-address-account-change.* · source-move-address-account-change.txt · captures/move-address-account-change-*.png
