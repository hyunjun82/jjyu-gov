import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          노인장기요양보험은 <strong>65세 이상</strong> 또는 <strong>65세 미만 노인성 질병</strong>
          (치매·뇌혈관질환 등)이 있는 분이 신청할 수 있습니다.
          <strong>국민건강보험공단에 신청</strong>하면 30일 이내 등급을 판정받으며,
          등급에 따라 <strong>재가서비스 또는 시설 입소</strong>를 이용할 수 있습니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        신청 자격과 이용 가능한 서비스 종류를 먼저 파악한 후 신청하면
        판정 과정이 더 수월합니다.
      </p>

      <section className="detail-card" id="eligibility">
        <h2 className="detail-card-head">신청 대상</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>구분</th><th>기준</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>65세 이상</strong></td><td>노인성 질병 여부와 관계없이 신청 가능</td></tr>
              <tr><td><strong>65세 미만</strong></td><td>치매, 뇌혈관질환, 파킨슨병 등 노인성 질병 보유 시</td></tr>
              <tr><td><strong>의사소견서</strong></td><td>신청 시 제출 (공단 지정 의사 소견서)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="grade">
        <h2 className="detail-card-head">장기요양 등급 기준</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>등급</th><th>상태</th><th>이용 서비스</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>1등급</strong></td><td>일상생활 전적 의존 (95점 이상)</td><td>시설·재가 모두</td></tr>
              <tr><td><strong>2등급</strong></td><td>일상생활 상당 부분 의존 (75점~95점)</td><td>시설·재가 모두</td></tr>
              <tr><td><strong>3~5등급</strong></td><td>부분 의존 (60점~75점 미만)</td><td>재가 위주</td></tr>
              <tr><td><strong>인지지원등급</strong></td><td>치매 증상 있으나 신체 기능 양호</td><td>주야간보호·인지활동형 등</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="service">
        <h2 className="detail-card-head">이용 가능한 서비스</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>재가급여:</strong> 방문요양, 방문목욕, 방문간호, 주야간보호, 단기보호
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>시설급여:</strong> 노인요양시설, 노인요양공동생활가정 (24시간 돌봄)
          </div>
          <div className="info-box">
            <strong>복지용구:</strong> 휠체어, 욕창방지용 매트리스 등 구입·대여 지원
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            본인부담금 기준, 등급 판정 절차, 시설 vs 재가 비교까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/long-term-care-elderly" className="btn-cta">
            노인장기요양보험 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 노인장기요양보험신청대상등급기준서비스SpokeContent: SpokeData = {
  h1: '노인장기요양보험 신청 대상과 등급 판정 기준, 집에서 받을 수 있는 서비스',
  breadcrumb: '신청대상등급기준서비스',
  description:
    '노인장기요양보험: 65세 이상 또는 65세 미만 치매·뇌혈관질환 등 대상. 등급 1~5+인지지원등급. 재가급여(방문요양 등)·시설급여. 국민건강보험공단(1577-1000) 신청, 30일 내 판정.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '65세가 안 됐는데 치매 진단을 받았다면 신청할 수 있나요?',
      a: '네. 65세 미만이라도 치매, 뇌혈관질환, 파킨슨병 등 노인성 질병으로 진단받은 경우 신청 가능합니다.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.longtermcare.or.kr',
    },
    {
      q: '등급 판정은 얼마나 걸리나요?',
      a: '신청 후 30일 이내에 등급 판정 결과가 통보됩니다. 방문조사와 등급판정위원회 심사를 거칩니다.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.longtermcare.or.kr',
    },
    {
      q: '집에서 요양사를 받을 수 있나요?',
      a: '재가급여 중 방문요양 서비스를 이용하면 요양보호사가 가정을 방문해 돌봄 서비스를 제공합니다. 1~5등급 및 인지지원등급이 이용 가능합니다.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.longtermcare.or.kr',
    },
    {
      q: '인지지원등급은 어떤 서비스를 받나요?',
      a: '인지지원등급은 신체 기능은 양호하지만 치매 증상이 있는 경우로, 주야간보호·인지활동형 방문요양·치매안심센터 연계 서비스 등을 이용할 수 있습니다.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.longtermcare.or.kr',
    },
    {
      q: '의사소견서는 어디서 받나요?',
      a: '공단 지정 의사가 작성한 소견서가 필요합니다. 신청 전 담당 주치의 또는 가까운 병·의원에서 발급받을 수 있습니다.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.longtermcare.or.kr',
    },
  ],
  sources: [
    { name: '국민건강보험공단 장기요양', url: 'https://www.longtermcare.or.kr' },
    { name: '보건복지부', url: 'https://www.mohw.go.kr' },
    { name: '찾기쉬운 생활법령정보', url: 'https://www.easylaw.go.kr' },
  ],
};
