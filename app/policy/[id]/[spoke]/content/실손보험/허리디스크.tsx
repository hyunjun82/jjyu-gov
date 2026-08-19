import type { SpokeData } from '../../SpokeClient';

/* 추출본: scripts/output/source-lumbar-disc.txt
 * 1차 출처: 보험업감독업무시행세칙 [별표 15] 실손의료보험 표준약관
 *   https://www.law.go.kr/LSW//admRulBylInfoPLinkR.do?admRulSeq=2200000108867
 * 쓰지 않는 것:
 *   - TODO 검증 못 한 항목을 사유와 함께 여기 적는다 (본문에 쓰지 않는다)
 */

const SRC = 'https://www.law.go.kr/LSW//admRulBylInfoPLinkR.do?admRulSeq=2200000108867';
const HUB = '/policy/indemnity-insurance-generations';

export const 실손보험허리디스크SpokeContent: SpokeData = {
  h1: '허리디스크 실비 청구 조건은? 서류 빠뜨리면 반려된다',
  breadcrumb: '허리디스크',
  description:
    '허리디스크는 약관에 이름이 없습니다. 도수치료·주사·수술 중 무엇을 받았는지에 따라 어느 조항으로 계산되는지가 갈립니다.',
  datePublished: '2026-08-19T07:31:10+09:00',
  dateModified: '2026-08-19T07:31:10+09:00',
  keyFacts: {
    'TODO 항목': 'TODO 값 — 추출본에 있는 숫자만',
  },
  keyFactsHighlights: {},
  qa: [
    {
      q: '허리디스크 실비 청구되나요?', anchor: 'q1',
      intro:
        'TODO 본문. 이 질문은 실검색어(PAA)다. 답도 검색한 사람 기준으로 쓴다.',
      highlights: ['TODO', 'TODO', 'TODO', 'TODO'],
      sourceNote: '* 출처: 보험업감독업무시행세칙 [별표 15] 실손의료보험 표준약관 (2026-08-19 확인)',
    },
    {
      q: '약관에 허리디스크가 적혀 있나요?', anchor: 'q2',
      intro:
        'TODO 본문. 이 질문은 실검색어(PAA)다. 답도 검색한 사람 기준으로 쓴다.',
      highlights: ['TODO', 'TODO', 'TODO', 'TODO'],
      sourceNote: '* 출처: 보험업감독업무시행세칙 [별표 15] 실손의료보험 표준약관 (2026-08-19 확인)',
    },
    {
      q: '도수치료와 주사는 어느 항목인가요?', anchor: 'q3',
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
      q: '수술하면 계산이 달라지나요?', anchor: 'q4',
      intro:
        'TODO 본문. 이 질문은 실검색어(PAA)다. 답도 검색한 사람 기준으로 쓴다.',
      highlights: ['TODO', 'TODO', 'TODO', 'TODO'],
      sourceNote: '* 출처: 보험업감독업무시행세칙 [별표 15] 실손의료보험 표준약관 (2026-08-19 확인)',
    },
    {
      q: '서류는 무엇을 챙기나요?', anchor: 'q5',
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
      q: '허리디스크가 면책 목록에 있나요?',
      a: 'TODO 답. 추출본에 있는 말로만 쓴다.',
      source: '보험업감독업무시행세칙 [별표 15] 실손의료보험 표준약관', sourceUrl: SRC,
    },
    {
      q: '도수치료는 어느 한도를 쓰나요?',
      a: 'TODO 답. 추출본에 있는 말로만 쓴다.',
      source: '보험업감독업무시행세칙 [별표 15] 실손의료보험 표준약관', sourceUrl: SRC,
    },
    {
      q: '주사는 3대비급여인가요?',
      a: 'TODO 답. 추출본에 있는 말로만 쓴다.',
      source: '보험업감독업무시행세칙 [별표 15] 실손의료보험 표준약관', sourceUrl: SRC,
    },
    {
      q: '입원으로 인정받으려면요?',
      a: 'TODO 답. 추출본에 있는 말로만 쓴다.',
      source: '보험업감독업무시행세칙 [별표 15] 실손의료보험 표준약관', sourceUrl: SRC,
    },
    {
      q: '통원 공제는 얼마인가요?',
      a: 'TODO 답. 추출본에 있는 말로만 쓴다.',
      source: '보험업감독업무시행세칙 [별표 15] 실손의료보험 표준약관', sourceUrl: SRC,
    },
  ],
  sources: [
    { name: '보험업감독업무시행세칙 [별표 15] 실손의료보험 표준약관', url: SRC },
  ],
};
