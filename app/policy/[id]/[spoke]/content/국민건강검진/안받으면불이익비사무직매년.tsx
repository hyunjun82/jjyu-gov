import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          국민건강검진을 안 받아도 <strong>직접적인 과태료나 벌금은 없습니다.</strong>
          다만 검진 자체가 무료이고 건강 이상을 조기 발견하는 기회이므로 받는 것이 유리합니다.
          <strong>비사무직 근로자</strong>는 매년 받아야 하며, 일부 사업장에서는
          미수검 시 회사가 과태료를 부과받을 수 있습니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        검진 기간(매년 12월 31일)이 지나면 그 해 검진 기회는 소멸됩니다.
        전년도 미수검자는 공단에 신청하면 당해 연도 대상으로 추가 등록이 가능합니다.
      </p>

      <section className="detail-card" id="penalty">
        <h2 className="detail-card-head">미수검 시 불이익</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>구분</th><th>미수검 불이익</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>개인(일반 가입자)</strong></td><td>직접 벌금·과태료 없음 (단, 검진 기회 소멸)</td></tr>
              <tr><td><strong>사업주 (비사무직 관리)</strong></td><td>비사무직 근로자 미수검 시 산업안전보건법에 따라 사업주에게 과태료 부과 가능</td></tr>
              <tr><td><strong>의료급여수급권자</strong></td><td>직접 불이익 없으나 미수검 시 건강 위험 증가</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="nonsalaried">
        <h2 className="detail-card-head">비사무직이 매년 받아야 하는 이유</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>근거:</strong> 산업안전보건법상 사업주가 비사무직 근로자의 건강검진을 매년 실시해야 할 의무
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>비사무직 범위:</strong> 농·어업·광업 종사자, 생산·기능직, 현장 작업직 등
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>사무직:</strong> 2년마다 1회 (짝수·홀수 출생연도 교대)
          </div>
          <div className="info-box">
            <strong>미수검 시:</strong> 사업주가 ☎1577-1000 또는 공단에 추가 신청해 당해 연도 안에 검진 받도록 조치 필요
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="missed">
        <h2 className="detail-card-head">작년에 못 받았다면</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>전년도 미수검자 추가 등록:</strong> ☎1577-1000 또는 가까운 공단 지사 신청
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>신청 기간:</strong> 당해 연도 안에 신청해야 금년도 대상으로 추가 등록 가능
          </div>
          <div className="info-box">
            <strong>주의:</strong> 추가 등록 없이 검진기관 방문 시 대상자로 확인이 안 될 수 있으니 공단 먼저 확인
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            대상자 확인, 검진 항목, 예약 방법까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/national-health-checkup" className="btn-cta">
            국민건강검진 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 국민건강검진안받으면불이익비사무직매년SpokeContent: SpokeData = {
  h1: '국민건강검진 안 받으면 불이익 있나, 비사무직은 왜 매년 받아야 하나',
  breadcrumb: '안받으면불이익비사무직매년',
  description:
    '국민건강검진 미수검 개인 직접 벌금 없음. 비사무직 근로자는 산업안전보건법상 매년 의무, 사업주 미실시 시 과태료. 전년도 미수검자는 ☎1577-1000으로 당해연도 추가 등록 가능.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '검진 안 받으면 건강보험료가 오르나요?',
      a: '아닙니다. 국민건강검진 미수검이 건강보험료에 직접 영향을 주지는 않습니다. 다만 건강 이상을 조기에 발견하지 못해 큰 질병으로 이어질 수 있습니다.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.nhis.or.kr/nhis/healthin/wbhaca04500m01.do',
    },
    {
      q: '회사에서 검진 받으라고 하는데 개인 검진기관에서 받아도 되나요?',
      a: '네. 국민건강보험공단 지정 검진기관이면 어디서나 받을 수 있습니다. 회사가 단체 검진을 지정한 경우에도 개인적으로 다른 지정기관을 이용할 수 있습니다(사업장 정책 확인 필요).',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.nhis.or.kr/nhis/healthin/wbhaca04500m01.do',
    },
    {
      q: '나는 사무직인지 비사무직인지 어떻게 알 수 있나요?',
      a: '일반적으로 현장에서 직접 생산·제조·농업 등을 하면 비사무직, 사무실에서 근무하면 사무직입니다. 정확한 구분은 회사 인사팀이나 국민건강보험공단(☎1577-1000)에 문의하세요.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.nhis.or.kr/nhis/healthin/wbhaca04500m01.do',
    },
    {
      q: '12월 31일 이후에 검진을 받을 수 있나요?',
      a: '당해 연도 검진은 12월 31일로 종료됩니다. 이후에는 다음 검진 주기(짝수·홀수 출생연도)를 기다려야 합니다. 단, 전년도 미수검자는 공단 신청으로 금년도 대상에 추가 등록이 가능합니다.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.nhis.or.kr/nhis/healthin/wbhaca04500m01.do',
    },
    {
      q: '검진 결과 확인도 안 하면 문제가 되나요?',
      a: '검진 결과는 15일 이내 우편·이메일로 통보됩니다. 이상 소견이 있으면 확진 검사를 받아야 하며, 확인하지 않으면 질병이 악화될 수 있습니다. 건강모아 앱에서도 결과 조회가 가능합니다.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.nhis.or.kr/nhis/healthin/wbhaca04500m01.do',
    },
  ],
  sources: [
    { name: '국민건강보험 일반건강검진 안내', url: 'https://www.nhis.or.kr/nhis/healthin/wbhaca04500m01.do' },
    { name: '국민건강보험공단', url: 'https://www.nhis.or.kr' },
  ],
};
