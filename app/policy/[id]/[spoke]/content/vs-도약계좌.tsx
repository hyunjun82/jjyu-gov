import type { SpokeData } from '../SpokeClient';

const comparison = [
  { label: '가입 기간', future: '3년', leap: '5년' },
  { label: '월 납입 한도', future: '최대 50만원', leap: '최대 70만원' },
  { label: '정부 지원 방식', future: '기여금 6% / 12%', leap: '소득구간별 매칭' },
  { label: '소득 기준 (가구)', future: '중위소득 200% 이하', leap: '중위소득 250% 이하' },
  { label: '개인 소득 기준', future: '총급여 7,500만원 이하', leap: '총급여 7,500만원 이하' },
  { label: '비과세', future: '이자소득세 면제', leap: '이자소득세 면제' },
  { label: '신청 방식', future: '비대면 앱 전용', leap: '비대면 앱 전용' },
  { label: '모집 시기', future: '연 2회 (6월·12월)', leap: '2025.12 신규 가입 종료' },
  { label: '갈아타기', future: '도약계좌→미래적금: 2026.6 특별 허용', leap: '미래적금으로 이동 가능' },
  { label: '취급 기관 수', future: '15개 금융기관', leap: '기존 참여 은행' },
];

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          청년미래적금은 3년 만기·월 50만원·기여금 6% 또는 12% 방식이고,
          청년도약계좌는 5년 만기·월 70만원·소득구간별 매칭 방식입니다.
          도약계좌는 2025년 12월 신규 가입이 종료되었으며, 2026년 6월에 한해 미래적금으로 갈아타기가 허용됩니다.
        </p>
      </div>

      {/* ── 1. 핵심 수치 비교 ── */}
      <section className="detail-card" id="comparison">
        <h2 className="detail-card-head">핵심 조건 비교 한눈에</h2>
        <div className="detail-card-body" style={{ padding: 0 }}>
          <div className="highlight-numbers">
            <div className="highlight-num-item primary">
              <span className="highlight-num-label">청년미래적금</span>
              <span className="highlight-num-value">3년 만기</span>
              <span className="highlight-num-sub">월 50만원 · 기여금 6%/12% · 비과세</span>
            </div>
            <div className="highlight-num-vs">vs</div>
            <div className="highlight-num-item">
              <span className="highlight-num-label">청년도약계좌</span>
              <span className="highlight-num-value">5년 만기</span>
              <span className="highlight-num-sub">월 70만원 · 소득구간 매칭 · 비과세</span>
            </div>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table className="compare-table">
              <caption className="sr-only">청년미래적금과 청년도약계좌 상세 비교표</caption>
              <thead>
                <tr>
                  <th scope="col">항목</th>
                  <th scope="col" className="highlight">청년미래적금</th>
                  <th scope="col">청년도약계좌</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={i}>
                    <td className="compare-label">{row.label}</td>
                    <td style={{ fontWeight: 600 }}>{row.future}</td>
                    <td>{row.leap}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="source-inline" style={{ padding: '12px 16px' }}>
            출처:{' '}
            <a href="https://www.fsc.go.kr/no040101?cnId=3187" target="_blank" rel="noopener noreferrer">
              금융위원회 카드뉴스 (2026.04.24)
            </a>
          </p>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      {/* ── 2. 갈아타기 상세 ── */}
      <section className="detail-card" id="transfer">
        <h2 className="detail-card-head">도약계좌 → 미래적금, 갈아타기 조건은?</h2>
        <div className="detail-card-body">
          <div className="answer-box-inline">
            2026년 6월에 한해, 청년도약계좌를 특별 중도해지하고 청년미래적금으로 이동할 수 있습니다.
            갈아타기 시에도 기여금과 비과세 혜택이 유지됩니다.
          </div>
          <div className="info-checklist">
            <strong>갈아타기 주요 조건</strong>
            <ul>
              <li><span className="check-icon">&#10003;</span> 2026년 6월 모집 기간에 한해 허용</li>
              <li><span className="check-icon">&#10003;</span> 도약계좌 특별 중도해지 후 미래적금 신규 가입</li>
              <li><span className="check-icon">&#10003;</span> 기여금 및 이자소득세 비과세 혜택 유지</li>
              <li><span className="check-icon">&#10003;</span> 청년미래적금 자격 조건 동시 충족 필요</li>
            </ul>
          </div>
          <div className="warning-box">
            <strong>주의:</strong> 2026년 6월 이후에는 갈아타기 특례가 종료됩니다.
            도약계좌 유지 중이라면 6월 모집 일정을 반드시 확인하세요.
          </div>
          <p className="source-inline">
            출처:{' '}
            <a href="https://www.fsc.go.kr/no040101?cnId=3187" target="_blank" rel="noopener noreferrer">
              금융위원회 카드뉴스 (2026.04.24)
            </a>
          </p>
        </div>
      </section>

      {/* ── 3. 중복 가입 여부 ── */}
      <section className="detail-card" id="overlap">
        <h2 className="detail-card-head">둘 다 동시에 가입할 수 있나?</h2>
        <div className="detail-card-body">
          <div className="answer-box-inline">
            청년미래적금과 청년도약계좌 동시 가입은 불가합니다.
            도약계좌를 유지 중이면 갈아타기를 통해 미래적금으로 이동하거나, 도약계좌 만기 후 미래적금에 가입하는 방식이 가능합니다.
          </div>
          <table className="mini-table">
            <caption className="sr-only">동시 가입 가능 여부 정리</caption>
            <thead>
              <tr>
                <th scope="col">상황</th>
                <th scope="col">가능 여부</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>도약계좌 유지 중 + 미래적금 신규</td>
                <td className="text-danger" style={{ fontWeight: 600 }}>불가</td>
              </tr>
              <tr>
                <td>2026.6 갈아타기 특례 (도약→미래적금)</td>
                <td className="text-success" style={{ fontWeight: 600 }}>가능 (6월 한정)</td>
              </tr>
              <tr>
                <td>도약계좌 만기 후 미래적금 신규 가입</td>
                <td className="text-success" style={{ fontWeight: 600 }}>가능 (자격 충족 시)</td>
              </tr>
              <tr>
                <td>미래적금 + 청년내일저축계좌 동시</td>
                <td className="text-success" style={{ fontWeight: 600 }}>가능</td>
              </tr>
            </tbody>
          </table>
          <p className="source-inline">
            출처:{' '}
            <a href="https://www.fsc.go.kr/no040101?cnId=3187" target="_blank" rel="noopener noreferrer">
              금융위원회 카드뉴스 (2026.04.24)
            </a>
          </p>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      {/* ── 4. 어느 쪽이 더 유리한가 ── */}
      <section className="detail-card" id="which">
        <h2 className="detail-card-head">내 상황엔 어느 쪽이 유리한가?</h2>
        <div className="detail-card-body">
          <div className="answer-box-inline">
            기간이 짧을수록 미래적금, 납입 여력이 크고 장기 자산 형성이 목표면 도약계좌가 유리합니다.
            단, 도약계좌는 2025년 12월 이후 신규 모집이 종료된 상태입니다.
          </div>
          <table className="mini-table">
            <caption className="sr-only">상황별 추천 상품</caption>
            <thead>
              <tr>
                <th scope="col">상황</th>
                <th scope="col">추천</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>3년 이내에 목돈이 필요하다</td>
                <td style={{ fontWeight: 600, color: 'var(--gov-primary)' }}>청년미래적금</td>
              </tr>
              <tr>
                <td>5년 장기 자산 형성 목표 (도약계좌 미가입)</td>
                <td style={{ fontWeight: 600 }}>청년미래적금 (6월 신청)</td>
              </tr>
              <tr>
                <td>도약계좌 유지 중, 3년으로 줄이고 싶다</td>
                <td style={{ fontWeight: 600, color: 'var(--gov-primary)' }}>2026.6 갈아타기 검토</td>
              </tr>
              <tr>
                <td>우대형 기여금(12%) 자격 해당</td>
                <td style={{ fontWeight: 600, color: 'var(--gov-primary)' }}>청년미래적금 (유리)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export const VsLeapSpokeContent: SpokeData = {
  h1: '청년미래적금 vs 청년도약계좌, 뭐가 다를까?',
  breadcrumb: 'vs 도약계좌 차이',
  description: '청년미래적금과 청년도약계좌의 가입 기간·정부 지원 방식·갈아타기 조건 등 10가지를 비교합니다.',
  datePublished: '2026-04-24T09:00:00+09:00',
  dateModified: '2026-05-13T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '미래적금이 도약계좌보다 왜 더 유리한가요?',
      a: '3년으로 기간이 짧고, 우대형 기여금이 12%로 도약계좌 최고 매칭(약 6%)보다 높습니다. 소상공인·신규취업자 등 우대형 자격이 되면 더욱 유리합니다.',
      source: '금융위원회 카드뉴스 (2026.04.24)',
      sourceUrl: 'https://www.fsc.go.kr/no040101?cnId=3187',
    },
    {
      q: '둘 다 가입할 수 있나요?',
      a: '동시 가입은 불가합니다. 도약계좌 유지 중이면 2026년 6월 갈아타기 특례를 이용하거나, 도약계좌 만기 후 미래적금에 가입할 수 있습니다.',
      source: '금융위원회 카드뉴스 (2026.04.24)',
      sourceUrl: 'https://www.fsc.go.kr/no040101?cnId=3187',
    },
    {
      q: '갈아타면 기여금은 어떻게 되나요?',
      a: '2026년 6월 갈아타기 특례를 이용하면 기여금과 비과세 혜택이 그대로 유지됩니다. 일반 중도해지 후 신규 가입은 혜택이 소멸됩니다.',
      source: '금융위원회 카드뉴스 (2026.04.24)',
      sourceUrl: 'https://www.fsc.go.kr/no040101?cnId=3187',
    },
    {
      q: '도약계좌 만기 후 미래적금 가입이 가능한가요?',
      a: '가능합니다. 도약계좌 만기 후 미래적금 자격(나이·소득·가구 중위소득 200% 이하)을 충족하면 6월 또는 12월 모집 기간에 신청할 수 있습니다.',
      source: '금융위원회 카드뉴스 (2026.04.24)',
      sourceUrl: 'https://www.fsc.go.kr/no040101?cnId=3187',
    },
    {
      q: '소득 기준이 왜 더 엄격해졌나요?',
      a: '가구 소득 기준이 도약계좌(중위 250%)에서 미래적금(중위 200%)으로 낮아졌습니다. 개인 소득 기준(총급여 7,500만원)은 동일합니다. 더 낮은 소득 계층에 집중 지원하는 방향으로 조정되었습니다.',
      source: '금융위원회 카드뉴스 (2026.04.24)',
      sourceUrl: 'https://www.fsc.go.kr/no040101?cnId=3187',
    },
  ],
  sources: [
    { name: '금융위원회 카드뉴스 (2026.04.24)', url: 'https://www.fsc.go.kr/no040101?cnId=3187' },
    { name: '금융위원회', url: 'https://www.fsc.go.kr' },
    { name: '서민금융진흥원', url: 'https://www.kinfa.or.kr' },
  ],
};
