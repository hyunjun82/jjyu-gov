/* 산재보험 유족급여·장례비 청구 - 고용노동부·정부24 */
export const industrialAccidentSurvivorBenefitPolicy = {
  id: '339', type: 'service' as const,
  title: '산재 유족급여 장례비 사망진단서로 근로복지공단에 청구하는 법',
  titleKeywords: { k1: '산재유족급여', k2: '장례비청구', k3: '사망진단서제출', k4: '근로복지공단' },
  slug: 'industrial-accident-survivor-benefit', org: '고용노동부·정부24', cat: '생활', catSlug: 'life',
  amount: '수수료 없음', deadline: '상시 신청 가능(처리 총 10일)', views: 0,
  applyUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000268', ctaLabel: '정부24 산재보험 유족급여·장례비 청구 바로가기',
  datePublished: '2026-07-17T09:00:00+09:00', dateModified: '2026-07-17T09:00:00+09:00',
  summary: '산재보험 유족급여·장례비 청구는 근로자가 업무상 사유로 사망했을 때, 유족 등 수급권자가 보상을 받기 위해 청구하는 절차로, 산업재해보상보험법 제62조·제71조에 근거합니다. 정부24에서 방문·팩스·우편으로 신청할 수 있으며 수수료는 없습니다. 처리기간은 총 10일이 소요됩니다. 제출서류는 근로자의 사망진단서 또는 시체검안서(사인미상 시 부검감정서)입니다. 접수·처리기관은 근로복지공단지역본부(지사)입니다. 산업재해보상보험 유족급여(진폐유족연금, 장례비) 청구서(근로복지공단 보상업무처리규정 별지 서식 15호)를 작성합니다. 본 정보는 정부24 공식 자료에 기반하며, 정확한 신청방법은 정부24나 근로복지공단에서 확인이 필요합니다.',
  metaDescription: '산재 유족급여 장례비 사망진단서로 근로복지공단에 청구하는 법 – 수수료 없음, 처리 총 10일. 사망진단서(또는 시체검안서) 1부 필요.',
  audience: '업무상 사유로 사망한 근로자의 유족(수급권자)',
  keyFacts: {
    신청방법: { value: '방문, FAX, 우편', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000268', text: '신청방법', verifiedAt: '2026-07-17' } },
    수수료: { value: '수수료 없음', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000268', text: '수수료', verifiedAt: '2026-07-17' } },
    처리기간: { value: '총 10일', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000268', text: '처리기간', verifiedAt: '2026-07-17' } },
    제출서류: { value: '근로자의 사망진단서 또는 시체검안서 1부(사인미상 시 부검감정서 1부)', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000268', text: '제출서류', verifiedAt: '2026-07-17' } },
    접수처리기관: { value: '근로복지공단지역본부(지사)', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000268', text: '신청 방법 및 절차', verifiedAt: '2026-07-17' } },
    근거법령: { value: '산업재해보상보험법 제62조·제71조, 시행령 제21조제1항', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000268', text: '근거법령', verifiedAt: '2026-07-17' } },
  },
  qa: [
    {
      q: '산재 유족급여·장례비 청구가 뭔가요?', anchor: 'q-basic',
      intro: '산재보험 유족급여·장례비 청구는 근로자가 업무상 사유로 사망한 경우, 유족 등 수급권자가 보상을 받기 위해 근로복지공단에 청구하는 민원사무입니다. 산업재해보상보험법 제62조·제71조에 근거합니다. 유족급여는 유족연금 또는 일시금 형태로, 장례비는 장례를 치른 사람에게 지급됩니다.',
      highlights: ['업무상 사유로 사망한 근로자의 유족이 청구', '산업재해보상보험법 제62조·제71조 근거', '유족급여(연금 또는 일시금)와 장례비 함께 청구 가능', '진폐유족연금도 같은 서식으로 청구'],
      box: { label: '핵심', content: '업무상 사망 시 유족이 유족급여와 장례비를 근로복지공단에 청구.' },
    },
    {
      q: '어떤 서류가 필요한가요?', anchor: 'q-docs',
      intro: '제출서류는 근로자의 사망진단서 또는 시체검안서 1부입니다. 사인이 미상인 경우에는 부검감정서 1부가 필요합니다. 주민등록표 등본은 행정정보공동이용을 통해 담당공무원이 확인할 수 있어 별도로 제출하지 않아도 됩니다.',
      highlights: ['사망진단서 또는 시체검안서 1부 필수', '사인미상 시 부검감정서 1부 추가', '주민등록표 등본은 행정정보공동이용으로 확인', '청구서(별지 제15호)에 관련 정보 기재'],
      box: { label: '준비서류', content: '사망진단서(또는 시체검안서)가 핵심. 사인미상 시 부검감정서 추가.' },
    },
    {
      q: '처리기간은 얼마나 걸리나요?', anchor: 'q-period',
      intro: '처리기간은 총 10일입니다. 근로복지공단이 업무상 사망 여부와 유족의 수급자격을 확인하는 절차를 거치기 때문에 일정 시간이 소요됩니다. 유족은 장례 절차와 함께 청구서류를 준비해 최대한 빨리 신청하는 것이 좋습니다.',
      highlights: ['처리기간: 총 10일', '업무상 사망 여부·수급자격 확인 절차 필요', '장례 절차와 병행해 서류 준비 권장', '심사 결과에 따라 승인·불승인 결정'],
      box: { label: '처리기간', content: '총 10일 소요. 업무상 재해 여부·수급자격 확인 절차 포함.' },
    },
    {
      q: '어디서, 어떻게 신청하나요?', anchor: 'q-apply-method',
      intro: '신청 방법은 방문, 팩스, 우편입니다. 인터넷 신청은 지원되지 않으므로, 근로복지공단지역본부(지사)를 방문하거나 팩스·우편으로 서류를 제출해야 합니다. 근로복지공단 홈페이지(comwel.or.kr)에서 관련 서식과 절차를 미리 확인할 수 있습니다.',
      highlights: ['방문·팩스·우편 세 가지 방법(인터넷 미지원)', '접수·처리기관: 근로복지공단지역본부(지사)', '근로복지공단 홈페이지에서 서식 확인 가능', '실제 청구는 방문·팩스·우편으로 진행'],
      box: { label: '신청경로', content: '근로복지공단지역본부(지사)에 방문·팩스·우편으로 청구.' },
    },
    {
      q: '유족급여와 장례비는 함께 받을 수 있나요?', anchor: 'q-together',
      intro: '유족급여(진폐유족연금 포함)와 장례비는 같은 청구서(산업재해보상보험 유족급여(진폐유족연금, 장례비) 청구서, 별지 제15호)로 함께 청구할 수 있습니다. 장례비는 실제로 장례를 치른 사람에게 지급되므로, 장례를 담당한 유족이 함께 신청하는 것이 일반적입니다.',
      highlights: ['유족급여+장례비 한 청구서로 함께 신청 가능', '진폐유족연금도 동일 서식으로 청구', '장례비는 실제 장례를 치른 사람에게 지급', '별도 청구서 작성 없이 통합 처리'],
      box: { label: '통합 청구', content: '유족급여+장례비를 하나의 청구서(별지 제15호)로 함께 청구 가능.' },
    },
    {
      q: '어디에 문의하나요?', anchor: 'q-contact',
      intro: '이 민원의 제도를 담당하는 중앙행정기관은 고용노동부 산재보상정책과입니다. 개별 민원(실제 접수·처리)에 대한 문의는 관할 근로복지공단지역본부(지사)에 직접 연락하는 것이 정확합니다. 근로복지공단 고객센터(국번없이 1588-0075)나 정부24 콜센터(1588-2188), 정부민원안내콜센터(국번없이 110)를 통해서도 일반적인 안내를 받을 수 있습니다.',
      highlights: ['제도 담당: 고용노동부 산재보상정책과', '개별 민원 문의는 관할 근로복지공단지역본부', '근로복지공단 고객센터 1588-0075', '정부24 콜센터 1588-2188'],
      box: { label: '문의처', content: '개별 민원은 관할 근로복지공단지역본부, 일반 안내는 1588-0075.' },
    },
  ],
  faq: [
    { q: '업무 중 사망하면 어떻게 청구하나요?', a: '사망진단서 등을 갖춰 근로복지공단지역본부(지사)에 방문·팩스·우편으로 청구하면 됩니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000268' },
    { q: '수수료가 있나요?', a: '없습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000268' },
    { q: '처리는 얼마나 걸리나요?', a: '총 10일이 소요됩니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000268' },
    { q: '유족급여와 장례비를 따로 신청해야 하나요?', a: '아니요, 하나의 청구서로 함께 신청할 수 있습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000268' },
    { q: '인터넷으로 신청할 수 있나요?', a: '아니요, 방문·팩스·우편으로만 신청할 수 있습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000268' },
  ],
  sources: [
    { label: '정부24(산재보험 유족급여·장례비 청구)', url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000268' },
    { label: '근로복지공단', url: 'https://www.comwel.or.kr' },
    { label: '고용노동부', url: 'https://www.moel.go.kr' },
  ],
} as const;

export const industrialAccidentSurvivorBenefitSpokes = [];
