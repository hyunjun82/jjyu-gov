import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          공공분양은 <strong>내 집 마련(소유권 취득)</strong>이 목적이고,
          공공임대는 <strong>장기 저렴한 거주(임대)</strong>가 목적입니다.
          자산 형성이 목표라면 공공분양, 당장 주거 안정이 급하면 공공임대가 적합합니다.
        </p>
      </div>

      <section className="detail-card" id="compare">
        <h2 className="detail-card-head">공공분양 vs 공공임대 핵심 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>공공분양</th><th>공공임대</th></tr>
            </thead>
            <tbody>
              <tr><td>소유권</td><td>취득 (내 집)</td><td>없음 (임차)</td></tr>
              <tr><td>초기 자금</td><td>분양가 10~20% 계약금 필요</td><td>보증금만 (상대적으로 적음)</td></tr>
              <tr><td>월 부담</td><td>대출 원리금 상환</td><td>월 임대료</td></tr>
              <tr><td>거주 기간</td><td>전매 제한 후 자유</td><td>국민임대 최장 30년</td></tr>
              <tr><td>소득 기준</td><td>100% 이하</td><td>70% 이하 (국민임대)</td></tr>
              <tr><td>자산 변화</td><td>시세 상승 시 자산 증가</td><td>자산 형성 없음</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="choose">
        <h2 className="detail-card-head">상황별 선택 가이드</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>내 상황</th><th>추천</th></tr>
            </thead>
            <tbody>
              <tr><td>초기 자금 부족, 저소득</td><td>공공임대 (보증금 낮음)</td></tr>
              <tr><td>자산 형성·내 집 원함</td><td>공공분양</td></tr>
              <tr><td>청약 가점 낮음·당첨 어려움</td><td>공공임대 먼저 입주 후 대기</td></tr>
              <tr><td>특별공급 자격 있음 (신혼·생애최초)</td><td>공공분양 특별공급 도전</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            공공임대 입주 중에도 공공분양 청약 신청은 가능합니다. 당첨 시 임대 계약을 해지하고 이사하면 됩니다.
          </div>
        </div>
      </section>
    </>
  );
}

export const 공공분양주택공공분양vs공공임대뭘신청해야하나SpokeContent: SpokeData = {
  h1: '공공분양 vs 공공임대 — 뭘 신청해야 하나',
  breadcrumb: '공공분양vs공공임대뭘신청해야하나',
  description: '소유와 임차의 차이, 초기 자금·소득 기준·자산 형성 관점에서 공공분양과 공공임대 중 어떤 게 나에게 맞는지 정리합니다.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '공공분양과 공공임대 중 무엇을 선택해야 하나요?',
      a: '자산이 있고 내 집 마련이 목표라면 공공분양, 당장 저렴한 주거지가 필요하고 이동 가능성이 있다면 공공임대가 유리합니다.',
      source: '마이홈포털',
      sourceUrl: 'https://www.myhome.go.kr',
    },
    {
      q: '소득이 낮으면 공공분양도 신청 가능한가요?',
      a: '가능합니다. 소득이 도시근로자 월평균의 100% 이하라면 일반공급 신청이 가능하고, 더 낮으면 우선공급 대상이 될 수 있습니다.',
      source: '국토교통부 공공분양 기준',
      sourceUrl: 'https://www.molit.go.kr',
    },
    {
      q: '공공분양에 당첨되면 자동으로 공공임대 자격이 없어지나요?',
      a: '공공분양 당첨·입주 후 주택을 소유하면 공공임대 신청 자격이 상실됩니다. 무주택 세대구성원 기준이 핵심입니다.',
      source: '공공주택 특별법',
      sourceUrl: 'https://www.law.go.kr',
    },
    {
      q: '공공임대에 살면서 공공분양 청약이 가능한가요?',
      a: '가능합니다. 무주택자 신분이므로 청약 신청에 제한이 없습니다. 분양 당첨 후 임대 계약 해지 절차가 필요합니다.',
      source: '청약홈',
      sourceUrl: 'https://www.applyhome.co.kr',
    },
    {
      q: '공공분양 당첨 후 미입주하면 어떻게 되나요?',
      a: '계약 포기 시 계약금을 잃고, 일정 기간 청약 제한이 생깁니다. 부적격 당첨으로 처리되면 향후 청약에 불이익이 있습니다.',
      source: 'LH청약플러스 공지사항',
      sourceUrl: 'https://apply.lh.or.kr',
    }
  ],
  sources: [
    { name: 'LH청약플러스·청약홈', url: 'https://apply.lh.or.kr' },
  ],
};
