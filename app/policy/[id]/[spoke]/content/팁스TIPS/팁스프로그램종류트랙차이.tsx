import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          TIPS는 단일 프로그램이 아니라 <strong>일반·딥테크·포스트·글로벌</strong> 등 여러 트랙으로 구성됩니다.
          각 트랙마다 지원 대상, 지원 금액, 기간이 다르며 <strong>동시에 복수 트랙 신청은 불가</strong>합니다.
          현재 내 회사 단계와 기술 분야에 맞는 트랙 하나를 정확히 선택하는 것이 핵심입니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0', color: 'var(--text-secondary)' }}>
        2026년 기준 TIPS는 크게 4가지 트랙으로 운영됩니다. 초기 스타트업은 일반 TIPS,
        딥테크 기술 기업은 딥테크 TIPS, 이미 TIPS를 받은 기업은 포스트 TIPS,
        해외 진출을 준비 중이면 글로벌 TIPS를 고려해야 합니다.
      </p>

      <section className="detail-card" id="compare">
        <h2 className="detail-card-head">TIPS 4대 트랙 비교표</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>트랙</th><th>대상</th><th>R&amp;D 지원</th><th>추가 지원</th><th>기간</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>일반 TIPS</strong></td>
                <td>창업 7년 이내 기술 스타트업</td>
                <td>최대 <strong>5억 원</strong></td>
                <td>사업화 1억 + 해외마케팅 1억</td>
                <td>2년</td>
              </tr>
              <tr>
                <td><strong>딥테크 TIPS</strong></td>
                <td>AI·바이오·소재·우주·양자 등 딥테크 분야</td>
                <td>최대 <strong>10억 원</strong></td>
                <td>사업화 2억 + 해외마케팅 1억</td>
                <td>3년</td>
              </tr>
              <tr>
                <td><strong>포스트 TIPS</strong></td>
                <td>일반 TIPS 졸업 후 성장 단계 기업</td>
                <td>최대 <strong>10억 원</strong></td>
                <td>사업화 2억 + 해외마케팅 2억</td>
                <td>2년</td>
              </tr>
              <tr>
                <td><strong>글로벌 TIPS</strong></td>
                <td>해외 시장 진출을 목표로 하는 기업</td>
                <td>최대 <strong>5억 원</strong></td>
                <td>해외마케팅 강화 지원</td>
                <td>2년</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="deeptech">
        <h2 className="detail-card-head">딥테크 TIPS — 일반 TIPS와 핵심 차이점</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>일반 TIPS</th><th>딥테크 TIPS</th></tr>
            </thead>
            <tbody>
              <tr><td>R&amp;D 지원금</td><td>최대 5억 원</td><td><strong>최대 10억 원</strong></td></tr>
              <tr><td>지원 기간</td><td>2년</td><td><strong>3년</strong></td></tr>
              <tr><td>대상 분야</td><td>기술 기반 전반</td><td>AI·바이오·소재·우주·양자 등 특정 딥테크</td></tr>
              <tr><td>심사 기준</td><td>기술성·사업성 균형</td><td><strong>기술 혁신성·원천기술</strong> 강화</td></tr>
              <tr><td>운영사 요건</td><td>일반 운영사</td><td>딥테크 전문 운영사</td></tr>
            </tbody>
          </table>

          <div className="info-box" style={{ marginTop: 16 }}>
            딥테크 TIPS는 정부가 특별 우선 지원하는 트랙입니다. 2026년 기준
            전체 TIPS 예산의 약 <strong>45%</strong>가 딥테크 트랙에 배정되었습니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="post">
        <h2 className="detail-card-head">포스트 TIPS — 졸업 후 다음 단계 지원</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>내용</th></tr>
            </thead>
            <tbody>
              <tr><td>신청 자격</td><td>일반 TIPS 과제 종료 후 3년 이내 기업</td></tr>
              <tr><td>R&amp;D 지원</td><td>최대 10억 원 / 2년</td></tr>
              <tr><td>사업화 지원</td><td>최대 2억 원</td></tr>
              <tr><td>해외 마케팅</td><td>최대 2억 원</td></tr>
              <tr><td>운영사 조건</td><td>동일 또는 다른 운영사 추천 가능</td></tr>
              <tr><td>핵심 목적</td><td>TIPS 성과를 바탕으로 글로벌 스케일업</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="warning-box">
        <strong>⚠️ 트랙 선택 주의사항</strong><br />
        한 번 특정 트랙으로 선정되면 트랙 변경이 불가합니다.
        또한 <strong>일반 TIPS와 딥테크 TIPS를 동시에 신청하는 것은 불가</strong>합니다.
        운영사와 충분히 상의한 후 자신의 기업 상황에 가장 적합한 트랙 하나를 선택하세요.
      </div>
    </>
  );
}

export const 팁스TIPS팁스프로그램종류트랙차이SpokeContent: SpokeData = {
  h1: 'TIPS 프로그램 종류·트랙 차이 — 일반·딥테크·포스트·글로벌 비교',
  breadcrumb: '팁스프로그램종류트랙차이',
  description: 'TIPS 일반·딥테크·포스트·글로벌 4가지 트랙의 지원 대상, 금액, 기간 차이를 비교하고 내 상황에 맞는 트랙 선택법을 정리합니다.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: 'TIPS 일반 트랙과 딥테크 트랙 중 어떤 것이 더 받기 쉬운가요?',
      a: '딥테크 트랙은 지원금이 크고 기간도 길지만, 원천기술·혁신성 심사 기준이 훨씬 엄격합니다. 기술 준비도가 충분하면 딥테크 트랙이 더 유리할 수 있지만, 초기 스타트업은 일반 트랙이 현실적입니다.',
      source: '중소벤처기업부 TIPS 운영 공고',
      sourceUrl: 'https://www.jointips.or.kr',
    },
    {
      q: '포스트 TIPS는 일반 TIPS를 받지 않았어도 신청할 수 있나요?',
      a: '포스트 TIPS는 일반 TIPS 과제를 완료한 기업을 대상으로 합니다. 일반 TIPS를 받지 않은 기업은 신청 자격이 없습니다.',
      source: '중소벤처기업부 TIPS 운영 공고',
      sourceUrl: 'https://www.jointips.or.kr',
    },
    {
      q: '글로벌 TIPS는 해외 매출이 있어야 신청 가능한가요?',
      a: '반드시 해외 매출이 있어야 하는 것은 아닙니다. 해외 진출 계획과 글로벌 시장에서의 경쟁력을 갖춘 기업이라면 신청 가능합니다. 다만 구체적인 해외 진출 전략이 심사에서 중요하게 평가됩니다.',
      source: '중소벤처기업부 TIPS 운영 공고',
      sourceUrl: 'https://www.jointips.or.kr',
    },
    {
      q: '2026년 TIPS 예산이 늘었다고 하는데 선정 가능성이 높아졌나요?',
      a: '2026년 TIPS 예산은 전년 대비 약 45% 증액되어 선정 기회가 확대되었습니다. 특히 딥테크 트랙 지원이 대폭 늘었으며, AI·바이오 분야 스타트업에게 유리한 환경이 조성되었습니다.',
      source: '중소벤처기업부 2026년 TIPS 운영 공고',
      sourceUrl: 'https://www.jointips.or.kr',
    },
    {
      q: '트랙을 선택한 후 나중에 변경이 가능한가요?',
      a: '선정 후 트랙 변경은 불가합니다. 신청 전 운영사와 충분히 협의하여 내 기업 상황에 맞는 트랙을 신중하게 선택해야 합니다.',
      source: '중소벤처기업부 TIPS 운영 공고',
      sourceUrl: 'https://www.jointips.or.kr',
    },
  ],
  sources: [
    { name: '중소벤처기업부 TIPS 프로그램 공식 안내', url: 'https://www.jointips.or.kr' },
    { name: '중소벤처기업부 창업지원포털', url: 'https://www.k-startup.go.kr' },
  ],
};
