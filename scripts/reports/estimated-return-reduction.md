# ✅ 통과 — estimated-return-reduction

- 타이틀: 중간예납 추계액 신고로 세액이 줄어드나요, 대상 조건과 신고서 작성법 (spec 고정 — 사장님이 줌)
- 키워드: 종합소득세 중간예납 · 허브: 종합소득세 중간예납이란 무엇인가요, 고지 대상 기준과 꼭 내야 하는지 (/policy/income-tax-interim-payment) · 폴더: 중간예납
- 실행: 2026. 9. 20. 오전 10:27:18 · 총 2.1분 · 고친 횟수 0 · 모델 sonnet
- 글: app/policy/[id]/[spoke]/content/중간예납/중간예납추계신고.tsx → https://gov.jjyu.co.kr/policy/income-tax-interim-payment/estimated-return-reduction/
- 정본으로 쓴 글: app/policy/[id]/[spoke]/content/실손보험/나이별실비보험료.tsx

## 단계별 시간·사용량
| 단계 | 시간 | 모델 호출 | 입력 토큰 | 출력 토큰 | 환산 $ |
|---|---|---|---|---|---|
| guard | 0.0분 | - | - | - | - |
| plan | 0.0분 | - | - | - | - |
| cta | 0.0분 | - | - | - | - |
| collect | 0.2분 | - | - | - | - |
| captures | 0.5분 | 1 | 99k | 1k | 0.12 |
| write | 0.0분 | - | - | - | - |
| gates | 1.4분 | - | - | - | - |
| **합계** | **2.1분** | **1** | **99k** | **1k** | **0.12** |

> 구독이라 실제 청구는 없습니다. 환산 $ 는 사용 한도를 얼마나 먹었는지의 척도입니다. 호출마다 고정비(시스템 프롬프트) 약 3만 토큰이 붙습니다.

## 설계도 (구성표)
- 타이틀·소제목: spec 고정 (글자 그대로)
1. 추계액 신고를 하면 세액이 줄어드나요?
2. 추계신고는 누가 할 수 있나요?
3. 신고서는 어떻게 작성하나요?  ← 버튼 슬롯
4. 결손이 났어도 신고해야 하나요?  ← 버튼 슬롯
- 상단 버튼: [중간예납 세액 다시 계산하기] → /policy/income-tax-interim-payment/tax-calculation-half-rule/
- qa3 버튼: [내 중간예납 대상 점검하기] → /policy/income-tax-interim-payment
- qa4 버튼: [홈택스 고지세액 먼저 조회하기] → /policy/income-tax-interim-payment/notice-timing-hometax-lookup/
  - ✓ /policy/income-tax-interim-payment/tax-calculation-half-rule/ (내부 경로)
  - ✓ /policy/income-tax-interim-payment (내부 경로)
  - ✓ /policy/income-tax-interim-payment/notice-timing-hometax-lookup/ (내부 경로)
- 출처: https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95/%EC%A0%9C65%EC%A1%B0 , https://www.law.go.kr/lsLinkCommonInfo.do?lsJoLnkSeq=1032471989 , ✗ https://www.korea.kr/common/download.do?fileId=197512892&tblKey=GMN , https://www.korea.kr/briefing/pressReleaseView.do?newsId=156724560
- 오해 소지: 추계신고를 하면 무조건 세액이 줄어든다고 오해한다 (요건 미달이면 오히려 불이익) / 결손이 나면 신고 자체를 안 해도 된다고 착각한다 (무납부 신고가 따로 필요) / 고지서 금액과 추계신고 금액이 같은 것으로 혼동한다

## 증거
- 추출본 scripts/output/source-estimated-return-reduction.txt 17859자 · 캡처 3장 (scripts/output/captures/estimated-return-reduction-*.png)
  - estimated-return-reduction-1.png: 국가법령정보센터 소득세법(시행 2026.1.1, 법률 제21221호) 제65조(중간예납) 조문 화면 — 1항~9항, 세율은 '기본세율', 중간예납세액=중간예납기준액의 100분의 30, 신고기한 11월1일~11월30일, 하단에 '중간예납추계액=(중간예납기간 종료일까지 종합소득에 대한 감면세액·세액공제액·토지등매매차익 예정신고 산출세액·수시부과세액 및 원천징수세액)÷2×종합소득산출세액' 계산식 박스가 보임.
  - estimated-return-reduction-2.png: 국가법령정보센터 소득세법 시행령(시행 2026.7.1, 대통령령 제36343호) 제125조(중간예납추계액의 신고와 조사결정) 조문 화면 — ①법 제65조제3항 또는 제5항에 따른 신고서 제출 의무, ②미신고 시 법 제80조 준용 조사결정 규정만 있고 표나 수치는 없음.
  - estimated-return-reduction-4.png: 제목 '11월, 개인사업자는 중간예납 잊지 마세요'라는 블로그/뉴스형 페이지 캡처인데, 실제 이미지가 1400x12503px를 224x2000으로 축소 표시해 글자가 너무 작아 본문 문단·표의 구체적 수치·항목명은 읽을 수 없음(스크롤이 매우 긴 페이지, 하단에 초록색 배너·홈택스로 보이는 스크린샷 삽입만 형태로 식별됨).

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

## 메모
- 근거로 쓰지 않은 출처: https://www.korea.kr/common/download.do?fileId=197512892&tblKey=GMN (열리지 않음)

## 렌더 캡처
![estimated-return-reduction](estimated-return-reduction.png)

## 다음
- 이 보고서와 캡처를 보고 승인 → 배치가 다 끝나면 한 번에 커밋·푸시 (pre-push 게이트가 한 번 더 본다). 자동 푸시는 없다.
- 산출물: scripts/output/{plan,stage2,outline,factsheet,spec}-estimated-return-reduction.* · source-estimated-return-reduction.txt · captures/estimated-return-reduction-*.png
