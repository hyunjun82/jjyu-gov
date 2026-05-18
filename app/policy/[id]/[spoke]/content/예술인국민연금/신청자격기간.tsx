import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          예술인 국민연금 보험료 지원은 예술활동증명을 완료하고
          표준계약서를 체결한 국내 거주 예술인 중
          <strong>국민연금 지역가입자 또는 임의가입자</strong>를 대상으로
          <strong>월 최대 37,950원</strong>을 지원합니다.
          신청 기간은 <strong>매년 2월말~8월말</strong>이며,
          예산 소진 시 조기 마감될 수 있습니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "예술인 국민연금 보험료 지원을 받으려면 어떤 자격이 필요한가요?"
        자격 요건과 신청 기간을 정리했습니다.
      </p>

      <section className="detail-card" id="eligibility">
        <h2 className="detail-card-head">예술인 국민연금 보험료 지원 | 월 최대 37,950원 · 신청 자격과 기간</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>자격 요건</th><th>내용</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>① 예술활동증명</td>
                <td>신청일 기준 유효한 예술활동증명 완료 (「예술인 복지법」)</td>
              </tr>
              <tr>
                <td>② 표준계약서 체결</td>
                <td>문화예술용역 관련 계약 시 표준계약서 사용</td>
              </tr>
              <tr>
                <td>③ 국민연금 가입 유형</td>
                <td>지역가입자 또는 임의가입자 (직장가입자 제외)</td>
              </tr>
              <tr>
                <td>④ 소득 기준</td>
                <td>연소득 기준 중위소득 120% 이내</td>
              </tr>
              <tr>
                <td>⑤ 납부 이력</td>
                <td>실제 보험료 납부 이력 있을 것</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="amount-period">
        <h2 className="detail-card-head">지원 금액과 신청 기간</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>지원 금액:</strong> 1인당 월 최대 37,950원
            (국민연금 저소득 지역가입자 지원금 기준 준용)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>지원 범위:</strong> 전년도 3분기~당해 연도 2분기까지 납부한 보험료
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>신청 기간:</strong> 매년 2월말경~8월말까지 온라인 접수
          </div>
          <div className="warning-box">
            예산 소진 시 조기 마감됩니다. 공고 확인 후 빠르게 신청하세요.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="how-to-apply">
        <h2 className="detail-card-head">신청 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>신청처:</strong> 예술인경력정보시스템(kawfartist.kr) 로그인 →
            복지지원 메뉴 → 예술인국민연금보험료지원
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>필수 서류:</strong> 소득금액증명원, 표준계약서 사본, 보험료 납부 증빙
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
            두루누리 중복 여부, 지역가입자 조건 등<br />
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

export const 예술인연금신청자격SpokeContent: SpokeData = {
  h1: '예술인 국민연금 보험료 지원 | 월 최대 37,950원 · 신청 자격과 기간',
  breadcrumb: '신청자격기간',
  description:
    '예술인 국민연금 보험료 지원: 예술활동증명+표준계약서+지역·임의가입자 조건 충족 시 월 최대 37,950원 지원. 소득 기준 중위소득 120% 이내. 신청 기간 매년 2월말~8월말. kawfartist.kr 온라인 신청.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '예술인 국민연금 보험료 지원은 얼마나 받을 수 있나요?',
      a: '1인당 월 최대 37,950원을 지원받을 수 있습니다. 국민연금 저소득 지역가입자 지원금 기준을 준용합니다.',
      source: '한국예술인복지재단',
      sourceUrl: 'https://www.kawf.kr',
    },
    {
      q: '예술활동증명이 없으면 신청할 수 없나요?',
      a: '신청일 기준 유효한 예술활동증명을 완료한 예술인만 신청 가능합니다. 예술활동증명은 예술인경력정보시스템(kawfartist.kr)에서 신청할 수 있습니다.',
      source: '한국예술인복지재단',
      sourceUrl: 'https://www.kawf.kr',
    },
    {
      q: '직장가입자인 예술인도 신청할 수 있나요?',
      a: '아닙니다. 직장가입자는 지원 대상에서 제외됩니다. 지역가입자 또는 임의가입자만 신청 가능합니다.',
      source: '한국예술인복지재단',
      sourceUrl: 'https://www.kawf.kr',
    },
    {
      q: '신청 기간을 놓치면 어떻게 되나요?',
      a: '신청 기간(매년 2월말~8월말)을 놓치면 해당 연도 지원을 받을 수 없습니다. 예산 소진 시 조기 마감될 수 있으므로 공고 후 빠르게 신청하세요.',
      source: '한국예술인복지재단',
      sourceUrl: 'https://www.kawf.kr',
    },
    {
      q: '소득이 중위소득 120%를 넘으면 지원이 안 되나요?',
      a: '연소득이 기준 중위소득 120%를 초과하면 지원이 보류될 수 있습니다. 정확한 소득 기준은 해당 연도 공고를 확인하세요.',
      source: '한국예술인복지재단',
      sourceUrl: 'https://www.kawf.kr',
    },
  ],
  sources: [
    { name: '한국예술인복지재단', url: 'https://www.kawf.kr' },
    { name: '예술인경력정보시스템', url: 'https://www.kawfartist.kr' },
  ],
};
