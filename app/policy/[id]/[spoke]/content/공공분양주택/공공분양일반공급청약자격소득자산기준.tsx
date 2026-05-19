import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          공공분양 일반공급 자격은 <strong>무주택 세대구성원</strong>이면서 소득 기준
          <strong>도시근로자 월평균 소득 100% 이하</strong>, 자산 기준
          <strong>부동산 2억 1,550만 원 이하, 자동차 3,708만 원 이하</strong>를 모두 충족해야 합니다.
        </p>
      </div>

      <section className="detail-card" id="income">
        <h2 className="detail-card-head">소득 기준 (일반공급)</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>가구원 수</th><th>월평균 소득 100%</th><th>120%(신혼·생애최초)</th></tr>
            </thead>
            <tbody>
              <tr><td>2인</td><td>약 5,415,000원</td><td>약 6,498,000원</td></tr>
              <tr><td>3인</td><td>약 6,817,000원</td><td>약 8,180,000원</td></tr>
              <tr><td>4인</td><td>약 8,102,000원</td><td>약 9,722,000원</td></tr>
              <tr><td>5인</td><td>약 8,720,000원</td><td>약 10,464,000원</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            신혼·생애최초 특별공급은 소득 기준이 일반공급보다 완화됩니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="asset">
        <h2 className="detail-card-head">자산 기준</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>기준</th></tr>
            </thead>
            <tbody>
              <tr><td>부동산(토지+건물)</td><td>2억 1,550만 원 이하</td></tr>
              <tr><td>자동차</td><td>3,708만 원 이하</td></tr>
            </tbody>
          </table>
          <div className="warning-box" style={{ marginTop: 12 }}>
            세대원 전원 합산 기준. 부모님 명의 부동산도 세대 분리가 안 돼 있으면 포함됩니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="supply-type">
        <h2 className="detail-card-head">공급 유형별 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>유형</th><th>비율</th><th>주요 대상</th></tr>
            </thead>
            <tbody>
              <tr><td>일반공급</td><td>15%</td><td>무주택 세대구성원 전체</td></tr>
              <tr><td>신혼부부 특공</td><td>30%</td><td>혼인 7년 이내</td></tr>
              <tr><td>생애최초 특공</td><td>25%</td><td>생애 첫 주택 구매자</td></tr>
              <tr><td>다자녀 특공</td><td>10%</td><td>미성년 자녀 3명 이상</td></tr>
              <tr><td>노부모부양 특공</td><td>5%</td><td>만 65세 이상 부모 3년 이상 부양</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export const 공공분양주택공공분양일반공급청약자격소득자산기준SpokeContent: SpokeData = {
  h1: '공공분양 일반공급 청약자격 — 소득·자산 기준',
  breadcrumb: '공공분양일반공급청약자격소득자산기준',
  description: '공공분양주택 일반공급 신청 자격인 소득 100% 기준, 부동산·자동차 자산 한도를 가구원수별로 정리합니다.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '공공분양 일반공급 소득 기준은 얼마인가요?',
      a: '전년도 도시근로자 가구원수별 월평균 소득 100%(4인 가구 기준 약 810만 원) 이하입니다. 신혼부부·생애최초 특별공급은 별도 기준이 적용됩니다.',
      source: '국토교통부 공공주택 공급 규정',
      sourceUrl: 'https://www.molit.go.kr',
    },
    {
      q: '자산 기준은 어떻게 되나요?',
      a: '부동산 2억 1,550만 원 이하, 자동차 3,708만 원 이하가 기준입니다. 2026년 기준이며 공고마다 확인이 필요합니다.',
      source: '공공주택 특별법 시행규칙',
      sourceUrl: 'https://www.law.go.kr',
    },
    {
      q: '청약저축 납입 횟수 조건은 있나요?',
      a: '네. 수도권은 12회 이상, 비수도권은 6회 이상 납입해야 1순위 자격이 됩니다. 납입 금액과 기간도 가점에 반영됩니다.',
      source: '청약홈',
      sourceUrl: 'https://www.applyhome.co.kr',
    },
    {
      q: '공공분양 가점 항목은 무엇인가요?',
      a: '무주택 기간(최대 32점), 부양가족 수(최대 35점), 청약통장 가입 기간(최대 17점)으로 총 84점 만점입니다.',
      source: '청약홈 가점 안내',
      sourceUrl: 'https://www.applyhome.co.kr',
    },
    {
      q: '소득·자산이 기준 초과면 특별공급만 노려야 하나요?',
      a: '일반공급은 불가하지만, 일부 특별공급(신혼·생애최초 등)은 소득 기준이 130~160%로 더 넓습니다. 자신의 상황에 맞는 유형을 확인하세요.',
      source: '국토교통부 청약 제도 안내',
      sourceUrl: 'https://www.molit.go.kr',
    }
  ],
  sources: [
    { name: 'LH청약플러스·청약홈', url: 'https://apply.lh.or.kr' },
  ],
};
