import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          LH 공공임대 월세(임대료)는 <strong>인근 시세의 30~80% 수준</strong>으로 산정됩니다.
          유형별로 다르며, <strong>국민임대는 시세 60~80%</strong>, <strong>영구임대는 30% 이하</strong>입니다.
          임대보증금 선택에 따라 월 임대료가 달라집니다.
        </p>
      </div>

      <section className="detail-card" id="rate">
        <h2 className="detail-card-head">유형별 임대료 시세 비율</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>임대 유형</th><th>시세 대비 임대료</th><th>임대보증금</th></tr>
            </thead>
            <tbody>
              <tr><td>영구임대</td><td>시세의 30% 이하</td><td>낮음</td></tr>
              <tr><td>국민임대</td><td>시세의 60~80%</td><td>중간</td></tr>
              <tr><td>행복주택</td><td>시세의 60~80%</td><td>선택 폭 있음</td></tr>
              <tr><td>통합공공임대</td><td>시세의 35~90%</td><td>소득에 따라 차등</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="convert">
        <h2 className="detail-card-head">보증금↔월세 전환 (보증금이 높으면 월세 낮아짐)</h2>
        <div className="detail-card-body">
          <p style={{ lineHeight: 1.8 }}>
            LH 임대주택은 보증금을 높일수록 월세가 줄고, 보증금을 낮출수록 월세가 늘어나는
            <strong> 보증금-월세 전환</strong> 방식을 허용합니다.
            전환율은 연 3.5% 수준이 일반적입니다.
          </p>
          <div className="info-box" style={{ marginTop: 12 }}>
            예시: 보증금 1,000만 원 추가 시 월세 약 29,000원 감소 (연 3.5% 기준).
          </div>
        </div>
      </section>

      <section className="detail-card" id="increase">
        <h2 className="detail-card-head">임대료 인상 규정</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>내용</th></tr>
            </thead>
            <tbody>
              <tr><td>인상 주기</td><td>2년마다 재계약 시 조정 가능</td></tr>
              <tr><td>인상 한도</td><td>연 5% 이내 (국민임대 기준)</td></tr>
              <tr><td>통보 시기</td><td>재계약 3개월 전 통보 의무</td></tr>
            </tbody>
          </table>
          <div className="warning-box" style={{ marginTop: 12 }}>
            <strong>임의 퇴거 금지:</strong> 임대료 체납이 없는 한 LH가 임의로 계약 해지 불가.
          </div>
        </div>
      </section>

      <div className="info-box" style={{ marginTop: 20 }}>
        <strong>임대료 조회:</strong> LH청약플러스 → 내 임대차 정보 → 납부 내역 / 전화 1600-1004
      </div>
    </>
  );
}

export const 공공임대주택LH공공임대월세임대료산정방식SpokeContent: SpokeData = {
  h1: 'LH 공공임대 월세 임대료 어떻게 산정되나',
  breadcrumb: 'LH공공임대월세임대료산정방식',
  description: 'LH 공공임대주택 임대료가 시세의 몇 %인지, 보증금-월세 전환 방식과 인상 한도를 정리합니다.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: 'LH 공공임대 월 임대료는 어떻게 정해지나요?',
      a: '임대보증금과 월임대료는 인근 시세의 30~80% 수준에서 유형별로 결정됩니다. 국민임대는 시세 60~80%, 영구임대는 30% 내외입니다.',
      source: 'LH 임대주택 임대료 안내',
      sourceUrl: 'https://www.lh.or.kr',
    },
    {
      q: '임대료 산정 기준이 되는 인근 시세는 어떻게 확인하나요?',
      a: '한국부동산원의 시세조사 자료를 기준으로 하며, LH가 매년 조사·적용합니다. 마이홈포털에서 단지별 임대조건을 조회할 수 있습니다.',
      source: '마이홈포털',
      sourceUrl: 'https://www.myhome.go.kr',
    },
    {
      q: '임대보증금을 월세로 전환할 수 있나요?',
      a: '전환이 가능하며, 전환율은 연 2.5%(월 0.208%) 수준입니다. 보증금을 줄이고 월세를 늘리거나, 반대로 전환할 수 있습니다.',
      source: 'LH 임대주택 운영 규정',
      sourceUrl: 'https://www.lh.or.kr',
    },
    {
      q: '임대료 인상에 상한선이 있나요?',
      a: '네. 임대료 인상률은 연 5% 이내로 제한됩니다. 계약 갱신 시마다 이 기준 안에서 조정됩니다.',
      source: '공공주택 특별법 시행령',
      sourceUrl: 'https://www.law.go.kr',
    },
    {
      q: '소득이 낮으면 임대료 할인을 받을 수 있나요?',
      a: '수급자·차상위계층·장애인·고령자 등은 임대료 감면 혜택이 있습니다. 단지·유형마다 다르므로 해당 LH지역본부에 문의하세요.',
      source: 'LH 임대주택 감면 안내',
      sourceUrl: 'https://www.lh.or.kr',
    }
  ],
  sources: [
    { name: 'LH청약플러스', url: 'https://apply.lh.or.kr' },
  ],
};
