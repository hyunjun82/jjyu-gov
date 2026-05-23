import type { PolicyData } from '@/lib/policy-types';

export const nationalSecretaryPolicy: PolicyData = {
  id: 'national-secretary',
  slug: 'national-secretary',
  type: 'service',
  title: '2026 국민비서 (구삐)',
  org: '행정안전부',
  cat: '생활서비스',
  catSlug: 'service',
  amount: '무료',
  deadline: '상시',
  applyUrl: 'https://www.gov.kr/portal/service/serviceInfo/PTR000052055',
  summary: '건강검진 일정·자동차 검사·세금 납부 등 개인 맞춤 행정 알림을 카카오톡·네이버·문자 등으로 무료 제공하는 행정안전부 서비스. 정부24에서 신청.',
  audience: '행정 알림을 받고 싶은 전 국민',
  views: 0,
  datePublished: '2026-01-01',
  dateModified: '2026-05-23T09:00:00+09:00',
  keyFacts: {
    이용료: { value: '무료', source: { url: 'https://www.gov.kr/portal/service/serviceInfo/PTR000052055', cardIndex: 1, text: '국민비서 서비스 무료 이용', verifiedAt: '2026-05-17' } },
    주관부처: { value: '행정안전부', source: { url: 'https://www.gov.kr/portal/service/serviceInfo/PTR000052055', cardIndex: 1, text: '행정안전부 주관', verifiedAt: '2026-05-17' } },
    알림채널: { value: '카카오톡·네이버·문자·이메일·국민비서앱', source: { url: 'https://www.gov.kr/portal/service/serviceInfo/PTR000052055', cardIndex: 1, text: '카카오톡, 네이버, 문자메시지, 이메일, 앱 등 다양한 채널', verifiedAt: '2026-05-17' } },
    신청방법: { value: '정부24(gov.kr) 또는 국민비서 앱에서 신청', source: { url: 'https://www.gov.kr/portal/service/serviceInfo/PTR000052055', cardIndex: 1, text: '정부24 또는 국민비서 앱에서 신청', verifiedAt: '2026-05-17' } },
    알림서비스수: { value: '200여 종 이상의 맞춤 알림 서비스', source: { url: 'https://www.gov.kr/portal/service/serviceInfo/PTR000052055', cardIndex: 1, text: '200여 종의 행정 알림 서비스', verifiedAt: '2026-05-17' } },
    앱이름: { value: '구삐(국민비서)', source: { url: 'https://www.gov.kr/portal/service/serviceInfo/PTR000052055', cardIndex: 1, text: '국민비서 앱 명칭: 구삐', verifiedAt: '2026-05-17' } },
    문의: { value: '110 (정부민원안내콜센터)', source: { url: 'https://www.gov.kr/portal/service/serviceInfo/PTR000052055', cardIndex: 1, text: '문의: 110 정부민원안내콜센터', verifiedAt: '2026-05-17' } },
  },
  qa: [
    {
      anchor: 'q1-what',
      q: '국민비서(구삐)란 무엇인가요?',
      intro: '국민비서(구삐)는 행정안전부가 운영하는 개인 맞춤형 행정 알림 서비스입니다. 건강검진 일정, 자동차 검사 기한, 세금 납부일, 과태료 부과 등 개인에게 꼭 필요한 행정 정보를 카카오톡·네이버·문자메시지 등 원하는 채널로 미리 알려줍니다. 별도 앱 설치 없이 카카오톡이나 네이버에서 바로 이용할 수 있어 편리하며, 200여 종 이상의 알림 서비스를 무료로 제공합니다.',
      highlights: ['국민비서', '구삐', '맞춤 알림', '카카오톡', '네이버', '무료', '200여 종'],
      box: {
        label: '서비스 개요',
        content: '건강검진·자동차검사·세금납부 등 개인 맞춤 행정 알림을 카카오톡·네이버·문자 등으로 무료 제공. 정부24에서 간편 신청.',
      },
      sourceNote: '행정안전부 / 정부24 (gov.kr)',
    },
    {
      anchor: 'q2-service',
      q: '어떤 알림 서비스를 받을 수 있나요?',
      intro: '국민비서는 건강·복지·교통·세금·고용 등 다양한 분야에서 200여 종 이상의 맞춤 알림을 제공합니다. 건강검진 대상 여부·일정, 자동차 정기검사 기한, 국세·지방세 납부 기한, 운전면허 갱신, 아파트 관리비, 과태료 부과, 교통 위반, 국민연금 내역, 고용보험 정보 등 놓치기 쉬운 중요한 행정 일정을 미리 알려주어 기한을 놓치지 않도록 도와줍니다. 신규 서비스도 지속적으로 추가되고 있습니다.',
      highlights: ['건강검진', '자동차검사', '세금납부', '운전면허 갱신', '국민연금', '과태료', '200여 종'],
      table: {
        headers: ['분야', '주요 알림 종류', '비고'],
        rows: [
          ['건강', '건강검진·암검진 일정, 예방접종', '국민건강보험 연동'],
          ['교통', '자동차검사·과태료·교통위반', '운전면허 갱신 포함'],
          ['세금', '국세·지방세 납부기한, 환급', '국세청·지자체 연동'],
          ['복지', '지원금 신청 기간, 급여 변경', '사회보장 연동'],
          ['고용', '고용보험·국민연금 내역 안내', '4대보험 연동'],
          ['주택', '아파트 관리비, 청약 당첨', '기관 연동'],
        ],
      },
      sourceNote: '행정안전부 국민비서 서비스 목록 (gov.kr)',
    },
    {
      anchor: 'q3-channel',
      q: '어떤 채널로 알림을 받을 수 있나요?',
      intro: '국민비서는 카카오톡, 네이버, 문자메시지(SMS), 이메일, 국민비서 앱(구삐) 등 다양한 채널을 통해 알림을 받을 수 있습니다. 이미 사용 중인 카카오톡이나 네이버를 통해 알림을 받을 수 있어 별도 앱 설치 없이도 이용 가능합니다. 채널은 정부24에서 신청 시 원하는 채널을 선택할 수 있으며, 복수의 채널을 동시에 등록하여 중복으로 이용할 수도 있습니다.',
      highlights: ['카카오톡', '네이버', 'SMS', '이메일', '국민비서 앱(구삐)', '복수 채널 가능'],
      box: {
        label: '알림 채널 선택',
        items: [
          '카카오톡 알림톡 (별도 앱 불필요)',
          '네이버 알림 (별도 앱 불필요)',
          '문자메시지(SMS)',
          '이메일',
          '국민비서 앱 (구삐) — Google Play·App Store 무료',
        ],
      },
      sourceNote: '행정안전부 국민비서 채널 안내',
    },
    {
      anchor: 'q4-apply',
      q: '어떻게 신청하나요?',
      intro: '국민비서 서비스는 정부24(gov.kr)에서 로그인 후 "국민비서" 메뉴에서 원하는 알림 서비스와 채널을 선택하여 신청할 수 있습니다. 카카오톡이나 네이버로 알림을 받으려면 해당 플랫폼의 국민비서 채널을 추가하면 됩니다. 국민비서 앱(구삐)을 직접 설치하여 앱 내에서 서비스를 선택하고 신청할 수도 있으며, 신청 후 알림 서비스가 즉시 등록되어 바로 이용 가능합니다.',
      highlights: ['정부24 로그인', 'gov.kr', '카카오톡 채널 추가', '구삐 앱 설치', '즉시 등록'],
      table: {
        headers: ['신청 방법', '절차', '비고'],
        rows: [
          ['정부24 웹', 'gov.kr 로그인 → 국민비서 → 서비스·채널 선택', '공인인증서 필요'],
          ['카카오톡', '카카오톡 → 채널 검색 → "국민비서" 추가', '카카오계정 연동'],
          ['네이버', '네이버 앱 → 알림 → 국민비서 연동', '네이버 로그인'],
          ['구삐 앱', 'Google Play·App Store에서 "구삐" 설치', '앱 내 서비스 선택'],
        ],
      },
      box: {
        label: '신청 후 이용 방법',
        content: '신청 완료 후 해당 알림 조건이 발생하면 선택한 채널로 자동 발송. 별도 확인 불필요.',
      },
      sourceNote: '정부24 국민비서 신청 안내 (gov.kr)',
    },
    {
      anchor: 'q5-manage',
      q: '알림 서비스를 변경하거나 해지할 수 있나요?',
      intro: '국민비서 알림 서비스는 정부24(gov.kr)에서 언제든지 추가·변경·해지할 수 있습니다. 로그인 후 "국민비서 → 나의 서비스 관리"에서 현재 신청된 알림 목록을 확인하고, 원하지 않는 서비스를 해지하거나 새로운 서비스를 추가할 수 있습니다. 알림 채널도 동일한 메뉴에서 변경 가능하며, 카카오톡·네이버 채널은 해당 플랫폼에서 직접 채널을 차단하여 해지할 수도 있습니다.',
      highlights: ['정부24에서 관리', '언제든 변경·해지', '나의 서비스 관리', '채널 변경 가능'],
      box: {
        label: '서비스 관리 방법',
        items: [
          '정부24(gov.kr) → 로그인 → 국민비서',
          '나의 서비스 관리에서 신청 목록 확인',
          '서비스 추가·해지 가능',
          '알림 채널 변경 가능',
        ],
      },
      sourceNote: '정부24 국민비서 이용 안내',
    },
    {
      anchor: 'q6-privacy',
      q: '개인정보는 안전한가요?',
      intro: '국민비서는 행정안전부가 운영하는 공공 서비스로, 개인정보 보호법에 따라 엄격하게 개인정보를 보호합니다. 알림 발송을 위한 최소한의 정보만 활용하며, 제3자에게 개인정보를 제공하지 않습니다. 카카오톡·네이버 등 민간 채널 이용 시에도 개인정보 식별값(CI)을 암호화하여 전달하며, 실제 개인정보는 민간 플랫폼과 공유하지 않습니다. 서비스 해지 시 관련 정보는 즉시 삭제됩니다.',
      highlights: ['개인정보 보호법', '최소 정보 활용', '제3자 미제공', 'CI 암호화', '해지 시 즉시 삭제'],
      box: {
        label: '개인정보 보호 원칙',
        items: [
          '알림에 필요한 최소한의 정보만 활용',
          '제3자(카카오·네이버 등)에 개인정보 미제공',
          'CI(연계정보) 암호화 전달',
          '서비스 해지 시 관련 정보 즉시 삭제',
        ],
      },
      sourceNote: '행정안전부 국민비서 개인정보 처리방침',
    },
    {
      anchor: 'q7-inquiry',
      q: '문의는 어디에 하나요?',
      intro: '국민비서 이용 중 문의는 정부민원안내콜센터(☎110)에 전화하거나, 정부24(gov.kr) 고객센터 온라인 문의를 이용할 수 있습니다. 카카오톡·네이버 채널 관련 문의는 각 플랫폼의 고객센터를 통해 접수하면 됩니다. 서비스 운영 시간은 평일 09:00~18:00이며, 공휴일에는 운영하지 않습니다. 앱 오류나 알림 미수신 문제도 110으로 문의하시면 안내받을 수 있습니다.',
      highlights: ['☎110', '정부민원안내콜센터', 'gov.kr', '평일 09:00~18:00'],
      box: {
        label: '문의처',
        items: [
          '전화: ☎110 (정부민원안내콜센터)',
          '온라인: gov.kr 고객센터',
          '운영: 평일 09:00~18:00',
        ],
      },
      sourceNote: '행정안전부 / 정부민원안내콜센터 110',
    },
  ],
  eligibility: [
    { label: '이용 자격', value: '대한민국 국민 누구나 (본인 인증 필요)' },
    { label: '이용료', value: '무료' },
    { label: '신청처', value: '정부24(gov.kr) 또는 구삐 앱' },
  ],
  faq: [
    {
      question: '카카오톡으로만 받을 수 있나요?',
      answer: '아닙니다. 카카오톡 외에도 네이버, 문자메시지(SMS), 이메일, 국민비서 앱(구삐) 등 다양한 채널을 선택할 수 있습니다.',
      source: { url: 'https://www.gov.kr/portal/service/serviceInfo/PTR000052055', text: '정부24 국민비서 서비스 안내', verifiedAt: '2026-05-17' },
    },
    {
      question: '신청 후 언제부터 알림을 받나요?',
      answer: '신청 즉시 서비스가 등록되며, 해당 알림 조건이 충족되면 자동으로 알림이 발송됩니다.',
      source: { url: 'https://www.gov.kr/portal/service/serviceInfo/PTR000052055', text: '정부24 국민비서 서비스 안내', verifiedAt: '2026-05-17' },
    },
    {
      question: '가족 대신 신청할 수 있나요?',
      answer: '국민비서는 본인 명의로만 신청 가능합니다. 가족의 알림을 받으려면 가족 본인이 직접 신청해야 합니다.',
      source: { url: 'https://www.gov.kr/portal/service/serviceInfo/PTR000052055', text: '정부24 국민비서 서비스 안내', verifiedAt: '2026-05-17' },
    },
    {
      question: '어떤 기기에서 이용할 수 있나요?',
      answer: '카카오톡·네이버·문자 채널은 스마트폰·PC 모두 이용 가능합니다. 구삐 앱은 Android·iOS 스마트폰에서 이용 가능합니다.',
      source: { url: 'https://www.gov.kr/portal/service/serviceInfo/PTR000052055', text: '정부24 국민비서 서비스 안내', verifiedAt: '2026-05-17' },
    },
    {
      question: '알림이 오지 않아요. 어떻게 하나요?',
      answer: '카카오톡·네이버 채널 알림 차단 여부, 앱 알림 설정을 확인하세요. 이상이 없으면 정부민원안내콜센터(110)로 문의하시기 바랍니다.',
      source: { url: 'https://www.gov.kr/portal/service/serviceInfo/PTR000052055', text: '정부24 국민비서 서비스 안내', verifiedAt: '2026-05-17' },
    },
  ],
  sources: [
    { label: '정부24 - 국민비서 서비스 안내', url: 'https://www.gov.kr/portal/service/serviceInfo/PTR000052055' },
    { label: '국민비서 공식 누리집', url: 'https://www.gov.kr/portal/service/serviceInfo/PTR000052055' },
    { label: '행정안전부 디지털정부국', url: 'https://www.mois.go.kr' },
  ],
  related: [
    { id: 'safe-stepping-stone-app', title: '안전디딤돌 앱' },
    { id: 'benefit-notification-service', title: '혜택알리미' },
    { id: '119-safe-call', title: '119안심콜' },
  ],
};

export const nationalSecretarySpokes = [
  { label: '신청방법', path: 'how-to-apply' },
  { label: '알림서비스', path: 'notification-services' },
  { label: '채널선택', path: 'channels' },
  { label: '서비스관리', path: 'manage' },
  { label: '개인정보', path: 'privacy' },
];
