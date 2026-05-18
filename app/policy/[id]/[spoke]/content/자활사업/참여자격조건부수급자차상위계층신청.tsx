import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          자활사업은 <strong>조건부수급자</strong>(생계급여 조건 부여 대상)가 의무 참여 대상이며,
          <strong>차상위계층·일반수급자</strong>도 희망하면 참여할 수 있습니다.
          참여 신청은 주민센터 또는 지역자활센터를 통해 합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        자활사업은 근로 능력이 있는 저소득층이 자립할 수 있도록
        일자리·훈련·취업 연계를 지원하는 제도입니다.
        참여하면 근로유지형·사회서비스형·시장진입형 등 유형에 따라 급여를 받을 수 있습니다.
      </p>

      <section className="detail-card" id="target">
        <h2 className="detail-card-head">참여자격 대상별 기준</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>대상</th><th>기준</th><th>참여 유형</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>조건부수급자</strong></td><td>생계급여 수급자 중 근로 능력 있는 자</td><td>의무 참여</td></tr>
              <tr><td><strong>일반수급자</strong></td><td>생계·의료급여 수급자 (참여 희망자)</td><td>희망 참여</td></tr>
              <tr><td><strong>차상위계층</strong></td><td>소득인정액 중위소득 50% 이하 비수급자</td><td>희망 참여</td></tr>
              <tr><td><strong>자활급여특례자</strong></td><td>자활사업 참가 후 소득 초과 수급자</td><td>특례 참여</td></tr>
              <tr><td><strong>시설수급자</strong></td><td>복지시설 입소 생계·의료급여 수급자</td><td>희망 참여</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="apply">
        <h2 className="detail-card-head">신청 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>조건부수급자:</strong> 주민센터에서 자활 참여 조건 부여 → 지역자활센터 연계
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>차상위·희망 참여자:</strong> 주민센터 신청 → 지역자활센터 배치
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>문의:</strong> 주소지 읍·면·동 주민센터 또는 지역자활센터
          </div>
          <div className="info-box">
            <strong>자활정보시스템:</strong> 복지로(bokjiro.go.kr)에서 온라인 신청 가능
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="exclude">
        <h2 className="detail-card-head">참여 제외 기준</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>근로 무능력자:</strong> 만 65세 이상, 중증 장애인 등 (희망 시 예외 가능)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>임신·육아 중:</strong> 임신 중이거나 영아(3세 미만) 양육 중인 경우 제외 가능
          </div>
          <div className="info-box">
            <strong>소득 기준 초과:</strong> 차상위 범위를 벗어난 비수급자
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            자활근로 급여, 사업 종류, 수급 탈락 여부까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/self-sufficiency-program" className="btn-cta">
            자활사업 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 자활사업참여자격조건부수급자차상위계층신청SpokeContent: SpokeData = {
  h1: '자활사업 참여자격, 조건부수급자·차상위계층 해당 여부와 신청',
  breadcrumb: '참여자격조건부수급자차상위계층신청',
  description:
    '자활사업 참여자격: 조건부수급자(의무)·일반수급자·차상위계층·자활급여특례자(희망). 주민센터·지역자활센터 신청. 임신·3세미만 육아 중·65세 이상은 제외 가능.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '조건부수급자가 자활에 참여하지 않으면 어떻게 되나요?',
      a: '정당한 이유 없이 자활사업 참여를 거부하면 생계급여가 중지될 수 있습니다. 참여 거부 전에 담당 공무원과 충분히 상담하세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '차상위계층인데 자활에 참여하고 싶으면 어떻게 신청하나요?',
      a: '주민센터 또는 지역자활센터에 희망 참여를 신청하면 됩니다. 자격 확인 후 적합한 자활 프로그램에 배치됩니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '65세 이상도 참여할 수 있나요?',
      a: '원칙적으로 근로 무능력자에 해당하지만, 희망하는 경우 일부 프로그램에 참여할 수 있습니다. 주민센터에서 상담받으세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '자활사업에 참여하면 기초생활수급이 유지되나요?',
      a: '자활사업 참여로 발생하는 소득은 일정 부분 소득인정액에서 공제하여 수급 자격 유지를 돕습니다. 단, 소득이 일정 기준 이상이 되면 수급 탈락할 수 있으므로 담당자에게 확인하세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '지역자활센터는 어디에 있나요?',
      a: '전국 시·군·구에 지역자활센터가 설치되어 있습니다. 주소지 주민센터에 문의하면 관할 자활센터를 안내받을 수 있습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
  ],
  sources: [
    { name: '보건복지부 자활사업', url: 'https://www.mohw.go.kr' },
    { name: '2026년 자활사업 안내 PDF', url: 'https://angelsitter.co.kr/board.view.php?board=bbs&no=2038' },
  ],
};
