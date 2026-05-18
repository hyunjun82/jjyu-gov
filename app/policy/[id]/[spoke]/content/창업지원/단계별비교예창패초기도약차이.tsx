import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          정부 창업지원은 창업 단계별로 나뉩니다.
          <strong>예비창업패키지</strong>(미창업자, 최대 8,000만원),
          <strong>초기창업패키지</strong>(창업 3년 이내, 최대 1억원),
          <strong>창업도약패키지</strong>(업력 3~7년, 최대 2억원),
          <strong>청년창업사관학교</strong>(만 39세 이하 3년 이내, 최대 1억원).
          중복 신청은 가능하지만 <strong>동시 수행은 불가</strong>합니다.
          각 사업별로 별도 신청이 필요합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        정부 창업지원 사업은 창업자의 성장 단계에 맞춰 단계적으로 설계되어 있습니다.
        예비창업 → 초기 창업(0~3년) → 도약(3~7년)의 순서로 지원 규모가 커집니다.
        어떤 단계에 있든 본인의 업력과 연령을 먼저 확인한 뒤 신청 가능한 사업을 선택해야 합니다.
      </p>

      <section className="detail-card" id="stage-table">
        <h2 className="detail-card-head">정부 창업지원 단계별 핵심 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>사업명</th><th>대상</th><th>최대 지원금</th><th>신청처</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>예비창업패키지</strong></td>
                <td>미창업자 (만 39세 이하)</td>
                <td>8,000만원 (평균 5,000만원)</td>
                <td>K-스타트업</td>
              </tr>
              <tr>
                <td><strong>초기창업패키지</strong></td>
                <td>창업 3년 이내</td>
                <td>1억원 (딥테크 1.5억원)</td>
                <td>K-스타트업</td>
              </tr>
              <tr>
                <td><strong>청년창업사관학교</strong></td>
                <td>만 39세 이하, 창업 3년 이내</td>
                <td>1억원 (평균 7,000만원)</td>
                <td>K-스타트업</td>
              </tr>
              <tr>
                <td><strong>창업도약패키지</strong></td>
                <td>업력 3~7년 창업기업</td>
                <td>2억원 (평균 1.2억원)</td>
                <td>K-스타트업</td>
              </tr>
              <tr>
                <td><strong>재도전형(도약)</strong></td>
                <td>폐업 후 재창업 7년 이내</td>
                <td>1억원 (평균 6,700만원)</td>
                <td>K-스타트업</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="choice-guide">
        <h2 className="detail-card-head">내 상황에 맞는 사업 선택 가이드</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>아직 창업 전이고 만 39세 이하:</strong> 예비창업패키지 또는 청년창업사관학교. 두 곳에 동시 지원 가능하나 동시 수행 불가.
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>창업 후 3년 이내(만 40세 이상 포함):</strong> 초기창업패키지 신청. 연령 제한 없음. 딥테크 분야라면 최대 1.5억원 지원.
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>업력 3~7년 기업:</strong> 창업도약패키지. 가장 큰 규모(최대 2억원). 투자 연계도 가능.
          </div>
          <div className="info-box">
            <strong>한 번 폐업한 경험이 있고 재창업 7년 이내:</strong> 창업도약패키지 재도전형. 실패 이력이 불이익이 아닌 경험으로 평가받는 트랙.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            각 사업별 신청 자격, 지원금, 신청 방법 상세 안내는<br />
            창업지원 전체 정보에서 확인하세요.
          </p>
          <a href="/policy/startup-support" className="btn-cta">창업지원 전체 정보 보기 →</a>
        </div>
      </section>
    </>
  );
}

export const 창업지원단계별비교예창패초기도약차이SpokeContent: SpokeData = {
  h1: '정부 창업지원 단계별 비교, 예창패·초기창업·도약 어떻게 다른가',
  breadcrumb: '단계별비교예창패초기도약차이',
  description:
    '예비창업패키지(미창업, 최대 8,000만원), 초기창업패키지(3년 이내, 최대 1억), 창업도약패키지(3~7년, 최대 2억), 청년창업사관학교(만 39세, 최대 1억) 단계별 비교.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '예비창업패키지와 초기창업패키지를 연속으로 받을 수 있나요?',
      a: '네. 예비창업패키지로 창업한 뒤 업력이 3년 이내라면 초기창업패키지에 다시 신청할 수 있습니다. 단, 동시에 두 사업을 수행하는 것은 불가하며, 이전 사업의 협약이 종료된 후 신청해야 합니다.',
      source: '중소벤처기업부',
      sourceUrl: 'https://www.mss.go.kr',
    },
    {
      q: '동시 신청은 되지만 동시 수행이 안 된다는 게 무슨 뜻인가요?',
      a: '여러 사업에 동시에 지원서를 넣는 것은 가능합니다. 그러나 두 곳 이상에서 동시에 선발되어 협약을 맺고 지원금을 동시에 집행하는 것은 원칙적으로 금지됩니다. 하나를 선택해 협약을 체결해야 합니다.',
      source: '중소벤처기업부',
      sourceUrl: 'https://www.mss.go.kr',
    },
    {
      q: '초기창업패키지의 딥테크형 1.5억원은 누구나 신청할 수 있나요?',
      a: '빅데이터·AI, 로봇, 바이오·헬스, 미래모빌리티, 친환경·에너지 등 딥테크 5대 분야 기술 기반 창업기업을 대상으로 합니다. 일반 업종은 최대 1억원, 딥테크 분야는 최대 1억 5,000만원이 지원됩니다. 해당 연도 공고에서 딥테크 분야 기준을 확인하세요.',
      source: '중소벤처기업부',
      sourceUrl: 'https://www.mss.go.kr',
    },
    {
      q: '만 40세 이상도 신청할 수 있는 사업이 있나요?',
      a: '초기창업패키지와 창업도약패키지는 연령 제한이 없습니다. 예비창업패키지와 청년창업사관학교만 만 39세 이하 제한이 있습니다. 40세 이상도 업력 기준만 맞으면 초기창업패키지·창업도약패키지에 신청 가능합니다.',
      source: '중소벤처기업부',
      sourceUrl: 'https://www.mss.go.kr',
    },
    {
      q: '창업도약패키지까지 받은 후 더 큰 지원 사업이 있나요?',
      a: '창업도약패키지 이후에는 팁스(TIPS), 스케일업 팁스, 도약 팁스 등 민간 주도 투자 연계형 프로그램이 있습니다. 또한 중소기업 정책 자금(융자), R&D 지원 등도 활용할 수 있습니다.',
      source: '중소벤처기업부',
      sourceUrl: 'https://www.mss.go.kr',
    },
  ],
  sources: [
    { name: '중소벤처기업부 창업지원 사업', url: 'https://www.mss.go.kr' },
    { name: 'K-스타트업 홈페이지', url: 'https://www.k-startup.go.kr' },
  ],
};
