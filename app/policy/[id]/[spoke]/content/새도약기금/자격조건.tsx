import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          새도약기금은 <strong>세 가지 조건을 모두 충족</strong>해야 합니다.
          ① 금융회사별 <strong>7년 이상 연체 중</strong>인 개인,
          ② <strong>무담보 채무</strong>만 해당,
          ③ 원금 합계 <strong>5천만원 이하</strong>.
          세 조건 중 하나라도 미달이면 대상에서 제외됩니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "7년 이상 연체 중인데 내가 대상인지 모르겠다"는 분들이 많습니다.
        담보 여부와 원금 기준이 핵심입니다. 조건별로 정확하게 정리했습니다.
      </p>

      <section className="detail-card" id="conditions">
        <h2 className="detail-card-head">새도약기금 자격 조건 3가지 — 모두 충족해야 대상</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>조건</th><th>기준</th><th>주의사항</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>① 연체 기간</td>
                <td><strong>금융회사별 7년 이상</strong></td>
                <td>2018년 6월 19일 이전 연체 시작</td>
              </tr>
              <tr>
                <td>② 채무 종류</td>
                <td><strong>무담보 채무만</strong></td>
                <td>부동산 담보 대출 등 담보 채무 제외</td>
              </tr>
              <tr>
                <td>③ 원금 합계</td>
                <td><strong>5천만원 이하</strong></td>
                <td>5천만원 초과 시 대안 프로그램 안내</td>
              </tr>
              <tr>
                <td>대상자</td>
                <td>개인 (개인사업자 포함)</td>
                <td>법인 제외</td>
              </tr>
            </tbody>
          </table>
          <div className="warning-box" style={{ marginTop: 12 }}>
            <strong>담보가 섞여 있는 경우:</strong> 담보 채무는 새도약기금 대상에서 제외됩니다.
            무담보 채무만 별도로 5천만원 이하여야 합니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="screening">
        <h2 className="detail-card-head">대상자 확정 후 상환능력 심사 — 소각 vs 채무조정 결정</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>심사 기준</th><th>소각 조건</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>소득 기준</td>
                <td>중위소득 60% 이하</td>
              </tr>
              <tr>
                <td>재산 기준</td>
                <td>생계형 재산 외 보유재산 없음</td>
              </tr>
              <tr>
                <td>출입국 기록</td>
                <td>최근 5년간 2회 이하</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            세 기준 모두 충족 → <strong>채무 소각</strong> (1년 이내 5천만원 한도)<br />
            하나라도 미달 → <strong>채무조정</strong> (30~80% 감면, 최장 10년 분할)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="excluded">
        <h2 className="detail-card-head">대상에서 제외되는 경우</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>연체 7년 미만:</strong> 아직 새도약기금 대상이 아닙니다.
            신용회복위원회 개인 워크아웃 또는 법원 개인회생을 검토하세요.
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>담보 채무:</strong> 부동산·보증 등 담보가 있는 채무는 대상 제외.
          </div>
          <div className="info-box">
            <strong>원금 5천만원 초과:</strong> 신용회복위원회 개인 워크아웃,
            법원 개인회생·파산면책 등 대안 프로그램 이용 가능.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            신청 방법, 채무 소각 기준, 대상자 조회 등<br />
            새도약기금 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/new-leap" className="btn-cta">
            새도약기금 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 자격조건SpokeContent: SpokeData = {
  h1: '7년 이상 장기 연체 중이면 새도약기금 대상이 될 수 있다 | 자격 조건 확인',
  breadcrumb: '자격조건',
  description:
    '새도약기금 자격 조건은 ① 금융회사별 7년 이상 연체, ② 무담보 채무만, ③ 원금 합계 5천만원 이하. 세 가지를 모두 충족해야 합니다. 대상 확정 후 상환능력 심사(중위소득 60% 이하 등)로 소각 또는 채무조정이 결정됩니다.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '연체가 7년 됐는데 새도약기금 대상인가요?',
      a: '연체 기간 7년 이상, 무담보 채무, 원금 5천만원 이하 세 조건을 모두 충족하면 대상입니다. newleap.or.kr에서 채무현황 조회 또는 1660-0705로 확인하세요.',
      source: '새도약기금 제도안내',
      sourceUrl: 'https://www.newleap.or.kr/about/rules.do',
    },
    {
      q: '담보 대출도 새도약기금이 되나요?',
      a: '아닙니다. 새도약기금은 무담보 채무만 대상입니다. 부동산 담보 대출이나 보증 채무는 제외됩니다.',
      source: '새도약기금 제도안내',
      sourceUrl: 'https://www.newleap.or.kr/about/rules.do',
    },
    {
      q: '원금이 5천만원을 넘으면 어떻게 되나요?',
      a: '새도약기금 대상에서 제외됩니다. 신용회복위원회 개인 워크아웃, 법원 개인회생, 법원 파산면책 중 상황에 맞는 프로그램을 이용하실 수 있습니다.',
      source: '새도약기금 제도안내',
      sourceUrl: 'https://www.newleap.or.kr/about/rules.do',
    },
    {
      q: '개인사업자도 새도약기금 대상인가요?',
      a: '네. 개인사업자도 대상입니다. 법인은 제외되고 개인(개인사업자 포함)만 대상입니다.',
      source: '새도약기금 제도안내',
      sourceUrl: 'https://www.newleap.or.kr/about/rules.do',
    },
    {
      q: '소각과 채무조정은 어떻게 결정되나요?',
      a: '상환능력 심사로 결정됩니다. 중위소득 60% 이하, 생계형 재산 외 보유재산 없음, 최근 5년 출입국 2회 이하 — 세 기준 모두 충족하면 소각, 하나라도 미달이면 채무조정입니다.',
      source: '새도약기금 제도안내',
      sourceUrl: 'https://www.newleap.or.kr/about/rules.do',
    },
  ],
  sources: [
    { name: '새도약기금 제도안내', url: 'https://www.newleap.or.kr/about/rules.do' },
    { name: '새도약기금 홈', url: 'https://www.newleap.or.kr' },
  ],
};
