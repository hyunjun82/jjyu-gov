import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          국가장학금은 학생 통장이 아닌 <strong>대학 등록금 계좌로 직접 지급</strong>됩니다.
          보통 <strong>등록금 납부 기간 전후(학기 시작 1~2개월 전)</strong>에 대학으로 입금되어
          등록금에서 차감 처리됩니다.
        </p>
      </div>
      <section className="detail-card" id="timing">
        <h2 className="detail-card-head">학기별 지급 시기</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>학기</th><th>등록금 납부</th><th>장학금 반영 시기</th></tr></thead>
            <tbody>
              <tr><td>1학기 (1차 신청)</td><td>2~3월</td><td>2~3월 등록금 납부 시 차감</td></tr>
              <tr><td>2학기 (1차 신청)</td><td>8~9월</td><td>8~9월 등록금 납부 시 차감</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            장학금이 등록금을 초과하는 경우, 초과분은 학생 본인 계좌로 환급됩니다.
          </div>
        </div>
      </section>
      <section className="detail-card" id="check">
        <h2 className="detail-card-head">지급 현황 확인 방법</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>방법</th><th>경로</th></tr></thead>
            <tbody>
              <tr><td>한국장학재단 홈페이지</td><td>kosaf.go.kr → 장학금 → 지급현황 조회</td></tr>
              <tr><td>모바일 앱</td><td>한국장학재단 앱 → 나의 장학금</td></tr>
              <tr><td>문의</td><td>1599-2000 (한국장학재단 콜센터)</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export const 국가장학금국가장학금지급일통장입금시기SpokeContent: SpokeData = {
  h1: '국가장학금 지급일 — 통장에 언제 들어오나',
  breadcrumb: '국가장학금지급일통장입금시기',
  description: '국가장학금이 등록금 납부 계좌로 입금되는 시기와 과정을 정리합니다.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '국가장학금은 언제 통장에 입금되나요?',
      a: '대학에서 등록금 고지서 확정 후 한국장학재단이 대학에 직접 지급합니다. 개인 통장이 아닌 대학 고지서 차감 방식이 원칙입니다.',
      source: '한국장학재단',
      sourceUrl: 'https://www.kstudy.com',
    },
    {
      q: '장학금이 대학에 지급되는 시점은요?',
      a: '통상 학기 개시 후 1~2개월 내에 대학 계좌로 지급됩니다. 이후 대학이 수혜 학생 등록금 고지서에서 감액 처리합니다.',
      source: '한국장학재단 지급 안내',
      sourceUrl: 'https://www.kstudy.com',
    },
    {
      q: '등록금 납부 전에 장학금이 지급되나요?',
      a: '장학재단 지급 일정이 등록금 납부 기한보다 늦을 수 있습니다. 우선 등록금을 납부하고 이후 장학금이 차감·환급되는 방식입니다.',
      source: '한국장학재단',
      sourceUrl: 'https://www.kstudy.com',
    },
    {
      q: '지급 지연이 있을 때 어떻게 하나요?',
      a: '한국장학재단 고객센터(1599-2000) 또는 학교 장학담당 부서에 문의하세요. 서류 미비·가구원 동의 미완료가 원인인 경우가 많습니다.',
      source: '한국장학재단 고객센터',
      sourceUrl: 'https://www.kstudy.com',
    },
    {
      q: '장학금 수혜 확인서는 어디서 받나요?',
      a: '한국장학재단 홈페이지(kstudy.com) 로그인 → 장학금 신청 → 수혜 이력에서 확인증을 발급받을 수 있습니다.',
      source: '한국장학재단',
      sourceUrl: 'https://www.kstudy.com',
    }
  ],
  sources: [
    { name: '한국장학재단', url: 'https://www.kstudy.com' },
  ],
};
