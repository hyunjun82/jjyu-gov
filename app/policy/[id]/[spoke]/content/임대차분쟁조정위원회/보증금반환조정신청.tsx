import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          전세 보증금을 돌려받지 못했다면 <strong>임대차 분쟁조정위원회</strong>에
          조정을 신청할 수 있습니다. 소송 없이 <strong>60일 이내</strong>에 절차가
          진행되며, 조정 성립 시 <strong>재판상 화해</strong>와 동일한 법적 효력이 생깁니다.
          신청은 <strong>대한법률구조공단 온라인(adrhome.reb.or.kr)</strong>에서 가능합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        보증금 반환 분쟁은 임차인이 가장 많이 겪는 문제입니다.
        조정 신청 전 알아야 할 내용을 정리합니다.
      </p>

      <section className="detail-card" id="eligibility">
        <h2 className="detail-card-head">보증금 반환 조정 신청 자격</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>기준</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>신청 대상</strong></td><td>주택임대차 계약 당사자 (임차인·임대인)</td></tr>
              <tr><td><strong>분쟁 유형</strong></td><td>보증금 반환 거부·지연</td></tr>
              <tr><td><strong>신청 기간</strong></td><td>분쟁 발생 후 언제든 신청 가능</td></tr>
              <tr><td><strong>관할 기관</strong></td><td>대한법률구조공단 임대차분쟁조정위원회</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="steps">
        <h2 className="detail-card-head">보증금 반환 조정 신청 절차</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>1단계:</strong> adrhome.reb.or.kr 접속 → 온라인 조정 신청
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>2단계:</strong> 임대차 계약서, 분쟁 관련 서류 첨부
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>3단계:</strong> 수수료 납부 (1만~10만원 / 취약계층 면제)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>4단계:</strong> 위원회에서 양측 의견 청취 후 조정안 제시
          </div>
          <div className="info-box">
            <strong>5단계:</strong> 쌍방 동의 → 조정 성립 (강제집행 가능)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="prepare">
        <h2 className="detail-card-head">신청 전 준비 서류</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>필수:</strong> 임대차 계약서 사본
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>필수:</strong> 보증금 지급 증빙 (계좌이체 내역 등)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>권장:</strong> 내용증명 발송 이력 (있다면)
          </div>
          <div className="info-box">
            <strong>권장:</strong> 분쟁 경위 정리 서면 (육하원칙)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            소송 vs 조정 비교, 신청 자격, 분쟁 유형별 조정 방법까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/rental-dispute-mediation" className="btn-cta">
            임대차 분쟁조정위원회 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 임대차분쟁조정위원회보증금반환조정신청SpokeContent: SpokeData = {
  h1: '전세 보증금 못 받았다면 임대차 분쟁조정위원회 조정 신청으로 해결',
  breadcrumb: '보증금반환조정신청',
  description:
    '전세 보증금 반환 거부·지연 시 임대차분쟁조정위원회(adrhome.reb.or.kr) 온라인 신청. 60일 내 처리, 조정 성립 시 재판상 화해 효력. 수수료 1만~10만원(취약계층 면제). 계약서·이체내역 준비.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '보증금 반환 조정은 임차인만 신청할 수 있나요?',
      a: '임차인과 임대인 모두 신청할 수 있습니다. 보증금 반환 외에도 임대료 증감, 계약갱신, 원상복구 등 다양한 분쟁에 대해 신청 가능합니다.',
      source: '대한법률구조공단',
      sourceUrl: 'https://adrhome.reb.or.kr',
    },
    {
      q: '조정 성립 후 임대인이 보증금을 주지 않으면 어떻게 되나요?',
      a: '조정 성립은 재판상 화해와 동일한 효력이 있어, 임대인이 이행하지 않으면 법원을 통해 강제집행을 신청할 수 있습니다.',
      source: '대한법률구조공단',
      sourceUrl: 'https://adrhome.reb.or.kr',
    },
    {
      q: '온라인 신청이 어렵다면 방문 신청도 되나요?',
      a: '네. adrhome.reb.or.kr 온라인 신청 외에 전국 대한법률구조공단 지부를 방문해 신청할 수 있습니다.',
      source: '대한법률구조공단',
      sourceUrl: 'https://adrhome.reb.or.kr',
    },
    {
      q: '내용증명을 먼저 보내야 조정을 신청할 수 있나요?',
      a: '내용증명 발송이 조정 신청의 필수 조건은 아닙니다. 다만 분쟁 경위를 증빙하는 데 도움이 됩니다.',
      source: '대한법률구조공단',
      sourceUrl: 'https://adrhome.reb.or.kr',
    },
    {
      q: '상가 보증금 분쟁도 여기서 신청하나요?',
      a: '상가 보증금 분쟁은 한국부동산원 상가건물임대차분쟁조정위원회(hldcc.or.kr)에 신청해야 합니다. 주택과 상가 신청 기관이 다릅니다.',
      source: '한국부동산원',
      sourceUrl: 'https://www.hldcc.or.kr',
    },
  ],
  sources: [
    { name: '대한법률구조공단 임대차분쟁조정위원회', url: 'https://adrhome.reb.or.kr' },
    { name: '한국부동산원 상가건물임대차분쟁조정위원회', url: 'https://www.hldcc.or.kr' },
    { name: '법제처 국가법령정보센터', url: 'https://www.law.go.kr' },
  ],
};
