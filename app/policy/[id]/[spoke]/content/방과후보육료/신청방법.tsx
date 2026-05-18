import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          방과후 보육료는 <strong>차상위 이하(법정 저소득층 포함) 및 장애아동</strong> 중
          만 12세 이하 초등 취학아동이 방과후 어린이집을 <strong>일일 4시간 이상</strong> 이용할 때
          지원됩니다. 일반아동은 <strong>월 10만원</strong>, 장애아동은
          <strong>장애아보육료의 50%(최대 317,000원)</strong>이 지원됩니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "초등학교 다니는 아이를 방과후에 어린이집에 보내면 보육료를 지원받을 수 있나요?"
        소득 기준과 이용 조건을 충족하면 지원됩니다. 신청 방법과 금액을 정리했습니다.
      </p>

      <section className="detail-card" id="eligibility">
        <h2 className="detail-card-head">방과후 보육료 지원 | 일반아동 10만원 · 장애아 31만원 신청 방법</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>구분</th><th>지원 대상</th><th>지원 금액</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>일반아동</strong></td>
                <td>차상위 이하(법정 저소득층 포함) 취학아동</td>
                <td><strong>월 100,000원</strong></td>
              </tr>
              <tr>
                <td><strong>장애아동</strong></td>
                <td>장애아동 취학아동 (교사 대 아동 비율 1:3 준수)</td>
                <td><strong>장애아보육료의 50%</strong><br />(최대 317,000원)</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>공통 조건:</strong> 만 12세 이하 초등 취학아동이 방과후 어린이집을
            <strong> 일일 4시간 이상</strong> 이용해야 합니다. 4시간 미만 이용 시 미지원.
          </div>
        </div>
      </section>

      <section className="detail-card" id="how-to-apply">
        <h2 className="detail-card-head">신청 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>① 온라인 신청:</strong> 복지로(bokjiro.go.kr) → 복지서비스 신청 → 보육료 → 방과후보육료 선택
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>② 방문 신청:</strong> 거주지 읍·면·동 행정복지센터(주민센터) 방문 신청
          </div>
          <div className="info-box">
            <strong>신청 시기:</strong> 어린이집 이용 시작 전 또는 이용 중 상시 신청 가능
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="notes">
        <h2 className="detail-card-head">주의사항</h2>
        <div className="detail-card-body">
          <div className="warning-box" style={{ marginBottom: 12 }}>
            <strong>일일 4시간 미만 이용 시 미지원:</strong> 방과후 어린이집을 하루 4시간 이상
            이용해야 지원 대상이 됩니다. 일시적으로 4시간 미만 이용한 날은 지원에서 제외됩니다.
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>방학 중 지원:</strong> 방학 중 일일 8시간 이상 이용 시 추가 지원이 적용됩니다.
          </div>
          <div className="info-box">
            <strong>소득 기준:</strong> 차상위 이하(기초생활수급자, 차상위계층, 법정 저소득층)에 해당해야 합니다.
            장애아동은 소득 기준 없이 지원 가능합니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            지원 금액, 연장보육료 중복 여부 등<br />
            방과후 보육료 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/after-school-childcare-fee" className="btn-cta">
            방과후 보육료 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 방과후보육료신청방법SpokeContent: SpokeData = {
  h1: '방과후 보육료 지원 | 일반아동 10만원 · 장애아 31만원 신청 방법',
  breadcrumb: '신청방법',
  description:
    '방과후 보육료 지원 대상: 차상위 이하 및 장애아동 중 만 12세 이하 초등 취학아동, 일일 4시간 이상 이용 시. 일반아동 월 10만원, 장애아동 최대 317,000원. 복지로(bokjiro.go.kr) 또는 주민센터 방문 신청.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '방과후 보육료는 누가 신청할 수 있나요?',
      a: '차상위 이하(법정 저소득층 포함) 및 장애아동에 해당하는 만 12세 이하 초등 취학아동이 방과후 어린이집을 일일 4시간 이상 이용할 경우 신청할 수 있습니다.',
      source: '보건복지부 보육료 지원 안내',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '방과후 보육료 지원 금액은 얼마인가요?',
      a: '일반아동은 월 100,000원, 장애아동은 장애아보육료의 50%(최대 317,000원)가 지원됩니다.',
      source: '임신육아종합포털 아이사랑',
      sourceUrl: 'https://www.childcare.go.kr',
    },
    {
      q: '어디서 신청하나요?',
      a: '복지로(bokjiro.go.kr)에서 온라인 신청하거나, 거주지 읍·면·동 행정복지센터(주민센터)를 방문해 신청할 수 있습니다.',
      source: '복지로',
      sourceUrl: 'https://www.bokjiro.go.kr',
    },
    {
      q: '방학 중에도 지원이 되나요?',
      a: '방학 중 일일 8시간 이상 이용 시 해당일 추가 지원이 적용됩니다.',
      source: '임신육아종합포털 아이사랑',
      sourceUrl: 'https://www.childcare.go.kr',
    },
    {
      q: '장애아동은 소득 기준이 없어도 되나요?',
      a: '네. 장애아동은 소득 기준과 관계없이 방과후 어린이집을 일일 4시간 이상 이용하면 장애아보육료의 50%를 지원받을 수 있습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
  ],
  sources: [
    { name: '보건복지부', url: 'https://www.mohw.go.kr' },
    { name: '임신육아종합포털 아이사랑', url: 'https://www.childcare.go.kr' },
    { name: '복지로', url: 'https://www.bokjiro.go.kr' },
  ],
};
