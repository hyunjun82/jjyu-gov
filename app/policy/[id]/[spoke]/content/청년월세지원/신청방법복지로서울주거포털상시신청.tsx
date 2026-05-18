import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          청년월세지원은 <strong>복지로(bokjiro.go.kr)</strong>,
          <strong>주민센터 방문</strong>, 서울 거주자는 <strong>서울주거포털</strong>에서
          신청할 수 있습니다. <strong>2026년부터 상시 신청</strong>으로 전환되어
          연중 언제든 신청 가능합니다.
        </p>
      </div>

      <section className="detail-card" id="channel">
        <h2 className="detail-card-head">신청 채널</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>채널</th><th>대상</th><th>URL·연락처</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>복지로</strong></td><td>전국</td><td>bokjiro.go.kr</td></tr>
              <tr><td><strong>주민센터</strong></td><td>전국</td><td>주소지 관할 읍·면·동</td></tr>
              <tr><td><strong>서울주거포털</strong></td><td>서울시 거주자</td><td>housing.seoul.go.kr</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="step">
        <h2 className="detail-card-head">복지로 온라인 신청 절차</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>1단계:</strong> 복지로 접속 → 로그인 (공동인증서 또는 간편인증)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>2단계:</strong> 서비스 신청 → '청년월세 한시 특별지원' 검색 및 선택
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>3단계:</strong> 신청서 작성 (임대차계약서 정보·소득·가구원 입력)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>4단계:</strong> 서류 업로드 (임대차계약서·통장사본 등)
          </div>
          <div className="info-box">
            <strong>5단계:</strong> 자격 확인 → 매월 계좌 입금 시작
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="docs">
        <h2 className="detail-card-head">필요 서류</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>필수:</strong> 임대차계약서 사본
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>계좌:</strong> 본인 명의 통장사본
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>재직·소득 증빙:</strong> 근로소득원천징수영수증·건강보험료 납부확인서 등
          </div>
          <div className="info-box">
            <strong>기타:</strong> 가족관계증명서 (원가구 소득 확인용) — 자동 조회 불가 시
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            신청자격, 지원금액, 주거급여 비교까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/youth-monthly-rent" className="btn-cta">
            청년월세지원 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 청년월세지원신청방법복지로서울주거포털상시신청SpokeContent: SpokeData = {
  h1: '청년월세지원 신청방법, 복지로·서울주거포털·주민센터 상시 신청',
  breadcrumb: '신청방법복지로서울주거포털상시신청',
  description:
    '청년월세지원 신청: 복지로·주민센터·서울주거포털. 2026년 상시 신청 전환. 서류: 임대차계약서·통장사본·소득증빙. 온라인 5단계 절차.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '상시 신청이면 언제든 신청해도 되나요?',
      a: '네. 2026년부터 상시 신청으로 변경되어 별도 공고 없이 연중 언제든지 신청 가능합니다.',
      source: '국토교통부',
      sourceUrl: 'https://www.molit.go.kr',
    },
    {
      q: '임대차계약서가 없는 경우(구두 계약)는 어떻게 하나요?',
      a: '임대차계약서가 없으면 신청이 어렵습니다. 집주인과 서면 계약서를 작성하거나 임대차 신고를 통해 계약 확인서를 준비하세요.',
      source: '국토교통부',
      sourceUrl: 'https://www.molit.go.kr',
    },
    {
      q: '지방 거주자도 복지로에서 신청할 수 있나요?',
      a: '네. 복지로는 전국 공통 신청 플랫폼입니다. 서울주거포털은 서울시 거주자를 위한 별도 서비스입니다.',
      source: '국토교통부',
      sourceUrl: 'https://www.molit.go.kr',
    },
    {
      q: '신청 후 결과는 얼마나 걸려 나오나요?',
      a: '소득·재산 조회 및 자격 심사에 보통 2~4주가 소요됩니다. 심사 결과는 복지로 마이페이지 또는 문자로 안내됩니다.',
      source: '국토교통부',
      sourceUrl: 'https://www.molit.go.kr',
    },
    {
      q: '주민센터에서 신청하면 서류를 현장에서 바로 제출할 수 있나요?',
      a: '네. 주민센터 방문 시 담당자와 상담하며 필요 서류를 현장 제출할 수 있습니다. 서류 준비가 어렵다면 방문 전에 전화로 확인하세요.',
      source: '국토교통부',
      sourceUrl: 'https://www.molit.go.kr',
    },
  ],
  sources: [
    { name: '국토교통부 청년월세지원', url: 'https://www.molit.go.kr' },
    { name: '복지로 청년월세지원', url: 'https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveTWAT52011M.do?wlfareInfoId=WLF00004661' },
  ],
};
