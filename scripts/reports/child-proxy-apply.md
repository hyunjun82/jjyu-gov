# ✅ 통과 — child-proxy-apply

- 타이틀: 부모님 기초연금 자녀 대리 신청 방법, 위임장과 금융정보 동의서까지 (spec 고정 — 사장님이 줌)
- 키워드: 기초연금 · 허브: 기초연금 월 34만9700원, 소득인정액 기준과 국민연금 감액 여부 (/policy/basic-pension) · 폴더: 기초연금
- 실행: 2026. 9. 19. 오후 3:46:06 · 총 17.1분 · 고친 횟수 2 · 모델 sonnet
- 글: app/policy/[id]/[spoke]/content/기초연금/자녀대리신청.tsx → https://gov.jjyu.co.kr/policy/basic-pension/child-proxy-apply/
- 정본으로 쓴 글: app/policy/[id]/[spoke]/content/실손보험/나이별실비보험료.tsx

## 단계별 시간·사용량
| 단계 | 시간 | 모델 호출 | 입력 토큰 | 출력 토큰 | 환산 $ |
|---|---|---|---|---|---|
| guard | 0.0분 | - | - | - | - |
| plan | 1.7분 | 2 | 135k | 14k | 0.50 |
| cta | 1.1분 | - | - | - | - |
| collect | 0.7분 | - | - | - | - |
| captures | 0.8분 | 1 | 256k | 2k | 0.17 |
| write | 5.9분 | 1 | 277k | 34k | 0.93 |
| fix | 3.8분 | 2 | 1068k | 21k | 1.36 |
| gates | 3.0분 | - | - | - | - |
| **합계** | **17.1분** | **6** | **1736k** | **71k** | **2.96** |

> 구독이라 실제 청구는 없습니다. 환산 $ 는 사용 한도를 얼마나 먹었는지의 척도입니다. 호출마다 고정비(시스템 프롬프트) 약 3만 토큰이 붙습니다.

## 설계도 (구성표)
- 타이틀·소제목: spec 고정 (글자 그대로)
1. 자녀가 부모님 기초연금을 대신 신청할 수 있나요?
2. 대리 신청은 어떤 순서로 진행하나요?
3. 위임장에는 무엇을 적나요?  ← 버튼 슬롯
4. 금융정보 제공 동의서는 누가 서명하나요?  ← 버튼 슬롯
- 상단 버튼: [기초연금 서류 챙기기] → /policy/basic-pension/required-documents/
- qa3 버튼: [복지로 주민센터 비교하기] → /policy/basic-pension/apply-bokjiro-vs-community-center/
- qa4 버튼: [소득인정액 계산하기] → /policy/basic-pension/income-recognition-calc/
  - ✓ /policy/basic-pension/required-documents/ (내부 경로)
  - ✓ /policy/basic-pension/apply-bokjiro-vs-community-center/ (내부 경로)
  - ✓ /policy/basic-pension/income-recognition-calc/ (내부 경로)
- 출처: https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95/(20251001,21065,20251001)/%EC%A0%9C10%EC%A1%B0 , https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95%20%EC%8B%9C%ED%96%89%EB%A0%B9 , ✗ https://www.easylaw.go.kr/CSP/CnpClsMainBtr.laf?ccfNo=2&cciNo=1&cnpClsNo=1&csmSeq=1589 , https://www.korea.kr/briefing/pressReleaseView.do?newsId=156770183
- 오해 소지: 자녀 신분증만 있으면 대리 신청이 된다고 생각하지만, 위임장과 금융정보 제공 동의서 없이는 접수 자체가 안 된다 / 위임장 한 장이면 끝이라고 생각하지만, 금융정보 제공 동의서는 부모님 본인 서명이 별도로 필요하다

## 증거
- 추출본 scripts/output/source-child-proxy-apply.txt 62310자 · 캡처 4장 (scripts/output/captures/child-proxy-apply-*.png)
  - child-proxy-apply-1.png: 국가법령정보센터 기초연금법 조문 화면 — 제10조(기초연금 지급의 신청): 수급희망자 또는 대통령령이 정하는 대리인이 시장·군수·구청장에게 신청 가능, 금융·신용·보험정보 제공 동의 필요; 제10조의2(정보 제공), 제11조(조사·질문 등) 조문도 보임.
  - child-proxy-apply-2.png: 국가법령정보센터 기초연금법 시행령(시행 2026.7.30, 대통령령 제36371호) 제2조(소득의 범위) 조문 화면 — 근로소득·사업소득·재산소득·공적이전소득 항목과 소득세법·국민연금법 등 근거 법률명이 나열됨, 대리신청 관련 내용은 없음.
  - child-proxy-apply-3.png: 고용보험 관련 안내 페이지로 보이며(제목 '고용보험 가입하기'), 이미지가 세로로 매우 길게 압축되어 글자가 흐려 정확한 표 항목 판독 불가 — '적용대상 및 제외대상', '실업급여의 종류' 등 소제목과 표 틀만 식별되고 셀 값은 읽을 수 없음.
  - child-proxy-apply-4.png: 대한민국 정책브리핑(korea.kr) 보건복지부 보도자료(2026.07.09) '기초연금 온라인 신청 언제 어디서나, 더욱 간편하게' — 25년 상반기 신청 887,431명 중 온라인 29,903명(3.4%), 지방청부 826,171명(93.1%), 유선 31,357명(3.5%) 통계와, 하단 '기초연금 온라인 간편 신청 절차 개선안' 표(단계 1~5-2, 현행/개편 후 비교, 4-1 금융정보 제공 동의, 4-3 수급희망이력관리신청클릭 항목).

## 검사 (회차별)
| 검사 | 초안 | 고침 1 | 고침 2 |
|---|---|---|---|
| 사전 검사 (article-check) | ✗ | · | · |
| tsc (타입) | · | ✓ | ✓ |
| 원문 대조 (check-source-match) | · | ✓ | ✓ |
| 수치 ↔ 출처 (check-source-backing) | · | ✓ | ✓ |
| 버튼 도배 (check-button-variety) | · | ✓ | ✓ |
| 승인 도장 (check-stage-approval) | · | ✓ | ✓ |
| 출처 링크 (check-source-links) | · | ✓ | ✓ |
| 배선 (verify-integrity) | · | ✓ | ✓ |
| 화면 (dev 렌더) | · | ✗ | ✓ |

## 실패 내용 — 초안
### 사전 검사 (article-check)
```
❌ 근거 없는 말: 경우가 많 — 원문에 비율이 있으면 그 수치를, 없으면 조건문으로
```

## 실패 내용 — 고침 1
### 화면 (dev 렌더)
```
h1 이 화면에 없다
상단 버튼 "기초연금 서류 챙기기" 이 화면에 없다
핵심콕콕 박스가 화면에 없다
```

## 메모
- 근거로 쓰지 않은 출처: https://www.easylaw.go.kr/CSP/CnpClsMainBtr.laf?ccfNo=2&cciNo=1&cnpClsNo=1&csmSeq=1589 (본문에 주제어(기초연금)가 없다 — 다른 문서)

## 렌더 캡처
![child-proxy-apply](child-proxy-apply.png)

## 다음
- 이 보고서와 캡처를 보고 승인 → 배치가 다 끝나면 한 번에 커밋·푸시 (pre-push 게이트가 한 번 더 본다). 자동 푸시는 없다.
- 산출물: scripts/output/{plan,stage2,outline,factsheet,spec}-child-proxy-apply.* · source-child-proxy-apply.txt · captures/child-proxy-apply-*.png
