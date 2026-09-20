# ❌ 실패 — local-income-tax-interim

- 타이틀: 종합소득세 중간예납에 지방소득세도 있나요, 소득세분 지방세 납부 여부 (spec 고정 — 사장님이 줌)
- 키워드: 종합소득세 중간예납 · 허브: 종합소득세 중간예납이란 무엇인가요, 고지 대상 기준과 꼭 내야 하는지 (/policy/income-tax-interim-payment) · 폴더: 중간예납
- 실행: 2026. 9. 20. 오후 12:31:06 · 총 1.4분 · 고친 횟수 0 · 모델 sonnet
- 정본으로 쓴 글: app/policy/[id]/[spoke]/content/실손보험/나이별실비보험료.tsx

## 단계별 시간·사용량
| 단계 | 시간 | 모델 호출 | 입력 토큰 | 출력 토큰 | 환산 $ |
|---|---|---|---|---|---|
| guard | 0.0분 | - | - | - | - |
| plan | 0.0분 | - | - | - | - |
| cta | 0.0분 | - | - | - | - |
| collect | 0.6분 | - | - | - | - |
| captures | 0.3분 | 1 | 100k | 634 | 0.12 |
| write | 0.4분 | 1 | 135k | 2k | 0.54 |
| **합계** | **1.4분** | **2** | **235k** | **3k** | **0.65** |

> 구독이라 실제 청구는 없습니다. 환산 $ 는 사용 한도를 얼마나 먹었는지의 척도입니다. 호출마다 고정비(시스템 프롬프트) 약 3만 토큰이 붙습니다.

## 설계도 (구성표)
- 타이틀·소제목: spec 고정 (글자 그대로)
1. 중간예납할 때 지방소득세도 같이 내나요?
2. 소득세분 지방세는 중간예납이 없나요?
3. 지방세 고지서는 따로 오나요?  ← 버튼 슬롯
4. 5월 신고 때 지방세는 어떻게 되나요?  ← 버튼 슬롯
- 상단 버튼: [내 중간예납 고지 조회하기] → /policy/income-tax-interim-payment/notice-timing-hometax-lookup/
- qa3 버튼: [중간예납 세액 계산하기] → /policy/income-tax-interim-payment/tax-calculation-half-rule/
- qa4 버튼: [5월 신고 환급 조회하기] → /policy/income-tax-interim-payment/prepaid-credit-may-refund/
  - ✓ /policy/income-tax-interim-payment/notice-timing-hometax-lookup/ (내부 경로)
  - ✓ /policy/income-tax-interim-payment/tax-calculation-half-rule/ (내부 경로)
  - ✓ /policy/income-tax-interim-payment/prepaid-credit-may-refund/ (내부 경로)
- 출처: https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95 , ✗ https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%A7%80%EB%B0%A9%EC%84%B8%EB%B2%95 , ✗ https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%A7%80%EB%B0%A9%EC%84%B8%EB%B2%95%20%EC%8B%9C%ED%96%89%EB%A0%B9
- 오해 소지: 중간예납 고지서에 지방소득세가 이미 포함돼 있다고 오해 / 지방세도 11월에 미리 중간예납으로 내야 한다고 오해

## 증거
- 추출본 scripts/output/source-local-income-tax-interim.txt 371431자 · 캡처 3장 (scripts/output/captures/local-income-tax-interim-*.png)
  - local-income-tax-interim-1.png: 국가법령정보센터 소득세법 조문 화면([시행 2026.7.1.] [법률 제21221호]), 제1조(목적)·제1조의2(정의)·제2조(납세의무) 조문만 보이고 중간예납 관련 조문은 화면에 없음
  - local-income-tax-interim-2.png: 국가법령정보센터 지방세법 조문 화면([시행 2026.7.1.] [법률 제21308호], 입법예고 표시), 제1조(목적)~제5조(지방세기본법 및 지방세징수법의 적용)까지만 보이고 중간예납 관련 조문은 화면 밖(스크롤 아래)
  - local-income-tax-interim-3.png: 국가법령정보센터 지방세법 시행령 화면([시행 2026.9.18.] [대통령령 제36586호]), 제1조(목적)~제4조(건축물 등의 시가표준액 산정기준)까지만 보이고 중간예납 세율·기한 등 수치는 화면에 없음

## 오류
```
Error: 작성 중단 — 모델이 근거 부족을 알렸다: 추출본에 소득세법 제65조(중간예납)·지방세법 개인지방소득세 관련 조문의 실제 본문이 없다 — 소득세법 추출본은 목차에 제65조(중간예납) 항목만 있고 조문 내용은 캡처되지 않았으며(제64조의4 다음 '중간 생략' 후 바로 부칙으로 넘어감), 지방세법·지방세법 시행령 추출본은 캡처 메모대로 제1조~제5조(목적·정의 등)까지만 담겨 있어 중간예납·지방소득세 관련 조문은 화면 밖이다. 이 spec의 4개 소제목(지방소득세 동시납부 여부·중간예납 유무·고지서 별도 여부·5월 신고 처리) 중 어느 것도 원문 근거로 답할 수 없다.
    at normalizeDraft (file:///c:/Users/user/gov-jjyu/scripts/article.mjs:510:27)
    at stageWrite (file:///c:/Users/user/gov-jjyu/scripts/article.mjs:523:17)
    at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
    at async timed (file:///c:/Users/user/gov-jjyu/scripts/article.mjs:180:16)
    at async runOne (file:///c:/Users/user/gov-jjyu/scripts/article.mjs:736:17)
    at async file:///c:/Users/user/gov-jjyu/scripts/article.mjs:817:20
```

## 메모
- 근거로 쓰지 않은 출처: https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%A7%80%EB%B0%A9%EC%84%B8%EB%B2%95 (본문에 주제어(종합소득세·중간예납)가 없다 — 다른 문서) / https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%A7%80%EB%B0%A9%EC%84%B8%EB%B2%95%20%EC%8B%9C%ED%96%89%EB%A0%B9 (본문에 주제어(종합소득세·중간예납)가 없다 — 다른 문서)

## 다음
- 같은 명령을 다시 실행하면 끝난 단계(설계도·추출본)는 재사용하고 멈춘 곳부터 이어서 돈다
