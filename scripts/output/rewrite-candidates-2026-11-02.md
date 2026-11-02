# 구버전 글 리라이트 대상 (2026-11-02)

**노출 데이터 없음** — scripts/output/searchadvisor-expose-all-gov*.json 이 이 환경에 없다(커밋하지 않는 로컬 파일). 아래는 옛 템플릿 구버전 후보 전체 1474편이고, 노출 0 필터는 아직 안 걸렸다.

구버전 = facts.json 없음(파이프라인으로 쓴 적 없음) + dateModified < 2026-10-01 + 2026-10-01 이후 리라이트 커밋에 없음. 옛 템플릿 = 서론 없음 또는 카드 7개 이상. 고객센터 글 제외.
git 은 얕은 클론이라 2026-10-28 이후 커밋만 보인다.

| 구분 | 글 수 |
|---|---|
| 전체 글(허브+스포크) | 3720 |
| 새 글·이미 리라이트(facts.json 있음) | 595 |
| 고객센터(제외) | 1386 |
| 2026-10-01 이후 손댄 글, facts 없음(제외, 부록 B) | 84 |
| 구버전인데 새 모양(서론 있음·카드 6개 이하, 부록 C) | 181 |
| **옛 템플릿 구버전 후보** | **1474** |

## 허브 묶음별 (747묶음 · 글 수 많은 순)

| 번호 | 허브 slug | 허브 제목 | 카테고리 | 대상 글 수 | 허브 본글 포함 | 서론 없는 글 | 카드 수 | 마지막 수정 |
|---|---|---|---|---|---|---|---|---|
| 1 | youth-future-savings | 청년미래적금 정부매칭과 가입조건, 3년 만기 수령액까지 | fund | 17 | O | 15 | 7 | 2026-05-23~2026-08-05 |
| 2 | caregiver-insurance | 간병인보험 가입조건과 청구 방법, 하루 일당은 얼마까지? | insurance | 15 | O | 14 | 3~7 | 2026-08-23~2026-08-24 |
| 3 | earned-income-tax-credit | 근로장려금 반기신청과 재산기준, 자녀장려금은 따로 신청하나요? | fund | 14 | O | 14 | 7 | 2026-05-23~2026-06-27 |
| 4 | national-pension-premium | 국민연금 보험료 기준소득월액과 상한액·하한액, 가입자 종류까지 | pension | 14 | O | 14 | 7~8 | 2026-06-27~2026-07-08 |
| 5 | national-scholar | 국가장학금 소득분위 산정과 신청시기, 성적 낮으면 못 받나요? | fund | 13 | O | 11 | 7~8 | 2026-05-23~2026-08-06 |
| 6 | small-biz-policy-fund | 소상공인 정책자금 신청 방법, 5차 변경 공고 자금별 한도와 최대 10억 | fund | 12 | - | 9 | 7 | 2026-06-28~2026-08-03 |
| 7 | climate-card-refund | 기후동행카드 환급 받는 방법…티머니 카드&페이 누리집 가입이 먼저라는데. | refund | 11 | O | 10 | 7~8 | 2026-07-01~2026-07-22 |
| 8 | industrial-accident-insurance | 산재보험 업무상 재해 인정범위와 휴업급여, 후유장해 보상까지 | welfare | 11 | O | 11 | 7~8 | 2026-06-27~2026-07-17 |
| 9 | happiness-card-bebang | 베팡 신청방법과 국민·롯데·삼성카드 비교, 어디가 유리할까? | welfare | 10 | O | 10 | 7~8 | 2026-07-01 |
| 10 | k-pass | K-패스 모두의카드 정률제 정액제 차이와 가입방법, 반값이벤트까지 | refund | 10 | O | 10 | 7 | 2026-05-23~2026-08-01 |
| 11 | family-care-leave | 가족돌봄휴가 신청조건과 돌봄대상, 가족돌봄휴직과 차이까지 | fund | 9 | O | 8 | 7~8 | 2026-05-23 |
| 12 | samsung-onnuri-refund | 삼성전자 온누리 환급 방법, 신청 언제까지 해야 할까? | refund | 9 | O | 9 | 7~8 | 2026-07-01 |
| 13 | youth-tomorrow-savings | 청년내일저축계좌 신청자격과 만기유지 조건, 중도해지하면 | savings | 9 | O | 9 | 7 | 2026-05-23~2026-06-26 |
| 14 | job-seeker-benefit | 구직급여(실업급여) 수급자격과 신청방법, 비자발적 이직 인정기준 | fund | 8 | O | 6 | 7 | 2026-06-26~2026-08-06 |
| 15 | small-biz-closed-debt | 폐업 소상공인 채무 조정 및 재기 지원 (희망리턴패키지) | loan | 8 | O | 8 | 7 | 2026-05-23~2026-06-28 |
| 16 | child-support-enforcement | 양육비 미지급 신고부터 이행관리원 신청까지, 안 줄 때 받아내는 법 | welfare | 7 | O | 7 | 7 | 2026-07-29 |
| 17 | maternity-leave-pay | 출산전후휴가급여 중소기업·대기업 차이와 90일 분할, 육아휴직 연계 | fund | 7 | O | 6 | 7~8 | 2026-05-23~2026-08-01 |
| 18 | national-pension-reduction | 노령연금 감액 기준 519만원으로 상향, 2025년분 자동환급까지 | pension | 7 | O | 7 | 7~8 | 2026-06-20~2026-06-28 |
| 19 | property-tax | 재산세 과세기준일과 1세대1주택 특례, 조회납부 방법까지 | tax | 7 | O | 7 | 7~8 | 2026-06-27~2026-08-01 |
| 20 | samsung-miso-finance-loan | 삼성미소금융재단 대출 신청조건과 대출상품, 서류까지 총정리 | loan | 7 | O | 6 | 7 | 2026-07-20~2026-08-01 |
| 21 | beotimok-jeonse-loan | 버팀목 전세자금대출 신청자격과 한도·금리, 청년버팀목과 차이 | loan | 6 | O | 5 | 7~8 | 2026-06-27 |
| 22 | bogeumjari-loan | 보금자리론 신청자격과 디딤돌대출 차이, 우대금리 얼마나 깎이나 | loan | 6 | O | 6 | 7~8 | 2026-06-28~2026-07-31 |
| 23 | card-fee-support | 소상공인 카드수수료 우대율과 환급, 부가세 세액공제까지 | refund | 6 | O | 5 | 7~8 | 2026-06-28~2026-07-31 |
| 24 | child-sex-crime-report-reward | 아동청소년 성범죄 신고포상금 대상범죄와 신청방법, 지급 제외사유 | welfare | 6 | O | 6 | 7~8 | 2026-06-29 |
| 25 | didimdol-loan | 디딤돌대출 신청자격과 주택가액 한도, 생애최초·신혼 우대까지 | loan | 6 | O | 6 | 7~8 | 2026-06-28 |
| 26 | disability-activity-support | 장애인 활동지원서비스 종합조사와 본인부담금, 이용시간까지 | welfare | 6 | O | 6 | 7~8 | 2026-06-27 |
| 27 | dosu-therapy | 도수치료 가격·이용기준, 2026년 7월 관리급여로 이렇게 바뀝니다 | life | 6 | O | 6 | 7~8 | 2026-07-01~2026-07-16 |
| 28 | efficient-appliance-support | 전기요금 복지할인 대상 취약계층 고효율가전 구매지원 | refund | 6 | O | 6 | 7 | 2026-05-23~2026-06-26 |
| 29 | employment-incentive-allowance | 취업촉진수당 조기재취업수당 요건과 직업능력개발수당 신청방법 | fund | 6 | O | 6 | 7 | 2026-05-23~2026-06-28 |
| 30 | first-meet | 첫만남이용권 신청기한과 사용처, 쌍둥이·다둥이는 어떻게 받나요? | fund | 6 | O | 5 | 7 | 2026-05-23~2026-08-06 |
| 31 | gyeonggi-youth-welfare-point | 경기도 청년 복지포인트 사용처와 신청방법, 중소기업 노동자 지원과 차이 | youth | 6 | O | 6 | 7~8 | 2026-06-29 |
| 32 | health-certificate | 보건증 인터넷 발급받고 유효기간 조회하는 법 | issue | 6 | O | 6 | 7 | 2026-07-29 |
| 33 | inheritance-renunciation | 상속포기·한정승인 차이와 3개월 기한, 빚 상속 총정리 | life | 6 | O | 6 | 7 | 2026-07-02 |
| 34 | jeonse-fraud-victim | 전세사기 피해자 인정요건과 우선매수권·LH매입, 당장 살 곳 없으면 | welfare | 6 | O | 6 | 7~8 | 2026-06-27 |
| 35 | jeonse-protection | 전세보증금 지키는 법·전세사기 예방, 대항력·확정일자 | life | 6 | O | 5 | 7 | 2026-07-02~2026-08-07 |
| 36 | job-seeker-leap-package | 구직자 도약보장 패키지 | welfare | 6 | O | 6 | 7 | 2026-05-23~2026-06-28 |
| 37 | living-stability-loan | 중저신용자 생활안정자금 신청자격과 금리, 다주택자도 되나요? | loan | 6 | O | 6 | 7~8 | 2026-06-28 |
| 38 | medical-benefit | 의료급여 1종 2종 차이와 본인부담금, 건강생활유지비까지 | medical | 6 | O | 6 | 7~8 | 2026-06-27 |
| 39 | national-health-insurance | 국민건강보험 직장가입자 자격 조회하고 보험료·요양급여 확인하는 법 | insurance | 6 | O | 6 | 7 | 2026-07-17 |
| 40 | near-poor | 차상위계층 기초생활수급자와 차이, 소득기준과 혜택 종류 | welfare | 6 | O | 6 | 7~8 | 2026-06-27 |
| 41 | old-age-pension | 노령연금 몇 살부터 받는지 조회하고 예상연금액 계산하는 법 | pension | 6 | O | 1 | 7~8 | 2026-07-17~2026-08-09 |
| 42 | resident-tax | 주민세 조회하고 8월 16일까지 납부하는 법, 개인분 얼마 내나 | tax | 6 | O | 5 | 7~9 | 2026-07-29~2026-08-10 |
| 43 | safe-inheritance-onestop | 안심상속 원스톱 서비스 | welfare | 6 | O | 6 | 7 | 2026-05-23~2026-07-29 |
| 44 | small-biz-online-sales | 소상공인 온라인 판로지원 라이브커머스와 TV홈쇼핑까지 되나요? | fund | 6 | O | 6 | 7~8 | 2026-06-28 |
| 45 | sme-sunshine-card | 소상공인 특례 햇살론카드 한도와 필수교육, 일반 햇살론카드와 차이 | loan | 6 | O | 6 | 7 | 2026-06-28 |
| 46 | sme-youth-jeonse-loan | 중기청 전세대출 대출한도와 금리, 버팀목·청년전세대출과 차이 | loan | 6 | O | 6 | 7~8 | 2026-06-28 |
| 47 | sunshine-loan-119 | 햇살론119 신청자격과 금리·보증료, 다른 햇살론과 차이 | loan | 6 | O | 6 | 7 | 2026-06-28 |
| 48 | sunshine-loan-card | 햇살론카드 발급 자격과 한도, 필수교육은 왜 받아야 하나요? | loan | 6 | O | 6 | 7 | 2026-06-28 |
| 49 | sunshine-loan-general | 햇살론일반 신청자격과 상환방법, 보증료 인하 받는 법 | loan | 6 | O | 6 | 7 | 2026-06-28 |
| 50 | sunshine-loan-special | 햇살론특례 햇살론일반과 차이, 신청해도 거절될 수 있나요? | loan | 6 | O | 6 | 7 | 2026-06-28 |
| 51 | sunshine-youth-loan | 햇살론유스 신청자격과 거치·상환기간, 특정용도자금이란 | loan | 6 | O | 5 | 7 | 2026-06-28 |
| 52 | teen-female-hygiene | 여성청소년 생리용품 지원 신청방법, 24세 넘으면 못 받나요? | fund | 6 | O | 6 | 7~8 | 2026-06-29 |
| 53 | vulnerable-livelihood-loan | 금융취약계층 생계자금 청년미래이음대출과 차이, 거절될 수 있나요? | loan | 6 | O | 6 | 7 | 2026-06-28 |
| 54 | youth-future-link-loan | 청년 미래이음대출 신청자격과 금리, 햇살론유스와 차이 | loan | 6 | O | 6 | 7 | 2026-06-28 |
| 55 | youth-monthly-rent | 청년월세 특별지원 소득재산 기준, 주거급여 받으면 못 받나요? | youth | 6 | O | 6 | 7~8 | 2026-06-27 |
| 56 | youth-welfare-point-compare | 청년 복지포인트 경기·인천 비교, 여러 지역 동시에 받을 수 있나요? | youth | 6 | O | 6 | 7~8 | 2026-06-29 |
| 57 | after-school-childcare-fee | 방과후 보육료 지원 대상연령과 신청방법, 소득 상관없이 되나요? | fund | 5 | O | 5 | 7~8 | 2026-05-23~2026-08-01 |
| 58 | artist-pension | 예술인 국민연금 보험료 지원, 활동증명부터 다른 지원 중복까지 | pension | 5 | O | 5 | 7~8 | 2026-05-23~2026-08-01 |
| 59 | birth-care-employment-grant | 출산육아기 고용안정장려금 대체인력·업무분담 지원금, 10시 출근제까지 | fund | 5 | O | 5 | 7~8 | 2026-05-20~2026-08-01 |
| 60 | cancer-patient-medical-aid | 암환자 의료비 지원 | welfare | 5 | O | 5 | 7 | 2026-05-23 |
| 61 | child-care-service | 아이돌봄서비스 시간제·종일제 차이와 신청방법, 본인부담금까지 | service | 5 | O | 4 | 7~8 | 2026-05-23~2026-08-01 |
| 62 | child-development-account | 디딤씨앗통장 신청자격과 만기지급액, 차상위계층도 되나요? | savings | 5 | O | 5 | 7 | 2026-05-23 |
| 63 | child-meal-card | 아동급식카드 지원대상·신청방법·사용처 총정리, 결식우려 아동 급식지원 | welfare | 5 | O | 4 | 7 | 2026-05-23~2026-08-01 |
| 64 | childcare-infant-education | 유아 무상교육·보육 지원대상과 학부모 부담 절감액, 신청방법 | fund | 5 | O | 5 | 7 | 2026-05-23 |
| 65 | closed-biz-repayment-relief | 폐업 소상공인 정책자금 상환부담 완화, 취업하면 상환연장·금리감면 | loan | 5 | O | 5 | 7~8 | 2026-07-01 |
| 66 | college-student-housing | 대학생 주거지원 행복주택 입주자격, 청년전세임대 신청방법 | youth | 5 | O | 5 | 7 | 2026-05-23 |
| 67 | community-care-center | 다함께돌봄센터 이용대상과 이용료, 지역아동센터와 차이까지 | service | 5 | O | 5 | 7~8 | 2026-05-23~2026-08-01 |
| 68 | community-child-center | 지역아동센터 이용대상과 이용료, 다함께돌봄센터와 차이는? | fund | 5 | O | 5 | 7~8 | 2026-05-23~2026-08-01 |
| 69 | crime-victim-aid | 범죄피해구조금 신청기한과 대상, 손해배상과 중복으로 받나요? | fund | 5 | O | 5 | 7 | 2026-05-23 |
| 70 | crime-victim-stable | 범죄피해자 긴급생활안정비 구조금과 중복여부, 의료비 지원까지 | fund | 5 | O | 5 | 7 | 2026-05-23 |
| 71 | debtor-lawyer-free-support | 채무자 대리인(변호사) 무료 지원사업 | welfare | 5 | O | 5 | 7 | 2026-05-23 |
| 72 | direct-payment | 공익직불제 신청시기와 준수사항, 농지 작으면 못 받나요? | fund | 5 | O | 5 | 7 | 2026-05-23 |
| 73 | disabled-women-childcare | 여성장애인 보육특례 우선입소 점수와 보육료 계산, 중복지원까지 | childcare | 5 | O | 5 | 7 | 2026-05-23 |
| 74 | dream-ladder | 꿈사다리 장학사업 드림장학금과 차이, 멘토링은 어떻게 하나요? | fund | 5 | O | 5 | 7~8 | 2026-05-23 |
| 75 | dream-scholarship | 드림장학금 꿈사다리와 차이, 해외유학과 국내진학 신청조건 | fund | 5 | O | 5 | 7~8 | 2026-05-23 |
| 76 | dream-start | 드림스타트 사례관리와 건강·학습 서비스, 다른 사업과 중복여부 | service | 5 | O | 5 | 7~8 | 2026-05-23 |
| 77 | drunk-driving | 음주운전 처벌 기준·형량·면허취소·2회 이상 가중 총정리 | life | 5 | O | 5 | 7 | 2026-07-03 |
| 78 | durunuri-social-insurance | 두루누리 사회보험료 지원 — 소규모 사업장 고용·연금보험료 80% 지원 | pension | 5 | O | 5 | 7 | 2026-05-23 |
| 79 | dv-shelter-leaver-aid | 가정폭력 보호시설 퇴소자 자립지원금 대상과 주거지원, 취업훈련까지 | fund | 5 | O | 5 | 7~8 | 2026-05-23~2026-06-18 |
| 80 | education-benefit | 교육급여 신청방법과 교육비 지원 차이, 바우처 받는 법 | welfare | 5 | O | 5 | 7 | 2026-05-23 |
| 81 | elderly-emergency-safety | 응급안전안심서비스 신청대상과 비용, 다른 노인복지 중복여부 | fund | 5 | O | 5 | 7~8 | 2026-05-23 |
| 82 | elderly-hearing-aid | 노인 보청기 지원 총정리, 건강보험 급여 조건·본인부담·신청 절차 | medical | 5 | O | 5 | 7 | 2026-05-23~2026-07-02 |
| 83 | elderly-job | 노인일자리 신청자격과 기초연금 중복여부, 활동 중 다치면? | fund | 5 | O | 5 | 7 | 2026-05-23 |
| 84 | employment-promotion | 고용촉진장려금 지원대상과 근로조건, 다른 장려금 중복여부 | fund | 5 | O | 5 | 7~8 | 2026-05-23~2026-06-19 |
| 85 | energy-voucher | 에너지바우처 신청방법과 사용처, 전기요금 복지할인 중복여부 | welfare | 5 | O | 4 | 7~8 | 2026-05-23~2026-07-31 |
| 86 | free-legal-aid | 무료 법률 구조 서비스 | welfare | 5 | O | 5 | 7 | 2026-05-23 |
| 87 | general-student-loan | 일반상환 학자금대출 재학중 이자와 상환시기, 국가장학금과 차이 | loan | 5 | O | 4 | 7~8 | 2026-05-23~2026-07-31 |
| 88 | hidden-insurance-money | 숨은보험금 조회 방법과 종류별 차이, 소멸시효까지 정리 | refund | 5 | O | 4 | 7 | 2026-07-08 |
| 89 | highway-toll-discount | 고속도로 통행료 감면 확대 2026 하반기, 장애인·유공자 세대원차·다자녀 주말 | welfare | 5 | O | 4 | 7 | 2026-07-01~2026-07-22 |
| 90 | home-equity-pension | 주택연금 가입조건과 지급방식, 세금혜택은 어떻게 되나요? | pension | 5 | O | 5 | 7 | 2026-05-23 |
| 91 | housing-benefit | 주거급여 신청자격과 임차·자가가구 지원, 다른 급여 중복여부 | welfare | 5 | O | 5 | 7 | 2026-05-23 |
| 92 | illegal-loan-prevention | 불법사금융예방대출 신청자격과 완제자 인센티브, 금리는 얼마 | loan | 5 | O | 5 | 7 | 2026-05-23 |
| 93 | infant-childcare-fee | 영유아보육료 본인부담과 가정양육수당 차이, 누리과정까지 | fund | 5 | O | 5 | 7~8 | 2026-05-23 |
| 94 | infant-health-checkup | 영유아 건강검진 신청방법과 비용, 결과 이상 있으면 어떻게 하나요? | fund | 5 | O | 5 | 7~8 | 2026-05-23 |
| 95 | inheritance-division | 상속재산 분할·법정상속분·유류분·상속세 총정리 | life | 5 | O | 5 | 7 | 2026-07-02 |
| 96 | k-pass-modu-card | K-패스 모두의카드, 신청·전환·차이·환급 총정리 | life | 5 | O | 5 | 7 | 2026-07-07 |
| 97 | leap-loan | 새도약론 대출한도와 새도약기금 차이, 특별채무조정까지 | loan | 5 | O | 5 | 7 | 2026-05-23 |
| 98 | learning-card | 국민내일배움카드 신청자격과 자기부담금, 수강 가능한 훈련과정 | fund | 5 | O | 5 | 7 | 2026-05-23~2026-07-10 |
| 99 | legal-aid-system | 법률구조제도 소득기준과 소송대리 신청절차, 비용은 얼마나 드나요? | welfare | 5 | O | 4 | 7 | 2026-05-23 |
| 100 | lifelong-education-voucher | 평생교육이용권 유형별 신청자격과 지원금액, 수강 가능한 강좌 | welfare | 5 | O | 5 | 7 | 2026-05-23 |
| 101 | long-term-care-elderly | 노인장기요양 등급별 월한도액과 시설·재가급여 차이, 본인부담 감경까지 | service | 5 | O | 4 | 7~8 | 2026-05-23~2026-07-17 |
| 102 | low-income-energy-efficiency | 저소득층 에너지 효율 개선사업 | welfare | 5 | O | 5 | 7 | 2026-05-23 |
| 103 | maternal-newborn-care | 산모신생아 건강관리 신청기한과 본인부담, 다른 출산지원 중복여부 | fund | 5 | O | 5 | 7~9 | 2026-05-23 |
| 104 | national-happiness-card | 국민행복카드 발급방법과 사용처, 카드사별 혜택 차이 | fund | 5 | O | 5 | 7~8 | 2026-05-23 |
| 105 | national-health-checkup | 국가건강검진 대상자와 연령별 검사항목, 암검진 비용까지 | welfare | 5 | O | 4 | 7 | 2026-05-23~2026-06-28 |
| 106 | newlywed-housing-support | 신혼부부 주거지원 행복주택 자격과 디딤돌 한도, 자산기준까지 | loan | 5 | O | 5 | 7 | 2026-05-23 |
| 107 | parent-allowance | 부모급여 지급일과 신청방법, 어린이집 이용하면 어떻게 되나요? | fund | 5 | O | 4 | 7 | 2026-05-23~2026-07-31 |
| 108 | platform-worker-insurance | 특고·플랫폼 종사자 고용보험 총정리, 적용 직종·월 보수 80만원 기준·실업급여 | welfare | 5 | O | 5 | 7 | 2026-05-23~2026-07-02 |
| 109 | pregnancy-medical-benefit | 임신·출산 진료비 지원 사용기간과 사용처, 다태아 추가금액까지 | medical | 5 | O | 4 | 7 | 2026-05-23 |
| 110 | public-housing-sale | 공공분양주택 청약자격과 특별공급 유형, 당첨자 선정방식 | loan | 5 | O | 5 | 7 | 2026-05-23 |
| 111 | public-rental-housing | 공공임대주택 유형별 신청자격과 임차료, 공공분양과 차이 | welfare | 5 | O | 5 | 7 | 2026-05-23 |
| 112 | saeil-women-intern | 새일여성인턴 (경력 단절 여성 취업 지원) | welfare | 5 | O | 5 | 7 | 2026-05-23 |
| 113 | self-employed-employment-insurance | 자영업자 고용보험 등급별 보험료와 구직급여, 폐업사유 인정기준 | fund | 5 | O | 5 | 7 | 2026-05-23~2026-08-01 |
| 114 | seomin-financial-center | 서민금융통합지원센터 이용자격과 채무조정, 연계 금융상품까지 | welfare | 5 | O | 5 | 7 | 2026-05-23 |
| 115 | seoul-childbirth-housing-support | 서울시 출산 무주택가구 주거비 지원 조건과 신청방법 | fund | 5 | O | 5 | 7 | 2026-07-08 |
| 116 | severance-pay | 퇴직금 계산법·지급기한 14일·받는 법 한눈에 | life | 5 | O | 5 | 7 | 2026-07-02 |
| 117 | small-biz-credit-recovery | 소상공인 신용회복 지원 | loan | 5 | O | 5 | 7 | 2026-05-23 |
| 118 | small-biz-hope-return | 소상공인 희망리턴패키지 총정리, 폐업 점포철거비·전직장려수당·재창업 지원 | fund | 5 | O | 5 | 7 | 2026-05-23~2026-07-02 |
| 119 | sme-innovation-voucher | 중소기업 혁신바우처 신청자격과 사용처, 비수도권 우대까지 | fund | 5 | O | 5 | 7 | 2026-05-23 |
| 120 | startup-support | 창업사업화지원 신청자격과 딥테크 특화, TIPS 중복여부까지 | fund | 5 | O | 5 | 7 | 2026-05-23 |
| 121 | super-isa | 슈퍼ISA(생산적 금융 ISA) 청년형·국민성장, 출시일·개설 총정리 | savings | 5 | O | 5 | 7~8 | 2026-07-07 |
| 122 | tips-program | TIPS 팁스 신청자격과 선정절차, 스케일업 TIPS는 뭐가 다른가요? | fund | 5 | O | 5 | 7 | 2026-05-23 |
| 123 | traffic-accident | 교통사고 형사처벌·12대 중과실·합의·손해배상 총정리 | life | 5 | O | 5 | 7 | 2026-07-03 |
| 124 | travel-duty-free | 해외여행 면세 한도 800달러, 술·담배·향수 별도와 자진신고 | life | 5 | O | 4 | 7~8 | 2026-07-01~2026-08-01 |
| 125 | unpaid-wages | 임금체불 신고·형사처벌·지연이자·대지급금 총정리 | life | 5 | O | 5 | 7 | 2026-07-03 |
| 126 | worker-vacation-support | 근로자 휴가지원사업 신청방법, 회사가 신청해야 40만원 받습니다 | fund | 5 | O | 4 | 7 | 2026-05-23~2026-08-06 |
| 127 | youth-housing-support | 청년 주거지원 월세·전세자금대출과 매입임대·행복주택, 상황별 추천 | fund | 5 | O | 5 | 7~8 | 2026-05-23 |
| 128 | youth-job-leap-incentive | 청년일자리도약장려금 기업 신청자격과 청년 대상요건, 지원금액 | youth | 5 | O | 5 | 7 | 2026-05-23 |
| 129 | youth-tomorrow-filling | 청년내일채움공제 지원금액·신청자격·중도해지 총정리 (신규 가입 여부 확인 필수) | youth | 5 | O | 5 | 7 | 2026-05-23~2026-07-02 |
| 130 | debt-restructuring | 채무조정 총정리, 빚이 힘들 때 제도 고르는 순서 | loan | 4 | - | 4 | 7 | 2026-07-02~2026-07-16 |
| 131 | disability-pension | 장애인연금 대상과 금액, 신청부터 다른 급여 중복까지 | pension | 4 | - | 3 | 7 | 2026-05-23~2026-08-06 |
| 132 | elderly-continue-employ | 고령자 계속고용장려금 신청방법, 비수도권 월 40만원 받는 조건과 한도 | fund | 4 | - | 4 | 7 | 2026-05-23 |
| 133 | floor-noise | 층간소음 기준·신고·해결방법, 주간 39dB·야간 34dB 이웃사이센터 | life | 4 | O | 4 | 7~8 | 2026-07-01 |
| 134 | home-childcare-allowance | 가정양육수당 부모급여와 차이, 어린이집 가면 어떻게 되나요? | fund | 4 | O | 4 | 7~8 | 2026-05-23 |
| 135 | hypertension-medical-fee | 고혈압·당뇨병 등록관리 진료비 지원, 건강생활실천지원금과 차이 | medical | 4 | O | 4 | 7 | 2026-05-23 |
| 136 | nationwide-energy-support-guide | 전기·도시가스·지역난방비 복지할인, 어디에 문의하나요? | welfare | 4 | O | 4 | 7 | 2026-05-23~2026-06-26 |
| 137 | pregnant-eco-food | 임산부 친환경농산물 지원 24만원 꾸러미, 자부담 20% 신청방법 | welfare | 4 | O | 4 | 7~8 | 2026-07-01 |
| 138 | unemployment-credit | 실업크레딧 신청 자격부터 장단점, 보험료 납부까지 | pension | 4 | - | 4 | 7 | 2026-05-23 |
| 139 | voice-phishing-crypto-refund | 가상자산 보이스피싱 피해금 10월 시행, 지금은 지급정지부터 신고하는 법 | life | 4 | O | 4 | 7 | 2026-07-20 |
| 140 | auto-insurance-loss-ratio | 자동차보험 손해율 87.5%, 내 보험료도 오르나요? | insurance | 3 | O | 3 | 7 | 2026-07-16 |
| 141 | elderly-driver-safety | 고령운전자 교통안전교육 75세 이상 대상과 예약방법, 안 받으면? | service | 3 | O | 3 | 7~8 | 2026-05-23 |
| 142 | hug-jeonse-deposit-guarantee | 전세보증금반환보증 가입 거절되는 이유, 부채비율 90% 선을 넘었나 | housing | 3 | O | 2 | 7 | 2026-07-31~2026-08-06 |
| 143 | national-health-insurance-regional | 국민건강보험 지역가입자 보험료 점수제 계산하고 경감받는 법 | insurance | 3 | O | 3 | 7 | 2026-07-17 |
| 144 | basic-livelihood-allowance | 생계급여 선정기준과 소득인정액 계산법, 부양의무자 있어도 되나요? | fund | 2 | O | 0 | 7~8 | 2026-07-29~2026-08-04 |
| 145 | catastrophic-medical-expenses | 재난적의료비 지원 대상과 소득 기준, 신청 서류까지 | welfare | 2 | - | 2 | 7 | 2026-05-23 |
| 146 | child-support-advance | 양육비 선지급제란? 소득 기준 폐지와 받는 기간까지 | welfare | 2 | - | 2 | 7 | 2026-07-01 |
| 147 | credit-weak-smallbiz-fund | 신용취약소상공인자금 신청기간과 홀짝제, 3천만원 언제 열리나 | loan | 2 | O | 2 | 7 | 2026-07-31~2026-08-01 |
| 148 | disability-allowance | 장애수당 대상과 금액, 신청부터 중복 여부까지 | fund | 2 | - | 2 | 7 | 2026-05-23 |
| 149 | disabled-biz-support-fund | 장애인기업지원자금 신청 자격, 복지카드만 있으면 되나 | loan | 2 | O | 2 | 7 | 2026-07-31~2026-08-01 |
| 150 | elderly-knee-surgery | 노인 무릎 인공관절 수술비 지원 대상과 신청처, 제외 비용까지 | welfare | 2 | - | 2 | 7 | 2026-05-23 |
| 151 | emergency-management-fund | 긴급경영안정자금 신청 대상과 조건, 금리·서류까지 | loan | 2 | O | 1 | 7~9 | 2026-08-01~2026-08-04 |
| 152 | energy-cashback | 에너지캐시백 절감률별 단가와 신청방법, 현금으로 받을 수 있나요? | refund | 2 | O | 2 | 7 | 2026-06-26~2026-06-29 |
| 153 | general-management-stability-fund | 일반경영안정자금 신청 방법과 7천만원 한도, 업력 무관 조건 | loan | 2 | O | 2 | 7 | 2026-07-31~2026-08-01 |
| 154 | income-contingent-loan | 취업후상환 학자금대출이란? 금리와 이자, 소득요건까지 | loan | 2 | - | 2 | 7 | 2026-05-23 |
| 155 | infertility-treatment-leave | 난임치료휴가 유급 2일 무급 4일, 분할사용과 신청방법 | fund | 2 | O | 2 | 7~8 | 2026-05-23~2026-07-01 |
| 156 | innovation-growth-fund | 혁신성장촉진자금 8월 10일 접수 바뀐다, 선착순이 아니라면 뭘 준비하나 | loan | 2 | O | 2 | 7 | 2026-07-31~2026-08-01 |
| 157 | inverter-ac-electricity-saving | 인버터 에어컨 전기세 아끼는 법, 껐다 켰다가 답일까 | life | 2 | O | 2 | 7 | 2026-07-16 |
| 158 | kespa-cup-2026 | 2026 케스파컵 일정, 디즈니+에서 어떻게 보나 | life | 2 | O | 1 | 7 | 2026-07-22~2026-07-31 |
| 159 | marriage-report | 혼인신고 방문·우편으로 접수하고 증인 서명까지 준비하는 법 | issue | 2 | O | 2 | 7 | 2026-07-17~2026-07-21 |
| 160 | medical-aid-elderly-denture | 노인 틀니·임플란트 지원 본인부담률과 적용주기, 1종 2종 차이까지 | service | 2 | O | 2 | 7~8 | 2026-05-23 |
| 161 | national-work-scholarship | 국가근로장학금 신청 자격과 기간, 월급 지급일까지 | youth | 2 | - | 2 | 7 | 2026-05-23 |
| 162 | new-hope-holssi | 새희망홀씨 II 연소득 4천만원 이하면 되나, 은행 14곳 중 어디로 가나 | loan | 2 | O | 2 | 7 | 2026-07-31~2026-08-01 |
| 163 | noran-umbrella | 노란우산공제 가입 조건과 납입한도, 세금 혜택까지 | fund | 2 | - | 2 | 7 | 2026-07-01 |
| 164 | parental-leave-pay | 육아휴직급여 6+6 부모육아휴직과 휴직기간, 신청방법까지 | fund | 2 | O | 1 | 7~8 | 2026-05-23~2026-08-01 |
| 165 | pension-insurance-vs-savings | 연금보험 연금저축 차이, 세액공제 되는 쪽이 어느 계좌인지 확인 | pension | 2 | O | 0 | 7 | 2026-08-06 |
| 166 | regional-credit-guarantee | 담보 없어 막혔다면 지역신용보증재단 보증 157개 중에 내 것이 있나 | loan | 2 | O | 2 | 7 | 2026-08-01 |
| 167 | restart-special-fund | 소상공인 재도전특별자금 신청 서류와 교육·채무조정, 승인까지 | loan | 2 | O | 1 | 7~10 | 2026-07-31~2026-08-01 |
| 168 | small-manufacturer-fund | 소공인특화자금 신청 한도 운전 1억·시설 5억, 제조업 기준 | loan | 2 | O | 2 | 7 | 2026-07-31~2026-08-01 |
| 169 | stepping-stone-loan | 징검다리론 연 9% 이내로 갈아타기, 햇살론 2년 갚았으면 대상인가 | loan | 2 | O | 2 | 7 | 2026-07-31~2026-08-01 |
| 170 | wegovy-price-comparison | 위고비 가격 비교 사이트 있나, 공식 창구에서 조회되는 것과 안 되는 것 | medical | 2 | O | 0 | 7 | 2026-08-06~2026-08-08 |
| 171 | win-win-growth-fund | 상생성장지원자금 신청 방법과 플랫폼 추천, 우체국쇼핑만 남은 이유 | loan | 2 | O | 2 | 7 | 2026-07-31~2026-08-01 |
| 172 | worker-livelihood-interest-subsidy | 혼례비 대출 마감됐는데 이차보전은 왜 되나, 금리 3%p 깎는 조건은? | loan | 2 | O | 2 | 7 | 2026-07-31~2026-08-01 |
| 173 | worker-wage-arrears-loan | 월급 밀렸을 때 연 1.5%로 1,000만원 빌리는 체불근로자 생계비 융자 | loan | 2 | O | 2 | 7 | 2026-07-31~2026-08-01 |
| 174 | youth-employment-linked-fund | 청년고용연계자금 가산금리 0%, 만 39세 아니어도 신청되는 경우가 있다 | loan | 2 | O | 2 | 7 | 2026-07-31~2026-08-01 |
| 175 | youth-startup-fund | 청년전용창업자금 고정 2.5%, 만 39세 업력 3년 미만이면 1억까지 | loan | 2 | O | 2 | 7 | 2026-08-01 |
| 176 | 119-safe-call | 119안심콜 등록방법과 등록정보, 개인정보는 어떻게 보호되나요? | service | 1 | O | 1 | 7 | 2026-05-23 |
| 177 | 518-veteran-employment-application | 5.18민주유공자 취업희망신청 이력서 하나로 보훈청에 즉시 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 178 | acquisition-tax | 취득세 계산기로 세율 확인하고 60일 안에 신고하는 법 | tax | 1 | O | 1 | 7 | 2026-07-17 |
| 179 | adoption-dissolution-report | 친양자파양신고 재판확정 후 1개월 이내 시읍면에 신고하는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 180 | adoption-report | 입양신고 가정법원 허가서와 동의서로 시읍면에 접수하는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 181 | agent-orange-patient-registration | 고엽제후유의증환자 등록 진료기록으로 20일 만에 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 182 | air-emission-facility-permit | 대기배출시설 설치허가 방지시설내역서 갖춰 유역환경청에 10일 만에 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 183 | animal-breeding-business-permit | 동물생산업 허가 시설명세도와 사업계획서로 시군구에 1만원 15일 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 184 | animal-exhibition-business-registration | 동물전시업 등록 사업계획서와 시설명세도로 시군구에 1만원 15일 만에 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 185 | animal-pharmacy-establishment-report | 동물약국 개설신고 구조시설개요서와 약국등록증사본으로 시군구 5천원 2일 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 186 | apartment-price-confirmation | 아파트 공동주택가격 확인 온라인발급 무료로 즉시 조회하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 187 | aquaculture-license-application | 양식업 면허 신청 수면위치구역도로 시군구에 7일 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 188 | arboretum-coordinator | 수목원 코디네이터 (방문자 안내·교육) | welfare | 1 | O | 1 | 7 | 2026-05-23 |
| 189 | artist-activity-grant | 예술활동준비금 신청자격과 예술활동증명 방법, 300만원 사용처 | fund | 1 | O | 1 | 7 | 2026-05-23 |
| 190 | artist-employment-insurance | 예술인 고용보험 가입대상과 두루누리 보험료 지원, 구직급여까지 | welfare | 1 | O | 1 | 7 | 2026-05-23 |
| 191 | artist-industrial-accident-insurance | 예술인 산재보험 보험료 지원사업 | welfare | 1 | O | 1 | 7 | 2026-05-23 |
| 192 | artist-platform-worker-insurance-acquisition | 예술인 노무제공자 고용보험 취득신고 사업주가 5일 만에 신고하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 193 | assistive-technology-device | 보조공학기기 지원품목과 지원한도, 장애인 근로자 직접신청까지 | welfare | 1 | O | 1 | 7 | 2026-05-23 |
| 194 | auto-service-business-registration | 자동차정비업 매매업 폐차업 등록 사업계획서로 시군구에 15일 만에 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 195 | aviation-professional-certificate-issuance | 항공종사자 자격증명서 발급 신체검사증명서로 한국교통안전공단에 5일 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 196 | bad-landlord-check | 전세 계약 전 악성임대인 조회, 상습 채무불이행·미반환 명단 1분 확인 | housing | 1 | O | 0 | 7 | 2026-08-06 |
| 197 | barber-beautician-license-application | 이용사 미용사 면허발급 졸업증명서와 진단서로 시군구에 5500원 즉시 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 198 | basic-livelihood-recipient-certificate | 기초생활수급자증명서 무료 발급받고 교육급여는 교육청에서 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 199 | basic-pension | 기초연금 월 34만9700원, 소득인정액 기준과 국민연금 감액 여부 | pension | 1 | O | 1 | 7 | 2026-07-21 |
| 200 | beautiful-story-grandma | 아름다운 이야기 할머니 신청자격과 교육과정, 활동 혜택까지 | fund | 1 | O | 1 | 7 | 2026-05-23 |
| 201 | benefit-notification-service | 복지로 혜택알리미 이용방법과 국민비서 차이, 로그인 없이도 되나요? | service | 1 | O | 1 | 7 | 2026-05-23 |
| 202 | birth-registration | 출생신고 기한 확인하고 온라인으로 신고하는 법, 준비물과 과태료 | life | 1 | O | 1 | 8 | 2026-07-29 |
| 203 | birth-report | 출생신고 1개월 이내 인터넷으로 하고 과태료 피하는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 204 | brain-infarction-i63 | 뇌경색 질병코드 I63과 뇌출혈 산정특례, 뇌졸중 보장 차이와 청구 서류 | insurance | 1 | O | 1 | 4 | 2026-09-07 |
| 205 | broadcast-video-independent-producer-report | 방송영상독립제작사 신고 제작계획서로 온라인 문화체육관광부에 5일 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 206 | building-ledger-check | 건축물대장 발급받고 위반건축물 여부 확인하는 법 | housing | 1 | O | 1 | 7 | 2026-07-29 |
| 207 | building-permit-application | 건축허가 신청 설계도서 갖춰 층수별 2일에서 70일까지 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 208 | building-register-certificate | 건축물대장 등본 초본 인터넷 무료 발급받고 위반건축물 여부 확인하는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 209 | building-registration-certificate | 건물등기사항증명서 발급 인터넷등기소에서 1000원 즉시 3시간 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 210 | building-status-map-issuance | 건축물현황도 열람 발급 다중이용건축물 인터넷무료 방문100원 7일 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 211 | burial-cremation-report | 매장 화장 신고 사망진단서로 시군구에 수수료 없이 즉시 신고하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 212 | buried-heritage-discovery-report | 매장유산 발견신고 현상변경 없이 경찰서 시군구 수수료없이 7일 이내 하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 213 | business-closure-certificate | 폐업사실증명 홈택스 무료로 즉시 발급받아 실업급여 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 214 | business-closure-report | 사업자 휴업 폐업신고 홈택스로 무료 신고하고 사업자등록증 정리하는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 215 | business-registration-amendment | 사업자등록 정정신고 상호 변경은 즉시 사업장 이전은 2일 걸리는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 216 | business-registration-certificate | 사업자등록증명 인터넷 무료 발급받고 대출·입찰에 제출하는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 217 | business-status-report | 사업장현황신고 수입금액검토표와 매출매입처별계산서합계표로 홈택스 즉시 3시간 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-20 |
| 218 | cadastral-map-certificate | 지적도 임야도 인터넷 무료 발급받고 토지 경계·모양 확인하는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 219 | cancer-diagnosis-benefit | 통합암진단비와 일반암진단비, 유사암 소액암부터 암 종류별 보험금까지 | insurance | 1 | O | 1 | 4 | 2026-09-07 |
| 220 | capital-gains-tax | 양도소득세 계산기로 세율 확인하고 2개월 안에 신고하는 법 | tax | 1 | O | 1 | 7 | 2026-07-17 |
| 221 | car-rental-business-registration | 렌터카 자동차대여사업등록 사업계획서와 차고증명서로 시군구에 20일 만에 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 222 | carbon-neutral-point | 탄소중립포인트 가입방법과 적립활동, 포인트는 얼마나 쌓이나요? | service | 1 | O | 1 | 7 | 2026-05-23 |
| 223 | caregiver-training-institution-designation | 요양보호사 교육기관 지정신청 사업계획서로 방문 수수료없이 20일 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 224 | chief-information-security-officer-report | 정보보호 최고책임자 지정신고 신고서없이 중앙전파관리소 수수료없이 30일 만에 하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 225 | child-school-bus-report | 어린이통학버스신고 보험가입증빙서로 경찰서에 수수료없이 7일 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 226 | child-welfare-facility-installation-report | 아동복지시설 설치신고 사업계획서와 시설평면도로 시군구 수수료없이 20일 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 227 | cinema-closure-report | 영화상영관 폐업신고 등록증만으로 폐업 후 30일 이내 3일 만에 신고하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 228 | civil-defense-training-exemption | 민방위 교육훈련 유예 면제 진단서와 확인서로 인터넷 즉시 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 229 | civil-servant-pension | 공무원연금 수령액 조회와 계산법, 퇴직 전 내 예상액 미리 확인 | pension | 1 | O | 0 | 7 | 2026-08-06 |
| 230 | coastal-safety-guard | 연안안전지킴이 자격요건과 신청방법, 근무지와 수당까지 | welfare | 1 | O | 1 | 7 | 2026-05-23 |
| 231 | commercial-lease-fixed-date | 상가건물 확정일자 세무서에서 받고 보증금 우선변제권 확보하는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 232 | commercial-lease-premium | 상가 권리금 회수 방해 확인하고 손해배상 청구하는 법 | housing | 1 | O | 1 | 7 | 2026-07-29 |
| 233 | community-health-promotion | 지역사회 건강증진사업 보건소 건강검진·금연클리닉, 이용방법까지 | welfare | 1 | O | 1 | 7 | 2026-05-23 |
| 234 | complaint-disposition-certificate | 진정 내사사건 처분결과증명 1부 500원으로 즉시 발급받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 235 | complaint-filing-certificate | 고소장 고발장 접수증명 1부 500원으로 검찰청에 1일 만에 발급받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 236 | comprehensive-income-tax | 종합소득세 5월 신고기간 확인하고 홈택스로 신고하는 법 | tax | 1 | O | 1 | 7 | 2026-07-17 |
| 237 | comprehensive-real-estate-tax | 종합부동산세 공제금액 확인하고 12월 안에 납부하는 법 | tax | 1 | O | 1 | 7 | 2026-07-17 |
| 238 | construction-business-registration | 건설업등록 보증가능금액확인서와 기술인력 갖춰 시도에 20일 만에 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 239 | construction-engineer-career-report | 건설기술인 경력신고 경력확인서와 졸업증명서로 즉시 신고하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 240 | construction-machinery-business-certificate-reissue | 건설기계사업자 등록증 재교부신청 대여업정비업매매업으로 시군구 500원 즉시 3시간 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-20 |
| 241 | construction-machinery-certificate-reissue | 건설기계 등록검사증 재발급신청 훼손증명서로 시군구 500원 즉시 3시간 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-20 |
| 242 | construction-machinery-maintenance-registration | 건설기계정비업등록 정비시설 증명서류로 시군구에 3만원 18일 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 243 | cooperative-establishment-report | 협동조합 설립신고 정관과 창립총회 의사록으로 시도에 수수료 없이 20일 만에 신고하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 244 | copayment-cap-refund | 본인부담상한제 환급금 조회부터 신청까지, 안 하면 3년 뒤 사라진다 | welfare | 1 | O | 0 | 7 | 2026-08-04 |
| 245 | copyright-registration | 저작권등록 온라인 2만원 프로그램 5만원 한국저작권위원회에 7일 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 246 | corporate-registry-certificate | 법인등기사항증명서 인터넷등기소 1000원에 즉시 발급받는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 247 | cosmetics-manufacturing-registration | 화장품제조업등록 시설명세서와 의사진단서로 지방식약청에 15일 만에 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 248 | cosmetics-responsible-sales-registration | 화장품책임판매업등록 품질관리기준서로 지방식약청 3만원 10일 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 249 | coupang-refund-period | 쿠팡 환불 기간 총정리, 단순변심 7일 불량 3개월 카드 며칠 | life | 1 | O | 1 | 7 | 2026-07-16 |
| 250 | court-auction | 법원경매 물건 검색하고 입찰하는 법, 보증금 10%와 무효 사유 | housing | 1 | O | 1 | 8 | 2026-07-29 |
| 251 | court-judgment-copy-request | 형사재판서 등초본 교부청구 5매 1000원으로 검찰청에 1일 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 252 | credit-bank-credit-recognition | 학점은행제 학점인정 신청 자격증과 성적증명서로 학점당 1천원 60일 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 253 | credit-bank-degree-certificate | 학점은행제 학위증명서 국문 300원 영문 500원 cb.or.kr 발급법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 254 | criminal-record-check | 범죄경력조회 취업 어린이집 경비업 등 목적별 14일 만에 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 255 | crisis-youth-support | 위기청소년 특별지원, 대상과 받는 내용부터 심의까지 | fund | 1 | - | 1 | 7 | 2026-05-23 |
| 256 | cultural-arts-trainee | 문화예술기관 청년 연수단원 | youth | 1 | O | 1 | 7 | 2026-05-23 |
| 257 | culture-day | 문화가 있는 날 참여시설과 이용방법, 전부 무료인가요? | service | 1 | O | 1 | 7 | 2026-05-23 |
| 258 | culture-nuri-card | 문화누리카드 신청방법과 사용처, 자동재충전이란? | welfare | 1 | O | 1 | 7 | 2026-05-23 |
| 259 | currency-exchange-business-registration | 환전업무 등록신청 임대차계약서와 신분증으로 세관에 수수료 없이 20일 만에 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 260 | custody-designation-report | 친권자지정 변경신고 재판등본이나 협의서로 시읍면에 신고하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 261 | customs-unique-code-business-application | 통관고유부호 신청 사업자등록증사본으로 세관에 수수료없이 1일 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 262 | daegu-junggu-kitchen-cleaning | 대구 중구 주방청소 50만원, 12곳만 뽑고 8월 7일 마감 | fund | 1 | O | 0 | 7 | 2026-08-02 |
| 263 | daiso-stock-and-refund | 다이소 재고 확인하는 법과 환불 규정, 2주 지나면 못 받나요 | life | 1 | O | 1 | 7 | 2026-07-16 |
| 264 | daycare-center-establishment-permit | 어린이집 설치인가 운영계획서 갖춰 시군구에 14일 만에 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 265 | dc-pension-early-withdrawal | 퇴직연금 중도인출 사유와 세금, DC형만 되나요? | pension | 1 | O | 1 | 7 | 2026-07-11 |
| 266 | death-benefit-liquidation | 사망보험금 연금으로 받기, 유동화율·기간 어떻게 정하나 | pension | 1 | O | 1 | 7 | 2026-07-16 |
| 267 | death-report | 사망신고 1개월 이내 하고 동거친족 신고의무자 확인하는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 268 | debt-certificate | 부채증명원 인터넷 발급 어디서 하나, 은행·소진공·장학재단 기관별 정리 | loan | 1 | O | 0 | 7 | 2026-08-05 |
| 269 | dementia-center | 치매안심센터 검사 신청 방법과 비용, 이용 대상까지 | service | 1 | - | 1 | 7 | 2026-05-23 |
| 270 | dementia-helpline | 치매상담콜센터 전화번호는? 운영시간과 이용 대상, 받을 수 있는 도움까지 | service | 1 | - | 1 | 7 | 2026-05-23 |
| 271 | dementia-insurance | 치매보험 가입 전 경증치매 진단기준, 왜 꼭 확인해야 하나요? | insurance | 1 | O | 1 | 7 | 2026-07-16 |
| 272 | dental-implant-insurance | 임플란트 건강보험 65세부터 평생 2개, 얼마나 싸지나 | insurance | 1 | O | 0 | 7 | 2026-07-16 |
| 273 | dental-insurance-guide | 치아보험 임플란트 보장한도 얼마까지 나오나, 발치 개수 모르면 손해 | insurance | 1 | O | 1 | 7 | 2026-07-16 |
| 274 | diagnostic-radiation-device-installation-report | 진단용방사선발생장치 설치 사용신고 검사성적서로 시군구 수수료없이 3일 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 275 | direct-sales-certificate-reissue | 방문판매업 다단계판매업 신고증 등록증 재발급 기존증서로 수수료없이 즉시 3시간 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 276 | disability-assistive-device | 장애인 보조기기 구입비 지원대상과 지원절차, 신청은 어디서 | welfare | 1 | O | 1 | 7 | 2026-05-23 |
| 277 | disability-card-reissue | 장애인복지카드 분실 재발급 20일 만에 신청하는 법 유효기간 만료는 예외 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 278 | disability-degree-adjustment | 장애정도 조정신청 상태 변화 시 30일 만에 등급 재심사받는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 279 | disability-registration | 장애인 등록 신청 총 30일 걸리는 이유와 국민연금공단 심사 절차 아는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 280 | disability-self-reliance-loan | 장애인 자립자금 대여 한도와 상환조건, 사용용도까지 | loan | 1 | O | 1 | 7 | 2026-05-23 |
| 281 | disability-standard-workplace-certification | 장애인 표준사업장 인증신청 임금대장사본으로 한국장애인고용공단 수수료없이 61일 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 282 | disability-startup-store | 장애인 창업점포 지원 사전교육과 선정절차, 신청방법까지 | welfare | 1 | O | 1 | 7 | 2026-05-23 |
| 283 | disability-welfare-facility-report | 장애인복지시설 설치운영신고 사업계획서 갖춰 시군구에 수수료 없이 10일 만에 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 284 | disabled-enterprise-certificate | 장애인기업확인서 주식변동명세서와 장애인증명서로 7일 만에 발급받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 285 | disabled-vehicle-tag | 장애인 자동차표지 무료 발급받고 주차·통행료 감면 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 286 | disinfection-business-report | 소독업 신고 시설장비인력명세서로 시군구 수수료없이 7일 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 287 | divorce-report | 협의이혼신고 확인서등본 챙기고 친권자지정까지 한번에 신고하는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 288 | dokdo-love-savings | 신협 독도사랑적금 연 7% 조건, 10만좌 끝나기 전에 가입하려면 | finance | 1 | O | 0 | 7 | 2026-08-06 |
| 289 | dollar-insurance-warning | 달러보험 가입 전 꼭 확인할 4가지, 환테크 상품 아닌 이유 | insurance | 1 | O | 1 | 7 | 2026-07-16 |
| 290 | domestic-residence-report | 재외동포 F-4 국내거소신고 여권 사진으로 35000원 즉시 신고하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 291 | domestic-residence-report-certificate | 외국국적동포 국내거소신고 사실증명 인터넷 무료 발급받는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 292 | door-to-door-sales-registration | 방문판매업신고 전화권유판매업 서류 갖춰 시군구에 3일 만에 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 293 | driver-insurance-vs-auto-insurance | 운전자보험 자동차보험 차이, 둘 다 가입해야 하나요 | insurance | 1 | O | 1 | 7 | 2026-07-16 |
| 294 | drivers-license-periodic-checkup | 운전면허 정기적성검사 10년마다 받고 판정료 6000원 준비하는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 295 | drivers-license-reissue | 운전면허증 재발급 운전면허시험장 가면 즉시 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 296 | driving-record-certificate | 운전경력증명서 신분증만 있으면 무료로 즉시 인터넷 발급받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 297 | driving-school-designation | 자동차운전전문학원 지정신청 코스평면도와 강사자격증으로 5만원 7개월 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 298 | early-old-age-pension | 국민연금 조기수령 무조건 신청하라던데, 내 감액 계산해보면 다를까? | pension | 1 | O | 0 | 7 | 2026-08-06 |
| 299 | early-reemployment-allowance | 조기재취업수당 12개월 이상 근무 증명하고 청구하는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 300 | early-scrappage-subsidy | 조기폐차 보조금 등급 조회하고 신청하는 법, 최대 1억 2천만원 | fund | 1 | O | 1 | 7 | 2026-07-29 |
| 301 | eers-gas-boiler | EERS 취약계층 가정용 가스보일러 및 단열강화 지원사업 | welfare | 1 | O | 1 | 7 | 2026-05-23 |
| 302 | electric-welfare-discount | 전기요금 복지할인 대상과 여름철 추가할인, 에너지바우처 중복여부 | welfare | 1 | O | 1 | 8 | 2026-06-29 |
| 303 | electrical-construction-business-registration | 전기공사업등록 기업진단보고서와 전기공사기술자 명단으로 14일 만에 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 304 | elevator-safety-inspection | 승강기 안전검사 신청 정기 정밀검사는 즉시 수시검사는 15일 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 305 | emergency-livelihood-loan | 소액생계비대출(불법사금융예방대출) 자격조건과 100만원 한도, 연체자도 되나요? | loan | 1 | O | 1 | 7 | 2026-07-10 |
| 306 | emergency-welfare-support | 긴급복지지원 위기사유와 소득재산 기준, 기초생활수급과 차이 | welfare | 1 | O | 1 | 8 | 2026-06-27 |
| 307 | employee-insurance-loss-report | 근로자 퇴사 시 고용산재보험 상실신고 사업주가 서류 없이 7일 만에 하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 308 | employer-training-cost-support | 사업주 직업능력개발훈련비 서류 없이 산업인력공단에 10일 만에 지원받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 309 | employment-insurance-certificate-issuance | 고용산재보험 완납증명원 사업주 신분증만으로 즉시 발급받는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 310 | employment-insurance-review-request | 실업급여 거부처분 억울하면 30일 만에 심사청구하는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 311 | employment-insurance-status-claim | 고용보험 미가입 확인되면 피보험자격확인청구서로 직접 정정 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 312 | employment-insurance-worker-certificate | 고용보험 자격이력내역서 신분증만으로 즉시 발급받는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 313 | empty-bottle-deposit | 빈용기 보증금 반납장소와 반납거부 대처법, 자동회수기 위치까지 | service | 1 | O | 1 | 7 | 2026-05-23 |
| 314 | enterprise-support-portal | 기업지원 종합 서비스 포털 (기업마당) | fund | 1 | O | 1 | 7 | 2026-05-23 |
| 315 | entry-exit-fact-certificate | 출입국에 관한 사실증명 인터넷 무료 발급받고 해외체류 이력 확인하는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 316 | environment-guardian | 환경지킴이 (공공근로·청년 일자리) | youth | 1 | O | 1 | 7 | 2026-05-23 |
| 317 | environmental-measurement-agency-registration | 측정대행업 등록 숙련도시험적합확인서로 시도에 1만원 10일 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 318 | explosives-storage-facility-permit | 화약류 저장소 설치허가 신체검사서와 설계도로 경찰서에 3천원 10일 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 319 | export-certificate-of-origin-issuance | 수출품 원산지증명서 발급 상업송장으로 세관 대한상공회의소 1500원 즉시 3시간 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 320 | extended-childcare-fee | 연장형 보육료 지원 일반 보육료와 차이, 어디서 받을 수 있나요? | fund | 1 | O | 1 | 7 | 2026-05-23 |
| 321 | family-care-leave-long | 가족돌봄휴직 신청조건과 가족돌봄휴가 차이, 90일 급여까지 | fund | 1 | O | 1 | 7 | 2026-05-23 |
| 322 | family-register-certificate | 제적등본 2008년 이전 호적 확인하고 상속 서류 준비하는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 323 | family-register-correction | 가족관계등록부 정정신청 판결등본으로 즉시 시읍면에 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 324 | family-relation-certificate | 가족관계증명서 일반 상세 특정 차이 알고 인터넷 무료 발급받는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 325 | farm-business-entity-certificate | 농업경영체 등록확인서 무료 발급받고 직불금 신청 준비하는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 326 | farm-helper | 영농도우미 지원 신청자격과 연간한도, 직접 도우미 구해도 되나요? | fund | 1 | O | 1 | 8 | 2026-05-23 |
| 327 | farmer-insurance | 농업인 건강·연금보험료 지원, 농외소득 있어도 받나요? | pension | 1 | O | 1 | 8 | 2026-05-23 |
| 328 | farmland-acquisition-certificate | 농지취득자격증명 발급 기간 4일·7일·14일, 잔금일 맞추려면 언제 신청하나 | issue | 1 | O | 0 | 7 | 2026-07-17 |
| 329 | farmland-conversion-permit | 농지전용허가 사업계획서 갖춰 면적별 10일에서 30일 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 330 | farmland-ledger-certificate | 농지대장(구 농지원부) 등본 인터넷 무료 발급받고 60일 이내 변경신고하는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 331 | farmland-pension | 농지연금 예상 수령액 조회부터 신청까지, 60세 농지 담보로 얼마 받나 | pension | 1 | O | 0 | 7 | 2026-08-06 |
| 332 | farmland-retirement-payment | 농지이양 은퇴직불금 매도·임대 차이와 지급상한, 2026 달라진 점 | fund | 1 | O | 1 | 8 | 2026-05-23 |
| 333 | fertilizer-production-business-registration | 비료생산업 등록 성분분석서와 재배시험성적서로 시군구 조례수수료 14일 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 334 | fetal-insurance-compare | 태아보험 비교와 보험사별 차이, 필수특약부터 산부인과 보험까지 | insurance | 1 | O | 1 | 4 | 2026-09-07 |
| 335 | film-video-rating-classification | 영화 비디오물 등급분류 신청서로 영상물등급위원회에 영화10일 비디오14일 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 336 | fire-safety-management-business-registration | 소방시설관리업 등록신청 기술인력대장 갖춰 소방서에 4만원 15일 만에 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 337 | fire-safety-manager-appointment-report | 소방안전관리자 선임신고 관리자수첩과 자격증으로 소방서에 수수료 없이 즉시 신고하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 338 | fisherman-insurance-hospital-claim | 어선원보험 보험금 병원에서 바로 청구, 7월 21일부터 전자청구 시스템 | insurance | 1 | O | 1 | 7 | 2026-07-20 |
| 339 | fishing-boat-business-report | 낚시어선업신고 어선검사증서와 보험증서로 시군구에 2일 만에 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 340 | fishing-license-grace-period | 어업허가유예 어선멸실 증빙서류로 시도 시군구에 2일 만에 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 341 | fishing-license-suspension-report | 허가어업 휴업신고 구비서류 없이 세무서와 함께 즉시 신고하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 342 | food-business-closure-report | 식품관련영업 폐업신고 영업허가증반납으로 시군구 수수료없이 즉시 3시간 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-20 |
| 343 | food-business-permit-change | 식품영업 허가사항 변경 소재지는 26500원 그외는 9300원으로 즉시 신고하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 344 | food-manufacturing-registration | 식품제조가공업 등록 제조방법설명서로 2만8천원 3일 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 345 | food-service-business-report | 식품영업신고 위생교육이수증 갖춰 시군구에 수수료 2만8천원 즉시 신고하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 346 | foreign-worker-employment-permit-issuance | 외국인근로자 고용허가서 발급 재발급 도입업종증명서로 지방고용노동관서 수수료없이 적격자선정 즉시 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 347 | foreigner-reentry-permit | 재입국허가 출국 전에 신청해 체류자격 유지하고 3일 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 348 | foreigner-registration | 외국인등록 90일 초과 체류 시 여권 사진으로 35000원 즉시 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 349 | foreigner-registration-fact-certificate | 외국인등록 사실증명 인터넷 무료 발급받고 대출·계약에 제출하는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 350 | foreigner-stay-extension | 외국인 체류기간연장허가 만료 전에 신청해 불법체류 피하는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 351 | forest-disaster-response | 산림재난대응단 자격요건과 신청방법, 위험수당 지급까지 | welfare | 1 | O | 1 | 7 | 2026-05-23 |
| 352 | forest-trail-guide | 숲길등산지도사 자격증 취득방법과 신청조건, 수당까지 | welfare | 1 | O | 1 | 7 | 2026-05-23 |
| 353 | forest-tree-felling-report | 입목 벌채 굴취 신고 사업계획서로 시군구 수수료없이 병해충 산불피해목 30일 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 354 | forestry-successor-selection | 임업후계자 선발 요건증명서류로 시군구에 수수료없이 10일 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 355 | foster-care-confirmation-certificate | 가정위탁보호확인서 신분증만 있으면 방문 즉시 무료 발급받는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 356 | four-insurance-workplace-establishment | 4대보험 사업장 성립신고 신규 창업 시 국민연금·건강보험 3일, 고용산재 5일 만에 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 357 | freedom-of-information-request | 정보공개청구 서류 없이 10일 내 공개여부 결정받고 20일 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 358 | freight-forwarding-business-permit | 화물자동차 운송주선사업허가 자본금납입증명서로 16000원 20일 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 359 | freight-truck-business-permit | 화물자동차 운송사업허가 차고지확인서 갖춰 시도에 20일 만에 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 360 | fuel-support | 고유가 피해지원금 우대·특별지원지역과 신청방법, 거동불편하면 | fund | 1 | O | 1 | 7 | 2026-05-23 |
| 361 | full-adoption-report | 친양자 입양 조건과 서류, 재혼 배우자 자녀도 되나 | issue | 1 | O | 1 | 7 | 2026-07-30 |
| 362 | game-addiction-healing | 게임 과몰입 치유프로그램 신청방법, 우리 아이 과몰입인지 아는 법 | welfare | 1 | O | 1 | 7 | 2026-05-23 |
| 363 | game-business-change-registration | PC방 게임제공업 변경등록 허가증과 임대차계약서로 시군구에 3일 만에 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 364 | ged-certificate-issuance | 검정고시 합격증명서 인터넷 발급 무료로 즉시 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 365 | ged-exam-application | 검정고시 응시신청 졸업증명서 갖춰 시도교육청에 즉시 접수하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 366 | gift-tax | 증여세 면제한도 계산기로 확인하고 3개월 안에 신고하는 법 | tax | 1 | O | 1 | 7 | 2026-07-17 |
| 367 | graduation-expectancy-certificate | 졸업예정증명서 발급 안 될 때, 학사일정 오류 풀고 당일 발급받는 순서 | life | 1 | O | 0 | 7 | 2026-08-05 |
| 368 | group-food-service-facility-report | 집단급식소 설치운영신고 교육이수증으로 시군구에 2만8천원 즉시 신고하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 369 | hangang-overnight-festival | 한강무박2일 8월 8일 일정 확인하고 우천 취소 공지 조회하는 법 | life | 1 | O | 1 | 7 | 2026-07-29 |
| 370 | happy-birth-onestop | 행복출산 원스톱서비스 신청방법과 맘편한임신 차이, 60일 소급까지 | service | 1 | O | 1 | 8 | 2026-05-23 |
| 371 | happy-birth-onestop-service | 행복출산 원스톱서비스 출생신고와 함께 양육수당 아동수당 첫만남이용권 한번에 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 372 | hazard-prevention-plan-submission | 유해위험 방지계획서 제출 기계설비배치도로 안전보건공단에 15일 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 373 | hazardous-material-facility-permit | 위험물제조소 설치허가 위치구조설비도면 갖춰 소방서에 5일 만에 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 374 | hazardous-material-tank-safety-inspection | 위험물탱크안전성능검사 구조명세서로 소방서에 기밀 수압 충수시험 4일 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 375 | health-condition-discount-insurance | 혈압 혈당 정상이면 보험료 최대 42% 할인, 건강할인제도란 | insurance | 1 | O | 1 | 7 | 2026-07-16 |
| 376 | health-functional-food-business-report | 건강기능식품 판매업신고 교육이수증으로 인터넷 2만5천원 3일 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 377 | health-insurance-dependent-registration | 건강보험 피부양자 등록 신청서로 3일 만에 자격 취득 신고하는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 378 | health-insurance-eligibility-certificate | 건강보험 자격득실확인서 인터넷 무료 발급받고 가입이력 확인하는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 379 | health-insurance-installment-payment | 건강보험료 3회 체납 시 분할납부신청서로 즉시 승인받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 380 | health-insurance-medical-expense-claim | 건강보험 요양비 처방전과 세금계산서로 40일 만에 환급받는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 381 | health-insurance-payment-certificate | 건강보험료 납부확인서 2001년 이후 납부내역 인터넷 무료로 즉시 발급받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 382 | health-insurance-qualification-loss-report | 건강보험 자격상실신고 사망 국적상실 시 구비서류 없이 3일 신고하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 383 | heart-disease-diagnosis-rider | 심장질환 진단비, 허혈성이랑 확대형 뭐가 다른가요 | insurance | 1 | O | 1 | 7 | 2026-07-16 |
| 384 | high-pressure-gas-facility-permit | 고압가스 제조판매저장소설치 허가 사업계획서와 기술검토서로 시군구에 5일 만에 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 385 | high-school-transfer-assignment | 고등학교 전학 편입학 배정원서 하나로 재적학교에 즉시 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 386 | home-care-facility-establishment-report | 재가노인복지시설 설치신고 사업계획서 갖춰 시군구에 수수료 없이 7일 만에 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 387 | home-improvement-support | 주거급여 수선유지급여 신청자격과 임차급여 중복여부, 최대 1,601만원 | welfare | 1 | O | 1 | 7 | 2026-05-23 |
| 388 | hospital-tier-classification-guide | 병원 급수, 왜 보험금이 다르게 나오는지 알아보기 | insurance | 1 | O | 1 | 7 | 2026-07-16 |
| 389 | hospitalization-benefit-insurance | 입원비 보험과 수술비 보험, 진단비 보험은 실비보험 있어도 필요한가요? | insurance | 1 | O | 1 | 4 | 2026-09-07 |
| 390 | household-liability-insurance-guide | 일상생활배상책임보험, 두 개 가입하면 두 배로 받나요 | insurance | 1 | O | 1 | 7 | 2026-07-16 |
| 391 | housing-lease-report | 주택임대차신고 계약체결일부터 30일 이내 인터넷으로 하는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 392 | housing-pension | 주택연금 가입조건 55세, 사망하면 집은 어떻게 되나요? | pension | 1 | O | 1 | 7 | 2026-07-16 |
| 393 | housing-scholar | 주거안정장학금 대상과 금액, 결과 발표와 지급일까지 | fund | 1 | - | 1 | 7 | 2026-06-27 |
| 394 | hug-dundun-jeonse | 든든전세주택 11차 수시모집 공고 어디서 조회하고 입주신청하나 | housing | 1 | O | 1 | 10 | 2026-07-29 |
| 395 | hwadam-forest | 화담숲 예약부터 입장료 모노레일 요금까지, 예약 시간 지나면 입장 못 하나 | life | 1 | O | 1 | 6 | 2026-09-18 |
| 396 | hygiene-product-manufacturing-report | 위생용품제조업 영업신고 교육수료증으로 2만8천원 3일 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 397 | imported-food-business-registration | 수입식품등 영업등록 신청 교육이수증으로 지방식약청 28000원 3일 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-20 |
| 398 | income-amount-certificate | 소득금액증명원 인터넷 무료 발급받고 대출·전세자금에 제출하는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 399 | indemnity-insurance-exclusions | 실손보험이 보장 안 하는 것들, 건강검진부터 미용시술까지 | insurance | 1 | O | 1 | 7 | 2026-07-16 |
| 400 | indemnity-insurance-generations | 실비보험 2세대 3세대 5세대, 뭐가 다르고 갈아타야 할까요? | insurance | 1 | O | 1 | 7 | 2026-07-16 |
| 401 | indemnity-insurance-switch-strategy | 실손보험 세대가 왜 자꾸 바뀌나요, 자기부담률·재가입주기 변천사 | insurance | 1 | O | 1 | 7 | 2026-07-16 |
| 402 | individual-house-price-confirmation | 개별주택가격 확인 재산세 기준 인터넷·모바일로 즉시 조회하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 403 | individual-land-price-confirmation | 개별공시지가 확인서 조례 수수료로 시군구에 즉시 발급받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 404 | individual-land-price-objection | 개별공시지가 이의신청 공시일부터 30일 이내 재산세 낮추는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 405 | industrial-accident-benefit-subrogation | 산재보험급여 대체지급 근로복지공단에 10일 만에 대위청구하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 406 | industrial-accident-disability-benefit | 산재 장해급여 치료 끝난 후 근로복지공단에 청구하는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 407 | industrial-accident-medical-benefit | 산재보험 요양급여 소견서 챙겨서 근로복지공단에 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 408 | industrial-accident-nursing-benefit | 산재보험 간병급여 간병인 증명서류로 근로복지공단에 7일 만에 청구하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 409 | industrial-accident-re-examination-request | 산재 심사청구 결정 불복 시 진료기록으로 60일 만에 재심사받는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 410 | industrial-accident-return-to-work-subsidy | 산재 직장복귀지원금 임금원천징수부로 7일 만에 청구하는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 411 | industrial-accident-survivor-benefit | 산재 유족급여 장례비 사망진단서로 근로복지공단에 청구하는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 412 | industrial-accident-survivor-pension-change | 산재 유족연금 수급권자 변경 사망진단서로 10일 만에 신고하는 법 | pension | 1 | O | 1 | 7 | 2026-07-17 |
| 413 | industrial-accident-temporary-disability-benefit | 산재 휴업급여 임금대장으로 7일 만에 청구 2년 넘으면 상병보상연금 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 414 | industrial-property-application | 산업재산권 출원 명세서와 도면으로 특허 실용신안 상표 디자인 7일 만에 접수하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 415 | infant-developmental-checkup | 영유아 발달정밀검사비 지원대상과 신청기한, 검사비 받는 방법 | welfare | 1 | O | 1 | 7 | - |
| 416 | inheritance-registration | 상속등기 신청방법과 서류, 취득세 2.8%까지 총정리 | life | 1 | O | 1 | 7 | 2026-07-11 |
| 417 | inheritance-tax | 상속세 계산기로 면제한도 확인하고 6개월 안에 신고하는 법 | tax | 1 | O | 1 | 7 | 2026-07-17 |
| 418 | innobiz-certificate | 이노비즈 확인서 서류 없이 지방중기청에 7일 만에 발급받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 419 | insurance-claim-denial-rate | 보험금 잘 주는 회사 vs 안 주는 회사, 부지급률로 비교하는 법 | insurance | 1 | O | 1 | 7 | 2026-07-16 |
| 420 | insurance-disclosure-duty-guide | 보험 고지의무 안 지키면 벌어지는 일, 실제 분쟁사례로 보기 | insurance | 1 | O | 1 | 7 | 2026-07-16 |
| 421 | insurance-policy-certificate | 보험증권 어디서 받나요, 조회 방법과 보는 법 그리고 재발급 | insurance | 1 | O | 1 | 4 | 2026-09-07 |
| 422 | insured-turnover-confirmation | 피보험자 이직확인서 사업주가 서류 없이 10일 만에 발급받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 423 | integrated-career-certificate | 고용24 통합경력증명서 발급받고 이력서 자동완성하는 법 | issue | 1 | O | 1 | 7 | 2026-07-30 |
| 424 | international-drivers-license | 국제운전면허증 9000원 경찰서 즉시발급 vs 인터넷 14일 차이 | issue | 1 | O | 0 | 7 | 2026-07-17 |
| 425 | international-freight-forwarding-registration | 국제물류주선업 등록 등록기준증명서로 시도에 2만원 신규10일 변경5일 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 426 | international-vaccination-certificate-reissue | 국제공인예방접종 증명서 재발급 인적사항 변경으로 국립검역소 1000원 즉시 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 427 | investment-advisory-discretionary-business-registration | 투자자문업 투자일임업 등록 임원경력증명서로 금융위원회에 수수료없이 2개월 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 428 | isa-bank-comparison | ISA 계좌 은행별 정기예금 금리 비교, 어디가 제일 유리할까 | savings | 1 | O | 1 | 7 | 2026-07-21 |
| 429 | isolated-youth-onestop | 고립·은둔 청소년 원스톱 지원, 비밀보장과 심리치료까지 | fund | 1 | O | 1 | 8 | 2026-05-23 |
| 430 | it-communications-construction-business-registration | 정보통신공사업등록 기업진단보고서로 한국정보통신공사협회 3만원 10일 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 431 | jaebeol-xhyeongsa2-rerun | 재벌형사 2 재방송 시간과 편성표, 다시보기는 어디서 보나? | life | 1 | O | 1 | 5 | 2026-08-11 |
| 432 | jeonse-right-registration | 전세권설정등기 신청방법과 비용, 확정일자와 뭐가 다른가요? | life | 1 | O | 1 | 7 | 2026-07-16 |
| 433 | k-mooc-online | K-MOOC 수강방법과 수료증·학점인정, 외국어 강좌도 있나요? | fund | 1 | O | 1 | 8 | 2026-07-31 |
| 434 | k-move-school | K-Move스쿨 신청자격과 연수국가, 취업이 보장되나요? | fund | 1 | O | 1 | 8 | 2026-05-23 |
| 435 | labor-consultant-corporation-establishment-approval | 노무법인 설립인가 신청 업무계획서와 정관으로 지방고용노동관서 수수료없이 14일 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 436 | labor-union-certificate-reissue | 노동조합 설립신고증 분실 시 서류 없이 관할기관에 2일 만에 재교부받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 437 | labor-union-establishment-report | 노동조합 설립신고 규약으로 관할기관에 수수료없이 3일 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 438 | land-register-certificate | 토지대장 임야대장 인터넷 무료 발급받고 지목·면적 확인하는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 439 | land-transaction-permit | 토지거래허가구역 매수 전 자금조달계획서로 15일 만에 허가받는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 440 | land-use-conversion | 내 땅 토지이용계획 열람하고 농지·산지 전용 조건 확인하는 법 | housing | 1 | O | 1 | 7 | 2026-07-29 |
| 441 | large-scale-store-closure-report | 대규모점포 휴업 폐업신고 서류 없이 시군구에 3일 만에 신고하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 442 | large-scale-store-registration | 대규모점포 개설등록 상권영향평가서 갖춰 시군구에 30일 만에 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 443 | leap-savings | 장기간부 도약적금 가입시기와 납입한도, 왜 군 간부에게만 주나요? | fund | 1 | O | 1 | 7 | 2026-05-23 |
| 444 | lease-fixed-date | 전월세 계약 후 확정일자 인터넷·방문으로 받아 보증금 지키는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 445 | led-lighting-support | 에너지 취약계층 고효율 조명기기 무상교체 지원 | welfare | 1 | O | 1 | 7 | 2026-05-23 |
| 446 | leverage-etf-investor-protection | 레버리지 ETF 기본예탁금 3천만원 상향, 사전교육·괴리율 확인까지 총정리 | finance | 1 | O | 1 | 7 | 2026-07-22 |
| 447 | lh-apply-plus | LH청약플러스 신청방법, 인증서와 서류 뭘 준비해야 하나 | housing | 1 | O | 1 | 7 | 2026-07-31 |
| 448 | lh-sh-rental-compare | LH SH 공공임대주택 5종 신청자격 비교, 거주기간 모르고 넣으면 헛걸음 | housing | 1 | O | 0 | 7 | 2026-08-18 |
| 449 | life-vs-nonlife-insurance | 생명보험 손해보험 제3보험, 실손보험은 어디에 속하나요 | insurance | 1 | O | 1 | 7 | 2026-07-16 |
| 450 | lifelong-education-instructor-certificate | 평생교육사 자격증 발급 재발급 성적증명서로 수수료 없이 8일에서 12일 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 451 | lim-youngwoong-concert-2026 | 임영웅 콘서트 고양 좌석 등급별 가격, 잔여석 실시간으로 어떻게 보나 | life | 1 | O | 1 | 7 | 2026-07-16 |
| 452 | liquor-manufacturing-site-relocation-report | 주류 제조장·판매장 이전 신고 사업계획서로 세무서 수수료없이 소매업 7일 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-20 |
| 453 | liquor-sales-license-application | 주류판매업 면허신청 자본금납입증명서로 세무서에 도매5만원 소매3만원 40일 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 454 | livelihood-account | 생계비계좌 개설 조건과 은행, 월 250만원 압류방지 신청방법 | life | 1 | O | 1 | 7 | 2026-07-11 |
| 455 | livestock-business-transfer-report | 축산업 영업자 지위승계 신고 가축분뇨처리계획서로 시군구 승계30일 이내 하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 456 | livestock-product-business-report | 정육점 축산물판매업 영업신고 시설내역서로 인터넷 9천원 3일 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 457 | loan-business-registration | 대부업 대부중개업 등록 교육이수증과 자본증명서로 시도에 10만원 14일 만에 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 458 | local-gift-card | 지역사랑상품권 구매방법과 사용처, 할인율과 환불여부까지 | fund | 1 | O | 1 | 7 | 2026-05-23 |
| 459 | local-tax-collection-deferral | 지방세 징수유예 재해 장기치료 시 담보서로 10일 만에 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 460 | local-tax-item-certificate | 지방세 세목별 과세증명서 인터넷 무료 발급받고 재산세·자동차세 납부실적 증명하는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 461 | local-tax-payment-certificate | 지방세 납세증명서 인터넷 무료 발급받고 대출·입찰에 제출하는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 462 | local-tax-payment-confirmation | 취득세 등록면허세 납부확인서 신분증만 있으면 무료로 즉시 발급받는 법 | tax | 1 | O | 1 | 7 | 2026-07-18 |
| 463 | local-tax-refund-claim | 지방세 잘못 냈거나 더 냈으면 위택스로 환급 청구하는 법 | tax | 1 | O | 1 | 7 | 2026-07-17 |
| 464 | long-term-care-institution-designation | 장기요양기관 지정 신청 사업계획서와 운영규정으로 수수료없이 30일 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 465 | loss-sharing-mortgage | 손익공유형모기지 최초 5년 1.3% 신청하고 손익 나눠 갚는 법 | loan | 1 | O | 1 | 7 | 2026-07-17 |
| 466 | low-income-single-parent | 한부모가족 아동양육비 청소년한부모와 차이, 주거지원도 되나요? | fund | 1 | O | 1 | 8 | 2026-05-23 |
| 467 | lpg-business-change-permit | LPG 충전사업 변경허가 기술검토서 갖춰 시군구에 1만5천원 4일 만에 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 468 | lpg-business-permit | LPG 충전판매사업 허가신청 사업계획서와 기술검토서로 시군구 3만원 5일 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-20 |
| 469 | lpg-safety-manager-appointment-report | LPG 안전관리자 선임 해임 퇴직신고 자격증명서로 시군구 수수료없이 즉시 3시간 만에 하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 470 | ltci-doctor-opinion-form | 장기요양 의사소견서 양식 다운로드, 발급 방법과 유효기간은? | issue | 1 | O | 0 | 7 | 2026-08-14 |
| 471 | ltci-family-care-benefit-form | 가족요양비 지급 신청서 다운로드, 신청 방법과 못 받는 급여는? | issue | 1 | O | 0 | 7 | 2026-08-14 |
| 472 | ltci-grade-criteria-guide | 장기요양등급 1~5등급, 인지지원등급까지 점수 기준 총정리 | insurance | 1 | O | 1 | 7 | 2026-07-16 |
| 473 | ltci-medical-aid-facility-application | 의료급여수급권자 장기요양기관 입소 인정서 사본으로 7일 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 474 | ltci-review-request-form | 장기요양 심사청구서 다운로드, 재심사청구는 언제까지 해야 하나? | issue | 1 | O | 0 | 7 | 2026-08-14 |
| 475 | ltci-survey-sheet | 장기요양인정조사표 다운로드, 방문조사 때 뭐뭐 묻나? | issue | 1 | O | 0 | 7 | 2026-08-14 |
| 476 | mainbiz-certificate-reissue | 메인비즈 확인서 발급 확인서 원본이나 서류 없이 7일 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 477 | maritime-criminal-complaint | 해상 사건사고 고소 고발 진정 탄원 서류 없이 해양경찰서에 접수하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 478 | marriage-brokerage-business-registration | 국내 국제결혼중개업 신고등록 자본금 1억과 보증보험으로 시군구에 30일 만에 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 479 | marriage-brokerage-certificate-reissue | 결혼중개업 신고필증 등록증 재발급 훼손증 지참으로 시군구 수수료없이 7일 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 480 | medical-aid-type1-type2-difference | 의료급여 1종 2종 차이, 본인부담금부터 건강생활유지비 혜택까지 | welfare | 1 | O | 1 | 8 | 2026-07-24 |
| 481 | medical-device-manufacturing-permit | 의료기기 제조수입업 허가 품질책임자서류로 지방식약청 14만원 25일 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 482 | medical-device-sales-report | 의료기기 판매업 신고 서류 없이 인터넷 9천원 방문 1만원 3일 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 483 | medical-license-certificate | 의료인면허등록증명 발급신청 구비서류없이 보건복지부 500원 즉시 3시간 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-20 |
| 484 | middle-aged-career-support | 중장년 경력지원제 신청자격과 참여기업 조건, 참여수당 월 150만원 | welfare | 1 | O | 1 | 7 | 2026-05-23 |
| 485 | middle-aged-tomorrow-center | 중장년내일센터 생애경력설계 무료, 내일이음패키지는 뭐가 다른가요? | welfare | 1 | O | 1 | 7 | 2026-05-23 |
| 486 | middle-school-transfer-assignment | 중학교 전학 편입학 배정원서와 재학증명서로 교육지원청에 즉시 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 487 | military-checkup-date-selection | 병역판정검사 입영일자 본인이 원하는 날짜로 인터넷 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 488 | military-overseas-travel-permit | 병역의무자 국외여행허가 25세 이상 유학 취업 총2일 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 489 | military-pension | 군인연금 몇 년 복무하면 받나, 수령액 계산과 신청방법까지 | pension | 1 | O | 0 | 7 | 2026-08-06 |
| 490 | military-service-certificate | 병적증명서 무료 인터넷 발급받고 복무필자는 주민등록초본으로 대체하는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 491 | military-service-postponement | 병역판정검사 입영일자 연기 진단서로 신청 유형별 처리기간 다른 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 492 | minimum-wage-2027 | 2027년 최저임금 10,700원 확정 절차, 월급으로는 얼마인가요? | life | 1 | O | 1 | 7 | 2026-07-16 |
| 493 | minor-guardian-change-report | 미성년후견인 경질신고 취임 1개월 이내 재판등본으로 시읍면에 하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 494 | missing-child-fingerprint-registration | 지문 사전등록 아동 무료로 즉시 등록해 실종 대비하는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 495 | missing-person-declaration | 실종선고 청구 5년 기다려야 하나, 신고까지 절차 정리 | issue | 1 | O | 1 | 7 | 2026-07-30 |
| 496 | missing-person-report-receipt | 실종아동 가출인 신고접수증 서류 없이 경찰서에서 즉시 발급받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 497 | mobile-pet-grooming-registration | 이동식 애견미용차 동물미용업 등록 사업계획서로 시군구에 1만원 15일 만에 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 498 | modu-card-refund-standard | 모두의카드 환급기준금액, 수도권 5만원 쓰면 2만원 돌려받는 이유 | life | 1 | O | 1 | 7 | 2026-07-27 |
| 499 | mom-pregnancy-onestop | 맘편한임신 원스톱 신청방법, 행복출산 원스톱과 차이는? | service | 1 | O | 1 | 8 | 2026-05-23 |
| 500 | mortgage-cancellation | 근저당권 말소 셀프 신청방법과 서류, 비용까지 | life | 1 | O | 1 | 7 | 2026-07-11 |
| 501 | mounjaro-price-comparison | 마운자로 처방 병원별 가격, 공식 공개자료에서 조회되는 항목인가 | medical | 1 | O | 0 | 7 | 2026-07-16 |
| 502 | move-in-report-online | 전입신고 인터넷으로 하는 법, 정부24에서 요금감면까지 한번에 신청 | life | 1 | O | 1 | 7 | 2026-07-20 |
| 503 | movie-discount-voucher | 영화지원금 2차 신청방법, CGV 롯데시네마 메가박스 사용법 | service | 1 | O | 1 | 7 | 2026-07-08 |
| 504 | multi-culture-child-edu | 다문화가족 자녀 교육활동비 신청방법, 한국어가 서툴러도 되나요? | fund | 1 | O | 1 | 8 | 2026-05-23 |
| 505 | multilevel-marketing-change-report | 다단계판매업 등록사항 변경신고 등록증으로 시도에 3일 만에 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 506 | multilevel-marketing-registration | 다단계판매업 등록 소비자피해보상보험 서류 갖춰 시도에 7일 만에 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 507 | multiplex-game-provider-registration | PC방 복합유통게임제공업 등록 시설개요서로 시군구에 3일 만에 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 508 | music-business-closure-report | 노래연습장업 폐업신고 등록증만으로 세무서와 함께 3일 만에 신고하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 509 | name-change-report | 개명신고 법원허가 등본 받은 날부터 1개월 이내 신고하는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 510 | national-employment-support | 국민취업지원제도 1유형 2유형 차이, 구직촉진수당 신청방법 | welfare | 1 | O | 1 | 7 | 2026-05-23 |
| 511 | national-heritage-internship | 국가유산 청년 인턴십 | youth | 1 | O | 1 | 7 | 2026-05-23 |
| 512 | national-pension-disability-benefit | 국민연금 장애연금 장애심사용 진단서로 1개월 만에 청구하는 법 | pension | 1 | O | 1 | 7 | 2026-07-17 |
| 513 | national-pension-divided-benefit | 국민연금 분할연금 이혼한 배우자 노령연금 나눠 받는 법 | pension | 1 | O | 1 | 7 | 2026-07-17 |
| 514 | national-pension-lump-sum | 국민연금 반환일시금 지급조건과 소멸시효, 60세 안 되면 못 받나요? | pension | 1 | O | 1 | 7 | 2026-07-16 |
| 515 | national-pension-review-request | 국민연금 심사청구 자격 보험료 처분에 이의 있으면 60일 만에 다투는 법 | pension | 1 | O | 1 | 7 | 2026-07-17 |
| 516 | national-pension-survivor-benefit | 국민연금 유족연금 사망진단서 챙겨서 방문 청구하는 법 | pension | 1 | O | 1 | 7 | 2026-07-17 |
| 517 | national-scholarship-second-round | 국가장학금 2차 신청기간 8월 12일 확인하고 신청하는 법 | fund | 1 | O | 0 | 9 | 2026-07-29 |
| 518 | national-secretary | 국민비서 구삐 신청방법과 알림채널, 개인정보는 안전한가요? | service | 1 | O | 1 | 7 | 2026-05-23 |
| 519 | national-tax-objection | 국세 이의신청 처분 안 날부터 90일 이내 불복이유서로 다투는 법 | tax | 1 | O | 1 | 7 | 2026-07-17 |
| 520 | national-tax-payment-certificate | 국세 납세증명서 인터넷 무료 발급받고 해외이주여권용 10일 대비하는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 521 | national-tax-payment-deadline-extension | 국세 납부기한 연장 천재지변 진단서로 3일 만에 승인받는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 522 | national-technical-qualification-issuance | 국가기술자격증 신규발급 사진 1장으로 총15일 만에 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 523 | national-technical-qualification-verification | 국가기술자격 취득사항 확인신청 검정시행기관에 구비서류없이 즉시 3시간 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 524 | nationality-fact-certificate | 귀화허가 국적취득사실증명 인터넷 무료로 즉시 발급받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 525 | nationality-loss-report | 국적상실신고 외국여권사본으로 출입국외국인청 수수료없이 즉시 3시간 만에 하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 526 | new-business-startup-school | 신사업창업사관학교 사업화자금 4,000만원, 졸업하면 끝인가요? | fund | 1 | O | 1 | 7 | 2026-05-23 |
| 527 | new-start-fund | 새출발기금 채무조정 대상 확인하고 신청하는 법, 원금 최대 90% 감면 | loan | 1 | O | 1 | 8 | 2026-08-10 |
| 528 | newspaper-internet-news-business-registration | 신문 인터넷신문 사업등록 정관과 인쇄사신고필증으로 시도 수수료없이 20일 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 529 | no-refund-life-insurance-guide | 무해지환급형 보험이 왜 더 저렴한가요? 가입 전 꼭 확인할 점 | insurance | 1 | O | 1 | 7 | 2026-07-16 |
| 530 | noise-meter-rental | 층간소음 측정기 무료대여 신청방법, 측정 후 어떤 조치 받나요? | service | 1 | O | 1 | 7 | 2026-05-23 |
| 531 | noise-vibration-facility-permit | 소음진동배출시설 설치허가 신고 설치명세서로 시군구 조례수수료 5일 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 532 | nonprofit-corporation-establishment-permit | 비영리법인 설립허가 정관과 재산목록 갖춰 주무관청에 수수료 없이 14일 만에 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 533 | nursing-assistant-certificate-issuance | 간호조무사 자격증 발급 이수증명서로 신규 30일 재발급 5일 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 534 | nursing-facility-insurance | 요양원 요양병원 비용, 실비보험으로 얼마나 보장되나요? | insurance | 1 | O | 1 | 7 | 2026-07-16 |
| 535 | nutrition-plus | 영양플러스 식품패키지와 영양교육, 지원기간은 얼마나 되나요? | service | 1 | O | 1 | 8 | 2026-05-23 |
| 536 | online-mail-order-business-change | 통신판매업 변경신고 상호 주소 변경 시 신고증 원본으로 3일 만에 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 537 | online-mail-order-business-closure | 통신판매업 휴폐업신고 신고증 원본으로 시군구에 3일 만에 신고하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 538 | online-mail-order-business-registration | 통신판매업신고 구매안전서비스 확인증으로 시군구에 3일 만에 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 539 | online-mail-order-certificate-reissue | 통신판매업 신고증 재발급 신분증만 있으면 시군구에서 즉시 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 540 | optical-shop-opening-registration | 안경업소 개설등록 시설장비개요서로 시군구에 3일 만에 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 541 | out-of-home-teen | 가정 밖 청소년 지원 청소년쉼터 생활과 자립지원수당 연계까지 | fund | 1 | O | 1 | 8 | 2026-05-23 |
| 542 | out-of-school-job | 학교 밖 청소년 자립·취업지원, 자격증 응시료도 지원되나요? | fund | 1 | O | 1 | 8 | 2026-05-23 |
| 543 | out-of-school-teen | 학교 밖 청소년 지원 검정고시와 진로취업, 다른 지원 중복여부 | fund | 1 | O | 1 | 8 | 2026-05-23 |
| 544 | outdoor-advertisement-extension | 간판 표시기간 연장허가 사용승락서와 현장사진으로 5일 만에 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 545 | outdoor-advertisement-permit | 가게 간판 옥외광고물 허가신고 사용승락서로 5일 만에 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 546 | outdoor-advertisement-safety-inspection | 옥외광고물 안전점검 신청 설계도서로 시군구에 사례별수수료 7일 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 547 | outdoor-advertising-business-registration | 옥외광고업 신규등록 기술능력증명서와 교육이수서로 시군구 조례수수료 7일 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 548 | outdoor-assembly-report | 옥외집회 신고 시작 48시간 전까지 관할 경찰서에 접수하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 549 | outdoor-assembly-withdrawal-report | 옥외집회 시위 철회신고 개최 24시간 전 경찰서에 수수료없이 즉시 3시간 만에 하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 550 | overseas-emigration-report | 해외이주신고 여권과 영주권 서류로 재외동포청에 즉시 신고하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 551 | overseas-korean-registration | 재외국민등록 체류사증과 여권으로 재외공관에 3일 만에 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 552 | overseas-residence-report | 국외이주신고 주민등록증만 있으면 읍면동에서 즉시 신고하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 553 | overseas-trading-partner-code-registration | 해외거래처부호등록 송품장으로 세관에 수수료없이 1일 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 554 | paid-job-placement-agency-registration | 유료직업소개소 등록 종사자명부와 보증보험으로 시군구에 3만원 15일 만에 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 555 | parental-work-reduction-pay | 육아기 근로시간 단축 급여 신청 방법과 서류, 지급 기간까지 | fund | 1 | - | 1 | 7 | 2026-05-23 |
| 556 | passenger-transport-license-reissue | 여객자동차 운수사업 면허증 재발급신청 훼손면허증으로 시군구 2000원 1일 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-20 |
| 557 | passport-entry-change | 여권 구여권번호 출생지 기재 재외공관 인천공항서 5천원 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 558 | passport-fact-certificate | 여권 사실증명 발급기록 실효확인 인터넷 무료로 즉시 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 559 | passport-issuance | 여권 발급 수수료 확인하고 재발급은 정부24로 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 560 | passport-loss-report | 여권 분실 신고 신분증만으로 즉시 접수하는 법 취소는 불가능 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 561 | paternity-acknowledgment-report | 인지 친권자지정신고 혼인외 출생자를 친생자로 시읍면에 수수료 없이 신고하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 562 | pc-cafe-business-registration | PC방 등록 임대차계약서와 시설개요서로 시군구에 조례수수료 3일 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 563 | personal-info-access-request | 내 개인정보 처리내역 신분증만 있으면 공공기관에 10일 만에 열람청구하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 564 | pet-boarding-business-registration | 반려동물호텔 동물위탁관리업 등록 사업계획서로 시군구에 1만원 15일 만에 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 565 | pet-funeral-business-status-report | 동물장묘업 휴업 폐업 재개업신고 허가증만으로 시군구에 수수료 없이 즉시 신고하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 566 | pet-insurance-guide | 펫보험 가입해도 되나요? 진료비 40%가 병원비인데 보장 되나 | insurance | 1 | O | 1 | 7 | 2026-07-16 |
| 567 | pet-registration | 반려견 동물등록 무선식별장치 1만원에 하고 미등록 과태료 피하는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 568 | pharmaceutical-wholesale-permit | 의약품도매상허가 재무상태표와 기업진단서로 시도에 2만원 7일 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 569 | pharmacy-establishment-registration | 약국개설등록 면허증 제시만으로 시군구에 1만원 7일 만에 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 570 | platform-worker-leave-report | 특수형태근로종사자 산재보험 휴업신고 서류 없이 7일 만에 처리하는 법 | issue | 1 | O | 1 | 8 | 2026-07-18 |
| 571 | port-transportation-business-registration | 항만운송사업등록 사업계획서로 시도 지방해양수산청에 1만원 5일 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 572 | postal-insurance-fetus-registration | 우체국보험 태아등재, 22주 지나면 정말 못 하나요 | fund | 1 | O | 1 | 7 | 2026-07-16 |
| 573 | postpartum-care-center-report | 산후조리원 산후조리업 신고 건강진단서와 책임보험서류로 시군구 수수료없이 5일 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 574 | pregnancy-pre-health | 임신 사전건강관리 검사항목과 신청방법, 다른 지원과 중복여부 | fund | 1 | O | 1 | 8 | 2026-05-23 |
| 575 | preschool-tuition | 누리과정 유치원학비 신청방법, 어린이집 보육료 중복지원 안되나요? | service | 1 | O | 1 | 7 | 2026-05-23 |
| 576 | private-academy-establishment-registration | 학원설립 운영등록 시설평면도 갖춰 교육지원청에 10일 만에 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 577 | private-school-pension | 사학연금 몇 년 재직하면 받나, 수령액 계산과 청구 방법까지 | pension | 1 | O | 0 | 7 | 2026-08-06 |
| 578 | private-taxi-license | 개인택시 면허 신청 택시운전자격증과 건강진단서로 시군구에 60일 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 579 | profit-sharing-mortgage | 수익공유형모기지 금리 1.8%로 신청하고 매각차익 나눠 갚는 법 | loan | 1 | O | 1 | 7 | 2026-07-17 |
| 580 | property-tax-installment | 재산세 분할납부 납부기한 안에 무료로 신청해 목돈부담 줄이는 법 | tax | 1 | O | 1 | 7 | 2026-07-17 |
| 581 | protected-child-scholar | 보호대상아동 민간후원 장학사업, 인강만 받나요? 3년 후에도? | fund | 1 | O | 1 | 7 | 2026-05-23 |
| 582 | public-forest-manager | 공공산림관리단 (산림 관리 공공일자리) | welfare | 1 | O | 1 | 7 | 2026-05-23 |
| 583 | public-health-business-closure-report | 공중위생영업 폐업신고 세무서와 함께 폐업 후 20일 이내 수수료 없이 즉시 신고하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 584 | public-health-business-report | 숙박업 미용업 세탁업 공중위생영업신고 시설개요서로 시군구에 수수료 없이 즉시 신고하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 585 | public-health-business-succession-report | 공중위생영업 지위승계신고 양도양수증명서로 시군구에 수수료 없이 즉시 신고하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 586 | public-housing-asset-test | 공공임대주택 총자산 조회하고 자산심사 기준 확인하는 법 | housing | 1 | O | 1 | 9 | 2026-07-29 |
| 587 | real-estate-agency-closure-report | 공인중개사무소 휴업 폐업 신고 등록증만 있으면 즉시 처리하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 588 | real-estate-agency-registration | 공인중개사무소 개설등록 실무교육 수료증으로 시군구에 7일 만에 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 589 | real-estate-registration-number-certificate | 외국인 부동산등기용 등록증명서 인터넷 무료로 즉시 발급받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 590 | real-estate-registry-certificate | 등기부등본 인터넷 1000원에 발급받고 권리관계 확인하는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 591 | real-estate-tax-reform-2026 | 2026 부동산 세제개편안 정리, 시가 20억 비과세라는데 내 집은 어느 구간인가 | tax | 1 | O | 0 | 7 | 2026-08-04 |
| 592 | real-estate-transaction-report | 부동산거래신고 계약체결일부터 60일 이내 인터넷으로 하는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 593 | registered-domicile-change | 등록기준지 변경신고 기본증명서로 방문 즉시 이전하는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 594 | registered-sports-facility-business-plan-approval | 체육시설업 사업계획승인 운영계획서로 시도에 조례수수료 40일 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 595 | relocation-expense-claim | 이주비 청구 취업으로 이사했으면 운송비 영수증으로 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 596 | renewal-vs-nonrenewal-insurance | 갱신형보험 비갱신형보험, 보험료 왜 이렇게 차이 나나요 | insurance | 1 | O | 1 | 7 | 2026-07-16 |
| 597 | rental-dispute-mediation | 임대차분쟁조정위원회 신청 방법과 비용, 처리 기간까지 | legal | 1 | - | 1 | 7 | 2026-05-23 |
| 598 | reserve-forces-training-deferral | 예비군 훈련보류 재직 재학증명서로 소속중대에 1일 만에 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 599 | reserve-forces-training-postponement | 예비군 훈련연기 진단서로 소속중대에 1일 만에 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 600 | resident-id-card-new-issuance | 만17세 주민등록증 최초 발급 사진 챙겨 읍면동에서 14일 만에 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 601 | resident-id-card-reissue | 주민등록증 분실 재발급 IC칩 포함 1만원 총14일 걸리는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 602 | resident-list-confirmation-certificate | 전입세대확인서 방문 발급받고 전세계약 전 세대주 명단 확인하는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 603 | resident-registration-certificate | 주민등록등본 초본 인터넷 무료 발급받고 대리인 위임장 준비하는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 604 | resident-registration-fact-check | 2026 주민등록 비대면 사실조사, 정부24 앱 참여 방법 5분이면 끝 | life | 1 | O | 0 | 7 | 2026-08-05 |
| 605 | residential-monthly-rent-loan | 주거안정월세대출 우대형 1.3% 신청하고 월 60만원 받는 법 | loan | 1 | O | 1 | 7 | 2026-07-17 |
| 606 | restart-support-fund | 소상공인 재도전 특별자금 (재도약) | loan | 1 | O | 1 | 7 | 2026-05-23 |
| 607 | retirement-pension-check | 내 퇴직연금 조회 방법, 통합연금포털과 미청구 연금 찾기까지 | pension | 1 | O | 0 | 7 | 2026-08-06 |
| 608 | return-farming-startup-loan | 귀농 농업창업·주택구입 지원 연령·거주요건과 대출한도, 선발평가까지 | loan | 1 | O | 1 | 7 | 2026-05-23 |
| 609 | return-fishing-startup-loan | 귀어 창업 및 주택구입 지원(융자) | loan | 1 | O | 1 | 7 | 2026-05-23 |
| 610 | robot-surgery-cost | 로봇 수술 비용과 요실금 수술비, 담석증 350만원은 보험으로 얼마나 받나요? | insurance | 1 | O | 1 | 4 | 2026-09-07 |
| 611 | rural-basic-income | 농어촌 기본소득 시범사업 대상지역, 신청해야 받나요? | fund | 1 | O | 1 | 7 | 2026-05-23 |
| 612 | rural-student-loan | 농촌출신대학생 학자금대출 일반대출과 차이, 농어촌 주소 인정범위 | loan | 1 | O | 1 | 8 | 2026-05-23 |
| 613 | rural-youth-growth | 인구감소지역 청소년 성장지원, 학습지원과 문화체험은 어떻게 | fund | 1 | O | 1 | 8 | 2026-05-23 |
| 614 | safe-stepping-stone-app | 안전디딤돌 앱 다운로드와 안전신고 방법, 재난 시 활용법까지 | service | 1 | O | 1 | 7 | 2026-05-23 |
| 615 | safety-health-manager-appointment-report | 안전관리자 보건관리자 선임보고 서류 없이 지방고용노동청에 즉시 신고하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 616 | sanitarian-license-certificate | 위생사면허증명 발급신청 신분증사본으로 보건복지부 500원 즉시 3시간 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-20 |
| 617 | sanitarian-license-issuance | 위생사 면허증 발급 학위증명서와 진단서로 수수료 없이 14일 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 618 | sanitarian-license-reissue | 위생사 면허증 재발급신청 분실사유서와 반명함사진으로 보건복지부 2000원 3일 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-20 |
| 619 | savings-ladder-strategy | 예금 적금 풍차돌리기, 목돈 만드는 방법과 장단점 총정리 | life | 1 | O | 1 | 7 | 2026-07-16 |
| 620 | school-coordinator | 학교 코디네이터 (돌봄·교육 지원) | welfare | 1 | O | 1 | 7 | 2026-05-23 |
| 621 | school-enrollment-deferral-approval | 초등학교 취학유예 질병 소명자료로 학교에 5일 만에 승인받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 622 | school-foundation-establishment-permit | 학교법인 설립허가 재산출연증서와 정관으로 관할청에 수수료 없이 20일 만에 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 623 | science-culture-voucher | 과학문화바우처 사용처와 신청기간, 10만원 어떻게 쓰나 | welfare | 1 | O | 1 | 7 | 2026-07-16 |
| 624 | seafarer-book-reissue | 선원수첩 재발급 사진 1매로 지방해양수산청에 1일 만에 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 625 | seal-certificate | 인감증명서 인터넷 무료 발급받고 대리인 위임장 준비하는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 626 | seal-registration | 인감신고 읍면동 방문으로 무료 즉시 등록하고 인감증명서 발급받는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 627 | security-business-permit | 경비업 허가신청 정관과 임원이력서로 시도경찰청에 만원 15일 만에 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 628 | seed-business-registration | 종자업등록신청 종자관리사 1인이상으로 시군구 수수료없이 7일 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 629 | self-signature-confirmation-certificate | 본인서명사실확인서 2028년까지 무료 발급받고 인감증명서 대신 쓰는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 630 | self-sufficiency-program | 자활사업 대상자와 참여 방법, 종류와 급여까지 | welfare | 1 | - | 1 | 7 | 2026-05-23 |
| 631 | senior-customized-care | 노인맞춤돌봄서비스 돌봄4군 차이와 신청자격, 장기요양보험과 차이 | service | 1 | O | 1 | 8 | 2026-05-23 |
| 632 | seoul-electric-motorcycle-subsidy | 서울 전기이륜차 보조금 신청방법, 641대 어떻게 나눠 받나 | fund | 1 | O | 1 | 7 | 2026-07-29 |
| 633 | seoul-electric-taxi-subsidy | 서울 전기택시 보조금 차종별 금액 조회하고 신청하는 법 | fund | 1 | O | 1 | 8 | 2026-07-29 |
| 634 | seoul-pregnancy-transport | 서울 임산부 교통비 신청방법, 70~100만원 바우처 어떻게 받나 | fund | 1 | O | 1 | 9 | 2026-07-29 |
| 635 | sex-offender-notification | 성범죄자 신상정보 열람방법과 공개기간, 학교에서도 확인되나요? | service | 1 | O | 1 | 7 | 2026-05-23 |
| 636 | sharing-ticket | 나눔티켓 나눔회원 신청방법, 기초수급자·차상위 공연전시 할인 | welfare | 1 | O | 1 | 7 | 2026-05-23 |
| 637 | siheung-newlywed-jeonse-interest | 시흥시 신혼부부 전세대출 이자지원 신청기간 확인하고 신청하는 법 | housing | 1 | O | 1 | 7 | 2026-07-30 |
| 638 | simplified-underwriting-insurance | 유병자보험(간편보험), 일반보험보다 먼저 알아둘 것 3가지 | insurance | 1 | O | 1 | 7 | 2026-07-16 |
| 639 | single-parent-facility | 한부모가족 복지시설 양육·생활시설 차이와 입소방법, 위기임산부 지원 | service | 1 | O | 1 | 8 | 2026-05-23 |
| 640 | single-parent-family-certificate | 한부모가족증명서 무료 인터넷 발급받고 지원자격 증명하는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 641 | small-biz-bank-debt | 소상공인 은행권 채무 조정 (새출발기금) | loan | 1 | O | 1 | 7 | 2026-06-28 |
| 642 | small-biz-fund-compare | 2026 소상공인 정책자금 4차 12개 비교, 내 조건에 맞는 자금 찾기 | loan | 1 | O | 0 | 7 | 2026-08-03 |
| 643 | small-biz-refinance-loan | 2026 소상공인 대환대출 조건과 서류, 4.5% 이자 10년으로 갈아탈 수 있나 | loan | 1 | O | 0 | 7 | 2026-08-04 |
| 644 | smartfarm-youth-incubator | 스마트팜 청년창업 보육센터 경쟁률 5대 1, 이수하면 열리는 30억 대출 조건 확인 | fund | 1 | O | 0 | 7 | 2026-08-06 |
| 645 | sme-confirmation | 중소기업확인서 원천징수이행상황신고서로 지방중기청에 3일 만에 발급받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 646 | sme-meal | 중소기업 든든한 한끼 지원대상, 대기업 직원도 받을 수 있나요? | fund | 1 | O | 1 | 7 | 2026-05-23 |
| 647 | sme-owner-industrial-accident-insurance | 중소기업 사업주 산재보험 임의가입 건강진단서로 근로복지공단에 7일 만에 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 648 | smile-microcredit | 미소금융 자격조건과 운영자금, 신용점수 낮아도 받을 수 있나요? | loan | 1 | O | 1 | 7 | 2026-07-10 |
| 649 | smokefree-living-environment | 생활터 금연환경 조성 지원 | welfare | 1 | O | 1 | 7 | 2026-05-23 |
| 650 | social-cooperative-establishment-permit | 사회적협동조합 설립인가 정관과 창립총회 의사록으로 수수료 없이 60일 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 651 | social-security-agreement-pension-certificate | 해외파견 국민연금 가입증명서 파견명령서로 7일 만에 이중가입 면제받는 법 | pension | 1 | O | 1 | 7 | 2026-07-18 |
| 652 | social-security-benefit-application | 사회보장급여 통합신청서 하나로 기초생활수급 장애인연금 한번에 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 653 | social-welfare-corporation-establishment-permit | 사회복지법인 설립허가 재산출연증서와 정관 갖춰 시도에 수수료 없이 17일 만에 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 654 | special-mission-veteran-registration | 특수임무유공자 유족등록 사진과 가족관계증명서로 30일 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 655 | special-telecom-business-registration | 별정통신사업자 등록 사업계획서와 통신망구성도로 중앙전파관리소 수수료없이 30일 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 656 | sports-class-voucher | 스포츠강좌이용권 지원대상과 사용법, 장애인이용권은 뭐가 다른가요? | welfare | 1 | O | 1 | 7 | 2026-05-23 |
| 657 | sports-facility-business-report | 수영장 골프연습장 당구장 체육시설업신고 사용권증명서로 시군구에 7일 만에 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 658 | sports-facility-closure-report | 체육시설업 휴업 폐업통보 서류 없이 세무서와 함께 즉시 신고하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 659 | sports-industry-internship | 스포츠산업 청년 인턴십 | youth | 1 | O | 1 | 7 | 2026-05-23 |
| 660 | spouse-birth-leave-pay | 배우자 출산휴가급여란? 대상과 20일 유급, 사용기한까지 | fund | 1 | - | 1 | 7 | 2026-05-23 |
| 661 | standard-land-price-objection | 표준지공시지가 이의신청 국토교통부에 30일 이내 사유서로 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 662 | student-edu-info | 학생 교육정보화 지원 신청자격, 졸업하면 어떻게 되나요? | fund | 1 | O | 1 | 8 | 2026-05-23 |
| 663 | sunshine-loan-bank | 햇살론뱅크 신청자격과 한도, 신용도 개선해야 받을 수 있나요? | loan | 1 | O | 1 | 7 | 2026-07-10 |
| 664 | surname-change-report | 성본 변경 신청, 친부 동의 없어도 되나 절차는 어떻게 되나 | issue | 1 | O | 0 | 7 | 2026-07-30 |
| 665 | sword-possession-permit | 도검 소지허가 신청 신체검사서와 출처증명서로 경찰서에 3천원 7일 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 666 | teen-independence-aid | 퇴소청소년 자립지원수당 신청방법, 3년 후에는 어떻게 되나요? | fund | 1 | O | 1 | 8 | 2026-05-23 |
| 667 | teen-parent-child-aid | 청소년부모 아동양육비 청소년한부모와 차이, 25세 넘으면? | fund | 1 | O | 1 | 9 | 2026-05-23 |
| 668 | teen-single-parent | 청소년한부모 아동양육·자립지원, 일반 한부모와 차이는? | fund | 1 | O | 1 | 10 | 2026-05-23 |
| 669 | term-vs-whole-life-insurance | 정기보험 종신보험, 사망보장 뭐가 다르고 뭘 골라야 하나요 | insurance | 1 | O | 1 | 7 | 2026-07-16 |
| 670 | thyroid-cancer-diagnosis-rider | 갑상선암은 왜 일반암보다 진단비가 적게 나오나요 | insurance | 1 | O | 1 | 7 | 2026-07-16 |
| 671 | tobacco-license-reissue | 담배소매인지정서 재발급 분실 훼손 시 즉시 무료로 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 672 | tobacco-retailer-designation | 담배소매인 지정신청 점포사용권 서류로 시군구에 7일 만에 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 673 | tobacco-wholesale-business-registration | 담배도매업 등록 담배공급계약서로 시군구에 수수료없이 5일 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 674 | tourism-business-registration | 여행업 관광숙박업 관광사업 등록 사업계획서로 시군구에 5일에서 14일 만에 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 675 | tourism-business-transfer-report | 관광사업 양수 지위승계 신고 시설인수명세서로 2만원 승계 1개월 이내 하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 676 | trademark-renewal-registration | 상표권 존속기간 갱신등록 신청 만료전1년이내 30만원 지식재산처 9일 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 677 | transfer-of-residence-report | 전입신고 14일 이내 인터넷으로 세대주확인까지 끝내는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 678 | tutoring-center-establishment-report | 교습소 신고 시설평면도와 자격증명서로 교육지원청 수수료없이 8일 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 679 | uiwang-small-business-improvement | 의왕시 소상공인 경영환경개선 300만원, 8월 7일까지 5일만 접수 | fund | 1 | O | 0 | 7 | 2026-08-02 |
| 680 | ulju-small-business-improvement | 울주군 소상공인 300만원, 8월 7일 마감 온라인 접수 | fund | 1 | O | 0 | 7 | 2026-08-02 |
| 681 | ultralight-aircraft-registration | 드론 초경량비행장치 소유증명과 측면사진으로 7일 만에 신고하는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 682 | unemployment-credit-recognition | 구직급여 수급자격 인정과 국민연금 실업크레딧 서류 없이 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 683 | uninsured-birth-grant | 고용보험 미적용자 출산급여 4유형과 신청방법, 서울 추가지원까지 | fund | 1 | O | 1 | 8 | 2026-05-23 |
| 684 | unit-taxation-branch-certificate | 사업자단위과세 종된사업장 증명 신분증만 있으면 무료로 즉시 발급받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 685 | unit-taxation-registration | 사업자단위과세 등록 종된사업장 사업자등록증으로 세무서에 3일 만에 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 686 | urban-green-manager | 도시녹지관리원 공공일자리 신청자격, 계절마다 업무가 달라지나요? | welfare | 1 | O | 1 | 7 | 2026-05-23 |
| 687 | used-appliance-pickup | 폐가전 무상 방문수거 서비스 | welfare | 1 | O | 1 | 7 | 2026-05-23 |
| 688 | vacant-house | 빈집 철거명령 받았을 때 60일 안에 대응하고 보상비 확인하는 법 | housing | 1 | O | 1 | 7 | 2026-07-29 |
| 689 | vaccination-certificate | 예방접종증명서 예방접종도우미에서 무료 즉시 발급받는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 690 | value-added-tax | 부가가치세 예정신고 확정신고 기간 확인하고 홈택스로 신고하는 법 | tax | 1 | - | 1 | 7 | 2026-07-20 |
| 691 | value-added-telecom-business-report | 부가통신사업신고 통신망구성도로 중앙전파관리소 수수료없이 즉시 3시간 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 692 | variable-life-insurance | 변액보험 뜻과 장단점, 해지할 때 손해부터 수익률까지 | insurance | 1 | O | 1 | 4 | 2026-09-07 |
| 693 | vehicle-cancellation-registration | 자동차 말소등록 신청서 수수료 1000원 즉시 처리로 등록 없애는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 694 | vehicle-change-registration | 자동차 변경등록 사용본거지변경증명서로 시군구에 1300원 즉시 3시간 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 695 | vehicle-designated-maintenance-business-designation | 자동차 지정정비사업자 지정신청 검사업무규정서로 시도에 2만원 20일 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 696 | vehicle-inspection-extension | 자동차 정기검사 연장 도난 사고 압류 시 무료로 즉시 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 697 | vehicle-interregional-change-registration | 자동차 시도간 변경등록 이사했을 때 1300원 즉시 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 698 | vehicle-license-plate-reissue | 자동차 번호판 분실 도난 파손 시 방문으로 즉시 재발급받는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 699 | vehicle-mortgage-registration | 자동차 저당권설정등록 car365에서 이전 말소 변경까지 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 700 | vehicle-new-registration | 자동차 신규등록 신차 수입차 2000원에 즉시 접수하는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 701 | vehicle-ownership-transfer | 자동차 명의이전 방법과 서류, 가족간 명의이전 비용까지 | issue | 1 | O | 1 | 7 | 2026-07-11 |
| 702 | vehicle-registration-card-reissue | 자동차등록증 재발급 인터넷 600원에 신청하고 원본은 등록사업소서 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 703 | vehicle-registration-certificate | 자동차등록원부 갑·을부 인터넷 무료 발급받고 압류·저당 확인하는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 704 | vehicle-standard-value | 차량기준가액 조회하고 내 차 보험가액 확인하는 법 | insurance | 1 | O | 1 | 7 | 2026-07-29 |
| 705 | vehicle-tax | 자동차세 연납 신청하고 최대 5% 할인받는 법 | tax | 1 | O | 1 | 8 | 2026-07-17 |
| 706 | vehicle-temporary-operation-permit | 자동차 임시운행허가 미등록차량 1800원에 방문 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 707 | vehicle-tuning-approval | 자동차 튜닝승인 설계도 갖춰 전자승인 35000원으로 10일 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 708 | venture-company-certificate | 벤처기업확인서 4가지 유형별 서류 갖춰 최대 45일 만에 발급받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 709 | veteran-compensation-confirmation | 보훈보상대상자 유족확인원 서류 없이 보훈청에서 즉시 발급받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 710 | veteran-compensation-registration | 보훈보상대상자 유족등록 사진과 제적등본으로 보훈청에 20일 만에 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 711 | veteran-disability-grade-review | 상이등급 재심 재판정 신체검사 진단서로 1일 만에 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 712 | veteran-employment-support | 국가유공자 및 유가족 취업 지원 | welfare | 1 | O | 1 | 7 | 2026-08-01 |
| 713 | veteran-family-confirmation | 국가유공자 유족확인서 무료 발급받고 보훈혜택 신청에 제출하는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 714 | veteran-family-registration | 국가유공자 유족등록 사진과 가족관계증명서로 보훈청에 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 715 | veteran-home-care | 보훈 재가복지서비스 재가보훈실무관이란, 노인장기요양과 차이 | service | 1 | O | 1 | 8 | 2026-05-23 |
| 716 | veteran-livelihood-support | 참전유공자 고엽제후유의증 생계지원금 소득재산신고서로 30일 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 717 | veteran-registration-card-issuance | 국가보훈등록증 발급 재발급 사진 1장으로 즉시 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 718 | veteran-status-change-report | 보훈대상자 신상변동신고 사망 국적상실 등 1일 만에 신고하는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 719 | veteran-support | 참전유공자 생계지원금 배우자 확대 이유, 다른 보훈수당 중복여부 | fund | 1 | O | 1 | 7 | 2026-05-23 |
| 720 | veterinary-clinic-establishment-report | 동물병원 개설신고 평면도 면허증 갖춰 시군구에 수수료 5천원 7일 만에 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 721 | visa-issuance-confirmation | 사증발급인정서 국내 초청자가 고용허가서로 10일 만에 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 722 | vocational-training-livelihood-loan | 직업훈련 생계비 대부 | loan | 1 | O | 1 | 7 | 2026-05-23 |
| 723 | vulnerable-housing-relocation-loan | 쪽방·고시원 살다 무이자 전세자금 받고 이주하는 법 | loan | 1 | O | 1 | 7 | 2026-07-17 |
| 724 | wage-theft-legal-support | 임금 체불 피해 근로자 무료 법률 지원 | welfare | 1 | O | 1 | 7 | 2026-05-23 |
| 725 | waste-treatment-business-permit | 폐기물처리업 허가 시설장비명세서 갖춰 시도에 신규4만원 변경1.5만원 10일 만에 신청하는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 726 | wastewater-consignment-treatment-permit | 폐수수탁처리업 재이용업 허가 사업계획서로 1만원 시군구에 15일 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 727 | water-tank-installation-report | 저수조 설치현황 신고 시공도면으로 시군 수수료없이 즉시 3시간 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 728 | waterbomb-busan | 2026 워터밤 부산 라인업 16팀, 티켓 어디서 예매하나 | life | 1 | O | 0 | 9 | 2026-07-31 |
| 729 | waterbomb-sokcho | 2026 워터밤 속초 라인업 21팀, 티켓 99000원 어디서 예매하나 | life | 1 | O | 1 | 7 | 2026-07-31 |
| 730 | whole-town-elem-care | 온동네 초등돌봄 우선순위와 신청방법, 다른 돌봄과 중복여부 | fund | 1 | O | 1 | 8 | 2026-05-23 |
| 731 | wide-area-job-search-allowance | 광역구직활동비 운임 숙박비 영수증으로 5일 만에 청구하는 법 | issue | 1 | O | 1 | 7 | 2026-07-17 |
| 732 | women-enterprise-certificate | 여성기업확인서 주주명부와 사업자등록증으로 7일 만에 발급받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 733 | women-head-startup-loan | 여성가장 창업자금 지원조건과 한부모 우선심사, 자금 사용처까지 | loan | 1 | O | 1 | 8 | 2026-05-23 |
| 734 | women-restart-center | 새일센터 직업교육과 인턴십·취업연계, 2026년 확대 내용까지 | service | 1 | O | 1 | 8 | 2026-05-23 |
| 735 | women-startup-center | 여성창업보육센터 다른 창업지원과 중복될까? 임대료·연장기간 | service | 1 | O | 1 | 8 | 2026-05-23 |
| 736 | womens-emergency-1366 | 여성긴급전화 1366 이용방법과 보호시설 입소, 외국어 상담까지 | welfare | 1 | O | 1 | 7 | 2026-05-23 |
| 737 | worker-dispatch-business-permit | 근로자파견사업 허가신청 사업계획서로 인터넷 신청 시 무료 20일 만에 받는 법 | issue | 1 | O | 1 | 7 | 2026-07-18 |
| 738 | youth-asset-formation | 청년 자산형성 상품 비교, 청년도약계좌·청년미래적금 뭐가 유리할까 | fund | 1 | O | 1 | 8 | 2026-05-23 |
| 739 | youth-challenge-support | 청년도전지원사업 참여수당 최대 350만원, 나는 신청 조건이 되나 | youth | 1 | O | 0 | 9 | 2026-08-04 |
| 740 | youth-culture-arts-pass | 청년문화예술패스 신청기간과 사용처, 문화누리카드와 뭐가 다른가 | youth | 1 | O | 1 | 7 | 2026-08-09 |
| 741 | youth-designer-internship | 청년 디자이너 공공기관 인턴십 | youth | 1 | O | 1 | 7 | 2026-05-23 |
| 742 | youth-driver-license-subsidy | 청년 운전면허 지원금 우리 지역 신청방법과 대상 조회까지, 전국 다 되는 줄 알면 손해 | youth | 1 | O | 1 | 7 | 2026-07-27 |
| 743 | youth-job | 청년 일자리 사업 종류와 중복 가능여부, 청년 연령기준까지 | fund | 1 | O | 1 | 8 | 2026-05-23 |
| 744 | youth-leap-job | 청년일자리도약장려금 비수도권 우대, 중도퇴사하면 어떻게 되나요? | fund | 1 | O | 1 | 8 | 2026-05-23 |
| 745 | youth-safe-housing-2nd | 2026 2차 청년안심주택 신청방법ㅣ신청기간 단 3일 | housing | 1 | O | 0 | 8 | 2026-08-04 |
| 746 | youth-startup-school | 청년창업사관학교 TIPS랑 뭐가 다른가요? 본인부담 얼마나 되나 | fund | 1 | O | 0 | 8 | 2026-05-23 |
| 747 | youth-welfare | 청년 마음건강바우처와 자립수당, 의료비 지원까지 한번에 찾기 | fund | 1 | O | 1 | 8 | 2026-05-23 |

## 글별 상세 (1474편 · 허브 묶음 순)

| 경로 | 지금 타이틀 | 카드 | 서론 | 수정일 | 최근 git |
|---|---|---|---|---|---|
| youth-future-savings | 청년미래적금 정부매칭과 가입조건, 3년 만기 수령액까지 | 7 | O | 2026-06-20 | - |
| youth-future-savings/type-correction | 청년미래적금 우대형 정정 문자, 해지한 도약계좌 원상복구 어디서 신청하나 | 7 | O | 2026-08-05 | - |
| youth-future-savings/vs-도약계좌 | 청년미래적금 vs 청년도약계좌, 뭐가 다를까? | 7 | 없음 | 2026-05-23 | - |
| youth-future-savings/갈아타기 | 청년도약계좌에서 청년미래적금 갈아타면 기여금 어떻게 되나 | 7 | 없음 | 2026-08-01 | - |
| youth-future-savings/군인 | 청년미래적금 군인 가입 조건과 신청 및 장병내일준비적금 중복 까지 | 7 | 없음 | 2026-06-20 | - |
| youth-future-savings/기여금-계산 | 청년미래적금 정부기여금, 6%·12% 내 소득이면 얼마? | 7 | 없음 | 2026-05-23 | - |
| youth-future-savings/대학생 | 청년미래적금 대학생 재학생도 가입할 수 있나요 | 7 | 없음 | 2026-06-20 | - |
| youth-future-savings/소득없으면 | 청년미래적금, 소득 없으면 가입 못 한다 | 7 | 없음 | 2026-05-23 | - |
| youth-future-savings/실수령액 | 청년미래적금 3년 만기 실수령액 얼마나 되나요 | 7 | 없음 | 2026-06-20 | - |
| youth-future-savings/심사일정 | 청년미래적금 신청기간 놓쳤는데 지금이라도 되나, 계좌개설은 8월 7일까지 | 7 | 없음 | 2026-07-28 | - |
| youth-future-savings/우대형 | 청년미래적금 우대형 12%, 공무원·중소기업 누가 받나? | 7 | 없음 | 2026-06-26 | - |
| youth-future-savings/은행별비교 | 청년미래적금 은행별 금리 비교, 어디가 제일 유리할까? | 7 | 없음 | 2026-08-01 | - |
| youth-future-savings/이자소득세 | 청년미래적금 이자소득세 15.4% 면제 조건 확인하기 | 7 | 없음 | 2026-08-01 | - |
| youth-future-savings/장병적금-은행별비교 | 장병내일준비적금 은행별 금리 비교, 어디가 제일 유리할까? | 7 | 없음 | 2026-07-21 | - |
| youth-future-savings/중도해지 | 청년미래적금 중도해지하면 기여금 전액 환수 | 7 | 없음 | 2026-05-23 | - |
| youth-future-savings/출시일정 | 청년미래적금 6월 22일 출시 / 신청기간 6.22~7.3·최대 7~8% 금리·취급기관 14곳 | 7 | 없음 | 2026-06-20 | - |
| youth-future-savings/프리랜서 | 청년미래적금 프리랜서·소상공인, 어느 쪽으로 신청하나 | 7 | 없음 | 2026-07-31 | - |
| caregiver-insurance | 간병인보험 가입조건과 청구 방법, 하루 일당은 얼마까지? | 7 | O | 2026-08-23 | - |
| caregiver-insurance/caregiver-insurance-age-limit | 간병인보험 가입 나이, 상한 모르면 헛걸음 | 5 | 없음 | 2026-08-24 | - |
| caregiver-insurance/caregiver-insurance-basics | 간병인보험과 간병보험 차이, 실손엔 왜 간병비가 없나? | 5 | 없음 | 2026-08-24 | - |
| caregiver-insurance/caregiver-insurance-claim | 간병인보험 청구 방법, 서류 넣고 며칠 만에 들어오나? | 5 | 없음 | 2026-08-24 | - |
| caregiver-insurance/caregiver-insurance-coverage | 간병인보험 입원일당 한도, 요양병원이면 왜 반토막인가? | 5 | 없음 | 2026-08-24 | - |
| caregiver-insurance/caregiver-insurance-dementia | 치매간병비 보험 청구 방법, 간병인 일당과 진단비 중 뭐가 깎이나 | 5 | 없음 | 2026-08-24 | - |
| caregiver-insurance/caregiver-insurance-documents | 간병인보험 청구 서류 뭐뭐 내나? 간이영수증은 왜 안 되나 | 4 | 없음 | 2026-08-24 | - |
| caregiver-insurance/caregiver-insurance-eligibility | 간병인보험 가입조건, 유병자도 되나? 간편심사와 일반심사 차이 | 5 | 없음 | 2026-08-24 | - |
| caregiver-insurance/caregiver-insurance-family | 간병인보험 가족간병 조건, 가족이 하면 못 받나? | 3 | 없음 | 2026-08-24 | - |
| caregiver-insurance/caregiver-insurance-hospital-type | 간병인보험 한방병원 입원도 청구되나? 181일째부터 제외되는 기준 | 5 | 없음 | 2026-08-24 | - |
| caregiver-insurance/caregiver-insurance-premium | 간병인보험료 한 달에 얼마일까? 2천원대와 5만원대가 갈리는 이유 | 6 | 없음 | 2026-08-24 | - |
| caregiver-insurance/caregiver-insurance-surrender | 간병인보험 해지환급금 얼마나 돌려받나? 미지급형이면 0원 | 3 | 없음 | 2026-08-24 | - |
| caregiver-insurance/caregiver-insurance-terms | 간병인보험 면책기간, 1년 안에 입원하면 절반만 나오나? | 5 | 없음 | 2026-08-24 | - |
| caregiver-insurance/dementia-care-benefit-denied | 치매 보험금 0원 vs 3천만원, 청구 기준 모르면 손해 | 5 | 없음 | 2026-08-24 | - |
| caregiver-insurance/hospital-caregiving-standard | 요양병원 간병비 지원 대상 신청, 전국 19개소만 되나? | 5 | 없음 | 2026-08-24 | - |
| earned-income-tax-credit | 근로장려금 반기신청과 재산기준, 자녀장려금은 따로 신청하나요? | 7 | 없음 | 2026-05-23 | - |
| earned-income-tax-credit/가구구분 | 근로장려금 단독 홑벌이 맞벌이 가구 구분, 1인 가구 기준 | 7 | 없음 | 2026-06-27 | - |
| earned-income-tax-credit/모의계산 | 근로장려금 나는 얼마 받나? 소득별 지급액 계산법 | 7 | 없음 | 2026-06-26 | - |
| earned-income-tax-credit/반기신청 | 근로장려금 반기신청, 정기와 차이·9월 3월 신청 12월 6월 지급 | 7 | 없음 | 2026-06-27 | - |
| earned-income-tax-credit/신청기간 | 근로장려금 신청 기간 2026 — 정기·반기·기한 후 신청 마감일 | 7 | 없음 | 2026-05-23 | - |
| earned-income-tax-credit/신청방법 | 근로장려금 신청 방법, 홈택스·손택스·ARS 1544-9944 | 7 | 없음 | 2026-06-27 | - |
| earned-income-tax-credit/신청자격 | 근로장려금 신청 자격, 소득·재산 기준과 대상자 조건 | 7 | 없음 | 2026-06-27 | - |
| earned-income-tax-credit/이의신청 | 근로장려금 이의신청, 탈락·금액 불복 90일 이내 | 7 | 없음 | 2026-06-27 | - |
| earned-income-tax-credit/자녀장려금 | 자녀장려금 소득 7천만원까지, 근로장려금 못 받아도 받나? | 7 | 없음 | 2026-06-26 | - |
| earned-income-tax-credit/자동신청 | 근로장려금 자동신청, 한 번 동의하면 2년 자동 입금? | 7 | 없음 | 2026-06-26 | - |
| earned-income-tax-credit/조회방법 | 근로장려금 조회 방법 2026 — 신청 결과·지급 현황 확인 | 7 | 없음 | 2026-05-23 | - |
| earned-income-tax-credit/지급일 | 근로장려금 지급일 2026 — 정기·반기 지급 시기와 지연 사유 | 7 | 없음 | 2026-05-23 | - |
| earned-income-tax-credit/지급제외 | 근로장려금 왜 안 들어오지? 지급제외·감액 사유 정리 | 7 | 없음 | 2026-06-26 | - |
| earned-income-tax-credit/환수추징 | 근로장려금 환수·추징 — 잘못 지급된 경우 반환 기준과 방법 | 7 | 없음 | 2026-05-23 | - |
| national-pension-premium | 국민연금 보험료 기준소득월액과 상한액·하한액, 가입자 종류까지 | 8 | 없음 | 2026-06-27 | - |
| national-pension-premium/가입기간추납 | 국민연금 가입기간 10년, 추납 임의가입으로 채우기 | 7 | 없음 | 2026-06-28 | - |
| national-pension-premium/가입자종류 | 국민연금 가입자 종류, 사업장 지역 임의 임의계속 차이 | 7 | 없음 | 2026-06-27 | - |
| national-pension-premium/개인연금비교 | 국민연금과 개인연금의 차이점은 무엇인가요 | 7 | 없음 | 2026-07-08 | - |
| national-pension-premium/기준소득월액 | 국민연금 기준소득월액이란, 7월 정기결정으로 보험료 변경 | 7 | 없음 | 2026-06-27 | - |
| national-pension-premium/납부 | 국민연금 보험료 납부와 미납, 자동이체 납부예외 | 7 | 없음 | 2026-06-27 | - |
| national-pension-premium/보험료계산 | 국민연금 보험료 계산, 기준소득월액 9% 최대 월 59만원 | 7 | 없음 | 2026-06-27 | - |
| national-pension-premium/분할연금 | 국민연금 분할연금, 이혼 시 혼인기간 연금 1/2 분할 | 7 | 없음 | 2026-06-28 | - |
| national-pension-premium/상한하한액 | 국민연금 상한액 하한액, 2026년 659만원 41만원으로 인상 | 7 | 없음 | 2026-06-27 | - |
| national-pension-premium/수령나이 | 국민연금 수령 나이, 출생연도별 61~65세 | 7 | 없음 | 2026-06-28 | - |
| national-pension-premium/수령액 | 국민연금 예상수령액, 조회부터 연기·추납·크레딧으로 더 받는법 | 7 | 없음 | 2026-06-28 | - |
| national-pension-premium/연기연금 | 연기연금, 최대 5년 늦게 1년당 7.2% 가산 | 7 | 없음 | 2026-06-28 | - |
| national-pension-premium/유족연금 | 국민연금 유족연금, 가입기간별 40~60% 배우자 우선 | 7 | 없음 | 2026-06-28 | - |
| national-pension-premium/조기노령연금 | 조기노령연금, 최대 5년 일찍 1년당 6% 감액 | 7 | 없음 | 2026-06-28 | - |
| national-scholar | 국가장학금 소득분위 산정과 신청시기, 성적 낮으면 못 받나요? | 8 | 없음 | 2026-05-23 | - |
| national-scholar/2차구제신청 | 국가장학금 2차 구제신청 재학 중 2회, 내 횟수 얼마나 남았나 | 7 | 없음 | 2026-07-31 | - |
| national-scholar/2차신입생 | 국가장학금 2차 신입생 성적 없어도 되나, 첫 학기 기준 확인 | 7 | 없음 | 2026-07-31 | - |
| national-scholar/bracket-update | 국가장학금 소득분위 재산정, 학자금 지원구간 최신화로 신청하기 | 7 | O | 2026-08-06 | - |
| national-scholar/가구원동의 | 국가장학금 가구원 동의 안 하면, 소득분위 산정 안 된다 | 7 | 없음 | 2026-06-27 | - |
| national-scholar/국가장학금2차신청기간2026 | 2026년 국가장학금 2차 신청 기간과 방법 | 7 | 없음 | 2026-05-23 | - |
| national-scholar/국가장학금F학점성적기준미달 | 국가장학금 F학점·성적 기준 미달 시 어떻게 되나요? | 7 | 없음 | 2026-05-23 | - |
| national-scholar/국가장학금소득분위지급금액 | 국가장학금 소득분위별 지급 금액 2026년 기준 | 7 | 없음 | 2026-05-23 | - |
| national-scholar/국가장학금지급일통장입금시기 | 국가장학금 지급일과 통장 입금 시기는 언제인가요? | 7 | 없음 | 2026-05-23 | - |
| national-scholar/다자녀 | 국가장학금 다자녀 가구 지원, 셋째 이상 등록금 전액 | 7 | 없음 | 2026-06-27 | - |
| national-scholar/신청방법 | 국가장학금 신청 방법과 서류, 신입생·재학생 첫 신청 | 7 | 없음 | 2026-06-27 | - |
| national-scholar/이의신청 | 국가장학금 소득구간 이의신청, 통지받고 10영업일이 전부다 | 7 | O | 2026-07-31 | - |
| national-scholar/휴학복학 | 국가장학금 휴학하면 어떻게 되나, 복학·군휴학 신청 | 7 | 없음 | 2026-06-27 | - |
| small-biz-policy-fund/business-plan-form | 소상공인 정책자금 사업계획서, 양식 어디서 받아 신청하나 | 7 | 없음 | 2026-07-31 | - |
| small-biz-policy-fund/direct-vs-agency-loan | 소상공인 정책자금 직접대출과 대리대출, 어디로 신청해야 하나 | 7 | 없음 | 2026-07-31 | - |
| small-biz-policy-fund/eligibility-certificate | 정책자금 지원대상 확인서 받았는데 왜 대출이 안 나오나 | 7 | 없음 | 2026-07-31 | - |
| small-biz-policy-fund/queue-wait | 소상공인 정책자금 4차 접수 대기 걸리면 얼마나 기다리나 | 7 | O | 2026-08-03 | - |
| small-biz-policy-fund/rejected-retry | 소상공인 정책자금 부결되면 6개월 재신청 못 하나요? | 7 | O | 2026-08-03 | - |
| small-biz-policy-fund/target-check | 소상공인 정책자금 4차 대상자 조회 방법, 신청 전 1분이면 끝 | 7 | O | 2026-08-03 | - |
| small-biz-policy-fund/temporary-hardship-fund | 일시적경영애로자금 7월 13일 접수, 조건과 한도 금리 총정리 | 7 | 없음 | 2026-07-10 | - |
| small-biz-policy-fund/대상자격 | 소상공인 정책자금 대상, 상시근로자 수 기준 | 7 | 없음 | 2026-06-28 | - |
| small-biz-policy-fund/신청방법 | 소상공인 정책자금 신청 방법, 직접대출 대리대출 | 7 | 없음 | 2026-06-28 | - |
| small-biz-policy-fund/일반경영안정자금 | 일반경영안정자금 한도 7천만, 금리 기준+0.6% | 7 | 없음 | 2026-06-28 | - |
| small-biz-policy-fund/자금종류 | 소상공인 정책자금 종류, 경영안정 저신용 대환 재도전 | 7 | 없음 | 2026-06-28 | - |
| small-biz-policy-fund/지역신용보증재단 | 지역신용보증재단 보증, 담보 없이 지자체 육성자금 | 7 | 없음 | 2026-06-28 | - |
| climate-card-refund | 기후동행카드 환급 받는 방법…티머니 카드&페이 누리집 가입이 먼저라는데. | 8 | 없음 | 2026-07-22 | - |
| climate-card-refund/대상 | 기후동행카드 환급 대상, 서울·경기 5개시(김포·과천·구리·성남·하남) | 7 | 없음 | 2026-07-01 | - |
| climate-card-refund/모두의카드 | 기후동행카드 7월부터 모두의카드로, 플러스 전환·추가 환급 | 7 | 없음 | 2026-07-01 | - |
| climate-card-refund/받는방법 | 기후동행카드 환급 받는 방법, 티머니 카드&페이로 3만원 신청 | 7 | 없음 | 2026-07-01 | - |
| climate-card-refund/신청기간 | 기후동행카드 환급 언제 들어오나, 신청기간 6.10~8.31 환급일 | 7 | O | 2026-07-22 | - |
| climate-card-refund/신청오류 | 기후동행카드 환급 신청 오류, 티머니 미가입·등록 안 될 때 | 7 | 없음 | 2026-07-01 | - |
| climate-card-refund/조건 | 기후동행카드 환급 조건, 충전하고 만료까지 써야 3만원 | 7 | 없음 | 2026-07-01 | - |
| climate-card-refund/청년권종 | 기후동행카드 청년·청소년·저소득 환급, 권종 상관없이 월 3만원 | 7 | 없음 | 2026-07-01 | - |
| climate-card-refund/페이백차이 | 기후동행카드 페이백·환급·환불 뭐가 다른가, 신청 전 확인하기 | 7 | 없음 | 2026-07-01 | - |
| climate-card-refund/환급금 | 기후동행카드 환급금 얼마, 월 3만원 최대 9만원 페이백 | 7 | 없음 | 2026-07-01 | - |
| climate-card-refund/후불카드 | 후불 기후동행카드도 3만원 환급되나, 선불·후불·모바일 모두 | 7 | 없음 | 2026-07-01 | - |
| industrial-accident-insurance | 산재보험 업무상 재해 인정범위와 휴업급여, 후유장해 보상까지 | 8 | 없음 | 2026-06-27 | - |
| industrial-accident-insurance/accident-recognition-standard | 출장·회식 중 사고 났을 때 산재 인정받으려면 뭘 준비해야 하나요 | 7 | 없음 | 2026-07-17 | - |
| industrial-accident-insurance/civil-damages-claim-relation | 산재보험금 받고 손해배상 청구서 따로 접수하는 법 | 7 | 없음 | 2026-07-17 | - |
| industrial-accident-insurance/health-impaired-child-benefit | 임신 중 업무상 재해로 아이가 아프게 태어났다면 산재 신청되나요 | 7 | 없음 | 2026-07-17 | - |
| industrial-accident-insurance/insurance-relation-report | 사업 시작하면 14일 이내 산재보험 성립신고서 접수하는 법 | 7 | 없음 | 2026-07-17 | - |
| industrial-accident-insurance/labor-provider-special-provision | 배달라이더·대리기사도 산재 신청되나요, 노무제공자 특례 확인하는 법 | 7 | 없음 | 2026-07-17 | - |
| industrial-accident-insurance/max-min-compensation-standard-check | 내 평균임금이 산재 최고·최저 보상기준에 걸리는지 확인하는 법 | 7 | 없음 | 2026-07-17 | - |
| industrial-accident-insurance/occupational-disease-recognition | 과로·직업병으로 산재 신청할 때 업무상질병판정위원회 심의 절차 | 7 | 없음 | 2026-07-17 | - |
| industrial-accident-insurance/pneumoconiosis-special-provision | 진폐 보험급여 신청서, 일반 산재와 접수처가 다른가요 | 7 | 없음 | 2026-07-17 | - |
| industrial-accident-insurance/vocational-rehabilitation-benefit | 직업재활급여 대상 조회하고 훈련 신청하는 법 | 7 | 없음 | 2026-07-17 | - |
| industrial-accident-insurance/업무상재해 | 산재 업무상 재해 인정 범위, 사고 질병 출퇴근 | 7 | 없음 | 2026-06-27 | - |
| happiness-card-bebang | 베팡 신청방법과 국민·롯데·삼성카드 비교, 어디가 유리할까? | 8 | 없음 | 2026-07-01 | - |
| happiness-card-bebang/기저귀바우처 | 국민행복카드 기저귀·조제분유 바우처 월 9만·11만 | 7 | 없음 | 2026-07-01 | - |
| happiness-card-bebang/몰비교 | 국민행복카드 베팡·베베폼·미즈톡톡 비교, 뭐가 다른가 | 7 | 없음 | 2026-07-01 | - |
| happiness-card-bebang/바우처등록 | 국민행복카드 바우처 등록·사용법(임신·기저귀) | 7 | 없음 | 2026-07-01 | - |
| happiness-card-bebang/바우처종류 | 국민행복카드로 쓰는 바우처 23종, 첫만남 보육료 아이돌봄 | 7 | 없음 | 2026-07-01 | - |
| happiness-card-bebang/신청방법 | 국민행복카드 베팡 신청방법과 발급 절차 | 7 | 없음 | 2026-07-01 | - |
| happiness-card-bebang/임신출산바우처 | 임산부 국민행복카드, 임신·출산 바우처 100만원 | 7 | 없음 | 2026-07-01 | - |
| happiness-card-bebang/추천인사은품 | 베팡 추천인·사은품, 국민행복카드 발급 혜택 주의 | 7 | 없음 | 2026-07-01 | - |
| happiness-card-bebang/카드사혜택 | 국민행복카드 삼성·롯데·KB 카드사별 혜택 비교 | 7 | 없음 | 2026-07-01 | - |
| happiness-card-bebang/혜택총정리 | 국민행복카드 베팡 혜택 총정리, 사은품 함정 피하기 | 7 | 없음 | 2026-07-01 | - |
| k-pass | K-패스 모두의카드 정률제 정액제 차이와 가입방법, 반값이벤트까지 | 7 | 없음 | 2026-05-23 | - |
| k-pass/2026환급률일반청년저소득 | 2026 K-패스 환급률 비교, 일반 20%, 청년 30%, 저소득 53.3% | 7 | 없음 | 2026-05-23 | - |
| k-pass/card-change | K-패스 카드 바꾸면 환급금 어디로 가나, 카드변경 등록하기 | 7 | 없음 | 2026-08-01 | - |
| k-pass/card-register | K-패스 카드 발급하고 등록하기, 회원가입 안 하면 0원 | 7 | 없음 | 2026-08-01 | - |
| k-pass/off-peak-bonus | K-패스 시차출퇴근 환급률 50%, 몇 시에 타야 받나 계산하기 | 7 | 없음 | 2026-08-01 | - |
| k-pass/refund-payment-date | K-패스 환급일 언제 들어오나, 카드사별 지급일 조회하기 | 7 | 없음 | 2026-08-01 | - |
| k-pass/vs-climate-card | K-패스와 기후동행카드 뭐가 유리한가, 내 교통비로 비교하기 | 7 | 없음 | 2026-08-01 | - |
| k-pass/모두의카드환급형비교 | K-패스와 모두의 카드 어떻게 다른가, 월 15회 환급형과 무제한 정액권 비교 | 7 | 없음 | 2026-05-23 | - |
| k-pass/신청등록카드사비교 | K-패스 교통카드 신청 방법, 등록 절차, 카드사별 혜택 비교 정리 | 7 | 없음 | 2026-05-23 | - |
| k-pass/청년환급률30%신청방법 | 대중교통 매달 15회 이상 탄다면 K-패스 청년 환급률 30% 받는 방법 | 7 | 없음 | 2026-05-23 | - |
| family-care-leave | 가족돌봄휴가 신청조건과 돌봄대상, 가족돌봄휴직과 차이까지 | 8 | O | 2026-05-23 | - |
| family-care-leave/가족돌봄휴가급여없음무급재난특례지원 | 가족돌봄휴가 급여 없음 · 무급 원칙과 재난 특례 지원 총정리 | 7 | 없음 | 2026-05-23 | - |
| family-care-leave/가족돌봄휴가시간단위분할사용방법 | 가족돌봄휴가 시간 단위 분할 사용 방법 완전 정리 | 7 | 없음 | 2026-05-23 | - |
| family-care-leave/가족돌봄휴가신청서류증빙서류회사승인 | 가족돌봄휴가 신청 서류·증빙 서류와 회사 승인 절차 | 7 | 없음 | 2026-05-23 | - |
| family-care-leave/가족돌봄휴가연장조건20일초과가능한가 | 가족돌봄휴가 연장 조건: 20일 초과 가능한가요? | 7 | 없음 | 2026-05-23 | - |
| family-care-leave/가족돌봄휴직과휴가차이장기단기 | 가족돌봄휴가 가족돌봄휴직 차이 확인하고 골라 신청하는 법 | 7 | 없음 | 2026-05-23 | - |
| family-care-leave/돌봄가족범위부모자녀배우자 | 가족돌봄휴가 돌봄 가족 범위: 부모·자녀·배우자 기준 | 7 | 없음 | 2026-05-23 | - |
| family-care-leave/사업주거부하면어떻게하나 | 가족돌봄휴가 사업주 거부 시 대처 방법 완전 정리 | 7 | 없음 | 2026-05-23 | - |
| family-care-leave/연10일무급유급차이신청방법 | 가족돌봄휴가 연 10일: 무급·유급 차이와 신청 방법 | 7 | 없음 | 2026-05-23 | - |
| samsung-onnuri-refund | 삼성전자 온누리 환급 방법, 신청 언제까지 해야 할까? | 8 | 없음 | 2026-07-01 | - |
| samsung-onnuri-refund/K히어로 | 소방·군인·경찰 K-Hero, 온누리 20%+패밀리몰 10% | 7 | 없음 | 2026-07-01 | - |
| samsung-onnuri-refund/디지털온누리사용 | 디지털 온누리상품권 사용처·앱, 전통시장에서 쓰기 | 7 | 없음 | 2026-07-01 | - |
| samsung-onnuri-refund/주의사항 | 삼성전자 온누리 환급 주의사항, 취소 회입·명의 일치 | 7 | 없음 | 2026-07-01 | - |
| samsung-onnuri-refund/참여처 | 삼성전자 온누리 환급 참여처, 쿠팡·이마트·하이마트 | 7 | 없음 | 2026-07-01 | - |
| samsung-onnuri-refund/한도대상 | 삼성전자 온누리 환급 한도·대상 품목, 품목당 2대 | 7 | 없음 | 2026-07-01 | - |
| samsung-onnuri-refund/환급기간 | 삼성전자 온누리 환급 언제까지, 구매 7.5·신청 9.30 | 7 | 없음 | 2026-07-01 | - |
| samsung-onnuri-refund/환급방법 | 삼성전자 온누리 환급 방법·신청, 삼성닷컴 순서 | 7 | 없음 | 2026-07-01 | - |
| samsung-onnuri-refund/환급액 | 삼성전자 온누리 환급액, 구매 20%·S26+ 25% | 7 | 없음 | 2026-07-01 | - |
| youth-tomorrow-savings | 청년내일저축계좌 신청자격과 만기유지 조건, 중도해지하면 | 7 | 없음 | 2026-05-23 | - |
| youth-tomorrow-savings/가입자격 | 청년내일저축계좌 가입 자격, 만 19~34세 소득 얼마면 되나 | 7 | 없음 | 2026-06-26 | - |
| youth-tomorrow-savings/군인 | 청년내일저축계좌 군인 현역 복무 중에도 가입할 수 있나요 | 7 | 없음 | 2026-05-23 | - |
| youth-tomorrow-savings/만기수령액 | 청년내일저축계좌 만기 얼마 받나, 월 10만원에 정부 30만원 | 7 | 없음 | 2026-06-26 | - |
| youth-tomorrow-savings/비교 | 청년내일저축계좌 vs 청년도약계좌·미래적금, 뭐가 다른가 | 7 | 없음 | 2026-06-26 | - |
| youth-tomorrow-savings/신청기간 | 2026년 청년내일저축계좌 신청기간 / 복지로 온라인 신청부터 서류·결과 통보까지 | 7 | 없음 | 2026-05-23 | - |
| youth-tomorrow-savings/신청방법 | 청년내일저축계좌 신청 방법과 서류, 복지로·행정복지센터 | 7 | 없음 | 2026-06-26 | - |
| youth-tomorrow-savings/유지조건 | 청년내일저축계좌 유지 조건, 3년 근로·교육 안 지키면 환수 | 7 | 없음 | 2026-06-26 | - |
| youth-tomorrow-savings/중도해지 | 청년내일저축계좌 중도해지하면 정부지원금 얼마나 환수되나 / 만기 수령 조건 3가지 | 7 | 없음 | 2026-05-23 | - |
| job-seeker-benefit | 구직급여(실업급여) 수급자격과 신청방법, 비자발적 이직 인정기준 | 7 | 없음 | - | - |
| job-seeker-benefit/freelance-income-report | 실업급여 받으면서 프리랜서 3.3 일하면 신고해야 하나 | 7 | O | 2026-08-06 | - |
| job-seeker-benefit/objection-review-request | 실업급여 불승인 결정에 심사청구서 접수하는 법 | 7 | 없음 | 2026-07-17 | - |
| job-seeker-benefit/unpaid-benefit-death-claim | 실업급여 받던 가족이 사망했다면 미지급 실업급여 청구하는 법 | 7 | 없음 | 2026-07-17 | - |
| job-seeker-benefit/국민취업지원중복 | 국민취업지원제도랑 실업급여 같이 받나? 중복·차이 | 7 | 없음 | 2026-07-02 | - |
| job-seeker-benefit/동거친족 | 동거친족 사업장에서 일해도 실업급여 받나? | 7 | 없음 | 2026-07-02 | - |
| job-seeker-benefit/수급유예 | 실업급여 수급기간 연기, 당장 취업 어려울 때 언제까지 신청하나 | 7 | O | 2026-08-01 | - |
| job-seeker-benefit/수령액계산 | 실업급여 얼마 받나, 평균임금 60% 월급별 1일 수령액 | 7 | 없음 | 2026-06-26 | - |
| small-biz-closed-debt | 폐업 소상공인 채무 조정 및 재기 지원 (희망리턴패키지) | 7 | 없음 | 2026-06-28 | - |
| small-biz-closed-debt/사업정리컨설팅 | 희망리턴 사업정리컨설팅·법률자문, 폐업 절차 무료 지원 | 7 | 없음 | 2026-06-28 | - |
| small-biz-closed-debt/재기사업화자금 | 희망리턴 재기사업화 자금, 최대 2,000만원 경영개선·재창업 | 7 | 없음 | 2026-06-28 | - |
| small-biz-closed-debt/전직장려수당 | 희망리턴 전직장려수당, 폐업 후 취업하면 최대 100만원 | 7 | 없음 | 2026-06-28 | - |
| small-biz-closed-debt/폐업소상공인점포철거비지원금액 | 폐업 소상공인 점포 철거비 지원금액 — 600만원 조건과 신청 방법 | 7 | 없음 | 2026-05-23 | - |
| small-biz-closed-debt/폐업소상공인지원새출발기금차이 | 폐업 소상공인 지원 vs 새출발기금 — 무엇이 다르고 어떻게 선택하나 | 7 | 없음 | 2026-05-23 | - |
| small-biz-closed-debt/폐업소상공인채무조정신청방법절차 | 폐업 소상공인 채무 조정 신청 방법과 절차 완전 정리 2026 | 7 | 없음 | 2026-05-23 | - |
| small-biz-closed-debt/희망리턴패키지폐업재기지원총정리 | 희망리턴패키지 폐업 재기 지원 총정리 2026 — 교육·철거비·컨설팅 | 7 | 없음 | 2026-05-23 | - |
| child-support-enforcement | 양육비 미지급 신고부터 이행관리원 신청까지, 안 줄 때 받아내는 법 | 7 | 없음 | 2026-07-29 | - |
| child-support-enforcement/calculation | 양육비 계산기로 산정기준표 확인하고 금액 청구하는 법 | 7 | 없음 | 2026-07-29 | - |
| child-support-enforcement/compulsory-execution | 양육비 강제 집행 방법, 이행관리원에 채권추심 의뢰하기 | 7 | 없음 | 2026-07-29 | - |
| child-support-enforcement/enforcement-order | 양육비 이행 명령 신청하고 이행관리원 지원까지 한 번에 받는 법 | 7 | 없음 | 2026-07-29 | - |
| child-support-enforcement/lawsuit-support | 양육비 소송 비용 없이 무료 법률지원 받고 청구하는 법 | 7 | 없음 | 2026-07-29 | - |
| child-support-enforcement/required-documents | 양육비 신청 서류 갖춰 이행관리원에 접수하는 법 | 7 | 없음 | 2026-07-29 | - |
| child-support-enforcement/unpaid-penalty | 양육비 미지급 처벌 3가지, 과태료 1천만원·감치 30일·명단공개 신청하는 법 | 7 | 없음 | 2026-07-29 | - |
| maternity-leave-pay | 출산전후휴가급여 중소기업·대기업 차이와 90일 분할, 육아휴직 연계 | 8 | 없음 | 2026-05-23 | - |
| maternity-leave-pay/2026우선지원대상기업기준 | 2026 출산전후휴가급여 우선지원대상기업 월 최대 220만원 지급 기준 | 7 | 없음 | 2026-05-23 | - |
| maternity-leave-pay/employer-confirmation | 출산전후휴가 확인서 회사에 요청하기, 없으면 신청이 안 된다 | 7 | 없음 | 2026-08-01 | - |
| maternity-leave-pay/leave-period | 출산전후휴가 기간 90일·다태아 120일, 미숙아 100일 확인하기 | 7 | 없음 | 2026-08-01 | - |
| maternity-leave-pay/신청방법비과세계산 | 출산휴가 급여 신청방법과 필요 서류, 고용24에서 하는 순서 | 7 | O | 2026-08-01 | - |
| maternity-leave-pay/우선지원대규모기업비교 | 우선지원대상기업과 대규모기업, 출산전후휴가급여 지급 범위 어떻게 다른가 | 7 | 없음 | 2026-05-23 | - |
| maternity-leave-pay/회사정부급여구간분리 | 출산휴가 90일 중 회사가 주는 구간과 정부가 지원하는 구간 어떻게 나뉘나 | 7 | 없음 | 2026-05-23 | - |
| national-pension-reduction | 노령연금 감액 기준 519만원으로 상향, 2025년분 자동환급까지 | 8 | 없음 | 2026-06-20 | - |
| national-pension-reduction/감액계산 | 노령연금 감액 얼마나 되나 / 초과소득 구간별 계산과 50% 한도 | 7 | 없음 | 2026-06-20 | - |
| national-pension-reduction/감액기간 | 노령연금 감액 기간, 수급개시 후 5년만 적용 | 7 | 없음 | 2026-06-28 | - |
| national-pension-reduction/감액기준 | 국민연금 받으면서 일하면 월 얼마부터 깎이나 / 2026년 519만원 기준 | 7 | 없음 | 2026-06-20 | - |
| national-pension-reduction/감액회피 | 노령연금 감액 피하는 법, 연기연금·소득조절 | 7 | 없음 | 2026-06-28 | - |
| national-pension-reduction/부양가족연금 | 노령연금 감액 빠지면 부양가족연금도 같이 받나 / 배우자·자녀·부모 부가급여 | 7 | 없음 | 2026-06-20 | - |
| national-pension-reduction/환급 | 이미 깎인 노령연금 돌려받나 / 2025년분 자동 환급 신청 안 해도 되나 | 7 | 없음 | 2026-06-20 | - |
| property-tax | 재산세 과세기준일과 1세대1주택 특례, 조회납부 방법까지 | 8 | 없음 | 2026-06-27 | - |
| property-tax/감면 | 재산세 감면 대상과 신청, 임대주택·천재지변 | 7 | 없음 | 2026-06-27 | - |
| property-tax/납부기간 | 재산세 납부기간, 7월·9월 주택 1기 2기 건축물 토지 | 7 | 없음 | 2026-08-01 | - |
| property-tax/분납 | 재산세 분납 신청, 250만원 넘으면 2개월 나눠 내기 | 7 | 없음 | 2026-06-27 | - |
| property-tax/조회납부 | 재산세 조회와 납부 방법, 위택스·간편인증·자동이체 | 7 | 없음 | 2026-06-27 | - |
| property-tax/카드혜택 | 재산세 카드납부 혜택, 수수료 0·무이자 할부·캐시백 | 7 | 없음 | 2026-06-27 | - |
| property-tax/특례세율 | 1세대 1주택 재산세 특례, 공시가 9억 이하 세율 인하 | 7 | 없음 | 2026-06-27 | - |
| samsung-miso-finance-loan | 삼성미소금융재단 대출 신청조건과 대출상품, 서류까지 총정리 | 7 | O | 2026-07-22 | - |
| samsung-miso-finance-loan/application-period | 삼성미소금융재단 대출 신청기간 따로 있나, 상시접수 절차 9단계 확인하기 | 7 | 없음 | 2026-08-01 | - |
| samsung-miso-finance-loan/eligibility-details | 삼성미소금융재단 대출조건 자세히, 지원대상 5가지와 제한사항 | 7 | 없음 | 2026-07-20 | - |
| samsung-miso-finance-loan/loan-products-comparison | 삼성미소금융재단 창업자금·운영자금 대출 한도와 금리 비교 | 7 | 없음 | 2026-07-20 | - |
| samsung-miso-finance-loan/online-application | 삼성미소금융재단 대출 신청 홈페이지 바로가기, 온라인 상담부터 지점 방문까지 | 7 | 없음 | 2026-07-20 | - |
| samsung-miso-finance-loan/required-documents | 삼성미소금융재단 대출 필요서류 총정리, 준비물 체크리스트 | 7 | 없음 | 2026-07-20 | - |
| samsung-miso-finance-loan/unemployed | 삼성미소금융재단 대출 무직도 되나, 5요건 확인하고 상담 신청하기 | 7 | 없음 | 2026-08-01 | - |
| beotimok-jeonse-loan | 버팀목 전세자금대출 신청자격과 한도·금리, 청년버팀목과 차이 | 8 | O | 2026-06-27 | - |
| beotimok-jeonse-loan/금리 | 버팀목 전세대출 금리, 일반 2.5% 청년 2.2~3.3% | 7 | 없음 | 2026-06-27 | - |
| beotimok-jeonse-loan/신청방법 | 버팀목 전세대출 신청 방법, 기금e든든·은행 | 7 | 없음 | 2026-06-27 | - |
| beotimok-jeonse-loan/자격조건 | 버팀목 전세대출 자격, 무주택 연소득 5천만 순자산 3.45억 | 7 | 없음 | 2026-06-27 | - |
| beotimok-jeonse-loan/청년버팀목 | 청년 버팀목 전세대출, 만 19~34세 한도 1.5억 | 7 | 없음 | 2026-06-27 | - |
| beotimok-jeonse-loan/한도 | 버팀목 전세대출 한도, 일반 1.2억 청년 1.5억 | 7 | 없음 | 2026-06-27 | - |
| bogeumjari-loan | 보금자리론 신청자격과 디딤돌대출 차이, 우대금리 얼마나 깎이나 | 8 | 없음 | 2026-07-31 | - |
| bogeumjari-loan/금리우대 | 보금자리론 금리, 아낌e 4.6~4.9% 우대 최저 3.6% | 7 | 없음 | 2026-06-28 | - |
| bogeumjari-loan/대상소득 | 보금자리론 대상, 무주택 소득 7천만 신혼 8500만 | 7 | 없음 | 2026-06-28 | - |
| bogeumjari-loan/디딤돌비교 | 보금자리론 vs 디딤돌, 소득 주택가액 한도 금리 차이 | 7 | 없음 | 2026-06-28 | - |
| bogeumjari-loan/신청 | 보금자리론 신청, 주금공 아낌e 은행 | 7 | 없음 | 2026-06-28 | - |
| bogeumjari-loan/한도주택가액 | 보금자리론 한도 3.6억, 주택가액 6억 LTV 70% | 7 | 없음 | 2026-06-28 | - |
| card-fee-support | 소상공인 카드수수료 우대율과 환급, 부가세 세액공제까지 | 8 | 없음 | 2026-06-28 | - |
| card-fee-support/대상선정 | 카드수수료 우대 대상, 연매출 30억 이하 자동선정 | 7 | 없음 | 2026-06-28 | - |
| card-fee-support/매출세액공제 | 신용카드 매출세액공제 1.3%, 부가세 신고 때 얼마나 빠지나 | 7 | O | 2026-07-31 | - |
| card-fee-support/수수료환급 | 카드수수료 환급, 신규 가맹점 우대 소급 차액 | 7 | 없음 | 2026-06-28 | - |
| card-fee-support/우대수수료율 | 카드 우대수수료율, 연매출 3억 이하 0.4% 구간별 | 7 | 없음 | 2026-06-28 | - |
| card-fee-support/지자체지원조회 | 지자체 카드수수료 지원금과 수수료율 조회 방법 | 7 | 없음 | 2026-06-28 | - |
| child-sex-crime-report-reward | 아동청소년 성범죄 신고포상금 대상범죄와 신청방법, 지급 제외사유 | 8 | 없음 | 2026-06-29 | - |
| child-sex-crime-report-reward/대상범죄 | 신고포상금 대상 범죄, 성매매 성착취물 제작 판매 | 7 | 없음 | 2026-06-29 | - |
| child-sex-crime-report-reward/신고방법 | 아동청소년 성범죄 신고 방법, 112 경찰서 | 7 | 없음 | 2026-06-29 | - |
| child-sex-crime-report-reward/신고자보호 | 신고자 신원 비밀보장, 공개 시 처벌 보복 걱정 없이 | 7 | 없음 | 2026-06-29 | - |
| child-sex-crime-report-reward/제도개요 | 아동청소년 성범죄 신고포상금 제도, 기소 송치 시 최대 100만원 | 7 | 없음 | 2026-06-29 | - |
| child-sex-crime-report-reward/포상금신청 | 신고포상금 신청 방법, 성평등가족부 1년 이내 | 7 | 없음 | 2026-06-29 | - |
| didimdol-loan | 디딤돌대출 신청자격과 주택가액 한도, 생애최초·신혼 우대까지 | 8 | 없음 | 2026-06-28 | - |
| didimdol-loan/금리 | 디딤돌 대출 금리, 연 2.85~4.15% 소득별 우대 | 7 | 없음 | 2026-06-28 | - |
| didimdol-loan/대상소득 | 디딤돌 대출 대상, 무주택 소득 6천만 생애최초 7천만 | 7 | 없음 | 2026-06-28 | - |
| didimdol-loan/생애최초신혼우대 | 디딤돌 생애최초·신혼 우대, 소득 한도 주택가액 상향 | 7 | 없음 | 2026-06-28 | - |
| didimdol-loan/신청 | 디딤돌 대출 신청, 기금e든든 은행 vs 버팀목 신생아 | 7 | 없음 | 2026-06-28 | - |
| didimdol-loan/한도주택가액 | 디딤돌 대출 한도, 일반 2억 신혼 3.2억 주택 5억 | 7 | 없음 | 2026-06-28 | - |
| disability-activity-support | 장애인 활동지원서비스 종합조사와 본인부담금, 이용시간까지 | 8 | 없음 | 2026-06-27 | - |
| disability-activity-support/65세전환 | 장애인 활동지원 65세 되면, 노인장기요양 전환 | 7 | 없음 | 2026-06-27 | - |
| disability-activity-support/대상자격 | 장애인 활동지원 대상, 만 6~65세 등록 장애인 | 7 | 없음 | 2026-06-27 | - |
| disability-activity-support/본인부담금 | 장애인 활동지원 본인부담금, 기초수급 면제 상한 21만원 | 7 | 없음 | 2026-06-27 | - |
| disability-activity-support/신청방법 | 장애인 활동지원 신청 방법, 읍면동·국민연금공단 | 7 | 없음 | 2026-06-27 | - |
| disability-activity-support/종합조사 | 장애인 활동지원 종합조사와 급여량, 시간 정하는 법 | 7 | 없음 | 2026-06-27 | - |
| dosu-therapy | 도수치료 가격·이용기준, 2026년 7월 관리급여로 이렇게 바뀝니다 | 8 | 없음 | 2026-07-01 | - |
| dosu-therapy/가격 | 도수치료 가격 얼마? 2026년 7월부터 회당 43,850원 종별 동일 | 7 | 없음 | 2026-07-01 | - |
| dosu-therapy/관리급여 | 도수치료 관리급여란? 뜻·시행일과 비급여에서 바뀌는 점 | 7 | 없음 | 2026-07-01 | - |
| dosu-therapy/물리치료비교 | 도수치료 물리치료 추나요법 차이, 기본물리치료 먼저 받아야 하나 | 7 | 없음 | 2026-07-01 | - |
| dosu-therapy/산재 | 산재 도수치료, 건강보험이랑 뭐가 다른가요? | 7 | 없음 | 2026-07-16 | - |
| dosu-therapy/횟수 | 도수치료 횟수 제한, 주 2회·연간 15회(중증 24회) 초과하면? | 7 | 없음 | 2026-07-01 | - |
| efficient-appliance-support | 전기요금 복지할인 대상 취약계층 고효율가전 구매지원 | 7 | 없음 | 2026-05-23 | - |
| efficient-appliance-support/대상 | 고효율가전 환급 대상, 복지할인 가구 가군·나군 누가 받나 | 7 | 없음 | 2026-06-26 | - |
| efficient-appliance-support/신청방법 | 고효율가전 환급 신청 방법과 서류, 거래내역서·라벨 사진까지 | 7 | 없음 | 2026-06-26 | - |
| efficient-appliance-support/에어컨 | 에어컨 사면 고효율가전 환급 얼마? 벽걸이 1등급·스탠드 등급 | 7 | 없음 | 2026-06-26 | - |
| efficient-appliance-support/품목 | 고효율가전 환급 품목 11종, 에어컨·냉장고 몇 등급까지 되나 | 7 | 없음 | 2026-06-26 | - |
| efficient-appliance-support/환급률 | 고효율가전 환급 얼마 받나, 가군 30% 나군 15% 한도 30만원 | 7 | 없음 | 2026-06-26 | - |
| employment-incentive-allowance | 취업촉진수당 조기재취업수당 요건과 직업능력개발수당 신청방법 | 7 | 없음 | 2026-05-23 | - |
| employment-incentive-allowance/광역구직활동비이주비 | 광역구직활동비 이주비, 먼 곳 면접 이사 비용 지원 | 7 | 없음 | 2026-06-28 | - |
| employment-incentive-allowance/국민취업비교 | 취업촉진수당 vs 국민취업지원 구직촉진수당 차이 | 7 | 없음 | 2026-06-28 | - |
| employment-incentive-allowance/신청방법 | 취업촉진수당 신청방법, 조기재취업수당 고용24 청구 | 7 | 없음 | 2026-06-28 | - |
| employment-incentive-allowance/조기재취업수당 | 조기재취업수당 조건과 금액, 실업급여 절반 더 받기 | 7 | 없음 | 2026-06-28 | - |
| employment-incentive-allowance/직업능력개발수당 | 직업능력개발수당 1일 7530원, 실업급여 중 훈련 받으면 | 7 | 없음 | 2026-06-28 | - |
| first-meet | 첫만남이용권 신청기한과 사용처, 쌍둥이·다둥이는 어떻게 받나요? | 7 | 없음 | 2026-05-23 | - |
| first-meet/card-balance-check | 첫만남이용권 잔액조회, 카드사별 앱 경로 그대로 따라가 확인하기 | 7 | O | 2026-08-06 | - |
| first-meet/사용처 | 첫만남이용권 쿠팡·온라인에서 쓸 수 있다 / 전 업종 사용처 정리 | 7 | 없음 | 2026-05-23 | - |
| first-meet/신청기한 | 첫만남이용권 신청기한, 2024년 이후 출생아는 2년 이내 신청하면 된다 | 7 | 없음 | 2026-07-20 | - |
| first-meet/유효기간 | 첫만남이용권 200만원, 2년 안에 다 써야 한다 / 유효기간과 잔액 소멸 | 7 | 없음 | 2026-05-23 | - |
| first-meet/잔액조회 | 첫만남이용권 잔액 조회 방법 / 국민행복카드 앱에서 바로 확인 | 7 | 없음 | 2026-05-23 | - |
| gyeonggi-youth-welfare-point | 경기도 청년 복지포인트 사용처와 신청방법, 중소기업 노동자 지원과 차이 | 8 | 없음 | 2026-06-29 | - |
| gyeonggi-youth-welfare-point/대상자격 | 경기도 청년 복지포인트 대상, 19~39세 중소기업 385만원 | 7 | 없음 | 2026-06-29 | - |
| gyeonggi-youth-welfare-point/사용처 | 경기도 청년 복지포인트 사용처, 지정 복지몰 | 7 | 없음 | 2026-06-29 | - |
| gyeonggi-youth-welfare-point/신청방법 | 경기도 청년 복지포인트 신청, 잡아바 7월 모집 | 7 | 없음 | 2026-06-29 | - |
| gyeonggi-youth-welfare-point/지원금액 | 경기도 청년 복지포인트 120만원, 반기 60만 복지포인트 | 7 | 없음 | 2026-06-29 | - |
| gyeonggi-youth-welfare-point/통장비교 | 청년 복지포인트 vs 청년노동자 통장, 경기도 차이 | 7 | 없음 | 2026-06-29 | - |
| health-certificate | 보건증 인터넷 발급받고 유효기간 조회하는 법 | 7 | 없음 | 2026-07-29 | - |
| health-certificate/cost | 보건증 발급 비용 얼마인지 확인하고 신청하는 법 | 7 | 없음 | 2026-07-29 | - |
| health-certificate/expired | 보건증 기간 지나면 어떻게 되나, 재발급 신청하는 법 | 7 | 없음 | 2026-07-29 | - |
| health-certificate/offline | 보건증 인터넷 발급 안 될 때 보건소 방문해서 받는 법 | 7 | 없음 | 2026-07-29 | - |
| health-certificate/test-items | 보건증 검사 항목과 필요 서류 확인하고 보건소 신청하는 법 | 7 | 없음 | 2026-07-29 | - |
| health-certificate/validity | 보건증 기간 확인하는법, 유효기간 조회하고 30일 안에 재검진 신청하기 | 7 | 없음 | 2026-07-29 | - |
| inheritance-renunciation | 상속포기·한정승인 차이와 3개월 기한, 빚 상속 총정리 | 7 | 없음 | 2026-07-02 | - |
| inheritance-renunciation/기한 | 상속포기 기한 3개월, 안 날부터 계산·기간 지나면 | 7 | 없음 | 2026-07-02 | - |
| inheritance-renunciation/상속순위 | 상속 순위와 후순위 상속포기, 손자녀까지 넘어가나 | 7 | 없음 | 2026-07-02 | - |
| inheritance-renunciation/서류 | 상속포기 신청방법·서류·비용, 혼자 vs 법무사 | 7 | 없음 | 2026-07-02 | - |
| inheritance-renunciation/특별한정승인 | 특별한정승인, 기간 지난 뒤 몰랐던 빚 나왔을 때 | 7 | 없음 | 2026-07-02 | - |
| inheritance-renunciation/한정승인 | 한정승인이란? 상속재산 한도 변제·절차·상속세 | 7 | 없음 | 2026-07-02 | - |
| jeonse-fraud-victim | 전세사기 피해자 인정요건과 우선매수권·LH매입, 당장 살 곳 없으면 | 8 | 없음 | 2026-06-27 | - |
| jeonse-fraud-victim/긴급주거 | 전세사기 긴급주거지원, 공공임대 낮은 임대료 임시거주 | 7 | 없음 | 2026-06-27 | - |
| jeonse-fraud-victim/신청방법 | 전세사기 피해자 결정 신청 방법, 시도 지원관리시스템 | 7 | 없음 | 2026-06-27 | - |
| jeonse-fraud-victim/우선매수권 | 전세사기 피해주택 우선매수권 LH 매입 10년 무상 | 7 | 없음 | 2026-06-27 | - |
| jeonse-fraud-victim/지원내용 | 전세사기 피해자 지원 내용, 주거 금융 법률 심리 | 7 | 없음 | 2026-06-27 | - |
| jeonse-fraud-victim/피해자요건 | 전세사기 피해자 인정 요건, 보증금 5억 대항력 다수피해 | 7 | 없음 | 2026-06-27 | - |
| jeonse-protection | 전세보증금 지키는 법·전세사기 예방, 대항력·확정일자 | 7 | 없음 | 2026-07-02 | - |
| jeonse-protection/online-fixed-date-apply | 인터넷등기소 온라인 확정일자 신청부터 부여 확인까지, 오후 6시 넘기면 밀리나 | 7 | O | 2026-08-07 | - |
| jeonse-protection/계약갱신증액 | 계약갱신요구권 1회 2년·전세금 5% 증액 상한 | 7 | 없음 | 2026-07-02 | - |
| jeonse-protection/대항력우선변제권 | 전입신고·확정일자, 대항력·우선변제권 지키기 | 7 | 없음 | 2026-07-02 | - |
| jeonse-protection/보증금반환 | 전세보증금 반환 안 될 때, 임차권등기명령·소송 | 7 | 없음 | 2026-07-02 | - |
| jeonse-protection/전세사기예방 | 전세사기·깡통전세 예방, 계약 전 등기부·근저당 확인 | 7 | 없음 | 2026-07-02 | - |
| job-seeker-leap-package | 구직자 도약보장 패키지 | 7 | 없음 | 2026-05-23 | - |
| job-seeker-leap-package/AI잡케어 | 잡케어 Job-Care, 직무역량 진단 노동시장 정보 | 7 | 없음 | 2026-06-28 | - |
| job-seeker-leap-package/경력유형 | 구직자 도약보장 경력설계 유지 전환 차이 | 7 | 없음 | 2026-06-28 | - |
| job-seeker-leap-package/서비스개요 | 구직자 도약보장 패키지, AI 잡케어 1대1 심층상담 | 7 | 없음 | 2026-06-28 | - |
| job-seeker-leap-package/신청방법 | 구직자 도약보장 패키지 신청, 고용복지플러스센터 1350 | 7 | 없음 | 2026-06-28 | - |
| job-seeker-leap-package/참여대상 | 구직자 도약보장 패키지 대상, 청년 실업급여 경력단절 | 7 | 없음 | 2026-06-28 | - |
| living-stability-loan | 중저신용자 생활안정자금 신청자격과 금리, 다주택자도 되나요? | 8 | 없음 | 2026-06-28 | - |
| living-stability-loan/대상조건 | 생활안정자금 대상, 신용평점 하위 50% 중저신용자 | 7 | 없음 | 2026-06-28 | - |
| living-stability-loan/서민금융비교 | 생활안정자금 vs 햇살론 사잇돌, 서민금융 비교 | 7 | 없음 | 2026-06-28 | - |
| living-stability-loan/신청방법 | 생활안정자금 신청, 저축은행 카드사 순차 출시 | 7 | 없음 | 2026-06-28 | - |
| living-stability-loan/주택제한 | 생활안정자금 다주택 제외, 1년 주택구입 금지 약정 | 7 | 없음 | 2026-06-28 | - |
| living-stability-loan/한도금리 | 생활안정자금 한도 1천만, 중금리 연소득 예외 | 7 | 없음 | 2026-06-28 | - |
| medical-benefit | 의료급여 1종 2종 차이와 본인부담금, 건강생활유지비까지 | 8 | 없음 | 2026-06-27 | - |
| medical-benefit/1종2종 | 의료급여 1종 2종 차이, 근로능력에 따라 본인부담 다르다 | 7 | 없음 | 2026-06-27 | - |
| medical-benefit/건강생활유지비 | 의료급여 건강생활유지비 월 6,000원, 안 쓰면 환급 | 7 | 없음 | 2026-06-27 | - |
| medical-benefit/본인부담금 | 의료급여 본인부담금, 외래 입원 약국 얼마 내나 | 7 | 없음 | 2026-06-27 | - |
| medical-benefit/수급자격 | 의료급여 수급자격 중위소득 40% 해당하는지 확인하는 법 | 7 | 없음 | 2026-06-27 | - |
| medical-benefit/신청방법 | 의료급여 신청 방법, 읍면동에서 기초생활보장과 함께 | 7 | 없음 | 2026-06-27 | - |
| national-health-insurance | 국민건강보험 직장가입자 자격 조회하고 보험료·요양급여 확인하는 법 | 7 | 없음 | 2026-07-17 | - |
| national-health-insurance/health-checkup-schedule | 내 건강검진 대상·주기 조회하고 무료로 암검진 받는 법 | 7 | 없음 | 2026-07-17 | - |
| national-health-insurance/maternity-benefit-card | 임신했다면 국민행복카드 발급받고 진료비 100만원 지원받는 법 | 7 | 없음 | 2026-07-17 | - |
| national-health-insurance/medical-expense-reimbursement | 응급실·해외에서 병원비 냈다면 요양비 청구서 접수하는 법 | 7 | 없음 | 2026-07-17 | - |
| national-health-insurance/objection-appeal-procedure | 건강보험료·급여 결정 불복 시 이의신청서 접수하는 법 | 7 | 없음 | 2026-07-17 | - |
| national-health-insurance/premium-arrears-installment | 건강보험료 체납했다면 분할납부 신청해서 급여제한 피하는 법 | 7 | 없음 | 2026-07-17 | - |
| near-poor | 차상위계층 기초생활수급자와 차이, 소득기준과 혜택 종류 | 8 | 없음 | 2026-06-27 | - |
| near-poor/기준 | 차상위계층 기준, 2026 중위소득 50% 4인 324만원 | 7 | 없음 | 2026-06-27 | - |
| near-poor/기초수급차이 | 차상위계층과 기초생활수급자 차이, 32% vs 50% | 7 | 없음 | 2026-06-27 | - |
| near-poor/세부유형 | 차상위 세부유형, 본인부담경감 자활 장애 확인 | 7 | 없음 | 2026-06-27 | - |
| near-poor/혜택 | 차상위계층 혜택 총정리, 통신 전기 문화누리 의료비 | 7 | 없음 | 2026-06-27 | - |
| near-poor/확인서 | 차상위계층 확인서 발급, 복지로 정부24 인터넷 | 7 | 없음 | 2026-06-27 | - |
| old-age-pension | 노령연금 몇 살부터 받는지 조회하고 예상연금액 계산하는 법 | 7 | 없음 | 2026-07-17 | - |
| old-age-pension/claim-documents-payday | 노령연금 신청서류부터 접수처까지, 신청하면 며칠에 들어오나 | 8 | O | 2026-08-09 | - |
| old-age-pension/housing-pension-reduction | 주택연금 받으면 노령연금 깎일까? 생계급여까지 확인 | 7 | O | 2026-08-07 | - |
| old-age-pension/payment-suspension-restore | 노령연금 자격 상실되면 다시 못 받나? 끊기는 경우와 재신청까지 | 7 | O | 2026-08-07 | - |
| old-age-pension/pension-tax-health-insurance | 노령연금도 세금 떼나? 연금소득세부터 건강보험료 계산까지 | 7 | O | 2026-08-07 | - |
| old-age-pension/survivor-pension-overlap | 남편 유족연금 받는데 내 노령연금도 나올까? 중복수령 계산부터 | 7 | O | 2026-08-07 | - |
| resident-tax | 주민세 조회하고 8월 16일까지 납부하는 법, 개인분 얼마 내나 | 7 | 없음 | 2026-08-10 | - |
| resident-tax/amount | 서울 경기도 주민세 얼마인지 지역별 금액 조회하는 법 | 7 | 없음 | 2026-07-29 | - |
| resident-tax/business | 주민세 종업원분 사업소분, 누가 언제까지 신고하나 | 9 | O | 2026-08-10 | - |
| resident-tax/how-to-pay | 주민세 고지서 없이 위택스에서 조회하고 납부하는 법 | 7 | 없음 | 2026-07-29 | - |
| resident-tax/period | 주민세 납부기간 8월 16~31일 확인하고 납부하는 법 | 7 | 없음 | 2026-07-29 | - |
| resident-tax/target | 주민세 납부 대상 확인하고 세대주인지 조회하는 법 | 7 | 없음 | 2026-07-29 | - |
| safe-inheritance-onestop | 안심상속 원스톱 서비스 | 7 | 없음 | 2026-05-23 | - |
| safe-inheritance-onestop/documents | 안심상속 준비서류와 신청서, 주민센터 방문 전 챙길 것 | 7 | 없음 | 2026-07-29 | - |
| safe-inheritance-onestop/eligibility | 상속포기하면 다음 순위는 온라인 안 됩니다, 방문 신청 대상 확인 | 7 | 없음 | 2026-07-29 | - |
| safe-inheritance-onestop/how-to-apply | 안심상속 신청방법, 온라인 5단계로 접수하는 법 | 7 | 없음 | 2026-07-29 | - |
| safe-inheritance-onestop/result-check | 안심상속원스톱 결과조회, 언제 어디서 확인하나 | 7 | 없음 | 2026-07-29 | - |
| safe-inheritance-onestop/when-apply | 안심상속 신청 기간, 사망일 말일부터 1년 안에 해야 하는 이유 | 7 | 없음 | 2026-07-29 | - |
| small-biz-online-sales | 소상공인 온라인 판로지원 라이브커머스와 TV홈쇼핑까지 되나요? | 8 | 없음 | 2026-06-28 | - |
| small-biz-online-sales/대상자격 | 소상공인 온라인 판로지원 대상, 디지털 역량 단계 | 7 | 없음 | 2026-06-28 | - |
| small-biz-online-sales/라이브커머스 | 소상공인 라이브커머스 지원, 제작 운영 인플루언서 | 7 | 없음 | 2026-06-28 | - |
| small-biz-online-sales/쇼핑몰입점 | 소상공인 온라인 쇼핑몰 입점, TV홈쇼핑 로컬상품관 | 7 | 없음 | 2026-06-28 | - |
| small-biz-online-sales/신청방법 | 소상공인 온라인 판로지원 신청, 판판대로 소상공인24 | 7 | 없음 | 2026-06-28 | - |
| small-biz-online-sales/지원내용 | 소상공인 온라인 판로지원 내용, 8개 사업 중 4개 | 7 | 없음 | 2026-06-28 | - |
| sme-sunshine-card | 소상공인 특례 햇살론카드 한도와 필수교육, 일반 햇살론카드와 차이 | 7 | 없음 | 2026-06-28 | - |
| sme-sunshine-card/교육컨설팅 | 소상공인 햇살론카드 필수교육 자영업 컨설팅 | 7 | 없음 | 2026-06-28 | - |
| sme-sunshine-card/대상자격 | 소상공인 햇살론카드 자격, 개인사업자 신용 하위 50% | 7 | 없음 | 2026-06-28 | - |
| sme-sunshine-card/보증한도 | 소상공인 햇살론카드 한도 500만, 이용한도 480만 | 7 | 없음 | 2026-06-28 | - |
| sme-sunshine-card/신청방법 | 소상공인 햇살론카드 신청, 서민금융진흥원 앱 | 7 | 없음 | 2026-06-28 | - |
| sme-sunshine-card/카드사업종 | 소상공인 햇살론카드 8개 카드사 보증제한 업종 | 7 | 없음 | 2026-06-28 | - |
| sme-youth-jeonse-loan | 중기청 전세대출 대출한도와 금리, 버팀목·청년전세대출과 차이 | 8 | 없음 | 2026-06-28 | - |
| sme-youth-jeonse-loan/금리 | 중기청 전세대출 금리 연 1.5%, 버팀목보다 저렴 | 7 | 없음 | 2026-06-28 | - |
| sme-youth-jeonse-loan/기간연장 | 중기청 전세대출 기간, 2년 4회 연장 최장 10년 | 7 | 없음 | 2026-06-28 | - |
| sme-youth-jeonse-loan/대상자격 | 중기청 전세대출 자격, 만19~34세 중소기업 소득 5천만 | 7 | 없음 | 2026-06-28 | - |
| sme-youth-jeonse-loan/신청방법 | 중기청 전세대출 신청, 3개월 내 기금e든든 은행 | 7 | 없음 | 2026-06-28 | - |
| sme-youth-jeonse-loan/한도보증금 | 중기청 전세대출 한도 1억, 보증금 2억 80% | 7 | 없음 | 2026-06-28 | - |
| sunshine-loan-119 | 햇살론119 신청자격과 금리·보증료, 다른 햇살론과 차이 | 7 | 없음 | 2026-06-28 | - |
| sunshine-loan-119/대상자격 | 햇살론119 자격, 채무조정 3개월 매출 3억 개인사업자 | 7 | 없음 | 2026-06-28 | - |
| sunshine-loan-119/신청방법 | 햇살론119 신청, 서민금융진흥원 1397 증빙 | 7 | 없음 | 2026-06-28 | - |
| sunshine-loan-119/채무조정연계 | 햇살론119 채무조정, 개인사업자대출119 연계 | 7 | 없음 | 2026-06-28 | - |
| sunshine-loan-119/한도금리 | 햇살론119 한도 2000만, 금리 6~7% 5년 거치 | 7 | 없음 | 2026-06-28 | - |
| sunshine-loan-119/햇살론비교 | 햇살론119 vs 일반, 사업자 운영자금 차이 | 7 | 없음 | 2026-06-28 | - |
| sunshine-loan-card | 햇살론카드 발급 자격과 한도, 필수교육은 왜 받아야 하나요? | 7 | 없음 | 2026-06-28 | - |
| sunshine-loan-card/대상자격 | 햇살론카드 자격, 가처분소득 600만 신용 하위 20% | 7 | 없음 | 2026-06-28 | - |
| sunshine-loan-card/보증한도 | 햇살론카드 한도, 신규 200만 성실 300만 이용한도 | 7 | 없음 | 2026-06-28 | - |
| sunshine-loan-card/신청방법 | 햇살론카드 신청, 서민금융진흥원 앱 교육 후 | 7 | 없음 | 2026-06-28 | - |
| sunshine-loan-card/카드사혜택 | 햇살론카드 발급 카드사, 7개사 할부 포인트 | 7 | 없음 | 2026-06-28 | - |
| sunshine-loan-card/필수교육 | 햇살론카드 필수교육, 발급 전 신용관리 이수 | 7 | 없음 | 2026-06-28 | - |
| sunshine-loan-general | 햇살론일반 신청자격과 상환방법, 보증료 인하 받는 법 | 7 | 없음 | 2026-06-28 | - |
| sunshine-loan-general/대상자격 | 햇살론일반 자격, 연소득 3500만 신용 하위 20% | 7 | 없음 | 2026-06-28 | - |
| sunshine-loan-general/보증료우대 | 햇살론일반 보증료 2.5%, 사회적배려 0.5%p 인하 | 7 | 없음 | 2026-06-28 | - |
| sunshine-loan-general/신청방법 | 햇살론일반 신청, 서민금융진흥원 앱 1397 | 7 | 없음 | 2026-06-28 | - |
| sunshine-loan-general/한도금리 | 햇살론일반 한도 1500만, 금리 연 10% 5년 | 7 | 없음 | 2026-06-28 | - |
| sunshine-loan-general/햇살론비교 | 햇살론 종류 비교, 일반 특례 카드 유스 차이 | 7 | 없음 | 2026-06-28 | - |
| sunshine-loan-special | 햇살론특례 햇살론일반과 차이, 신청해도 거절될 수 있나요? | 7 | 없음 | 2026-06-28 | - |
| sunshine-loan-special/대부업대안 | 햇살론특례, 대부업 불법사금융 대신 최저신용 | 7 | 없음 | 2026-06-28 | - |
| sunshine-loan-special/대상자격 | 햇살론특례 자격, 최저신용자 연소득 3500만 하위 20% | 7 | 없음 | 2026-06-28 | - |
| sunshine-loan-special/신청방법 | 햇살론특례 신청, 서민금융진흥원 앱 1397 | 7 | 없음 | 2026-06-28 | - |
| sunshine-loan-special/일반비교 | 햇살론특례 vs 일반, 최저신용 한도 금리 차이 | 7 | 없음 | 2026-06-28 | - |
| sunshine-loan-special/한도금리 | 햇살론특례 한도 1000만, 금리 12.5% 배려 9.9% | 7 | 없음 | 2026-06-28 | - |
| sunshine-youth-loan | 햇살론유스 신청자격과 거치·상환기간, 특정용도자금이란 | 7 | O | 2026-06-28 | - |
| sunshine-youth-loan/금리상환 | 햇살론유스 금리 5.0% 배려 1.9%, 거치 상환 최장 15년 | 7 | 없음 | 2026-06-28 | - |
| sunshine-youth-loan/대상자격 | 햇살론유스 자격, 19~34세 대학생 미취업 사회초년생 | 7 | 없음 | 2026-06-28 | - |
| sunshine-youth-loan/신청방법 | 햇살론유스 신청, 서민금융진흥원 앱 1397 증빙 | 7 | 없음 | 2026-06-28 | - |
| sunshine-youth-loan/청년대출비교 | 햇살론유스 vs 청년 미래이음 학자금, 청년 대출 비교 | 7 | 없음 | 2026-06-28 | - |
| sunshine-youth-loan/한도용도 | 햇살론유스 한도 1200만, 일반 300만 특정용도 900만 | 7 | 없음 | 2026-06-28 | - |
| teen-female-hygiene | 여성청소년 생리용품 지원 신청방법, 24세 넘으면 못 받나요? | 8 | 없음 | 2026-06-29 | - |
| teen-female-hygiene/국민행복카드 | 생리용품 바우처 국민행복카드 발급 사용 명의변경 | 7 | 없음 | 2026-06-29 | - |
| teen-female-hygiene/대상자격 | 여성청소년 생리용품 바우처 대상, 9~24세 수급 차상위 한부모 | 7 | 없음 | 2026-06-29 | - |
| teen-female-hygiene/사용처 | 생리용품 바우처 사용처, 편의점 약국 온라인 생리용품만 | 7 | 없음 | 2026-06-29 | - |
| teen-female-hygiene/신청방법 | 여성청소년 생리용품 바우처 신청, 복지로 행정복지센터 | 7 | 없음 | 2026-06-29 | - |
| teen-female-hygiene/지원금액 | 생리용품 바우처 금액, 연 168000원 2026 전액 1회 지급 | 7 | 없음 | 2026-06-29 | - |
| vulnerable-livelihood-loan | 금융취약계층 생계자금 청년미래이음대출과 차이, 거절될 수 있나요? | 7 | 없음 | 2026-06-28 | - |
| vulnerable-livelihood-loan/대상자격 | 금융취약계층 생계자금 자격, 미소금융 완제자 취약계층 | 7 | 없음 | 2026-06-28 | - |
| vulnerable-livelihood-loan/신청방법 | 금융취약계층 생계자금 신청, 미소금융지점 1397 | 7 | 없음 | 2026-06-28 | - |
| vulnerable-livelihood-loan/청년비교 | 금융취약계층 생계자금 vs 청년 미래이음 차이 | 7 | 없음 | 2026-06-28 | - |
| vulnerable-livelihood-loan/추가요건 | 금융취약계층 생계자금 추가요건, 완제 성실상환 피해자 | 7 | 없음 | 2026-06-28 | - |
| vulnerable-livelihood-loan/한도금리 | 금융취약계층 생계자금 한도 500만, 금리 4.5% 6년 | 7 | 없음 | 2026-06-28 | - |
| youth-future-link-loan | 청년 미래이음대출 신청자격과 금리, 햇살론유스와 차이 | 7 | 없음 | 2026-06-28 | - |
| youth-future-link-loan/대상자격 | 청년 미래이음 대출 자격, 19~34세 미취업 취창업 1년 | 7 | 없음 | 2026-06-28 | - |
| youth-future-link-loan/상환구조 | 청년 미래이음 상환, 거치 6년 후 5년 분할 | 7 | 없음 | 2026-06-28 | - |
| youth-future-link-loan/신청방법 | 청년 미래이음 신청, 전국 미소금융지점 1397 | 7 | 없음 | 2026-06-28 | - |
| youth-future-link-loan/유스비교 | 청년 미래이음 vs 햇살론유스, 청년 대출 차이 | 7 | 없음 | 2026-06-28 | - |
| youth-future-link-loan/한도금리 | 청년 미래이음 한도 500만, 금리 4.5% 11년 | 7 | 없음 | 2026-06-28 | - |
| youth-monthly-rent | 청년월세 특별지원 소득재산 기준, 주거급여 받으면 못 받나요? | 8 | 없음 | 2026-06-27 | - |
| youth-monthly-rent/소득재산기준 | 청년월세 소득기준, 청년 중위 60% 원가구 100% | 7 | 없음 | 2026-06-27 | - |
| youth-monthly-rent/신청방법 | 청년월세 신청방법, 복지로 상시신청 주민센터 | 7 | 없음 | 2026-06-27 | - |
| youth-monthly-rent/신청자격 | 청년월세 신청자격, 만 19~34세 무주택 독립거주 | 7 | 없음 | 2026-06-27 | - |
| youth-monthly-rent/주거급여중복 | 청년월세 주거급여 중복, 유리한 쪽 선택 | 7 | 없음 | 2026-06-27 | - |
| youth-monthly-rent/지원금액 | 청년월세 지원금액, 월 20만 최대 24개월 480만 | 7 | 없음 | 2026-06-27 | - |
| youth-welfare-point-compare | 청년 복지포인트 경기·인천 비교, 여러 지역 동시에 받을 수 있나요? | 8 | 없음 | 2026-06-29 | - |
| youth-welfare-point-compare/공통대상 | 청년 복지포인트 공통 조건, 거주 재직 청년 18~39세 | 7 | 없음 | 2026-06-29 | - |
| youth-welfare-point-compare/우리지역찾기 | 청년 복지포인트 우리 지역, 온통청년 청년포털 확인 | 7 | 없음 | 2026-06-29 | - |
| youth-welfare-point-compare/인천재직청년 | 인천 재직청년 복지포인트, 120만원 e음 90만 생애 1회 | 7 | 없음 | 2026-06-29 | - |
| youth-welfare-point-compare/지급형태 | 청년 복지포인트 형태, 복지몰 지역화폐 소비쿠폰 | 7 | 없음 | 2026-06-29 | - |
| youth-welfare-point-compare/지역별비교 | 청년 복지포인트 지역별 비교, 경기 인천 금액 형태 | 7 | 없음 | 2026-06-29 | - |
| after-school-childcare-fee | 방과후 보육료 지원 대상연령과 신청방법, 소득 상관없이 되나요? | 8 | 없음 | 2026-08-01 | - |
| after-school-childcare-fee/신청방법 | 방과후 보육료 지원 / 일반아동 10만원 · 장애아 31만원 신청 방법 | 7 | 없음 | 2026-05-23 | - |
| after-school-childcare-fee/연장보육료중복 | 방과후 보육료와 연장보육료, 중복 신청이 가능한가 / 조건 정리 | 7 | 없음 | 2026-05-23 | - |
| after-school-childcare-fee/장애아대상 | 차상위 기준은 안 넘는데 장애아동이면 방과후 보육료 대상인가 | 7 | 없음 | 2026-05-23 | - |
| after-school-childcare-fee/초등어린이집 | 초등학교 다니는 아이를 어린이집에 보내도 방과후 보육료 지원이 되나 | 7 | 없음 | 2026-05-23 | - |
| artist-pension | 예술인 국민연금 보험료 지원, 활동증명부터 다른 지원 중복까지 | 8 | 없음 | 2026-08-01 | - |
| artist-pension/두루누리중복 | 예술인 국민연금 지원과 두루누리 사회보험료 지원, 중복 신청이 되나 | 7 | 없음 | 2026-05-23 | - |
| artist-pension/신청자격기간 | 예술인 국민연금 보험료 지원 / 월 최대 37,950원 · 신청 자격과 기간 | 7 | 없음 | 2026-05-23 | - |
| artist-pension/신청절차 | 예술활동증명 완료 후 신청하는 예술인 국민연금 보험료 지원 절차 | 7 | 없음 | 2026-05-23 | - |
| artist-pension/지역가입자 | 프리랜서 작가인데 국민연금 지역가입자라면 예술인 보험료 지원 신청 가능한가 | 7 | 없음 | 2026-05-23 | - |
| birth-care-employment-grant | 출산육아기 고용안정장려금 대체인력·업무분담 지원금, 10시 출근제까지 | 8 | 없음 | 2026-08-01 | - |
| birth-care-employment-grant/대체인력 | 육아휴직 대체인력 채용 사업주 지원금 / 월 최대 140만원 조건과 절차 | 7 | 없음 | 2026-05-20 | - |
| birth-care-employment-grant/복직후지급 | 출산육아기 고용안정장려금 복직 후 지급 — 조건과 신청 시기 | 7 | 없음 | 2026-05-23 | - |
| birth-care-employment-grant/사업주신청 | 직원이 육아휴직 썼을 때 사업주가 신청하는 출산육아기 고용안정장려금 정리 | 7 | 없음 | 2026-05-23 | - |
| birth-care-employment-grant/중복수령 | 출산육아기 고용안정장려금 · 대체인력지원금 중복 수령 가능 여부 | 7 | 없음 | 2026-05-23 | - |
| cancer-patient-medical-aid | 암환자 의료비 지원 | 7 | 없음 | 2026-05-23 | - |
| cancer-patient-medical-aid/산정특례건강보험중복지원여부 | 암환자 의료비 지원과 산정특례 중복 가능, 건강보험 5%와 동시에 받는 방법 | 7 | 없음 | 2026-05-23 | - |
| cancer-patient-medical-aid/성인중위소득120이하300만원 | 암환자 의료비 지원 성인 기준, 중위소득 120% 이하면 연 300만원 받는다 | 7 | 없음 | 2026-05-23 | - |
| cancer-patient-medical-aid/소아암3000만원18세까지조건 | 소아 암환자 의료비 지원, 연 3,000만원 18세까지 받는 조건과 신청 방법 | 7 | 없음 | 2026-05-23 | - |
| cancer-patient-medical-aid/신청방법보건소접수서류절차 | 암환자 의료비 지원 신청 방법, 보건소 접수 절차와 필요 서류 총정리 | 7 | 없음 | 2026-05-23 | - |
| child-care-service | 아이돌봄서비스 시간제·종일제 차이와 신청방법, 본인부담금까지 | 8 | 없음 | 2026-08-01 | - |
| child-care-service/맞벌이신청 | 맞벌이 가구 아이돌봄서비스 신청 / 소득 합산 계산 방식 | 7 | 없음 | 2026-05-23 | - |
| child-care-service/본인부담금 | 아이돌봄서비스 소득 구간별 본인부담금 / 시간제 기준 | 7 | 없음 | 2026-05-23 | - |
| child-care-service/소득기준 | 아이돌봄서비스 소득 기준 / 중위소득 75%~200% 4단계 지원 | 7 | 없음 | 2026-05-23 | - |
| child-care-service/시간제종합형 | 아이돌봄서비스 시간제와 종합형, 어느 쪽으로 신청해야 싼가 | 7 | O | 2026-08-01 | - |
| child-development-account | 디딤씨앗통장 신청자격과 만기지급액, 차상위계층도 되나요? | 7 | 없음 | 2026-05-23 | - |
| child-development-account/가입자격 | 디딤씨앗통장 가입 자격 / 기초수급·차상위·보호대상아동 대상 | 7 | 없음 | 2026-05-23 | - |
| child-development-account/가정위탁신청 | 가정위탁 아동 디딤씨앗통장 신청 자격과 방법 | 7 | 없음 | 2026-05-23 | - |
| child-development-account/매칭신청 | 디딤씨앗통장 1:2 정부 매칭 구조와 신청 방법 | 7 | 없음 | 2026-05-23 | - |
| child-development-account/해지조건 | 디딤씨앗통장 중도 해지 조건 / 정부 매칭금 반환 여부 | 7 | 없음 | 2026-05-23 | - |
| child-meal-card | 아동급식카드 지원대상·신청방법·사용처 총정리, 결식우려 아동 급식지원 | 7 | 없음 | 2026-07-02 | - |
| child-meal-card/방학중지원학기중차이이용방법주의 | 아동급식카드 방학 중 지원, 학기 중과 다른 이용 방법과 주의사항 | 7 | 없음 | 2026-05-23 | - |
| child-meal-card/사용처편의점가맹점하루지원금액 | 아동급식카드 사용처, 편의점·가맹점 어디서 쓸 수 있고 금액은 | 7 | 없음 | 2026-05-23 | - |
| child-meal-card/신청방법복지로주민센터절차서류 | 아동급식카드 신청방법, 복지로·주민센터 신청 절차와 서류 안내 | 7 | 없음 | 2026-05-23 | - |
| child-meal-card/지원대상결식우려아동기준중위소득 | 아동급식카드 지원대상, 중위소득 52% 넘어도 신청되나 | 7 | O | 2026-08-01 | - |
| childcare-infant-education | 유아 무상교육·보육 지원대상과 학부모 부담 절감액, 신청방법 | 7 | 없음 | 2026-05-23 | - |
| childcare-infant-education/기관별지원금 | 유아 무상교육 기관별 지원금 — 공립유치원·사립유치원·어린이집 월 얼마씩 | 7 | 없음 | 2026-05-23 | - |
| childcare-infant-education/사립유치원4세 | 사립유치원 만 4세 무상교육 — 월 11만 원 자동 차감, 2025 vs 2026 비교 | 7 | 없음 | 2026-05-23 | - |
| childcare-infant-education/어린이집4세확대 | 어린이집 만 4세 무상교육 확대 — 2026년 3월부터 월 7만 원 | 7 | 없음 | 2026-05-23 | - |
| childcare-infant-education/연도별일정 | 유아 무상교육 연도별 일정 — 2025년 5세, 2026년 4~5세 확대 | 7 | 없음 | 2026-05-23 | - |
| closed-biz-repayment-relief | 폐업 소상공인 정책자금 상환부담 완화, 취업하면 상환연장·금리감면 | 8 | 없음 | 2026-07-01 | - |
| closed-biz-repayment-relief/금리감면 | 폐업 소상공인 정책자금 금리감면 0.5%p, 취업 1년 근속 조건 | 7 | 없음 | 2026-07-01 | - |
| closed-biz-repayment-relief/대상 | 폐업 소상공인 정책자금 상환완화 대상, 2023년 대출·2025년 폐업 | 7 | 없음 | 2026-07-01 | - |
| closed-biz-repayment-relief/상환연장 | 폐업 소상공인 정책자금 상환기간 최대 7년 연장, 월 부담 완화 | 7 | 없음 | 2026-07-01 | - |
| closed-biz-repayment-relief/신청재기 | 폐업 소상공인 상환완화 신청·재기지원, 소진공 원스톱폐업 | 7 | 없음 | 2026-07-01 | - |
| college-student-housing | 대학생 주거지원 행복주택 입주자격, 청년전세임대 신청방법 | 7 | 없음 | 2026-05-23 | - |
| college-student-housing/대학생기숙사비지원한국장학재단 | 대학생 기숙사비 지원: 한국장학재단 제도 총정리 | 7 | 없음 | 2026-05-23 | - |
| college-student-housing/서울대학생공공기숙사종류신청방법 | 서울 대학생 공공기숙사 종류와 신청 방법 | 7 | 없음 | 2026-05-23 | - |
| college-student-housing/행복기숙사신청자격비용LH공공기숙사 | LH 행복기숙사 신청 자격·비용·신청 방법 총정리 | 7 | 없음 | 2026-05-23 | - |
| college-student-housing/희망하우징행복기숙사대학생비교 | 희망하우징 vs 행복기숙사: 대학생 공공주거 비교 | 7 | 없음 | 2026-05-23 | - |
| community-care-center | 다함께돌봄센터 이용대상과 이용료, 지역아동센터와 차이까지 | 8 | 없음 | 2026-08-01 | - |
| community-care-center/대기대안 | 다함께돌봄센터 대기가 길면 쓸 수 있는 초등돌봄 대안 서비스 | 7 | 없음 | 2026-05-23 | - |
| community-care-center/방학운영 | 방학에도 다함께돌봄센터를 이용할 수 있나, 학기 중과 방학 운영 시간 비교 | 7 | 없음 | 2026-05-23 | - |
| community-care-center/신청이용료 | 다함께돌봄센터 신청 방법부터 이용료 월 10만원 이내 운영 시간까지 | 7 | 없음 | 2026-05-23 | - |
| community-care-center/아이돌봄비교 | 아이돌봄서비스와 다함께돌봄센터, 초등학생 맞벌이 가구는 어디를 신청해야 하나 | 7 | 없음 | 2026-05-23 | - |
| community-child-center | 지역아동센터 이용대상과 이용료, 다함께돌봄센터와 차이는? | 8 | 없음 | 2026-08-01 | - |
| community-child-center/2026변경사항 | 2026년 지역아동센터 이용 대상과 지원 내용이 달라진 점 | 7 | 없음 | 2026-05-23 | - |
| community-child-center/다함께돌봄중복 | 지역아동센터와 다함께돌봄센터, 같은 아이가 두 곳을 동시에 이용할 수 있는지 | 7 | 없음 | 2026-05-23 | - |
| community-child-center/맞벌이돌봄서비스 | 초등학생 자녀가 있는 맞벌이라면 지역아동센터에서 받을 수 있는 돌봄 서비스 | 7 | 없음 | 2026-05-23 | - |
| community-child-center/우리동네찾기 | 우리 동네 지역아동센터 찾는 방법과 이용 신청 조건 | 7 | 없음 | 2026-05-23 | - |
| crime-victim-aid | 범죄피해구조금 신청기한과 대상, 손해배상과 중복으로 받나요? | 7 | 없음 | 2026-05-23 | - |
| crime-victim-aid/2026증액기준 | 2026년 범죄피해 구조금 증액, 달라진 금액 기준과 신청 방법 정리 | 7 | 없음 | 2026-05-23 | - |
| crime-victim-aid/가해자있을때 | 가해자가 있는데도 국가에서 범죄피해 구조금을 받을 수 있는 경우와 없는 경우 | 7 | 없음 | 2026-05-23 | - |
| crime-victim-aid/유족신청 | 피해자 본인이 아닌 유족이라면 범죄피해 구조금을 신청할 수 있는지 | 7 | 없음 | 2026-05-23 | - |
| crime-victim-aid/지급금액자격 | 범죄피해자 구조금 신청 자격과 사망 장해 중상해별 지급 금액 | 7 | 없음 | 2026-05-23 | - |
| crime-victim-stable | 범죄피해자 긴급생활안정비 구조금과 중복여부, 의료비 지원까지 | 7 | 없음 | 2026-05-23 | - |
| crime-victim-stable/350만원신청 | 2026년 신설된 범죄피해자 긴급생활안정비 350만원 받는 조건과 신청 절차 | 7 | 없음 | 2026-05-23 | - |
| crime-victim-stable/5주이상치료 | 5주 이상 치료가 필요한 범죄피해자라면 생계비를 따로 받을 수 있는지 | 7 | 없음 | 2026-05-23 | - |
| crime-victim-stable/구조금중복신청 | 범죄피해자 긴급생활안정비와 구조금, 같은 사건으로 두 가지를 함께 신청하는 방법 | 7 | 없음 | 2026-05-23 | - |
| crime-victim-stable/생계위기소득기준 | 긴급생활안정비 대상이 되는 생계위기 기준, 소득 조건이 있는지 없는지 | 7 | 없음 | 2026-05-23 | - |
| debtor-lawyer-free-support | 채무자 대리인(변호사) 무료 지원사업 | 7 | 없음 | 2026-05-23 | - |
| debtor-lawyer-free-support/불법사금융피해자신청 | 불법 사금융 피해자라면 채무자대리인 무료 지원 신청으로 변호사 받는 방법 | 7 | 없음 | 2026-05-23 | - |
| debtor-lawyer-free-support/불법추심변호사무료신청 | 불법 추심 당하고 있다면 채무자대리인 변호사 무료 신청으로 대응하는 방법 | 7 | 없음 | 2026-05-23 | - |
| debtor-lawyer-free-support/신청대상최고금리초과 | 채무자대리인 무료 지원 신청 대상, 법정 최고금리 연 20% 초과 여부 확인 | 7 | 없음 | 2026-05-23 | - |
| debtor-lawyer-free-support/채무자대리인일반변호사비교 | 채무자대리인 무료 지원 vs 일반 변호사, 비용·대상·업무 범위 어떻게 다른가 | 7 | 없음 | 2026-05-23 | - |
| direct-payment | 공익직불제 신청시기와 준수사항, 농지 작으면 못 받나요? | 7 | 없음 | 2026-05-23 | - |
| direct-payment/2026변경기준 | 2026년 공익직불금 신청 대상과 농외소득 기준이 달라진 점 정리 | 7 | 없음 | 2026-05-23 | - |
| direct-payment/농외소득기준 | 농외 소득이 있어도 공익직불금을 받을 수 있는지, 2026년 기준은 얼마인지 | 7 | 없음 | 2026-05-23 | - |
| direct-payment/신청절차서류 | 기본형 공익직불금 신청부터 지급까지 농가가 준비할 서류와 절차 | 7 | 없음 | 2026-05-23 | - |
| direct-payment/신청준비사항 | 농지 1,000㎡ 이상에서 직접 농사 짓는다면 공익직불금 신청 전 확인할 것들 | 7 | 없음 | 2026-05-23 | - |
| disabled-women-childcare | 여성장애인 보육특례 우선입소 점수와 보육료 계산, 중복지원까지 | 7 | 없음 | 2026-05-23 | - |
| disabled-women-childcare/보육료비교 | 장애아동 보육료와 일반보육료, 지원 금액과 자격 조건이 어떻게 다른가 | 7 | 없음 | 2026-05-23 | - |
| disabled-women-childcare/우선입소신청 | 장애인 부모 자녀라면 어린이집 우선 입소가 되나, 1순위 자격과 신청 방법 | 7 | 없음 | 2026-05-23 | - |
| disabled-women-childcare/장애아보육료기준 | 장애아동 종일반 63.4만원 방과후 31.7만원, 소득과 관계없이 지원되나 | 7 | 없음 | 2026-05-23 | - |
| disabled-women-childcare/정원초과우선입소 | 어린이집 정원이 다 찼는데 장애인 부모 자녀면 먼저 들어갈 수 있나 | 7 | 없음 | 2026-05-23 | - |
| dream-ladder | 꿈사다리 장학사업 드림장학금과 차이, 멘토링은 어떻게 하나요? | 8 | 없음 | 2026-05-23 | - |
| dream-ladder/대학생연계여부확인 | 꿈사다리 장학금 대학생도 받을 수 있나, 초·중·고 선발부터 대학 연계까지 | 7 | 없음 | 2026-05-23 | - |
| dream-ladder/신청자격사용처안내 | 복권기금 꿈사다리 장학금 신청 자격부터 학업장려비 사용처까지 | 7 | 없음 | 2026-05-23 | - |
| dream-ladder/저소득초중고선발기준 | 꿈사다리 장학금, 저소득층 초중고생 3,000명 선발 기준과 신청 방법 | 7 | 없음 | 2026-05-23 | - |
| dream-ladder/초등대학연계지원조건 | 초등 5학년부터 대학까지 연계 지원한다면 꿈사다리 장학금 지원 조건 | 7 | 없음 | 2026-05-23 | - |
| dream-scholarship | 드림장학금 꿈사다리와 차이, 해외유학과 국내진학 신청조건 | 8 | 없음 | 2026-05-23 | - |
| dream-scholarship/기초수급차상위우수학생 | 기초수급·차상위 고2~3 우수 학생이라면 드림장학금으로 해외유학 가능 | 7 | 없음 | 2026-05-23 | - |
| dream-scholarship/꿈사다리드림장학금비교 | 꿈사다리 장학금과 드림장학금 어떻게 다른가, 학년과 대상 기준 비교 | 7 | 없음 | 2026-05-23 | - |
| dream-scholarship/신청자격학업장려비 | 드림장학금 신청 자격부터 월 학업장려비 금액과 멘토링 지원까지 | 7 | 없음 | 2026-05-23 | - |
| dream-scholarship/저소득고교해외유학조건 | 드림장학금, 저소득 고등학생이 해외유학을 갈 수 있는 조건과 지원 내용 | 7 | 없음 | 2026-05-23 | - |
| dream-start | 드림스타트 사례관리와 건강·학습 서비스, 다른 사업과 중복여부 | 8 | 없음 | 2026-05-23 | - |
| dream-start/무료서비스내용 | 기초수급 가정의 0세에서 12세 아이라면 드림스타트에서 받을 수 있는 무료 서비스 | 7 | 없음 | 2026-05-23 | - |
| dream-start/신청자격7대영역 | 드림스타트 아동통합서비스 신청 자격과 건강 학습 사회성 7대 영역 지원 내용 | 7 | 없음 | 2026-05-23 | - |
| dream-start/일반가구신청 | 취약계층 아동 드림스타트, 일반 가구 아이도 신청할 수 있는 경우와 없는 경우 | 7 | 없음 | 2026-05-23 | - |
| dream-start/지역아동센터비교 | 드림스타트가 지역아동센터와 다른 점, 두 곳을 동시에 이용할 수 있는지 | 7 | 없음 | 2026-05-23 | - |
| drunk-driving | 음주운전 처벌 기준·형량·면허취소·2회 이상 가중 총정리 | 7 | 없음 | 2026-07-03 | - |
| drunk-driving/breath-test-refusal-repeat | 음주측정 거부·2회 이상 음주운전 가중처벌 | 7 | 없음 | 2026-07-03 | - |
| drunk-driving/drunk-driving-accident | 음주운전 사고·위험운전치사상, 보험·합의해도 처벌 | 7 | 없음 | 2026-07-03 | - |
| drunk-driving/license-revocation | 음주운전 면허취소·정지 기준과 5년 재취득 제한 | 7 | 없음 | 2026-07-03 | - |
| drunk-driving/penalty-standard | 음주운전 처벌 기준·형량, 0.03·0.08·0.2 구간별 총정리 | 7 | 없음 | 2026-07-03 | - |
| durunuri-social-insurance | 두루누리 사회보험료 지원 — 소규모 사업장 고용·연금보험료 80% 지원 | 7 | 없음 | - | - |
| durunuri-social-insurance/10인미만80%지원신청 | 직원 월급 270만원 미만에 10명 미만 사업장이라면 두루누리 80% 지원 받는 방법 | 7 | 없음 | 2026-05-23 | - |
| durunuri-social-insurance/2026신규가입36개월기준 | 2026 두루누리 사회보험료 80% 지원, 신규가입자 최대 36개월 기준 정리 | 7 | 없음 | 2026-05-23 | - |
| durunuri-social-insurance/고용보험국민연금절감신청 | 고용보험 국민연금 80% 절감, 두루누리 지원금 신청 방법과 조회 방법 | 7 | 없음 | 2026-05-23 | - |
| durunuri-social-insurance/지원대상10인미만소득기준 | 두루누리 사회보험료 지원 대상 확인, 10인 미만 사업장 월 270만원 기준 | 7 | 없음 | 2026-05-23 | - |
| dv-shelter-leaver-aid | 가정폭력 보호시설 퇴소자 자립지원금 대상과 주거지원, 취업훈련까지 | 8 | 없음 | 2026-05-23 | - |
| dv-shelter-leaver-aid/유자녀추가지원 | 퇴소자 자립지원금, 동반아동도 따로 받는지 | 7 | 없음 | 2026-06-18 | - |
| dv-shelter-leaver-aid/입소퇴소지원비교 | 가정폭력 피해자 지원금, 입소 중 받는 것과 퇴소 후 받는 것 어떻게 다른가 | 7 | 없음 | 2026-06-18 | - |
| dv-shelter-leaver-aid/퇴소전챙길항목 | 보호시설 퇴소 앞두고 있다면 챙겨야 할 자립지원금 항목 | 7 | 없음 | 2026-06-18 | - |
| dv-shelter-leaver-aid/퇴소후자립금조건 | 가정폭력 보호시설 퇴소 후 받는 자립지원금 금액과 신청 조건 | 7 | 없음 | 2026-06-18 | - |
| education-benefit | 교육급여 신청방법과 교육비 지원 차이, 바우처 받는 법 | 7 | 없음 | 2026-05-23 | - |
| education-benefit/고교학비무상교육과중복여부 | 교육급여 고교 학비 지원, 고교 무상교육과 중복 여부와 사립고 추가 지원 기준 | 7 | 없음 | 2026-05-23 | - |
| education-benefit/신청방법복지로원클릭학교신청 | 교육급여 신청 방법, 복지로·교육비 원클릭·주민센터 3가지 채널 절차 | 7 | 없음 | 2026-05-23 | - |
| education-benefit/중위소득50이하신청자격확인 | 교육급여 신청 자격, 기준중위소득 50% 이하 해당 여부 확인 방법 | 7 | 없음 | 2026-05-23 | - |
| education-benefit/초중고교육활동지원비금액표 | 교육급여 교육활동지원비 금액, 초 502,000원·중 699,000원·고 860,000원 바우처 | 7 | 없음 | 2026-05-23 | - |
| elderly-emergency-safety | 응급안전안심서비스 신청대상과 비용, 다른 노인복지 중복여부 | 8 | 없음 | 2026-05-23 | - |
| elderly-emergency-safety/ICT무상설치이유 | ICT 장비 무상 설치에 사용료까지 없는 이유와 신청 방법 | 7 | 없음 | 2026-05-23 | - |
| elderly-emergency-safety/무료신청대상장비 | 독거노인 응급안전안심서비스 무료 신청 대상과 설치 장비 종류 | 7 | 없음 | 2026-05-23 | - |
| elderly-emergency-safety/부모님응급신청절차 | 혼자 사는 부모님 응급상황 걱정된다면 신청 절차와 비용 확인 | 7 | 없음 | 2026-05-23 | - |
| elderly-emergency-safety/소득기준자격확인 | 소득기준 없이 누구나 되나, 2026 응급안전안심서비스 자격 기준 | 7 | 없음 | 2026-05-23 | - |
| elderly-hearing-aid | 노인 보청기 지원 총정리, 건강보험 급여 조건·본인부담·신청 절차 | 7 | 없음 | 2026-07-02 | - |
| elderly-hearing-aid/건강보험장애인보조기기급여131만조건 | 노인 보청기 지원, 건강보험·장애인 보조기기 급여 131만원 받는 조건 | 7 | 없음 | 2026-05-23 | - |
| elderly-hearing-aid/본인부담건강보험의료급여1종2종차이비교 | 노인 보청기 본인부담, 건강보험 vs 의료급여 1·2종 부담 차이 비교 | 7 | 없음 | 2026-05-23 | - |
| elderly-hearing-aid/신청절차청각장애등록급여지급단계 | 노인 보청기 지원 신청절차, 청각장애 등록부터 급여 지급까지 단계 | 7 | 없음 | 2026-05-23 | - |
| elderly-hearing-aid/지자체추가혜택지역별117만신청방법 | 노인 보청기 지원 지자체 추가 혜택, 지역별 최대 117만원 신청 방법 | 7 | 없음 | 2026-05-23 | - |
| elderly-job | 노인일자리 신청자격과 기초연금 중복여부, 활동 중 다치면? | 7 | 없음 | 2026-05-23 | - |
| elderly-job/2026유형별월급비교 | 2026 노인일자리 유형별 월급 비교, 공익활동에서 시장형까지 | 7 | 없음 | 2026-05-23 | - |
| elderly-job/60세일하고싶다면 | 60세 넘겼는데 일하고 싶다면 노인일자리 신청 방법과 절차 | 7 | 없음 | 2026-05-23 | - |
| elderly-job/공익활동사회서비스비교 | 노인일자리 공익활동 월 29만원, 사회서비스형 월 76만원 누가 받나 | 7 | 없음 | 2026-05-23 | - |
| elderly-job/노인일자리취업알선차이 | 노인일자리 vs 시니어 취업알선, 어떻게 다르고 어디 신청해야 하나 | 7 | 없음 | 2026-05-23 | - |
| employment-promotion | 고용촉진장려금 지원대상과 근로조건, 다른 장려금 중복여부 | 8 | 없음 | 2026-05-23 | - |
| employment-promotion/사전신청먼저이유 | 고용촉진장려금, 채용 전 꼭 확인할 것과 신청 시기 | 7 | 없음 | 2026-06-19 | - |
| employment-promotion/사전신청필수절차 | 고용촉진장려금 신청 절차와 채용 전 확인할 근로자 요건 | 7 | 없음 | 2026-06-19 | - |
| employment-promotion/채용지원금중복차이 | 고용장려금, 고용촉진장려금, 채용지원금 어떻게 다르고 중복 신청 되나 | 7 | 없음 | 2026-05-23 | - |
| employment-promotion/취약계층유형별지원금 | 고용촉진장려금 지원 대상과 금액, 취약계층 유형별 1인당 얼마나 나오나 | 7 | 없음 | 2026-05-23 | - |
| energy-voucher | 에너지바우처 신청방법과 사용처, 전기요금 복지할인 중복여부 | 8 | O | 2026-07-31 | - |
| energy-voucher/냉방지원금 | 냉방지원금 2026, 에너지바우처 여름 냉방비 최대 70만원 | 7 | 없음 | 2026-06-29 | - |
| energy-voucher/당겨쓰기 | 에너지바우처 하절기 안 쓰면? 동절기 당겨쓰기·미차감 신청 | 7 | 없음 | 2026-06-26 | - |
| energy-voucher/대상자확인 | 에너지바우처 대상자 확인 방법 / 자동신청 되는 경우와 새로 신청해야 하는 경우 | 7 | 없음 | 2026-05-23 | - |
| energy-voucher/사용처 | 에너지바우처는 전기·도시가스·LPG 모두 쓸 수 있다 / 사용처와 가맹점 | 7 | 없음 | 2026-05-23 | - |
| free-legal-aid | 무료 법률 구조 서비스 | 7 | 없음 | 2026-05-23 | - |
| free-legal-aid/무료법률구조대상사건민사가사형사종류 | 무료법률구조 대상 사건: 민사·가사·형사·행정 종류 총정리 | 7 | 없음 | 2026-05-23 | - |
| free-legal-aid/무료법률구조신청방법132번온라인방문 | 무료법률구조 신청 방법: ☎ 132·온라인·방문 3가지 | 7 | 없음 | 2026-05-23 | - |
| free-legal-aid/무료법률구조신청자격소득기준중위125 | 무료법률구조 신청 자격: 소득 기준 중위소득 125% 이하 | 7 | 없음 | 2026-05-23 | - |
| free-legal-aid/법률상담무료기준소송구조차이전액면제 | 무료 법률상담 vs 소송구조: 차이와 전액 면제 기준 | 7 | 없음 | 2026-05-23 | - |
| general-student-loan | 일반상환 학자금대출 재학중 이자와 상환시기, 국가장학금과 차이 | 8 | 없음 | 2026-05-23 | - |
| general-student-loan/일반상환vs취업후상환학자금선택기준 | 일반상환 vs 취업 후 상환 학자금대출 선택 기준 완전 정리 | 7 | 없음 | 2026-05-23 | - |
| general-student-loan/일반상환학자금2026금리이자 | 일반상환학자금대출 2026년 금리와 이자 계산 방법 | 7 | 없음 | 2026-05-23 | - |
| general-student-loan/일반상환학자금거치기간최대선택 | 일반상환학자금대출 거치기간, 최장 10년 어떻게 계산하나 | 7 | O | 2026-07-31 | - |
| general-student-loan/일반상환학자금졸업후상환방법 | 일반상환학자금대출 졸업 후 상환 방법과 절차 | 7 | 없음 | 2026-05-23 | - |
| hidden-insurance-money | 숨은보험금 조회 방법과 종류별 차이, 소멸시효까지 정리 | 7 | O | 2026-07-08 | - |
| hidden-insurance-money/claim-and-refund | 숨은보험금청구 방법과 환급 절차, 조회 후 어떻게 받나 | 7 | 없음 | 2026-07-08 | - |
| hidden-insurance-money/how-to-find | 숨은보험금 찾기, 내보험찾아줌 사이트 바로가기와 조회하기 | 7 | 없음 | 2026-07-08 | - |
| hidden-insurance-money/inheritance-check | 가족 사망 숨은보험금 조회, 피상속인 보험계약 확인 방법 | 7 | 없음 | 2026-07-08 | - |
| hidden-insurance-money/limitation-period | 숨은보험금 소멸시효 3년, 언제까지 찾아야 하나 | 7 | 없음 | 2026-07-08 | - |
| highway-toll-discount | 고속도로 통행료 감면 확대 2026 하반기, 장애인·유공자 세대원차·다자녀 주말 | 7 | O | 2026-07-21 | - |
| highway-toll-discount/다자녀 | 다자녀 고속도로 통행료 감면, 주말 감면으로 가계 부담 완화 | 7 | 없음 | 2026-07-01 | - |
| highway-toll-discount/신청등록 | 고속도로 통행료 감면 신청·하이패스 등록 방법, 문의 1588-2504 | 7 | 없음 | 2026-07-01 | - |
| highway-toll-discount/장애인유공자 | 장애인·유공자 고속도로 통행료 감면, 세대원 장기 임차·대여차 50% | 7 | 없음 | 2026-07-01 | - |
| highway-toll-discount/한국도로공사다자녀등록 | 한국도로공사 다자녀등록 어떻게 하나, 대상·신청일·필요정보 총정리 | 7 | 없음 | 2026-07-22 | - |
| home-equity-pension | 주택연금 가입조건과 지급방식, 세금혜택은 어떻게 되나요? | 7 | 없음 | 2026-05-23 | - |
| home-equity-pension/3억6억10억월수령액 | 주택연금 월 수령액 계산, 3억·6억·10억 주택 연령별 실수령액 비교 | 7 | 없음 | 2026-05-23 | - |
| home-equity-pension/55세가입조건신청방법 | 주택연금 가입 조건, 55세 이상 공시가 12억 이하 주택 소유자 신청 방법 | 7 | 없음 | 2026-05-23 | - |
| home-equity-pension/기초연금중복감액여부 | 주택연금 받으면 기초연금 감액되나, 중복 수령과 소득 인정액 영향 | 7 | 없음 | 2026-05-23 | - |
| home-equity-pension/해지단점주의사항 | 주택연금 해지하면 어떻게 되나, 단점과 해지 시 주의사항 총정리 | 7 | 없음 | 2026-05-23 | - |
| housing-benefit | 주거급여 신청자격과 임차·자가가구 지원, 다른 급여 중복여부 | 7 | 없음 | 2026-05-23 | - |
| housing-benefit/1인가구소득기준임차급여 | 주거급여 1인 가구 소득 기준과 임차급여 금액 지역별 정리 | 7 | 없음 | 2026-05-23 | - |
| housing-benefit/기초수급자임차급여신청 | 월세 내고 있는 기초수급자라면 주거급여 임차급여 신청 방법과 조건 | 7 | 없음 | 2026-05-23 | - |
| housing-benefit/임차수선유지급여비교 | 주거급여 임차급여와 수선유지급여 어떻게 다른가, 대상과 금액 비교 | 7 | 없음 | 2026-05-23 | - |
| housing-benefit/중위소득48이하신청기준 | 중위소득 48% 이하라면 주거급여 탈락 없이 신청할 수 있는 기준과 절차 | 7 | 없음 | 2026-05-23 | - |
| illegal-loan-prevention | 불법사금융예방대출 신청자격과 완제자 인센티브, 금리는 얼마 | 7 | 없음 | 2026-05-23 | - |
| illegal-loan-prevention/금리한도연9912퍼센트조건 | 불법사금융예방대출 금리와 한도, 연 9.9~12.5% 실제 조건 | 7 | 없음 | 2026-05-23 | - |
| illegal-loan-prevention/신청방법앱센터방문당일대출 | 불법사금융예방대출 신청 방법, 앱·센터 방문 예약부터 당일 대출까지 | 7 | 없음 | 2026-05-23 | - |
| illegal-loan-prevention/신청자격신용평점하위20기준 | 불법사금융예방대출 신청 자격, 신용평점 하위 20% 이하 기준 확인 | 7 | 없음 | 2026-05-23 | - |
| illegal-loan-prevention/햇살론비교신용낮은사람유리상품 | 불법사금융예방대출 vs 햇살론, 신용 낮은 사람이 유리한 상품 비교 | 7 | 없음 | 2026-05-23 | - |
| infant-childcare-fee | 영유아보육료 본인부담과 가정양육수당 차이, 누리과정까지 | 8 | 없음 | 2026-05-23 | - |
| infant-childcare-fee/가정양육수당어린이집보육료차이 | 영유아보육료와 가정양육수당 중 뭘 신청하나, 어린이집 다니면 갈린다 | 7 | 없음 | 2026-05-23 | - |
| infant-childcare-fee/누리과정3세5세유아학비비교 | 만 3~5세 누리과정, 어린이집·유치원 모두 무료 — 영유아보육료와 차이 | 7 | 없음 | 2026-05-23 | - |
| infant-childcare-fee/신청방법복지로행정복지센터절차 | 영유아보육료 신청 방법, 복지로·행정복지센터 5단계 절차와 필요 서류 | 7 | 없음 | 2026-05-23 | - |
| infant-childcare-fee/연령별월51만45만38만지원금액 | 영유아보육료 얼마 나오나 조회하기, 0세 58만 4천·1세 51만 5천·2세 42만 6천원 | 7 | 없음 | 2026-05-23 | - |
| infant-health-checkup | 영유아 건강검진 신청방법과 비용, 결과 이상 있으면 어떻게 하나요? | 8 | 없음 | 2026-05-23 | - |
| infant-health-checkup/검진시기8회차수표 | 영유아 건강검진 검진 시기, 8회 차수와 월령별 핵심 항목 한눈에 | 7 | 없음 | 2026-05-23 | - |
| infant-health-checkup/발달이상의심시정밀검사연계 | 영유아 건강검진 발달 이상 의심 시, 정밀검사 비용 지원과 연계 절차 | 7 | 없음 | 2026-05-23 | - |
| infant-health-checkup/시기놓치면어떻게되나 | 영유아 건강검진 시기 놓치면 어떻게 되나, 대처법과 잔여 차수 확인 방법 | 7 | 없음 | 2026-05-23 | - |
| infant-health-checkup/예약방법지정기관찾기 | 영유아 건강검진 예약 방법, 가까운 지정 의료기관 찾고 무료로 받는 절차 | 7 | 없음 | 2026-05-23 | - |
| inheritance-division | 상속재산 분할·법정상속분·유류분·상속세 총정리 | 7 | 없음 | 2026-07-02 | - |
| inheritance-division/법정상속분 | 법정상속분 계산, 배우자 1.5 대 자녀 1 비율 | 7 | 없음 | 2026-07-02 | - |
| inheritance-division/상속세 | 상속세 계산·신고기한 6개월·공제·세율 총정리 | 7 | 없음 | 2026-07-02 | - |
| inheritance-division/상속재산분할 | 상속재산분할협의서·협의분할·심판분할 방법 | 7 | 없음 | 2026-07-02 | - |
| inheritance-division/유류분 | 유류분 계산·반환청구, 못 받은 상속분 되찾기 | 7 | 없음 | 2026-07-02 | - |
| k-pass-modu-card | K-패스 모두의카드, 신청·전환·차이·환급 총정리 | 7 | 없음 | 2026-07-07 | - |
| k-pass-modu-card/general-vs-plus-type | 모두의카드 일반형·플러스형 차이, 3천원 기준 | 7 | 없음 | 2026-07-07 | - |
| k-pass-modu-card/refund-rate-by-target | K패스 청년·저소득·어르신 환급률 비교(기본형) | 7 | 없음 | 2026-07-07 | - |
| k-pass-modu-card/temporary-boost-2026 | 2026년 4~9월 K패스 모두의카드 한시 상향 총정리 | 7 | 없음 | 2026-07-07 | - |
| k-pass-modu-card/what-is-modu-card | K패스 모두의카드란? 신청·전환 없이 자동 적용되는 이유 | 7 | 없음 | 2026-07-07 | - |
| leap-loan | 새도약론 대출한도와 새도약기금 차이, 특별채무조정까지 | 7 | 없음 | 2026-05-23 | - |
| leap-loan/새도약론새도약기금새출발기금차이 | 새도약론·새도약기금·새출발기금 — 헷갈리는 세 제도 차이 | 7 | 없음 | 2026-05-23 | - |
| leap-loan/새도약론소각채무탕감조건 | 새도약기금 소각 대상인지 확인하고 채무 탕감 신청하는 법 | 7 | 없음 | 2026-05-23 | - |
| leap-loan/새도약론신청자격대상자확인 | 새도약론 신청자격 — 대상자 여부 확인 방법 | 7 | 없음 | 2026-05-23 | - |
| leap-loan/새도약론취급기관대부업체목록 | 새도약론 취급 금융기관·대부업체 목록과 신청처 | 7 | 없음 | 2026-05-23 | - |
| learning-card | 국민내일배움카드 신청자격과 자기부담금, 수강 가능한 훈련과정 | 7 | 없음 | 2026-05-23 | - |
| learning-card/college-student | 내일배움카드 대학생 신청, 졸업까지 수업연한 2년 이내면 가능 | 7 | 없음 | 2026-07-10 | - |
| learning-card/contract-worker | 계약직·기간제도 내일배움카드 되나, 200만원 추가지원 대상 | 7 | 없음 | 2026-07-10 | - |
| learning-card/국취제 | 국민취업지원제도와 내일배움카드 같이 받나, 훈련 연계 | 7 | 없음 | 2026-06-26 | - |
| learning-card/실업급여병행 | 실업급여 받는 중에 내일배움카드 쓰면 구직활동으로 인정되나 | 7 | 없음 | 2026-05-23 | - |
| legal-aid-system | 법률구조제도 소득기준과 소송대리 신청절차, 비용은 얼마나 드나요? | 7 | 없음 | 2026-05-23 | - |
| legal-aid-system/무료상담신청방법전화방문온라인 | 대한법률구조공단 무료 상담 신청 방법, 전화·방문·온라인 예약 절차 | 7 | 없음 | 2026-05-23 | - |
| legal-aid-system/법률구조공단vs법률홈닥터vs마을변호사 | 법률구조공단 vs 법률홈닥터 vs 마을변호사, 무료 법률 지원 차이 | 7 | 없음 | 2026-05-23 | - |
| legal-aid-system/소송대리비용무료변호사지원범위 | 법률구조공단 소송대리 비용 얼마인가, 무료 변호사 신청 절차는 | 7 | 없음 | 2026-05-23 | - |
| legal-aid-system/중위소득125이하지원대상 | 법률구조 지원 대상, 중위소득 125% 이하인지 확인하기 | 7 | O | 2026-05-23 | - |
| lifelong-education-voucher | 평생교육이용권 유형별 신청자격과 지원금액, 수강 가능한 강좌 | 7 | 없음 | 2026-05-23 | - |
| lifelong-education-voucher/평생교육이용권대상자기초차상위 | 평생교육이용권 대상자 — 기초·차상위 수급자 신청 자격 완전 정리 | 7 | 없음 | 2026-05-23 | - |
| lifelong-education-voucher/평생교육이용권사용가능기관강좌확인 | 평생교육이용권 사용 가능 기관·강좌 확인 방법 2026 | 7 | 없음 | 2026-05-23 | - |
| lifelong-education-voucher/평생교육이용권신청기간학습계획서작성 | 평생교육이용권 신청 기간과 학습계획서 작성 방법 2026 | 7 | 없음 | 2026-05-23 | - |
| lifelong-education-voucher/평생교육이용권지원금우수이용자70만원 | 평생교육이용권 지원금액 — 우수이용자 70만원 조건과 신청 방법 | 7 | 없음 | 2026-05-23 | - |
| long-term-care-elderly | 노인장기요양 등급별 월한도액과 시설·재가급여 차이, 본인부담 감경까지 | 8 | O | 2026-05-23 | - |
| long-term-care-elderly/2026등급1인지지원기준 | 2026 노인장기요양 등급 기준, 1등급부터 인지지원등급까지 한눈에 | 7 | 없음 | 2026-05-23 | - |
| long-term-care-elderly/facility-contract-guide | 장기요양기관 찾고 급여계약서 확인해서 계약하는 법 | 7 | 없음 | 2026-07-17 | - |
| long-term-care-elderly/recognition-survey-items | 장기요양 인정조사 신청하고 방문조사 미리 준비하는 법 | 7 | 없음 | 2026-07-17 | - |
| long-term-care-elderly/치매부모장기요양신청절차 | 부모님 치매 진단 받았다면 장기요양 신청부터 등급 판정까지 절차 | 7 | 없음 | 2026-05-23 | - |
| low-income-energy-efficiency | 저소득층 에너지 효율 개선사업 | 7 | 없음 | 2026-05-23 | - |
| low-income-energy-efficiency/저소득에너지효율개선신청방법주민센터절차 | 저소득층 에너지 효율 개선 신청 방법과 주민센터 절차 | 7 | 없음 | 2026-05-23 | - |
| low-income-energy-efficiency/저소득에너지효율개선신청자격기초수급차상위 | 저소득층 에너지 효율 개선 신청 자격 기초생활수급자 차상위계층 | 7 | 없음 | 2026-05-23 | - |
| low-income-energy-efficiency/저소득에너지효율개선지원금액가구당243만원 | 저소득층 에너지 효율 개선 지원 금액 가구당 최대 243만원 | 7 | 없음 | 2026-05-23 | - |
| low-income-energy-efficiency/저소득에너지효율개선지원항목단열창호보일러에어컨 | 저소득층 에너지 효율 개선 지원 항목 단열 창호 보일러 에어컨 | 7 | 없음 | 2026-05-23 | - |
| maternal-newborn-care | 산모신생아 건강관리 신청기한과 본인부담, 다른 출산지원 중복여부 | 9 | 없음 | 2026-05-23 | - |
| maternal-newborn-care/2026본인부담금중위소득별 | 2026 산모신생아 건강관리 본인부담금, 중위소득별 지원 비율 총정리 | 7 | 없음 | 2026-05-23 | - |
| maternal-newborn-care/산후도우미산후조리원비용비교 | 산후도우미와 산후조리원 비용 비교, 정부 지원과 사비 차이 | 7 | 없음 | 2026-05-23 | - |
| maternal-newborn-care/신청기간출산후60일절차 | 산모신생아 건강관리 신청 기간, 출산 전 40일부터 출산 후 60일 이내 | 7 | 없음 | 2026-05-23 | - |
| maternal-newborn-care/쌍둥이희귀질환예외지원 | 산모신생아 건강관리 쌍둥이·희귀질환 예외 지원, 소득 기준 초과해도 가능 | 7 | 없음 | 2026-05-23 | - |
| national-happiness-card | 국민행복카드 발급방법과 사용처, 카드사별 혜택 차이 | 8 | 없음 | 2026-05-23 | - |
| national-happiness-card/23종바우처사용처잔액조회 | 국민행복카드 23종 바우처 사용처와 잔액 조회 방법 총정리 | 7 | 없음 | 2026-05-23 | - |
| national-happiness-card/남편명의부부중누가신청 | 국민행복카드 남편 명의로 신청 가능한지, 부부 중 누가 신청해야 하나 | 7 | 없음 | 2026-05-23 | - |
| national-happiness-card/발급조건카드사신청 | 국민행복카드 발급 조건과 5개 카드사 신청 방법, 임신 후 즉시 신청 가능 | 7 | 없음 | 2026-05-23 | - |
| national-happiness-card/임신확인후발급순서 | 국민행복카드 임신 확인 후 발급 순서, 임신확인서부터 카드 수령까지 | 7 | 없음 | 2026-05-23 | - |
| national-health-checkup | 국가건강검진 대상자와 연령별 검사항목, 암검진 비용까지 | 7 | O | 2026-06-28 | - |
| national-health-checkup/국가건강검진대상자짝수홀수출생연도 | 국가건강검진 대상자: 짝수·홀수 출생연도 기준 완전 정리 | 7 | 없음 | 2026-05-23 | - |
| national-health-checkup/국가건강검진안하면불이익의무여부 | 국가건강검진 안 받으면 불이익이 있나요? 의무 여부 총정리 | 7 | 없음 | 2026-05-23 | - |
| national-health-checkup/국가건강검진연령별항목검사목록 | 국가건강검진 연령별 항목·검사 목록 2026년 기준 | 7 | 없음 | 2026-05-23 | - |
| national-health-checkup/국가건강검진예약방법지정병원 | 국가건강검진 예약 방법과 지정 병원 찾기 | 7 | 없음 | 2026-05-23 | - |
| newlywed-housing-support | 신혼부부 주거지원 행복주택 자격과 디딤돌 한도, 자산기준까지 | 7 | 없음 | 2026-05-23 | - |
| newlywed-housing-support/LH매입임대1순위소득자산최장14년 | LH 신혼부부 매입임대 1순위 소득·자산 기준, 최장 14년 거주 | 7 | 없음 | 2026-05-23 | - |
| newlywed-housing-support/신생아특례전세대출vsLH전세임대 | 신생아특례 전세자금대출 vs LH 신혼부부 전세임대 차이 비교 | 7 | 없음 | 2026-05-23 | - |
| newlywed-housing-support/월임대료보증금임대보증금5% | 신혼부부 전세임대 월임대료·임대보증금 5% 계산법 | 7 | 없음 | 2026-05-23 | - |
| newlywed-housing-support/전세임대1자격혼인7년신청방법 | 2026 신혼·신생아 전세임대 I 자격, 혼인 7년 이내 신청법 | 7 | 없음 | 2026-05-23 | - |
| parent-allowance | 부모급여 지급일과 신청방법, 어린이집 이용하면 어떻게 되나요? | 7 | 없음 | 2026-05-23 | - |
| parent-allowance/신청지급일 | 부모급여 신청 방법과 지급일 / 출생 후 60일 기한 놓치면 소급 안 된다 | 7 | 없음 | 2026-05-23 | - |
| parent-allowance/어린이집전환 | 어린이집 보내면 부모급여 못 받나, 내 차액 얼마인지 확인하기 | 7 | O | 2026-07-31 | - |
| parent-allowance/육아휴직중복 | 육아휴직급여 받으면서 부모급여도 받을 수 있나 / 중복 수급 정리 | 7 | 없음 | 2026-05-23 | - |
| parent-allowance/지급금액 | 2026년 부모급여 0세 100만원·1세 50만원, 아동수당까지 같이 신청되나 | 7 | 없음 | 2026-05-23 | - |
| platform-worker-insurance | 특고·플랫폼 종사자 고용보험 총정리, 적용 직종·월 보수 80만원 기준·실업급여 | 7 | 없음 | 2026-07-02 | - |
| platform-worker-insurance/보험료사업주절반부담두루누리지원율 | 특수형태근로자 고용보험 보험료, 사업주 절반 부담과 두루누리 지원 | 7 | 없음 | 2026-05-23 | - |
| platform-worker-insurance/실업급여가입후받는조건금액신청방법 | 특수형태근로자 실업급여, 고용보험 가입 후 받을 수 있는 조건 | 7 | 없음 | 2026-05-23 | - |
| platform-worker-insurance/적용제외신청원하지않으면빠지는방법 | 특수형태근로자 고용보험 적용제외 신청, 원하지 않으면 빠지는 방법 | 7 | 없음 | 2026-05-23 | - |
| platform-worker-insurance/적용직종12개월보수80만기준해당여부 | 특수형태근로자 고용보험 적용 직종과 월 보수 80만원 기준 | 7 | 없음 | 2026-05-23 | - |
| pregnancy-medical-benefit | 임신·출산 진료비 지원 사용기간과 사용처, 다태아 추가금액까지 | 7 | O | 2026-05-23 | - |
| pregnancy-medical-benefit/다태아지원 | 쌍둥이 임신이면 국민행복카드를 더 받는다, 다태아 추가 지원 기준과 금액 | 7 | 없음 | 2026-05-23 | - |
| pregnancy-medical-benefit/사용처범위 | 국민행복카드 사용처, 약국과 한방 비급여 항목까지 되는 건가 | 7 | 없음 | 2026-05-23 | - |
| pregnancy-medical-benefit/잔액사용기간 | 임신 중 쓰고 남은 국민행복카드 잔액, 출산 후 아이 진료비로도 쓸 수 있나 | 7 | 없음 | 2026-05-23 | - |
| pregnancy-medical-benefit/지원금액신청 | 국민행복카드 임신 출산 진료비, 일태아 100만원 다태아 140만원 신청 방법 | 7 | 없음 | 2026-05-23 | - |
| public-housing-sale | 공공분양주택 청약자격과 특별공급 유형, 당첨자 선정방식 | 7 | 없음 | 2026-05-23 | - |
| public-housing-sale/공공분양vs공공임대뭘신청해야하나 | 공공분양 vs 공공임대 — 뭘 신청해야 하나 | 7 | 없음 | 2026-05-23 | - |
| public-housing-sale/공공분양vs민간분양유리한점차이 | 공공분양 vs 민간분양 — 어떤 게 나에게 유리한가 | 7 | 없음 | 2026-05-23 | - |
| public-housing-sale/공공분양당첨후계약입주일정절차 | 공공분양 당첨 후 계약·입주까지 일정과 절차 | 7 | 없음 | 2026-05-23 | - |
| public-housing-sale/공공분양일반공급청약자격소득자산기준 | 공공분양 일반공급 청약자격 — 소득·자산 기준 | 7 | 없음 | 2026-05-23 | - |
| public-rental-housing | 공공임대주택 유형별 신청자격과 임차료, 공공분양과 차이 | 7 | 없음 | 2026-05-23 | - |
| public-rental-housing/50년공공임대신청자격월소득기준 | 50년 공공임대 신청자격 — 월소득 기준 얼마까지 | 7 | 없음 | 2026-05-23 | - |
| public-rental-housing/LH공공임대월세임대료산정방식 | LH 공공임대 월세 임대료 어떻게 산정되나 | 7 | 없음 | 2026-05-23 | - |
| public-rental-housing/공공임대입주단점실거주자 | 공공임대 실제 단점 — 입주자가 말하는 불편한 점 | 7 | 없음 | 2026-05-23 | - |
| public-rental-housing/공공임대청약공고신청순서서류 | 공공임대 청약 공고 뜨면 신청 순서와 서류 | 7 | 없음 | 2026-05-23 | - |
| saeil-women-intern | 새일여성인턴 (경력 단절 여성 취업 지원) | 7 | 없음 | 2026-05-23 | - |
| saeil-women-intern/WUP경력단절예방프로그램신청 | 여성새로일하기센터 W-UP클래스 경력단절예방 신청법 | 7 | 없음 | 2026-05-23 | - |
| saeil-women-intern/가까운센터찾기이용절차 | 여성새로일하기센터 가까운 센터 찾기·이용 절차 | 7 | 없음 | 2026-05-23 | - |
| saeil-women-intern/경력단절직업훈련무료취업연계 | 여성새로일하기센터 경력단절여성 직업훈련 무료, 취업 연계 과정 | 7 | 없음 | 2026-05-23 | - |
| saeil-women-intern/새일여성인턴기간급여채용연계 | 새일여성인턴 2026 인턴 기간·급여·채용 연계 조건 | 7 | 없음 | 2026-05-23 | - |
| self-employed-employment-insurance | 자영업자 고용보험 등급별 보험료와 구직급여, 폐업사유 인정기준 | 7 | 없음 | 2026-08-01 | - |
| self-employed-employment-insurance/7등급보험료율50to80지원기준 | 자영업자고용보험 7등급 보험료·50to80% 지원 기준 (2026) | 7 | 없음 | 2026-05-23 | - |
| self-employed-employment-insurance/가입방법근로복지공단온라인 | 자영업자고용보험 가입 방법, 근로복지공단 온라인 신청 | 7 | 없음 | 2026-05-23 | - |
| self-employed-employment-insurance/직원있는사업주vs1인자영업차이 | 직원 있는 사업주 vs 1인 자영업자 고용보험 가입 차이 | 7 | 없음 | 2026-05-23 | - |
| self-employed-employment-insurance/폐업후실업급여1년가입조건 | 자영업자고용보험 폐업 후 실업급여 수급, 1년 가입 조건 | 7 | 없음 | 2026-05-23 | - |
| seomin-financial-center | 서민금융통합지원센터 이용자격과 채무조정, 연계 금융상품까지 | 7 | 없음 | 2026-05-23 | - |
| seomin-financial-center/대출종류한도서민금융상품 | 서민금융통합지원센터에서 받을 수 있는 대출 종류와 한도 | 7 | 없음 | 2026-05-23 | - |
| seomin-financial-center/신용회복위원회채무조정비교 | 서민금융통합지원센터 vs 신용회복위원회, 채무조정 어디서 받아야 하나 | 7 | 없음 | 2026-05-23 | - |
| seomin-financial-center/예약방법앱전화온라인 | 서민금융통합지원센터 예약 방법, 앱·전화·온라인으로 상담받는 절차 | 7 | 없음 | 2026-05-23 | - |
| seomin-financial-center/이용대상신청자격 | 서민금융통합지원센터 이용 대상, 어떤 사람이 신청할 수 있나 | 7 | 없음 | 2026-05-23 | - |
| seoul-childbirth-housing-support | 서울시 출산 무주택가구 주거비 지원 조건과 신청방법 | 7 | 없음 | 2026-07-08 | - |
| seoul-childbirth-housing-support/amount-payment-method | 주거비 지원금 얼마 받나, 월30만원 4회 분할지급 방식 | 7 | 없음 | 2026-07-08 | - |
| seoul-childbirth-housing-support/eligibility-requirements | 자녀출산 무주택가구 주거비 지원, 자격요건 총정리 중위소득180% | 7 | 없음 | 2026-07-08 | - |
| seoul-childbirth-housing-support/extension-and-overlap | 아이 또 낳으면 연장되나, 다자녀 최장4년·중복 안되는 사업 | 7 | 없음 | 2026-07-08 | - |
| seoul-childbirth-housing-support/how-to-apply | 자녀출산 주거비 지원 신청방법, 몽땅정보통 서류 5종 | 7 | 없음 | 2026-07-08 | - |
| severance-pay | 퇴직금 계산법·지급기한 14일·받는 법 한눈에 | 7 | 없음 | 2026-07-02 | - |
| severance-pay/세금 | 퇴직금 세금(퇴직소득세), 얼마 떼고 왜 부담이 낮나 | 7 | 없음 | 2026-07-02 | - |
| severance-pay/중간정산 | 퇴직금 중간정산 되는 사유, 무주택 주택구입·전세·요양 | 7 | 없음 | 2026-07-02 | - |
| severance-pay/지급기한 | 퇴직금 지급기한 14일, 안 주면 미지급 신고하는 법 | 7 | 없음 | 2026-07-02 | - |
| severance-pay/청구권 | 못 받은 퇴직금 청구, 소멸시효 3년과 수급권 보호 | 7 | 없음 | 2026-07-02 | - |
| small-biz-credit-recovery | 소상공인 신용회복 지원 | 7 | 없음 | 2026-05-23 | - |
| small-biz-credit-recovery/소상공인신속신용사면탕감신청방법 | 소상공인 신속 신용사면·채무 탕감 신청 방법 2026 | 7 | 없음 | 2026-05-23 | - |
| small-biz-credit-recovery/소상공인신용회복신청자격연체기준 | 소상공인 신용회복 신청 자격과 연체 기준 2026 | 7 | 없음 | 2026-05-23 | - |
| small-biz-credit-recovery/소상공인신용회복위원회새출발기금비교 | 소상공인 신용회복위원회 vs 새출발기금 차이 비교 2026 | 7 | 없음 | 2026-05-23 | - |
| small-biz-credit-recovery/소상공인신용회복후신용점수회복 | 소상공인 신용회복 후 신용점수 회복 방법과 기간 | 7 | 없음 | 2026-05-23 | - |
| small-biz-hope-return | 소상공인 희망리턴패키지 총정리, 폐업 점포철거비·전직장려수당·재창업 지원 | 7 | 없음 | 2026-07-02 | - |
| small-biz-hope-return/신청자격폐업소상공인60일운영조건확인 | 희망리턴패키지 신청자격, 폐업 소상공인 60일 이상 운영 조건 확인 | 7 | 없음 | 2026-05-23 | - |
| small-biz-hope-return/재창업지원법률채무조정컨설팅원스톱 | 희망리턴패키지 재창업 지원, 법률·채무조정·컨설팅 한 번에 받기 | 7 | 없음 | 2026-05-23 | - |
| small-biz-hope-return/점포철거비2026최대600만조건절차신청 | 희망리턴패키지 점포철거비, 2026년 최대 600만원 지원 조건과 절차 | 7 | 없음 | 2026-05-23 | - |
| small-biz-hope-return/취업지원전직장려수당100만원받는방법 | 희망리턴패키지 취업지원, 전직장려수당 최대 100만원 받는 방법 | 7 | 없음 | 2026-05-23 | - |
| sme-innovation-voucher | 중소기업 혁신바우처 신청자격과 사용처, 비수도권 우대까지 | 7 | 없음 | 2026-05-23 | - |
| sme-innovation-voucher/혁신바우처공고신청자격지원금액 | 혁신바우처 2·3차 공고 신청자격과 지원 금액 | 7 | 없음 | 2026-05-23 | - |
| sme-innovation-voucher/혁신바우처공급기업수행기관선택 | 혁신바우처 공급기업·수행기관 어떻게 선택하나 | 7 | 없음 | 2026-05-23 | - |
| sme-innovation-voucher/혁신바우처사업계획서심사기준 | 혁신바우처 사업계획서 핵심 항목과 심사 기준 | 7 | 없음 | 2026-05-23 | - |
| sme-innovation-voucher/혁신바우처플랫폼일반재기신청절차 | 혁신바우처 플랫폼 등록 — 일반·재기바우처 신청 절차 | 7 | 없음 | 2026-05-23 | - |
| startup-support | 창업사업화지원 신청자격과 딥테크 특화, TIPS 중복여부까지 | 7 | 없음 | 2026-05-23 | - |
| startup-support/단계별비교예창패초기도약차이 | 정부 창업지원 단계별 비교, 예창패·초기창업·도약 어떻게 다른가 | 7 | 없음 | 2026-05-23 | - |
| startup-support/예비창업패키지최대8000만신청자격 | 예비창업패키지 2026 최대 8000만원 사업화 자금 신청 자격 | 7 | 없음 | 2026-05-23 | - |
| startup-support/창업도약패키지업력3to7년최대2억 | 창업도약패키지 2026, 업력 3-7년 기업 최대 2억원 신청법 | 7 | 없음 | 2026-05-23 | - |
| startup-support/청년창업사관학교만39세1억평균7천 | 청년창업사관학교 2026, 만 39세 이하 평균 7000만원 최대 1억원 | 7 | 없음 | 2026-05-23 | - |
| super-isa | 슈퍼ISA(생산적 금융 ISA) 청년형·국민성장, 출시일·개설 총정리 | 7 | 없음 | 2026-07-07 | - |
| super-isa/launch-schedule | 슈퍼ISA 출시일·개설 시점, 언제부터 가능할까(미확정) | 7 | 없음 | 2026-07-07 | - |
| super-isa/national-growth-isa | 국민성장 ISA 가입대상·국내투자, 기존 ISA와 중복가입 | 7 | 없음 | 2026-07-07 | - |
| super-isa/vs-existing-isa | 슈퍼ISA vs 기존 ISA 차이·세제혜택·중복가입 총정리 | 8 | 없음 | 2026-07-07 | - |
| super-isa/youth-isa | 청년형 ISA 가입대상·혜택, 청년미래적금과 중복 불가 | 8 | 없음 | 2026-07-07 | - |
| tips-program | TIPS 팁스 신청자격과 선정절차, 스케일업 TIPS는 뭐가 다른가요? | 7 | 없음 | 2026-05-23 | - |
| tips-program/팁스운영사선정매칭절차 | TIPS 운영사 선정·매칭 절차 — IR부터 선정까지 | 7 | 없음 | 2026-05-23 | - |
| tips-program/팁스지원자격스타트업단계기준 | TIPS 지원자격 — 스타트업 단계별 신청 기준 총정리 | 7 | 없음 | 2026-05-23 | - |
| tips-program/팁스창업사업화RD지원금 | TIPS 창업사업화·R&D 지원금 금액과 사용 조건 총정리 | 7 | 없음 | 2026-05-23 | - |
| tips-program/팁스프로그램종류트랙차이 | TIPS 프로그램 종류·트랙 차이 — 일반·딥테크·포스트·글로벌 비교 | 7 | 없음 | 2026-05-23 | - |
| traffic-accident | 교통사고 형사처벌·12대 중과실·합의·손해배상 총정리 | 7 | 없음 | 2026-07-03 | - |
| traffic-accident/accident-response-hit-and-run | 교통사고 후 조치·뺑소니(도주), 그 자리서 뭘 해야 하나 | 7 | 없음 | 2026-07-03 | - |
| traffic-accident/compensation-fault-ratio | 교통사고 손해배상·과실비율, 합의금 어떻게 정해지나 | 7 | 없음 | 2026-07-03 | - |
| traffic-accident/criminal-penalty-12-negligence | 교통사고 12대 중과실과 형사처벌, 보험·합의해도 처벌되나 | 7 | 없음 | 2026-07-03 | - |
| traffic-accident/settlement-criminal-agreement | 교통사고 합의·형사합의, 처벌 면하고 감형받는 법 | 7 | 없음 | 2026-07-03 | - |
| travel-duty-free | 해외여행 면세 한도 800달러, 술·담배·향수 별도와 자진신고 | 8 | 없음 | 2026-07-01 | - |
| travel-duty-free/family-limit | 해외여행 면세한도 가족합산 되나, 1인 800달러 기준 확인하기 | 7 | 없음 | 2026-08-01 | - |
| travel-duty-free/면세한도 | 해외여행 면세 한도 800달러, 휴대품 과세가격 합계 기준 | 7 | 없음 | 2026-07-01 | - |
| travel-duty-free/술담배향수 | 해외 면세 술·담배·향수 한도, 주류 2L·담배 200개비·향수 100ml | 7 | 없음 | 2026-07-01 | - |
| travel-duty-free/자진신고 | 면세 초과 자진신고 30% 경감, 미신고 가산세 40% 60% | 7 | O | 2026-08-01 | - |
| unpaid-wages | 임금체불 신고·형사처벌·지연이자·대지급금 총정리 | 7 | 없음 | 2026-07-03 | - |
| unpaid-wages/civil-execution | 임금체불 민사소송·지급명령·강제집행과 우선변제 | 7 | 없음 | 2026-07-03 | - |
| unpaid-wages/criminal-penalty-delay-interest | 임금체불 형사처벌·지연이자, 14일·3년 이하·연 20% | 7 | 없음 | 2026-07-03 | - |
| unpaid-wages/report-procedure | 임금체불 신고 방법, 진정·고소와 지방고용노동관서 | 7 | 없음 | 2026-07-03 | - |
| unpaid-wages/wage-guarantee-fund | 대지급금(체당금), 사장 도산해도 임금 받는 법 | 7 | 없음 | 2026-07-03 | - |
| worker-vacation-support | 근로자 휴가지원사업 신청방법, 회사가 신청해야 40만원 받습니다 | 7 | O | 2026-08-06 | - |
| worker-vacation-support/2026선착순10만명신청기간 | 2026 근로자휴가지원 10만명 선착순 신청 기간·일정 | 7 | 없음 | 2026-05-23 | - |
| worker-vacation-support/정부10기업10근로자20총40사용법 | 근로자휴가지원 정부 10만+기업 10만+근로자 20만=총 40만원 사용법 | 7 | 없음 | 2026-05-23 | - |
| worker-vacation-support/중소기업재직자신청자격확인 | 근로자휴가지원 중소기업 재직자 신청 자격 확인 방법 | 7 | 없음 | 2026-05-23 | - |
| worker-vacation-support/휴가샵국내여행사용처환불조건 | 근로자휴가지원 휴가샵 국내여행 사용처·환불 조건 | 7 | 없음 | 2026-05-23 | - |
| youth-housing-support | 청년 주거지원 월세·전세자금대출과 매입임대·행복주택, 상황별 추천 | 8 | 없음 | 2026-05-23 | - |
| youth-housing-support/청년월세전세공공임대비교 | 청년 월세 전세 공공임대 주거 지원 비교 2026 | 7 | 없음 | 2026-05-23 | - |
| youth-housing-support/청년월세지원신청조건나이소득2026 | 청년 월세 지원 신청 조건 나이 소득 기준 2026 | 7 | 없음 | 2026-05-23 | - |
| youth-housing-support/청년주거급여분리지급조건금액 | 청년 주거급여 분리 지급 조건과 금액 2026 | 7 | 없음 | 2026-05-23 | - |
| youth-housing-support/청년주거지원정책문제점못받는경우 | 청년 주거 지원 정책 문제점과 못 받는 경우 해결 방법 | 7 | 없음 | 2026-05-23 | - |
| youth-job-leap-incentive | 청년일자리도약장려금 기업 신청자격과 청년 대상요건, 지원금액 | 7 | 없음 | 2026-05-23 | - |
| youth-job-leap-incentive/청년일자리도약장려금고용유지기간조건 | 청년일자리도약장려금 고용 유지 기간 조건과 중도 퇴직 처리 | 7 | 없음 | 2026-05-23 | - |
| youth-job-leap-incentive/청년일자리도약장려금신청방법work24 | 청년일자리도약장려금 신청 방법 work24 온라인 절차 | 7 | 없음 | 2026-05-23 | - |
| youth-job-leap-incentive/청년일자리도약장려금신청자격기업조건 | 청년일자리도약장려금 신청 자격 기업 조건 2026 | 7 | 없음 | 2026-05-23 | - |
| youth-job-leap-incentive/청년일자리도약장려금지원금액수도권비수도권차이 | 청년일자리도약장려금 지원 금액 수도권 비수도권 차이 2026 | 7 | 없음 | 2026-05-23 | - |
| youth-tomorrow-filling | 청년내일채움공제 지원금액·신청자격·중도해지 총정리 (신규 가입 여부 확인 필수) | 7 | 없음 | 2026-07-02 | - |
| youth-tomorrow-filling/신청자격제조건설업중소기업청년조건 | 청년내일채움공제 신청자격, 제조·건설업 5~50인 중소기업 청년 조건 | 7 | 없음 | 2026-05-23 | - |
| youth-tomorrow-filling/중도해지퇴사적립금환급기준손해여부 | 청년내일채움공제 중도해지, 퇴사하면 적립금 어떻게 되나 환급 기준 | 7 | 없음 | 2026-05-23 | - |
| youth-tomorrow-filling/지원금액2년1200만본인기업정부적립구조 | 청년내일채움공제 지원금액, 2년간 1,200만원 본인·기업·정부 적립 구조 | 7 | 없음 | 2026-05-23 | - |
| youth-tomorrow-filling/청년도약계좌동시가입가능여부차이점 | 청년내일채움공제 vs 청년도약계좌, 동시 가입 가능 여부와 차이점 | 7 | 없음 | 2026-05-23 | - |
| debt-restructuring/credit-recovery-workout | 신용회복위원회 워크아웃(채무조정), 이자 감면·상환 연장 | 7 | 없음 | 2026-07-02 | - |
| debt-restructuring/personal-bankruptcy-procedure | 개인파산 절차와 기간, 신청부터 면책까지 흐름 | 7 | 없음 | 2026-07-02 | - |
| debt-restructuring/speedy-debt-adjustment | 신속채무조정, 연체 30일 이하인데 벌써 신청되나요? | 7 | 없음 | 2026-07-16 | - |
| debt-restructuring/stage-comparison | 신속·사전채무조정·개인워크아웃, 연체 며칠이면 뭘 신청하나요? | 7 | 없음 | 2026-07-16 | - |
| disability-pension/3급기준 | 3급 장애인인데 장애인연금을 못 받는다면 / 등급 기준과 대상자 확인 | 7 | 없음 | 2026-05-23 | - |
| disability-pension/mock-calculation | 장애인연금 모의계산 해보기, 월 최대 43만9700원 나는 얼마 받나 | 7 | O | 2026-08-06 | - |
| disability-pension/금액 | 장애인연금 기초급여 + 부가급여 / 기초수급자 합산 최대 금액 | 7 | 없음 | 2026-05-23 | - |
| disability-pension/장애수당-차이 | 장애인연금과 장애수당, 같은 건가 다른 건가 / 중증·경증 기준 차이 | 7 | 없음 | 2026-05-23 | - |
| elderly-continue-employ/세가지고용방법차이 | 정년 연장, 정년 폐지, 재고용 세 가지 계속고용 방법 어떻게 다른가 | 7 | 없음 | 2026-05-23 | - |
| elderly-continue-employ/월30만원3년기준 | 월 30만원 최대 3년, 계속고용장려금 지원 기간과 금액 기준 | 7 | 없음 | 2026-05-23 | - |
| elderly-continue-employ/재고용신청방법 | 정년 도달한 직원 재고용 고민된다면 계속고용장려금 신청 방법 | 7 | 없음 | 2026-05-23 | - |
| elderly-continue-employ/정년후사업주지원금 | 고령자 계속고용장려금, 정년 지난 직원 계속 쓰면 사업주가 받는 지원금 | 7 | 없음 | 2026-05-23 | - |
| floor-noise | 층간소음 기준·신고·해결방법, 주간 39dB·야간 34dB 이웃사이센터 | 8 | 없음 | 2026-07-01 | - |
| floor-noise/기준 | 층간소음 기준 주간 39dB·야간 34dB, 직접충격·공기전달 dB표 | 7 | 없음 | 2026-07-01 | - |
| floor-noise/신고상담 | 층간소음 신고·이웃사이센터 상담, 경찰신고 되나 챗봇 안내 | 7 | 없음 | 2026-07-01 | - |
| floor-noise/해결방법 | 층간소음 해결방법 단계, 이웃사이센터부터 분쟁조정·소송까지 | 7 | 없음 | 2026-07-01 | - |
| home-childcare-allowance | 가정양육수당 부모급여와 차이, 어린이집 가면 어떻게 되나요? | 8 | 없음 | 2026-05-23 | - |
| home-childcare-allowance/부모급여종료후자동전환기준 | 부모급여 끝나면 가정양육수당 자동 전환, 만 24개월 기준과 주의사항 | 7 | 없음 | 2026-05-23 | - |
| home-childcare-allowance/신청방법복지로주민센터절차 | 가정양육수당 신청 방법, 복지로·주민센터 절차와 필요 서류 한눈에 | 7 | 없음 | 2026-05-23 | - |
| home-childcare-allowance/어린이집보내면중단보육료전환 | 가정양육수당 받다 어린이집 보내면, 중단 시기와 보육료 전환 신청 방법 | 7 | 없음 | 2026-05-23 | - |
| hypertension-medical-fee | 고혈압·당뇨병 등록관리 진료비 지원, 건강생활실천지원금과 차이 | 7 | 없음 | 2026-05-23 | - |
| hypertension-medical-fee/신청절차 | 고혈압 당뇨 등록관리사업 신청부터 진료비 약제비 지원받기까지 | 7 | 없음 | 2026-05-23 | - |
| hypertension-medical-fee/진료비절감 | 보건소에 고혈압 당뇨 환자로 등록하면 진료비가 얼마나 줄어드나 | 7 | 없음 | 2026-05-23 | - |
| hypertension-medical-fee/참여지역확인 | 고혈압 당뇨 등록관리사업 내 사는 지역이 참여 지역인지 확인하려면 | 7 | 없음 | 2026-05-23 | - |
| nationwide-energy-support-guide | 전기·도시가스·지역난방비 복지할인, 어디에 문의하나요? | 7 | 없음 | 2026-05-23 | - |
| nationwide-energy-support-guide/난방비 | 난방비 지원 총정리, 겨울 에너지바우처·연료비·연탄쿠폰 중복 주의 | 7 | 없음 | 2026-06-26 | - |
| nationwide-energy-support-guide/냉방비 | 냉방비 지원 총정리, 여름 누가 얼마 어디서 받나 | 7 | 없음 | 2026-06-26 | - |
| nationwide-energy-support-guide/문의처 | 냉난방비 지원 어디에 문의하나, 한전·도시가스·지역난방 연락처 | 7 | 없음 | 2026-06-26 | - |
| pregnant-eco-food | 임산부 친환경농산물 지원 24만원 꾸러미, 자부담 20% 신청방법 | 8 | 없음 | 2026-07-01 | - |
| pregnant-eco-food/대상 | 임산부 친환경농산물 지원 대상, 임신 중·2025년 출산 산모 | 7 | 없음 | 2026-07-01 | - |
| pregnant-eco-food/신청방법 | 임산부 친환경농산물 신청방법, 에코이몰 신청·지역별 선착순 추첨 | 7 | 없음 | 2026-07-01 | - |
| pregnant-eco-food/지원금액 | 임산부 친환경농산물 24만원 지원, 자부담 20% 4만 8천원 | 7 | 없음 | 2026-07-01 | - |
| unemployment-credit/실업크레딧국민연금동시납부가능 | 실업크레딧 받으면서 국민연금도 따로 납부되나 — 중복 여부 총정리 | 7 | 없음 | 2026-05-23 | - |
| unemployment-credit/실업크레딧단점해지구직급여주의 | 실업크레딧 단점·해지 조건 — 구직급여와 함께 신청할 때 주의사항 | 7 | 없음 | 2026-05-23 | - |
| unemployment-credit/실업크레딧이득안하면어떻게 | 실업크레딧 신청하면 이득인가 — 안 하면 어떻게 되나 | 7 | 없음 | 2026-05-23 | - |
| unemployment-credit/실업크레딧퇴사후신청방법시기 | 퇴사 후 실업크레딧 신청방법·신청시기 — 마감일 놓치면 소급 불가 | 7 | 없음 | 2026-05-23 | - |
| voice-phishing-crypto-refund | 가상자산 보이스피싱 피해금 10월 시행, 지금은 지급정지부터 신고하는 법 | 7 | 없음 | 2026-07-20 | - |
| voice-phishing-crypto-refund/deadline-missed | 피싱 사기 신고했는데 피해구제 안 되면? 지급정지 자동해지 기한 | 7 | 없음 | 2026-07-20 | - |
| voice-phishing-crypto-refund/decree-changes | 가상자산 보이스피싱 특별법 시행령, 뭐가 바뀌나 | 7 | 없음 | 2026-07-20 | - |
| voice-phishing-crypto-refund/refund-procedure | 보이스피싱 피해금 환급 절차, 지급정지 신고부터 신청까지 | 7 | 없음 | 2026-07-20 | - |
| auto-insurance-loss-ratio | 자동차보험 손해율 87.5%, 내 보험료도 오르나요? | 7 | 없음 | 2026-07-16 | - |
| auto-insurance-loss-ratio/premium-calculation-tips | 자동차보험료 계산 방법, 뭘로 정해지고 어떻게 아끼나 | 7 | 없음 | 2026-07-16 | - |
| auto-insurance-loss-ratio/premium-saving-special-terms | 자동차보험료 특약 할인율 총정리, 마일리지·블랙박스 얼마나 싸지나 | 7 | 없음 | 2026-07-16 | - |
| elderly-driver-safety | 고령운전자 교통안전교육 75세 이상 대상과 예약방법, 안 받으면? | 8 | 없음 | 2026-05-23 | - |
| elderly-driver-safety/2026온라인이수방법 | 2026 고령운전자 교통안전교육 온라인으로 이수하는 방법과 대상 기준 | 7 | 없음 | 2026-05-23 | - |
| elderly-driver-safety/65세무료75세의무비교 | 65세 무료 권장 vs 75세 의무, 고령운전자 교통안전교육 어떻게 다른가 | 7 | 없음 | 2026-05-23 | - |
| hug-jeonse-deposit-guarantee | 전세보증금반환보증 가입 거절되는 이유, 부채비율 90% 선을 넘었나 | 7 | 없음 | 2026-07-31 | - |
| hug-jeonse-deposit-guarantee/guarantee-fee | 전세보증금반환보증 보증료 계산하니 얼마, 60% 깎이는 조건은? | 7 | 없음 | 2026-08-01 | - |
| hug-jeonse-deposit-guarantee/how-to-join-and-refund | 전세보증보험 가입 방법과 보증료, 낸 돈 최대 40만원 환급 신청까지 | 7 | O | 2026-08-06 | - |
| national-health-insurance-regional | 국민건강보험 지역가입자 보험료 점수제 계산하고 경감받는 법 | 7 | 없음 | 2026-07-17 | - |
| national-health-insurance-regional/premium-reduction-eligibility | 섬·농어촌·노인세대라면 건강보험료 경감 신청하는 법 | 7 | 없음 | 2026-07-17 | - |
| national-health-insurance-regional/premium-scoring-calculation | 지역가입자 보험료 점수제, 재산·소득 얼마나 반영되는지 계산하는 법 | 7 | 없음 | 2026-07-17 | - |
| basic-livelihood-allowance | 생계급여 선정기준과 소득인정액 계산법, 부양의무자 있어도 되나요? | 8 | O | 2026-07-29 | - |
| basic-livelihood-allowance/2027-increase | 2027년 기초수급비 인상률 6.70% 확정, 우리 가구 인상분 계산해보면 | 7 | O | 2026-08-04 | - |
| catastrophic-medical-expenses/본인부담상한제중복가능여부 | 재난적의료비와 본인부담상한제 중복 가능한지, 순차 활용 방법 | 7 | 없음 | 2026-05-23 | - |
| catastrophic-medical-expenses/중위소득100이하신청자격 | 재난적의료비 신청 자격, 중위소득 100% 이하 기준과 대상 질환 | 7 | 없음 | 2026-05-23 | - |
| child-support-advance/대상조건 | 양육비 선지급 대상·조건, 3개월·3회 미이행과 만 18세 자녀 | 7 | 없음 | 2026-07-01 | - |
| child-support-advance/회수 | 양육비 선지급 국가 회수, 안 갚는 채무자에게 어떻게 | 7 | 없음 | 2026-07-01 | - |
| credit-weak-smallbiz-fund | 신용취약소상공인자금 신청기간과 홀짝제, 3천만원 언제 열리나 | 7 | 없음 | 2026-07-31 | - |
| credit-weak-smallbiz-fund/priority-evaluation | 신용취약소상공인자금 승인은 언제 나나, 정책우선도 평가 순서 확인하기 | 7 | 없음 | 2026-08-01 | - |
| disability-allowance/장애수당연금차이 | 경증 장애수당과 장애인연금, 어떻게 다르고 중복 신청이 되는지 | 7 | 없음 | 2026-05-23 | - |
| disability-allowance/차상위추가지원 | 장애수당이 월 6만원인 이유와 차상위계층 장애인이 받을 수 있는 추가 지원 | 7 | 없음 | 2026-05-23 | - |
| disabled-biz-support-fund | 장애인기업지원자금 신청 자격, 복지카드만 있으면 되나 | 7 | 없음 | 2026-07-31 | - |
| disabled-biz-support-fund/accepted-documents | 복지카드 없어도 되나, 장애인기업지원자금 인정 서류 확인하기 | 7 | 없음 | 2026-08-01 | - |
| elderly-knee-surgery/건강보험후국가지원본인부담금 | 무릎인공관절 수술 국가 지원, 본인부담금 계산해보니 얼마 | 7 | 없음 | 2026-05-23 | - |
| elderly-knee-surgery/신청자격만60세저소득기준 | 노인 무릎인공관절 수술 지원 신청 자격, 만 60세 이상 저소득층 기준은 | 7 | 없음 | 2026-05-23 | - |
| emergency-management-fund | 긴급경영안정자금 신청 대상과 조건, 금리·서류까지 | 9 | O | 2026-08-04 | - |
| emergency-management-fund/disaster-certificate | 재해 중소기업 확인증 어디서 발급받고 고정 2%로 신청하나 | 7 | 없음 | 2026-08-01 | - |
| energy-cashback | 에너지캐시백 절감률별 단가와 신청방법, 현금으로 받을 수 있나요? | 7 | 없음 | 2026-06-26 | - |
| energy-cashback/슬기로운전기생활 | 슬기로운 전기생활 2026, 피크 500원 스마트가전 100원 캐시백 | 7 | 없음 | 2026-06-29 | - |
| general-management-stability-fund | 일반경영안정자금 신청 방법과 7천만원 한도, 업력 무관 조건 | 7 | 없음 | 2026-07-31 | - |
| general-management-stability-fund/no-business-age-limit | 일반경영안정자금 업력 무관인데 왜 거절되나, 제외 사유 확인하기 | 7 | 없음 | 2026-08-01 | - |
| income-contingent-loan/2026금리1점7취업후상환소득폐지 | 2026 학자금대출 금리 연 1.7%, 취업후상환 소득 조건 폐지 | 7 | 없음 | 2026-05-23 | - |
| income-contingent-loan/생활비학기당200만신청방법 | 학자금대출 생활비 학기당 200만원 신청 방법 | 7 | 없음 | 2026-05-23 | - |
| infertility-treatment-leave | 난임치료휴가 유급 2일 무급 4일, 분할사용과 신청방법 | 8 | 없음 | 2026-05-23 | - |
| infertility-treatment-leave/휴가확대 | 난임치료휴가급여 확대 11월 27일, 유급 급여 4일로 늘어난다 | 7 | 없음 | 2026-07-01 | - |
| innovation-growth-fund | 혁신성장촉진자금 8월 10일 접수 바뀐다, 선착순이 아니라면 뭘 준비하나 | 7 | 없음 | 2026-07-31 | - |
| innovation-growth-fund/august-application | 혁신성장촉진자금 8월 10일 하루만 신청, 뭘 준비해 두나 | 7 | 없음 | 2026-08-01 | - |
| inverter-ac-electricity-saving | 인버터 에어컨 전기세 아끼는 법, 껐다 켰다가 답일까 | 7 | 없음 | 2026-07-16 | - |
| inverter-ac-electricity-saving/appliance-rebate-program-status | 에어컨 지원금(으뜸효율 환급사업) 지금도 신청되나 | 7 | 없음 | 2026-07-16 | - |
| kespa-cup-2026 | 2026 케스파컵 일정, 디즈니+에서 어떻게 보나 | 7 | O | 2026-07-31 | - |
| kespa-cup-2026/결선티켓예매 | 케스파컵 결선 티켓 예매 방법, 언제 열리나 | 7 | 없음 | 2026-07-22 | - |
| marriage-report | 혼인신고 방문·우편으로 접수하고 증인 서명까지 준비하는 법 | 7 | 없음 | 2026-07-17 | - |
| marriage-report/marriage-birth-move-onestop | 혼인·출생·전입신고, 지원금 신청 총정리 | 7 | 없음 | 2026-07-21 | - |
| medical-aid-elderly-denture | 노인 틀니·임플란트 지원 본인부담률과 적용주기, 1종 2종 차이까지 | 8 | 없음 | 2026-05-23 | - |
| medical-aid-elderly-denture/틀니7년주기사후유지관리 | 노인 틀니 7년 주기와 장착 후 3개월 무상 수리 6회 이용 방법 | 7 | 없음 | 2026-05-23 | - |
| national-work-scholarship/국가근로장학금시간당단가교내교외2026 | 2026년 국가근로장학금 시간당 단가: 교내·교외 기준 | 7 | 없음 | 2026-05-23 | - |
| national-work-scholarship/국가근로장학금신청자격소득분위기준 | 국가근로장학금 신청 자격: 소득분위·성적 기준 완전 정리 | 7 | 없음 | 2026-05-23 | - |
| new-hope-holssi | 새희망홀씨 II 연소득 4천만원 이하면 되나, 은행 14곳 중 어디로 가나 | 7 | 없음 | 2026-07-31 | - |
| new-hope-holssi/bank-choice | 새희망홀씨 은행 14곳 중 어디에 신청해야 하나 | 7 | 없음 | 2026-08-01 | - |
| noran-umbrella/가입방법 | 노란우산공제 가입 자격·방법, 소기업 소상공인 대상 조건 | 7 | 없음 | 2026-07-01 | - |
| noran-umbrella/해지 | 노란우산공제 해지 시 세금·손해, 중도해지 불리한 이유 | 7 | 없음 | 2026-07-01 | - |
| parental-leave-pay | 육아휴직급여 6+6 부모육아휴직과 휴직기간, 신청방법까지 | 8 | 없음 | 2026-05-23 | - |
| parental-leave-pay/건강보험료 | 육아휴직 건강보험료 유예 신청 안 하면 매달 그대로 나가나요? | 7 | O | 2026-08-01 | - |
| pension-insurance-vs-savings | 연금보험 연금저축 차이, 세액공제 되는 쪽이 어느 계좌인지 확인 | 7 | O | 2026-08-06 | - |
| pension-insurance-vs-savings/generation-comparison | 개인연금저축·연금저축·연금저축계좌 차이, 내 가입 시기 조회부터 | 7 | O | 2026-08-06 | - |
| regional-credit-guarantee | 담보 없어 막혔다면 지역신용보증재단 보증 157개 중에 내 것이 있나 | 7 | 없음 | 2026-08-01 | - |
| regional-credit-guarantee/guarantee-limit | 지역신용보증재단 보증한도 계산하니 왜 이것밖에 안 나오나 | 7 | 없음 | 2026-08-01 | - |
| restart-special-fund | 소상공인 재도전특별자금 신청 서류와 교육·채무조정, 승인까지 | 10 | O | 2026-07-31 | - |
| restart-special-fund/restart-education | 재도전특별자금 받으려면 재창업교육 신청 먼저, 몇 시간짜리인가 | 7 | 없음 | 2026-08-01 | - |
| small-manufacturer-fund | 소공인특화자금 신청 한도 운전 1억·시설 5억, 제조업 기준 | 7 | 없음 | 2026-07-31 | - |
| small-manufacturer-fund/working-vs-facility | 소공인특화자금 운전이냐 시설이냐, 어느 쪽으로 신청해야 하나 | 7 | 없음 | 2026-08-01 | - |
| stepping-stone-loan | 징검다리론 연 9% 이내로 갈아타기, 햇살론 2년 갚았으면 대상인가 | 7 | 없음 | 2026-07-31 | - |
| stepping-stone-loan/pre-application | 징검다리론 은행 가기 전에 잇다에서 사전신청부터 | 7 | 없음 | 2026-08-01 | - |
| wegovy-price-comparison | 위고비 가격 비교 사이트 있나, 공식 창구에서 조회되는 것과 안 되는 것 | 7 | O | 2026-08-06 | - |
| wegovy-price-comparison/insurance-claim-criteria | 위고비 마운자로 실비 청구되나? 당뇨 고혈압이면 달라지는 기준 | 7 | O | 2026-08-08 | - |
| win-win-growth-fund | 상생성장지원자금 신청 방법과 플랫폼 추천, 우체국쇼핑만 남은 이유 | 7 | 없음 | 2026-07-31 | - |
| win-win-growth-fund/platform-recommendation | TOPS 프로그램 추천서 받는 절차, 입점부터 발급까지 | 7 | 없음 | 2026-08-01 | - |
| worker-livelihood-interest-subsidy | 혼례비 대출 마감됐는데 이차보전은 왜 되나, 금리 3%p 깎는 조건은? | 7 | 없음 | 2026-07-31 | - |
| worker-livelihood-interest-subsidy/wedding-loan | 혼례비 대출 2천만원, 혼인신고 3년 안에 신청하는 조건 | 7 | 없음 | 2026-08-01 | - |
| worker-wage-arrears-loan | 월급 밀렸을 때 연 1.5%로 1,000만원 빌리는 체불근로자 생계비 융자 | 7 | 없음 | 2026-07-31 | - |
| worker-wage-arrears-loan/wage-subsidy-compare | 체불 생계비 융자와 대지급금, 뭘 먼저 신청해야 하나 | 7 | 없음 | 2026-08-01 | - |
| youth-employment-linked-fund | 청년고용연계자금 가산금리 0%, 만 39세 아니어도 신청되는 경우가 있다 | 7 | 없음 | 2026-07-31 | - |
| youth-employment-linked-fund/eligibility-certificate | 청년고용연계자금 확인서 받고 어느 은행으로 가야 하나 | 7 | 없음 | 2026-08-01 | - |
| youth-startup-fund | 청년전용창업자금 고정 2.5%, 만 39세 업력 3년 미만이면 1억까지 | 7 | 없음 | 2026-08-01 | - |
| youth-startup-fund/evaluation-committee | 청년전용창업자금 평가위원회 뚫으려면 뭘 준비해 신청하나 | 7 | 없음 | 2026-08-01 | - |
| 119-safe-call | 119안심콜 등록방법과 등록정보, 개인정보는 어떻게 보호되나요? | 7 | 없음 | 2026-05-23 | - |
| 518-veteran-employment-application | 5.18민주유공자 취업희망신청 이력서 하나로 보훈청에 즉시 신청하는 법 | 7 | 없음 | 2026-07-18 | - |
| acquisition-tax | 취득세 계산기로 세율 확인하고 60일 안에 신고하는 법 | 7 | 없음 | 2026-07-17 | - |
| adoption-dissolution-report | 친양자파양신고 재판확정 후 1개월 이내 시읍면에 신고하는 법 | 7 | 없음 | 2026-07-17 | - |
| adoption-report | 입양신고 가정법원 허가서와 동의서로 시읍면에 접수하는 법 | 7 | 없음 | 2026-07-17 | - |
| agent-orange-patient-registration | 고엽제후유의증환자 등록 진료기록으로 20일 만에 신청하는 법 | 7 | 없음 | 2026-07-17 | - |
| air-emission-facility-permit | 대기배출시설 설치허가 방지시설내역서 갖춰 유역환경청에 10일 만에 신청하는 법 | 7 | 없음 | 2026-07-18 | - |
| animal-breeding-business-permit | 동물생산업 허가 시설명세도와 사업계획서로 시군구에 1만원 15일 만에 받는 법 | 7 | 없음 | 2026-07-18 | - |
| animal-exhibition-business-registration | 동물전시업 등록 사업계획서와 시설명세도로 시군구에 1만원 15일 만에 신청하는 법 | 7 | 없음 | 2026-07-18 | - |
| animal-pharmacy-establishment-report | 동물약국 개설신고 구조시설개요서와 약국등록증사본으로 시군구 5천원 2일 만에 받는 법 | 7 | 없음 | 2026-07-18 | - |
| apartment-price-confirmation | 아파트 공동주택가격 확인 온라인발급 무료로 즉시 조회하는 법 | 7 | 없음 | 2026-07-18 | - |
| aquaculture-license-application | 양식업 면허 신청 수면위치구역도로 시군구에 7일 만에 받는 법 | 7 | 없음 | 2026-07-18 | - |
| arboretum-coordinator | 수목원 코디네이터 (방문자 안내·교육) | 7 | 없음 | 2026-05-23 | - |
| artist-activity-grant | 예술활동준비금 신청자격과 예술활동증명 방법, 300만원 사용처 | 7 | 없음 | 2026-05-23 | - |
| artist-employment-insurance | 예술인 고용보험 가입대상과 두루누리 보험료 지원, 구직급여까지 | 7 | 없음 | 2026-05-23 | - |
| artist-industrial-accident-insurance | 예술인 산재보험 보험료 지원사업 | 7 | 없음 | 2026-05-23 | - |
| artist-platform-worker-insurance-acquisition | 예술인 노무제공자 고용보험 취득신고 사업주가 5일 만에 신고하는 법 | 7 | 없음 | 2026-07-18 | - |
| assistive-technology-device | 보조공학기기 지원품목과 지원한도, 장애인 근로자 직접신청까지 | 7 | 없음 | 2026-05-23 | - |
| auto-service-business-registration | 자동차정비업 매매업 폐차업 등록 사업계획서로 시군구에 15일 만에 신청하는 법 | 7 | 없음 | 2026-07-18 | - |
| aviation-professional-certificate-issuance | 항공종사자 자격증명서 발급 신체검사증명서로 한국교통안전공단에 5일 만에 받는 법 | 7 | 없음 | 2026-07-18 | - |
| bad-landlord-check | 전세 계약 전 악성임대인 조회, 상습 채무불이행·미반환 명단 1분 확인 | 7 | O | 2026-08-06 | - |
| barber-beautician-license-application | 이용사 미용사 면허발급 졸업증명서와 진단서로 시군구에 5500원 즉시 받는 법 | 7 | 없음 | 2026-07-18 | - |
| basic-livelihood-recipient-certificate | 기초생활수급자증명서 무료 발급받고 교육급여는 교육청에서 받는 법 | 7 | 없음 | 2026-07-17 | - |
| basic-pension | 기초연금 월 34만9700원, 소득인정액 기준과 국민연금 감액 여부 | 7 | 없음 | 2026-07-21 | - |
| beautiful-story-grandma | 아름다운 이야기 할머니 신청자격과 교육과정, 활동 혜택까지 | 7 | 없음 | 2026-05-23 | - |
| benefit-notification-service | 복지로 혜택알리미 이용방법과 국민비서 차이, 로그인 없이도 되나요? | 7 | 없음 | 2026-05-23 | - |
| birth-registration | 출생신고 기한 확인하고 온라인으로 신고하는 법, 준비물과 과태료 | 8 | 없음 | 2026-07-29 | - |
| birth-report | 출생신고 1개월 이내 인터넷으로 하고 과태료 피하는 법 | 7 | 없음 | 2026-07-17 | - |
| brain-infarction-i63 | 뇌경색 질병코드 I63과 뇌출혈 산정특례, 뇌졸중 보장 차이와 청구 서류 | 4 | 없음 | 2026-09-07 | - |
| broadcast-video-independent-producer-report | 방송영상독립제작사 신고 제작계획서로 온라인 문화체육관광부에 5일 만에 받는 법 | 7 | 없음 | 2026-07-18 | - |
| building-ledger-check | 건축물대장 발급받고 위반건축물 여부 확인하는 법 | 7 | 없음 | 2026-07-29 | - |
| building-permit-application | 건축허가 신청 설계도서 갖춰 층수별 2일에서 70일까지 받는 법 | 7 | 없음 | 2026-07-18 | - |
| building-register-certificate | 건축물대장 등본 초본 인터넷 무료 발급받고 위반건축물 여부 확인하는 법 | 7 | 없음 | 2026-07-17 | - |
| building-registration-certificate | 건물등기사항증명서 발급 인터넷등기소에서 1000원 즉시 3시간 만에 받는 법 | 7 | 없음 | 2026-07-18 | - |
| building-status-map-issuance | 건축물현황도 열람 발급 다중이용건축물 인터넷무료 방문100원 7일 만에 받는 법 | 7 | 없음 | 2026-07-18 | - |
| burial-cremation-report | 매장 화장 신고 사망진단서로 시군구에 수수료 없이 즉시 신고하는 법 | 7 | 없음 | 2026-07-18 | - |
| buried-heritage-discovery-report | 매장유산 발견신고 현상변경 없이 경찰서 시군구 수수료없이 7일 이내 하는 법 | 7 | 없음 | 2026-07-18 | - |
| business-closure-certificate | 폐업사실증명 홈택스 무료로 즉시 발급받아 실업급여 신청하는 법 | 7 | 없음 | 2026-07-17 | - |
| business-closure-report | 사업자 휴업 폐업신고 홈택스로 무료 신고하고 사업자등록증 정리하는 법 | 7 | 없음 | 2026-07-17 | - |
| business-registration-amendment | 사업자등록 정정신고 상호 변경은 즉시 사업장 이전은 2일 걸리는 법 | 7 | 없음 | 2026-07-17 | - |
| business-registration-certificate | 사업자등록증명 인터넷 무료 발급받고 대출·입찰에 제출하는 법 | 7 | 없음 | 2026-07-17 | - |
| business-status-report | 사업장현황신고 수입금액검토표와 매출매입처별계산서합계표로 홈택스 즉시 3시간 만에 받는 법 | 7 | 없음 | 2026-07-20 | - |
| cadastral-map-certificate | 지적도 임야도 인터넷 무료 발급받고 토지 경계·모양 확인하는 법 | 7 | 없음 | 2026-07-17 | - |
| cancer-diagnosis-benefit | 통합암진단비와 일반암진단비, 유사암 소액암부터 암 종류별 보험금까지 | 4 | 없음 | 2026-09-07 | - |
| capital-gains-tax | 양도소득세 계산기로 세율 확인하고 2개월 안에 신고하는 법 | 7 | 없음 | 2026-07-17 | - |
| car-rental-business-registration | 렌터카 자동차대여사업등록 사업계획서와 차고증명서로 시군구에 20일 만에 신청하는 법 | 7 | 없음 | 2026-07-18 | - |
| carbon-neutral-point | 탄소중립포인트 가입방법과 적립활동, 포인트는 얼마나 쌓이나요? | 7 | 없음 | 2026-05-23 | - |
| caregiver-training-institution-designation | 요양보호사 교육기관 지정신청 사업계획서로 방문 수수료없이 20일 만에 받는 법 | 7 | 없음 | 2026-07-18 | - |
| chief-information-security-officer-report | 정보보호 최고책임자 지정신고 신고서없이 중앙전파관리소 수수료없이 30일 만에 하는 법 | 7 | 없음 | 2026-07-18 | - |
| child-school-bus-report | 어린이통학버스신고 보험가입증빙서로 경찰서에 수수료없이 7일 만에 받는 법 | 7 | 없음 | 2026-07-18 | - |
| child-welfare-facility-installation-report | 아동복지시설 설치신고 사업계획서와 시설평면도로 시군구 수수료없이 20일 만에 받는 법 | 7 | 없음 | 2026-07-18 | - |
| cinema-closure-report | 영화상영관 폐업신고 등록증만으로 폐업 후 30일 이내 3일 만에 신고하는 법 | 7 | 없음 | 2026-07-18 | - |
| civil-defense-training-exemption | 민방위 교육훈련 유예 면제 진단서와 확인서로 인터넷 즉시 신청하는 법 | 7 | 없음 | 2026-07-18 | - |
| civil-servant-pension | 공무원연금 수령액 조회와 계산법, 퇴직 전 내 예상액 미리 확인 | 7 | O | 2026-08-06 | - |
| coastal-safety-guard | 연안안전지킴이 자격요건과 신청방법, 근무지와 수당까지 | 7 | 없음 | 2026-05-23 | - |
| commercial-lease-fixed-date | 상가건물 확정일자 세무서에서 받고 보증금 우선변제권 확보하는 법 | 7 | 없음 | 2026-07-17 | - |
| commercial-lease-premium | 상가 권리금 회수 방해 확인하고 손해배상 청구하는 법 | 7 | 없음 | 2026-07-29 | - |
| community-health-promotion | 지역사회 건강증진사업 보건소 건강검진·금연클리닉, 이용방법까지 | 7 | 없음 | 2026-05-23 | - |
| complaint-disposition-certificate | 진정 내사사건 처분결과증명 1부 500원으로 즉시 발급받는 법 | 7 | 없음 | 2026-07-18 | - |
| complaint-filing-certificate | 고소장 고발장 접수증명 1부 500원으로 검찰청에 1일 만에 발급받는 법 | 7 | 없음 | 2026-07-18 | - |
| comprehensive-income-tax | 종합소득세 5월 신고기간 확인하고 홈택스로 신고하는 법 | 7 | 없음 | 2026-07-17 | - |
| comprehensive-real-estate-tax | 종합부동산세 공제금액 확인하고 12월 안에 납부하는 법 | 7 | 없음 | 2026-07-17 | - |
| construction-business-registration | 건설업등록 보증가능금액확인서와 기술인력 갖춰 시도에 20일 만에 신청하는 법 | 7 | 없음 | 2026-07-18 | - |
| construction-engineer-career-report | 건설기술인 경력신고 경력확인서와 졸업증명서로 즉시 신고하는 법 | 7 | 없음 | 2026-07-18 | - |
| construction-machinery-business-certificate-reissue | 건설기계사업자 등록증 재교부신청 대여업정비업매매업으로 시군구 500원 즉시 3시간 만에 받는 법 | 7 | 없음 | 2026-07-20 | - |
| construction-machinery-certificate-reissue | 건설기계 등록검사증 재발급신청 훼손증명서로 시군구 500원 즉시 3시간 만에 받는 법 | 7 | 없음 | 2026-07-20 | - |
| construction-machinery-maintenance-registration | 건설기계정비업등록 정비시설 증명서류로 시군구에 3만원 18일 만에 받는 법 | 7 | 없음 | 2026-07-18 | - |
| cooperative-establishment-report | 협동조합 설립신고 정관과 창립총회 의사록으로 시도에 수수료 없이 20일 만에 신고하는 법 | 7 | 없음 | 2026-07-18 | - |
| copayment-cap-refund | 본인부담상한제 환급금 조회부터 신청까지, 안 하면 3년 뒤 사라진다 | 7 | O | 2026-08-04 | - |
| copyright-registration | 저작권등록 온라인 2만원 프로그램 5만원 한국저작권위원회에 7일 만에 받는 법 | 7 | 없음 | 2026-07-18 | - |
| corporate-registry-certificate | 법인등기사항증명서 인터넷등기소 1000원에 즉시 발급받는 법 | 7 | 없음 | 2026-07-17 | - |
| cosmetics-manufacturing-registration | 화장품제조업등록 시설명세서와 의사진단서로 지방식약청에 15일 만에 신청하는 법 | 7 | 없음 | 2026-07-18 | - |
| cosmetics-responsible-sales-registration | 화장품책임판매업등록 품질관리기준서로 지방식약청 3만원 10일 만에 받는 법 | 7 | 없음 | 2026-07-18 | - |
| coupang-refund-period | 쿠팡 환불 기간 총정리, 단순변심 7일 불량 3개월 카드 며칠 | 7 | 없음 | 2026-07-16 | - |
| court-auction | 법원경매 물건 검색하고 입찰하는 법, 보증금 10%와 무효 사유 | 8 | 없음 | 2026-07-29 | - |
| court-judgment-copy-request | 형사재판서 등초본 교부청구 5매 1000원으로 검찰청에 1일 만에 받는 법 | 7 | 없음 | 2026-07-18 | - |
| credit-bank-credit-recognition | 학점은행제 학점인정 신청 자격증과 성적증명서로 학점당 1천원 60일 만에 받는 법 | 7 | 없음 | 2026-07-18 | - |
| credit-bank-degree-certificate | 학점은행제 학위증명서 국문 300원 영문 500원 cb.or.kr 발급법 | 7 | 없음 | 2026-07-17 | - |
| criminal-record-check | 범죄경력조회 취업 어린이집 경비업 등 목적별 14일 만에 신청하는 법 | 7 | 없음 | 2026-07-18 | - |
| crisis-youth-support/학교밖청소년 | 학교를 다니지 않는 청소년도 위기청소년 특별지원 대상에 해당하는지 | 7 | 없음 | 2026-05-23 | - |
| cultural-arts-trainee | 문화예술기관 청년 연수단원 | 7 | 없음 | 2026-05-23 | - |
| culture-day | 문화가 있는 날 참여시설과 이용방법, 전부 무료인가요? | 7 | 없음 | 2026-05-23 | - |
| culture-nuri-card | 문화누리카드 신청방법과 사용처, 자동재충전이란? | 7 | 없음 | 2026-05-23 | - |
| currency-exchange-business-registration | 환전업무 등록신청 임대차계약서와 신분증으로 세관에 수수료 없이 20일 만에 신청하는 법 | 7 | 없음 | 2026-07-18 | - |
| custody-designation-report | 친권자지정 변경신고 재판등본이나 협의서로 시읍면에 신고하는 법 | 7 | 없음 | 2026-07-18 | - |
| customs-unique-code-business-application | 통관고유부호 신청 사업자등록증사본으로 세관에 수수료없이 1일 만에 받는 법 | 7 | 없음 | 2026-07-18 | - |
| daegu-junggu-kitchen-cleaning | 대구 중구 주방청소 50만원, 12곳만 뽑고 8월 7일 마감 | 7 | O | 2026-08-02 | - |
| daiso-stock-and-refund | 다이소 재고 확인하는 법과 환불 규정, 2주 지나면 못 받나요 | 7 | 없음 | 2026-07-16 | - |
| daycare-center-establishment-permit | 어린이집 설치인가 운영계획서 갖춰 시군구에 14일 만에 신청하는 법 | 7 | 없음 | 2026-07-18 | - |
| dc-pension-early-withdrawal | 퇴직연금 중도인출 사유와 세금, DC형만 되나요? | 7 | 없음 | 2026-07-11 | - |
| death-benefit-liquidation | 사망보험금 연금으로 받기, 유동화율·기간 어떻게 정하나 | 7 | 없음 | 2026-07-16 | - |
| death-report | 사망신고 1개월 이내 하고 동거친족 신고의무자 확인하는 법 | 7 | 없음 | 2026-07-17 | - |
| debt-certificate | 부채증명원 인터넷 발급 어디서 하나, 은행·소진공·장학재단 기관별 정리 | 7 | O | 2026-08-05 | - |
| dementia-center/무료검사서비스 | 치매안심센터에서 받을 수 있는 무료 검사와 지원 서비스 종류 | 7 | 없음 | 2026-05-23 | - |
| dementia-helpline/가족돌봄스트레스 | 치매 가족 돌봄 스트레스를 해소하려면 콜센터 상담이 최우선 선택인 이유 | 7 | 없음 | 2026-05-23 | - |
| dementia-insurance | 치매보험 가입 전 경증치매 진단기준, 왜 꼭 확인해야 하나요? | 7 | 없음 | 2026-07-16 | - |
| dental-implant-insurance | 임플란트 건강보험 65세부터 평생 2개, 얼마나 싸지나 | 7 | O | 2026-07-16 | - |
| dental-insurance-guide | 치아보험 임플란트 보장한도 얼마까지 나오나, 발치 개수 모르면 손해 | 7 | 없음 | 2026-07-16 | - |
| diagnostic-radiation-device-installation-report | 진단용방사선발생장치 설치 사용신고 검사성적서로 시군구 수수료없이 3일 만에 받는 법 | 7 | 없음 | 2026-07-18 | - |
| direct-sales-certificate-reissue | 방문판매업 다단계판매업 신고증 등록증 재발급 기존증서로 수수료없이 즉시 3시간 만에 받는 법 | 7 | 없음 | 2026-07-18 | - |
| disability-assistive-device | 장애인 보조기기 구입비 지원대상과 지원절차, 신청은 어디서 | 7 | 없음 | 2026-05-23 | - |
| disability-card-reissue | 장애인복지카드 분실 재발급 20일 만에 신청하는 법 유효기간 만료는 예외 | 7 | 없음 | 2026-07-17 | - |
| disability-degree-adjustment | 장애정도 조정신청 상태 변화 시 30일 만에 등급 재심사받는 법 | 7 | 없음 | 2026-07-17 | - |
| disability-registration | 장애인 등록 신청 총 30일 걸리는 이유와 국민연금공단 심사 절차 아는 법 | 7 | 없음 | 2026-07-17 | - |
| disability-self-reliance-loan | 장애인 자립자금 대여 한도와 상환조건, 사용용도까지 | 7 | 없음 | 2026-05-23 | - |
| disability-standard-workplace-certification | 장애인 표준사업장 인증신청 임금대장사본으로 한국장애인고용공단 수수료없이 61일 만에 받는 법 | 7 | 없음 | 2026-07-18 | - |
| disability-startup-store | 장애인 창업점포 지원 사전교육과 선정절차, 신청방법까지 | 7 | 없음 | 2026-05-23 | - |
| disability-welfare-facility-report | 장애인복지시설 설치운영신고 사업계획서 갖춰 시군구에 수수료 없이 10일 만에 신청하는 법 | 7 | 없음 | 2026-07-18 | - |
| disabled-enterprise-certificate | 장애인기업확인서 주식변동명세서와 장애인증명서로 7일 만에 발급받는 법 | 7 | 없음 | 2026-07-18 | - |
| disabled-vehicle-tag | 장애인 자동차표지 무료 발급받고 주차·통행료 감면 받는 법 | 7 | 없음 | 2026-07-17 | - |
| disinfection-business-report | 소독업 신고 시설장비인력명세서로 시군구 수수료없이 7일 만에 받는 법 | 7 | 없음 | 2026-07-18 | - |
| divorce-report | 협의이혼신고 확인서등본 챙기고 친권자지정까지 한번에 신고하는 법 | 7 | 없음 | 2026-07-17 | - |
| dokdo-love-savings | 신협 독도사랑적금 연 7% 조건, 10만좌 끝나기 전에 가입하려면 | 7 | O | 2026-08-06 | - |
| dollar-insurance-warning | 달러보험 가입 전 꼭 확인할 4가지, 환테크 상품 아닌 이유 | 7 | 없음 | 2026-07-16 | - |
| domestic-residence-report | 재외동포 F-4 국내거소신고 여권 사진으로 35000원 즉시 신고하는 법 | 7 | 없음 | 2026-07-18 | - |
| domestic-residence-report-certificate | 외국국적동포 국내거소신고 사실증명 인터넷 무료 발급받는 법 | 7 | 없음 | 2026-07-17 | - |
| door-to-door-sales-registration | 방문판매업신고 전화권유판매업 서류 갖춰 시군구에 3일 만에 신청하는 법 | 7 | 없음 | 2026-07-18 | - |
| driver-insurance-vs-auto-insurance | 운전자보험 자동차보험 차이, 둘 다 가입해야 하나요 | 7 | 없음 | 2026-07-16 | - |
| drivers-license-periodic-checkup | 운전면허 정기적성검사 10년마다 받고 판정료 6000원 준비하는 법 | 7 | 없음 | 2026-07-17 | - |
| drivers-license-reissue | 운전면허증 재발급 운전면허시험장 가면 즉시 받는 법 | 7 | 없음 | 2026-07-17 | - |
| driving-record-certificate | 운전경력증명서 신분증만 있으면 무료로 즉시 인터넷 발급받는 법 | 7 | 없음 | 2026-07-18 | - |
| driving-school-designation | 자동차운전전문학원 지정신청 코스평면도와 강사자격증으로 5만원 7개월 만에 받는 법 | 7 | 없음 | 2026-07-18 | - |
| early-old-age-pension | 국민연금 조기수령 무조건 신청하라던데, 내 감액 계산해보면 다를까? | 7 | O | 2026-08-06 | - |
| early-reemployment-allowance | 조기재취업수당 12개월 이상 근무 증명하고 청구하는 법 | 7 | 없음 | 2026-07-17 | - |
| early-scrappage-subsidy | 조기폐차 보조금 등급 조회하고 신청하는 법, 최대 1억 2천만원 | 7 | 없음 | 2026-07-29 | - |
| eers-gas-boiler | EERS 취약계층 가정용 가스보일러 및 단열강화 지원사업 | 7 | 없음 | 2026-05-23 | - |
| electric-welfare-discount | 전기요금 복지할인 대상과 여름철 추가할인, 에너지바우처 중복여부 | 8 | 없음 | 2026-06-29 | - |
| electrical-construction-business-registration | 전기공사업등록 기업진단보고서와 전기공사기술자 명단으로 14일 만에 신청하는 법 | 7 | 없음 | 2026-07-18 | - |
| elevator-safety-inspection | 승강기 안전검사 신청 정기 정밀검사는 즉시 수시검사는 15일 만에 받는 법 | 7 | 없음 | 2026-07-18 | - |
| emergency-livelihood-loan | 소액생계비대출(불법사금융예방대출) 자격조건과 100만원 한도, 연체자도 되나요? | 7 | 없음 | 2026-07-10 | - |
| emergency-welfare-support | 긴급복지지원 위기사유와 소득재산 기준, 기초생활수급과 차이 | 8 | 없음 | 2026-06-27 | - |
| employee-insurance-loss-report | 근로자 퇴사 시 고용산재보험 상실신고 사업주가 서류 없이 7일 만에 하는 법 | 7 | 없음 | 2026-07-18 | - |
| employer-training-cost-support | 사업주 직업능력개발훈련비 서류 없이 산업인력공단에 10일 만에 지원받는 법 | 7 | 없음 | 2026-07-18 | - |
| employment-insurance-certificate-issuance | 고용산재보험 완납증명원 사업주 신분증만으로 즉시 발급받는 법 | 7 | 없음 | 2026-07-17 | - |
| employment-insurance-review-request | 실업급여 거부처분 억울하면 30일 만에 심사청구하는 법 | 7 | 없음 | 2026-07-17 | - |
| employment-insurance-status-claim | 고용보험 미가입 확인되면 피보험자격확인청구서로 직접 정정 신청하는 법 | 7 | 없음 | 2026-07-17 | - |
| employment-insurance-worker-certificate | 고용보험 자격이력내역서 신분증만으로 즉시 발급받는 법 | 7 | 없음 | 2026-07-17 | - |
| empty-bottle-deposit | 빈용기 보증금 반납장소와 반납거부 대처법, 자동회수기 위치까지 | 7 | 없음 | 2026-05-23 | - |
| enterprise-support-portal | 기업지원 종합 서비스 포털 (기업마당) | 7 | 없음 | 2026-05-23 | - |
| entry-exit-fact-certificate | 출입국에 관한 사실증명 인터넷 무료 발급받고 해외체류 이력 확인하는 법 | 7 | 없음 | 2026-07-17 | - |
| environment-guardian | 환경지킴이 (공공근로·청년 일자리) | 7 | 없음 | 2026-05-23 | - |
| environmental-measurement-agency-registration | 측정대행업 등록 숙련도시험적합확인서로 시도에 1만원 10일 만에 받는 법 | 7 | 없음 | 2026-07-18 | - |
| explosives-storage-facility-permit | 화약류 저장소 설치허가 신체검사서와 설계도로 경찰서에 3천원 10일 만에 받는 법 | 7 | 없음 | 2026-07-18 | - |
| export-certificate-of-origin-issuance | 수출품 원산지증명서 발급 상업송장으로 세관 대한상공회의소 1500원 즉시 3시간 만에 받는 법 | 7 | 없음 | 2026-07-18 | - |
| extended-childcare-fee | 연장형 보육료 지원 일반 보육료와 차이, 어디서 받을 수 있나요? | 7 | 없음 | 2026-05-23 | - |
| family-care-leave-long | 가족돌봄휴직 신청조건과 가족돌봄휴가 차이, 90일 급여까지 | 7 | 없음 | 2026-05-23 | - |
| family-register-certificate | 제적등본 2008년 이전 호적 확인하고 상속 서류 준비하는 법 | 7 | 없음 | 2026-07-17 | - |
| family-register-correction | 가족관계등록부 정정신청 판결등본으로 즉시 시읍면에 신청하는 법 | 7 | 없음 | 2026-07-17 | - |
| family-relation-certificate | 가족관계증명서 일반 상세 특정 차이 알고 인터넷 무료 발급받는 법 | 7 | 없음 | 2026-07-17 | - |
| farm-business-entity-certificate | 농업경영체 등록확인서 무료 발급받고 직불금 신청 준비하는 법 | 7 | 없음 | 2026-07-17 | - |
| farm-helper | 영농도우미 지원 신청자격과 연간한도, 직접 도우미 구해도 되나요? | 8 | 없음 | 2026-05-23 | - |
| farmer-insurance | 농업인 건강·연금보험료 지원, 농외소득 있어도 받나요? | 8 | 없음 | 2026-05-23 | - |
| farmland-acquisition-certificate | 농지취득자격증명 발급 기간 4일·7일·14일, 잔금일 맞추려면 언제 신청하나 | 7 | O | 2026-07-17 | - |
| farmland-conversion-permit | 농지전용허가 사업계획서 갖춰 면적별 10일에서 30일 만에 받는 법 | 7 | 없음 | 2026-07-18 | - |
| farmland-ledger-certificate | 농지대장(구 농지원부) 등본 인터넷 무료 발급받고 60일 이내 변경신고하는 법 | 7 | 없음 | 2026-07-17 | - |
| farmland-pension | 농지연금 예상 수령액 조회부터 신청까지, 60세 농지 담보로 얼마 받나 | 7 | O | 2026-08-06 | - |
| farmland-retirement-payment | 농지이양 은퇴직불금 매도·임대 차이와 지급상한, 2026 달라진 점 | 8 | 없음 | 2026-05-23 | - |
| fertilizer-production-business-registration | 비료생산업 등록 성분분석서와 재배시험성적서로 시군구 조례수수료 14일 만에 받는 법 | 7 | 없음 | 2026-07-18 | - |
| fetal-insurance-compare | 태아보험 비교와 보험사별 차이, 필수특약부터 산부인과 보험까지 | 4 | 없음 | 2026-09-07 | - |
| film-video-rating-classification | 영화 비디오물 등급분류 신청서로 영상물등급위원회에 영화10일 비디오14일 만에 받는 법 | 7 | 없음 | 2026-07-18 | - |
| fire-safety-management-business-registration | 소방시설관리업 등록신청 기술인력대장 갖춰 소방서에 4만원 15일 만에 신청하는 법 | 7 | 없음 | 2026-07-18 | - |
| fire-safety-manager-appointment-report | 소방안전관리자 선임신고 관리자수첩과 자격증으로 소방서에 수수료 없이 즉시 신고하는 법 | 7 | 없음 | 2026-07-18 | - |
| fisherman-insurance-hospital-claim | 어선원보험 보험금 병원에서 바로 청구, 7월 21일부터 전자청구 시스템 | 7 | 없음 | 2026-07-20 | - |
| fishing-boat-business-report | 낚시어선업신고 어선검사증서와 보험증서로 시군구에 2일 만에 신청하는 법 | 7 | 없음 | 2026-07-18 | - |
| fishing-license-grace-period | 어업허가유예 어선멸실 증빙서류로 시도 시군구에 2일 만에 신청하는 법 | 7 | 없음 | 2026-07-18 | - |
| fishing-license-suspension-report | 허가어업 휴업신고 구비서류 없이 세무서와 함께 즉시 신고하는 법 | 7 | 없음 | 2026-07-18 | - |
| food-business-closure-report | 식품관련영업 폐업신고 영업허가증반납으로 시군구 수수료없이 즉시 3시간 만에 받는 법 | 7 | 없음 | 2026-07-20 | - |
| food-business-permit-change | 식품영업 허가사항 변경 소재지는 26500원 그외는 9300원으로 즉시 신고하는 법 | 7 | 없음 | 2026-07-18 | - |
| food-manufacturing-registration | 식품제조가공업 등록 제조방법설명서로 2만8천원 3일 만에 받는 법 | 7 | 없음 | 2026-07-18 | - |
| food-service-business-report | 식품영업신고 위생교육이수증 갖춰 시군구에 수수료 2만8천원 즉시 신고하는 법 | 7 | 없음 | 2026-07-18 | - |
| foreign-worker-employment-permit-issuance | 외국인근로자 고용허가서 발급 재발급 도입업종증명서로 지방고용노동관서 수수료없이 적격자선정 즉시 받는 법 | 7 | 없음 | 2026-07-18 | - |
| foreigner-reentry-permit | 재입국허가 출국 전에 신청해 체류자격 유지하고 3일 만에 받는 법 | 7 | 없음 | 2026-07-17 | - |
| foreigner-registration | 외국인등록 90일 초과 체류 시 여권 사진으로 35000원 즉시 신청하는 법 | 7 | 없음 | 2026-07-18 | - |
| foreigner-registration-fact-certificate | 외국인등록 사실증명 인터넷 무료 발급받고 대출·계약에 제출하는 법 | 7 | 없음 | 2026-07-17 | - |
| foreigner-stay-extension | 외국인 체류기간연장허가 만료 전에 신청해 불법체류 피하는 법 | 7 | 없음 | 2026-07-17 | - |
| forest-disaster-response | 산림재난대응단 자격요건과 신청방법, 위험수당 지급까지 | 7 | 없음 | 2026-05-23 | - |
| forest-trail-guide | 숲길등산지도사 자격증 취득방법과 신청조건, 수당까지 | 7 | 없음 | 2026-05-23 | - |
| forest-tree-felling-report | 입목 벌채 굴취 신고 사업계획서로 시군구 수수료없이 병해충 산불피해목 30일 만에 받는 법 | 7 | 없음 | 2026-07-18 | - |
| forestry-successor-selection | 임업후계자 선발 요건증명서류로 시군구에 수수료없이 10일 만에 받는 법 | 7 | 없음 | 2026-07-18 | - |
| foster-care-confirmation-certificate | 가정위탁보호확인서 신분증만 있으면 방문 즉시 무료 발급받는 법 | 7 | 없음 | 2026-07-17 | - |
| four-insurance-workplace-establishment | 4대보험 사업장 성립신고 신규 창업 시 국민연금·건강보험 3일, 고용산재 5일 만에 신청하는 법 | 7 | 없음 | 2026-07-18 | - |
| freedom-of-information-request | 정보공개청구 서류 없이 10일 내 공개여부 결정받고 20일 만에 받는 법 | 7 | 없음 | 2026-07-18 | - |
| freight-forwarding-business-permit | 화물자동차 운송주선사업허가 자본금납입증명서로 16000원 20일 만에 받는 법 | 7 | 없음 | 2026-07-18 | - |
| freight-truck-business-permit | 화물자동차 운송사업허가 차고지확인서 갖춰 시도에 20일 만에 신청하는 법 | 7 | 없음 | 2026-07-18 | - |
| fuel-support | 고유가 피해지원금 우대·특별지원지역과 신청방법, 거동불편하면 | 7 | 없음 | 2026-05-23 | - |
| full-adoption-report | 친양자 입양 조건과 서류, 재혼 배우자 자녀도 되나 | 7 | 없음 | 2026-07-30 | - |
| game-addiction-healing | 게임 과몰입 치유프로그램 신청방법, 우리 아이 과몰입인지 아는 법 | 7 | 없음 | 2026-05-23 | - |
| game-business-change-registration | PC방 게임제공업 변경등록 허가증과 임대차계약서로 시군구에 3일 만에 신청하는 법 | 7 | 없음 | 2026-07-18 | - |
| ged-certificate-issuance | 검정고시 합격증명서 인터넷 발급 무료로 즉시 받는 법 | 7 | 없음 | 2026-07-17 | - |
| ged-exam-application | 검정고시 응시신청 졸업증명서 갖춰 시도교육청에 즉시 접수하는 법 | 7 | 없음 | 2026-07-18 | - |
| gift-tax | 증여세 면제한도 계산기로 확인하고 3개월 안에 신고하는 법 | 7 | 없음 | 2026-07-17 | - |
| graduation-expectancy-certificate | 졸업예정증명서 발급 안 될 때, 학사일정 오류 풀고 당일 발급받는 순서 | 7 | O | 2026-08-05 | - |
| group-food-service-facility-report | 집단급식소 설치운영신고 교육이수증으로 시군구에 2만8천원 즉시 신고하는 법 | 7 | 없음 | 2026-07-18 | - |
| hangang-overnight-festival | 한강무박2일 8월 8일 일정 확인하고 우천 취소 공지 조회하는 법 | 7 | 없음 | 2026-07-29 | - |
| happy-birth-onestop | 행복출산 원스톱서비스 신청방법과 맘편한임신 차이, 60일 소급까지 | 8 | 없음 | 2026-05-23 | - |
| happy-birth-onestop-service | 행복출산 원스톱서비스 출생신고와 함께 양육수당 아동수당 첫만남이용권 한번에 신청하는 법 | 7 | 없음 | 2026-07-18 | - |
| hazard-prevention-plan-submission | 유해위험 방지계획서 제출 기계설비배치도로 안전보건공단에 15일 만에 받는 법 | 7 | 없음 | 2026-07-18 | - |
| hazardous-material-facility-permit | 위험물제조소 설치허가 위치구조설비도면 갖춰 소방서에 5일 만에 신청하는 법 | 7 | 없음 | 2026-07-18 | - |
| hazardous-material-tank-safety-inspection | 위험물탱크안전성능검사 구조명세서로 소방서에 기밀 수압 충수시험 4일 만에 받는 법 | 7 | 없음 | 2026-07-18 | - |
| health-condition-discount-insurance | 혈압 혈당 정상이면 보험료 최대 42% 할인, 건강할인제도란 | 7 | 없음 | 2026-07-16 | - |
| health-functional-food-business-report | 건강기능식품 판매업신고 교육이수증으로 인터넷 2만5천원 3일 만에 받는 법 | 7 | 없음 | 2026-07-18 | - |
| health-insurance-dependent-registration | 건강보험 피부양자 등록 신청서로 3일 만에 자격 취득 신고하는 법 | 7 | 없음 | 2026-07-17 | - |
| health-insurance-eligibility-certificate | 건강보험 자격득실확인서 인터넷 무료 발급받고 가입이력 확인하는 법 | 7 | 없음 | 2026-07-17 | - |
| health-insurance-installment-payment | 건강보험료 3회 체납 시 분할납부신청서로 즉시 승인받는 법 | 7 | 없음 | 2026-07-18 | - |
| health-insurance-medical-expense-claim | 건강보험 요양비 처방전과 세금계산서로 40일 만에 환급받는 법 | 7 | 없음 | 2026-07-17 | - |
| health-insurance-payment-certificate | 건강보험료 납부확인서 2001년 이후 납부내역 인터넷 무료로 즉시 발급받는 법 | 7 | 없음 | 2026-07-18 | - |
| health-insurance-qualification-loss-report | 건강보험 자격상실신고 사망 국적상실 시 구비서류 없이 3일 신고하는 법 | 7 | 없음 | 2026-07-18 | - |
| heart-disease-diagnosis-rider | 심장질환 진단비, 허혈성이랑 확대형 뭐가 다른가요 | 7 | 없음 | 2026-07-16 | - |
| high-pressure-gas-facility-permit | 고압가스 제조판매저장소설치 허가 사업계획서와 기술검토서로 시군구에 5일 만에 신청하는 법 | 7 | 없음 | 2026-07-18 | - |
| high-school-transfer-assignment | 고등학교 전학 편입학 배정원서 하나로 재적학교에 즉시 신청하는 법 | 7 | 없음 | 2026-07-18 | - |
| home-care-facility-establishment-report | 재가노인복지시설 설치신고 사업계획서 갖춰 시군구에 수수료 없이 7일 만에 신청하는 법 | 7 | 없음 | 2026-07-18 | - |
| home-improvement-support | 주거급여 수선유지급여 신청자격과 임차급여 중복여부, 최대 1,601만원 | 7 | 없음 | 2026-05-23 | - |
| hospital-tier-classification-guide | 병원 급수, 왜 보험금이 다르게 나오는지 알아보기 | 7 | 없음 | 2026-07-16 | - |
| hospitalization-benefit-insurance | 입원비 보험과 수술비 보험, 진단비 보험은 실비보험 있어도 필요한가요? | 4 | 없음 | 2026-09-07 | - |
| household-liability-insurance-guide | 일상생활배상책임보험, 두 개 가입하면 두 배로 받나요 | 7 | 없음 | 2026-07-16 | - |
| housing-lease-report | 주택임대차신고 계약체결일부터 30일 이내 인터넷으로 하는 법 | 7 | 없음 | 2026-07-17 | - |
| housing-pension | 주택연금 가입조건 55세, 사망하면 집은 어떻게 되나요? | 7 | 없음 | 2026-07-16 | - |
| housing-scholar/신청자격 | 주거안정장학금 신청 자격, 기초·차상위 원거리 대학생 | 7 | 없음 | 2026-06-27 | - |
| hug-dundun-jeonse | 든든전세주택 11차 수시모집 공고 어디서 조회하고 입주신청하나 | 10 | 없음 | 2026-07-29 | - |
| hwadam-forest | 화담숲 예약부터 입장료 모노레일 요금까지, 예약 시간 지나면 입장 못 하나 | 6 | 없음 | 2026-09-18 | - |
| hygiene-product-manufacturing-report | 위생용품제조업 영업신고 교육수료증으로 2만8천원 3일 만에 받는 법 | 7 | 없음 | 2026-07-18 | - |
| imported-food-business-registration | 수입식품등 영업등록 신청 교육이수증으로 지방식약청 28000원 3일 만에 받는 법 | 7 | 없음 | 2026-07-20 | - |
| income-amount-certificate | 소득금액증명원 인터넷 무료 발급받고 대출·전세자금에 제출하는 법 | 7 | 없음 | 2026-07-17 | - |
| indemnity-insurance-exclusions | 실손보험이 보장 안 하는 것들, 건강검진부터 미용시술까지 | 7 | 없음 | 2026-07-16 | - |
| indemnity-insurance-generations | 실비보험 2세대 3세대 5세대, 뭐가 다르고 갈아타야 할까요? | 7 | 없음 | 2026-07-16 | - |
| indemnity-insurance-switch-strategy | 실손보험 세대가 왜 자꾸 바뀌나요, 자기부담률·재가입주기 변천사 | 7 | 없음 | 2026-07-16 | - |
| individual-house-price-confirmation | 개별주택가격 확인 재산세 기준 인터넷·모바일로 즉시 조회하는 법 | 7 | 없음 | 2026-07-18 | - |
| individual-land-price-confirmation | 개별공시지가 확인서 조례 수수료로 시군구에 즉시 발급받는 법 | 7 | 없음 | 2026-07-18 | - |
| individual-land-price-objection | 개별공시지가 이의신청 공시일부터 30일 이내 재산세 낮추는 법 | 7 | 없음 | 2026-07-18 | - |
| industrial-accident-benefit-subrogation | 산재보험급여 대체지급 근로복지공단에 10일 만에 대위청구하는 법 | 7 | 없음 | 2026-07-18 | - |
| industrial-accident-disability-benefit | 산재 장해급여 치료 끝난 후 근로복지공단에 청구하는 법 | 7 | 없음 | 2026-07-17 | - |
| industrial-accident-medical-benefit | 산재보험 요양급여 소견서 챙겨서 근로복지공단에 신청하는 법 | 7 | 없음 | 2026-07-17 | - |
| industrial-accident-nursing-benefit | 산재보험 간병급여 간병인 증명서류로 근로복지공단에 7일 만에 청구하는 법 | 7 | 없음 | 2026-07-18 | - |
| industrial-accident-re-examination-request | 산재 심사청구 결정 불복 시 진료기록으로 60일 만에 재심사받는 법 | 7 | 없음 | 2026-07-17 | - |
| industrial-accident-return-to-work-subsidy | 산재 직장복귀지원금 임금원천징수부로 7일 만에 청구하는 법 | 7 | 없음 | 2026-07-17 | - |
| industrial-accident-survivor-benefit | 산재 유족급여 장례비 사망진단서로 근로복지공단에 청구하는 법 | 7 | 없음 | 2026-07-17 | - |
| industrial-accident-survivor-pension-change | 산재 유족연금 수급권자 변경 사망진단서로 10일 만에 신고하는 법 | 7 | 없음 | 2026-07-17 | - |
| industrial-accident-temporary-disability-benefit | 산재 휴업급여 임금대장으로 7일 만에 청구 2년 넘으면 상병보상연금 | 7 | 없음 | 2026-07-17 | - |
| industrial-property-application | 산업재산권 출원 명세서와 도면으로 특허 실용신안 상표 디자인 7일 만에 접수하는 법 | 7 | 없음 | 2026-07-18 | - |
| infant-developmental-checkup | 영유아 발달정밀검사비 지원대상과 신청기한, 검사비 받는 방법 | 7 | 없음 | - | - |
| inheritance-registration | 상속등기 신청방법과 서류, 취득세 2.8%까지 총정리 | 7 | 없음 | 2026-07-11 | - |
| inheritance-tax | 상속세 계산기로 면제한도 확인하고 6개월 안에 신고하는 법 | 7 | 없음 | 2026-07-17 | - |
| innobiz-certificate | 이노비즈 확인서 서류 없이 지방중기청에 7일 만에 발급받는 법 | 7 | 없음 | 2026-07-18 | - |
| insurance-claim-denial-rate | 보험금 잘 주는 회사 vs 안 주는 회사, 부지급률로 비교하는 법 | 7 | 없음 | 2026-07-16 | - |
| insurance-disclosure-duty-guide | 보험 고지의무 안 지키면 벌어지는 일, 실제 분쟁사례로 보기 | 7 | 없음 | 2026-07-16 | - |
| insurance-policy-certificate | 보험증권 어디서 받나요, 조회 방법과 보는 법 그리고 재발급 | 4 | 없음 | 2026-09-07 | - |
| insured-turnover-confirmation | 피보험자 이직확인서 사업주가 서류 없이 10일 만에 발급받는 법 | 7 | 없음 | 2026-07-18 | - |
| integrated-career-certificate | 고용24 통합경력증명서 발급받고 이력서 자동완성하는 법 | 7 | 없음 | 2026-07-30 | - |
| international-drivers-license | 국제운전면허증 9000원 경찰서 즉시발급 vs 인터넷 14일 차이 | 7 | O | 2026-07-17 | - |
| international-freight-forwarding-registration | 국제물류주선업 등록 등록기준증명서로 시도에 2만원 신규10일 변경5일 만에 받는 법 | 7 | 없음 | 2026-07-18 | - |
| international-vaccination-certificate-reissue | 국제공인예방접종 증명서 재발급 인적사항 변경으로 국립검역소 1000원 즉시 받는 법 | 7 | 없음 | 2026-07-18 | - |
| investment-advisory-discretionary-business-registration | 투자자문업 투자일임업 등록 임원경력증명서로 금융위원회에 수수료없이 2개월 만에 받는 법 | 7 | 없음 | 2026-07-18 | - |
| isa-bank-comparison | ISA 계좌 은행별 정기예금 금리 비교, 어디가 제일 유리할까 | 7 | 없음 | 2026-07-21 | - |
| isolated-youth-onestop | 고립·은둔 청소년 원스톱 지원, 비밀보장과 심리치료까지 | 8 | 없음 | 2026-05-23 | - |
| it-communications-construction-business-registration | 정보통신공사업등록 기업진단보고서로 한국정보통신공사협회 3만원 10일 만에 받는 법 | 7 | 없음 | 2026-07-18 | - |
| jaebeol-xhyeongsa2-rerun | 재벌형사 2 재방송 시간과 편성표, 다시보기는 어디서 보나? | 5 | 없음 | 2026-08-11 | - |
| jeonse-right-registration | 전세권설정등기 신청방법과 비용, 확정일자와 뭐가 다른가요? | 7 | 없음 | 2026-07-16 | - |
| k-mooc-online | K-MOOC 수강방법과 수료증·학점인정, 외국어 강좌도 있나요? | 8 | 없음 | 2026-07-31 | - |
| k-move-school | K-Move스쿨 신청자격과 연수국가, 취업이 보장되나요? | 8 | 없음 | 2026-05-23 | - |
| labor-consultant-corporation-establishment-approval | 노무법인 설립인가 신청 업무계획서와 정관으로 지방고용노동관서 수수료없이 14일 만에 받는 법 | 7 | 없음 | 2026-07-18 | - |
| labor-union-certificate-reissue | 노동조합 설립신고증 분실 시 서류 없이 관할기관에 2일 만에 재교부받는 법 | 7 | 없음 | 2026-07-18 | - |
| labor-union-establishment-report | 노동조합 설립신고 규약으로 관할기관에 수수료없이 3일 만에 받는 법 | 7 | 없음 | 2026-07-18 | - |
| land-register-certificate | 토지대장 임야대장 인터넷 무료 발급받고 지목·면적 확인하는 법 | 7 | 없음 | 2026-07-17 | - |
| land-transaction-permit | 토지거래허가구역 매수 전 자금조달계획서로 15일 만에 허가받는 법 | 7 | 없음 | 2026-07-17 | - |
| land-use-conversion | 내 땅 토지이용계획 열람하고 농지·산지 전용 조건 확인하는 법 | 7 | 없음 | 2026-07-29 | - |
| large-scale-store-closure-report | 대규모점포 휴업 폐업신고 서류 없이 시군구에 3일 만에 신고하는 법 | 7 | 없음 | 2026-07-18 | - |
| large-scale-store-registration | 대규모점포 개설등록 상권영향평가서 갖춰 시군구에 30일 만에 신청하는 법 | 7 | 없음 | 2026-07-18 | - |
| leap-savings | 장기간부 도약적금 가입시기와 납입한도, 왜 군 간부에게만 주나요? | 7 | 없음 | 2026-05-23 | - |
| lease-fixed-date | 전월세 계약 후 확정일자 인터넷·방문으로 받아 보증금 지키는 법 | 7 | 없음 | 2026-07-17 | - |
| led-lighting-support | 에너지 취약계층 고효율 조명기기 무상교체 지원 | 7 | 없음 | 2026-05-23 | - |
| leverage-etf-investor-protection | 레버리지 ETF 기본예탁금 3천만원 상향, 사전교육·괴리율 확인까지 총정리 | 7 | 없음 | 2026-07-22 | - |
| lh-apply-plus | LH청약플러스 신청방법, 인증서와 서류 뭘 준비해야 하나 | 7 | 없음 | 2026-07-31 | - |
| lh-sh-rental-compare | LH SH 공공임대주택 5종 신청자격 비교, 거주기간 모르고 넣으면 헛걸음 | 7 | O | 2026-08-18 | - |
| life-vs-nonlife-insurance | 생명보험 손해보험 제3보험, 실손보험은 어디에 속하나요 | 7 | 없음 | 2026-07-16 | - |
| lifelong-education-instructor-certificate | 평생교육사 자격증 발급 재발급 성적증명서로 수수료 없이 8일에서 12일 만에 받는 법 | 7 | 없음 | 2026-07-18 | - |
| lim-youngwoong-concert-2026 | 임영웅 콘서트 고양 좌석 등급별 가격, 잔여석 실시간으로 어떻게 보나 | 7 | 없음 | 2026-07-16 | - |
| liquor-manufacturing-site-relocation-report | 주류 제조장·판매장 이전 신고 사업계획서로 세무서 수수료없이 소매업 7일 만에 받는 법 | 7 | 없음 | 2026-07-20 | - |
| liquor-sales-license-application | 주류판매업 면허신청 자본금납입증명서로 세무서에 도매5만원 소매3만원 40일 만에 받는 법 | 7 | 없음 | 2026-07-18 | - |
| livelihood-account | 생계비계좌 개설 조건과 은행, 월 250만원 압류방지 신청방법 | 7 | 없음 | 2026-07-11 | - |
| livestock-business-transfer-report | 축산업 영업자 지위승계 신고 가축분뇨처리계획서로 시군구 승계30일 이내 하는 법 | 7 | 없음 | 2026-07-18 | - |
| livestock-product-business-report | 정육점 축산물판매업 영업신고 시설내역서로 인터넷 9천원 3일 만에 받는 법 | 7 | 없음 | 2026-07-18 | - |
| loan-business-registration | 대부업 대부중개업 등록 교육이수증과 자본증명서로 시도에 10만원 14일 만에 신청하는 법 | 7 | 없음 | 2026-07-18 | - |
| local-gift-card | 지역사랑상품권 구매방법과 사용처, 할인율과 환불여부까지 | 7 | 없음 | 2026-05-23 | - |
| local-tax-collection-deferral | 지방세 징수유예 재해 장기치료 시 담보서로 10일 만에 신청하는 법 | 7 | 없음 | 2026-07-17 | - |
| local-tax-item-certificate | 지방세 세목별 과세증명서 인터넷 무료 발급받고 재산세·자동차세 납부실적 증명하는 법 | 7 | 없음 | 2026-07-17 | - |
| local-tax-payment-certificate | 지방세 납세증명서 인터넷 무료 발급받고 대출·입찰에 제출하는 법 | 7 | 없음 | 2026-07-17 | - |
| local-tax-payment-confirmation | 취득세 등록면허세 납부확인서 신분증만 있으면 무료로 즉시 발급받는 법 | 7 | 없음 | 2026-07-18 | - |
| local-tax-refund-claim | 지방세 잘못 냈거나 더 냈으면 위택스로 환급 청구하는 법 | 7 | 없음 | 2026-07-17 | - |
| long-term-care-institution-designation | 장기요양기관 지정 신청 사업계획서와 운영규정으로 수수료없이 30일 만에 받는 법 | 7 | 없음 | 2026-07-18 | - |
| loss-sharing-mortgage | 손익공유형모기지 최초 5년 1.3% 신청하고 손익 나눠 갚는 법 | 7 | 없음 | 2026-07-17 | - |
| low-income-single-parent | 한부모가족 아동양육비 청소년한부모와 차이, 주거지원도 되나요? | 8 | 없음 | 2026-05-23 | - |
| lpg-business-change-permit | LPG 충전사업 변경허가 기술검토서 갖춰 시군구에 1만5천원 4일 만에 신청하는 법 | 7 | 없음 | 2026-07-18 | - |
| lpg-business-permit | LPG 충전판매사업 허가신청 사업계획서와 기술검토서로 시군구 3만원 5일 만에 받는 법 | 7 | 없음 | 2026-07-20 | - |
| lpg-safety-manager-appointment-report | LPG 안전관리자 선임 해임 퇴직신고 자격증명서로 시군구 수수료없이 즉시 3시간 만에 하는 법 | 7 | 없음 | 2026-07-18 | - |
| ltci-doctor-opinion-form | 장기요양 의사소견서 양식 다운로드, 발급 방법과 유효기간은? | 7 | O | 2026-08-14 | - |
| ltci-family-care-benefit-form | 가족요양비 지급 신청서 다운로드, 신청 방법과 못 받는 급여는? | 7 | O | 2026-08-14 | - |
| ltci-grade-criteria-guide | 장기요양등급 1~5등급, 인지지원등급까지 점수 기준 총정리 | 7 | 없음 | 2026-07-16 | - |
| ltci-medical-aid-facility-application | 의료급여수급권자 장기요양기관 입소 인정서 사본으로 7일 신청하는 법 | 7 | 없음 | 2026-07-17 | - |
| ltci-review-request-form | 장기요양 심사청구서 다운로드, 재심사청구는 언제까지 해야 하나? | 7 | O | 2026-08-14 | - |
| ltci-survey-sheet | 장기요양인정조사표 다운로드, 방문조사 때 뭐뭐 묻나? | 7 | O | 2026-08-14 | - |
| mainbiz-certificate-reissue | 메인비즈 확인서 발급 확인서 원본이나 서류 없이 7일 만에 받는 법 | 7 | 없음 | 2026-07-18 | - |
| maritime-criminal-complaint | 해상 사건사고 고소 고발 진정 탄원 서류 없이 해양경찰서에 접수하는 법 | 7 | 없음 | 2026-07-18 | - |
| marriage-brokerage-business-registration | 국내 국제결혼중개업 신고등록 자본금 1억과 보증보험으로 시군구에 30일 만에 신청하는 법 | 7 | 없음 | 2026-07-18 | - |
| marriage-brokerage-certificate-reissue | 결혼중개업 신고필증 등록증 재발급 훼손증 지참으로 시군구 수수료없이 7일 만에 받는 법 | 7 | 없음 | 2026-07-18 | - |
| medical-aid-type1-type2-difference | 의료급여 1종 2종 차이, 본인부담금부터 건강생활유지비 혜택까지 | 8 | 없음 | 2026-07-24 | - |
| medical-device-manufacturing-permit | 의료기기 제조수입업 허가 품질책임자서류로 지방식약청 14만원 25일 만에 받는 법 | 7 | 없음 | 2026-07-18 | - |
| medical-device-sales-report | 의료기기 판매업 신고 서류 없이 인터넷 9천원 방문 1만원 3일 만에 받는 법 | 7 | 없음 | 2026-07-18 | - |
| medical-license-certificate | 의료인면허등록증명 발급신청 구비서류없이 보건복지부 500원 즉시 3시간 만에 받는 법 | 7 | 없음 | 2026-07-20 | - |
| middle-aged-career-support | 중장년 경력지원제 신청자격과 참여기업 조건, 참여수당 월 150만원 | 7 | 없음 | 2026-05-23 | - |
| middle-aged-tomorrow-center | 중장년내일센터 생애경력설계 무료, 내일이음패키지는 뭐가 다른가요? | 7 | 없음 | 2026-05-23 | - |
| middle-school-transfer-assignment | 중학교 전학 편입학 배정원서와 재학증명서로 교육지원청에 즉시 신청하는 법 | 7 | 없음 | 2026-07-18 | - |
| military-checkup-date-selection | 병역판정검사 입영일자 본인이 원하는 날짜로 인터넷 신청하는 법 | 7 | 없음 | 2026-07-17 | - |
| military-overseas-travel-permit | 병역의무자 국외여행허가 25세 이상 유학 취업 총2일 신청하는 법 | 7 | 없음 | 2026-07-17 | - |
| military-pension | 군인연금 몇 년 복무하면 받나, 수령액 계산과 신청방법까지 | 7 | O | 2026-08-06 | - |
| military-service-certificate | 병적증명서 무료 인터넷 발급받고 복무필자는 주민등록초본으로 대체하는 법 | 7 | 없음 | 2026-07-17 | - |
| military-service-postponement | 병역판정검사 입영일자 연기 진단서로 신청 유형별 처리기간 다른 법 | 7 | 없음 | 2026-07-17 | - |
| minimum-wage-2027 | 2027년 최저임금 10,700원 확정 절차, 월급으로는 얼마인가요? | 7 | 없음 | 2026-07-16 | - |
| minor-guardian-change-report | 미성년후견인 경질신고 취임 1개월 이내 재판등본으로 시읍면에 하는 법 | 7 | 없음 | 2026-07-18 | - |
| missing-child-fingerprint-registration | 지문 사전등록 아동 무료로 즉시 등록해 실종 대비하는 법 | 7 | 없음 | 2026-07-17 | - |
| missing-person-declaration | 실종선고 청구 5년 기다려야 하나, 신고까지 절차 정리 | 7 | 없음 | 2026-07-30 | - |
| missing-person-report-receipt | 실종아동 가출인 신고접수증 서류 없이 경찰서에서 즉시 발급받는 법 | 7 | 없음 | 2026-07-18 | - |
| mobile-pet-grooming-registration | 이동식 애견미용차 동물미용업 등록 사업계획서로 시군구에 1만원 15일 만에 신청하는 법 | 7 | 없음 | 2026-07-18 | - |
| modu-card-refund-standard | 모두의카드 환급기준금액, 수도권 5만원 쓰면 2만원 돌려받는 이유 | 7 | 없음 | 2026-07-27 | - |
| mom-pregnancy-onestop | 맘편한임신 원스톱 신청방법, 행복출산 원스톱과 차이는? | 8 | 없음 | 2026-05-23 | - |
| mortgage-cancellation | 근저당권 말소 셀프 신청방법과 서류, 비용까지 | 7 | 없음 | 2026-07-11 | - |
| mounjaro-price-comparison | 마운자로 처방 병원별 가격, 공식 공개자료에서 조회되는 항목인가 | 7 | O | 2026-07-16 | - |
| move-in-report-online | 전입신고 인터넷으로 하는 법, 정부24에서 요금감면까지 한번에 신청 | 7 | 없음 | 2026-07-20 | - |
| movie-discount-voucher | 영화지원금 2차 신청방법, CGV 롯데시네마 메가박스 사용법 | 7 | 없음 | 2026-07-08 | - |
| multi-culture-child-edu | 다문화가족 자녀 교육활동비 신청방법, 한국어가 서툴러도 되나요? | 8 | 없음 | 2026-05-23 | - |
| multilevel-marketing-change-report | 다단계판매업 등록사항 변경신고 등록증으로 시도에 3일 만에 신청하는 법 | 7 | 없음 | 2026-07-18 | - |
| multilevel-marketing-registration | 다단계판매업 등록 소비자피해보상보험 서류 갖춰 시도에 7일 만에 신청하는 법 | 7 | 없음 | 2026-07-18 | - |
| multiplex-game-provider-registration | PC방 복합유통게임제공업 등록 시설개요서로 시군구에 3일 만에 신청하는 법 | 7 | 없음 | 2026-07-18 | - |
| music-business-closure-report | 노래연습장업 폐업신고 등록증만으로 세무서와 함께 3일 만에 신고하는 법 | 7 | 없음 | 2026-07-18 | - |
| name-change-report | 개명신고 법원허가 등본 받은 날부터 1개월 이내 신고하는 법 | 7 | 없음 | 2026-07-17 | - |
| national-employment-support | 국민취업지원제도 1유형 2유형 차이, 구직촉진수당 신청방법 | 7 | 없음 | 2026-05-23 | - |
| national-heritage-internship | 국가유산 청년 인턴십 | 7 | 없음 | 2026-05-23 | - |
| national-pension-disability-benefit | 국민연금 장애연금 장애심사용 진단서로 1개월 만에 청구하는 법 | 7 | 없음 | 2026-07-17 | - |
| national-pension-divided-benefit | 국민연금 분할연금 이혼한 배우자 노령연금 나눠 받는 법 | 7 | 없음 | 2026-07-17 | - |
| national-pension-lump-sum | 국민연금 반환일시금 지급조건과 소멸시효, 60세 안 되면 못 받나요? | 7 | 없음 | 2026-07-16 | - |
| national-pension-review-request | 국민연금 심사청구 자격 보험료 처분에 이의 있으면 60일 만에 다투는 법 | 7 | 없음 | 2026-07-17 | - |
| national-pension-survivor-benefit | 국민연금 유족연금 사망진단서 챙겨서 방문 청구하는 법 | 7 | 없음 | 2026-07-17 | - |
| national-scholarship-second-round | 국가장학금 2차 신청기간 8월 12일 확인하고 신청하는 법 | 9 | O | 2026-07-29 | - |
| national-secretary | 국민비서 구삐 신청방법과 알림채널, 개인정보는 안전한가요? | 7 | 없음 | 2026-05-23 | - |
| national-tax-objection | 국세 이의신청 처분 안 날부터 90일 이내 불복이유서로 다투는 법 | 7 | 없음 | 2026-07-17 | - |
| national-tax-payment-certificate | 국세 납세증명서 인터넷 무료 발급받고 해외이주여권용 10일 대비하는 법 | 7 | 없음 | 2026-07-17 | - |
| national-tax-payment-deadline-extension | 국세 납부기한 연장 천재지변 진단서로 3일 만에 승인받는 법 | 7 | 없음 | 2026-07-17 | - |
| national-technical-qualification-issuance | 국가기술자격증 신규발급 사진 1장으로 총15일 만에 신청하는 법 | 7 | 없음 | 2026-07-17 | - |
| national-technical-qualification-verification | 국가기술자격 취득사항 확인신청 검정시행기관에 구비서류없이 즉시 3시간 만에 받는 법 | 7 | 없음 | 2026-07-18 | - |
| nationality-fact-certificate | 귀화허가 국적취득사실증명 인터넷 무료로 즉시 발급받는 법 | 7 | 없음 | 2026-07-18 | - |
| nationality-loss-report | 국적상실신고 외국여권사본으로 출입국외국인청 수수료없이 즉시 3시간 만에 하는 법 | 7 | 없음 | 2026-07-18 | - |
| new-business-startup-school | 신사업창업사관학교 사업화자금 4,000만원, 졸업하면 끝인가요? | 7 | 없음 | 2026-05-23 | - |
| new-start-fund | 새출발기금 채무조정 대상 확인하고 신청하는 법, 원금 최대 90% 감면 | 8 | 없음 | 2026-08-10 | - |
| newspaper-internet-news-business-registration | 신문 인터넷신문 사업등록 정관과 인쇄사신고필증으로 시도 수수료없이 20일 만에 받는 법 | 7 | 없음 | 2026-07-18 | - |
| no-refund-life-insurance-guide | 무해지환급형 보험이 왜 더 저렴한가요? 가입 전 꼭 확인할 점 | 7 | 없음 | 2026-07-16 | - |
| noise-meter-rental | 층간소음 측정기 무료대여 신청방법, 측정 후 어떤 조치 받나요? | 7 | 없음 | 2026-05-23 | - |
| noise-vibration-facility-permit | 소음진동배출시설 설치허가 신고 설치명세서로 시군구 조례수수료 5일 만에 받는 법 | 7 | 없음 | 2026-07-18 | - |
| nonprofit-corporation-establishment-permit | 비영리법인 설립허가 정관과 재산목록 갖춰 주무관청에 수수료 없이 14일 만에 신청하는 법 | 7 | 없음 | 2026-07-18 | - |
| nursing-assistant-certificate-issuance | 간호조무사 자격증 발급 이수증명서로 신규 30일 재발급 5일 만에 받는 법 | 7 | 없음 | 2026-07-18 | - |
| nursing-facility-insurance | 요양원 요양병원 비용, 실비보험으로 얼마나 보장되나요? | 7 | 없음 | 2026-07-16 | - |
| nutrition-plus | 영양플러스 식품패키지와 영양교육, 지원기간은 얼마나 되나요? | 8 | 없음 | 2026-05-23 | - |
| online-mail-order-business-change | 통신판매업 변경신고 상호 주소 변경 시 신고증 원본으로 3일 만에 신청하는 법 | 7 | 없음 | 2026-07-18 | - |
| online-mail-order-business-closure | 통신판매업 휴폐업신고 신고증 원본으로 시군구에 3일 만에 신고하는 법 | 7 | 없음 | 2026-07-18 | - |
| online-mail-order-business-registration | 통신판매업신고 구매안전서비스 확인증으로 시군구에 3일 만에 신청하는 법 | 7 | 없음 | 2026-07-18 | - |
| online-mail-order-certificate-reissue | 통신판매업 신고증 재발급 신분증만 있으면 시군구에서 즉시 받는 법 | 7 | 없음 | 2026-07-18 | - |
| optical-shop-opening-registration | 안경업소 개설등록 시설장비개요서로 시군구에 3일 만에 신청하는 법 | 7 | 없음 | 2026-07-18 | - |
| out-of-home-teen | 가정 밖 청소년 지원 청소년쉼터 생활과 자립지원수당 연계까지 | 8 | 없음 | 2026-05-23 | - |
| out-of-school-job | 학교 밖 청소년 자립·취업지원, 자격증 응시료도 지원되나요? | 8 | 없음 | 2026-05-23 | - |
| out-of-school-teen | 학교 밖 청소년 지원 검정고시와 진로취업, 다른 지원 중복여부 | 8 | 없음 | 2026-05-23 | - |
| outdoor-advertisement-extension | 간판 표시기간 연장허가 사용승락서와 현장사진으로 5일 만에 신청하는 법 | 7 | 없음 | 2026-07-18 | - |
| outdoor-advertisement-permit | 가게 간판 옥외광고물 허가신고 사용승락서로 5일 만에 신청하는 법 | 7 | 없음 | 2026-07-18 | - |
| outdoor-advertisement-safety-inspection | 옥외광고물 안전점검 신청 설계도서로 시군구에 사례별수수료 7일 만에 받는 법 | 7 | 없음 | 2026-07-18 | - |
| outdoor-advertising-business-registration | 옥외광고업 신규등록 기술능력증명서와 교육이수서로 시군구 조례수수료 7일 만에 받는 법 | 7 | 없음 | 2026-07-18 | - |
| outdoor-assembly-report | 옥외집회 신고 시작 48시간 전까지 관할 경찰서에 접수하는 법 | 7 | 없음 | 2026-07-18 | - |
| outdoor-assembly-withdrawal-report | 옥외집회 시위 철회신고 개최 24시간 전 경찰서에 수수료없이 즉시 3시간 만에 하는 법 | 7 | 없음 | 2026-07-18 | - |
| overseas-emigration-report | 해외이주신고 여권과 영주권 서류로 재외동포청에 즉시 신고하는 법 | 7 | 없음 | 2026-07-18 | - |
| overseas-korean-registration | 재외국민등록 체류사증과 여권으로 재외공관에 3일 만에 신청하는 법 | 7 | 없음 | 2026-07-18 | - |
| overseas-residence-report | 국외이주신고 주민등록증만 있으면 읍면동에서 즉시 신고하는 법 | 7 | 없음 | 2026-07-18 | - |
| overseas-trading-partner-code-registration | 해외거래처부호등록 송품장으로 세관에 수수료없이 1일 만에 받는 법 | 7 | 없음 | 2026-07-18 | - |
| paid-job-placement-agency-registration | 유료직업소개소 등록 종사자명부와 보증보험으로 시군구에 3만원 15일 만에 신청하는 법 | 7 | 없음 | 2026-07-18 | - |
| parental-work-reduction-pay/신청방법eiGovKr절차 | 육아기 근로시간 단축급여 신청 방법 — ei.go.kr 절차 5단계 | 7 | 없음 | 2026-05-23 | - |
| passenger-transport-license-reissue | 여객자동차 운수사업 면허증 재발급신청 훼손면허증으로 시군구 2000원 1일 만에 받는 법 | 7 | 없음 | 2026-07-20 | - |
| passport-entry-change | 여권 구여권번호 출생지 기재 재외공관 인천공항서 5천원 신청하는 법 | 7 | 없음 | 2026-07-18 | - |
| passport-fact-certificate | 여권 사실증명 발급기록 실효확인 인터넷 무료로 즉시 받는 법 | 7 | 없음 | 2026-07-18 | - |
| passport-issuance | 여권 발급 수수료 확인하고 재발급은 정부24로 신청하는 법 | 7 | 없음 | 2026-07-17 | - |
| passport-loss-report | 여권 분실 신고 신분증만으로 즉시 접수하는 법 취소는 불가능 | 7 | 없음 | 2026-07-18 | - |
| paternity-acknowledgment-report | 인지 친권자지정신고 혼인외 출생자를 친생자로 시읍면에 수수료 없이 신고하는 법 | 7 | 없음 | 2026-07-18 | - |
| pc-cafe-business-registration | PC방 등록 임대차계약서와 시설개요서로 시군구에 조례수수료 3일 만에 받는 법 | 7 | 없음 | 2026-07-18 | - |
| personal-info-access-request | 내 개인정보 처리내역 신분증만 있으면 공공기관에 10일 만에 열람청구하는 법 | 7 | 없음 | 2026-07-18 | - |
| pet-boarding-business-registration | 반려동물호텔 동물위탁관리업 등록 사업계획서로 시군구에 1만원 15일 만에 신청하는 법 | 7 | 없음 | 2026-07-18 | - |
| pet-funeral-business-status-report | 동물장묘업 휴업 폐업 재개업신고 허가증만으로 시군구에 수수료 없이 즉시 신고하는 법 | 7 | 없음 | 2026-07-18 | - |
| pet-insurance-guide | 펫보험 가입해도 되나요? 진료비 40%가 병원비인데 보장 되나 | 7 | 없음 | 2026-07-16 | - |
| pet-registration | 반려견 동물등록 무선식별장치 1만원에 하고 미등록 과태료 피하는 법 | 7 | 없음 | 2026-07-17 | - |
| pharmaceutical-wholesale-permit | 의약품도매상허가 재무상태표와 기업진단서로 시도에 2만원 7일 만에 받는 법 | 7 | 없음 | 2026-07-18 | - |
| pharmacy-establishment-registration | 약국개설등록 면허증 제시만으로 시군구에 1만원 7일 만에 신청하는 법 | 7 | 없음 | 2026-07-18 | - |
| platform-worker-leave-report | 특수형태근로종사자 산재보험 휴업신고 서류 없이 7일 만에 처리하는 법 | 8 | 없음 | 2026-07-18 | - |
| port-transportation-business-registration | 항만운송사업등록 사업계획서로 시도 지방해양수산청에 1만원 5일 만에 받는 법 | 7 | 없음 | 2026-07-18 | - |
| postal-insurance-fetus-registration | 우체국보험 태아등재, 22주 지나면 정말 못 하나요 | 7 | 없음 | 2026-07-16 | - |
| postpartum-care-center-report | 산후조리원 산후조리업 신고 건강진단서와 책임보험서류로 시군구 수수료없이 5일 만에 받는 법 | 7 | 없음 | 2026-07-18 | - |
| pregnancy-pre-health | 임신 사전건강관리 검사항목과 신청방법, 다른 지원과 중복여부 | 8 | 없음 | 2026-05-23 | - |
| preschool-tuition | 누리과정 유치원학비 신청방법, 어린이집 보육료 중복지원 안되나요? | 7 | 없음 | 2026-05-23 | - |
| private-academy-establishment-registration | 학원설립 운영등록 시설평면도 갖춰 교육지원청에 10일 만에 신청하는 법 | 7 | 없음 | 2026-07-18 | - |
| private-school-pension | 사학연금 몇 년 재직하면 받나, 수령액 계산과 청구 방법까지 | 7 | O | 2026-08-06 | - |
| private-taxi-license | 개인택시 면허 신청 택시운전자격증과 건강진단서로 시군구에 60일 만에 받는 법 | 7 | 없음 | 2026-07-18 | - |
| profit-sharing-mortgage | 수익공유형모기지 금리 1.8%로 신청하고 매각차익 나눠 갚는 법 | 7 | 없음 | 2026-07-17 | - |
| property-tax-installment | 재산세 분할납부 납부기한 안에 무료로 신청해 목돈부담 줄이는 법 | 7 | 없음 | 2026-07-17 | - |
| protected-child-scholar | 보호대상아동 민간후원 장학사업, 인강만 받나요? 3년 후에도? | 7 | 없음 | 2026-05-23 | - |
| public-forest-manager | 공공산림관리단 (산림 관리 공공일자리) | 7 | 없음 | 2026-05-23 | - |
| public-health-business-closure-report | 공중위생영업 폐업신고 세무서와 함께 폐업 후 20일 이내 수수료 없이 즉시 신고하는 법 | 7 | 없음 | 2026-07-18 | - |
| public-health-business-report | 숙박업 미용업 세탁업 공중위생영업신고 시설개요서로 시군구에 수수료 없이 즉시 신고하는 법 | 7 | 없음 | 2026-07-18 | - |
| public-health-business-succession-report | 공중위생영업 지위승계신고 양도양수증명서로 시군구에 수수료 없이 즉시 신고하는 법 | 7 | 없음 | 2026-07-18 | - |
| public-housing-asset-test | 공공임대주택 총자산 조회하고 자산심사 기준 확인하는 법 | 9 | 없음 | 2026-07-29 | - |
| real-estate-agency-closure-report | 공인중개사무소 휴업 폐업 신고 등록증만 있으면 즉시 처리하는 법 | 7 | 없음 | 2026-07-18 | - |
| real-estate-agency-registration | 공인중개사무소 개설등록 실무교육 수료증으로 시군구에 7일 만에 신청하는 법 | 7 | 없음 | 2026-07-18 | - |
| real-estate-registration-number-certificate | 외국인 부동산등기용 등록증명서 인터넷 무료로 즉시 발급받는 법 | 7 | 없음 | 2026-07-18 | - |
| real-estate-registry-certificate | 등기부등본 인터넷 1000원에 발급받고 권리관계 확인하는 법 | 7 | 없음 | 2026-07-17 | - |
| real-estate-tax-reform-2026 | 2026 부동산 세제개편안 정리, 시가 20억 비과세라는데 내 집은 어느 구간인가 | 7 | O | 2026-08-04 | - |
| real-estate-transaction-report | 부동산거래신고 계약체결일부터 60일 이내 인터넷으로 하는 법 | 7 | 없음 | 2026-07-17 | - |
| registered-domicile-change | 등록기준지 변경신고 기본증명서로 방문 즉시 이전하는 법 | 7 | 없음 | 2026-07-17 | - |
| registered-sports-facility-business-plan-approval | 체육시설업 사업계획승인 운영계획서로 시도에 조례수수료 40일 만에 받는 법 | 7 | 없음 | 2026-07-18 | - |
| relocation-expense-claim | 이주비 청구 취업으로 이사했으면 운송비 영수증으로 받는 법 | 7 | 없음 | 2026-07-17 | - |
| renewal-vs-nonrenewal-insurance | 갱신형보험 비갱신형보험, 보험료 왜 이렇게 차이 나나요 | 7 | 없음 | 2026-07-16 | - |
| rental-dispute-mediation/소송분쟁조정비교 | 임대차 분쟁 소송과 조정 중 어떤 게 더 유리한가, 비용·기간·효력 비교 | 7 | 없음 | 2026-05-23 | - |
| reserve-forces-training-deferral | 예비군 훈련보류 재직 재학증명서로 소속중대에 1일 만에 신청하는 법 | 7 | 없음 | 2026-07-18 | - |
| reserve-forces-training-postponement | 예비군 훈련연기 진단서로 소속중대에 1일 만에 신청하는 법 | 7 | 없음 | 2026-07-18 | - |
| resident-id-card-new-issuance | 만17세 주민등록증 최초 발급 사진 챙겨 읍면동에서 14일 만에 신청하는 법 | 7 | 없음 | 2026-07-18 | - |
| resident-id-card-reissue | 주민등록증 분실 재발급 IC칩 포함 1만원 총14일 걸리는 법 | 7 | 없음 | 2026-07-17 | - |
| resident-list-confirmation-certificate | 전입세대확인서 방문 발급받고 전세계약 전 세대주 명단 확인하는 법 | 7 | 없음 | 2026-07-17 | - |
| resident-registration-certificate | 주민등록등본 초본 인터넷 무료 발급받고 대리인 위임장 준비하는 법 | 7 | 없음 | 2026-07-17 | - |
| resident-registration-fact-check | 2026 주민등록 비대면 사실조사, 정부24 앱 참여 방법 5분이면 끝 | 7 | O | 2026-08-05 | - |
| residential-monthly-rent-loan | 주거안정월세대출 우대형 1.3% 신청하고 월 60만원 받는 법 | 7 | 없음 | 2026-07-17 | - |
| restart-support-fund | 소상공인 재도전 특별자금 (재도약) | 7 | 없음 | 2026-05-23 | - |
| retirement-pension-check | 내 퇴직연금 조회 방법, 통합연금포털과 미청구 연금 찾기까지 | 7 | O | 2026-08-06 | - |
| return-farming-startup-loan | 귀농 농업창업·주택구입 지원 연령·거주요건과 대출한도, 선발평가까지 | 7 | 없음 | 2026-05-23 | - |
| return-fishing-startup-loan | 귀어 창업 및 주택구입 지원(융자) | 7 | 없음 | 2026-05-23 | - |
| robot-surgery-cost | 로봇 수술 비용과 요실금 수술비, 담석증 350만원은 보험으로 얼마나 받나요? | 4 | 없음 | 2026-09-07 | - |
| rural-basic-income | 농어촌 기본소득 시범사업 대상지역, 신청해야 받나요? | 7 | 없음 | 2026-05-23 | - |
| rural-student-loan | 농촌출신대학생 학자금대출 일반대출과 차이, 농어촌 주소 인정범위 | 8 | 없음 | 2026-05-23 | - |
| rural-youth-growth | 인구감소지역 청소년 성장지원, 학습지원과 문화체험은 어떻게 | 8 | 없음 | 2026-05-23 | - |
| safe-stepping-stone-app | 안전디딤돌 앱 다운로드와 안전신고 방법, 재난 시 활용법까지 | 7 | 없음 | 2026-05-23 | - |
| safety-health-manager-appointment-report | 안전관리자 보건관리자 선임보고 서류 없이 지방고용노동청에 즉시 신고하는 법 | 7 | 없음 | 2026-07-18 | - |
| sanitarian-license-certificate | 위생사면허증명 발급신청 신분증사본으로 보건복지부 500원 즉시 3시간 만에 받는 법 | 7 | 없음 | 2026-07-20 | - |
| sanitarian-license-issuance | 위생사 면허증 발급 학위증명서와 진단서로 수수료 없이 14일 만에 받는 법 | 7 | 없음 | 2026-07-18 | - |
| sanitarian-license-reissue | 위생사 면허증 재발급신청 분실사유서와 반명함사진으로 보건복지부 2000원 3일 만에 받는 법 | 7 | 없음 | 2026-07-20 | - |
| savings-ladder-strategy | 예금 적금 풍차돌리기, 목돈 만드는 방법과 장단점 총정리 | 7 | 없음 | 2026-07-16 | - |
| school-coordinator | 학교 코디네이터 (돌봄·교육 지원) | 7 | 없음 | 2026-05-23 | - |
| school-enrollment-deferral-approval | 초등학교 취학유예 질병 소명자료로 학교에 5일 만에 승인받는 법 | 7 | 없음 | 2026-07-18 | - |
| school-foundation-establishment-permit | 학교법인 설립허가 재산출연증서와 정관으로 관할청에 수수료 없이 20일 만에 신청하는 법 | 7 | 없음 | 2026-07-18 | - |
| science-culture-voucher | 과학문화바우처 사용처와 신청기간, 10만원 어떻게 쓰나 | 7 | 없음 | 2026-07-16 | - |
| seafarer-book-reissue | 선원수첩 재발급 사진 1매로 지방해양수산청에 1일 만에 신청하는 법 | 7 | 없음 | 2026-07-18 | - |
| seal-certificate | 인감증명서 인터넷 무료 발급받고 대리인 위임장 준비하는 법 | 7 | 없음 | 2026-07-17 | - |
| seal-registration | 인감신고 읍면동 방문으로 무료 즉시 등록하고 인감증명서 발급받는 법 | 7 | 없음 | 2026-07-17 | - |
| security-business-permit | 경비업 허가신청 정관과 임원이력서로 시도경찰청에 만원 15일 만에 신청하는 법 | 7 | 없음 | 2026-07-18 | - |
| seed-business-registration | 종자업등록신청 종자관리사 1인이상으로 시군구 수수료없이 7일 만에 받는 법 | 7 | 없음 | 2026-07-18 | - |
| self-signature-confirmation-certificate | 본인서명사실확인서 2028년까지 무료 발급받고 인감증명서 대신 쓰는 법 | 7 | 없음 | 2026-07-17 | - |
| self-sufficiency-program/참여자격조건부수급자차상위계층신청 | 자활사업 참여자격, 조건부수급자·차상위계층 해당 여부와 신청 | 7 | 없음 | 2026-05-23 | - |
| senior-customized-care | 노인맞춤돌봄서비스 돌봄4군 차이와 신청자격, 장기요양보험과 차이 | 8 | 없음 | 2026-05-23 | - |
| seoul-electric-motorcycle-subsidy | 서울 전기이륜차 보조금 신청방법, 641대 어떻게 나눠 받나 | 7 | 없음 | 2026-07-29 | - |
| seoul-electric-taxi-subsidy | 서울 전기택시 보조금 차종별 금액 조회하고 신청하는 법 | 8 | 없음 | 2026-07-29 | - |
| seoul-pregnancy-transport | 서울 임산부 교통비 신청방법, 70~100만원 바우처 어떻게 받나 | 9 | 없음 | 2026-07-29 | - |
| sex-offender-notification | 성범죄자 신상정보 열람방법과 공개기간, 학교에서도 확인되나요? | 7 | 없음 | 2026-05-23 | - |
| sharing-ticket | 나눔티켓 나눔회원 신청방법, 기초수급자·차상위 공연전시 할인 | 7 | 없음 | 2026-05-23 | - |
| siheung-newlywed-jeonse-interest | 시흥시 신혼부부 전세대출 이자지원 신청기간 확인하고 신청하는 법 | 7 | 없음 | 2026-07-30 | - |
| simplified-underwriting-insurance | 유병자보험(간편보험), 일반보험보다 먼저 알아둘 것 3가지 | 7 | 없음 | 2026-07-16 | - |
| single-parent-facility | 한부모가족 복지시설 양육·생활시설 차이와 입소방법, 위기임산부 지원 | 8 | 없음 | 2026-05-23 | - |
| single-parent-family-certificate | 한부모가족증명서 무료 인터넷 발급받고 지원자격 증명하는 법 | 7 | 없음 | 2026-07-17 | - |
| small-biz-bank-debt | 소상공인 은행권 채무 조정 (새출발기금) | 7 | 없음 | 2026-06-28 | - |
| small-biz-fund-compare | 2026 소상공인 정책자금 4차 12개 비교, 내 조건에 맞는 자금 찾기 | 7 | O | 2026-08-03 | - |
| small-biz-refinance-loan | 2026 소상공인 대환대출 조건과 서류, 4.5% 이자 10년으로 갈아탈 수 있나 | 7 | O | 2026-08-04 | - |
| smartfarm-youth-incubator | 스마트팜 청년창업 보육센터 경쟁률 5대 1, 이수하면 열리는 30억 대출 조건 확인 | 7 | O | 2026-08-06 | - |
| sme-confirmation | 중소기업확인서 원천징수이행상황신고서로 지방중기청에 3일 만에 발급받는 법 | 7 | 없음 | 2026-07-18 | - |
| sme-meal | 중소기업 든든한 한끼 지원대상, 대기업 직원도 받을 수 있나요? | 7 | 없음 | 2026-05-23 | - |
| sme-owner-industrial-accident-insurance | 중소기업 사업주 산재보험 임의가입 건강진단서로 근로복지공단에 7일 만에 신청하는 법 | 7 | 없음 | 2026-07-18 | - |
| smile-microcredit | 미소금융 자격조건과 운영자금, 신용점수 낮아도 받을 수 있나요? | 7 | 없음 | 2026-07-10 | - |
| smokefree-living-environment | 생활터 금연환경 조성 지원 | 7 | 없음 | 2026-05-23 | - |
| social-cooperative-establishment-permit | 사회적협동조합 설립인가 정관과 창립총회 의사록으로 수수료 없이 60일 만에 받는 법 | 7 | 없음 | 2026-07-18 | - |
| social-security-agreement-pension-certificate | 해외파견 국민연금 가입증명서 파견명령서로 7일 만에 이중가입 면제받는 법 | 7 | 없음 | 2026-07-18 | - |
| social-security-benefit-application | 사회보장급여 통합신청서 하나로 기초생활수급 장애인연금 한번에 신청하는 법 | 7 | 없음 | 2026-07-17 | - |
| social-welfare-corporation-establishment-permit | 사회복지법인 설립허가 재산출연증서와 정관 갖춰 시도에 수수료 없이 17일 만에 신청하는 법 | 7 | 없음 | 2026-07-18 | - |
| special-mission-veteran-registration | 특수임무유공자 유족등록 사진과 가족관계증명서로 30일 신청하는 법 | 7 | 없음 | 2026-07-17 | - |
| special-telecom-business-registration | 별정통신사업자 등록 사업계획서와 통신망구성도로 중앙전파관리소 수수료없이 30일 만에 받는 법 | 7 | 없음 | 2026-07-18 | - |
| sports-class-voucher | 스포츠강좌이용권 지원대상과 사용법, 장애인이용권은 뭐가 다른가요? | 7 | 없음 | 2026-05-23 | - |
| sports-facility-business-report | 수영장 골프연습장 당구장 체육시설업신고 사용권증명서로 시군구에 7일 만에 신청하는 법 | 7 | 없음 | 2026-07-18 | - |
| sports-facility-closure-report | 체육시설업 휴업 폐업통보 서류 없이 세무서와 함께 즉시 신고하는 법 | 7 | 없음 | 2026-07-18 | - |
| sports-industry-internship | 스포츠산업 청년 인턴십 | 7 | 없음 | 2026-05-23 | - |
| spouse-birth-leave-pay/급여상한액우선지원신청 | 배우자 출산휴가 급여 상한액과 우선지원대상기업 기준, 고용24 신청까지 | 7 | 없음 | 2026-05-23 | - |
| standard-land-price-objection | 표준지공시지가 이의신청 국토교통부에 30일 이내 사유서로 신청하는 법 | 7 | 없음 | 2026-07-18 | - |
| student-edu-info | 학생 교육정보화 지원 신청자격, 졸업하면 어떻게 되나요? | 8 | 없음 | 2026-05-23 | - |
| sunshine-loan-bank | 햇살론뱅크 신청자격과 한도, 신용도 개선해야 받을 수 있나요? | 7 | 없음 | 2026-07-10 | - |
| surname-change-report | 성본 변경 신청, 친부 동의 없어도 되나 절차는 어떻게 되나 | 7 | O | 2026-07-30 | - |
| sword-possession-permit | 도검 소지허가 신청 신체검사서와 출처증명서로 경찰서에 3천원 7일 만에 받는 법 | 7 | 없음 | 2026-07-18 | - |
| teen-independence-aid | 퇴소청소년 자립지원수당 신청방법, 3년 후에는 어떻게 되나요? | 8 | 없음 | 2026-05-23 | - |
| teen-parent-child-aid | 청소년부모 아동양육비 청소년한부모와 차이, 25세 넘으면? | 9 | 없음 | 2026-05-23 | - |
| teen-single-parent | 청소년한부모 아동양육·자립지원, 일반 한부모와 차이는? | 10 | 없음 | 2026-05-23 | - |
| term-vs-whole-life-insurance | 정기보험 종신보험, 사망보장 뭐가 다르고 뭘 골라야 하나요 | 7 | 없음 | 2026-07-16 | - |
| thyroid-cancer-diagnosis-rider | 갑상선암은 왜 일반암보다 진단비가 적게 나오나요 | 7 | 없음 | 2026-07-16 | - |
| tobacco-license-reissue | 담배소매인지정서 재발급 분실 훼손 시 즉시 무료로 받는 법 | 7 | 없음 | 2026-07-18 | - |
| tobacco-retailer-designation | 담배소매인 지정신청 점포사용권 서류로 시군구에 7일 만에 신청하는 법 | 7 | 없음 | 2026-07-18 | - |
| tobacco-wholesale-business-registration | 담배도매업 등록 담배공급계약서로 시군구에 수수료없이 5일 만에 받는 법 | 7 | 없음 | 2026-07-18 | - |
| tourism-business-registration | 여행업 관광숙박업 관광사업 등록 사업계획서로 시군구에 5일에서 14일 만에 신청하는 법 | 7 | 없음 | 2026-07-18 | - |
| tourism-business-transfer-report | 관광사업 양수 지위승계 신고 시설인수명세서로 2만원 승계 1개월 이내 하는 법 | 7 | 없음 | 2026-07-18 | - |
| trademark-renewal-registration | 상표권 존속기간 갱신등록 신청 만료전1년이내 30만원 지식재산처 9일 만에 받는 법 | 7 | 없음 | 2026-07-18 | - |
| transfer-of-residence-report | 전입신고 14일 이내 인터넷으로 세대주확인까지 끝내는 법 | 7 | 없음 | 2026-07-17 | - |
| tutoring-center-establishment-report | 교습소 신고 시설평면도와 자격증명서로 교육지원청 수수료없이 8일 만에 받는 법 | 7 | 없음 | 2026-07-18 | - |
| uiwang-small-business-improvement | 의왕시 소상공인 경영환경개선 300만원, 8월 7일까지 5일만 접수 | 7 | O | 2026-08-02 | - |
| ulju-small-business-improvement | 울주군 소상공인 300만원, 8월 7일 마감 온라인 접수 | 7 | O | 2026-08-02 | - |
| ultralight-aircraft-registration | 드론 초경량비행장치 소유증명과 측면사진으로 7일 만에 신고하는 법 | 7 | 없음 | 2026-07-17 | - |
| unemployment-credit-recognition | 구직급여 수급자격 인정과 국민연금 실업크레딧 서류 없이 신청하는 법 | 7 | 없음 | 2026-07-18 | - |
| uninsured-birth-grant | 고용보험 미적용자 출산급여 4유형과 신청방법, 서울 추가지원까지 | 8 | 없음 | 2026-05-23 | - |
| unit-taxation-branch-certificate | 사업자단위과세 종된사업장 증명 신분증만 있으면 무료로 즉시 발급받는 법 | 7 | 없음 | 2026-07-18 | - |
| unit-taxation-registration | 사업자단위과세 등록 종된사업장 사업자등록증으로 세무서에 3일 만에 신청하는 법 | 7 | 없음 | 2026-07-18 | - |
| urban-green-manager | 도시녹지관리원 공공일자리 신청자격, 계절마다 업무가 달라지나요? | 7 | 없음 | 2026-05-23 | - |
| used-appliance-pickup | 폐가전 무상 방문수거 서비스 | 7 | 없음 | 2026-05-23 | - |
| vacant-house | 빈집 철거명령 받았을 때 60일 안에 대응하고 보상비 확인하는 법 | 7 | 없음 | 2026-07-29 | - |
| vaccination-certificate | 예방접종증명서 예방접종도우미에서 무료 즉시 발급받는 법 | 7 | 없음 | 2026-07-17 | - |
| value-added-tax/real-estate-rental-error-fix | 7월 부가세 확정신고 부동산 임대업 전자신고 오류 해결 방법 | 7 | 없음 | 2026-07-20 | - |
| value-added-telecom-business-report | 부가통신사업신고 통신망구성도로 중앙전파관리소 수수료없이 즉시 3시간 만에 받는 법 | 7 | 없음 | 2026-07-18 | - |
| variable-life-insurance | 변액보험 뜻과 장단점, 해지할 때 손해부터 수익률까지 | 4 | 없음 | 2026-09-07 | - |
| vehicle-cancellation-registration | 자동차 말소등록 신청서 수수료 1000원 즉시 처리로 등록 없애는 법 | 7 | 없음 | 2026-07-17 | - |
| vehicle-change-registration | 자동차 변경등록 사용본거지변경증명서로 시군구에 1300원 즉시 3시간 만에 받는 법 | 7 | 없음 | 2026-07-18 | - |
| vehicle-designated-maintenance-business-designation | 자동차 지정정비사업자 지정신청 검사업무규정서로 시도에 2만원 20일 만에 받는 법 | 7 | 없음 | 2026-07-18 | - |
| vehicle-inspection-extension | 자동차 정기검사 연장 도난 사고 압류 시 무료로 즉시 신청하는 법 | 7 | 없음 | 2026-07-17 | - |
| vehicle-interregional-change-registration | 자동차 시도간 변경등록 이사했을 때 1300원 즉시 신청하는 법 | 7 | 없음 | 2026-07-17 | - |
| vehicle-license-plate-reissue | 자동차 번호판 분실 도난 파손 시 방문으로 즉시 재발급받는 법 | 7 | 없음 | 2026-07-17 | - |
| vehicle-mortgage-registration | 자동차 저당권설정등록 car365에서 이전 말소 변경까지 신청하는 법 | 7 | 없음 | 2026-07-17 | - |
| vehicle-new-registration | 자동차 신규등록 신차 수입차 2000원에 즉시 접수하는 법 | 7 | 없음 | 2026-07-17 | - |
| vehicle-ownership-transfer | 자동차 명의이전 방법과 서류, 가족간 명의이전 비용까지 | 7 | 없음 | 2026-07-11 | - |
| vehicle-registration-card-reissue | 자동차등록증 재발급 인터넷 600원에 신청하고 원본은 등록사업소서 받는 법 | 7 | 없음 | 2026-07-17 | - |
| vehicle-registration-certificate | 자동차등록원부 갑·을부 인터넷 무료 발급받고 압류·저당 확인하는 법 | 7 | 없음 | 2026-07-17 | - |
| vehicle-standard-value | 차량기준가액 조회하고 내 차 보험가액 확인하는 법 | 7 | 없음 | 2026-07-29 | - |
| vehicle-tax | 자동차세 연납 신청하고 최대 5% 할인받는 법 | 8 | 없음 | 2026-07-17 | - |
| vehicle-temporary-operation-permit | 자동차 임시운행허가 미등록차량 1800원에 방문 신청하는 법 | 7 | 없음 | 2026-07-17 | - |
| vehicle-tuning-approval | 자동차 튜닝승인 설계도 갖춰 전자승인 35000원으로 10일 만에 받는 법 | 7 | 없음 | 2026-07-18 | - |
| venture-company-certificate | 벤처기업확인서 4가지 유형별 서류 갖춰 최대 45일 만에 발급받는 법 | 7 | 없음 | 2026-07-18 | - |
| veteran-compensation-confirmation | 보훈보상대상자 유족확인원 서류 없이 보훈청에서 즉시 발급받는 법 | 7 | 없음 | 2026-07-18 | - |
| veteran-compensation-registration | 보훈보상대상자 유족등록 사진과 제적등본으로 보훈청에 20일 만에 신청하는 법 | 7 | 없음 | 2026-07-18 | - |
| veteran-disability-grade-review | 상이등급 재심 재판정 신체검사 진단서로 1일 만에 신청하는 법 | 7 | 없음 | 2026-07-17 | - |
| veteran-employment-support | 국가유공자 및 유가족 취업 지원 | 7 | 없음 | 2026-08-01 | - |
| veteran-family-confirmation | 국가유공자 유족확인서 무료 발급받고 보훈혜택 신청에 제출하는 법 | 7 | 없음 | 2026-07-17 | - |
| veteran-family-registration | 국가유공자 유족등록 사진과 가족관계증명서로 보훈청에 신청하는 법 | 7 | 없음 | 2026-07-17 | - |
| veteran-home-care | 보훈 재가복지서비스 재가보훈실무관이란, 노인장기요양과 차이 | 8 | 없음 | 2026-05-23 | - |
| veteran-livelihood-support | 참전유공자 고엽제후유의증 생계지원금 소득재산신고서로 30일 신청하는 법 | 7 | 없음 | 2026-07-17 | - |
| veteran-registration-card-issuance | 국가보훈등록증 발급 재발급 사진 1장으로 즉시 신청하는 법 | 7 | 없음 | 2026-07-17 | - |
| veteran-status-change-report | 보훈대상자 신상변동신고 사망 국적상실 등 1일 만에 신고하는 법 | 7 | 없음 | 2026-07-17 | - |
| veteran-support | 참전유공자 생계지원금 배우자 확대 이유, 다른 보훈수당 중복여부 | 7 | 없음 | 2026-05-23 | - |
| veterinary-clinic-establishment-report | 동물병원 개설신고 평면도 면허증 갖춰 시군구에 수수료 5천원 7일 만에 신청하는 법 | 7 | 없음 | 2026-07-18 | - |
| visa-issuance-confirmation | 사증발급인정서 국내 초청자가 고용허가서로 10일 만에 신청하는 법 | 7 | 없음 | 2026-07-18 | - |
| vocational-training-livelihood-loan | 직업훈련 생계비 대부 | 7 | 없음 | 2026-05-23 | - |
| vulnerable-housing-relocation-loan | 쪽방·고시원 살다 무이자 전세자금 받고 이주하는 법 | 7 | 없음 | 2026-07-17 | - |
| wage-theft-legal-support | 임금 체불 피해 근로자 무료 법률 지원 | 7 | 없음 | 2026-05-23 | - |
| waste-treatment-business-permit | 폐기물처리업 허가 시설장비명세서 갖춰 시도에 신규4만원 변경1.5만원 10일 만에 신청하는 법 | 7 | 없음 | 2026-07-18 | - |
| wastewater-consignment-treatment-permit | 폐수수탁처리업 재이용업 허가 사업계획서로 1만원 시군구에 15일 만에 받는 법 | 7 | 없음 | 2026-07-18 | - |
| water-tank-installation-report | 저수조 설치현황 신고 시공도면으로 시군 수수료없이 즉시 3시간 만에 받는 법 | 7 | 없음 | 2026-07-18 | - |
| waterbomb-busan | 2026 워터밤 부산 라인업 16팀, 티켓 어디서 예매하나 | 9 | O | 2026-07-31 | - |
| waterbomb-sokcho | 2026 워터밤 속초 라인업 21팀, 티켓 99000원 어디서 예매하나 | 7 | 없음 | 2026-07-31 | - |
| whole-town-elem-care | 온동네 초등돌봄 우선순위와 신청방법, 다른 돌봄과 중복여부 | 8 | 없음 | 2026-05-23 | - |
| wide-area-job-search-allowance | 광역구직활동비 운임 숙박비 영수증으로 5일 만에 청구하는 법 | 7 | 없음 | 2026-07-17 | - |
| women-enterprise-certificate | 여성기업확인서 주주명부와 사업자등록증으로 7일 만에 발급받는 법 | 7 | 없음 | 2026-07-18 | - |
| women-head-startup-loan | 여성가장 창업자금 지원조건과 한부모 우선심사, 자금 사용처까지 | 8 | 없음 | 2026-05-23 | - |
| women-restart-center | 새일센터 직업교육과 인턴십·취업연계, 2026년 확대 내용까지 | 8 | 없음 | 2026-05-23 | - |
| women-startup-center | 여성창업보육센터 다른 창업지원과 중복될까? 임대료·연장기간 | 8 | 없음 | 2026-05-23 | - |
| womens-emergency-1366 | 여성긴급전화 1366 이용방법과 보호시설 입소, 외국어 상담까지 | 7 | 없음 | 2026-05-23 | - |
| worker-dispatch-business-permit | 근로자파견사업 허가신청 사업계획서로 인터넷 신청 시 무료 20일 만에 받는 법 | 7 | 없음 | 2026-07-18 | - |
| youth-asset-formation | 청년 자산형성 상품 비교, 청년도약계좌·청년미래적금 뭐가 유리할까 | 8 | 없음 | 2026-05-23 | - |
| youth-challenge-support | 청년도전지원사업 참여수당 최대 350만원, 나는 신청 조건이 되나 | 9 | O | 2026-08-04 | - |
| youth-culture-arts-pass | 청년문화예술패스 신청기간과 사용처, 문화누리카드와 뭐가 다른가 | 7 | 없음 | 2026-08-09 | - |
| youth-designer-internship | 청년 디자이너 공공기관 인턴십 | 7 | 없음 | 2026-05-23 | - |
| youth-driver-license-subsidy | 청년 운전면허 지원금 우리 지역 신청방법과 대상 조회까지, 전국 다 되는 줄 알면 손해 | 7 | 없음 | 2026-07-27 | - |
| youth-job | 청년 일자리 사업 종류와 중복 가능여부, 청년 연령기준까지 | 8 | 없음 | 2026-05-23 | - |
| youth-leap-job | 청년일자리도약장려금 비수도권 우대, 중도퇴사하면 어떻게 되나요? | 8 | 없음 | 2026-05-23 | - |
| youth-safe-housing-2nd | 2026 2차 청년안심주택 신청방법ㅣ신청기간 단 3일 | 8 | O | 2026-08-04 | - |
| youth-startup-school | 청년창업사관학교 TIPS랑 뭐가 다른가요? 본인부담 얼마나 되나 | 8 | O | 2026-05-23 | - |
| youth-welfare | 청년 마음건강바우처와 자립수당, 의료비 지원까지 한번에 찾기 | 8 | 없음 | 2026-05-23 | - |

## 부록 B — 2026-10-01 이후 손댔지만 facts.json 없는 글 84편 (허브별 · 이번 대상에서 뺌)

| 허브 | 글 수 | dateModified | 최근 git 커밋 |
|---|---|---|---|
| officetel-purchase-loan | 1 | 2026-10-23 |  |
| youth-national-tech-exam-fee-support | 1 | 2026-10-23 |  |
| year-end-tax-preview-2026 | 1 | 2026-10-23 |  |
| personal-customs-code-renewal | 1 | 2026-10-23 |  |
| overseas-direct-purchase-customs-duty | 1 | 2026-10-23 |  |
| hometown-love-donation-tax-credit | 1 | 2026-10-23 |  |
| monthly-rent-tax-credit-apply | 1 | 2026-10-23 |  |
| comprehensive-real-estate-tax-payment | 1 | 2026-10-23 |  |
| jeonse-fraud-victim-decision-document | 1 | 2026-10-23 |  |
| local-tax-refund-lookup | 1 | 2026-10-23 |  |
| vaccine-injury-compensation-apply | 1 | 2026-10-23 |  |
| national-pension-employer-arrears | 1 | 2026-10-12 |  |
| subscription-account-cancellation | 1 | 2026-10-12 |  |
| first-home-special-supply-application | 1 | 2026-10-12 |  |
| newlywed-special-supply-application | 1 | 2026-10-12 |  |
| presale-right-transfer-report | 1 | 2026-10-12 |  |
| property-tax-objection-application | 1 | 2026-10-12 |  |
| official-price-objection-application | 1 | 2026-10-10 |  |
| rental-business-registration-application | 1 | 2026-10-10 |  |
| real-estate-gift-report | 1 | 2026-10-10 |  |
| acquisition-tax-reduction-application | 1 | 2026-10-10 |  |
| capital-gains-exemption-application | 1 | 2026-10-10 |  |
| provisional-disposition-application | 1 | 2026-10-10 |  |
| provisional-attachment-application | 1 | 2026-10-10 |  |
| land-division-application | 1 | 2026-10-10 |  |
| boundary-restoration-survey-application | 1 | 2026-10-10 |  |
| cadastral-survey-application | 1 | 2026-10-10 |  |
| real-estate-comprehensive-certificate-issue | 1 | 2026-10-10 |  |
| building-fire-insurance-mandatory | 1 | 2026-10-10 |  |
| land-category-change-application | 1 | 2026-10-10 |  |
| temporary-building-construction-report | 1 | 2026-10-10 |  |
| farmland-lease-confirmation | 1 | 2026-10-10 |  |
| mountain-land-conversion-permit | 1 | 2026-10-10 |  |
| house-extension-renovation-permit | 1 | 2026-10-10 |  |
| detached-house-construction-report | 1 | 2026-10-10 |  |
| random-subscription-eligibility | 1 | 2026-10-10 |  |
| housing-subscription-savings-account | 1 | 2026-10-10 |  |
| reconstruction-project-approval | 1 | 2026-10-10 |  |
| redevelopment-allocation-application | 1 | 2026-10-10 |  |
| apartment-management-fee-reserve | 1 | 2026-10-10 |  |
| apartment-pre-inspection-defect-repair | 1 | 2026-10-10 |  |
| foreigner-real-estate-acquisition-report | 1 | 2026-10-10 |  |
| self-ownership-transfer-registration | 1 | 2026-10-10 |  |
| property-sale-contract-cancellation | 1 | 2026-10-10 |  |
| moving-company-damage-dispute | 1 | 2026-10-10 |  |
| brokerage-fee-calculation-dispute | 1 | 2026-10-10 |  |
| long-term-repair-reserve-refund | 1 | 2026-10-10 |  |
| lessee-death-succession | 1 | 2026-10-10 |  |
| lease-assignment-sublease-limit | 1 | 2026-10-10 |  |
| landlord-change-succession | 1 | 2026-10-10 |  |
| lessee-necessary-expense-claim | 1 | 2026-10-10 |  |
| deposit-to-monthly-rent-conversion | 1 | 2026-10-10 |  |
| rent-increase-claim-limit | 1 | 2026-10-10 |  |
| lease-deposit-compulsory-auction | 1 | 2026-10-10 |  |
| small-deposit-priority-payment | 1 | 2026-10-10 |  |
| rental-registration-order-apply | 1 | 2026-10-10 |  |
| rental-renewal-right-exercise | 1 | 2026-10-10 |  |
| subscription-payment-cancel-refund-relief | 1 | 2026-10-10 |  |
| income-tax-refund-lookup-claim | 1 | 2026-10-10 |  |
| resignation-year-end-tax-settlement | 1 | 2026-10-10 |  |
| highway-wrong-exit-toll-exemption | 1 | 2026-10-10 |  |
| eitc-late-filing-2026 | 1 | 2026-10-10 |  |
| financial-data-breach-identity-theft-prevention | 1 | 2026-10-10 |  |
| health-insurance-premium-adjustment | 1 | 2026-10-10 |  |
| culture-nuri-card-balance-expiry | 1 | 2026-10-09 |  |
| temporary-hardship-fund-q4-conditions | 1 | 2026-10-09 |  |
| innovation-growth-fund-q4-conditions | 1 | 2026-10-09 |  |
| restart-special-fund-q4-conditions | 1 | 2026-10-09 |  |
| credit-vulnerable-small-biz-fund | 1 | 2026-10-09 |  |
| homeplus-policy-loan-extension | 1 | 2026-10-09 |  |
| youth-jeonse-wolse-loan-conditions | 1 | 2026-10-09 |  |
| policy-loan-prepayment-fee-waiver | 1 | 2026-10-09 |  |
| bogeumjari-loan-documents | 1 | 2026-10-09 |  |
| didimdol-loan-documents | 1 | 2026-10-09 |  |
| baby-welcome-grant-2027 | 1 | 2026-10-09 |  |
| basic-pension-2027-tiered-payment | 1 | 2026-10-09 |  |
| temporary-two-home-special-period-2026 | 1 | 2026-10-09 |  |
| jeonse-fraud-minimum-guarantee-2026 | 1 | 2026-10-09 |  |
| livelihood-account-excess-split-deposit-2027 | 1 | 2026-10-09 |  |
| humidifier-disinfectant-compensation-apply | 1 | 2026-10-09 |  |
| wage-claim-fraud-report-reward-2027 | 1 | 2026-10-09 |  |
| national-pension-industrial-accident-reduction | 1 | 2026-10-09 |  |
| hypertension-medical-fee | 1 | 2026-10-26 |  |
| dosu-therapy | 1 | 2026-10-13 |  |

## 부록 C — 구버전(facts 없음)인데 새 모양인 글 181편 (서론 있음·카드 6개 이하 · 허브별)

| 허브 | 글 수 | 카드 수 | dateModified |
|---|---|---|---|
| basic-pension | 26 | 4 | 2026-09-19 |
| debt-restructuring | 20 | 4 | 2026-09-16 |
| four-insurance-workplace-establishment | 12 | 4 | 2026-09-16 |
| income-tax-interim-payment | 11 | 4 | 2026-09-20 |
| hwadam-forest | 9 | 4 | 2026-09-18 |
| asian-games-2026 | 7 | 4 | 2026-09-22 |
| military-savings-combo | 6 | 5~6 | 2026-08-11~2026-08-12 |
| joint-ownership-couple | 6 | 5~6 | 2026-08-12 |
| overseas-remittance-limit | 5 | 5~6 | 2026-08-12 |
| national-growth-fund | 2 | 5~6 | 2026-08-16~2026-08-25 |
| term-vs-whole-life-insurance | 2 | 4~5 | 2026-09-07~2026-09-14 |
| mortgage-application-process | 1 | 4 | 2026-09-17 |
| mortgage-required-documents | 1 | 4 | 2026-09-17 |
| mortgage-loan-limit-ltv | 1 | 4 | 2026-09-17 |
| mortgage-rate-compare | 1 | 4 | 2026-09-17 |
| mortgage-fixed-vs-variable | 1 | 4 | 2026-09-17 |
| mortgage-refinance | 1 | 4 | 2026-09-17 |
| mortgage-prepayment | 1 | 4 | 2026-09-18 |
| mortgage-repayment-method | 1 | 4 | 2026-09-17 |
| mortgage-first-time-buyer | 1 | 4 | 2026-09-17 |
| mortgage-policy-loan-compare | 1 | 4 | 2026-09-17 |
| mortgage-additional-loan | 1 | 4 | 2026-09-17 |
| mortgage-income-proof | 1 | 4 | 2026-09-17 |
| mortgage-approval-review | 1 | 4 | 2026-09-18 |
| mortgage-joint-ownership | 1 | 4 | 2026-09-18 |
| mortgage-multi-home-restriction | 1 | 4 | 2026-09-18 |
| mortgage-tenant-occupied | 1 | 4 | 2026-09-18 |
| mortgage-interest-deduction | 1 | 4 | 2026-09-18 |
| mortgage-lien-cancellation | 1 | 4 | 2026-09-18 |
| mortgage-debt-succession | 1 | 4 | 2026-09-18 |
| mortgage-covenant-violation | 1 | 4 | 2026-09-18 |
| mortgage-default-procedure | 1 | 4 | 2026-09-18 |
| mortgage-job-change-review | 1 | 4 | 2026-09-18 |
| mortgage-bank-comparison | 1 | 4 | 2026-09-18 |
| mortgage-dsr-calculation | 1 | 4 | 2026-09-18 |
| mortgage-subscription-savings-loan | 1 | 4 | 2026-09-18 |
| gold-price-today | 1 | 5 | 2026-08-17 |
| ancestor-search | 1 | 5 | 2026-08-17 |
| youth-future-bogeumjari | 1 | 5 | 2026-08-17 |
| seoul-mirinae-house | 1 | 6 | 2026-08-17 |
| jeonse-guarantee-compare | 1 | 6 | 2026-08-18 |
| rate-cut-request | 1 | 6 | 2026-08-18 |
| minjoo-convention | 1 | 5 | 2026-08-17 |
| elderly-continue-employ | 1 | 4 | 2026-09-30 |
| near-poor-certificate | 1 | 5 | 2026-08-16 |
| near-poor-eligibility | 1 | 5 | 2026-08-16 |
| near-poor-telecom | 1 | 5 | 2026-08-16 |
| near-poor-copay | 1 | 5 | 2026-08-16 |
| hana-poweron-digital-device | 1 | 6 | 2026-09-09 |
| temporary-business-hardship-fund | 1 | 4 | 2026-09-08 |
| time-deposit-rate-ranking-2026 | 1 | 4 | 2026-09-08 |
| nh-nongsim-savings | 1 | 6 | 2026-08-13 |
| shinhan-savings-9dan | 1 | 6 | 2026-08-13 |
| career-certificate-online-issue | 1 | 6 | 2026-08-13 |
| jeonse-fraud-house-safety | 1 | 6 | 2026-08-13 |
| ltci-forms-download | 1 | 6 | 2026-08-14 |
| ltci-application-form | 1 | 6 | 2026-08-14 |
| ltci-opinion-referral | 1 | 6 | 2026-08-14 |
| ltci-care-plan | 1 | 6 | 2026-08-14 |
| ltci-agent-designation | 1 | 5 | 2026-08-14 |
| ltci-nursing-order | 1 | 6 | 2026-08-14 |
| roots-info-site | 1 | 6 | 2026-08-15 |
| medical-aid-income-standard | 1 | 6 | 2026-08-15 |
| medical-aid-refund | 1 | 5 | 2026-08-15 |
| medical-aid-exemption | 1 | 5 | 2026-08-16 |
| medical-aid-nursing-hospital | 1 | 5 | 2026-08-16 |
| medical-aid-day-limit | 1 | 5 | 2026-08-15 |
| medical-aid-selected-hospital | 1 | 5 | 2026-08-15 |
| medical-aid-referral | 1 | 5 | 2026-08-15 |
| medical-aid-imaging | 1 | 5 | 2026-08-15 |
| medical-aid-room-charge | 1 | 5 | 2026-08-15 |
| delivery-mutual-insurance | 1 | 4 | 2026-09-22 |
| youth-future-plus | 1 | 4 | 2026-09-30 |
| chuseok-holiday-hospital-pharmacy | 1 | 4 | 2026-09-23 |
| youth-housing-3set | 1 | 5 | 2026-08-16 |
| pension-transfer | 1 | 5 | 2026-08-16 |
| dementia-insurance | 1 | 4 | 2026-09-07 |
| simplified-underwriting-insurance | 1 | 4 | 2026-09-07 |
| hospitalization-benefit-insurance | 1 | 4 | 2026-09-07 |
| thyroid-cancer-diagnosis-rider | 1 | 4 | 2026-09-07 |
| small-biz-online-sales | 1 | 4 | 2026-09-08 |
| national-pension-premium | 1 | 4 | 2026-09-07 |
| youth-culture-arts-pass | 1 | 3 | 2026-08-09 |
| auto-insurance-loss-ratio | 1 | 4 | 2026-09-07 |
| early-scrappage-subsidy | 1 | 4 | 2026-09-08 |
| pet-registration | 1 | 5 | 2026-09-08 |

## 노출 0 필터를 거는 법 (사장님 PC)

```
node scripts/tools/searchadvisor-expose-all.mjs https://gov.jjyu.co.kr --periods=7,30,60
npx tsx scripts/tools/rewrite-candidates.ts
```

첫 줄이 로그인된 네이버 세션(scripts/cafe/.profile)으로 노출 JSON 을 받고, 둘째 줄이 이 표를 노출 0 글만으로 다시 만든다.

