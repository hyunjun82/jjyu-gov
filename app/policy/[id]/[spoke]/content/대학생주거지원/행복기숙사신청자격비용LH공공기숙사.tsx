import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          한국사학진흥재단 <strong>행복기숙사</strong>는 대학생의 주거 부담을 줄이기 위해
          대학과 공동으로 건립한 공공기숙사입니다.
          민자 기숙사 대비 <strong>절반 이하</strong> 수준의 저렴한 비용으로 이용할 수 있습니다.
        </p>
      </div>

      <section className="detail-card" id="basic">
        <h2 className="detail-card-head">행복기숙사 기본 정보</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>항목</th><th>내용</th></tr></thead>
            <tbody>
              <tr><td>운영 기관</td><td>한국사학진흥재단</td></tr>
              <tr><td>형태</td><td>대학교와 공동 건립 공공기숙사</td></tr>
              <tr><td>비용 수준</td><td>민자 기숙사 대비 절반 이하 (학교·지역별 상이)</td></tr>
              <tr><td>입주 자격</td><td>해당 대학 재학생 (학교별 선발 기준 적용)</td></tr>
              <tr><td>신청처</td><td>happydorm.or.kr (한국사학진흥재단)</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            행복기숙사는 전국 다수 대학에 설치되어 있으며, 학교별로 입사 비용·기간·신청 시기가 다릅니다.
            재학 중인 대학의 기숙사 공고를 먼저 확인하세요.
          </div>
        </div>
      </section>

      <section className="detail-card" id="lh">
        <h2 className="detail-card-head">LH 기숙사형 청년주택</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>항목</th><th>내용</th></tr></thead>
            <tbody>
              <tr><td>임대료</td><td>시중 시세의 약 40% 수준</td></tr>
              <tr><td>보증금</td><td>60만 원 (공고별 상이)</td></tr>
              <tr><td>거주 기간</td><td>최장 10년 (2년 계약, 최대 4회 재계약)</td></tr>
              <tr><td>소득 요건</td><td>본인+부모 합산 도시근로자 월평균 소득 100% 이하</td></tr>
              <tr><td>신청처</td><td>LH청약플러스 apply.lh.or.kr</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            LH 기숙사형 청년주택은 원룸형으로 공급되며, 대학가 인근에 위치한 경우가 많습니다.
            공고 시 신청해야 하며 청약플러스에서 확인할 수 있습니다.
          </div>
        </div>
      </section>
    </>
  );
}

const spokeData: SpokeData = {
  slug: '행복기숙사신청자격비용LH공공기숙사',
  breadcrumb: '행복기숙사신청자격비용LH공공기숙사',
  title: '행복기숙사 신청 자격과 비용 LH 공공기숙사 정리',
  description: '한국사학진흥재단 행복기숙사와 LH 기숙사형 청년주택의 비용·자격·거주기간을 비교합니다.',
  lastUpdated: '2026-05-19',
  content: <Content />,
};

export default spokeData;
export { spokeData as 대학생주거지원행복기숙사신청자격비용LH공공기숙사SpokeContent };
