# ✅ 통과 — auto-payment-notice

- 타이틀: 기초연금 자동지급 되나요, 65세 안내 통지와 장애인연금 전환 (spec 고정 — 사장님이 줌)
- 키워드: 기초연금 · 허브: 기초연금 월 34만9700원, 소득인정액 기준과 국민연금 감액 여부 (/policy/basic-pension) · 폴더: 기초연금
- 실행: 2026. 9. 19. 오후 8:50:22 · 총 12.2분 · 고친 횟수 0 · 모델 sonnet
- 글: app/policy/[id]/[spoke]/content/기초연금/자동지급통지.tsx → https://gov.jjyu.co.kr/policy/basic-pension/auto-payment-notice/
- 정본으로 쓴 글: app/policy/[id]/[spoke]/content/실손보험/나이별실비보험료.tsx

## 단계별 시간·사용량
| 단계 | 시간 | 모델 호출 | 입력 토큰 | 출력 토큰 | 환산 $ |
|---|---|---|---|---|---|
| guard | 0.0분 | - | - | - | - |
| plan | 2.1분 | 1 | 68k | 11k | 0.29 |
| cta | 0.0분 | - | - | - | - |
| collect | 1.5분 | - | - | - | - |
| captures | 0.4분 | 1 | 259k | 1k | 0.16 |
| write | 5.5분 | 1 | 119k | 31k | 0.74 |
| gates | 2.6분 | - | - | - | - |
| **합계** | **12.2분** | **3** | **446k** | **42k** | **1.19** |

> 구독이라 실제 청구는 없습니다. 환산 $ 는 사용 한도를 얼마나 먹었는지의 척도입니다. 호출마다 고정비(시스템 프롬프트) 약 3만 토큰이 붙습니다.

## 설계도 (구성표)
- 타이틀·소제목: spec 고정 (글자 그대로)
1. 65세가 되면 신청 없이 자동으로 나오나요?
2. 신청 안내 통지는 누구에게 언제 오나요?
3. 장애인연금 받던 분은 어떻게 되나요?  ← 버튼 슬롯
4. 자동지급 법 개정은 어디까지 왔나요?  ← 버튼 슬롯
- 상단 버튼: [내 신청여부 조회하기] → /policy/basic-pension
- qa3 버튼: [생일별 신청시기 확인하기] → /policy/basic-pension/birth-1962-apply-timing/
- qa4 버튼: [복지로 온라인 신청하기] → /policy/basic-pension/apply-bokjiro-vs-community-center/
  - ✓ /policy/basic-pension (내부 경로)
  - ✓ /policy/basic-pension/birth-1962-apply-timing/ (내부 경로)
  - ✓ /policy/basic-pension/apply-bokjiro-vs-community-center/ (내부 경로)
- 출처: https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95/(20251001,21065,20251001)/%EC%A0%9C10%EC%A1%B0 , https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95 , https://www.korea.kr/multi/visualNewsView.do?newsId=148969138 , https://www.korea.kr/multi/mediaNewsView.do?newsId=148971263
- 오해 소지: 기초연금도 국민연금처럼 65세가 되면 자동으로 입금된다고 착각한다 / 장애인연금을 받던 사람은 아무것도 안 해도 기초연금으로 자동전환된다고 오해한다

## 증거
- 추출본 scripts/output/source-auto-payment-notice.txt 64441자 · 캡처 4장 (scripts/output/captures/auto-payment-notice-*.png)
  - auto-payment-notice-1.png: 국가법령정보센터 기초연금법 조문 화면, 제10조(기초연금 지급의 신청)~제11조(조사·질문 등)까지 표시, 신청 시 금융정보·신용정보·보험정보 제출 동의 및 조사 근거 조항이 보임(시행 2025.10.1, 법률 제21065호)
  - auto-payment-notice-2.png: 국가법령정보센터 기초연금법 제1장 총칙 화면, 제1조(목적)~제4조(국가와 지방자치단체의 책무) 표시, 제3조②에 선정기준액은 65세 이상 기초연금 수급자가 100분의 70 수준이 되도록 정한다는 문구가 보임(보건복지부 기초연금과 044-202-3686)
  - auto-payment-notice-3.png: 대한민국 정책브리핑 카드뉴스 기사, 제목 '기초연금 수급희망 이력관리 신청간주 제도 시행(7/30~)'(2026.07.31, 보건복지부), 본문에 연 2회(1월·7월) 정기 조사, 신청간주 대상은 최근 5년 이내 탈락자 중 소득 확인 시, 접수 후 30~60일 이내 지급결정, 결정 통지 사람은 7월분부터 소급 지급, 의심 연락 시 112 신고 안내
  - auto-payment-notice-4.png: 대한민국 정책브리핑 뉴스 영상 페이지, 제목 '1961년생이라면 주목! 기초연금, 생일 전에 미리 신청하세요'(2026.09.04, 보건복지부), 본문에 만 65세 되는 1961년생은 생일 있는 달의 1개월 전부터 신청 가능하며 예시로 생일 10월이면 9월 1일부터 신청 가능, 신청처는 행정복지센터·국민연금공단 지사·복지로

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
![auto-payment-notice](auto-payment-notice.png)

## 다음
- 이 보고서와 캡처를 보고 승인 → 배치가 다 끝나면 한 번에 커밋·푸시 (pre-push 게이트가 한 번 더 본다). 자동 푸시는 없다.
- 산출물: scripts/output/{plan,stage2,outline,factsheet,spec}-auto-payment-notice.* · source-auto-payment-notice.txt · captures/auto-payment-notice-*.png
