import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          공공임대 청약 공고가 뜨면 <strong>① 공고 확인 → ② 자격 확인 → ③ 청약 신청 → ④ 당첨자 발표 → ⑤ 서류 제출 → ⑥ 계약</strong>
          순서로 진행됩니다. 공고마다 일정이 달라 <strong>마이홈포털(myhome.go.kr)</strong>에서 알림 설정을 해두는 게 좋습니다.
        </p>
      </div>

      <section className="detail-card" id="steps">
        <h2 className="detail-card-head">공공임대 청약 신청 단계</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>단계</th><th>내용</th><th>기간</th></tr>
            </thead>
            <tbody>
              <tr><td>① 공고 확인</td><td>LH청약플러스·마이홈포털에서 모집공고 확인</td><td>상시</td></tr>
              <tr><td>② 자격 자가 진단</td><td>소득·자산·무주택 기간 확인</td><td>신청 전</td></tr>
              <tr><td>③ 온라인 신청</td><td>apply.lh.or.kr 또는 지역 SH·GH 포털</td><td>공고 내 신청기간</td></tr>
              <tr><td>④ 당첨자 발표</td><td>공고 후 1~4주 내</td><td>공고별 상이</td></tr>
              <tr><td>⑤ 서류 제출</td><td>당첨 후 지정 기간 내 방문 제출</td><td>보통 7~14일</td></tr>
              <tr><td>⑥ 계약</td><td>자격 심사 통과 후 임대차계약 체결</td><td>서류 제출 후</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="docs">
        <h2 className="detail-card-head">필요 서류 목록</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>서류</th><th>발급처</th></tr>
            </thead>
            <tbody>
              <tr><td>주민등록등본</td><td>정부24 또는 주민센터</td></tr>
              <tr><td>가족관계증명서</td><td>정부24</td></tr>
              <tr><td>건강보험료 납부확인서</td><td>국민건강보험공단</td></tr>
              <tr><td>근로소득 원천징수영수증 또는 사업소득 확인서</td><td>회사·세무서</td></tr>
              <tr><td>무주택 서약서</td><td>LH 제공 양식 사용</td></tr>
              <tr><td>금융정보 제공 동의서</td><td>LH 제공 양식 사용</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            서류는 공고문에 명시된 목록을 반드시 재확인. 빠지면 당첨 취소 사유가 됩니다.
          </div>
        </div>
      </section>

      <div className="info-box" style={{ marginTop: 20 }}>
        <strong>공고 알림 받기:</strong> 마이홈포털 → 회원가입 → 관심 지역 설정 → 알림 신청.
        LH콜센터 1600-1004에서 전화 상담도 가능합니다.
      </div>
    </>
  );
}

const spokeData: SpokeData = {
  slug: '공공임대청약공고신청순서서류',
  breadcrumb: '공공임대청약공고신청순서서류',
  title: '공공임대 청약 공고 뜨면 신청 순서와 서류',
  description: '공공임대주택 청약 공고가 열렸을 때 신청 단계, 필요 서류, 주의사항을 한번에 정리합니다.',
  lastUpdated: '2026-05-19',
  content: <Content />,
};

export default spokeData;
export { spokeData as 공공임대주택공공임대청약공고신청순서서류SpokeContent };
