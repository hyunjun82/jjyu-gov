import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          육아휴직급여를 받으면서 <strong>부모급여도 동시에 받을 수 있습니다</strong>.
          두 제도는 별도로 신청하는 각각 다른 지원이라 중복이 가능합니다.
          0세 아이 기준으로 부모급여 100만원 + 육아휴직급여(1~3월 최대 250만원)를
          <strong>합산해서 수령</strong>할 수 있습니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "육아휴직 중이면 부모급여는 못 받는 건가요?" 받을 수 있습니다.
        중복 가능한 제도와 불가능한 제도를 명확히 정리했습니다.
      </p>

      <section className="detail-card" id="overlap">
        <h2 className="detail-card-head">육아휴직급여 + 부모급여 — 중복 수급 가능 목록</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>제도</th><th>부모급여와 중복</th><th>비고</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>육아휴직급여 (고용노동부)</td>
                <td><strong>✅ 중복 가능</strong></td>
                <td>별도 신청, 동시 수령 OK</td>
              </tr>
              <tr>
                <td>아동수당 (보건복지부)</td>
                <td><strong>✅ 중복 가능</strong></td>
                <td>만 8세 미만 월 10만원</td>
              </tr>
              <tr>
                <td>첫만남 이용권 (바우처)</td>
                <td><strong>✅ 중복 가능</strong></td>
                <td>출산 시 200만원 바우처</td>
              </tr>
              <tr>
                <td>가정양육수당</td>
                <td>❌ 중복 불가</td>
                <td>부모급여 우선 적용</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>최대 조합 (0세 기준):</strong> 부모급여(100만) + 아동수당(10만) + 육아휴직급여(최대 250만)
            = 월 최대 360만원 수준의 지원을 동시에 받을 수 있습니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="how">
        <h2 className="detail-card-head">두 가지 동시 받는 방법 — 각각 별도 신청</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>부모급여 신청:</strong> 행정복지센터·복지로(bokjiro.go.kr)·정부24 → 출생 후 60일 이내 신청
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>육아휴직급여 신청:</strong> 사업주 육아휴직 승인 → ei.go.kr(고용보험 누리집) 또는 고용센터에서 매월 신청
          </div>
          <div className="info-box">
            <strong>두 제도는 각각 다른 부처(보건복지부·고용노동부)에 신청</strong>합니다.
            한 곳에 신청해도 다른 곳은 자동으로 처리되지 않습니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="calculate">
        <h2 className="detail-card-head">실제 수령액 시뮬레이션</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>제도</th><th>0세 가정 양육 시</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>부모급여</td>
                <td>월 100만원</td>
              </tr>
              <tr>
                <td>아동수당</td>
                <td>월 10만원</td>
              </tr>
              <tr>
                <td>육아휴직급여 (1~3월, 통상임금 250만 이상 기준)</td>
                <td>월 250만원</td>
              </tr>
              <tr>
                <td><strong>합계</strong></td>
                <td><strong>월 360만원</strong></td>
              </tr>
            </tbody>
          </table>
          <p style={{ fontSize: 13, color: '#666', marginTop: 8 }}>
            ※ 육아휴직급여는 통상임금과 구간(1~3월·4~6월·7월~)에 따라 달라집니다.
            부모급여와 아동수당은 고정 지급됩니다.
          </p>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            지급금액, 어린이집 보육료 전환, 신청 방법 등<br />
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

export const 육아휴직중복SpokeContent: SpokeData = {
  h1: '육아휴직급여 받으면서 부모급여도 받을 수 있나 | 중복 수급 정리',
  breadcrumb: '육아휴직 중복',
  description:
    '육아휴직급여와 부모급여는 중복 수령이 가능합니다. 0세 기준 부모급여(100만) + 아동수당(10만) + 육아휴직급여(최대 250만) = 월 최대 360만원 수준. 각각 별도 신청 필요. 가정양육수당과는 중복 불가(부모급여 우선).',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '육아휴직 중에 부모급여를 받을 수 있나요?',
      a: '네. 육아휴직급여와 부모급여는 별개의 제도라 중복 수령이 가능합니다. 각각 고용노동부(ei.go.kr)와 보건복지부(복지로)에 별도 신청해야 합니다.',
      source: '보건복지부 부모급여 중복 수급 안내',
      sourceUrl: 'https://www.bokjiro.go.kr',
    },
    {
      q: '부모급여와 아동수당도 동시에 받을 수 있나요?',
      a: '네. 부모급여와 아동수당(월 10만원, 만 8세 미만)은 중복 수령이 가능합니다. 아동수당은 복지로 또는 행정복지센터에서 별도 신청이 필요합니다.',
      source: '보건복지부 아동수당·부모급여 중복 안내',
      sourceUrl: 'https://www.bokjiro.go.kr',
    },
    {
      q: '가정양육수당이랑 부모급여는 중복이 안 되나요?',
      a: '중복으로 받을 수 없습니다. 부모급여 대상(0~23개월)은 부모급여가 우선 적용되고 가정양육수당은 지급되지 않습니다.',
      source: '보건복지부 부모급여 안내',
      sourceUrl: 'https://www.bokjiro.go.kr',
    },
    {
      q: '부모급여는 어디서 신청하고, 육아휴직급여는 어디서 신청하나요?',
      a: '부모급여: 복지로(bokjiro.go.kr), 정부24, 행정복지센터. 육아휴직급여: 고용보험 누리집(ei.go.kr) 또는 고용센터. 두 곳에 각각 별도 신청해야 합니다.',
      source: '각 부처 공식 안내',
      sourceUrl: 'https://www.bokjiro.go.kr',
    },
    {
      q: '0세 아이 양육 시 최대로 받을 수 있는 금액은 얼마인가요?',
      a: '부모급여 100만원 + 아동수당 10만원 + 육아휴직급여 최대 250만원(1~3개월 기준) = 월 최대 360만원입니다. 각각 별도 신청이 필요합니다.',
      source: '각 부처 지원금 합산 기준',
      sourceUrl: 'https://www.bokjiro.go.kr',
    },
  ],
  sources: [
    { name: '보건복지부 부모급여 안내', url: 'https://www.bokjiro.go.kr' },
    { name: '고용보험 육아휴직급여 안내', url: 'https://www.ei.go.kr' },
  ],
};
