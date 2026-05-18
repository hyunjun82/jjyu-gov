import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          임대차 분쟁조정위원회는 <strong>소송 없이 60일 이내</strong>에
          전·월세 보증금 반환, 임대료 증감, 계약갱신 분쟁 등을
          <strong>저비용으로 해결</strong>하는 공공 조정 기관입니다.
          신청 수수료는 <strong>1만~10만원</strong>이며 취약계층은 면제됩니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        소송은 비용·시간이 많이 듭니다. 임대차 분쟁이 생겼다면
        조정 절차를 먼저 활용하는 것이 유리합니다.
      </p>

      <section className="detail-card" id="types">
        <h2 className="detail-card-head">조정 가능한 분쟁 유형</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>분쟁 유형</th><th>주요 사례</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>보증금 반환</strong></td><td>퇴거 후 보증금 미반환</td></tr>
              <tr><td><strong>임대료 증감</strong></td><td>과도한 임대료 인상 요구</td></tr>
              <tr><td><strong>계약갱신</strong></td><td>계약갱신청구권 분쟁</td></tr>
              <tr><td><strong>원상복구</strong></td><td>퇴거 시 수리비 분쟁</td></tr>
              <tr><td><strong>권리금</strong></td><td>상가 권리금 회수 방해</td></tr>
              <tr><td><strong>손해배상</strong></td><td>임대차 관련 손해 청구</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="process">
        <h2 className="detail-card-head">조정 절차와 기간</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>1단계:</strong> 조정 신청 (온라인 또는 방문)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>2단계:</strong> 접수 확인 후 상대방에게 통보
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>3단계:</strong> 양측 의견 청취 및 조정안 마련
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>4단계:</strong> 조정 성립 → 재판상 화해와 동일한 효력
          </div>
          <div className="info-box">
            <strong>처리 기간:</strong> 신청일로부터 60일 이내 (연장 시 최대 90일)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="fee">
        <h2 className="detail-card-head">신청 수수료</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>구분</th><th>수수료</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>일반 신청</strong></td><td>1만원~10만원 (분쟁 금액에 따라)</td></tr>
              <tr><td><strong>취약계층</strong></td><td>면제 (기초·차상위·장애인 등)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="apply">
        <h2 className="detail-card-head">신청 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>주택:</strong> 대한법률구조공단 임대차분쟁조정위원회 (adrhome.reb.or.kr)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>상가:</strong> 한국부동산원 상가건물임대차분쟁조정위원회 (hldcc.or.kr)
          </div>
          <div className="info-box">
            <strong>방문:</strong> 전국 분쟁조정위원회 지부 방문 신청 가능
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            보증금 반환 조정, 신청 자격, 소송 vs 조정 비교까지<br />
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

export const 임대차분쟁조정위원회소송없이60일분쟁해결SpokeContent: SpokeData = {
  h1: '임대차 분쟁조정위원회, 소송 없이 60일 내 전세·상가 분쟁 해결하는 방법',
  breadcrumb: '소송없이60일분쟁해결',
  description:
    '임대차 분쟁조정위원회: 보증금 반환·임대료 증감·계약갱신·원상복구·권리금 분쟁을 소송 없이 60일 내 해결. 수수료 1만~10만원(취약계층 면제). 주택: adrhome.reb.or.kr / 상가: hldcc.or.kr.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '조정이 성립되면 법적 효력이 있나요?',
      a: '네. 조정이 성립되면 재판상 화해와 동일한 효력을 가집니다. 상대방이 이행하지 않으면 강제집행도 가능합니다.',
      source: '대한법률구조공단',
      sourceUrl: 'https://adrhome.reb.or.kr',
    },
    {
      q: '상대방이 조정에 응하지 않으면 어떻게 되나요?',
      a: '상대방이 조정 참여를 거부하거나 조정안에 동의하지 않으면 조정은 불성립으로 종료됩니다. 이 경우 소송을 제기해야 합니다.',
      source: '대한법률구조공단',
      sourceUrl: 'https://adrhome.reb.or.kr',
    },
    {
      q: '주택과 상가 분쟁 신청 기관이 다른가요?',
      a: '네. 주택 임대차 분쟁은 대한법률구조공단 임대차분쟁조정위원회(adrhome.reb.or.kr), 상가 분쟁은 한국부동산원 상가건물임대차분쟁조정위원회(hldcc.or.kr)에 신청합니다.',
      source: '한국부동산원',
      sourceUrl: 'https://www.hldcc.or.kr',
    },
    {
      q: '조정 처리 기간이 얼마나 걸리나요?',
      a: '신청일로부터 60일 이내에 처리가 원칙이며, 필요 시 최대 90일까지 연장될 수 있습니다.',
      source: '대한법률구조공단',
      sourceUrl: 'https://adrhome.reb.or.kr',
    },
    {
      q: '취약계층은 수수료가 면제되나요?',
      a: '기초생활수급자, 차상위계층, 장애인 등 취약계층은 신청 수수료가 면제됩니다. 정확한 면제 기준은 신청 기관에 확인하세요.',
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
