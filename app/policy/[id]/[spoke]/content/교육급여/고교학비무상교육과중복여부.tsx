import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          교육급여 고교 학비는 <strong>고교 무상교육이 적용되지 않는 학교</strong>에 다니는 학생에게만 지원됩니다.
          현재 대부분의 공립 고등학교는 무상교육 적용으로 학비가 없으므로, 사립고 등 무상교육 미적용 학교 학생에게
          입학금·수업료·교과서비를 지원합니다.
          <strong>교육활동지원비는 무상교육 여부와 관계없이 모든 고교생에게 지원됩니다.</strong>
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        고교 무상교육은 2021년부터 전면 시행되어 대부분의 고교에서 수업료·입학금·교과서비가 무료입니다.
        교육급여 학비 지원은 무상교육 미적용 사립고 등을 대상으로 하며,
        교육활동지원비(860,000원)는 학교 유형에 관계없이 지원됩니다.
      </p>

      <section className="detail-card" id="compare">
        <h2 className="detail-card-head">고교 무상교육 vs 교육급여 학비 지원 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>고교 무상교육</th><th>교육급여 학비 지원</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>대상</strong></td><td>전국 고등학생 (무상교육 적용 학교)</td><td>교육급여 수급 고교생 중 무상교육 미적용 학교</td></tr>
              <tr><td><strong>지원 항목</strong></td><td>수업료·입학금·교과서비</td><td>입학금·수업료·교과서비</td></tr>
              <tr><td><strong>소득 기준</strong></td><td>없음 (전체 고교생)</td><td>기준중위소득 50% 이하</td></tr>
              <tr><td><strong>신청 여부</strong></td><td>자동 적용</td><td>별도 신청 필요</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="activity">
        <h2 className="detail-card-head">교육활동지원비는 항상 받을 수 있나요?</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>교육활동지원비(860,000원):</strong> 무상교육 적용 여부와 무관하게 교육급여 수급 고교생 전원 지원
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>학비(수업료 등):</strong> 무상교육 미적용 학교 재학 시에만 추가 지원
          </div>
          <div className="info-box">
            <strong>중복 수혜:</strong> 무상교육 + 교육활동지원비 동시 수혜 가능 (학비는 중복 없음)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="types">
        <h2 className="detail-card-head">학교 유형별 지원 정리</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>학교 유형</th><th>교육활동지원비</th><th>학비 지원</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>공립 고등학교 (무상교육 적용)</strong></td><td>860,000원 지원</td><td>무상교육 적용 → 별도 지원 없음</td></tr>
              <tr><td><strong>사립 고등학교 (무상교육 미적용)</strong></td><td>860,000원 지원</td><td>입학금·수업료·교과서비 추가 지원</td></tr>
              <tr><td><strong>특목고·자사고 (무상교육 미적용)</strong></td><td>860,000원 지원</td><td>입학금·수업료·교과서비 추가 지원</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            지원 금액, 소득 기준, 신청 방법까지<br />
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

export const 교육급여고교학비무상교육과중복여부SpokeContent: SpokeData = {
  h1: '교육급여 고교 학비 지원, 고교 무상교육과 중복 여부와 사립고 추가 지원 기준',
  breadcrumb: '고교학비무상교육과중복여부',
  description:
    '교육급여 고교: 무상교육 적용 공립고는 학비 별도 지원 없고 교육활동지원비(860,000원)만 지급. 사립고 등 무상교육 미적용 학교는 입학금·수업료·교과서비 추가 지원. 교육활동지원비는 학교 유형 무관.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '공립 고등학교에 다니면 교육급여를 신청해도 학비를 받을 수 없나요?',
      a: '공립 고등학교는 고교 무상교육이 적용되어 학비가 무료이므로 교육급여 학비 지원은 추가로 받을 수 없습니다. 하지만 교육활동지원비(연 860,000원)는 별도로 받을 수 있습니다.',
      source: '교육부',
      sourceUrl: 'https://www.moe.go.kr',
    },
    {
      q: '자사고·특목고도 무상교육이 안 되나요?',
      a: '자율형사립고·특목고 등은 학비가 높고 무상교육 미적용 학교인 경우가 있습니다. 이 경우 교육급여 수급자이면 학비도 추가 지원받을 수 있습니다. 해당 학교 행정실에서 확인하세요.',
      source: '교육부',
      sourceUrl: 'https://www.moe.go.kr',
    },
    {
      q: '고교 무상교육은 언제부터 적용됐나요?',
      a: '고교 무상교육은 2019년 3학년부터 단계적으로 시행되어 2021년부터 전 학년에 적용됩니다. 대부분의 공립·일반 사립고에 적용되며, 무상교육 적용 여부는 학교에서 확인 가능합니다.',
      source: '교육부',
      sourceUrl: 'https://www.moe.go.kr',
    },
    {
      q: '교육활동지원비를 학원비에만 쓸 수 있나요?',
      a: '교육활동지원비는 교육 관련 다양한 용도에 사용할 수 있는 바우처입니다. 학용품·도서·교복·학원비 등에 쓸 수 있으며, 가맹점 범위는 바우처 카드사(☎1599-2000)에서 확인하세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '중학교는 무상교육이 적용되나요?',
      a: '네. 중학교도 무상교육이 적용됩니다. 중학생의 경우 교육급여 교육활동지원비(699,000원)는 받을 수 있고, 학비는 이미 무상이므로 별도 지원이 없습니다.',
      source: '교육부',
      sourceUrl: 'https://www.moe.go.kr',
    },
  ],
  sources: [
    { name: '보건복지부 교육급여', url: 'https://blog.bokjiro.go.kr/1810' },
    { name: '교육부 고교 무상교육', url: 'https://www.moe.go.kr' },
  ],
};
