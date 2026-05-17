import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          전년도에 에너지바우처를 받았고 올해도 자격을 충족하며
          <strong>정보 변동이 없으면 자동으로 신청</strong>됩니다.
          단, 처음 신청하거나 수급 자격·세대원 정보가 바뀐 경우에는
          <strong>읍·면·동 행정복지센터에서 신규 신청</strong>해야 합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "기초수급자인데 에너지바우처 신청을 따로 해야 하나요?" 전년도 수급 여부와
        정보 변동에 따라 다릅니다. 자동신청 대상 기준을 정리했습니다.
      </p>

      <section className="detail-card" id="auto-criteria">
        <h2 className="detail-card-head">기초수급자인데 에너지바우처 신청을 따로 해야 하나 | 자동신청 대상 기준</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>구분</th><th>조건</th><th>신청 방법</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>자동 신청</strong></td>
                <td>
                  전년도 에너지바우처 수급 + 올해도 자격 충족 +
                  수급자격·세대원·주소 정보 변동 없음
                </td>
                <td>별도 신청 불필요 (자동 처리)</td>
              </tr>
              <tr>
                <td><strong>신규 신청 필요</strong></td>
                <td>
                  처음 신청 / 전년도 미수급 / 수급 자격 변동 /
                  세대원 변동 / 주소 변동
                </td>
                <td>읍·면·동 행정복지센터 방문 신청</td>
              </tr>
            </tbody>
          </table>
          <div className="warning-box" style={{ marginTop: 12 }}>
            <strong>기초수급자 전체가 자동신청 대상은 아닙니다.</strong>
            소득기준(기초수급) + 세대원 특성기준(노인·영유아·장애인 등)을 모두 충족해야
            에너지바우처 지원 대상이 되며, 그 중 전년도 수급자에 한해 자동신청이 됩니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="eligibility">
        <h2 className="detail-card-head">에너지바우처 대상자 2가지 기준 — 모두 충족해야</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>기준</th><th>내용</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>① 소득 기준</td>
                <td>기초생활수급자 (생계·의료·주거·교육급여 수급자)</td>
              </tr>
              <tr>
                <td>② 세대원 특성 기준 (하나 이상)</td>
                <td>
                  노인(1960.12.31 이전 출생) / 영유아(2018.01.01 이후 출생) /
                  장애인 / 임산부 / 중증질환자 / 한부모가족 / 소년소녀가정 / 다자녀세대
                </td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            두 기준 모두 충족해야 합니다. 기초수급자이더라도
            세대원 특성 기준에 해당하는 사람이 없으면 지원 대상에서 제외됩니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="how-to-check">
        <h2 className="detail-card-head">내가 자동신청 대상인지 확인하는 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>① energyv.or.kr:</strong> 에너지바우처 공식 홈페이지 → 신청대상 조회
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>② 콜센터:</strong> 1600-3190 (평일 09:00~18:00, 점심 12~13시 제외)
          </div>
          <div className="info-box">
            <strong>③ 읍·면·동 행정복지센터 방문:</strong> 자동신청 여부 및 정보 변동 확인
          </div>
        </div>
      </section>

      <section className="detail-card" id="new-apply">
        <h2 className="detail-card-head">신규 신청 방법 — 방문·대리 신청</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>방문 신청:</strong> 거주지 읍·면·동 행정복지센터(주민센터) 직접 방문
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>대리 신청:</strong> 거동이 불편한 경우 친족이 대리 신청 가능
          </div>
          <div className="info-box">
            <strong>신청 기간:</strong> 신청 기간 내 방문 필수 — 기간 외 신청 불가
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            사용처, 지원금액, 신청 기간 등<br />
            에너지바우처 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/energy-voucher" className="btn-cta">
            에너지바우처 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 에너지바우처자동신청SpokeContent: SpokeData = {
  h1: '기초수급자인데 에너지바우처 신청을 따로 해야 하나 | 자동신청 대상 기준',
  breadcrumb: '자동신청',
  description:
    '에너지바우처 자동신청: 전년도 수급자이고 올해도 자격 충족 + 정보변동 없으면 자동 처리. 처음 신청하거나 세대원·주소 변동 있으면 읍·면·동 행정복지센터 방문 신청. 자동신청 여부는 energyv.or.kr 또는 1600-3190 확인.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '기초수급자이면 에너지바우처를 자동으로 받나요?',
      a: '기초수급자라도 세대원 특성기준(노인·영유아·장애인·임산부 등)을 충족해야 에너지바우처 대상입니다. 그 중 전년도에 받았고 정보변동이 없으면 자동신청됩니다.',
      source: '에너지바우처 신청안내',
      sourceUrl: 'https://www.energyv.or.kr/info/apl_info.do',
    },
    {
      q: '올해 처음 신청하는데 어디서 해야 하나요?',
      a: '거주지 읍·면·동 행정복지센터(주민센터)를 신청 기간 내에 방문해 신청하면 됩니다.',
      source: '에너지바우처 신청안내',
      sourceUrl: 'https://www.energyv.or.kr/info/apl_info.do',
    },
    {
      q: '작년에 받았는데 주소가 바뀌었어요. 자동신청이 되나요?',
      a: '주소 변동이 있으면 자동신청에서 제외됩니다. 새 거주지 읍·면·동 행정복지센터에서 신규 신청해야 합니다.',
      source: '에너지바우처 신청안내',
      sourceUrl: 'https://www.energyv.or.kr/info/apl_info.do',
    },
    {
      q: '내가 자동신청 대상인지 어떻게 알 수 있나요?',
      a: 'energyv.or.kr에서 조회하거나, 콜센터 1600-3190(평일 09:00~18:00) 또는 주민센터에 문의하면 됩니다.',
      source: '에너지바우처 홈',
      sourceUrl: 'https://www.energyv.or.kr',
    },
    {
      q: '거동이 불편해서 직접 신청하기 어려운 경우 어떻게 하나요?',
      a: '친족이 대리 신청할 수 있습니다. 거주지 읍·면·동 행정복지센터에 대리 신청 방법을 문의하세요.',
      source: '에너지바우처 신청안내',
      sourceUrl: 'https://www.energyv.or.kr/info/apl_info.do',
    },
  ],
  sources: [
    { name: '에너지바우처 신청안내', url: 'https://www.energyv.or.kr/info/apl_info.do' },
    { name: '에너지바우처 홈', url: 'https://www.energyv.or.kr' },
  ],
};
