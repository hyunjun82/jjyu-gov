# ✅ 통과 — national-pension-linked-reduction

- 타이틀: 국민연금 수령액별 기초연금 감액 계산, 연계감액 기준과 폐지 여부 (spec 고정 — 사장님이 줌)
- 키워드: 기초연금 · 허브: 기초연금 월 34만9700원, 소득인정액 기준과 국민연금 감액 여부 (/policy/basic-pension) · 폴더: 기초연금
- 실행: 2026. 9. 19. 오후 12:38:08 · 총 13.1분 · 고친 횟수 1 · 모델 sonnet
- 글: app/policy/[id]/[spoke]/content/기초연금/국민연금연계감액계산.tsx → https://gov.jjyu.co.kr/policy/basic-pension/national-pension-linked-reduction/
- 정본으로 쓴 글: app/policy/[id]/[spoke]/content/실손보험/나이별실비보험료.tsx

## 단계별 시간·사용량
| 단계 | 시간 | 모델 호출 | 입력 토큰 | 출력 토큰 | 환산 $ |
|---|---|---|---|---|---|
| guard | 0.0분 | - | - | - | - |
| plan | 2.8분 | 2 | 205k | 11k | 0.50 |
| cta | 0.1분 | - | - | - | - |
| collect | 0.9분 | - | - | - | - |
| captures | 0.5분 | 1 | 262k | 1k | 0.17 |
| write | 5.0분 | 1 | 105k | 28k | 0.65 |
| fix | 1.5분 | 1 | 103k | 10k | 0.46 |
| gates | 2.2분 | - | - | - | - |
| **합계** | **13.1분** | **5** | **675k** | **51k** | **1.77** |

> 구독이라 실제 청구는 없습니다. 환산 $ 는 사용 한도를 얼마나 먹었는지의 척도입니다. 호출마다 고정비(시스템 프롬프트) 약 3만 토큰이 붙습니다.

## 설계도 (구성표)
- 타이틀·소제목: spec 고정 (글자 그대로)
1. 국민연금을 받으면 기초연금이 줄어드나요?
2. 감액되는 금액은 어떻게 계산하나요?
3. 국민연금이 얼마부터 연계감액에 걸리나요?  ← 버튼 슬롯
4. 연계감액이 없어진다는 게 사실인가요?  ← 버튼 슬롯
- 상단 버튼: [통합연금 조회하기] → https://www.fss.or.kr/fss/lifeplan/lifeplanIndex/index.do?menuNo=201101
- qa3 버튼: [기초연금 계산 공식 확인하기] → /policy/basic-pension/calculation-formula/
- qa4 버튼: [기초연금 인상 소식 확인하기] → /policy/basic-pension/2027-increase/
  - ✓ https://www.fss.or.kr/fss/lifeplan/lifeplanIndex/index.do?menuNo=201101 (통합연금포털 | 통합연금포털 | 금융소비자보호 |)
  - ✓ /policy/basic-pension/calculation-formula/ (내부 경로)
  - ✓ /policy/basic-pension/2027-increase/ (내부 경로)
- 출처: https://www.law.go.kr/lsLinkCommonInfo.do?lsJoLnkSeq=1030188869 , https://www.fss.or.kr/edu/fec/contMng/view.do?menuNo=300017&contentsSlno=636 , https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95/(20251001,21065,20251001)/%EC%A0%9C10%EC%A1%B0 , https://www.korea.kr/news/policyNewsView.do?newsId=148971175
- 오해 소지: 국민연금을 받으면 무조건 기초연금이 깎인다고 오해하지만 실제로는 국민연금 수령액이 기준연금액의 150%를 넘을 때만 감액이 걸림 / 연계감액과 소득인정액에 따른 감액(부부 감액·소득역전방지)을 같은 것으로 혼동함 / 연계감액 폐지가 이미 확정된 제도 변경이라고 오해하지만 2026-09-19 기준 논의 단계임

## 증거
- 추출본 scripts/output/source-national-pension-linked-reduction.txt 46063자 · 캡처 4장 (scripts/output/captures/national-pension-linked-reduction-*.png)
  - national-pension-linked-reduction-1.png: 국가법령정보센터 기초연금법[시행 2025.10.1.][법률 제21065호] 제8조(기초연금액의 감액) 화면, 부부 감액(①본인·배우자 모두 수급자 시 각각 100분의 20 감액)과 소득역전 방지 감액(②③, 대통령령 위임 ④)조문 전문이 좌측 목차 '제8조 기초연금액의 감액' 아래 표시됨.
  - national-pension-linked-reduction-2.png: 금융감독원 e-금융교육센터 콘텐츠 상세 화면, 영상 '[플러스 연금 Cafe] 기초연금 받는다면 국민연금이 줄어들까?'(제작 투자자교육협의회, 조회수 36회, 17분41초) — 콘텐츠 소개 표에 고유번호 투교협-영상/애니메이션-417, 개발연도 2023, 교육대상 중장년기·노년기·장애인으로 기재.
  - national-pension-linked-reduction-3.png: 국가법령정보센터 기초연금법 조문 화면, 제10조(기초연금 지급의 신청)·제10조의2(기초연금 관련 정보의 제공)·제11조(조사·질문 등) 3개 조문 전문이 나열되어 있고 국민연금·건강보험 등 소득재산 자료 제공 근거(제11조제2항제1호라목)가 보임, 국민연금 연계 감액 관련 수치는 없음.
  - national-pension-linked-reduction-4.png: 정책브리핑(korea.kr) 뉴스 화면, 제목 '이 대통령, 기초연금의 국내 거주기간 요건 설정 등 제도 개선 지시'(2026.09.03, 정책브리핑) — 국적 취득 시기와 무관하게 지급되는 기초연금 제도의 형평성 문제를 지적하며 국내 거주기간 요건 설정 등 제도 개선을 지시했다는 본문, 국민연금 연계 감액에 대한 내용·수치는 없음.

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
❌ heroHook 문장 수 7 — 2~6문장
❌ qa[2].anchor 는 "q3"
```

## 렌더 캡처
![national-pension-linked-reduction](national-pension-linked-reduction.png)

## 다음
- 이 보고서와 캡처를 보고 승인 → 배치가 다 끝나면 한 번에 커밋·푸시 (pre-push 게이트가 한 번 더 본다). 자동 푸시는 없다.
- 산출물: scripts/output/{plan,stage2,outline,factsheet,spec}-national-pension-linked-reduction.* · source-national-pension-linked-reduction.txt · captures/national-pension-linked-reduction-*.png
