import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          쌍둥이 이상 다태아 출산, 셋째아 이상 출산,
          희귀난치질환 산모, 장애인 산모는
          <strong>소득 기준(중위소득 150%)을 초과</strong>해도
          산모신생아 건강관리 서비스를 지원받을 수 있는 <strong>예외 대상</strong>입니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        예외 대상에 해당하면 서비스 기간도 늘어나고,
        소득 제한 없이 지원을 받을 수 있어 꼭 미리 확인해야 합니다.
      </p>

      <section className="detail-card" id="exception">
        <h2 className="detail-card-head">예외 지원 대상 유형</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>유형</th><th>소득 기준 예외</th><th>서비스 기간</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>쌍태아(쌍둥이)</strong></td><td>소득 기준 예외</td><td>10일</td></tr>
              <tr><td><strong>삼태아 이상</strong></td><td>소득 기준 예외</td><td>15일</td></tr>
              <tr><td><strong>셋째아 이상</strong></td><td>소득 기준 예외</td><td>15일</td></tr>
              <tr><td><strong>희귀난치질환 산모</strong></td><td>소득 기준 예외</td><td>표준 기간 + 연장 가능</td></tr>
              <tr><td><strong>장애인 산모</strong></td><td>소득 기준 예외</td><td>표준 기간 + 연장 가능</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="rare">
        <h2 className="detail-card-head">희귀난치질환 적용 기준</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>대상:</strong> 보건복지부 고시 희귀질환 목록 해당 산모
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>확인 방법:</strong> 희귀질환헬프라인(helpline.kdca.go.kr)에서 목록 확인 가능
          </div>
          <div className="info-box">
            <strong>필요 서류:</strong> 희귀질환 진단서 또는 의사 소견서
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="apply">
        <h2 className="detail-card-head">예외 대상 신청 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>신청처:</strong> 복지로(bokjiro.go.kr) 온라인 또는 주민센터 방문
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>예외 증빙:</strong> 다태아 출생증명서, 희귀질환 진단서, 장애인 등록증 등
          </div>
          <div className="info-box">
            <strong>신청 기한:</strong> 출산 예정일 40일 전~출산 후 60일 이내
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            본인부담금, 신청 기간, 산후도우미 비용 비교까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/maternal-newborn-care" className="btn-cta">
            산모신생아 건강관리 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 산모신생아건강관리쌍둥이희귀질환예외지원SpokeContent: SpokeData = {
  h1: '산모신생아 건강관리 쌍둥이·희귀질환 예외 지원, 소득 기준 초과해도 가능',
  breadcrumb: '쌍둥이희귀질환예외지원',
  description:
    '산모신생아 건강관리 예외 지원: 쌍태아(10일), 삼태아 이상(15일), 셋째아 이상(15일), 희귀난치질환·장애인 산모 소득 기준 예외. 희귀질환 진단서·장애인 등록증 지참 신청.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '중위소득 150%를 초과해도 쌍둥이 출산이면 지원받을 수 있나요?',
      a: '네, 쌍태아(쌍둥이) 이상 출산은 소득 기준 예외 대상으로 중위소득과 관계없이 지원받을 수 있습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.socialservice.or.kr',
    },
    {
      q: '희귀질환 목록은 어떻게 확인하나요?',
      a: '희귀질환헬프라인(helpline.kdca.go.kr) 또는 보건복지부 희귀질환 고시에서 확인할 수 있습니다. 의사 소견서로 증빙하면 됩니다.',
      source: '보건복지부',
      sourceUrl: 'https://helpline.kdca.go.kr',
    },
    {
      q: '장애인 산모는 어떤 장애 등급부터 해당되나요?',
      a: '장애인복지법에 따른 등록 장애인이면 장애 등급에 관계없이 예외 대상에 해당합니다. 장애인 등록증을 지참해 신청하세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.socialservice.or.kr',
    },
    {
      q: '쌍둥이 예외 대상이면 본인부담금도 없나요?',
      a: '소득 기준 예외로 지원은 받을 수 있지만, 본인부담금은 소득 구간에 따라 여전히 부과될 수 있습니다. 다만 기초수급자라면 전액 지원됩니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.socialservice.or.kr',
    },
    {
      q: '셋째아 이상 출산이면 별도 서류가 필요한가요?',
      a: '가족관계증명서(셋째아 이상 확인용) 또는 출생증명서를 제출하면 됩니다. 주민센터 또는 복지로에서 확인 후 신청하세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.socialservice.or.kr',
    },
  ],
  sources: [
    { name: '사회서비스 전자바우처', url: 'https://www.socialservice.or.kr' },
    { name: '보건복지부', url: 'https://www.mohw.go.kr' },
    { name: '희귀질환헬프라인', url: 'https://helpline.kdca.go.kr' },
  ],
};
