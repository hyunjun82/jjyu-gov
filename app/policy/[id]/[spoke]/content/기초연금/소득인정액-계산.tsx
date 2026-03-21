import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          소득인정액 = 소득평가액 + 재산의 소득환산액. 근로소득은 116만원 빼고
          30% 추가공제, 재산은 기본공제(대도시 1.35억) 후 연 4%로 환산합니다.
          실제 월급보다 소득인정액이 낮게 잡히는 구조입니다.
        </p>
      </div>

      <section className="detail-card" id="formula">
        <h2 className="detail-card-head">계산 공식이 뭔가?</h2>
        <div className="detail-card-body">
          <div style={{ background: 'var(--bg-light)', padding: 20, borderRadius: 12, fontSize: 15, lineHeight: 1.8 }}>
            <strong>소득인정액</strong> = A + B<br />
            <br />
            <strong>A. 소득평가액</strong> = 0.7 × (근로소득 − 116만원) + 기타소득<br />
            <strong>B. 재산 소득환산액</strong> = [{'{'}(일반재산 − 기본공제) + (금융재산 − 2,000만원) − 부채{'}'} × 0.04 ÷ 12] + 고급자동차·회원권의 월 100%
          </div>
          <p style={{ marginTop: 16 }}>
            복잡해 보이지만 핵심은 두 가지입니다.
            근로소득은 116만원 무조건 빼고, 남은 금액의 70%만 반영합니다.
            재산은 기본공제(집값에서 대도시 1.35억을 빼는 것) 후 아주 적은 비율(연 4%)로 소득에 합산합니다.
          </p>
        </div>
      </section>

      <section className="detail-card" id="income-calc">
        <h2 className="detail-card-head">소득평가액, 실제로 얼마로 잡히나?</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>실제 근로소득(월)</th><th>소득평가액</th><th>계산 과정</th></tr>
            </thead>
            <tbody>
              <tr><td>100만원</td><td><strong>0원</strong></td><td>116만원 공제에 미달</td></tr>
              <tr><td>150만원</td><td><strong>28만원</strong></td><td>(150−110)×0.7</td></tr>
              <tr><td>200만원</td><td><strong>63만원</strong></td><td>(200−110)×0.7</td></tr>
              <tr><td>300만원</td><td><strong>133만원</strong></td><td>(300−110)×0.7</td></tr>
            </tbody>
          </table>
          <p>
            월 100만원을 버는 분은 소득평가액이 0원입니다.
            월 200만원을 벌어도 63만원으로 잡히니, 단독가구 기준(247만원)에는
            훨씬 여유가 있습니다. 여기에 재산 소득환산액을 더해야 최종 소득인정액이 나옵니다.
          </p>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="asset-calc">
        <h2 className="detail-card-head">재산은 어떻게 소득으로 바뀌나?</h2>
        <div className="detail-card-body">
          <p><strong>기본공제액 (2026년 기준):</strong></p>
          <table className="compare-table">
            <thead>
              <tr><th>지역</th><th>기본공제액</th></tr>
            </thead>
            <tbody>
              <tr><td>대도시 (서울 등 특별·광역시)</td><td><strong>1억 3,500만원</strong></td></tr>
              <tr><td>중소도시</td><td><strong>8,500만원</strong></td></tr>
              <tr><td>농어촌</td><td><strong>7,250만원</strong></td></tr>
            </tbody>
          </table>
          <p style={{ marginTop: 16 }}>
            서울에 시가 3억짜리 집을 가진 단독가구 예시:
          </p>
          <div style={{ background: 'var(--bg-light)', padding: 16, borderRadius: 8, fontSize: 14, lineHeight: 1.8 }}>
            일반재산 3억 − 기본공제 1.35억 = 1.65억<br />
            금융재산 2,000만원 − 공제 2,000만원 = 0원<br />
            재산 소득환산액 = 1.65억 × 0.04 ÷ 12 = <strong>약 55만원</strong>
          </div>
          <p>
            3억짜리 집이 있어도 재산 소득환산액은 55만원 수준입니다.
            근로소득이 없다면 소득인정액이 55만원이므로,
            단독가구 기준(247만원)에 한참 못 미쳐 기초연금 대상이 됩니다.
          </p>
        </div>
      </section>

      <section className="detail-card" id="example">
        <h2 className="detail-card-head">실제 사례로 확인하기</h2>
        <div className="detail-card-body">
          <div className="warning-box" style={{ background: '#F0F7FF', borderColor: 'var(--gov-primary)' }}>
            <strong>사례: 서울 단독가구, 아파트 3억, 국민연금 월 40만원, 예금 3,000만원</strong>
            <div style={{ marginTop: 12, lineHeight: 2 }}>
              소득평가액: 국민연금 40만원 (근로소득 아니므로 공제 없음)<br />
              재산: (3억 − 1.35억 + 3,000만원 − 2,000만원) × 0.04 ÷ 12 = 약 58.3만원<br />
              <strong>소득인정액 = 40 + 58.3 = 약 98.3만원</strong><br />
              → 단독가구 기준 247만원 이하 → <strong style={{ color: 'var(--success)' }}>기초연금 대상 ✓</strong>
            </div>
          </div>
          <p style={{ marginTop: 16, fontSize: 13, color: 'var(--text-muted)' }}>
            정확한 금액은 국민연금공단(☎1355)에서 모의계산 받을 수 있습니다.
            복지로(www.bokjiro.go.kr) → 모의계산에서도 가능합니다.
          </p>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>
    </>
  );
}

export const 소득인정액계산SpokeContent: SpokeData = {
  h1: '기초연금 소득인정액 계산법, 내 재산이 얼마로 잡히나',
  breadcrumb: '소득인정액 계산',
  description:
    '기초연금 소득인정액 계산 공식을 쉽게 풀어드립니다. 근로소득 공제(116만원+30%), 재산 기본공제(대도시 1.35억), 실제 사례별 계산 예시까지.',
  datePublished: '2026-01-10T09:00:00+09:00',
  dateModified: '2026-03-21T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '자녀 명의로 된 집은 소득인정액에 포함되나요?',
      a: '본인 명의 재산만 산정 대상입니다. 자녀 명의 재산은 포함되지 않습니다. 단, 최근 처분한 재산이 자녀에게 증여된 것으로 확인되면 증여 재산으로 반영될 수 있습니다.',
      source: '보건복지부 기초연금 제도안내',
      sourceUrl: 'https://basicpension.mohw.go.kr',
    },
    {
      q: '자동차가 있으면 불이익이 있나요?',
      a: '일반 승용차는 시가표준액으로 일반재산에 포함됩니다. 단, 3,000cc 이상 또는 4,000만원 이상 고급자동차는 전액이 월 소득으로 환산(100%)되어 불리합니다.',
      source: 'K-공감 기초연금 안내',
      sourceUrl: 'https://gonggam.korea.kr',
    },
    {
      q: '국민연금은 소득평가액에서 공제가 되나요?',
      a: '국민연금은 기타소득으로 분류되어 근로소득 공제(116만원+30%)가 적용되지 않습니다. 수령액 전액이 소득평가액에 반영됩니다.',
      source: '보건복지부 기초연금 제도안내',
      sourceUrl: 'https://basicpension.mohw.go.kr',
    },
  ],
  sources: [
    { name: 'K-공감 기초연금 안내 (2026.03.03)', url: 'https://gonggam.korea.kr' },
    { name: '보건복지부 기초연금 제도안내', url: 'https://basicpension.mohw.go.kr' },
    { name: '복지로 기초연금 모의계산', url: 'https://www.bokjiro.go.kr' },
  ],
};
