import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          치매 가족을 돌보며 생기는 스트레스·우울·소진은
          <strong>1899-9988 치매상담콜센터</strong>에서 무료로 상담받을 수 있습니다.
          전문 상담사가 정서 지지와 함께 자조모임·가족 교육 등
          <strong>지역 자원 연계</strong>까지 안내해 줍니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "치매 부모님을 혼자 돌보다 지쳐서 한계입니다. 어디에 도움을 요청해야 하나요?"
        가족 돌봄 스트레스를 해소할 수 있는 채널을 정리했습니다.
      </p>

      <section className="detail-card" id="family-burden">
        <h2 className="detail-card-head">콜센터에서 지원받을 수 있는 내용</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>상황</th><th>콜센터 지원 내용</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>돌봄 소진·번아웃</strong></td>
                <td>전문 상담사의 정서 지지 상담, 자조모임 연계</td>
              </tr>
              <tr>
                <td><strong>야간 배회로 수면 부족</strong></td>
                <td>배회 대응 방법, 치매안심쉼터 연계 안내</td>
              </tr>
              <tr>
                <td><strong>폭력·공격 행동 대응</strong></td>
                <td>행동 심리 증상(BPSD) 대응 방법, 의료 연계</td>
              </tr>
              <tr>
                <td><strong>혼자 돌보기 한계</strong></td>
                <td>노인장기요양·재가 서비스·쉼터 자원 연계</td>
              </tr>
              <tr>
                <td><strong>가족 간 갈등</strong></td>
                <td>가족 교육 프로그램, 사회복지사 연계 상담</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="connected-support">
        <h2 className="detail-card-head">콜센터 연계 가족 지원 자원</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>가족 교육:</strong> 치매안심센터 무료 가족 교육 (돌봄 방법·약물 관리·안전 환경)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>자조모임:</strong> 같은 상황의 가족끼리 정서 지지 모임 (무료)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>치매안심쉼터:</strong> 환자 낮 시간 돌봄으로 가족 휴식 확보
          </div>
          <div className="info-box">
            <strong>장기요양:</strong> 재가급여(방문요양·목욕·간호) 연계 안내
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="call-info">
        <h2 className="detail-card-head">이용 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>전화:</strong> ☎ 1899-9988 (국번 없이, 24시간 무료)
          </div>
          <div className="info-box">
            <strong>익명 상담:</strong> 이름·주소 등 개인정보 없이 익명으로 상담 가능
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            가족 자조모임, 치매안심쉼터, 상담 범위 등<br />
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

export const 치매상담콜센터가족돌봄스트레스SpokeContent: SpokeData = {
  h1: '치매 가족 돌봄 스트레스를 해소하려면 콜센터 상담이 최우선 선택인 이유',
  breadcrumb: '가족돌봄스트레스',
  description:
    '치매 가족 돌봄 소진·번아웃 시 1899-9988 무료 상담. 정서 지지·자조모임·가족 교육·쉼터·장기요양 연계. 24시간 익명 상담 가능. 치매안심센터 가족 지원 연결.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '치매 가족을 돌보다 지쳤을 때 콜센터에서 어떤 도움을 받나요?',
      a: '정서 지지 상담과 함께 자조모임, 치매안심쉼터, 노인장기요양 자원을 연계해 줍니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '가족 자조모임은 어떻게 참여하나요?',
      a: '콜센터(1899-9988)에 전화하면 가까운 치매안심센터의 가족 자조모임을 안내받을 수 있습니다. 참여 비용은 무료입니다.',
      source: '중앙치매센터',
      sourceUrl: 'https://www.nid.or.kr',
    },
    {
      q: '치매안심쉼터를 이용하면 가족이 쉴 수 있나요?',
      a: '네, 치매안심쉼터는 치매 환자가 낮 시간을 보내는 공간으로 가족이 그 시간을 쉴 수 있습니다. 콜센터에서 연계를 안내해 줍니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '가족 교육 프로그램은 무료인가요?',
      a: '치매안심센터의 가족 교육(돌봄 방법·약물·안전 환경)은 무료로 제공됩니다.',
      source: '중앙치매센터',
      sourceUrl: 'https://www.nid.or.kr',
    },
    {
      q: '야간 배회가 너무 힘든데 전화해도 되나요?',
      a: '네, 야간 배회 대응 방법과 배회 감지 서비스, 쉼터 연계를 안내받을 수 있습니다. 24시간 운영이므로 언제든지 전화하세요.',
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
