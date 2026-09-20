# ✅ 통과 — notice-timing-hometax-lookup

- 타이틀: 종합소득세 중간예납 고지서 언제 오나요, 고지세액 조회와 금액이 다를 때 (spec 고정 — 사장님이 줌)
- 키워드: 종합소득세 중간예납 · 허브: 종합소득세 중간예납이란 무엇인가요, 고지 대상 기준과 꼭 내야 하는지 (/policy/income-tax-interim-payment) · 폴더: 중간예납
- 실행: 2026. 9. 20. 오전 10:23:40 · 총 2.9분 · 고친 횟수 1 · 모델 sonnet
- 글: app/policy/[id]/[spoke]/content/중간예납/중간예납고지조회.tsx → https://gov.jjyu.co.kr/policy/income-tax-interim-payment/notice-timing-hometax-lookup/
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
| fix | 1.1분 | 1 | 114k | 6k | 0.47 |
| gates | 1.7분 | - | - | - | - |
| **합계** | **2.9분** | **1** | **114k** | **6k** | **0.47** |

> 구독이라 실제 청구는 없습니다. 환산 $ 는 사용 한도를 얼마나 먹었는지의 척도입니다. 호출마다 고정비(시스템 프롬프트) 약 3만 토큰이 붙습니다.

## 설계도 (구성표)
- 타이틀·소제목: spec 고정 (글자 그대로)
1. 중간예납 고지서는 언제쯤 오나요?
2. 고지세액은 홈택스 어디서 조회하나요?
3. 고지 내역이 안 뜨면 어떻게 하나요?  ← 버튼 슬롯
4. 고지 금액이 예상과 다르면 왜 그런가요?  ← 버튼 슬롯
- 상단 버튼: [고지세액 홈택스 조회하기] → https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?mi=2237&cntntsId=7774
- qa3 버튼: [중간예납 대상 기준 확인하기] → /policy/income-tax-interim-payment
- qa4 버튼: [중간예납 소식 챙기기] → https://www.korea.kr/briefing/pressReleaseView.do?newsId=156724560
  - ✓ https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?mi=2237&cntntsId=7774 (국세청>국세신고안내>개인신고안내>종합소득세>중간예납 안내> 중간예납세액의 계산 및 납부방법)
  - ✓ /policy/income-tax-interim-payment (내부 경로)
  - ✓ https://www.korea.kr/briefing/pressReleaseView.do?newsId=156724560 (11월, 개인사업자는 중간예납 잊지 마세요 - 보도자료 | 브리핑룸 | 대한민국 정책브리핑)
- 출처: https://www.korea.kr/news/policyNewsView.do?newsId=148954110 , https://www.korea.kr/briefing/pressReleaseView.do?newsId=156724560 , https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?mi=2237&cntntsId=7774 , https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95
- 오해 소지: 고지서를 못 받으면 낼 필요가 없다고 착각하지만, 발송 오류나 주소 변경 때문일 수 있어 직접 확인이 필요하다 / 고지된 세액을 무조건 그대로 내야 한다고 생각하지만, 실적이 안 좋으면 추계액 신고로 금액을 바꿀 수 있다 / 홈택스에 안 뜨면 대상이 아니라고 넘겨짚지만, 조회 메뉴나 공동인증서 로그인 정보를 잘못 찾은 경우가 많다

## 증거
- 추출본 scripts/output/source-notice-timing-hometax-lookup.txt 405761자 · 캡처 4장 (scripts/output/captures/notice-timing-hometax-lookup-*.png)
  - notice-timing-hometax-lookup-1.png: 정책브리핑(korea.kr) 2025.11.06 기사 '11월은 종합소득세 중간예납의 달' — 개인사업자 중간예납 12월 1일까지 납부, 50만원 미만·이자배당연금근로기타소득자 등 고지 제외 대상자, 주계액 신고 기한 12월 1일(월), 분할납부 기준금액 2025년 12월 1일 이후 2026년 2월 2일까지, 재난·재해 시 최대 9개월(중소기업 2년) 연장 안내
  - notice-timing-hometax-lookup-2.png: 위 정책브리핑 기사와 유사한 카드뉴스형 페이지를 길게 이어붙인 캡처로 글자가 작아 잘 안 보이고, 중간에 홈택스 로그인/신고 화면 스크린샷 2개(붉은 테두리 강조 박스 포함)가 섞여 있으나 구체적 행·열 수치는 해상도상 식별 불가
  - notice-timing-hometax-lookup-3.png: 국세청(nts.go.kr) '중간예납 안내' 페이지 — '금융기관별 전자납부 방법' 표에 은행명(경남·광주·국민·기업·농협중앙회·대구·부산·수협중앙회·신한·하나·우체국·전북·제일·제주·우리은행, 삼성카드·신한카드·하나카드)별 인터넷주소·ARS전화번호(예: 국민은행 1588-9999, 농협중앙회 1588-2100)·ARS 연결방법이 행마다 기재됨
  - notice-timing-hometax-lookup-4.png: 국가법령정보센터(law.go.kr) 소득세법 조문 화면 — 상단에 [시행 2026.7.1.] [법률 제21221호, 2025.12.23., 일부개정] 표시, 제1장 총칙에서 제1조(목적)·제1조의2(정의)·제2조(납세의무) 조문 전문이 보이고 중간예납 관련 조문은 이 화면 범위에는 없음

## 검사 (회차별)
| 검사 | 초안 | 고침 1 |
|---|---|---|
| 사전 검사 (article-check) | ✗ | · |
| tsc (타입) | · | ✓ |
| 원문 대조 (check-source-match) | · | ✓ |
| 수치 ↔ 출처 (check-source-backing) | · | ✓ |
| 버튼 도배 (check-button-variety) | · | ✓ |
| 승인 도장 (check-stage-approval) | · | ✓ |
| 출처 링크 (check-source-links) | · | ✓ |
| 배선 (verify-integrity) | · | ✓ |
| 화면 (dev 렌더) | · | ✓ |

## 실패 내용 — 초안
### 사전 검사 (article-check)
```
❌ keyFactsHighlights "고지 대상" 의 "중간예납 대상자" 가 그 값 안에 없다
```

## 렌더 캡처
![notice-timing-hometax-lookup](notice-timing-hometax-lookup.png)

## 다음
- 이 보고서와 캡처를 보고 승인 → 배치가 다 끝나면 한 번에 커밋·푸시 (pre-push 게이트가 한 번 더 본다). 자동 푸시는 없다.
- 산출물: scripts/output/{plan,stage2,outline,factsheet,spec}-notice-timing-hometax-lookup.* · source-notice-timing-hometax-lookup.txt · captures/notice-timing-hometax-lookup-*.png
