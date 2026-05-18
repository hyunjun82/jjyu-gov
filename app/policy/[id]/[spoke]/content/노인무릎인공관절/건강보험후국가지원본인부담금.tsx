import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          무릎인공관절 수술은 건강보험이 적용된 후에도 <strong>본인부담금이 상당히 남습니다</strong>.
          노인 무릎인공관절 수술 지원사업은 이 본인부담금(검사비·진료비·수술비)을
          <strong>한쪽 최대 120만 원, 양쪽 최대 240만 원</strong>까지 추가로 지원합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        건강보험 적용 후에도 수술비 부담이 크다면, 소득 기준을 충족하는 경우
        노인의료나눔재단 지원을 통해 본인부담금을 크게 줄일 수 있습니다.
      </p>

      <section className="detail-card" id="structure">
        <h2 className="detail-card-head">수술비 구조와 지원 방식</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>구분</th><th>내용</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>건강보험 기본 적용</strong></td><td>인공관절치환술(슬관절) 건강보험급여 인정기준 해당 시 적용</td></tr>
              <tr><td><strong>본인부담금 발생</strong></td><td>건강보험 적용 후에도 검사비·진료비·수술비 본인부담 발생</td></tr>
              <tr><td><strong>재단 지원</strong></td><td>본인부담금을 한쪽 최대 120만 원, 양쪽 최대 240만 원 실비 지원</td></tr>
              <tr><td><strong>지원 제외</strong></td><td>간병비·상급병실료·선택진료비·통원치료비 등</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="condition">
        <h2 className="detail-card-head">국가 지원을 받기 위한 조건</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>연령:</strong> 신청일 기준 만 60세 이상
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>소득:</strong> 기초생활수급자·차상위계층·한부모가족 중 하나 해당
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>질환:</strong> 건강보험급여 인공관절치환술(슬관절) 인정기준 해당 질환
          </div>
          <div className="info-box">
            <strong>병원:</strong> 노인의료나눔재단 협약병원에서 수술받아야 지원 적용
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="note">
        <h2 className="detail-card-head">주의사항</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>실손보험 중복 불가:</strong> 실손보험금 수령 시 이 사업의 선정이 취소됨
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>선정 전 수술 금지:</strong> 선정 통보 이전 발생 비용은 지원 제외
          </div>
          <div className="info-box">
            <strong>협약병원 확인 필수:</strong> ok6595.or.kr 또는 ☎02-711-6599로 확인
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            신청 자격, 신청 절차, 지원 금액 상세까지<br />
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

export const 노인무릎인공관절건강보험후국가지원본인부담금SpokeContent: SpokeData = {
  h1: '무릎인공관절 수술 건강보험 적용 후 국가 지원, 본인부담금 실제로 얼마나 되나',
  breadcrumb: '건강보험후국가지원본인부담금',
  description:
    '무릎인공관절 수술 건강보험 적용 후 남는 본인부담금을 노인의료나눔재단이 추가 지원. 한쪽 최대 120만 원, 양쪽 최대 240만 원 실비. 만 60세 이상 기초수급자·차상위 대상.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '건강보험이 적용되면 본인부담금이 얼마나 남나요?',
      a: '건강보험 적용 후 남는 본인부담금은 병원, 입원 기간, 수술 방법 등에 따라 다릅니다. 재단(☎02-711-6599) 또는 협약병원 상담을 통해 예상 본인부담금을 확인한 뒤 신청하시기 바랍니다.',
      source: '노인의료나눔재단',
      sourceUrl: 'https://www.ok6595.or.kr/client/info/knee03.asp',
    },
    {
      q: '국가 지원을 받으려면 건강보험 인정기준에 반드시 해당해야 하나요?',
      a: '네, 건강보험급여 인공관절치환술(슬관절) 인정기준에 해당하는 질환이어야 합니다. 수술할 협약병원에서 진단서를 발급받아 자격을 확인할 수 있습니다.',
      source: '노인의료나눔재단',
      sourceUrl: 'https://www.ok6595.or.kr/client/info/knee03.asp',
    },
    {
      q: '협약병원이 아닌 일반 병원에서 수술받으면 지원이 안 되나요?',
      a: '반드시 노인의료나눔재단 협약병원에서 수술을 받아야 지원이 적용됩니다. 협약병원 목록은 ok6595.or.kr에서 확인하거나 ☎02-711-6599로 문의하세요.',
      source: '노인의료나눔재단',
      sourceUrl: 'https://www.ok6595.or.kr/client/info/knee03.asp',
    },
    {
      q: '실손보험이 있어도 국가 지원을 받을 수 있나요?',
      a: '실손보험금을 수령하거나 타 기관에서 의료비를 중복 지원받으면 이 사업의 선정이 취소됩니다. 실손보험 적용과 이 사업의 중복 이용은 불가합니다.',
      source: '노인의료나눔재단',
      sourceUrl: 'https://www.ok6595.or.kr/client/info/knee03.asp',
    },
    {
      q: '간병비는 어디서 지원받을 수 있나요?',
      a: '이 사업에서 간병비는 지원되지 않습니다. 노인장기요양보험, 긴급복지지원제도 등 별도 복지제도를 통해 도움을 받을 수 있습니다. 보건소에서 연계 안내를 받아보세요.',
      source: '노인의료나눔재단',
      sourceUrl: 'https://www.ok6595.or.kr/client/info/knee03.asp',
    },
  ],
  sources: [
    { name: '노인의료나눔재단 사업내용', url: 'https://www.ok6595.or.kr/client/info/knee03.asp' },
    { name: '보건복지부', url: 'https://www.mohw.go.kr' },
    { name: '정부24', url: 'https://www.gov.kr/portal/service/serviceInfo/135200000113' },
  ],
};
