import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          프리랜서 작가·음악가 등 국민연금 <strong>지역가입자</strong>라면
          예술인 국민연금 보험료 지원 신청이 가능합니다.
          예술활동증명 완료, 표준계약서 체결, 중위소득 120% 이내 소득 조건을 충족하면
          <strong>월 최대 37,950원</strong>을 지원받을 수 있습니다.
          단, <strong>직장가입자는 대상에서 제외</strong>됩니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "프리랜서 작가인데 국민연금 지역가입자입니다. 예술인 보험료 지원 신청이 가능한가요?"
        가입 유형별 지원 여부를 정리했습니다.
      </p>

      <section className="detail-card" id="type-comparison">
        <h2 className="detail-card-head">프리랜서 작가인데 국민연금 지역가입자라면 예술인 보험료 지원 신청 가능한가</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>국민연금 가입 유형</th><th>지원 여부</th><th>비고</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>지역가입자</strong></td>
                <td>✅ 가능</td>
                <td>프리랜서·자영업 예술인</td>
              </tr>
              <tr>
                <td><strong>임의가입자</strong></td>
                <td>✅ 가능</td>
                <td>소득 없어도 자발적 가입자</td>
              </tr>
              <tr>
                <td><strong>직장가입자</strong></td>
                <td>❌ 불가</td>
                <td>회사에 재직 중인 경우</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            프리랜서 작가·음악가·미술가 등 고용관계 없이 활동하는 예술인은
            대부분 지역가입자에 해당해 지원 대상입니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="requirements">
        <h2 className="detail-card-head">지역가입자 예술인이 추가로 충족해야 할 조건</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>① 예술활동증명 유효:</strong> 신청일 기준 예술활동증명이 완료된 상태
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>② 표준계약서 체결:</strong> 문화예술용역 계약 시 표준계약서 사용 이력
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>③ 소득 기준:</strong> 연소득 기준 중위소득 120% 이내
          </div>
          <div className="info-box">
            <strong>④ 납부 이력:</strong> 전년도 3분기~당해 2분기 보험료 실제 납부
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="apply-info">
        <h2 className="detail-card-head">신청 방법과 문의처</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>신청처:</strong> 예술인경력정보시스템 kawfartist.kr → 복지지원 → 예술인국민연금보험료지원
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>신청 기간:</strong> 매년 2월말~8월말 (예산 소진 시 조기 마감)
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
            지원 금액, 신청 절차, 두루누리 중복 여부 등<br />
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

export const 예술인연금지역가입자SpokeContent: SpokeData = {
  h1: '프리랜서 작가인데 국민연금 지역가입자라면 예술인 보험료 지원 신청 가능한가',
  breadcrumb: '지역가입자',
  description:
    '국민연금 지역가입자·임의가입자 예술인은 예술인 국민연금 보험료 지원 신청 가능. 직장가입자는 제외. 예술활동증명+표준계약서+중위소득 120% 이내 조건 충족 시 월 최대 37,950원 지원.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '프리랜서 예술인이면 지역가입자인가요?',
      a: '고용관계 없이 활동하는 프리랜서 예술인은 대부분 국민연금 지역가입자에 해당합니다. 직장에 재직 중이라면 직장가입자로 분류되어 지원 대상에서 제외됩니다.',
      source: '한국예술인복지재단',
      sourceUrl: 'https://www.kawf.kr',
    },
    {
      q: '임의가입자도 신청할 수 있나요?',
      a: '네. 임의가입자도 지원 대상입니다. 소득이 없어도 자발적으로 국민연금에 가입한 경우 신청할 수 있습니다.',
      source: '한국예술인복지재단',
      sourceUrl: 'https://www.kawf.kr',
    },
    {
      q: '직장에 다니면서 예술 활동도 하는 경우는요?',
      a: '직장가입자이면 예술인 국민연금 보험료 지원 대상에서 제외됩니다. 퇴직 후 지역가입자로 전환되면 신청 가능합니다.',
      source: '한국예술인복지재단',
      sourceUrl: 'https://www.kawf.kr',
    },
    {
      q: '내가 지역가입자인지 어떻게 확인하나요?',
      a: '국민연금공단 고객센터(☎1355) 또는 내연금(nps.or.kr)에서 가입 유형을 확인할 수 있습니다.',
      source: '국민연금공단',
      sourceUrl: 'https://www.nps.or.kr',
    },
    {
      q: '소득이 중위소득 120%를 살짝 넘으면 어떻게 되나요?',
      a: '연소득이 기준 중위소득 120%를 초과하면 지원이 보류될 수 있습니다. 정확한 기준은 해당 연도 공고를 확인하세요.',
      source: '한국예술인복지재단',
      sourceUrl: 'https://www.kawf.kr',
    },
  ],
  sources: [
    { name: '한국예술인복지재단', url: 'https://www.kawf.kr' },
    { name: '예술인경력정보시스템', url: 'https://www.kawfartist.kr' },
    { name: '국민연금공단', url: 'https://www.nps.or.kr' },
  ],
};
