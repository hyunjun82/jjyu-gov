/**
 * CTA 버튼 문구 정규화 — 데이터 파일의 긴 ctaLabel을 짧은 행동 문구로 변환.
 *
 * data/policies/*.ts 의 ctaLabel 493개 중 348개가 "정부24 …", 375개가 "… 바로가기",
 * 94개가 "(복지로 공식)" 같은 기관명·수식어를 달고 있어 버튼이 길고 반복적으로 보인다.
 * 데이터를 일괄 수정하는 대신 렌더 시점에 행동 동사만 남긴다.
 */
export function simplifyCta(label?: string, subject?: string): string {
  const s = (label || '').trim();
  /* 2026-08-06: 작성자가 문구 게이트를 통과시킨 라벨은 그대로 쓴다.
     타이틀 앞 어절을 동사에 이어붙이는 자동 조립이 "농지연금 예상 신청하기" 같은
     비문을 만들었고, 근로자 휴가지원(회사만 신청 가능)처럼 의미까지 뒤집었다.
     주제어 조립은 라벨이 동사 하나뿐일 때만 폴백으로 쓴다. */
  if (/\s/.test(s) && s.length >= 6) return s;
  /* 행동 동사만 뽑는다 — 티켓·좌석은 '신청'이 아니라 '예매'가 실제 행동이라 앞에 둔다 */
  const verb =
    /예매/.test(s) ? '예매하기'
    : /예약/.test(s) ? '예약하기'
    : /신고/.test(s) ? '신고하기'
    : /조회/.test(s) ? '조회하기'
    : /계산/.test(s) ? '계산하기'
    : /다운로드|서식/.test(s) ? '서식 받기'
    : /발급/.test(s) ? '발급받기'
    : /확인/.test(s) ? '확인하기'
    : /신청/.test(s) ? '신청하기'
    : '신청하기';

  /* 2026-08-02: 동사만 남기면 "예매하기"처럼 무엇을 예매하는지가 사라진다.
     사용자 지적 — "티켓 132,000원 옆에 '예매하기'가 아니라 '워터밤 즉시 예매하기'여야 한다".
     주제어가 있으면 앞에 붙여 무엇에 대한 행동인지 보이게 한다. */
  const subj = (subject || '').trim();
  if (!subj) return verb;
  /* 주제어는 "무엇에 대한 행동인지"만 알려주면 된다. 조사·연결어가 붙은 어절이 따라오면
     "수급자격과 신청하기"처럼 말이 깨지므로, 명사로 끝나는 앞 어절만 취한다. */
  const words = subj.split(/\s+/);
  const picked: string[] = [];
  for (const w of words) {
    if (picked.length >= 2) break;
    /* 조사·연결어로 끝나거나 괄호가 섞인 어절에서 멈춘다 */
    if (/[와과의는은이가을를로에서]$/.test(w) || /[()]/.test(w)) break;
    picked.push(w);
  }
  const short = picked.join(' ');
  if (!short) return verb;
  return `${short} ${verb}`;
}

/**
 * 스포크 → 허브로 보내는 CTA 문구.
 *
 * 허브-스포크 구조에서 스포크는 세부 주제만 다루고, 최종 행동(신청)은 허브가 받는다.
 * 그래서 스포크의 카드 버튼은 전부 허브로 모으고(권위 집중 + 내부 이동으로 전면광고 발동),
 * 허브의 CTA만 정부 딥링크로 내보낸다.
 *
 * 목적지가 하나뿐이라 문구가 같으면 같은 버튼이 반복돼 보인다.
 * 그래서 그 카드가 다룬 질문에 맞춰 "허브에서 무엇을 더 볼 수 있는지"를 다르게 적는다.
 */
export function hubCta(question: string): string {
  const q = question || '';
  // 이미 그 정책 페이지를 읽는 중이므로 버튼에 정책명을 넣지 않는다(중복·장문 방지)
  if (/금액|얼마|지급액|수령액|인상|환급/.test(q)) return '지급액 한눈에 보기';
  if (/자격|대상|조건|누가|해당/.test(q)) return '자격 조건 한눈에 보기';
  if (/계산|모의/.test(q)) return '계산 기준 보기';
  if (/서류|준비|구비/.test(q)) return '필요서류 한눈에 보기';
  if (/기간|기한|언제|며칠|마감/.test(q)) return '신청기간 확인하기';
  if (/감액|삭감|깎/.test(q)) return '감액 기준 보기';
  if (/탈락|제외|안\s*되|불가|불이익|과태료/.test(q)) return '유의사항 전체 보기';
  if (/차이|비교|중복/.test(q)) return '비교 정리 보기';
  if (/문의|어디에/.test(q)) return '문의처 확인하기';
  if (/방법|절차|어떻게|신청/.test(q)) return '신청방법 바로가기';
  return '';
}

/** 한 페이지 안에서 문구가 겹치지 않도록 채워 넣는 예비 문구 */
export const HUB_CTA_FALLBACKS = [
  '조건·금액 한눈에 보기',
  '신청방법 바로가기',
  '전체 정리 보기',
];

/**
 * 허브에서 "신청방법" 섹션의 anchor id를 찾는다.
 * 앵커 이름이 정책마다 달라(q-apply-method / q-apply / how-to-apply / 신청방법 …)
 * 라벨이 "바로가기"인데 허브 맨 위로 보내면 말과 동작이 어긋난다.
 * 실제 anchor를 찾아 딥링크로 보내고, 없으면 허브 최상단으로 폴백한다.
 */
export function findApplyAnchor(hubQa: any[] | undefined): string {
  if (!Array.isArray(hubQa)) return '';
  const hit = hubQa.find((c) => /apply|신청/i.test(c?.anchor || ''));
  return hit?.anchor ? `#${hit.anchor}` : '';
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
