# ✅ 통과 — rejection-reason-reapply

- 타이틀: 기초연금 탈락 사유 확인과 재신청 시기, 수급희망 이력관리와의 차이 (spec 고정 — 사장님이 줌)
- 키워드: 기초연금 · 허브: 기초연금 월 34만9700원, 소득인정액 기준과 국민연금 감액 여부 (/policy/basic-pension) · 폴더: 기초연금
- 실행: 2026. 9. 19. 오후 4:06:38 · 총 9.3분 · 고친 횟수 0 · 모델 sonnet
- 글: app/policy/[id]/[spoke]/content/기초연금/탈락사유재신청시기.tsx → https://gov.jjyu.co.kr/policy/basic-pension/rejection-reason-reapply/
- 정본으로 쓴 글: app/policy/[id]/[spoke]/content/실손보험/나이별실비보험료.tsx

## 단계별 시간·사용량
| 단계 | 시간 | 모델 호출 | 입력 토큰 | 출력 토큰 | 환산 $ |
|---|---|---|---|---|---|
| guard | 0.0분 | - | - | - | - |
| plan | 2.1분 | 1 | 67k | 10k | 0.28 |
| cta | 0.0분 | - | - | - | - |
| collect | 0.7분 | - | - | - | - |
| captures | 0.6분 | 1 | 257k | 1k | 0.16 |
| write | 4.5분 | 1 | 112k | 32k | 0.72 |
| gates | 1.2분 | - | - | - | - |
| **합계** | **9.3분** | **3** | **436k** | **43k** | **1.16** |

> 구독이라 실제 청구는 없습니다. 환산 $ 는 사용 한도를 얼마나 먹었는지의 척도입니다. 호출마다 고정비(시스템 프롬프트) 약 3만 토큰이 붙습니다.

## 설계도 (구성표)
- 타이틀·소제목: spec 고정 (글자 그대로)
1. 탈락 통보서에 사유가 적혀 있나요?
2. 어떤 이유로 많이 떨어지나요?
3. 재신청은 언제 하면 되나요?  ← 버튼 슬롯
4. 수급희망 이력관리 신청과는 무엇이 다른가요?  ← 버튼 슬롯
- 상단 버튼: [탈락 사유 확인하기] → /policy/basic-pension/disqualification/
- qa3 버튼: [소득인정액 계산하기] → /policy/basic-pension/income-recognition-calc/
- qa4 버튼: [복지로에서 재신청하기] → /policy/basic-pension/apply-bokjiro-vs-community-center/
  - ✓ /policy/basic-pension/disqualification/ (내부 경로)
  - ✓ /policy/basic-pension/income-recognition-calc/ (내부 경로)
  - ✓ /policy/basic-pension/apply-bokjiro-vs-community-center/ (내부 경로)
- 출처: https://www.law.go.kr/%ED%96%89%EC%A0%95%EA%B7%9C%EC%B9%99/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EC%A7%80%EA%B8%89%EB%8C%80%EC%83%81%EC%9E%90%EC%84%A0%EC%A0%95%EA%B8%B0%EC%A4%80%EC%95%A1,%EA%B8%B0%EC%A4%80%EC%97%B0%EA%B8%88%EC%95%A1%EB%B0%8F%EC%86%8C%EB%93%9D%EC%9D%B8%EC%A0%95%EC%95%A1%EC%82%B0%EC%A0%95%EC%84%B8%EB%B6%80%EA%B8%B0%EC%A4%80%EC%97%90%EA%B4%80%ED%95%9C%EA%B3%A0%EC%8B%9C , https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95/(20251001,21065,20251001)/%EC%A0%9C10%EC%A1%B0 , https://www.korea.kr/multi/visualNewsView.do?newsId=148969138 , https://www.korea.kr/briefing/pressReleaseView.do?newsId=156770183
- 오해 소지: 한 번 탈락하면 다시는 못 받는다고 오해하지만, 소득·재산이 바뀌면 언제든 재신청할 수 있다 / 수급희망 이력관리를 재신청과 같은 것으로 착각하는데, 이력관리는 변동 시점에 자동으로 재심사해주는 예약 제도이고 재신청은 본인이 직접 다시 접수하는 것이다 / 탈락 통보서에 사유가 자세히 적혀 있을 거라 생각하지만 실제로는 간단히만 표기돼 별도로 확인해야 하는 경우가 많다

## 증거
- 추출본 scripts/output/source-rejection-reason-reapply.txt 50459자 · 캡처 4장 (scripts/output/captures/rejection-reason-reapply-*.png)
  - rejection-reason-reapply-1.png: 국가법령정보센터, 보건복지부고시 제2026-156호(2026.7.30 시행) '기초연금 지급대상자 선정기준액…고시' 조문: 제2조 2026년 선정기준액 단독가구 소득인정액 월 2,470,000원·부부가구 3,952,000원, 제3조 2026년도 기준연금액 34만9천7백원, 제4조 무료임차소득 부과 주택기준 시가표준액 6억원 이상, 제6조 근로소득 기본공제액 월 116만원+추가공제(초과분의 100분의 30)
  - rejection-reason-reapply-2.png: 국가법령정보센터, 기초연금법(법률 제21065호, 2025.10.1 시행) 조문: 제10조(지급 신청)-금융정보·신용정보·보험정보 제공 동의, 제10조의2(관련 정보 제공), 제11조(조사·질문 등) 1항~2항 각호(금융·신용·보험정보, 국세·지방세 과세정보, 국민연금·건강보험·고용보험 등 자료 요청 근거)
  - rejection-reason-reapply-3.png: 정책브리핑(korea.kr) 카드뉴스, 2026.07.31 보건복지부, 제목 '기초연금 수급희망 이력관리 신청간주 제도 시행(7/30~)': 신청간주 대상=최근 5년 이내 신청 후 탈락한 분 중 소득인정액 재확인 대상자, 안내 예정 매체=카카오톡·우편, 상담전화 기간 2주(7.30~8.14), 지급결정 소요 30~60일, 결과통보 8~9월, 7월30일자 신청간주 시 소급 시 7월분부터 지급
  - rejection-reason-reapply-4.png: 정책브리핑(korea.kr) 보도자료, 2026.07.09/07.10 보건복지부, 제목 '기초연금 온라인 신청 언제 어디서나, 더욱 간편하게': 10월부터 신청 절차 간소화, '25년 8월 기준 온라인 신청 887,431명 중 어르신 직접 29,903명(3.4%)·지방자치부 826,171명(93.1%)·(온라인 신청 방식 비중) 대리인 신청 2,467건 중 정보제공동의 917건(37.2%)·수급자격서류 937건(38%), 하단에 온라인 간편 신청 절차 개선안 표(현행 1~5-2단계 vs 개편 후, 4-1 금융정보 제공동의·4-3 수급여부/편입신청클릭까지 5-4로 이동 등 붉은색 표시)

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
![rejection-reason-reapply](rejection-reason-reapply.png)

## 다음
- 이 보고서와 캡처를 보고 승인 → 배치가 다 끝나면 한 번에 커밋·푸시 (pre-push 게이트가 한 번 더 본다). 자동 푸시는 없다.
- 산출물: scripts/output/{plan,stage2,outline,factsheet,spec}-rejection-reason-reapply.* · source-rejection-reason-reapply.txt · captures/rejection-reason-reapply-*.png
