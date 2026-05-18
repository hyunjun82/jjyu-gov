import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          희망리턴패키지 신청 대상은 <strong>폐업했거나 폐업 예정인 소상공인</strong>입니다.
          사업자등록증 기준 <strong>60일 이상 사업을 운영</strong>한 이력이 있어야 하며,
          만 15~69세이면 신청 가능합니다.
          신청처는 소상공인진흥공단 사이트(sbiz.or.kr)입니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "폐업했는데 지원을 받을 수 있을까?" 희망리턴패키지는 폐업 소상공인을 위한 종합 지원 프로그램입니다.
        원스톱폐업지원, 특화취업지원, 재창업지원까지 세 가지 트랙으로 나뉘며 각각 신청 조건이 조금씩 다릅니다.
      </p>

      <section className="detail-card" id="qualify">
        <h2 className="detail-card-head">공통 신청 자격 — 폐업 소상공인 60일 이상 운영</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>기준</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>나이</td>
                <td><strong>만 15~69세</strong></td>
              </tr>
              <tr>
                <td>사업자 상태</td>
                <td><strong>폐업 완료 또는 폐업 예정 소상공인</strong></td>
              </tr>
              <tr>
                <td>운영 기간</td>
                <td><strong>사업자등록 기준 60일 이상 사업 운영</strong></td>
              </tr>
              <tr>
                <td>사업 규모</td>
                <td>소상공인기본법 상 소상공인 (업종별 상시 근로자 수 기준)</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>폐업 예정자도 신청 가능:</strong> 아직 폐업 전이라도 폐업 예정 소상공인이라면 사전에 신청해
            원스톱 폐업지원 서비스를 받을 수 있습니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="compare">
        <h2 className="detail-card-head">지원 트랙별 대상 기준</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>지원 트랙</th><th>주요 대상</th><th>핵심 지원</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>원스톱 폐업지원</td>
                <td>폐업 예정·진행 중 소상공인</td>
                <td>점포철거비, 법률·회계·세무 컨설팅</td>
              </tr>
              <tr>
                <td>특화취업지원</td>
                <td>폐업 후 취업 희망 소상공인</td>
                <td>전직장려수당 최대 100만원, 취업교육</td>
              </tr>
              <tr>
                <td>재창업지원</td>
                <td>폐업 후 1년 미만, 새 업종 창업 희망자</td>
                <td>재창업 컨설팅, 사업화 자금 연계</td>
              </tr>
            </tbody>
          </table>
          <div className="warning-box" style={{ marginTop: 12 }}>
            <strong>중복 신청 제한:</strong> 특화취업지원과 재창업지원은 동시 신청이 제한될 수 있습니다.
            지원 트랙 중 하나를 선택해 신청하세요.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="process">
        <h2 className="detail-card-head">신청 방법 — sbiz.or.kr</h2>
        <div className="detail-card-body">
          <ol style={{ listStyle: 'decimal', paddingLeft: 20, lineHeight: 2.2 }}>
            <li>
              <strong>소상공인진흥공단 홈페이지</strong>(sbiz.or.kr) 접속
            </li>
            <li>
              희망리턴패키지 → 지원 트랙 선택 (원스톱/취업/재창업)
            </li>
            <li>
              온라인 신청서 작성 및 서류 제출
            </li>
            <li>
              담당자 검토 후 지원 확정 통보
            </li>
          </ol>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>문의:</strong> 소상공인진흥공단 통합콜센터 ☎1357
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            점포철거비, 전직장려수당, 재창업 지원 등<br />
            소상공인 희망리턴패키지 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/small-biz-hope-return" className="btn-cta">
            희망리턴패키지 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 소상공인희망리턴패키지신청자격폐업소상공인60일운영조건확인SpokeContent: SpokeData = {
  h1: '희망리턴패키지 신청자격, 폐업 소상공인 60일 이상 운영 조건 확인',
  breadcrumb: '신청자격',
  description:
    '소상공인 희망리턴패키지 신청자격을 안내합니다. 만 15~69세 폐업 또는 폐업 예정 소상공인으로 사업자등록 기준 60일 이상 운영 이력이 있어야 합니다. 원스톱폐업지원·특화취업지원·재창업지원 세 트랙별 대상 기준과 신청 방법을 확인하세요.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '폐업 신고 전에도 희망리턴패키지를 신청할 수 있나요?',
      a: '네, 폐업 예정 소상공인도 사전에 신청할 수 있습니다. 원스톱 폐업지원 서비스를 통해 폐업 절차와 함께 지원을 받을 수 있습니다.',
      source: '소상공인진흥공단 희망리턴패키지 안내',
      sourceUrl: 'https://www.sbiz.or.kr',
    },
    {
      q: '사업 시작한 지 두 달이 안 됐는데 신청 가능한가요?',
      a: '사업자등록 기준 60일(약 2개월) 이상 운영한 이력이 있어야 합니다. 60일 미만이면 신청 대상에서 제외됩니다.',
      source: '소상공인진흥공단 희망리턴패키지 자격 기준',
      sourceUrl: 'https://www.sbiz.or.kr',
    },
    {
      q: '만 70세도 신청할 수 있나요?',
      a: '희망리턴패키지 신청 가능 연령은 만 15~69세입니다. 만 70세 이상은 대상에서 제외됩니다.',
      source: '소상공인진흥공단 희망리턴패키지 안내',
      sourceUrl: 'https://www.sbiz.or.kr',
    },
    {
      q: '직원이 10명인 중소기업도 신청할 수 있나요?',
      a: '소상공인기본법 상 소상공인만 신청 가능합니다. 업종별 상시 근로자 수 기준을 충족해야 하며, 직원 10명이면 업종에 따라 소상공인 기준을 벗어날 수 있습니다. 소상공인 여부를 먼저 확인하세요.',
      source: '소상공인기본법 소상공인 정의',
      sourceUrl: 'https://www.sbiz.or.kr',
    },
    {
      q: '취업지원과 재창업지원을 동시에 신청할 수 있나요?',
      a: '특화취업지원과 재창업지원은 동시 신청이 제한될 수 있습니다. 지원 목적에 맞는 트랙 하나를 선택해 신청하세요. 소상공인진흥공단 ☎1357에 문의하면 안내받을 수 있습니다.',
      source: '소상공인진흥공단 희망리턴패키지 FAQ',
      sourceUrl: 'https://www.sbiz.or.kr',
    },
  ],
  sources: [
    { name: '소상공인진흥공단 희망리턴패키지 안내', url: 'https://www.sbiz.or.kr' },
    { name: '소상공인마당 희망리턴패키지 공고', url: 'https://www.sbiz.or.kr/sup/business/bizAction.do' },
  ],
};
