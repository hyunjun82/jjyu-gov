import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          노인 보청기 지원을 받으려면 <strong>청각장애 등록</strong>이 선행되어야 합니다.
          이비인후과 청각검사 → 장애 등록 → 처방전 발급 → 보청기 구입 → 급여 청구 →
          검수 확인까지 <strong>총 6단계</strong>를 거쳐야 최종 급여가 지급됩니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        각 단계별로 처리 기관이 다르며, 순서를 지키지 않으면 급여를 받을 수 없습니다.
        특히 보청기 구입 전 반드시 처방전을 발급받고 건강보험 등록 판매점에서 구입해야 합니다.
      </p>

      <section className="detail-card" id="steps">
        <h2 className="detail-card-head">단계별 처리 기관 및 내용</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>단계</th><th>처리 내용</th><th>처리 기관</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>1단계</strong></td><td>청각검사 및 진단</td><td>이비인후과 의원·병원</td></tr>
              <tr><td><strong>2단계</strong></td><td>청각장애 등록 신청</td><td>주민센터(읍·면·동)</td></tr>
              <tr><td><strong>3단계</strong></td><td>보청기 처방전 발급</td><td>이비인후과 전문의</td></tr>
              <tr><td><strong>4단계</strong></td><td>보청기 구입</td><td>건강보험 등록 보청기 판매점</td></tr>
              <tr><td><strong>5단계</strong></td><td>급여 청구</td><td>국민건강보험공단</td></tr>
              <tr><td><strong>6단계</strong></td><td>검수 확인(구입 후 1개월~1년)</td><td>이비인후과 전문의</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="detail">
        <h2 className="detail-card-head">단계별 주의사항</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>1~2단계:</strong> 청각검사 결과가 장애 기준에 해당해야 등록이 가능합니다. 국민연금공단 장애심사를 거칩니다.
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>3단계:</strong> 처방전은 보청기 구입 전에 발급받아야 합니다. 구입 후 발급은 인정되지 않습니다.
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>4단계:</strong> 건강보험공단에 등록된 판매점에서만 급여 적용이 됩니다. 일반 판매점 구입 시 급여 불가.
          </div>
          <div className="info-box">
            <strong>6단계:</strong> 검수 확인(구입 후 1개월~1년 사이)을 완료해야 급여가 최종 지급됩니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            급여 조건, 본인부담 비교, 지자체 추가 혜택까지<br />
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

export const 노인보청기지원신청절차청각장애등록급여지급단계SpokeContent: SpokeData = {
  h1: '노인 보청기 지원 신청절차, 청각장애 등록부터 급여 지급까지 단계',
  breadcrumb: '신청절차청각장애등록급여지급단계',
  description:
    '노인 보청기 급여 신청 6단계: 이비인후과 청각검사 → 주민센터 장애 등록 → 처방전 발급 → 등록 판매점 구입 → 건강보험공단 급여 청구 → 검수 확인. 단계 순서 필수 준수.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '청각장애 등록 신청 후 결과가 나오는 데 얼마나 걸리나요?',
      a: '청각장애 등록은 국민연금공단 장애심사를 거치며 통상 30~90일이 소요됩니다. 심사 결과에 따라 장애 등급이 결정되며, 기준 미달 시 등록이 거부될 수 있습니다.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.nhis.or.kr',
    },
    {
      q: '처방전 없이 먼저 보청기를 구입하면 나중에 급여를 받을 수 있나요?',
      a: '아닙니다. 보청기 처방전은 구입 전에 발급받아야 합니다. 구입 후에 처방전을 받으면 급여가 적용되지 않습니다.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.nhis.or.kr',
    },
    {
      q: '검수 확인은 꼭 해야 하나요?',
      a: '네. 검수 확인은 급여 지급의 필수 단계입니다. 보청기 구입 후 1개월 이상 1년 이내에 이비인후과를 방문해 검수 확인을 받아야 급여가 최종 지급됩니다.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.nhis.or.kr',
    },
    {
      q: '급여 청구는 본인이 직접 해야 하나요?',
      a: '보청기 판매점이 대리 청구를 해주는 경우가 많습니다. 구입 시 판매점에 대리 청구 여부를 확인하세요. 직접 청구 시 건강보험공단 지사 방문 또는 홈페이지를 이용할 수 있습니다.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.nhis.or.kr',
    },
    {
      q: '주민센터 외에 온라인으로 장애 등록 신청이 가능한가요?',
      a: '청각장애 등록 신청은 주소지 관할 읍·면·동 주민센터에 방문하여 신청하는 것이 원칙입니다. 복지로(bokjiro.go.kr)에서 일부 온라인 신청도 가능하나, 구비서류 제출이 필요합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
  ],
  sources: [
    { name: '국민건강보험공단 보조기기 급여', url: 'https://www.nhis.or.kr' },
    { name: '보건복지부 장애인 등록', url: 'https://www.mohw.go.kr' },
  ],
};
