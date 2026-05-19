import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          가족돌봄휴가 신청 시 <strong>돌봄 사유를 증명하는 서류</strong>를 사업주에게 제출해야 합니다.
          사업주는 정당한 사유 없이 거부할 수 없으며, 거부 시 500만 원 이하 과태료가 부과됩니다.
        </p>
      </div>

      <section className="detail-card" id="docs">
        <h2 className="detail-card-head">제출 서류</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>돌봄 사유</th><th>증빙 서류 예시</th></tr></thead>
            <tbody>
              <tr><td>자녀 질병·부상</td><td>의사 진단서 또는 소견서</td></tr>
              <tr><td>부모·배우자 질병</td><td>의사 진단서 또는 입원확인서</td></tr>
              <tr><td>자녀 어린이집·학교 휴원</td><td>휴원·휴교 공문 또는 통보 문자</td></tr>
              <tr><td>장애인 가족 돌봄</td><td>장애인 등록증 사본</td></tr>
              <tr><td>감염병 격리</td><td>격리통지서</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            법령상 제출 의무 서류가 명시적으로 열거되어 있지는 않습니다.
            회사에서 요구하는 경우 돌봄 사실을 소명할 수 있는 서류를 준비하면 됩니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="apply">
        <h2 className="detail-card-head">신청서 작성 항목</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>항목</th><th>내용</th></tr></thead>
            <tbody>
              <tr><td>신청인 정보</td><td>이름, 부서, 직위, 연락처</td></tr>
              <tr><td>돌봄 대상</td><td>가족 성명, 관계, 나이</td></tr>
              <tr><td>사용 기간</td><td>날짜 및 시간 (시간 단위 사용 시 명시)</td></tr>
              <tr><td>돌봄 사유</td><td>구체적 사유 기재</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            고용노동부 홈페이지(moel.go.kr)에서 표준 신청 서식을 내려받을 수 있습니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="refusal">
        <h2 className="detail-card-head">회사 승인 거부 시 대응</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>상황</th><th>대응 방법</th></tr></thead>
            <tbody>
              <tr><td>사업주가 거부</td><td>고용노동부 신고 (☎ 1350 또는 온라인 민원)</td></tr>
              <tr><td>불이익 처우</td><td>노동청 진정 또는 노동위원회 구제신청</td></tr>
              <tr><td>과태료 부과</td><td>사업주에게 500만 원 이하 과태료</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            가족돌봄휴가는 근로자의 법적 권리입니다.
            사업주가 정당한 사유 없이 거부하거나 해고·감봉 등 불이익을 주는 것은 위법입니다.
          </div>
        </div>
      </section>
    </>
  );
}

export const 가족돌봄휴가가족돌봄휴가신청서류증빙서류회사승인SpokeContent: SpokeData = {
  h1: '가족돌봄휴가 신청 서류 증빙 서류와 회사 승인 거부 대응',
  breadcrumb: '가족돌봄휴가신청서류증빙서류회사승인',
  description: '가족돌봄휴가 신청 시 필요한 증빙 서류, 신청서 작성 항목, 회사 거부 시 대응 방법을 정리합니다.',
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
