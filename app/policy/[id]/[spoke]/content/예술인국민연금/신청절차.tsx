import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          예술활동증명 완료 후 예술인 국민연금 보험료 지원을 신청하려면
          <strong>예술인경력정보시스템(kawfartist.kr)</strong>에서 온라인 접수합니다.
          소득금액증명원, 표준계약서 사본, 보험료 납부 증빙을 준비해야 하며,
          신청 기간은 <strong>매년 2월말~8월말</strong>입니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        예술활동증명을 완료했는데 국민연금 보험료 지원 신청은 어디서, 어떻게 하나요?
        단계별 절차를 정리했습니다.
      </p>

      <section className="detail-card" id="steps">
        <h2 className="detail-card-head">예술활동증명 완료 후 신청하는 예술인 국민연금 보험료 지원 절차</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>단계</th><th>내용</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1단계</strong></td>
                <td>예술활동증명 완료 확인 (kawfartist.kr 로그인 → 증명 현황 조회)</td>
              </tr>
              <tr>
                <td><strong>2단계</strong></td>
                <td>표준계약서 사용 이력 확인 (문화예술용역 계약 시 표준계약서 체결)</td>
              </tr>
              <tr>
                <td><strong>3단계</strong></td>
                <td>서류 준비: 소득금액증명원, 표준계약서 사본, 국민연금 보험료 납부 증빙</td>
              </tr>
              <tr>
                <td><strong>4단계</strong></td>
                <td>kawfartist.kr 로그인 → 복지지원 → 예술인국민연금보험료지원 → 온라인 신청</td>
              </tr>
              <tr>
                <td><strong>5단계</strong></td>
                <td>심사 후 지원금 지급 (전년도 3분기~당해 2분기 납부 보험료 기준)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="documents">
        <h2 className="detail-card-head">필요 서류</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>① 소득금액증명원:</strong> 국세청 홈택스(hometax.go.kr) 또는 주민센터 발급
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>② 표준계약서 사본:</strong> 문화예술 관련 계약 시 작성한 표준계약서
          </div>
          <div className="info-box">
            <strong>③ 국민연금 보험료 납부 증빙:</strong> 국민연금공단에서 발급받은 납부 확인서
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="period-note">
        <h2 className="detail-card-head">신청 기간 및 주의사항</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>신청 기간:</strong> 매년 2월말~8월말 (연 1회, 예산 소진 시 조기 마감)
          </div>
          <div className="warning-box" style={{ marginBottom: 12 }}>
            <strong>조기 마감 주의:</strong> 예산이 소진되면 기간 내라도 접수가 마감됩니다.
            공고 직후 빠르게 신청하는 것을 권장합니다.
          </div>
          <div className="info-box">
            <strong>문의:</strong> 한국예술인복지재단 사회보험팀 02-3668-0200
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            신청 자격, 지원 금액, 중복 여부 등<br />
            예술인 국민연금 보험료 지원 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/artist-pension" className="btn-cta">
            예술인 국민연금 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 예술인연금신청절차SpokeContent: SpokeData = {
  h1: '예술활동증명 완료 후 신청하는 예술인 국민연금 보험료 지원 절차',
  breadcrumb: '신청절차',
  description:
    '예술인 국민연금 보험료 지원 신청: kawfartist.kr 온라인 접수. 필요 서류: 소득금액증명원, 표준계약서 사본, 보험료 납부 증빙. 신청 기간 매년 2월말~8월말, 예산 소진 시 조기 마감.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '신청은 어디서 하나요?',
      a: '예술인경력정보시스템(kawfartist.kr)에 로그인 후 복지지원 메뉴에서 온라인으로 신청합니다.',
      source: '한국예술인복지재단',
      sourceUrl: 'https://www.kawf.kr',
    },
    {
      q: '소득금액증명원은 어디서 발급받나요?',
      a: '국세청 홈택스(hometax.go.kr)에서 온라인 발급하거나 가까운 세무서·주민센터에서 발급할 수 있습니다.',
      source: '국세청 홈택스',
      sourceUrl: 'https://www.hometax.go.kr',
    },
    {
      q: '표준계약서가 없으면 신청이 안 되나요?',
      a: '표준계약서 체결이 지원 요건 중 하나입니다. 문화예술용역 관련 계약 시 표준계약서를 사용해야 합니다. 한국예술인복지재단에서 표준계약서 양식을 제공합니다.',
      source: '한국예술인복지재단',
      sourceUrl: 'https://www.kawf.kr',
    },
    {
      q: '보험료 납부 증빙은 어디서 발급받나요?',
      a: '국민연금공단(nps.or.kr) 또는 고객센터(☎1355)에서 납부 확인서를 발급받을 수 있습니다.',
      source: '국민연금공단',
      sourceUrl: 'https://www.nps.or.kr',
    },
    {
      q: '신청 후 얼마 만에 지원금이 들어오나요?',
      a: '심사 후 지급됩니다. 정확한 지급 일정은 해당 연도 공고를 확인하거나 사회보험팀(02-3668-0200)에 문의하세요.',
      source: '한국예술인복지재단',
      sourceUrl: 'https://www.kawf.kr',
    },
  ],
  sources: [
    { name: '한국예술인복지재단', url: 'https://www.kawf.kr' },
    { name: '예술인경력정보시스템', url: 'https://www.kawfartist.kr' },
  ],
};
