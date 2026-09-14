# ✅ 통과 — no-surrender-value-cancel

- 타이틀: 무해지 보험료인상, 무해지보험 판매중지되면 얼마나 손해일까? [⑥ 함정 경고형]
- 키워드: 무해지 보험 · 허브: 정기보험 종신보험, 사망보장 뭐가 다르고 뭘 골라야 하나요 (/policy/term-vs-whole-life-insurance) · 폴더: 정기종신보험
- 실행: 2026. 9. 14. 오전 10:16:07 · 총 3.1분 · 고친 횟수 0 · 모델 sonnet
- 글: app/policy/[id]/[spoke]/content/정기종신보험/무해지보험판매중지.tsx → https://gov.jjyu.co.kr/policy/term-vs-whole-life-insurance/no-surrender-value-cancel/
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
| gates | 3.0분 | - | - | - | - |
| **합계** | **3.1분** | **0** | **0** | **0** | **0.00** |

> 구독이라 실제 청구는 없습니다. 환산 $ 는 사용 한도를 얼마나 먹었는지의 척도입니다. 호출마다 고정비(시스템 프롬프트) 약 3만 토큰이 붙습니다.

## 설계도 (구성표)
- 타이틀 조각: 무해지 보험료인상 · 무해지보험 판매중지 · 참조 캡처: 보험타이틀.png — "라식, 라섹 실비 청구 어려운 이유는? 수술 전 확인해 보세요"
1. 무해지 보험이란 무엇이고, 가입 전에 확인하는 방법은 무엇인가요?  (실검색어: 무해지 보험이란)
2. 보험 무해지 뜻, 정확히 어떤 의미인가요?  (실검색어: 보험 무해지 뜻)
3. 무해지 보험료인상, 왜 계속 오르는 걸까요?  ← 버튼 슬롯  (실검색어: 무해지 보험료인상)
4. 무해지보험 판매중지되면 지금 가입한 보험은 어떻게 되나요?  (실검색어: 무해지보험 판매중지)
5. 무해지보험 해지하면 환급금은 얼마나 받을 수 있나요?  ← 버튼 슬롯  (실검색어: 무해지보험 해지)
- 상단 버튼: [보험 상품공시 조회하기] → https://kpub.knia.or.kr/productDisc/guide/productInf.do
- qa3 버튼: [정기·종신 보험 차이 비교하기] → /policy/term-vs-whole-life-insurance/term-whole-life-annuity/
- qa5 버튼: [내게 맞는 보험 종류 고르기] → /policy/term-vs-whole-life-insurance
  - ✓ https://kpub.knia.or.kr/productDisc/guide/productInf.do (상품비교공시 안내 | 손해보험협회)
  - ✓ /policy/term-vs-whole-life-insurance/term-whole-life-annuity/ (내부 경로)
  - ✓ /policy/term-vs-whole-life-insurance (내부 경로)
- 출처: https://www.fsc.go.kr/no010101/73932 , https://www.fsc.go.kr/no010101/74468 , ✗ https://consumer.fss.or.kr/fss/bbs/B0000188/view.do?nttId=16016&menuNo=200218 , https://www.fsc.go.kr/no010101/73816
- 오해 소지: 해지환급금이 아예 없다고 오해하지만 실제론 '무(저)해지 구간'이 지나면 표준형과 같아진다 / 보험료가 싸다고 무조건 이득이라 생각하지만 중도해지 시 손해가 더 클 수 있다

## 증거
- 추출본 scripts/output/source-no-surrender-value-cancel.txt 36089자 · 캡처 4장 (scripts/output/captures/no-surrender-value-cancel-*.png)
  - no-surrender-value-cancel-1.png: 금융위원회 보도자료(2019-10-23) '최근 판매가 급증하는 무·저해지환급금 보험상품에 대해 소비자 경보 발령 등 소비자 보호 조치를 시행합니다' 화면, 본문 표에 월적립액 100만원 예시로 저축성상품 1년간 실제이자 129,226원·10년 총수령이자 1,292,260원 vs 10년납 종신보험 납입완료시점 원금대비 차익 19,800,000원·10년 총수령이자 19,800,000원 비교표가 보임.
  - no-surrender-value-cancel-2.png: 금융위원회 보도자료(2020-07-27) '보험업감독규정 개정안 입법예고' 화면. 표1은 구분(표준형/무해지환급/연금보장) 열과 경과기간 1·5·10·20년 행으로 20년 시점 환급률 표준형 97.3%·무해지 134.1%·연금보장 121.4% 표시. 표2는 표준형·무해지(현행/개정안) 해지환급금·환급률 비교표(경과기간 1~70)가 보임.
  - no-surrender-value-cancel-3.png: 금융감독원(FSS) 보도자료(등록일 2020-11-18, 조회수 7709) 화면, 제목 '무(저)해지환급금 보험의 상품구조를 개선하고, 보험약관 이해도 평가 대상에 상품설명서를 추가하였습니다 - 보험업감독규정 개정-', 담당부서 생명보험검사국/보험사기대응단. 본문은 개정 내용 4개 항목(①상품구조 개선 ②정의 명확화 ③보험업법 제128조의4 이해도평가 대상 추가 ④보험협회 조회시스템 구축) 텍스트뿐이고 표는 없음, 첨부파일 PDF·HWP 2개.
  - no-surrender-value-cancel-4.png: 원본 1400x11646px의 매우 긴 페이지 캡처가 240px 폭으로 축소되어 텍스트와 표의 열/행 이름·숫자를 전혀 판독할 수 없음. 제목 한 줄과 본문 목록, 표 3~4개의 윤곽만 흐릿하게 보이고 내용은 읽을 수 없음.

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
- 근거로 쓰지 않은 출처: https://consumer.fss.or.kr/fss/bbs/B0000188/view.do?nttId=16016&menuNo=200218 (본문에 주제어(무해지)가 없다 — 다른 문서)

## 렌더 캡처
![no-surrender-value-cancel](no-surrender-value-cancel.png)

## 다음
- 이 보고서와 캡처를 보고 승인 → 배치가 다 끝나면 한 번에 커밋·푸시 (pre-push 게이트가 한 번 더 본다). 자동 푸시는 없다.
- 산출물: scripts/output/{plan,stage2,outline,factsheet,spec}-no-surrender-value-cancel.* · source-no-surrender-value-cancel.txt · captures/no-surrender-value-cancel-*.png
