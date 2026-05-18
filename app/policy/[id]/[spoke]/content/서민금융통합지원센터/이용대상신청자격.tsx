import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          서민금융통합지원센터는 <strong>채무·신용 문제로 어려움을 겪고 있거나
          제도권 금융에서 적절한 서비스를 받기 어려운 분</strong>이라면 누구나 이용할 수 있습니다.
          소득·신용 조건이 따로 없으며, 상담부터 시작하면 됩니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        금융 상품을 몰라서 못 쓰는 경우, 고금리 대출로 힘든 경우, 채무 연체로 신용거래가
        중단된 경우 등 다양한 상황에서 이용할 수 있습니다.
      </p>

      <section className="detail-card" id="who">
        <h2 className="detail-card-head">이용 가능한 사람</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>어려움 유형</th><th>이용 가능 서비스</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>적합한 대출 상품을 모름</strong></td><td>서민금융 상품 비교·안내</td></tr>
              <tr><td><strong>저소득·저신용으로 대출 불가</strong></td><td>미소금융·햇살론 등 연계</td></tr>
              <tr><td><strong>고금리 대출로 부담</strong></td><td>바꿔드림론·채무조정 연계</td></tr>
              <tr><td><strong>채무 연체·장기 연체</strong></td><td>개인워크아웃·프리워크아웃·법원 연계</td></tr>
              <tr><td><strong>취업 정보 필요</strong></td><td>일자리 상담·취업지원 연계</td></tr>
              <tr><td><strong>신용·재무 진단 필요</strong></td><td>1:1 재무상태 진단·컨설팅</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="service">
        <h2 className="detail-card-head">4가지 원스톱 서비스</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>자금지원:</strong> 미소금융·햇살론·바꿔드림론 등 서민금융 상품 연계
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>채무조정:</strong> 개인워크아웃·프리워크아웃·법원 개인회생·파산 연계
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>고용·복지 연계:</strong> 일자리 상담·취업안내·복지서비스
          </div>
          <div className="info-box">
            <strong>종합상담:</strong> 신용·재무진단·노후설계·창업 컨설팅
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="contact">
        <h2 className="detail-card-head">이용 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>전화 상담:</strong> 국번없이 1397 (평일 09:00~18:00, 야간 18:00~20:00, 통화료 무료)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>센터 방문:</strong> 전국 주요 도시 서민금융통합지원센터 방문
          </div>
          <div className="info-box">
            <strong>앱 이용:</strong> '서민금융 잇다' 앱 → 가까운 센터 검색 및 온라인 신청
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            대출 종류, 채무조정 방법, 1397 전화 이용법까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/seomin-financial-center" className="btn-cta">
            서민금융통합지원센터 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 서민금융통합지원센터이용대상신청자격SpokeContent: SpokeData = {
  h1: '서민금융통합지원센터 이용 대상, 어떤 사람이 신청할 수 있나',
  breadcrumb: '이용대상신청자격',
  description:
    '서민금융통합지원센터: 채무·신용 문제, 저소득·저신용, 고금리 대출, 장기 연체자 등 누구나 이용. 자금지원·채무조정·고용복지 원스톱. ☎1397 (통화료 무료). 서민금융 잇다 앱.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '소득이 있어도 이용할 수 있나요?',
      a: '네, 소득이 있어도 이용 가능합니다. 서민금융통합지원센터는 소득 기준 없이 채무·신용 문제로 어려운 분이라면 누구나 상담받을 수 있습니다.',
      source: '서민금융진흥원',
      sourceUrl: 'https://www.kinfa.or.kr/counselingSupport/centerIntroduction.do',
    },
    {
      q: '대출 거절을 많이 받았는데도 상담받을 수 있나요?',
      a: '네, 오히려 이런 분들을 위한 센터입니다. 일반 금융에서 대출이 어려운 저신용·저소득자에게 맞는 서민금융 상품을 안내합니다.',
      source: '서민금융진흥원',
      sourceUrl: 'https://www.kinfa.or.kr/counselingSupport/centerIntroduction.do',
    },
    {
      q: '자영업자도 이용할 수 있나요?',
      a: '네, 자영업자도 이용 가능합니다. 창업·운영 컨설팅, 소상공인 특례 햇살론 카드 등 자영업자를 위한 서비스도 제공합니다.',
      source: '서민금융진흥원',
      sourceUrl: 'https://www.kinfa.or.kr/counselingSupport/centerIntroduction.do',
    },
    {
      q: '청년·대학생도 이용할 수 있나요?',
      a: '네, 청년·대학생도 이용 가능합니다. 햇살론유스 등 청년 맞춤형 서민금융 상품과 청년 재무상담 서비스를 받을 수 있습니다.',
      source: '서민금융진흥원',
      sourceUrl: 'https://www.kinfa.or.kr/counselingSupport/centerIntroduction.do',
    },
    {
      q: '1397에 전화하면 어떤 도움을 받을 수 있나요?',
      a: '자신에게 맞는 서민금융 상품과 제도를 안내받고, 신용회복위원회·국민행복기금·한국자산관리공사 등 유관기관 콜센터로 즉시 연결받을 수 있습니다.',
      source: '서민금융진흥원',
      sourceUrl: 'https://www.kinfa.or.kr/counselingSupport/microfinanceCallCenter1397.do',
    },
  ],
  sources: [
    { name: '서민금융진흥원 센터 소개', url: 'https://www.kinfa.or.kr/counselingSupport/centerIntroduction.do' },
    { name: '서민금융진흥원 1397 콜센터', url: 'https://www.kinfa.or.kr/counselingSupport/microfinanceCallCenter1397.do' },
    { name: '서민금융진흥원', url: 'https://www.kinfa.or.kr' },
  ],
};
