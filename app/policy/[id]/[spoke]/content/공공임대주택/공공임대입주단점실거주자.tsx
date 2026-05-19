import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          공공임대주택의 주요 단점은 <strong>입주 대기 기간이 길고</strong>, <strong>인테리어·구조 변경이 제한</strong>되며,
          <strong>전매(재임대) 절대 불가</strong>라는 점입니다.
          또한 소득·자산 변동 시 재계약이 거부될 수 있습니다.
        </p>
      </div>

      <section className="detail-card" id="wait">
        <h2 className="detail-card-head">단점 ① 입주 대기 기간</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>지역</th><th>평균 대기 기간</th><th>이유</th></tr>
            </thead>
            <tbody>
              <tr><td>서울·수도권</td><td>3~10년</td><td>공급 부족, 경쟁률 높음</td></tr>
              <tr><td>광역시</td><td>1~3년</td><td>중간 수준</td></tr>
              <tr><td>지방 중소도시</td><td>6개월~1년</td><td>수요 상대적으로 낮음</td></tr>
            </tbody>
          </table>
          <div className="warning-box" style={{ marginTop: 12 }}>
            수도권 인기 지역 국민임대는 1순위 청약 후 수년 대기가 일반적.
          </div>
        </div>
      </section>

      <section className="detail-card" id="restrict">
        <h2 className="detail-card-head">단점 ② 거주 제약사항</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>내용</th></tr>
            </thead>
            <tbody>
              <tr><td>인테리어</td><td>구조 변경·확장 공사 불가. 도배·장판 교체만 허용</td></tr>
              <tr><td>반려동물</td><td>단지별 규정 다름 (소형 견 허용 여부)</td></tr>
              <tr><td>전대(재임대)</td><td>절대 불가 — 적발 시 즉시 계약 해지</td></tr>
              <tr><td>주택 구매</td><td>입주 중 주택 취득 시 계약 해지 사유</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="renewal">
        <h2 className="detail-card-head">단점 ③ 재계약 불안정</h2>
        <div className="detail-card-body">
          <p style={{ lineHeight: 1.8 }}>
            2년마다 소득·자산 재심사를 받습니다. 재계약 시점에 소득 기준을 초과하면
            <strong>퇴거 통보</strong>를 받을 수 있습니다.
          </p>
          <table className="compare-table" style={{ marginTop: 12 }}>
            <thead>
              <tr><th>소득 초과 수준</th><th>조치</th></tr>
            </thead>
            <tbody>
              <tr><td>기준 소득 10~20% 초과</td><td>임대료 인상 후 재계약 가능</td></tr>
              <tr><td>기준 소득 20% 이상 초과</td><td>재계약 거절 → 퇴거</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="info-box" style={{ marginTop: 20 }}>
        그럼에도 시세 대비 저렴한 임대료와 장기 거주 안정성은 공공임대의 큰 장점입니다.
        단점을 알고 입주하면 생활 계획을 더 잘 세울 수 있습니다.
      </div>
    </>
  );
}

export const 공공임대주택공공임대입주단점실거주자SpokeContent: SpokeData = {
  h1: '공공임대 실제 단점 — 입주자가 말하는 불편한 점',
  breadcrumb: '공공임대입주단점실거주자',
  description: '공공임대주택 입주 후 실제로 불편한 점 — 대기 기간, 인테리어 제한, 재계약 불안정, 전대 금지를 정리합니다.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '공공임대 최대 단점이 무엇인가요?',
      a: '거주 기간 제한(국민임대 30년, 행복주택 6~20년)과 자산 증가 없음이 대표적 단점입니다. 분양전환 임대는 예외적으로 소유권 이전이 가능합니다.',
      source: 'LH 임대주택 유형 안내',
      sourceUrl: 'https://www.lh.or.kr',
    },
    {
      q: '공공임대에서 인테리어를 마음대로 할 수 없나요?',
      a: '원칙적으로 구조 변경·도배·장판 교체 이상은 사전 허가가 필요합니다. 무단 개조 시 원상복구 비용이 부과됩니다.',
      source: 'LH 임대주택 관리 규정',
      sourceUrl: 'https://www.lh.or.kr',
    },
    {
      q: '공공임대 입주 후 소득이 올라가면 퇴거해야 하나요?',
      a: '소득이 기준을 초과하면 계약 갱신이 거절될 수 있습니다. 다만 즉각 퇴거가 아닌 계약 만료 시 퇴거 통보가 원칙입니다.',
      source: 'LH 국민임대 거주 기준',
      sourceUrl: 'https://www.lh.or.kr',
    },
    {
      q: '층간소음·관리 불만이 많다는데 어떻게 대응하나요?',
      a: 'LH콜센터(1600-1004)나 해당 관리사무소에 신고하세요. 층간소음이웃사이센터를 통해 분쟁 조정도 받을 수 있습니다.',
      source: 'LH고객센터',
      sourceUrl: 'https://www.lh.or.kr',
    },
    {
      q: '공공임대에서 분양아파트로 갈아탈 때 주의사항은?',
      a: '퇴거 통보 기간(3~6개월)을 지켜야 하며, 보증금 반환은 퇴거 후 처리됩니다. 다음 청약 시 무주택 기간 재산정이 필요합니다.',
      source: 'LH 임대주택 퇴거 안내',
      sourceUrl: 'https://www.lh.or.kr',
    }
  ],
  sources: [
    { name: 'LH청약플러스', url: 'https://apply.lh.or.kr' },
  ],
};
