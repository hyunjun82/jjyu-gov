import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          출산육아기 고용안정장려금은 <strong>근로자가 아닌 사업주</strong>가 신청합니다.
          소속 직원이 육아휴직을 사용한 경우, 사업주는
          <strong>고용24(work24.go.kr)</strong>에서 신청하며
          지원금의 <strong>50%는 육아휴직 중</strong>, 나머지 <strong>50%는 복직 후 6개월 고용 유지 확인</strong> 후 지급됩니다.
          신청 기한은 <strong>육아휴직 종료일로부터 12개월 이내</strong>입니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "직원이 육아휴직을 썼는데 사업주가 받는 장려금이 있다고 들었어요. 어떻게 신청하나요?"
        사업주 신청 대상과 절차를 정리했습니다.
      </p>

      <section className="detail-card" id="overview">
        <h2 className="detail-card-head">직원이 육아휴직 썼을 때 사업주가 신청하는 출산육아기 고용안정장려금 정리</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>구분</th><th>내용</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>신청 주체</td>
                <td><strong>사업주</strong> (육아휴직 허용한 사업장)</td>
              </tr>
              <tr>
                <td>지원 대상</td>
                <td>육아휴직을 부여한 우선지원대상기업(중소기업) 사업주</td>
              </tr>
              <tr>
                <td>지원 금액</td>
                <td>월 30만원 (연속 3개월 이상 부여 시)</td>
              </tr>
              <tr>
                <td>지급 방식</td>
                <td>50% — 육아휴직 중 3개월 주기 지급<br />50% — 복직 후 6개월 고용 유지 확인 후 지급</td>
              </tr>
              <tr>
                <td>신청 기한</td>
                <td>육아휴직 종료일로부터 <strong>12개월 이내</strong></td>
              </tr>
              <tr>
                <td>신청처</td>
                <td>고용24(work24.go.kr) 또는 관할 고용센터 방문</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="eligibility">
        <h2 className="detail-card-head">신청 가능한 사업주 요건</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>① 우선지원대상기업:</strong> 제조업 500인 이하, 그 외 업종 300인 이하 중소기업 해당
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>② 고용보험 피보험자:</strong> 육아휴직 사용 근로자가 고용보험 피보험자여야 함
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>③ 육아휴직 기간:</strong> 연속 30일 이상 육아휴직을 부여한 경우
          </div>
          <div className="info-box">
            <strong>④ 고용 유지:</strong> 육아휴직 후 복직 시 6개월 이상 고용 유지
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="apply-steps">
        <h2 className="detail-card-head">신청 절차</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>단계</th><th>내용</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1단계</strong></td>
                <td>직원 육아휴직 개시 → 고용보험 육아휴직 확인서 제출</td>
              </tr>
              <tr>
                <td><strong>2단계</strong></td>
                <td>고용24(work24.go.kr) 로그인 → 기업 서비스 → 출산육아기 고용안정장려금 신청</td>
              </tr>
              <tr>
                <td><strong>3단계</strong></td>
                <td>지원금 50% 수령 (육아휴직 중 3개월 주기)</td>
              </tr>
              <tr>
                <td><strong>4단계</strong></td>
                <td>직원 복직 + 6개월 고용 유지 후 나머지 50% 신청</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>문의:</strong> 고용노동부 고객상담센터 ☎1350 또는 관할 고용센터
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            대체인력 지원금, 복직 후 지급 조건 등<br />
            출산육아기 고용안정장려금 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/birth-care-employment-grant" className="btn-cta">
            출산육아기 고용안정장려금 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 출산장려금사업주신청SpokeContent: SpokeData = {
  h1: '직원이 육아휴직 썼을 때 사업주가 신청하는 출산육아기 고용안정장려금 정리',
  breadcrumb: '사업주신청',
  description:
    '출산육아기 고용안정장려금은 사업주 신청. 우선지원대상기업(중소기업)이 직원 육아휴직 부여 시 월 30만원 지원. 50%는 휴직 중, 50%는 복직 후 6개월 고용 유지 확인 후 지급. 고용24(work24.go.kr) 신청.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '출산육아기 고용안정장려금은 누가 신청하나요?',
      a: '근로자가 아닌 사업주가 신청합니다. 육아휴직을 허용한 우선지원대상기업(중소기업) 사업주가 대상입니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '지원 금액은 얼마인가요?',
      a: '월 30만원이 지원됩니다. 지원금의 50%는 육아휴직 중 3개월 주기로, 나머지 50%는 복직 후 6개월 고용 유지 확인 후 지급됩니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '신청 기한이 있나요?',
      a: '육아휴직 종료일로부터 12개월 이내에 신청해야 합니다. 기한을 넘기면 지원을 받을 수 없습니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '우선지원대상기업이 아니면 신청이 안 되나요?',
      a: '출산육아기 고용안정장려금은 우선지원대상기업(중소기업)에 한해 지원됩니다. 제조업 500인 이하, 그 외 업종 300인 이하인 경우 해당합니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '어디서 신청하나요?',
      a: '고용24(work24.go.kr)에서 온라인으로 신청하거나, 관할 고용센터를 방문해 신청할 수 있습니다. 문의는 고용노동부 고객상담센터(☎1350)로 하세요.',
      source: '고용24',
      sourceUrl: 'https://www.work24.go.kr',
    },
  ],
  sources: [
    { name: '고용노동부', url: 'https://www.moel.go.kr' },
    { name: '고용24', url: 'https://www.work24.go.kr' },
  ],
};
