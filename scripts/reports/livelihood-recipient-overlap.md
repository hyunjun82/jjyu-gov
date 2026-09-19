# ✅ 통과 — livelihood-recipient-overlap

- 타이틀: 기초수급자 기초연금 신청과 생계급여 삭감 기준, 주거급여 중복 비교 (spec 고정 — 사장님이 줌)
- 키워드: 기초연금 · 허브: 기초연금 월 34만9700원, 소득인정액 기준과 국민연금 감액 여부 (/policy/basic-pension) · 폴더: 기초연금
- 실행: 2026. 9. 19. 오후 5:02:56 · 총 12.2분 · 고친 횟수 1 · 모델 sonnet
- 글: app/policy/[id]/[spoke]/content/기초연금/생계급여주거급여비교.tsx → https://gov.jjyu.co.kr/policy/basic-pension/livelihood-recipient-overlap/
- 정본으로 쓴 글: app/policy/[id]/[spoke]/content/실손보험/나이별실비보험료.tsx

## 단계별 시간·사용량
| 단계 | 시간 | 모델 호출 | 입력 토큰 | 출력 토큰 | 환산 $ |
|---|---|---|---|---|---|
| guard | 0.0분 | - | - | - | - |
| plan | 2.2분 | 1 | 68k | 12k | 0.30 |
| cta | 0.0분 | - | - | - | - |
| collect | 0.6분 | - | - | - | - |
| captures | 0.5분 | 1 | 258k | 998 | 0.16 |
| write | 5.0분 | 1 | 121k | 29k | 0.74 |
| gates | 2.5분 | - | - | - | - |
| fix | 1.2분 | 1 | 119k | 9k | 0.52 |
| **합계** | **12.2분** | **4** | **565k** | **51k** | **1.72** |

> 구독이라 실제 청구는 없습니다. 환산 $ 는 사용 한도를 얼마나 먹었는지의 척도입니다. 호출마다 고정비(시스템 프롬프트) 약 3만 토큰이 붙습니다.

## 설계도 (구성표)
- 타이틀·소제목: spec 고정 (글자 그대로)
1. 기초생활수급자도 기초연금을 신청하나요?
2. 기초연금을 받으면 생계급여가 얼마나 줄어드나요?
3. 주거급여와는 함께 받을 수 있나요?  ← 버튼 슬롯
4. 합쳐서 손에 쥐는 돈은 늘어나나요?  ← 버튼 슬롯
- 상단 버튼: [가구 소득인정액 계산하기] → /policy/basic-pension/income-recognition-calc/
- qa3 버튼: [중복수급 내 금액 조회하기] → /policy/basic-pension/duplicate-benefit/
- qa4 버튼: [기초연금 총정리 확인하기] → /policy/basic-pension
  - ✓ /policy/basic-pension/income-recognition-calc/ (내부 경로)
  - ✓ /policy/basic-pension/duplicate-benefit/ (내부 경로)
  - ✓ /policy/basic-pension (내부 경로)
- 출처: https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95/(20251001,21065,20251001)/%EC%A0%9C10%EC%A1%B0 , https://law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95%20%EC%8B%9C%ED%96%89%EB%A0%B9 , https://www.law.go.kr/법령/국민기초생활보장법 시행령 , ✗ https://www.law.go.kr/법령/주거급여법
- 오해 소지: 기초연금을 받으면 생계급여가 전액 끊긴다고 오해한다 / 주거급여도 기초연금 때문에 무조건 줄어든다고 오해한다

## 증거
- 추출본 scripts/output/source-livelihood-recipient-overlap.txt 51242자 · 캡처 4장 (scripts/output/captures/livelihood-recipient-overlap-*.png)
  - livelihood-recipient-overlap-1.png: 국가법령정보센터 '기초연금법' 본문 화면(시행 2025.10.1. 법률 제21065호), 제10조(기초연금 지급의 신청)·제10조의2(관련 정보 제공)·제11조(조사·질문 등) 조문이 보이며 표는 없고 조문 텍스트만 나열됨.
  - livelihood-recipient-overlap-2.png: 국가법령정보센터 '기초연금법 시행령'(시행 2026.7.30. 대통령령 제36371호) 화면, 제1조(목적)·제2조(소득의 범위)가 보이고 1.근로소득 2.사업소득 3.재산소득 4.공적이전소득 항목별로 국민연금법·공무원연금법 등 관련 법률명이 나열된 목록(표 아님, 조문 텍스트)임.
  - livelihood-recipient-overlap-3.png: 국가법령정보센터 '국민기초생활 보장법 시행령'(시행 2026.1.2. 대통령령 제35948호) 화면, 제2조(개별가구) 정의와 제3조(차상위계층: 기준 중위소득의 100분의 50 이하)·제4조(수급권자에 해당하는 외국인의 범위) 조문이 보이며 표는 없음.
  - livelihood-recipient-overlap-4.png: 국가법령정보센터 '주거급여법'(시행 2023.10.19. 법률 제19390호) 화면, 제1조~제7조 조문이 보이고 제5조(수급권자의 범위)에 '주거급여 선정기준은 기준 중위소득의 100분의 43 이상'이라는 문구가 확인됨, 표는 없음.

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

## 메모
- 근거로 쓰지 않은 출처: https://www.law.go.kr/법령/주거급여법 (본문에 주제어(기초연금)가 없다 — 다른 문서)

## 렌더 캡처
![livelihood-recipient-overlap](livelihood-recipient-overlap.png)

## 다음
- 이 보고서와 캡처를 보고 승인 → 배치가 다 끝나면 한 번에 커밋·푸시 (pre-push 게이트가 한 번 더 본다). 자동 푸시는 없다.
- 산출물: scripts/output/{plan,stage2,outline,factsheet,spec}-livelihood-recipient-overlap.* · source-livelihood-recipient-overlap.txt · captures/livelihood-recipient-overlap-*.png
