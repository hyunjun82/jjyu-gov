import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          치매 검사 결과가 <strong>정상으로 나와도</strong> 치매안심센터 서비스를 계속 이용할 수 있습니다.
          정상 판정 어르신도 <strong>인지강화교실</strong>에 참여해 예방 관리를 받을 수 있으며,
          이후에도 정기적으로 검사를 받는 것이 좋습니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "치매안심센터 검사를 했는데 정상이라고 나왔어요. 그럼 더 이상 다닐 수 없나요?"
        검사 결과별로 받을 수 있는 서비스를 정리했습니다.
      </p>

      <section className="detail-card" id="result-service">
        <h2 className="detail-card-head">검사 결과별 이용 가능 서비스</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>검사 결과</th><th>이용 가능 서비스</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>정상</strong></td>
                <td>인지강화교실(주 3회), 정기 검진, 예방 상담</td>
              </tr>
              <tr>
                <td><strong>경도인지장애</strong></td>
                <td>인지강화교실(주 3회), 진단검사 안내, 가족 상담</td>
              </tr>
              <tr>
                <td><strong>치매 의심</strong></td>
                <td>진단검사·감별검사 진행, 치료 연계</td>
              </tr>
              <tr>
                <td><strong>치매 확진</strong></td>
                <td>등록관리, 치료관리비(월 3만원), 쉼터, 가족 지원 등 전체 서비스</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="prevention">
        <h2 className="detail-card-head">정상 판정 후 인지강화교실</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>대상:</strong> 정상 범위 및 경도인지장애 어르신 (만 60세 이상)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>내용:</strong> 기억력·주의력·언어·시공간 능력 향상을 위한 인지 훈련 프로그램
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>일정:</strong> 주 3회 (2026년 확대 운영)
          </div>
          <div className="info-box">
            <strong>비용:</strong> 무료
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="checkup-cycle">
        <h2 className="detail-card-head">정기 검진 권장 주기</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            치매는 초기에 발견할수록 진행을 늦출 수 있습니다. 정상 판정을 받아도
            1~2년에 한 번 정기 검진을 받는 것을 권장합니다.
          </div>
          <div className="info-box">
            가까운 보건소 치매안심센터에 연락하면 다음 검진 일정을 안내받을 수 있습니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            검사 절차, 치료관리비, 무료 서비스 등<br />
            치매안심센터 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/dementia-center" className="btn-cta">
            치매안심센터 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 치매안심센터검사결과정상SpokeContent: SpokeData = {
  h1: '치매안심센터 치매 검사 결과 정상으로 나오면 추가 지원은 받을 수 없는지',
  breadcrumb: '검사결과정상',
  description:
    '치매 검사 결과 정상이어도 인지강화교실(주 3회 무료) 이용 가능. 경도인지장애도 포함. 1~2년 주기 정기 검진 권장. 치매 확진 시 치료관리비 월 3만원 등 전체 서비스.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '검사 결과 정상이어도 치매안심센터를 계속 다닐 수 있나요?',
      a: '네, 정상 판정을 받아도 인지강화교실에 참여해 예방 관리를 받을 수 있습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '인지강화교실은 누구나 참여할 수 있나요?',
      a: '만 60세 이상 어르신이면 정상 범위, 경도인지장애 모두 참여할 수 있습니다.',
      source: '중앙치매센터',
      sourceUrl: 'https://www.nid.or.kr',
    },
    {
      q: '정기 검진은 얼마나 자주 받아야 하나요?',
      a: '1~2년에 한 번 정기 검진을 받는 것을 권장합니다. 치매는 초기 발견이 중요합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '치매로 진단받으면 어떤 지원을 추가로 받나요?',
      a: '치매안심센터 등록 후 치료관리비(월 3만원), 쉼터 이용, 가족 지원, 노인맞춤돌봄 자동 연계 등을 받을 수 있습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '경도인지장애 판정을 받으면 치매인가요?',
      a: '경도인지장애는 치매는 아니지만 치매로 이어질 위험이 있는 상태입니다. 인지강화교실 등 예방 프로그램에 적극 참여하는 것이 좋습니다.',
      source: '중앙치매센터',
      sourceUrl: 'https://www.nid.or.kr',
    },
  ],
  sources: [
    { name: '보건복지부', url: 'https://www.mohw.go.kr' },
    { name: '중앙치매센터', url: 'https://www.nid.or.kr' },
    { name: '치매안심센터 찾기', url: 'https://ansim.nid.or.kr' },
  ],
};
