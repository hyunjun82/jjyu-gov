import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          <strong>장애아동은 소득 기준과 무관하게</strong> 방과후 보육료 지원 대상입니다.
          차상위 초과 가구여도 장애아동으로 등록된 경우 어린이집을
          <strong>일일 4시간 이상</strong> 이용하면 장애아보육료의
          <strong>50%(최대 317,000원)</strong>을 지원받을 수 있습니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "차상위 기준은 안 넘는데 장애아동이면 방과후 보육료 대상인가요?"
        장애아동은 별도 소득 기준이 없습니다. 조건과 지원 내용을 정리했습니다.
      </p>

      <section className="detail-card" id="disability">
        <h2 className="detail-card-head">차상위 기준은 안 넘는데 장애아동이면 방과후 보육료 대상인가</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>구분</th><th>소득 기준</th><th>지원 금액</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>일반아동</strong></td>
                <td>차상위 이하 (법정 저소득층)</td>
                <td>월 100,000원</td>
              </tr>
              <tr>
                <td><strong>장애아동</strong></td>
                <td><strong>소득 기준 없음</strong></td>
                <td>장애아보육료의 50%<br />(최대 317,000원)</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            장애아동은 소득과 관계없이 지원됩니다. 단, 만 12세 이하 초등 취학아동이어야 하고
            방과후 어린이집을 일일 4시간 이상 이용해야 합니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="disability-conditions">
        <h2 className="detail-card-head">장애아동 방과후 보육료 지원 조건</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>① 장애 등록:</strong> 「장애인복지법」에 따른 장애인으로 등록된 아동
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>② 연령:</strong> 만 12세 이하 초등 취학아동
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>③ 이용 시간:</strong> 방과후 어린이집 일일 4시간 이상 이용
          </div>
          <div className="info-box">
            <strong>④ 교사 비율:</strong> 어린이집이 교사 대 아동 비율(1:3)을 준수해야
            장애아보육료 50% 지원 가능
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="apply">
        <h2 className="detail-card-head">신청 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>온라인:</strong> 복지로(bokjiro.go.kr) → 복지서비스 신청 → 방과후보육료
          </div>
          <div className="info-box">
            <strong>방문:</strong> 거주지 읍·면·동 행정복지센터(주민센터) 방문 신청
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            일반아동 조건, 연장보육료 중복 여부 등<br />
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

export const 장애아대상SpokeContent: SpokeData = {
  h1: '차상위 기준은 안 넘는데 장애아동이면 방과후 보육료 대상인가',
  breadcrumb: '장애아대상',
  description:
    '장애아동은 소득 기준 없이 방과후 보육료 지원 대상. 만 12세 이하 초등 취학, 일일 4시간 이상 이용 조건 충족 시 장애아보육료의 50%(최대 317,000원) 지원. 교사 대 아동 비율(1:3) 준수 어린이집에 한함.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '소득이 차상위를 넘어도 장애아동이면 방과후 보육료를 받을 수 있나요?',
      a: '네. 장애아동은 소득 기준과 무관하게 방과후 보육료 지원 대상입니다. 만 12세 이하이고 일일 4시간 이상 이용하면 됩니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '장애아동 방과후 보육료는 얼마를 지원받나요?',
      a: '장애아보육료의 50%가 지원됩니다. 어린이집이 교사 대 아동 비율(1:3)을 준수할 경우 최대 317,000원입니다.',
      source: '임신육아종합포털 아이사랑',
      sourceUrl: 'https://www.childcare.go.kr',
    },
    {
      q: '교사 대 아동 비율(1:3) 조건은 뭔가요?',
      a: '어린이집이 장애아동 3명당 교사 1명 이상의 비율을 유지해야 장애아보육료 50% 지원이 가능합니다. 비율 미준수 어린이집은 지원 금액이 달라질 수 있습니다.',
      source: '임신육아종합포털 아이사랑',
      sourceUrl: 'https://www.childcare.go.kr',
    },
    {
      q: '장애 등록을 아직 안 했는데 신청할 수 있나요?',
      a: '장애아동 방과후 보육료는 장애인복지법에 따라 등록된 장애아동에게 지원됩니다. 장애 등록 후 신청해야 합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '어디서 신청하나요?',
      a: '복지로(bokjiro.go.kr)에서 온라인 신청하거나, 거주지 읍·면·동 주민센터를 방문해 신청할 수 있습니다.',
      source: '복지로',
      sourceUrl: 'https://www.bokjiro.go.kr',
    },
  ],
  sources: [
    { name: '보건복지부', url: 'https://www.mohw.go.kr' },
    { name: '임신육아종합포털 아이사랑', url: 'https://www.childcare.go.kr' },
    { name: '복지로', url: 'https://www.bokjiro.go.kr' },
  ],
};
