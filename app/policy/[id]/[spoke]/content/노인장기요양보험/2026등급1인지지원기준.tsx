import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          노인장기요양 등급은 <strong>1~5등급</strong>과 <strong>인지지원등급</strong>으로 구분됩니다.
          <strong>1등급</strong>이 가장 중증(일상생활 전적 의존),
          <strong>5등급</strong>은 경증, <strong>인지지원등급</strong>은 신체 기능은 양호하지만
          치매 증상이 있는 경우입니다.
          등급에 따라 이용 가능한 서비스와 한도액이 달라집니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        2026년 기준 등급별 판정 기준과 이용 한도를 확인하고
        본인 또는 가족이 어느 등급인지 파악하세요.
      </p>

      <section className="detail-card" id="grades">
        <h2 className="detail-card-head">2026 등급별 판정 기준</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>등급</th><th>장기요양인정점수</th><th>상태</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>1등급</strong></td><td>95점 이상</td><td>일상생활 전적 의존</td></tr>
              <tr><td><strong>2등급</strong></td><td>75점 이상~95점 미만</td><td>일상생활 상당 부분 의존</td></tr>
              <tr><td><strong>3등급</strong></td><td>60점 이상~75점 미만</td><td>일상생활 부분 의존</td></tr>
              <tr><td><strong>4등급</strong></td><td>51점 이상~60점 미만</td><td>일상생활 일부 지원 필요</td></tr>
              <tr><td><strong>5등급</strong></td><td>45점 이상~51점 미만</td><td>치매 해당자 (경증)</td></tr>
              <tr><td><strong>인지지원등급</strong></td><td>45점 미만</td><td>치매 증상+신체 기능 양호</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="service-by-grade">
        <h2 className="detail-card-head">등급별 이용 서비스</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>1~2등급:</strong> 시설급여(요양원 등) + 재가급여 모두 이용 가능
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>3~5등급:</strong> 재가급여 위주 이용 (시설 입소는 특정 조건 충족 시)
          </div>
          <div className="info-box">
            <strong>인지지원등급:</strong> 주야간보호·인지활동형 방문요양·치매안심센터 연계
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="process">
        <h2 className="detail-card-head">등급 판정 절차</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>1단계:</strong> 신청 (공단 지사 방문·전화 1577-1000·온라인)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>2단계:</strong> 방문조사 (조사원이 가정 방문, 52개 항목 평가)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>3단계:</strong> 등급판정위원회 심사 (의사소견서 포함)
          </div>
          <div className="info-box">
            <strong>4단계:</strong> 결과 통보 (신청 후 30일 이내)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            신청 대상, 본인부담금, 집에서 받는 재가서비스까지<br />
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

export const 노인장기요양보험2026등급1인지지원기준SpokeContent: SpokeData = {
  h1: '2026 노인장기요양 등급 기준, 1등급부터 인지지원등급까지 한눈에',
  breadcrumb: '2026등급1인지지원기준',
  description:
    '2026 노인장기요양 등급: 1등급(95점↑ 전적의존)~5등급(45점~51점), 인지지원등급(치매+신체양호). 1~2등급 시설·재가 모두, 3~5등급 재가 위주. 판정 30일 이내. 국민건강보험공단 1577-1000.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '점수가 낮을수록 등급이 낮은 건가요?',
      a: '네. 장기요양인정점수가 높을수록 중증(1등급)입니다. 95점 이상이 1등급이며 45점 미만은 인지지원등급입니다.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.longtermcare.or.kr',
    },
    {
      q: '인지지원등급은 요양원을 이용할 수 없나요?',
      a: '인지지원등급은 원칙적으로 시설급여(요양원) 이용이 어렵습니다. 주야간보호, 인지활동형 방문요양 등 재가 위주 서비스를 이용합니다.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.longtermcare.or.kr',
    },
    {
      q: '등급이 낮게 나왔을 때 이의신청이 가능한가요?',
      a: '네. 판정 결과에 이의가 있으면 결과 통보일로부터 90일 이내에 이의신청을 할 수 있습니다.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.longtermcare.or.kr',
    },
    {
      q: '52개 항목 방문조사는 어떤 내용인가요?',
      a: '신체기능(12개), 인지기능(7개), 행동변화(14개), 간호처치(9개), 재활(10개) 등 52개 항목을 조사원이 직접 평가합니다.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.longtermcare.or.kr',
    },
    {
      q: '갱신은 얼마마다 해야 하나요?',
      a: '장기요양인정 유효기간은 최소 1년이며, 만료 전 갱신신청을 해야 합니다. 중증도에 따라 유효기간이 다를 수 있습니다.',
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
