import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          임대차 분쟁 해결 방법은 <strong>소송</strong>과 <strong>조정</strong>으로 나뉩니다.
          소송은 법적 강제력이 강하지만 비용·기간이 크고,
          조정은 <strong>60일 이내·저비용</strong>으로 처리되지만
          상대방의 동의가 필요합니다.
          분쟁 금액과 상황에 따라 유리한 방법이 다릅니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        소송과 조정 중 어느 방법이 나에게 맞는지 주요 항목별로 비교합니다.
      </p>

      <section className="detail-card" id="compare">
        <h2 className="detail-card-head">소송 vs 분쟁조정 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>소송 (민사소송)</th><th>분쟁조정위원회</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>처리 기간</strong></td><td>6개월~2년 이상</td><td>60일 이내 (최대 90일)</td></tr>
              <tr><td><strong>비용</strong></td><td>인지대 + 변호사비 (수십만~수백만원)</td><td>1만~10만원 (취약계층 면제)</td></tr>
              <tr><td><strong>법적 효력</strong></td><td>판결 = 강제집행 가능</td><td>조정 성립 = 재판상 화해 (강제집행 가능)</td></tr>
              <tr><td><strong>상대방 동의</strong></td><td>불필요</td><td>필요 (불성립 시 소송 제기)</td></tr>
              <tr><td><strong>절차 복잡도</strong></td><td>높음</td><td>낮음</td></tr>
              <tr><td><strong>조력 가능</strong></td><td>변호사 필요</td><td>위원회가 중립 조정</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="when-adjust">
        <h2 className="detail-card-head">조정이 유리한 경우</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>비용 부담이 클 때:</strong> 소송 비용보다 분쟁 금액이 작을 경우
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>빠른 해결이 필요할 때:</strong> 이사·계약 일정이 촉박한 경우
          </div>
          <div className="info-box">
            <strong>상대방 대화 의지가 있을 때:</strong> 합의 가능성이 있는 분쟁
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="when-sue">
        <h2 className="detail-card-head">소송이 필요한 경우</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>상대방이 조정 거부:</strong> 조정 참여 자체를 거부하는 경우
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>조정 불성립 후:</strong> 조정이 실패하면 소송으로 전환
          </div>
          <div className="info-box">
            <strong>강제이행 필요:</strong> 판결 집행으로 즉시 강제할 사안
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            분쟁조정 신청 방법, 보증금 반환 절차, 수수료 안내까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/rental-dispute-mediation" className="btn-cta">
            임대차 분쟁조정위원회 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 임대차분쟁조정위원회소송분쟁조정비교SpokeContent: SpokeData = {
  h1: '임대차 분쟁 소송과 조정 중 어떤 게 더 유리한가, 비용·기간·효력 비교',
  breadcrumb: '소송분쟁조정비교',
  description:
    '임대차 분쟁 소송 vs 조정 비교: 소송(6개월~, 수십만원~), 조정(60일·1만~10만원·취약계층 면제). 조정 성립=재판상 화해(강제집행 가능). 상대방 동의 필요. 빠른 해결엔 조정, 거부 시 소송.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '조정 성립은 소송 판결과 같은 효력인가요?',
      a: '조정이 성립되면 재판상 화해와 동일한 효력이 발생합니다. 상대방이 이행하지 않으면 별도 소송 없이 강제집행을 신청할 수 있습니다.',
      source: '대한법률구조공단',
      sourceUrl: 'https://adrhome.reb.or.kr',
    },
    {
      q: '조정을 먼저 신청하면 소송을 나중에 못 하나요?',
      a: '아닙니다. 조정이 불성립되면 이후 법원에 소송을 제기할 수 있습니다. 조정과 소송은 순서에 관계없이 선택할 수 있습니다.',
      source: '대한법률구조공단',
      sourceUrl: 'https://adrhome.reb.or.kr',
    },
    {
      q: '소액 분쟁(소액임차인)도 조정 신청이 유리한가요?',
      a: '소액 분쟁일수록 소송 비용 대비 회수금이 작아 조정이 유리합니다. 분쟁조정 수수료는 최소 1만원으로 부담이 낮습니다.',
      source: '대한법률구조공단',
      sourceUrl: 'https://adrhome.reb.or.kr',
    },
    {
      q: '조정 신청 중에 소송도 동시에 진행할 수 있나요?',
      a: '소송과 조정을 동시에 진행하는 것은 일반적으로 어렵습니다. 하나의 절차를 먼저 마치거나 조정 불성립 후 소송으로 전환하는 것이 일반적입니다.',
      source: '대한법률구조공단',
      sourceUrl: 'https://adrhome.reb.or.kr',
    },
    {
      q: '상대방이 조정에 응하지 않으면 강제할 수 있나요?',
      a: '상대방을 조정에 강제로 참여시킬 수 없습니다. 조정 거부 시 절차는 종료되고 소송으로 전환해야 합니다.',
      source: '대한법률구조공단',
      sourceUrl: 'https://adrhome.reb.or.kr',
    },
  ],
  sources: [
    { name: '대한법률구조공단 임대차분쟁조정위원회', url: 'https://adrhome.reb.or.kr' },
    { name: '한국부동산원 상가건물임대차분쟁조정위원회', url: 'https://www.hldcc.or.kr' },
    { name: '법제처 국가법령정보센터', url: 'https://www.law.go.kr' },
  ],
};
