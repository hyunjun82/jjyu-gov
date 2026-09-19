# ✅ 통과 — calculation-formula

- 타이틀: 기초연금 지급액 계산 공식, 감액 적용 순서와 최저 지급액 (spec 고정 — 사장님이 줌)
- 키워드: 기초연금 · 허브: 기초연금 월 34만9700원, 소득인정액 기준과 국민연금 감액 여부 (/policy/basic-pension) · 폴더: 기초연금
- 실행: 2026. 9. 19. 오후 7:59:27 · 총 4.6분 · 고친 횟수 1 · 모델 sonnet
- 글: app/policy/[id]/[spoke]/content/기초연금/지급액계산공식.tsx → https://gov.jjyu.co.kr/policy/basic-pension/calculation-formula/
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
| gates | 2.8분 | - | - | - | - |
| fix | 1.8분 | 1 | 102k | 10k | 0.45 |
| **합계** | **4.6분** | **1** | **102k** | **10k** | **0.45** |

> 구독이라 실제 청구는 없습니다. 환산 $ 는 사용 한도를 얼마나 먹었는지의 척도입니다. 호출마다 고정비(시스템 프롬프트) 약 3만 토큰이 붙습니다.

## 설계도 (구성표)
- 타이틀·소제목: spec 고정 (글자 그대로)
1. 기준연금액 34만9700원은 누가 다 받나요?
2. 국민연금 연계액은 어떤 산식으로 정해지나요?
3. 감액은 어떤 순서로 적용되나요?  ← 버튼 슬롯
4. 감액돼도 최소 얼마는 받나요?  ← 버튼 슬롯
- 상단 버튼: [내 소득인정액 지금 계산하기] → /policy/basic-pension/income-recognition-calc/
- qa3 버튼: [국민연금 연계감액 확인하기] → /policy/basic-pension/national-pension-linked-reduction/
- qa4 버튼: [금융재산 기준 확인하기] → /policy/basic-pension/financial-assets-bank-balance/
  - ✓ /policy/basic-pension/income-recognition-calc/ (내부 경로)
  - ✓ /policy/basic-pension/national-pension-linked-reduction/ (내부 경로)
  - ✓ /policy/basic-pension/financial-assets-bank-balance/ (내부 경로)
- 출처: https://www.law.go.kr/lsLinkCommonInfo.do?lsJoLnkSeq=1030188869 , https://www.law.go.kr/%ED%96%89%EC%A0%95%EA%B7%9C%EC%B9%99/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EC%A7%80%EA%B8%89%EB%8C%80%EC%83%81%EC%9E%90%EC%84%A0%EC%A0%95%EA%B8%B0%EC%A4%80%EC%95%A1,%EA%B8%B0%EC%A4%80%EC%97%B0%EA%B8%88%EC%95%A1%EB%B0%8F%EC%86%8C%EB%93%9D%EC%9D%B8%EC%A0%95%EC%95%A1%EC%82%B0%EC%A0%95%EC%84%B8%EB%B6%80%EA%B8%B0%EC%A4%80%EC%97%90%EA%B4%80%ED%95%9C%EA%B3%A0%EC%8B%9C , https://law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95%20%EC%8B%9C%ED%96%89%EB%A0%B9 , https://www.fss.or.kr/edu/fec/contMng/view.do?menuNo=300017&contentsSlno=636
- 오해 소지: 기준연금액 34만9700원을 수급자 전원이 그대로 받는 줄 안다 / 감액이 한 번만 적용되는 줄 안다 (연계감액·부부감액·소득역전방지 감액이 순서대로 겹쳐 적용됨) / 감액되면 한 푼도 안 남는 줄 안다 (최저 지급액 하한이 정해져 있음)

## 증거
- 추출본 scripts/output/source-calculation-formula.txt 46974자 · 캡처 4장 (scripts/output/captures/calculation-formula-*.png)
  - calculation-formula-1.png: 법제처 국가법령정보센터, 기초연금법[시행 2025.10.1][법률 제21065호] 제8조(기초연금액의 감액) 조문 화면 — ①본인·배우자 모두 수급자면 각각 기초연금액의 100분의 20 감액, ②③소득인정액과 합산 시 선정기준액·저소득자 선정기준액 초과분 감액 규정, ④세부기준은 대통령령.
  - calculation-formula-2.png: 법제처 국가법령정보센터, 행정규칙 '기초연금 지급대상자 선정기준액, 기준연금액 및 소득인정액 산정 세부기준에 관한 고시'[시행 2026.7.30, 보건복지부고시 제2026-156호] — 제2조 2026년 선정기준액: 단독가구 월 2,470,000원/부부가구 월 3,952,000원, 제3조 2026년도 기준연금액 34만9천7백원, 제6조 근로소득 기본공제액 월116만원·추가공제 30%.
  - calculation-formula-3.png: 법제처 국가법령정보센터, 기초연금법 시행령[시행 2026.7.30, 대통령령 제36371호] 제2조(소득의 범위) — 근로소득·사업소득·재산소득(이자·연금소득)·공적이전소득(국민연금법·공무원연금법 등 각 법률 나열) 항목을 소득범위로 규정, 표는 아니고 조문 목록 형태.
  - calculation-formula-4.png: 금융감독원 e-금융교육센터, 콘텐츠 상세페이지 '[플러스 연금 Cafe] 기초연금 받는다면 국민연금이 줄어들까?' 영상(투자자교육협의회 제작, 조회수 41회, 재생시간 17분41초, 2023년 개발, 고유번호 투교협-영상/애니메이션-417) — 국민연금·기초연금 연계 감액 설명 영상 소개일 뿐 구체 수치 표는 없음.

## 검사 (회차별)
| 검사 | 초안 | 고침 1 |
|---|---|---|
| tsc (타입) | ✓ | ✓ |
| 원문 대조 (check-source-match) | ✓ | ✓ |
| 수치 ↔ 출처 (check-source-backing) | ✓ | ✓ |
| 버튼 도배 (check-button-variety) | ✗ | ✓ |
| 승인 도장 (check-stage-approval) | ✓ | ✓ |
| 출처 링크 (check-source-links) | ✓ | ✓ |
| 배선 (verify-integrity) | ✓ | ✓ |
| 화면 (dev 렌더) | ✓ | ✓ |

## 실패 내용 — 초안
### 버튼 도배 (check-button-variety)
```
❌ [기초연금] 상단 버튼 — 같은 문장이 2번: "내 소득인정액 계산하기"
```

## 렌더 캡처
![calculation-formula](calculation-formula.png)

## 다음
- 이 보고서와 캡처를 보고 승인 → 배치가 다 끝나면 한 번에 커밋·푸시 (pre-push 게이트가 한 번 더 본다). 자동 푸시는 없다.
- 산출물: scripts/output/{plan,stage2,outline,factsheet,spec}-calculation-formula.* · source-calculation-formula.txt · captures/calculation-formula-*.png
