import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          다함께돌봄센터는 <strong>방학 중에도 운영</strong>합니다.
          방학 기간 운영 시간은 오전 9시~오후 6시(9시간)로,
          학기 중(오후 2~8시, 6시간)보다 오히려 더 길게 운영됩니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "방학에도 다함께돌봄센터를 이용할 수 있나요? 학기 중과 운영 시간이 다른가요?"
        학기 중과 방학 운영 시간 차이를 정리했습니다.
      </p>

      <section className="detail-card" id="hours-compare">
        <h2 className="detail-card-head">학기 중 vs 방학 중 운영 시간 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>기간</th><th>운영 시간</th><th>총 시간</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>학기 중 (평일)</strong></td>
                <td>오후 2시 ~ 오후 8시</td>
                <td>6시간</td>
              </tr>
              <tr>
                <td><strong>방학 중 (평일)</strong></td>
                <td>오전 9시 ~ 오후 6시</td>
                <td><strong>9시간</strong></td>
              </tr>
              <tr>
                <td>야간 연장 (일부)</td>
                <td>~ 오후 10시</td>
                <td>센터별 다름</td>
              </tr>
              <tr>
                <td>토요일</td>
                <td>일부 센터만</td>
                <td>센터 확인 필요</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            방학 중에는 학기 중보다 3시간 더 운영해, 종일 돌봄이 필요한 맞벌이 가정에 유리합니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="vacation-program">
        <h2 className="detail-card-head">방학 중 프로그램</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            방학 중에도 <strong>학습 지원(숙제·독서)·놀이·체험·체육·예술·급간식·안전 돌봄</strong> 5대 프로그램이 제공됩니다.
          </div>
          <div className="info-box">
            방학 중 특별 프로그램(캠프·체험 활동 등)을 운영하는 센터도 있습니다. 이용 예정 센터에 미리 문의하세요.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="apply">
        <h2 className="detail-card-head">신청 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>온라인:</strong> dadol.or.kr 또는 정부24(gov.kr)에서 거주지 센터 검색 후 신청
          </div>
          <div className="info-box">
            <strong>방문:</strong> 거주지 다함께돌봄센터 직접 방문 신청
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

export const 다함께돌봄방학운영SpokeContent: SpokeData = {
  h1: '방학에도 다함께돌봄센터를 이용할 수 있나, 학기 중과 방학 운영 시간 비교',
  breadcrumb: '방학운영',
  description:
    '다함께돌봄센터 방학 운영: 오전 9시~오후 6시(9시간), 학기 중(14~20시, 6시간)보다 3시간 더 운영. 방학 중에도 5대 프로그램 운영. 일부 센터 야간 연장(~22시).',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '방학에도 다함께돌봄센터를 이용할 수 있나요?',
      a: '네, 방학 중에도 운영합니다. 방학 중 운영 시간은 오전 9시~오후 6시(9시간)로, 학기 중보다 더 길게 운영됩니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '방학 중에는 몇 시부터 맡길 수 있나요?',
      a: '오전 9시부터 가능합니다. 학기 중에는 오후 2시부터 운영하지만, 방학에는 오전 9시부터 오후 6시까지 운영합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '방학 중에도 프로그램이 있나요?',
      a: '네, 학습 지원·놀이·체험·체육·예술·급간식·안전 돌봄 5대 프로그램이 방학 중에도 운영됩니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '야간 연장 운영은 모든 센터에서 되나요?',
      a: '아니요, 야간 연장(~22시)은 KB금융 협력 사업에 참여하는 일부 센터에서만 운영합니다. 이용 예정 센터에 확인하세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '토요일에도 운영하나요?',
      a: '일부 센터만 운영합니다. 이용 예정 센터에 직접 문의하세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
  ],
  sources: [
    { name: '보건복지부', url: 'https://www.mohw.go.kr' },
    { name: '다함께돌봄 누리집', url: 'https://dadol.or.kr' },
  ],
};
