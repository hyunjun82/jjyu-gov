import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          LH 전세임대의 <strong>임대보증금은 LH 지원 전세보증금의 5%</strong>입니다.
          월임대료는 <strong>LH 지원금의 연 1.2~2.2% 이자</strong>를 12로 나눈 금액입니다.
          예시: 전세보증금 2억원, LH 지원 1억 5,000만원 → 임대보증금 750만원(5%),
          월임대료 약 15~27만원(연 1.2~2.2%).
          LH 지원 한도를 초과하는 전세보증금 잔액은 입주자가 직접 부담합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        LH 전세임대의 비용 구조를 이해하려면 '전세보증금 전체'와 'LH 지원금'을 구분해야 합니다.
        LH는 자신이 지원한 금액에 대해 연 일정 이율의 이자를 입주자로부터 월임대료로 받습니다.
        입주자 자부담분(전세보증금 - LH 지원금)에 대해서는 별도 이자 부담은 없지만, 해당 금액을 직접 납부해야 합니다.
      </p>

      <section className="detail-card" id="cost-table">
        <h2 className="detail-card-head">LH 전세임대 비용 계산 예시표</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>예시 1 (수도권)</th><th>예시 2 (광역시)</th><th>비고</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>전세보증금 전체</strong></td>
                <td>2억원</td>
                <td>1억 5,000만원</td>
                <td>실제 전세 계약액</td>
              </tr>
              <tr>
                <td><strong>LH 지원금</strong></td>
                <td>1억 5,000만원</td>
                <td>1억 3,000만원</td>
                <td>지역별 한도 이내</td>
              </tr>
              <tr>
                <td><strong>임대보증금(5%)</strong></td>
                <td>750만원</td>
                <td>650만원</td>
                <td>LH 지원금 × 5%</td>
              </tr>
              <tr>
                <td><strong>입주자 자부담</strong></td>
                <td>5,000만원</td>
                <td>2,000만원</td>
                <td>전세보증금 - LH 지원금</td>
              </tr>
              <tr>
                <td><strong>월임대료(연 1.2%)</strong></td>
                <td>약 15만원</td>
                <td>약 13만원</td>
                <td>LH 지원금 × 1.2% ÷ 12</td>
              </tr>
              <tr>
                <td><strong>월임대료(연 2.2%)</strong></td>
                <td>약 27.5만원</td>
                <td>약 23.8만원</td>
                <td>소득 등급에 따라 차등</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="cost-detail">
        <h2 className="detail-card-head">비용 구조 핵심 정리</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>임대보증금(초기 납부):</strong> LH 지원금의 5%. 입주 시 LH에 납부. 퇴거 시 전액 환불.
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>월임대료(매월 납부):</strong> LH 지원금의 연 1.2~2.2% 이자를 12로 나눈 금액. 소득 등급이 낮을수록 낮은 이율 적용.
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>자부담 전세보증금:</strong> 전세보증금에서 LH 지원금을 뺀 금액. 입주자가 집주인에게 직접 납부. LH 지원 한도 초과분이므로 이자 없음.
          </div>
          <div className="info-box">
            <strong>지원 한도:</strong> 수도권 최대 2억 4,000만원 / 광역시 최대 1억 6,000만원 / 기타 지역 최대 1억 3,000만원. 한도 내에서 실제 전세보증금이 지원됨.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            전세임대 자격, 매입임대, 신생아특례 대출 비교까지<br />
            신혼부부 주거지원 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/newlywed-housing-support" className="btn-cta">신혼부부주거지원 전체 정보 보기 →</a>
        </div>
      </section>
    </>
  );
}

export const 신혼부부주거지원월임대료보증금임대보증금5SpokeContent: SpokeData = {
  h1: '신혼부부 전세임대 월임대료·임대보증금 5% 계산법',
  breadcrumb: '월임대료보증금임대보증금5%',
  description:
    'LH 전세임대 비용: 임대보증금 = LH 지원금의 5%. 월임대료 = LH 지원금의 연 1.2~2.2% ÷ 12. 자부담 = 전세보증금 - LH 지원금. 수도권 한도 2.4억.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '임대보증금 5%는 퇴거 시 돌려받을 수 있나요?',
      a: '네. LH에 납부한 임대보증금은 계약 종료 후 퇴거 시 전액 환불됩니다. 단, 임차 기간 중 손상·파손 등에 따른 원상복구 비용이 발생하면 해당 금액이 공제될 수 있습니다.',
      source: '한국토지주택공사',
      sourceUrl: 'https://www.lh.or.kr',
    },
    {
      q: '월임대료 이율은 소득에 따라 어떻게 달라지나요?',
      a: '소득 등급이 낮을수록 낮은 이율(연 1.2%)이 적용되고, 소득 등급이 높을수록 높은 이율(연 2.2%)이 적용됩니다. 정확한 등급별 이율은 해당 모집 공고 또는 LH에 직접 문의하세요.',
      source: '한국토지주택공사',
      sourceUrl: 'https://www.lh.or.kr',
    },
    {
      q: '전세보증금이 LH 지원 한도를 초과하면 어떻게 되나요?',
      a: '초과분은 입주자가 직접 집주인에게 납부해야 합니다. 예를 들어 전세보증금이 2억원이고 LH 지원 한도가 1억 5,000만원이라면, 나머지 5,000만원은 입주자 본인이 마련해야 합니다.',
      source: '한국토지주택공사',
      sourceUrl: 'https://www.lh.or.kr',
    },
    {
      q: '월임대료를 연체하면 어떻게 되나요?',
      a: '월임대료를 일정 기간 이상 연체하면 계약 해지 사유가 될 수 있습니다. 납부가 어려운 경우 LH에 사전에 연락하여 상황을 알리고 안내를 받는 것이 중요합니다.',
      source: '한국토지주택공사',
      sourceUrl: 'https://www.lh.or.kr',
    },
    {
      q: '자부담 전세보증금에도 이자가 발생하나요?',
      a: '아닙니다. 입주자가 집주인에게 직접 납부하는 자부담 전세보증금은 일반 전세 계약의 보증금이므로 이자 부담이 없습니다. 월임대료는 LH 지원금에 대해서만 발생합니다.',
      source: '한국토지주택공사',
      sourceUrl: 'https://www.lh.or.kr',
    },
  ],
  sources: [
    { name: '한국토지주택공사 LH 전세임대', url: 'https://www.lh.or.kr' },
    { name: 'LH청약플러스', url: 'https://apply.lh.or.kr' },
  ],
};
