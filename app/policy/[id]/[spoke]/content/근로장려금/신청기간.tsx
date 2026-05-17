import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          2026년 근로장려금 <strong>정기 신청은 5월 1일~6월 1일</strong>입니다.
          놓쳤다면 <strong>6월 2일~12월 1일</strong>에 기한 후 신청이 가능하지만 산정액의 95%만 지급됩니다.
          반기 신청(근로소득자만)은 3월 1일~3월 16일에 별도로 진행됩니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        근로장려금 신청은 반기신청과 정기신청 두 가지입니다.
        신청 유형에 따라 대상자와 지급 시기가 다릅니다.
        아래 일정을 꼭 확인하세요.
      </p>

      <section className="detail-card" id="schedule">
        <h2 className="detail-card-head">2026년 근로장려금 신청 일정 전체</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>신청 유형</th><th>신청 기간</th><th>대상</th><th>지급 시기</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>반기 신청<br />(하반기분)</td>
                <td>2026.3.1. ~ 3.16.</td>
                <td>근로소득자만</td>
                <td>2026년 6월 말</td>
              </tr>
              <tr>
                <td>정기 신청</td>
                <td>2026.5.1. ~ 6.1.</td>
                <td>근로·사업·종교인 모두</td>
                <td>2026년 9월 말</td>
              </tr>
              <tr>
                <td>기한 후 신청</td>
                <td>2026.6.2. ~ 12.1.</td>
                <td>근로·사업·종교인 모두</td>
                <td>신청 후 4개월 이내</td>
              </tr>
            </tbody>
          </table>
          <div className="warning-box" style={{ marginTop: 12 }}>
            <strong>기한 후 신청 주의:</strong> 6월 2일 이후 신청하면 산정액의 <strong>95%만</strong> 지급됩니다.
            5% 손실을 피하려면 6월 1일까지 반드시 신청하세요.
          </div>
        </div>
      </section>

      <section className="detail-card" id="type">
        <h2 className="detail-card-head">소득 유형별 신청 가능 기간</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>소득 유형</th><th>반기 신청(3월)</th><th>정기 신청(5월)</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>근로소득자 (직장인·알바)</td>
                <td>✅ 가능</td>
                <td>✅ 가능</td>
              </tr>
              <tr>
                <td>사업소득자 (자영업·프리랜서)</td>
                <td>❌ 불가</td>
                <td>✅ 가능</td>
              </tr>
              <tr>
                <td>종교인 소득자</td>
                <td>❌ 불가</td>
                <td>✅ 가능</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>핵심:</strong> 사업소득자·프리랜서·종교인은 반기신청(3월)이 불가합니다.
            5월 정기신청만 이용하세요.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="how">
        <h2 className="detail-card-head">신청 방법 3가지</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>① 홈택스:</strong> hometax.go.kr → 장려금·연말정산·전자기부금 → 근로·자녀장려금 신청하기
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>② 손택스(모바일):</strong> 손택스 앱 → 장려금 신청 → 간편 입력
          </div>
          <div className="info-box">
            <strong>③ ARS 전화:</strong> 국세상담센터 1544-9944 → 음성 안내에 따라 신청
          </div>
        </div>
      </section>

      <section className="detail-card" id="late">
        <h2 className="detail-card-head">5월 신청을 놓쳤다면?</h2>
        <div className="detail-card-body">
          <p style={{ lineHeight: 1.8 }}>
            정기 신청 마감(6월 1일)을 넘겼더라도 <strong>12월 1일까지 기한 후 신청</strong>이 가능합니다.
            단, 산정된 장려금의 5%를 차감하고 95%만 지급됩니다.
            기한 후 신청 지급 시기는 신청 후 약 4개월 이내입니다.
          </p>
          <div className="warning-box" style={{ marginTop: 12 }}>
            12월 1일을 넘기면 해당 연도 근로장려금은 <strong>영구적으로 신청 불가</strong>합니다.
            이듬해에 소급 신청되지 않습니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            지급일, 지급액, 조회 방법 등<br />
            근로장려금 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/earned-income-tax-credit" className="btn-cta">
            근로장려금 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 신청기간SpokeContent: SpokeData = {
  h1: '2026년 근로장려금 신청기간 | 정기·반기·기한후 일정과 5% 손실 피하는 법',
  breadcrumb: '신청기간',
  description: '2026년 근로장려금 정기 신청은 5월 1일~6월 1일입니다. 6월 2일~12월 1일은 기한 후 신청 가능하지만 산정액의 95%만 지급(5% 손실). 반기 신청은 3월 1일~3월 16일(근로소득자만). 신청 기간 지나면 12월 1일이 최종 마감.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '2026년 근로장려금 정기 신청 기간은 언제인가요?',
      a: '2026년 5월 1일(금)~6월 1일(월)입니다. 국세청이 공식 발표한 기간으로, 이 기간 내 신청해야 100% 지급받습니다.',
      source: '국세청 근로·자녀장려금 신청기간 및 방법',
      sourceUrl: 'https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?mi=2361&cntntsId=7963',
    },
    {
      q: '5월 신청을 놓쳤는데 어떻게 하나요?',
      a: '6월 2일~12월 1일에 기한 후 신청이 가능합니다. 단, 산정액의 95%만 지급됩니다. 12월 1일 이후에는 신청 자체가 불가합니다.',
      source: '국세청 근로장려금 기한 후 신청 안내',
      sourceUrl: 'https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?mi=2361&cntntsId=7963',
    },
    {
      q: '반기 신청은 언제인가요?',
      a: '2026년 3월 1일~3월 16일입니다. 근로소득자만 신청 가능하며, 지급은 6월 말입니다. 사업소득자·종교인은 반기 신청 불가입니다.',
      source: '국세청 근로장려금 반기신청 안내',
      sourceUrl: 'https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?mi=2361&cntntsId=7963',
    },
    {
      q: '프리랜서도 5월에 신청할 수 있나요?',
      a: '네. 프리랜서(사업소득자)는 반기신청(3월)은 불가하지만 5월 정기신청은 가능합니다. 단, 사업소득 세금 신고를 해야 소득 증명이 됩니다.',
      source: '삼쩜삼 2026 근로장려금 안내',
      sourceUrl: 'https://blog.3o3.co.kr/2026_work_incentives',
    },
    {
      q: '정기 신청과 반기 신청을 동시에 할 수 있나요?',
      a: '근로소득자가 3월에 반기신청을 했다면 5월 정기신청은 하지 않아도 됩니다. 반기신청자는 자동으로 정기 심사 대상이 됩니다.',
      source: '국세청 근로장려금 안내',
      sourceUrl: 'https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?mi=2361&cntntsId=7963',
    },
  ],
  sources: [
    { name: '국세청 근로·자녀장려금 신청기간 및 방법', url: 'https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?mi=2361&cntntsId=7963' },
    { name: '국세청 공식 근로장려금 안내', url: 'https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?mi=2361' },
  ],
};
