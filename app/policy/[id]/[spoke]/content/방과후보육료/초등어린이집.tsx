import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          초등학교에 다니는 아이를 방과후 어린이집에 보내는 경우,
          <strong>차상위 이하 또는 장애아동</strong>에 해당하면 방과후 보육료 지원 대상입니다.
          단, 어린이집을 <strong>일일 4시간 이상</strong> 이용해야 하며,
          0~5세 미취학아동에게 지원되는 보육료와는 별도로 운영됩니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "초등학교 다니는데 방과후에 어린이집을 보내도 보육료를 지원받을 수 있나요?"
        취학 여부에 따라 지원 종류가 달라집니다. 핵심 조건을 정리했습니다.
      </p>

      <section className="detail-card" id="conditions">
        <h2 className="detail-card-head">초등학교 다니는 아이를 어린이집에 보내도 방과후 보육료 지원이 되나</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>구분</th><th>지원 종류</th><th>대상</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>미취학아동 (0~5세)</strong></td>
                <td>일반 보육료</td>
                <td>소득 무관 전 가구</td>
              </tr>
              <tr>
                <td><strong>취학아동 (초등생)</strong></td>
                <td><strong>방과후 보육료</strong></td>
                <td>차상위 이하 또는 장애아동</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            초등학교 입학 후에는 일반 보육료 지원이 종료되고,
            조건을 충족하면 방과후 보육료로 전환 지원됩니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="key-conditions">
        <h2 className="detail-card-head">방과후 보육료 지원 핵심 조건 3가지</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>① 연령:</strong> 만 12세 이하 초등 취학아동 (초등학교 재학 중)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>② 소득:</strong> 차상위 이하(법정 저소득층 포함) 또는 장애아동
            (장애아동은 소득 기준 무관)
          </div>
          <div className="info-box">
            <strong>③ 이용 시간:</strong> 방과후 어린이집을 <strong>일일 4시간 이상</strong> 이용
            (4시간 미만은 지원 제외)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="amount">
        <h2 className="detail-card-head">지원 금액</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>아동 유형</th><th>지원 금액</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>일반아동 (차상위 이하)</td>
                <td><strong>월 100,000원</strong></td>
              </tr>
              <tr>
                <td>장애아동</td>
                <td><strong>장애아보육료의 50%</strong> (최대 317,000원)</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            지원금은 어린이집에 직접 지급됩니다. 가정에서는 식대 등 실비만 부담합니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            신청 방법, 연장보육료 중복 여부 등<br />
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

export const 초등어린이집SpokeContent: SpokeData = {
  h1: '초등학교 다니는 아이를 어린이집에 보내도 방과후 보육료 지원이 되나',
  breadcrumb: '초등어린이집',
  description:
    '초등 취학아동도 차상위 이하 또는 장애아동이면 방과후 보육료 지원 대상. 만 12세 이하, 일일 4시간 이상 이용 조건 충족 시 일반아동 월 10만원·장애아동 최대 317,000원 지원.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '초등학교에 입학하면 어린이집 보육료 지원이 끊기나요?',
      a: '일반 보육료(0~5세 지원)는 종료됩니다. 단, 차상위 이하 또는 장애아동이면 방과후 보육료로 전환 지원됩니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '초등 1학년인데 방과후 보육료를 받으려면 어떻게 해야 하나요?',
      a: '주민센터 또는 복지로(bokjiro.go.kr)에 방과후 보육료 신청을 하면 됩니다. 차상위 이하 소득 기준을 충족하고 어린이집을 일일 4시간 이상 이용해야 합니다.',
      source: '복지로',
      sourceUrl: 'https://www.bokjiro.go.kr',
    },
    {
      q: '취학아동 방과후 보육료는 언제까지 지원되나요?',
      a: '만 12세 이하 초등 취학아동까지 지원됩니다. 중학교 입학 이후에는 대상에서 제외됩니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '방과후 4시간 이상 이용이란 정확히 어떻게 계산하나요?',
      a: '해당 날짜에 어린이집을 실제 4시간 이상 이용한 경우에 지원됩니다. 4시간 미만 이용일은 지원에서 제외됩니다.',
      source: '임신육아종합포털 아이사랑',
      sourceUrl: 'https://www.childcare.go.kr',
    },
    {
      q: '방학 중에도 어린이집을 보내면 지원이 되나요?',
      a: '방학 중 일일 8시간 이상 이용 시 해당일 추가 지원이 적용됩니다.',
      source: '임신육아종합포털 아이사랑',
      sourceUrl: 'https://www.childcare.go.kr',
    },
  ],
  sources: [
    { name: '보건복지부', url: 'https://www.mohw.go.kr' },
    { name: '임신육아종합포털 아이사랑', url: 'https://www.childcare.go.kr' },
    { name: '복지로', url: 'https://www.bokjiro.go.kr' },
  ],
};
