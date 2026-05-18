import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          가족돌봄휴가는 <strong>본인의 부모·자녀·배우자·조부모·손자녀</strong>와
          <strong>배우자의 부모·조부모</strong>의 질병·사고·노령·양육 등으로
          돌봄이 필요한 경우 사용할 수 있습니다.
          형제자매는 일반적으로 포함되지 않습니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        돌봄 사유는 질병·사고·노령뿐 아니라 자녀 양육(어린이집 휴원 시 등)도 포함됩니다.
        정확한 인정 범위는 취업규칙과 사업주 판단에 따라 다를 수 있으므로, 사전에 확인하는 것이 좋습니다.
      </p>

      <section className="detail-card" id="family">
        <h2 className="detail-card-head">돌봄 가능 가족 범위</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>관계</th><th>포함 여부</th><th>비고</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>배우자</strong></td><td>포함</td><td>법률혼·사실혼 모두</td></tr>
              <tr><td><strong>본인의 부모</strong></td><td>포함</td><td>친부모·양부모 모두</td></tr>
              <tr><td><strong>배우자의 부모</strong></td><td>포함</td><td>시부모·처부모</td></tr>
              <tr><td><strong>자녀</strong></td><td>포함</td><td>친자·입양아 모두</td></tr>
              <tr><td><strong>조부모</strong></td><td>포함</td><td>본인 및 배우자 측</td></tr>
              <tr><td><strong>손자녀</strong></td><td>포함</td><td></td></tr>
              <tr><td><strong>형제자매</strong></td><td>원칙 제외</td><td>취업규칙에 따라 다를 수 있음</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="reason">
        <h2 className="detail-card-head">인정되는 돌봄 사유</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>질병·부상:</strong> 가족이 아파서 병원 동행·간병이 필요한 경우
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>사고:</strong> 갑작스러운 사고로 긴급 돌봄이 필요한 경우
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>노령:</strong> 고령 부모 돌봄 (일상 보조, 병원 동행 등)
          </div>
          <div className="info-box">
            <strong>자녀 양육:</strong> 어린이집·학교 휴원·휴교, 자녀 응급 상황 등
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="proof">
        <h2 className="detail-card-head">증빙 서류</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>질병·부상:</strong> 진단서 또는 진료확인서 (필요 시)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>가족 관계:</strong> 가족관계증명서 (처음 신청 시 제출 가능)
          </div>
          <div className="info-box">
            <strong>자녀 양육:</strong> 어린이집·학교 휴원·휴교 통보 문자 등
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            연 10일 기준, 사업주 거부 대처, 가족돌봄휴직까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/family-care-leave" className="btn-cta">
            가족돌봄휴가 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 가족돌봄휴가돌봄가족범위부모자녀배우자SpokeContent: SpokeData = {
  h1: '가족돌봄휴가 돌봄 가족 범위, 부모·자녀·배우자·조부모 포함 여부와 사유',
  breadcrumb: '돌봄가족범위부모자녀배우자',
  description:
    '가족돌봄휴가 적용 가족: 본인·배우자 부모·조부모, 자녀·손자녀 포함. 형제자매 원칙 제외. 사유: 질병·사고·노령·자녀 양육(어린이집 휴원 등). 진단서·가족관계증명서 준비.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '배우자가 아파도 사용할 수 있나요?',
      a: '네. 배우자의 질병·부상도 가족돌봄휴가 사유에 해당합니다. 병원 동행·간병 등을 이유로 신청할 수 있습니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '어린이집이 갑자기 휴원하면 사용할 수 있나요?',
      a: '네. 자녀가 다니는 어린이집·학교 휴원·휴교로 자녀 돌봄이 필요한 경우도 가족돌봄휴가 사유에 해당합니다. 휴원 통보 문자 등을 사유 증빙으로 사용할 수 있습니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '형제가 크게 아픈데 사용할 수 없나요?',
      a: '형제자매는 원칙적으로 가족돌봄휴가 대상에 포함되지 않습니다. 다만 취업규칙이나 단체협약에서 형제자매를 포함하는 사업장도 있으므로 사업장 규정을 확인하세요.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '가족이 해외에 있어도 가족돌봄휴가를 쓸 수 있나요?',
      a: '돌봄이 필요한 가족이 해외에 있어 직접 돌봄이 어려울 경우 적용이 제한될 수 있습니다. 실질적인 돌봄 행위가 이루어지는 경우에 인정되므로 사전에 사업주 또는 ☎1350에서 확인하세요.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '사실혼 배우자도 포함되나요?',
      a: '사실혼 배우자도 가족관계로 인정되는 경우가 있으나, 법률혼보다 인정 기준이 엄격할 수 있습니다. 구체적인 상황은 ☎1350에서 상담받으세요.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
  ],
  sources: [
    { name: '고용노동부 가족돌봄휴가', url: 'https://www.moel.go.kr' },
    { name: '남녀고용평등법', url: 'https://www.law.go.kr' },
  ],
};
