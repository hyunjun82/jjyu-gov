# ✅ 통과 — review-period-first-payment

- 타이틀: 기초연금 신청부터 첫 입금까지, 심사 기간과 소급 적용 기준 (spec 고정 — 사장님이 줌)
- 키워드: 기초연금 · 허브: 기초연금 월 34만9700원, 소득인정액 기준과 국민연금 감액 여부 (/policy/basic-pension) · 폴더: 기초연금
- 실행: 2026. 9. 19. 오후 3:56:44 · 총 8.3분 · 고친 횟수 0 · 모델 sonnet
- 글: app/policy/[id]/[spoke]/content/기초연금/신청심사소급기준.tsx → https://gov.jjyu.co.kr/policy/basic-pension/review-period-first-payment/
- 정본으로 쓴 글: app/policy/[id]/[spoke]/content/실손보험/나이별실비보험료.tsx

## 단계별 시간·사용량
| 단계 | 시간 | 모델 호출 | 입력 토큰 | 출력 토큰 | 환산 $ |
|---|---|---|---|---|---|
| guard | 0.0분 | - | - | - | - |
| plan | 1.5분 | 1 | 67k | 6k | 0.24 |
| cta | 0.0분 | - | - | - | - |
| collect | 1.0분 | - | - | - | - |
| captures | 0.6분 | 1 | 258k | 1k | 0.16 |
| write | 3.3분 | 1 | 117k | 22k | 0.65 |
| gates | 1.8분 | - | - | - | - |
| **합계** | **8.3분** | **3** | **443k** | **30k** | **1.05** |

> 구독이라 실제 청구는 없습니다. 환산 $ 는 사용 한도를 얼마나 먹었는지의 척도입니다. 호출마다 고정비(시스템 프롬프트) 약 3만 토큰이 붙습니다.

## 설계도 (구성표)
- 타이틀·소제목: spec 고정 (글자 그대로)
1. 신청하면 결과는 언제 통보되나요?
2. 첫 입금까지 얼마나 걸리나요?
3. 심사 기간에는 무엇을 확인하나요?  ← 버튼 슬롯
4. 늦게 신청하면 소급해서 받나요?  ← 버튼 슬롯
- 상단 버튼: [복지로·주민센터 비교하기] → /policy/basic-pension/apply-bokjiro-vs-community-center/
- qa3 버튼: [기초연금 지급일 확인하기] → /policy/basic-pension/payment-day/
- qa4 버튼: [신청 서류 미리 챙기기] → /policy/basic-pension/required-documents/
  - ✓ /policy/basic-pension/apply-bokjiro-vs-community-center/ (내부 경로)
  - ✓ /policy/basic-pension/payment-day/ (내부 경로)
  - ✓ /policy/basic-pension/required-documents/ (내부 경로)
- 출처: https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95/(20251001,21065,20251001)/%EC%A0%9C10%EC%A1%B0 , https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95%EC%8B%9C%ED%96%89%EA%B7%9C%EC%B9%99 , https://www.korea.kr/multi/mediaNewsView.do?newsId=148971263 , https://www.korea.kr/briefing/pressReleaseView.do?newsId=156770183
- 오해 소지: 신청 즉시 그달부터 나온다고 착각하지만 심사·결정 기간이 있어 첫 입금은 신청월보다 늦을 수 있다 / 늦게 신청하면 이전 달치는 무조건 못 받는다고 오해하지만 생일 전 신청 등 조건에 따라 소급되는 경우가 있다 / 심사 기간에는 서류만 본다고 생각하지만 소득·재산 조사도 함께 진행된다

## 증거
- 추출본 scripts/output/source-review-period-first-payment.txt 56025자 · 캡처 4장 (scripts/output/captures/review-period-first-payment-*.png)
  - review-period-first-payment-1.png: 국가법령정보센터 기초연금법(시행 2025.10.1, 법률 제21065호) 조문 화면 — 제10조(지급 신청)·제10조의2(관련 정보 제공)·제11조(조사·질문 등) 본문만 보이고 심사·지급 기간에 관한 조문·표는 없음
  - review-period-first-payment-2.png: 국가법령정보센터 기초연금법 시행규칙(시행 2026.7.30, 보건복지부령 제1180호) 화면 — 제2조(소득평가액 산정방식) 소득 제외 항목 1~14호 나열, 제3조(재산가액의 산정) 산정방법 1~5호, 심사·지급기한 관련 조문·수치는 안 보임
  - review-period-first-payment-3.png: 정책브리핑(korea.kr) 기사 '1961년생이라면 주목! 기초연금, 생일 전에 미리 신청하세요'(2026.09.04, 보건복지부) — 카드뉴스 영상 썸네일과 함께 '생일이 있는 달의 1개월 전부터 신청 가능', 예시로 '생일이 10월이라면 9월 1일부터 신청 가능', 신청처는 행정복지센터·국민연금공단 지사·복지로로 안내, 심사기간·최초지급일 수치는 없음
  - review-period-first-payment-4.png: 정책브리핑(korea.kr) 보도자료 '기초연금 온라인 신청 언제 어디서나, 더욱 간편하게'(2026.07.09, 보건복지부) — 표에 '25년 신청자 887,431명 중 온라인 신청 29,903명(3.4%)' '지방부처 826,171명(91.1%)' '읍면동 31,357명(3.5%)' 수치와 온라인 간편 신청 절차 개선안 표(단계 1~5-2, 현행/개편 후 열: 1온라인신청·2본인인증·3기본정보입력·4개별정보입력·4-1금융정보 제공동의·4-2가구정보·4-3수급자여부확인동의·5개별정보입력2·5-1소득재산신고·5-2추가서류)가 보이며, 심사기간·최초지급일 관련 수치는 없음

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
![review-period-first-payment](review-period-first-payment.png)

## 다음
- 이 보고서와 캡처를 보고 승인 → 배치가 다 끝나면 한 번에 커밋·푸시 (pre-push 게이트가 한 번 더 본다). 자동 푸시는 없다.
- 산출물: scripts/output/{plan,stage2,outline,factsheet,spec}-review-period-first-payment.* · source-review-period-first-payment.txt · captures/review-period-first-payment-*.png
