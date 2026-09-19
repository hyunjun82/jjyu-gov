# ✅ 통과 — birth-1962-apply-timing

- 타이틀: 1962년생 기초연금 신청 시기부터 생일 기준과 70세 상향 여부까지 (spec 고정 — 사장님이 줌)
- 키워드: 기초연금 · 허브: 기초연금 월 34만9700원, 소득인정액 기준과 국민연금 감액 여부 (/policy/basic-pension) · 폴더: 기초연금
- 실행: 2026. 9. 19. 오전 11:29:42 · 총 8.5분 · 고친 횟수 0 · 모델 sonnet
- 글: app/policy/[id]/[spoke]/content/기초연금/기초연금생일신청시기.tsx → https://gov.jjyu.co.kr/policy/basic-pension/birth-1962-apply-timing/
- 정본으로 쓴 글: app/policy/[id]/[spoke]/content/실손보험/나이별실비보험료.tsx

## 단계별 시간·사용량
| 단계 | 시간 | 모델 호출 | 입력 토큰 | 출력 토큰 | 환산 $ |
|---|---|---|---|---|---|
| guard | 0.0분 | - | - | - | - |
| plan | 0.0분 | - | - | - | - |
| cta | 0.0분 | - | - | - | - |
| collect | 0.0분 | - | - | - | - |
| captures | 0.0분 | - | - | - | - |
| write | 6.4분 | 1 | 254k | 43k | 0.99 |
| gates | 1.9분 | - | - | - | - |
| **합계** | **8.5분** | **1** | **254k** | **43k** | **0.99** |

> 구독이라 실제 청구는 없습니다. 환산 $ 는 사용 한도를 얼마나 먹었는지의 척도입니다. 호출마다 고정비(시스템 프롬프트) 약 3만 토큰이 붙습니다.

## 설계도 (구성표)
- 타이틀·소제목: spec 고정 (글자 그대로)
1. 1962년생은 언제부터 기초연금을 신청하나요?
2. 만 65세가 되는 달에 바로 신청하나요?
3. 생일이 월말이면 첫 지급이 밀리나요?  ← 버튼 슬롯
4. 수령 나이가 70세로 올라가는 게 확정인가요?  ← 버튼 슬롯
- 상단 버튼: [생일 한 달 전 신청하기] → /policy/basic-pension
- qa3 버튼: [필요서류 미리 준비하기] → /policy/basic-pension/required-documents/
- qa4 버튼: [지급일 늦어지는 경우 확인하기] → /policy/basic-pension/payment-day/
  - ✓ /policy/basic-pension (내부 경로)
  - ✓ /policy/basic-pension/required-documents/ (내부 경로)
  - ✓ /policy/basic-pension/payment-day/ (내부 경로)
- 출처: https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95/(20251001,21065,20251001)/%EC%A0%9C10%EC%A1%B0 , https://www.korea.kr/multi/mediaNewsView.do?newsId=148971263 , https://www.korea.kr/multi/visualNewsView.do?newsId=148969138 , https://www.korea.kr/news/policyNewsView.do?newsId=148971175
- 오해 소지: 만 65세 생일 당일부터만 신청 가능하다는 오해 — 실제로는 생일이 속한 달의 전달 1일부터 미리 신청 가능 / 생일이 월말이면 그 달 지급을 못 받는다는 오해 — 신청 시점과 지급 개시월 기준은 다름 / 수령 나이가 70세로 이미 확정됐다는 오해 — 제도 개선 논의 단계와 법 개정 확정은 다름

## 증거
- 추출본 scripts/output/source-birth-1962-apply-timing.txt 50305자 · 캡처 4장 (scripts/output/captures/birth-1962-apply-timing-*.png)
  - birth-1962-apply-timing-1.png: 법제처 국가법령정보센터 '기초연금법' 조문 화면(시행 2025.10.1, 법률 제21065호), 제10조(기초연금 지급의 신청)·제10조의2(관련 정보 제공)·제11조(조사·질문 등) 조문 전문이 보임
  - birth-1962-apply-timing-2.png: 정책브리핑(korea.kr) 보건복지부 2026.09.04자 기사 '1961년생이라면 주목! 기초연금, 생일 전에 미리 신청하세요' — 본문에 '만 65세가 되는 1961년생', '생일이 있는 달의 1개월 전부터 신청 가능', '생일이 10월이라면 → 9월 1일부터 신청 가능' 예시, 신청처로 행정복지센터·국민연금공단 지사·복지로 안내
  - birth-1962-apply-timing-3.png: 정책브리핑 보건복지부 2026.07.31자 카드뉴스 '기초연금 수급희망 이력관리 신청간주 제도 시행(7/30~)' — 신청 연 2회(1월, 7월) 정기 조사, 상담 전화 기간 2주(7.30~8.14), 지급 결정 소요 30~60일(8~9월 결과 통보), 결정 시 신청일이 속한 달(7월)분부터 소급 지급 안내
  - birth-1962-apply-timing-4.png: 정책브리핑 정책뉴스 2026.09.03자 기사 '이 대통령, 기초연금의 국내 거주기간 요건 설정 등 제도 개선 지시' — 제45차 수석보좌관회의에서 국적 취득 시기와 무관하게 지급되는 기초연금의 형평성 문제 지적, 국내 거주기간 요건 설정 등 제도 개선 지시 내용, 구체적 수치나 기준표는 본문에 없음

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
![birth-1962-apply-timing](birth-1962-apply-timing.png)

## 다음
- 이 보고서와 캡처를 보고 승인 → 배치가 다 끝나면 한 번에 커밋·푸시 (pre-push 게이트가 한 번 더 본다). 자동 푸시는 없다.
- 산출물: scripts/output/{plan,stage2,outline,factsheet,spec}-birth-1962-apply-timing.* · source-birth-1962-apply-timing.txt · captures/birth-1962-apply-timing-*.png
