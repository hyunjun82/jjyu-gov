import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          육아휴직급여는 <strong>정부(고용보험기금)</strong>가 지급합니다. 회사가 주는 것이 아닙니다.
          근로자가 직접 <strong>고용센터(또는 ei.go.kr)</strong>에 신청하면 본인 계좌로 매월 입금됩니다.
          회사는 육아휴직을 거부할 수 없으며, 급여 지급에 관여하지 않습니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "회사에서 육아휴직하면 월급을 회사가 주는 건지, 아니면 나라에서 주는 건지 헷갈려요."
        지급 주체와 신청 경로를 명확히 정리했습니다.
      </p>

      <section className="detail-card" id="who-pays">
        <h2 className="detail-card-head">육아휴직급여 지급 주체 — 회사가 아닌 고용보험기금</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>구분</th><th>내용</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>지급 주체</td>
                <td><strong>고용노동부 (고용보험기금)</strong></td>
              </tr>
              <tr>
                <td>신청 대상</td>
                <td>근로자 본인이 직접 신청</td>
              </tr>
              <tr>
                <td>신청 창구</td>
                <td>고용보험 누리집(ei.go.kr) 또는 거주지 고용센터</td>
              </tr>
              <tr>
                <td>입금 계좌</td>
                <td>근로자 본인 명의 계좌로 매월 직접 입금</td>
              </tr>
              <tr>
                <td>회사의 역할</td>
                <td>육아휴직 승인 + 확인서 발급 (급여 지급 불관여)</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>핵심:</strong> 육아휴직급여는 고용보험료를 재원으로 국가가 지급합니다.
            회사가 급여를 주는 것이 아니기 때문에, 회사 재정 상황과 무관합니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="company-duty">
        <h2 className="detail-card-head">회사의 법적 의무 — 거부하면 어떻게 되나</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>회사의 의무</th><th>위반 시 제재</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>육아휴직 신청 거부 금지</td>
                <td>500만원 이하 벌금 (남녀고용평등법 제19조)</td>
              </tr>
              <tr>
                <td>육아휴직 이유 불이익 처우 금지</td>
                <td>3년 이하 징역 또는 3,000만원 이하 벌금</td>
              </tr>
              <tr>
                <td>육아휴직 확인서 발급</td>
                <td>거부 시 고용센터 직접 확인 요청 가능</td>
              </tr>
            </tbody>
          </table>
          <div className="warning-box" style={{ marginTop: 12 }}>
            <strong>회사가 거부하면:</strong> 고용노동부 고객상담센터(1350) 또는 노동청에 신고하세요.
            육아휴직 거부는 법 위반입니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="company-extra">
        <h2 className="detail-card-head">회사에서 별도로 급여를 주는 경우</h2>
        <div className="detail-card-body">
          <p style={{ lineHeight: 1.8 }}>
            일부 기업은 정부 육아휴직급여에 더해 회사 자체 지원금(보충급여)을 추가로 지급합니다.
            이는 회사 복지 정책에 따른 것으로, 법적 의무는 아닙니다.
          </p>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>확인 방법:</strong> 회사 인사팀 또는 취업규칙·단체협약을 확인하세요.
            정부 육아휴직급여와 회사 보충급여는 중복으로 받을 수 있습니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="faq-apply">
        <h2 className="detail-card-head">고용센터 신청 — 직접 방문 vs 온라인</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>온라인(권장):</strong> ei.go.kr 접속 → 개인 서비스 → 육아휴직급여 신청.
            공동인증서 또는 카카오·네이버 간편인증으로 로그인.
          </div>
          <div className="info-box">
            <strong>방문 신청:</strong> 거주지 관할 고용센터 방문.
            신분증·통장 사본·육아휴직 확인서 지참.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            급여 계산, 6+6 부모함께, 신청 조건 등<br />
            육아휴직급여 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/parental-leave-pay" className="btn-cta">
            육아휴직급여 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 회사부담SpokeContent: SpokeData = {
  h1: '육아휴직급여는 회사가 주는 건가 정부가 주는 건가 | 고용센터 직접 신청',
  breadcrumb: '회사 부담 여부',
  description:
    '육아휴직급여는 회사가 아닌 정부(고용보험기금)가 지급합니다. 근로자가 직접 ei.go.kr 또는 고용센터에 신청하면 본인 계좌로 매월 입금됩니다. 회사의 역할은 육아휴직 승인과 확인서 발급뿐. 거부 시 500만원 이하 벌금.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '육아휴직급여는 회사가 주나요, 정부가 주나요?',
      a: '정부(고용노동부 고용보험기금)가 지급합니다. 근로자가 직접 고용센터 또는 ei.go.kr에 신청하면 본인 계좌로 매월 입금됩니다. 회사는 급여 지급에 관여하지 않습니다.',
      source: '고용노동부 육아휴직급여 안내',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '회사가 육아휴직을 거부하면 어떻게 하나요?',
      a: '육아휴직 거부는 남녀고용평등법 위반으로 500만원 이하 벌금이 부과됩니다. 고용노동부 고객상담센터(1350) 또는 관할 노동청에 신고할 수 있습니다.',
      source: '남녀고용평등법 제19조',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '육아휴직급여 신청을 회사에 해야 하나요?',
      a: '아닙니다. 회사에는 육아휴직만 신청하면 됩니다. 급여는 본인이 직접 ei.go.kr 또는 고용센터에 신청해야 합니다.',
      source: '고용보험 누리집 육아휴직급여 신청 안내',
      sourceUrl: 'https://www.ei.go.kr',
    },
    {
      q: '회사에서 추가로 지원금을 줄 수 있나요?',
      a: '네. 정부 육아휴직급여 외에 회사 자체 보충급여를 지급하는 기업이 있습니다. 이는 법적 의무가 아니라 회사 복지 정책입니다. 중복으로 받을 수 있습니다.',
      source: '고용노동부 육아휴직 지원 안내',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '회사에서 육아휴직 후 불이익을 주면 어떻게 되나요?',
      a: '육아휴직을 이유로 해고·감봉·인사상 불이익을 주는 것은 3년 이하 징역 또는 3,000만원 이하 벌금에 해당합니다. 고용노동부에 신고하세요.',
      source: '남녀고용평등법 제19조',
      sourceUrl: 'https://www.moel.go.kr',
    },
  ],
  sources: [
    { name: '고용노동부 육아휴직급여 안내', url: 'https://www.moel.go.kr' },
    { name: '고용보험 누리집 육아휴직급여 신청', url: 'https://www.ei.go.kr' },
    { name: '남녀고용평등법 제19조', url: 'https://www.law.go.kr' },
  ],
};
