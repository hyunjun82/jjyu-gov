import type { PolicyData } from '@/lib/policy-types';

export const safeSteppingStoneAppPolicy: PolicyData = {
  id: 'safe-stepping-stone-app',
  slug: 'safe-stepping-stone-app',
  type: 'service',
  title: '안전디딤돌 앱 다운로드와 안전신고 방법, 재난 시 활용법까지',
  org: '행정안전부',
  cat: '생활서비스',
  catSlug: 'service',
  amount: '무료',
  deadline: '상시',
  applyUrl: 'https://www.gov.kr/portal/service/serviceInfo/PTR000052059',
  summary: '재난·안전 정보를 한눈에 확인하고 긴급 구조를 요청할 수 있는 행정안전부 무료 앱. 긴급재난문자·대피소·병원·재난뉴스 등 통합 제공.',
  metaDescription: '안전디딤돌 앱 다운로드와 안전신고 방법, 재난 시 활용법까지 – 무료. 재난·안전 정보를 한눈에 확인하고 긴급 구조를 요청할 수 있는 행정안전부 무료 앱. 긴급재난문자·대피소·병원·재난뉴스 등 통합 제공.',
  audience: '스마트폰을 이용하는 전 국민',
  views: 0,
  datePublished: '2026-01-01',
  dateModified: '2026-05-23T09:00:00+09:00',
  keyFacts: {
    이용료: { value: '무료', source: { url: 'https://www.gov.kr/portal/service/serviceInfo/PTR000052059', cardIndex: 1, text: '안전디딤돌 앱 무료 제공', verifiedAt: '2026-05-17' } },
    주관부처: { value: '행정안전부', source: { url: 'https://www.gov.kr/portal/service/serviceInfo/PTR000052059', cardIndex: 1, text: '행정안전부 주관', verifiedAt: '2026-05-17' } },
    다운로드: { value: 'Android(Google Play) / iOS(App Store)', source: { url: 'https://www.gov.kr/portal/service/serviceInfo/PTR000052059', cardIndex: 1, text: 'Google Play 및 App Store에서 다운로드', verifiedAt: '2026-05-17' } },
    주요기능: { value: '긴급재난문자·대피소·병원·재난뉴스·안전신고', source: { url: 'https://www.gov.kr/portal/service/serviceInfo/PTR000052059', cardIndex: 1, text: '재난문자, 대피소, 병원, 재난뉴스, 긴급신고 기능 통합', verifiedAt: '2026-05-17' } },
    긴급신고: { value: '앱 내 긴급신고(119·112·120·122) 원터치 가능', source: { url: 'https://www.gov.kr/portal/service/serviceInfo/PTR000052059', cardIndex: 1, text: '119, 112, 120, 122 원터치 신고', verifiedAt: '2026-05-17' } },
    문의전화: { value: '044-205-5388 (행정안전부)', source: { url: 'https://www.gov.kr/portal/service/serviceInfo/PTR000052059', cardIndex: 1, text: '문의: 044-205-5388', verifiedAt: '2026-05-17' } },
    앱이름: { value: '안전디딤돌', source: { url: 'https://www.gov.kr/portal/service/serviceInfo/PTR000052059', cardIndex: 1, text: '앱 명칭: 안전디딤돌', verifiedAt: '2026-05-17' } },
  },
  qa: [
    {
      anchor: 'q1-what',
      q: '안전디딤돌 앱이란 무엇인가요?',
      intro: '안전디딤돌은 행정안전부가 제공하는 재난안전 종합 정보 앱입니다. 태풍·지진·홍수 등 재난 발생 시 긴급재난문자 확인, 대피소 위치 안내, 가까운 병원 검색, 재난뉴스 확인, 각종 안전 신고까지 한 앱에서 모두 처리할 수 있습니다. Android(Google Play)와 iOS(App Store)에서 무료로 다운로드할 수 있으며, 평상시에도 생활안전 정보와 안전 교육 자료를 제공합니다.',
      highlights: ['행정안전부', '재난안전 종합 앱', '무료', '긴급재난문자', '대피소', '병원 검색'],
      box: {
        label: '앱 소개',
        content: '재난 발생 시 신속한 대응을 위한 행정안전부 공식 앱. 긴급재난문자·대피소·병원·재난뉴스·안전신고를 통합 제공합니다.',
      },
      sourceNote: '행정안전부 / 정부24 (gov.kr)',
    },
    {
      anchor: 'q2-features',
      q: '어떤 기능을 제공하나요?',
      intro: '안전디딤돌 앱은 크게 6가지 핵심 기능을 제공합니다. ①긴급재난문자: 지역별 재난 경보를 실시간 수신합니다. ②재난·안전정보: 기상재해, 사회재난 등 다양한 안전 정보를 제공합니다. ③대피소: 현재 위치 기반으로 가까운 대피소 위치와 수용 인원을 확인할 수 있습니다. ④병원·약국: 응급 상황 시 가까운 의료기관을 신속히 찾을 수 있습니다. ⑤안전신고: 위험 상황을 사진·영상으로 신고할 수 있습니다. ⑥긴급신고: 119, 112, 120, 122를 원터치로 신고합니다.',
      highlights: ['긴급재난문자', '대피소', '병원·약국', '안전신고', '119 원터치', '실시간 수신'],
      table: {
        headers: ['기능', '설명', '비고'],
        rows: [
          ['긴급재난문자', '지역별 재난 경보 실시간 수신', '현재 위치 기반'],
          ['재난·안전정보', '기상재해·사회재난 정보 제공', '시나리오별 행동 요령'],
          ['대피소 찾기', '현재 위치 기반 대피소 위치·수용인원', '지도 연계'],
          ['병원·약국 검색', '응급의료기관·약국 위치 안내', '24시간 응급실 표시'],
          ['안전신고', '위험 상황 사진·영상 신고', '관계기관 즉시 전달'],
          ['긴급신고', '119·112·120·122 원터치 신고', '원터치 다이얼'],
        ],
      },
      sourceNote: '행정안전부 안전디딤돌 앱 소개 (gov.kr)',
    },
    {
      anchor: 'q3-download',
      q: '어떻게 다운로드하나요?',
      intro: '안전디딤돌 앱은 Android와 iOS 기기 모두에서 무료로 이용할 수 있습니다. Android 기기는 Google Play 스토어에서, iPhone·iPad는 App Store에서 "안전디딤돌"을 검색하여 설치하면 됩니다. 앱 설치 후 별도 회원가입 없이 바로 주요 기능을 사용할 수 있으며, 위치정보·알림 권한 허용 시 현재 위치 기반 서비스와 재난문자 수신이 가능합니다.',
      highlights: ['Google Play', 'App Store', '무료 설치', '회원가입 불필요', '위치 기반 서비스'],
      box: {
        label: '다운로드 방법',
        items: [
          'Android: Google Play 스토어 → "안전디딤돌" 검색 → 설치',
          'iPhone/iPad: App Store → "안전디딤돌" 검색 → 설치',
          '설치 후 위치·알림 권한 허용',
          '별도 회원가입 없이 즉시 사용 가능',
        ],
      },
      sourceNote: '행정안전부 안전디딤돌 앱 (Google Play / App Store)',
    },
    {
      anchor: 'q4-disaster',
      q: '재난 시 어떻게 활용하나요?',
      intro: '재난이 발생하면 안전디딤돌 앱을 통해 체계적으로 대응할 수 있습니다. 앱에 수신된 긴급재난문자로 상황을 파악하고, 재난 유형별 행동 요령(지진·태풍·홍수·화재 등)을 확인합니다. 대피 시 현재 위치에서 가장 가까운 대피소를 지도에서 확인하고, 부상자 발생 시 응급의료기관을 신속히 찾을 수 있습니다. 구조가 필요할 경우 원터치 긴급신고(119) 버튼으로 즉시 신고 가능합니다.',
      highlights: ['재난 유형별 행동요령', '대피소 안내', '응급의료기관', '119 원터치 신고', '지진·태풍·홍수'],
      table: {
        headers: ['재난 유형', '앱 활용 방법', '주요 기능'],
        rows: [
          ['지진', '지진 행동요령 확인 → 대피소 이동', '대피소 찾기'],
          ['태풍·홍수', '기상 특보 확인 → 안전 구역 이동', '재난문자 수신'],
          ['화재', '화재 신고 및 대피 요령 확인', '119 원터치 신고'],
          ['응급환자', '가까운 응급의료기관 신속 검색', '병원·약국 검색'],
          ['위험 상황', '현장 사진·영상으로 안전 신고', '안전신고'],
        ],
      },
      box: {
        label: '재난 대응 3단계',
        items: [
          '1단계: 재난문자·뉴스로 상황 파악',
          '2단계: 행동 요령 확인 → 대피소 이동',
          '3단계: 119/112 원터치 신고',
        ],
      },
      sourceNote: '행정안전부 안전디딤돌 앱 활용 가이드',
    },
    {
      anchor: 'q5-permission',
      q: '앱 권한은 어떻게 설정하나요?',
      intro: '안전디딤돌 앱을 최적으로 사용하려면 몇 가지 권한을 허용해야 합니다. 위치 권한(필수)은 현재 위치 기반 대피소·병원 검색에 필요합니다. 알림 권한(선택)은 긴급재난문자와 안전 알림 수신에 필요하므로 허용을 권장합니다. 카메라·마이크(선택)는 안전신고 시 사진·동영상 첨부에 사용됩니다. 권한 설정은 스마트폰 설정 → 앱 → 안전디딤돌에서 변경할 수 있습니다.',
      highlights: ['위치 권한 필수', '알림 권한 허용 권장', '카메라·마이크', '재난문자 수신'],
      box: {
        label: '권한 설정 안내',
        items: [
          '위치 정보: 필수 (대피소·병원 검색)',
          '알림: 허용 권장 (재난문자 수신)',
          '카메라·마이크: 선택 (안전신고 사진·영상)',
          '설정 → 앱 → 안전디딤돌에서 변경 가능',
        ],
      },
      sourceNote: '행정안전부 안전디딤돌 앱 이용 안내',
    },
    {
      anchor: 'q6-report',
      q: '안전신고는 어떻게 하나요?',
      intro: '안전디딤돌 앱의 안전신고 기능을 통해 주변의 위험 상황을 신속하게 신고할 수 있습니다. 앱 실행 후 "안전신고" 버튼을 눌러 사진 또는 동영상으로 위험 상황을 촬영하고, 현재 위치와 내용을 입력하면 관계기관에 즉시 전달됩니다. 도로 균열, 시설물 파손, 가스 누출, 불법 투기 등 생활 주변의 위험 상황도 신고 대상이며, 처리 결과를 앱에서 확인할 수 있습니다.',
      highlights: ['안전신고', '사진·동영상 첨부', '관계기관 즉시 전달', '처리 결과 확인'],
      box: {
        label: '안전신고 절차',
        items: [
          '① 앱 실행 → "안전신고" 선택',
          '② 사진 또는 동영상 촬영',
          '③ 위치 확인·내용 입력',
          '④ 신고 제출 → 관계기관 전달',
          '⑤ 앱에서 처리 결과 확인',
        ],
      },
      sourceNote: '행정안전부 안전디딤돌 앱 안전신고 기능',
    },
    {
      anchor: 'q7-inquiry',
      q: '문의 및 오류 신고는 어디에 하나요?',
      intro: '안전디딤돌 앱 이용 중 문의 또는 오류 신고는 행정안전부 안전정책실(☎044-205-5388)로 연락하거나, 정부24 누리집(gov.kr)의 민원 안내 게시판을 이용할 수 있습니다. 앱 자체적으로도 "설정 → 문의하기" 기능을 통해 피드백을 제출할 수 있습니다. 앱 업데이트는 Google Play 또는 App Store에서 자동 알림되며, 항상 최신 버전을 유지하는 것이 좋습니다.',
      highlights: ['☎044-205-5388', '행정안전부', 'gov.kr', '앱 내 문의하기'],
      box: {
        label: '문의처',
        items: [
          '전화: 044-205-5388 (행정안전부 안전정책실)',
          '정부24: gov.kr',
          '앱 내: 설정 → 문의하기',
        ],
      },
      sourceNote: '행정안전부 (044-205-5388)',
    },
  ],
  eligibility: [
    { label: '이용 자격', value: '스마트폰 보유 국민 누구나' },
    { label: '이용료', value: '무료' },
    { label: '지원 기기', value: 'Android / iOS' },
  ],
  faq: [
    {
      question: '인터넷이 없어도 사용할 수 있나요?',
      answer: '일부 기능은 오프라인에서 사용 가능하지만, 대피소 검색·재난뉴스 등 실시간 정보는 인터넷 연결이 필요합니다.',
      source: { url: 'https://www.gov.kr/portal/service/serviceInfo/PTR000052059', text: '정부24 안전디딤돌 서비스 안내', verifiedAt: '2026-05-17' },
    },
    {
      question: '재난문자는 자동으로 수신되나요?',
      answer: '알림 권한을 허용하면 현재 위치의 재난문자가 자동으로 수신됩니다. 위치 권한도 함께 허용해야 지역 기반 재난문자를 받을 수 있습니다.',
      source: { url: 'https://www.gov.kr/portal/service/serviceInfo/PTR000052059', text: '정부24 안전디딤돌 서비스 안내', verifiedAt: '2026-05-17' },
    },
    {
      question: '앱 업데이트는 어떻게 하나요?',
      answer: 'Google Play 또는 App Store에서 자동 업데이트를 설정하거나, "안전디딤돌" 앱 페이지에서 수동으로 업데이트할 수 있습니다.',
      source: { url: 'https://www.gov.kr/portal/service/serviceInfo/PTR000052059', text: '정부24 안전디딤돌 서비스 안내', verifiedAt: '2026-05-17' },
    },
    {
      question: '신고 후 어떻게 처리되나요?',
      answer: '안전신고 접수 후 관할 기관으로 즉시 전달됩니다. 처리 결과는 앱 내 "신고 내역"에서 확인하거나 SMS로 안내받을 수 있습니다.',
      source: { url: 'https://www.gov.kr/portal/service/serviceInfo/PTR000052059', text: '정부24 안전디딤돌 서비스 안내', verifiedAt: '2026-05-17' },
    },
    {
      question: '해외에서도 사용할 수 있나요?',
      answer: '기본 기능은 해외에서도 사용할 수 있으나, 국내 재난문자 수신과 대피소 안내는 국내에서만 정상 작동합니다.',
      source: { url: 'https://www.gov.kr/portal/service/serviceInfo/PTR000052059', text: '정부24 안전디딤돌 서비스 안내', verifiedAt: '2026-05-17' },
    },
  ],
  sources: [
    { label: '정부24 - 안전디딤돌 서비스', url: 'https://www.gov.kr/portal/service/serviceInfo/PTR000052059' },
    { label: '행정안전부 재난안전포털', url: 'https://www.safekorea.go.kr' },
    { label: '안전디딤돌 Google Play', url: 'https://play.google.com/store/apps/details?id=kr.go.nema.disasteralert_new' },
  ],
  related: [
    { id: 'national-secretary', title: '국민비서' },
    { id: '119-safe-call', title: '119안심콜' },
    { id: 'sex-offender-notification', title: '성범죄자 신상정보 고지' },
  ],
};

export const safeSteppingStoneAppSpokes = [
  { label: '다운로드', path: 'download' },
  { label: '주요기능', path: 'features' },
  { label: '긴급신고', path: 'emergency' },
  { label: '안전신고', path: 'safety-report' },
  { label: '대피소찾기', path: 'shelter' },
];
