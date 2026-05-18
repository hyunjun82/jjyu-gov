import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          보호시설 퇴소 후에도 자녀가 있다면 <strong>자녀 1명당 월 6만원</strong>의
          유자녀 자립지원금이 자녀가 <strong>만 18세가 되는 달까지</strong> 지급됩니다.
          자녀가 2명이면 월 12만원, 3명이면 월 18만원을 받습니다.
          이 지원금은 한부모·아동수당 등 다른 복지와 <strong>중복 수령</strong>이 가능합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        자립지원금 신청 전 반드시 확인해야 할 유자녀 추가 지원 내용을 정리했습니다.
        자녀가 있다면 주거·생계 지원 외에 자녀 수에 따라 추가 지원금이 누적됩니다.
      </p>

      <section className="detail-card" id="amount">
        <h2 className="detail-card-head">유자녀 자립지원금 금액표</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>자녀 수</th><th>월 지원금</th><th>지급 기간</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>자녀 1명</strong></td><td>월 6만원</td><td>자녀 만 18세까지</td></tr>
              <tr><td><strong>자녀 2명</strong></td><td>월 12만원 (각각 6만원)</td><td>각 자녀 만 18세까지</td></tr>
              <tr><td><strong>자녀 3명</strong></td><td>월 18만원 (각각 6만원)</td><td>각 자녀 만 18세까지</td></tr>
              <tr><td><strong>지급 방식</strong></td><td>본인 계좌 매월 입금</td><td>퇴소 후에도 계속</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="eligibility">
        <h2 className="detail-card-head">유자녀 지원금 신청 요건</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>본인:</strong> 가정폭력·성폭력 보호시설 이용(입소·퇴소) 피해자
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>자녀:</strong> 보호시설 이용 당시 함께한 자녀 (만 18세 미만)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>퇴소 후:</strong> 퇴소 후에도 자녀가 만 18세 미만이면 계속 수령
          </div>
          <div className="info-box">
            <strong>신청처:</strong> 시·군·구청 여성가족 부서 또는 1366 연계 후 안내
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="overlap">
        <h2 className="detail-card-head">함께 받을 수 있는 다른 자녀 지원</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>아동수당:</strong> 만 8세 미만 자녀, 월 10만원 (중복 OK)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>부모급여:</strong> 만 0~1세 자녀 (중복 OK)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>한부모가족 아동양육비:</strong> 만 18세 미만 자녀, 월 21만원 (중복 OK)
          </div>
          <div className="info-box">
            <strong>가정양육수당:</strong> 어린이집 미이용 영유아 (중복 OK)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            주거지원시설 입주 조건, 취업 훈련 연계, 전체 신청 절차까지<br />
            자립지원금 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/dv-shelter-leaver-aid" className="btn-cta">
            가정폭력 보호시설 퇴소자 자립지원금 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 가정폭력자립지원금유자녀추가지원SpokeContent: SpokeData = {
  h1: '퇴소자 지원금 신청 전 알아야 할 유자녀 추가 지원 여부',
  breadcrumb: '유자녀추가지원',
  description:
    '가정폭력 보호시설 퇴소자 유자녀 자립지원금: 자녀 1명당 월 6만원, 만 18세까지. 자녀 2명이면 월 12만원. 아동수당·부모급여·한부모가족 아동양육비와 중복 수령 가능.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '유자녀 자립지원금은 얼마나 받나요?',
      a: '자녀 1명당 월 6만원이며, 자녀가 만 18세가 되는 달까지 매월 본인 계좌로 지급됩니다.',
      source: '여성가족부',
      sourceUrl: 'https://www.mogef.go.kr',
    },
    {
      q: '자녀가 2명이면 두 배로 받나요?',
      a: '네. 자녀 2명이면 각각 6만원씩 월 12만원, 3명이면 월 18만원을 받습니다.',
      source: '여성가족부',
      sourceUrl: 'https://www.mogef.go.kr',
    },
    {
      q: '퇴소 후 자녀 지원금을 계속 받을 수 있나요?',
      a: '네. 퇴소 후에도 자녀가 만 18세 미만이면 계속 수령합니다.',
      source: '여성가족부',
      sourceUrl: 'https://www.mogef.go.kr',
    },
    {
      q: '아동수당과 중복으로 받을 수 있나요?',
      a: '네. 아동수당(만 8세 미만 월 10만원), 부모급여, 한부모가족 아동양육비 등과 모두 중복 수령이 가능합니다.',
      source: '여성가족부',
      sourceUrl: 'https://www.mogef.go.kr',
    },
    {
      q: '신청은 어디서 하나요?',
      a: '거주지 시·군·구청 여성가족 부서 또는 1366(여성긴급전화, 24시간)으로 연락하면 신청 절차를 안내받을 수 있습니다.',
      source: '여성가족부',
      sourceUrl: 'https://www.mogef.go.kr',
    },
  ],
  sources: [
    { name: '여성가족부', url: 'https://www.mogef.go.kr' },
    { name: '여성가족부 가정폭력 피해자 지원', url: 'https://www.mogef.go.kr/sp/hrp/sp_hrp_f004.do' },
    { name: '복지로', url: 'https://www.bokjiro.go.kr' },
  ],
};
