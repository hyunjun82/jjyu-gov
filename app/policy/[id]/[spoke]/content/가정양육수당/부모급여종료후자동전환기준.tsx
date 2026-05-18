import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          부모급여는 <strong>만 23개월까지</strong> 지급되며, 아이가 <strong>만 24개월이 되는 달부터
          가정양육수당(월 10만원)으로 자동 전환</strong>됩니다. 별도 신청 없이 자동으로 전환되므로
          재신청할 필요가 없습니다. 단, 어린이집·유치원을 이용 중이라면 자동 전환이 되지 않고
          보육료·유아학비로 유지됩니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        부모급여(0~11개월 월 100만원, 12~23개월 월 50만원)는 만 23개월을 마지막으로 종료되고,
        만 24개월이 되는 달 25일부터 양육수당 10만원이 입금됩니다.
      </p>

      <section className="detail-card" id="timeline">
        <h2 className="detail-card-head">연령별 지원 전환 흐름</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>연령</th><th>지원 종류</th><th>금액</th><th>신청</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>0~11개월</strong></td><td>부모급여</td><td>월 100만원</td><td>출생 후 신청</td></tr>
              <tr><td><strong>12~23개월</strong></td><td>부모급여</td><td>월 50만원</td><td>자동 감액</td></tr>
              <tr><td><strong>24~86개월 미만</strong></td><td>가정양육수당</td><td>월 10만원</td><td>자동 전환 (재신청 불필요)</td></tr>
              <tr><td><strong>86개월 이상(취학)</strong></td><td>지원 종료</td><td>—</td><td>—</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="condition">
        <h2 className="detail-card-head">자동 전환 조건</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>전환 조건:</strong> 만 24개월 도달 + 어린이집·유치원·종일제 아이돌봄 미이용
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>전환 불가:</strong> 어린이집 등 이용 중인 경우 보육료·유아학비 유지 (양육수당 전환 없음)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>전환일:</strong> 만 24개월이 되는 달 25일부터 양육수당 10만원 입금
          </div>
          <div className="info-box">
            <strong>재신청:</strong> 불필요 — 기존 부모급여 신청 계좌로 자동 입금
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="diff">
        <h2 className="detail-card-head">부모급여 vs 가정양육수당 핵심 차이</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>부모급여</th><th>가정양육수당</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>대상 연령</strong></td><td>0~23개월</td><td>24~86개월 미만</td></tr>
              <tr><td><strong>지급액</strong></td><td>100만원(0~11개월) / 50만원(12~23개월)</td><td>월 10만원 (장애 24~35개월 20만원)</td></tr>
              <tr><td><strong>어린이집 이용 시</strong></td><td>바우처로 전환(보육료 공제 후 차액 현금)</td><td>보육료로 전환, 양육수당 중단</td></tr>
              <tr><td><strong>소득 기준</strong></td><td>없음 (보편 지급)</td><td>없음 (보편 지급)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            지급 금액, 신청 방법, 어린이집 전환 기준까지<br />
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

export const 가정양육수당부모급여종료후자동전환기준SpokeContent: SpokeData = {
  h1: '부모급여 끝나면 가정양육수당 자동 전환, 만 24개월 기준과 주의사항',
  breadcrumb: '부모급여종료후자동전환기준',
  description:
    '부모급여(0~23개월) 종료 후 만 24개월부터 가정양육수당 월 10만원 자동 전환. 별도 재신청 불필요. 단, 어린이집 이용 중이면 전환 없음. 연령별 지원 금액 흐름과 부모급여 차이 정리.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '24개월이 되면 정말 자동으로 전환되나요?',
      a: '네. 가정에서 양육 중이고 어린이집 등을 이용하지 않는 경우, 만 24개월이 되는 달부터 별도 신청 없이 가정양육수당 월 10만원이 자동으로 지급됩니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '부모급여 100만원이 갑자기 10만원으로 줄어드는 건가요?',
      a: '네. 부모급여는 0~11개월 월 100만원, 12~23개월 월 50만원이며, 만 24개월부터 가정양육수당 월 10만원으로 바뀝니다. 24개월 이후는 어린이집에 보내거나 직장에 복귀하는 경우가 많아 설계된 구조입니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '24개월에 어린이집을 보낼 계획인데 양육수당도 잠깐 받을 수 있나요?',
      a: '어린이집 입소 전까지는 가정양육수당을 받을 수 있습니다. 입소 후에는 보육료로 전환되므로, 입소 즉시 복지로나 주민센터에서 보육료 신청을 해야 합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '쌍둥이면 양육수당도 두 명 다 자동 전환되나요?',
      a: '네. 아동 1명당 가정양육수당이 지급되므로 쌍둥이는 각각 월 10만원, 합계 월 20만원이 자동 전환됩니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '아동수당과 중복으로 받을 수 있나요?',
      a: '네. 아동수당(만 8세 미만 월 10만원)은 가정양육수당과 중복 수령 가능합니다. 어린이집 보육료를 받는 경우에도 아동수당은 계속 지급됩니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
  ],
  sources: [
    { name: '보건복지부 가정양육수당', url: 'https://www.mohw.go.kr' },
    { name: '복지로', url: 'https://www.bokjiro.go.kr' },
  ],
};
