import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          치매환자 <strong>가족이 대신 전화해도</strong> 됩니다.
          1899-9988은 환자 본인뿐 아니라 가족·보호자가 전화해 돌봄 정보·정서 상담·
          복지 자원 연계를 받을 수 있으며, <strong>익명 상담도 가능</strong>합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "치매 어머니 대신 제가 전화해도 되나요? 어떤 내용을 물어볼 수 있나요?"
        가족이 전화했을 때 받을 수 있는 상담 내용을 정리했습니다.
      </p>

      <section className="detail-card" id="family-call">
        <h2 className="detail-card-head">가족이 전화했을 때 상담 가능한 내용</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>질문 유형</th><th>상담 내용</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>증상 확인</strong></td>
                <td>어르신 증상이 치매인지 확인, 검진 절차 안내</td>
              </tr>
              <tr>
                <td><strong>검진 안내</strong></td>
                <td>가까운 치매안심센터 위치, 예약 방법</td>
              </tr>
              <tr>
                <td><strong>돌봄 방법</strong></td>
                <td>일상 케어 방법, 약물 관리, 안전 환경 조성</td>
              </tr>
              <tr>
                <td><strong>복지 자원</strong></td>
                <td>장기요양·재가서비스·치매안심쉼터 신청 방법</td>
              </tr>
              <tr>
                <td><strong>가족 정서 상담</strong></td>
                <td>돌봄 스트레스·소진 상담, 자조모임 연계</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="anonymous">
        <h2 className="detail-card-head">익명 상담 가능 여부</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>익명 상담 가능:</strong> 이름·주소 등 개인정보를 밝히지 않고도 상담받을 수 있습니다.
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>가족 명의 신청 불필요:</strong> 전화 상담은 별도 신청이나 등록 없이 바로 이용합니다.
          </div>
          <div className="info-box">
            <strong>전화번호:</strong> ☎ 1899-9988 (국번 없이, 24시간 무료)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="who-calls">
        <h2 className="detail-card-head">어떤 상황에서 가족이 전화하면 좋은가</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            어르신이 치매 검진을 거부하거나 콜센터 전화를 꺼릴 때 가족이 먼저 전화해 상담 후 대응 방법을 안내받을 수 있습니다.
          </div>
          <div className="info-box">
            야간 배회·폭력 행동이 갑자기 발생했을 때 즉시 전화해 대응 방법을 안내받을 수 있습니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            상담 범위, 가족 지원, 치매안심센터 연계 등<br />
            치매상담콜센터 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/dementia-helpline" className="btn-cta">
            치매상담콜센터 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 치매상담콜센터가족전화상담SpokeContent: SpokeData = {
  h1: '치매 환자 본인이 아닌 가족이 전화해도 되는지, 어떤 내용을 상담할 수 있는지',
  breadcrumb: '가족전화상담',
  description:
    '치매상담콜센터 1899-9988 가족 대신 전화 가능. 증상 확인·검진 안내·돌봄 방법·장기요양 자원 연계·가족 정서 상담. 익명 상담 가능. 24시간 무료.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '가족이 환자 대신 1899-9988에 전화해도 되나요?',
      a: '네, 가족·보호자가 대신 전화해도 됩니다. 환자 증상 확인, 검진 안내, 돌봄 방법 등 모든 상담이 가능합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '익명으로 상담할 수 있나요?',
      a: '네, 이름이나 주소 등 개인정보를 밝히지 않고도 상담이 가능합니다.',
      source: '중앙치매센터',
      sourceUrl: 'https://www.nid.or.kr',
    },
    {
      q: '어르신이 검진을 거부할 때 가족이 어떻게 해야 하나요?',
      a: '가족이 먼저 콜센터에 전화해 상황을 설명하면 검진을 권유하는 방법, 대화 방법 등을 안내받을 수 있습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '야간 배회가 발생했을 때 바로 전화해도 되나요?',
      a: '네, 24시간 운영하므로 야간에도 즉시 전화해 대응 방법을 안내받을 수 있습니다.',
      source: '중앙치매센터',
      sourceUrl: 'https://www.nid.or.kr',
    },
    {
      q: '전화 상담 후 치매안심센터로 바로 연결되나요?',
      a: '가까운 치매안심센터 위치와 예약 방법을 안내받을 수 있으며, 필요 시 센터로 연계해 줍니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
  ],
  sources: [
    { name: '보건복지부', url: 'https://www.mohw.go.kr' },
    { name: '중앙치매센터', url: 'https://www.nid.or.kr' },
    { name: '치매안심센터', url: 'https://ansim.nid.or.kr' },
  ],
};
