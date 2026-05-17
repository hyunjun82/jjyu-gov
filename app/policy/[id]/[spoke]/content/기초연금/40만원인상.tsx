import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          2026년 기초연금 기준연금액은 월 <strong>349,700원</strong>입니다.
          다만, 생계급여 수급 저소득 어르신은 <strong>2026년부터 월 40만원</strong>이 지급됩니다.
          2027년에는 전체 수급자로 40만원 지급이 확대될 예정입니다.
          기초연금 60만원은 아직 확정된 정부 계획이 없습니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "기초연금이 40만원, 아니면 35만원?"
        수급자 유형에 따라 금액이 다릅니다. 2026년 현재 기준연금액과
        저소득자 특례, 그리고 향후 인상 계획까지 정리했습니다.
      </p>

      <section className="detail-card" id="amount-2026">
        <h2 className="detail-card-head">2026년 기초연금 지급액 (현행)</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>수급자 유형</th><th>월 지급액</th><th>기준</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>일반 단독가구</td>
                <td><strong>349,700원</strong></td>
                <td>기준연금액 (2026 보건복지부 고시)</td>
              </tr>
              <tr>
                <td>부부 동시 수급</td>
                <td><strong>각 279,760원</strong><br />(합산 559,520원)</td>
                <td>기준연금액의 80% (20% 감액)</td>
              </tr>
              <tr>
                <td>생계급여 수급 저소득 어르신</td>
                <td><strong>400,000원</strong></td>
                <td>2026년 저소득 특례 (40만원)</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>출처:</strong> 보건복지부 2026년 기초연금 선정기준액·기준연금액 고시 (2026.1.21 시행)
          </div>
        </div>
      </section>

      <section className="detail-card" id="roadmap">
        <h2 className="detail-card-head">기초연금 인상 로드맵</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>시기</th><th>지급액</th><th>대상</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>2025년</td>
                <td>월 342,510원</td>
                <td>전체 수급자</td>
              </tr>
              <tr>
                <td>2026년 (현재)</td>
                <td>월 349,700원<br />저소득 어르신 40만원</td>
                <td>기준연금액 + 저소득 특례</td>
              </tr>
              <tr>
                <td>2027년 (예정)</td>
                <td>월 40만원</td>
                <td>전체 수급자 확대 예정</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>2027년 40만원</strong>은 2024년 9월 보건복지부 발표 기준입니다.
            국회 예산 심의 결과에 따라 변동될 수 있습니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="low-income-40">
        <h2 className="detail-card-head">2026년 저소득 어르신 40만원 — 누가 받나요?</h2>
        <div className="detail-card-body">
          <p style={{ lineHeight: 1.8 }}>
            2026년에 월 40만원을 받는 어르신은 <strong>기초생활수급자(생계급여 수급 대상)</strong>이면서
            기초연금 수급 자격을 갖춘 분들입니다. 단순히 저소득자라고 해서 자동으로 40만원이 지급되는 것이 아닙니다.
          </p>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>40만원 수급 조건:</strong> 만 65세 이상 + 기초연금 수급 자격 + 기초생활수급자(생계급여)
          </div>
          <div className="warning-box" style={{ marginTop: 12 }}>
            일반 기초연금 수급자는 2026년에 349,700원이며, 40만원은 생계급여 수급 어르신에 한정됩니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="60-question">
        <h2 className="detail-card-head">기초연금 60만원은 언제부터인가요?</h2>
        <div className="detail-card-body">
          <p style={{ lineHeight: 1.8 }}>
            2026년 5월 현재, 기초연금 60만원 지급은 <strong>정부가 확정한 계획이 없습니다</strong>.
            정부 공식 계획은 2026년 저소득 어르신 40만원, 2027년 전체 수급자 40만원 확대까지입니다.
            60만원 인상 관련 논의는 일부 정치권에서 제기되고 있으나 아직 법제화된 내용은 아닙니다.
          </p>
          <div className="info-box" style={{ marginTop: 12 }}>
            최신 기초연금 인상 계획은 <strong>보건복지부 공식 발표</strong>를 통해 확인하세요.
            변동이 있을 경우 이 페이지도 업데이트됩니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            선정 기준, 부부 감액, 신청 방법 등<br />
            기초연금 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/basic-pension" className="btn-cta">
            기초연금 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 금액인상SpokeContent: SpokeData = {
  h1: '기초연금 2026 얼마 40만원 언제부터 인상 로드맵 총정리',
  breadcrumb: '인상 금액',
  description: '2026년 기초연금은 기준연금액 349,700원이며, 생계급여 수급 저소득 어르신은 40만원입니다. 2027년 전체 수급자 40만원 확대 예정. 기초연금 60만원은 아직 확정된 계획이 없습니다.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '2026년 기초연금은 얼마인가요?',
      a: '기준연금액은 월 349,700원입니다. 생계급여 수급 저소득 어르신은 40만원을 받습니다. 부부 동시 수급 시 각각 20% 감액되어 279,760원씩 받습니다.',
      source: '보건복지부 2026년 기초연금 기준연금액 고시',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '2027년에는 기초연금이 40만원으로 오르나요?',
      a: '2024년 9월 보건복지부 발표에 따르면 2027년부터 전체 수급자에게 월 40만원을 지급할 예정입니다. 다만 국회 예산 심의 결과에 따라 변동될 수 있습니다.',
      source: '보건복지부 2024.9 연금개혁 추진계획 발표',
      sourceUrl: 'https://www.bokjiro.go.kr/ssis-tbu/cms/news/news',
    },
    {
      q: '기초연금 60만원은 언제부터 지급되나요?',
      a: '2026년 5월 기준 기초연금 60만원 지급은 정부가 확정한 계획이 없습니다. 공식 계획은 2027년 전체 수급자 40만원 확대까지입니다.',
      source: '보건복지부 기초연금 공식 안내',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '저소득 어르신 40만원 기준은 무엇인가요?',
      a: '기초생활수급자(생계급여 수급) 중 기초연금 수급 자격을 갖춘 어르신입니다. 단순 저소득만으로는 40만원 지급 대상이 아닙니다.',
      source: '보건복지부 2026년 기초연금 안내',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '기초연금이 물가에 따라 매년 오르나요?',
      a: '네. 기초연금액은 매년 소비자물가상승률을 반영하여 조정됩니다. 2026년은 전년 대비 2.1% 인상되어 349,700원이 됐습니다.',
      source: '국민연금 온에어 2026년 기초연금 안내',
      sourceUrl: 'https://www.npsonair.kr',
    },
  ],
  sources: [
    { name: '보건복지부 2026년 기초연금 선정기준액 고시', url: 'https://www.mohw.go.kr' },
    { name: '국민연금 온에어 2026 기초연금 변경사항', url: 'https://www.npsonair.kr/advantages/detail' },
    { name: '복지로 2026년 저소득 기초연금 40만원 안내', url: 'https://www.bokjiro.go.kr/ssis-tbu/cms/news/news' },
  ],
};
