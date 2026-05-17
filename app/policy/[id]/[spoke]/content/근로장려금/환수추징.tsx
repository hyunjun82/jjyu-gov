import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          근로장려금은 소득·재산 기준 초과, 배우자 소득 누락 등 <strong>부정수급 적발 시 전액 환수</strong>됩니다.
          재산이 1억 7,000만원 이상 2억 4,000만원 미만이면 50%만 지급됩니다.
          부정수급 시 가산세와 최대 <strong>5년간 신청 자격 정지</strong> 패널티가 부과됩니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "받고 나서 나중에 환수된다고 하는데 어떤 경우에 환수되나요?"
        근로장려금 환수는 크게 자격 미달 환수와 부정수급 환수 두 가지로 나뉩니다.
        아래에서 정확하게 확인하세요.
      </p>

      <section className="detail-card" id="reason">
        <h2 className="detail-card-head">근로장려금 환수되는 이유 5가지</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>환수 사유</th><th>내용</th><th>결과</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>소득 기준 초과</td>
                <td>심사 결과 실제 소득이 가구 유형별 상한 초과 확인</td>
                <td>전액 또는 일부 환수</td>
              </tr>
              <tr>
                <td>재산 기준 초과</td>
                <td>가구원 전체 재산 2억 4,000만원 이상</td>
                <td>전액 환수</td>
              </tr>
              <tr>
                <td>배우자 소득 누락</td>
                <td>맞벌이 부부에서 배우자 소득 미신고로 합산 기준 초과</td>
                <td>부정수급 → 전액 환수 + 가산세</td>
              </tr>
              <tr>
                <td>중복 수급</td>
                <td>한 가구에서 2인이 각각 신청 (1가구 1신청 위반)</td>
                <td>부정수급 → 전액 환수 + 가산세</td>
              </tr>
              <tr>
                <td>소득 허위 신고</td>
                <td>실제보다 낮은 소득을 신고해 장려금 수령</td>
                <td>부정수급 → 전액 환수 + 가산세</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="penalty">
        <h2 className="detail-card-head">부정수급 적발 시 패널티</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>내용</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>원금 반환</td>
                <td>수령한 장려금 전액 반환</td>
              </tr>
              <tr>
                <td>과소신고가산세</td>
                <td>환수 금액의 10%</td>
              </tr>
              <tr>
                <td>납부지연가산세</td>
                <td>연 약 8% (납부 지연일 수에 비례)</td>
              </tr>
              <tr>
                <td>자격 정지</td>
                <td>최대 5년간 근로장려금 신청 자격 정지</td>
              </tr>
            </tbody>
          </table>
          <div className="warning-box" style={{ marginTop: 12 }}>
            <strong>주의:</strong> 단순 실수로 배우자 소득을 누락한 경우도 부정수급으로 간주됩니다.
            신청 전 반드시 배우자 소득을 합산해 확인하세요.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="partial">
        <h2 className="detail-card-head">재산 구간별 지급 비율 (감액 기준)</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>재산 합계액</th><th>지급 비율</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>1억 7,000만원 미만</td>
                <td>100% 전액 지급</td>
              </tr>
              <tr>
                <td>1억 7,000만원 이상 ~ 2억 4,000만원 미만</td>
                <td>50% 감액 지급</td>
              </tr>
              <tr>
                <td>2억 4,000만원 이상</td>
                <td>지급 불가 (환수 또는 신청 자격 없음)</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>재산 범위:</strong> 주택, 토지, 자동차, 전세보증금, 예금·금융재산 등 가구원 전체 합산 기준.
            부채는 차감하지 않습니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="prevent">
        <h2 className="detail-card-head">환수 피하는 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>① 배우자 소득 반드시 합산:</strong> 맞벌이 가구는 부부 합산 소득이 4,400만원 미만이어야 합니다.
            배우자 소득을 빠뜨리면 부정수급이 됩니다.
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>② 1가구 1신청 준수:</strong> 부부가 각각 신청하면 중복 수급이 됩니다.
            가구에서 한 명만 신청해야 합니다.
          </div>
          <div className="info-box">
            <strong>③ 재산 기준 사전 확인:</strong> 홈택스 모의계산 기능으로 신청 전에 소득·재산 기준을 미리 확인하세요.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            지급일, 조회 방법, 소득 기준 등<br />
            근로장려금 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/earned-income-tax-credit" className="btn-cta">
            근로장려금 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 환수추징SpokeContent: SpokeData = {
  h1: '근로장려금 환수 통지서 받았다면 | 이유 5가지와 이의신청 방법',
  breadcrumb: '환수·추징',
  description: '근로장려금 환수 이유 5가지: 소득 초과·재산 초과·배우자 소득 누락·중복 신청·허위 신고. 환수 통지서 받으면 90일 내 이의신청 가능. 부정수급 시 전액 환수+가산세+최대 5년 자격 정지.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '근로장려금을 받고 나서 환수된 경우가 있나요?',
      a: '네. 실제 소득이 기준 초과이거나 재산이 2억 4,000만원 이상이면 환수됩니다. 배우자 소득 누락 등 부정수급 시에도 전액 환수됩니다.',
      source: '국세청 근로장려금 안내',
      sourceUrl: 'https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?mi=2361&cntntsId=7963',
    },
    {
      q: '배우자 소득을 실수로 빠뜨렸는데 부정수급이 되나요?',
      a: '네. 실수라도 부정수급으로 간주돼 장려금이 전액 환수되고 가산세가 부과됩니다. 신청 전 반드시 배우자 소득을 포함해 확인하세요.',
      source: '삼쩜삼 근로장려금 안내',
      sourceUrl: 'https://blog.3o3.co.kr/2026_work_incentives',
    },
    {
      q: '재산이 1억 7,000만원이면 환수되나요?',
      a: '환수가 아니라 감액입니다. 재산 1억 7,000만~2억 4,000만원 구간은 장려금의 50%만 지급됩니다. 2억 4,000만원 이상이면 지급 자체가 안 됩니다.',
      source: '삼쩜삼 근로장려금 신청 안내',
      sourceUrl: 'https://blog.3o3.co.kr/2026_work_incentives',
    },
    {
      q: '부정수급 패널티는 얼마나 되나요?',
      a: '원금 반환 + 과소신고가산세(10%) + 납부지연가산세(연 약 8%) + 최대 5년 자격 정지가 부과됩니다.',
      source: '국세청 근로장려금 심사지급 안내',
      sourceUrl: 'https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?mi=2361&cntntsId=7963',
    },
    {
      q: '부부가 각각 따로 신청하면 어떻게 되나요?',
      a: '1가구 1신청이 원칙입니다. 부부가 각각 신청하면 중복 수급으로 부정수급 처리돼 환수 및 가산세 부과 대상이 됩니다.',
      source: '삼쩜삼 근로장려금 맞벌이 안내',
      sourceUrl: 'https://blog.3o3.co.kr/2026_work_incentives',
    },
  ],
  sources: [
    { name: '국세청 근로·자녀장려금 심사 및 지급', url: 'https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?mi=2361&cntntsId=7963' },
    { name: '삼쩜삼 2026 근로장려금 반기 신청 안내', url: 'https://blog.3o3.co.kr/2026_work_incentives' },
  ],
};
