import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          특수형태근로자(특고) 고용보험은 현재 <strong>14개 직종</strong>에 적용됩니다.
          적용 대상이 되려면 해당 직종에 종사하면서
          <strong>월 보수가 80만원 이상</strong>이어야 합니다.
          80만원 미만이면 적용 제외를 신청할 수 있습니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        2021년 7월 최초 시행 당시 12개 직종으로 시작해 이후 확대되었습니다.
        본인 직종이 해당하는지 근로복지공단(1588-0075) 또는 고용24(work24.go.kr)에서 확인하세요.
      </p>

      <section className="detail-card" id="jobs">
        <h2 className="detail-card-head">특고 고용보험 적용 직종 (14개)</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>직종</th><th>적용 여부</th></tr>
            </thead>
            <tbody>
              <tr><td>보험설계사</td><td>적용</td></tr>
              <tr><td>택배기사</td><td>적용</td></tr>
              <tr><td>신용카드 모집인</td><td>적용</td></tr>
              <tr><td>학습지 교사</td><td>적용</td></tr>
              <tr><td>골프장 캐디</td><td>적용</td></tr>
              <tr><td>대출 모집인</td><td>적용</td></tr>
              <tr><td>방문판매원</td><td>적용</td></tr>
              <tr><td>방문강사</td><td>적용</td></tr>
              <tr><td>대여제품 점검원</td><td>적용</td></tr>
              <tr><td>화물차주</td><td>적용</td></tr>
              <tr><td>퀵서비스 기사</td><td>적용</td></tr>
              <tr><td>간병인</td><td>적용</td></tr>
              <tr><td>가전제품 설치기사</td><td>적용</td></tr>
              <tr><td>플랫폼 배달종사자</td><td>적용</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="criteria">
        <h2 className="detail-card-head">적용 기준 및 제외 조건</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>월 보수 기준:</strong> 80만원 이상이면 의무 적용
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>80만원 미만:</strong> 적용 제외 신청 가능 (근로복지공단에 신청)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>취득 신고:</strong> 사업주(원청)가 고용보험 취득 신고 의무
          </div>
          <div className="info-box">
            <strong>확인 방법:</strong> 고용24(work24.go.kr) 또는 근로복지공단(1588-0075)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            보험료 구조, 실업급여 조건, 적용 제외 신청까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/platform-worker-insurance" className="btn-cta">
            특수형태근로자고용보험 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 특수형태근로자고용보험적용직종12개월보수80만기준해당여부SpokeContent: SpokeData = {
  h1: '특수형태근로자 고용보험 적용 직종, 14개 직종과 월 보수 80만원 기준',
  breadcrumb: '적용직종12개월보수80만기준해당여부',
  description:
    '특고 고용보험 적용 직종 14개: 보험설계사·택배기사·퀵서비스·간병인 등. 월 보수 80만원 이상 의무 적용. 80만원 미만 적용 제외 신청 가능. 근로복지공단 취득 신고.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '내가 해당 직종인지 모르는 경우 어떻게 확인하나요?',
      a: '근로복지공단 고객센터(1588-0075) 또는 고용24(work24.go.kr)에서 본인 직종의 적용 여부를 확인할 수 있습니다. 사업주(원청)도 취득 신고 의무가 있으므로 원청에도 문의하세요.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '월 보수가 80만원이 넘다가 줄어들면 어떻게 되나요?',
      a: '월 보수가 80만원 미만으로 줄어들면 적용 제외 신청이 가능합니다. 적용 제외 신청 후 승인되면 보험료를 납부하지 않아도 되지만, 실업급여 등 수급 자격도 상실됩니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '사업주가 취득 신고를 하지 않으면 어떻게 되나요?',
      a: '사업주가 취득 신고 의무를 이행하지 않으면 과태료가 부과될 수 있습니다. 특고 종사자 본인이 직접 근로복지공단에 신고를 요청할 수도 있습니다.',
      source: '근로복지공단',
      sourceUrl: 'https://www.comwel.or.kr',
    },
    {
      q: '두 가지 특고 직종을 겸업하는 경우 어떻게 적용되나요?',
      a: '두 직종을 겸업하는 경우 각 사업주별로 취득 신고가 이루어지며, 보험료는 각각 산정됩니다. 수급 시에는 통합 피보험 기간이 인정됩니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '플랫폼 배달종사자는 어느 시점부터 적용되나요?',
      a: '플랫폼 배달종사자(음식배달 등)는 2022년 1월부터 특고 고용보험 적용 대상으로 추가되었습니다. 플랫폼 운영사(원청)가 취득 신고 의무를 집니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
  ],
  sources: [
    { name: '고용노동부 특수형태근로종사자 고용보험', url: 'https://www.moel.go.kr' },
    { name: '근로복지공단', url: 'https://www.comwel.or.kr' },
  ],
};
