import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          아동급식카드는 <strong>18세 미만 취학·미취학 아동</strong> 중 보호자가 식사를 제공하기 어려운
          결식 우려 아동이 대상입니다. <strong>기준 중위소득 52% 이하</strong> 가구나
          기초생활수급자, 한부모가족, 차상위계층 아동이 해당됩니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        아동급식카드(지역에 따라 '꿈나무카드' 등으로 불림)는 결식 우려 아동에게
        학기 중 토·공휴일과 방학 중 중식을 지원합니다. 지역별로 지원 금액과 카드 이름이 다를 수 있습니다.
      </p>

      <section className="detail-card" id="target">
        <h2 className="detail-card-head">지원 대상 기준</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>대상</th><th>세부 기준</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>국민기초생활수급자</strong></td><td>생계·의료·주거·교육급여 수급 아동</td></tr>
              <tr><td><strong>차상위계층</strong></td><td>중위소득 50% 이하 비수급자</td></tr>
              <tr><td><strong>한부모가족</strong></td><td>한부모가족지원법 지원 대상 아동</td></tr>
              <tr><td><strong>긴급복지 대상</strong></td><td>긴급복지지원 수급 가구 아동</td></tr>
              <tr><td><strong>중위소득 52% 이하</strong></td><td>소득인정액이 기준 중위소득 52% 이하</td></tr>
              <tr><td><strong>그 외</strong></td><td>담당자 판단으로 결식 우려 인정 시 지원 가능</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="age">
        <h2 className="detail-card-head">연령 기준</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>기본 대상:</strong> 18세 미만 아동 (취학·미취학 모두 포함)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>고등학생:</strong> 고등학교 재학 중이라면 18세 이상도 지원 가능 (학교 졸업 전까지)
          </div>
          <div className="info-box">
            <strong>영유아:</strong> 보육시설 미이용 영유아도 결식 우려 시 지원 가능
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="exclude">
        <h2 className="detail-card-head">지원 제외 대상</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>학교 급식 이용 아동:</strong> 학기 중 학교에서 급식 제공받는 경우 중복 불가 (학기 중 평일)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>소득·재산 기준 초과:</strong> 중위소득 52% 초과 가구
          </div>
          <div className="info-box">
            <strong>기관 입소 아동:</strong> 아동복지시설 등 급식이 제공되는 시설 거주 아동
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            신청방법, 사용처, 방학 중 이용 안내까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/child-meal-card" className="btn-cta">
            아동급식카드 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 아동급식카드지원대상결식우려아동기준중위소득SpokeContent: SpokeData = {
  h1: '아동급식카드 지원대상, 결식우려 아동 기준과 중위소득 52% 기준',
  breadcrumb: '지원대상결식우려아동기준중위소득',
  description:
    '아동급식카드 대상: 18세 미만 결식우려 아동. 기초수급·차상위·한부모·긴급복지·중위소득 52% 이하. 학기 중 학교급식 이용 아동은 평일 중복 불가. 복지로·주민센터 신청.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '중위소득 52%가 얼마인가요?',
      a: '2026년 기준 4인 가구 중위소득 52%는 약 299만원 수준입니다. 정확한 기준은 매년 변동되므로 주민센터 또는 복지로에서 확인하세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '한부모가정 아동도 자동으로 지원받나요?',
      a: '한부모가족지원법 지원 대상으로 등록된 경우 아동급식카드 지원 대상에 해당됩니다. 별도 신청이 필요하니 주민센터에서 신청하세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '아동이 어린이집에 다니면 급식카드를 받을 수 있나요?',
      a: '어린이집 이용 아동은 보육료 지원을 통해 급식이 제공됩니다. 어린이집을 다니지 않는 결식 우려 아동은 급식카드 신청이 가능합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '소득은 괜찮은데 부모가 방임 상태라면 지원받을 수 있나요?',
      a: '소득·재산 기준 외에도 담당자 판단으로 결식 우려가 인정되면 지원 가능합니다. 방임 등 특수한 상황은 주민센터에서 상담을 받으세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '18세 고등학생도 받을 수 있나요?',
      a: '고등학교 재학 중이라면 18세 이상도 졸업 전까지 지원받을 수 있습니다. 졸업 후에는 지원이 종료됩니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
  ],
  sources: [
    { name: '정부24 아동급식카드 신청', url: 'https://www.gov.kr/portal/service/serviceInfo/542000000512' },
    { name: '복지로 아동급식카드', url: 'https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveTWAT52011M.do?wlfareInfoId=WLF00003999' },
  ],
};
