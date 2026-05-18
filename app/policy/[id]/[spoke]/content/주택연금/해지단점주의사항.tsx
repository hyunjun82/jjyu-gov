import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          주택연금을 해지하면 그동안 받은 <strong>연금 총액과 이자를 전액 상환</strong>해야
          주택 소유권을 돌려받을 수 있습니다.
          해지 자체는 가능하지만, <strong>상환 자금이 없으면 주택을 처분</strong>해야 할 수 있어
          신중한 결정이 필요합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        해지 후 불이익과 단점을 미리 파악해 주택연금 가입 여부를 결정하세요.
      </p>

      <section className="detail-card" id="termination">
        <h2 className="detail-card-head">해지 시 핵심 사항</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>내용</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>해지 가능 여부</strong></td><td>언제든 가능 (본인 신청)</td></tr>
              <tr><td><strong>상환 금액</strong></td><td>받은 연금 총액 + 대출이자 + 보증료</td></tr>
              <tr><td><strong>주택 소유권 회복</strong></td><td>상환 완료 후 근저당권 말소 → 소유권 회복</td></tr>
              <tr><td><strong>상환 불가 시</strong></td><td>주택 임의경매로 상환 처리</td></tr>
              <tr><td><strong>재가입 가능 여부</strong></td><td>가능 (단 가입 시점의 조건 적용)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="disadvantages">
        <h2 className="detail-card-head">주택연금의 주요 단점</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>상속 제한:</strong> 사망 후 주택을 상속인에게 남기기 어렵고, 잔여 가치는 차감 후 정산
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>주택 가격 상승 혜택 미반영:</strong> 가입 후 주택 가격이 올라도 수령액 변화 없음
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>리모델링·매각 제한:</strong> 주택 담보 특성상 매각·대규모 공사 시 사전 동의 필요
          </div>
          <div className="info-box">
            <strong>이자 누적:</strong> 장기 수령 시 대출이자가 주택 가치를 초과할 수도 있음 (초과분은 HF가 부담)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="after-death">
        <h2 className="detail-card-head">사망 후 처리 절차</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>잔여 가치 있을 때:</strong> 주택 처분 → 대출 상환 → 남은 금액 상속인에게 지급
          </div>
          <div className="info-box">
            <strong>잔여 가치 없을 때:</strong> 초과분 HF 부담 (상속인에게 청구 없음)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            가입 조건, 월 수령액, 기초연금 중복 여부까지<br />
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

export const 주택연금해지단점주의사항SpokeContent: SpokeData = {
  h1: '주택연금 해지하면 어떻게 되나, 단점과 해지 시 주의사항 총정리',
  breadcrumb: '해지단점주의사항',
  description:
    '주택연금 해지 시 받은 연금 총액+이자 전액 상환 후 소유권 회복. 상환 불가 시 주택 임의경매. 주택 가격 상승 혜택 없음, 상속 제한 등 단점 확인 후 가입 결정 필요.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '해지 후 다시 주택연금에 가입할 수 있나요?',
      a: '재가입은 가능합니다. 단 재가입 시점의 나이와 주택 공시가격을 기준으로 새로운 수령액이 산정되므로 이전보다 유리하거나 불리할 수 있습니다.',
      source: '한국주택금융공사',
      sourceUrl: 'https://www.hf.go.kr',
    },
    {
      q: '배우자가 사망한 뒤 남은 배우자가 해지하면 어떻게 되나요?',
      a: '생존 배우자 역시 동일 절차로 해지할 수 있습니다. 받은 연금 총액과 이자를 상환해야 소유권을 회복할 수 있습니다.',
      source: '한국주택금융공사',
      sourceUrl: 'https://www.hf.go.kr',
    },
    {
      q: '10년간 받은 연금이 주택 가치를 넘으면 어떻게 되나요?',
      a: '초과 부분은 한국주택금융공사가 부담합니다. 가입자 또는 상속인에게 초과분을 청구하지 않는 것이 주택연금의 핵심 보호 장치입니다.',
      source: '한국주택금융공사',
      sourceUrl: 'https://www.hf.go.kr',
    },
    {
      q: '주택을 수리·증축하고 싶으면 어떻게 해야 하나요?',
      a: '소규모 수선은 가능하나, 대규모 공사(구조 변경 등)는 HF의 사전 동의가 필요합니다. 임의로 매각하거나 담보를 훼손하면 기한이익상실 사유가 될 수 있습니다.',
      source: '한국주택금융공사',
      sourceUrl: 'https://www.hf.go.kr',
    },
    {
      q: '이자는 매달 내야 하나요?',
      a: '주택연금은 이자를 매달 납부하지 않습니다. 이자는 누적되어 해지 또는 사망 시 정산됩니다.',
      source: '한국주택금융공사',
      sourceUrl: 'https://www.hf.go.kr',
    },
  ],
  sources: [
    { name: '한국주택금융공사', url: 'https://www.hf.go.kr' },
    { name: '주택연금 상품안내', url: 'https://www.hf.go.kr/hf/sub03/sub01.do' },
    { name: '찾기쉬운 생활법령정보', url: 'https://www.easylaw.go.kr' },
  ],
};
