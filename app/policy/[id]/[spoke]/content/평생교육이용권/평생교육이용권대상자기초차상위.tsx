import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>평생교육이용권은 기초수급자·차상위 계층이 우선 대상이지만,
        <strong>일반형(지역특화형)</strong>은 <strong>기초·차상위 외 저소득층</strong>도 신청할 수 있습니다.
        AI·디지털 유형은 <strong>소득 무관</strong>으로 만 30세 이상이면 신청 가능합니다.</p>
      </div>
      <section className="detail-card" id="types">
        <h2 className="detail-card-head">유형별 대상자 기준</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>유형</th><th>연령</th><th>소득 기준</th></tr></thead>
            <tbody>
              <tr><td>일반형(지역특화)</td><td>만 19세 이상</td><td>기초·차상위 + 지역 저소득층</td></tr>
              <tr><td>AI·디지털형</td><td>만 30세 이상</td><td>소득 무관</td></tr>
              <tr><td>노인형</td><td>만 65세 이상</td><td>소득 무관</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>AI·디지털형은 소득 무관으로 범위가 가장 넓습니다. 단, 만 30세 이상이어야 합니다.</div>
        </div>
      </section>
      <section className="detail-card" id="general">
        <h2 className="detail-card-head">일반형 추가 대상 (지역특화)</h2>
        <div className="detail-card-body">
          <p style={{lineHeight:1.8}}>지역마다 별도로 저소득층 기준을 추가 적용할 수 있습니다.
          중위소득 65% 이하를 추가 지원하는 지역이 있으니 lllcard.kr에서 <strong>내가 사는 지역의 공고문</strong>을 반드시 확인하세요.</p>
        </div>
      </section>
    </>
  );
}

const spokeData: SpokeData = {
  slug: '평생교육이용권대상자기초차상위',
  breadcrumb: '평생교육이용권대상자기초차상위',
  title: '평생교육이용권 대상자 — 기초·차상위 외 받을 수 있나',
  description: '평생교육이용권의 수급 자격이 기초생활수급자·차상위 외에 일반 저소득층도 해당되는지 정리합니다.',
  lastUpdated: '2026-05-19',
  content: <Content />,
};

export default spokeData;
export { spokeData as 평생교육이용권평생교육이용권대상자기초차상위SpokeContent };
