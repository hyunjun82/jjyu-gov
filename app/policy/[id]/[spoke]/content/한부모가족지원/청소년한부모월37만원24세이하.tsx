import type { SpokeData } from '../../page';
function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          <strong>만 24세 이하 청소년 한부모</strong>는 자녀가 <strong>2세 미만이면 월 40만원</strong>,
          <strong>2세 이상이면 월 37만원</strong>의 아동양육비를 받습니다.
          일반 한부모(월 23만원)보다 많게는 <strong>월 17만원 더</strong> 지급됩니다.
          추가로 <strong>학습지원비 연 154만원</strong>과 <strong>자립촉진수당 월 10만원</strong>이 제공됩니다.
          소득 기준은 기준 중위소득 <strong>65% 이하</strong>이며, 신청은 주민센터 또는 복지로에서 합니다.
        </p>
      </div>
      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "미성년자 때 아이를 낳으면 지원이 더 많이 나오나요?" 청소년 한부모는 일반 한부모보다 더 많은 지원을 받습니다.
        만 24세 이하라면 청소년 한부모 특별지원 대상이 됩니다.
        자녀가 24개월 미만인 경우 부모급여(월 100만원)와의 중복 수급 여부도 확인해야 합니다.
      </p>
      <section className="detail-card" id="compare">
        <h2 className="detail-card-head">청소년 한부모 vs 일반 한부모 지원 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>지원 항목</th><th>청소년 한부모 (만 24세 이하)</th><th>일반 한부모</th></tr></thead>
            <tbody>
              <tr><td>아동양육비 (2세 미만 자녀)</td><td>월 40만원 (자녀 1인당)</td><td>월 23만원 (자녀 1인당)</td></tr>
              <tr><td>아동양육비 (2세 이상 자녀)</td><td>월 37만원 (자녀 1인당)</td><td>월 23만원 (자녀 1인당)</td></tr>
              <tr><td>학습지원비</td><td>연 154만원</td><td>해당 없음</td></tr>
              <tr><td>자립촉진수당</td><td>월 10만원</td><td>해당 없음</td></tr>
              <tr><td>아동교육지원비 (학용품비)</td><td>연 10만원 (초·중·고등학생)</td><td>연 10만원 (초·중·고등학생)</td></tr>
              <tr><td>생활보조금 (시설 입소)</td><td>월 5만원 (63% 이하)</td><td>월 10만원 (65% 이하)</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>자녀 연령에 따라 차등 지급:</strong> 2세 미만 자녀는 월 40만원, 2세 이상 자녀는 월 37만원.
            자립촉진수당 10만원을 합산하면 2세 미만 최대 월 50만원, 2세 이상 최대 월 47만원입니다.
          </div>
        </div>
      </section>
      <section className="detail-card" id="income">
        <h2 className="detail-card-head">소득 기준 및 신청 자격</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>요건</th><th>기준</th></tr></thead>
            <tbody>
              <tr><td>한부모 연령</td><td>만 24세 이하 (신청 연도 기준)</td></tr>
              <tr><td>자녀 연령</td><td>만 18세 미만 (취학 시 22세까지)</td></tr>
              <tr><td>소득 기준</td><td>기준 중위소득 65% 이하</td></tr>
              <tr><td>2인 가구 기준 (2026)</td><td>월 약 231만원 이하</td></tr>
              <tr><td>3인 가구 기준 (2026)</td><td>월 약 298만원 이하</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>조부모 또는 친인척과 동거 시:</strong> 실질적으로 한부모가 자녀를 혼자 양육하는 경우 지원 대상이 될 수 있습니다.
            주민센터에서 상담 후 신청 여부를 확인하세요.
          </div>
        </div>
      </section>
      <div className="ad-slot">광고 영역</div>
      <section className="detail-card" id="overlap">
        <h2 className="detail-card-head">부모급여·아동수당과의 중복 수급 관계</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>급여 종류</th><th>중복 수급 가능 여부</th><th>비고</th></tr></thead>
            <tbody>
              <tr><td>부모급여 (0~11개월, 월 100만원)</td><td>선택적 수급 (중복 불가)</td><td>한부모 아동양육비 또는 부모급여 중 택 1</td></tr>
              <tr><td>부모급여 (12~23개월, 월 50만원)</td><td>선택적 수급 (중복 불가)</td><td>동일</td></tr>
              <tr><td>아동수당 (만 8세 미만, 월 10만원)</td><td>중복 수급 가능</td><td>별도 신청 필요</td></tr>
              <tr><td>청소년 한부모 학습지원비</td><td>중복 수급 가능</td><td>자동 지급</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>부모급여 vs 한부모 아동양육비:</strong> 자녀가 24개월 미만인 경우 부모급여(월 100만원)와 한부모 아동양육비(월 37만원) 중 금액이 큰 부모급여를 받는 것이 유리합니다.
            24개월 이후에는 한부모 아동양육비로 자동 전환됩니다.
          </div>
        </div>
      </section>
      <div className="ad-slot">광고 영역</div>
      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            일반 한부모 아동양육비 월 23만원, 소득 기준, 신청 방법 등<br />
            한부모가족지원 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/low-income-single-parent" className="btn-cta">
            한부모가족지원 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}
export const 한부모가족지원청소년한부모월37만원24세이하SpokeContent: SpokeData = {
  h1: '청소년한부모 아동양육비 월 37만원, 24세 이하 신청법',
  breadcrumb: '청소년한부모월37만원24세이하',
  description: '만 24세 이하 청소년 한부모: 2세 미만 자녀 월 40만원, 2세 이상 자녀 월 37만원. 자립촉진수당 월 10만원, 학습지원비 연 154만원 추가 지원. 소득 기준 중위소득 65% 이하.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    { q: '청소년 한부모 아동양육비는 일반 한부모보다 얼마나 더 받나요?', a: '청소년 한부모(만 24세 이하)는 자녀 1인당 월 37만원을 받습니다. 일반 한부모(월 23만원)보다 월 14만원이 더 지급됩니다.', source: '여성가족부 한부모가족지원 안내', sourceUrl: 'https://www.mogef.go.kr' },
    { q: '학습지원비는 어떤 용도로 쓸 수 있나요?', a: '학습지원비 연 154만원은 청소년 한부모의 학업 유지 및 검정고시 준비, 직업 훈련 등에 사용할 수 있습니다. 별도 영수증 제출 없이 현금으로 지급됩니다.', source: '여성가족부 청소년 한부모 지원 안내', sourceUrl: 'https://www.mogef.go.kr' },
    { q: '만 25세가 되면 청소년 한부모 지원이 끊기나요?', a: '만 25세가 되면 청소년 한부모 특별지원은 종료됩니다. 이후에는 일반 한부모 아동양육비(월 23만원)로 전환되며 소득 기준을 충족하면 계속 받을 수 있습니다.', source: '여성가족부 한부모가족지원 안내', sourceUrl: 'https://www.mogef.go.kr' },
    { q: '부모급여와 청소년 한부모 아동양육비를 같이 받을 수 있나요?', a: '자녀가 24개월 미만이면 부모급여(0~11개월 월 100만원, 12~23개월 월 50만원)와 한부모 아동양육비 중 하나만 선택해 받을 수 있습니다. 부모급여 금액이 더 크므로 24개월 미만이면 부모급여를 선택하는 것이 유리합니다.', source: '여성가족부 한부모가족지원 안내', sourceUrl: 'https://www.mogef.go.kr' },
    { q: '청소년 한부모 신청은 어디서 하나요?', a: '거주지 읍·면·동 주민센터에 방문하거나 복지로(www.bokjiro.go.kr)에서 온라인으로 신청할 수 있습니다. 가족관계증명서, 소득·재산 확인 서류, 통장 사본 등이 필요합니다.', source: '여성가족부 한부모가족지원 안내', sourceUrl: 'https://www.mogef.go.kr' },
  ],
  sources: [
    { name: '여성가족부 한부모가족지원 안내', url: 'https://www.mogef.go.kr' },
    { name: '복지로 청소년 한부모 지원 신청', url: 'https://www.bokjiro.go.kr' },
  ],
};
