import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          새출발기금은 채무 조정 후 <strong>신용 정보에 기록</strong>이 남아 일정 기간 금융 거래가 제한됩니다.
          또한 <strong>1회만 신청 가능</strong>하므로 신중하게 결정해야 합니다.
          신청 전 반드시 금융 전문가 상담을 받는 것을 권장합니다.
        </p>
      </div>

      <section className="detail-card" id="cons">
        <h2 className="detail-card-head">주요 단점 및 주의사항</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>항목</th><th>내용</th></tr></thead>
            <tbody>
              <tr><td>신용 정보 등록</td><td>채무 조정 사실이 신용 정보에 기록 → 신규 대출·카드 발급 제한</td></tr>
              <tr><td>1회 신청 제한</td><td>생애 1회만 신청 가능 (반복 신청 불가)</td></tr>
              <tr><td>이자 면제 없음</td><td>부실우려차주는 원금 감면 없고 이자 조정만</td></tr>
              <tr><td>담보 처분 가능성</td><td>담보채무는 담보물(부동산 등) 처분 조건이 붙을 수 있음</td></tr>
              <tr><td>취업·창업 프로그램</td><td>일부 감면 조건으로 취창업 교육 이수 의무</td></tr>
            </tbody>
          </table>
          <div className="warning-box" style={{marginTop:12}}>
            채무 조정 이후 약정을 어기면 조정 혜택이 취소될 수 있습니다. 약정 이후 성실 이행이 중요합니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="compare">
        <h2 className="detail-card-head">신청 전 고려사항</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>상황</th><th>권장 선택</th></tr></thead>
            <tbody>
              <tr><td>3개월 이상 연체, 비담보 채무</td><td>새출발기금 (원금 감면 가능)</td></tr>
              <tr><td>연체 없으나 상환 어려움</td><td>새출발기금 부실우려차주 or 신용회복위원회</td></tr>
              <tr><td>폐업 후 채무 정리</td><td>희망리턴패키지 + 새출발기금 병행 검토</td></tr>
              <tr><td>개인 채무 (사업 외)</td><td>신용회복위원회 또는 개인회생 별도 검토</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            서민금융진흥원 '서민금융이음' 서비스를 통해 금융·고용·복지 복합 상담을 무료로 받을 수 있습니다.
            ☎1397 (서민금융콜센터)
          </div>
        </div>
      </section>
    </>
  );
}

export const 새출발기금새출발기금단점주의사항신청전SpokeContent: SpokeData = {
  h1: '새출발기금 단점과 주의사항 신청 전 확인할 것',
  breadcrumb: '새출발기금단점주의사항신청전',
  description: '새출발기금 신청 전 알아야 할 단점: 신용 정보 등록, 1회 제한, 담보 처분 등 주의사항을 정리합니다.',
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
