import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          희망리턴패키지 점포철거비는 <strong>최대 600만원</strong>을 지원합니다(2026년 기준).
          폐업 후 점포 원상복구나 인테리어 철거가 필요한 소상공인이 대상이며,
          소상공인진흥공단(sbiz.or.kr)에서 신청하고 현장 확인 후 지급됩니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        임대 계약 종료 후 원상복구가 필요한데 비용이 부담된다면, 희망리턴패키지 점포철거비를 먼저 확인하세요.
        지원 조건, 필요 서류, 신청 절차를 단계별로 정리했습니다.
      </p>

      <section className="detail-card" id="amount">
        <h2 className="detail-card-head">점포철거비 지원 금액 — 최대 600만원</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>내용</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>지원 한도</td>
                <td><strong>최대 600만원</strong> (2026년 기준)</td>
              </tr>
              <tr>
                <td>지원 범위</td>
                <td>점포 인테리어 철거비, 원상복구 공사비</td>
              </tr>
              <tr>
                <td>지원 방식</td>
                <td>실비 지원 (영수증 기반, 한도 내 지급)</td>
              </tr>
              <tr>
                <td>자기부담</td>
                <td>한도 초과분은 본인 부담</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>2026년 지원 확대:</strong> 점포철거비 지원 한도는 정부 예산에 따라 연도별로 변경될 수 있습니다.
            신청 시점의 공고를 소상공인진흥공단에서 확인하세요.
          </div>
        </div>
      </section>

      <section className="detail-card" id="qualify">
        <h2 className="detail-card-head">신청 조건</h2>
        <div className="detail-card-body">
          <ul style={{ listStyle: 'disc', paddingLeft: 20, lineHeight: 2.2 }}>
            <li>폐업 완료 또는 폐업 예정 소상공인 (만 15~69세)</li>
            <li>사업자등록 기준 60일 이상 운영 이력</li>
            <li>임대 점포의 원상복구 또는 인테리어 철거 필요</li>
            <li>철거 공사 전 신청 필수 (사후 신청 불가)</li>
          </ul>
          <div className="warning-box" style={{ marginTop: 12 }}>
            <strong>주의:</strong> 철거 공사를 먼저 진행하면 지원을 받을 수 없습니다.
            반드시 소상공인진흥공단에 신청하고 현장 확인을 받은 후 공사를 진행하세요.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="documents">
        <h2 className="detail-card-head">필요 서류</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>서류</th><th>발급처</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>폐업사실증명원</td>
                <td>세무서 또는 홈택스</td>
              </tr>
              <tr>
                <td>임대차계약서 사본</td>
                <td>본인 보유</td>
              </tr>
              <tr>
                <td>철거 예정 공사 견적서</td>
                <td>철거 업체 발행</td>
              </tr>
              <tr>
                <td>사업자등록증 사본</td>
                <td>세무서 또는 홈택스</td>
              </tr>
              <tr>
                <td>신분증 사본</td>
                <td>본인 보유</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="process">
        <h2 className="detail-card-head">신청 절차 4단계</h2>
        <div className="detail-card-body">
          <ol style={{ listStyle: 'decimal', paddingLeft: 20, lineHeight: 2.2 }}>
            <li>
              <strong>온라인 신청:</strong> sbiz.or.kr → 희망리턴패키지 → 점포철거비 신청
            </li>
            <li>
              <strong>서류 제출:</strong> 폐업증명원·임대차계약서·철거 견적서 업로드
            </li>
            <li>
              <strong>현장 확인:</strong> 소상공인진흥공단 담당자 현장 방문 확인
            </li>
            <li>
              <strong>지급:</strong> 공사 완료 후 영수증 제출 → 등록 계좌로 지급
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
            신청자격, 전직장려수당, 재창업 지원 등<br />
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

export const 소상공인희망리턴패키지점포철거비2026최대600만조건절차신청SpokeContent: SpokeData = {
  h1: '희망리턴패키지 점포철거비, 2026년 최대 600만원 지원 조건과 절차',
  breadcrumb: '점포철거비',
  description:
    '소상공인 희망리턴패키지 점포철거비는 2026년 기준 최대 600만원을 지원합니다. 폐업 소상공인이 임대 점포 원상복구·인테리어 철거 시 실비를 지원하며, 철거 공사 전 소상공인진흥공단에 먼저 신청해야 합니다. 필요 서류와 4단계 신청 절차를 확인하세요.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '점포철거비는 최대 얼마나 받을 수 있나요?',
      a: '2026년 기준 최대 600만원입니다. 실비 지원 방식이므로 실제 철거비용이 600만원 미만이면 그 금액만큼 지원됩니다.',
      source: '소상공인진흥공단 희망리턴패키지 안내',
      sourceUrl: 'https://www.sbiz.or.kr',
    },
    {
      q: '철거 공사를 먼저 했는데 나중에 신청해도 되나요?',
      a: '공사 전 신청이 원칙입니다. 사전 신청 없이 공사를 먼저 진행하면 지원받기 어렵습니다. 반드시 신청 후 현장 확인을 받은 뒤 공사를 진행하세요.',
      source: '소상공인진흥공단 점포철거비 지원 기준',
      sourceUrl: 'https://www.sbiz.or.kr',
    },
    {
      q: '폐업증명원이 없어도 신청할 수 있나요?',
      a: '폐업 예정자는 폐업증명원 없이 신청할 수 있지만, 지원금은 폐업 완료 후 지급됩니다. 신청 시 폐업 예정임을 확인할 수 있는 서류를 대신 제출할 수 있습니다. 소상공인진흥공단 ☎1357에 문의하세요.',
      source: '소상공인진흥공단 희망리턴패키지 FAQ',
      sourceUrl: 'https://www.sbiz.or.kr',
    },
    {
      q: '견적서는 아무 업체에서나 받아도 되나요?',
      a: '사업자등록이 된 합법적인 철거 업체의 견적서여야 합니다. 개인 간 거래나 무등록 업체 견적서는 인정되지 않을 수 있습니다.',
      source: '소상공인진흥공단 점포철거비 서류 기준',
      sourceUrl: 'https://www.sbiz.or.kr',
    },
    {
      q: '자가 점포(내 소유)도 철거비 지원을 받을 수 있나요?',
      a: '점포철거비는 주로 임대 점포의 원상복구가 목적입니다. 자가 소유 점포의 경우 지원 여부가 다를 수 있으므로 소상공인진흥공단 ☎1357에 개별 확인하세요.',
      source: '소상공인진흥공단 희망리턴패키지 안내',
      sourceUrl: 'https://www.sbiz.or.kr',
    },
  ],
  sources: [
    { name: '소상공인진흥공단 희망리턴패키지 안내', url: 'https://www.sbiz.or.kr' },
    { name: '소상공인마당 점포철거비 지원 공고', url: 'https://www.sbiz.or.kr/sup/business/bizAction.do' },
  ],
};
