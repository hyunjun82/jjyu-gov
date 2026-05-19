import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          대한법률구조공단은 <strong>민사·가사·형사·행정</strong> 사건 모두를 지원합니다.
          다만 사건 종류와 상대방 유형에 따라 지원 가능 여부가 달라지므로 132번으로 먼저 확인하세요.
        </p>
      </div>

      <section className="detail-card" id="civil">
        <h2 className="detail-card-head">민사 사건 지원 범위</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>사건 유형</th><th>예시</th></tr></thead>
            <tbody>
              <tr><td>금전 분쟁</td><td>임금체불, 전세보증금 미반환, 대여금 청구</td></tr>
              <tr><td>부동산</td><td>명도소송, 경매, 소유권 분쟁</td></tr>
              <tr><td>계약 분쟁</td><td>매매계약 해제, 손해배상 청구</td></tr>
              <tr><td>소비자 분쟁</td><td>하자담보책임, 불법행위 손해배상</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="family">
        <h2 className="detail-card-head">가사 사건 지원 범위</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>사건 유형</th><th>예시</th></tr></thead>
            <tbody>
              <tr><td>이혼 관련</td><td>이혼소송, 재산분할, 위자료 청구</td></tr>
              <tr><td>자녀 관련</td><td>친권·양육권 지정, 면접교섭권, 양육비 청구</td></tr>
              <tr><td>상속</td><td>유류분 청구, 유언 효력 분쟁</td></tr>
              <tr><td>가정폭력</td><td>피해자 보호명령, 접근금지 신청</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            가정폭력·성폭력 피해자는 소득 기준 없이 무료 지원을 받습니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="criminal">
        <h2 className="detail-card-head">형사·행정 사건 지원 범위</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>사건 유형</th><th>내용</th></tr></thead>
            <tbody>
              <tr><td>형사 피해자</td><td>고소장 작성, 수사·재판 지원 (피해자 한정)</td></tr>
              <tr><td>국선변호</td><td>국선변호 대상자 형사 변호 (법원 선정과 별도)</td></tr>
              <tr><td>행정 불복</td><td>행정심판·행정소송 (복지급여 삭감·취소 등)</td></tr>
              <tr><td>헌법소원</td><td>기본권 침해 관련 헌법소원 지원</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            형사 피의자(피고인)에 대한 변호는 원칙적으로 지원하지 않습니다.
            피해자 지위에서 고소·손해배상 청구를 지원합니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="exclude">
        <h2 className="detail-card-head">지원 제외 사건</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>제외 유형</th><th>이유</th></tr></thead>
            <tbody>
              <tr><td>사업자 간 상사 분쟁</td><td>영리 목적 사건은 지원 대상 제외</td></tr>
              <tr><td>승소 가능성 없는 사건</td><td>법률구조 심사에서 탈락</td></tr>
              <tr><td>상대방이 국가·지자체인 일부</td><td>유형별 별도 심사 필요</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

const spokeData: SpokeData = {
  slug: '무료법률구조대상사건민사가사형사종류',
  breadcrumb: '무료법률구조대상사건민사가사형사종류',
  title: '무료법률구조 대상 사건 민사 가사 형사 행정 종류',
  description: '대한법률구조공단이 지원하는 민사·가사·형사·행정 사건 유형과 지원 제외 사건을 정리합니다.',
  lastUpdated: '2026-05-19',
  content: <Content />,
};

export default spokeData;
export { spokeData as 무료법률구조무료법률구조대상사건민사가사형사종류SpokeContent };
