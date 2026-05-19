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

export const 대학생주거지원행복기숙사신청자격비용LH공공기숙사SpokeContent: SpokeData = {
  h1: '행복기숙사 신청 자격과 비용 LH 공공기숙사 정리',
  breadcrumb: '행복기숙사신청자격비용LH공공기숙사',
  description: '한국사학진흥재단 행복기숙사와 LH 기숙사형 청년주택의 비용·자격·거주기간을 비교합니다.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    { q: '대학생 기숙사형 청년주택은 어디서 신청하나요?', a: '한국장학재단(kosaf.go.kr) 또는 LH청약센터(apply.lh.or.kr)에서 신청할 수 있으며, 학교별 안내 공고를 반드시 확인하세요.', source: '한국장학재단·LH공사 공식 안내', sourceUrl: 'https://www.kosaf.go.kr' },
    { q: '지원 대상 소득 기준이 어떻게 되나요?', a: '주거장학금은 소득분위 1~3구간 기준 학생이 우선 지원됩니다. 기숙사 배정은 학교별·사업별 자체 기준이 적용됩니다.', source: '한국장학재단·LH공사 공식 안내', sourceUrl: 'https://www.kosaf.go.kr' },
    { q: '주거비 지원 금액은 얼마인가요?', a: '주거장학금은 월 최대 20만 원(지역별 상이)이 지원되며, 기숙사형은 시세 대비 40~60% 수준의 임대료로 입주할 수 있습니다.', source: '한국장학재단·LH공사 공식 안내', sourceUrl: 'https://www.kosaf.go.kr' },
    { q: '재학생만 신청 가능한가요?', a: '재학생뿐만 아니라 입학 예정자·복학 예정자도 신청 가능한 경우가 있습니다. 사업별 공고를 확인하세요.', source: '한국장학재단·LH공사 공식 안내', sourceUrl: 'https://www.kosaf.go.kr' },
    { q: '신청 후 대기가 길면 어떻게 되나요?', a: '수요 대비 공급이 부족한 지역은 대기 기간이 발생할 수 있습니다. 순번이 되면 개별 연락이 오며, 거절 시 다음 순번으로 넘어갑니다.', source: '한국장학재단·LH공사 공식 안내', sourceUrl: 'https://www.kosaf.go.kr' },
  ],
  sources: [{ name: '한국장학재단·LH공사 공식 안내', url: 'https://www.kosaf.go.kr' }],
};
