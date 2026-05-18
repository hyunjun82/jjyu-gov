import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      {/* 빠른 답변 */}
      <div className="answer-box">
        <p>
          전국 <strong>158개</strong> 새일센터를 saeil.mogef.go.kr에서 지역별로 찾을 수 있습니다.
          이용 절차는 ① 방문·전화 상담 → ② 진로·취업 계획 수립 →
          ③ 직업훈련 또는 취업 알선 → ④ 취업 후 사후관리 순서로 진행되며,
          모든 서비스는 <strong>무료</strong>입니다.
        </p>
      </div>

      {/* 서론 */}
      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        가까운 새일센터를 찾는 방법부터 처음 방문 시 준비물, 이용 절차까지
        한 번에 정리했습니다. 평일 09:00~18:00에 운영하며 사전 예약 없이도 방문 가능합니다.
      </p>

      {/* H2-1: 센터 찾기 */}
      <section className="detail-card" id="find">
        <h2 className="detail-card-head">가까운 새일센터 찾는 방법</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr>
                <th>방법</th>
                <th>경로</th>
                <th>특징</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>홈페이지 검색</td>
                <td>saeil.mogef.go.kr → 센터 찾기</td>
                <td>지역·시도별 목록 제공</td>
              </tr>
              <tr>
                <td>전화 문의</td>
                <td>여성가족부 ☎1366</td>
                <td>24시간 운영</td>
              </tr>
              <tr>
                <td>포털 검색</td>
                <td>네이버·구글에서 &quot;○○시 새일센터&quot; 검색</td>
                <td>지도+전화번호 바로 확인</td>
              </tr>
              <tr>
                <td>정부24</td>
                <td>gov.kr 로그인 → 복지서비스 → 새일센터</td>
                <td>온라인 신청 가능</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>운영 시간:</strong> 평일 09:00~18:00 (토·일·공휴일 휴무).
            일부 센터는 야간·주말 상담을 운영하니 방문 전 전화로 확인하세요.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      {/* H2-2: 이용 절차 */}
      <section className="detail-card" id="process">
        <h2 className="detail-card-head">새일센터 이용 절차 4단계</h2>
        <div className="detail-card-body">
          <div className="info-box">
            <strong>Step 1 — 초기 상담</strong><br />
            방문 또는 전화로 경력 단절 사유·취업 희망 직종·일정 등을 상담사와 이야기합니다.
            이력서·경력 관련 서류를 미리 준비하면 빠릅니다.
          </div>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>Step 2 — 취업 계획 수립</strong><br />
            상담사와 함께 목표 직종, 훈련 과정 선택, 구직 방향을 설정합니다.
          </div>
          <table className="compare-table" style={{ marginTop: 16 }}>
            <thead>
              <tr>
                <th>단계</th>
                <th>내용</th>
                <th>소요 기간</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>① 초기 상담</td><td>경력·취업 희망 파악</td><td>당일</td></tr>
              <tr><td>② 계획 수립</td><td>목표 직종·훈련 과정 선택</td><td>1~2주</td></tr>
              <tr><td>③ 직업훈련</td><td>무료 훈련 수강</td><td>1~6개월</td></tr>
              <tr><td>④ 취업 알선</td><td>구인 기업 매칭·면접</td><td>1~3개월</td></tr>
              <tr><td>⑤ 사후 관리</td><td>취업 후 6개월 모니터링</td><td>6개월</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>준비물:</strong> 신분증(주민등록증·운전면허증), 이력서(있는 경우),
            경력증명서(있는 경우). 별도 서류 없이 방문 상담도 가능합니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      {/* CTA */}
      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            직업훈련 과정, 새일여성인턴, W-UP 클래스까지 전체 정보를 확인하세요.
          </p>
          <a href="/policy/women-restart-center" className="btn-cta">
            여성새로일하기센터 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 여성새로일하기센터가까운센터찾기이용절차SpokeContent: SpokeData = {
  h1: '여성새로일하기센터 가까운 센터 찾기·이용 절차',
  breadcrumb: '가까운센터찾기이용절차',
  description:
    '전국 158개 새일센터를 saeil.mogef.go.kr에서 찾는 방법과 초기 상담부터 취업 후 사후 관리까지 5단계 이용 절차를 안내합니다. 모든 서비스 무료.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '처음 방문 시 예약이 필요한가요?',
      a: '예약 없이 방문해도 됩니다. 다만, 상담사가 바쁜 시간대에는 대기가 생길 수 있으므로 전화로 방문 시간을 미리 알리면 더 원활합니다.',
      source: '여성가족부 새일센터 안내',
      sourceUrl: 'https://www.mogef.go.kr',
    },
    {
      q: '남성도 새일센터를 이용할 수 있나요?',
      a: '새일센터는 경력단절 여성과 재직 여성을 대상으로 하는 여성 전용 기관입니다. 남성은 고용센터(work.go.kr)를 이용하세요.',
      source: '여성가족부 새일센터 안내',
      sourceUrl: 'https://www.mogef.go.kr',
    },
    {
      q: '거주지가 아닌 다른 지역의 새일센터도 이용할 수 있나요?',
      a: '네. 거주지에 상관없이 전국 어느 센터나 이용 가능합니다. 다만, 취업 알선은 해당 센터가 위치한 지역 구인 기업 중심으로 이루어집니다.',
      source: '여성가족부 새일센터 안내',
      sourceUrl: 'https://www.mogef.go.kr',
    },
    {
      q: '상담 후 반드시 훈련을 받아야 하나요?',
      a: '아닙니다. 훈련 없이 취업 알선만 받을 수도 있고, 훈련만 수강할 수도 있습니다. 이용 서비스는 본인이 선택합니다.',
      source: '여성가족부 새일센터 안내',
      sourceUrl: 'https://www.mogef.go.kr',
    },
    {
      q: '새일센터 서비스는 몇 번까지 이용할 수 있나요?',
      a: '이용 횟수에 제한은 없습니다. 취업 후 재취업이 필요해질 때 다시 이용할 수 있습니다.',
      source: '여성가족부 새일센터 안내',
      sourceUrl: 'https://www.mogef.go.kr',
    },
  ],
  sources: [
    { name: '여성가족부 새일센터 안내', url: 'https://www.mogef.go.kr' },
    { name: '새일센터 홈페이지', url: 'https://saeil.mogef.go.kr' },
  ],
};
