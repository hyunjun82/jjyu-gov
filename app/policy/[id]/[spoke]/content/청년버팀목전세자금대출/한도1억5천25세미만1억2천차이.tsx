import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      {/* 빠른 답변 */}
      <div className="answer-box">
        <p>
          청년버팀목전세자금대출 기본 한도는 <strong>1억 5천만원</strong>(전세보증금의 80% 이내)입니다.
          단, <strong>만 25세 미만 단독세대주</strong>는 <strong>1억 2천만원</strong>으로 낮습니다.
          이는 면적 기준도 다른데, 25세 미만은 전용 <strong>60㎡ 이하</strong>로 제한됩니다.
        </p>
      </div>

      {/* 서론 */}
      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        같은 청년버팀목 대출인데 왜 나이에 따라 한도가 다른지 궁금하셨을 겁니다.
        주택도시기금은 25세 미만 단독세대주를 소규모 주거에 유도하고 과도한 부채를 방지하기 위해
        한도와 면적 기준을 별도로 설정하고 있습니다.
      </p>

      {/* H2-1: 한도 비교 */}
      <section className="detail-card" id="limit-compare">
        <h2 className="detail-card-head">나이별 대출 한도 및 조건 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr>
                <th>구분</th>
                <th>기본(만 25세 이상)</th>
                <th>25세 미만 단독세대주</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>대출 한도</td>
                <td><strong>1억 5천만원</strong></td>
                <td><strong>1억 2천만원</strong></td>
              </tr>
              <tr>
                <td>전세보증금 상한</td>
                <td>3억원 이하</td>
                <td>3억원 이하(동일)</td>
              </tr>
              <tr>
                <td>LTV(보증금 대비 비율)</td>
                <td>80% 이내</td>
                <td>80% 이내(동일)</td>
              </tr>
              <tr>
                <td>전용면적 기준</td>
                <td>85㎡ 이하</td>
                <td><strong>60㎡ 이하</strong></td>
              </tr>
              <tr>
                <td>소득 기준</td>
                <td>연소득 5,000만원 이하</td>
                <td>연소득 5,000만원 이하(동일)</td>
              </tr>
              <tr>
                <td>대출 기간</td>
                <td>최초 2년(4회 연장, 최대 10년)</td>
                <td>최초 2년(4회 연장, 최대 10년)</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box">
            <strong>핵심 포인트:</strong> 25세 미만 단독세대주가 1억 5천만원을 받으려면
            만 25세 생일이 지난 후 재신청하거나, 세대원이 있는 세대(신혼부부 등)이어야 합니다.
            만 25세 생일 이후에는 자동으로 기본 한도 적용을 신청 가능합니다.
          </div>
        </div>
      </section>

      {/* H2-2: 신혼부부 특례 */}
      <section className="detail-card" id="newlywed">
        <h2 className="detail-card-head">신혼부부는 소득 기준 완화 적용</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr>
                <th>구분</th>
                <th>일반 청년</th>
                <th>신혼부부</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>소득 기준</td>
                <td>연소득 5,000만원 이하</td>
                <td><strong>연소득 7,500만원 이하</strong></td>
              </tr>
              <tr>
                <td>한도</td>
                <td>1억 5천만원</td>
                <td>1억 5천만원(동일)</td>
              </tr>
              <tr>
                <td>우대금리</td>
                <td>기본 금리</td>
                <td>0.2%p 추가 우대</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box">
            <strong>신혼부부 기준:</strong> 대출 신청일 기준 혼인 기간 7년 이내 부부.
            예비신혼부부(3개월 내 혼인 예정)도 포함됩니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      {/* H2-3: 실제 대출 가능액 계산 */}
      <section className="detail-card" id="calculation">
        <h2 className="detail-card-head">실제 받을 수 있는 금액 계산 방법</h2>
        <div className="detail-card-body">
          <p style={{ fontSize: 15, lineHeight: 1.8, margin: '0 0 16px' }}>
            한도와 LTV(80%) 중 작은 금액이 실제 대출 가능액입니다.
          </p>
          <table className="compare-table">
            <thead>
              <tr>
                <th>전세보증금</th>
                <th>80% 계산액</th>
                <th>25세 미만 실제 한도</th>
                <th>25세 이상 실제 한도</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1억원</td>
                <td>8,000만원</td>
                <td>8,000만원</td>
                <td>8,000만원</td>
              </tr>
              <tr>
                <td>1억 5천만원</td>
                <td>1억 2천만원</td>
                <td><strong>1억 2천만원</strong></td>
                <td>1억 2천만원</td>
              </tr>
              <tr>
                <td>2억원</td>
                <td>1억 6천만원</td>
                <td><strong>1억 2천만원(한도 적용)</strong></td>
                <td>1억 5천만원(한도 적용)</td>
              </tr>
              <tr>
                <td>3억원</td>
                <td>2억 4천만원</td>
                <td><strong>1억 2천만원(한도 적용)</strong></td>
                <td>1억 5천만원(한도 적용)</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box">
            <strong>계산 방식:</strong> min(전세보증금 × 80%, 대출 한도).
            전세보증금이 높을수록 한도 상한이 결정적인 변수가 됩니다.
          </div>
        </div>
      </section>

      {/* H2-4: 주의사항 */}
      <section className="detail-card" id="caution">
        <h2 className="detail-card-head">대출 신청 전 꼭 확인할 것</h2>
        <div className="detail-card-body">
          <div className="info-box">
            <strong>세대주 요건:</strong> 단독세대주 여부는 주민등록상 세대 기준입니다.
            부모님과 같은 세대라면 단독세대주가 아니므로, 전입신고로 단독세대를 분리해야 합니다.
          </div>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>기금e든든 사전심사 활용:</strong> 집을 계약하기 전에 기금e든든
            (enhuf.molit.go.kr)에서 사전심사를 신청하면, 내 나이·소득 기준에 맞는
            실제 한도와 금리를 미리 확인할 수 있습니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      {/* CTA */}
      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            청년버팀목전세자금대출 금리·신청 절차·우대 조건 전체를 확인하세요.
          </p>
          <a href="/policy/youth-housing-support" className="btn-cta">청년버팀목전세자금대출 전체 정보 보기 →</a>
        </div>
      </section>
    </>
  );
}

export const 청년버팀목전세자금대출한도1억5천25세미만1억2천차이SpokeContent: SpokeData = {
  h1: '청년버팀목전세자금대출 한도 1.5억원, 25세 미만은 1.2억원 차이 이유',
  breadcrumb: '한도1억5천25세미만1억2천차이',
  description:
    '청년버팀목전세자금대출 기본 한도는 1억 5천만원이지만, 만 25세 미만 단독세대주는 1억 2천만원으로 낮습니다. 면적 기준(60㎡)과 나이별 실제 대출 가능액을 표로 비교합니다.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '만 25세 미만인데 1억 5천만원을 받는 방법이 있나요?',
      a: '만 25세 생일 이후에 신청하거나, 신혼부부 등 세대원이 있는 경우라면 기본 한도 1억 5천만원 적용을 받을 수 있습니다. 단독세대주 기준이 아닌 경우 담당 은행에 확인하세요.',
      source: '주택도시기금 청년버팀목전세자금대출 안내',
      sourceUrl: 'https://nhuf.molit.go.kr',
    },
    {
      q: '전세보증금이 1억 5천만원인데 실제로 얼마를 받을 수 있나요?',
      a: '전세보증금 1억 5천만원의 80%는 1억 2천만원입니다. 25세 미만은 한도도 1억 2천만원이므로 그대로 받을 수 있습니다. 25세 이상도 1억 2천만원(한도 1억 5천만원이지만 80%로 계산)을 받습니다.',
      source: '주택도시기금 청년버팀목전세자금대출 안내',
      sourceUrl: 'https://nhuf.molit.go.kr',
    },
    {
      q: '25세 미만 단독세대주의 면적 기준 60㎡는 어떻게 계산하나요?',
      a: '전용면적 기준으로 60㎡ 이하입니다. 등기부등본 또는 건축물대장에 표시된 전용면적으로 확인합니다. 공급면적(분양면적)이 아닌 전용면적을 기준으로 하므로 반드시 확인하세요.',
      source: '주택도시기금 청년버팀목전세자금대출 안내',
      sourceUrl: 'https://nhuf.molit.go.kr',
    },
    {
      q: '신혼부부는 소득 7,500만원까지 신청이 가능한가요?',
      a: '네, 신혼부부(혼인 7년 이내)는 부부 합산 연소득 7,500만원 이하까지 신청 가능합니다. 일반 청년의 5,000만원보다 완화된 기준이 적용됩니다.',
      source: '주택도시기금 청년버팀목전세자금대출 안내',
      sourceUrl: 'https://nhuf.molit.go.kr',
    },
    {
      q: '기금e든든 사전심사를 먼저 하면 어떤 점이 좋나요?',
      a: '집 계약 전에 대출 가능 여부, 한도, 금리를 미리 확인할 수 있어 계약 후 낭패를 방지합니다. 사전심사 결과는 3개월간 유효하며, 기금e든든(enhuf.molit.go.kr)에서 온라인으로 신청합니다.',
      source: '주택도시기금 기금e든든 안내',
      sourceUrl: 'https://enhuf.molit.go.kr',
    },
  ],
  sources: [
    { name: '주택도시기금 청년버팀목전세자금대출 안내', url: 'https://nhuf.molit.go.kr' },
    { name: '기금e든든 사전심사 서비스', url: 'https://enhuf.molit.go.kr' },
  ],
};
