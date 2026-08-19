import type { SpokeData } from '../../SpokeClient';

/* 추출본: scripts/output/source-septal-deviation.txt
 * 1차 출처: 보험업감독업무시행세칙 [별표 15] 실손의료보험 표준약관
 *   https://www.law.go.kr/LSW//admRulBylInfoPLinkR.do?admRulSeq=2200000108867
 * 쓰지 않는 것:
 *   - TODO 검증 못 한 항목을 사유와 함께 여기 적는다 (본문에 쓰지 않는다)
 */

const SRC = 'https://www.law.go.kr/LSW//admRulBylInfoPLinkR.do?admRulSeq=2200000108867';
const HUB = '/policy/indemnity-insurance-generations';

export const 실손보험비중격만곡증SpokeContent: SpokeData = {
  h1: '비중격만곡증 실비 청구 가능할까? 서류 빠지면 미용으로 잘린다',
  breadcrumb: '비중격만곡증',
  description:
    '약관은 코성형수술(융비술)을 외모개선 목적 치료로 묶어 면책합니다. 비중격만곡증은 이름이 없어 목적과 기능 개선 여부로 갈립니다.',
  datePublished: '2026-08-19T07:31:03+09:00',
  dateModified: '2026-08-19T07:31:03+09:00',
  keyFacts: {
    'TODO 항목': 'TODO 값 — 추출본에 있는 숫자만',
  },
  keyFactsHighlights: {},
  qa: [
    {
      q: '비중격만곡증 실비 청구 가능할까요?', anchor: 'q1',
      intro:
        'TODO 본문. 이 질문은 실검색어(PAA)다. 답도 검색한 사람 기준으로 쓴다.',
      highlights: ['TODO', 'TODO', 'TODO', 'TODO'],
      sourceNote: '* 출처: 보험업감독업무시행세칙 [별표 15] 실손의료보험 표준약관 (2026-08-19 확인)',
    },
    {
      q: '약관에 비중격만곡증이 적혀 있나요?', anchor: 'q2',
      intro:
        'TODO 본문. 이 질문은 실검색어(PAA)다. 답도 검색한 사람 기준으로 쓴다.',
      highlights: ['TODO', 'TODO', 'TODO', 'TODO'],
      sourceNote: '* 출처: 보험업감독업무시행세칙 [별표 15] 실손의료보험 표준약관 (2026-08-19 확인)',
    },
    {
      q: '코성형수술과 어떻게 구분되나요?', anchor: 'q3',
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
      q: '서류에 무엇이 적혀야 하나요?', anchor: 'q4',
      intro:
        'TODO 본문. 이 질문은 실검색어(PAA)다. 답도 검색한 사람 기준으로 쓴다.',
      highlights: ['TODO', 'TODO', 'TODO', 'TODO'],
      sourceNote: '* 출처: 보험업감독업무시행세칙 [별표 15] 실손의료보험 표준약관 (2026-08-19 확인)',
    },
    {
      q: '입원과 통원 중 어느 쪽인가요?', anchor: 'q5',
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
      q: '비중격만곡증이 면책 목록에 있나요?',
      a: 'TODO 답. 추출본에 있는 말로만 쓴다.',
      source: '보험업감독업무시행세칙 [별표 15] 실손의료보험 표준약관', sourceUrl: SRC,
    },
    {
      q: '코성형수술은 왜 안 되나요?',
      a: 'TODO 답. 추출본에 있는 말로만 쓴다.',
      source: '보험업감독업무시행세칙 [별표 15] 실손의료보험 표준약관', sourceUrl: SRC,
    },
    {
      q: '기능 개선 목적이면 되나요?',
      a: 'TODO 답. 추출본에 있는 말로만 쓴다.',
      source: '보험업감독업무시행세칙 [별표 15] 실손의료보험 표준약관', sourceUrl: SRC,
    },
    {
      q: '축농증 수술을 같이 하면요?',
      a: 'TODO 답. 추출본에 있는 말로만 쓴다.',
      source: '보험업감독업무시행세칙 [별표 15] 실손의료보험 표준약관', sourceUrl: SRC,
    },
    {
      q: '서류는 무엇이 필요한가요?',
      a: 'TODO 답. 추출본에 있는 말로만 쓴다.',
      source: '보험업감독업무시행세칙 [별표 15] 실손의료보험 표준약관', sourceUrl: SRC,
    },
  ],
  sources: [
    { name: '보험업감독업무시행세칙 [별표 15] 실손의료보험 표준약관', url: SRC },
  ],
};
