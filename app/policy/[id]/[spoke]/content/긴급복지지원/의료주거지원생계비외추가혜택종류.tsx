import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          긴급복지지원은 생계비 외에도 <strong>의료비·주거비·교육비·연료비·해산비·장제비</strong> 등
          다양한 추가 지원을 받을 수 있습니다.
          생계·의료·주거 3가지를 한꺼번에 신청하는 것도 가능합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        각 지원 유형은 독립적으로 신청·이용할 수 있으며, 위기 상황에 따라
        필요한 지원을 조합하여 받을 수 있습니다. 지원 횟수는 유형별로 다릅니다.
      </p>

      <section className="detail-card" id="types">
        <h2 className="detail-card-head">긴급복지지원 지원 유형 전체</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>유형</th><th>지원 내용</th><th>최대 횟수</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>생계지원</strong></td><td>식료품·의복·냉난방비 등 현금 지급</td><td>6회 (6개월)</td></tr>
              <tr><td><strong>의료지원</strong></td><td>의료비 300만원 한도 지원</td><td>2회</td></tr>
              <tr><td><strong>주거지원</strong></td><td>임시 거소 제공 또는 주거비 지원</td><td>12회 (12개월)</td></tr>
              <tr><td><strong>교육지원</strong></td><td>초·중·고 교육비 (입학금·수업료 등)</td><td>2회</td></tr>
              <tr><td><strong>연료비</strong></td><td>동절기 연료비 지원</td><td>6회</td></tr>
              <tr><td><strong>해산비</strong></td><td>출산 시 70만원 지원</td><td>1회</td></tr>
              <tr><td><strong>장제비</strong></td><td>사망 시 80만원 지원</td><td>1회</td></tr>
              <tr><td><strong>사회복지시설 이용</strong></td><td>사회복지시설 입소·이용 지원</td><td>6회</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="medical">
        <h2 className="detail-card-head">의료지원 세부 안내</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>지원 금액:</strong> 1회당 최대 300만원
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>지원 항목:</strong> 입원비·수술비·검사비·약제비 등
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>신청 방법:</strong> 주민센터 또는 의료기관에서 신청
          </div>
          <div className="info-box">
            <strong>최대 횟수:</strong> 연 2회 (동일 질환)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="housing">
        <h2 className="detail-card-head">주거지원 세부 안내</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>지원 내용:</strong> 임시 거소 제공 (숙박시설 등) 또는 실제 주거비
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>지원 기간:</strong> 최대 12개월 (12회)
          </div>
          <div className="info-box">
            <strong>대상:</strong> 화재·재해·가정폭력 등으로 거주지를 잃은 경우
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            생계지원금 금액표, 신청자격, 신청방법까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/emergency-welfare-support" className="btn-cta">
            긴급복지지원 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 긴급복지지원의료주거지원생계비외추가혜택종류SpokeContent: SpokeData = {
  h1: '긴급복지지원 의료·주거 지원, 생계비 외 받을 수 있는 추가 혜택',
  breadcrumb: '의료주거지원생계비외추가혜택종류',
  description:
    '긴급복지지원 추가 혜택: 의료비 최대 300만원(연2회)·주거비(12개월)·교육비·연료비·해산비 70만·장제비 80만. 생계·의료·주거 동시 신청 가능.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '의료비와 생계비를 동시에 받을 수 있나요?',
      a: '네. 생계지원과 의료지원은 독립적으로 신청·지원받을 수 있습니다. 위기 상황에 필요한 지원 유형을 함께 신청하세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '의료비 300만원을 초과하면 어떻게 되나요?',
      a: '긴급복지 의료지원은 1회 300만원 한도입니다. 초과분은 본인 부담이거나, 의료급여·재난적의료비 지원 등 다른 제도를 병행해 신청할 수 있습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '화재로 집을 잃었는데 주거지원을 받을 수 있나요?',
      a: '네. 화재·재해로 거주지를 잃은 경우 주거지원 대상입니다. 임시 거소 제공 또는 주거비를 최대 12개월까지 지원받을 수 있습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '출산했는데 해산비를 따로 신청해야 하나요?',
      a: '긴급복지지원 해산비(70만원)는 별도 신청이 필요합니다. 출산 후 주민센터에 해산비 지원을 신청하세요. 생계지원을 받고 있다면 연계 신청이 가능합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '교육비 지원은 어느 학교까지 받을 수 있나요?',
      a: '초·중·고등학생에 대한 입학금·수업료·학교운영지원비 등을 지원합니다. 대학교는 해당되지 않습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
  ],
  sources: [
    { name: '보건복지부 긴급복지지원', url: 'https://www.mohw.go.kr/menu.es?mid=a10708010100' },
    { name: '찾기쉬운 생활법령정보 긴급지원', url: 'https://easylaw.go.kr/CSP/CnpClsMain.laf?csmSeq=90' },
  ],
};
