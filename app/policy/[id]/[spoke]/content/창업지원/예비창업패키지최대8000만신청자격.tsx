import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          예비창업패키지는 <strong>사업자 미등록 예비창업자</strong>를 대상으로
          <strong>최대 8,000만원(평균 5,000만원)</strong>의 사업화 자금을 지원하는 프로그램입니다.
          만 39세 이하(일반형) 미보유 사업자가 신청할 수 있으며,
          시제품 제작, 마케팅, 지식재산권 출원 등 사업화 자금으로 사용 가능합니다.
          매년 1~2월 K-스타트업 홈페이지에서 신청합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        예비창업패키지는 중소벤처기업부가 주관하며, 창업 전 단계에서 받을 수 있는 가장 큰 정부 지원 프로그램 중 하나입니다.
        선발 후 창업을 진행하면서 지원금을 사용하고, 협약 기간 동안 멘토링·교육도 함께 제공됩니다.
        지원금은 용도별 항목에 따라 사용하며 증빙 서류를 제출해야 합니다.
      </p>

      <section className="detail-card" id="eligibility-table">
        <h2 className="detail-card-head">예비창업패키지 신청 자격 및 지원 내용</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>일반형</th><th>특화형(선도대학 등)</th><th>비고</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>연령</strong></td>
                <td>만 39세 이하</td>
                <td>나이 제한 없음(주관기관별 상이)</td>
                <td>신청일 기준</td>
              </tr>
              <tr>
                <td><strong>사업자 여부</strong></td>
                <td>미등록(사업자 없음)</td>
                <td>미등록(사업자 없음)</td>
                <td>사업자 있으면 불가</td>
              </tr>
              <tr>
                <td><strong>최대 지원금</strong></td>
                <td>8,000만원</td>
                <td>주관기관별 상이</td>
                <td>평균 5,000만원</td>
              </tr>
              <tr>
                <td><strong>사용 용도</strong></td>
                <td colSpan={2}>시제품 제작, 마케팅, 지재권 출원, 인건비 등</td>
                <td>증빙 필수</td>
              </tr>
              <tr>
                <td><strong>신청 기간</strong></td>
                <td>매년 1~2월</td>
                <td>주관기관별 공고</td>
                <td>K-스타트업 홈페이지</td>
              </tr>
              <tr>
                <td><strong>소관 부처</strong></td>
                <td colSpan={2}>중소벤처기업부</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="apply-guide">
        <h2 className="detail-card-head">신청 방법 및 주의사항</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>① 신청 채널:</strong> K-스타트업 홈페이지(k-startup.go.kr) → 지원사업 → 예비창업패키지 → 공고 확인 후 온라인 신청
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>② 사업계획서 작성:</strong> 창업 아이템의 문제 정의, 해결책, 시장성, 팀 구성, 자금 사용 계획 등을 포함한 사업계획서 필수 제출. 평가의 핵심 요소.
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>③ 발표 평가:</strong> 서류 심사 통과 후 발표 심사(IR 발표) 진행. 심사위원 앞에서 사업 아이템 발표.
          </div>
          <div className="info-box">
            <strong>④ 주의:</strong> 선발 후 협약 기간(보통 7~10개월) 내에 사업자 등록 및 지원금 사용·정산 완료 필수. 용도 외 사용 또는 정산 미비 시 환수.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            초기창업패키지, 창업도약패키지, 청년창업사관학교까지<br />
            창업지원 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/startup-support" className="btn-cta">창업지원 전체 정보 보기 →</a>
        </div>
      </section>
    </>
  );
}

export const 창업지원예비창업패키지최대8000만신청자격SpokeContent: SpokeData = {
  h1: '예비창업패키지 2026 최대 8000만원 사업화 자금 신청 자격',
  breadcrumb: '예비창업패키지최대8000만신청자격',
  description:
    '예비창업패키지: 사업자 미등록 예비창업자, 만 39세 이하(일반형). 최대 8,000만원(평균 5,000만원). 시제품·마케팅·지재권 출원 사업화 자금. 매년 1~2월 K-스타트업 신청.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '이미 부업으로 사업자를 낸 경우도 신청이 안 되나요?',
      a: '사업자 등록이 되어 있으면 예비창업패키지 신청이 불가합니다. 단, 사업자를 폐업한 경우에는 일부 요건 충족 시 신청 가능할 수 있으므로 공고를 확인하세요.',
      source: '중소벤처기업부',
      sourceUrl: 'https://www.mss.go.kr',
    },
    {
      q: '지원금 8,000만원을 모두 받을 수 있나요?',
      a: '8,000만원은 최대 지원 한도이며, 평균 지급액은 약 5,000만원입니다. 사업계획서 평가 점수와 주관기관의 판단에 따라 개인별 지원 금액이 다르게 책정됩니다.',
      source: '중소벤처기업부',
      sourceUrl: 'https://www.mss.go.kr',
    },
    {
      q: '지원금을 인건비로 사용할 수 있나요?',
      a: '네. 창업팀의 인건비(참여 인력 인건비)도 지원금 사용 가능 항목에 포함됩니다. 단, 대표자 본인 인건비는 제한될 수 있으므로 공고의 지원금 사용 지침을 반드시 확인하세요.',
      source: '중소벤처기업부',
      sourceUrl: 'https://www.mss.go.kr',
    },
    {
      q: '선발 후 창업을 안 하면 지원금을 반납해야 하나요?',
      a: '협약에 따라 사업자 등록 및 사업 이행이 의무입니다. 정당한 사유 없이 창업을 하지 않거나 지원금을 용도 외 사용한 경우 환수 조치될 수 있습니다.',
      source: '중소벤처기업부',
      sourceUrl: 'https://www.mss.go.kr',
    },
    {
      q: '예비창업패키지 탈락 후 다시 신청할 수 있나요?',
      a: '네. 탈락 후 다음 해 공고에 재신청할 수 있습니다. 단, 사업자를 등록한 경우에는 더 이상 예비창업패키지 신청이 불가하므로, 사업자 등록 전에 도전하세요.',
      source: '중소벤처기업부',
      sourceUrl: 'https://www.mss.go.kr',
    },
  ],
  sources: [
    { name: '중소벤처기업부 예비창업패키지', url: 'https://www.mss.go.kr' },
    { name: 'K-스타트업 홈페이지', url: 'https://www.k-startup.go.kr' },
  ],
};
