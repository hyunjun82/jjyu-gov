import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          법률구조 제도는 원칙적으로 <strong>기준 중위소득 125% 이하</strong>의 국민과
          국내 거주 외국인이 소송대리 지원을 받을 수 있습니다.
          기초생활수급자·임금체불 피해근로자·농어민 등은 소송비용 <strong>전액 무료</strong>이며,
          공단 소송구조 사건의 <strong>90% 이상이 무료</strong> 대상입니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        소득 기준이 넘어도 장애인·범죄피해자 등 특정 취약계층은 별도 기준으로 지원받을 수 있습니다.
        먼저 132로 전화해 본인의 지원 자격을 확인하세요.
      </p>

      <section className="detail-card" id="eligibility">
        <h2 className="detail-card-head">소득 유형별 지원 내용</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>소득 유형</th><th>대상</th><th>비용</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>무료 구조</strong></td><td>기초수급자, 임금체불 근로자, 농·어민 등</td><td>전액 무료 (출연기관 부담)</td></tr>
              <tr><td><strong>유료 구조</strong></td><td>중위소득 125% 이하</td><td>변호사 비용 30% + 소송실비</td></tr>
              <tr><td><strong>소득 무관</strong></td><td>장애인·범죄피해자 등 취약계층</td><td>별도 확인 필요</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="free">
        <h2 className="detail-card-head">무료 법률구조 주요 대상</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>기초생활수급자:</strong> 생계·주거·의료·교육급여 수급자
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>임금체불 피해근로자:</strong> 사업주로부터 임금 등을 체불당한 근로자
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>농·어민:</strong> 농업·임업·어업에 종사하는 분
          </div>
          <div className="info-box">
            <strong>공통:</strong> 승소금액 3억 원 초과 고액사건은 무료 법률구조 제외
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="cost">
        <h2 className="detail-card-head">유료 구조 비용 수준</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>변호사 비용:</strong> 대법원규칙이 정한 변호사 비용의 약 30% 수준
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>소송실비:</strong> 법원에 납부하는 인지대·송달료 등 본인 부담
          </div>
          <div className="info-box">
            <strong>참고:</strong> 전체 사건 중 전액 본인 부담 비율은 9.8%에 불과 (2016년 기준 평균 17만 원)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            상담 방법, 소송대리 절차, 지원 가능 사건 종류까지<br />
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

export const 법률구조제도중위소득125이하지원대상SpokeContent: SpokeData = {
  h1: '법률구조 제도 지원 대상, 중위소득 125% 이하 기준 누가 해당되나',
  breadcrumb: '중위소득125이하지원대상',
  description:
    '법률구조 제도: 기준 중위소득 125% 이하 소송대리 지원. 기초수급자·임금체불·농어민 전액 무료. 전체 사건 90% 이상 무료 처리. 유료 대상도 변호사 비용 30% 수준. 국번없이 132.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '중위소득 125%는 어떻게 확인하나요?',
      a: '대한법률구조공단(☎132 또는 klac.or.kr)에 문의하면 소득 기준 해당 여부를 안내받을 수 있습니다. 건강보험료 납부액 등을 기준으로 판단합니다.',
      source: '대한법률구조공단',
      sourceUrl: 'https://www.klac.or.kr/legalstruct/outlineOfLitigationStruct.do',
    },
    {
      q: '임금체불 피해자는 소득에 관계없이 무료인가요?',
      a: '네, 임금·퇴직금 등을 체불당한 피해근로자는 소득 기준과 무관하게 무료 법률구조 대상입니다.',
      source: '대한법률구조공단',
      sourceUrl: 'https://www.klac.or.kr/legalstruct/legalRescueGuide.do',
    },
    {
      q: '외국인도 지원받을 수 있나요?',
      a: '네, 국내에 거주하는 외국인도 기준 중위소득 125% 이하라면 법률구조를 신청할 수 있습니다.',
      source: '대한법률구조공단',
      sourceUrl: 'https://www.klac.or.kr/legalstruct/outlineOfLitigationStruct.do',
    },
    {
      q: '승소금액이 크면 무료 구조를 못 받나요?',
      a: '승소금액이 3억 원을 초과하는 고액 사건은 무료 법률구조에서 제외됩니다.',
      source: '대한법률구조공단',
      sourceUrl: 'https://www.klac.or.kr/legalstruct/outlineOfLitigationStruct.do',
    },
    {
      q: '소득 기준을 초과해도 도움받을 방법이 있나요?',
      a: '법률홈닥터, 마을변호사, 법원 법률구조 프로그램 등 다른 무료 법률 지원 제도를 활용할 수 있습니다. 132로 전화해 안내를 요청하세요.',
      source: '대한법률구조공단',
      sourceUrl: 'https://www.klac.or.kr/legalstruct/outlineOfLitigationStruct.do',
    },
  ],
  sources: [
    { name: '대한법률구조공단 소송구조개요', url: 'https://www.klac.or.kr/legalstruct/outlineOfLitigationStruct.do' },
    { name: '대한법률구조공단 대상자 안내', url: 'https://www.klac.or.kr/legalstruct/legalRescueGuide.do' },
    { name: '대한법률구조공단', url: 'https://www.klac.or.kr' },
  ],
};
