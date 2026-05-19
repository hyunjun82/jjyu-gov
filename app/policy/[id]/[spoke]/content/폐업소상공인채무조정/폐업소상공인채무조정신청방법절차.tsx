import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          폐업 소상공인 채무 조정은 <strong>소진공 희망리턴패키지</strong>의 채무조정 메뉴를 통해 신청합니다.
          신용회복위원회·새출발기금·개인파산 등 상황에 맞는 제도로 연계해 줍니다.
          신청은 온라인(소상공인마당) 또는 콜센터 ☎1357로 가능합니다.
        </p>
      </div>

      <section className="detail-card" id="step">
        <h2 className="detail-card-head">채무 조정 신청 절차</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>단계</th><th>내용</th></tr></thead>
            <tbody>
              <tr><td>1단계</td><td>희망리턴패키지 온라인 신청 (sbiz.or.kr)</td></tr>
              <tr><td>2단계</td><td>신용 전문가와 1:1 채무 상담</td></tr>
              <tr><td>3단계</td><td>채무 현황 분석 후 적합한 제도 안내</td></tr>
              <tr><td>4단계</td><td>신용회복위원회 / 새출발기금 / 개인파산 중 선택 신청</td></tr>
              <tr><td>5단계</td><td>약정 체결 및 분할 상환 시작</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            폐업일이 2023년 1월 1일 이후인 경우 사업정리컨설팅·점포철거비·법률자문도 함께 신청할 수 있습니다.
            채무조정은 폐업일과 관계없이 신청 가능합니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="docs">
        <h2 className="detail-card-head">필요 서류</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>서류</th><th>비고</th></tr></thead>
            <tbody>
              <tr><td>폐업사실증명원 또는 사업자등록증</td><td>국세청 홈택스에서 출력 가능</td></tr>
              <tr><td>채무 관련 금융 서류</td><td>대출 잔액 확인서, 연체 내역 등</td></tr>
              <tr><td>신분증</td><td>본인 확인용</td></tr>
            </tbody>
          </table>
          <div className="warning-box" style={{marginTop:12}}>
            법인 소상공인은 채무조정 신청이 제한될 수 있습니다. 개인사업자를 우선 확인하세요.
          </div>
        </div>
      </section>

      <section className="detail-card" id="contact">
        <h2 className="detail-card-head">신청 방법</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>방법</th><th>경로</th></tr></thead>
            <tbody>
              <tr><td>온라인</td><td>소상공인마당 sbiz.or.kr → 희망리턴패키지 → 채무조정</td></tr>
              <tr><td>전화</td><td>☎1357 (중소기업통합콜센터) 또는 ☎1533-0100</td></tr>
              <tr><td>방문</td><td>가까운 소상공인지원센터</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export const 폐업소상공인채무조정폐업소상공인채무조정신청방법절차SpokeContent: SpokeData = {
  h1: '폐업 소상공인 채무 조정 신청 방법과 절차',
  breadcrumb: '폐업소상공인채무조정신청방법절차',
  description: '폐업 소상공인 채무 조정은 희망리턴패키지를 통해 신청합니다. 단계별 절차, 필요 서류, 신청 경로를 정리합니다.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    { q: '폐업한 소상공인도 채무 조정을 받을 수 있나요?', a: '폐업 후에도 신용회복위원회(ccrs.or.kr) 또는 새출발기금(saechulbal.or.kr)을 통해 채무 조정을 신청할 수 있습니다.', source: '신용회복위원회·새출발기금 공식 안내', sourceUrl: 'https://www.saechulbal.or.kr' },
    { q: '채무 조정 신청 시 최소 연체 기간이 있나요?', a: '신용회복위원회는 연체 3개월 이상이 기준이며, 새출발기금은 90일 이상 연체 또는 폐업 소상공인이면 신청 가능합니다.', source: '신용회복위원회·새출발기금 공식 안내', sourceUrl: 'https://www.saechulbal.or.kr' },
    { q: '원금 감면은 얼마나 받을 수 있나요?', a: '상황에 따라 원금의 최대 60~90%까지 감면이 가능합니다. 이자·연체이자는 전액 감면되는 경우가 많습니다.', source: '신용회복위원회·새출발기금 공식 안내', sourceUrl: 'https://www.saechulbal.or.kr' },
    { q: '채무 조정 중 생계를 유지할 수 있나요?', a: '조정 후 분할 상환 기간이 최대 10년까지 가능하며, 월 상환액을 소득 수준에 맞게 조정해 생계를 유지할 수 있도록 설계됩니다.', source: '신용회복위원회·새출발기금 공식 안내', sourceUrl: 'https://www.saechulbal.or.kr' },
    { q: '재창업을 준비 중인데 채무 조정을 받으면 불이익이 있나요?', a: '채무 조정 이력은 신용정보에 등록되어 일시적으로 신용 점수에 영향을 줍니다. 다만 연체 상태보다는 채무 조정이 장기 신용 회복에 유리합니다.', source: '신용회복위원회·새출발기금 공식 안내', sourceUrl: 'https://www.saechulbal.or.kr' },
  ],
  sources: [{ name: '신용회복위원회·새출발기금 공식 안내', url: 'https://www.saechulbal.or.kr' }],
};
