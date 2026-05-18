import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      {/* 빠른 답변 */}
      <div className="answer-box">
        <p>
          근로자휴가지원사업은 근로자가 <strong>20만원</strong>을 납입하면 정부가{' '}
          <strong>10만원</strong>, 기업이 <strong>10만원</strong>을 추가해
          총 <strong>40만원</strong>의 여행 적립금을 만들어주는 제도입니다.
          적립금은 휴가샵(국내 숙박·레저·여행 전용)에서만 사용할 수 있으며,
          당해 연도 12월 31일까지 소진해야 합니다.
        </p>
      </div>

      {/* 서론 */}
      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        중소·중견기업 재직자라면 20만원 납입만으로 두 배 혜택을 누릴 수 있습니다.
        아래에서 납입 구조, 사용처, 기간, 잔액 처리 방식을 한눈에 확인하세요.
      </p>

      {/* H2-1: 40만원 구성 */}
      <section className="detail-card" id="structure">
        <h2 className="detail-card-head">정부 10만 + 기업 10만 + 근로자 20만 = 40만원 구성</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr>
                <th>납입 주체</th>
                <th>금액</th>
                <th>비고</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>근로자 본인</td>
                <td><strong>20만원</strong></td>
                <td>휴가샵 직접 납입</td>
              </tr>
              <tr>
                <td>참여 기업</td>
                <td><strong>10만원</strong></td>
                <td>기업이 사전 납부</td>
              </tr>
              <tr>
                <td>정부(한국관광공사)</td>
                <td><strong>10만원</strong></td>
                <td>자동 지원</td>
              </tr>
              <tr>
                <td><strong>합계</strong></td>
                <td><strong>40만원</strong></td>
                <td>휴가샵 적립금 전환</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>누적 참여 5년 이상 중기업 차등:</strong> 정부 5만원 + 기업 15만원 + 근로자 20만원 = 합계 40만원.
            기업 분담이 늘어나고 정부 지원이 줄어들지만 총액(40만원)은 동일합니다.
          </div>
          <p>
            근로자가 20만원을 납입하는 순간 기업 분담금 10만원과 정부 지원금 10만원이
            자동으로 합산되어 총 40만원의 휴가샵 적립금으로 전환됩니다.
          </p>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      {/* H2-2: 사용 방법 */}
      <section className="detail-card" id="usage">
        <h2 className="detail-card-head">휴가샵 적립금 사용 방법</h2>
        <div className="detail-card-body">
          <div className="info-box">
            <strong>사용처</strong><br />
            휴가샵(vacationshop.or.kr) 가맹점 — 국내 숙박, 펜션, 호텔, 레저, 관광지,
            여행 패키지 등 국내 여행 전용. 해외여행·일반 쇼핑은 불가합니다.
          </div>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>사용 기간</strong><br />
            당해 연도 <strong>12월 31일</strong>까지 소진해야 합니다.
            이월 불가, 잔액 환불 불가. 부분 사용은 가능합니다.
          </div>
          <ol style={{ listStyle: 'decimal', paddingLeft: 20, lineHeight: 2.2, marginTop: 12 }}>
            <li>휴가샵 홈페이지(vacationshop.or.kr) 로그인</li>
            <li>원하는 숙박·레저 상품 검색 및 선택</li>
            <li>결제 시 &quot;적립금 사용&quot; 선택 → 40만원 범위 내 적용</li>
            <li>잔액 있으면 카드·계좌이체 병행 결제 가능</li>
          </ol>
          <table className="compare-table" style={{ marginTop: 16 }}>
            <thead>
              <tr>
                <th>항목</th>
                <th>가능 여부</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>국내 숙박·레저 사용</td><td>✅ 가능</td></tr>
              <tr><td>해외여행 사용</td><td>❌ 불가</td></tr>
              <tr><td>부분 사용</td><td>✅ 가능</td></tr>
              <tr><td>잔액 이월</td><td>❌ 불가 (12.31 소멸)</td></tr>
              <tr><td>잔액 현금 환불</td><td>❌ 불가</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      {/* CTA */}
      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            근로자휴가지원 신청 자격, 기업 참여 방법, 일정까지 한 페이지에서 확인하세요.
          </p>
          <a href="/policy/worker-vacation-support" className="btn-cta">
            근로자휴가지원 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 근로자휴가지원정부10기업10근로자20총40사용법SpokeContent: SpokeData = {
  h1: '근로자휴가지원 정부 10만+기업 10만+근로자 20만=총 40만원 사용법',
  breadcrumb: '정부10기업10근로자20총40사용법',
  description:
    '근로자휴가지원사업 40만원 구성(정부 10만+기업 10만+근로자 20만)과 휴가샵 사용법을 안내합니다. 국내 숙박·레저 전용, 12월 31일까지 소진, 잔액 이월·환불 불가.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '기업이 10만원을 안 내면 정부 지원금도 안 나오나요?',
      a: '네. 기업이 먼저 휴가샵에 참여 등록하고 10만원을 납부해야 정부 지원금 10만원도 매칭됩니다. 기업 참여가 선행되어야 합니다.',
      source: '한국관광공사 근로자휴가지원사업 안내',
      sourceUrl: 'https://www.visitkorea.or.kr',
    },
    {
      q: '적립금 40만원을 한 번에 다 써야 하나요?',
      a: '아닙니다. 부분 사용이 가능합니다. 다만 잔액은 12월 31일에 자동 소멸되므로 당해 연도 안에 모두 사용하는 것이 유리합니다.',
      source: '한국관광공사 근로자휴가지원사업 안내',
      sourceUrl: 'https://www.visitkorea.or.kr',
    },
    {
      q: '20만원을 납입하고 여행을 못 가면 환불받을 수 있나요?',
      a: '근로자 본인이 납입한 20만원은 예약 취소 시 위약금 공제 후 적립금으로 반환됩니다. 단, 12월 31일까지 미사용 잔액은 소멸되며 현금 환불은 불가합니다.',
      source: '한국관광공사 근로자휴가지원사업 안내',
      sourceUrl: 'https://www.visitkorea.or.kr',
    },
    {
      q: '해외여행에도 적립금을 쓸 수 있나요?',
      a: '불가합니다. 근로자휴가지원 적립금은 휴가샵 가맹 국내 숙박·레저·여행 상품에만 사용할 수 있습니다. 해외 상품은 지원 대상이 아닙니다.',
      source: '한국관광공사 근로자휴가지원사업 안내',
      sourceUrl: 'https://www.visitkorea.or.kr',
    },
    {
      q: '적립금으로 결제 후 예약을 취소하면 어떻게 되나요?',
      a: '예약 취소 시 가맹점의 취소 정책에 따라 위약금이 공제되고 나머지 금액이 적립금으로 반환됩니다. 반환된 적립금은 12월 31일까지 재사용 가능합니다.',
      source: '한국관광공사 근로자휴가지원사업 안내',
      sourceUrl: 'https://www.visitkorea.or.kr',
    },
  ],
  sources: [
    { name: '한국관광공사 근로자휴가지원사업', url: 'https://www.visitkorea.or.kr' },
    { name: '휴가샵 공식 홈페이지', url: 'https://www.vacationshop.or.kr' },
  ],
};
