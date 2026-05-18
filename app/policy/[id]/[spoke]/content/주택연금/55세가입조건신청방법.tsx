import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          주택연금은 <strong>부부 중 1명이 만 55세 이상</strong>이고,
          <strong>공시가격 12억원 이하</strong> 주택을 소유한 경우 신청할 수 있습니다.
          실거주 중인 주택을 담보로 맡기고 <strong>평생 월 연금을 수령</strong>하는 국가 보증 상품입니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        가입 조건과 신청 절차를 정확히 파악하면 노후 소득을 안정적으로 확보할 수 있습니다.
      </p>

      <section className="detail-card" id="condition">
        <h2 className="detail-card-head">가입 조건</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>기준</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>연령</strong></td><td>부부 중 1명 만 55세 이상</td></tr>
              <tr><td><strong>주택 공시가격</strong></td><td>12억원 이하</td></tr>
              <tr><td><strong>주택 유형</strong></td><td>단독주택·아파트·다세대·연립 등 일반 주택</td></tr>
              <tr><td><strong>거주 요건</strong></td><td>실제 거주 중인 주택 (주민등록 기준)</td></tr>
              <tr><td><strong>주택 수</strong></td><td>1주택자 또는 보유 주택 합산 공시가 12억원 이하</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="apply">
        <h2 className="detail-card-head">신청 절차</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>1단계:</strong> 한국주택금융공사(HF) 홈페이지 또는 콜센터(1688-8114) 상담
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>2단계:</strong> 가입 신청서 작성 및 주택 감정평가 의뢰
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>3단계:</strong> 공사 심사 → 보증서 발급
          </div>
          <div className="info-box">
            <strong>4단계:</strong> 협약 금융기관에서 대출약정 체결 → 월 연금 수령 시작
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="monthly">
        <h2 className="detail-card-head">월 수령액 예시</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>가입 연령</th><th>주택 공시가</th><th>월 수령액(정액형)</th></tr>
            </thead>
            <tbody>
              <tr><td>70세</td><td>3억원</td><td>약 92만 3천원</td></tr>
              <tr><td>70세</td><td>6억원</td><td>약 184만 6천원</td></tr>
              <tr><td>60세</td><td>3억원</td><td>약 64만원</td></tr>
              <tr><td>55세</td><td>3억원</td><td>약 47만원</td></tr>
            </tbody>
          </table>
          <p style={{ fontSize: 13, color: '#8B95A1', marginTop: 8 }}>
            ※ 정액형 기준, 실제 수령액은 HF 홈페이지 모의계산기로 확인
          </p>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            월 수령액 계산, 기초연금 중복, 해지 시 주의사항까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/home-equity-pension" className="btn-cta">
            주택연금 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 주택연금55세가입조건신청방법SpokeContent: SpokeData = {
  h1: '주택연금 가입 조건, 55세 이상 공시가 12억 이하 주택 소유자 신청 방법',
  breadcrumb: '55세가입조건신청방법',
  description:
    '주택연금 가입 조건: 부부 중 1명 만 55세 이상, 공시가 12억원 이하 주택 실거주. HF 상담→감정평가→보증서→월 연금 수령. 70세 3억 주택 기준 월 약 92만3천원.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '55세 기준은 부부 중 누구 나이인가요?',
      a: '부부 중 연장자(나이 많은 쪽) 기준이 아니라, 주택 소유자 또는 부부 중 1명이 만 55세 이상이면 됩니다.',
      source: '한국주택금융공사',
      sourceUrl: 'https://www.hf.go.kr',
    },
    {
      q: '2주택자도 신청할 수 있나요?',
      a: '2주택자라도 보유 주택 합산 공시가격이 12억원 이하이면 가입 가능합니다. 3년 이내에 1주택을 처분해야 하는 조건이 있습니다.',
      source: '한국주택금융공사',
      sourceUrl: 'https://www.hf.go.kr',
    },
    {
      q: '오피스텔도 주택연금 대상인가요?',
      a: '전용 85㎡ 이하 오피스텔로 실제 거주하고 있다면 가입이 가능합니다. 단 업무용 등록 오피스텔은 제외됩니다.',
      source: '한국주택금융공사',
      sourceUrl: 'https://www.hf.go.kr',
    },
    {
      q: '월 수령액은 어떻게 결정되나요?',
      a: '가입 당시 연령과 주택 공시가격을 기준으로 산정됩니다. 나이가 많을수록, 주택 가격이 높을수록 월 수령액이 커집니다.',
      source: '한국주택금융공사',
      sourceUrl: 'https://www.hf.go.kr',
    },
    {
      q: '신청부터 연금 수령까지 얼마나 걸리나요?',
      a: '통상 3~4주 소요됩니다. 주택 감정평가 일정에 따라 다소 차이가 있을 수 있습니다.',
      source: '한국주택금융공사',
      sourceUrl: 'https://www.hf.go.kr',
    },
  ],
  sources: [
    { name: '한국주택금융공사', url: 'https://www.hf.go.kr' },
    { name: '주택연금 모의계산', url: 'https://www.hf.go.kr/hf/sub03/sub05_01.do' },
    { name: '찾기쉬운 생활법령정보', url: 'https://www.easylaw.go.kr' },
  ],
};
