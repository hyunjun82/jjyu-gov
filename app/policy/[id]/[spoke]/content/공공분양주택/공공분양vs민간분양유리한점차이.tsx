import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          공공분양은 <strong>분양가가 시세보다 저렴</strong>하고 <strong>소득·자산 기준</strong>이 있는 반면,
          민간분양은 <strong>자격 제한이 없지만 분양가가 비쌉니다</strong>.
          무주택 기간이 길고 소득이 낮을수록 공공분양이 유리합니다.
        </p>
      </div>

      <section className="detail-card" id="compare">
        <h2 className="detail-card-head">공공분양 vs 민간분양 핵심 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>공공분양</th><th>민간분양</th></tr>
            </thead>
            <tbody>
              <tr><td>분양가</td><td>시세의 70~80%</td><td>시세 연동 (상한 없음)</td></tr>
              <tr><td>자격 제한</td><td>소득·자산·무주택 기간</td><td>청약통장만 있으면 됨</td></tr>
              <tr><td>전매 제한</td><td>5~10년 (지역별 상이)</td><td>1~3년</td></tr>
              <tr><td>청약통장</td><td>납입 횟수 중요</td><td>납입 금액 중요</td></tr>
              <tr><td>공급 주체</td><td>LH·SH·GH 등</td><td>민간 건설사</td></tr>
              <tr><td>입지</td><td>공공택지 위주</td><td>민간택지 포함</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="choose">
        <h2 className="detail-card-head">어떤 경우에 공공분양이 유리한가</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>상황</th><th>추천</th></tr>
            </thead>
            <tbody>
              <tr><td>무주택 기간 5년 이상 + 소득 낮음</td><td>공공분양 (당첨 확률 높음)</td></tr>
              <tr><td>신혼부부·생애최초·다자녀</td><td>공공분양 특별공급 우선 도전</td></tr>
              <tr><td>청약통장 납입 금액 많음 + 소득 높음</td><td>민간분양 1순위 노리기</td></tr>
              <tr><td>원하는 지역에 민간단지만 있음</td><td>민간분양</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="info-box" style={{ marginTop: 20 }}>
        공공분양 당첨 후 전매 제한 기간 중 팔면 환수 대상이 됩니다. 장기 거주 계획이 있을 때 공공분양이 적합합니다.
      </div>
    </>
  );
}

export const 공공분양주택공공분양vs민간분양유리한점차이SpokeContent: SpokeData = {
  h1: '공공분양 vs 민간분양 — 어떤 게 나에게 유리한가',
  breadcrumb: '공공분양vs민간분양유리한점차이',
  description: '공공분양과 민간분양의 분양가·자격·전매제한을 비교하고 내 상황에 맞는 선택 기준을 정리합니다.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '공공분양의 가장 큰 장점은 무엇인가요?',
      a: '분양가가 시세의 70~80% 수준으로 저렴합니다. 전매 제한이 있지만, 입주 시 즉시 시세 차익이 발생하는 경우가 많습니다.',
      source: '국토교통부 공공분양 안내',
      sourceUrl: 'https://www.molit.go.kr',
    },
    {
      q: '민간분양이 유리한 경우는 언제인가요?',
      a: '소득·자산 기준 초과자, 입지·브랜드를 중시하는 경우, 전매 제한 없이 빠른 매도를 원하는 경우에 민간분양이 유리합니다.',
      source: '청약홈',
      sourceUrl: 'https://www.applyhome.co.kr',
    },
    {
      q: '공공분양 전매 제한 기간은 얼마나 되나요?',
      a: '수도권은 3~10년, 비수도권은 1~4년입니다. 분양가와 입지에 따라 달라지며, 위반 시 계약 취소 및 환매 청구가 됩니다.',
      source: '공공주택 특별법 시행령',
      sourceUrl: 'https://www.law.go.kr',
    },
    {
      q: '공공분양 마감 후 미분양은 어떻게 되나요?',
      a: '계약 취소분·미계약분은 잔여 세대로 선착순 분양됩니다. LH청약플러스에서 잔여 세대 공고를 확인하세요.',
      source: 'LH청약플러스',
      sourceUrl: 'https://apply.lh.or.kr',
    },
    {
      q: '공공분양과 민간분양 중 어떤 게 실거주에 유리한가요?',
      a: '공공분양은 실거주 의무(2~5년)가 있어 장기 거주 계획자에게 유리합니다. 민간분양은 실거주 의무 없이 전세를 놓거나 이주가 자유롭습니다.',
      source: '국토교통부 실거주 의무 안내',
      sourceUrl: 'https://www.molit.go.kr',
    }
  ],
  sources: [
    { name: 'LH청약플러스·청약홈', url: 'https://apply.lh.or.kr' },
  ],
};
