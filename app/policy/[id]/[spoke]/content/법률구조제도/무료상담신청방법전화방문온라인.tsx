import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          대한법률구조공단 법률상담은 <strong>국번없이 132 전화상담</strong>,
          공단 지부·출장소 <strong>방문 면접상담</strong>, 홈페이지(klac.or.kr)를 통한
          <strong>사이버·채팅·화상상담</strong> 등 5가지 방법으로 이용할 수 있습니다.
          모두 평일 09:00~18:00에 운영됩니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        전화상담(132)은 통화료가 발신자 부담이며, 상담 예약 후 방문하면
        대기 시간을 줄일 수 있습니다.
      </p>

      <section className="detail-card" id="methods">
        <h2 className="detail-card-head">상담 방법 5가지</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>상담 유형</th><th>방법</th><th>운영 시간</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>전화상담</strong></td><td>국번없이 132</td><td>평일 09:00~18:00</td></tr>
              <tr><td><strong>면접상담</strong></td><td>예약 또는 비예약 방문</td><td>평일 09:00~18:00</td></tr>
              <tr><td><strong>화상상담</strong></td><td>예약 후 화상 연결</td><td>예약 일시</td></tr>
              <tr><td><strong>채팅상담</strong></td><td>홈페이지·132 전화</td><td>평일 10:00~17:00</td></tr>
              <tr><td><strong>사이버상담</strong></td><td>홈페이지 신청</td><td>상시 (답변 수령)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="visit">
        <h2 className="detail-card-head">방문 상담 예약 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>전화 예약:</strong> 국번없이 132로 전화 → 가까운 지부·출장소 예약
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>온라인 예약:</strong> klac.or.kr 홈페이지 챗봇으로 예약
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>비예약 방문:</strong> 예약 없이도 방문 상담 가능 (대기 발생)
          </div>
          <div className="info-box">
            <strong>주의:</strong> 예약 후 노쇼(취소 없이 미방문) 시 1개월간 예약 제한
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="special">
        <h2 className="detail-card-head">특수 상황 상담</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>거동불편자:</strong> 화상상담 우선 이용 가능
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>수화통역:</strong> ☎110으로 연결 후 상담
          </div>
          <div className="info-box">
            <strong>점심시간:</strong> 12:00~13:00 전화상담 불가 (방문 상담은 가능)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            지원 대상, 소송대리 비용, 지원 가능 사건 종류까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/legal-aid-system" className="btn-cta">
            법률구조 제도 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 법률구조제도무료상담신청방법전화방문온라인SpokeContent: SpokeData = {
  h1: '대한법률구조공단 무료 상담 신청 방법, 전화·방문·온라인 예약 절차',
  breadcrumb: '무료상담신청방법전화방문온라인',
  description:
    '대한법률구조공단 상담: 전화(국번없이 132), 면접(방문), 화상, 채팅, 사이버상담 5가지. 평일 09:00~18:00 운영. klac.or.kr 온라인 예약 가능. 수화통역 ☎110.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '132 전화는 무료인가요?',
      a: '전화 상담 자체는 무료이지만 통화료는 발신자(본인)가 부담합니다.',
      source: '대한법률구조공단',
      sourceUrl: 'https://www.klac.or.kr/legalstruct/consultationGuidance.do',
    },
    {
      q: '방문 상담은 얼마나 걸리나요?',
      a: '1회 면접상담은 20분 이내로 진행됩니다. 예약 후 방문하면 대기 시간을 줄일 수 있습니다.',
      source: '대한법률구조공단',
      sourceUrl: 'https://www.klac.or.kr/legalstruct/consultationGuidance.do',
    },
    {
      q: '예약을 취소하려면 어떻게 하나요?',
      a: '방문이 어렵다면 하루 전까지 반드시 예약을 취소해야 합니다. 취소 없이 미방문(노쇼)하면 1개월간 예약이 제한됩니다.',
      source: '대한법률구조공단',
      sourceUrl: 'https://www.klac.or.kr/legalstruct/consultationGuidance.do',
    },
    {
      q: '상담만 받고 소송 지원을 안 받아도 되나요?',
      a: '네, 법률상담만 받고 소송 지원은 신청하지 않아도 됩니다. 상담 후 구조 여부는 공단 담당자 검토를 통해 결정됩니다.',
      source: '대한법률구조공단',
      sourceUrl: 'https://www.klac.or.kr/legalstruct/consultationGuidance.do',
    },
    {
      q: '가까운 공단 위치는 어떻게 찾나요?',
      a: 'klac.or.kr 홈페이지 챗봇에서 가까운 공단 지부·출장소 위치를 확인할 수 있습니다. 또는 ☎132로 전화해 안내를 받으세요.',
      source: '대한법률구조공단',
      sourceUrl: 'https://www.klac.or.kr/legalstruct/consultationGuidance.do',
    },
  ],
  sources: [
    { name: '대한법률구조공단 법률상담 안내', url: 'https://www.klac.or.kr/legalstruct/consultationGuidance.do' },
    { name: '대한법률구조공단', url: 'https://www.klac.or.kr' },
    { name: '대한법률구조공단 소송구조개요', url: 'https://www.klac.or.kr/legalstruct/outlineOfLitigationStruct.do' },
  ],
};
