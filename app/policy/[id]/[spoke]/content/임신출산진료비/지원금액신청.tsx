import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          임신·출산 진료비 지원(국민행복카드)은 임신 1회당
          <strong>일태아 100만원, 다태아 140만원(기본)</strong>의 바우처를 지급합니다.
          분만취약지역 거주자는 20만원이 추가됩니다.
          건강보험공단 지사 방문 또는 협약 카드사에서 신청합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "국민행복카드로 얼마를 받을 수 있고, 어떻게 신청하나요?"
        지원 금액과 신청 방법을 한눈에 정리했습니다.
      </p>

      <section className="detail-card" id="amount">
        <h2 className="detail-card-head">지원 금액 (태아 수·지역별)</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>구분</th><th>기본 지원</th><th>분만취약지 추가</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>일태아(단태아)</strong></td>
                <td><strong>100만원</strong></td>
                <td>120만원</td>
              </tr>
              <tr>
                <td><strong>2태아</strong></td>
                <td><strong>200만원</strong> (140+60 추가)</td>
                <td>220만원</td>
              </tr>
              <tr>
                <td><strong>3태아 이상</strong></td>
                <td><strong>300만원</strong> (140+160 추가)</td>
                <td>320만원</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            다태아 추가 지원은 2024년 1월 1일 이후 임신한 경우로, 임신 20주 이상을 유지하거나 다태아 출산 시 지급됩니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="apply">
        <h2 className="detail-card-head">신청 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>카드사 신청:</strong> KB국민·신한·롯데·우리·하나카드 등 협약 카드사에 직접 발급 신청 (가장 간편)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>공단 방문:</strong> 국민건강보험공단 지사 방문 후 카드사 연계 신청
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>기존 카드:</strong> 해당 협약 카드사 카드 보유 시 앱·전화로 바우처 전환 신청
          </div>
          <div className="info-box">
            <strong>필요 서류:</strong> 임신확인서(의사 진단서) 또는 산모수첩, 신분증
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="eligibility">
        <h2 className="detail-card-head">신청 자격</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>대상:</strong> 건강보험 가입자 또는 피부양자로 임신·출산(유산·사산 포함)한 분
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>소득 조건:</strong> 없음. 건강보험 가입자라면 모두 해당됩니다.
          </div>
          <div className="info-box">
            <strong>의료급여 수급자:</strong> 별도 임신출산진료비 제도 이용 (보건소 문의)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            사용처, 잔액 사용 기간, 다태아 추가 지원 등<br />
            임신·출산 진료비 지원 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/pregnancy-medical-benefit" className="btn-cta">
            임신·출산 진료비 지원 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 임신출산지원금액신청SpokeContent: SpokeData = {
  h1: '국민행복카드 임신 출산 진료비, 일태아 100만원 다태아 140만원 신청 방법',
  breadcrumb: '지원금액신청',
  description:
    '임신·출산 진료비(국민행복카드): 일태아 100만원, 다태아 기본 140만원+추가(2태아 200만원, 3태아 300만원). 분만취약지 +20만원. KB·신한·롯데·우리·하나카드 신청.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '임신·출산 진료비는 얼마를 받나요?',
      a: '일태아는 100만원, 다태아는 기본 140만원에 태아 수에 따라 추가 지급됩니다. 2태아 총 200만원, 3태아 이상 총 300만원입니다. 분만취약지 거주자는 20만원이 추가됩니다.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.nhis.or.kr',
    },
    {
      q: '어디서 신청하나요?',
      a: 'KB국민·신한·롯데·우리·하나카드 등 협약 카드사에서 국민행복카드를 발급받거나, 국민건강보험공단 지사를 방문해 신청합니다.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.nhis.or.kr',
    },
    {
      q: '소득 기준이 있나요?',
      a: '없습니다. 건강보험 가입자 또는 피부양자로 임신·출산한 분이라면 모두 신청할 수 있습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '임신확인서가 없으면 신청이 안 되나요?',
      a: '임신확인서(의사 진단서) 또는 산모수첩이 필요합니다. 병원에서 발급받아 신청 시 제출하면 됩니다.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.nhis.or.kr',
    },
    {
      q: '유산한 경우에도 받을 수 있나요?',
      a: '네, 유산·사산의 경우에도 지원 대상입니다. 사용 기간은 공단에서 확인하세요.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.nhis.or.kr',
    },
  ],
  sources: [
    { name: '국민건강보험공단', url: 'https://www.nhis.or.kr' },
    { name: '보건복지부', url: 'https://www.mohw.go.kr' },
  ],
};
