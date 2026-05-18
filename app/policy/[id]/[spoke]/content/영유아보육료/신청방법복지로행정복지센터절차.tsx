import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          영유아보육료는 <strong>복지로(bokjiro.go.kr)</strong> 온라인 또는
          <strong>거주지 읍·면·동 행정복지센터</strong> 방문으로 신청합니다.
          신청 후 자격 확인 과정을 거쳐 다음 달부터 보육료가 어린이집에 직접 지급됩니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        어린이집에 입소하기 전에 신청해 두는 것이 좋습니다.
        신청 전에 아이행복카드(국민행복카드) 발급도 함께 준비하면 편리합니다.
        문의는 보육상담 ☎1566-3232 또는 복지로 ☎129로 합니다.
      </p>

      <section className="detail-card" id="steps">
        <h2 className="detail-card-head">신청 절차</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>단계</th><th>내용</th><th>방법</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>1단계</strong></td><td>어린이집 입소 결정</td><td>어린이집 정보공개포털(info.childcare.go.kr)에서 어린이집 검색·대기 신청</td></tr>
              <tr><td><strong>2단계</strong></td><td>아이행복카드 발급</td><td>국민행복카드(아이행복카드) 발급 — 카드사 또는 은행 방문</td></tr>
              <tr><td><strong>3단계</strong></td><td>보육료 신청</td><td>복지로(bokjiro.go.kr) 온라인 / 읍·면·동 행정복지센터 방문</td></tr>
              <tr><td><strong>4단계</strong></td><td>자격 확인</td><td>시·군·구 처리 (보통 2~7일)</td></tr>
              <tr><td><strong>5단계</strong></td><td>보육료 지급</td><td>승인 후 다음 달부터 어린이집에 직접 지급</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="channel">
        <h2 className="detail-card-head">신청 채널</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>복지로 온라인:</strong> bokjiro.go.kr → 서비스 신청 → 보육료 (24시간, 공동인증서 필요)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>행정복지센터 방문:</strong> 거주지 읍·면·동 방문 — 서류 지참
          </div>
          <div className="info-box">
            <strong>문의:</strong> ☎1566-3232 (보육상담) / ☎129 (복지상담)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="docs">
        <h2 className="detail-card-head">필요 서류</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>신분증:</strong> 보호자 신분증 (행정복지센터 방문 시)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>가족관계증명서:</strong> 자녀와의 관계 증빙 (온라인 신청 시 행정 조회로 대체 가능)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>아이행복카드:</strong> 사전 발급 필요 (없을 경우 발급 후 신청)
          </div>
          <div className="info-box">
            <strong>어린이집 정보:</strong> 입소할 어린이집명·주소 (신청 시 함께 등록)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            연령별 금액, 가정양육수당 차이, 누리과정까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/infant-childcare-fee" className="btn-cta">
            영유아보육료 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 영유아보육료신청방법복지로행정복지센터절차SpokeContent: SpokeData = {
  h1: '영유아보육료 신청 방법, 복지로·행정복지센터 5단계 절차와 필요 서류',
  breadcrumb: '신청방법복지로행정복지센터절차',
  description:
    '영유아보육료 신청: 복지로(bokjiro.go.kr) 온라인 또는 읍면동 행정복지센터 방문. 아이행복카드 사전 발급 필요. 자격 확인 후 다음 달부터 어린이집에 직접 지급. ☎1566-3232.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '아이행복카드를 먼저 만들어야 하나요?',
      a: '네. 보육료를 받으려면 아이행복카드(국민행복카드)가 필요합니다. 카드사(삼성·신한·롯데·KB 등) 앱 또는 영업점에서 발급할 수 있습니다. 카드 발급 후 보육료 신청을 진행하세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '신청 후 언제부터 보육료가 지원되나요?',
      a: '신청일이 속한 달에 자격이 인정되면 다음 달부터 보육료가 지급됩니다. 신청이 빠를수록 지원을 빨리 받을 수 있으므로 어린이집 입소 전에 신청해 두는 것이 좋습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '복지로 신청 시 공인인증서가 꼭 있어야 하나요?',
      a: '공동인증서(구 공인인증서) 외에도 카카오·PASS·삼성Pass 등 간편인증으로도 복지로에서 신청할 수 있습니다. 인증 수단이 없으면 행정복지센터를 방문하세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.bokjiro.go.kr',
    },
    {
      q: '어린이집이 결정되지 않아도 신청할 수 있나요?',
      a: '어린이집이 확정된 후 신청하는 것이 일반적입니다. 어린이집 정보를 함께 등록해야 하므로 입소할 어린이집이 정해진 후 신청하세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '외국인 부모도 신청할 수 있나요?',
      a: '네. 자녀가 어린이집에 등록되어 있으면 외국인 부모도 영유아보육료를 신청할 수 있습니다. 행정복지센터를 방문해 안내받으세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
  ],
  sources: [
    { name: '보건복지부 영유아보육료', url: 'https://www.mohw.go.kr' },
    { name: '복지로', url: 'https://www.bokjiro.go.kr' },
  ],
};
