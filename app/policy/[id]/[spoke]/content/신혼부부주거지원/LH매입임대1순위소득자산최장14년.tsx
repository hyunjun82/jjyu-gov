import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          LH 신혼·신생아 매입임대 I 유형은 <strong>1순위(무주택 + 혼인 7년 이내 + 자녀 있음)</strong>로
          신청하면 우선 공급받을 수 있습니다.
          소득 기준은 도시근로자 월평균소득 <strong>70% 이하</strong>(자녀 있으면 100% 이하),
          임대 기간은 최초 2년 계약 후 2년씩 4회 재계약으로 <strong>최장 10년</strong>,
          자녀가 있으면 2회 추가 연장하여 <strong>최장 14년</strong> 거주 가능합니다.
          임대료는 시세의 <strong>30~40% 수준</strong>입니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        매입임대는 LH가 기존 주택을 매입한 뒤 저렴한 임대료로 공급하는 방식입니다.
        전세임대와 달리 입주자가 직접 주택을 구하는 것이 아니라 LH가 보유한 매입임대 주택 중에서 선택합니다.
        1순위 신청이 가능한 요건을 충족하면 경쟁이 낮은 우선 공급 대상에 포함됩니다.
      </p>

      <section className="detail-card" id="eligibility-table">
        <h2 className="detail-card-head">매입임대 I 순위·소득·자산 기준</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>1순위</th><th>2순위</th><th>비고</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>기본 요건</strong></td>
                <td>혼인 7년 이내 + 자녀 있음</td>
                <td>혼인 7년 이내 (자녀 무관)</td>
                <td>무주택 필수</td>
              </tr>
              <tr>
                <td><strong>소득 기준</strong></td>
                <td>월평균소득 100% 이하</td>
                <td>월평균소득 70% 이하</td>
                <td>자녀 있으면 100% 적용</td>
              </tr>
              <tr>
                <td><strong>총자산</strong></td>
                <td colSpan={2}>3억 4,500만원 이하 (자동차 4,542만원 이하 별도, 2025년 기준)</td>
                <td>공시가격 합산</td>
              </tr>
              <tr>
                <td><strong>자동차 자산</strong></td>
                <td colSpan={2}>4,542만원 이하</td>
                <td>차량 기준가액</td>
              </tr>
              <tr>
                <td><strong>임대 기간</strong></td>
                <td>최장 14년(자녀 있음)</td>
                <td>최장 10년</td>
                <td>2년씩 재계약</td>
              </tr>
              <tr>
                <td><strong>임대료</strong></td>
                <td colSpan={2}>시세의 30~40%</td>
                <td>등급별 차등</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="period-detail">
        <h2 className="detail-card-head">최장 14년 거주 기간 구조</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>최초 계약:</strong> 2년 (입주 시작)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>일반 재계약:</strong> 2년 × 4회 = 8년 추가 → 합계 최장 10년
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>자녀 있는 경우 추가 연장:</strong> 2년 × 2회 = 4년 추가 → 합계 최장 14년
          </div>
          <div className="info-box">
            <strong>재계약 조건:</strong> 재계약 시마다 소득·자산·무주택 요건 재확인. 요건 미충족 시 재계약 불가.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            전세임대, 구입자금 대출, 신청 방법까지<br />
            신혼부부 주거지원 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/newlywed-housing-support" className="btn-cta">신혼부부주거지원 전체 정보 보기 →</a>
        </div>
      </section>
    </>
  );
}

export const 신혼부부주거지원LH매입임대1순위소득자산최장14년SpokeContent: SpokeData = {
  h1: 'LH 신혼부부 매입임대 1순위 소득·자산 기준, 최장 14년 거주',
  breadcrumb: 'LH매입임대1순위소득자산최장14년',
  description:
    'LH 신혼·신생아 매입임대 I: 1순위(혼인 7년 이내 + 자녀). 소득 100% 이하. 임대 최장 14년(자녀 있음). 임대료 시세 30~40%. LH청약플러스 신청.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '매입임대와 전세임대 중 무엇이 더 유리한가요?',
      a: '매입임대는 LH 보유 주택에 입주하므로 원하는 위치·주택형을 직접 선택하기 어렵지만 임대료가 시세의 30~40%로 매우 저렴합니다. 전세임대는 원하는 집을 직접 구할 수 있지만 집주인 동의가 필요합니다. 가격 안정성을 원하면 매입임대, 거주지 선택 자유도가 중요하면 전세임대가 유리합니다.',
      source: '한국토지주택공사',
      sourceUrl: 'https://www.lh.or.kr',
    },
    {
      q: '자녀가 있으면 1순위인데, 태아도 포함되나요?',
      a: '일반적으로 출생신고가 완료된 자녀를 기준으로 합니다. 임신 중인 태아는 자녀 수에 포함되지 않을 수 있으나, 공고별로 기준이 다를 수 있으므로 해당 모집 공고를 반드시 확인하세요.',
      source: '한국토지주택공사',
      sourceUrl: 'https://www.lh.or.kr',
    },
    {
      q: '재계약 시 소득이 기준을 초과하면 어떻게 되나요?',
      a: '재계약 시 소득·자산 요건을 재확인합니다. 요건을 초과한 경우 재계약이 불허될 수 있으며, 계약 종료 시 퇴거해야 합니다. 다만 실제 적용 기준은 공고 시점의 지침을 따릅니다.',
      source: '한국토지주택공사',
      sourceUrl: 'https://www.lh.or.kr',
    },
    {
      q: '매입임대 주택의 위치는 어떻게 확인하나요?',
      a: 'LH청약플러스(apply.lh.or.kr)의 매입임대 모집 공고에서 공급 주택 목록과 위치를 확인할 수 있습니다. 모집 공고마다 공급 물량과 위치가 다르므로 공고 시점에 확인해야 합니다.',
      source: '한국토지주택공사',
      sourceUrl: 'https://www.lh.or.kr',
    },
    {
      q: '매입임대에 살면서 내 집 마련을 해도 되나요?',
      a: '매입임대 거주 중 주택을 취득하면 무주택 요건을 상실하여 재계약이 불가능합니다. 주택 취득 사실이 확인되면 계약 해지 및 퇴거 조치될 수 있으니 거주 중 주택 취득 시 LH에 즉시 신고해야 합니다.',
      source: '한국토지주택공사',
      sourceUrl: 'https://www.lh.or.kr',
    },
  ],
  sources: [
    { name: '한국토지주택공사 LH 매입임대', url: 'https://www.lh.or.kr' },
    { name: 'LH청약플러스', url: 'https://apply.lh.or.kr' },
  ],
};
