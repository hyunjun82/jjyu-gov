import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          긴급생활안정비의 '생계위기'는 <strong>범죄 피해로 경제활동이 어려워진 상태</strong>를 의미합니다.
          별도의 소득 수치 기준은 공개된 자료가 없으며, 지구심의회가 개별 사정을 심의해 결정합니다.
          소득이 있어도 치료 중 일을 못 하게 된 상황이라면 신청해 볼 수 있습니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "긴급생활안정비를 받으려면 소득이 얼마 이하여야 하나요? 중산층도 받을 수 있나요?"
        생계위기 기준과 소득 조건 여부를 정리했습니다.
      </p>

      <section className="detail-card" id="livelihood">
        <h2 className="detail-card-head">생계위기 판단 기준</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>핵심 조건:</strong> 범죄 피해로 인해 경제활동을 하기 어려운 상태에 있어야 합니다.
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>심의 방식:</strong> 지구심의회가 개별 사정(치료 기간, 직업, 가족 상황 등)을
            종합적으로 판단합니다. 정해진 소득 상한 수치는 없습니다.
          </div>
          <div className="info-box">
            <strong>실질 판단 요소:</strong> 치료 기간 5주 이상, 치료 중 실제 소득 단절 여부,
            부양가족 유무, 기존 소득 수준 등을 함께 고려합니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="income">
        <h2 className="detail-card-head">소득별 신청 가능 여부</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>상황</th><th>신청 가능 여부</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>치료 중 일을 못 해 소득이 완전히 끊긴 경우</td>
                <td><strong>신청 가능</strong></td>
              </tr>
              <tr>
                <td>직장 다니다가 치료로 휴직한 경우</td>
                <td>신청 가능 (심의 필요)</td>
              </tr>
              <tr>
                <td>배우자 소득이 있어 생계가 유지되는 경우</td>
                <td>심의에서 판단</td>
              </tr>
              <tr>
                <td>치료 중에도 소득이 유지되는 경우</td>
                <td>인정 어려울 수 있음</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="tip">
        <h2 className="detail-card-head">신청 전 확인 사항</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>상해진단서:</strong> 5주 이상 치료가 필요하다고 기재된 진단서가 필요합니다.
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>경제 상황 소명:</strong> 치료로 인한 소득 단절, 경제적 어려움을 보여주는
            서류 (급여 명세서, 휴직 확인서 등)를 준비하면 심의에 도움이 됩니다.
          </div>
          <div className="info-box">
            <strong>문의:</strong> 범죄피해자지원센터 ☎ 1577-2584에서 사전 상담 후 신청하면
            필요 서류를 정확히 안내받을 수 있습니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            350만원 신청 조건, 구조금 중복 등<br />
            범죄피해자 긴급생활안정비 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/crime-victim-stable" className="btn-cta">
            범죄피해자 긴급생활안정비 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 범죄피해자생활안정비생계위기소득기준SpokeContent: SpokeData = {
  h1: '긴급생활안정비 대상이 되는 생계위기 기준, 소득 조건이 있는지 없는지',
  breadcrumb: '생계위기소득기준',
  description:
    '범죄피해자 긴급생활안정비 생계위기 기준은 소득 수치가 아닌 범죄 피해로 경제활동 불가 여부. 지구심의회가 개별 판단. 치료 중 소득 단절 서류 준비 권장.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '소득이 있어도 긴급생활안정비를 신청할 수 있나요?',
      a: '치료로 인해 일을 못 하게 된 상황이라면 기존 소득이 있어도 신청할 수 있습니다. 심의에서 경제적 어려움이 인정되어야 합니다.',
      source: '법무부',
      sourceUrl: 'https://www.moj.go.kr',
    },
    {
      q: '소득 기준 수치가 있나요?',
      a: '별도로 공개된 소득 상한 수치는 없습니다. 지구심의회가 피해자의 상황을 종합적으로 심의해 결정합니다.',
      source: '법무부',
      sourceUrl: 'https://www.moj.go.kr',
    },
    {
      q: '치료 중 휴직한 직장인도 해당되나요?',
      a: '범죄 피해로 인해 휴직했다면 신청할 수 있습니다. 휴직 확인서와 급여 관련 서류를 함께 제출하면 심의에 도움이 됩니다.',
      source: '법무부',
      sourceUrl: 'https://www.moj.go.kr',
    },
    {
      q: '배우자 소득이 있으면 못 받나요?',
      a: '배우자 소득이 있다고 해서 자동으로 제외되지는 않습니다. 다만 심의에서 가구 전체의 경제 상황을 고려할 수 있습니다.',
      source: '법무부',
      sourceUrl: 'https://www.moj.go.kr',
    },
    {
      q: '신청 전에 상담을 받을 수 있나요?',
      a: '범죄피해자지원센터(☎ 1577-2584)에 전화하면 사전 상담과 서류 안내를 받을 수 있습니다.',
      source: '법무부',
      sourceUrl: 'https://www.moj.go.kr',
    },
  ],
  sources: [
    { name: '법무부', url: 'https://www.moj.go.kr' },
    { name: '국가법령정보센터', url: 'https://www.law.go.kr' },
    { name: '범죄피해자지원센터', url: 'https://www.kcvc.or.kr' },
  ],
};
