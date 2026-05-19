import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          가족돌봄휴가는 연간 <strong>10일이 기본 한도</strong>이며,
          감염병 재난 등 법령에서 정한 특례 사유가 있을 때에 한해 <strong>최대 20일 추가</strong>(합계 최대 30일)가 가능합니다.
          일반적인 상황에서 10일 초과는 불가합니다.
        </p>
      </div>

      <section className="detail-card" id="limit">
        <h2 className="detail-card-head">연간 사용 한도</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>구분</th><th>한도</th><th>비고</th></tr></thead>
            <tbody>
              <tr><td>기본 한도</td><td>연 10일</td><td>남녀고용평등법 제22조의2</td></tr>
              <tr><td>재난 특례 추가</td><td>연 20일 추가</td><td>법령 특례 선포 시에만 적용</td></tr>
              <tr><td>최대 합계</td><td>연 30일</td><td>특례 기간 + 기본 합산</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            10일 한도는 연도 기준(1월 1일~12월 31일)으로 계산합니다.
            이월되지 않으며, 연도가 바뀌면 다시 10일이 부여됩니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="extension">
        <h2 className="detail-card-head">특례 연장 조건</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>특례 사유</th><th>추가 한도</th></tr></thead>
            <tbody>
              <tr><td>감염병 위기 경보 심각·경계 단계</td><td>10일 추가 (총 20일)</td></tr>
              <tr><td>자녀 돌봄시설 집합 제한</td><td>10일 추가 (총 20일)</td></tr>
              <tr><td>두 사유 동시 적용</td><td>20일 추가 (총 30일)</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            특례는 정부가 공식 선포한 경우에만 적용됩니다.
            현재 특례 시행 여부는 고용24(work24.go.kr) 또는 고용노동부(☎ 1350)에서 확인하세요.
          </div>
        </div>
      </section>

      <section className="detail-card" id="alternative">
        <h2 className="detail-card-head">10일 소진 후 대안</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>제도</th><th>내용</th></tr></thead>
            <tbody>
              <tr><td>가족돌봄휴직</td><td>연간 최장 90일 무급 (30일 단위 분할)</td></tr>
              <tr><td>연차 유급휴가</td><td>남은 연차 소진으로 유급 유지 가능</td></tr>
              <tr><td>육아기 근로시간 단축</td><td>자녀 12세 이하 시 주 15~35시간으로 단축</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            가족돌봄휴가 10일을 모두 사용한 후에는 가족돌봄휴직으로 전환해 추가로 쉴 수 있습니다.
            휴직 기간은 무급이지만 사업주가 해고할 수 없습니다.
          </div>
        </div>
      </section>
    </>
  );
}

export const 가족돌봄휴가가족돌봄휴가연장조건20일초과가능한가SpokeContent: SpokeData = {
  h1: '가족돌봄휴가 연장 조건 10일 초과 재난 특례 20일 가능한가',
  breadcrumb: '가족돌봄휴가연장조건20일초과가능한가',
  description: '가족돌봄휴가 연간 10일 기본 한도, 재난 특례 시 20일 추가 조건, 10일 소진 후 대안 제도를 정리합니다.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    { q: '가족돌봄휴가는 유급인가요 무급인가요?', a: '가족돌봄휴가는 원칙적으로 무급입니다. 다만 회사 취업규칙·단체협약에 유급 규정이 있으면 그에 따릅니다. 재난 특례 시 정부 지원이 별도 지급된 사례가 있습니다.', source: '고용노동부 공식 안내', sourceUrl: 'https://www.moel.go.kr' },
    { q: '연간 며칠까지 사용할 수 있나요?', a: '연간 최대 10일(단, 가족 1명당 5일 한도)이며, 감염병 재난 등 정부가 특례를 선포한 경우 20일까지 연장됩니다.', source: '고용노동부 공식 안내', sourceUrl: 'https://www.moel.go.kr' },
    { q: '가족돌봄휴가 신청 시 필요한 서류는 무엇인가요?', a: '가족관계증명서, 진단서 또는 확인서(입원·감염 등) 등 돌봄 사유를 증명하는 서류가 필요합니다. 회사마다 양식이 다를 수 있으니 HR팀에 먼저 문의하세요.', source: '고용노동부 공식 안내', sourceUrl: 'https://www.moel.go.kr' },
    { q: '사업주가 가족돌봄휴가 신청을 거부할 수 있나요?', a: '법령상 사업주는 정당한 사유 없이 거부할 수 없습니다. 거부 시 500만 원 이하 과태료가 부과됩니다. 고용노동부 고객상담센터(☎1350)에 신고할 수 있습니다.', source: '고용노동부 공식 안내', sourceUrl: 'https://www.moel.go.kr' },
    { q: '가족돌봄휴가와 가족돌봄휴직의 차이는 무엇인가요?', a: '가족돌봄휴가는 단기(연 최대 10~20일)이고, 가족돌봄휴직은 장기(연 최대 90일)입니다. 둘 다 무급이지만 사용 기간·절차가 다릅니다.', source: '고용노동부 공식 안내', sourceUrl: 'https://www.moel.go.kr' },
  ],
  sources: [{ name: '고용노동부 공식 안내', url: 'https://www.moel.go.kr' }],
};
