# ✅ 통과 — civil-service-pension-survivor

- 타이틀: 공무원연금 수급자 기초연금 신청 여부, 특수직역연금과 유족연금 차이 (spec 고정 — 사장님이 줌)
- 키워드: 기초연금 · 허브: 기초연금 월 34만9700원, 소득인정액 기준과 국민연금 감액 여부 (/policy/basic-pension) · 폴더: 기초연금
- 실행: 2026. 9. 19. 오후 5:43:43 · 총 8.1분 · 고친 횟수 0 · 모델 sonnet
- 글: app/policy/[id]/[spoke]/content/기초연금/공무원연금유족연금차이.tsx → https://gov.jjyu.co.kr/policy/basic-pension/civil-service-pension-survivor/
- 정본으로 쓴 글: app/policy/[id]/[spoke]/content/실손보험/나이별실비보험료.tsx

## 단계별 시간·사용량
| 단계 | 시간 | 모델 호출 | 입력 토큰 | 출력 토큰 | 환산 $ |
|---|---|---|---|---|---|
| guard | 0.0분 | - | - | - | - |
| plan | 1.8분 | 1 | 68k | 9k | 0.27 |
| cta | 0.1분 | - | - | - | - |
| collect | 0.8분 | - | - | - | - |
| captures | 0.3분 | 1 | 106k | 1k | 0.14 |
| write | 3.7분 | 1 | 132k | 26k | 0.76 |
| gates | 1.3분 | - | - | - | - |
| **합계** | **8.1분** | **3** | **306k** | **36k** | **1.17** |

> 구독이라 실제 청구는 없습니다. 환산 $ 는 사용 한도를 얼마나 먹었는지의 척도입니다. 호출마다 고정비(시스템 프롬프트) 약 3만 토큰이 붙습니다.

## 설계도 (구성표)
- 타이틀·소제목: spec 고정 (글자 그대로)
1. 공무원연금 수급자도 기초연금을 신청할 수 있나요?
2. 사학연금이나 군인연금도 마찬가지인가요?
3. 배우자가 공무원연금을 받으면 어떻게 되나요?  ← 버튼 슬롯
4. 유족연금을 받는 경우는 어떻게 되나요?  ← 버튼 슬롯
- 상단 버튼: [내 연금 통합조회하기] → https://www.fss.or.kr/fss/lifeplan/lifeplanIndex/index.do?menuNo=201101
- qa3 버튼: [기초연금 조건 확인하기] → /policy/basic-pension
- qa4 버튼: [부부 감액 계산 확인하기] → /policy/basic-pension/couple-reduction-single-apply
  - ✓ https://www.fss.or.kr/fss/lifeplan/lifeplanIndex/index.do?menuNo=201101 (통합연금포털 | 통합연금포털 | 금융소비자보호 |)
  - ✓ /policy/basic-pension (내부 경로)
  - ✓ /policy/basic-pension/couple-reduction-single-apply (내부 경로)
- 출처: https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95/(20251001,21065,20251001)/%EC%A0%9C10%EC%A1%B0 , https://law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95%20%EC%8B%9C%ED%96%89%EB%A0%B9 , https://www.fss.or.kr/edu/fec/contMng/view.do?menuNo=300017&contentsSlno=636 , https://www.fss.or.kr/fss/cvpl/inquiRecpEc/view.do?menuNo=200094&recpNo=2023Q4404&pubYn=Y
- 오해 소지: 공무원연금을 받으면 기초연금은 무조건 못 받는다고 알지만, 유족연금 수급자 등은 예외로 받을 수 있다 / 사학연금·군인연금은 공무원연금과 다르게 취급된다고 생각하지만, 특수직역연금으로 묶여 같은 기준이 적용된다 / 배우자만 공무원연금을 받으면 본인은 상관없다고 여기지만, 배우자의 수급 형태에 따라 본인 자격에도 영향이 있다

## 증거
- 추출본 scripts/output/source-civil-service-pension-survivor.txt 83937자 · 캡처 4장 (scripts/output/captures/civil-service-pension-survivor-*.png)
  - civil-service-pension-survivor-1.png: 국가법령정보센터 '기초연금법' 조문 화면(시행 2025.10.1, 법률 제21065호), 제10조(기초연금 지급의 신청)·제10조의2(관련 정보의 제공)·제11조(조사·질문 등) 전문이 보이고 유족연금 관련 조문은 없음
  - civil-service-pension-survivor-2.png: 국가법령정보센터 '기초연금법 시행령' 화면(시행 2026.7.30, 대통령령 제36371호), 제2조(소득의 범위) 표에 근로소득·사업소득·재산소득·공적이전소득 항목이 나열되고 4호에 국민연금·공무원연금 등 법률명이 언급되나 유족연금 표는 없음
  - civil-service-pension-survivor-3.png: 금융감독원 e-금융교육센터 콘텐츠 상세페이지, 제목 '[플러스 연금 Cafe] 기초연금 받는다면 국민연금이 줄어들까?'(조회수 39회, 제작 투자자교육협의회, 재생시간 17분41초), 교육대상 중장년기·노년기·장애인, 개발연도 2023 — 유족연금 내용은 보이지 않음
  - civil-service-pension-survivor-4.png: 금융감독원 '공개Q&A 조회' 화면, 제목 '국민연금, 기초연금 수령'(접수 2023-09-11, 분류 공개민원, 처리부서 금융사기전담대응단), 질의는 대포통장 관련 국민연금·기초연금 수령 계좌 개설 문의이고 답변은 대포통장 명의인 계좌개설 제한 안내 — 유족연금 내용 없음

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
![civil-service-pension-survivor](civil-service-pension-survivor.png)

## 다음
- 이 보고서와 캡처를 보고 승인 → 배치가 다 끝나면 한 번에 커밋·푸시 (pre-push 게이트가 한 번 더 본다). 자동 푸시는 없다.
- 산출물: scripts/output/{plan,stage2,outline,factsheet,spec}-civil-service-pension-survivor.* · source-civil-service-pension-survivor.txt · captures/civil-service-pension-survivor-*.png
