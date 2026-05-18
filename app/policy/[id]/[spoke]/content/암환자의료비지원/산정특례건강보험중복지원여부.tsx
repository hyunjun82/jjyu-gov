import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          암환자 의료비 지원과 건강보험 <strong>산정특례</strong>는 <strong>중복 적용이 가능</strong>합니다.
          산정특례는 암 진단 시 건강보험 본인부담률을 <strong>5%로 낮춰주는 제도</strong>로,
          소득 기준 없이 모든 암 환자가 적용받을 수 있습니다.
          산정특례로 줄어든 본인부담금을 암환자 의료비 지원으로 추가 보조받는 구조입니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        두 제도를 동시에 활용하면 의료비 부담을 크게 줄일 수 있습니다.
        산정특례는 국민건강보험공단에, 암환자 의료비 지원은 보건소 또는 국립암센터에
        각각 별도로 신청해야 합니다.
      </p>

      <section className="detail-card" id="compare">
        <h2 className="detail-card-head">산정특례 vs 암환자 의료비 지원 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>건강보험 산정특례</th><th>암환자 의료비 지원</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>운영 기관</strong></td><td>국민건강보험공단</td><td>보건복지부 (국립암센터)</td></tr>
              <tr><td><strong>소득 기준</strong></td><td>없음 (보편 적용)</td><td>성인 중위소득 120% 이하</td></tr>
              <tr><td><strong>지원 방식</strong></td><td>본인부담률 5%로 인하</td><td>본인부담금 연 최대 300만원 지원</td></tr>
              <tr><td><strong>대상 연령</strong></td><td>제한 없음</td><td>성인 18세↑ / 소아 18세 미만</td></tr>
              <tr><td><strong>중복 가능</strong></td><td>가능 (의료비 지원과 중복)</td><td>가능 (산정특례와 중복)</td></tr>
              <tr><td><strong>신청처</strong></td><td>국민건강보험공단·의료기관</td><td>보건소·국립암센터</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="how">
        <h2 className="detail-card-head">두 제도 동시 활용 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>Step 1:</strong> 암 진단 즉시 의료기관에서 산정특례 등록 신청 (또는 공단 신청)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>Step 2:</strong> 산정특례 적용 후 5% 본인부담금 발생
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>Step 3:</strong> 보건소 또는 국립암센터에 암환자 의료비 지원 신청
          </div>
          <div className="info-box">
            <strong>Step 4:</strong> 5% 본인부담금을 의료비 지원(연 최대 300만원)으로 추가 보조
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="sangjung">
        <h2 className="detail-card-head">산정특례 핵심 정보</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>본인부담률:</strong> 건강보험 적용 항목 5% (일반 20~60% 대비 대폭 인하)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>적용 기간:</strong> 암 진단 후 5년 (재발·전이 시 재등록 가능)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>신청:</strong> 진단받은 의료기관 또는 국민건강보험공단 지사
          </div>
          <div className="info-box">
            <strong>문의:</strong> 국민건강보험공단 ☎1577-1000
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            성인·소아 지원 기준, 신청 방법까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/cancer-patient-medical-aid" className="btn-cta">
            암환자 의료비 지원 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 암환자의료비지원산정특례건강보험중복지원여부SpokeContent: SpokeData = {
  h1: '암환자 의료비 지원과 산정특례 중복 가능, 건강보험 5%와 동시에 받는 방법',
  breadcrumb: '산정특례건강보험중복지원여부',
  description:
    '암환자 의료비 지원 + 건강보험 산정특례(본인부담 5%) 중복 가능. 산정특례는 소득 무관 5년 적용, 공단 신청. 의료비 지원은 보건소 별도 신청. 두 제도 합산 시 암 치료비 부담 최소화.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '산정특례 적용 후에도 의료비 지원을 받을 수 있나요?',
      a: '네. 산정특례로 본인부담률이 5%로 낮아진 의료비에 대해 추가로 암환자 의료비 지원을 받을 수 있습니다. 두 제도는 별도로 운영되며 중복 수혜가 허용됩니다.',
      source: '국립암센터',
      sourceUrl: 'https://www.ncc.re.kr',
    },
    {
      q: '산정특례는 어디서 신청하나요?',
      a: '암 진단을 받은 의료기관(병원)에서 바로 신청하거나, 국민건강보험공단 지사 또는 ☎1577-1000으로 신청할 수 있습니다. 의사가 진단서를 제출하면 빠르게 처리됩니다.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.nhis.or.kr',
    },
    {
      q: '산정특례 5년이 지나면 어떻게 되나요?',
      a: '5년 후 완치 상태라면 산정특례가 종료됩니다. 단, 재발·전이가 확인되면 재등록이 가능하고 5% 본인부담률이 다시 적용됩니다. 의료기관 또는 공단에 문의하세요.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.nhis.or.kr',
    },
    {
      q: '소득이 높아 암환자 의료비 지원을 못 받아도 산정특례는 받나요?',
      a: '네. 산정특례는 소득 기준이 없어 암 진단만 되면 모든 환자가 건강보험 본인부담률 5%를 적용받습니다. 암환자 의료비 지원은 별도 소득 기준이 있지만 산정특례는 무관합니다.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.nhis.or.kr',
    },
    {
      q: '비급여 항목은 산정특례 혜택을 받나요?',
      a: '산정특례는 건강보험 급여 항목에만 적용됩니다. 비급여 의료비는 산정특례 적용이 안 되지만, 암환자 의료비 지원에서 일부 비급여를 포함할 수 있습니다. 정확한 범위는 보건소나 ☎1577-8899로 확인하세요.',
      source: '국립암센터',
      sourceUrl: 'https://www.ncc.re.kr',
    },
  ],
  sources: [
    { name: '국립암센터 암환자 의료비 지원 안내', url: 'https://www.ncc.re.kr/cancerStatsView.ncc?bbsnum=613' },
    { name: '국민건강보험공단', url: 'https://www.nhis.or.kr' },
  ],
};
