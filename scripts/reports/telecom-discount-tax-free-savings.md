# ✅ 통과 — telecom-discount-tax-free-savings

- 타이틀: 기초연금 수급자 통신비 감면 신청, 비과세종합저축 가입과 교통비까지 (spec 고정 — 사장님이 줌)
- 키워드: 기초연금 · 허브: 기초연금 월 34만9700원, 소득인정액 기준과 국민연금 감액 여부 (/policy/basic-pension) · 폴더: 기초연금
- 실행: 2026. 9. 19. 오후 5:22:32 · 총 18.8분 · 고친 횟수 1 · 모델 sonnet
- 글: app/policy/[id]/[spoke]/content/기초연금/통신비감면비과세저축.tsx → https://gov.jjyu.co.kr/policy/basic-pension/telecom-discount-tax-free-savings/
- 정본으로 쓴 글: app/policy/[id]/[spoke]/content/실손보험/나이별실비보험료.tsx

## 단계별 시간·사용량
| 단계 | 시간 | 모델 호출 | 입력 토큰 | 출력 토큰 | 환산 $ |
|---|---|---|---|---|---|
| guard | 0.0분 | - | - | - | - |
| plan | 6.3분 | 2 | 220k | 33k | 0.77 |
| cta | 0.1분 | - | - | - | - |
| collect | 0.8분 | - | - | - | - |
| captures | 0.6분 | 1 | 265k | 1k | 0.17 |
| write | 6.3분 | 1 | 110k | 39k | 0.78 |
| gates | 3.1분 | - | - | - | - |
| fix | 1.7분 | 1 | 108k | 10k | 0.48 |
| **합계** | **18.8분** | **5** | **704k** | **83k** | **2.20** |

> 구독이라 실제 청구는 없습니다. 환산 $ 는 사용 한도를 얼마나 먹었는지의 척도입니다. 호출마다 고정비(시스템 프롬프트) 약 3만 토큰이 붙습니다.

## 설계도 (구성표)
- 타이틀·소제목: spec 고정 (글자 그대로)
1. 통신비 감면은 어디에 신청하나요?
2. 휴대폰 요금이 얼마나 줄어드나요?
3. 비과세종합저축에 가입할 수 있나요?  ← 버튼 슬롯
4. 교통비나 에너지바우처도 지원되나요?  ← 버튼 슬롯
- 상단 버튼: [소득인정액 구간 확인하기] → /policy/basic-pension/income-recognition-calc/
- qa3 버튼: [비과세종합저축 금리 비교하기] → https://finlife.fss.or.kr/finlife/main/contents.do?menuNo=700067
- qa4 버튼: [기초연금 소득기준 확인하기] → /policy/basic-pension/selection-threshold-single-couple/
  - ✓ /policy/basic-pension/income-recognition-calc/ (내부 경로)
  - ✓ https://finlife.fss.or.kr/finlife/main/contents.do?menuNo=700067 (비과세종합저축 | 절세금융상품 | 저축 | 금융감독원 금융상품통합비교공시 금융상품한눈에)
  - ✓ /policy/basic-pension/selection-threshold-single-couple/ (내부 경로)
- 출처: ✗ https://finlife.fss.or.kr/finlife/main/contents.do?menuNo=700067 , https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%A0%84%EA%B8%B0%ED%86%B5%EC%8B%A0%EC%82%AC%EC%97%85%EB%B2%95%20%EC%8B%9C%ED%96%89%EB%A0%B9 , ✗ https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B5%AD%EB%AF%BC%EA%B8%B0%EC%B4%88%EC%83%9D%ED%99%9C%EB%B3%B4%EC%9E%A5%EB%B2%95 , https://www.law.go.kr/%ED%96%89%EC%A0%95%EA%B7%9C%EC%B9%99/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EC%A7%80%EA%B8%89%EB%8C%80%EC%83%81%EC%9E%90%EC%84%A0%EC%A0%95%EA%B8%B0%EC%A4%80%EC%95%A1,%EA%B8%B0%EC%A4%80%EC%97%B0%EA%B8%88%EC%95%A1%EB%B0%8F%EC%86%8C%EB%93%9D%EC%9D%B8%EC%A0%95%EC%95%A1%EC%82%B0%EC%A0%95%EC%84%B8%EB%B6%80%EA%B8%B0%EC%A4%80%EC%97%90%EA%B4%80%ED%95%9C%EA%B3%A0%EC%8B%9C
- 오해 소지: 기초연금만 받으면 통신비 감면도 자동으로 되는 줄 아는 경우 / 비과세종합저축을 기초연금 수급자면 누구나 무제한 가입 가능한 걸로 오해 / 에너지바우처를 기초연금 신청과 같은 절차로 착각

## 증거
- 추출본 scripts/output/source-telecom-discount-tax-free-savings.txt 137467자 · 캡처 4장 (scripts/output/captures/telecom-discount-tax-free-savings-*.png)
  - telecom-discount-tax-free-savings-1.png: 금융감독원 '금융상품한눈에' 비과세종합저축 페이지 — 가입대상은 만 65세 이상자·장애인·독립유공자·국가유공상이자·기초생활수급자·고엽제후유의증환자·5·18민주화운동부상자, 가입한도 총 5천만원, 주의사항에 가입가능기간 2025.12.31.까지, 관련법규 조세특례제한법 제88조의2
  - telecom-discount-tax-free-savings-2.png: 국가법령정보센터 전기통신사업법 시행령[시행 2026.4.28.][대통령령 제36281호] 제1장 총칙 화면 — 제2조(보편적 역무의 내용)에 유선전화·인터넷 가입자접속·긴급통신용 전화·장애인 저소득층 등 요금감면 서비스 항목이 나열되나, 통신요금 할인율·감면 대상자 소득기준 수치는 이 화면에 보이지 않음
  - telecom-discount-tax-free-savings-3.png: 국가법령정보센터 국민기초생활 보장법[시행 2025.10.1.][법률 제21065호] 제1장 총칙 화면 — 제2조(정의)에 수급권자·수급자·수급품·보장기관·부양의무자·최저보장수준·최저생계비·개별가구·소득인정액·차상위계층·기준 중위소득 용어 정의만 있고, 통신비 감면과 관련된 구체 수치는 보이지 않음
  - telecom-discount-tax-free-savings-4.png: 국가법령정보센터 '기초연금 지급대상자 선정기준액, 기준연금액 및 소득인정액 산정 세부기준에 관한 고시'[시행 2026.7.30.][보건복지부고시 제2026-156호] — 제2조 2026년도 선정기준액: 단독가구 월 소득인정액 2,470,000원·부부가구 3,952,000원, 제3조 2026년도 기준연금액 34만9천7백원, 제4조 무료임차소득 부과 기준 주택 시가표준액 6억원 이상

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
❌ [기초연금] 상단 버튼 — 같은 문장이 2번: "소득인정액 확인하기"
```

## 메모
- 근거로 쓰지 않은 출처: https://finlife.fss.or.kr/finlife/main/contents.do?menuNo=700067 (본문에 주제어(기초연금)가 없다 — 다른 문서) / https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B5%AD%EB%AF%BC%EA%B8%B0%EC%B4%88%EC%83%9D%ED%99%9C%EB%B3%B4%EC%9E%A5%EB%B2%95 (본문에 주제어(기초연금)가 없다 — 다른 문서)

## 렌더 캡처
![telecom-discount-tax-free-savings](telecom-discount-tax-free-savings.png)

## 다음
- 이 보고서와 캡처를 보고 승인 → 배치가 다 끝나면 한 번에 커밋·푸시 (pre-push 게이트가 한 번 더 본다). 자동 푸시는 없다.
- 산출물: scripts/output/{plan,stage2,outline,factsheet,spec}-telecom-discount-tax-free-savings.* · source-telecom-discount-tax-free-savings.txt · captures/telecom-discount-tax-free-savings-*.png
