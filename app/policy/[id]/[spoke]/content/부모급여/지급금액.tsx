import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          2026년 부모급여는 <strong>0세(0~11개월) 월 100만원, 1세(12~23개월) 월 50만원</strong>입니다.
          소득·재산 기준이 없어 만 2세 미만 모든 아동이 받을 수 있습니다.
          아동수당(월 10만원)과 <strong>중복 수령 가능</strong>합니다.
          가정에서 양육하면 매월 25일 현금으로 입금됩니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "부모급여랑 아동수당 둘 다 받을 수 있나요?"
        중복 수령 가능합니다. 연령별 지급액과 중복 수령 가능한 혜택을 정리했습니다.
      </p>

      <section className="detail-card" id="amount">
        <h2 className="detail-card-head">0세 100만원·1세 50만원 — 연령별 정확한 금액</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>연령</th><th>월 지급액</th><th>소득기준</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>만 0세 (출생~11개월)</td>
                <td><strong>월 100만원</strong></td>
                <td rowSpan={2}>없음 (전국 모든 영아)</td>
              </tr>
              <tr>
                <td>만 1세 (12~23개월)</td>
                <td><strong>월 50만원</strong></td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>2026년 변동 없음:</strong> 2024~2026년 지급액이 동일하게 유지됩니다.
            만 2세 생일이 도래하는 달의 전달까지 최대 24개월간 지급됩니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="overlap">
        <h2 className="detail-card-head">아동수당 10만원 중복 받는 방법</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>제도</th><th>금액</th><th>중복 가능 여부</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>부모급여</td>
                <td>0세 100만·1세 50만원</td>
                <td rowSpan={2}><strong>✅ 중복 가능</strong></td>
              </tr>
              <tr>
                <td>아동수당</td>
                <td>월 10만원 (만 8세 미만)</td>
              </tr>
              <tr>
                <td>부모급여</td>
                <td>0세 100만·1세 50만원</td>
                <td><strong>✅ 중복 가능</strong></td>
              </tr>
              <tr>
                <td>육아휴직급여</td>
                <td>1~3월 최대 250만원</td>
                <td><strong>✅ 중복 가능</strong></td>
              </tr>
              <tr>
                <td>부모급여</td>
                <td>0세 100만·1세 50만원</td>
                <td>❌ 중복 불가</td>
              </tr>
              <tr>
                <td>가정양육수당</td>
                <td>월 10~20만원</td>
                <td>❌ 중복 불가 (부모급여 우선)</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>최대 조합:</strong> 부모급여(0세 100만) + 아동수당(10만) + 육아휴직급여(최대 250만)를 모두 동시에 받을 수 있습니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="payment">
        <h2 className="detail-card-head">지급일과 지급 방식</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>구분</th><th>지급일</th><th>방식</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>가정 양육 시</td>
                <td><strong>매월 25일</strong></td>
                <td>지정 계좌 현금 입금</td>
              </tr>
              <tr>
                <td>어린이집 이용 시 (차액)</td>
                <td><strong>익월 20일</strong></td>
                <td>보육료 제외 차액 현금 입금</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>25일이 주말·공휴일이면</strong> 직전 평일에 지급됩니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            어린이집 이용 시 보육료 차액, 신청 방법, 육아휴직 중복 등<br />
            부모급여 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/parent-allowance" className="btn-cta">
            부모급여 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 부모급여지급금액SpokeContent: SpokeData = {
  h1: '2026년 부모급여 0세 100만원·1세 50만원 | 아동수당 10만원 중복 받는 방법',
  breadcrumb: '지급금액',
  description:
    '2026년 부모급여는 만 0세 월 100만원, 만 1세 월 50만원. 소득기준 없이 전국 모든 영아에게 지급. 아동수당(월 10만원)·육아휴직급여와 중복 수령 가능. 가정양육 시 매월 25일 현금 입금, 어린이집 이용 시 보육료 차액은 익월 20일.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '2026년 부모급여는 얼마인가요?',
      a: '만 0세(0~11개월)는 월 100만원, 만 1세(12~23개월)는 월 50만원입니다. 소득·재산 기준이 없어 전국 모든 영아가 받을 수 있습니다.',
      source: '보건복지부 2026년 부모급여 안내',
      sourceUrl: 'https://www.bokjiro.go.kr',
    },
    {
      q: '부모급여와 아동수당을 동시에 받을 수 있나요?',
      a: '네. 부모급여(0세 100만·1세 50만원)와 아동수당(월 10만원)은 중복 수령이 가능합니다. 별도로 신청해야 합니다.',
      source: '보건복지부 부모급여·아동수당 중복 안내',
      sourceUrl: 'https://www.bokjiro.go.kr',
    },
    {
      q: '부모급여 지급일은 언제인가요?',
      a: '가정 양육 시 매월 25일, 어린이집 이용 시 보육료 차액은 익월 20일에 지급됩니다. 25일이 주말·공휴일이면 직전 평일에 지급됩니다.',
      source: '보건복지부 부모급여 지급일 안내',
      sourceUrl: 'https://www.bokjiro.go.kr',
    },
    {
      q: '가정양육수당이랑 중복으로 받을 수 있나요?',
      a: '아닙니다. 부모급여와 가정양육수당은 중복으로 받을 수 없습니다. 부모급여가 우선 적용되며, 부모급여 지급 대상(0~23개월)은 가정양육수당이 지급되지 않습니다.',
      source: '보건복지부 부모급여 안내',
      sourceUrl: 'https://www.bokjiro.go.kr',
    },
    {
      q: '육아휴직급여를 받으면서 부모급여도 받을 수 있나요?',
      a: '네. 육아휴직급여와 부모급여는 중복 수령이 가능합니다. 둘 다 별도로 신청해서 받을 수 있습니다.',
      source: '보건복지부 부모급여 중복 수급 안내',
      sourceUrl: 'https://www.bokjiro.go.kr',
    },
  ],
  sources: [
    { name: '보건복지부 2026년 부모급여 안내', url: 'https://www.bokjiro.go.kr' },
    { name: '복지로 부모급여 신청', url: 'https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo' },
  ],
};
