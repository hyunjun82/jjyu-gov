# ✅ 통과 — payment-suspension

- 타이틀: 기초연금 지급정지 사유 4가지, 해외 체류 기준과 다시 받는 방법 (spec 고정 — 사장님이 줌)
- 키워드: 기초연금 · 허브: 기초연금 월 34만9700원, 소득인정액 기준과 국민연금 감액 여부 (/policy/basic-pension) · 폴더: 기초연금
- 실행: 2026. 9. 19. 오후 7:39:24 · 총 14.4분 · 고친 횟수 1 · 모델 sonnet
- 글: app/policy/[id]/[spoke]/content/기초연금/지급정지사유.tsx → https://gov.jjyu.co.kr/policy/basic-pension/payment-suspension/
- 정본으로 쓴 글: app/policy/[id]/[spoke]/content/실손보험/나이별실비보험료.tsx

## 단계별 시간·사용량
| 단계 | 시간 | 모델 호출 | 입력 토큰 | 출력 토큰 | 환산 $ |
|---|---|---|---|---|---|
| guard | 0.0분 | - | - | - | - |
| plan | 6.0분 | 3 | 277k | 30k | 0.87 |
| cta | 0.0분 | - | - | - | - |
| collect | 0.6분 | - | - | - | - |
| captures | 0.3분 | 1 | 101k | 751 | 0.12 |
| write | 3.6분 | 1 | 130k | 22k | 0.70 |
| gates | 2.9분 | - | - | - | - |
| fix | 0.9분 | 1 | 127k | 7k | 0.55 |
| **합계** | **14.4분** | **6** | **635k** | **59k** | **2.24** |

> 구독이라 실제 청구는 없습니다. 환산 $ 는 사용 한도를 얼마나 먹었는지의 척도입니다. 호출마다 고정비(시스템 프롬프트) 약 3만 토큰이 붙습니다.

## 설계도 (구성표)
- 타이틀·소제목: spec 고정 (글자 그대로)
1. 기초연금이 끊기는 경우는 어떤 경우인가요?
2. 해외에 얼마나 나가 있으면 끊기나요?
3. 요양원·병원에 오래 있어도 끊기나요?  ← 버튼 슬롯
4. 끊긴 뒤 다시 받으려면 어떻게 하나요?  ← 버튼 슬롯
- 상단 버튼: [기초연금 조건 다시 살피기] → /policy/basic-pension
- qa3 버튼: [정지 해제 재신청 시기 챙기기] → /policy/basic-pension/rejection-reason-reapply/
- qa4 버튼: [재개 후 입금일 알아두기] → /policy/basic-pension/review-period-first-payment/
  - ✓ /policy/basic-pension (내부 경로)
  - ✓ /policy/basic-pension/rejection-reason-reapply/ (내부 경로)
  - ✓ /policy/basic-pension/review-period-first-payment/ (내부 경로)
- 출처: https://law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95%20%EC%8B%9C%ED%96%89%EB%A0%B9 , https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95 , https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95%EC%8B%9C%ED%96%89%EA%B7%9C%EC%B9%99
- 오해 소지: 해외여행만 다녀와도 바로 끊긴다고 오해하지만, 짧은 여행이 아니라 일정 일수 이상 체류가 기준입니다 / 한번 정지되면 영영 못 받는다고 생각하지만, 사유가 없어지면 재신청으로 다시 받을 수 있습니다 / 요양원·병원에 입원하면 무조건 정지된다고 오해하지만, 정지 사유에 해당하는지는 별도로 확인해야 합니다

## 증거
- 추출본 scripts/output/source-payment-suspension.txt 65072자 · 캡처 3장 (scripts/output/captures/payment-suspension-*.png)
  - payment-suspension-1.png: 국가법령정보센터, 기초연금법 시행령[시행 2026.7.30., 대통령령 제36371호] 제2조(소득의 범위) 조문 화면, 표는 없고 근로소득·사업소득·재산소득·공적이전소득 가~다목의 법령 인용 목록만 보임
  - payment-suspension-2.png: 국가법령정보센터, 기초연금법[시행 2025.10.1., 법률 제21065호] 제1조(목적)~제4조(국가와 지방자치단체의 책무) 조문 화면, 제3조②에 '선정기준액은 65세 이상 기초연금 수급자 중 100분의 70 수준'이라는 문구가 보임, 표는 없음
  - payment-suspension-3.png: 국가법령정보센터, 기초연금법 시행규칙[시행 2026.7.30., 보건복지부령 제1180호] 제2조(소득평가액 산정방법)~제3조(재산가액의 산정) 조문 화면, 제2조①에 제외 소득 1~14호 목록(국민기초생활보장급여, 장애수당, 양육보조금, 실업급여 등) 나열, 제2조②에 '1촌 이내 직계비속 소유 주택의 시가표준액에 10000분의 78을 곱한 후 12로 나눈 금액' 문구 보임, 표는 없음

## 검사 (회차별)
| 검사 | 초안 | 고침 1 |
|---|---|---|
| tsc (타입) | ✓ | ✓ |
| 원문 대조 (check-source-match) | ✗ | ✓ |
| 수치 ↔ 출처 (check-source-backing) | ✓ | ✓ |
| 버튼 도배 (check-button-variety) | ✓ | ✓ |
| 승인 도장 (check-stage-approval) | ✓ | ✓ |
| 출처 링크 (check-source-links) | ✓ | ✓ |
| 배선 (verify-integrity) | ✓ | ✓ |
| 화면 (dev 렌더) | ✓ | ✓ |

## 실패 내용 — 초안
### 원문 대조 (check-source-match)
```
 원문 대조 — 글의 숫자는 추출본에, 추출본의 단서는 글에
❌ 기초연금/지급정지사유.tsx
   [오차 의심] 원문 추출본에 없는 숫자 1개:
      · 59일
      → 원문에 있으면 추출본/팩트시트에 그 부분을 옮겨 적는다. 없으면 글에서 뺀다.
 1개 글에서 어긋남 — 위 항목을 원문과 다시 맞춘다
```

## 렌더 캡처
![payment-suspension](payment-suspension.png)

## 다음
- 이 보고서와 캡처를 보고 승인 → 배치가 다 끝나면 한 번에 커밋·푸시 (pre-push 게이트가 한 번 더 본다). 자동 푸시는 없다.
- 산출물: scripts/output/{plan,stage2,outline,factsheet,spec}-payment-suspension.* · source-payment-suspension.txt · captures/payment-suspension-*.png
