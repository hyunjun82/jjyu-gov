import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          가족돌봄휴가는 <strong>연 최대 10일, 1일 단위</strong>의 단기 휴가이고,
          가족돌봄휴직은 <strong>최대 90일, 30일 이상 단위</strong>의 장기 휴직입니다.
          두 제도는 별개 권리이며, 단기 돌봄은 휴가를 먼저 활용하고
          장기 돌봄이 필요하면 휴직을 이어 사용할 수 있습니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        두 제도 모두 무급 원칙이나 가족돌봄휴가는 저소득 근로자에게 일당 지원이 있고,
        가족돌봄휴직은 별도 지원이 없습니다.
        사업주 거부 기준도 휴직이 더 엄격합니다.
      </p>

      <section className="detail-card" id="compare">
        <h2 className="detail-card-head">가족돌봄휴가 vs 가족돌봄휴직 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>가족돌봄휴가 (단기)</th><th>가족돌봄휴직 (장기)</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>최대 기간</strong></td><td>연 10일</td><td>최대 90일</td></tr>
              <tr><td><strong>사용 단위</strong></td><td>1일 단위</td><td>30일 이상</td></tr>
              <tr><td><strong>임금</strong></td><td>무급 (저소득 일당 지원)</td><td>무급 (별도 지원 없음)</td></tr>
              <tr><td><strong>적용 사유</strong></td><td>단기 질병·사고·양육 등</td><td>장기 간호·요양 등</td></tr>
              <tr><td><strong>사업주 거부</strong></td><td>비교적 제한적</td><td>대체 인력 등 요건 더 엄격</td></tr>
              <tr><td><strong>분할 사용</strong></td><td>10일 범위 내 자유</td><td>3회 이내 분할</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="strategy">
        <h2 className="detail-card-head">효율적인 활용 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>단기 급성 돌봄:</strong> 가족돌봄휴가 1~3일 사용 → 상황 안정 후 복귀
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>장기 간병 필요:</strong> 가족돌봄휴가 10일 소진 → 가족돌봄휴직으로 전환 (최대 90일)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>연차 병행:</strong> 가족돌봄휴가 10일 + 본인 연차 → 최대 25일 안팎 연속 돌봄 가능
          </div>
          <div className="info-box">
            <strong>주의:</strong> 두 제도는 동시 사용 불가, 순차 사용만 가능
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="apply">
        <h2 className="detail-card-head">각 제도 신청 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>가족돌봄휴가:</strong> 사업주에게 직접 신청 (사전 2~3일 또는 사후 통보)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>가족돌봄휴직:</strong> 사업주에게 휴직 신청서 제출 (휴직 시작 30일 전 원칙)
          </div>
          <div className="info-box">
            <strong>문의:</strong> ☎1350 (고용노동부 콜센터)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            연 10일 기준, 사업주 거부 대처, 돌봄 가족 범위까지<br />
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

export const 가족돌봄휴가가족돌봄휴직과휴가차이장기단기SpokeContent: SpokeData = {
  h1: '가족돌봄휴가 vs 가족돌봄휴직 차이, 단기 10일과 장기 90일 선택 기준',
  breadcrumb: '가족돌봄휴직과휴가차이장기단기',
  description:
    '가족돌봄휴가(연 10일·1일 단위·단기) vs 가족돌봄휴직(최대 90일·30일 이상·장기). 두 제도 별개 권리로 순차 사용 가능. 단기 후 장기 전환 전략, 연차 병행으로 최대 25일+ 돌봄. ☎1350.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '가족돌봄휴가 10일을 다 써도 가족돌봄휴직을 쓸 수 있나요?',
      a: '네. 두 제도는 별개이므로 휴가 10일을 모두 소진한 후에도 가족돌봄휴직(최대 90일)을 별도로 신청할 수 있습니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '가족돌봄휴직을 먼저 쓰고 나서 휴가를 쓸 수 있나요?',
      a: '두 제도는 순서 없이 사용 가능합니다. 장기 돌봄 후 단기 휴가가 필요한 경우에도 연 한도(10일) 내에서 가족돌봄휴가를 사용할 수 있습니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '가족돌봄휴직 90일도 무급인가요?',
      a: '네. 가족돌봄휴직도 기본적으로 무급입니다. 가족돌봄휴가처럼 저소득 지원 사업이 별도로 없으므로 사전에 생활비 계획을 세우는 것이 중요합니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '가족돌봄휴직은 30일 이하로 쓸 수 없나요?',
      a: '가족돌봄휴직의 최소 단위는 30일입니다. 30일 미만의 단기 돌봄은 가족돌봄휴가(1일 단위)로 대응하세요.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '노인장기요양 등급이 있는 부모를 돌볼 때 어느 제도가 유리한가요?',
      a: '장기 요양이 필요한 경우 가족돌봄휴직(최대 90일)이 적합합니다. 단기 응급 방문은 가족돌봄휴가를 활용하고, 지속적인 간호가 필요하면 휴직을 신청하는 것이 좋습니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
  ],
  sources: [
    { name: '고용노동부 가족돌봄휴가·휴직', url: 'https://www.moel.go.kr' },
    { name: '남녀고용평등법', url: 'https://www.law.go.kr' },
  ],
};
