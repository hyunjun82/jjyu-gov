import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          의료급여 노인 틀니·임플란트의 본인부담률은
          <strong>1종 수급자 5%, 2종 수급자 15%</strong>입니다.
          일반 건강보험 가입자의 본인부담률 30%에 비해 크게 낮으며,
          특히 1종 수급자는 6분의 1 수준으로 저렴하게 치과 보철을 받을 수 있습니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        의료급여 1종·2종 구분은 시·군·구청 또는 정부24(gov.kr)에서 의료급여 자격 확인서를 발급받아 확인합니다.
        사전 등록 없이 시술받으면 전액 본인부담이므로 시술 전 반드시 등록하세요.
      </p>

      <section className="detail-card" id="compare">
        <h2 className="detail-card-head">본인부담률 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>구분</th><th>대상</th><th>본인부담률</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>의료급여 1종</strong></td><td>근로 무능력·중증질환·국가유공자 등</td><td>5%</td></tr>
              <tr><td><strong>의료급여 2종</strong></td><td>일반 기초생활수급자</td><td>15%</td></tr>
              <tr><td><strong>건강보험 차상위</strong></td><td>차상위계층 본인부담경감</td><td>5~15%</td></tr>
              <tr><td><strong>건강보험 일반</strong></td><td>일반 건강보험 가입자</td><td>30%</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="type">
        <h2 className="detail-card-head">1종 vs 2종 구분 기준</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>1종 대상:</strong> 근로 무능력 가구, 이재민, 중증질환·희귀난치성질환 등록자, 국가유공자 등
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>2종 대상:</strong> 1종에 해당하지 않는 일반 기초생활수급자
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>확인 방법:</strong> 시·군·구청, 정부24(gov.kr) 또는 의료급여증에 1종·2종 표시
          </div>
          <div className="info-box">
            <strong>문의:</strong> 국민건강보험공단 ☎1577-1000
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="important">
        <h2 className="detail-card-head">꼭 알아야 할 사항</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>사전 등록 필수:</strong> 시술 전 의료급여 지정 치과에서 공단 사전 등록을 완료해야 본인부담률 적용
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>지정 치과만 가능:</strong> 의료급여 지정 치과에서만 해당 본인부담률 적용
          </div>
          <div className="info-box">
            <strong>지대치 처치:</strong> 부분틀니의 지대치(지지 자연 치아) 처치는 별도 본인부담 발생
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            임플란트 지원, 틀니 주기, 신청 방법까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/medical-aid-elderly-denture" className="btn-cta">
            노인 틀니·임플란트 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 노인틀니임플란트1종2종본인부담5퍼15퍼비교SpokeContent: SpokeData = {
  h1: '의료급여 노인 틀니 본인부담, 1종 5%·2종 15% 건강보험 30%와 비교',
  breadcrumb: '1종2종본인부담5퍼15퍼비교',
  description:
    '의료급여 노인 틀니·임플란트 본인부담: 1종 5%, 2종 15% (건강보험 일반 30%보다 크게 저렴). 1종=근로무능력·중증질환, 2종=일반 기초수급자. 사전 등록 없이 시술 시 전액 본인부담.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '내가 1종인지 2종인지 어떻게 알 수 있나요?',
      a: '의료급여증에 1종 또는 2종이 표시되어 있습니다. 모르겠다면 시·군·구청이나 정부24(gov.kr)에서 의료급여 자격 확인서를 발급받아 확인하거나 ☎1577-1000으로 문의하세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '사전 등록 없이 시술받으면 어떻게 되나요?',
      a: '사전 등록 없이 시술받으면 의료급여 혜택이 적용되지 않아 전액 본인부담으로 처리됩니다. 반드시 시술 전에 의료급여 지정 치과에서 공단 사전 등록을 완료해야 합니다.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.nhis.or.kr',
    },
    {
      q: '동네 치과에서는 안 되나요?',
      a: '의료급여 지정 치과여야만 본인부담률이 적용됩니다. 지정 여부는 ☎1577-1000이나 국민건강보험공단 홈페이지에서 확인할 수 있습니다.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.nhis.or.kr',
    },
    {
      q: '임플란트도 1종 5%, 2종 15% 본인부담인가요?',
      a: '네. 치과임플란트도 동일하게 1종 5%, 2종 15%의 본인부담률이 적용됩니다. 임플란트는 평생 2개 한도입니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '차상위계층도 혜택을 받을 수 있나요?',
      a: '차상위계층 중 본인부담경감 대상이라면 5~15% 본인부담률로 받을 수 있습니다. 의료급여 수급자와 다르지만 역시 낮은 본인부담률이 적용됩니다. 정확한 자격은 보건소나 ☎1577-1000으로 확인하세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
  ],
  sources: [
    { name: '보건복지부 의료급여 틀니·임플란트 지원', url: 'https://www.mohw.go.kr' },
    { name: '국민건강보험공단', url: 'https://www.nhis.or.kr' },
  ],
};
