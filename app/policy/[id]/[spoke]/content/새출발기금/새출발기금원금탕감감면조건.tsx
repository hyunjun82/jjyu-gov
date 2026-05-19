import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          새출발기금의 원금 감면은 <strong>부실차주(3개월 이상 연체)</strong>에 한해 적용되며,
          담보채무와 비담보채무에 따라 감면율이 다릅니다.
          최대 <strong>원금 90% 감면</strong>까지 가능하며, 채무 규모·상환 능력에 따라 결정됩니다.
        </p>
      </div>

      <section className="detail-card" id="rate">
        <h2 className="detail-card-head">채무 유형별 감면 조건</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>채무 유형</th><th>감면 내용</th><th>대상</th></tr></thead>
            <tbody>
              <tr><td>비담보채무</td><td>원금 최대 90% 감면</td><td>부실차주 (3개월↑ 연체)</td></tr>
              <tr><td>담보채무</td><td>상환 기간 연장 + 금리 조정</td><td>부실차주</td></tr>
              <tr><td>부실우려차주</td><td>이자율 인하, 상환기간 연장 (원금 감면 없음)</td><td>연체 없는 상환 어려움</td></tr>
            </tbody>
          </table>
          <div className="warning-box" style={{marginTop:12}}>
            원금 감면은 부실차주에게만 해당합니다. 부실우려차주는 원금 감면 없이 이자·기간 조정만 가능합니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="process">
        <h2 className="detail-card-head">감면 결정 절차</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>단계</th><th>내용</th></tr></thead>
            <tbody>
              <tr><td>1단계</td><td>새출발기금.kr에서 신청 자격 확인</td></tr>
              <tr><td>2단계</td><td>캠코(한국자산관리공사) 채무 현황 분석</td></tr>
              <tr><td>3단계</td><td>상환 능력 심사 후 감면율 결정</td></tr>
              <tr><td>4단계</td><td>채무조정 약정 체결</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            감면 후 잔여 채무는 최장 20년 분할 상환이 가능합니다.
            채무조정 약정 체결 후 재기·취업 프로그램 연계 지원도 받을 수 있습니다.
          </div>
        </div>
      </section>
    </>
  );
}

export const 새출발기금새출발기금원금탕감감면조건SpokeContent: SpokeData = {
  h1: '새출발기금 원금 탕감 얼마나 감면되나',
  breadcrumb: '새출발기금원금탕감감면조건',
  description: '새출발기금 원금 감면율은 최대 90%. 비담보채무 부실차주만 해당. 담보·비담보 구분과 감면 절차를 정리합니다.',
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
