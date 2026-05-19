import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          가족돌봄휴가는 <strong>1일 단위</strong>가 원칙이지만,
          근로자가 신청하면 <strong>시간 단위</strong>로도 분할 사용할 수 있습니다.
          시간 단위 사용 시 1일은 8시간으로 환산합니다.
        </p>
      </div>

      <section className="detail-card" id="unit">
        <h2 className="detail-card-head">사용 단위 규정</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>구분</th><th>내용</th></tr></thead>
            <tbody>
              <tr><td>기본 단위</td><td>1일</td></tr>
              <tr><td>분할 사용</td><td>시간 단위 가능 (근로자 신청 시)</td></tr>
              <tr><td>1일 환산</td><td>8시간</td></tr>
              <tr><td>연간 총 한도</td><td>10일 (재난 특례 시 최대 20일 추가)</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            예: 하루 2시간씩 사용하면 10일(80시간)을 40회 나누어 쓸 수 있습니다.
            시간 단위 사용은 사용자(사업주)가 거부할 수 없습니다 (남녀고용평등법 제22조의2).
          </div>
        </div>
      </section>

      <section className="detail-card" id="howto">
        <h2 className="detail-card-head">신청 방법</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>단계</th><th>내용</th></tr></thead>
            <tbody>
              <tr><td>1단계</td><td>사용 사유, 사용 기간(시간), 돌봄 대상 가족 명시해 서면 신청</td></tr>
              <tr><td>2단계</td><td>사업주에게 제출 (사전 신청 원칙, 긴급 시 사후 가능)</td></tr>
              <tr><td>3단계</td><td>사업주 수령 확인</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            구두 신청도 인정되지만, 분쟁 방지를 위해 서면(이메일 포함) 신청을 권장합니다.
            사업주가 사용을 거부하거나 불이익을 주면 500만 원 이하 과태료 대상입니다.
          </div>
        </div>
      </section>
    </>
  );
}

export const 가족돌봄휴가가족돌봄휴가시간단위분할사용방법SpokeContent: SpokeData = {
  h1: '가족돌봄휴가 시간 단위 분할 사용 방법과 환산 기준',
  breadcrumb: '가족돌봄휴가시간단위분할사용방법',
  description: '가족돌봄휴가 시간 단위 분할 사용 가능 여부, 1일 8시간 환산 기준, 신청 방법을 남녀고용평등법 기준으로 정리합니다.',
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
