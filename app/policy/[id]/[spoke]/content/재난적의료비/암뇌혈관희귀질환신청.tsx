import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          암·뇌혈관·심장·희귀질환·중증난치질환·중증화상은
          재난적의료비 지원의 <strong>외래 진료 대상 6개 중증질환</strong>입니다.
          이 질환은 입원뿐 아니라 <strong>외래 진료비도 지원</strong>받을 수 있으며,
          본인부담 의료비의 <strong>50~80%</strong>를 연간 최대 5천만원까지 지원합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        암 등 중증질환은 장기 치료 과정에서 의료비 부담이 극심할 수 있습니다.
        특례 적용 조건과 신청 절차를 미리 파악해 두세요.
      </p>

      <section className="detail-card" id="disease">
        <h2 className="detail-card-head">외래 지원 대상 6개 중증질환</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>질환군</th><th>주요 해당 질환</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>암</strong></td><td>모든 악성 종양</td></tr>
              <tr><td><strong>뇌혈관질환</strong></td><td>뇌졸중, 뇌경색, 뇌출혈 등</td></tr>
              <tr><td><strong>심장질환</strong></td><td>심근경색, 심부전 등 중증 심장질환</td></tr>
              <tr><td><strong>희귀질환</strong></td><td>보건복지부 고시 희귀질환 목록</td></tr>
              <tr><td><strong>중증난치질환</strong></td><td>크론병, 루푸스 등</td></tr>
              <tr><td><strong>중증화상</strong></td><td>신체 표면적 20% 이상 화상 등</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="special">
        <h2 className="detail-card-head">중증질환 특례 지원 내용</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>지원 한도:</strong> 연간 최대 5천만원 (일반 2천만원 대비 확대)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>외래 포함:</strong> 입원뿐 아니라 외래 진료비도 지원 대상
          </div>
          <div className="info-box">
            <strong>지원 비율:</strong> 소득 기준에 따라 본인부담의 50~80%
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="apply">
        <h2 className="detail-card-head">신청 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>병원 내 신청:</strong> 입원·퇴원 병원 의료사회복지사 상담
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>공단 신청:</strong> 국민건강보험공단 지사 방문 또는 nhis.or.kr 온라인
          </div>
          <div className="info-box">
            <strong>신청 기한:</strong> 퇴원일(외래 종료일)로부터 180일 이내
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            신청 자격, 지원 금액, 본인부담상한제 중복 여부까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/catastrophic-medical-expenses" className="btn-cta">
            재난적의료비 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 재난적의료비암뇌혈관희귀질환신청SpokeContent: SpokeData = {
  h1: '재난적의료비 암·뇌혈관·희귀질환 신청, 외래까지 지원되는 6개 중증질환',
  breadcrumb: '암뇌혈관희귀질환신청',
  description:
    '재난적의료비 외래 지원 6개 중증질환: 암·뇌혈관·심장·희귀·중증난치·중증화상. 특례 적용 시 연간 최대 5천만원, 본인부담 50~80% 지원. 퇴원·외래 종료 후 180일 이내 신청.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '희귀질환으로 진단받으면 자동으로 특례가 적용되나요?',
      a: '자동 적용이 아니라 별도 신청이 필요합니다. 희귀질환 진단서 등 관련 서류를 갖춰 국민건강보험공단에 신청하세요.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.nhis.or.kr',
    },
    {
      q: '암 외래 치료 중에도 매달 신청할 수 있나요?',
      a: '외래 진료비는 일정 기간 누적 후 신청하거나 진료 종료 후 신청하는 방식 모두 가능합니다. 단 외래 종료일로부터 180일 이내 신청 기한을 준수해야 합니다.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.nhis.or.kr',
    },
    {
      q: '항암제 비급여 비용도 지원되나요?',
      a: '비급여 의료비 중 일부는 포함되나, 항암 비급여는 심사를 통해 지원 여부가 결정됩니다. 상급병실료 차액, 선택진료비 등은 제외됩니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '5천만원 한도는 평생 한도인가요, 연간 한도인가요?',
      a: '연간 한도입니다. 매년 새로 신청할 수 있으며, 같은 질환으로 여러 해에 걸쳐 지원을 받을 수 있습니다.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.nhis.or.kr',
    },
    {
      q: '의료비 영수증을 모두 모아야 하나요?',
      a: '병원 의료비 납입 영수증과 진료비 세부 내역서를 보관해 두세요. 공단에서 일부 자료는 직접 조회하지만, 영수증 원본을 제출해야 하는 경우도 있습니다.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.nhis.or.kr',
    },
  ],
  sources: [
    { name: '국민건강보험공단', url: 'https://www.nhis.or.kr' },
    { name: '보건복지부', url: 'https://www.mohw.go.kr' },
    { name: '희귀질환헬프라인', url: 'https://helpline.kdca.go.kr' },
  ],
};
