# ✅ 통과 — prepaid-credit-may-refund

- 타이틀: 중간예납 낸 돈은 내년 5월에 어떻게 되나요, 기납부세액 공제와 환급 (spec 고정 — 사장님이 줌)
- 키워드: 종합소득세 중간예납 · 허브: 종합소득세 중간예납이란 무엇인가요, 고지 대상 기준과 꼭 내야 하는지 (/policy/income-tax-interim-payment) · 폴더: 중간예납
- 실행: 2026. 9. 20. 오전 11:26:57 · 총 17.1분 · 고친 횟수 1 · 모델 sonnet
- 글: app/policy/[id]/[spoke]/content/중간예납/기납부세액환급.tsx → https://gov.jjyu.co.kr/policy/income-tax-interim-payment/prepaid-credit-may-refund/
- 정본으로 쓴 글: app/policy/[id]/[spoke]/content/실손보험/나이별실비보험료.tsx

## 단계별 시간·사용량
| 단계 | 시간 | 모델 호출 | 입력 토큰 | 출력 토큰 | 환산 $ |
|---|---|---|---|---|---|
| guard | 0.1분 | - | - | - | - |
| plan | 4.1분 | 2 | 174k | 20k | 0.48 |
| cta | 0.0분 | - | - | - | - |
| collect | 0.8분 | - | - | - | - |
| captures | 0.5분 | 1 | 257k | 1k | 0.16 |
| write | 7.9분 | 1 | 116k | 44k | 0.86 |
| gates | 2.4분 | - | - | - | - |
| fix | 1.3분 | 1 | 114k | 8k | 0.50 |
| **합계** | **17.1분** | **5** | **660k** | **73k** | **1.99** |

> 구독이라 실제 청구는 없습니다. 환산 $ 는 사용 한도를 얼마나 먹었는지의 척도입니다. 호출마다 고정비(시스템 프롬프트) 약 3만 토큰이 붙습니다.

## 설계도 (구성표)
- 타이틀·소제목: spec 고정 (글자 그대로)
1. 중간예납으로 낸 세금은 어디에 반영되나요?
2. 5월 신고 때 기납부세액으로 공제되나요?
3. 중간예납이 실제 세금보다 많으면 환급되나요?  ← 버튼 슬롯
4. 환급금은 언제 들어오나요?  ← 버튼 슬롯
- 상단 버튼: [홈택스로 세액 알아두기] → /policy/income-tax-interim-payment/notice-timing-hometax-lookup/
- qa3 버튼: [내 중간예납액 계산해보기] → /policy/income-tax-interim-payment/tax-calculation-half-rule/
- qa4 버튼: [중간예납 전체 내용 확인하기] → /policy/income-tax-interim-payment
  - ✓ /policy/income-tax-interim-payment/notice-timing-hometax-lookup/ (내부 경로)
  - ✓ /policy/income-tax-interim-payment/tax-calculation-half-rule/ (내부 경로)
  - ✓ /policy/income-tax-interim-payment (내부 경로)
- 출처: https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95 , https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95/%EC%A0%9C65%EC%A1%B0 , ✗ https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95/%EC%A0%9C70%EC%A1%B0 , https://www.law.go.kr/%ED%96%89%EC%A0%95%EA%B7%9C%EC%B9%99/%EC%86%8C%EB%93%9D%EC%84%B8%EC%82%AC%EB%AC%B4%EC%B2%98%EB%A6%AC%EA%B7%9C%EC%A0%95
- 오해 소지: 중간예납으로 낸 돈이 세금과 별개로 사라진다고 오해하는 경우가 많다 / 중간예납을 세금을 더 내는 추가 부담으로 착각하지만 실제로는 5월분 세금을 미리 내는 선납 개념이다

## 증거
- 추출본 scripts/output/source-prepaid-credit-may-refund.txt 430762자 · 캡처 4장 (scripts/output/captures/prepaid-credit-may-refund-*.png)
  - prepaid-credit-may-refund-1.png: 국가법령정보센터 소득세법 [시행 2026.7.1.][법률 제21221호] 본문 화면, 제1장 총칙 제1조(목적)·제1조의2(정의)·제2조(납세의무) 조문만 보이고 중간예납·환급 관련 내용은 없음
  - prepaid-credit-may-refund-2.png: 국가법령정보센터 소득세법 [시행 2026.1.1.] 제65조(중간예납) 전문 — 중간예납기준액의 2분의 1을 11월 30일까지 징수, 11월 1일~11월 15일 납부고지서 발급, 중간예납추계액이 중간예납기준액의 100분의 30 미만이면 11월 1일~11월 30일 신고 가능, 계산식 박스(종합소득 산출세액 ÷ 2 − 세액공제액 등)까지 표시
  - prepaid-credit-may-refund-3.png: 국가법령정보센터 소득세법 [시행 2026.1.1.] 제70조(종합소득과세표준 확정신고) 전문 — 신고기한은 과세기간 다음 연도 5월 1일부터 5월 31일까지, 세무사·공인회계사·변호사가 작성하는 조정반 관련 제1~7항, 2021.11.23 헌법불합치 결정 각주 표시
  - prepaid-credit-may-refund-4.png: 국가법령정보센터 행정규칙 소득세사무처리규정 [시행 2026.7.1.][국세청훈령 제2743호] 제1장 총칙 제1조(목적)·제2조(정의) 1~22호 용어 정의(소득자료·금융소득자료·과세자료·신고내용 확인·현장확인 등) 나열, 환급·중간예납 관련 조문은 아직 안 보임

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
❌ [중간예납] 상단 버튼 — 끝 어절 "조회하기" 이 3/6개 (50%). 상한 40%. 같은 틀을 돌려쓰고 있다.
❌ [중간예납] 상단 버튼 — 첫 어절 "중간예납" 이 3/6개 (50%). 상한 40%. 문장을 같은 말로 열고 있다.
```

## 메모
- 근거로 쓰지 않은 출처: https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95/%EC%A0%9C70%EC%A1%B0 (본문에 주제어(종합소득세·중간예납)가 없다 — 다른 문서)

## 렌더 캡처
![prepaid-credit-may-refund](prepaid-credit-may-refund.png)

## 다음
- 이 보고서와 캡처를 보고 승인 → 배치가 다 끝나면 한 번에 커밋·푸시 (pre-push 게이트가 한 번 더 본다). 자동 푸시는 없다.
- 산출물: scripts/output/{plan,stage2,outline,factsheet,spec}-prepaid-credit-may-refund.* · source-prepaid-credit-may-refund.txt · captures/prepaid-credit-may-refund-*.png
