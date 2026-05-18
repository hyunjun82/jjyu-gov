import type { SpokeData } from '../../page';
function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          청년도약계좌를 <strong>가입 3년 미만에 중도해지</strong>하면 정부기여금 전액이 환수되고 비과세 혜택도 소급 박탈됩니다.
          <strong>가입 3년 이상 해지</strong>하면 정부기여금의 <strong>60%</strong>를 받을 수 있습니다.
          단, <strong>사망·해외이주·퇴직·폐업 등 특별 중도해지 사유</strong>에 해당하면 기여금 전액 + 비과세가 유지됩니다.
        </p>
      </div>
      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        중도해지를 고려하고 있다면 3년이라는 기준점을 반드시 확인해야 합니다.
        가입 후 3년을 기준으로 기여금 지급 비율이 크게 달라지며, 특별 사유에 해당하는지 먼저 확인하는 것이 중요합니다.
      </p>
      <section className="detail-card" id="criteria">
        <h2 className="detail-card-head">중도해지 기여금 환수 기준 (3년 전후)</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>해지 시점</th><th>정부기여금</th><th>비과세 혜택</th></tr></thead>
            <tbody>
              <tr><td>가입 3년 미만</td><td>전액 환수 (0원)</td><td>소급 박탈 (이자세 납부)</td></tr>
              <tr><td>가입 3년 이상</td><td>60% 지급 (40% 환수)</td><td>유지 여부 금융기관 확인 필요</td></tr>
              <tr><td>특별 사유 해당</td><td>전액 지급 (100%)</td><td>유지</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>3년 기준 계산:</strong> 실제 납입 기간이 아닌 가입 계약일 기준 36개월입니다.
            납입을 쉬었던 기간도 가입 기간에 포함됩니다.
          </div>
        </div>
      </section>
      <section className="detail-card" id="special">
        <h2 className="detail-card-head">특별 중도해지 사유 (기여금 전액 지급)</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>특별 사유</th><th>비고</th></tr></thead>
            <tbody>
              <tr><td>가입자 사망 또는 해외이주</td><td>서류 제출 필요</td></tr>
              <tr><td>가입자 퇴직 (비자발적)</td><td>해고·권고사직 등</td></tr>
              <tr><td>사업 폐업</td><td>폐업신고서 제출</td></tr>
              <tr><td>천재지변</td><td>재해 증빙 필요</td></tr>
              <tr><td>장기 치료 필요 질병 (3개월 이상)</td><td>의사 진단서 첨부</td></tr>
              <tr><td>혼인</td><td>혼인신고 서류 제출 (2024년 추가)</td></tr>
              <tr><td>출산</td><td>출생증명서 제출 (2024년 추가)</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>자발적 퇴직·주택 구매는 특별 사유 미해당:</strong> 본인이 원해서 퇴직하거나
            집을 사기 위해 해지하는 경우는 일반 중도해지로 처리됩니다.
          </div>
        </div>
      </section>
      <div className="ad-slot">광고 영역</div>
      <section className="detail-card" id="checklist">
        <h2 className="detail-card-head">중도해지 전 체크리스트</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 10 }}>
            <strong>① 가입일 확인:</strong> 계약일로부터 36개월(3년) 경과 여부 확인. 납입 중단 기간도 가입 기간에 포함.
          </div>
          <div className="info-box" style={{ marginBottom: 10 }}>
            <strong>② 특별 사유 해당 여부:</strong> 비자발적 퇴직·폐업·혼인·출산 등 해당 시 전액 지급 가능. 담당 은행 확인 필수.
          </div>
          <div className="info-box" style={{ marginBottom: 10 }}>
            <strong>③ 부분인출 우선 검토:</strong> 가입 2년 경과 시 납입원금의 40% 부분인출 가능. 계좌 유지 상태에서 자금 활용 가능.
          </div>
          <div className="info-box">
            <strong>④ 비과세 영향 확인:</strong> 3년 미만 해지 시 이자소득세 15.4% 소급 납부. 담당 은행에서 세금 예상액 확인 후 결정.
          </div>
        </div>
      </section>
      <div className="ad-slot">광고 영역</div>
      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            부분인출 조건, 신규가입 종료 현황, 청년미래적금 갈아타기 등<br />
            청년도약계좌 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/youth-asset-formation" className="btn-cta">
            청년도약계좌 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}
export const 청년도약계좌중도해지기여금3년전후환수기준SpokeContent: SpokeData = {
  h1: '청년도약계좌 중도해지 시 기여금 환수 기준, 3년 전후 차이',
  breadcrumb: '중도해지기여금3년전후환수기준',
  description: '청년도약계좌 중도해지 시 가입 3년 미만이면 정부기여금 전액 환수, 3년 이상이면 60% 지급됩니다. 사망·해외이주·퇴직·폐업 등 특별 사유는 기여금 전액 지급 및 비과세 유지됩니다.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    { q: '청년도약계좌 2년 만에 해지하면 기여금을 못 받나요?', a: '네. 가입 3년 미만 중도해지 시 정부기여금 전액이 환수됩니다. 비과세 혜택도 소급 박탈되어 이자소득세를 납부해야 합니다.', source: '서민금융진흥원 청년도약계좌 중도해지 안내', sourceUrl: 'https://www.kinfa.or.kr' },
    { q: '가입 4년 후 해지하면 기여금을 얼마나 받나요?', a: '3년 이상 해지 시 정부기여금의 60%를 받을 수 있습니다. 나머지 40%는 환수됩니다.', source: '서민금융진흥원 청년도약계좌 안내', sourceUrl: 'https://www.kinfa.or.kr' },
    { q: '퇴직 후 생활비가 없어서 해지하면 특별 사유가 되나요?', a: '비자발적 퇴직(해고·권고사직)은 특별 중도해지 사유에 해당하여 기여금 전액을 받을 수 있습니다. 단, 자발적 퇴직(자진 사직)은 해당되지 않습니다.', source: '서민금융진흥원 청년도약계좌 안내', sourceUrl: 'https://www.kinfa.or.kr' },
    { q: '집을 사려고 해지하면 특별 사유에 해당하나요?', a: '아니요. 주택 구매는 청년도약계좌의 특별 중도해지 사유에 해당하지 않습니다. 일반 중도해지로 처리되어 3년 미만이면 기여금 전액이 환수됩니다.', source: '서민금융진흥원 청년도약계좌 안내', sourceUrl: 'https://www.kinfa.or.kr' },
    { q: '중도해지 시 비과세 혜택은 어떻게 되나요?', a: '3년 미만 중도해지 시 비과세 혜택이 소급 박탈됩니다. 이자소득세 15.4%를 납부해야 합니다. 특별 사유 해당 시에는 비과세 혜택이 유지됩니다.', source: '서민금융진흥원 청년도약계좌 안내', sourceUrl: 'https://www.kinfa.or.kr' },
  ],
  sources: [
    { name: '서민금융진흥원 청년도약계좌 중도해지 안내', url: 'https://www.kinfa.or.kr' },
    { name: '금융위원회 청년도약계좌 제도 안내', url: 'https://www.fsc.go.kr' },
  ],
};
