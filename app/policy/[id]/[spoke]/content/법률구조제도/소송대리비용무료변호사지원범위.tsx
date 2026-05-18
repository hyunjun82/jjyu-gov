import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          법률구조공단의 소송대리는 무료 대상자(기초수급자·임금체불 피해근로자·농어민 등)에게
          <strong>변호사 비용 전액</strong>을 지원합니다.
          유료 대상자(중위소득 125% 이하)는 대법원규칙 기준 변호사 비용의
          <strong>약 30% 수준</strong>만 납부하면 됩니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        공단 소송구조 사건의 90% 이상이 무료 법률구조 대상자 사건이며,
        전액 본인 부담 사례는 전체의 9.8%에 불과합니다.
      </p>

      <section className="detail-card" id="cost">
        <h2 className="detail-card-head">소송대리 비용 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>구분</th><th>대상</th><th>본인 부담 비용</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>무료 구조</strong></td><td>기초수급자, 임금체불 근로자, 농·어민 등</td><td>전액 무료 (인지대·변호사비 출연기관 부담)</td></tr>
              <tr><td><strong>유료 구조</strong></td><td>중위소득 125% 이하</td><td>변호사 비용 30% + 인지대·송달료</td></tr>
              <tr><td><strong>소액사건</strong></td><td>소송가액 1천만 원 이하</td><td>소송서류 무료 작성 지원</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="range">
        <h2 className="detail-card-head">소송대리 지원 범위</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>민사사건:</strong> 임대차·손해배상·계약·임금·부동산 등
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>가사사건:</strong> 이혼·양육권·상속·친권 등
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>형사사건:</strong> 피의자·피고인 변호 (형사 고소 대리는 제외)
          </div>
          <div className="info-box">
            <strong>제외:</strong> 승소금액 3억 원 초과 고액사건은 무료 법률구조 제외
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="procedure">
        <h2 className="detail-card-head">소송대리 신청 절차</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>1단계:</strong> 국번없이 132 또는 klac.or.kr에서 상담 예약
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>2단계:</strong> 공단 방문 → 법률상담 (구조 대상·승소가능성 검토)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>3단계:</strong> 법률구조 사건 접수 → 사건 조사
          </div>
          <div className="info-box">
            <strong>4단계:</strong> 공단 소속 변호사가 소송 대리 → 승소 시 강제집행까지 지원
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            지원 대상, 상담 방법, 지원 사건 종류까지<br />
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

export const 법률구조제도소송대리비용무료변호사지원범위SpokeContent: SpokeData = {
  h1: '법률구조공단 소송대리 비용, 무료 변호사 선임 어디까지 지원되나',
  breadcrumb: '소송대리비용무료변호사지원범위',
  description:
    '법률구조공단 소송대리: 무료 대상(기초수급자·임금체불·농어민) 전액 무료. 유료 대상(중위소득 125% 이하) 변호사 비용 30% 수준. 민사·가사·형사 지원. 전체 90% 이상 무료 처리.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '변호사 비용의 30%가 실제로 얼마 정도 되나요?',
      a: '과거 데이터 기준 전액 본인 부담 사례의 평균 비용은 약 17만 원(2016년 기준)이었습니다. 공단 변호사 비용은 시중 변호사 비용보다 훨씬 저렴한 수준입니다.',
      source: '대한법률구조공단',
      sourceUrl: 'https://www.klac.or.kr/legalstruct/outlineOfLitigationStruct.do',
    },
    {
      q: '소송에서 지면 비용을 내야 하나요?',
      a: '패소 시 상대방의 변호사 비용 등 소송비용을 부담할 수 있습니다. 소송 신청 시 이 점을 반드시 유념하고 공단 담당자와 사전에 충분히 상의하세요.',
      source: '대한법률구조공단',
      sourceUrl: 'https://www.klac.or.kr/legalstruct/outlineOfLitigationStruct.do',
    },
    {
      q: '형사 고소 대리도 해주나요?',
      a: '형사고소 대리는 법률구조 업무에 포함되지 않습니다. 단, 검찰청에서 피해자 국선변호사로 지정된 경우에는 예외적으로 지원받을 수 있습니다.',
      source: '대한법률구조공단',
      sourceUrl: 'https://www.klac.or.kr/legalstruct/outlineOfLitigationStruct.do',
    },
    {
      q: '소액사건이면 변호사 없이 소송서류만 도움받을 수 있나요?',
      a: '소송가액 1천만 원 이하의 소액사건은 소장 등 소송서류를 무료로 작성해드립니다. 소송대리 없이 서류 작성만 지원받는 것도 가능합니다.',
      source: '대한법률구조공단',
      sourceUrl: 'https://www.klac.or.kr/legalstruct/outlineOfLitigationStruct.do',
    },
    {
      q: '승소 후 상대방이 소송비용을 부담하면 실제로 내는 돈이 줄어드나요?',
      a: '네, 승소하면 상대방이 소송비용을 부담하는 경우 실제 본인 부담이 줄어들 수 있습니다. 구체적인 내용은 공단 담당자와 상담하세요.',
      source: '대한법률구조공단',
      sourceUrl: 'https://www.klac.or.kr/legalstruct/outlineOfLitigationStruct.do',
    },
  ],
  sources: [
    { name: '대한법률구조공단 소송구조개요', url: 'https://www.klac.or.kr/legalstruct/outlineOfLitigationStruct.do' },
    { name: '대한법률구조공단', url: 'https://www.klac.or.kr' },
    { name: '대한법률구조공단 법률구조안내', url: 'https://www.klac.or.kr/legalstruct/summary.do' },
  ],
};
