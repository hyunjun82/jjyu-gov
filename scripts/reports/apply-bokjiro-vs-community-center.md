# ✅ 통과 — apply-bokjiro-vs-community-center

- 타이틀: 신청 안 하면 못 받는 기초연금, 복지로 온라인과 주민센터 방문 비교 (spec 고정 — 사장님이 줌)
- 키워드: 기초연금 · 허브: 기초연금 월 34만9700원, 소득인정액 기준과 국민연금 감액 여부 (/policy/basic-pension) · 폴더: 기초연금
- 실행: 2026. 9. 19. 오후 3:27:59 · 총 1.3분 · 고친 횟수 0 · 모델 sonnet
- 글: app/policy/[id]/[spoke]/content/기초연금/복지로주민센터신청비교.tsx → https://gov.jjyu.co.kr/policy/basic-pension/apply-bokjiro-vs-community-center/
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
| gates | 1.2분 | - | - | - | - |
| **합계** | **1.3분** | **0** | **0** | **0** | **0.00** |

> 구독이라 실제 청구는 없습니다. 환산 $ 는 사용 한도를 얼마나 먹었는지의 척도입니다. 호출마다 고정비(시스템 프롬프트) 약 3만 토큰이 붙습니다.

## 설계도 (구성표)
- 타이틀·소제목: spec 고정 (글자 그대로)
1. 나이가 되면 자동으로 나오나요?
2. 복지로 온라인 신청은 어떻게 하나요?
3. 주민센터 방문 신청은 무엇이 다른가요?  ← 버튼 슬롯
4. 어느 쪽으로 신청하는 게 빠른가요?  ← 버튼 슬롯
- 상단 버튼: [내 기초연금 자격 확인하기] → https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveTWAT52011M.do?wlfareInfoId=WLF00000060
- qa3 버튼: [복지로에서 바로 신청하기] → https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveTWAT52011M.do?wlfareInfoId=WLF00000060
- qa4 버튼: [방문 전 서류 챙기기] → /policy/basic-pension/required-documents/
  - ✓ https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveTWAT52011M.do?wlfareInfoId=WLF00000060 (복지서비스>서비스 찾기>복지서비스 상세(중앙) | 복지로)
  - ✓ /policy/basic-pension/required-documents/ (내부 경로)
- 출처: https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95/(20251001,21065,20251001)/%EC%A0%9C10%EC%A1%B0 , https://www.korea.kr/briefing/pressReleaseView.do?newsId=156770183 , https://www.korea.kr/multi/visualNewsView.do?newsId=148965218 , https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95%EC%8B%9C%ED%96%89%EA%B7%9C%EC%B9%99
- 오해 소지: 나이가 되면 자동으로 통장에 들어온다고 착각하지만 기초연금은 신청주의라 본인이나 대리인이 직접 신청해야 함 / 복지로 온라인 신청이 무조건 더 빠르다고 생각하지만 서류가 미비하면 방문 신청과 처리 기간 차이가 없음 / 주민센터 방문은 본인만 가능하다고 오해하지만 자녀 등 대리 신청도 가능함

## 증거
- 추출본 scripts/output/source-apply-bokjiro-vs-community-center.txt 57271자 · 캡처 4장 (scripts/output/captures/apply-bokjiro-vs-community-center-*.png)
  - apply-bokjiro-vs-community-center-1.png: 국가법령정보센터 기초연금법(시행 2025.10.1, 법률 제21065호) 조문 화면, 제10조(기초연금 지급의 신청)~제11조(조사·질문 등)까지 보이며 신청권자로 특별자치시장·특별자치도지사·시장·군수·구청장이 명시되고 금융정보·신용정보·보험정보 제공 동의 조항이 나옴.
  - apply-bokjiro-vs-community-center-2.png: 정책브리핑(korea.kr) 보건복지부 2026.07.09자 보도자료 '기초연금 온라인 신청 언제 어디서나, 더욱 간편하게' 전문, 그래프로 '25년 신청 887,431명 중 온라인 29,903명(3.4%)·지방청 826,171명(93.1%)·구비서류 31,357명(3.5%)' 수치와 하단 절차 개선표(1~5-2단계, 현행vs개편안, 4-1 금융정보 제공동의 항목 강조)가 보임.
  - apply-bokjiro-vs-community-center-3.png: 정책브리핑 카드/한컷 뉴스 2026.05.27자 '기초연금 더 편하게, 놓치지 않도록' 카드뉴스, 수급희망 이력관리 신청자는 재신청 불요 개선 내용과 '기대효과: 약 6.7만 명 신청주의 개선 혜택, '26.3월 기준 신청안내자 총 약 6.7만 명 중 수급가능성 확인된 미신청자 3.8만 명(약 57%)', 시행일 2026.7월 표기.
  - apply-bokjiro-vs-community-center-4.png: 국가법령정보센터 기초연금법 시행규칙(시행 2026.7.30, 보건복지부령 제1180호) 조문 화면, 제2조(소득평가액 산정방식)에서 국민기초생활보장급여·장애수당·장애인연금 등 제외 소득 14개 항목 목록과 제3조(재산가액의 산정) 시가표준액 산정 방법이 보임.

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
![apply-bokjiro-vs-community-center](apply-bokjiro-vs-community-center.png)

## 다음
- 이 보고서와 캡처를 보고 승인 → 배치가 다 끝나면 한 번에 커밋·푸시 (pre-push 게이트가 한 번 더 본다). 자동 푸시는 없다.
- 산출물: scripts/output/{plan,stage2,outline,factsheet,spec}-apply-bokjiro-vs-community-center.* · source-apply-bokjiro-vs-community-center.txt · captures/apply-bokjiro-vs-community-center-*.png
