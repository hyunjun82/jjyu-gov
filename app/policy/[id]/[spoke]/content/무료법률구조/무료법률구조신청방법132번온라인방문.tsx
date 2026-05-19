import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          무료법률구조는 <strong>☎ 132 전화</strong>, <strong>klac.or.kr 온라인 신청</strong>,
          <strong>전국 지부 방문</strong> 세 가지 방법으로 신청할 수 있습니다.
          전화 132번은 24시간 운영하며, 첫 상담은 무료입니다.
        </p>
      </div>

      <section className="detail-card" id="phone">
        <h2 className="detail-card-head">☎ 132 전화 신청</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>항목</th><th>내용</th></tr></thead>
            <tbody>
              <tr><td>전화번호</td><td>132 (국번 없이, 전국 공통)</td></tr>
              <tr><td>운영 시간</td><td>24시간 365일 (ARS 포함)</td></tr>
              <tr><td>상담 비용</td><td>무료</td></tr>
              <tr><td>가능 업무</td><td>사건 적합성 확인, 서류 안내, 지부 연결</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            소득 기준이 애매하거나 사건이 지원 대상인지 모르는 경우에도 132번 상담을 먼저 받으면 됩니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="online">
        <h2 className="detail-card-head">온라인 신청 절차</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>단계</th><th>내용</th></tr></thead>
            <tbody>
              <tr><td>1단계</td><td>klac.or.kr 접속 → 법률지원 → 소송구조 신청</td></tr>
              <tr><td>2단계</td><td>본인인증 (공동인증서·간편인증)</td></tr>
              <tr><td>3단계</td><td>사건 내용 입력 및 소득·재산 서류 첨부</td></tr>
              <tr><td>4단계</td><td>공단 심사 (통상 1~2주)</td></tr>
              <tr><td>5단계</td><td>구조 결정 통보 → 담당 변호사 배정</td></tr>
              <tr><td>6단계</td><td>소송 진행 (비용 공단 선납)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="visit">
        <h2 className="detail-card-head">방문 신청</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>항목</th><th>내용</th></tr></thead>
            <tbody>
              <tr><td>방문 장소</td><td>전국 대한법률구조공단 지부·출장소</td></tr>
              <tr><td>운영 시간</td><td>평일 09:00~18:00</td></tr>
              <tr><td>지부 조회</td><td>klac.or.kr → 공단 안내 → 찾아오시는 길</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            방문 시 지참 서류: 신분증, 소득 증명 서류(건강보험료 납부확인서 등), 사건 관련 자료 (계약서·판결문·진단서 등).
            미리 132번으로 필요 서류를 확인하면 방문이 수월합니다.
          </div>
        </div>
      </section>
    </>
  );
}

const spokeData: SpokeData = {
  slug: '무료법률구조신청방법132번온라인방문',
  breadcrumb: '무료법률구조신청방법132번온라인방문',
  title: '무료법률구조 신청 방법 132번 전화 온라인 방문',
  description: '대한법률구조공단 무료법률구조 신청 방법인 132번 전화, klac.or.kr 온라인 신청, 지부 방문 절차를 안내합니다.',
  lastUpdated: '2026-05-19',
  content: <Content />,
};

export default spokeData;
export { spokeData as 무료법률구조무료법률구조신청방법132번온라인방문SpokeContent };
