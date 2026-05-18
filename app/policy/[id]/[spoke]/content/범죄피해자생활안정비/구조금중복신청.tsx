import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          긴급생활안정비와 범죄피해 구조금(유족·장해·중상해)은 <strong>별개의 제도</strong>로,
          같은 사건으로 두 가지를 함께 신청할 수 있습니다.
          다만 의료비 지원 등과는 중복 지급 시 일부 공제될 수 있으니 확인이 필요합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "범죄피해 구조금을 이미 신청했는데 긴급생활안정비도 신청할 수 있나요?"
        같은 사건으로 두 가지 지원을 동시에 받을 수 있는지 정리했습니다.
      </p>

      <section className="detail-card" id="overlap-table">
        <h2 className="detail-card-head">지원 종류별 중복 여부</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>지원 종류</th><th>긴급생활안정비와 중복</th><th>비고</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>범죄피해구조금 (유족)</strong></td>
                <td>중복 신청 가능</td>
                <td>별개 제도</td>
              </tr>
              <tr>
                <td><strong>범죄피해구조금 (장해·중상해)</strong></td>
                <td>중복 신청 가능</td>
                <td>별개 제도</td>
              </tr>
              <tr>
                <td><strong>의료비 지원</strong></td>
                <td>원칙적 중복 가능</td>
                <td>심의에서 조율</td>
              </tr>
              <tr>
                <td><strong>가해자 손해배상</strong></td>
                <td>배상액만큼 공제</td>
                <td>이중 수령 불가</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="diff">
        <h2 className="detail-card-head">두 제도의 핵심 차이</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>범죄피해구조금:</strong> 사망·장해·중상해 피해에 대한 손해 보전.
            유족, 피해자 본인이 신청. 금액은 피해 정도에 따라 수천만원 규모 가능.
          </div>
          <div className="info-box">
            <strong>긴급생활안정비:</strong> 치료 중 생계 공백을 메우기 위한 일시금.
            5주 이상 치료 중 생계위기인 피해자 본인이 신청. 350만원 고정.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="apply-both">
        <h2 className="detail-card-head">두 가지 동시 신청하는 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            같은 지구심의회에 두 신청서를 함께 제출할 수 있습니다.
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>문의:</strong> 범죄피해자지원센터 ☎ 1577-2584
            → 두 제도를 함께 안내받고 서류를 준비하는 것이 효율적입니다.
          </div>
          <div className="info-box">
            각 신청의 심의는 독립적으로 진행되므로, 한 쪽이 부결되어도 다른 쪽에 영향을 주지 않습니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            지급 조건, 신청 기한 등<br />
            범죄피해자 긴급생활안정비 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/crime-victim-stable" className="btn-cta">
            범죄피해자 긴급생활안정비 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 범죄피해자생활안정비구조금중복신청SpokeContent: SpokeData = {
  h1: '범죄피해자 긴급생활안정비와 구조금, 같은 사건으로 두 가지를 함께 신청하는 방법',
  breadcrumb: '구조금중복신청',
  description:
    '긴급생활안정비 350만원과 범죄피해구조금(유족·장해·중상해)은 별개 제도로 중복 신청 가능. 가해자 손해배상액은 공제. 1577-2584에서 동시 신청 안내.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '구조금과 긴급생활안정비를 동시에 신청할 수 있나요?',
      a: '네, 두 제도는 별개이므로 같은 사건으로 동시에 신청할 수 있습니다. 같은 지구심의회에 함께 제출하면 됩니다.',
      source: '법무부',
      sourceUrl: 'https://www.moj.go.kr',
    },
    {
      q: '구조금을 먼저 받았으면 생활안정비를 못 받나요?',
      a: '구조금을 먼저 받았더라도 긴급생활안정비는 별도로 신청할 수 있습니다. 단, 가해자로부터 받은 배상액이 있다면 공제될 수 있습니다.',
      source: '법무부',
      sourceUrl: 'https://www.moj.go.kr',
    },
    {
      q: '의료비 지원도 함께 받을 수 있나요?',
      a: '의료비 지원도 별도로 신청 가능합니다. 각 지원은 용도가 다르므로 원칙적으로 중복 가능하나 심의에서 조율될 수 있습니다.',
      source: '법무부',
      sourceUrl: 'https://www.moj.go.kr',
    },
    {
      q: '두 가지 신청 서류를 한 번에 제출할 수 있나요?',
      a: '같은 지구심의회에 함께 제출할 수 있습니다. 범죄피해자지원센터(☎ 1577-2584)에 연락하면 필요 서류를 일괄 안내받을 수 있습니다.',
      source: '법무부',
      sourceUrl: 'https://www.moj.go.kr',
    },
    {
      q: '한 쪽이 기각되면 다른 쪽에도 영향이 있나요?',
      a: '각 신청은 독립적으로 심의되므로, 한 쪽이 기각되어도 다른 쪽 신청에는 영향이 없습니다.',
      source: '법무부',
      sourceUrl: 'https://www.moj.go.kr',
    },
  ],
  sources: [
    { name: '법무부', url: 'https://www.moj.go.kr' },
    { name: '국가법령정보센터', url: 'https://www.law.go.kr' },
    { name: '범죄피해자지원센터', url: 'https://www.kcvc.or.kr' },
  ],
};
