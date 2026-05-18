import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          지역아동센터는 학기 중 오후 2시~7시, 방학 중 오전 9시~오후 6시 운영합니다.
          보호·교육·문화 활동과 급식을 제공해 <strong>맞벌이 가구의 방과 후 공백</strong>을
          채워주는 돌봄 기관입니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "맞벌이라 아이 학교 끝나고 갈 곳이 없어요. 지역아동센터에서 무엇을 해주나요?"
        맞벌이 가구가 알아야 할 지역아동센터 돌봄 서비스를 정리했습니다.
      </p>

      <section className="detail-card" id="hours">
        <h2 className="detail-card-head">운영 시간</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>구분</th><th>운영 시간</th><th>비고</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>학기 중</strong></td>
                <td>14:00 ~ 19:00</td>
                <td>주 5일 운영</td>
              </tr>
              <tr>
                <td><strong>방학 중</strong></td>
                <td>09:00 ~ 18:00</td>
                <td>하루 종일 돌봄 가능</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="service">
        <h2 className="detail-card-head">제공하는 돌봄 서비스</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>분야</th><th>내용</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>보호</strong></td>
                <td>안전한 공간 제공, 생활관리, 5대 안전의무교육</td>
              </tr>
              <tr>
                <td><strong>교육</strong></td>
                <td>숙제지도, 학교생활 관리, 기초학력 지원</td>
              </tr>
              <tr>
                <td><strong>문화</strong></td>
                <td>체험활동, 놀이, 예체능 프로그램</td>
              </tr>
              <tr>
                <td><strong>정서지원</strong></td>
                <td>상담, 심리지원, 또래 관계 형성</td>
              </tr>
              <tr>
                <td><strong>지역사회 연계</strong></td>
                <td>보호자·학교·지역기관 연계, 가족 지원</td>
              </tr>
              <tr>
                <td><strong>급식</strong></td>
                <td>방과 후 간식 및 석식 제공 (센터별 상이)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="cost">
        <h2 className="detail-card-head">맞벌이 가구 비용</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>저소득 가구:</strong> 기초생활수급, 차상위계층은 <strong>무료</strong>입니다.
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>일반 맞벌이 가구:</strong> 월 0~3만원 수준입니다. 센터별 자체 규정에 따라 다를 수 있습니다.
          </div>
          <div className="info-box">
            <strong>우선 배정 조건:</strong> 맞벌이 가구는 우선순위 3순위에 해당합니다.
            저소득·한부모 가구 이후 배정되므로 대기가 생길 수 있습니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            신청 방법, 찾기, 우선순위 등<br />
            지역아동센터 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/community-child-center" className="btn-cta">
            지역아동센터 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 지역아동센터맞벌이돌봄서비스SpokeContent: SpokeData = {
  h1: '초등학생 자녀가 있는 맞벌이라면 지역아동센터에서 받을 수 있는 돌봄 서비스',
  breadcrumb: '맞벌이돌봄서비스',
  description:
    '지역아동센터 학기중 14~19시 방학중 9~18시 운영. 보호·교육·문화·정서지원·급식 제공. 저소득 무료 일반 월 0~3만원. 맞벌이 3순위 우선배정.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '방학에도 지역아동센터를 이용할 수 있나요?',
      a: '네, 방학 중에는 오전 9시부터 오후 6시까지 운영합니다. 학기 중보다 운영 시간이 길어 맞벌이 가구에 유용합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '지역아동센터에서 급식도 제공하나요?',
      a: '대부분의 센터에서 방과 후 간식과 석식을 제공합니다. 센터마다 다를 수 있으니 해당 센터에 문의하세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '맞벌이 가구는 우선 배정이 되나요?',
      a: '맞벌이 가구는 3순위로, 저소득·한부모 가구 이후에 배정됩니다. 정원이 있으므로 대기가 발생할 수 있습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '지역아동센터에서 숙제 도움을 받을 수 있나요?',
      a: '네, 숙제지도와 학교생활 관리가 교육 서비스에 포함됩니다. 기초학력 지원도 제공합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '비용은 얼마인가요?',
      a: '기초생활수급 가구는 무료이며, 일반 맞벌이 가구는 월 0~3만원 수준입니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
  ],
  sources: [
    { name: '보건복지부', url: 'https://www.mohw.go.kr' },
    { name: '지역아동센터중앙지원단', url: 'https://www.icareinfo.go.kr' },
    { name: '복지로', url: 'https://www.bokjiro.go.kr' },
  ],
};
