# ✅ 통과 — increase-400k-abolition-rumor

- 타이틀: 기초연금 40만원 인상 시기와 폐지설, 연계감액 개편으로 달라지는 금액 (spec 고정 — 사장님이 줌)
- 키워드: 기초연금 · 허브: 기초연금 월 34만9700원, 소득인정액 기준과 국민연금 감액 여부 (/policy/basic-pension) · 폴더: 기초연금
- 실행: 2026. 9. 19. 오후 5:35:03 · 총 11.8분 · 고친 횟수 0 · 모델 sonnet
- 글: app/policy/[id]/[spoke]/content/기초연금/인상폐지설연계감액.tsx → https://gov.jjyu.co.kr/policy/basic-pension/increase-400k-abolition-rumor/
- 정본으로 쓴 글: app/policy/[id]/[spoke]/content/실손보험/나이별실비보험료.tsx

## 단계별 시간·사용량
| 단계 | 시간 | 모델 호출 | 입력 토큰 | 출력 토큰 | 환산 $ |
|---|---|---|---|---|---|
| guard | 0.0분 | - | - | - | - |
| plan | 3.8분 | 2 | 212k | 18k | 0.59 |
| cta | 0.0분 | - | - | - | - |
| collect | 0.7분 | - | - | - | - |
| captures | 0.3분 | 1 | 262k | 1k | 0.17 |
| write | 5.4분 | 1 | 95k | 32k | 0.63 |
| gates | 1.5분 | - | - | - | - |
| **합계** | **11.8분** | **4** | **569k** | **51k** | **1.39** |

> 구독이라 실제 청구는 없습니다. 환산 $ 는 사용 한도를 얼마나 먹었는지의 척도입니다. 호출마다 고정비(시스템 프롬프트) 약 3만 토큰이 붙습니다.

## 설계도 (구성표)
- 타이틀·소제목: spec 고정 (글자 그대로)
1. 기초연금 40만원 인상은 언제부터인가요?
2. 폐지된다는 이야기는 사실인가요?
3. 국민연금 연계감액은 어떻게 개편되나요?  ← 버튼 슬롯
4. 개편되면 실제로 얼마가 달라지나요?  ← 버튼 슬롯
- 상단 버튼: [기초연금 금액 계산하기] → /policy/basic-pension/calculation-formula/
- qa3 버튼: [2027 인상 계획 확인하기] → /policy/basic-pension/2027-increase/
- qa4 버튼: [국민연금 감액 계산하기] → /policy/basic-pension/national-pension-linked-reduction/
  - ✓ /policy/basic-pension/calculation-formula/ (내부 경로)
  - ✓ /policy/basic-pension/2027-increase/ (내부 경로)
  - ✓ /policy/basic-pension/national-pension-linked-reduction/ (내부 경로)
- 출처: https://www.korea.kr/news/policyNewsView.do?newsId=148971175 , https://www.law.go.kr/lsLinkCommonInfo.do?lsJoLnkSeq=1030188869 , https://www.fss.or.kr/edu/fec/contMng/view.do?menuNo=300017&contentsSlno=636 , https://www.law.go.kr/%ED%96%89%EC%A0%95%EA%B7%9C%EC%B9%99/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EC%A7%80%EA%B8%89%EB%8C%80%EC%83%81%EC%9E%90%EC%84%A0%EC%A0%95%EA%B8%B0%EC%A4%80%EC%95%A1,%EA%B8%B0%EC%A4%80%EC%97%B0%EA%B8%88%EC%95%A1%EB%B0%8F%EC%86%8C%EB%93%9D%EC%9D%B8%EC%A0%95%EC%95%A1%EC%82%B0%EC%A0%95%EC%84%B8%EB%B6%80%EA%B8%B0%EC%A4%80%EC%97%90%EA%B4%80%ED%95%9C%EA%B3%A0%EC%8B%9C
- 오해 소지: 기초연금이 폐지된다는 소문은 사실이 아니고, 실제 논의는 국민연금 연계감액 개편이다 / 40만원은 모든 수급자가 똑같이 받는 금액이 아니라 기준연금액 상한선이다 / 국민연금을 받으면 무조건 기초연금이 깎인다고 알고 있지만, 개편안의 핵심은 그 감액 폭을 줄이는 방향이다

## 증거
- 추출본 scripts/output/source-increase-400k-abolition-rumor.txt 28356자 · 캡처 4장 (scripts/output/captures/increase-400k-abolition-rumor-*.png)
  - increase-400k-abolition-rumor-1.png: 정책브리핑(korea.kr) 기사 '이 대통령, 기초연금의 국내 거주기간 요건 설정 등 제도 개선 지시'(2026.09.03), 국적 취득 시기와 무관하게 지급되는 기초연금 형평성 문제로 거주기간 요건 설정 등 제도 개선을 지시했다는 내용, 금액 수치는 본문에 없음
  - increase-400k-abolition-rumor-2.png: 국가법령정보센터 기초연금법 조문정보, [시행 2025.10.1.][법률 제21065호] 제8조(기초연금액의 감액) 1~4항 전문 — 본인·배우자 모두 수급권자면 기초연금액의 100분의 20 감액 등 감액 기준 조문만 표시, 금액 수치 없음
  - increase-400k-abolition-rumor-3.png: 금융감독원 e-금융교육센터 콘텐츠 페이지, 투자자교육협의회 제작 영상 '[플러스 연금 Cafe] 기초연금 받는다면 국민연금이 줄어들까?'(조회수 38회, 17분41초, 개발연도 2023) 소개·상세정보 화면, 국민연금-기초연금 연계감액 설명 영상이며 구체적 금액 수치는 화면에 없음
  - increase-400k-abolition-rumor-4.png: 국가법령정보센터 행정규칙 '기초연금 지급대상자 선정기준액, 기준연금액 및 소득인정액 산정 세부기준에 관한 고시'[시행 2026.7.30.][보건복지부고시 제2026-156호], 제2조 2026년도 선정기준액 단독가구 월 소득인정액 2,470,000원·부부가구 3,952,000원, 제3조 2026년도 기준연금액 34만9천7백원, 제4조 무료임차소득 부과기준 주택 시가표준액 6억원 이상, 제6조 근로소득 기본공제액 월116만원 등 조문 표시

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
![increase-400k-abolition-rumor](increase-400k-abolition-rumor.png)

## 다음
- 이 보고서와 캡처를 보고 승인 → 배치가 다 끝나면 한 번에 커밋·푸시 (pre-push 게이트가 한 번 더 본다). 자동 푸시는 없다.
- 산출물: scripts/output/{plan,stage2,outline,factsheet,spec}-increase-400k-abolition-rumor.* · source-increase-400k-abolition-rumor.txt · captures/increase-400k-abolition-rumor-*.png
