import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          불법 사금융 피해자는 <strong>채무자대리인 무료 지원 제도</strong>를 통해
          <strong>변호사를 무료로 지원</strong>받을 수 있습니다.
          미등록 대부업체, 불법 고리대금, 연 20% 초과 이자 피해라면
          <strong>금융감독원 1332</strong>로 신고하면 됩니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        불법 사금융 피해는 혼자 해결하기 어렵습니다.
        국가 지원 변호사를 무료로 활용하는 절차를 확인하세요.
      </p>

      <section className="detail-card" id="illegal-types">
        <h2 className="detail-card-head">불법 사금융 유형</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>불법 유형</th><th>설명</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>미등록 대부업</strong></td><td>금융당국에 등록하지 않고 대부업 영업</td></tr>
              <tr><td><strong>최고금리 초과</strong></td><td>법정 최고금리(연 20%) 초과 이자 수취</td></tr>
              <tr><td><strong>불법 추심</strong></td><td>협박·폭언·야간 연락·제3자 통보 등</td></tr>
              <tr><td><strong>불법 담보</strong></td><td>신분증·통장·도장 불법 보관 요구</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="support-detail">
        <h2 className="detail-card-head">무료 지원 내용</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>변호사 지원:</strong> 대한법률구조공단 소속 변호사 무료 배정
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>추심 대응:</strong> 불법 추심 행위 법적 대응
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>채무 정리:</strong> 초과 이자·원금 법적 정리 지원
          </div>
          <div className="info-box">
            <strong>피해 신고:</strong> 불법 사금융 업체 형사 고발 지원
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="report">
        <h2 className="detail-card-head">신고 및 신청 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>전화 신고:</strong> 금융감독원 불법사금융신고센터 1332 (24시간)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>온라인 신청:</strong> 금융감독원 누리집 (fss.or.kr) → 불법금융 신고
          </div>
          <div className="info-box">
            <strong>방문:</strong> 전국 금융감독원 지원 또는 대한법률구조공단 지부 방문
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            불법 추심 대응, 최고금리 초과 기준, 채무자대리인 신청 절차까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/debtor-lawyer-free-support" className="btn-cta">
            채무자대리인 무료 지원 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 채무자대리인무료지원불법사금융피해자신청SpokeContent: SpokeData = {
  h1: '불법 사금융 피해자라면 채무자대리인 무료 지원 신청으로 변호사 받는 방법',
  breadcrumb: '불법사금융피해자신청',
  description:
    '불법 사금융 피해자(미등록 대부업·최고금리 초과·불법 추심) 채무자대리인 무료 지원: 대한법률구조공단 변호사 무료 배정. 금융감독원 1332(24시간) 또는 fss.or.kr 신청. 무료.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '불법 사금융인지 어떻게 확인하나요?',
      a: '금융감독원 금융소비자정보포털(fine.fss.or.kr)에서 대부업체 등록 여부를 확인할 수 있습니다. 미등록이면 불법 대부업입니다.',
      source: '금융감독원',
      sourceUrl: 'https://www.fss.or.kr',
    },
    {
      q: '1332는 24시간 운영하나요?',
      a: '금융감독원 불법사금융신고센터 1332는 24시간 신고를 접수합니다. 불법 추심이 발생하는 즉시 신고할 수 있습니다.',
      source: '금융감독원',
      sourceUrl: 'https://www.fss.or.kr',
    },
    {
      q: '이미 빌린 돈은 갚지 않아도 되나요?',
      a: '원금은 상환 의무가 있습니다. 다만 법정 최고금리(연 20%)를 초과하는 이자는 무효입니다. 변호사를 통해 초과 이자 반환을 청구할 수 있습니다.',
      source: '금융감독원',
      sourceUrl: 'https://www.fss.or.kr',
    },
    {
      q: '신분증을 빼앗겼다면 어떻게 해야 하나요?',
      a: '신분증을 불법으로 보관하거나 요구하는 것은 불법입니다. 즉시 경찰(112)에 신고하고, 금융감독원 1332에도 피해 사실을 알리세요.',
      source: '금융감독원',
      sourceUrl: 'https://www.fss.or.kr',
    },
    {
      q: '가족에게 연락하는 것도 불법인가요?',
      a: '채무자의 동의 없이 제3자(가족 등)에게 채무 사실을 알리거나 연락하는 행위는 불법 추심에 해당합니다. 증거를 수집해 1332에 신고하세요.',
      source: '금융감독원',
      sourceUrl: 'https://www.fss.or.kr',
    },
  ],
  sources: [
    { name: '금융감독원', url: 'https://www.fss.or.kr' },
    { name: '대한법률구조공단', url: 'https://www.klac.or.kr' },
    { name: '금융위원회', url: 'https://www.fsc.go.kr' },
  ],
};
