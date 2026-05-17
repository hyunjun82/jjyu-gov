import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          육아휴직급여를 받으려면 <strong>고용보험 가입 후 피보험단위기간 180일 이상</strong>이어야 합니다.
          신청은 육아휴직 시작일 이후 <strong>고용보험 누리집(ei.go.kr)</strong> 또는 가까운 고용센터에서 할 수 있으며,
          매월 1회 신청이 원칙입니다. 육아휴직 시작 1년 이내에 최초 신청해야 합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "어디에 신청해야 하는지 몰라서 못 받고 있어요."
        신청 조건부터 서류, 온라인 신청 방법까지 단계별로 정리했습니다.
      </p>

      <section className="detail-card" id="condition">
        <h2 className="detail-card-head">신청 자격 — 고용보험 180일 기준이란</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>조건</th><th>기준</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>고용보험 가입</td>
                <td>육아휴직 시작일 기준 고용보험 적용 사업장 근로자</td>
              </tr>
              <tr>
                <td>피보험단위기간</td>
                <td><strong>180일 이상</strong> (여러 직장 합산 가능)</td>
              </tr>
              <tr>
                <td>자녀 조건</td>
                <td>만 8세 이하 또는 초등학교 2학년 이하 자녀</td>
              </tr>
              <tr>
                <td>휴직 승인</td>
                <td>사업주에게 육아휴직 신청 후 승인 (30일 전 신청 원칙)</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>피보험단위기간 180일</strong>은 고용보험을 낸 실제 근무 일수의 합계입니다.
            이전 직장과 현 직장의 합산도 가능합니다. 취업 후 6개월이 기준이 되는 경우가 많습니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="process">
        <h2 className="detail-card-head">신청 절차 — 회사 신청 후 고용보험으로 직접</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>1단계:</strong> 사업주에게 육아휴직 신청서 제출 (시작 30일 전까지)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>2단계:</strong> 사업주 승인 후 육아휴직 시작
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>3단계:</strong> ei.go.kr(고용보험 누리집) 또는 거주지 고용센터에 육아휴직급여 신청
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>4단계:</strong> 매월 본인 명의 계좌로 급여 입금
          </div>
          <div className="warning-box">
            <strong>주의:</strong> 육아휴직 시작일부터 <strong>12개월 이내</strong>에 최초 신청해야 합니다.
            이후에는 신청 불가합니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="docs">
        <h2 className="detail-card-head">온라인 신청 서류 — 최초 신청 시 준비물</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>서류</th><th>비고</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>육아휴직 확인서</td>
                <td>사업주 발급 (고용보험 시스템에서 사업주가 직접 등록 가능)</td>
              </tr>
              <tr>
                <td>통상임금 증빙 서류</td>
                <td>급여명세서 또는 근로계약서</td>
              </tr>
              <tr>
                <td>가족관계증명서</td>
                <td>자녀 확인 (출생 직후에는 출생증명서 대체 가능)</td>
              </tr>
              <tr>
                <td>본인 명의 통장 사본</td>
                <td>급여 수령 계좌</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>온라인 신청:</strong> ei.go.kr 로그인 → 개인 서비스 → 육아휴직급여 신청.
            공동인증서(공인인증서) 또는 간편인증(카카오·네이버 등)으로 로그인 가능합니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="deadline">
        <h2 className="detail-card-head">신청 기한과 매월 신청 방식</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>최초 신청 기한:</strong> 육아휴직 시작일로부터 12개월 이내 (기한 경과 시 신청 불가)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>매월 신청:</strong> 육아휴직 1개월 경과 후부터 매월 1회 온라인 또는 고용센터 방문 신청
          </div>
          <div className="info-box">
            <strong>지급 시기:</strong> 신청 후 약 14일 내외로 본인 계좌에 입금
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            급여 계산, 6+6 부모함께, 회사 부담 여부 등<br />
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

export const 육아휴직신청방법SpokeContent: SpokeData = {
  h1: '육아휴직급여 신청 조건부터 기한까지 | 고용보험 180일 기준과 온라인 방법',
  breadcrumb: '신청방법',
  description:
    '육아휴직급여 신청 조건은 고용보험 피보험단위기간 180일 이상. 사업주 승인 후 ei.go.kr(고용보험 누리집) 또는 고용센터에서 매월 신청합니다. 최초 신청 기한은 육아휴직 시작일로부터 12개월 이내. 지급은 신청 후 약 14일 내외.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '육아휴직급여 신청 조건은 무엇인가요?',
      a: '고용보험 가입 근로자로서 피보험단위기간 180일 이상이어야 합니다. 만 8세 이하(또는 초등 2학년 이하) 자녀가 있어야 하며, 사업주의 육아휴직 승인을 받아야 합니다.',
      source: '고용노동부 육아휴직급여 자격 안내',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '어디에 신청하나요?',
      a: 'ei.go.kr(고용보험 누리집) 온라인 또는 가까운 고용센터에 방문 신청합니다. 회사에 신청하는 것이 아니라 정부 기관(고용보험)에 직접 신청합니다.',
      source: '고용보험 누리집 육아휴직급여 신청 안내',
      sourceUrl: 'https://www.ei.go.kr',
    },
    {
      q: '언제까지 신청해야 하나요?',
      a: '육아휴직 시작일로부터 12개월 이내에 최초 신청해야 합니다. 이 기한을 넘기면 신청이 불가능합니다.',
      source: '고용노동부 육아휴직급여 신청 기한 안내',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '피보험단위기간 180일은 어떻게 계산하나요?',
      a: '고용보험을 낸 실제 근무 일수의 합계입니다. 이전 직장과 현 직장의 기간도 합산됩니다. 취업 후 약 6개월 이상 근무한 경우에 해당하는 경우가 많습니다.',
      source: '고용노동부 피보험단위기간 안내',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '육아휴직급여는 매달 따로 신청해야 하나요?',
      a: '네. 육아휴직 1개월 경과 후부터 매월 1회 신청합니다. 온라인(ei.go.kr) 또는 고용센터 방문으로 가능합니다. 신청 후 약 14일 이내 입금됩니다.',
      source: '고용보험 누리집 육아휴직급여 신청 안내',
      sourceUrl: 'https://www.ei.go.kr',
    },
  ],
  sources: [
    { name: '고용노동부 육아휴직급여 안내', url: 'https://www.moel.go.kr' },
    { name: '고용보험 누리집 육아휴직급여 신청', url: 'https://www.ei.go.kr' },
  ],
};
