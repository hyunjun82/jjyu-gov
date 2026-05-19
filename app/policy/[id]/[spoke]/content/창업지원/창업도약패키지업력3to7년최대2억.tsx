import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          창업도약패키지는 <strong>업력 3-7년 창업기업</strong>을 대상으로
          <strong>최대 2억원(평균 1억 2,000만원)</strong>의 사업화 자금을 지원합니다.
          일반형 외에 <strong>재도전형</strong>(폐업 후 재창업 7년 이내, 평균 6,700만원)과
          <strong>딥테크형</strong>도 운영됩니다.
          K-스타트업(k-startup.go.kr)에서 신청하며, 선정 후 협약을 거쳐 단계별로 지급됩니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        창업도약패키지는 초기 창업 단계를 넘어 성장 도약이 필요한 기업을 위한 프로그램입니다.
        단순 자금 지급이 아니라 민간 투자사 연계, 글로벌 진출 지원, 전문 멘토링을 함께 제공하여
        기업의 실질적인 성장을 돕습니다. 재도전형은 실패 경험이 있는 창업자의 재기를 지원합니다.
      </p>

      <section className="detail-card" id="type-table">
        <h2 className="detail-card-head">창업도약패키지 유형별 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>구분</th><th>일반형</th><th>재도전형</th><th>딥테크형</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>대상</strong></td>
                <td>업력 3-7년 창업기업</td>
                <td>폐업 후 재창업 7년 이내</td>
                <td>딥테크 분야 창업기업</td>
              </tr>
              <tr>
                <td><strong>최대 지원금</strong></td>
                <td>2억원</td>
                <td>1억원</td>
                <td>3억원</td>
              </tr>
              <tr>
                <td><strong>평균 지원금</strong></td>
                <td>1억 2,000만원</td>
                <td>6,700만원</td>
                <td>공고별 상이</td>
              </tr>
              <tr>
                <td><strong>신청 채널</strong></td>
                <td colSpan={3}>K-스타트업(k-startup.go.kr)</td>
              </tr>
              <tr>
                <td><strong>투자 연계</strong></td>
                <td>가능</td>
                <td>가능</td>
                <td>가능</td>
              </tr>
              <tr>
                <td><strong>소관 부처</strong></td>
                <td colSpan={3}>중소벤처기업부</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="apply-process">
        <h2 className="detail-card-head">신청 및 지급 절차</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>① 공고 확인:</strong> K-스타트업(k-startup.go.kr) → 지원사업 공고 → 창업도약패키지 검색 → 해당 연도 공고 확인. 보통 연초(1~3월) 공고.
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>② 사업계획서 제출:</strong> 온라인 신청 시 사업계획서 첨부 필수. 현재 매출, 성장 계획, 자금 사용 계획, 투자 유치 현황 등 포함.
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>③ 심사 및 협약:</strong> 서류 심사 → 발표 평가 → 최종 선정 → 협약 체결 → 1차 자금 지급.
          </div>
          <div className="info-box">
            <strong>④ 단계별 지급:</strong> 협약 후 1차 지급(약 50%), 중간 점검 통과 후 2차 지급(나머지). 정산 보고 및 성과 점검 필수.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            예비창업패키지, 초기창업패키지, 청년창업사관학교까지<br />
            창업지원 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/startup-support" className="btn-cta">창업지원 전체 정보 보기 →</a>
        </div>
      </section>
    </>
  );
}

export const 창업지원창업도약패키지업력3to7년최대2억SpokeContent: SpokeData = {
  h1: '창업도약패키지 2026, 업력 3-7년 기업 최대 2억원 신청법',
  breadcrumb: '창업도약패키지업력3to7년최대2억',
  description:
    '창업도약패키지: 업력 3-7년 창업기업, 최대 2억원(평균 1.2억원). 재도전형(폐업 후 재창업 7년, 평균 6,700만원), 딥테크형(최대 3억원, 평균 1.7억원) 운영. K-스타트업 신청, 민간 투자 연계 가능.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '업력 3년 미만 기업도 창업도약패키지를 신청할 수 있나요?',
      a: '일반형은 업력 3년 이상~7년 이하가 기준입니다. 업력 3년 미만이라면 초기창업패키지(3년 이내)를 신청하세요.',
      source: '중소벤처기업부',
      sourceUrl: 'https://www.mss.go.kr',
    },
    {
      q: '재도전형은 폐업 후 얼마 만에 신청해야 하나요?',
      a: '재창업 후 7년 이내이면 신청 가능합니다. 폐업일이 아닌 재창업(사업자 등록) 후 7년을 기준으로 하므로, 재창업 시점을 기준으로 자격을 확인하세요.',
      source: '중소벤처기업부',
      sourceUrl: 'https://www.mss.go.kr',
    },
    {
      q: '창업도약패키지와 다른 정부 지원금을 동시에 받을 수 있나요?',
      a: '다른 정부 지원사업과 동시 수행은 원칙적으로 제한될 수 있습니다. 공고에서 중복 수혜 가능 여부를 반드시 확인하세요. 일부 사업은 병행 허용하지만, 동일 비목에 대한 이중 지급은 불가합니다.',
      source: '중소벤처기업부',
      sourceUrl: 'https://www.mss.go.kr',
    },
    {
      q: '민간 투자 연계는 어떻게 이루어지나요?',
      a: '선정 기업에 대해 연계 투자사(VC, 엑셀러레이터 등)가 투자 심사를 진행합니다. 투자가 결정되면 정부 지원금에 추가하여 민간 투자금이 유입됩니다. 투자 연계가 의무는 아니며, 기업 상황에 따라 진행됩니다.',
      source: '중소벤처기업부',
      sourceUrl: 'https://www.mss.go.kr',
    },
    {
      q: '딥테크형은 어떤 분야가 해당되나요?',
      a: '딥테크형은 AI·빅데이터, 로봇, 바이오·헬스, 미래모빌리티, 친환경·에너지 등 딥테크 5대 분야 기술 기반 창업기업이 대상입니다(최대 3억원, 평균 1.7억원). 해당 연도 공고에서 지원 분야를 상세히 확인하세요.',
      source: '중소벤처기업부',
      sourceUrl: 'https://www.mss.go.kr',
    },
  ],
  sources: [
    { name: '중소벤처기업부 창업도약패키지', url: 'https://www.mss.go.kr' },
    { name: 'K-스타트업 홈페이지', url: 'https://www.k-startup.go.kr' },
  ],
};
