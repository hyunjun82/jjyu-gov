import type { SpokeData } from '../../SpokeClient';

/* 추출본: scripts/output/source-coverage-change.txt
 * 1차 출처: 보험업감독업무시행세칙 [별표 15] 실손의료보험 표준약관
 *   https://www.law.go.kr/LSW//admRulBylInfoPLinkR.do?admRulSeq=2200000108867
 * 쓰지 않는 것:
 *   - TODO 검증 못 한 항목을 사유와 함께 여기 적는다 (본문에 쓰지 않는다)
 */

const SRC = 'https://www.law.go.kr/LSW//admRulBylInfoPLinkR.do?admRulSeq=2200000108867';
const HUB = '/policy/indemnity-insurance-generations';

export const 실손보험보장내용변경시점SpokeContent: SpokeData = {
  h1: '실손보험 보장내용 바뀌는 시점과 주기는? 갱신 전에 확인할 것',
  breadcrumb: '보장내용 변경 시점',
  description:
    '약관은 보장내용 변경주기가 끝나는 날 이전까지 회사가 2회 이상 안내하도록 정합니다. 갱신과 재가입은 다른 개념입니다.',
  datePublished: '2026-08-19T09:05:22+09:00',
  dateModified: '2026-08-19T09:05:22+09:00',
  keyFacts: {
    'TODO 항목': 'TODO 값 — 추출본에 있는 숫자만',
  },
  keyFactsHighlights: {},
  qa: [
    {
      q: '보장내용은 언제 바뀌나요?', anchor: 'q1',
      intro:
        'TODO 본문. 이 질문은 실검색어(PAA)다. 답도 검색한 사람 기준으로 쓴다.',
      highlights: ['TODO', 'TODO', 'TODO', 'TODO'],
      sourceNote: '* 출처: 보험업감독업무시행세칙 [별표 15] 실손의료보험 표준약관 (2026-08-19 확인)',
    },
    {
      q: '회사가 미리 알려주나요?', anchor: 'q2',
      intro:
        'TODO 본문. 이 질문은 실검색어(PAA)다. 답도 검색한 사람 기준으로 쓴다.',
      highlights: ['TODO', 'TODO', 'TODO', 'TODO'],
      sourceNote: '* 출처: 보험업감독업무시행세칙 [별표 15] 실손의료보험 표준약관 (2026-08-19 확인)',
    },
    {
      q: '갱신과 재가입이 어떻게 다른가요?', anchor: 'q3',
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
      q: '보험료는 왜 오르나요?', anchor: 'q4',
      intro:
        'TODO 본문. 이 질문은 실검색어(PAA)다. 답도 검색한 사람 기준으로 쓴다.',
      highlights: ['TODO', 'TODO', 'TODO', 'TODO'],
      sourceNote: '* 출처: 보험업감독업무시행세칙 [별표 15] 실손의료보험 표준약관 (2026-08-19 확인)',
    },
    {
      q: '갱신 전에 무엇을 확인하나요?', anchor: 'q5',
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
      q: '보장내용 변경주기가 뭔가요?',
      a: 'TODO 답. 추출본에 있는 말로만 쓴다.',
      source: '보험업감독업무시행세칙 [별표 15] 실손의료보험 표준약관', sourceUrl: SRC,
    },
    {
      q: '안내를 몇 번 받나요?',
      a: 'TODO 답. 추출본에 있는 말로만 쓴다.',
      source: '보험업감독업무시행세칙 [별표 15] 실손의료보험 표준약관', sourceUrl: SRC,
    },
    {
      q: '안내에 무엇이 담기나요?',
      a: 'TODO 답. 추출본에 있는 말로만 쓴다.',
      source: '보험업감독업무시행세칙 [별표 15] 실손의료보험 표준약관', sourceUrl: SRC,
    },
    {
      q: '갱신하면 조건이 그대로인가요?',
      a: 'TODO 답. 추출본에 있는 말로만 쓴다.',
      source: '보험업감독업무시행세칙 [별표 15] 실손의료보험 표준약관', sourceUrl: SRC,
    },
    {
      q: '보험료 인상 사유가 뭔가요?',
      a: 'TODO 답. 추출본에 있는 말로만 쓴다.',
      source: '보험업감독업무시행세칙 [별표 15] 실손의료보험 표준약관', sourceUrl: SRC,
    },
  ],
  sources: [
    { name: '보험업감독업무시행세칙 [별표 15] 실손의료보험 표준약관', url: SRC },
  ],
};
