import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          자활사업은 크게 <strong>자활근로</strong>(일자리 참여) ·
          <strong>자활기업</strong>(공동 창업) ·
          <strong>취업지원</strong>(취업성공패키지 연계) 세 가지로 나뉩니다.
          단기 소득이 필요하면 자활근로, 창업을 원하면 자활기업, 취업이 목표라면 취업지원을 선택하세요.
        </p>
      </div>

      <section className="detail-card" id="compare">
        <h2 className="detail-card-head">자활사업 유형 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>유형</th><th>내용</th><th>특징</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>자활근로</strong></td><td>지역자활센터 참여 일자리</td><td>즉시 소득 발생, 단계별 급여</td></tr>
              <tr><td><strong>자활기업</strong></td><td>2인 이상 공동 창업 지원</td><td>사업주 전환, 자립 목표</td></tr>
              <tr><td><strong>국민취업지원 연계</strong></td><td>취업성공패키지로 취업 연계</td><td>취업 목표 집중 지원</td></tr>
              <tr><td><strong>자산형성지원</strong></td><td>희망저축계좌 연계</td><td>3년 후 목돈 마련</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="work">
        <h2 className="detail-card-head">자활근로 — 가장 많이 이용하는 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>참여 방식:</strong> 지역자활센터 프로그램에 배치되어 일하고 급여 수령
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>업무 예시:</strong> 환경 청소·간병 보조·집수리·도시락 배달 등
          </div>
          <div className="info-box">
            <strong>급여:</strong> 유형에 따라 일 29,940원~62,080원 (2026년)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="company">
        <h2 className="detail-card-head">자활기업 — 창업을 원한다면</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>조건:</strong> 2인 이상 자활사업 참여자가 공동 창업
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>지원:</strong> 운영비·창업비·사업자금 융자, 컨설팅
          </div>
          <div className="info-box">
            <strong>목표:</strong> 일반 사업체로 성장하여 시장에서 자립
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            참여자격, 급여 단가, 수급 유지 기준까지<br />
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

export const 자활사업종류자활근로자활기업취업지원비교SpokeContent: SpokeData = {
  h1: '자활사업 종류, 자활근로·자활기업·취업지원 무엇이 나에게 맞나',
  breadcrumb: '종류자활근로자활기업취업지원비교',
  description:
    '자활사업 유형: 자활근로(즉시 소득·일자리) / 자활기업(2인 이상 공동창업) / 국민취업지원 연계(취업 집중) / 자산형성(희망저축계좌). 단기 소득·창업·취업 목표별 선택.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '자활기업은 혼자서도 만들 수 있나요?',
      a: '자활기업은 자활사업 참여자 2인 이상이 공동으로 창업해야 합니다. 1인 창업은 해당되지 않습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '자활근로를 하면서 동시에 취업 준비도 할 수 있나요?',
      a: '자활근로에 참여하면서 취업성공패키지·직업훈련 등과 병행할 수 있는 경우도 있습니다. 지역자활센터와 상담하여 병행 가능 여부를 확인하세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '자활기업이 되면 수급자격이 유지되나요?',
      a: '자활기업 운영 후 소득이 늘면 수급 자격에서 벗어날 수 있습니다. 이것이 자활의 목표이기도 합니다. 일정 기간 소득이 넘어도 의료급여 특례 등으로 지원이 이어질 수 있습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '희망저축계좌는 어떻게 연계되나요?',
      a: '자활사업 참여자가 매월 일정액을 저축하면 정부가 추가 적립해주는 자산 형성 지원입니다. 3년 만기 시 목돈을 마련할 수 있습니다. 지역자활센터에서 신청하세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '자활사업 중 내가 원하는 업무가 없으면 어떻게 하나요?',
      a: '지역자활센터마다 운영하는 사업이 다릅니다. 인근 다른 자활센터 프로그램을 신청하거나, 국민취업지원제도로 연계하여 취업 목표 훈련을 받을 수 있습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
  ],
  sources: [
    { name: '보건복지부 자활사업', url: 'https://www.mohw.go.kr' },
    { name: '2026년 자활사업 안내 PDF', url: 'https://angelsitter.co.kr/board.view.php?board=bbs&no=2038' },
  ],
};
