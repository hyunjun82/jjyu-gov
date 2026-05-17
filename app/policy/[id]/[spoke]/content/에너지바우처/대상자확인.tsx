import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          에너지바우처는 <strong>소득 기준</strong>(기초생활수급자)과
          <strong>세대원 특성 기준</strong>(노인·영유아·장애인 등)을
          <strong>모두 충족</strong>해야 합니다.
          대상자 여부는 <strong>energyv.or.kr</strong> 또는
          거주지 읍·면·동 행정복지센터에서 확인할 수 있습니다.
          전년도 수급자 중 조건 변동이 없으면 자동 신청됩니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "기초수급자이면 자동으로 에너지바우처를 받을 수 있나요?"
        소득 기준만으로는 안 됩니다. 세대원 특성 기준도 충족해야 합니다.
        자동신청 대상과 신규 신청이 필요한 경우를 정리했습니다.
      </p>

      <section className="detail-card" id="conditions">
        <h2 className="detail-card-head">에너지바우처 대상자 확인 방법 | 자동신청 되는 경우와 새로 신청해야 하는 경우</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>기준</th><th>조건</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>① 소득 기준</td>
                <td>기초생활수급자 (생계·의료·주거·교육급여 수급자)</td>
              </tr>
              <tr>
                <td>② 세대원 특성 기준 (다음 중 하나)</td>
                <td>
                  노인(1960.12.31 이전 출생) / 영유아(2018.01.01 이후 출생) /
                  장애인 / 임산부 / 중증질환자 / 한부모가족 / 소년소녀가정 / 다자녀세대
                </td>
              </tr>
            </tbody>
          </table>
          <div className="warning-box" style={{ marginTop: 12 }}>
            <strong>두 기준 모두 충족해야 합니다.</strong> 기초수급자이더라도
            세대원 중 위의 특성 기준에 해당하는 사람이 없으면 지원 대상에서 제외됩니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="auto">
        <h2 className="detail-card-head">자동신청 vs 신규 신청 — 어떤 경우인지 확인</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>구분</th><th>조건</th><th>해야 할 것</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>자동 신청</strong></td>
                <td>전년도 에너지바우처 수급 + 올해도 자격 충족 + 정보변동 없음</td>
                <td>별도 신청 불필요 (자동 처리)</td>
              </tr>
              <tr>
                <td><strong>신규 신청</strong></td>
                <td>처음 신청 / 전년도 미수급 / 정보 변동 있음</td>
                <td>읍·면·동 행정복지센터 방문 신청</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            자동신청 여부는 energyv.or.kr 또는 콜센터 1600-3190에서 확인할 수 있습니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="check">
        <h2 className="detail-card-head">대상자 여부 직접 확인하는 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>① energyv.or.kr:</strong> 에너지바우처 공식 홈페이지 → 신청대상 확인
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>② 행정복지센터 방문:</strong> 거주지 읍·면·동 주민센터 → 에너지바우처 대상 여부 문의
          </div>
          <div className="info-box">
            <strong>③ 콜센터:</strong> 1600-3190 (평일 09:00~18:00, 점심 12~13시 제외)
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

export const 에너지바우처대상자확인SpokeContent: SpokeData = {
  h1: '에너지바우처 대상자 확인 방법 | 자동신청 되는 경우와 새로 신청해야 하는 경우',
  breadcrumb: '대상자 확인',
  description:
    '에너지바우처 대상: 기초생활수급자(소득기준) + 노인·영유아·장애인·임산부 등(세대원 특성기준) 모두 충족. 전년도 수급자 중 정보변동 없으면 자동신청. 신규는 읍·면·동 행정복지센터 방문 신청. energyv.or.kr 또는 1600-3190 확인.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '기초수급자이면 모두 에너지바우처를 받을 수 있나요?',
      a: '아닙니다. 기초생활수급자(소득기준)이면서 세대원 중 노인·영유아·장애인·임산부·중증질환자·한부모가족 등(세대원 특성기준)에 해당하는 분이 있어야 합니다. 두 기준을 모두 충족해야 합니다.',
      source: '에너지바우처 신청안내',
      sourceUrl: 'https://www.energyv.or.kr/info/apl_info.do',
    },
    {
      q: '전년도에 에너지바우처를 받았으면 올해도 자동으로 받나요?',
      a: '전년도 수급자이고 올해도 자격을 충족하며 정보변동이 없으면 자동으로 신청됩니다. 자동신청 여부는 energyv.or.kr 또는 1600-3190에서 확인하세요.',
      source: '에너지바우처 신청안내',
      sourceUrl: 'https://www.energyv.or.kr/info/apl_info.do',
    },
    {
      q: '처음 신청하는데 어디 가야 하나요?',
      a: '거주지 읍·면·동 행정복지센터(주민센터)를 방문해 신청하면 됩니다. 거동이 불편하면 친족이 대리 신청할 수 있습니다.',
      source: '에너지바우처 신청안내',
      sourceUrl: 'https://www.energyv.or.kr/info/apl_info.do',
    },
    {
      q: '내가 대상인지 미리 확인할 수 있나요?',
      a: 'energyv.or.kr에서 확인하거나, 콜센터 1600-3190(평일 09:00~18:00) 또는 거주지 주민센터에 문의하면 됩니다.',
      source: '에너지바우처 홈',
      sourceUrl: 'https://www.energyv.or.kr',
    },
    {
      q: '영유아 기준이 언제 출생자인가요?',
      a: '2018년 1월 1일 이후 출생한 영유아가 기준입니다. (2025년도 에너지바우처 기준)',
      source: '에너지바우처 신청안내',
      sourceUrl: 'https://www.energyv.or.kr/info/apl_info.do',
    },
  ],
  sources: [
    { name: '에너지바우처 신청안내', url: 'https://www.energyv.or.kr/info/apl_info.do' },
    { name: '에너지바우처 홈', url: 'https://www.energyv.or.kr' },
  ],
};
