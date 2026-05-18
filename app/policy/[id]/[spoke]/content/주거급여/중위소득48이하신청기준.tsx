import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          주거급여는 <strong>소득인정액이 기준 중위소득 48% 이하</strong>이면 신청할 수 있습니다.
          <strong>부양의무자 기준이 없어</strong> 부모·자녀 재산에 관계없이 본인 가구 기준으로만 판단하며,
          <strong>복지로(bokjiro.go.kr)</strong> 또는 주민센터에서 신청할 수 있습니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        중위소득 48% 기준이 가구 규모별로 어떻게 달라지는지,
        소득인정액 계산 방법은 무엇인지 확인하세요.
      </p>

      <section className="detail-card" id="income">
        <h2 className="detail-card-head">2026년 가구원별 중위소득 48% 기준</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>가구원 수</th><th>월 소득인정액 기준</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>1인</strong></td><td>1,114,166원</td></tr>
              <tr><td><strong>2인</strong></td><td>1,841,305원</td></tr>
              <tr><td><strong>3인</strong></td><td>2,357,329원</td></tr>
              <tr><td><strong>4인</strong></td><td>2,864,957원</td></tr>
              <tr><td><strong>5인</strong></td><td>3,347,868원</td></tr>
            </tbody>
          </table>
          <p style={{ fontSize: 13, color: '#8B95A1', marginTop: 8 }}>※ 정확한 기준은 복지로 또는 주민센터에서 확인하세요.</p>
        </div>
      </section>

      <section className="detail-card" id="formula">
        <h2 className="detail-card-head">소득인정액 계산 방식</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>소득인정액 =</strong> 실제 소득 + 재산의 소득 환산액
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>실제 소득:</strong> 근로소득, 사업소득, 이전소득 등
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>재산 환산:</strong> 부동산·금융자산을 소득으로 환산 (기본재산액 공제 후)
          </div>
          <div className="info-box">
            <strong>모의계산:</strong> 복지로(bokjiro.go.kr)에서 사전 확인 가능
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="apply">
        <h2 className="detail-card-head">신청 절차</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>1단계:</strong> 복지로 모의계산으로 수급 가능성 확인
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>2단계:</strong> 복지로(bokjiro.go.kr) 온라인 신청 또는 주민센터 방문
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>3단계:</strong> 소득·재산 조사 (담당 공무원이 확인)
          </div>
          <div className="info-box">
            <strong>4단계:</strong> 수급자 선정 후 다음 달부터 지급
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            지역별 임차급여 금액, 자가 수선유지급여, 임차·수선 급여 차이까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/housing-benefit" className="btn-cta">
            주거급여 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 주거급여중위소득48이하신청기준SpokeContent: SpokeData = {
  h1: '중위소득 48% 이하라면 주거급여 탈락 없이 신청할 수 있는 기준과 절차',
  breadcrumb: '중위소득48이하신청기준',
  description:
    '주거급여 신청 기준: 중위소득 48% 이하(1인 월 111만원·2인 184만원·4인 286만원). 부양의무자 기준 없음. 소득인정액=실제소득+재산환산액. 복지로(bokjiro.go.kr) 신청.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '재산이 조금 있는데 소득인정액이 기준을 넘을 수 있나요?',
      a: '재산도 소득으로 환산되어 소득인정액에 포함됩니다. 단, 기본재산액(지역별 공제액)을 제한 후 환산하므로 복지로에서 모의계산을 해보는 것이 좋습니다.',
      source: '국토교통부',
      sourceUrl: 'https://www.molit.go.kr',
    },
    {
      q: '부양의무자 기준이 없다는 게 자녀 소득도 반영 안 된다는 건가요?',
      a: '맞습니다. 주거급여는 부양의무자(자녀·부모 등) 소득·재산을 보지 않고 신청 가구의 소득인정액만으로 판단합니다.',
      source: '국토교통부',
      sourceUrl: 'https://www.molit.go.kr',
    },
    {
      q: '복지로에서 모의계산이 부정확할 수 있나요?',
      a: '복지로 모의계산은 참고용입니다. 실제 수급 여부는 주민센터의 공식 소득·재산 조사를 통해 최종 결정됩니다.',
      source: '국토교통부',
      sourceUrl: 'https://www.molit.go.kr',
    },
    {
      q: '신청 후 얼마 만에 받을 수 있나요?',
      a: '신청 후 소득·재산 조사를 거쳐 통상 30일 이내에 결과가 통보됩니다. 수급자로 선정되면 다음 달부터 지급이 시작됩니다.',
      source: '국토교통부',
      sourceUrl: 'https://www.molit.go.kr',
    },
    {
      q: '소득이 기준을 초과하면 바로 지급이 중단되나요?',
      a: '수급 중 소득이 기준을 초과하면 주민센터에 신고 의무가 있습니다. 변동 신고를 하지 않으면 과지급으로 환수될 수 있습니다.',
      source: '국토교통부',
      sourceUrl: 'https://www.molit.go.kr',
    },
  ],
  sources: [
    { name: '국토교통부 주거급여', url: 'https://www.molit.go.kr' },
    { name: '복지로', url: 'https://www.bokjiro.go.kr' },
    { name: '주거급여 콜센터', url: 'https://www.hb.go.kr' },
  ],
};
