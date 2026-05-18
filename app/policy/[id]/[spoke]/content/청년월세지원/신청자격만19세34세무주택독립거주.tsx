import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          청년월세지원은 <strong>만 19세 이상 34세 이하</strong>의 무주택 청년으로
          부모와 별도로 거주하는 독립 세대여야 신청할 수 있습니다.
          소득은 <strong>본인 중위소득 60% 이하</strong>, 원가구(부모) 소득은 중위소득 100% 이하여야 합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        2026년부터 상시 신청으로 전환되어 연중 언제든지 신청할 수 있습니다.
        군 복무 기간에 따라 최대 39세(병역 이행 5년)까지 연령 상한 연장이 가능합니다.
      </p>

      <section className="detail-card" id="qualify">
        <h2 className="detail-card-head">신청자격 핵심 기준</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>기준</th><th>비고</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>연령</strong></td><td>만 19~34세</td><td>병역이행 시 최대 39세</td></tr>
              <tr><td><strong>주택 소유</strong></td><td>무주택</td><td>주택 소유 시 불가</td></tr>
              <tr><td><strong>거주 형태</strong></td><td>독립 거주 (부모와 별거)</td><td>보증금 5,000만원·월세 70만원 이하</td></tr>
              <tr><td><strong>본인 소득</strong></td><td>중위소득 60% 이하</td><td>2026년 1인 기준 약 134만원</td></tr>
              <tr><td><strong>원가구 소득</strong></td><td>중위소득 100% 이하</td><td>부모 포함 가구 기준</td></tr>
              <tr><td><strong>재산</strong></td><td>1억 3천만원 이하</td><td>자동차 2,500만원 이상 제외</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="exclude">
        <h2 className="detail-card-head">신청 불가 대상</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>주택 소유자:</strong> 본인 명의 주택 보유 시 불가
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>고가 자동차 보유:</strong> 시가표준액 2,500만원 이상 자동차 소유 시 불가
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>다른 월세 지원 중복:</strong> 자치구 청년월세지원 수혜 중이거나 청년주거급여 분리지급 수령 중이면 중복 불가
          </div>
          <div className="info-box">
            <strong>부모와 동거:</strong> 부모와 같은 주소에 거주하는 경우 독립 거주 요건 미충족
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="tip">
        <h2 className="detail-card-head">자주 헷갈리는 자격 기준</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>군 복무 기간 연장:</strong> 병역 이행 기간만큼 연령 상한 연장 (최대 39세)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>원가구 소득:</strong> 본인과 부모를 포함한 가구 소득 기준. 부모 소득이 높으면 탈락 가능
          </div>
          <div className="info-box">
            <strong>보증금·월세 기준:</strong> 보증금 5,000만원 초과 또는 월세 70만원 초과 주택은 지원 불가
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            지원금액, 신청방법, 주거급여와 비교까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/youth-monthly-rent" className="btn-cta">
            청년월세지원 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 청년월세지원신청자격만19세34세무주택독립거주SpokeContent: SpokeData = {
  h1: '청년월세지원 신청자격, 만 19~34세 무주택 독립거주 소득 기준',
  breadcrumb: '신청자격만19세34세무주택독립거주',
  description:
    '청년월세지원 자격: 만 19~34세(병역 최대 39세) 무주택 독립 거주. 본인 소득 중위 60%·원가구 100% 이하. 보증금 5천만·월세 70만원 이하. 재산 1억3천만원 이하.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '부모와 같은 시·군에 살아도 되나요?',
      a: '부모와 주소지만 다르면 됩니다. 같은 시·군에 살아도 별도 주소에 독립 거주하면 신청 가능합니다.',
      source: '국토교통부',
      sourceUrl: 'https://www.molit.go.kr',
    },
    {
      q: '35세인데 군복무 2년을 했으면 신청할 수 있나요?',
      a: '군 복무 기간(현역·사회복무요원 등) 이행 기간만큼 연령 상한이 연장됩니다. 복무 2년이면 최대 36세까지 가능합니다.',
      source: '국토교통부',
      sourceUrl: 'https://www.molit.go.kr',
    },
    {
      q: '원가구 소득이란 무엇인가요?',
      a: '본인과 부모를 포함한 원래 가구의 소득을 말합니다. 부모 소득이 중위소득 100%를 초과하면 탈락할 수 있습니다. 청년이 직계존속과 관계 단절 상태라면 본인 가구만으로 산정 가능한 경우도 있습니다.',
      source: '국토교통부',
      sourceUrl: 'https://www.molit.go.kr',
    },
    {
      q: '전세로 사는 경우에도 신청할 수 있나요?',
      a: '청년월세지원은 월세 임차인을 대상으로 합니다. 전세는 지원 대상이 아닙니다.',
      source: '국토교통부',
      sourceUrl: 'https://www.molit.go.kr',
    },
    {
      q: '자취방이 고시원이어도 되나요?',
      a: '고시원·오피스텔·연립주택 등 주거 형태는 무방합니다. 다만 보증금 5,000만원 이하·월세 70만원 이하 조건을 충족해야 합니다.',
      source: '국토교통부',
      sourceUrl: 'https://www.molit.go.kr',
    },
  ],
  sources: [
    { name: '국토교통부 청년월세지원', url: 'https://www.molit.go.kr' },
    { name: '복지로 청년월세 신청', url: 'https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveTWAT52011M.do?wlfareInfoId=WLF00004661' },
  ],
};
