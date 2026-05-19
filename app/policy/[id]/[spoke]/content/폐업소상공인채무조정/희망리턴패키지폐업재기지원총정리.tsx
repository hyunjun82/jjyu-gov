import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          희망리턴패키지는 폐업(예정) 소상공인에게
          <strong>사업정리컨설팅·점포철거비·법률자문·채무조정·재취업·재창업</strong>을
          패키지로 제공하는 종합 재기 지원 사업입니다.
          소상공인시장진흥공단이 운영하며, 온라인으로 신청할 수 있습니다.
        </p>
      </div>

      <section className="detail-card" id="menu">
        <h2 className="detail-card-head">지원 항목 한눈에 보기</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>항목</th><th>내용</th><th>한도</th></tr></thead>
            <tbody>
              <tr><td>사업정리 컨설팅</td><td>재기전략·세무·부동산·직무·심리 등 1:1 전문가 상담 (최대 3개 분야)</td><td>무료</td></tr>
              <tr><td>점포 철거비</td><td>인테리어 철거, 원상 복구 비용 지원</td><td>최대 600만 원</td></tr>
              <tr><td>법률 자문</td><td>임대차·노무·신용·가맹 등 전담 변호사 1:1 법률 자문</td><td>무료</td></tr>
              <tr><td>채무 조정</td><td>신용 전문가 상담 후 신복위·새출발기금·파산 연계</td><td>-</td></tr>
              <tr><td>재취업 지원</td><td>취업 알선, 직업 훈련 연계</td><td>-</td></tr>
              <tr><td>재창업 교육</td><td>재창업 준비 교육 및 멘토링</td><td>-</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="target">
        <h2 className="detail-card-head">신청 자격</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>요건</th><th>내용</th></tr></thead>
            <tbody>
              <tr><td>대상</td><td>소상공인기본법에 따른 소상공인 (폐업 또는 폐업 예정)</td></tr>
              <tr><td>폐업일 (컨설팅·철거·법률)</td><td>2023년 1월 1일 이후 폐업자</td></tr>
              <tr><td>채무조정</td><td>폐업일 무관 (법인 제외)</td></tr>
              <tr><td>사업 개시일</td><td>사업자등록증 기준 60일 이상 경과</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            2026년 예산: 1,932억 원, 지원 목표: 44,250건 내외.
            신청: sbiz.or.kr (희망리턴패키지) / 전화: ☎1357, ☎1533-0100
          </div>
        </div>
      </section>
    </>
  );
}

export const 폐업소상공인채무조정희망리턴패키지폐업재기지원총정리SpokeContent: SpokeData = {
  h1: '희망리턴패키지 폐업 후 재기 지원 총정리',
  breadcrumb: '희망리턴패키지폐업재기지원총정리',
  description: '희망리턴패키지 컨설팅·점포철거 600만원·법률자문·채무조정·재취업·재창업 교육까지 전체 지원 항목을 정리합니다.',
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
