/* 산재보상 재심사 청구 - 고용노동부·정부24 */
export const industrialAccidentReExaminationRequestPolicy = {
  id: '394', type: 'service' as const,
  title: '산재 심사청구 결정 불복 시 진료기록으로 60일 만에 재심사받는 법',
  titleKeywords: { k1: '산재보상재심사청구', k2: '심사청구결정불복', k3: '출근부업무일지진료기록지', k4: '산업재해보상보험재심사위원회' },
  slug: 'industrial-accident-re-examination-request', org: '고용노동부·정부24', cat: '생활', catSlug: 'life',
  amount: '수수료 없음', deadline: '심사청구 결정을 안 날부터 청구 가능(처리 총 60일)', views: 0,
  applyUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000157', ctaLabel: '정부24 산재보상 재심사 청구 바로가기',
  datePublished: '2026-07-17T09:00:00+09:00', dateModified: '2026-07-17T09:00:00+09:00',
  summary: '산재보상 재심사 청구는 보험급여에 관한 심사청구결정에 대해 불복하는 사람이 청구하는 절차로, 산업재해보상보험법 제106조에 근거합니다. 근로복지공단의 1차 심사청구 결과에도 여전히 이의가 있는 경우 이용하는 2차 구제 절차입니다. 신청 방법은 방문, 우편이며, 신청자격은 본인 또는 대리인입니다. 수수료는 없습니다. 처리기간은 총 60일입니다. 제출서류는 청구의 취지 및 이유 1부, 위임장(대리인인 경우) 1부, 출근부 또는 업무일지, 진료기록지, 진단서 또는 소견서, 건강보험수진내역 등 과거병력자료, 의료영상(필름·CD·의학영상정보시스템 영상전송) 등입니다. 접수기관은 근로복지공단, 처리기관은 산업재해보상보험재심사위원회입니다. 본 정보는 정부24 공식 자료에 기반하며, 정확한 신청방법은 정부24나 근로복지공단에서 확인이 필요합니다.',
  metaDescription: '산재 심사청구 결정 불복 시 진료기록으로 60일 만에 재심사받는 법 – 수수료 없음, 처리 총 60일.',
  audience: '산재 심사청구 결정에도 여전히 이의가 있는 근로자',
  keyFacts: {
    신청방법: { value: '방문, 우편', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000157', text: '신청방법', verifiedAt: '2026-07-17' } },
    신청자격: { value: '본인 또는 대리인', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000157', text: '신청자격', verifiedAt: '2026-07-17' } },
    수수료: { value: '수수료 없음', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000157', text: '수수료', verifiedAt: '2026-07-17' } },
    처리기간: { value: '총 60일', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000157', text: '처리기간', verifiedAt: '2026-07-17' } },
    제출서류: { value: '청구 취지·이유서 1부, 위임장(대리인), 출근부·진료기록지·진단서 등 입증자료', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000157', text: '제출 서류', verifiedAt: '2026-07-17' } },
    접수처리기관: { value: '접수: 근로복지공단, 처리: 산업재해보상보험재심사위원회', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000157', text: '신청 방법 및 절차', verifiedAt: '2026-07-17' } },
    근거법령: { value: '산업재해보상보험법 제106조, 시행령 제105조', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000157', text: '근거법령', verifiedAt: '2026-07-17' } },
  },
  qa: [
    {
      q: '산재보상 재심사 청구가 뭔가요?', anchor: 'q-basic',
      intro: '산재보상 재심사 청구는 보험급여에 관한 심사청구결정에 대해 불복하는 사람이 청구하는 민원사무입니다. 산업재해보상보험법 제106조에 근거하며, 근로복지공단의 1차 심사청구(산재심사청구) 결과에도 여전히 이의가 있을 때 이용하는 2차 구제 절차입니다.',
      highlights: ['심사청구 결정에 불복할 때 청구하는 2차 구제절차', '산업재해보상보험법 제106조 근거', '1차 심사청구 이후의 절차', '산업재해보상보험재심사위원회가 심리'],
      box: { label: '핵심', content: '1차 심사청구 결과에도 이의가 있을 때 청구하는 2차 구제 절차.' },
    },
    {
      q: '심사청구와 재심사청구는 어떻게 다른가요?', anchor: 'q-review-vs-reexamination',
      intro: '심사청구는 원처분(요양불승인, 장해등급 결정 등)에 대해 근로복지공단에 처음 이의를 제기하는 절차입니다. 재심사청구는 그 심사청구 결정에도 불복할 경우 산업재해보상보험재심사위원회에 다시 판단을 구하는 절차로, 1차와 2차 구제 절차의 관계입니다.',
      highlights: ['심사청구: 원처분에 대한 1차 이의제기', '재심사청구: 심사청구 결정에 대한 2차 이의제기', '재심사위원회가 최종 행정심판 성격의 판단', '재심사 결과에도 불복하면 행정소송 가능'],
      box: { label: '심사청구 vs 재심사청구', content: '심사청구(1차) → 재심사청구(2차) → 불복 시 행정소송.' },
    },
    {
      q: '어떤 서류가 필요한가요?', anchor: 'q-docs',
      intro: '청구의 취지 및 이유 1부가 기본으로 필요하며, 대리인이 청구하는 경우에는 위임장 1부도 필요합니다. 그 외에 출근부 또는 업무일지, 진료기록지, 진단서 또는 소견서, 건강보험수진내역 등 과거병력자료, 의료영상(필름·CD·의학영상정보시스템 영상전송) 등 청구 취지를 뒷받침할 입증자료를 갖춰 제출해야 합니다.',
      highlights: ['청구 취지·이유서 1부 필수', '대리인 청구 시 위임장 1부 추가', '출근부·진료기록지·진단서 등 입증자료 필요', '의료영상(필름·CD 등)도 증빙자료로 활용 가능'],
      box: { label: '준비서류', content: '청구 취지·이유서+위임장(대리인)+진료기록 등 입증자료.' },
    },
    {
      q: '수수료와 처리기간은 어떻게 되나요?', anchor: 'q-fee-period',
      intro: '수수료는 없습니다. 처리기간은 총 60일이 소요됩니다. 입증자료가 충분할수록 재심사위원회의 심리가 원활하게 진행됩니다.',
      highlights: ['수수료: 없음', '처리기간: 총 60일', '입증자료 충실도가 심리 결과에 영향', '결과에 불복하면 행정소송으로 이어질 수 있음'],
      box: { label: '수수료·처리기간', content: '수수료 없음, 처리 총 60일.' },
    },
    {
      q: '어디서, 어떻게 신청하나요?', anchor: 'q-apply-method',
      intro: '신청 방법은 방문, 우편입니다. 접수기관은 근로복지공단이며, 처리기관은 산업재해보상보험재심사위원회입니다. 관할 근로복지공단지역본부(지사)를 통해 접수합니다.',
      highlights: ['방문·우편 두 가지 방법(인터넷 불가)', '접수기관: 근로복지공단', '처리기관: 산업재해보상보험재심사위원회', '관할 근로복지공단지역본부를 통해 접수'],
      box: { label: '신청경로', content: '관할 근로복지공단을 통해 방문·우편으로 접수.' },
    },
    {
      q: '어디에 문의하나요?', anchor: 'q-contact',
      intro: '이 민원의 제도를 담당하는 중앙행정기관은 고용노동부 산재보상정책과입니다. 개별 민원(실제 접수·처리)에 대한 문의는 관할 근로복지공단(관할 처리기관)에 직접 연락하는 것이 정확합니다. 정부24 콜센터(1588-2188), 정부민원안내콜센터(국번없이 110)를 통해서도 일반적인 안내를 받을 수 있습니다.',
      highlights: ['제도 담당: 고용노동부 산재보상정책과', '개별 민원 문의는 관할 근로복지공단', '정부24 콜센터 1588-2188', '정부민원안내콜센터 국번없이 110'],
      box: { label: '문의처', content: '개별 민원은 관할 근로복지공단, 일반 안내는 정부24 콜센터.' },
    },
  ],
  faq: [
    { q: '수수료가 있나요?', a: '없습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000157' },
    { q: '처리는 얼마나 걸리나요?', a: '총 60일이 소요됩니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000157' },
    { q: '인터넷으로 신청할 수 있나요?', a: '아니요, 방문이나 우편으로만 신청할 수 있습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000157' },
    { q: '심사청구를 안 거치고 바로 재심사청구할 수 있나요?', a: '아니요, 재심사청구는 심사청구 결정에 불복하는 경우에 청구하는 절차입니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000157' },
    { q: '대리인이 청구할 수 있나요?', a: '네, 위임장을 갖추면 대리인도 청구할 수 있습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000157' },
  ],
  sources: [
    { label: '정부24(산재보상 재심사 청구)', url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000157' },
    { label: '근로복지공단', url: 'https://www.comwel.or.kr' },
    { label: '고용노동부', url: 'https://www.moel.go.kr' },
  ],
} as const;

export const industrialAccidentReExaminationRequestSpokes = [];
