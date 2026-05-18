import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          영유아 건강검진은 생후 <strong>14일~71개월</strong> 사이에 <strong>총 8회</strong>를 무료로 받습니다.
          각 차수마다 정해진 월령 구간이 있으며, 구간 내에서 편리한 날을 선택해 받으면 됩니다.
          구강검진은 <strong>18~71개월</strong>에 별도 8회 제공됩니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        검진 시기가 되면 국민건강보험공단에서 보호자에게 안내장을 자동 발송합니다.
        안내장을 받으면 가까운 지정 의료기관에 예약 후 방문하면 됩니다.
      </p>

      <section className="detail-card" id="schedule">
        <h2 className="detail-card-head">일반 건강검진 8회 차수 및 시기</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>차수</th><th>검진 시기 (월령)</th><th>주요 확인 항목</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>1차</strong></td><td>생후 14~35일</td><td>신체계측, 수유 확인, 황달 등</td></tr>
              <tr><td><strong>2차</strong></td><td>4~6개월</td><td>발달 선별, 수유·이유식 상담</td></tr>
              <tr><td><strong>3차</strong></td><td>9~12개월</td><td>운동·언어 발달, 귀 감염 확인</td></tr>
              <tr><td><strong>4차</strong></td><td>18~24개월</td><td>언어·인지 발달, 치아 확인</td></tr>
              <tr><td><strong>5차</strong></td><td>30~36개월</td><td>눈 시력, 사회성·언어 발달</td></tr>
              <tr><td><strong>6차</strong></td><td>42~48개월</td><td>신체 성장, 시력·청력, 행동</td></tr>
              <tr><td><strong>7차</strong></td><td>54~60개월</td><td>학습 준비도, 건강 상태 전반</td></tr>
              <tr><td><strong>8차</strong></td><td>66~71개월</td><td>입학 전 건강 최종 점검</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="oral">
        <h2 className="detail-card-head">구강검진 8회 안내</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>대상 시기:</strong> 생후 18~71개월 (일반 검진 4~8차와 같은 시기)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>검진 항목:</strong> 충치 예방, 치아·잇몸 건강, 불소 도포 상담
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>비용:</strong> 완전 무료 (건강보험 부담)
          </div>
          <div className="info-box">
            <strong>기관:</strong> 일반 검진 의료기관과 별도로 구강검진 지정 기관 이용
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            예약 방법, 이상 발견 시 대처, 시기 놓친 경우까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/infant-health-checkup" className="btn-cta">
            영유아 건강검진 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 영유아건강검진검진시기8회차수표SpokeContent: SpokeData = {
  h1: '영유아 건강검진 검진 시기, 8회 차수와 월령별 핵심 항목 한눈에',
  breadcrumb: '검진시기8회차수표',
  description:
    '영유아 건강검진 8회 일정: 14~35일(1차)·4~6개월(2차)·9~12개월(3차)·18~24개월(4차)·30~36개월(5차)·42~48개월(6차)·54~60개월(7차)·66~71개월(8차). 구강검진 18~71개월 8회 별도. 전액 무료.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '검진 시기를 조금 넘겨도 받을 수 있나요?',
      a: '각 차수별로 정해진 월령 구간 내에서 받아야 합니다. 구간을 초과하면 해당 차수는 받을 수 없습니다. 안내장이 도착하면 가능한 한 빨리 예약하는 것이 좋습니다.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.nhis.or.kr',
    },
    {
      q: '구강검진은 일반 검진과 같은 날 받을 수 있나요?',
      a: '일반 건강검진과 구강검진은 같은 의료기관에서 같은 날 받을 수도 있고, 각각 다른 날 받을 수도 있습니다. 다만 구강검진 지정 기관인지 사전에 확인이 필요합니다.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.nhis.or.kr',
    },
    {
      q: '1차 검진(14~35일)이 너무 이른 것 같은데 꼭 받아야 하나요?',
      a: '신생아기에 황달, 선천성 이상, 수유 문제 등을 조기 확인하기 위한 검진입니다. 되도록 빨리 받는 것이 좋으며, 산후조리원에서 퇴소 전 받는 경우도 많습니다.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.nhis.or.kr',
    },
    {
      q: '안내장이 없어도 검진을 받을 수 있나요?',
      a: '네. 안내장이 없어도 ☎1577-1000이나 건강모아 앱에서 대상 여부를 확인 후 지정 의료기관에서 검진을 받을 수 있습니다.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.nhis.or.kr',
    },
    {
      q: '검진이 모두 8차까지인데 모두 받아야 하나요?',
      a: '법적 의무는 없지만 각 시기별로 확인해야 하는 발달 지표가 다르기 때문에 모든 차수를 받는 것이 권장됩니다. 무료이므로 빠짐없이 받는 것이 좋습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
  ],
  sources: [
    { name: '국민건강보험공단 영유아 건강검진', url: 'https://www.nhis.or.kr' },
    { name: '보건복지부', url: 'https://www.mohw.go.kr' },
  ],
};
