/* 기준 중위소득 구간별로 우리 사이트에서 다루는 제도 — 내부 링크 소스
 * data/policies/*.ts 본문에서 '중위소득 NN%' 를 실제로 언급한 글만 모았다(2026-08-15 스캔).
 * 억지로 붙이지 않는다 — 글이 그 기준을 실제로 설명할 때만 링크한다.
 */
export type BandLink = { slug: string; title: string };
export const MEDIAN_BANDS: { pct: number; links: BandLink[] }[] = [
  { pct: 250, links: [
    { slug: 'child-care-service', title: '아이돌봄서비스 시간제·종일제 차이와 신청방법, 본인부담금까지' },
  ] },
  { pct: 200, links: [
    { slug: 'catastrophic-medical-expenses', title: '재난적 의료비 지원 소득재산 기준과 지원제외 항목까지' },
    { slug: 'youth-future-savings', title: '청년미래적금 정부매칭과 가입조건, 3년 만기 수령액까지' },
  ] },
  { pct: 180, links: [
    { slug: 'seoul-childbirth-housing-support', title: '서울시 출산 무주택가구 주거비 지원 조건과 신청방법' },
    { slug: 'siheung-newlywed-jeonse-interest', title: '시흥시 신혼부부 전세대출 이자지원 신청기간 확인하고 신청하는 법' },
    { slug: 'youth-driver-license-subsidy', title: '청년 운전면허 지원금 우리 지역 신청방법과 대상 조회까지, 전국 다 되는 줄 알면 손해' },
  ] },
  { pct: 150, links: [
    { slug: 'child-support-advance', title: '양육비 선지급제 소득기준 폐지, 2026년 10월부터 소득 상관없이 월 20만원' },
    { slug: 'gyeonggi-youth-welfare-point', title: '경기도 청년 복지포인트 사용처와 신청방법, 중소기업 노동자 지원과 차이' },
    { slug: 'maternal-newborn-care', title: '산모신생아 건강관리 신청기한과 본인부담, 다른 출산지원 중복여부' },
  ] },
  { pct: 125, links: [
    { slug: 'debtor-lawyer-free-support', title: '채무자 대리인(변호사) 무료 지원사업' },
    { slug: 'free-legal-aid', title: '무료 법률 구조 서비스' },
    { slug: 'leap-loan', title: '새도약론 대출한도와 새도약기금 차이, 특별채무조정까지' },
    { slug: 'legal-aid-system', title: '법률구조제도 소득기준과 소송대리 신청절차, 비용은 얼마나 드나요?' },
  ] },
  { pct: 120, links: [
    { slug: 'artist-activity-grant', title: '예술활동준비금 신청자격과 예술활동증명 방법, 300만원 사용처' },
    { slug: 'artist-pension', title: '예술인 국민연금 보험료 지원, 활동증명부터 다른 지원 중복까지' },
    { slug: 'cancer-patient-medical-aid', title: '암환자 의료비 지원' },
    { slug: 'national-employment-support', title: '국민취업지원제도 1유형 2유형 차이, 구직촉진수당 신청방법' },
    { slug: 'public-housing-sale', title: '공공분양주택 청약자격과 특별공급 유형, 당첨자 선정방식' },
    { slug: 'public-rental-housing', title: '공공임대주택 유형별 신청자격과 임차료, 공공분양과 차이' },
    { slug: 'vocational-training-livelihood-loan', title: '직업훈련 생계비 대부' },
  ] },
  { pct: 100, links: [
    { slug: 'catastrophic-medical-expenses', title: '재난적 의료비 지원 소득재산 기준과 지원제외 항목까지' },
    { slug: 'community-child-center', title: '지역아동센터 이용대상과 이용료, 다함께돌봄센터와 차이는?' },
    { slug: 'maternal-newborn-care', title: '산모신생아 건강관리 신청기한과 본인부담, 다른 출산지원 중복여부' },
    { slug: 'national-employment-support', title: '국민취업지원제도 1유형 2유형 차이, 구직촉진수당 신청방법' },
    { slug: 'public-housing-sale', title: '공공분양주택 청약자격과 특별공급 유형, 당첨자 선정방식' },
    { slug: 'public-rental-housing', title: '공공임대주택 유형별 신청자격과 임차료, 공공분양과 차이' },
    { slug: 'vocational-training-livelihood-loan', title: '직업훈련 생계비 대부' },
    { slug: 'youth-monthly-rent', title: '청년월세 특별지원 소득재산 기준, 주거급여 받으면 못 받나요?' },
  ] },
  { pct: 80, links: [
    { slug: 'happiness-card-bebang', title: '베팡 신청방법과 국민·롯데·삼성카드 비교, 어디가 유리할까?' },
    { slug: 'nutrition-plus', title: '영양플러스 식품패키지와 영양교육, 지원기간은 얼마나 되나요?' },
    { slug: 'vocational-training-livelihood-loan', title: '직업훈련 생계비 대부' },
  ] },
  { pct: 75, links: [
    { slug: 'child-care-service', title: '아이돌봄서비스 시간제·종일제 차이와 신청방법, 본인부담금까지' },
    { slug: 'emergency-welfare-support', title: '긴급복지지원 위기사유와 소득재산 기준, 기초생활수급과 차이' },
  ] },
  { pct: 70, links: [
    { slug: 'public-rental-housing', title: '공공임대주택 유형별 신청자격과 임차료, 공공분양과 차이' },
  ] },
  { pct: 65, links: [
    { slug: 'low-income-single-parent', title: '한부모가족 아동양육비 청소년한부모와 차이, 주거지원도 되나요?' },
  ] },
  { pct: 60, links: [
    { slug: 'employment-incentive-allowance', title: '취업촉진수당 조기재취업수당 요건과 직업능력개발수당 신청방법' },
    { slug: 'environment-guardian', title: '환경지킴이 (공공근로·청년 일자리)' },
    { slug: 'national-employment-support', title: '국민취업지원제도 1유형 2유형 차이, 구직촉진수당 신청방법' },
    { slug: 'new-leap', title: '새도약기금 대상자격과 상환능력 심사, 5천만원 초과 채무는' },
    { slug: 'youth-monthly-rent', title: '청년월세 특별지원 소득재산 기준, 주거급여 받으면 못 받나요?' },
  ] },
  { pct: 50, links: [
    { slug: 'catastrophic-medical-expenses', title: '재난적 의료비 지원 소득재산 기준과 지원제외 항목까지' },
    { slug: 'child-development-account', title: '디딤씨앗통장 신청자격과 만기지급액, 차상위계층도 되나요?' },
    { slug: 'disability-self-reliance-loan', title: '장애인 자립자금 대여 한도와 상환조건, 사용용도까지' },
    { slug: 'education-benefit', title: '교육급여 신청방법과 교육비 지원 차이, 바우처 받는 법' },
    { slug: 'housing-benefit', title: '주거급여 신청자격과 임차·자가가구 지원, 다른 급여 중복여부' },
    { slug: 'near-poor', title: '차상위계층 기초생활수급자와 차이, 소득기준과 혜택 종류' },
    { slug: 'veteran-support', title: '참전유공자 생계지원금 배우자 확대 이유, 다른 보훈수당 중복여부' },
    { slug: 'youth-monthly-rent', title: '청년월세 특별지원 소득재산 기준, 주거급여 받으면 못 받나요?' },
    { slug: 'youth-tomorrow-savings', title: '청년내일저축계좌 신청자격과 만기유지 조건, 중도해지하면' },
  ] },
  { pct: 48, links: [
    { slug: 'home-improvement-support', title: '주거급여 수선유지급여 신청자격과 임차급여 중복여부, 최대 1,601만원' },
    { slug: 'housing-benefit', title: '주거급여 신청자격과 임차·자가가구 지원, 다른 급여 중복여부' },
  ] },
  { pct: 40, links: [
    { slug: 'home-improvement-support', title: '주거급여 수선유지급여 신청자격과 임차급여 중복여부, 최대 1,601만원' },
    { slug: 'housing-benefit', title: '주거급여 신청자격과 임차·자가가구 지원, 다른 급여 중복여부' },
    { slug: 'medical-benefit', title: '의료급여 1종 2종 차이와 본인부담금, 건강생활유지비까지' },
  ] },
  { pct: 32, links: [
    { slug: 'basic-livelihood-allowance', title: '생계급여 선정기준과 소득인정액 계산법, 부양의무자 있어도 되나요?' },
    { slug: 'housing-benefit', title: '주거급여 신청자격과 임차·자가가구 지원, 다른 급여 중복여부' },
    { slug: 'near-poor', title: '차상위계층 기초생활수급자와 차이, 소득기준과 혜택 종류' },
  ] },
];
