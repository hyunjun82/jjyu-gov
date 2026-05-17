import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          2026년 육아휴직급여는 <strong>1~3개월 월 250만원(통상임금 100%)</strong>,
          4~6개월 월 200만원(통상임금 100%),
          7개월 이후 월 160만원(통상임금 80%)입니다.
          기존 사후지급금(25%) 제도는 2026년부터 폐지되어
          <strong>휴직 기간 중 100% 전액 지급</strong>됩니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "통상임금이 뭔지 모르겠어요. 내가 실제로 얼마를 받는 건가요?"
        구간별 급여율과 상한액을 기준으로 내 급여를 계산하는 방법을 정리했습니다.
      </p>

      <section className="detail-card" id="amount">
        <h2 className="detail-card-head">구간별 급여 — 1~3월·4~6월·7월 이후 얼마인가</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>기간</th><th>통상임금 비율</th><th>월 상한액</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>1~3개월</td>
                <td>100%</td>
                <td><strong>월 250만원</strong></td>
              </tr>
              <tr>
                <td>4~6개월</td>
                <td>100%</td>
                <td><strong>월 200만원</strong></td>
              </tr>
              <tr>
                <td>7~18개월</td>
                <td>80%</td>
                <td><strong>월 160만원</strong></td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>핵심:</strong> 상한액은 통상임금의 100%(또는 80%)와 상한액 중 낮은 금액이 지급됩니다.
            통상임금이 상한액보다 낮으면 통상임금 전액을 받습니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="calculate">
        <h2 className="detail-card-head">내 급여 계산 — 통상임금 기준 실제 수령액</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>통상임금(월)</th><th>1~3월 수령</th><th>4~6월 수령</th><th>7월~ 수령</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>200만원</td>
                <td>200만원 (100%)</td>
                <td>200만원 (100%)</td>
                <td>160만원 (80%)</td>
              </tr>
              <tr>
                <td>250만원</td>
                <td><strong>250만원</strong> (상한)</td>
                <td>200만원 (상한)</td>
                <td>160만원 (상한)</td>
              </tr>
              <tr>
                <td>300만원</td>
                <td><strong>250만원</strong> (상한)</td>
                <td><strong>200만원</strong> (상한)</td>
                <td><strong>160만원</strong> (상한)</td>
              </tr>
              <tr>
                <td>400만원 이상</td>
                <td><strong>250만원</strong> (상한)</td>
                <td><strong>200만원</strong> (상한)</td>
                <td><strong>160만원</strong> (상한)</td>
              </tr>
            </tbody>
          </table>
          <p style={{ fontSize: 13, color: '#666', marginTop: 8 }}>
            ※ 통상임금이 상한액을 초과하면 상한액이 지급됩니다. 통상임금이 낮으면 실제 통상임금×비율을 받습니다.
          </p>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="after-pay">
        <h2 className="detail-card-head">2026년 사후지급금 폐지 — 뭐가 달라졌나</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>구분</th><th>2025년 이전</th><th>2026년 이후</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>휴직 중 지급</td>
                <td>75% (75%만 수령)</td>
                <td><strong>100% 전액</strong></td>
              </tr>
              <tr>
                <td>사후지급금(25%)</td>
                <td>복직 후 6개월 근무 시 지급</td>
                <td><strong>폐지</strong></td>
              </tr>
              <tr>
                <td>미복직 시 손실</td>
                <td>25% 미지급 → 손실</td>
                <td><strong>없음</strong> (이미 전액 수령)</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>2026년 핵심 변경:</strong> 사후지급금 제도가 폐지되어 육아휴직 기간 중 급여를 100% 받습니다.
            복직하지 않아도 이미 받은 급여를 돌려줄 필요가 없습니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="note">
        <h2 className="detail-card-head">급여 계산 시 주의사항</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>통상임금 기준:</strong> 기본급 + 고정 수당(직책수당·자격증수당 등)이 통상임금입니다.
            성과급·상여금·식비·교통비 등 변동 수당은 통상임금에 포함되지 않습니다.
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>분할 사용 시:</strong> 육아휴직을 분할 사용하면 각 회차 1~3개월 기준이 초기화되지 않습니다.
            전체 누적 기간 기준으로 구간이 적용됩니다.
          </div>
          <div className="warning-box">
            <strong>자영업자·프리랜서:</strong> 고용보험 미가입 사업주나 프리랜서는 본 급여 대상이 아닙니다.
            별도 출산·양육 지원 사업을 확인하세요.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            6+6 부모함께 육아휴직, 신청 방법, 회사 부담 여부 등<br />
            육아휴직급여 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/parental-leave-pay" className="btn-cta">
            육아휴직급여 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 급여계산SpokeContent: SpokeData = {
  h1: '육아휴직 중 월급 얼마나 받나 | 1~3월 250만원·통상임금 비율 계산법',
  breadcrumb: '급여계산',
  description:
    '2026년 육아휴직급여는 1~3월 월 최대 250만원(통상임금 100%), 4~6월 200만원, 7월~ 160만원(80%)입니다. 사후지급금(25%) 제도가 폐지되어 휴직 중 100% 전액 지급. 통상임금이 상한액보다 낮으면 실제 통상임금×비율로 계산됩니다.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '육아휴직 1~3개월에 얼마나 받나요?',
      a: '통상임금의 100%이며 월 250만원이 상한입니다. 통상임금이 250만원 이하면 통상임금 전액, 그 이상이면 250만원을 받습니다.',
      source: '고용노동부 육아휴직급여 안내',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '4~6개월 급여는 얼마인가요?',
      a: '통상임금의 100%이며 월 200만원이 상한입니다. 상한이 줄어드는 이유는 정책 지원 구조상 초기 집중 지원 이후 단계적으로 조정되기 때문입니다.',
      source: '고용노동부 육아휴직급여 안내',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '7개월 이후에는 얼마인가요?',
      a: '통상임금의 80%이며 월 160만원이 상한입니다. 최대 18개월(1년 6개월)까지 사용할 수 있습니다.',
      source: '고용노동부 육아휴직급여 안내',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '2026년에 사후지급금이 폐지됐다는 게 무슨 뜻인가요?',
      a: '기존에는 급여의 25%를 복직 후 6개월 근무 시 지급했습니다. 2026년부터 이 제도가 폐지되어 휴직 기간 중 100%를 받습니다. 복직 여부와 무관합니다.',
      source: '고용노동부 2026년 육아휴직급여 개편',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '통상임금이 뭔가요?',
      a: '기본급 + 고정 수당(직책수당·자격증수당 등)의 합계입니다. 성과급·상여금·식비·교통비 등 변동 항목은 포함되지 않습니다.',
      source: '고용노동부 통상임금 안내',
      sourceUrl: 'https://www.moel.go.kr',
    },
  ],
  sources: [
    { name: '고용노동부 육아휴직급여 안내', url: 'https://www.moel.go.kr' },
    { name: '고용보험 누리집 육아휴직급여 신청', url: 'https://www.ei.go.kr' },
  ],
};
