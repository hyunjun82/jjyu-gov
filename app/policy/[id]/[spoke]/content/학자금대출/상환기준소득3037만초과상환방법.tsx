import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      {/* 빠른 답변 */}
      <div className="answer-box">
        <p>
          2026년 취업후상환 학자금대출의 상환기준소득은{' '}
          <strong>연 2,851만원(세전)</strong>입니다.
          이 금액을 초과하면 초과분의 <strong>20%</strong>가
          국세청을 통해 자동 원천징수됩니다.
          소득이 기준 이하라면 상환 의무가 발생하지 않으며,
          원하면 언제든 <strong>임의상환</strong>도 가능합니다.
        </p>
      </div>

      {/* 서론 */}
      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        취업후상환 대출은 &quot;취업하면 자동으로 갚는다&quot;는 개념입니다.
        얼마나 갚는지, 언제부터 갚는지, 임의로 상환하면 이자를 얼마나 아낄 수 있는지
        아래에서 정확하게 확인하세요.
      </p>

      {/* H2-1: 의무상환 구조 */}
      <section className="detail-card" id="mandatory">
        <h2 className="detail-card-head">의무상환 구조 — 초과분의 20% 원천징수</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr>
                <th>연 소득(세전)</th>
                <th>상환기준소득 초과분</th>
                <th>연간 의무상환액(20%)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2,851만원 이하</td>
                <td>0원</td>
                <td><strong>0원 (상환 없음)</strong></td>
              </tr>
              <tr>
                <td>4,000만원</td>
                <td>1,149만원</td>
                <td>약 230만원(월 약 19만원)</td>
              </tr>
              <tr>
                <td>5,000만원</td>
                <td>2,149만원</td>
                <td>약 430만원(월 약 36만원)</td>
              </tr>
              <tr>
                <td>6,000만원</td>
                <td>3,149만원</td>
                <td>약 630만원(월 약 52만원)</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>자동 상환 방식:</strong> 국세청이 종합소득세·근로소득세 신고 시
            의무상환액을 계산하고 한국장학재단으로 자동 이체합니다.
            별도 상환 신청 없이 자동으로 처리됩니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      {/* H2-2: 임의상환 방법 */}
      <section className="detail-card" id="voluntary">
        <h2 className="detail-card-head">임의상환 — 이자 절감 방법</h2>
        <div className="detail-card-body">
          <div className="info-box">
            <strong>임의상환이란?</strong><br />
            의무상환 외에 소득 수준과 무관하게 <strong>언제든지 원하는 금액</strong>을
            추가로 상환할 수 있습니다. 빨리 갚을수록 이자 부담이 줄어듭니다.
          </div>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>임의상환 이자 절감 효과 (예시)</strong><br />
            대출 잔액 1,000만원, 연 1.7% 기준 → 1년 이자 약 17만원.
            취업 후 바로 임의상환으로 500만원 상환 시 이자 약 8만5천원 절감.
          </div>
          <table className="compare-table" style={{ marginTop: 16 }}>
            <thead>
              <tr>
                <th>상환 방식</th>
                <th>시점</th>
                <th>신청 방법</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>의무상환</td>
                <td>상환기준소득 초과 후 자동</td>
                <td>국세청 자동 원천징수</td>
              </tr>
              <tr>
                <td>임의상환</td>
                <td>소득 발생 전·후 언제든</td>
                <td>한국장학재단 홈페이지·앱</td>
              </tr>
              <tr>
                <td>이자 유예</td>
                <td>소득 발생 전까지</td>
                <td>자동 적용 (신청 불필요)</td>
              </tr>
            </tbody>
          </table>
          <p style={{ marginTop: 12 }}>
            임의상환은 한국장학재단 홈페이지(kosaf.go.kr) 또는 앱에서
            &quot;대출 관리 → 임의상환&quot; 메뉴를 통해 신청할 수 있습니다.
          </p>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      {/* CTA */}
      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            2026년 금리 1.7%, 소득요건 폐지 등 전체 학자금대출 정보를 확인하세요.
          </p>
          <a href="/policy/general-student-loan" className="btn-cta">
            학자금대출 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 학자금대출상환기준소득3037만초과상환방법SpokeContent: SpokeData = {
  h1: '취업후상환 학자금대출 상환기준소득 2851만원 초과 시 상환 방법',
  breadcrumb: '상환기준소득3037만초과상환방법',
  description:
    '2026년 취업후상환 학자금대출 상환기준소득(연 2,851만원)과 초과분 20% 의무상환, 임의상환으로 이자를 절감하는 방법을 안내합니다.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '상환기준소득 2,851만원은 세전인가요, 세후인가요?',
      a: '세전(총급여) 기준입니다. 실수령액이 아닌 연봉 기준으로 적용되므로, 실수령이 2,851만원 이하라도 총급여가 초과하면 의무상환이 시작됩니다.',
      source: '한국장학재단 학자금대출 상환 안내',
      sourceUrl: 'https://www.kosaf.go.kr',
    },
    {
      q: '프리랜서·자영업자도 소득 초과 시 자동으로 상환이 되나요?',
      a: '네. 종합소득세 신고 기준으로 소득이 2,851만원을 초과하면 국세청이 의무상환액을 계산하여 자동 징수합니다. 근로소득자와 동일하게 적용됩니다.',
      source: '한국장학재단 학자금대출 상환 안내',
      sourceUrl: 'https://www.kosaf.go.kr',
    },
    {
      q: '소득이 2,851만원 이하인데 이자는 계속 붙나요?',
      a: '취업후상환 대출은 소득 발생 전까지 이자 유예가 가능합니다. 소득이 기준 이하인 기간에도 이자 유예 신청을 통해 이자 부담을 줄일 수 있습니다. 한국장학재단에 문의하세요.',
      source: '한국장학재단 학자금대출 상환 안내',
      sourceUrl: 'https://www.kosaf.go.kr',
    },
    {
      q: '대출을 다 갚기 전에 사망하면 상속인이 갚아야 하나요?',
      a: '취업후상환 학자금대출은 본인의 소득에서만 상환됩니다. 채무자 사망 시 잔여 채무가 면제되며, 상속인에게 상환 의무가 이전되지 않습니다.',
      source: '한국장학재단 학자금대출 상환 안내',
      sourceUrl: 'https://www.kosaf.go.kr',
    },
    {
      q: '임의상환을 하면 이자가 얼마나 줄어드나요?',
      a: '대출 잔액 1,000만원 기준 연 1.7% 이자는 연 17만원입니다. 임의상환으로 잔액을 500만원으로 줄이면 이자가 연 8만5천원으로 절반 이상 줄어듭니다. 잔액이 많을수록 임의상환 효과가 큽니다.',
      source: '한국장학재단 학자금대출 상환 안내',
      sourceUrl: 'https://www.kosaf.go.kr',
    },
  ],
  sources: [
    { name: '한국장학재단 학자금대출 상환 안내', url: 'https://www.kosaf.go.kr' },
    { name: '국세청 취업후상환 안내', url: 'https://www.nts.go.kr' },
  ],
};
