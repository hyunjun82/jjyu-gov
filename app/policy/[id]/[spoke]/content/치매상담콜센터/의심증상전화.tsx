import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          치매 증상이 의심될 때는 <strong>1899-9988</strong>로 전화하면 됩니다.
          24시간 365일 운영되며, 국번 없이 누르면 전문 상담사가
          <strong>무료</strong>로 증상 정보와 가까운 치매안심센터를 안내해 줍니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "어머니가 자꾸 같은 말을 반복하고 길을 잃었는데, 어디에 전화해야 하나요?"
        치매 의심 증상별로 콜센터에서 받을 수 있는 안내를 정리했습니다.
      </p>

      <section className="detail-card" id="symptoms">
        <h2 className="detail-card-head">치매 의심 주요 증상과 콜센터 안내</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>증상</th><th>콜센터 안내 내용</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>같은 말·질문 반복</strong></td>
                <td>치매 선별검사 안내, 가까운 치매안심센터 연결</td>
              </tr>
              <tr>
                <td><strong>길 잃음·배회</strong></td>
                <td>배회 감지 서비스, 안전 귀가 지원 정보 제공</td>
              </tr>
              <tr>
                <td><strong>갑작스러운 폭력·흥분</strong></td>
                <td>대응 방법 안내, 정서 상담, 필요 시 의료 연계</td>
              </tr>
              <tr>
                <td><strong>기억력 저하</strong></td>
                <td>MMSE-DS 검진 안내, 치매안심센터 연결</td>
              </tr>
              <tr>
                <td><strong>일상생활 수행 어려움</strong></td>
                <td>장기요양·돌봄 자원 연계 안내</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="how-to-call">
        <h2 className="detail-card-head">전화 방법과 운영 정보</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>전화번호:</strong> ☎ 1899-9988 (국번 없이)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>운영:</strong> 24시간 365일 연중무휴
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>비용:</strong> 본인부담 없음 (무료)
          </div>
          <div className="info-box">
            <strong>상담사:</strong> 의료·복지 현장 평균 4년 경력 + 290시간 치매 전문 교육 36명
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="after-call">
        <h2 className="detail-card-head">전화 후 연결되는 서비스</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>치매안심센터 연결:</strong> 전국 256개 시·군·구 보건소 치매안심센터로 연계
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>무료 검진 안내:</strong> MMSE-DS 선별검사부터 3단계 무료 검진 절차 안내
          </div>
          <div className="info-box">
            <strong>돌봄 자원 연계:</strong> 장기요양·노인맞춤돌봄 등 복지 자원 정보 제공
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            치매안심센터 무료 검진, 가족 지원 등<br />
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

export const 치매상담콜센터의심증상전화SpokeContent: SpokeData = {
  h1: '부모님이 치매가 의심될 때 바로 전화할 수 있는 무료 상담 번호와 이용 방법',
  breadcrumb: '의심증상전화',
  description:
    '치매 의심 시 1899-9988로 무료 전화. 24시간 365일 전문 상담사 36명. 같은 말 반복·길 잃음·배회·기억력 저하 증상별 안내. 치매안심센터 연결·무료 검진 절차 안내.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '치매 의심 증상이 있을 때 1899-9988에 전화하면 어떤 안내를 받나요?',
      a: '증상에 따라 가까운 치매안심센터 연결, MMSE-DS 무료 검진 절차, 배회 감지 서비스 등을 안내받을 수 있습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '1899-9988은 몇 시에 운영하나요?',
      a: '24시간 365일 연중무휴로 운영합니다. 야간·주말·공휴일 모두 이용 가능합니다.',
      source: '중앙치매센터',
      sourceUrl: 'https://www.nid.or.kr',
    },
    {
      q: '전화 상담 비용이 있나요?',
      a: '전화 상담은 본인부담 없이 무료입니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '치매 검진은 어디서 받나요?',
      a: '전국 256개 시·군·구 보건소 치매안심센터에서 MMSE-DS 선별검사부터 3단계 무료 검진을 받을 수 있습니다. 콜센터에서 가까운 센터를 안내받을 수 있습니다.',
      source: '중앙치매센터',
      sourceUrl: 'https://www.nid.or.kr',
    },
    {
      q: '치매 의심 증상에는 어떤 것이 있나요?',
      a: '같은 말·질문 반복, 길 잃음·배회, 기억력 저하, 갑작스러운 폭력·흥분, 일상생활 수행 어려움 등이 대표적입니다.',
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
