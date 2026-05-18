import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          다함께돌봄센터 대기가 길 경우 <strong>아이돌봄서비스, 학교 방과후 프로그램, 지역아동센터, 초등 방과후 돌봄교실</strong>을 대안으로 활용할 수 있습니다.
          여러 서비스를 중복 신청해 두면 먼저 배정되는 곳을 이용하는 것도 방법입니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "다함께돌봄센터 대기가 너무 긴데, 그동안 쓸 수 있는 초등돌봄 서비스가 있나요?"
        대기 중 활용할 수 있는 대안 서비스를 정리했습니다.
      </p>

      <section className="detail-card" id="alternatives">
        <h2 className="detail-card-head">다함께돌봄센터 대기 중 쓸 수 있는 대안 서비스</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>서비스</th><th>특징</th><th>신청처</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>아이돌봄서비스</strong></td>
                <td>가정 방문, 시간 유연, 소득별 비용</td>
                <td>idolbom.go.kr</td>
              </tr>
              <tr>
                <td><strong>초등 방과후 돌봄교실</strong></td>
                <td>학교 내 방과후 돌봄, 저렴</td>
                <td>재학 학교 신청</td>
              </tr>
              <tr>
                <td><strong>지역아동센터</strong></td>
                <td>취약계층 위주 무상 운영</td>
                <td>거주지 센터</td>
              </tr>
              <tr>
                <td><strong>청소년 방과후 아카데미</strong></td>
                <td>초4~중3, 무상 돌봄·교육</td>
                <td>거주지 아카데미</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="tips">
        <h2 className="detail-card-head">대기 기간을 줄이는 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>복수 센터 신청:</strong> dadol.or.kr에서 거주지 인근 여러 센터에 동시 대기 신청
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>맞벌이 우선순위 확인:</strong> 맞벌이·한부모·다자녀·저소득 가정은 우선 배정. 해당 서류를 제출하면 배정이 빨라질 수 있음
          </div>
          <div className="info-box">
            <strong>인근 구·동 센터 포함:</strong> 거주지 인근 다른 행정구역 센터도 신청 가능
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="overlap-strategy">
        <h2 className="detail-card-head">여러 서비스 동시 활용 전략</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            다함께돌봄센터 대기 신청 + 아이돌봄서비스 동시 신청 → 먼저 배정되는 곳 이용
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            학교 방과후 돌봄교실 + 아이돌봄서비스 조합 → 중복 가능
          </div>
          <div className="info-box">
            다함께돌봄센터 배정 후에도 아이돌봄서비스 시간제 중복 이용 가능
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            이용료, 신청 방법, 아이돌봄서비스 비교 등<br />
            다함께돌봄센터 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/community-care-center" className="btn-cta">
            다함께돌봄센터 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 다함께돌봄대기대안SpokeContent: SpokeData = {
  h1: '다함께돌봄센터 대기가 길면 쓸 수 있는 초등돌봄 대안 서비스',
  breadcrumb: '대기대안',
  description:
    '다함께돌봄센터 대기 중 대안: 아이돌봄서비스(가정방문), 학교 방과후 돌봄교실, 지역아동센터, 청소년 방과후 아카데미. 복수 센터 동시 신청, 맞벌이 우선순위 서류 제출로 대기 단축.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '다함께돌봄센터 대기가 길면 어떤 서비스를 이용하면 되나요?',
      a: '아이돌봄서비스(idolbom.go.kr), 학교 방과후 돌봄교실, 지역아동센터, 청소년 방과후 아카데미를 대안으로 활용할 수 있습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '대기 기간을 줄이는 방법이 있나요?',
      a: '여러 센터에 동시 대기 신청하거나, 맞벌이·한부모 등 우선순위 증빙 서류를 제출하면 배정이 빨라질 수 있습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '지역아동센터는 누구나 이용할 수 있나요?',
      a: '지역아동센터는 기초생활수급자·차상위 등 취약계층 아동 위주로 운영되며 무상입니다. 일반 가정은 다함께돌봄센터나 방과후 돌봄교실이 더 적합합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '아이돌봄서비스와 다함께돌봄센터를 동시에 신청할 수 있나요?',
      a: '네, 두 서비스를 동시에 신청하거나 이용할 수 있습니다. 먼저 배정되는 곳을 이용하거나 조합해서 사용하는 것도 방법입니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '거주지 외 지역 센터에도 신청할 수 있나요?',
      a: '네, 거주지 인근 다른 구·동의 센터에도 대기 신청이 가능합니다. dadol.or.kr에서 여러 센터를 검색해 복수 신청하세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
  ],
  sources: [
    { name: '보건복지부', url: 'https://www.mohw.go.kr' },
    { name: '다함께돌봄 누리집', url: 'https://dadol.or.kr' },
    { name: '아이돌봄서비스', url: 'https://www.idolbom.go.kr' },
  ],
};
