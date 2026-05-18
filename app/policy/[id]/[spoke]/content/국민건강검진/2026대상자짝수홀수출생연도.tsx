import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          2026년 일반건강검진 대상은 <strong>출생연도 끝자리가 짝수(0·2·4·6·8)인 분</strong>입니다.
          2026년이 짝수 해이기 때문입니다. 직장 비사무직은 매년 받으므로 출생연도와 무관합니다.
          내가 대상자인지 확인은 <strong>건강모아 앱</strong> 또는 <strong>☎1577-1000</strong>으로 조회하세요.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        홀수 출생연도(끝자리 1·3·5·7·9)인 분은 2025년에 검진을 받았거나 받아야 했고,
        2026년에는 원칙적으로 대상이 아닙니다. 단, 전년도 미수검자는 공단에 신청하면
        금년도 대상으로 추가 등록이 가능합니다.
      </p>

      <section className="detail-card" id="target">
        <h2 className="detail-card-head">2026년 대상자 구분</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>구분</th><th>대상 여부</th><th>비고</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>짝수 출생연도 (0·2·4·6·8)</strong></td><td>✅ 2026년 대상</td><td>지역·직장 가입자 공통</td></tr>
              <tr><td><strong>홀수 출생연도 (1·3·5·7·9)</strong></td><td>❌ 2026년 미대상</td><td>2025년 대상 (미수검 시 추가 등록 가능)</td></tr>
              <tr><td><strong>비사무직 근로자</strong></td><td>✅ 매년 대상</td><td>출생연도 무관</td></tr>
              <tr><td><strong>20~64세 의료급여수급권자</strong></td><td>✅ 2년마다</td><td>홀짝 기준 동일</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="who">
        <h2 className="detail-card-head">일반건강검진 대상자 4가지</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>지역세대주:</strong> 지역가입자 세대주 (2년마다 1회, 짝수·홀수 출생연도 교대)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>직장가입자:</strong> 사무직 2년마다 1회 / 비사무직 매년 1회
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>20세 이상 세대원·피부양자:</strong> 2년마다 1회 (짝수·홀수 출생연도)
          </div>
          <div className="info-box">
            <strong>20~64세 의료급여수급권자:</strong> 2년마다 1회
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="check">
        <h2 className="detail-card-head">내가 올해 대상인지 확인하는 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>건강모아 앱:</strong> 국민건강보험 앱 → 나의 건강 → 검진대상 조회
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>전화 문의:</strong> ☎1577-1000 (국민건강보험공단 고객센터)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>건강검진표:</strong> 대상자에게 전자문서(카카오·이메일) 또는 우편 발송
          </div>
          <div className="info-box">
            <strong>검진표 미수령:</strong> ☎1577-1000 또는 가까운 공단 지사에서 재발급 가능
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            검진 항목, 예약 방법, 미수검 시 불이익까지<br />
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

export const 국민건강검진2026대상자짝수홀수출생연도SpokeContent: SpokeData = {
  h1: '2026 국민건강검진 대상자, 짝수·홀수 출생연도 기준으로 누가 받나',
  breadcrumb: '2026대상자짝수홀수출생연도',
  description:
    '2026년 국민건강검진 대상: 출생연도 끝자리 짝수(0·2·4·6·8). 비사무직은 매년 대상. 건강모아 앱 또는 ☎1577-1000으로 대상 여부 조회. 전년도 미수검자는 추가 등록 가능.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '1990년생이면 2026년에 검진 받을 수 있나요?',
      a: '네. 1990년생은 출생연도 끝자리가 0(짝수)이므로 2026년 대상자입니다. 건강모아 앱이나 ☎1577-1000으로 대상 여부를 확인하세요.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.nhis.or.kr/nhis/healthin/wbhaca04500m01.do',
    },
    {
      q: '직장인인데 사무직·비사무직을 어떻게 구분하나요?',
      a: '비사무직은 농·어업·광업 종사자, 생산·기능 관련 종사자 등 현장직입니다. 일반 사무직은 2년마다 1회, 비사무직은 매년 받습니다. 정확한 구분은 사업장 또는 공단에 문의하세요.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.nhis.or.kr/nhis/healthin/wbhaca04500m01.do',
    },
    {
      q: '2025년에 검진을 안 받았는데 2026년에 받을 수 있나요?',
      a: '홀수 출생연도라면 2025년이 대상이었습니다. 전년도 미수검자는 국민건강보험공단(☎1577-1000)에 신청하면 당해연도 대상으로 추가 등록이 가능합니다.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.nhis.or.kr/nhis/healthin/wbhaca04500m01.do',
    },
    {
      q: '검진표를 못 받았는데 어떻게 하나요?',
      a: '검진표를 분실했거나 수령하지 못한 경우 ☎1577-1000이나 가까운 국민건강보험공단 지사에 신청하면 재발급해 줍니다. 건강모아 앱에서 검진대상 확인서를 출력할 수도 있습니다.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.nhis.or.kr/nhis/healthin/wbhaca04500m01.do',
    },
    {
      q: '피부양자(자녀·배우자)도 무료로 받을 수 있나요?',
      a: '네. 직장가입자의 피부양자 중 만 20세 이상이면 2년마다 1회 무료로 일반건강검진을 받을 수 있습니다. 짝수·홀수 출생연도 기준이 동일하게 적용됩니다.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.nhis.or.kr/nhis/healthin/wbhaca04500m01.do',
    },
  ],
  sources: [
    { name: '국민건강보험 일반건강검진 안내', url: 'https://www.nhis.or.kr/nhis/healthin/wbhaca04500m01.do' },
    { name: '국민건강보험공단', url: 'https://www.nhis.or.kr' },
  ],
};
