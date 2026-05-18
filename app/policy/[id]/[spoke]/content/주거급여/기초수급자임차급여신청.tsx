import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          기초생활수급자 중 <strong>임차(월세·전세) 거주자</strong>라면
          주거급여 임차급여를 신청할 수 있습니다.
          <strong>복지로(bokjiro.go.kr)</strong> 또는 주민센터에서 신청하며,
          지역·가구원 수에 따라 매달 정해진 임차급여를 받습니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        기초수급자로 이미 선정됐다면 주거급여 임차급여는 별도로 신청해야 합니다.
        신청 방법과 지급 기준을 확인하세요.
      </p>

      <section className="detail-card" id="who">
        <h2 className="detail-card-head">신청 대상</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>기준</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>수급 자격</strong></td><td>기초생활수급자 또는 중위소득 48% 이하</td></tr>
              <tr><td><strong>거주 형태</strong></td><td>임차(월세·전세·보증부 월세) 거주자</td></tr>
              <tr><td><strong>부양의무자</strong></td><td>기준 미적용 (폐지)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="amount">
        <h2 className="detail-card-head">지역별·가구별 기준임대료 (2026년)</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>급지</th><th>1인</th><th>2인</th><th>3인</th><th>4인</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>서울(1급지)</strong></td><td>341,000원</td><td>382,000원</td><td>455,000원</td><td>527,000원</td></tr>
              <tr><td><strong>경기·인천(2급지)</strong></td><td>268,000원</td><td>300,000원</td><td>358,000원</td><td>414,000원</td></tr>
              <tr><td><strong>광역시 등(3급지)</strong></td><td>216,000원</td><td>242,000원</td><td>289,000원</td><td>334,000원</td></tr>
              <tr><td><strong>그 외(4급지)</strong></td><td>188,000원</td><td>211,000원</td><td>251,000원</td><td>290,000원</td></tr>
            </tbody>
          </table>
          <p style={{ fontSize: 13, color: '#8B95A1', marginTop: 8 }}>※ 실제 임차료가 기준임대료보다 낮으면 실제 임차료 지급</p>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="apply">
        <h2 className="detail-card-head">신청 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>온라인:</strong> 복지로(bokjiro.go.kr) → 서비스 신청 → 주거급여
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>방문:</strong> 주민등록지 읍·면·동 주민센터 (임대차계약서 지참)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>준비 서류:</strong> 임대차계약서, 신분증, 통장 사본
          </div>
          <div className="info-box">
            <strong>문의:</strong> 주거급여 콜센터 1600-0777
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            자가 수선유지급여, 1인 가구 기준, 중위소득 48% 기준까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/housing-benefit" className="btn-cta">
            주거급여 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 주거급여기초수급자임차급여신청SpokeContent: SpokeData = {
  h1: '월세 내고 있는 기초수급자라면 주거급여 임차급여 신청 방법과 조건',
  breadcrumb: '기초수급자임차급여신청',
  description:
    '주거급여 임차급여: 기초수급자·중위소득 48% 이하 임차 거주자. 서울 341,000원·경기인천 268,000원·광역시 216,000원·그 외 188,000원(1인). 복지로(bokjiro.go.kr) 신청, 부양의무자 기준 없음.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '기초수급자이지만 주거급여를 따로 신청해야 하나요?',
      a: '주거급여는 기초생활보장 급여 중 하나이지만, 수급자로 선정될 때 자동 포함되는 경우가 대부분입니다. 확인이 필요하다면 주민센터 또는 복지로에서 조회하세요.',
      source: '국토교통부',
      sourceUrl: 'https://www.molit.go.kr',
    },
    {
      q: '친척 소유 집에 살고 있는데 임대차계약이 없으면 어떻게 하나요?',
      a: '임대차계약서가 없는 경우 임차급여 지급이 어려울 수 있습니다. 정확한 상황은 주민센터 또는 주거급여 콜센터(1600-0777)에 문의하세요.',
      source: '국토교통부',
      sourceUrl: 'https://www.molit.go.kr',
    },
    {
      q: '공공임대아파트에 거주 중인데도 신청할 수 있나요?',
      a: '공공임대주택 거주자도 임차급여 신청이 가능합니다. 단, 임대료가 기준임대료보다 낮으면 실제 임대료 기준으로 지급됩니다.',
      source: '국토교통부',
      sourceUrl: 'https://www.molit.go.kr',
    },
    {
      q: '임차급여는 집주인에게 직접 주나요, 제 통장으로 받나요?',
      a: '임차급여는 수급자 본인의 통장으로 지급됩니다. 받은 급여로 직접 임차료를 납부하는 방식입니다.',
      source: '국토교통부',
      sourceUrl: 'https://www.molit.go.kr',
    },
    {
      q: '가구원 수가 변경되면 급여액도 바뀌나요?',
      a: '가구원 수 변동 시 주민센터에 신고해야 합니다. 변경된 가구원 수에 따라 기준임대료가 재산정되어 지급액이 조정됩니다.',
      source: '국토교통부',
      sourceUrl: 'https://www.molit.go.kr',
    },
  ],
  sources: [
    { name: '국토교통부 주거급여', url: 'https://www.molit.go.kr' },
    { name: '복지로', url: 'https://www.bokjiro.go.kr' },
    { name: '주거급여 콜센터', url: 'https://www.hb.go.kr' },
  ],
};
