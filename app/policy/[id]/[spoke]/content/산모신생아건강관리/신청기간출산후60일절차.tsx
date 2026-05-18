import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          산모신생아 건강관리 지원 신청은 <strong>출산 예정일 40일 전부터</strong> 가능하며,
          늦어도 <strong>출산 후 60일 이내</strong>에 완료해야 합니다.
          서비스는 신청 승인 후 출산일로부터 <strong>90일 이내</strong>에 이용해야 합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        신청 기한을 놓치면 서비스를 받을 수 없으므로, 출산 전에 미리 신청하는 것을 권장합니다.
      </p>

      <section className="detail-card" id="period">
        <h2 className="detail-card-head">신청 기간 요약</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>기준</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>신청 시작</strong></td><td>출산 예정일 40일 전부터</td></tr>
              <tr><td><strong>신청 마감</strong></td><td>출산 후 60일 이내</td></tr>
              <tr><td><strong>서비스 이용 기한</strong></td><td>출산일로부터 90일 이내</td></tr>
              <tr><td><strong>권장 신청 시점</strong></td><td>출산 예정일 1~2개월 전 (서비스 제공자 연결 여유 확보)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="process">
        <h2 className="detail-card-head">신청 절차</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>1단계:</strong> 복지로(bokjiro.go.kr) 또는 주민센터에서 신청서 제출
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>2단계:</strong> 소득 기준 심사 (건강보험료 기준)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>3단계:</strong> 바우처 카드 발급 (국민행복카드로 통합 발급)
          </div>
          <div className="info-box">
            <strong>4단계:</strong> 제공 기관 선택 후 서비스 이용 (출산 후 90일 이내)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="docs">
        <h2 className="detail-card-head">필요 서류</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>출산 전 신청:</strong> 산모수첩(임신확인서), 신분증, 건강보험증
          </div>
          <div className="info-box">
            <strong>출산 후 신청:</strong> 출생증명서, 신분증, 건강보험증
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            본인부담금, 쌍둥이 예외 지원, 산후도우미 비용 비교까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/maternal-newborn-care" className="btn-cta">
            산모신생아 건강관리 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 산모신생아건강관리신청기간출산후60일절차SpokeContent: SpokeData = {
  h1: '산모신생아 건강관리 신청 기간, 출산 전 40일부터 출산 후 60일 이내',
  breadcrumb: '신청기간출산후60일절차',
  description:
    '산모신생아 건강관리 신청 기간: 출산 예정일 40일 전~출산 후 60일 이내. 서비스 이용은 출산일로부터 90일 이내. 복지로(bokjiro.go.kr) 또는 주민센터 신청. 국민행복카드 바우처로 지급.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '출산 후 60일이 지나면 신청이 불가한가요?',
      a: '원칙적으로 출산 후 60일 이내에 신청해야 합니다. 기한을 초과하면 지원을 받을 수 없으므로 출산 전 미리 신청하는 것을 권장합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.socialservice.or.kr',
    },
    {
      q: '출산 예정일 전에 미리 신청해도 서비스를 받을 수 있나요?',
      a: '출산 예정일 40일 전부터 신청 가능합니다. 바우처는 출산 후 활성화되므로 출산 후 제공 기관과 일정을 조율해 이용하면 됩니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.socialservice.or.kr',
    },
    {
      q: '산후조리원 입소 중에 서비스를 이용할 수 있나요?',
      a: '산후조리원 재원 중에는 서비스 이용이 불가합니다. 귀가 후 90일 이내에 이용해야 합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.socialservice.or.kr',
    },
    {
      q: '신청 후 제공 기관은 어떻게 선택하나요?',
      a: '사회서비스 전자바우처(socialservice.or.kr)에서 가까운 제공 기관을 검색·선택할 수 있습니다. 직접 연락해 일정을 협의하세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.socialservice.or.kr',
    },
    {
      q: '유산·사산의 경우에도 신청할 수 있나요?',
      a: '임신 기간 16주 이상 유산·사산의 경우에도 지원 대상에 포함될 수 있습니다. 주민센터 또는 사회서비스 포털에 문의하세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.socialservice.or.kr',
    },
  ],
  sources: [
    { name: '사회서비스 전자바우처', url: 'https://www.socialservice.or.kr' },
    { name: '복지로', url: 'https://www.bokjiro.go.kr' },
    { name: '보건복지부', url: 'https://www.mohw.go.kr' },
  ],
};
