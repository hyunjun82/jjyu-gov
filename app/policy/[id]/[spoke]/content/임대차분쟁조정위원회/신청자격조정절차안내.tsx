import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          임대차 분쟁조정위원회는 <strong>주택·상가 임대차 계약 당사자라면 누구나</strong>
          신청할 수 있습니다.
          신청 방법은 <strong>온라인(adrhome.reb.or.kr / hldcc.or.kr)</strong> 또는
          <strong>방문 신청</strong>이며, 수수료는 <strong>1만~10만원</strong>
          (취약계층 면제)입니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        임대차 분쟁이 발생했지만 소송은 부담스럽다면, 조정 신청 자격과 절차를
        먼저 확인하세요.
      </p>

      <section className="detail-card" id="eligibility">
        <h2 className="detail-card-head">신청 자격</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>구분</th><th>신청 기관</th><th>신청 대상</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>주택 임대차</strong></td>
                <td>대한법률구조공단</td>
                <td>주택 임대차 계약 당사자</td>
              </tr>
              <tr>
                <td><strong>상가 임대차</strong></td>
                <td>한국부동산원</td>
                <td>상가 임대차 계약 당사자</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>신청 가능 분쟁:</strong> 보증금 반환, 임대료 증감, 계약갱신, 원상복구, 권리금, 손해배상
          </div>
        </div>
      </section>

      <section className="detail-card" id="howto">
        <h2 className="detail-card-head">신청 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>주택 온라인:</strong> 대한법률구조공단 임대차분쟁조정위원회 (adrhome.reb.or.kr)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>상가 온라인:</strong> 한국부동산원 상가건물임대차분쟁조정위원회 (hldcc.or.kr)
          </div>
          <div className="info-box">
            <strong>방문:</strong> 전국 지부 방문 신청 (신분증 + 계약서 지참)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="fee">
        <h2 className="detail-card-head">수수료 기준</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>구분</th><th>수수료</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>일반 신청인</strong></td><td>1만원~10만원 (분쟁 금액 비례)</td></tr>
              <tr><td><strong>기초수급자·차상위</strong></td><td>면제</td></tr>
              <tr><td><strong>장애인·한부모·국가유공자</strong></td><td>면제</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="timeline">
        <h2 className="detail-card-head">조정 진행 기간</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>원칙:</strong> 신청일로부터 60일 이내 처리
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>연장:</strong> 부득이한 경우 최대 90일까지 연장 가능
          </div>
          <div className="info-box">
            <strong>효력:</strong> 조정 성립 시 재판상 화해와 동일 (강제집행 가능)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            보증금 반환 조정, 소송 vs 조정 비교, 분쟁 해결 사례까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/rental-dispute-mediation" className="btn-cta">
            임대차 분쟁조정위원회 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 임대차분쟁조정위원회신청자격조정절차안내SpokeContent: SpokeData = {
  h1: '임대차 분쟁조정위원회 신청 자격, 수수료, 조정 절차 한눈에 정리',
  breadcrumb: '신청자격조정절차안내',
  description:
    '임대차분쟁조정위원회 신청 자격: 주택(adrhome.reb.or.kr)·상가(hldcc.or.kr) 임대차 계약 당사자. 수수료 1만~10만원(취약계층 면제). 60일 내 처리. 보증금반환·임대료·계약갱신 등 조정 가능.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '임대인도 조정을 신청할 수 있나요?',
      a: '네. 임대차 분쟁조정위원회는 임차인뿐 아니라 임대인도 신청할 수 있습니다. 임대차 계약 당사자라면 누구나 가능합니다.',
      source: '대한법률구조공단',
      sourceUrl: 'https://adrhome.reb.or.kr',
    },
    {
      q: '주택과 상가 신청 기관이 다른가요?',
      a: '네. 주택 임대차는 대한법률구조공단(adrhome.reb.or.kr), 상가 임대차는 한국부동산원(hldcc.or.kr)에 신청해야 합니다.',
      source: '한국부동산원',
      sourceUrl: 'https://www.hldcc.or.kr',
    },
    {
      q: '취약계층은 수수료가 얼마인가요?',
      a: '기초생활수급자, 차상위계층, 장애인, 한부모가족, 국가유공자 등은 수수료가 면제됩니다.',
      source: '대한법률구조공단',
      sourceUrl: 'https://adrhome.reb.or.kr',
    },
    {
      q: '조정이 불성립되면 어떻게 되나요?',
      a: '조정이 불성립되면 절차가 종료됩니다. 이후 법원에 소송을 제기해야 합니다.',
      source: '대한법률구조공단',
      sourceUrl: 'https://adrhome.reb.or.kr',
    },
    {
      q: '신청 후 처리까지 얼마나 걸리나요?',
      a: '원칙적으로 신청일로부터 60일 이내에 처리됩니다. 복잡한 사안은 최대 90일까지 연장될 수 있습니다.',
      source: '대한법률구조공단',
      sourceUrl: 'https://adrhome.reb.or.kr',
    },
  ],
  sources: [
    { name: '대한법률구조공단 임대차분쟁조정위원회', url: 'https://adrhome.reb.or.kr' },
    { name: '한국부동산원 상가건물임대차분쟁조정위원회', url: 'https://www.hldcc.or.kr' },
    { name: '법제처 국가법령정보센터', url: 'https://www.law.go.kr' },
  ],
};
