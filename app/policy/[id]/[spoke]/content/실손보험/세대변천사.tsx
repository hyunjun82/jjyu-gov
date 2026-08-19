import type { SpokeData } from '../../SpokeClient';

/* 추출본: scripts/output/source-generation-history.txt
 * 1차 출처: 손해보험협회 실손의료보험 상품 공시 · 금융감독원 2025년 실손의료보험 사업실적
 *   https://kpub.knia.or.kr/productDisc/lostHealth/lostHealthMinsInsIntro.do
 * 쓰지 않는 것:
 *   - TODO 검증 못 한 항목을 사유와 함께 여기 적는다 (본문에 쓰지 않는다)
 */

const SRC = 'https://kpub.knia.or.kr/productDisc/lostHealth/lostHealthMinsInsIntro.do';
const HUB = '/policy/indemnity-insurance-generations';

export const 실손보험세대변천사SpokeContent: SpokeData = {
  h1: '실손보험 변천사로 보는 세대 비교, 내 상품 모르면 못 갈아탄다',
  breadcrumb: '세대 변천사',
  description:
    '판매시기와 자기부담비율, 재가입주기가 세대마다 어떻게 달라져 왔는지 손보협회 공시표와 금감원 자료로 교차 확인했습니다.',
  datePublished: '2026-08-19T09:05:30+09:00',
  dateModified: '2026-08-19T09:05:30+09:00',
  keyFacts: {
    'TODO 항목': 'TODO 값 — 추출본에 있는 숫자만',
  },
  keyFactsHighlights: {},
  qa: [
    {
      q: '세대는 어떻게 나뉘어 왔나요?', anchor: 'q1',
      intro:
        'TODO 본문. 이 질문은 실검색어(PAA)다. 답도 검색한 사람 기준으로 쓴다.',
      highlights: ['TODO', 'TODO', 'TODO', 'TODO'],
      sourceNote: '* 출처: 손해보험협회 실손의료보험 상품 공시 · 금융감독원 2025년 실손의료보험 사업실적 (2026-08-19 확인)',
    },
    {
      q: '자기부담비율은 어떻게 변해 왔나요?', anchor: 'q2',
      intro:
        'TODO 본문. 이 질문은 실검색어(PAA)다. 답도 검색한 사람 기준으로 쓴다.',
      highlights: ['TODO', 'TODO', 'TODO', 'TODO'],
      sourceNote: '* 출처: 손해보험협회 실손의료보험 상품 공시 · 금융감독원 2025년 실손의료보험 사업실적 (2026-08-19 확인)',
    },
    {
      q: '재가입 주기는 언제 생겼나요?', anchor: 'q3',
      intro:
        'TODO 본문. 이 질문은 실검색어(PAA)다. 답도 검색한 사람 기준으로 쓴다.',
      highlights: ['TODO', 'TODO', 'TODO', 'TODO'],
      act: {
        cue: 'TODO 누를 이유 한 줄 — 바로 위 문단에서 이어져야 한다. 앞에서 안 꺼낸 얘기를 버튼 문구로 쓰지 않는다.',
        label: 'TODO 버튼 문구',
        url: HUB,
      },
      sourceNote: '* 출처: 손해보험협회 실손의료보험 상품 공시 · 금융감독원 2025년 실손의료보험 사업실적 (2026-08-19 확인)',
    },
    {
      q: '5세대는 뭐가 달라졌나요?', anchor: 'q4',
      intro:
        'TODO 본문. 이 질문은 실검색어(PAA)다. 답도 검색한 사람 기준으로 쓴다.',
      highlights: ['TODO', 'TODO', 'TODO', 'TODO'],
      sourceNote: '* 출처: 손해보험협회 실손의료보험 상품 공시 · 금융감독원 2025년 실손의료보험 사업실적 (2026-08-19 확인)',
    },
    {
      q: '내 상품이 어디쯤인지 어떻게 아나요?', anchor: 'q5',
      intro:
        'TODO 본문. 이 질문은 실검색어(PAA)다. 답도 검색한 사람 기준으로 쓴다.',
      highlights: ['TODO', 'TODO', 'TODO', 'TODO'],
      act: {
        cue: 'TODO 누를 이유 한 줄 — 바로 위 문단에서 이어져야 한다. 앞에서 안 꺼낸 얘기를 버튼 문구로 쓰지 않는다.',
        label: 'TODO 버튼 문구',
        url: HUB,
      },
      sourceNote: '* 출처: 손해보험협회 실손의료보험 상품 공시 · 금융감독원 2025년 실손의료보험 사업실적 (2026-08-19 확인)',
    },
  ],
  faqData: [
    {
      q: '세대 구분 기준이 뭔가요?',
      a: 'TODO 답. 추출본에 있는 말로만 쓴다.',
      source: '손해보험협회 실손의료보험 상품 공시 · 금융감독원 2025년 실손의료보험 사업실적', sourceUrl: SRC,
    },
    {
      q: '1세대는 왜 재가입이 없나요?',
      a: 'TODO 답. 추출본에 있는 말로만 쓴다.',
      source: '손해보험협회 실손의료보험 상품 공시 · 금융감독원 2025년 실손의료보험 사업실적', sourceUrl: SRC,
    },
    {
      q: '3세대에 특약이 왜 생겼나요?',
      a: 'TODO 답. 추출본에 있는 말로만 쓴다.',
      source: '손해보험협회 실손의료보험 상품 공시 · 금융감독원 2025년 실손의료보험 사업실적', sourceUrl: SRC,
    },
    {
      q: '4세대와 5세대 차이는요?',
      a: 'TODO 답. 추출본에 있는 말로만 쓴다.',
      source: '손해보험협회 실손의료보험 상품 공시 · 금융감독원 2025년 실손의료보험 사업실적', sourceUrl: SRC,
    },
    {
      q: '전환하면 되돌릴 수 있나요?',
      a: 'TODO 답. 추출본에 있는 말로만 쓴다.',
      source: '손해보험협회 실손의료보험 상품 공시 · 금융감독원 2025년 실손의료보험 사업실적', sourceUrl: SRC,
    },
  ],
  sources: [
    { name: '손해보험협회 실손의료보험 상품 공시 · 금융감독원 2025년 실손의료보험 사업실적', url: SRC },
  ],
};
