import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          출산육아기 대체인력 지원금은 육아휴직 중인 직원 대신
          <strong>대체인력을 채용한 사업주</strong>에게 지급됩니다.
          대체인력 채용 시 <strong>월 최대 120만원</strong>, 인수인계 기간에는
          <strong>월 최대 120만원</strong>이 별도 지원됩니다.
          지원 기간은 육아휴직 기간 전체(최대 1년)입니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "육아휴직 직원 대신 새 직원을 뽑으면 지원금을 받을 수 있다고 하던데, 얼마나 되나요?"
        대체인력 지원금 금액과 조건을 정리했습니다.
      </p>

      <section className="detail-card" id="amount">
        <h2 className="detail-card-head">육아휴직 대체인력 채용 사업주 지원금 | 월 최대 120만원 조건과 절차</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>지원 항목</th><th>지원 금액</th><th>지원 기간</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>대체인력 채용 지원</strong></td>
                <td>월 최대 120만원</td>
                <td>육아휴직 기간 (최대 12개월)</td>
              </tr>
              <tr>
                <td><strong>인수인계 기간 지원</strong></td>
                <td>월 최대 120만원</td>
                <td>최대 2개월 (휴직 전·후 각 1개월)</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            인수인계 기간은 육아휴직 시작 전 1개월 + 복직 후 1개월을 합산해 최대 2개월입니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="conditions">
        <h2 className="detail-card-head">대체인력 지원금 수급 조건</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>① 사업주 요건:</strong> 우선지원대상기업(중소기업) 사업주
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>② 대체인력 채용:</strong> 육아휴직 시작일 30일 전부터 종료 후 30일 이내에 신규 채용
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>③ 고용보험 가입:</strong> 대체인력이 고용보험 피보험자여야 함
          </div>
          <div className="info-box">
            <strong>④ 동일 업무 배치:</strong> 대체인력이 육아휴직자와 동일·유사 업무에 종사해야 함
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="apply">
        <h2 className="detail-card-head">신청 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>신청처:</strong> 고용24(work24.go.kr) → 기업 서비스 → 대체인력지원금 신청
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>신청 기한:</strong> 육아휴직 종료일로부터 12개월 이내
          </div>
          <div className="info-box">
            <strong>문의:</strong> 고용노동부 고객상담센터 ☎1350
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            사업주 신청 방법, 복직 후 지급 조건 등<br />
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

export const 출산장려금대체인력SpokeContent: SpokeData = {
  h1: '육아휴직 대체인력 채용 사업주 지원금 | 월 최대 120만원 조건과 절차',
  breadcrumb: '대체인력',
  description:
    '출산육아기 대체인력지원금: 육아휴직 대신 신규 채용 시 월 최대 120만원 지원. 인수인계 기간 추가 최대 2개월 지원. 우선지원대상기업(중소기업) 사업주 대상. 고용24(work24.go.kr) 신청.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '대체인력 지원금은 얼마나 받을 수 있나요?',
      a: '대체인력 채용 시 월 최대 120만원이 지원되며, 인수인계 기간(최대 2개월)에도 월 최대 120만원이 별도 지원됩니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '인수인계 기간 지원이란 무엇인가요?',
      a: '육아휴직 시작 전 1개월과 복직 후 1개월, 합산 최대 2개월 동안 업무 인수인계를 위해 대체인력을 유지하는 기간에 월 최대 120만원을 지원합니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '대체인력은 언제까지 채용해야 하나요?',
      a: '육아휴직 시작일 30일 전부터 종료 후 30일 이내에 신규 채용해야 합니다. 기존 직원에게 업무를 맡기는 경우는 대체인력으로 인정되지 않습니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '대기업도 대체인력 지원금을 받을 수 있나요?',
      a: '대체인력지원금은 우선지원대상기업(중소기업)에 한해 지원됩니다. 제조업 500인 이하, 그 외 업종 300인 이하인 사업장이 해당합니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '출산육아기 고용안정장려금과 대체인력지원금을 동시에 받을 수 있나요?',
      a: '네. 두 지원금은 별도 제도로, 요건을 갖추면 동시에 수령할 수 있습니다. 고용24에서 각각 신청하면 됩니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
  ],
  sources: [
    { name: '고용노동부', url: 'https://www.moel.go.kr' },
    { name: '고용24', url: 'https://www.work24.go.kr' },
  ],
};
