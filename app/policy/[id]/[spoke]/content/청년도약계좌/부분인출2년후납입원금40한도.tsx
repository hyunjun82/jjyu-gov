import type { SpokeData } from '../../page';
function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          청년도약계좌는 <strong>가입 2년 경과 후</strong> 납입원금의 <strong>40% 이내</strong>에서 부분인출이 가능합니다.
          부분인출 후에도 계좌는 유지되며, 만기 시 나머지 기여금은 정상 지급됩니다.
          단, 인출한 금액에 해당하는 기여금은 지급되지 않으며 <strong>부분인출은 1회만</strong> 허용됩니다.
        </p>
      </div>
      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        목돈이 갑자기 필요할 때 청년도약계좌를 통째로 해지하면 기여금을 잃게 됩니다.
        부분인출 제도를 활용하면 계좌를 유지하면서 원금의 일부를 찾을 수 있어 급전 마련에 도움이 됩니다.
        단, 2년이 지났는지, 인출 한도가 얼마인지 반드시 확인하세요.
      </p>
      <section className="detail-card" id="condition">
        <h2 className="detail-card-head">부분인출 조건 한눈에 보기</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>항목</th><th>내용</th></tr></thead>
            <tbody>
              <tr><td>인출 가능 시점</td><td>가입일로부터 2년 경과 후</td></tr>
              <tr><td>인출 한도</td><td>납입원금의 40% 이내</td></tr>
              <tr><td>인출 횟수</td><td>1회 (추가 인출 불가)</td></tr>
              <tr><td>계좌 유지 여부</td><td>인출 후에도 계좌 유지</td></tr>
              <tr><td>인출금에 대한 기여금</td><td>지급 안 됨</td></tr>
              <tr><td>잔액에 대한 기여금</td><td>만기 시 정상 지급</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>납입원금 기준:</strong> 인출 한도는 총 납입원금(이자·기여금 제외)의 40%입니다.
            예를 들어 월 70만원씩 24개월(2년) 납입 시 원금은 1,680만원이며, 인출 한도는 672만원입니다.
          </div>
        </div>
      </section>
      <section className="detail-card" id="example">
        <h2 className="detail-card-head">납입 금액별 부분인출 한도 계산 예시</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>월 납입액</th><th>2년 납입 원금</th><th>부분인출 한도 (40%)</th></tr></thead>
            <tbody>
              <tr><td>70만원 (최대)</td><td>1,680만원</td><td>672만원</td></tr>
              <tr><td>50만원</td><td>1,200만원</td><td>480만원</td></tr>
              <tr><td>30만원</td><td>720만원</td><td>288만원</td></tr>
              <tr><td>10만원</td><td>240만원</td><td>96만원</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>2년 미만은 인출 불가:</strong> 가입 후 24개월이 지나지 않았다면 부분인출을 신청할 수 없습니다.
            이 경우 전체 중도해지 또는 만기까지 유지 중 선택해야 합니다.
          </div>
        </div>
      </section>
      <div className="ad-slot">광고 영역</div>
      <section className="detail-card" id="impact">
        <h2 className="detail-card-head">부분인출 vs 중도해지 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>항목</th><th>부분인출</th><th>중도해지 (3년 미만)</th></tr></thead>
            <tbody>
              <tr><td>기여금 손실</td><td>인출금 해당분만 손실</td><td>전액 환수</td></tr>
              <tr><td>비과세 혜택</td><td>유지</td><td>소급 박탈</td></tr>
              <tr><td>계좌 유지</td><td>유지 (만기까지 계속)</td><td>계좌 폐쇄</td></tr>
              <tr><td>수령 가능 금액</td><td>원금의 40% 즉시 수령</td><td>납입 원금 전액 수령</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>웬만하면 부분인출이 유리:</strong> 중도해지보다 부분인출이 기여금 손실이 적습니다.
            단, 부분인출은 1회뿐이므로 필요한 금액을 한 번에 신중하게 결정해야 합니다.
          </div>
        </div>
      </section>
      <div className="ad-slot">광고 영역</div>
      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            중도해지 기여금 환수 기준, 신규가입 종료 현황, 청년미래적금 연계 등<br />
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
export const 청년도약계좌부분인출2년후납입원금40한도SpokeContent: SpokeData = {
  h1: '청년도약계좌 부분인출, 가입 2년 후 납입원금 40% 한도 조건',
  breadcrumb: '부분인출2년후납입원금40한도',
  description: '청년도약계좌 부분인출은 가입 2년 경과 후 납입원금의 40% 이내에서 1회 가능합니다. 인출 후에도 계좌는 유지되며 잔액에 대한 기여금은 만기 시 정상 지급됩니다.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    { q: '청년도약계좌 부분인출은 언제부터 가능한가요?', a: '가입일로부터 2년(24개월)이 경과한 후부터 부분인출을 신청할 수 있습니다. 2년 미만이면 신청 자체가 불가능합니다.', source: '서민금융진흥원 청년도약계좌 안내', sourceUrl: 'https://www.kinfa.or.kr' },
    { q: '부분인출 한도는 얼마인가요?', a: '납입원금(이자·기여금 제외)의 40% 이내입니다. 월 70만원씩 2년 납입 시 원금 1,680만원의 40%인 672만원이 최대 인출 한도입니다.', source: '서민금융진흥원 청년도약계좌 안내', sourceUrl: 'https://www.kinfa.or.kr' },
    { q: '부분인출 후에도 기여금을 계속 받을 수 있나요?', a: '인출한 금액에 해당하는 기여금은 지급되지 않습니다. 그러나 계좌에 남아있는 잔액에 대해서는 만기 시 기여금이 정상 지급됩니다.', source: '서민금융진흥원 청년도약계좌 안내', sourceUrl: 'https://www.kinfa.or.kr' },
    { q: '부분인출은 몇 번까지 할 수 있나요?', a: '부분인출은 1회만 허용됩니다. 한 번 인출하면 추가 부분인출은 불가능하므로 필요한 금액을 한 번에 신중하게 결정해야 합니다.', source: '서민금융진흥원 청년도약계좌 안내', sourceUrl: 'https://www.kinfa.or.kr' },
    { q: '중도해지보다 부분인출이 유리한가요?', a: '네. 중도해지(3년 미만)는 기여금 전액이 환수되지만, 부분인출은 인출 금액 해당분만 기여금이 빠집니다. 계좌도 유지되므로 가능하면 중도해지보다 부분인출을 선택하는 것이 좋습니다.', source: '서민금융진흥원 청년도약계좌 안내', sourceUrl: 'https://www.kinfa.or.kr' },
  ],
  sources: [
    { name: '서민금융진흥원 청년도약계좌 안내', url: 'https://www.kinfa.or.kr' },
    { name: '금융위원회 청년도약계좌 제도 안내', url: 'https://www.fsc.go.kr' },
  ],
};
