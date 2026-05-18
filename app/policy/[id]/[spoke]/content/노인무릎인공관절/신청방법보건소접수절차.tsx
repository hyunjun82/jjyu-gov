import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          노인 무릎인공관절 수술 지원은 <strong>주소지 관할 보건소</strong>에서 신청합니다.
          가족이나 관계인도 대신 신청할 수 있으며, 선정 통보 후
          <strong>2개월 이내</strong>에 협약병원에서 수술을 받아야 합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        수술할 병원에서 진단서를 먼저 발급받은 후 보건소에 방문하는 것이 일반적인 절차입니다.
        노인의료나눔재단(☎02-711-6599)에서도 신청 방법을 안내받을 수 있습니다.
      </p>

      <section className="detail-card" id="process">
        <h2 className="detail-card-head">신청 절차 5단계</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>1단계:</strong> 노인의료나눔재단 협약병원에서 진단서(소견서) 발급
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>2단계:</strong> 주소지 보건소 방문 → 신청서·서류 제출
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>3단계:</strong> 노인의료나눔재단 심사 → 선정 통보
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>4단계:</strong> 선정 통보 후 2개월 이내 협약병원에서 수술 시행
          </div>
          <div className="info-box">
            <strong>5단계:</strong> 퇴원 시 의료기관이 지원금 차감 정산
          </div>
        </div>
      </section>

      <section className="detail-card" id="documents">
        <h2 className="detail-card-head">필요 서류</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>서류</th><th>비고</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>무릎관절증 의료지원 신청서</strong></td><td>ok6595.or.kr에서 다운로드</td></tr>
              <tr><td><strong>진단서 또는 소견서</strong></td><td>수술할 병원 발급, 수술명 기재 필수</td></tr>
              <tr><td><strong>수급자·차상위·한부모 증명서</strong></td><td>최근 1개월 이내 발급분</td></tr>
              <tr><td><strong>개인정보수집 및 이용제공 동의서</strong></td><td>신청서에 포함</td></tr>
              <tr><td><strong>행정정보 공동이용 사전동의서</strong></td><td>신청서에 포함</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="contact">
        <h2 className="detail-card-head">신청처 및 문의</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>신청처:</strong> 전국 지역 보건소 (본인·가족·관계인 신청 가능)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>신청서 다운로드:</strong> ok6595.or.kr → 지원신청 안내
          </div>
          <div className="info-box">
            <strong>문의:</strong> ☎02-711-6599 (평일 09:00~17:00)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            지원 금액, 신청 자격, 협약병원 정보까지<br />
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

export const 노인무릎인공관절신청방법보건소접수절차SpokeContent: SpokeData = {
  h1: '노인 무릎인공관절 수술 지원 신청 방법, 보건소 접수부터 수술까지 절차',
  breadcrumb: '신청방법보건소접수절차',
  description:
    '노인 무릎인공관절 수술 지원 신청: 주소지 보건소에서 신청서·진단서·수급 증명서 제출. 선정 통보 후 2개월 이내 협약병원 수술. 신청서 ok6595.or.kr 다운로드. ☎02-711-6599 문의.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '진단서는 어느 병원에서나 받아도 되나요?',
      a: '수술을 실제로 받을 협약병원에서 발급받는 것이 원칙입니다. 무릎인공관절수술이 필요하다는 내용(수술명 기재)이 포함된 진단서 또는 소견서여야 합니다.',
      source: '노인의료나눔재단',
      sourceUrl: 'https://www.ok6595.or.kr/client/info/knee01.asp',
    },
    {
      q: '신청서를 어디서 구할 수 있나요?',
      a: '노인의료나눔재단 홈페이지(ok6595.or.kr)에서 무릎관절증 의료지원 신청서를 다운로드할 수 있습니다. 보건소에서도 직접 받을 수 있습니다.',
      source: '노인의료나눔재단',
      sourceUrl: 'https://www.ok6595.or.kr/client/info/knee01.asp',
    },
    {
      q: '선정 통보까지 얼마나 걸리나요?',
      a: '재단에서 서류 심사 후 선정 여부를 통보합니다. 구체적인 소요 기간은 신청 시점 및 예산 상황에 따라 다를 수 있으므로 재단(☎02-711-6599)에 문의하시기 바랍니다.',
      source: '노인의료나눔재단',
      sourceUrl: 'https://www.ok6595.or.kr/client/info/knee03.asp',
    },
    {
      q: '선정 통보 후 2개월을 넘기면 어떻게 되나요?',
      a: '선정 통보 후 2개월 이내에 수술을 받지 않으면 지원이 취소될 수 있습니다. 일정 변경이 필요하다면 사전에 노인의료나눔재단(02-711-6599)에 문의하세요.',
      source: '노인의료나눔재단',
      sourceUrl: 'https://www.ok6595.or.kr/client/info/knee03.asp',
    },
    {
      q: '보건소가 아닌 다른 곳에서 신청할 수 있나요?',
      a: '신청은 반드시 주소지 관할 보건소를 통해 이루어집니다. 온라인 신청은 지원되지 않으며, 노인의료나눔재단에 직접 신청하는 것도 불가합니다.',
      source: '노인의료나눔재단',
      sourceUrl: 'https://www.ok6595.or.kr/client/info/knee03.asp',
    },
  ],
  sources: [
    { name: '노인의료나눔재단 지원신청 안내', url: 'https://www.ok6595.or.kr/client/info/knee01.asp' },
    { name: '노인의료나눔재단 사업내용', url: 'https://www.ok6595.or.kr/client/info/knee03.asp' },
    { name: '보건복지부', url: 'https://www.mohw.go.kr' },
  ],
};
