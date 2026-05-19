import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          2026년 국가근로장학금 시간당 단가는 <strong>교내 근로 10,320원, 교외 근로 12,790원</strong>입니다.
          학기 중 주 20시간, 방학 중 주 40시간 이내로 근무할 수 있습니다.
        </p>
      </div>

      <section className="detail-card" id="rate">
        <h2 className="detail-card-head">2026년 시간당 단가</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>근로 유형</th><th>시간당 단가</th><th>지급 주체</th></tr></thead>
            <tbody>
              <tr><td>교내 근로</td><td>10,320원</td><td>한국장학재단</td></tr>
              <tr><td>교외 근로 (일반)</td><td>12,790원</td><td>한국장학재단</td></tr>
              <tr><td>교외 근로 (사회적기업 등)</td><td>12,790원</td><td>한국장학재단</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            2026년 최저임금(10,030원)보다 높은 수준으로 책정됩니다.
            시간당 단가는 매년 최저임금 인상에 맞춰 조정됩니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="hours">
        <h2 className="detail-card-head">근무 시간 한도</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>기간</th><th>주당 근무 한도</th><th>월 최대 예상 수령</th></tr></thead>
            <tbody>
              <tr><td>학기 중</td><td>주 20시간 이내</td><td>약 825,600원 (교내 기준)</td></tr>
              <tr><td>방학 중</td><td>주 40시간 이내</td><td>약 1,651,200원 (교내 기준)</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            학기당 지원 한도(시간)가 별도로 설정됩니다. 초과 근무분은 장학금으로 지급되지 않습니다.
            실제 근무 시간은 학교와 협의해 결정됩니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="payment">
        <h2 className="detail-card-head">지급 방식</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>항목</th><th>내용</th></tr></thead>
            <tbody>
              <tr><td>지급 시기</td><td>매월 근무 실적 확인 후 익월 지급</td></tr>
              <tr><td>지급 방법</td><td>본인 계좌 직접 입금</td></tr>
              <tr><td>세금</td><td>비과세 (소득세 미부과)</td></tr>
              <tr><td>확인처</td><td>kosaf.go.kr → 장학금 → 국가근로장학금</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export const 국가근로장학금국가근로장학금시간당단가교내교외2026SpokeContent: SpokeData = {
  h1: '국가근로장학금 시간당 단가 교내 교외 2026년 기준',
  breadcrumb: '국가근로장학금시간당단가교내교외2026',
  description: '2026년 국가근로장학금 시간당 단가 교내 10,320원 교외 12,790원, 근무 시간 한도와 지급 방식을 정리합니다.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    { q: '국가근로장학금은 어디서 신청하나요?', a: '한국장학재단 홈페이지(kosaf.go.kr) 또는 모바일 앱에서 신청할 수 있습니다. 매 학기 시작 전 신청 기간에 맞춰 접수해야 합니다.', source: '한국장학재단 공식 안내', sourceUrl: 'https://www.kosaf.go.kr' },
    { q: '근무 시간은 얼마나 되나요?', a: '월 최대 60시간 이내이며, 학업에 지장이 없는 범위에서 교내 또는 교외 기관에서 근무합니다. 시간당 급여는 최저임금 이상이어야 합니다.', source: '한국장학재단 공식 안내', sourceUrl: 'https://www.kosaf.go.kr' },
    { q: '국가근로장학금을 받으면 다른 장학금도 받을 수 있나요?', a: '국가근로장학금은 성적·소득 연계 장학금(국가장학금 1·2유형)과 중복 수혜가 가능합니다. 다만 학교별 자체 규정을 반드시 확인하세요.', source: '한국장학재단 공식 안내', sourceUrl: 'https://www.kosaf.go.kr' },
    { q: '소득분위 기준이 어떻게 되나요?', a: '소득분위 1~8구간 학생이 신청 가능합니다. 학자금 지원 소득분위는 금융정보·재산 등 가구 소득을 바탕으로 한국장학재단이 산정합니다.', source: '한국장학재단 공식 안내', sourceUrl: 'https://www.kosaf.go.kr' },
    { q: '근무지는 학교 안에서만 가능한가요?', a: '교내 근무 외에도 교외 공공기관, 비영리단체, 지역사회 서비스 기관 등에서도 근무할 수 있습니다. 교외 근무지는 재단 승인이 필요합니다.', source: '한국장학재단 공식 안내', sourceUrl: 'https://www.kosaf.go.kr' },
  ],
  sources: [{ name: '한국장학재단 공식 안내', url: 'https://www.kosaf.go.kr' }],
};
