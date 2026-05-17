import type { PolicyData } from '@/lib/policy-types';

export const benefitNotificationServicePolicy: PolicyData = {
  id: 'benefit-notification-service',
  slug: 'benefit-notification-service',
  type: 'service',
  title: '2026 복지로 혜택알리미',
  org: '보건복지부',
  cat: '생활서비스',
  catSlug: 'service',
  amount: '무료',
  deadline: '상시',
  applyUrl: 'https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/selectWlfareInfo.do',
  summary: '개인 가구 상황(소득·가구원·장애 여부 등)을 입력하면 받을 수 있는 복지서비스를 자동으로 안내해 주는 보건복지부 복지로(bokjiro.go.kr)의 맞춤형 서비스.',
  audience: '복지급여·지원 서비스 정보가 필요한 전 국민',
  views: 0,
  datePublished: '2026-01-01',
  dateModified: '2026-05-17',
  keyFacts: {
    서비스명: { value: '복지로 혜택알리미', source: { url: 'https://www.bokjiro.go.kr', cardIndex: 1, text: '복지로 혜택알리미 서비스', verifiedAt: '2026-05-17' } },
    주관부처: { value: '보건복지부', source: { url: 'https://www.bokjiro.go.kr', cardIndex: 1, text: '보건복지부 주관 복지로 서비스', verifiedAt: '2026-05-17' } },
    이용료: { value: '무료', source: { url: 'https://www.bokjiro.go.kr', cardIndex: 1, text: '복지로 혜택알리미 무료 서비스', verifiedAt: '2026-05-17' } },
    이용방법: { value: 'bokjiro.go.kr 또는 복지로 앱에서 이용', source: { url: 'https://www.bokjiro.go.kr', cardIndex: 1, text: '복지로 홈페이지 및 앱에서 이용 가능', verifiedAt: '2026-05-17' } },
    서비스수: { value: '300여 개 이상 복지서비스 안내', source: { url: 'https://www.bokjiro.go.kr', cardIndex: 1, text: '300여 개 복지서비스 맞춤 안내', verifiedAt: '2026-05-17' } },
    주요기능: { value: '개인 상황 맞춤 서비스 검색·신청·알림', source: { url: 'https://www.bokjiro.go.kr', cardIndex: 1, text: '맞춤형 복지서비스 검색·신청·알림', verifiedAt: '2026-05-17' } },
    문의: { value: '☎129 (보건복지상담센터)', source: { url: 'https://www.bokjiro.go.kr', cardIndex: 1, text: '문의: 129 보건복지상담센터', verifiedAt: '2026-05-17' } },
  },
  qa: [
    {
      anchor: 'q1-what',
      q: '복지로 혜택알리미란 무엇인가요?',
      intro: '복지로 혜택알리미는 보건복지부가 운영하는 bokjiro.go.kr에서 제공하는 맞춤형 복지서비스 안내 시스템입니다. 가구원 수, 소득 수준, 연령, 장애 여부, 가구 유형 등 개인 상황을 입력하면 받을 수 있는 복지급여·지원서비스 300여 개를 자동으로 안내해 줍니다. 국민이 몰라서 받지 못하는 복지 혜택을 없애기 위해 만들어진 서비스입니다. 서비스 이용에 별도 비용은 없으며 신청 즉시 이용 가능합니다.',
      highlights: ['복지로 혜택알리미', '맞춤형 복지서비스', '300여 개', '소득·가구 상황 입력', 'bokjiro.go.kr'],
      box: {
        label: '서비스 개요',
        content: '가구 상황(소득·인원·연령·장애 등) 입력 → 받을 수 있는 복지서비스 300여 개 자동 안내 → 온라인 신청까지 원스톱.',
      },
      sourceNote: '보건복지부 복지로 혜택알리미 (bokjiro.go.kr)',
    },
    {
      anchor: 'q2-how',
      q: '어떻게 이용하나요?',
      intro: '복지로(bokjiro.go.kr) 홈페이지나 복지로 앱에서 로그인 후 "나의 복지" → "혜택알리미"를 선택합니다. 가구원 정보, 소득, 재산, 연령, 장애·질환 여부 등을 단계별로 입력하면 해당 조건에 맞는 복지서비스 목록이 자동으로 생성됩니다. 서비스마다 신청 자격과 혜택 금액이 표시되며, 일부 서비스는 바로 온라인 신청이 가능합니다. 서비스 이용에 별도 비용은 없으며 신청 즉시 이용 가능합니다.',
      highlights: ['bokjiro.go.kr', '복지로 앱', '나의 복지', '혜택알리미', '단계별 입력', '온라인 신청'],
      table: {
        headers: ['이용 단계', '내용', '비고'],
        rows: [
          ['1단계: 접속', 'bokjiro.go.kr 또는 복지로 앱 접속 후 로그인', '공인인증 또는 간편인증'],
          ['2단계: 입력', '가구원·소득·재산·연령·장애 등 정보 입력', '단계별 안내'],
          ['3단계: 조회', '해당 조건 맞춤 서비스 목록 자동 생성', '300여 개 중 필터링'],
          ['4단계: 신청', '원하는 서비스 선택 → 온라인 신청 또는 기관 안내', '일부 즉시 신청'],
        ],
      },
      sourceNote: '복지로 혜택알리미 이용 안내',
    },
    {
      anchor: 'q3-category',
      q: '어떤 복지서비스를 안내받을 수 있나요?',
      intro: '복지로 혜택알리미는 생애 주기별(영유아·아동·청소년·청년·중장년·노인)과 가구 유형별(저소득·장애·한부모·다문화 등) 다양한 복지서비스를 안내합니다. 기초생활보장, 의료급여, 주거급여, 교육급여, 아동수당, 기초연금, 장애인연금, 한부모가족지원 등 핵심 복지급여부터 각종 바우처·사업까지 광범위하게 포함됩니다. 서비스 이용에 별도 비용은 없으며 신청 즉시 이용 가능합니다.',
      highlights: ['기초생활보장', '의료급여', '주거급여', '아동수당', '기초연금', '장애인연금', '한부모가족지원'],
      table: {
        headers: ['분야', '주요 서비스', '비고'],
        rows: [
          ['소득·생계', '기초생활보장(생계·의료·주거·교육급여)', '수급자 대상'],
          ['아동·보육', '아동수당, 영유아보육료, 가정양육수당', '12세 이하'],
          ['노인', '기초연금, 노인일자리, 장기요양', '만 65세 이상'],
          ['장애', '장애인연금, 활동지원, 장애수당', '등록 장애인'],
          ['한부모', '한부모가족 지원, 아동양육비', '한부모 가구'],
          ['주거', '주거급여, 청년 전세자금', '저소득·청년'],
        ],
      },
      sourceNote: '복지로 서비스 카테고리 안내',
    },
    {
      anchor: 'q4-apply',
      q: '로그인 없이도 이용할 수 있나요?',
      intro: '복지로 혜택알리미는 비회원으로도 기본 조회가 가능하지만, 정확한 맞춤 서비스 안내와 온라인 신청을 위해서는 로그인이 필요합니다. 로그인은 공동인증서(구 공인인증서), 간편인증(카카오·네이버·PASS 등), 또는 정부24 계정으로 할 수 있습니다. 비회원 조회는 입력 정보가 저장되지 않아 매번 다시 입력해야 합니다. 서비스 이용에 별도 비용은 없으며 신청 즉시 이용 가능합니다.',
      highlights: ['비회원 기본 조회 가능', '로그인 시 맞춤 안내', '간편인증(카카오·네이버)', '공동인증서'],
      box: {
        label: '로그인 방법',
        items: ['공동인증서(구 공인인증서)', '간편인증: 카카오·네이버·PASS·페이코', '정부24 아이디 로그인', '비회원: 기본 조회만 가능'],
      },
      sourceNote: '복지로 로그인 및 본인인증 안내',
    },
    {
      anchor: 'q5-app',
      q: '복지로 앱으로도 이용할 수 있나요?',
      intro: '복지로 앱(복지로)은 Android(Google Play)와 iOS(App Store)에서 무료로 다운로드할 수 있습니다. 앱에서도 혜택알리미·복지서비스 검색·신청·이용 내역 조회 등 홈페이지와 동일한 기능을 이용할 수 있습니다. 앱은 알림 기능이 있어 신청한 서비스의 처리 결과, 접수 기한 등을 push 알림으로 받을 수 있어 편리합니다. 서비스 이용에 별도 비용은 없으며 신청 즉시 이용 가능합니다.',
      highlights: ['복지로 앱', 'Google Play', 'App Store', '무료', 'push 알림', '신청 처리 결과 알림'],
      box: {
        label: '앱 주요 기능',
        items: ['혜택알리미 맞춤 서비스 조회', '복지서비스 온라인 신청', '이용 내역·신청 현황 조회', 'Push 알림 (신청 결과·기한 알림)'],
      },
      sourceNote: '복지로 앱 이용 안내',
    },
    {
      anchor: 'q6-difference',
      q: '복지로 혜택알리미와 국민비서의 차이점은 무엇인가요?',
      intro: '복지로 혜택알리미는 보건복지부 복지로(bokjiro.go.kr)에서 운영하는 복지서비스 특화 조회·신청 시스템으로, 수백 개의 복지서비스 중 개인 맞춤 항목을 찾아주고 직접 신청까지 연결합니다. 반면 국민비서(구삐)는 행정안전부가 운영하는 행정 알림 서비스로, 건강검진·세금 납부 등 다양한 행정 일정을 카카오톡 등으로 알림을 발송합니다. 두 서비스를 함께 이용하면 복지 혜택을 찾고 기한도 놓치지 않을 수 있습니다.',
      highlights: ['복지로 혜택알리미', '복지서비스 조회·신청', '국민비서(구삐)', '행정 알림', '함께 이용 권장'],
      box: {
        label: '혜택알리미 vs 국민비서',
        items: ['혜택알리미: 맞춤 복지서비스 찾기·신청 (보건복지부)', '국민비서: 행정 일정 알림 발송 (행정안전부)', '두 서비스 동시 이용 권장'],
      },
      sourceNote: '보건복지부 복지로 / 행정안전부 국민비서',
    },
    {
      anchor: 'q7-inquiry',
      q: '문의는 어디에 하나요?',
      intro: '복지로 혜택알리미 이용 문의는 보건복지상담센터(☎129)에 전화하거나, 복지로 홈페이지(bokjiro.go.kr)의 고객센터를 이용할 수 있습니다. 상담센터 운영 시간은 평일 09:00~18:00입니다. 복지서비스 신청 자격이나 혜택 내용에 대한 상세한 안내도 ☎129에서 받을 수 있습니다. 서비스 이용에 별도 비용은 없으며 신청 즉시 이용 가능합니다. 자세한 사항은 해당 기관 홈페이지나 담당 부처에 문의하시기 바랍니다.',
      highlights: ['☎129', '보건복지상담센터', 'bokjiro.go.kr', '평일 09:00~18:00'],
      box: {
        label: '문의처',
        items: ['전화: ☎129 (보건복지상담센터)', '홈페이지: bokjiro.go.kr', '운영: 평일 09:00~18:00'],
      },
      sourceNote: '보건복지부 보건복지상담센터 (☎129)',
    },
  ],
  eligibility: [
    { label: '이용 자격', value: '대한민국 국민 누구나' },
    { label: '이용료', value: '무료' },
    { label: '이용처', value: 'bokjiro.go.kr / 복지로 앱' },
  ],
  faq: [
    {
      question: '혜택알리미 결과가 실제 수급과 다를 수 있나요?',
      answer: '혜택알리미는 입력 정보 기반의 참고 안내입니다. 실제 수급 자격은 해당 기관의 공식 심사를 통해 결정됩니다.',
      source: { url: 'https://www.bokjiro.go.kr', text: '복지로 혜택알리미 유의사항', verifiedAt: '2026-05-17' },
    },
    {
      question: '입력한 개인정보는 안전한가요?',
      answer: '복지로는 개인정보 보호법에 따라 입력 정보를 암호화하여 안전하게 관리합니다. 복지 서비스 안내 목적으로만 활용됩니다.',
      source: { url: 'https://www.bokjiro.go.kr', text: '복지로 개인정보처리방침', verifiedAt: '2026-05-17' },
    },
    {
      question: '신청한 복지서비스 처리 현황을 확인할 수 있나요?',
      answer: '복지로 "나의 서비스" 메뉴에서 신청한 서비스의 처리 현황을 실시간으로 확인할 수 있습니다.',
      source: { url: 'https://www.bokjiro.go.kr', text: '복지로 신청 현황 조회 안내', verifiedAt: '2026-05-17' },
    },
    {
      question: '지자체별로 다른 서비스도 확인할 수 있나요?',
      answer: '네. 복지로 혜택알리미는 중앙정부 서비스뿐 아니라 시·도, 시·군·구 지자체 복지서비스도 함께 안내합니다.',
      source: { url: 'https://www.bokjiro.go.kr', text: '복지로 지자체 서비스 안내', verifiedAt: '2026-05-17' },
    },
    {
      question: '신청 자격이 안 되는 서비스도 나오나요?',
      answer: '일부 서비스는 유사 조건을 가진 경우 목록에 표시될 수 있습니다. 정확한 자격은 해당 기관에 문의하거나 ☎129로 확인하세요.',
      source: { url: 'https://www.bokjiro.go.kr', text: '복지로 혜택알리미 이용 안내', verifiedAt: '2026-05-17' },
    },
  ],
  sources: [
    { label: '복지로 혜택알리미', url: 'https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/selectWlfareInfo.do' },
    { label: '복지로 공식 홈페이지', url: 'https://www.bokjiro.go.kr' },
    { label: '보건복지부 공식 홈페이지', url: 'https://www.mohw.go.kr' },
  ],
  related: [
    { id: 'national-secretary', title: '국민비서' },
    { id: 'basic-livelihood-allowance', title: '기초생활보장 생계급여' },
    { id: 'basic-pension', title: '기초연금' },
  ],
};

export const benefitNotificationServiceSpokes = [
  { label: '이용방법', path: 'how-to-use' },
  { label: '서비스목록', path: 'service-list' },
  { label: '앱이용', path: 'app' },
  { label: '신청현황', path: 'application-status' },
  { label: '문의', path: 'inquiry' },
];
