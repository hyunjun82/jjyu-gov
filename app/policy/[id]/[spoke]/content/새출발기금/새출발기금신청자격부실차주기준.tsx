import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          새출발기금은 코로나19 피해 소상공인·자영업자를 위한 채무 조정 프로그램입니다.
          <strong>부실차주</strong>(3개월 이상 연체)와 <strong>부실우려차주</strong>(연체 없으나 상환 어려움)로 나뉘며,
          각각 신청 경로와 지원 내용이 다릅니다.
        </p>
      </div>

      <section className="detail-card" id="target">
        <h2 className="detail-card-head">신청 자격 구분</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>구분</th><th>기준</th><th>신청 경로</th></tr></thead>
            <tbody>
              <tr><td><strong>부실차주</strong></td><td>협약 금융기관 대출 3개월 이상 연체</td><td>캠코(새출발기금.kr)</td></tr>
              <tr><td><strong>부실우려차주</strong></td><td>연체는 없으나 향후 상환이 어려운 경우</td><td>신용회복위원회</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            신청 대상 기간: 2020년 4월~2025년 사이 코로나 관련 대출이 있는 소상공인·자영업자.
            새출발기금 신청은 <strong>1회만 가능</strong>합니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="eligible">
        <h2 className="detail-card-head">공통 신청 요건</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>요건</th><th>내용</th></tr></thead>
            <tbody>
              <tr><td>사업자 형태</td><td>개인사업자 또는 법인 소상공인</td></tr>
              <tr><td>대출 종류</td><td>은행·비은행 금융권의 사업자 대출</td></tr>
              <tr><td>신청 횟수</td><td>1회만 가능 (중복 불가)</td></tr>
            </tbody>
          </table>
          <div className="warning-box" style={{marginTop:12}}>
            불법 채무(사채), 최근 3년간 세법·공정거래법 위반으로 형사처벌받은 경우, 유흥주점 등 불건전 업종 운영자는 신청 불가합니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="apply">
        <h2 className="detail-card-head">신청 방법</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>방법</th><th>경로</th></tr></thead>
            <tbody>
              <tr><td>온라인 (부실차주)</td><td>새출발기금.kr (캠코 운영)</td></tr>
              <tr><td>온라인 (부실우려차주)</td><td>신용회복위원회 ccrs.or.kr</td></tr>
              <tr><td>전화 문의</td><td>☎1800-8180 (새출발기금 콜센터)</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export const 새출발기금새출발기금신청자격부실차주기준SpokeContent: SpokeData = {
  h1: '새출발기금 신청 자격 부실차주 부실우려차주 기준',
  breadcrumb: '새출발기금신청자격부실차주기준',
  description: '새출발기금 신청 자격을 부실차주(3개월 연체)와 부실우려차주로 구분하여 각각의 기준과 신청 경로를 정리합니다.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    { q: '새출발기금은 어떤 분이 신청할 수 있나요?', a: '코로나19 피해 소상공인·자영업자로서 90일 이상 연체 채무가 있거나, 폐업 후 채무 조정이 필요한 분이 대상입니다.', source: '금융위원회·캠코 공식 안내', sourceUrl: 'https://www.saechulbal.or.kr' },
    { q: '채무 감면율은 얼마나 되나요?', a: '부실 채권은 최대 90%까지 감면되며, 상환 능력에 따라 30~60% 원금 감면, 분할 상환 등 맞춤형 지원을 받을 수 있습니다.', source: '금융위원회·캠코 공식 안내', sourceUrl: 'https://www.saechulbal.or.kr' },
    { q: '신청은 어디서 하나요?', a: '새출발기금 공식 사이트(saechulbal.or.kr) 또는 캠코(한국자산관리공사)를 통해 온라인·방문 신청이 가능합니다.', source: '금융위원회·캠코 공식 안내', sourceUrl: 'https://www.saechulbal.or.kr' },
    { q: '새출발기금과 신용회복위원회 채무 조정의 차이는 무엇인가요?', a: '새출발기금은 소상공인 특화 지원으로 감면율이 더 높고 지원 요건이 코로나 피해 소상공인에 맞춰 설계되어 있습니다. 신복위는 일반 개인 채무 조정 제도입니다.', source: '금융위원회·캠코 공식 안내', sourceUrl: 'https://www.saechulbal.or.kr' },
    { q: '새출발기금 신청 후 신용등급에 영향이 있나요?', a: '채무 조정 자체가 신용정보에 등록되어 일시적으로 신용점수에 영향을 줄 수 있습니다. 그러나 연체 상태를 해소하면 장기적으로 신용 회복에 유리합니다.', source: '금융위원회·캠코 공식 안내', sourceUrl: 'https://www.saechulbal.or.kr' },
  ],
  sources: [{ name: '금융위원회·캠코 공식 안내', url: 'https://www.saechulbal.or.kr' }],
};
