import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          한국장학재단은 대학생의 주거 부담 완화를 위해
          <strong>기숙사 지원 프로그램</strong>을 운영합니다.
          생활비 장학금(대출)과 별개로, 창업 준비 대학생에게는
          <strong>창업기숙사</strong>를 무상으로 제공하기도 합니다.
        </p>
      </div>

      <section className="detail-card" id="program">
        <h2 className="detail-card-head">한국장학재단 주거 지원 프로그램</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>프로그램</th><th>대상</th><th>지원 내용</th></tr></thead>
            <tbody>
              <tr><td>창업기숙사</td><td>창업 준비 대학생·대학원생</td><td>주거+사무 공간 무상 제공</td></tr>
              <tr><td>생활비 대출</td><td>소득 8분위 이하 대학생</td><td>연간 최대 350만 원 (생활비·주거비 포함)</td></tr>
              <tr><td>긴급복지 지원</td><td>갑작스러운 가정 위기 학생</td><td>긴급 생활비·주거비 지원</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            한국장학재단은 기숙사를 직접 운영하지 않습니다.
            기숙사비 지원은 생활비 장학금(대출) 또는 소속 대학의 장학 제도를 활용하세요.
          </div>
        </div>
      </section>

      <section className="detail-card" id="local">
        <h2 className="detail-card-head">지자체 대학생 기숙사비 지원</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>지역</th><th>프로그램</th><th>지원 대상</th></tr></thead>
            <tbody>
              <tr><td>경기도</td><td>경기푸른미래관 (기숙사 제공)</td><td>경기도 출신 취약계층 대학생</td></tr>
              <tr><td>서울시</td><td>희망하우징, 행복(공공)기숙사</td><td>서울 소재 대학 재학생</td></tr>
              <tr><td>각 지자체</td><td>지자체별 대학생 주거 지원</td><td>지역 출신 대학생</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            거주하는 지자체 홈페이지 또는 복지로(bokjiro.go.kr)에서 지역별 대학생 주거 지원 사업을 검색하세요.
          </div>
        </div>
      </section>
    </>
  );
}

export const 대학생주거지원대학생기숙사비지원한국장학재단SpokeContent: SpokeData = {
  h1: '대학생 기숙사비 지원 한국장학재단과 지자체 지원금',
  breadcrumb: '대학생기숙사비지원한국장학재단',
  description: '한국장학재단 창업기숙사·생활비 대출과 지자체별 대학생 기숙사 지원 프로그램을 정리합니다.',
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
