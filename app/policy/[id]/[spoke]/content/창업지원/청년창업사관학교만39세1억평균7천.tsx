import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          청년창업사관학교(창업성공패키지)는 <strong>만 39세 이하</strong>,
          창업 <strong>3년 이내</strong>(경험창업자는 7년 이내) 창업기업을 대상으로
          <strong>평균 7,000만원, 최대 1억원</strong>의 사업화 자금을 지원합니다.
          2026년 모집은 <strong>1월 30일~2월 13일</strong>에 진행되었으며,
          총 <strong>113명</strong>(투자형 포함)을 선발합니다.
          소관기관은 <strong>중소벤처기업진흥공단</strong>입니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        청년창업사관학교는 단순 자금 지원을 넘어 전문 코칭, 글로벌 진출 지원, 네트워킹 등 종합 성장 프로그램을 함께 제공합니다.
        선발된 창업자는 약 7~10개월간 사관학교 과정을 이수하며 전담 멘토의 집중 코칭을 받습니다.
        투자형 과정에 선발되면 창업 자금 외에 민간 투자사 투자 연계도 이루어집니다.
      </p>

      <section className="detail-card" id="eligibility-table">
        <h2 className="detail-card-head">청년창업사관학교 2026 지원 요건 및 내용</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>일반형</th><th>경험창업자형</th><th>투자형</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>연령</strong></td>
                <td>만 39세 이하</td>
                <td>만 39세 이하</td>
                <td>만 39세 이하</td>
              </tr>
              <tr>
                <td><strong>업력</strong></td>
                <td>창업 3년 이내</td>
                <td>창업 7년 이내 (재창업 포함)</td>
                <td>창업 7년 이내</td>
              </tr>
              <tr>
                <td><strong>지원금</strong></td>
                <td>평균 7,000만원</td>
                <td>평균 7,000만원</td>
                <td>최대 1억원 + 투자 연계</td>
              </tr>
              <tr>
                <td><strong>2026 모집 기간</strong></td>
                <td colSpan={3}>2026.01.30 ~ 02.13</td>
              </tr>
              <tr>
                <td><strong>모집 규모</strong></td>
                <td colSpan={3}>113명 (투자형 포함)</td>
              </tr>
              <tr>
                <td><strong>소관기관</strong></td>
                <td colSpan={3}>중소벤처기업진흥공단</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="program-detail">
        <h2 className="detail-card-head">청년창업사관학교 프로그램 구성</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>사업화 자금 지원:</strong> 시제품 제작, 마케팅, 인건비, 지재권 출원 등 사업화 필요 비용 지원. 최대 1억원(평균 7,000만원).
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>전문 코칭 및 멘토링:</strong> 전담 멘토 배정, 사업계획 개선, IR 준비, 네트워킹 기회 제공. 약 7~10개월 집중 과정.
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>글로벌 진출 지원:</strong> 해외 전시회 참가, 글로벌 시장 진출 컨설팅, 해외 네트워크 연결 지원.
          </div>
          <div className="info-box">
            <strong>투자 연계(투자형):</strong> 민간 투자사와 연계하여 사업화 자금 외 추가 투자 유치 기회 제공. 투자형 선발자에 한함.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            예비창업패키지, 초기창업패키지, 창업도약패키지까지<br />
            창업지원 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/startup-support" className="btn-cta">창업지원 전체 정보 보기 →</a>
        </div>
      </section>
    </>
  );
}

export const 창업지원청년창업사관학교만39세1억평균7천SpokeContent: SpokeData = {
  h1: '청년창업사관학교 2026, 만 39세 이하 평균 7000만원 최대 1억원',
  breadcrumb: '청년창업사관학교만39세1억평균7천',
  description:
    '청년창업사관학교(창업성공패키지): 만 39세 이하, 창업 3년 이내(경험창업자 7년). 평균 7,000만원, 최대 1억원. 2026년 1월 30일~2월 13일 모집. 113명 선발. 중소벤처기업진흥공단.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '청년창업사관학교와 예비창업패키지를 동시에 신청할 수 있나요?',
      a: '두 사업에 동시 신청은 가능하나, 동시에 선발되어 두 사업을 동시에 수행하는 것은 원칙적으로 불가합니다. 하나를 선택하여 협약을 체결해야 합니다.',
      source: '중소벤처기업부',
      sourceUrl: 'https://www.mss.go.kr',
    },
    {
      q: '2026년 모집 기간이 지났으면 올해는 신청이 불가한가요?',
      a: '2026년 1차 모집(1월 30일~2월 13일)이 지난 경우, 2차 추가 모집이 있을 수 있습니다. K-스타트업 홈페이지에서 추가 공고를 확인하세요.',
      source: '중소벤처기업부',
      sourceUrl: 'https://www.mss.go.kr',
    },
    {
      q: '청년창업사관학교 과정 중 사업 실패 시 지원금을 반납해야 하나요?',
      a: '사업 실패 자체가 환수 사유는 아닙니다. 다만 지원금을 용도 외 사용하거나 허위 서류를 제출한 경우, 또는 협약 의무를 이행하지 않은 경우에는 환수될 수 있습니다.',
      source: '중소벤처기업부',
      sourceUrl: 'https://www.mss.go.kr',
    },
    {
      q: '만 39세는 신청 당시 기준인가요, 사업 수행 기간 기준인가요?',
      a: '신청일(접수 마감일) 기준으로 만 39세 이하이면 됩니다. 사업 수행 중에 40세가 되더라도 선발 취소 사유가 되지 않습니다.',
      source: '중소벤처기업부',
      sourceUrl: 'https://www.mss.go.kr',
    },
    {
      q: '글로벌 진출 지원은 모든 선발자가 받을 수 있나요?',
      a: '글로벌 진출 지원은 희망자를 대상으로 별도 신청 후 지원하는 방식으로 운영됩니다. 모든 선발자에게 의무적으로 제공되는 것은 아니며, 기업의 글로벌 진출 계획과 역량을 고려하여 지원 기회가 주어집니다.',
      source: '중소벤처기업부',
      sourceUrl: 'https://www.mss.go.kr',
    },
  ],
  sources: [
    { name: '중소벤처기업부 청년창업사관학교', url: 'https://www.mss.go.kr' },
    { name: 'K-스타트업 홈페이지', url: 'https://www.k-startup.go.kr' },
  ],
};
