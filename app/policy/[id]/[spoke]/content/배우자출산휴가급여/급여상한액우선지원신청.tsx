import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          배우자 출산휴가급여 상한액은 <strong>월 약 168만원</strong>입니다.
          우선지원대상기업 근로자는 고용보험에서 지원받으며,
          신청은 <strong>고용24(work24.go.kr)</strong>에서 합니다.
          고용보험 피보험 단위기간 <strong>180일 이상</strong>이어야 신청 가능합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        상한액 기준과 우선지원대상기업 자격, 신청 절차를 미리 확인하면
        급여를 빠짐없이 받을 수 있습니다.
      </p>

      <section className="detail-card" id="limit">
        <h2 className="detail-card-head">급여 상한액과 지급 기준</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>기준</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>지급 기준</strong></td><td>통상임금 100%</td></tr>
              <tr><td><strong>상한액</strong></td><td>월 약 168만원 (정부 지원 한도)</td></tr>
              <tr><td><strong>하한액</strong></td><td>통상임금이 낮으면 통상임금 전액</td></tr>
              <tr><td><strong>지급 대상</strong></td><td>우선지원대상기업 근로자 (고용보험 적용)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="eligibility">
        <h2 className="detail-card-head">신청 자격 요건</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>피보험 기간:</strong> 휴가 종료일 이전 고용보험 180일 이상
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>사업장 조건:</strong> 우선지원대상기업 소속 근로자
          </div>
          <div className="info-box">
            <strong>휴가 조건:</strong> 실제 배우자 출산휴가를 사용한 경우
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="apply">
        <h2 className="detail-card-head">고용24 신청 절차</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>1단계:</strong> 고용24(work24.go.kr) 로그인
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>2단계:</strong> 배우자 출산휴가급여 신청 메뉴 선택
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>3단계:</strong> 출산 증빙 서류 첨부 (출생증명서 등)
          </div>
          <div className="info-box">
            <strong>4단계:</strong> 신청 완료 후 심사·지급 (통상 14일 내)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            회사·정부 부담 구분, 20일 유급 계산, 분할 사용까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/spouse-birth-leave-pay" className="btn-cta">
            배우자 출산휴가급여 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 배우자출산휴가급여급여상한액우선지원신청SpokeContent: SpokeData = {
  h1: '배우자 출산휴가 급여 상한액과 우선지원대상기업 기준, 고용24 신청까지',
  breadcrumb: '급여상한액우선지원신청',
  description:
    '배우자 출산휴가급여 상한액 월 약 168만원. 통상임금 100% 지급. 우선지원대상기업 고용보험 지원, 피보험 180일 이상 필수. 고용24(work24.go.kr) 온라인 신청, 휴가 종료 후 12개월 이내.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '통상임금이 168만원보다 낮으면 얼마 받나요?',
      a: '통상임금 전액을 받습니다. 상한액은 최대 한도일 뿐, 통상임금이 낮으면 그 금액이 그대로 지급됩니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '신청 서류는 무엇이 필요한가요?',
      a: '배우자 출산휴가급여 신청서, 출산 사실 증명 서류(출생증명서 또는 가족관계증명서), 휴가 확인서 등이 필요합니다.',
      source: '고용노동부',
      sourceUrl: 'https://work24.go.kr',
    },
    {
      q: '180일은 어떻게 계산하나요?',
      a: '고용보험 피보험 단위기간은 실제 근무한 날수 기준입니다. 이직 후 재취업한 경우 합산 기간을 기준으로 합니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '신청하면 언제 지급되나요?',
      a: '심사 완료 후 통상 14일 이내에 신청인 계좌로 입금됩니다.',
      source: '고용노동부',
      sourceUrl: 'https://work24.go.kr',
    },
    {
      q: '분할 사용하면 신청도 여러 번 해야 하나요?',
      a: '분할 사용 시 각 사용 구간마다 신청이 필요합니다. 각 구간 종료 후 12개월 이내에 신청해야 합니다.',
      source: '고용노동부',
      sourceUrl: 'https://work24.go.kr',
    },
  ],
  sources: [
    { name: '고용노동부', url: 'https://www.moel.go.kr' },
    { name: '고용24', url: 'https://work24.go.kr' },
    { name: '찾기쉬운 생활법령정보', url: 'https://www.easylaw.go.kr' },
  ],
};
