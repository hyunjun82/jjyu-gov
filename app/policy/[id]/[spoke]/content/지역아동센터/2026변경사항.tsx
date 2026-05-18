import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          2026년 지역아동센터는 전국 <strong>4,400개</strong> 시설로 운영됩니다.
          이용 대상은 만 18세 미만 아동이며, 저소득·한부모·다문화·다자녀 가구가 우선 배정됩니다.
          비용은 저소득 가구 무료, 일반 가구 월 0~3만원입니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "2026년에 지역아동센터 이용 조건이 달라졌나요? 혜택이 늘었나요?"
        2026년 기준 지역아동센터 대상과 지원 내용을 정리했습니다.
      </p>

      <section className="detail-card" id="target">
        <h2 className="detail-card-head">2026년 이용 대상 및 우선순위</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>우선순위</th><th>대상</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1순위</strong></td>
                <td>기초생활수급 가구, 차상위계층 아동</td>
              </tr>
              <tr>
                <td><strong>2순위</strong></td>
                <td>한부모·조손가족, 다문화가족, 장애인 가구 아동</td>
              </tr>
              <tr>
                <td><strong>3순위</strong></td>
                <td>다자녀 가구, 맞벌이 가구 아동</td>
              </tr>
              <tr>
                <td><strong>4순위</strong></td>
                <td>그 외 돌봄이 필요한 아동 (만 18세 미만)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="service2026">
        <h2 className="detail-card-head">2026년 지원 내용</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>내용</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>운영 시설</strong></td>
                <td>전국 4,400개</td>
              </tr>
              <tr>
                <td><strong>이용 비용</strong></td>
                <td>저소득 무료 / 일반 월 0~3만원</td>
              </tr>
              <tr>
                <td><strong>학기 중 시간</strong></td>
                <td>14:00 ~ 19:00 (주 5일)</td>
              </tr>
              <tr>
                <td><strong>방학 중 시간</strong></td>
                <td>09:00 ~ 18:00 (주 5일)</td>
              </tr>
              <tr>
                <td><strong>제공 서비스</strong></td>
                <td>보호·교육·문화·정서지원·급식·지역사회 연계</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="program">
        <h2 className="detail-card-head">프로그램 구성</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>5대 안전의무교육:</strong> 교통안전, 실종유괴예방, 약물오남용예방,
            재난대비, 성폭력예방 교육이 포함됩니다.
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>학업 지원:</strong> 숙제지도, 학교생활 관리, 기초학력 지원
          </div>
          <div className="info-box">
            <strong>문화·정서:</strong> 체험활동, 놀이, 예체능 프로그램, 또래 관계 형성 지원
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            신청 방법, 위치 찾기, 비용 등<br />
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

export const 지역아동센터2026변경사항SpokeContent: SpokeData = {
  h1: '2026년 지역아동센터 이용 대상과 지원 내용이 달라진 점',
  breadcrumb: '2026변경사항',
  description:
    '2026년 지역아동센터 전국 4,400개 운영. 만 18세 미만 대상 저소득 우선. 비용 저소득 무료 일반 월 0~3만원. 학기중 14~19시 방학중 9~18시.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '2026년 지역아동센터 이용 비용은 얼마인가요?',
      a: '기초생활수급 가구는 무료이며, 일반 가구는 월 0~3만원 수준입니다. 센터마다 다를 수 있으니 해당 센터에 확인하세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '전국에 지역아동센터가 몇 개 있나요?',
      a: '2026년 기준 전국 약 4,400개 센터가 운영 중입니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '고등학생도 지역아동센터를 이용할 수 있나요?',
      a: '만 18세 미만이면 이용할 수 있습니다. 고등학생도 해당되지만 정원에 따라 초등학생 저학년이 우선 배정될 수 있습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '5대 안전의무교육은 무엇인가요?',
      a: '교통안전, 실종유괴예방, 약물오남용예방, 재난대비, 성폭력예방 5개 교육으로 지역아동센터 이용 시 의무적으로 제공됩니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '방학 중에는 오전부터 이용할 수 있나요?',
      a: '네, 방학 중에는 오전 9시부터 오후 6시까지 운영합니다. 하루 종일 돌봄이 가능합니다.',
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
