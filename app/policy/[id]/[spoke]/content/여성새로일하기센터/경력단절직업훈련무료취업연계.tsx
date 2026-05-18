import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      {/* 빠른 답변 */}
      <div className="answer-box">
        <p>
          여성새로일하기센터(새일센터)는 전국 <strong>158개소</strong>에서 운영되며,
          임신·출산·육아로 경력이 단절된 여성에게{' '}
          <strong>무료 직업훈련</strong>과 취업 알선을 제공합니다.
          사무직, IT, 미용, 요리, 보육 등 다양한 과정이 있으며
          훈련 후 새일여성인턴으로 연계됩니다.
        </p>
      </div>

      {/* 서론 */}
      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        경력 단절 후 재취업이 막막하다면 새일센터 직업훈련이 출발점이 될 수 있습니다.
        무료로 수강할 수 있고 취업 연계까지 이어지므로, 과정 종류와 신청 방법을 먼저 확인하세요.
      </p>

      {/* H2-1: 훈련 과정 */}
      <section className="detail-card" id="training">
        <h2 className="detail-card-head">새일센터 직업훈련 과정 종류</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr>
                <th>분야</th>
                <th>대표 과정</th>
                <th>훈련 기간</th>
                <th>수강료</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>사무·행정</td>
                <td>컴퓨터 활용, 회계, 사무 자동화</td>
                <td>1~3개월</td>
                <td>무료</td>
              </tr>
              <tr>
                <td>IT·디지털</td>
                <td>웹 디자인, SNS 마케팅, 데이터 분석</td>
                <td>2~4개월</td>
                <td>무료</td>
              </tr>
              <tr>
                <td>미용·뷰티</td>
                <td>헤어, 피부, 네일, 메이크업</td>
                <td>2~6개월</td>
                <td>무료</td>
              </tr>
              <tr>
                <td>요리·제과</td>
                <td>한식 조리, 제과·제빵, 바리스타</td>
                <td>1~3개월</td>
                <td>무료</td>
              </tr>
              <tr>
                <td>보육·복지</td>
                <td>보육교사, 요양보호사, 사회복지사</td>
                <td>3~6개월</td>
                <td>무료</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>과정 안내:</strong> 센터별로 운영 과정이 다릅니다.
            가까운 새일센터 또는 새일센터 홈페이지(saeil.mogef.go.kr)에서
            지역·과정명으로 검색하세요.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      {/* H2-2: 취업 연계 */}
      <section className="detail-card" id="employment">
        <h2 className="detail-card-head">훈련 후 취업 연계 과정</h2>
        <div className="detail-card-body">
          <div className="info-box">
            <strong>새일여성인턴 연계</strong><br />
            직업훈련 수료 후 새일여성인턴 프로그램과 연계됩니다.
            인턴 기간(3개월) 동안 기업에서 실무를 경험하고,
            정규직 전환 시 추가 지원금도 받을 수 있습니다.
          </div>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>취업 알선 서비스</strong><br />
            상담사가 1:1로 취업 목표를 설정하고, 이력서·면접 컨설팅,
            구인 기업 매칭까지 지원합니다. 취업 후에도 6개월간 사후 관리를 받을 수 있습니다.
          </div>
          <table className="compare-table" style={{ marginTop: 16 }}>
            <thead>
              <tr>
                <th>단계</th>
                <th>내용</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>①상담</td><td>진로 상담, 취업 계획 수립</td></tr>
              <tr><td>②훈련</td><td>무료 직업훈련 수강 (1~6개월)</td></tr>
              <tr><td>③알선</td><td>구인 기업 매칭, 이력서·면접 지원</td></tr>
              <tr><td>④인턴</td><td>새일여성인턴 3개월 실무 경험</td></tr>
              <tr><td>⑤취업</td><td>정규직 전환 + 추가 지원금</td></tr>
              <tr><td>⑥사후관리</td><td>취업 후 6개월 관리</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      {/* CTA */}
      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            새일센터 위치, W-UP 클래스, 인턴 급여 등 전체 정보를 확인하세요.
          </p>
          <a href="/policy/women-restart-center" className="btn-cta">
            여성새로일하기센터 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 여성새로일하기센터경력단절직업훈련무료취업연계SpokeContent: SpokeData = {
  h1: '여성새로일하기센터 경력단절여성 직업훈련 무료, 취업 연계 과정',
  breadcrumb: '경력단절직업훈련무료취업연계',
  description:
    '여성새로일하기센터(새일센터) 무료 직업훈련 과정(사무·IT·미용·보육 등)과 취업 연계 절차를 안내합니다. 전국 158개소 운영, 임신·출산·육아 경력단절 여성 대상.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '새일센터 직업훈련은 정말 무료인가요?',
      a: '네. 새일센터에서 운영하는 직업훈련은 수강료가 무료입니다. 다만, 실습 재료비 등 일부 개인 부담이 발생할 수 있으니 등록 전 센터에 확인하세요.',
      source: '여성가족부 새일센터 안내',
      sourceUrl: 'https://www.mogef.go.kr',
    },
    {
      q: '경력이 단절된 지 오래돼도 신청할 수 있나요?',
      a: '네. 경력 단절 기간에 제한이 없습니다. 임신·출산·육아로 경력이 단절된 여성이라면 단절 기간과 무관하게 새일센터 서비스를 이용할 수 있습니다.',
      source: '여성가족부 새일센터 안내',
      sourceUrl: 'https://www.mogef.go.kr',
    },
    {
      q: '훈련 기간 동안 생활비 지원도 받을 수 있나요?',
      a: '새일센터 직업훈련 자체로는 생활비 지원이 없습니다. 단, 고용보험 가입 이력이 있다면 내일배움카드와 병행하거나 실업급여 수급 중 훈련 참여가 가능한지 센터 상담사에게 확인하세요.',
      source: '여성가족부 새일센터 안내',
      sourceUrl: 'https://www.mogef.go.kr',
    },
    {
      q: '훈련만 받고 취업 알선은 받지 않아도 되나요?',
      a: '네. 훈련과 취업 알선은 별개입니다. 훈련만 수강할 수도 있고, 취업 상담만 받을 수도 있습니다. 이용 서비스는 상담 시 본인이 선택할 수 있습니다.',
      source: '여성가족부 새일센터 안내',
      sourceUrl: 'https://www.mogef.go.kr',
    },
    {
      q: '온라인으로 수강할 수 있는 과정이 있나요?',
      a: '일부 과정은 온라인 또는 혼합(온·오프라인) 방식으로 운영됩니다. 새일센터 홈페이지(saeil.mogef.go.kr)에서 &quot;온라인&quot; 필터로 검색하거나 가까운 센터에 문의하세요.',
      source: '여성가족부 새일센터 안내',
      sourceUrl: 'https://www.mogef.go.kr',
    },
  ],
  sources: [
    { name: '여성가족부 새일센터 안내', url: 'https://www.mogef.go.kr' },
    { name: '새일센터 홈페이지', url: 'https://saeil.mogef.go.kr' },
  ],
};
