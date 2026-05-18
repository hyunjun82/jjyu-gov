import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      {/* 빠른 답변 */}
      <div className="answer-box">
        <p>
          <strong>1인 자영업자</strong>는 자영업자 고용보험에 임의가입(선택)이 가능합니다.
          <strong>직원이 있는 사업주</strong>는 직원을 의무가입시켜야 하고,
          사업주 본인은 별도로 임의가입할 수 있습니다.
          단, <strong>50인 이상 근로자를 고용한 사업주</strong>는 자영업자 고용보험에 가입 불가합니다.
        </p>
      </div>

      {/* 서론 */}
      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        직원 유무에 따라 자영업자 고용보험 가입 방식이 달라집니다.
        직원에 대한 고용보험 의무와 사업주 본인 가입은 별개이므로,
        두 가지를 혼동하지 않는 것이 중요합니다.
      </p>

      {/* H2-1: 직원 유무별 비교 */}
      <section className="detail-card" id="compare">
        <h2 className="detail-card-head">직원 있는 사업주 vs 1인 자영업자 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr>
                <th>구분</th>
                <th>1인 자영업자</th>
                <th>직원 있는 사업주</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>직원 고용보험</td>
                <td>해당 없음</td>
                <td><strong>의무가입</strong>(근로자는 무조건)</td>
              </tr>
              <tr>
                <td>사업주 본인 고용보험</td>
                <td><strong>임의가입(선택)</strong></td>
                <td><strong>임의가입(선택)</strong>(50인 미만)</td>
              </tr>
              <tr>
                <td>직원 보험료(사업주 부담)</td>
                <td>해당 없음</td>
                <td>직원 임금의 0.9%(고용보험)</td>
              </tr>
              <tr>
                <td>본인 보험료</td>
                <td>기준보수 × 2.25%</td>
                <td>기준보수 × 2.25%(직원과 별도)</td>
              </tr>
              <tr>
                <td>50인 이상 고용 시</td>
                <td>해당 없음</td>
                <td><strong>본인 임의가입 불가</strong></td>
              </tr>
            </tbody>
          </table>
          <div className="info-box">
            <strong>핵심 구분:</strong> 직원의 고용보험(의무)과 사업주 본인의 고용보험(임의)은
            완전히 별개입니다. 직원을 고용하면서 본인도 가입하려면 두 가지를 모두 별도로 납부합니다.
          </div>
        </div>
      </section>

      {/* H2-2: 보험료 납부 구조 */}
      <section className="detail-card" id="premium-structure">
        <h2 className="detail-card-head">직원 있는 사업주의 보험료 납부 구조</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr>
                <th>납부 항목</th>
                <th>대상</th>
                <th>보험료율</th>
                <th>납부자</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>직원 실업급여 보험료</td>
                <td>직원 임금</td>
                <td>1.8%(근로자 0.9% + 사업주 0.9%)</td>
                <td>사업주가 원천징수 후 납부</td>
              </tr>
              <tr>
                <td>자영업자 본인 보험료</td>
                <td>선택 등급 기준보수</td>
                <td>2.25%(전액 사업주 본인 부담)</td>
                <td>사업주 본인 납부</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box">
            <strong>예시:</strong> 직원 월급 250만원인 경우 사업주 부담 직원 보험료는
            22,500원(250만 × 0.9%). 자영업자 본인 3등급 가입 시 추가로 52,650원 납부.
            두 보험료는 근로복지공단에 합산 신고·납부합니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      {/* H2-3: 50인 이상 고용 시 */}
      <section className="detail-card" id="large-employer">
        <h2 className="detail-card-head">50인 이상 고용 시 사업주 본인 가입 불가</h2>
        <div className="detail-card-body">
          <p style={{ fontSize: 15, lineHeight: 1.8, margin: '0 0 16px' }}>
            근로자 50인 이상을 고용한 사업주는 고용보험법 제49조의2에 따라
            자영업자 고용보험에 가입할 수 없습니다.
          </p>
          <div className="info-box">
            <strong>기준 시점:</strong> 근로자 수는 보험 가입 신청일 기준으로 판단합니다.
            가입 당시 49인이었다가 이후 50인이 되어도 기존 가입은 유지됩니다.
            단, 50인이 된 상태에서 신규 가입은 불가합니다.
          </div>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>50인 이상 사업주의 대안:</strong> 자영업자 고용보험 가입이 불가하지만,
            임원 등의 자격으로 일반 고용보험에 가입 가능한 경우가 있으니
            근로복지공단 또는 노무사에게 확인하세요.
          </div>
        </div>
      </section>

      {/* H2-4: 정부 지원 차이 */}
      <section className="detail-card" id="subsidy-diff">
        <h2 className="detail-card-head">1인 vs 직원 있는 사업주 정부 지원 차이</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr>
                <th>구분</th>
                <th>1인 자영업자</th>
                <th>직원 있는 사업주(본인 보험)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>정부 지원율</td>
                <td>1~2등급 80%, 3~4등급 60%, 5~7등급 50%</td>
                <td>1~2등급 80%, 3~4등급 60%, 5~7등급 50%</td>
              </tr>
              <tr>
                <td>지원 기간</td>
                <td>최대 5년</td>
                <td>최대 5년</td>
              </tr>
              <tr>
                <td>직원 보험료 지원</td>
                <td>해당 없음</td>
                <td>두루누리 지원사업 별도 확인</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box">
            <strong>두루누리 지원:</strong> 직원 10인 미만 사업장의 경우, 저소득 직원의
            고용보험료를 지원하는 두루누리 지원사업도 별도로 활용할 수 있습니다.
            자영업자 본인 보험료 지원과는 별개입니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      {/* CTA */}
      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            자영업자 고용보험 가입 방법, 등급별 보험료, 폐업 후 실업급여 조건 전체를 확인하세요.
          </p>
          <a href="/policy/self-employed-employment-insurance" className="btn-cta">자영업자고용보험 전체 정보 보기 →</a>
        </div>
      </section>
    </>
  );
}

export const 자영업자고용보험직원있는사업주vs1인자영업차이SpokeContent: SpokeData = {
  h1: '직원 있는 사업주 vs 1인 자영업자 고용보험 가입 차이',
  breadcrumb: '직원있는사업주vs1인자영업차이',
  description:
    '1인 자영업자와 직원 있는 사업주의 고용보험 가입 방식 차이를 비교합니다. 직원은 의무가입, 사업주 본인은 임의가입(50인 미만). 보험료 납부 구조와 정부 지원 차이를 정리했습니다.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '직원이 1명 있는 사업주도 자영업자 고용보험에 가입할 수 있나요?',
      a: '네, 근로자 50인 미만 고용 사업주는 사업주 본인이 자영업자 고용보험에 임의가입할 수 있습니다. 직원 고용보험(의무)과는 별도로 신청합니다.',
      source: '근로복지공단 자영업자 고용보험 안내',
      sourceUrl: 'https://www.kcomwel.or.kr',
    },
    {
      q: '직원 보험료와 사업주 본인 보험료를 따로 납부해야 하나요?',
      a: '직원 고용보험료는 근로복지공단에 매월 신고·납부하고, 자영업자 본인 보험료는 별도로 납부합니다. 두 보험료를 합산 신고할 수도 있습니다.',
      source: '근로복지공단 자영업자 고용보험 안내',
      sourceUrl: 'https://www.kcomwel.or.kr',
    },
    {
      q: '직원을 50명 고용하면 자영업자 고용보험에 새로 가입할 수 없나요?',
      a: '맞습니다. 근로자 50인 이상을 고용한 사업주는 신규 가입이 불가합니다. 단, 기존에 가입 중이었다면 근로자 수가 50인이 되더라도 기존 가입은 유지됩니다.',
      source: '근로복지공단 자영업자 고용보험 안내',
      sourceUrl: 'https://www.kcomwel.or.kr',
    },
    {
      q: '1인 자영업자와 직원 있는 사업주의 정부 지원율이 다른가요?',
      a: '같습니다. 둘 다 1~2등급 선택 시 80%, 3~4등급 선택 시 60%, 5~7등급 선택 시 50% 지원을 받습니다. 지원 기간도 최대 5년으로 동일합니다.',
      source: '근로복지공단 자영업자 고용보험 안내',
      sourceUrl: 'https://www.kcomwel.or.kr',
    },
    {
      q: '두루누리 지원사업이란 무엇인가요?',
      a: '10인 미만 사업장의 저소득 직원 고용보험·국민연금 보험료를 정부가 지원하는 사업입니다. 자영업자 본인 보험료 지원과는 별개이며, 근로복지공단에서 별도 신청합니다.',
      source: '근로복지공단 두루누리 사회보험 안내',
      sourceUrl: 'https://www.kcomwel.or.kr',
    },
  ],
  sources: [
    { name: '근로복지공단 자영업자 고용보험 안내', url: 'https://www.kcomwel.or.kr' },
    { name: '고용·산재보험 토탈서비스', url: 'https://total.kcomwel.or.kr' },
  ],
};
