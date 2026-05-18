import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          교육급여는 <strong>기준중위소득 50% 이하</strong> 가구의 초·중·고 재학생이 대상입니다.
          소득인정액(소득+재산 환산)이 기준 이하이면 신청 가능하며,
          복지로(bokjiro.go.kr) 또는 주민센터에서 자격 확인 및 신청을 할 수 있습니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        기준중위소득 50%는 기초생활보장 교육급여 수급 기준입니다.
        소득뿐 아니라 재산도 소득으로 환산해 합산하므로, 재산이 있어도 소득인정액이 기준 이하면 신청 가능합니다.
        정확한 소득인정액은 주민센터 또는 복지로 모의계산을 통해 확인하세요.
      </p>

      <section className="detail-card" id="standard">
        <h2 className="detail-card-head">2026년 기준중위소득 50% 기준 (가구원 수별)</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>가구원 수</th><th>기준중위소득 50%</th><th>비고</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>1인</strong></td><td>약 1,114,000원</td><td>월 소득인정액 기준</td></tr>
              <tr><td><strong>2인</strong></td><td>약 1,841,000원</td><td></td></tr>
              <tr><td><strong>3인</strong></td><td>약 2,357,000원</td><td></td></tr>
              <tr><td><strong>4인</strong></td><td>약 2,864,000원</td><td></td></tr>
              <tr><td><strong>5인</strong></td><td>약 3,347,000원</td><td></td></tr>
              <tr><td><strong>6인</strong></td><td>약 3,809,000원</td><td></td></tr>
            </tbody>
          </table>
          <p style={{ fontSize: 13, color: '#8B95A1', marginTop: 8 }}>※ 위 수치는 참고용이며, 정확한 기준은 보건복지부 고시 기준 적용. 복지로 모의계산 이용 권장.</p>
        </div>
      </section>

      <section className="detail-card" id="check">
        <h2 className="detail-card-head">자격 확인 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>복지로 모의계산:</strong> bokjiro.go.kr → 복지서비스 → 모의계산 → 교육급여
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>주민센터 상담:</strong> 거주지 행정복지센터 방문 — 소득·재산 조회 및 자격 안내
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>전화 문의:</strong> ☎1544-9654 (교육비 중앙상담센터) / ☎129 (복지상담)
          </div>
          <div className="info-box">
            <strong>소득인정액 계산:</strong> 근로소득 + 사업소득 + 재산 환산액 합산 — 정확한 산정은 담당자 확인 필요
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="target">
        <h2 className="detail-card-head">신청 가능 대상 요약</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>소득 기준:</strong> 기준중위소득 50% 이하 (소득인정액 기준)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>학생 기준:</strong> 초·중·고등학교 재학생 (가구 내 해당 학생 전원)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>재산 있어도 가능:</strong> 소득인정액(소득+재산 환산액)이 기준 이하면 신청 가능
          </div>
          <div className="info-box">
            <strong>기초수급자 자동 포함:</strong> 기초생활수급자(생계·의료·주거급여)도 교육급여 동시 신청 가능
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            지원 금액, 신청 방법, 고교 학비 지원까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/education-benefit" className="btn-cta">
            교육급여 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 교육급여중위소득50이하신청자격확인SpokeContent: SpokeData = {
  h1: '교육급여 신청 자격, 기준중위소득 50% 이하 해당 여부 확인 방법',
  breadcrumb: '중위소득50이하신청자격확인',
  description:
    '교육급여 자격: 기준중위소득 50% 이하 가구 초중고 재학생. 4인 가구 약 286만원 이하. 소득인정액(소득+재산 환산) 기준. 복지로 모의계산·주민센터 상담으로 확인. ☎1544-9654.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '맞벌이 부부인데 교육급여를 받을 수 있나요?',
      a: '맞벌이 부부라도 소득인정액이 기준중위소득 50% 이하면 신청 가능합니다. 맞벌이 가구는 부부 소득 중 낮은 소득의 일부를 차감하는 공제가 적용됩니다. 정확한 자격은 복지로 모의계산 또는 주민센터에서 확인하세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '집이 있어도 교육급여를 받을 수 있나요?',
      a: '네. 재산이 있어도 소득인정액(소득+재산 환산액)이 기준 이하면 받을 수 있습니다. 재산은 전부 소득으로 계산되는 것이 아니라 공제 후 일부만 환산되므로, 자가 주택이 있어도 받는 경우가 있습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '기초수급자이면 자동으로 교육급여도 받나요?',
      a: '기초생활수급자(생계·의료·주거급여)는 교육급여 소득기준도 충족하므로 함께 신청할 수 있습니다. 다만 자동 지급이 아니므로 별도 신청이 필요합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '가구원 수에 조부모도 포함되나요?',
      a: '주민등록상 같은 주소에 거주하는 가구원은 원칙적으로 포함됩니다. 다만 실제 부양 관계나 생계를 달리하는 경우 제외될 수 있습니다. 정확한 가구원 범위는 주민센터에서 확인하세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '중위소득 50% 기준은 매년 바뀌나요?',
      a: '네. 기준중위소득은 매년 8월에 다음 연도 기준을 고시합니다. 매년 조금씩 인상되므로 이전에 기준을 초과했더라도 다음 해에는 다시 확인해 보는 것이 좋습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
  ],
  sources: [
    { name: '보건복지부 교육급여', url: 'https://blog.bokjiro.go.kr/1810' },
    { name: '복지로 모의계산', url: 'https://www.bokjiro.go.kr' },
  ],
};
