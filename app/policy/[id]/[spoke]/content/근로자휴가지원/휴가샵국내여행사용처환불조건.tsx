import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      {/* 빠른 답변 */}
      <div className="answer-box">
        <p>
          휴가샵 적립금은 <strong>국내 숙박·펜션·호텔·레저·관광지</strong> 등 휴가샵 가맹점에서만
          사용할 수 있습니다. 해외여행은 불가합니다.
          예약 취소 시 위약금 공제 후 적립금으로 반환되지만,{' '}
          <strong>12월 31일까지 미사용 잔액은 소멸</strong>되며 현금 환불은 되지 않습니다.
        </p>
      </div>

      {/* 서론 */}
      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        40만원을 받아도 어디서 쓸 수 있는지, 취소하면 어떻게 되는지 몰라서 혼란스러운 분들이 많습니다.
        아래에서 사용처 범위와 환불 조건을 정확하게 확인하세요.
      </p>

      {/* H2-1: 사용처 */}
      <section className="detail-card" id="usable">
        <h2 className="detail-card-head">휴가샵 사용처 범위</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr>
                <th>업종</th>
                <th>사용 가능 여부</th>
                <th>예시</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>국내 숙박</td>
                <td>✅ 가능</td>
                <td>펜션, 호텔, 리조트, 게스트하우스</td>
              </tr>
              <tr>
                <td>국내 레저·관광</td>
                <td>✅ 가능</td>
                <td>테마파크, 워터파크, 스파, 액티비티</td>
              </tr>
              <tr>
                <td>국내 여행 패키지</td>
                <td>✅ 가능</td>
                <td>중소 여행사 국내 패키지</td>
              </tr>
              <tr>
                <td>해외여행</td>
                <td>❌ 불가</td>
                <td>—</td>
              </tr>
              <tr>
                <td>대기업 계열 여행사</td>
                <td>❌ 불가</td>
                <td>일부 대형 여행사 제외</td>
              </tr>
              <tr>
                <td>일반 쇼핑·식음료</td>
                <td>❌ 불가</td>
                <td>—</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>가맹점 확인 방법:</strong> 휴가샵(vacationshop.or.kr) 홈페이지에서
            &quot;가맹점 찾기&quot;로 지역·업종별 검색이 가능합니다. 할인쿠폰·포인트와의
            병용 가능 여부는 개별 가맹점 정책에 따라 다릅니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      {/* H2-2: 환불 조건 */}
      <section className="detail-card" id="refund">
        <h2 className="detail-card-head">취소·환불 조건 정리</h2>
        <div className="detail-card-body">
          <div className="info-box">
            <strong>예약 취소 시</strong><br />
            가맹점의 취소 정책에 따라 위약금이 공제됩니다.
            공제 후 남은 금액은 휴가샵 적립금으로 반환됩니다.
            반환된 적립금은 12월 31일까지 재사용 가능합니다.
          </div>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>기간 내 미사용 잔액</strong><br />
            12월 31일이 지나면 잔액이 <strong>자동 소멸</strong>됩니다.
            이월이나 현금 환불은 불가합니다.
            근로자 본인 납입금 20만원도 환불되지 않으므로,
            반드시 연내에 사용 계획을 세우세요.
          </div>
          <table className="compare-table" style={{ marginTop: 16 }}>
            <thead>
              <tr>
                <th>상황</th>
                <th>처리 방식</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>예약 취소(위약금 없음)</td>
                <td>전액 적립금 반환</td>
              </tr>
              <tr>
                <td>예약 취소(위약금 발생)</td>
                <td>위약금 공제 후 적립금 반환</td>
              </tr>
              <tr>
                <td>12월 31일 미사용 잔액</td>
                <td>자동 소멸 (환불 불가)</td>
              </tr>
              <tr>
                <td>현금 환불 요청</td>
                <td>불가</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      {/* CTA */}
      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            40만원 구성 방식, 신청 자격, 선착순 일정까지 전체 정보를 확인하세요.
          </p>
          <a href="/policy/worker-vacation-support" className="btn-cta">
            근로자휴가지원 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 근로자휴가지원휴가샵국내여행사용처환불조건SpokeContent: SpokeData = {
  h1: '근로자휴가지원 휴가샵 국내여행 사용처·환불 조건',
  breadcrumb: '휴가샵국내여행사용처환불조건',
  description:
    '근로자휴가지원 40만원 휴가샵 사용처(국내 숙박·레저·여행)와 환불 조건을 정리합니다. 해외 불가, 12월 31일까지 미사용 시 소멸, 현금 환불 불가.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '에어비앤비나 야놀자에서도 쓸 수 있나요?',
      a: '휴가샵 가맹점으로 등록된 업체에서만 사용 가능합니다. 야놀자·여기어때 등 대형 플랫폼의 가맹 여부는 휴가샵 홈페이지에서 확인해야 합니다. 에어비앤비는 해외 기반 플랫폼으로 사용이 제한됩니다.',
      source: '한국관광공사 근로자휴가지원사업 안내',
      sourceUrl: 'https://www.visitkorea.or.kr',
    },
    {
      q: '제주도 여행에도 쓸 수 있나요?',
      a: '네. 제주도는 국내에 해당하므로 휴가샵 가맹 숙박·레저 업체라면 사용 가능합니다.',
      source: '한국관광공사 근로자휴가지원사업 안내',
      sourceUrl: 'https://www.visitkorea.or.kr',
    },
    {
      q: '12월 말에 예약하고 내년 1월에 여행 가면 적립금이 적용되나요?',
      a: '적립금은 12월 31일까지 결제가 완료되어야 합니다. 예약 결제일 기준이므로 내년 여행이라도 올해 12월 31일 이전에 결제하면 사용 가능합니다.',
      source: '한국관광공사 근로자휴가지원사업 안내',
      sourceUrl: 'https://www.visitkorea.or.kr',
    },
    {
      q: '취소 위약금은 얼마나 되나요?',
      a: '위약금은 가맹점별 취소 정책에 따라 다릅니다. 일반적으로 체크인 7일 전 취소 시 위약금 없이 전액 반환, 가까워질수록 공제율이 높아집니다. 예약 전 각 가맹점의 취소 정책을 반드시 확인하세요.',
      source: '한국관광공사 근로자휴가지원사업 안내',
      sourceUrl: 'https://www.visitkorea.or.kr',
    },
    {
      q: '할인쿠폰과 적립금을 같이 쓸 수 있나요?',
      a: '가맹점에 따라 다릅니다. 일부 가맹점은 자체 쿠폰·포인트와 병용을 허용하고, 일부는 허용하지 않습니다. 결제 전에 가맹점에 직접 문의하거나 휴가샵 결제 페이지에서 병용 여부를 확인하세요.',
      source: '한국관광공사 근로자휴가지원사업 안내',
      sourceUrl: 'https://www.visitkorea.or.kr',
    },
  ],
  sources: [
    { name: '한국관광공사 근로자휴가지원사업', url: 'https://www.visitkorea.or.kr' },
    { name: '휴가샵 공식 홈페이지', url: 'https://www.vacationshop.or.kr' },
  ],
};
