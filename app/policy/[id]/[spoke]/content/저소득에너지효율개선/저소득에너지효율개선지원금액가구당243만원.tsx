import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          저소득층 에너지효율 개선사업의 가구당 평균 지원 금액은 <strong>약 243만 원</strong>입니다.
          지원금은 현금이 아닌 <strong>무상 시공</strong> 형태로 제공되며, 지원 항목과 규모에 따라 달라집니다.
        </p>
      </div>

      <section className="detail-card" id="amount">
        <h2 className="detail-card-head">지원 금액 수준</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>항목</th><th>내용</th></tr></thead>
            <tbody>
              <tr><td>가구당 평균 지원액</td><td>약 243만 원 (시공비 기준)</td></tr>
              <tr><td>지원 형태</td><td>현금 지급 아님, 무상 시공</td></tr>
              <tr><td>본인 부담</td><td>없음 (전액 무상)</td></tr>
              <tr><td>재료비·인건비</td><td>한국에너지재단이 시공 업체에 직접 지급</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            243만 원은 평균값입니다. 단열·창호·보일러·에어컨 등 시공 항목 수와 주택 규모에 따라
            실제 지원 금액은 더 많거나 적을 수 있습니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="byitem">
        <h2 className="detail-card-head">항목별 시공 비용 (참고)</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>시공 항목</th><th>비용 수준</th></tr></thead>
            <tbody>
              <tr><td>보일러 교체</td><td>70~120만 원 수준</td></tr>
              <tr><td>창호 교체</td><td>창 크기·수량에 따라 상이</td></tr>
              <tr><td>단열재 시공</td><td>주택 면적에 따라 상이</td></tr>
              <tr><td>에어컨 설치</td><td>30~70만 원 수준</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            위 금액은 참고용이며, 실제 시공 범위와 자재는 현장 조사 후 결정됩니다.
            수혜자가 원하는 항목을 임의로 선택할 수 없습니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="contact">
        <h2 className="detail-card-head">신청 및 문의</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>채널</th><th>연락처</th></tr></thead>
            <tbody>
              <tr><td>한국에너지재단 콜센터</td><td>☎ 1670-7653</td></tr>
              <tr><td>홈페이지</td><td>kew.or.kr</td></tr>
              <tr><td>방문 신청</td><td>거주지 읍·면·동 주민센터</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export const 저소득에너지효율개선저소득에너지효율개선지원금액가구당243만원SpokeContent: SpokeData = {
  h1: '저소득 에너지효율 개선 지원 금액 가구당 평균 243만원',
  breadcrumb: '저소득에너지효율개선지원금액가구당243만원',
  description: '저소득층 에너지효율 개선사업 가구당 평균 지원 금액 243만 원, 무상 시공 방식, 항목별 비용 수준을 정리합니다.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    { q: '저소득층 에너지효율 개선 사업 신청 대상은 누구인가요?', a: '기초생활수급자, 차상위계층, 에너지 바우처 수급자 등 저소득 취약계층 가구가 주 대상입니다. 노후 주택에 거주하는 경우 우선 지원됩니다.', source: '한국에너지공단 공식 안내', sourceUrl: 'https://www.kemco.or.kr' },
    { q: '어떤 공사를 지원받을 수 있나요?', a: '단열재 보강, 창호 교체, 고효율 보일러·LED 교체, 단열 창문 시공 등 에너지 절감에 효과적인 공사를 지원합니다.', source: '한국에너지공단 공식 안내', sourceUrl: 'https://www.kemco.or.kr' },
    { q: '신청은 어디서 하나요?', a: '한국에너지공단(kemco.or.kr) 또는 주민센터(읍면동사무소)를 통해 신청할 수 있습니다. 지자체별 별도 접수처가 있는 경우도 있습니다.', source: '한국에너지공단 공식 안내', sourceUrl: 'https://www.kemco.or.kr' },
    { q: '본인 부담금이 있나요?', a: '지원 대상에 따라 전액 무료 또는 일부 자부담이 발생할 수 있습니다. 기초수급자는 전액 무료가 원칙이며, 차상위계층은 일부 자부담이 있을 수 있습니다.', source: '한국에너지공단 공식 안내', sourceUrl: 'https://www.kemco.or.kr' },
    { q: '임차인도 신청할 수 있나요?', a: '임차인도 신청 가능하지만, 공사 진행을 위해 집주인 동의가 필요한 경우가 많습니다. 주민센터에서 사전 상담을 받으시기 바랍니다.', source: '한국에너지공단 공식 안내', sourceUrl: 'https://www.kemco.or.kr' },
  ],
  sources: [{ name: '한국에너지공단 공식 안내', url: 'https://www.kemco.or.kr' }],
};
