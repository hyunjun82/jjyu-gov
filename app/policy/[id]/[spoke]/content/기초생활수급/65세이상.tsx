import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          65세 이상 어르신도 기초생활수급자 신청이 가능합니다.
          소득인정액이 급여별 선정기준 이하면 수급 자격이 됩니다.
          단, 65세가 되면 <strong>기초연금</strong>을 추가로 받을 수 있으며,
          기초연금 수령액은 소득인정액 계산에 포함되어 생계급여 지급액에 영향을 줄 수 있습니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "어르신 기초수급자 조건이 따로 있나요?" 기본 조건은 같지만 65세 이후 기초연금과의 관계를
        반드시 확인해야 합니다. 2026년 기준으로 정리했습니다.
      </p>

      <section className="detail-card" id="conditions">
        <h2 className="detail-card-head">2026년 기초생활수급자 조건 | 65세 이상 어르신 소득인정액 계산 방법</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>급여 종류</th><th>소득인정액 기준 (1인)</th><th>비고</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>생계급여</td>
                <td>820,556원 이하</td>
                <td>중위소득 32%</td>
              </tr>
              <tr>
                <td>의료급여</td>
                <td>1,025,695원 이하</td>
                <td>중위소득 40%</td>
              </tr>
              <tr>
                <td>주거급여</td>
                <td>1,230,834원 이하</td>
                <td>중위소득 48%</td>
              </tr>
              <tr>
                <td>교육급여</td>
                <td>1,282,119원 이하</td>
                <td>중위소득 50%</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            65세 이상이라도 별도 특례는 없습니다. 소득인정액이 위 기준 이하면 동일하게 신청 가능합니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="pension">
        <h2 className="detail-card-head">65세 이후 기초연금과의 관계 — 반드시 확인</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>기초연금 중복 수령 가능:</strong> 기초생활수급자가 65세가 되면
            기초연금(2026년 최대 34만 3,510원)도 신청할 수 있습니다.
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>생계급여에 영향:</strong> 기초연금은 소득으로 인정되어 소득인정액에 포함됩니다.
            기초연금을 받으면 생계급여 지급액이 그만큼 줄어들 수 있습니다.
          </div>
          <div className="warning-box">
            <strong>신청 전 확인 필요:</strong> 기초연금 신청 시 생계급여 총액이 어떻게 변하는지
            주민센터 또는 보건복지상담센터(☎129)에서 먼저 확인하세요.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="income-calc">
        <h2 className="detail-card-head">65세 이상 소득인정액 계산 — 국민연금도 소득으로 포함</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>소득 항목</th><th>소득인정액 포함 여부</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>국민연금 수령액</td>
                <td><strong>포함 (이전소득)</strong></td>
              </tr>
              <tr>
                <td>기초연금 수령액</td>
                <td><strong>포함 (이전소득)</strong></td>
              </tr>
              <tr>
                <td>근로소득 (노인 일자리 등)</td>
                <td>포함 (일부 공제 적용)</td>
              </tr>
              <tr>
                <td>부동산 임대소득</td>
                <td>포함 (재산소득)</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            노인 일자리 근로소득은 일부 공제가 적용될 수 있습니다.
            정확한 소득인정액은 주민센터에서 산정해드립니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            소득 기준, 탈락 조건, 급여 종류 등<br />
            기초생활수급 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/basic-livelihood-allowance" className="btn-cta">
            기초생활수급 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 기초수급65세이상SpokeContent: SpokeData = {
  h1: '2026년 기초생활수급자 조건 | 65세 이상 어르신 소득인정액 계산 방법',
  breadcrumb: '65세 이상',
  description:
    '65세 이상도 소득인정액이 선정기준 이하면 기초수급 신청 가능. 생계급여 1인 기준 820,556원 이하. 65세 이후 기초연금(최대 34만원)은 소득으로 포함되어 생계급여 지급액을 줄일 수 있습니다. 국민연금도 이전소득으로 소득인정액에 포함.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '65세 이상 어르신도 기초수급자 신청을 할 수 있나요?',
      a: '네, 신청 가능합니다. 나이 제한은 없으며 소득인정액이 급여별 선정기준 이하면 수급 자격이 됩니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '기초연금을 받으면 기초수급에서 탈락하나요?',
      a: '탈락하지는 않지만, 기초연금 수령액이 소득인정액에 포함되어 생계급여 지급액이 줄어들 수 있습니다. 총액이 어떻게 변하는지 주민센터에서 먼저 확인하세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '국민연금을 받는데 기초수급도 받을 수 있나요?',
      a: '국민연금 수령액은 이전소득으로 소득인정액에 포함됩니다. 국민연금을 포함한 소득인정액이 선정기준 이하면 기초수급 수령이 가능합니다.',
      source: '보건복지부 조사내용',
      sourceUrl: 'https://www.mohw.go.kr/menu.es?mid=a10708010400',
    },
    {
      q: '노인 일자리 근로소득도 소득에 포함되나요?',
      a: '포함되지만 일부 공제가 적용될 수 있습니다. 정확한 소득인정액 산정은 주민센터 또는 보건복지상담센터(☎129)에서 확인하세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '어디서 신청하나요?',
      a: '거주지 읍·면·동 주민센터(행정복지센터) 방문 또는 복지로(bokjiro.go.kr) 온라인 신청. 보건복지상담센터 ☎129로 전화 상담도 가능합니다.',
      source: '보건복지부 신청방법',
      sourceUrl: 'https://www.mohw.go.kr/menu.es?mid=a10708010200',
    },
  ],
  sources: [
    { name: '보건복지부 수급자선정기준', url: 'https://www.mohw.go.kr/menu.es?mid=a10708010300' },
    { name: '복지로', url: 'https://www.bokjiro.go.kr' },
  ],
};
