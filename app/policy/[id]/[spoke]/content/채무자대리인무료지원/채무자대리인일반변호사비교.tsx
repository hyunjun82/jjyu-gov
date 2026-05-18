import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          채무자대리인과 일반 변호사의 가장 큰 차이는 <strong>비용</strong>입니다.
          채무자대리인 제도는 <strong>국가가 비용을 지원</strong>하므로 무료이고,
          일반 변호사는 <strong>자비 부담</strong>이 필요합니다.
          단, 채무자대리인은 <strong>불법 사금융·불법 추심 피해</strong>에 한정해
          지원됩니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        어떤 상황에서 채무자대리인 제도를 활용해야 하는지,
        일반 변호사와 무엇이 다른지 비교합니다.
      </p>

      <section className="detail-card" id="compare">
        <h2 className="detail-card-head">채무자대리인 vs 일반 변호사 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>채무자대리인 (무료 지원)</th><th>일반 변호사</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>비용</strong></td><td>무료 (국가 지원)</td><td>자비 부담 (착수금+성공보수)</td></tr>
              <tr><td><strong>대상</strong></td><td>불법 사금융·불법 추심 피해자</td><td>제한 없음</td></tr>
              <tr><td><strong>신청 방법</strong></td><td>금융감독원 1332 / fss.or.kr</td><td>직접 법무법인 선임</td></tr>
              <tr><td><strong>소속</strong></td><td>대한법률구조공단</td><td>개인 또는 법무법인</td></tr>
              <tr><td><strong>업무 범위</strong></td><td>불법 추심 대응·채무 정리</td><td>모든 법률 분야</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="when-free">
        <h2 className="detail-card-head">채무자대리인 제도를 써야 할 때</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>불법 추심 피해:</strong> 협박·야간 연락·제3자 통보 등
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>최고금리 초과:</strong> 연 20% 초과 이자 부담
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>미등록 대부업 이용:</strong> 불법 사금융 피해
          </div>
          <div className="info-box">
            <strong>비용 부담 없는 법적 대응:</strong> 변호사 비용이 부담될 때
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="when-private">
        <h2 className="detail-card-head">일반 변호사가 필요한 경우</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>합법적 채권 분쟁:</strong> 정상 금융기관과의 채무 조정·면책 소송
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>복잡한 법률 문제:</strong> 채무자대리인 지원 범위를 벗어난 사안
          </div>
          <div className="info-box">
            <strong>신속 대응 필요:</strong> 즉시 소송이나 가처분이 필요한 경우
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            불법 추심 변호사 무료 신청, 최고금리 초과 대상, 신청 방법까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/debtor-lawyer-free-support" className="btn-cta">
            채무자대리인 무료 지원 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 채무자대리인무료지원채무자대리인일반변호사비교SpokeContent: SpokeData = {
  h1: '채무자대리인 무료 지원 vs 일반 변호사, 비용·대상·업무 범위 어떻게 다른가',
  breadcrumb: '채무자대리인일반변호사비교',
  description:
    '채무자대리인(무료·불법 사금융 한정)과 일반 변호사(유료·제한 없음) 비교. 불법 추심·최고금리 초과·미등록 대부업 피해는 채무자대리인 무료 활용. 금융감독원 1332 또는 fss.or.kr 신청.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '채무자대리인이 모든 채무 문제를 해결해주나요?',
      a: '채무자대리인 무료 지원은 불법 사금융, 불법 추심, 최고금리 초과 피해에 한정됩니다. 합법적 금융기관과의 채무 분쟁은 지원 범위 밖입니다.',
      source: '금융감독원',
      sourceUrl: 'https://www.fss.or.kr',
    },
    {
      q: '무료 지원이 끝나면 비용을 내야 하나요?',
      a: '채무자대리인 무료 지원은 정부 예산으로 전액 지원됩니다. 별도 추가 비용은 없습니다.',
      source: '금융감독원',
      sourceUrl: 'https://www.fss.or.kr',
    },
    {
      q: '채무자대리인과 일반 변호사를 동시에 쓸 수 있나요?',
      a: '일반적으로 동일 사안에 대해 동시 선임은 불필요합니다. 채무자대리인 지원 범위를 초과하는 부분에 대해서는 별도 법률 상담을 받을 수 있습니다.',
      source: '금융감독원',
      sourceUrl: 'https://www.fss.or.kr',
    },
    {
      q: '대한법률구조공단의 법률구조와 채무자대리인 지원은 다른가요?',
      a: '대한법률구조공단은 법률구조, 무료 법률 상담, 채무자대리인 지원 등 다양한 서비스를 제공합니다. 채무자대리인은 금융감독원이 주관하고 공단이 실행하는 별도 프로그램입니다.',
      source: '대한법률구조공단',
      sourceUrl: 'https://www.klac.or.kr',
    },
    {
      q: '채무자대리인 신청은 어디서 하나요?',
      a: '금융감독원 불법사금융신고센터(1332) 또는 금융감독원 누리집(fss.or.kr)을 통해 신청할 수 있습니다.',
      source: '금융감독원',
      sourceUrl: 'https://www.fss.or.kr',
    },
  ],
  sources: [
    { name: '금융감독원', url: 'https://www.fss.or.kr' },
    { name: '대한법률구조공단', url: 'https://www.klac.or.kr' },
    { name: '금융위원회', url: 'https://www.fsc.go.kr' },
  ],
};
