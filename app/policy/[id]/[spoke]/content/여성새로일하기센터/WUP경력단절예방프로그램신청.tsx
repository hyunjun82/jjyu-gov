import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      {/* 빠른 답변 */}
      <div className="answer-box">
        <p>
          W-UP(Woman-UP) 클래스는 <strong>재직 중인 여성</strong>을 위한 경력단절 예방 프로그램입니다.
          자기개발·직무역량·일·가정 양립 관련 교육을 <strong>무료</strong>로 제공하며,
          새일센터 홈페이지(saeil.mogef.go.kr) 또는 방문 상담으로 신청할 수 있습니다.
        </p>
      </div>

      {/* 서론 */}
      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        경력단절이 발생하기 전에 미리 역량을 키워 직장을 유지하는 것이 목표입니다.
        아래에서 W-UP 클래스 대상, 교육 내용, 신청 방법을 확인하세요.
      </p>

      {/* H2-1: 프로그램 개요 */}
      <section className="detail-card" id="overview">
        <h2 className="detail-card-head">W-UP 클래스 주요 내용</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr>
                <th>구분</th>
                <th>내용</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>대상</td>
                <td>현재 재직 중인 여성 (경력단절 전 예방 목적)</td>
              </tr>
              <tr>
                <td>교육 내용</td>
                <td>자기개발, 직무역량강화, 일·가정 양립</td>
              </tr>
              <tr>
                <td>운영 기관</td>
                <td>전국 새일센터 및 협력 기관</td>
              </tr>
              <tr>
                <td>수강료</td>
                <td><strong>무료</strong></td>
              </tr>
              <tr>
                <td>신청 방법</td>
                <td>새일센터 홈페이지 또는 방문 신청</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>W-UP의 목표:</strong> 임신·출산·육아를 이유로 퇴직하지 않도록
            재직 여성의 역량을 강화하고 일·가정 양립을 지원하는 것이 핵심입니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      {/* H2-2: 세부 교육 */}
      <section className="detail-card" id="curriculum">
        <h2 className="detail-card-head">W-UP 교육 분야별 세부 내용</h2>
        <div className="detail-card-body">
          <div className="info-box">
            <strong>자기개발 교육</strong><br />
            커뮤니케이션 스킬, 리더십, 문서 작성, 프레젠테이션 기술 등
            직장 내 성장에 필요한 역량을 키웁니다.
          </div>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>일·가정 양립 교육</strong><br />
            육아휴직 활용법, 유연근무제 신청 방법, 직장 내 갈등 해결,
            워킹맘 네트워크 구축 등 실용적인 내용 위주로 구성됩니다.
          </div>
          <table className="compare-table" style={{ marginTop: 16 }}>
            <thead>
              <tr>
                <th>교육 유형</th>
                <th>세부 주제</th>
                <th>형태</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>자기개발</td>
                <td>리더십, 커뮤니케이션, 문서 작성</td>
                <td>집체·온라인</td>
              </tr>
              <tr>
                <td>직무역량</td>
                <td>업무 자동화, 데이터 분석, 디지털 전환</td>
                <td>집체·실습</td>
              </tr>
              <tr>
                <td>일·가정 양립</td>
                <td>육아휴직 활용, 유연근무, 갈등 해결</td>
                <td>집체·워크샵</td>
              </tr>
              <tr>
                <td>네트워킹</td>
                <td>워킹맘 커뮤니티, 멘토링</td>
                <td>그룹 활동</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      {/* CTA */}
      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            새일센터 직업훈련, 인턴 연계, 가까운 센터 찾기까지 전체 정보를 확인하세요.
          </p>
          <a href="/policy/women-restart-center" className="btn-cta">
            여성새로일하기센터 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 여성새로일하기센터WUP경력단절예방프로그램신청SpokeContent: SpokeData = {
  h1: '여성새로일하기센터 W-UP클래스 경력단절예방 신청법',
  breadcrumb: 'WUP경력단절예방프로그램신청',
  description:
    '새일센터 W-UP 클래스는 재직 여성의 경력단절을 예방하는 무료 교육 프로그램입니다. 자기개발·직무역량·일·가정 양립 교육을 제공하며 saeil.mogef.go.kr에서 신청.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: 'W-UP 클래스는 경력이 단절된 분도 받을 수 있나요?',
      a: 'W-UP 클래스는 현재 재직 중인 여성의 경력단절 예방을 위한 프로그램입니다. 이미 경력이 단절된 분은 새일센터의 직업훈련·취업 알선 서비스를 이용하세요.',
      source: '여성가족부 새일센터 W-UP 안내',
      sourceUrl: 'https://www.mogef.go.kr',
    },
    {
      q: 'W-UP 교육을 온라인으로도 들을 수 있나요?',
      a: '일부 과정은 온라인으로 제공됩니다. 새일센터 홈페이지(saeil.mogef.go.kr)에서 온라인 과정을 검색하거나, 가까운 센터에 문의하세요.',
      source: '여성가족부 새일센터 W-UP 안내',
      sourceUrl: 'https://www.mogef.go.kr',
    },
    {
      q: 'W-UP 클래스를 수강하면 수료증을 받을 수 있나요?',
      a: '과정별로 수료 기준을 충족하면 수료증이 발급됩니다. 이직이나 내부 승진 시 활용할 수 있으니 수료 기준을 미리 확인하고 이수하세요.',
      source: '여성가족부 새일센터 W-UP 안내',
      sourceUrl: 'https://www.mogef.go.kr',
    },
    {
      q: '회사에서 지원하는 교육과 W-UP을 동시에 받을 수 있나요?',
      a: '네. W-UP 클래스는 개인 신청 기반 무료 교육이므로 직장 내 교육과 병행 수강이 가능합니다. 시간대가 맞지 않으면 온라인 과정을 선택하세요.',
      source: '여성가족부 새일센터 W-UP 안내',
      sourceUrl: 'https://www.mogef.go.kr',
    },
    {
      q: 'W-UP 신청 후 대기가 길 수 있나요?',
      a: '인기 과정은 조기 마감될 수 있습니다. 새일센터 홈페이지에서 개설 일정을 확인하고 일정이 맞으면 바로 신청하는 것을 권장합니다.',
      source: '여성가족부 새일센터 W-UP 안내',
      sourceUrl: 'https://www.mogef.go.kr',
    },
  ],
  sources: [
    { name: '여성가족부 새일센터 안내', url: 'https://www.mogef.go.kr' },
    { name: '새일센터 홈페이지', url: 'https://saeil.mogef.go.kr' },
  ],
};
