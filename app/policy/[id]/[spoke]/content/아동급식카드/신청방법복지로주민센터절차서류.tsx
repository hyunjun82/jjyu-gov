import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          아동급식카드는 <strong>주민센터(읍·면·동) 방문</strong> 또는
          <strong>복지로(bokjiro.go.kr) 온라인</strong>으로 신청할 수 있습니다.
          연중 상시 신청이 가능하며, 자격 확인 후 카드를 발급받아 바로 사용할 수 있습니다.
        </p>
      </div>

      <section className="detail-card" id="channel">
        <h2 className="detail-card-head">신청 채널 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>채널</th><th>방법</th><th>비고</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>주민센터</strong></td><td>읍·면·동 행정복지센터 방문 신청</td><td>상담·서류 확인 편리</td></tr>
              <tr><td><strong>복지로</strong></td><td>bokjiro.go.kr 온라인 신청</td><td>공동인증서 필요</td></tr>
              <tr><td><strong>정부24</strong></td><td>gov.kr에서 신청 가능</td><td>일부 지자체 연동</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="step">
        <h2 className="detail-card-head">신청 절차</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>1단계:</strong> 주민센터 방문 또는 복지로 온라인 신청
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>2단계:</strong> 담당자 소득·자격 조회 및 결식 우려 판단
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>3단계:</strong> 아동급식카드 발급 (지역별 BC카드·지역사랑상품권 등)
          </div>
          <div className="info-box">
            <strong>4단계:</strong> 지정 가맹점에서 사용 (편의점·식당 등)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="docs">
        <h2 className="detail-card-head">필요 서류</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>신청인 신분증:</strong> 보호자의 주민등록증 또는 운전면허증
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>가족관계 확인:</strong> 가족관계증명서 (주민센터 전산 확인으로 대체 가능)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>소득 증빙:</strong> 건강보험료 납부 확인서 등 (수급자격 자동 확인 가능 시 생략)
          </div>
          <div className="info-box">
            <strong>기타:</strong> 결식 우려 소명 자료 (해당 시) — 담당자 안내에 따름
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            지원대상, 사용처, 방학 중 지원 안내까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/child-meal-card" className="btn-cta">
            아동급식카드 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 아동급식카드신청방법복지로주민센터절차서류SpokeContent: SpokeData = {
  h1: '아동급식카드 신청방법, 복지로·주민센터 신청 절차와 서류 안내',
  breadcrumb: '신청방법복지로주민센터절차서류',
  description:
    '아동급식카드 신청: 주민센터 방문·복지로 온라인·정부24. 연중 상시 신청. 서류: 신분증·가족관계증명서. 자격 확인 후 카드 발급 → 가맹점 즉시 사용.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '신청 후 카드 발급까지 얼마나 걸리나요?',
      a: '자격 확인 후 보통 1~2주 이내에 카드가 발급됩니다. 지역에 따라 다소 차이가 있으니 주민센터에서 확인하세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '복지로에서 신청하면 카드는 어떻게 받나요?',
      a: '온라인 신청 후 자격 확인이 완료되면 담당 공무원이 연락을 드리며, 카드 수령 방법(우편 또는 직접 수령)을 안내합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '다른 지역으로 이사하면 다시 신청해야 하나요?',
      a: '주소지가 변경되면 새로운 주소지 관할 주민센터에 변경 신고를 해야 합니다. 카드도 지역에 따라 재발급이 필요할 수 있습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '소득 증빙 서류를 준비하기 어려운데 어떻게 하나요?',
      a: '주민센터에서는 사회보장정보시스템으로 소득·재산을 전산 조회합니다. 별도 서류가 필요하지 않은 경우도 많으니 먼저 방문해서 상담받으세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '카드를 잃어버리면 재발급받을 수 있나요?',
      a: '카드 분실 시 주민센터 또는 해당 카드사에 연락하여 재발급을 신청할 수 있습니다. 재발급 시까지 사용이 중단될 수 있으니 빠르게 신고하세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
  ],
  sources: [
    { name: '정부24 아동급식카드', url: 'https://www.gov.kr/portal/service/serviceInfo/542000000512' },
    { name: '복지로 아동급식 신청', url: 'https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveTWAT52011M.do?wlfareInfoId=WLF00003999' },
  ],
};
