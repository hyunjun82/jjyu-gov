import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          첫만남이용권은 <strong>쿠팡·온라인쇼핑몰 포함 대부분의 업종</strong>에서 사용할 수 있습니다.
          국민행복카드 포인트로 충전되어 일반 신용카드처럼 결제하면 됩니다.
          <strong>유흥·사행업종, 면세점</strong> 등 일부 업종만 사용이 제한됩니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "쿠팡에서 쓸 수 있나요?" 쓸 수 있습니다.
        사용 가능한 곳과 제한되는 곳을 정확히 정리했습니다.
      </p>

      <section className="detail-card" id="usable">
        <h2 className="detail-card-head">첫만남이용권 쿠팡·온라인에서 쓸 수 있다 — 사용 가능 업종 전체</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>분류</th><th>사용 가능한 곳</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>온라인쇼핑</td>
                <td><strong>쿠팡·네이버쇼핑·SSG·마켓컬리 등 대부분</strong></td>
              </tr>
              <tr>
                <td>오프라인 매장</td>
                <td>백화점·대형마트·편의점·슈퍼마켓</td>
              </tr>
              <tr>
                <td>의료</td>
                <td>병원·약국·산후조리원</td>
              </tr>
              <tr>
                <td>외식·식료품</td>
                <td>식당·식료품점</td>
              </tr>
              <tr>
                <td>교육·문화</td>
                <td>학원·서점·문화시설</td>
              </tr>
              <tr>
                <td>기타</td>
                <td>육아용품·의류·생활용품 전반</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="restricted">
        <h2 className="detail-card-head">사용 제한 업종 — 이 곳에서는 결제 안 됩니다</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>제한 업종</th><th>예시</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>유흥업종</td>
                <td>주점·나이트클럽·단란주점</td>
              </tr>
              <tr>
                <td>사행업종</td>
                <td>카지노·경마·복권방</td>
              </tr>
              <tr>
                <td>면세점</td>
                <td>공항·시내 면세점</td>
              </tr>
              <tr>
                <td>성인용품</td>
                <td>성인용품점</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            국민행복카드 포인트는 BC카드·농협·KB·신한·하나·우리 등
            협약 카드사에서 발급받을 수 있습니다. 기존 국민행복카드가 있다면
            포인트가 자동 충전됩니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="how">
        <h2 className="detail-card-head">사용 방법 — 일반 카드처럼 결제</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>오프라인:</strong> 카드 단말기에 국민행복카드 결제 → 자동으로 포인트에서 차감
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>온라인:</strong> 결제 수단에서 국민행복카드 선택 → 포인트 차감
          </div>
          <div className="info-box">
            <strong>잔액 확인:</strong> voucher.go.kr 또는 카드 발급 은행 앱에서 실시간 조회 가능
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            지급 금액, 유효기간, 신청 방법 등<br />
            첫만남이용권 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/first-meet" className="btn-cta">
            첫만남이용권 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 첫만남사용처SpokeContent: SpokeData = {
  h1: '첫만남이용권 쿠팡·온라인에서 쓸 수 있다 | 전 업종 사용처 정리',
  breadcrumb: '사용처',
  description:
    '첫만남이용권은 국민행복카드 포인트로 쿠팡·온라인쇼핑몰·마트·병원·산후조리원 등 대부분 업종에서 사용 가능합니다. 유흥업종·사행업종·면세점은 사용 제한. 잔액 조회는 voucher.go.kr 또는 카드사 앱.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '첫만남이용권으로 쿠팡에서 쇼핑할 수 있나요?',
      a: '네. 국민행복카드로 쿠팡 등 대부분의 온라인쇼핑몰에서 결제할 수 있습니다. 결제 수단에서 국민행복카드를 선택하면 포인트에서 차감됩니다.',
      source: '보건복지부 첫만남이용권 안내',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '어떤 곳에서 사용할 수 없나요?',
      a: '유흥업종(주점·나이트클럽), 사행업종(카지노·경마), 면세점, 성인용품점에서는 사용이 제한됩니다.',
      source: '국민행복카드 사용안내',
      sourceUrl: 'https://www.bokjiro.go.kr',
    },
    {
      q: '첫만남이용권 잔액은 어떻게 확인하나요?',
      a: 'voucher.go.kr에서 조회하거나, 카드 발급 은행 앱에서 실시간으로 확인할 수 있습니다.',
      source: '사회서비스 전자바우처',
      sourceUrl: 'https://www.voucher.go.kr',
    },
    {
      q: '산후조리원 비용을 첫만남이용권으로 낼 수 있나요?',
      a: '네. 산후조리원은 사용 가능한 업종입니다. 국민행복카드로 결제하면 포인트에서 차감됩니다.',
      source: '보건복지부 첫만남이용권 안내',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '국민행복카드가 없으면 어떻게 발급받나요?',
      a: 'BC카드·농협·KB국민·신한·하나·우리은행 등 협약 카드사에서 신청하면 됩니다. 기존 임신바우처 등으로 이미 발급받은 카드가 있다면 그대로 사용 가능합니다.',
      source: '국민행복카드 발급 안내',
      sourceUrl: 'https://www.bokjiro.go.kr',
    },
  ],
  sources: [
    { name: '보건복지부 첫만남이용권 안내', url: 'https://www.mohw.go.kr' },
    { name: '사회서비스 전자바우처', url: 'https://www.voucher.go.kr' },
  ],
};
