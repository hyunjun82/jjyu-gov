# ✅ 통과 — 2027-increase

- 타이틀: 2027년 기초연금 얼마로 오르나, 확정 시점과 내 수령액 미리 조회 (spec 고정 — 사장님이 줌)
- 키워드: 기초연금 · 허브: 기초연금 월 34만9700원, 소득인정액 기준과 국민연금 감액 여부 (/policy/basic-pension) · 폴더: 기초연금
- 실행: 2026. 9. 19. 오후 8:37:31 · 총 1.9분 · 고친 횟수 0 · 모델 sonnet
- 글: app/policy/[id]/[spoke]/content/기초연금/내년인상시기.tsx → https://gov.jjyu.co.kr/policy/basic-pension/2027-increase/
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
| gates | 1.8분 | - | - | - | - |
| **합계** | **1.9분** | **0** | **0** | **0** | **0.00** |

> 구독이라 실제 청구는 없습니다. 환산 $ 는 사용 한도를 얼마나 먹었는지의 척도입니다. 호출마다 고정비(시스템 프롬프트) 약 3만 토큰이 붙습니다.

## 설계도 (구성표)
- 타이틀·소제목: spec 고정 (글자 그대로)
1. 2027년 금액은 언제 정해지나요?
2. 매년 얼마나 오르는지는 무엇으로 정하나요?
3. 선정기준액도 금액과 같이 바뀌나요?  ← 버튼 슬롯
4. 확정 전에 내 수령액을 미리 볼 수 있나요?  ← 버튼 슬롯
- 상단 버튼: [내 지급액 계산하기] → /policy/basic-pension/calculation-formula/
- qa3 버튼: [인상 시기 폐지설 확인하기] → /policy/basic-pension/increase-400k-abolition-rumor/
- qa4 버튼: [수령액 모의계산 열기] → https://basicpension.mohw.go.kr/menu.es?mid=a10303000000
  - ✓ /policy/basic-pension/calculation-formula/ (내부 경로)
  - ✓ /policy/basic-pension/increase-400k-abolition-rumor/ (내부 경로)
  - ✓ /policy/basic-pension/selection-threshold-single-couple/ (내부 경로)
  - ✗ https://basicpension.mohw.go.kr/menu.es?mid=a10303000000
- 출처: https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95 , https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95%20%EC%8B%9C%ED%96%89%EB%A0%B9 , https://www.law.go.kr/%ED%96%89%EC%A0%95%EA%B7%9C%EC%B9%99/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EC%A7%80%EA%B8%89%EB%8C%80%EC%83%81%EC%9E%90%EC%84%A0%EC%A0%95%EA%B8%B0%EC%A4%80%EC%95%A1,%EA%B8%B0%EC%A4%80%EC%97%B0%EA%B8%88%EC%95%A1%EB%B0%8F%EC%86%8C%EB%93%9D%EC%9D%B8%EC%A0%95%EC%95%A1%EC%82%B0%EC%A0%95%EC%84%B8%EB%B6%80%EA%B8%B0%EC%A4%80%EC%97%90%EA%B4%80%ED%95%9C%EA%B3%A0%EC%8B%9C , ✗ https://www.fss.or.kr/fss/lifeplan/lifeplanIndex/index.do?menuNo=201101
- 오해 소지: 40만원으로 이미 확정됐다고 알고 있지만 실제 고시 전까지는 확정된 금액이 아니다 / 물가상승률만 따지면 된다고 생각하지만 선정기준액도 같이 바뀌어 대상에서 빠질 수 있다

## 증거
- 추출본 scripts/output/source-2027-increase.txt 57054자 · 캡처 4장 (scripts/output/captures/2027-increase-*.png)
  - 2027-increase-1.png: 국가법령정보센터 '기초연금법' [시행 2025.10.1.][법률 제21065호] 조문화면 — 제3조(기초연금 수급권자의 범위) ①65세 이상·소득인정액이 선정기준액 이하, ②선정기준액은 65세 이상 노인 중 기초연금 수급자가 100분의 70 수준이 되도록 정함, 제1조·제2조(정의)·제4조(국가와 지방자치단체의 책무) 조문 텍스트만 보이고 금액·표는 없음.
  - 2027-increase-2.png: 국가법령정보센터 '기초연금법 시행령' [시행 2026.7.30.][대통령령 제36371호] 화면 — 제2조(소득의 범위) 근로소득·사업소득·재산소득·공적이전소득 각 호 나열(예: 1.근로소득-소득세법 제20조제1항, 3.재산소득 가.이자소득 나.연금소득), 금액 수치는 보이지 않고 법조문 인용만 있음.
  - 2027-increase-3.png: 국가법령정보센터 '기초연금 지급대상자 선정기준액, 기준연금액 및 소득인정액 산정 세부기준에 관한 고시' [시행 2026.7.30.][보건복지부고시 제2026-156호] — 제2조: 2026년도 선정기준액 배우자 없는 노인가구 월 소득인정액 2,470,000원, 배우자 있는 노인가구 3,952,000원 / 제3조: 2026년도 기준연금액은 34만9천7백원 / 제4조: 무료임차소득 부과 기준 주택 시가표준액 6억원 이상 / 제6조: 근로소득 기본공제액 월 116만원, 이자소득 제외 월 4만원, 보상금·수당 제외 월 43만원 이하.
  - 2027-increase-4.png: 금융감독원 '통합연금포털' 메인화면 — 상단 배너 '국민연금, 퇴직연금 등 모든 정보를 한곳에', 카드 4개(연금상품 비교공시·내 연금조회·재무설계·연금 자료실·연금세제 안내), 공지사항 목록(2024년 연금저축 운용현황 분석 25-08-01 등)과 보도자료 목록(2025.9.5. 퇴직연금감독규정시행세칙 일부개정 25-09-05 등)만 보이고 기초연금 2027년 인상 관련 수치는 없음.

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
- 근거로 쓰지 않은 출처: https://www.fss.or.kr/fss/lifeplan/lifeplanIndex/index.do?menuNo=201101 (본문에 주제어(기초연금)가 없다 — 다른 문서)

## 렌더 캡처
![2027-increase](2027-increase.png)

## 다음
- 이 보고서와 캡처를 보고 승인 → 배치가 다 끝나면 한 번에 커밋·푸시 (pre-push 게이트가 한 번 더 본다). 자동 푸시는 없다.
- 산출물: scripts/output/{plan,stage2,outline,factsheet,spec}-2027-increase.* · source-2027-increase.txt · captures/2027-increase-*.png
