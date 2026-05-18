import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          가정양육수당은 어린이집·유치원을 다니지 않고 가정에서 양육하는
          <strong>만 24개월~86개월 미만(취학 전)</strong> 아동에게 월 <strong>10만원</strong>을
          지급합니다. 장애아동은 만 24~36개월 미만 월 <strong>20만원</strong>,
          36개월 이상은 월 <strong>10만원</strong>으로 차등 지급됩니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        0~23개월 아동은 부모급여(0~11개월 월 100만원·12~23개월 월 50만원)를 받으며,
        만 24개월이 되는 시점부터 가정양육수당으로 자동 전환됩니다.
        매월 25일 보호자 계좌로 입금됩니다.
      </p>

      <section className="detail-card" id="amount">
        <h2 className="detail-card-head">연령별 지급 금액</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>연령</th><th>일반 아동</th><th>장애 아동</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>0~11개월</strong></td><td>부모급여 월 100만원</td><td>부모급여 월 100만원</td></tr>
              <tr><td><strong>12~23개월</strong></td><td>부모급여 월 50만원</td><td>부모급여 월 50만원</td></tr>
              <tr><td><strong>24~35개월</strong></td><td>월 10만원</td><td>월 20만원</td></tr>
              <tr><td><strong>36~86개월 미만</strong></td><td>월 10만원</td><td>월 10만원</td></tr>
              <tr><td><strong>86개월 이상(취학)</strong></td><td>지원 종료</td><td>지원 종료</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="condition">
        <h2 className="detail-card-head">지급 조건</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>연령 조건:</strong> 만 24개월 이상 ~ 86개월 미만 (취학 연도 2월까지)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>이용 조건:</strong> 어린이집·유치원·종일제 아이돌봄 미이용 (시간제 아이돌봄은 이용해도 OK)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>소득 기준:</strong> 소득·재산 무관 (보편 지원)
          </div>
          <div className="info-box">
            <strong>국적:</strong> 대한민국 국적 보유 아동
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="payment">
        <h2 className="detail-card-head">지급 방식</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>지급일:</strong> 매월 25일 본인 또는 보호자 계좌로 자동 입금
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>중복 가능:</strong> 아동수당·기초연금·다자녀카드 등과 중복 수령 가능
          </div>
          <div className="info-box">
            <strong>중복 불가:</strong> 부모급여(0~23개월)와 동시 수령 불가 — 24개월부터 자동 전환
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            신청 방법, 어린이집 전환, 부모급여와 차이까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/home-childcare-allowance" className="btn-cta">
            가정양육수당 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 가정양육수당지급금액24개월86개월월10만SpokeContent: SpokeData = {
  h1: '가정양육수당 지급 금액, 24~86개월 월 10만원 대상과 장애아동 기준',
  breadcrumb: '지급금액24개월86개월월10만',
  description:
    '가정양육수당: 어린이집 미이용 만 24~86개월 월 10만원. 장애아동 24~36개월 월 20만원. 소득 무관 보편 지원. 매월 25일 지급. 부모급여(0~23개월) 종료 후 자동 전환.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '아이가 26개월인데 지금 신청하면 소급 지급 되나요?',
      a: '가정양육수당은 신청일 기준으로 지급되며 소급 적용은 원칙적으로 되지 않습니다. 출생신고와 동시에 신청하거나 24개월이 되는 시점에 바로 신청하는 것이 좋습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '시간제 아이돌봄 서비스를 이용해도 양육수당을 받을 수 있나요?',
      a: '네. 시간제 아이돌봄(일부 시간만 도우미 이용)은 이용해도 가정양육수당을 계속 받을 수 있습니다. 종일제 아이돌봄 이용 시에는 중단됩니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '쌍둥이면 각각 받을 수 있나요?',
      a: '네. 가정양육수당은 아동 1명당 지급됩니다. 쌍둥이라면 각각 월 10만원씩, 합계 월 20만원을 받을 수 있습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '86개월(초등 취학) 이후에도 받을 수 있나요?',
      a: '아닙니다. 가정양육수당은 취학 연도 2월(만 86개월)까지만 지급됩니다. 초등학교에 입학하면 지원이 종료됩니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '25일이 주말·공휴일이면 언제 입금되나요?',
      a: '매월 25일이 토·일·공휴일인 경우 전 영업일(직전 평일)에 조기 입금됩니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
  ],
  sources: [
    { name: '보건복지부 가정양육수당', url: 'https://www.mohw.go.kr' },
    { name: '복지로', url: 'https://www.bokjiro.go.kr' },
  ],
};
