import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          청년내일저축계좌를 중도해지하면 <strong>정부지원금 전액이 환수</strong>됩니다.
          본인이 납입한 금액과 이자만 돌려받고, 매칭 정부지원금·내일키움장려금·내일키움수익금은
          모두 반납해야 합니다. 단, <strong>2026년부터 실직·질병·사고 등 불가피한 사유 시
          최대 6개월 적립 중지</strong>가 가능해졌습니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        3년 만기를 채우지 못하고 해지하면 정부지원금을 한 푼도 받지 못합니다.
        2026년 개편으로 적립 중지 제도가 생겨 부득이한 상황에서 계좌를 유지할 수 있게 됐습니다.
        아래에서 중도해지 조건, 패널티, 만기 수령 조건을 정확히 확인하세요.
      </p>

      <section className="detail-card" id="penalty">
        <h2 className="detail-card-head">중도해지 시 받는 것 vs 환수되는 것</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>중도해지 시</th><th>만기 수령 시</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>본인 납입금</td>
                <td>✅ 전액 반환</td>
                <td>✅ 전액 수령</td>
              </tr>
              <tr>
                <td>은행 이자</td>
                <td>✅ 반환 (일부 감소 가능)</td>
                <td>✅ 수령</td>
              </tr>
              <tr>
                <td>정부 매칭지원금</td>
                <td>❌ 전액 환수</td>
                <td>✅ 수령</td>
              </tr>
              <tr>
                <td>내일키움장려금</td>
                <td>❌ 전액 환수</td>
                <td>✅ 수령 (기초·차상위)</td>
              </tr>
              <tr>
                <td>내일키움수익금</td>
                <td>❌ 전액 환수</td>
                <td>✅ 수령 (기초·차상위)</td>
              </tr>
            </tbody>
          </table>
          <div className="warning-box" style={{ marginTop: 12 }}>
            <strong>핵심:</strong> 중도해지 시 정부지원금 0원. 본인 납입금·이자만 돌려받습니다.
            3년을 채워야 정부 매칭금이 지급됩니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="complete">
        <h2 className="detail-card-head">만기 정상 수령 조건 3가지</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>① 3년 만기 적립:</strong> 매월 10만원 이상 납입하여 3년(36개월) 만기를 채워야 합니다.
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>② 자립역량교육 10시간 이수:</strong> 금융·취업·창업 등 자립역량 교육을 10시간 이상 이수해야 합니다.
            복지로 또는 자산형성포털에서 온라인 수강 가능합니다.
          </div>
          <div className="info-box">
            <strong>③ 자금사용계획서 제출:</strong> 만기 전 수령 자금의 사용 목적(주거마련, 창업, 교육 등)을 담은
            자금사용계획서를 제출해야 합니다.
          </div>
          <div className="warning-box" style={{ marginTop: 12 }}>
            이 3가지 중 하나라도 미충족 시 정부지원금 지급이 제한될 수 있습니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="pause">
        <h2 className="detail-card-head">2026년 신설: 적립 중지 제도 (최대 6개월)</h2>
        <div className="detail-card-body">
          <p style={{ lineHeight: 1.8, marginBottom: 12 }}>
            보건복지부는 2026년 5월부터 불가피한 사유로 납입이 어려운 경우
            <strong>최대 6개월간 적립을 중지</strong>할 수 있는 제도를 도입했습니다.
            적립 중지 기간은 만기 산정에서 제외됩니다.
          </p>
          <table className="compare-table">
            <thead>
              <tr><th>허용 사유</th><th>내용</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>실직</td>
                <td>비자발적 실직으로 소득이 없어진 경우</td>
              </tr>
              <tr>
                <td>질병·사고</td>
                <td>본인 또는 가족의 중대 질병·사고로 납입 불가 시</td>
              </tr>
              <tr>
                <td>기타 불가피한 사유</td>
                <td>담당 복지관과 협의하여 인정된 사유</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>신청 방법:</strong> 관할 시·군·구청 또는 복지관에 사유 소명서류 제출 후 승인.
          </div>
        </div>
      </section>

      <section className="detail-card" id="forced">
        <h2 className="detail-card-head">직권해지 기준 (소득 초과 시)</h2>
        <div className="detail-card-body">
          <p style={{ lineHeight: 1.8, marginBottom: 12 }}>
            가입 후 소득이 크게 증가하면 자격 초과로 직권해지될 수 있습니다.
          </p>
          <div className="warning-box" style={{ marginBottom: 12 }}>
            <strong>소득 초과 직권해지 기준:</strong> 세전 월 소득이
            <strong>기준 중위소득 100% (2026년 1인 기준 월 2,392,013원)</strong>를
            지속적으로 초과하는 경우 자격 상실 후 직권해지 처리됩니다.
          </div>
          <div className="info-box">
            <strong>참고:</strong> 일시적 소득 증가는 직권해지 사유가 되지 않습니다.
            담당 복지관에서 소득 변동 여부를 연 1회 확인합니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="tip">
        <h2 className="detail-card-head">중도해지 전 반드시 확인할 것</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>① 적립 중지 먼저 신청:</strong> 당장 납입이 어렵더라도 해지 전
            적립 중지(최대 6개월) 제도를 활용하세요. 계좌를 유지하면 정부지원금을 받을 수 있습니다.
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>② 복지관 상담:</strong> 해지 전 담당 복지관에 상황을 알리면
            유예·중지 방법을 안내받을 수 있습니다.
          </div>
          <div className="info-box">
            <strong>③ 3년 만기 시 지원 규모:</strong> 기초생활수급자는 3년 만기 시
            정부지원금 최대 1,440만원 + 내일키움장려금 + 수익금을 받을 수 있습니다.
            중도해지로 이 금액 전부를 포기하게 됩니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            가입 조건, 지원금 금액, 신청 방법 등<br />
            청년내일저축계좌 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/youth-tomorrow-savings" className="btn-cta">
            청년내일저축계좌 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 중도해지SpokeContent: SpokeData = {
  h1: '청년내일저축계좌 중도해지하면 정부지원금 얼마나 환수되나 | 만기 수령 조건 3가지',
  breadcrumb: '중도해지',
  description: '청년내일저축계좌 중도해지 시 정부지원금 전액 환수됩니다. 본인 납입금·이자만 반환. 만기 수령 조건: 3년 + 자립역량교육 10시간 + 자금사용계획서. 2026년부터 실직·질병 등 불가피한 사유 시 최대 6개월 적립 중지 가능.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '청년내일저축계좌 중도해지하면 어떻게 되나요?',
      a: '본인 납입금과 이자는 돌려받지만 정부 매칭지원금, 내일키움장려금, 내일키움수익금은 전액 환수됩니다. 3년 만기를 채워야만 정부지원금을 수령할 수 있습니다.',
      source: '보건복지부 청년내일저축계좌 안내',
      sourceUrl: 'https://www.bokjiro.go.kr',
    },
    {
      q: '적립금이 없어서 납입을 못할 것 같은데 해지해야 하나요?',
      a: '아닙니다. 2026년부터 실직·질병·사고 등 불가피한 사유 시 최대 6개월간 적립을 중지할 수 있습니다. 해지 전 관할 복지관에 적립 중지를 신청하세요.',
      source: '보건복지부 2026.05.03 청년내일저축계좌 개편 발표',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '만기에 정부지원금을 받으려면 무엇을 해야 하나요?',
      a: '① 3년 만기 적립 ② 자립역량교육 10시간 이수 ③ 자금사용계획서 제출 — 이 세 가지를 모두 충족해야 정부지원금을 받을 수 있습니다.',
      source: '보건복지부 청년내일저축계좌 안내',
      sourceUrl: 'https://www.bokjiro.go.kr',
    },
    {
      q: '소득이 올라서 직권해지될 수 있나요?',
      a: '세전 월 소득이 기준 중위소득 100%를 지속적으로 초과하면 직권해지될 수 있습니다. 일시적 소득 증가는 해지 사유가 아닙니다. 연 1회 소득 확인이 이루어집니다.',
      source: '보건복지부 청년내일저축계좌 운영 안내',
      sourceUrl: 'https://www.bokjiro.go.kr',
    },
    {
      q: '자립역량교육은 어디서 받나요?',
      a: '복지로(bokjiro.go.kr) 또는 자산형성포털에서 온라인으로 수강할 수 있습니다. 금융·취업·창업 관련 교육으로 10시간을 채워야 합니다.',
      source: '보건복지부 청년내일저축계좌 안내',
      sourceUrl: 'https://www.bokjiro.go.kr',
    },
  ],
  sources: [
    { name: '보건복지부 청년내일저축계좌 안내 (mohw.go.kr)', url: 'https://www.mohw.go.kr' },
    { name: '복지로 청년내일저축계좌 신청 포털 (bokjiro.go.kr)', url: 'https://www.bokjiro.go.kr' },
    { name: '자산형성포털', url: 'https://hope.welfare.go.kr' },
  ],
};
