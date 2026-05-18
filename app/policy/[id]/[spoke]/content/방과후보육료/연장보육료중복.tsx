import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          방과후 보육료와 연장보육료는 <strong>중복 신청이 불가</strong>합니다.
          연장보육료는 <strong>0~5세 미취학아동</strong>의 저녁 연장 보육에 적용되고,
          방과후 보육료는 <strong>초등 취학아동</strong> 전용 지원입니다.
          대상 연령과 이용 시간대가 다르기 때문에 동시 수령 상황 자체가 발생하지 않습니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "방과후 보육료 받으면서 연장보육료도 같이 받을 수 있나요?"
        두 지원은 대상이 다릅니다. 차이점과 조건을 정리했습니다.
      </p>

      <section className="detail-card" id="comparison">
        <h2 className="detail-card-head">방과후 보육료와 연장보육료, 중복 신청이 가능한가 | 조건 정리</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>구분</th><th>방과후 보육료</th><th>연장보육료</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>대상 연령</td>
                <td>만 12세 이하 <strong>초등 취학아동</strong></td>
                <td>0~5세 <strong>미취학아동</strong></td>
              </tr>
              <tr>
                <td>소득 기준</td>
                <td>차상위 이하 또는 장애아동</td>
                <td>소득 무관 전 가구</td>
              </tr>
              <tr>
                <td>이용 조건</td>
                <td>일일 4시간 이상</td>
                <td>기본 보육 시간 이후 추가 이용</td>
              </tr>
              <tr>
                <td>중복 수령</td>
                <td colSpan={2}><strong>불가 (대상 연령 자체가 다름)</strong></td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            초등 취학 이후에는 연장보육료 대상에서 제외되고 방과후 보육료로 전환됩니다.
            같은 아동이 두 가지를 동시에 받는 경우는 없습니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="after-school-note">
        <h2 className="detail-card-head">취학 전후 보육료 변화 — 무엇이 달라지나</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>미취학 (0~5세):</strong> 일반 보육료 + 연장보육료 → 소득 무관 지원
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>초등 입학 후:</strong> 일반 보육료·연장보육료 종료 →
            차상위 이하이거나 장애아동이면 방과후 보육료로 전환
          </div>
          <div className="warning-box">
            <strong>전환 신청 필요:</strong> 초등 입학 후 방과후 보육료를 받으려면
            주민센터 또는 복지로에서 별도 신청해야 합니다. 자동 전환이 아닙니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            지원 금액, 신청 방법, 장애아 조건 등<br />
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

export const 연장보육료중복SpokeContent: SpokeData = {
  h1: '방과후 보육료와 연장보육료, 중복 신청이 가능한가 | 조건 정리',
  breadcrumb: '연장보육료중복',
  description:
    '방과후 보육료(초등 취학아동 전용)와 연장보육료(0~5세 미취학 전용)는 대상 연령이 달라 중복 수령 불가. 초등 입학 후 일반 보육료·연장보육료 종료, 차상위 이하·장애아동은 방과후 보육료로 별도 신청 필요.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '방과후 보육료와 연장보육료를 동시에 받을 수 있나요?',
      a: '불가능합니다. 연장보육료는 0~5세 미취학아동 대상이고, 방과후 보육료는 초등 취학아동 대상입니다. 대상 연령이 달라 중복 수령 상황 자체가 발생하지 않습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '초등학교에 입학하면 연장보육료가 자동으로 방과후 보육료로 바뀌나요?',
      a: '자동 전환이 아닙니다. 초등 입학 후 방과후 보육료를 받으려면 주민센터 또는 복지로에서 별도 신청해야 합니다.',
      source: '복지로',
      sourceUrl: 'https://www.bokjiro.go.kr',
    },
    {
      q: '연장보육료를 받다가 취학했는데 신청 시기를 놓쳤어요.',
      a: '이용 중에도 상시 신청이 가능합니다. 주민센터 또는 복지로에서 신청하면 됩니다.',
      source: '복지로',
      sourceUrl: 'https://www.bokjiro.go.kr',
    },
    {
      q: '방과후 보육료는 연장 보육(저녁 시간 이용)에도 적용되나요?',
      a: '방과후 보육료는 일일 4시간 이상 이용 시 지원됩니다. 저녁 연장 이용도 포함해 총 이용 시간이 4시간 이상이면 지원 대상입니다.',
      source: '임신육아종합포털 아이사랑',
      sourceUrl: 'https://www.childcare.go.kr',
    },
    {
      q: '차상위 기준을 약간 초과하는데 방과후 보육료를 받을 방법이 없나요?',
      a: '장애아동이라면 소득 기준 없이 방과후 보육료를 받을 수 있습니다. 소득 기준이 초과되는 일반아동은 방과후 보육료 대상이 되지 않습니다.',
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
