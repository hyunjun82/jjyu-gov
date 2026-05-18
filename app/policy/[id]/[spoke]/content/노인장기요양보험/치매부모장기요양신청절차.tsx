import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          부모님이 치매 진단을 받았다면 <strong>국민건강보험공단(1577-1000)</strong>에
          장기요양 신청을 하면 됩니다.
          신청 후 <strong>방문조사 → 등급판정위원회 심사 → 결과 통보</strong> 순으로 진행되며,
          전체 과정은 <strong>30일 이내</strong>에 완료됩니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        치매 진단 후 절차를 모르면 시간을 낭비하기 쉽습니다.
        신청 단계별로 무엇을 준비해야 하는지 확인하세요.
      </p>

      <section className="detail-card" id="step">
        <h2 className="detail-card-head">신청부터 결과 통보까지 4단계</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>1단계 신청:</strong> 공단 지사 방문·전화(1577-1000)·온라인(longtermcare.or.kr) 중 선택
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>2단계 방문조사:</strong> 조사원이 가정 방문, 52개 항목(신체·인지·행동·간호·재활) 평가
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>3단계 등급판정위원회:</strong> 의사소견서 포함 심사, 1~5등급 또는 인지지원등급 결정
          </div>
          <div className="info-box">
            <strong>4단계 결과 통보:</strong> 신청일로부터 30일 이내 서면 통보
          </div>
        </div>
      </section>

      <section className="detail-card" id="docs">
        <h2 className="detail-card-head">신청 시 필요 서류</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>서류</th><th>비고</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>장기요양인정신청서</strong></td><td>공단 지사 비치·온라인 작성</td></tr>
              <tr><td><strong>의사소견서</strong></td><td>공단 지정 의사 발급 (65세 이상·노인성 질병)</td></tr>
              <tr><td><strong>신분증</strong></td><td>신청인 본인 또는 가족·대리인</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="tips">
        <h2 className="detail-card-head">치매 부모님 신청 시 유의사항</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>65세 미만 치매:</strong> 노인성 질병으로 인정되므로 신청 가능
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>의사소견서:</strong> 방문조사 전 미리 발급받으면 시간 단축
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>이의신청:</strong> 결과에 이의가 있으면 통보일로부터 90일 이내 가능
          </div>
          <div className="info-box">
            <strong>갱신:</strong> 인정 유효기간 만료 전 갱신신청 필수 (최소 1년)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            등급별 서비스, 본인부담금, 재가 vs 시설 선택 기준까지<br />
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

export const 노인장기요양보험치매부모장기요양신청절차SpokeContent: SpokeData = {
  h1: '부모님 치매 진단 받았다면 장기요양 신청부터 등급 판정까지 절차',
  breadcrumb: '치매부모장기요양신청절차',
  description:
    '치매 부모님 장기요양 신청: 공단(1577-1000) 신청 → 방문조사(52개 항목) → 등급판정위원회 → 30일 내 통보. 의사소견서 필수. 65세 미만 치매도 신청 가능. 이의신청 90일 내.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '치매 외에 다른 질환이 없어도 신청할 수 있나요?',
      a: '치매는 노인성 질병에 해당하므로 단독으로도 신청 가능합니다. 65세 이상이면 노인성 질병 여부와 관계없이 신청할 수 있습니다.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.longtermcare.or.kr',
    },
    {
      q: '방문조사 때 부모님 상태가 평소와 다를 수 있는데 어떻게 하나요?',
      a: '평소 상태를 보여주는 사진, 의료 기록, 처방전 등을 함께 제시하면 도움이 됩니다. 조사원에게 평소 상태를 충분히 설명하세요.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.longtermcare.or.kr',
    },
    {
      q: '의사소견서는 어느 병원에서나 발급받을 수 있나요?',
      a: '공단 지정 의사가 작성한 소견서가 필요합니다. 담당 주치의 또는 가까운 병·의원에서 발급받을 수 있으며, 공단 홈페이지에서 지정 의사를 확인할 수 있습니다.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.longtermcare.or.kr',
    },
    {
      q: '등급이 예상보다 낮게 나오면 어떻게 하나요?',
      a: '결과 통보일로부터 90일 이내에 이의신청을 할 수 있습니다. 추가 의료 자료나 전문의 소견서를 첨부하면 재심사에 도움이 됩니다.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.longtermcare.or.kr',
    },
    {
      q: '대리인이 신청할 수 있나요?',
      a: '가족이나 법정대리인이 대신 신청할 수 있습니다. 대리인의 신분증과 위임장(또는 가족관계증명서)을 지참하면 됩니다.',
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
