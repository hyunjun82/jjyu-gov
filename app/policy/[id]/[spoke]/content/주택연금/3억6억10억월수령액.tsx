import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          주택연금 월 수령액은 <strong>가입 연령과 주택 공시가격</strong>에 따라 결정됩니다.
          70세 기준 공시가 3억원 주택은 <strong>월 약 92만 3천원</strong>,
          6억원은 <strong>월 약 184만 6천원</strong>,
          10억원은 <strong>월 약 307만원</strong>이 지급됩니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        주택연금 수령액은 가입 당시 조건에 따라 평생 확정되므로
        내 주택 가격과 나이로 미리 계산해보는 것이 중요합니다.
      </p>

      <section className="detail-card" id="table-age">
        <h2 className="detail-card-head">연령별·주택 공시가별 월 수령액 (정액형)</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>가입 연령</th><th>3억원</th><th>6억원</th><th>10억원</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>55세</strong></td><td>약 47만원</td><td>약 94만원</td><td>약 157만원</td></tr>
              <tr><td><strong>60세</strong></td><td>약 64만원</td><td>약 128만원</td><td>약 213만원</td></tr>
              <tr><td><strong>65세</strong></td><td>약 77만원</td><td>약 154만원</td><td>약 257만원</td></tr>
              <tr><td><strong>70세</strong></td><td>약 92만 3천원</td><td>약 184만 6천원</td><td>약 307만원</td></tr>
              <tr><td><strong>75세</strong></td><td>약 113만원</td><td>약 226만원</td><td>약 377만원</td></tr>
            </tbody>
          </table>
          <p style={{ fontSize: 13, color: '#8B95A1', marginTop: 8 }}>
            ※ 정액형 기준 (2026년 기준), HF 홈페이지 모의계산기로 정확한 금액 확인 권장
          </p>
        </div>
      </section>

      <section className="detail-card" id="types">
        <h2 className="detail-card-head">지급 유형별 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>유형</th><th>특징</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>정액형</strong></td><td>매월 동일 금액 평생 수령 (가장 일반적)</td></tr>
              <tr><td><strong>초기증액형</strong></td><td>초기 일정 기간 더 많이, 이후 적게 수령</td></tr>
              <tr><td><strong>정기증가형</strong></td><td>매 3년마다 일정 비율 증가</td></tr>
              <tr><td><strong>대출상환형</strong></td><td>주택담보대출 상환 후 나머지 연금 수령</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="calc">
        <h2 className="detail-card-head">수령액 계산 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>공시가격 확인:</strong> 국토교통부 부동산공시가격알리미(realtyprice.kr)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>모의계산:</strong> HF 홈페이지 → 주택연금 → 월지급금 모의계산
          </div>
          <div className="info-box">
            <strong>상담 신청:</strong> 콜센터 1688-8114 또는 가까운 HF 지사 방문
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            가입 조건, 기초연금 중복, 해지 주의사항까지<br />
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

export const 주택연금3억6억10억월수령액SpokeContent: SpokeData = {
  h1: '주택연금 월 수령액 계산, 3억·6억·10억 주택 연령별 실수령액 비교',
  breadcrumb: '3억6억10억월수령액',
  description:
    '주택연금 월 수령액: 70세 3억→월 약 92만3천원, 6억→약 184만6천원, 10억→약 307만원. 정액형·초기증액형·정기증가형·대출상환형 선택. HF 모의계산기로 내 수령액 확인.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '공시가격과 시세 중 어느 것 기준인가요?',
      a: '주택연금 월 수령액은 공시가격(공동주택 기준 국토부 공시) 기준으로 산정됩니다. 시세와 다를 수 있으니 공시가격을 별도 확인하세요.',
      source: '한국주택금융공사',
      sourceUrl: 'https://www.hf.go.kr',
    },
    {
      q: '주택 가격이 가입 후 오르면 수령액도 올라가나요?',
      a: '아니요. 가입 당시 주택 공시가격을 기준으로 수령액이 확정됩니다. 이후 주택 가격 변동은 수령액에 영향을 주지 않습니다.',
      source: '한국주택금융공사',
      sourceUrl: 'https://www.hf.go.kr',
    },
    {
      q: '배우자가 먼저 사망하면 수령액이 줄어드나요?',
      a: '주택연금은 부부 중 1명이 사망해도 생존 배우자가 동일 금액을 평생 수령합니다. 감액되지 않습니다.',
      source: '한국주택금융공사',
      sourceUrl: 'https://www.hf.go.kr',
    },
    {
      q: '공시가 12억원을 초과하면 어떻게 되나요?',
      a: '공시가 12억원 초과 주택은 주택연금 가입 대상이 아닙니다. 단 12억원 상당의 한도 내에서 수령액을 산정하는 방식은 없으며 가입 자체가 불가합니다.',
      source: '한국주택금융공사',
      sourceUrl: 'https://www.hf.go.kr',
    },
    {
      q: '수령 도중 지급 유형을 바꿀 수 있나요?',
      a: '가입 후 지급 유형 변경은 원칙적으로 불가합니다. 해지 후 재가입을 통해 유형을 바꿀 수 있으나 그 사이 주택 가격·연령 변화로 수령액이 달라질 수 있습니다.',
      source: '한국주택금융공사',
      sourceUrl: 'https://www.hf.go.kr',
    },
  ],
  sources: [
    { name: '한국주택금융공사', url: 'https://www.hf.go.kr' },
    { name: '주택연금 모의계산', url: 'https://www.hf.go.kr/hf/sub03/sub05_01.do' },
    { name: '부동산공시가격알리미', url: 'https://www.realtyprice.kr' },
  ],
};
