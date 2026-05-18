import type { SpokeData } from '../../page';
function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          한부모가족 아동양육비는 <strong>18세 미만 자녀 1인당 월 23만원</strong>이 지급됩니다.
          소득 기준은 <strong>기준 중위소득 65% 이하</strong>이며, 2026년 기준 2인 가구 약 231만원, 3인 가구 약 298만원입니다.
          자녀가 취학 중이면 <strong>만 22세까지</strong> 연장 지원됩니다.
          신청은 주민센터 방문 또는 복지로(www.bokjiro.go.kr) 온라인으로 할 수 있습니다.
        </p>
      </div>
      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "한부모가족 지원금 얼마나 받나요?" 가장 많이 오시는 질문입니다.
        아동양육비는 자녀 수에 따라 지급되므로 자녀가 여러 명이라면 그만큼 더 받을 수 있습니다.
        소득 기준을 충족하면 아동양육비 외에 학용품비·생활보조금 등 추가 지원도 받을 수 있습니다.
      </p>
      <section className="detail-card" id="amount">
        <h2 className="detail-card-head">2026년 한부모가족 아동양육비 지급 기준</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>구분</th><th>지원 금액</th><th>대상 연령</th></tr></thead>
            <tbody>
              <tr><td>일반 한부모 아동양육비</td><td>월 23만원 (자녀 1인당)</td><td>만 18세 미만 (취학 시 22세까지)</td></tr>
              <tr><td>청소년 한부모 아동양육비 (2세 미만)</td><td>월 40만원 (자녀 1인당)</td><td>한부모 만 24세 이하</td></tr>
              <tr><td>청소년 한부모 아동양육비 (2세 이상)</td><td>월 37만원 (자녀 1인당)</td><td>한부모 만 24세 이하</td></tr>
              <tr><td>아동교육지원비 (학용품비)</td><td>연 10만원 (자녀 1인당)</td><td>초등학생·중학생·고등학생</td></tr>
              <tr><td>생계비 (생활보조금)</td><td>월 10만원</td><td>한부모 가족복지시설 입소자 (65% 이하)</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>자녀 수에 비례 지급:</strong> 자녀가 2명이면 월 46만원(23만원×2), 3명이면 월 69만원(23만원×3)이 지급됩니다.
          </div>
        </div>
      </section>
      <section className="detail-card" id="income">
        <h2 className="detail-card-head">2026년 소득 기준 — 기준 중위소득 65% 이하</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>가구원 수</th><th>기준 중위소득 100%</th><th>65% 이하 (지원 기준)</th></tr></thead>
            <tbody>
              <tr><td>2인 가구</td><td>약 355만원</td><td>약 231만원 이하</td></tr>
              <tr><td>3인 가구</td><td>약 458만원</td><td>약 298만원 이하</td></tr>
              <tr><td>4인 가구</td><td>약 560만원</td><td>약 364만원 이하</td></tr>
              <tr><td>5인 가구</td><td>약 657만원</td><td>약 427만원 이하</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>소득인정액 기준:</strong> 실제 소득이 아닌 소득인정액(근로소득+재산환산액 합산)으로 판단합니다.
            소득인정액 계산은 복지로 모의계산을 이용하면 됩니다.
          </div>
        </div>
      </section>
      <div className="ad-slot">광고 영역</div>
      <section className="detail-card" id="apply">
        <h2 className="detail-card-head">신청 방법 및 제출 서류</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>신청 방법</th><th>내용</th></tr></thead>
            <tbody>
              <tr><td>주민센터 방문</td><td>거주지 읍·면·동 주민센터에 방문 신청</td></tr>
              <tr><td>복지로 온라인</td><td>www.bokjiro.go.kr 접속 후 온라인 신청</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>주요 제출 서류:</strong> 신분증, 가족관계증명서(상세), 소득·재산 확인 서류(근로소득원천징수영수증, 임대차계약서 등), 통장 사본.
            자녀 취학 증명서(만 18~22세 해당 시).
          </div>
          <div className="info-box" style={{ marginTop: 10 }}>
            <strong>지급 방법:</strong> 매월 20일에 신청 계좌로 입금됩니다. 최초 신청 월은 신청일 이후 월분부터 지급됩니다.
          </div>
        </div>
      </section>
      <div className="ad-slot">광고 영역</div>
      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            청소년 한부모 월 37만원 지원, 추가 급여, 신청 방법 등<br />
            한부모가족지원 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/low-income-single-parent" className="btn-cta">
            한부모가족지원 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}
export const 한부모가족지원아동양육비월23만원소득기준SpokeContent: SpokeData = {
  h1: '한부모가족 아동양육비 2026 월 23만원 지급 대상·소득 기준',
  breadcrumb: '아동양육비월23만원소득기준',
  description: '한부모가족 아동양육비는 만 18세 미만 자녀 1인당 월 23만원입니다. 기준 중위소득 65% 이하(2인 가구 약 231만원)가 대상이며, 취학 중이면 만 22세까지 지급됩니다.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    { q: '한부모가족 아동양육비는 얼마인가요?', a: '만 18세 미만 자녀 1인당 월 23만원이 지급됩니다. 자녀가 취학 중이면 만 22세까지 연장됩니다. 자녀가 2명이면 월 46만원, 3명이면 월 69만원입니다.', source: '여성가족부 한부모가족지원 안내', sourceUrl: 'https://www.mogef.go.kr' },
    { q: '한부모가족 지원 소득 기준은 어떻게 되나요?', a: '기준 중위소득 65% 이하여야 합니다. 2026년 기준 2인 가구 약 231만원, 3인 가구 약 298만원 이하이면 신청 가능합니다. 실제 소득이 아닌 소득인정액으로 판단합니다.', source: '여성가족부 한부모가족지원 안내', sourceUrl: 'https://www.mogef.go.kr' },
    { q: '아이가 고등학교에 다니면 만 18세가 넘어도 받을 수 있나요?', a: '네. 자녀가 학교에 재학 중이면 만 22세까지 아동양육비를 받을 수 있습니다. 재학 증명서를 제출해야 합니다.', source: '여성가족부 한부모가족지원 안내', sourceUrl: 'https://www.mogef.go.kr' },
    { q: '한부모가족 신청을 온라인으로 할 수 있나요?', a: '네. 복지로(www.bokjiro.go.kr)에서 온라인으로 신청할 수 있습니다. 주민센터(읍·면·동) 방문 신청도 가능합니다.', source: '여성가족부 한부모가족지원 안내', sourceUrl: 'https://www.mogef.go.kr' },
    { q: '아동양육비 외에 받을 수 있는 추가 지원이 있나요?', a: '초등학생·중학생·고등학생 자녀에게는 자녀 1인당 연 10만원의 학용품비(아동교육지원비)가 지급됩니다. 한부모가족복지시설 입소 시 가구당 월 10만원의 생계비(생활보조금)도 있습니다. 청소년 한부모라면 월 37만원 + 학습지원비 등 추가 지원을 받습니다.', source: '여성가족부 한부모가족지원 안내', sourceUrl: 'https://www.mogef.go.kr' },
  ],
  sources: [
    { name: '여성가족부 한부모가족지원 안내', url: 'https://www.mogef.go.kr' },
    { name: '복지로 한부모가족지원 신청', url: 'https://www.bokjiro.go.kr' },
  ],
};
