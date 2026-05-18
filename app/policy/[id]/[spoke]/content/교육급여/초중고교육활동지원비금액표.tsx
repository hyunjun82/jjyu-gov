import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          교육급여 교육활동지원비는 <strong>초등학교 502,000원·중학교 699,000원·고등학교 860,000원</strong>을
          연 1회 바우처(이용권) 방식으로 지원합니다.
          기준중위소득 50% 이하 가구 학생이 대상이며,
          신용·체크카드 또는 선불카드로 사용합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        교육활동지원비는 학용품·교복·학원비·도서 등 교육 관련 용도에 사용할 수 있는 바우처입니다.
        고교의 경우 교육활동지원비 외에 학비(입학금·수업료·교과서비)도 별도 지원됩니다.
      </p>

      <section className="detail-card" id="amount">
        <h2 className="detail-card-head">2026년 교육활동지원비 금액 (학교급별)</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>학교급</th><th>지원금액</th><th>지급 주기</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>초등학교</strong></td><td>502,000원</td><td>연 1회</td></tr>
              <tr><td><strong>중학교</strong></td><td>699,000원</td><td>연 1회</td></tr>
              <tr><td><strong>고등학교</strong></td><td>860,000원</td><td>연 1회</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="how">
        <h2 className="detail-card-head">지원 방식</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>바우처 방식:</strong> 신용·체크카드, 선불카드, 간편결제 이용권으로 지급
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>사용처:</strong> 교육 관련 품목 (학용품·교복·도서·학원비 등)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>지급 시기:</strong> 신청 처리 완료 후 연 1회 지급
          </div>
          <div className="info-box">
            <strong>고교 추가:</strong> 무상교육 미적용 고교는 학비(입학금·수업료·교과서비) 별도 지원
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="target">
        <h2 className="detail-card-head">지원 대상</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>소득 기준:</strong> 기준중위소득 50% 이하 가구
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>학생 기준:</strong> 초·중·고등학교 재학생 (해당 가구 학생 전원)
          </div>
          <div className="info-box">
            <strong>문의:</strong> 교육비 중앙상담센터 ☎1544-9654 / 복지상담 ☎129
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            소득 기준, 신청 방법, 고교 무상교육 중복 여부까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/education-benefit" className="btn-cta">
            교육급여 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 교육급여초중고교육활동지원비금액표SpokeContent: SpokeData = {
  h1: '교육급여 교육활동지원비 금액, 초 502,000원·중 699,000원·고 860,000원 바우처',
  breadcrumb: '초중고교육활동지원비금액표',
  description:
    '2026 교육급여 교육활동지원비: 초 502,000원·중 699,000원·고 860,000원, 연 1회 바우처 지급. 기준중위소득 50% 이하 가구 초중고 재학생. 신용·체크카드·선불카드 사용. ☎1544-9654.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '교육활동지원비로 학원비를 낼 수 있나요?',
      a: '바우처 지정 가맹점에 해당 학원이 등록되어 있으면 학원비로도 사용할 수 있습니다. 구체적인 사용 가맹점은 바우처 카드사 또는 ☎1599-2000에서 확인하세요.',
      source: '보건복지부',
      sourceUrl: 'https://blog.bokjiro.go.kr/1810',
    },
    {
      q: '형제자매가 모두 중학생이면 각각 699,000원씩 받나요?',
      a: '네. 교육급여는 가구 내 해당 학교급별로 학생 1인당 지원됩니다. 중학생 형제 2명이면 699,000원×2 = 1,398,000원을 받을 수 있습니다.',
      source: '보건복지부',
      sourceUrl: 'https://blog.bokjiro.go.kr/1810',
    },
    {
      q: '연도 중에 초등학교에서 중학교로 올라가면 금액이 바뀌나요?',
      a: '교육급여는 해당 학년도 학교급을 기준으로 지급됩니다. 3월 새 학년도 기준으로 학교급이 결정되어 지급 금액이 적용됩니다.',
      source: '보건복지부',
      sourceUrl: 'https://blog.bokjiro.go.kr/1810',
    },
    {
      q: '바우처 카드를 분실하면 어떻게 하나요?',
      a: '바우처 카드 분실 시 카드사(이용 카드사 고객센터)에 분실 신고 후 재발급 신청을 하면 됩니다. 바우처 잔액은 재발급 카드로 이전됩니다.',
      source: '보건복지부',
      sourceUrl: 'https://blog.bokjiro.go.kr/1810',
    },
    {
      q: '올해 신청을 못 했으면 내년에 소급해서 받을 수 있나요?',
      a: '교육급여는 소급 지원이 되지 않습니다. 당해 연도에 신청하여 지원받아야 합니다. 다음 연도에 다시 신청하면 그때부터 지원이 시작됩니다.',
      source: '교육부',
      sourceUrl: 'https://www.moe.go.kr',
    },
  ],
  sources: [
    { name: '보건복지부 교육급여', url: 'https://blog.bokjiro.go.kr/1810' },
    { name: '교육비 원클릭', url: 'https://oneclick.neis.go.kr' },
  ],
};
