import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          가정폭력·성폭력 보호시설 퇴소자는 <strong>주거지원시설 입주</strong>,
          유자녀 <strong>월 6만원</strong> 자립지원금, 취업 훈련, 심리·법률 상담,
          긴급 생계비까지 5대 지원을 받을 수 있습니다.
          <strong>여성가족부</strong>가 운영하며 1366(여성긴급전화) 또는 시·군·구청 여성가족 부서에서 신청합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        보호시설을 퇴소하면 주거·생계·취업을 동시에 해결해야 합니다.
        퇴소 전 미리 자립지원금 신청 요건을 확인해 두면 퇴소 직후부터 끊김 없이 지원을 받을 수 있습니다.
      </p>

      <section className="detail-card" id="items">
        <h2 className="detail-card-head">퇴소 후 받을 수 있는 5대 지원 항목</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>지원</th><th>내용</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>주거지원시설 입주</strong></td><td>자립·자활 의지 있는 퇴소자 우선 (장기 보호 퇴소 포함)</td></tr>
              <tr><td><strong>유자녀 자립지원금</strong></td><td>월 6만원 × 자녀당, 자녀 만 18세까지</td></tr>
              <tr><td><strong>취업 훈련</strong></td><td>여성새로일하기센터(113) 직업교육·취업 알선</td></tr>
              <tr><td><strong>심리·법률 상담</strong></td><td>퇴소 후 심리·법률·양육 상담 지속 제공</td></tr>
              <tr><td><strong>긴급 생계·의료</strong></td><td>긴급 생계비·의료비 지원</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="eligibility">
        <h2 className="detail-card-head">신청 자격 — 누가 받을 수 있나</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>대상:</strong> 가정폭력·성폭력 보호시설(쉼터·일시지원·장기 보호) 입소자 및 퇴소자
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>조건:</strong> 자립·자활 의지가 있는 본인
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>동반 자녀:</strong> 함께 지원 가능 (유자녀 자립지원금 추가)
          </div>
          <div className="info-box">
            <strong>외국인:</strong> 체류 자격 무관하게 일부 지원 가능
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="apply">
        <h2 className="detail-card-head">신청 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>1단계:</strong> 위기 시 1366(여성긴급전화) 24시간 즉시 상담
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>2단계:</strong> 거주지 시·군·구청 여성가족 부서 또는 복지로(bokjiro.go.kr)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>3단계:</strong> 임시 보호 → 보호시설 입소 → 자립지원금 신청
          </div>
          <div className="info-box">
            <strong>비밀 보호:</strong> 본인 정보가 가해자에게 노출되지 않도록 최우선 보호
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            주거지원시설 입주 조건, 취업 훈련 연계, 중복 수령 가능 여부까지<br />
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

export const 가정폭력자립지원금퇴소후자립금조건SpokeContent: SpokeData = {
  h1: '가정폭력 보호시설 퇴소 후 받는 자립지원금 금액과 신청 조건',
  breadcrumb: '퇴소후자립금조건',
  description:
    '가정폭력·성폭력 보호시설 퇴소자 5대 지원: 주거지원시설 입주, 유자녀 월 6만원(만 18세까지), 취업 훈련, 심리·법률 상담, 긴급 생계비. 1366 또는 시군구청 여성가족 부서에서 신청.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '퇴소 후 받을 수 있는 지원이 어떤 것이 있나요?',
      a: '주거지원시설 입주, 유자녀 자립지원금(월 6만원), 취업 훈련, 심리·법률 상담, 긴급 생계·의료비 지원까지 5가지를 받을 수 있습니다.',
      source: '여성가족부',
      sourceUrl: 'https://www.mogef.go.kr',
    },
    {
      q: '보호시설 퇴소자 자립지원금 신청 조건은 무엇인가요?',
      a: '가정폭력·성폭력 보호시설 입소·퇴소자로서 자립·자활 의지가 있으면 신청 가능합니다. 외국인 피해자도 일부 지원이 됩니다.',
      source: '여성가족부',
      sourceUrl: 'https://www.mogef.go.kr',
    },
    {
      q: '어디서 신청하나요?',
      a: '1366(여성긴급전화, 24시간) 또는 거주지 시·군·구청 여성가족 부서, 복지로(bokjiro.go.kr)에서 신청할 수 있습니다.',
      source: '여성가족부',
      sourceUrl: 'https://www.mogef.go.kr',
    },
    {
      q: '유자녀 자립지원금은 얼마인가요?',
      a: '자녀 1명당 월 6만원이며, 자녀가 만 18세가 되는 달까지 매월 지급됩니다. 자녀가 2명이면 월 12만원을 받습니다.',
      source: '여성가족부',
      sourceUrl: 'https://www.mogef.go.kr',
    },
    {
      q: '본인 정보가 가해자에게 노출될 우려가 있나요?',
      a: '비밀 보호가 최우선입니다. 1366은 24시간 운영되며 본인 정보가 가해자에게 노출되지 않도록 안전 조치가 적용됩니다.',
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
