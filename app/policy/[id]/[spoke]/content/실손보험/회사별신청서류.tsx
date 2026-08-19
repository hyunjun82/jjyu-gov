import type { SpokeData } from '../../SpokeClient';

/* 추출본: scripts/output/source-company-documents.txt
 * 1차 출처: 보험업감독업무시행세칙 [별표 15] 실손의료보험 표준약관
 *   https://www.law.go.kr/LSW//admRulBylInfoPLinkR.do?admRulSeq=2200000108867
 * 쓰지 않는 것:
 *   - TODO 검증 못 한 항목을 사유와 함께 여기 적는다 (본문에 쓰지 않는다)
 */

const SRC = 'https://www.law.go.kr/LSW//admRulBylInfoPLinkR.do?admRulSeq=2200000108867';
const HUB = '/policy/indemnity-insurance-generations';

export const 실손보험회사별신청서류SpokeContent: SpokeData = {
  h1: '실비보험 신청 서류 회사마다 다를까? 공통 항목부터 확인',
  breadcrumb: '회사별 신청 서류',
  description:
    '약관이 정한 목록은 회사와 무관하게 같습니다. 다만 제4호가 그 밖에 필요한 서류를 열어 두어 회사가 더 요청할 여지가 있습니다.',
  datePublished: '2026-08-19T09:05:15+09:00',
  dateModified: '2026-08-19T09:05:15+09:00',
  keyFacts: {
    'TODO 항목': 'TODO 값 — 추출본에 있는 숫자만',
  },
  keyFactsHighlights: {},
  qa: [
    {
      q: '회사마다 서류가 다른가요?', anchor: 'q1',
      intro:
        'TODO 본문. 이 질문은 실검색어(PAA)다. 답도 검색한 사람 기준으로 쓴다.',
      highlights: ['TODO', 'TODO', 'TODO', 'TODO'],
      sourceNote: '* 출처: 보험업감독업무시행세칙 [별표 15] 실손의료보험 표준약관 (2026-08-19 확인)',
    },
    {
      q: '약관이 정한 공통 목록은 뭔가요?', anchor: 'q2',
      intro:
        'TODO 본문. 이 질문은 실검색어(PAA)다. 답도 검색한 사람 기준으로 쓴다.',
      highlights: ['TODO', 'TODO', 'TODO', 'TODO'],
      sourceNote: '* 출처: 보험업감독업무시행세칙 [별표 15] 실손의료보험 표준약관 (2026-08-19 확인)',
    },
    {
      q: '왜 회사마다 다르게 느껴지나요?', anchor: 'q3',
      intro:
        'TODO 본문. 이 질문은 실검색어(PAA)다. 답도 검색한 사람 기준으로 쓴다.',
      highlights: ['TODO', 'TODO', 'TODO', 'TODO'],
      act: {
        cue: 'TODO 누를 이유 한 줄 — 바로 위 문단에서 이어져야 한다. 앞에서 안 꺼낸 얘기를 버튼 문구로 쓰지 않는다.',
        label: 'TODO 버튼 문구',
        url: HUB,
      },
      sourceNote: '* 출처: 보험업감독업무시행세칙 [별표 15] 실손의료보험 표준약관 (2026-08-19 확인)',
    },
    {
      q: '추가 요청을 받으면 내야 하나요?', anchor: 'q4',
      intro:
        'TODO 본문. 이 질문은 실검색어(PAA)다. 답도 검색한 사람 기준으로 쓴다.',
      highlights: ['TODO', 'TODO', 'TODO', 'TODO'],
      sourceNote: '* 출처: 보험업감독업무시행세칙 [별표 15] 실손의료보험 표준약관 (2026-08-19 확인)',
    },
    {
      q: '제출 전 무엇을 확인하나요?', anchor: 'q5',
      intro:
        'TODO 본문. 이 질문은 실검색어(PAA)다. 답도 검색한 사람 기준으로 쓴다.',
      highlights: ['TODO', 'TODO', 'TODO', 'TODO'],
      act: {
        cue: 'TODO 누를 이유 한 줄 — 바로 위 문단에서 이어져야 한다. 앞에서 안 꺼낸 얘기를 버튼 문구로 쓰지 않는다.',
        label: 'TODO 버튼 문구',
        url: HUB,
      },
      sourceNote: '* 출처: 보험업감독업무시행세칙 [별표 15] 실손의료보험 표준약관 (2026-08-19 확인)',
    },
  ],
  faqData: [
    {
      q: '약관 목록이 회사마다 다른가요?',
      a: 'TODO 답. 추출본에 있는 말로만 쓴다.',
      source: '보험업감독업무시행세칙 [별표 15] 실손의료보험 표준약관', sourceUrl: SRC,
    },
    {
      q: '청구서는 어디서 받나요?',
      a: 'TODO 답. 추출본에 있는 말로만 쓴다.',
      source: '보험업감독업무시행세칙 [별표 15] 실손의료보험 표준약관', sourceUrl: SRC,
    },
    {
      q: '제4호가 무슨 뜻인가요?',
      a: 'TODO 답. 추출본에 있는 말로만 쓴다.',
      source: '보험업감독업무시행세칙 [별표 15] 실손의료보험 표준약관', sourceUrl: SRC,
    },
    {
      q: '해외 서류도 되나요?',
      a: 'TODO 답. 추출본에 있는 말로만 쓴다.',
      source: '보험업감독업무시행세칙 [별표 15] 실손의료보험 표준약관', sourceUrl: SRC,
    },
    {
      q: '접수 후 며칠 걸리나요?',
      a: 'TODO 답. 추출본에 있는 말로만 쓴다.',
      source: '보험업감독업무시행세칙 [별표 15] 실손의료보험 표준약관', sourceUrl: SRC,
    },
  ],
  sources: [
    { name: '보험업감독업무시행세칙 [별표 15] 실손의료보험 표준약관', url: SRC },
  ],
};
