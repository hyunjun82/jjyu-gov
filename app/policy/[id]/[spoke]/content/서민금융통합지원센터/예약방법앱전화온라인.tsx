import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          서민금융통합지원센터 상담 예약은 <strong>서민금융콜센터 ☎1397</strong>(통화료 무료),
          <strong>서민금융 잇다 앱</strong>, 예약 웹사이트(sloan.kinfa.or.kr) 3가지 방법으로
          가능합니다. 예약 없이 센터를 직접 방문해도 됩니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        방문 전 예약하면 대기 시간 없이 상담을 받을 수 있습니다.
        불법사금융예방대출 등 일부 상품은 방문 전 사전 예약이 필수입니다.
      </p>

      <section className="detail-card" id="methods">
        <h2 className="detail-card-head">예약·상담 방법</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>방법</th><th>채널</th><th>운영 시간</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>전화 상담·예약</strong></td><td>국번없이 1397</td><td>평일 09:00~18:00, 야간 18:00~20:00</td></tr>
              <tr><td><strong>앱 예약·신청</strong></td><td>서민금융 잇다 앱</td><td>상시 이용 가능</td></tr>
              <tr><td><strong>온라인 예약</strong></td><td>sloan.kinfa.or.kr</td><td>상시 이용 가능</td></tr>
              <tr><td><strong>직접 방문</strong></td><td>전국 서민금융통합지원센터</td><td>평일 09:00~18:00</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="visit">
        <h2 className="detail-card-head">방문 절차</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>1단계:</strong> 1397 전화 또는 앱으로 가까운 센터 확인 후 예약
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>2단계:</strong> 센터 방문 → 방문 목적 확인 및 기초 상담
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>3단계:</strong> 서류 안내 및 작성 지원
          </div>
          <div className="info-box">
            <strong>4단계:</strong> 해당 참여기관 창구 연계 (서민금융진흥원·신복위·국민행복기금·미소금융재단)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="app">
        <h2 className="detail-card-head">서민금융 잇다 앱 기능</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>센터 찾기:</strong> 가까운 서민금융통합지원센터 위치 검색
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>상담 예약:</strong> 방문 전 사전 예약 가능
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>상품 조회:</strong> 본인에게 맞는 서민금융 상품 자격조회
          </div>
          <div className="info-box">
            <strong>추가·재대출:</strong> 불법사금융예방대출 추가·재대출은 앱으로 신청 가능
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            이용 대상, 대출 종류, 채무조정 방법까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/seomin-financial-center" className="btn-cta">
            서민금융통합지원센터 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 서민금융통합지원센터예약방법앱전화온라인SpokeContent: SpokeData = {
  h1: '서민금융통합지원센터 예약 방법, 앱·전화·온라인으로 상담받는 절차',
  breadcrumb: '예약방법앱전화온라인',
  description:
    '서민금융통합지원센터 예약: ☎1397(통화료 무료), 서민금융 잇다 앱, sloan.kinfa.or.kr 온라인 예약. 방문 없이 전화·앱으로 상담 예약 가능. 직접 방문도 가능.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '1397은 통화료가 무료인가요?',
      a: '네, 서민금융콜센터 1397은 수신자 부담 방식으로 통화료가 무료입니다. 국번 없이 1397로 전화하면 됩니다.',
      source: '서민금융진흥원',
      sourceUrl: 'https://www.kinfa.or.kr/counselingSupport/microfinanceCallCenter1397.do',
    },
    {
      q: '예약 없이 바로 방문해도 되나요?',
      a: '예약 없이 직접 방문해도 상담이 가능합니다. 다만 예약을 하면 대기 시간 없이 상담받을 수 있어 더 편리합니다. 불법사금융예방대출 등 일부 상품 신청은 사전 예약이 필수입니다.',
      source: '서민금융진흥원',
      sourceUrl: 'https://www.kinfa.or.kr/counselingSupport/centerIntroduction.do',
    },
    {
      q: '거동이 불편해 센터 방문이 어려우면 어떻게 하나요?',
      a: '이동상담 서비스가 별도로 운영됩니다. 1397로 연락하면 이동상담 신청 방법과 일정을 안내받을 수 있습니다.',
      source: '서민금융진흥원',
      sourceUrl: 'https://www.kinfa.or.kr/counselingSupport/movementConsultation.do',
    },
    {
      q: '1397 야간 상담(18:00~20:00)에는 어떤 도움을 받을 수 있나요?',
      a: '야간에도 서민금융 상품 안내, 채무조정 상담 등 기본적인 서민금융 상담이 가능합니다. 단, 주말·공휴일은 운영되지 않습니다.',
      source: '서민금융진흥원',
      sourceUrl: 'https://www.kinfa.or.kr/counselingSupport/microfinanceCallCenter1397.do',
    },
    {
      q: '서민금융 잇다 앱은 어디서 다운로드하나요?',
      a: '구글플레이 또는 애플 앱스토어에서 "서민금융 잇다"를 검색하여 다운로드할 수 있습니다. 2026년 1분기 기준 176.1만 명이 이용한 공식 앱입니다.',
      source: '서민금융진흥원',
      sourceUrl: 'https://www.kinfa.or.kr/main.do',
    },
  ],
  sources: [
    { name: '서민금융진흥원 센터 소개', url: 'https://www.kinfa.or.kr/counselingSupport/centerIntroduction.do' },
    { name: '서민금융진흥원 1397 콜센터', url: 'https://www.kinfa.or.kr/counselingSupport/microfinanceCallCenter1397.do' },
    { name: '서민금융진흥원', url: 'https://www.kinfa.or.kr' },
  ],
};
