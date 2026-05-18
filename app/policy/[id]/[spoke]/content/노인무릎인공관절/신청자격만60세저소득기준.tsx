import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          노인 무릎인공관절 수술 지원사업은 <strong>신청일 기준 만 60세 이상</strong>이면서
          <strong>기초생활수급자·차상위계층·한부모가족</strong> 중 하나에 해당하고,
          건강보험급여 인공관절치환술(슬관절) 인정기준에 맞는 질환이 있어야 신청할 수 있습니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        연령과 소득 자격을 모두 충족해야 지원을 받을 수 있으며, 수술 필요성을 확인하는
        진단서도 반드시 필요합니다.
      </p>

      <section className="detail-card" id="eligibility">
        <h2 className="detail-card-head">신청 자격 요건 3가지</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>조건 구분</th><th>세부 내용</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>연령 조건</strong></td><td>신청일 기준 만 60세 이상</td></tr>
              <tr><td><strong>기초생활수급자</strong></td><td>생계급여·주거급여·의료급여 수급자</td></tr>
              <tr><td><strong>차상위계층</strong></td><td>차상위본인부담경감·차상위자활·차상위장애 등</td></tr>
              <tr><td><strong>한부모가족</strong></td><td>한부모가족지원법에 따른 지원대상자</td></tr>
              <tr><td><strong>질환 조건</strong></td><td>인공관절치환술(슬관절) 건강보험 인정기준 해당</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="income">
        <h2 className="detail-card-head">소득 기준 확인 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>기초생활수급자:</strong> 주민센터에서 발급받은 수급자증명서로 확인
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>차상위계층:</strong> 차상위계층확인서 또는 본인부담경감대상자증명서
          </div>
          <div className="info-box">
            <strong>한부모가족:</strong> 한부모가족증명서 (주민센터·정부24 발급)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="disease">
        <h2 className="detail-card-head">질환 조건 확인 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>대상 질환:</strong> 건강보험급여 '인공관절치환술(슬관절)' 인정기준에 해당하는 무릎 질환
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>진단서:</strong> 수술할 협약병원에서 수술명이 기재된 진단서 또는 소견서 발급 필요
          </div>
          <div className="info-box">
            <strong>문의:</strong> 노인의료나눔재단 ☎02-711-6599 (평일 09:00~17:00)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            지원 금액, 신청 절차, 협약병원 정보까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/elderly-knee-surgery" className="btn-cta">
            노인 무릎인공관절 수술 지원 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 노인무릎인공관절신청자격만60세저소득기준SpokeContent: SpokeData = {
  h1: '노인 무릎인공관절 수술 지원 신청 자격, 만 60세 이상 저소득층 기준은',
  breadcrumb: '신청자격만60세저소득기준',
  description:
    '노인 무릎인공관절 수술 지원: 만 60세 이상 기초생활수급자·차상위계층·한부모가족 대상. 인공관절치환술(슬관절) 건강보험 인정기준 해당 질환 진단서 필요. 주소지 보건소에서 신청.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '만 60세가 되지 않으면 신청이 전혀 불가능한가요?',
      a: '네, 신청일 기준 만 60세 이상이어야 합니다. 연령 기준 미달이면 소득 기준을 충족해도 지원 대상에서 제외됩니다.',
      source: '노인의료나눔재단',
      sourceUrl: 'https://www.ok6595.or.kr/client/info/knee03.asp',
    },
    {
      q: '차상위계층인데 어떤 서류를 준비해야 하나요?',
      a: '차상위계층확인서 또는 본인부담경감대상자증명서를 최근 1개월 이내 발급받아 제출하면 됩니다. 주민센터나 국민건강보험공단에서 발급받을 수 있습니다.',
      source: '노인의료나눔재단',
      sourceUrl: 'https://www.ok6595.or.kr/client/info/knee03.asp',
    },
    {
      q: '한쪽 무릎만 아파도 신청할 수 있나요?',
      a: '네, 한쪽 무릎 수술도 지원 가능합니다. 한쪽은 최대 120만 원, 양쪽은 최대 240만 원 한도 내에서 실비 지원합니다.',
      source: '노인의료나눔재단',
      sourceUrl: 'https://www.ok6595.or.kr/client/info/knee03.asp',
    },
    {
      q: '건강보험 미가입자도 신청할 수 있나요?',
      a: '지원 조건은 건강보험급여 인공관절치환술 인정기준에 해당하는 질환이 있어야 합니다. 건강보험 적용 여부와 관련된 구체적인 내용은 노인의료나눔재단(02-711-6599)에 문의하시기 바랍니다.',
      source: '노인의료나눔재단',
      sourceUrl: 'https://www.ok6595.or.kr/client/info/knee03.asp',
    },
    {
      q: '가족이 대신 신청해도 되나요?',
      a: '네, 본인뿐만 아니라 가족 또는 그 밖의 관계인도 대신 신청할 수 있습니다. 주소지 관할 보건소에 방문해 신청서와 필요 서류를 제출하면 됩니다.',
      source: '노인의료나눔재단',
      sourceUrl: 'https://www.ok6595.or.kr/client/info/knee03.asp',
    },
  ],
  sources: [
    { name: '노인의료나눔재단', url: 'https://www.ok6595.or.kr/client/info/knee03.asp' },
    { name: '보건복지부', url: 'https://www.mohw.go.kr' },
    { name: '정부24', url: 'https://www.gov.kr/portal/service/serviceInfo/135200000113' },
  ],
};
