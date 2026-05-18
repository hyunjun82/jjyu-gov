import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      {/* 빠른 답변 */}
      <div className="answer-box">
        <p>
          2026년 학자금대출 금리는 <strong>연 1.7%</strong>(6년 연속 동결)입니다.
          가장 큰 변화는 취업후상환 학자금대출의{' '}
          <strong>소득요건 전면 폐지</strong>입니다.
          기존에는 가구 소득분위 8분위 이하만 신청 가능했지만,
          2026년부터 소득 조건 없이 누구나 신청할 수 있습니다.
        </p>
      </div>

      {/* 서론 */}
      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        소득이 높아서 취업후상환 대출을 못 받았던 가정이라면 2026년부터 달라집니다.
        아래에서 2026년 변경 사항과 일반 학자금대출과의 차이를 정리했습니다.
      </p>

      {/* H2-1: 2026 변경사항 */}
      <section className="detail-card" id="changes">
        <h2 className="detail-card-head">2026년 학자금대출 주요 변경사항</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr>
                <th>항목</th>
                <th>2025년 이전</th>
                <th>2026년</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>취업후상환 소득요건</td>
                <td>가구 소득분위 8분위 이하</td>
                <td><strong>폐지 (소득 무관)</strong></td>
              </tr>
              <tr>
                <td>대출 금리</td>
                <td>연 1.7%</td>
                <td>연 1.7% (동결)</td>
              </tr>
              <tr>
                <td>일반 학자금 금리</td>
                <td>연 1.7%</td>
                <td>연 1.7% (동결)</td>
              </tr>
              <tr>
                <td>상환기준소득</td>
                <td>연 3,000만원대</td>
                <td>연 2,851만원</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>소득요건 폐지 효과:</strong> 기존에 가구 소득 8분위 초과로 취업후상환 대출을
            받지 못했던 학생도 2026년부터 신청이 가능해졌습니다.
            취업 전까지 상환 부담이 없어 학업에 집중할 수 있습니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      {/* H2-2: 상환 방식 비교 */}
      <section className="detail-card" id="compare">
        <h2 className="detail-card-head">취업후상환 vs 일반 학자금대출 비교</h2>
        <div className="detail-card-body">
          <div className="info-box">
            <strong>취업후상환 학자금대출</strong><br />
            취업 전까지 상환 의무 없음. 취업 후 연 소득 2,851만원 초과 시
            초과분의 20%를 국세청이 원천징수해 자동 상환.
            소득이 낮으면 상환이 없거나 소액만 상환.
          </div>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>일반 학자금대출</strong><br />
            졸업 후 거치 기간(보통 1~2년) 후 원금 분할상환 시작.
            취업 여부와 무관하게 상환 의무 발생.
            취업이 늦어지면 이자 부담 가중.
          </div>
          <table className="compare-table" style={{ marginTop: 16 }}>
            <thead>
              <tr>
                <th>구분</th>
                <th>취업후상환</th>
                <th>일반 학자금</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>금리</td>
                <td>연 1.7%</td>
                <td>연 1.7%</td>
              </tr>
              <tr>
                <td>소득요건</td>
                <td>없음 (2026년부터)</td>
                <td>있음(성적·소득 기준)</td>
              </tr>
              <tr>
                <td>상환 방식</td>
                <td>소득 발생 후 자동 상환</td>
                <td>졸업 후 분할상환</td>
              </tr>
              <tr>
                <td>미취업 시</td>
                <td>상환 유예</td>
                <td>이자 발생</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      {/* CTA */}
      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            상환 기준소득 2,851만원 초과 시 상환 방법, 임의상환 절감 방법을 확인하세요.
          </p>
          <a href="/policy/general-student-loan" className="btn-cta">
            학자금대출 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 학자금대출2026금리1점7취업후상환소득폐지SpokeContent: SpokeData = {
  h1: '2026 학자금대출 금리 연 1.7%, 취업후상환 소득 조건 폐지',
  breadcrumb: '2026금리1점7취업후상환소득폐지',
  description:
    '2026년 학자금대출 금리 연 1.7% 동결, 취업후상환 학자금대출 소득요건 전면 폐지 내용을 정리합니다. 기존 8분위 이하 제한 → 소득 무관 신청 가능.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '2026년에 취업후상환 대출을 새로 신청하려면 어떻게 하나요?',
      a: '한국장학재단 홈페이지(kosaf.go.kr) 또는 앱에서 학기별 신청 기간에 신청하면 됩니다. 2026년부터 소득 조건 없이 신청 가능합니다.',
      source: '한국장학재단 학자금대출 안내',
      sourceUrl: 'https://www.kosaf.go.kr',
    },
    {
      q: '기존에 일반 학자금대출을 받고 있는데 취업후상환으로 전환할 수 있나요?',
      a: '원칙적으로 기존 대출의 전환은 불가합니다. 신규 학기 대출부터 취업후상환으로 신청할 수 있습니다. 자세한 전환 여부는 한국장학재단 ☎1599-2000으로 문의하세요.',
      source: '한국장학재단 학자금대출 안내',
      sourceUrl: 'https://www.kosaf.go.kr',
    },
    {
      q: '연 1.7%는 고정금리인가요, 변동금리인가요?',
      a: '2026년 현재 고정금리 연 1.7%입니다. 금리는 매년 정부 고시에 따라 변경될 수 있으며, 이미 대출 중인 경우 당초 약정 금리가 유지됩니다.',
      source: '한국장학재단 학자금대출 안내',
      sourceUrl: 'https://www.kosaf.go.kr',
    },
    {
      q: '졸업 후에도 취업을 못 하면 계속 상환 안 해도 되나요?',
      a: '취업후상환 대출은 상환기준소득(연 2,851만원) 이하면 상환 의무가 발생하지 않습니다. 미취업 또는 소득이 낮은 기간에는 자동으로 상환이 유예됩니다.',
      source: '한국장학재단 학자금대출 안내',
      sourceUrl: 'https://www.kosaf.go.kr',
    },
    {
      q: '대학원생도 취업후상환 대출을 받을 수 있나요?',
      a: '취업후상환 학자금대출은 학부생(4년제·전문대) 대상이 기본이며, 대학원생은 일반 학자금대출을 이용합니다. 일부 예외가 있으니 한국장학재단에 확인하세요.',
      source: '한국장학재단 학자금대출 안내',
      sourceUrl: 'https://www.kosaf.go.kr',
    },
  ],
  sources: [
    { name: '한국장학재단 학자금대출 안내', url: 'https://www.kosaf.go.kr' },
    { name: '교육부 학자금대출 정책 안내', url: 'https://www.moe.go.kr' },
  ],
};
