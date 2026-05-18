import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          신생아특례 전세자금대출은 <strong>출산 후 2년 이내 자녀가 있는 무주택 가구</strong>가
          직접 전세 계약을 맺고 대출을 받는 방식입니다. 금리 <strong>연 1.1~3.3%</strong>, 한도 최대 3억원.
          LH 신혼부부 전세임대는 <strong>LH가 집을 계약한 후 재임대</strong>하는 방식으로,
          임대보증금 5%만 부담하면 됩니다. 소득 제한은 LH 전세임대가 더 엄격합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        두 제도의 핵심 차이는 '직접 대출이냐, LH 재임대냐'입니다.
        신생아특례 대출은 본인이 원하는 주택을 전세 계약하고 대출을 받아 보증금을 납부합니다.
        LH 전세임대는 LH가 집주인과 계약 당사자가 되므로 집주인이 동의해야 하며, 전세 계약서는 LH와 입주자 사이에 체결됩니다.
      </p>

      <section className="detail-card" id="compare-table">
        <h2 className="detail-card-head">신생아특례 전세대출 vs LH 전세임대 핵심 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>신생아특례 전세자금대출</th><th>LH 신혼부부 전세임대</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>대상</strong></td>
                <td>출산 후 2년 이내 자녀 있는 무주택</td>
                <td>혼인 7년 이내 신혼부부·한부모</td>
              </tr>
              <tr>
                <td><strong>방식</strong></td>
                <td>본인이 전세 계약 → 대출 수령</td>
                <td>LH가 전세 계약 → 재임대</td>
              </tr>
              <tr>
                <td><strong>금리/비용</strong></td>
                <td>연 1.1~3.3% (소득·자녀 수에 따라)</td>
                <td>지원금의 연 1~2% 월임대료</td>
              </tr>
              <tr>
                <td><strong>보증금 한도</strong></td>
                <td>전세보증금 5억 이하 주택, 대출 최대 3억</td>
                <td>수도권 2.4억 / 광역시 1.6억 / 기타 1.3억</td>
              </tr>
              <tr>
                <td><strong>소득 기준</strong></td>
                <td>부부합산 1억 3,000만원 이하</td>
                <td>도시근로자 월평균소득 70~90% 이하</td>
              </tr>
              <tr>
                <td><strong>자산 기준</strong></td>
                <td>순자산 5억 600만원 이하</td>
                <td>총자산 3억 3,700만원 이하 (2025년 기준)</td>
              </tr>
              <tr>
                <td><strong>주택 선택</strong></td>
                <td>자유 (보증금 5억 이하 전국)</td>
                <td>자유 (집주인 동의 필요)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="choice-guide">
        <h2 className="detail-card-head">상황별 선택 가이드</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>소득이 상대적으로 높은 경우:</strong> 신생아특례 전세자금대출. 부부합산 1억 3,000만원까지 신청 가능하여 소득 기준이 더 넓습니다.
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>초기 보증금 마련이 어려운 경우:</strong> LH 전세임대. 임대보증금 5%만 부담하므로 초기 자금 부담이 훨씬 적습니다.
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>고가 전세를 원하는 경우:</strong> 신생아특례 대출. 전세보증금 5억 이하 주택까지 대출 가능하여 선택 폭이 넓습니다.
          </div>
          <div className="info-box">
            <strong>중복 이용:</strong> 두 제도를 동시에 이용하는 것은 불가합니다. 하나를 선택해야 합니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            매입임대, 구입자금 지원, 분양 혜택까지<br />
            신혼부부 주거지원 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/newlywed-housing-support" className="btn-cta">신혼부부주거지원 전체 정보 보기 →</a>
        </div>
      </section>
    </>
  );
}

export const 신혼부부주거지원신생아특례전세대출vsLH전세임대SpokeContent: SpokeData = {
  h1: '신생아특례 전세자금대출 vs LH 신혼부부 전세임대 차이 비교',
  breadcrumb: '신생아특례전세대출vsLH전세임대',
  description:
    '신생아특례 전세자금대출(금리 1.1~3.3%, 최대 3억)과 LH 신혼부부 전세임대(임대보증금 5%, 월임대료 연 1~2%) 차이. 소득·자산 기준, 방식, 선택 기준 비교.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '신생아특례 대출과 LH 전세임대를 동시에 이용할 수 있나요?',
      a: '동시 이용은 불가합니다. 두 제도 모두 무주택 세대 대상이며, 하나의 주택에 대해 한 가지 지원만 받을 수 있습니다. 본인 상황에 맞는 제도를 선택해야 합니다.',
      source: '한국토지주택공사',
      sourceUrl: 'https://www.lh.or.kr',
    },
    {
      q: '신생아특례 대출의 금리 1.1%는 누구에게 적용되나요?',
      a: '부부합산 소득이 낮을수록 더 낮은 금리가 적용됩니다. 소득 2,000만원 이하이고 자녀 수가 많을 경우 최저 금리 1.1%가 가능합니다. 정확한 금리는 주택도시기금 홈페이지에서 확인하세요.',
      source: '한국토지주택공사',
      sourceUrl: 'https://www.lh.or.kr',
    },
    {
      q: 'LH 전세임대에서 집주인이 거부하면 어떻게 되나요?',
      a: '집주인이 LH와의 전세 계약을 거부하면 해당 주택은 이용할 수 없습니다. 다른 주택을 물색해야 하며, 당첨 후 일정 기간 내에 주택을 확정하지 못하면 당첨이 취소될 수 있습니다.',
      source: '한국토지주택공사',
      sourceUrl: 'https://www.lh.or.kr',
    },
    {
      q: '신생아특례 대출은 출산 전에도 신청할 수 있나요?',
      a: '출산 후 2년 이내에 신청해야 합니다. 임신 중에는 신청이 불가하며, 출생신고 이후부터 신청 자격이 발생합니다.',
      source: '한국토지주택공사',
      sourceUrl: 'https://www.lh.or.kr',
    },
    {
      q: 'LH 전세임대의 월임대료는 어떻게 계산하나요?',
      a: 'LH가 지원한 전세보증금의 연 1~2%(등급에 따라)를 12로 나눈 금액이 월임대료입니다. 예를 들어 LH 지원금 1억 5,000만원, 연 1.2% 적용 시 월임대료는 약 15만원입니다.',
      source: '한국토지주택공사',
      sourceUrl: 'https://www.lh.or.kr',
    },
  ],
  sources: [
    { name: '한국토지주택공사 LH 전세임대', url: 'https://www.lh.or.kr' },
    { name: '주택도시기금 신생아특례 전세대출', url: 'https://nhuf.molit.go.kr' },
  ],
};
