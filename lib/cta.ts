/**
 * CTA 버튼 문구 정규화 — 데이터 파일의 긴 ctaLabel을 짧은 행동 문구로 변환.
 *
 * data/policies/*.ts 의 ctaLabel 493개 중 348개가 "정부24 …", 375개가 "… 바로가기",
 * 94개가 "(복지로 공식)" 같은 기관명·수식어를 달고 있어 버튼이 길고 반복적으로 보인다.
 * 데이터를 일괄 수정하는 대신 렌더 시점에 행동 동사만 남긴다.
 */
export function simplifyCta(label?: string): string {
  const s = (label || '').trim();
  if (!s) return '신청하기';
  // 행동 동사 우선순위 — 신청이 있으면 그게 주된 행동
  if (/신청/.test(s)) return '신청하기';
  if (/신고/.test(s)) return '신고하기';
  if (/조회/.test(s)) return '조회하기';
  if (/계산/.test(s)) return '계산하기';
  if (/다운로드|서식/.test(s)) return '서식 다운로드';
  if (/발급/.test(s)) return '발급 신청하기';
  if (/확인/.test(s)) return '확인하기';
  return '신청하기';
}

/**
 * 다음 스포크로 넘기는 내부 CTA 문구.
 *
 * 전면광고(vignette)는 "내부 페이지 이동"에서만 발동하고 세션당 1회로 캡된다.
 * 즉 한 사람이 여러 번 누르는 것보다 "한 번이라도 누르는 사람 수"를 늘려야 한다.
 * 그래서 밋밋한 '자격 확인하기' 대신, 넘어갈 글의 주제를 궁금증 문장으로 바꿔 클릭을 유도한다.
 *
 *   '기초연금 > 부부감액'     → '부부가 같이 받으면 얼마나 깎일까?'
 *   '기초연금 > 집 있으면'    → '집 있으면 못 받을까?'
 *   '기초연금 > 국민연금 차이' → '국민연금과 뭐가 다를까?'
 */
export function nextSpokeCta(spokeTitle: string): string {
  // '기초연금 > 부부감액' 형태에서 뒤쪽 주제만 취한다
  const topic = (spokeTitle || '').split('>').pop()?.trim() || '';
  if (!topic) return '이어서 확인하기';

  // 좁은 조건부터 검사한다(넓은 규칙이 먼저 걸리면 서로 다른 스포크가 같은 문구가 된다)
  if (/부부|배우자/.test(topic)) return '부부가 같이 받으면 얼마나 깎일까?';
  if (/집|주택/.test(topic)) return '집 있으면 못 받는 걸까?';
  if (/재산/.test(topic)) return '재산 얼마까지 괜찮을까?';
  if (/소득인정액/.test(topic)) return '내 소득인정액 계산해보기';
  if (/소득/.test(topic)) return '소득 기준 얼마까지일까?';
  if (/자동|자동지급/.test(topic)) return '신청 안 해도 나올까?';
  if (/이의|불복/.test(topic)) return '떨어졌을 때 대처법 보기';
  if (/탈락|제외|안되|불가/.test(topic)) return '왜 탈락하는지 확인하기';
  if (/차이|비교|vs/i.test(topic)) return `${topic}, 뭐가 다를까?`;
  if (/감액|삭감/.test(topic)) return '얼마나 깎이는지 확인하기';
  if (/인상/.test(topic)) return '얼마나 오르는지 확인하기';
  if (/계산|모의/.test(topic)) return '내 금액 계산해보기';
  if (/금액|얼마|지급액/.test(topic)) return '내가 얼마 받는지 확인하기';
  if (/자격|대상|조건/.test(topic)) return '내가 받을 수 있는지 확인하기';
  if (/서류|준비/.test(topic)) return '뭘 준비해야 하는지 보기';
  if (/기간|기한|언제/.test(topic)) return '언제까지인지 확인하기';
  if (/신청|방법|절차/.test(topic)) return '신청 방법 확인하기';
  return `${topic}, 어떻게 될까?`;
}

/**
 * Q&A 카드별 인라인 CTA 문구 — 질문의 행동 키워드에 맞춰 자동 생성.
 * 매칭 실패 시 긴 ctaLabel로 폴백하면 같은 문구가 반복되므로 짧은 기본값으로 정규화한다.
 */
export function pickActionLabel(question: string, fallback?: string): string {
  const q = question || '';
  if (/금액|얼마|지급액|수령액|환급|지원액/.test(q)) return '지급액 확인하기';
  if (/자격|대상|조건|해당|누가/.test(q)) return '자격 확인하기';
  if (/기간|언제|며칠|일수|기한|마감/.test(q)) return '신청기간 확인하기';
  if (/서류|준비|구비/.test(q)) return '필요서류 확인하기';
  if (/한도|금리|상환/.test(q)) return '한도·금리 확인하기';
  if (/수수료|비용/.test(q)) return '수수료 확인하기';
  if (/문의|어디에/.test(q)) return '문의처 확인하기';
  if (/불이익|과태료|처벌|미신고|안\s*하면/.test(q)) return '유의사항 확인하기';
  if (/차이|비교|다른가/.test(q)) return '자세히 확인하기';
  if (/방법|절차|어떻게|신청/.test(q)) return '신청 방법 보기';
  return simplifyCta(fallback);
}
