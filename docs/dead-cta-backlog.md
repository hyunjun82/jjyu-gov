# 죽은 CTA 정리 백로그 (2026-08-01 기준)

## 배경
허브의 `applyUrl`이 기관 **메인/루트 도메인**으로 걸려 있으면, 사용자가 버튼을 눌러도
그 글이 유도한 행동(신청·조회·발급) 화면이 아니라 기관 홈으로 떨어진다.
방문 → 클릭 → 내부 이동으로 이어지는 수익 동선이 여기서 끊긴다.

원칙(CLAUDE.md 절대규칙 1): **CTA는 그 글의 행동 키워드와 정확히 일치하는 목적지로.**

## 진행 방법 (검증된 절차)
1. Playwright로 네이버 검색 `"<기관명> <제도명>"` → 결과에서 공식 딥링크 추출
   - 복지로: `wlfareInfoId=WLF00XXXXX` 패턴
   - 고용24: `selecSystInfo.do?systId=SI00000XXX` 패턴 (work24는 `evaluate` 차단 → 포털 경유)
   - 한국장학재단: `tuition.do?pg=...&naviParam=...`
2. 해당 URL을 Playwright로 직접 열어 404/리다이렉트 확인
3. `applyUrl` 교체 + `ctaLabel` 지정 + qa 카드별 `act: {cue, label, url}` 부여
   - 목적지는 카드 성격별로 분리(조회/신청/검색) — 전부 같으면 `목적지 뭉침`으로 게이트 차단
   - 문구 종결어미 3회 이상 반복 금지, 라벨은 "…보기" 금지
4. 게이트 4종 통과 후 커밋

## 완료 (2026-08-01)
| 허브 | 교체 후 목적지 |
|---|---|
| general-student-loan / rural-student-loan | 한국장학재단 제도안내·일정·절차·상환·신용회복 |
| child-development-account | 복지로 WLF00003258 |
| maternal-newborn-care | 복지로 WLF00001188 + 사회서비스 전자바우처 제공기관검색 |
| elderly-emergency-safety | 복지로 WLF00001093 |
| youth-monthly-rent | 복지로 WLF00004661 + 마이홈 자가진단 |
| nutrition-plus | 복지로 WLF00006239 |
| dream-start | 복지로 WLF00003283 |
| senior-customized-care | 복지로 WLF00003191 |
| national-happiness-card | 복지로 WLF00006313 |
| dementia-center | 중앙치매센터 시설찾기 |
| spouse-birth-leave-pay | 고용24 SI00000395 |
| parental-work-reduction-pay | 고용24 SI00000397 |
| infertility-treatment-leave | 고용24 SI00000497 |
| infant-childcare-fee | 복지로 WLF00003250 + 온라인 서비스신청 |
| newborn-special-loan | 주택도시기금 대출안내·전세·대환·이용절차 |
| travel-duty-free | 관세청 휴대품통관·입국장면세점·외환신고 |
| job-seeker-benefit | 고용24 SI00000387 + 모의계산 |
| employment-promotion | 고용24 SI00000370 |
| elderly-continue-employ | 고용24 SI00000320 + 고령자 고용지원금 SI00000328 |
| old-age-pension / national-pension-premium / national-pension-reduction / low-income-pension | 국민연금 전자민원 조회·신고신청, 내 연금 알아보기 |
| infant-health-checkup | 건강보험 영유아 검진대상 조회·기관찾기·결과조회 |
| loss-sharing-mortgage / profit-sharing-mortgage / officetel-purchase-loan / residential-monthly-rent-loan | 마이홈 상품 상세 + 주거복지 자가진단 |
| teen-female-hygiene | 복지로 WLF00000781 |
| earned-income-tax-credit | 홈택스 장려금 메뉴 |

## 남은 대상 (약 78곳) — 기관별 묶음
- **복지로(bokjiro)**: after-school-childcare-fee, extended-childcare-fee, family-care-leave-long, student-edu-info, teen-female-hygiene
- **보건복지부(mohw)**: community-care-center, dementia-helpline, happy-birth-onestop, home-childcare-allowance, medical-aid-elderly-denture, mom-pregnancy-onestop, protected-child-scholar
- **고용노동부(moel)**: birth-care-employment-grant, dc-pension-early-withdrawal, k-move-school, uninsured-birth-grant
- **고용24(work24 루트)**: elderly-continue-employ, elderly-job, employment-promotion, job-seeker-benefit
- **건강보험(nhis)**: farmer-insurance, infant-health-checkup, national-health-insurance, national-health-insurance-regional
- **국민연금(nps)**: low-income-pension, national-pension-premium, national-pension-reduction, old-age-pension
- **인터넷등기소(iros)**: inheritance-registration, jeonse-right-registration, mortgage-cancellation, real-estate-registry-certificate
- **홈택스/위택스**: earned-income-tax-credit, property-tax 외 (일부는 ctaLabel만 있고 URL은 루트)
- **마이홈(myhome)**: loss-sharing-mortgage, officetel-purchase-loan, profit-sharing-mortgage, residential-monthly-rent-loan
- **농식품부(mafra)**: farm-helper, farmland-retirement-payment, rural-basic-income, sme-meal
- **기타 기관**: fss, crefia, koroad, kofic, kdic, kinfa, moj, iros, chak, epostlife, adrhome.reb 등

## 미확인 → 후순위
- 인터넷등기소 4곳: WebSquare SPA — 정적 딥링크 없음
- 노인일자리(seniorro)·청년일자리: 모집공고 목록 URL 미확보
- 농식품부 4곳(영농도우미·농지연금·농촌기본소득·농식품바우처): 사업별 창구 분산, 개별 확인 필요
- 복지로 4곳(방과후·연장형 보육료, 가족돌봄휴직, 교육정보화): 포털에 상세 ID 미노출
- 주택도시기금 FP05/FP02 경로 일부는 406 반환 — 마이홈 상세로 우회함
- K-Move 스쿨(월드잡플러스 목록 URL 404) — 공식 모집 화면 재확인 필요
- 출산육아기 고용안정장려금 — 고용24 systId 미검색
- rural-student-loan: `ruralStudentLoanSpokes` 5개가 배열에만 있고 콘텐츠 파일 없음 → 허브가 막다른 길. 스포크 신규 작성 필요.
