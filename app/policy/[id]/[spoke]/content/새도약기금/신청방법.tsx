import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          새도약기금은 <strong>별도 신청 절차가 없습니다</strong>.
          정부(캠코)가 협약 금융회사로부터 대상 채무를 <strong>일괄 매입</strong>하고,
          심사 후 결과를 채무자에게 개별 통보합니다.
          본인이 대상인지 확인하려면 <strong>newleap.or.kr</strong> 또는
          상담센터 <strong>1660-0705</strong>로 문의하면 됩니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "신청하러 가야 하나요?" 갈 필요 없습니다. 새도약기금은 본인이 신청하는 구조가 아닙니다.
        일반 채무조정 프로그램과 어떻게 다른지, 통보 이후 절차는 어떻게 되는지 정리했습니다.
      </p>

      <section className="detail-card" id="structure">
        <h2 className="detail-card-head">일반 채무조정과 새도약기금 — 신청 방식 차이</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>구분</th><th>일반 채무조정</th><th>새도약기금</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>신청 주체</td>
                <td>채무자 본인이 직접 신청</td>
                <td><strong>별도 신청 없음</strong></td>
              </tr>
              <tr>
                <td>매입 방식</td>
                <td>신청 후 심사·협상</td>
                <td><strong>정부 일괄 매입</strong></td>
              </tr>
              <tr>
                <td>추심 중단</td>
                <td>협의 이후</td>
                <td><strong>매입 즉시 중단</strong></td>
              </tr>
              <tr>
                <td>결과 통보</td>
                <td>신청 후 진행 안내</td>
                <td><strong>정부가 개별 통보</strong></td>
              </tr>
            </tbody>
          </table>
          <div className="warning-box" style={{ marginTop: 12 }}>
            <strong>주의:</strong> "새도약기금 신청을 도와준다"는 접근은 사기입니다.
            별도 신청 절차가 없으므로 제3자에게 신청 대행을 맡길 필요가 없습니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="flow">
        <h2 className="detail-card-head">통보 이후 절차 — 받은 통보서에서 확인할 것</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>단계</th><th>내용</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>1단계</td>
                <td>캠코가 협약 금융회사로부터 대상 채무 일괄 매입</td>
              </tr>
              <tr>
                <td>2단계</td>
                <td>추심 즉시 중단 (매입과 동시)</td>
              </tr>
              <tr>
                <td>3단계</td>
                <td>정부 행정데이터 기반 상환능력 심사</td>
              </tr>
              <tr>
                <td>4단계</td>
                <td>결과 개별 통보 — 소각 또는 채무조정 안내</td>
              </tr>
              <tr>
                <td>5단계</td>
                <td>유관기관 연계 금융·주거·고용 재기 지원</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            소각 대상이면 1년 이내 5천만원 한도 소각, 채무조정 대상이면
            신용회복위원회 30~80% 감면 후 최장 10년 분할상환이 진행됩니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="confirm">
        <h2 className="detail-card-head">본인 대상 여부 확인 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>① 온라인 조회:</strong> newleap.or.kr → 채무현황 조회 메뉴에서 본인 인증 후 확인
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>② 전화 상담:</strong> 1660-0705 (평일 09:00~18:00)
          </div>
          <div className="info-box">
            <strong>③ 한국자산관리공사(캠코) 직접 문의:</strong> 캠코 지사 방문 또는 대표 전화
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            자격 조건, 소각 기준, 대상자 조회 등<br />
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

export const 신청방법SpokeContent: SpokeData = {
  h1: '새도약기금 신청 방법 | 별도 신청 없이 일괄 매입되는 구조',
  breadcrumb: '신청방법',
  description:
    '새도약기금은 채무자가 별도로 신청하지 않습니다. 정부(캠코)가 협약 금융회사에서 대상 채무를 일괄 매입하고 상환능력 심사 후 결과를 개별 통보합니다. 본인 대상 여부는 newleap.or.kr 또는 1660-0705에서 확인.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '새도약기금은 어디에 신청하나요?',
      a: '별도 신청처가 없습니다. 정부가 대상 채무를 일괄 매입하는 구조라 본인이 신청하지 않아도 됩니다. 대상 여부는 newleap.or.kr 또는 1660-0705로 확인할 수 있습니다.',
      source: '새도약기금 제도안내',
      sourceUrl: 'https://www.newleap.or.kr/about/rules.do',
    },
    {
      q: '신청서를 제출해야 하나요?',
      a: '아닙니다. 별도 신청 서류나 신청서가 필요 없습니다. 정부가 금융회사로부터 채무를 일괄 매입한 후 채무자에게 개별 통보합니다.',
      source: '새도약기금 제도안내',
      sourceUrl: 'https://www.newleap.or.kr/about/rules.do',
    },
    {
      q: '"새도약기금 신청 도와준다"는 연락을 받았습니다. 믿어도 되나요?',
      a: '믿으면 안 됩니다. 새도약기금은 별도 신청 절차가 없으므로 신청을 대행해준다는 접근은 사기입니다. 공식 상담은 1660-0705로만 하세요.',
      source: '새도약기금 공식 안내',
      sourceUrl: 'https://www.newleap.or.kr',
    },
    {
      q: '통보를 받은 후 아무것도 하지 않아도 되나요?',
      a: '통보 내용에 따라 다릅니다. 소각 통보를 받으면 별도 조치가 필요 없고, 채무조정 통보를 받으면 신용회복위원회를 통해 조정 절차를 진행해야 합니다.',
      source: '새도약기금 제도안내',
      sourceUrl: 'https://www.newleap.or.kr/about/rules.do',
    },
    {
      q: '추심이 계속 오는데 새도약기금 대상인지 어떻게 알 수 있나요?',
      a: 'newleap.or.kr에서 채무현황을 조회하거나 1660-0705 상담센터에 전화하면 대상 여부와 현재 진행 상황을 확인할 수 있습니다.',
      source: '새도약기금 상담센터',
      sourceUrl: 'https://www.newleap.or.kr/check/status.do',
    },
  ],
  sources: [
    { name: '새도약기금 제도안내', url: 'https://www.newleap.or.kr/about/rules.do' },
    { name: '새도약기금 홈', url: 'https://www.newleap.or.kr' },
  ],
};
