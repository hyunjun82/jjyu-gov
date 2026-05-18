import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          희망리턴패키지 특화취업지원 전직장려수당은 <strong>총 100만원</strong>입니다.
          1차 <strong>60만원</strong>(심화교육 수료 또는 취업 시)과
          2차 <strong>40만원</strong>(취업 후 30일 이상 근속 시)으로 나뉘어 지급됩니다.
          소상공인진흥공단(sbiz.or.kr)에서 신청합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        폐업 후 취업을 준비하는 소상공인이라면 전직장려수당이 큰 도움이 됩니다.
        수당을 받으려면 희망리턴패키지 취업교육 과정을 이수해야 하며, 두 차례에 걸쳐 지급됩니다.
        지급 조건과 신청 절차를 확인하세요.
      </p>

      <section className="detail-card" id="amount">
        <h2 className="detail-card-head">전직장려수당 100만원 — 1차·2차 지급 구조</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>구분</th><th>금액</th><th>지급 조건</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>1차 지급</td>
                <td><strong>60만원</strong></td>
                <td>취업교육 심화과정 수료 또는 취업 확인 시</td>
              </tr>
              <tr>
                <td>2차 지급</td>
                <td><strong>40만원</strong></td>
                <td>취업 후 30일 이상 근속 확인 시</td>
              </tr>
              <tr>
                <td><strong>합계</strong></td>
                <td><strong>100만원</strong></td>
                <td>2차 조건 충족 시 전액 수령</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>지급 방식:</strong> 소상공인진흥공단이 지정한 계좌로 직접 지급합니다.
            고용보험 가입 여부와 무관하게 지급됩니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="qualify">
        <h2 className="detail-card-head">수당 수령 조건</h2>
        <div className="detail-card-body">
          <ul style={{ listStyle: 'disc', paddingLeft: 20, lineHeight: 2.2 }}>
            <li>희망리턴패키지 특화취업지원 프로그램에 참여 등록</li>
            <li>취업교육 기초과정 이수 후 심화과정 수료 (1차 조건)</li>
            <li>수료 후 취업 활동 및 취업 확인 (1차 추가 조건)</li>
            <li>취업처에서 30일 이상 근속 후 근속 확인 제출 (2차 조건)</li>
          </ul>
          <div className="warning-box" style={{ marginTop: 12 }}>
            <strong>자영업·프리랜서 전환은 취업으로 인정되지 않을 수 있습니다.</strong>
            근로 계약서 또는 고용보험 가입이 확인되는 형태의 취업이어야 합니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="process">
        <h2 className="detail-card-head">신청 절차</h2>
        <div className="detail-card-body">
          <ol style={{ listStyle: 'decimal', paddingLeft: 20, lineHeight: 2.2 }}>
            <li>
              <strong>희망리턴패키지 취업지원 신청:</strong> sbiz.or.kr 접속 → 희망리턴패키지 → 특화취업지원 신청
            </li>
            <li>
              <strong>취업교육 이수:</strong> 기초과정 → 심화과정 수료
            </li>
            <li>
              <strong>1차 수당 신청:</strong> 심화과정 수료증 또는 취업 확인서 제출 → 60만원 지급
            </li>
            <li>
              <strong>2차 수당 신청:</strong> 취업 30일 후 재직증명서 또는 근로확인서 제출 → 40만원 지급
            </li>
          </ol>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>문의:</strong> 소상공인진흥공단 통합콜센터 ☎1357
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            신청자격, 점포철거비, 재창업 지원 등<br />
            소상공인 희망리턴패키지 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/small-biz-hope-return" className="btn-cta">
            희망리턴패키지 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 소상공인희망리턴패키지취업지원전직장려수당100만원받는방법SpokeContent: SpokeData = {
  h1: '희망리턴패키지 취업지원, 전직장려수당 최대 100만원 받는 방법',
  breadcrumb: '전직장려수당',
  description:
    '소상공인 희망리턴패키지 전직장려수당은 총 100만원입니다. 1차 60만원(심화교육 수료 또는 취업 시)과 2차 40만원(취업 후 30일 이상 근속 시)으로 나뉘어 지급됩니다. 취업교육 이수 후 소상공인진흥공단에서 신청하세요.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '전직장려수당은 총 얼마인가요?',
      a: '1차 60만원과 2차 40만원으로 총 100만원입니다. 2차 조건(취업 30일 이상 근속)까지 충족해야 전액을 받을 수 있습니다.',
      source: '소상공인진흥공단 희망리턴패키지 취업지원 안내',
      sourceUrl: 'https://www.sbiz.or.kr',
    },
    {
      q: '교육만 수료하고 아직 취업 못 했는데 1차 수당을 받을 수 있나요?',
      a: '심화과정 수료 후 1차 수당을 신청할 수 있습니다. 다만 취업 확인이 함께 요구될 수 있으므로 소상공인진흥공단 담당자에게 현재 상황을 안내받으세요.',
      source: '소상공인진흥공단 희망리턴패키지 FAQ',
      sourceUrl: 'https://www.sbiz.or.kr',
    },
    {
      q: '아르바이트로 취업해도 2차 수당을 받을 수 있나요?',
      a: '근로 계약이 확인되는 형태여야 합니다. 단순 아르바이트도 근로계약서가 있으면 가능할 수 있지만, 자영업·프리랜서 전환은 인정되지 않을 수 있습니다. 소상공인진흥공단 ☎1357에 확인하세요.',
      source: '소상공인진흥공단 취업 확인 기준',
      sourceUrl: 'https://www.sbiz.or.kr',
    },
    {
      q: '30일 근속 후 퇴직해도 2차 수당은 받을 수 있나요?',
      a: '취업 후 30일 이상 근속 사실을 확인한 시점에 2차 수당을 신청할 수 있습니다. 이후 퇴직 여부와 무관하게 지급 요건이 충족되면 수당을 받을 수 있습니다.',
      source: '소상공인진흥공단 전직장려수당 지급 기준',
      sourceUrl: 'https://www.sbiz.or.kr',
    },
    {
      q: '전직장려수당과 실업급여를 동시에 받을 수 있나요?',
      a: '폐업 소상공인은 고용보험 납부 이력에 따라 실업급여 수급이 가능할 수 있습니다. 두 지원금의 중복 수령 가능 여부는 고용센터와 소상공인진흥공단에 각각 확인하세요.',
      source: '소상공인진흥공단 희망리턴패키지 안내',
      sourceUrl: 'https://www.sbiz.or.kr',
    },
  ],
  sources: [
    { name: '소상공인진흥공단 희망리턴패키지 취업지원 안내', url: 'https://www.sbiz.or.kr' },
    { name: '소상공인마당 전직장려수당 공고', url: 'https://www.sbiz.or.kr/sup/business/bizAction.do' },
  ],
};
