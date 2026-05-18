import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          희망리턴패키지 원스톱 지원은 <strong>점포철거·컨설팅·법률·채무조정 4가지</strong>를 한 번에 받을 수 있습니다.
          재창업 지원은 <strong>폐업 후 1년 미만</strong> 소상공인이 새 업종으로 전환할 때 신청 가능하며,
          임대차 분쟁 법률 자문과 금융기관 채무조정도 연계됩니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        폐업 후 법적 분쟁, 채무 문제, 재창업 준비까지 혼자 해결하기 어렵습니다.
        희망리턴패키지는 이 모든 과정을 원스톱으로 지원합니다.
        4종 지원 내용과 재창업 연계 절차를 확인하세요.
      </p>

      <section className="detail-card" id="one-stop">
        <h2 className="detail-card-head">원스톱 지원 4종</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>지원 종류</th><th>주요 내용</th><th>대상</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>점포철거 지원</td>
                <td>인테리어 철거비 최대 600만원</td>
                <td>임대 점포 원상복구 필요 소상공인</td>
              </tr>
              <tr>
                <td>경영 컨설팅</td>
                <td>세무·회계·경영 진단 및 폐업 절차 안내</td>
                <td>폐업 준비 중 소상공인</td>
              </tr>
              <tr>
                <td>법률 지원</td>
                <td>임대차 분쟁·계약 해지 법률 자문</td>
                <td>임대인과 분쟁 중인 소상공인</td>
              </tr>
              <tr>
                <td>채무조정 연계</td>
                <td>금융기관 채무 조정 기관 연계</td>
                <td>사업 관련 채무가 있는 소상공인</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="restart">
        <h2 className="detail-card-head">재창업 지원 — 폐업 후 1년 미만, 새 업종 전환</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>내용</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>신청 자격</td>
                <td><strong>폐업 후 1년 미만</strong>, 새 업종으로 창업 희망자</td>
              </tr>
              <tr>
                <td>지원 내용</td>
                <td>재창업 컨설팅, 사업화 교육, 사업화 자금 연계</td>
              </tr>
              <tr>
                <td>업종 조건</td>
                <td>기존 폐업 업종과 다른 새 업종으로 전환</td>
              </tr>
              <tr>
                <td>신청처</td>
                <td>소상공인진흥공단 sbiz.or.kr</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>재창업 사업화 자금:</strong> 재창업 지원 연계로 소상공인정책자금 또는 창업 지원금과 추가 연계가 가능할 수 있습니다.
            소상공인진흥공단 담당자에게 연계 가능한 자금 지원을 함께 문의하세요.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="legal-debt">
        <h2 className="detail-card-head">법률 지원 및 채무조정 — 어떻게 받나?</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>법률 지원:</strong> 임대차 분쟁, 보증금 반환 거부, 계약 해지 문제 등을 전문 변호사가 자문합니다.
            희망리턴패키지 신청 후 법률 지원 서비스를 신청하면 연결됩니다.
          </div>
          <div className="info-box">
            <strong>채무조정:</strong> 사업 관련 금융기관 채무가 있다면 소상공인진흥공단을 통해 채무조정 지원 기관(신용회복위원회, 캠코 등)으로 연계됩니다.
            직접 방문이 어렵다면 소상공인진흥공단에서 연계 신청이 가능합니다.
          </div>
          <div className="warning-box" style={{ marginTop: 12 }}>
            <strong>채무조정 연계는 채무를 탕감해 주는 것이 아닙니다.</strong>
            분할 상환, 이자 감면 등 조건을 협의하는 과정입니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            신청자격, 점포철거비, 전직장려수당 등<br />
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

export const 소상공인희망리턴패키지재창업지원법률채무조정컨설팅원스톱SpokeContent: SpokeData = {
  h1: '희망리턴패키지 재창업 지원, 법률·채무조정·컨설팅 한 번에 받기',
  breadcrumb: '재창업·법률지원',
  description:
    '소상공인 희망리턴패키지 원스톱 지원은 점포철거·경영컨설팅·법률 자문·채무조정 4종을 한 번에 받을 수 있습니다. 재창업 지원은 폐업 후 1년 미만이고 새 업종으로 전환하는 소상공인이 대상입니다. 소상공인진흥공단에서 신청하세요.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '법률 지원은 어떤 문제에 도움을 받을 수 있나요?',
      a: '임대차 분쟁, 보증금 반환 거부, 계약 해지 문제, 권리금 분쟁 등 폐업과 관련된 법적 문제에 대해 전문 변호사의 자문을 받을 수 있습니다.',
      source: '소상공인진흥공단 희망리턴패키지 법률지원 안내',
      sourceUrl: 'https://www.sbiz.or.kr',
    },
    {
      q: '채무조정은 빚을 탕감해 주는 건가요?',
      a: '채무 탕감이 아니라 분할 상환, 이자 감면 등 상환 조건을 협의하는 과정입니다. 소상공인진흥공단을 통해 신용회복위원회, 캠코 등 전문 기관으로 연계됩니다.',
      source: '소상공인진흥공단 채무조정 연계 안내',
      sourceUrl: 'https://www.sbiz.or.kr',
    },
    {
      q: '폐업한 지 1년이 지났는데 재창업 지원을 받을 수 있나요?',
      a: '재창업 지원의 기본 자격은 폐업 후 1년 미만입니다. 1년이 초과된 경우 재창업 트랙 신청은 어려울 수 있으며, 다른 소상공인 창업 지원 제도를 알아보시기 바랍니다.',
      source: '소상공인진흥공단 희망리턴패키지 재창업 기준',
      sourceUrl: 'https://www.sbiz.or.kr',
    },
    {
      q: '같은 업종으로 다시 창업해도 재창업 지원을 받을 수 있나요?',
      a: '재창업 지원은 기존 폐업 업종과 다른 새 업종으로 전환하는 것이 조건입니다. 동일 업종으로의 재창업은 지원 대상에서 제외될 수 있습니다.',
      source: '소상공인진흥공단 재창업 지원 업종 기준',
      sourceUrl: 'https://www.sbiz.or.kr',
    },
    {
      q: '원스톱 지원 4종을 모두 동시에 신청할 수 있나요?',
      a: '희망리턴패키지 신청 후 필요한 지원 종류를 선택해 신청할 수 있습니다. 단, 취업지원과 재창업지원은 동시 신청이 제한될 수 있으므로 소상공인진흥공단 ☎1357에 사전 확인하세요.',
      source: '소상공인진흥공단 희망리턴패키지 안내',
      sourceUrl: 'https://www.sbiz.or.kr',
    },
  ],
  sources: [
    { name: '소상공인진흥공단 희망리턴패키지 안내', url: 'https://www.sbiz.or.kr' },
    { name: '소상공인마당 희망리턴패키지 공고', url: 'https://www.sbiz.or.kr/sup/business/bizAction.do' },
  ],
};
