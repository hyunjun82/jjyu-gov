import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          서민금융통합지원센터와 신용회복위원회는 <strong>같은 곳에서 함께 이용</strong>할 수 있습니다.
          센터 내에 신용회복위원회 창구가 함께 운영되므로,
          한 번 방문으로 <strong>자금지원과 채무조정 상담을 동시에</strong> 받을 수 있습니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        연체 전이라면 프리워크아웃, 연체 후라면 개인워크아웃, 상황이 더 심각하면
        법원 개인회생·파산 절차로 연계됩니다. 어떤 경우든 먼저 상담을 받아보세요.
      </p>

      <section className="detail-card" id="compare">
        <h2 className="detail-card-head">채무조정 유형별 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>유형</th><th>기관</th><th>대상</th><th>특징</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>프리워크아웃</strong></td><td>신용회복위원회</td><td>연체 전 사전 조정 희망자</td><td>연체 전 선제적 채무 조정</td></tr>
              <tr><td><strong>개인워크아웃</strong></td><td>신용회복위원회</td><td>연체 채무 보유자</td><td>원금 감면·이자 면제 가능</td></tr>
              <tr><td><strong>개인회생</strong></td><td>법원 (연계 지원)</td><td>채무 과다, 법원 절차 필요</td><td>법원 인가 후 3~5년 분할 상환</td></tr>
              <tr><td><strong>개인파산</strong></td><td>법원 (연계 지원)</td><td>상환 능력 없는 경우</td><td>법원 면책 결정 후 채무 소멸</td></tr>
              <tr><td><strong>국민행복기금 조정</strong></td><td>국민행복기금</td><td>국민행복기금 채무 보유자</td><td>별도 채무조정 프로그램</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="center">
        <h2 className="detail-card-head">서민금융통합지원센터 vs 신용회복위원회 차이</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>서민금융통합지원센터:</strong> 자금지원·채무조정·고용복지 원스톱 종합 창구
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>신용회복위원회:</strong> 개인워크아웃·프리워크아웃 채무조정 전문 기관
          </div>
          <div className="info-box">
            <strong>핵심:</strong> 센터 내에 신용회복위원회 창구가 함께 운영되므로 별도로 방문할 필요 없음
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="flow">
        <h2 className="detail-card-head">채무조정 신청 흐름</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>연체 전:</strong> 프리워크아웃 → 신용회복위원회 (센터 내 창구)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>연체 후:</strong> 개인워크아웃 → 신용회복위원회 (센터 내 창구)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>채무 과다:</strong> 개인회생·파산 → 법원 절차 연계 지원
          </div>
          <div className="info-box">
            <strong>문의:</strong> ☎1397 또는 신용회복위원회 ☎1600-5500
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            이용 대상, 대출 종류, 1397 이용법까지<br />
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

export const 서민금융통합지원센터신용회복위원회채무조정비교SpokeContent: SpokeData = {
  h1: '서민금융통합지원센터 vs 신용회복위원회, 채무조정 어디서 받아야 하나',
  breadcrumb: '신용회복위원회채무조정비교',
  description:
    '서민금융통합지원센터 내 신용회복위원회 창구 함께 운영. 프리워크아웃(연체 전), 개인워크아웃(연체 후), 개인회생·파산 법원 연계까지 원스톱. ☎1397 또는 ☎1600-5500 문의.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '이미 연체가 발생했는데 채무조정을 받을 수 있나요?',
      a: '네, 연체가 발생한 경우 개인워크아웃(신용회복위원회)을 통해 채무조정을 받을 수 있습니다. 연체 전이라도 프리워크아웃으로 사전 조정이 가능합니다.',
      source: '서민금융진흥원',
      sourceUrl: 'https://www.kinfa.or.kr/counselingSupport/centerIntroduction.do',
    },
    {
      q: '개인회생과 개인파산의 차이가 무엇인가요?',
      a: '개인회생은 일정한 상환 능력이 있을 때 법원 인가 하에 3~5년간 분할 상환하는 제도이고, 개인파산은 상환 능력이 없을 때 법원 면책 결정으로 채무가 소멸되는 제도입니다.',
      source: '서민금융진흥원',
      sourceUrl: 'https://www.kinfa.or.kr/counselingSupport/centerIntroduction.do',
    },
    {
      q: '채무조정을 받으면 신용점수가 더 나빠지나요?',
      a: '채무조정 신청 시 신용정보에 등록될 수 있습니다. 구체적인 신용도 영향은 신용회복위원회(☎1600-5500)에 문의해 사전에 확인하세요.',
      source: '신용회복위원회',
      sourceUrl: 'https://www.ccrs.or.kr',
    },
    {
      q: '신용회복위원회에 직접 가야 하나요, 센터에 가도 되나요?',
      a: '서민금융통합지원센터 내에 신용회복위원회 창구가 함께 운영됩니다. 센터를 방문하면 별도로 신용회복위원회를 찾아갈 필요 없이 한 곳에서 처리할 수 있습니다.',
      source: '서민금융진흥원',
      sourceUrl: 'https://www.kinfa.or.kr/counselingSupport/centerIntroduction.do',
    },
    {
      q: '채무조정 중에도 대출 신청이 가능한가요?',
      a: '채무조정 진행 중에는 신규 대출이 어렵습니다. 정확한 상황은 1397 또는 신용회복위원회에 문의해 확인하세요.',
      source: '서민금융진흥원',
      sourceUrl: 'https://www.kinfa.or.kr/counselingSupport/centerIntroduction.do',
    },
  ],
  sources: [
    { name: '서민금융진흥원 센터 소개', url: 'https://www.kinfa.or.kr/counselingSupport/centerIntroduction.do' },
    { name: '신용회복위원회', url: 'https://www.ccrs.or.kr' },
    { name: '서민금융진흥원', url: 'https://www.kinfa.or.kr' },
  ],
};
