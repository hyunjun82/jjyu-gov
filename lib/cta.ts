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
