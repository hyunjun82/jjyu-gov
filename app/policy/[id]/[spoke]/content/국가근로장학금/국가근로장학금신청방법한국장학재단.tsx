import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          국가근로장학금은 <strong>한국장학재단 홈페이지(kosaf.go.kr)</strong>에서 온라인으로 신청합니다.
          학기 시작 전 신청 기간을 반드시 확인해야 하며, 기간 내 신청하지 않으면 해당 학기는 지원받을 수 없습니다.
        </p>
      </div>

      <section className="detail-card" id="step">
        <h2 className="detail-card-head">신청 절차</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>단계</th><th>내용</th></tr></thead>
            <tbody>
              <tr><td>1단계</td><td>kosaf.go.kr 접속 → 장학금 → 국가근로장학금 신청</td></tr>
              <tr><td>2단계</td><td>본인인증 후 가구원 정보 제공 동의 (가족 공동인증 필요)</td></tr>
              <tr><td>3단계</td><td>소득·재산 정보 자동 조회 (건강보험공단·국세청 연동)</td></tr>
              <tr><td>4단계</td><td>근로 유형 선택 (교내 또는 교외)</td></tr>
              <tr><td>5단계</td><td>선발 발표 → 학교와 근무 배치 협의</td></tr>
              <tr><td>6단계</td><td>근무 시작 → 매월 실적 입력 → 익월 지급</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="schedule">
        <h2 className="detail-card-head">신청 시기</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>학기</th><th>신청 기간 (예시)</th></tr></thead>
            <tbody>
              <tr><td>1학기</td><td>전년도 11월 ~ 당해 2월 (한재단 공고 확인)</td></tr>
              <tr><td>2학기</td><td>당해 5월 ~ 7월 (한재단 공고 확인)</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            정확한 신청 기간은 매년 달라지므로 kosaf.go.kr 공지사항을 확인하세요.
            신청 기간이 지나면 추가 신청이 불가합니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="docs">
        <h2 className="detail-card-head">필요 서류</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>서류</th><th>비고</th></tr></thead>
            <tbody>
              <tr><td>가족관계증명서</td><td>주민등록번호 전체 공개본</td></tr>
              <tr><td>가구원 소득 증명</td><td>건강보험료 납부확인서 등 (자동 조회 가능)</td></tr>
              <tr><td>기타 특별 서류</td><td>기초수급·차상위 확인서 (해당자만)</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            대부분 서류는 행정정보 공동이용으로 자동 조회됩니다.
            미조회 서류가 있으면 시스템에서 직접 업로드를 안내합니다.
          </div>
        </div>
      </section>
    </>
  );
}

const spokeData: SpokeData = {
  slug: '국가근로장학금신청방법한국장학재단',
  breadcrumb: '국가근로장학금신청방법한국장학재단',
  title: '국가근로장학금 신청 방법 한국장학재단 kosaf.go.kr',
  description: '국가근로장학금 신청 절차, 신청 시기, 필요 서류를 한국장학재단 기준으로 정리합니다.',
  lastUpdated: '2026-05-19',
  content: <Content />,
};

export default spokeData;
export { spokeData as 국가근로장학금국가근로장학금신청방법한국장학재단SpokeContent };
