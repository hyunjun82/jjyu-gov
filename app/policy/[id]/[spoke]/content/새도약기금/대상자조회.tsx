import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          새도약기금 대상자 여부는 <strong>newleap.or.kr</strong>에서 채무현황 조회로 확인하거나,
          상담센터 <strong>1660-0705</strong>(평일 09:00~18:00)로 문의하면 됩니다.
          정부가 대상자에게 <strong>개별 통보</strong>를 보내며,
          진행 상황도 같은 방법으로 확인할 수 있습니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "내가 대상인지 어떻게 아나요?" 통보를 기다리는 것 외에 직접 확인하는 방법이 있습니다.
        대상자 조회 경로와 진행 상황 확인 방법을 정리했습니다.
      </p>

      <section className="detail-card" id="check">
        <h2 className="detail-card-head">2026년 새도약기금 대상자 조회 방법 3가지</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>① newleap.or.kr 채무현황 조회:</strong><br />
            새도약기금 공식 홈페이지 → 채무현황 조회 메뉴 → 본인 인증(공동인증서 또는 간편인증) →
            대상 여부 및 진행 상황 확인
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>② 상담센터 전화:</strong><br />
            1660-0705 (평일 09:00~18:00) → 본인 확인 후 대상 여부 및 현재 처리 단계 안내
          </div>
          <div className="info-box">
            <strong>③ 개별 통보 수령:</strong><br />
            정부가 대상자에게 우편·문자 등으로 개별 통보. 통보서에 소각 또는 채무조정 결과와
            이후 절차가 안내됩니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="status">
        <h2 className="detail-card-head">진행 단계별 상태 — 어느 단계인지 확인하는 법</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>단계</th><th>상태</th><th>확인 방법</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>채권 매입 전</td>
                <td>대상 채무 심사 중</td>
                <td>홈페이지 조회 또는 전화</td>
              </tr>
              <tr>
                <td>채권 매입 완료</td>
                <td><strong>추심 즉시 중단</strong></td>
                <td>통보서 수령 또는 홈페이지</td>
              </tr>
              <tr>
                <td>상환능력 심사 중</td>
                <td>소각·조정 결정 대기</td>
                <td>홈페이지 조회 또는 전화</td>
              </tr>
              <tr>
                <td>소각 결정</td>
                <td><strong>1년 이내 소각 예정</strong></td>
                <td>개별 통보서 확인</td>
              </tr>
              <tr>
                <td>채무조정 결정</td>
                <td>신용회복위원회 연계</td>
                <td>개별 통보서 + 1600-5500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="scam">
        <h2 className="detail-card-head">주의 — 사기 연락을 구별하는 방법</h2>
        <div className="detail-card-body">
          <div className="warning-box" style={{ marginBottom: 12 }}>
            <strong>사기 패턴:</strong> "새도약기금 신청을 도와드립니다", "먼저 수수료를 내시면 신청해드립니다"
            → 새도약기금은 별도 신청 절차가 없습니다. 이런 연락은 사기입니다.
          </div>
          <div className="info-box">
            <strong>공식 연락처만 이용:</strong><br />
            홈페이지: newleap.or.kr<br />
            상담전화: 1660-0705 (평일 09:00~18:00)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            자격 조건, 신청 방법, 채무 소각 기준 등<br />
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

export const 대상자조회SpokeContent: SpokeData = {
  h1: '2026년 새도약기금 대상자 조회와 진행 상황 확인 방법',
  breadcrumb: '대상자 조회',
  description:
    '새도약기금 대상자 여부는 newleap.or.kr 채무현황 조회 또는 1660-0705 상담센터로 확인합니다. 채권 매입 즉시 추심 중단, 이후 상환능력 심사로 소각 또는 채무조정이 결정됩니다. 신청 대행을 권유하는 연락은 사기입니다.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '내가 새도약기금 대상인지 어떻게 확인하나요?',
      a: 'newleap.or.kr에서 채무현황을 조회하거나, 상담센터 1660-0705(평일 09:00~18:00)에 전화하면 대상 여부를 확인할 수 있습니다.',
      source: '새도약기금 상담센터',
      sourceUrl: 'https://www.newleap.or.kr/check/status.do',
    },
    {
      q: '통보를 아직 받지 못했는데 어떻게 해야 하나요?',
      a: 'newleap.or.kr 채무현황 조회 또는 1660-0705 전화로 현재 처리 단계를 직접 확인할 수 있습니다.',
      source: '새도약기금 홈',
      sourceUrl: 'https://www.newleap.or.kr',
    },
    {
      q: '채권 매입이 됐는지 어떻게 아나요?',
      a: '매입이 완료되면 추심이 중단됩니다. 홈페이지(newleap.or.kr) 채무현황 조회에서도 매입 완료 여부를 확인할 수 있습니다.',
      source: '새도약기금 제도안내',
      sourceUrl: 'https://www.newleap.or.kr/about/rules.do',
    },
    {
      q: '소각 결정이 나면 얼마나 기다려야 하나요?',
      a: '소각 결정 후 1년 이내에 소각이 완료됩니다. 진행 상황은 newleap.or.kr 또는 1660-0705로 확인할 수 있습니다.',
      source: '새도약기금 제도안내',
      sourceUrl: 'https://www.newleap.or.kr/about/rules.do',
    },
    {
      q: '"새도약기금 신청해준다"는 문자를 받았는데 신뢰할 수 있나요?',
      a: '사기입니다. 새도약기금은 별도 신청 절차가 없습니다. 공식 상담은 newleap.or.kr 또는 1660-0705만 이용하세요.',
      source: '새도약기금 공식 안내',
      sourceUrl: 'https://www.newleap.or.kr',
    },
  ],
  sources: [
    { name: '새도약기금 채무현황 조회', url: 'https://www.newleap.or.kr/check/status.do' },
    { name: '새도약기금 제도안내', url: 'https://www.newleap.or.kr/about/rules.do' },
  ],
};
