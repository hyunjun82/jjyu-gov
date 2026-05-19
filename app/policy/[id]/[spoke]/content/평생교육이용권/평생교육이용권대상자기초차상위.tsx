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

export const 평생교육이용권평생교육이용권대상자기초차상위SpokeContent: SpokeData = {
  h1: '평생교육이용권 대상자 — 기초·차상위 외 받을 수 있나',
  breadcrumb: '평생교육이용권대상자기초차상위',
  description: '평생교육이용권의 수급 자격이 기초생활수급자·차상위 외에 일반 저소득층도 해당되는지 정리합니다.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '평생교육이용권 대상자 기준은 무엇인가요?',
      a: '기초생활수급자 또는 차상위계층(중위소득 50% 이하)이 기본 대상입니다. 장애인, 한부모가족 구성원도 포함됩니다.',
      source: '교육부·국가평생교육진흥원',
      sourceUrl: 'https://www.nile.or.kr',
    },
    {
      q: '기초·차상위 외 일반 저소득층도 받을 수 있나요?',
      a: '예산 범위 내에서 장애인·다문화·북한이탈주민 등으로 확대되기도 합니다. 공고 시 대상을 확인하세요.',
      source: '국가평생교육진흥원',
      sourceUrl: 'https://www.nile.or.kr',
    },
    {
      q: '신청 자격을 어떻게 확인하나요?',
      a: '주민센터에서 기초·차상위 인정 여부를 먼저 확인하고, 국가평생교육진흥원 또는 시·군·구청 평생학습 담당 부서에 문의하면 됩니다.',
      source: '국가평생교육진흥원',
      sourceUrl: 'https://www.nile.or.kr',
    },
    {
      q: '이용권 지원 금액은 얼마인가요?',
      a: '기본 35만 원 상당의 이용권이 제공됩니다. 우수 이용자로 선정되면 추가 70만 원까지 지원됩니다.',
      source: '교육부',
      sourceUrl: 'https://www.moe.go.kr',
    },
    {
      q: '이용권은 어떤 학습에 사용할 수 있나요?',
      a: '국가평생교육진흥원 지정 기관에서 운영하는 문화·직업·기초 소양 강좌에 사용 가능합니다. 음식·자격증·어학 등 다양한 분야가 포함됩니다.',
      source: '국가평생교육진흥원',
      sourceUrl: 'https://www.nile.or.kr',
    }
  ],
  sources: [
    { name: '국가평생교육진흥원', url: 'https://www.nile.or.kr' },
  ],
};
