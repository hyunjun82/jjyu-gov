import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          LH 신혼·신생아 전세임대 I 유형은 <strong>혼인 7년 이내 무주택 신혼부부</strong> 또는
          <strong>6세 이하 자녀를 둔 한부모가족</strong>이 신청할 수 있습니다.
          소득 기준은 도시근로자 <strong>월평균소득 70% 이하</strong>(맞벌이 90% 이하),
          자산 기준은 총자산 <strong>3억 3,700만원 이하</strong>(자동차 4,563만원 이하 별도, 2025년 기준)입니다.
          신청은 <strong>LH청약플러스(apply.lh.or.kr)</strong>에서 온라인으로 합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        LH 전세임대는 입주자가 원하는 주택을 직접 구해오면 LH가 해당 집을 전세 계약한 뒤 입주자에게 재임대하는 방식입니다.
        임대보증금은 LH 지원 전세보증금의 5%만 부담하면 되어 초기 비용이 매우 적습니다.
        지원 한도는 수도권 최대 2억 4,000만원, 광역시 1억 6,000만원, 기타 지역 1억 3,000만원입니다.
      </p>

      <section className="detail-card" id="eligibility-table">
        <h2 className="detail-card-head">신혼·신생아 전세임대 I 자격 요건 한눈에</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>기준</th><th>비고</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>대상</strong></td>
                <td>혼인 7년 이내 신혼부부</td>
                <td>6세 이하 자녀 있는 한부모가족 포함</td>
              </tr>
              <tr>
                <td><strong>주택 보유</strong></td>
                <td>무주택 세대 구성원</td>
                <td>신청일 기준</td>
              </tr>
              <tr>
                <td><strong>소득(외벌이)</strong></td>
                <td>도시근로자 월평균소득 70% 이하</td>
                <td>2025년 기준 약 572만원/월(3인 가구, 5,717,900원)</td>
              </tr>
              <tr>
                <td><strong>소득(맞벌이)</strong></td>
                <td>도시근로자 월평균소득 90% 이하</td>
                <td>부부 합산 소득</td>
              </tr>
              <tr>
                <td><strong>총자산</strong></td>
                <td>3억 3,700만원 이하</td>
                <td>토지+건물 합산</td>
              </tr>
              <tr>
                <td><strong>자동차 자산</strong></td>
                <td>4,563만원 이하</td>
                <td>차량 기준가액</td>
              </tr>
              <tr>
                <td><strong>지원 한도</strong></td>
                <td>수도권 2.4억 / 광역시 1.6억 / 기타 1.3억</td>
                <td>전세보증금 범위 내</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="apply-method">
        <h2 className="detail-card-head">신청 방법 및 절차</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>① 공고 확인:</strong> LH청약플러스(apply.lh.or.kr) 또는 LH 콜센터(1600-1004)에서 모집 공고 확인. 보통 연 1~2회 모집.
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>② 온라인 신청:</strong> LH청약플러스 로그인 → 전세임대 모집 공고 → 신혼·신생아 전세임대 I 선택 → 신청서 작성 및 서류 업로드
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>③ 자격 심사 및 순위 결정:</strong> 소득·자산·혼인 기간 등 자격 심사 후 순위 결정(자녀 수, 혼인 기간 등 가점 적용)
          </div>
          <div className="info-box">
            <strong>④ 주택 물색 및 계약:</strong> 당첨 후 원하는 전세 주택을 직접 구해 LH에 통보 → LH가 집주인과 전세 계약 → 입주자와 재임대 계약 체결
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            매입임대, 구입자금 대출, 분양 지원까지<br />
            신혼부부 주거지원 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/newlywed-housing-support" className="btn-cta">신혼부부주거지원 전체 정보 보기 →</a>
        </div>
      </section>
    </>
  );
}

export const 신혼부부주거지원전세임대1자격혼인7년신청방법SpokeContent: SpokeData = {
  h1: '2026 신혼·신생아 전세임대 I 자격, 혼인 7년 이내 신청법',
  breadcrumb: '전세임대1자격혼인7년신청방법',
  description:
    'LH 신혼·신생아 전세임대 I: 혼인 7년 이내 무주택 신혼부부 또는 6세 이하 자녀 한부모. 소득 70%(맞벌이 90%) 이하. 지원 한도 수도권 2.4억. LH청약플러스(apply.lh.or.kr) 신청.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '혼인 7년이 지나도 자녀가 있으면 신청할 수 있나요?',
      a: '전세임대 I 유형은 혼인 7년 이내가 기준입니다. 혼인 7년이 초과된 경우에는 6세 이하 자녀가 있는 경우 신생아 특례 조건으로 일부 유형 신청이 가능할 수 있으나, 구체적인 자격은 해당 연도 LH 모집 공고를 확인해야 합니다.',
      source: '한국토지주택공사',
      sourceUrl: 'https://www.lh.or.kr',
    },
    {
      q: '원하는 지역 어디서나 전세 주택을 구할 수 있나요?',
      a: '전국 어디서나 원하는 전세 주택을 구할 수 있습니다. 단, 해당 주택이 LH의 전세임대 기준(전용면적, 구조, 권리관계 등)을 충족해야 합니다. 집주인이 전세임대에 동의해야 계약이 가능합니다.',
      source: '한국토지주택공사',
      sourceUrl: 'https://www.lh.or.kr',
    },
    {
      q: '임대보증금 5%는 얼마나 되나요?',
      a: 'LH 지원 전세보증금의 5%를 입주자가 부담합니다. 예를 들어 LH가 2억원을 지원하면 임대보증금은 1,000만원입니다. 나머지 전세보증금이 LH 지원 한도를 초과하는 경우 그 초과분은 입주자가 전액 부담해야 합니다.',
      source: '한국토지주택공사',
      sourceUrl: 'https://www.lh.or.kr',
    },
    {
      q: '자산 기준 총자산 3억 3,700만원은 어떻게 산정하나요?',
      a: '세대 구성원 전체가 보유한 토지와 건물의 공시가격을 합산한 금액입니다. 공시가격은 국토교통부 부동산 공시가격 알리미에서 확인할 수 있습니다.',
      source: '한국토지주택공사',
      sourceUrl: 'https://www.lh.or.kr',
    },
    {
      q: '당첨 후 주택을 못 구하면 어떻게 되나요?',
      a: '당첨 후 LH가 지정한 기간(보통 3개월) 내에 전세 주택을 구하지 못하면 당첨이 취소될 수 있습니다. 기간 내 적합한 주택을 찾지 못한 경우 LH에 사전에 연락하여 안내를 받으세요.',
      source: '한국토지주택공사',
      sourceUrl: 'https://www.lh.or.kr',
    },
  ],
  sources: [
    { name: '한국토지주택공사 LH 전세임대', url: 'https://www.lh.or.kr' },
    { name: 'LH청약플러스', url: 'https://apply.lh.or.kr' },
  ],
};
