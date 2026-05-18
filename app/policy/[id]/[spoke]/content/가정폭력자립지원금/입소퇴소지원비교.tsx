import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          입소 중에는 <strong>보호시설 내 생활 지원</strong>(식사·숙박·심리치료·법률 상담)이 제공되고,
          퇴소 후에는 <strong>주거지원시설 입주</strong>, <strong>유자녀 월 6만원</strong>,
          취업 훈련, 긴급 생계비 등 자립 지원으로 전환됩니다.
          입소 중과 퇴소 후 받는 지원이 다르므로 미리 파악해 두면 자립 계획을 세우기 쉽습니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        가정폭력·성폭력 피해자 지원은 입소 단계와 퇴소 후 단계로 나뉩니다.
        각 단계에서 받을 수 있는 지원을 비교해 자립 계획 수립에 활용하세요.
      </p>

      <section className="detail-card" id="compare">
        <h2 className="detail-card-head">입소 중 vs 퇴소 후 지원 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>입소 중</th><th>퇴소 후</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>주거</strong></td>
                <td>보호시설 내 무상 생활</td>
                <td>주거지원시설 입주 (최대 2~4년)</td>
              </tr>
              <tr>
                <td><strong>생계</strong></td>
                <td>시설 내 식사·생활 지원</td>
                <td>긴급 생계·의료비 지원</td>
              </tr>
              <tr>
                <td><strong>자녀</strong></td>
                <td>자녀 동반 보호</td>
                <td>유자녀 자립지원금 월 6만원 (만 18세까지)</td>
              </tr>
              <tr>
                <td><strong>상담</strong></td>
                <td>심리·법률·양육 상담 (시설 내)</td>
                <td>퇴소 후 사후 상담 지속 1년+</td>
              </tr>
              <tr>
                <td><strong>취업</strong></td>
                <td>직업교육 사전 상담 가능</td>
                <td>새일센터(113) 직업훈련·취업 알선</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="transition">
        <h2 className="detail-card-head">입소에서 퇴소로 전환 시 주의사항</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>주거 연속성:</strong> 퇴소 전에 주거지원시설 입주 신청 완료 권장
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>유자녀 신청 시기:</strong> 퇴소 전 또는 퇴소 직후 즉시 신청
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>취업 연계:</strong> 입소 중 새일센터 직업 상담 미리 시작 가능
          </div>
          <div className="info-box">
            <strong>1366 연락:</strong> 퇴소 후에도 1366(24시간)으로 언제든지 상담 가능
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="shelter-types">
        <h2 className="detail-card-head">보호시설 유형별 퇴소 후 지원 차이</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>단기 쉼터 퇴소:</strong> 주거지원시설 입주 신청 + 전체 자립지원 적용
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>장기 보호시설 퇴소:</strong> 동일하게 주거지원시설 입주 가능
          </div>
          <div className="info-box">
            <strong>일시지원시설 퇴소:</strong> 자립 의지 확인 후 주거·생계 지원 연계
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            퇴소 후 신청 절차, 유자녀 지원금 금액, 취업 훈련 연계까지<br />
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

export const 가정폭력자립지원금입소퇴소지원비교SpokeContent: SpokeData = {
  h1: '가정폭력 피해자 지원금, 입소 중 받는 것과 퇴소 후 받는 것 어떻게 다른가',
  breadcrumb: '입소퇴소지원비교',
  description:
    '입소 중: 시설 내 생활 지원·심리·법률 상담. 퇴소 후: 주거지원시설(2~4년), 유자녀 월 6만원(만 18세까지), 취업 훈련, 긴급 생계비. 퇴소 전 주거·자녀 지원 미리 신청 권장.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '입소 중에 받는 지원과 퇴소 후 지원이 어떻게 다른가요?',
      a: '입소 중에는 시설 내 생활(식사·숙박)과 심리·법률 상담이 제공됩니다. 퇴소 후에는 주거지원시설 입주, 유자녀 월 6만원, 취업 훈련, 긴급 생계비 등 자립 지원으로 전환됩니다.',
      source: '여성가족부',
      sourceUrl: 'https://www.mogef.go.kr',
    },
    {
      q: '퇴소 후에도 상담을 받을 수 있나요?',
      a: '네. 퇴소 후에도 사후 상담이 1년 이상 제공되며, 1366(24시간)으로 언제든지 상담이 가능합니다.',
      source: '여성가족부',
      sourceUrl: 'https://www.mogef.go.kr',
    },
    {
      q: '장기 보호시설 퇴소자도 주거지원시설에 들어갈 수 있나요?',
      a: '네. 장기 보호시설 퇴소자도 자립·자활 의지가 있으면 주거지원시설 입주를 신청할 수 있습니다.',
      source: '여성가족부',
      sourceUrl: 'https://www.mogef.go.kr',
    },
    {
      q: '입소 중에 취업 훈련을 시작할 수 있나요?',
      a: '네. 입소 중에 여성새로일하기센터(113)에 직업 상담을 미리 등록하고 훈련을 시작할 수 있습니다.',
      source: '여성가족부',
      sourceUrl: 'https://www.mogef.go.kr',
    },
    {
      q: '퇴소 후 유자녀 지원금은 언제부터 신청할 수 있나요?',
      a: '퇴소 전 또는 퇴소 직후 즉시 신청 가능합니다. 지원 공백을 막으려면 퇴소 전에 시군구청 여성가족 부서에 신청을 완료해 두는 것이 좋습니다.',
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
