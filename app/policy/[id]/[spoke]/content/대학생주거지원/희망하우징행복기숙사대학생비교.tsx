import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          희망하우징은 <strong>SH(서울주택도시개발공사)</strong>가 운영하는 원룸형·기숙사형 대학생 전용 임대주택이고,
          행복기숙사는 <strong>한국사학진흥재단</strong>이 대학과 공동 건립한 공공기숙사입니다.
          보증금·임대료·대상·운영 방식이 다르므로 본인 상황에 맞게 선택해야 합니다.
        </p>
      </div>

      <section className="detail-card" id="compare">
        <h2 className="detail-card-head">희망하우징 vs 행복기숙사 핵심 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>구분</th><th>희망하우징 (SH)</th><th>행복기숙사 (KASFO)</th></tr></thead>
            <tbody>
              <tr><td>운영 기관</td><td>SH 서울주택도시개발공사</td><td>한국사학진흥재단</td></tr>
              <tr><td>형태</td><td>원룸형 · 기숙사형 (개인 공간 중심)</td><td>사립대교내형 · 연합형 · 기숙사형청년주택</td></tr>
              <tr><td>신청 대상</td><td>서울 소재 대학교(전문대 포함) 재학생</td><td>해당 협약 대학 재학생 (학교별 상이)</td></tr>
              <tr><td>보증금</td><td>1,090,000원 (일부 기숙사형 제외)</td><td>기숙사별 자율 책정</td></tr>
              <tr><td>월 임대료</td><td>79,000 ~ 145,300원</td><td>민자 기숙사 대비 저렴 (학교별 상이)</td></tr>
              <tr><td>최장 거주</td><td>최초 2년 + 재계약 2회(회당 2년) = 최장 6년</td><td>기숙사·학교별 상이</td></tr>
              <tr><td>신청처</td><td>SH 인터넷 청약시스템 i-sh.co.kr</td><td>happydorm.or.kr 또는 각 대학 행정실</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="hopehousing">
        <h2 className="detail-card-head">희망하우징 단지별 임대 조건</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>단지명</th><th>보증금</th><th>월 임대료</th><th>거주 형태</th></tr></thead>
            <tbody>
              <tr><td>연남 공공원룸텔</td><td>1,090,000원</td><td>145,300원</td><td>원룸형 (1호 1인)</td></tr>
              <tr><td>공릉 공공원룸텔</td><td>1,090,000원</td><td>86,600원</td><td>기숙사형 (1호 1~3인)</td></tr>
              <tr><td>내발산 공공기숙사</td><td>없음</td><td>기숙사비 120,000원</td><td>장애인 우선 (1호 1인)</td></tr>
              <tr><td>공릉 공공기숙사</td><td>1,090,000원</td><td>81,000원</td><td>기숙사형 (1호 2인)</td></tr>
              <tr><td>정릉 희망하우징</td><td>1,090,000원</td><td>90,900원</td><td>원룸형 (1호 1인)</td></tr>
              <tr><td>갈현 공공기숙사</td><td>1,090,000원</td><td>79,000원</td><td>기숙사형 (1호 2인)</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            희망하우징 신청은 입주자 모집공고 시 SH 인터넷 청약시스템(i-sh.co.kr)에서 온라인으로만 진행합니다.
            내발산 공공기숙사는 수도권(서울·경기·인천) 소재 대학·대학원생도 신청 가능합니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="happy">
        <h2 className="detail-card-head">행복기숙사 종류와 특징</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>종류</th><th>특징</th><th>주요 입지</th></tr></thead>
            <tbody>
              <tr><td>행복기숙사 (사립)</td><td>사립대학 교내에 건립, 학교 직영</td><td>전국 30여 개 대학</td></tr>
              <tr><td>행복기숙사 (연합)</td><td>여러 대학 학생 공동 이용, BTO 방식</td><td>동소문·홍제·한체대 등</td></tr>
              <tr><td>기숙사형 청년주택</td><td>국유지·공유지 활용, 청년 대상</td><td>서울 개봉동·독산동 등</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            행복기숙사는 사회적 배려자(기초수급자, 장애학생, 한부모가정 자녀 등)를 전체 정원의 8% 이상 우선 선발하며,
            사립 행복기숙사는 해당 학생에게 기숙사비를 일정 비율 추가 지원합니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="choice">
        <h2 className="detail-card-head">어떤 기숙사를 선택해야 할까</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>상황</th><th>추천</th></tr></thead>
            <tbody>
              <tr><td>서울 소재 대학 재학 + 낮은 보증금 선호</td><td>희망하우징 (보증금 109만원)</td></tr>
              <tr><td>소속 대학에 행복기숙사 협약 있음</td><td>행복기숙사 (소속 대학 행정실 문의)</td></tr>
              <tr><td>원룸 형태 독립 공간 선호</td><td>희망하우징 원룸형 (연남·정릉)</td></tr>
              <tr><td>기초수급자·장애학생 등 사회적 배려자</td><td>행복기숙사 우선 선발 신청</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

const spokeData: SpokeData = {
  slug: '희망하우징행복기숙사대학생비교',
  breadcrumb: '희망하우징행복기숙사대학생비교',
  title: '희망하우징과 행복기숙사 대학생 기숙사 비교',
  description: 'SH 희망하우징(보증금 109만원, 월 7~14만원)과 한국사학진흥재단 행복기숙사의 비용·대상·형태를 비교합니다.',
  lastUpdated: '2026-05-19',
  content: <Content />,
};

export default spokeData;
export { spokeData as 대학생주거지원희망하우징행복기숙사대학생비교SpokeContent };
