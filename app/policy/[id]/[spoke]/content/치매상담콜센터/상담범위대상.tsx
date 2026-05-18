import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          치매상담콜센터 1899-9988은 치매환자 본인, 가족, 요양보호사 등 전문 케어제공자,
          치매가 의심되는 일반 국민 <strong>누구나</strong> 이용할 수 있습니다.
          정보 제공·정서 상담·자원 연계까지 <strong>4대 영역</strong> 통합 무료 상담을 제공합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "치매 상담 콜센터에서는 어떤 상담을 받을 수 있나요? 환자 가족도 이용할 수 있나요?"
        이용 대상과 상담 범위를 정리했습니다.
      </p>

      <section className="detail-card" id="target">
        <h2 className="detail-card-head">이용 대상 4유형</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>대상</th><th>이용 목적</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>치매환자 본인</strong></td>
                <td>치료 정보, 생활 관리, 복지 자원 연계</td>
              </tr>
              <tr>
                <td><strong>치매환자 가족</strong></td>
                <td>돌봄 정보, 정서 상담, 가족 소진 지원</td>
              </tr>
              <tr>
                <td><strong>요양보호사·전문 케어제공자</strong></td>
                <td>케어 방법, 행동 증상 대응, 자원 연계</td>
              </tr>
              <tr>
                <td><strong>치매 의심 일반 국민</strong></td>
                <td>증상 확인, 검진 안내, 치매안심센터 연결</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="service-area">
        <h2 className="detail-card-head">4대 상담 영역</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>정보 제공:</strong> 치매 의심 증상·진단·치료 정보, 검진 절차 안내
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>돌봄 정보:</strong> 일상 케어·약물 관리·식사·안전 환경 조성
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>정서 상담:</strong> 가족 스트레스·우울·소진 상담
          </div>
          <div className="info-box">
            <strong>자원 연계:</strong> 치매안심센터·장기요양·노인맞춤돌봄 연계
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="counselor">
        <h2 className="detail-card-head">상담사 전문성</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>인원:</strong> 전문 상담사 36명
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>경력:</strong> 의료·복지 현장 평균 4년 경력
          </div>
          <div className="info-box">
            <strong>교육:</strong> 2개월 290시간 치매 전문 교육 이수
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            치매 증상 전화, 가족 지원, 자원 연계 등<br />
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

export const 치매상담콜센터상담범위대상SpokeContent: SpokeData = {
  h1: '치매상담콜센터 1899-9988에서 받을 수 있는 상담 종류와 이용 대상 범위',
  breadcrumb: '상담범위대상',
  description:
    '1899-9988 이용 대상: 환자 본인·가족·요양보호사·일반 국민 모두. 4대 영역(정보·돌봄·정서·자원 연계) 무료 통합 상담. 전문 상담사 36명, 의료복지 4년 경력, 290시간 교육.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '치매환자 가족도 콜센터를 이용할 수 있나요?',
      a: '네, 가족도 이용 대상입니다. 돌봄 정보와 정서 상담, 자원 연계 등을 받을 수 있습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '치매 진단 전이어도 상담이 가능한가요?',
      a: '네, 치매가 의심되는 일반 국민도 이용할 수 있습니다. 증상 확인과 검진 절차를 안내받을 수 있습니다.',
      source: '중앙치매센터',
      sourceUrl: 'https://www.nid.or.kr',
    },
    {
      q: '요양보호사도 이용할 수 있나요?',
      a: '네, 요양보호사·간호사 등 전문 케어제공자도 케어 방법, 행동 증상 대응 방법 상담이 가능합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '상담 내용은 어떤 영역인가요?',
      a: '정보 제공, 돌봄 정보, 정서 상담, 자원 연계의 4대 영역을 통합 제공합니다.',
      source: '중앙치매센터',
      sourceUrl: 'https://www.nid.or.kr',
    },
    {
      q: '상담사는 전문가인가요?',
      a: '의료·복지 현장 평균 4년 경력에 2개월 290시간 치매 전문 교육을 받은 36명의 상담사가 응대합니다.',
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
