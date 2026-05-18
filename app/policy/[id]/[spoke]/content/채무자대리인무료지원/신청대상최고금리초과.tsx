import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          채무자대리인 무료 지원은 <strong>법정 최고금리(연 20%)를 초과하는 이자</strong>를
          부과받은 피해자가 주요 대상입니다.
          연 20% 초과분은 <strong>법적으로 무효</strong>이며,
          <strong>반환 청구가 가능</strong>합니다.
          지원 신청은 금융감독원 <strong>1332</strong>로 가능합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        내가 내는 이자가 불법인지 확인하세요.
        최고금리 초과 여부와 신청 대상 기준을 정리합니다.
      </p>

      <section className="detail-card" id="rate">
        <h2 className="detail-card-head">법정 최고금리 기준</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>구분</th><th>기준</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>법정 최고금리</strong></td><td>연 20% (이자제한법·대부업법 기준)</td></tr>
              <tr><td><strong>초과 이자 효력</strong></td><td>무효 (초과분 반환 청구 가능)</td></tr>
              <tr><td><strong>위반 시 제재</strong></td><td>형사처벌 대상 (3년 이하 징역 또는 3천만원 이하 벌금)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="target">
        <h2 className="detail-card-head">신청 대상 기준</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>최고금리 초과 피해자:</strong> 연 20%를 초과하는 이자를 부담 중
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>불법 대부업 피해자:</strong> 미등록 대부업체 이용 피해
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>불법 추심 피해자:</strong> 협박·폭언·야간 연락 등 불법 추심 행위
          </div>
          <div className="info-box">
            <strong>불법 사금융 피해자:</strong> 신분증 불법 보관 등 기타 불법 행위
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="check">
        <h2 className="detail-card-head">내 이자가 초과인지 확인하는 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>계약서 확인:</strong> 연이율(APR)이 20%를 넘는지 확인
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>실질이율 계산:</strong> 각종 수수료 포함 실제 이율 산출
          </div>
          <div className="info-box">
            <strong>상담:</strong> 금융감독원 1332 또는 대한법률구조공단 상담
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            불법 추심 대응, 불법 사금융 신고, 무료 변호사 신청 방법까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/debtor-lawyer-free-support" className="btn-cta">
            채무자대리인 무료 지원 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 채무자대리인무료지원신청대상최고금리초과SpokeContent: SpokeData = {
  h1: '채무자대리인 무료 지원 신청 대상, 법정 최고금리 연 20% 초과 여부 확인',
  breadcrumb: '신청대상최고금리초과',
  description:
    '채무자대리인 무료 지원 대상: 법정 최고금리(연 20%) 초과·미등록 대부업·불법 추심 피해자. 초과 이자분 무효·반환 청구 가능. 금융감독원 1332 또는 fss.or.kr 신청. 무료.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '법정 최고금리가 연 20%라는 게 정확한가요?',
      a: '네. 이자제한법 및 대부업법 기준 법정 최고금리는 연 20%입니다. 이를 초과하는 이자 약정은 초과분이 무효이고, 이미 납부한 초과분은 반환 청구할 수 있습니다.',
      source: '금융감독원',
      sourceUrl: 'https://www.fss.or.kr',
    },
    {
      q: '수수료를 포함하면 이자율이 달라지나요?',
      a: '네. 각종 수수료·부대비용을 포함한 실질 이율로 판단합니다. 계약서상 명목 이율이 낮더라도 실질 이율이 20%를 초과하면 위반입니다.',
      source: '금융감독원',
      sourceUrl: 'https://www.fss.or.kr',
    },
    {
      q: '초과 이자를 이미 다 갚았는데도 신청할 수 있나요?',
      a: '이미 납부한 초과 이자도 반환 청구가 가능합니다. 소멸시효(10년) 이내라면 청구할 수 있으니 변호사와 상담하세요.',
      source: '금융감독원',
      sourceUrl: 'https://www.fss.or.kr',
    },
    {
      q: '등록된 대부업체도 20%를 넘기면 처벌받나요?',
      a: '네. 등록된 대부업체도 법정 최고금리를 초과하는 이자를 받으면 형사처벌 대상입니다.',
      source: '금융감독원',
      sourceUrl: 'https://www.fss.or.kr',
    },
    {
      q: '변호사 지원은 무료인가요?',
      a: '네. 채무자대리인 무료 지원 제도는 정부 예산으로 운영되므로 신청자가 변호사 비용을 부담하지 않습니다.',
      source: '금융감독원',
      sourceUrl: 'https://www.fss.or.kr',
    },
  ],
  sources: [
    { name: '금융감독원', url: 'https://www.fss.or.kr' },
    { name: '대한법률구조공단', url: 'https://www.klac.or.kr' },
    { name: '법제처 국가법령정보센터', url: 'https://www.law.go.kr' },
  ],
};
