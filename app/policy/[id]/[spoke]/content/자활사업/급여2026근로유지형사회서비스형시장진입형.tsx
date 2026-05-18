import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          2026년 자활근로 급여 단가는 유형에 따라
          <strong>근로유지형 29,940원</strong> / <strong>사회서비스형 53,840원</strong> /
          <strong>시장진입형 62,080원</strong>으로 구분됩니다(일 기준).
          시장진입형은 실비 4,000원이 추가 지급됩니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        자활근로는 일주일에 5일(주 40시간 이내)을 기본으로 하며,
        주차수당과 월차휴가도 지급됩니다.
        유형에 따라 담당하는 업무와 급여 수준이 다르므로 본인에게 맞는 유형을 선택하세요.
      </p>

      <section className="detail-card" id="wage">
        <h2 className="detail-card-head">2026년 자활근로 급여 단가</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>유형</th><th>일 급여</th><th>주요 업무</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>근로유지형</strong></td><td>29,940원</td><td>환경 정비·지역사회 봉사 등 단순 업무</td></tr>
              <tr><td><strong>사회서비스형</strong></td><td>53,840원</td><td>간병·보육보조·집수리 등 사회서비스</td></tr>
              <tr><td><strong>시장진입형</strong></td><td>62,080원 + 실비 4,000원</td><td>자활기업 창업 연계·시장 진입 준비</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="extra">
        <h2 className="detail-card-head">추가 지급 항목</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>주차수당:</strong> 매주 개근 시 일 급여의 일정 비율 지급
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>월차휴가:</strong> 1개월 개근 시 1일 유급 월차 지급
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>시장진입형 실비:</strong> 교통비·식비 등 현장 실비 4,000원/일 추가
          </div>
          <div className="info-box">
            <strong>4대보험:</strong> 고용보험 적용 (산재·고용보험 가입)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="monthly">
        <h2 className="detail-card-head">월 예상 수령액 계산</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>근로유지형 (월 22일 기준):</strong> 29,940원 × 22일 = 약 658,680원
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>사회서비스형 (월 22일):</strong> 53,840원 × 22일 = 약 1,184,480원
          </div>
          <div className="info-box">
            <strong>시장진입형 (월 22일):</strong> (62,080원 + 4,000원) × 22일 = 약 1,453,760원
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            참여자격, 사업 종류, 수급 유지 기준까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/self-sufficiency-program" className="btn-cta">
            자활사업 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 자활사업급여2026근로유지형사회서비스형시장진입형SpokeContent: SpokeData = {
  h1: '자활근로 급여, 2026년 근로유지형·사회서비스형·시장진입형 단가',
  breadcrumb: '급여2026근로유지형사회서비스형시장진입형',
  description:
    '2026년 자활근로 일 급여: 근로유지형 29,940원 / 사회서비스형 53,840원 / 시장진입형 62,080원+실비4,000원. 주차수당·월차휴가 추가. 고용·산재보험 적용.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '어떤 유형에 배치될지 선택할 수 있나요?',
      a: '지역자활센터에서 본인의 능력·희망을 반영하여 배치합니다. 완전히 자유 선택은 아니지만 상담을 통해 의견을 낼 수 있습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '자활근로 중에 다른 알바를 할 수 있나요?',
      a: '자활근로 외 추가 소득이 생기면 소득인정액에 반영됩니다. 수급 탈락 여부에 영향을 줄 수 있으니 담당자에게 미리 확인하세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '급여가 최저임금보다 낮지 않나요?',
      a: '자활근로 급여는 최저임금과 별도의 정책 급여입니다. 다만 사회서비스형·시장진입형은 최저임금 수준 이상을 지향하고 있습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '쉬고 싶으면 월차를 쓸 수 있나요?',
      a: '1개월 개근 시 1일 유급 월차를 사용할 수 있습니다. 사전에 담당자 및 자활센터에 신청하여 사용하면 됩니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '자활근로를 하면 실업급여도 받을 수 있나요?',
      a: '자활근로에는 고용보험이 적용됩니다. 다만 자활근로는 일반 고용과 성격이 달라 실업급여 적용 여부가 다를 수 있습니다. ☎1350에서 확인하세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
  ],
  sources: [
    { name: '보건복지부 자활사업', url: 'https://www.mohw.go.kr' },
    { name: '자활근로 급여 단가 (엔젤시터)', url: 'https://angelsitter.co.kr/board.view.php?board=bbs&no=1263' },
  ],
};
