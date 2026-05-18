import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          무료 법률 지원 제도는 <strong>대한법률구조공단</strong>(소송대리까지 지원),
          <strong>법률홈닥터</strong>(찾아가는 법률상담), <strong>마을변호사</strong>(지역 밀착 상담)로
          구분됩니다. 소송대리가 필요하면 법률구조공단, 상담만 필요하면 세 곳 모두 이용 가능합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        각 제도의 지원 범위와 신청 방법이 다르므로, 본인의 상황에 맞는 제도를 선택하는 것이 중요합니다.
      </p>

      <section className="detail-card" id="compare">
        <h2 className="detail-card-head">무료 법률 지원 3대 제도 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>제도</th><th>운영기관</th><th>지원 내용</th><th>소득 기준</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>대한법률구조공단</strong></td>
                <td>법무부 산하</td>
                <td>법률상담 + 소송대리 + 형사변호</td>
                <td>중위소득 125% 이하 (일부 무료)</td>
              </tr>
              <tr>
                <td><strong>법률홈닥터</strong></td>
                <td>법무부</td>
                <td>찾아가는 법률상담 (소송대리 제외)</td>
                <td>취약계층 우선 (별도 기준)</td>
              </tr>
              <tr>
                <td><strong>마을변호사</strong></td>
                <td>법무부</td>
                <td>지역 밀착 법률 자문·상담</td>
                <td>제한 없음 (자문 수준)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="klac">
        <h2 className="detail-card-head">대한법률구조공단 특징</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>핵심 강점:</strong> 법률상담 + 소송대리(변호사 직접 대리) + 형사변호까지 원스톱 지원
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>무료 대상:</strong> 기초수급자·임금체불 근로자·농어민 등 → 전액 무료
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>유료 대상:</strong> 중위소득 125% 이하 → 변호사 비용 30% 수준
          </div>
          <div className="info-box">
            <strong>신청:</strong> 국번없이 132 또는 klac.or.kr
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="how-to-choose">
        <h2 className="detail-card-head">상황별 선택 가이드</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>소송대리가 필요한 경우:</strong> 대한법률구조공단 → 국번없이 132
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>방문 상담이 어려운 경우:</strong> 법률홈닥터(찾아가는 상담) 활용
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>간단한 법률 자문이 필요한 경우:</strong> 마을변호사 또는 공단 전화상담
          </div>
          <div className="info-box">
            <strong>세무·소비자·금융 문제:</strong> 국세청 126 / 소비자상담센터 1372 / 금융감독원 1332
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            지원 대상, 상담 방법, 소송대리 비용까지<br />
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

export const 법률구조제도법률구조공단vs법률홈닥터vs마을변호사SpokeContent: SpokeData = {
  h1: '법률구조공단 vs 법률홈닥터 vs 마을변호사, 무료 법률 지원 차이',
  breadcrumb: '법률구조공단vs법률홈닥터vs마을변호사',
  description:
    '무료 법률 지원 비교: 대한법률구조공단(소송대리까지), 법률홈닥터(찾아가는 상담), 마을변호사(지역 자문). 소송대리 필요 시 공단(☎132). 상담만 필요 시 세 곳 모두 가능.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '법률홈닥터와 법률구조공단 중 어느 쪽이 더 낫나요?',
      a: '소송이나 변호사 선임이 필요하다면 법률구조공단이 적합합니다. 소송 없이 법률 자문이나 서류 검토만 필요하다면 법률홈닥터나 마을변호사를 먼저 이용해 볼 수 있습니다.',
      source: '대한법률구조공단',
      sourceUrl: 'https://www.klac.or.kr/legalstruct/summary.do',
    },
    {
      q: '법률홈닥터는 어떻게 신청하나요?',
      a: '법률홈닥터는 법무부가 운영하는 찾아가는 법률상담 서비스입니다. 법무부 공식 안내(moj.go.kr) 또는 대한법률구조공단(☎132)에서 연계 안내를 받을 수 있습니다.',
      source: '대한법률구조공단',
      sourceUrl: 'https://www.klac.or.kr/legalstruct/consultationGuidance.do',
    },
    {
      q: '마을변호사와 법률구조공단을 동시에 이용할 수 있나요?',
      a: '마을변호사에서 자문을 받고, 소송이 필요한 경우 법률구조공단에 소송대리를 신청하는 방식으로 단계적으로 이용 가능합니다.',
      source: '대한법률구조공단',
      sourceUrl: 'https://www.klac.or.kr/legalstruct/summary.do',
    },
    {
      q: '법률구조공단에서 세금 문제도 도움받을 수 있나요?',
      a: '아닙니다. 세무상담은 국세청(126), 소비자상담은 소비자상담센터(1372), 금융분쟁은 금융감독원(1332)을 이용하세요.',
      source: '대한법률구조공단',
      sourceUrl: 'https://www.klac.or.kr/legalstruct/consultationGuidance.do',
    },
    {
      q: '공단 상담 후 소송대리까지 이어지는 경우 얼마나 걸리나요?',
      a: '상담 후 법률구조 사건 접수, 사건 조사, 구조 결정 단계를 거칩니다. 소요 기간은 사건 복잡성에 따라 다르므로 공단(☎132)에서 직접 확인하세요.',
      source: '대한법률구조공단',
      sourceUrl: 'https://www.klac.or.kr/legalstruct/summary.do',
    },
  ],
  sources: [
    { name: '대한법률구조공단 법률구조안내', url: 'https://www.klac.or.kr/legalstruct/summary.do' },
    { name: '대한법률구조공단 소송구조개요', url: 'https://www.klac.or.kr/legalstruct/outlineOfLitigationStruct.do' },
    { name: '대한법률구조공단', url: 'https://www.klac.or.kr' },
  ],
};
