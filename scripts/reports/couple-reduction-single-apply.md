# ✅ 통과 — couple-reduction-single-apply

- 타이틀: 부부 기초연금 감액 기준과 부부합산 소득, 단독 신청 비교와 축소 금액 (spec 고정 — 사장님이 줌)
- 키워드: 기초연금 · 허브: 기초연금 월 34만9700원, 소득인정액 기준과 국민연금 감액 여부 (/policy/basic-pension) · 폴더: 기초연금
- 실행: 2026. 9. 19. 오후 12:54:02 · 총 15.2분 · 고친 횟수 1 · 모델 sonnet
- 글: app/policy/[id]/[spoke]/content/기초연금/부부감액단독신청비교.tsx → https://gov.jjyu.co.kr/policy/basic-pension/couple-reduction-single-apply/
- 정본으로 쓴 글: app/policy/[id]/[spoke]/content/실손보험/나이별실비보험료.tsx

## 단계별 시간·사용량
| 단계 | 시간 | 모델 호출 | 입력 토큰 | 출력 토큰 | 환산 $ |
|---|---|---|---|---|---|
| guard | 0.0분 | - | - | - | - |
| plan | 1.9분 | 1 | 67k | 9k | 0.27 |
| cta | 0.0분 | - | - | - | - |
| collect | 0.7분 | - | - | - | - |
| captures | 0.3분 | 1 | 103k | 1k | 0.13 |
| write | 5.9분 | 1 | 112k | 39k | 0.79 |
| gates | 4.5분 | - | - | - | - |
| fix | 1.7분 | 1 | 110k | 10k | 0.49 |
| **합계** | **15.2분** | **4** | **393k** | **60k** | **1.69** |

> 구독이라 실제 청구는 없습니다. 환산 $ 는 사용 한도를 얼마나 먹었는지의 척도입니다. 호출마다 고정비(시스템 프롬프트) 약 3만 토큰이 붙습니다.

## 설계도 (구성표)
- 타이틀·소제목: spec 고정 (글자 그대로)
1. 부부가 함께 받으면 얼마나 깎이나요?
2. 부부합산 소득은 어떻게 잡히나요?
3. 한 사람만 단독 신청하면 유리한가요?  ← 버튼 슬롯
4. 감액이 축소되면 얼마나 더 받게 되나요?  ← 버튼 슬롯
- 상단 버튼: [부부감액 산출하기] → /policy/basic-pension/calculation-formula/
- qa3 버튼: [소득인정액 계산하기] → /policy/basic-pension/income-recognition-calc/
- qa4 버튼: [단독부부 기준 비교하기] → /policy/basic-pension/selection-threshold-single-couple/
  - ✓ /policy/basic-pension/calculation-formula/ (내부 경로)
  - ✓ /policy/basic-pension/income-recognition-calc/ (내부 경로)
  - ✓ /policy/basic-pension/selection-threshold-single-couple/ (내부 경로)
- 출처: https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95/(20251001,21065,20251001)/%EC%A0%9C10%EC%A1%B0 , https://www.law.go.kr/lsLinkCommonInfo.do?lsJoLnkSeq=1030188869 , https://law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95%20%EC%8B%9C%ED%96%89%EB%A0%B9 , https://www.korea.kr/news/policyNewsView.do?newsId=148971175
- 오해 소지: 부부가 각각 기준금액을 다 받아 둘이 합치면 두 배라고 착각하지만 실제로는 20% 감액이 들어갑니다 / 단독으로 신청하면 감액을 피할 수 있다고 오해하지만 배우자 소득·재산도 부부합산으로 잡혀 감액 자체는 피하지 못합니다 / 부부감액 축소·폐지가 이미 확정됐다고 착각하는 경우가 많은데 아직 검토·논의 단계입니다

## 증거
- 추출본 scripts/output/source-couple-reduction-single-apply.txt 61390자 · 캡처 4장 (scripts/output/captures/couple-reduction-single-apply-*.png)
  - couple-reduction-single-apply-1.png: 국가법령정보센터 기초연금법 조문 화면, 제10조(기초연금 지급의 신청)·제10조의2(기초연금 관련 정보의 제공)·제11조(조사·질문 등) 본문이 보이며 부부 감액이나 단독 신청 관련 조항은 이 화면에 없음
  - couple-reduction-single-apply-2.png: 국가법령정보센터 기초연금법 제8조(기초연금액의 감액) 화면, ①항에 본인과 배우자가 모두 수급권자인 경우 각각의 기초연금액에서 100분의 20(20%)을 감액한다고 명시, ②③항은 소득인정액과 기초연금액 합산액이 선정기준액 이상일 때 초과분 범위에서 일부 감액한다는 내용
  - couple-reduction-single-apply-3.png: 국가법령정보센터 기초연금법 시행령 제2조(소득의 범위) 화면, 근로소득·사업소득·재산소득(이자·배당)·연금소득·공적이전소득(국민연금·공무원연금 등 각 법률명 나열)의 소득 산정 범위 조문이 표시되고 부부 감액률 수치는 이 화면에 없음
  - couple-reduction-single-apply-4.png: 정책브리핑(korea.kr) 뉴스 기사 화면, 제목 "이 대통령, 기초연금의 국내 거주기간 요건 설정 등 제도 개선 지시"(2026.09.03), 국적 취득 시기와 무관하게 지급되는 기초연금 제도의 형평성 문제를 지적하며 국내 거주기간 요건 설정 등 개선을 지시했다는 내용, 부부 감액이나 단독 신청 수치는 없음

## 검사 (회차별)
| 검사 | 초안 | 고침 1 |
|---|---|---|
| tsc (타입) | ✓ | ✓ |
| 원문 대조 (check-source-match) | ✓ | ✓ |
| 수치 ↔ 출처 (check-source-backing) | ✓ | ✓ |
| 버튼 도배 (check-button-variety) | ✓ | ✓ |
| 승인 도장 (check-stage-approval) | ✓ | ✓ |
| 출처 링크 (check-source-links) | ✓ | ✓ |
| 배선 (verify-integrity) | ✓ | ✓ |
| 화면 (dev 렌더) | ✗ | ✓ |

## 실패 내용 — 초안
### 화면 (dev 렌더)
```
렌더 확인 실패: page.goto: net::ERR_CONNECTION_RESET at http://localhost:3111/policy/basic-pension/couple-reduction-single-apply/
```

## 렌더 캡처
![couple-reduction-single-apply](couple-reduction-single-apply.png)

## 다음
- 이 보고서와 캡처를 보고 승인 → 배치가 다 끝나면 한 번에 커밋·푸시 (pre-push 게이트가 한 번 더 본다). 자동 푸시는 없다.
- 산출물: scripts/output/{plan,stage2,outline,factsheet,spec}-couple-reduction-single-apply.* · source-couple-reduction-single-apply.txt · captures/couple-reduction-single-apply-*.png
