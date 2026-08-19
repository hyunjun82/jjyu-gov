import type { SpokeData } from '../../SpokeClient';

/* 추출본: scripts/output/source-icu-claim.txt
 * 1차 출처: 보험업감독업무시행세칙 [별표 15] 실손의료보험 표준약관
 *   https://www.law.go.kr/LSW//admRulBylInfoPLinkR.do?admRulSeq=2200000108867
 * 쓰지 않는 것:
 *   - TODO 검증 못 한 항목을 사유와 함께 여기 적는다 (본문에 쓰지 않는다)
 */

const SRC = 'https://www.law.go.kr/LSW//admRulBylInfoPLinkR.do?admRulSeq=2200000108867';
const HUB = '/policy/indemnity-insurance-generations';

export const 실손보험중환자실SpokeContent: SpokeData = {
  h1: '중환자실 실비 적용 되나? 상급병실료와 갈리는 계산',
  breadcrumb: '중환자실',
  description:
    '약관은 입원실료를 기준병실 사용료로 정의하고, 상급병상을 써서 더 낸 몫만 상급병실료 차액으로 따로 계산합니다. 중환자실이 어느 쪽인지가 갈림길입니다.',
  datePublished: '2026-08-19T07:31:17+09:00',
  dateModified: '2026-08-19T07:31:17+09:00',
  keyFacts: {
    'TODO 항목': 'TODO 값 — 추출본에 있는 숫자만',
  },
  keyFactsHighlights: {},
  qa: [
    {
      q: '중환자실 실비 적용되나요?', anchor: 'q1',
      intro:
        'TODO 본문. 이 질문은 실검색어(PAA)다. 답도 검색한 사람 기준으로 쓴다.',
      highlights: ['TODO', 'TODO', 'TODO', 'TODO'],
      sourceNote: '* 출처: 보험업감독업무시행세칙 [별표 15] 실손의료보험 표준약관 (2026-08-19 확인)',
    },
    {
      q: '입원실료에 중환자실이 들어가나요?', anchor: 'q2',
      intro:
        'TODO 본문. 이 질문은 실검색어(PAA)다. 답도 검색한 사람 기준으로 쓴다.',
      highlights: ['TODO', 'TODO', 'TODO', 'TODO'],
      sourceNote: '* 출처: 보험업감독업무시행세칙 [별표 15] 실손의료보험 표준약관 (2026-08-19 확인)',
    },
    {
      q: '상급병실료 차액과 어떻게 다른가요?', anchor: 'q3',
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
      q: '계산은 어떻게 되나요?', anchor: 'q4',
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
      q: '중환자실이 약관에 적혀 있나요?',
      a: 'TODO 답. 추출본에 있는 말로만 쓴다.',
      source: '보험업감독업무시행세칙 [별표 15] 실손의료보험 표준약관', sourceUrl: SRC,
    },
    {
      q: '입원실료 정의가 뭔가요?',
      a: 'TODO 답. 추출본에 있는 말로만 쓴다.',
      source: '보험업감독업무시행세칙 [별표 15] 실손의료보험 표준약관', sourceUrl: SRC,
    },
    {
      q: '상급병실료 차액 한도는요?',
      a: 'TODO 답. 추출본에 있는 말로만 쓴다.',
      source: '보험업감독업무시행세칙 [별표 15] 실손의료보험 표준약관', sourceUrl: SRC,
    },
    {
      q: '1일 평균금액은 어떻게 구하나요?',
      a: 'TODO 답. 추출본에 있는 말로만 쓴다.',
      source: '보험업감독업무시행세칙 [별표 15] 실손의료보험 표준약관', sourceUrl: SRC,
    },
    {
      q: '입원 인정 기준은요?',
      a: 'TODO 답. 추출본에 있는 말로만 쓴다.',
      source: '보험업감독업무시행세칙 [별표 15] 실손의료보험 표준약관', sourceUrl: SRC,
    },
  ],
  sources: [
    { name: '보험업감독업무시행세칙 [별표 15] 실손의료보험 표준약관', url: SRC },
  ],
};
