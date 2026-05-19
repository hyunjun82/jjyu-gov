import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          2026년 기준 국가장학금은 <strong>소득분위(학자금 지원구간) 1~9구간</strong>까지 지원하며,
          1구간 최대 <strong>연 560만 원</strong>, 8구간 <strong>연 100만 원</strong>입니다.
          9구간 이하이면 무조건 신청하세요.
        </p>
      </div>
      <section className="detail-card" id="table">
        <h2 className="detail-card-head">2026년 소득분위별 지원 금액 (Ⅰ유형)</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>소득구간</th><th>연간 최대</th><th>학기당 최대</th></tr></thead>
            <tbody>
              <tr><td>1구간</td><td>560만 원</td><td>280만 원</td></tr>
              <tr><td>2구간</td><td>560만 원</td><td>280만 원</td></tr>
              <tr><td>3구간</td><td>520만 원</td><td>260만 원</td></tr>
              <tr><td>4구간</td><td>520만 원</td><td>260만 원</td></tr>
              <tr><td>5구간</td><td>368만 원</td><td>184만 원</td></tr>
              <tr><td>6구간</td><td>368만 원</td><td>184만 원</td></tr>
              <tr><td>7구간</td><td>120만 원</td><td>60만 원</td></tr>
              <tr><td>8구간</td><td>67.5만 원</td><td>33.75만 원</td></tr>
              <tr><td>9구간</td><td>지원 없음</td><td>-</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>등록금 범위 내에서만 지원. 등록금이 지원액보다 적으면 등록금 전액만 지원됩니다.</div>
        </div>
      </section>
      <section className="detail-card" id="bracket-calc">
        <h2 className="detail-card-head">소득구간 어떻게 산정되나</h2>
        <div className="detail-card-body">
          <p style={{lineHeight:1.8}}>
            가구의 소득·재산·금융정보를 건강보험료 환산소득으로 산정합니다.
            한국장학재단 홈페이지 <strong>학자금 지원구간 모의계산</strong> 메뉴에서 미리 확인할 수 있습니다.
          </p>
        </div>
      </section>
    </>
  );
}

export const 국가장학금국가장학금소득분위지급금액SpokeContent: SpokeData = {
  h1: '국가장학금 소득분위 몇 분위까지 얼마 받나',
  breadcrumb: '국가장학금소득분위지급금액',
  description: '2026년 국가장학금 소득분위(1~9구간)별 1학기 최대 지원 금액표를 정리합니다.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '소득분위별 국가장학금은 얼마인가요?',
      a: '2026년 기준: 1~3분위 최대 570만 원, 4~6분위 최대 420만 원, 7분위 최대 350만 원, 8분위 최대 350만 원입니다. 9~10분위는 지원 없음입니다.',
      source: '한국장학재단 국가장학금 안내',
      sourceUrl: 'https://www.kstudy.com',
    },
    {
      q: '소득분위는 어떻게 결정되나요?',
      a: '가구의 소득과 재산을 합산한 소득인정액을 기준으로 1~10분위로 나눕니다. 건강보험료 납부액이 핵심 지표입니다.',
      source: '한국장학재단',
      sourceUrl: 'https://www.kstudy.com',
    },
    {
      q: '등록금보다 장학금이 많으면 어떻게 되나요?',
      a: '등록금 한도 내에서만 지급됩니다. 등록금을 초과하는 금액은 지급되지 않습니다.',
      source: '한국장학재단',
      sourceUrl: 'https://www.kstudy.com',
    },
    {
      q: '다른 장학금과 중복으로 받을 수 있나요?',
      a: '국가장학금은 대학 자체 장학금과 중복 수혜가 가능하지만, 등록금 총액을 초과할 수 없습니다. 일부 외부 장학금과는 제한이 있을 수 있습니다.',
      source: '한국장학재단 중복 수혜 안내',
      sourceUrl: 'https://www.kstudy.com',
    },
    {
      q: '대학원생도 국가장학금을 받을 수 있나요?',
      a: '국가장학금Ⅰ·Ⅱ유형은 학부생 대상입니다. 대학원생은 국가우수장학금(석·박사)이나 대학혁신지원사업 장학금 등을 별도로 확인하세요.',
      source: '한국장학재단',
      sourceUrl: 'https://www.kstudy.com',
    }
  ],
  sources: [
    { name: '한국장학재단', url: 'https://www.kstudy.com' },
  ],
};
