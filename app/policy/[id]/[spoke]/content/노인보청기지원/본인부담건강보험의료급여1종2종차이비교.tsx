import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          노인 보청기 본인부담은 가입한 건강보험 유형에 따라 크게 다릅니다.
          <strong>의료급여 1종</strong>은 전액 지원(본인부담 0원),
          <strong>의료급여 2종</strong>은 본인부담 10%,
          <strong>일반 건강보험</strong>은 본인부담 20%(약 26만 3천원)가 발생합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        급여 한도액(131만 7천원)을 기준으로 본인부담액이 산정됩니다.
        차상위계층이나 희귀난치성 질환자는 별도 감면이 적용될 수 있으므로
        건강보험공단 또는 주민센터에서 확인하세요.
      </p>

      <section className="detail-card" id="compare">
        <h2 className="detail-card-head">건강보험 유형별 본인부담 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>가입 유형</th><th>급여 한도</th><th>본인부담률</th><th>본인부담액(한도 기준)</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>의료급여 1종</strong></td><td>131만 7천원</td><td>0%</td><td>0원</td></tr>
              <tr><td><strong>의료급여 2종</strong></td><td>131만 7천원</td><td>10%</td><td>약 13만 2천원</td></tr>
              <tr><td><strong>일반 건강보험</strong></td><td>131만 7천원</td><td>20%</td><td>약 26만 3천원</td></tr>
              <tr><td><strong>차상위·희귀난치</strong></td><td>131만 7천원</td><td>별도 감면</td><td>건강보험공단 확인</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="exemption">
        <h2 className="detail-card-head">감면 대상 및 확인 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>차상위계층:</strong> 소득인정액이 기준 중위소득 50% 이하인 경우 본인부담 경감 적용 가능
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>희귀난치성 질환자:</strong> 등록 희귀질환자는 본인부담 경감 특례 적용
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>확인 방법:</strong> 건강보험공단 고객센터(1577-1000) 또는 지사 방문
          </div>
          <div className="info-box">
            <strong>주의:</strong> 한도 초과 금액은 감면 없이 전액 본인 부담
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            신청 절차, 급여 조건, 지자체 추가 혜택까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/elderly-hearing-aid" className="btn-cta">
            노인보청기지원 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 노인보청기지원본인부담건강보험의료급여1종2종차이비교SpokeContent: SpokeData = {
  h1: '노인 보청기 본인부담, 건강보험 vs 의료급여 1·2종 부담 차이 비교',
  breadcrumb: '본인부담건강보험의료급여1종2종차이비교',
  description:
    '노인 보청기 본인부담: 의료급여 1종 0원·2종 약 13만 2천원·일반 건강보험 약 26만 3천원. 급여 한도 131만 7천원 기준. 차상위·희귀난치성 별도 감면. 5년 1회 지원.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '기초생활수급자는 의료급여 1종에 해당하나요?',
      a: '기초생활수급자 중 근로 능력이 없는 분은 의료급여 1종, 근로 능력이 있는 분은 2종으로 구분됩니다. 본인의 급여 유형은 주민센터 또는 건강보험공단에서 확인할 수 있습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '차상위계층이면 자동으로 감면이 적용되나요?',
      a: '차상위계층 본인부담 경감은 별도 신청이 필요한 경우가 있습니다. 주민센터 또는 건강보험공단에 차상위 확인서를 제출하고 감면 여부를 확인해야 합니다.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.nhis.or.kr',
    },
    {
      q: '보청기 가격이 급여 한도보다 낮으면 본인부담은 어떻게 계산되나요?',
      a: '실제 구입 가격이 급여 한도(131만 7천원)보다 낮으면 실제 구입 가격을 기준으로 본인부담률이 적용됩니다. 예를 들어 100만원짜리 보청기를 일반 건강보험으로 구입하면 본인부담은 20만원입니다.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.nhis.or.kr',
    },
    {
      q: '의료급여 2종에서 1종으로 변경되면 이미 지급된 본인부담금을 돌려받을 수 있나요?',
      a: '급여 유형 변경 이전에 이미 지급된 본인부담금은 소급 환급되지 않습니다. 변경 이후 청구분부터 새로운 유형이 적용됩니다.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.nhis.or.kr',
    },
    {
      q: '직장 건강보험과 지역 건강보험 가입자 간 본인부담 차이가 있나요?',
      a: '직장 건강보험과 지역 건강보험 모두 일반 건강보험 가입자로서 보청기 본인부담률은 동일하게 20%입니다. 급여 유형(의료급여 1종·2종·일반 건강보험)으로만 구분됩니다.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.nhis.or.kr',
    },
  ],
  sources: [
    { name: '국민건강보험공단 보조기기 급여', url: 'https://www.nhis.or.kr' },
    { name: '보건복지부 의료급여', url: 'https://www.mohw.go.kr' },
  ],
};
