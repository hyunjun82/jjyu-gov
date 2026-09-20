# ✅ 통과 — vat-preliminary-notice-difference

- 타이틀: 부가세 예정고지와 종합소득세 중간예납 차이, 같이 왔을 때 납부 순서 (spec 고정 — 사장님이 줌)
- 키워드: 종합소득세 중간예납 · 허브: 종합소득세 중간예납이란 무엇인가요, 고지 대상 기준과 꼭 내야 하는지 (/policy/income-tax-interim-payment) · 폴더: 중간예납
- 실행: 2026. 9. 20. 오후 12:27:35 · 총 13.8분 · 고친 횟수 2 · 모델 sonnet
- 글: app/policy/[id]/[spoke]/content/중간예납/예정고지중간예납차이.tsx → https://gov.jjyu.co.kr/policy/income-tax-interim-payment/vat-preliminary-notice-difference/
- 정본으로 쓴 글: app/policy/[id]/[spoke]/content/실손보험/나이별실비보험료.tsx

## 단계별 시간·사용량
| 단계 | 시간 | 모델 호출 | 입력 토큰 | 출력 토큰 | 환산 $ |
|---|---|---|---|---|---|
| guard | 0.0분 | - | - | - | - |
| plan | 0.0분 | - | - | - | - |
| cta | 0.0분 | - | - | - | - |
| collect | 0.0분 | - | - | - | - |
| captures | 0.0분 | - | - | - | - |
| write | 5.9분 | 1 | 242k | 35k | 0.86 |
| gates | 4.8분 | - | - | - | - |
| fix | 2.9분 | 2 | 210k | 18k | 0.91 |
| **합계** | **13.8분** | **3** | **452k** | **53k** | **1.77** |

> 구독이라 실제 청구는 없습니다. 환산 $ 는 사용 한도를 얼마나 먹었는지의 척도입니다. 호출마다 고정비(시스템 프롬프트) 약 3만 토큰이 붙습니다.

## 설계도 (구성표)
- 타이틀·소제목: spec 고정 (글자 그대로)
1. 부가세 예정고지와 중간예납은 어떻게 다른가요?
2. 두 고지서가 같은 달에 오기도 하나요?
3. 매출이 없는데 둘 다 내야 하나요?  ← 버튼 슬롯
4. 둘 중 하나만 먼저 내도 되나요?  ← 버튼 슬롯
- 상단 버튼: [중간예납 고지시기 조회하기] → /policy/income-tax-interim-payment/notice-timing-hometax-lookup/
- qa3 버튼: [중간예납 대상 판단하기] → /policy/income-tax-interim-payment
- qa4 버튼: [중간예납 납부기한 챙기기] → /policy/income-tax-interim-payment/payment-deadline-november/
  - ✓ /policy/income-tax-interim-payment/notice-timing-hometax-lookup/ (내부 경로)
  - ✓ /policy/income-tax-interim-payment (내부 경로)
  - ✓ /policy/income-tax-interim-payment/payment-deadline-november/ (내부 경로)
- 출처: https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95/%EC%A0%9C65%EC%A1%B0 , ✗ https://www.law.go.kr/법령/부가가치세법/제48조 , ✗ https://www.law.go.kr/법령/부가가치세법 시행령/제90조 , https://www.law.go.kr/%ED%96%89%EC%A0%95%EA%B7%9C%EC%B9%99/%EC%86%8C%EB%93%9D%EC%84%B8%EC%82%AC%EB%AC%B4%EC%B2%98%EB%A6%AC%EA%B7%9C%EC%A0%95
- 오해 소지: 두 고지서를 하나로 착각해 한 번만 납부하면 되는 줄 안다 / 매출이 없으면 부가세 예정고지와 중간예납이 둘 다 자동으로 면제된다고 오해한다 / 먼저 온 고지서부터 내면 나머지는 순서상 늦게 내도 가산세가 없다고 오해한다

## 증거
- 추출본 scripts/output/source-vat-preliminary-notice-difference.txt 59345자 · 캡처 4장 (scripts/output/captures/vat-preliminary-notice-difference-*.png)
  - vat-preliminary-notice-difference-1.png: 국가법령정보센터 소득세법 제65조(중간예납) 조문 화면 — ①중간예납세액은 직전 과세기간 종합소득세액의 1/2, 1천원 미만 단수 버림, 11월 30일까지 징수·11월 1~15일 납부고지서 발급, ③중간예납추계액이 중간예납기준액의 100분의 30 미만이면 11월 1~30일 신고 가능, 하단에 중간예납추계액 계산식 박스(종합소득산출세액÷2 - 감면세액등).
  - vat-preliminary-notice-difference-2.png: 국가법령정보센터 부가가치세법 제48조(예정신고와 납부) 조문 화면 — 표: 구분(제1기/제2기), 예정신고기간(제1기 1월1일~3월31일, 제2기 7월1일~9월30일), 신고는 예정신고기간 종료 후 25일 이내, ③개인사업자·법인은 직전 과세기간 납부세액의 50퍼센트(1천원 미만 단수 버림)로 결정해 25일까지 징수하되 징수할 금액 50만원 미만 등은 징수 제외.
  - vat-preliminary-notice-difference-3.png: 국가법령정보센터 부가가치세법 시행령 제90조(예정신고와 납부) 조문 화면 — 예정신고서 기재사항(인적사항·납부세액 및 계산근거·공제세액 및 계산근거·매출매입처별 세금계산서합계표 제출내용 등) 및 하단 표: 구분 1~7호(공제받지 못할 매입세액명세서, 신용카드매출전표등발행금액집계표, 전자화폐결제명세서, 신용카드매출전표등수령명세서, 부동산임대공급가액명세서+임대차계약서 사본, 현금매출명세서, 건물등감가상각자산취득명세서)와 각 제출서류 대응.
  - vat-preliminary-notice-difference-4.png: 국가법령정보센터 행정규칙 소득세사무처리규정(국세청훈령 제2743호, 2026.6.29 일부개정) 제1장 총칙 화면 — 제1조(목적), 제2조(정의) 1~22호 용어정의 나열(사업자·소득자료·금융소득자료·과세자료·신고내용확인·현장확인·전산매체·송부·통보·이송·반송·조회·인계인수·주소지서장·사업장서장·세무서장·소득세담당과장·부가가치세담당과장·조사담당과장·내부업무처리자·업무별처리자 등), 부가가치세 예정고지 관련 수치는 없음.

## 검사 (회차별)
| 검사 | 초안 | 고침 1 | 고침 2 |
|---|---|---|---|
| tsc (타입) | ✓ | ✓ | ✓ |
| 원문 대조 (check-source-match) | ✓ | ✓ | ✓ |
| 수치 ↔ 출처 (check-source-backing) | ✓ | ✓ | ✓ |
| 버튼 도배 (check-button-variety) | ✗ | ✗ | ✓ |
| 승인 도장 (check-stage-approval) | ✓ | ✓ | ✓ |
| 출처 링크 (check-source-links) | ✓ | ✓ | ✓ |
| 배선 (verify-integrity) | ✓ | ✓ | ✓ |
| 화면 (dev 렌더) | ✓ | ✓ | ✓ |

## 실패 내용 — 초안
### 버튼 도배 (check-button-variety)
```
❌ [중간예납] 상단 버튼 — 같은 문장이 2번: "중간예납 고지세액 조회하기"
```

## 실패 내용 — 고침 1
### 버튼 도배 (check-button-variety)
```
❌ [중간예납] 상단 버튼 — 같은 문장이 2번: "내 중간예납 세액 조회하기"
```

## 메모
- 근거로 쓰지 않은 출처: https://www.law.go.kr/법령/부가가치세법/제48조 (본문에 주제어(종합소득세·중간예납)가 없다 — 다른 문서) / https://www.law.go.kr/법령/부가가치세법 시행령/제90조 (본문에 주제어(종합소득세·중간예납)가 없다 — 다른 문서)

## 렌더 캡처
![vat-preliminary-notice-difference](vat-preliminary-notice-difference.png)

## 다음
- 이 보고서와 캡처를 보고 승인 → 배치가 다 끝나면 한 번에 커밋·푸시 (pre-push 게이트가 한 번 더 본다). 자동 푸시는 없다.
- 산출물: scripts/output/{plan,stage2,outline,factsheet,spec}-vat-preliminary-notice-difference.* · source-vat-preliminary-notice-difference.txt · captures/vat-preliminary-notice-difference-*.png
