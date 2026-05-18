import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          의료급여 노인 치과 보철 지원은 크게 <strong>완전틀니·부분틀니·치과임플란트</strong> 세 가지입니다.
          이가 하나도 없으면 완전틀니, 일부 치아가 남아 있으면 부분틀니,
          특정 치아를 대체하려면 임플란트를 선택합니다.
          모두 본인부담 <strong>1종 5%·2종 15%</strong>로 받을 수 있습니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        어떤 시술이 적합한지는 구강 상태에 따라 다릅니다.
        의료급여 지정 치과에서 진단 후 본인에게 맞는 치료 방법을 선택하면 됩니다.
      </p>

      <section className="detail-card" id="compare">
        <h2 className="detail-card-head">보철 종류별 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>종류</th><th>적용 상황</th><th>주기·한도</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>완전틀니 (레진상)</strong></td><td>상악 또는 하악 전체 치아 없음</td><td>7년에 1회</td></tr>
              <tr><td><strong>완전틀니 (금속상)</strong></td><td>전체 치아 없음 (내구성 높음)</td><td>7년에 1회</td></tr>
              <tr><td><strong>부분틀니 (클라스프)</strong></td><td>일부 치아가 남아 있음</td><td>7년에 1회</td></tr>
              <tr><td><strong>치과임플란트</strong></td><td>특정 치아를 뼈에 고정식으로 대체</td><td>평생 2개 한도</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="choice">
        <h2 className="detail-card-head">상황별 선택 가이드</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>치아가 하나도 없는 경우:</strong> 완전틀니 (레진상 또는 금속상 선택 가능)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>몇 개의 치아가 남은 경우:</strong> 부분틀니 (남은 치아에 걸쳐 사용)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>특정 치아를 고정식으로 원하는 경우:</strong> 임플란트 (뼈에 고정, 빼지 않음)
          </div>
          <div className="info-box">
            <strong>복합 사용:</strong> 틀니와 임플란트를 함께 사용하는 것도 가능 (구강 상태 따라)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="common">
        <h2 className="detail-card-head">공통 사항</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>대상:</strong> 만 65세 이상 의료급여 1종·2종 수급자
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>본인부담:</strong> 1종 5% / 2종 15%
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>사전 등록 필수:</strong> 시술 전 의료급여 지정 치과에서 공단 사전 등록
          </div>
          <div className="info-box">
            <strong>문의:</strong> ☎1577-1000 (국민건강보험공단)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            본인부담 비교, 임플란트 신청, 틀니 주기까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/medical-aid-elderly-denture" className="btn-cta">
            노인 틀니·임플란트 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 노인틀니임플란트완전틀니부분틀니임플란트종류비교SpokeContent: SpokeData = {
  h1: '노인 틀니 종류 비교, 완전틀니·부분틀니·임플란트 중 내 상황에 맞는 선택',
  breadcrumb: '완전틀니부분틀니임플란트종류비교',
  description:
    '의료급여 노인 보철: 완전틀니(전체 결손 7년1회)·부분틀니(일부 결손 7년1회)·임플란트(평생2개) 세 종류. 모두 1종 5%·2종 15% 본인부담. 지정 치과에서 사전 등록 후 본인 구강 상태에 맞는 시술 선택.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '틀니와 임플란트 중 어느 것이 더 좋은가요?',
      a: '임플란트는 빼지 않고 고정식이라 편리하고 씹는 힘이 강하지만, 골이식이 필요하거나 구강 상태에 따라 불가능한 경우도 있습니다. 틀니는 더 간단하게 시술이 가능합니다. 치과에서 본인의 구강 상태를 진단받고 결정하는 것이 좋습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '레진상 틀니와 금속상 틀니의 차이는 무엇인가요?',
      a: '레진상 틀니는 플라스틱 재질로 가볍고 조정이 쉬운 반면, 금속상 틀니는 금속 프레임으로 더 내구성이 강합니다. 둘 다 의료급여 급여 대상이며 본인부담은 동일합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '완전틀니를 하고 나서 임플란트도 받을 수 있나요?',
      a: '네. 완전틀니와 임플란트 한도는 별개이므로, 완전틀니 후에도 임플란트(평생 2개 한도)를 추가로 받을 수 있습니다. 구강 상태와 필요에 따라 결정하세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '지정 치과 목록은 어디서 확인하나요?',
      a: '국민건강보험공단 홈페이지(nhis.or.kr) 또는 ☎1577-1000으로 가까운 의료급여 지정 치과를 안내받을 수 있습니다.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.nhis.or.kr',
    },
    {
      q: '틀니 시술 기간은 얼마나 걸리나요?',
      a: '완전틀니나 부분틀니는 잇몸 상태 확인부터 최종 장착까지 보통 수 주에서 수개월이 소요됩니다. 임플란트는 뼈에 심는 과정이 포함되어 더 오래 걸릴 수 있습니다. 치과에서 상세 일정을 안내받으세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
  ],
  sources: [
    { name: '보건복지부 의료급여 틀니·임플란트 지원', url: 'https://www.mohw.go.kr' },
    { name: '국민건강보험공단', url: 'https://www.nhis.or.kr' },
  ],
};
