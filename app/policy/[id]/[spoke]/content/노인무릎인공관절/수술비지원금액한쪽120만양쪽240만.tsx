import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          노인 무릎인공관절 수술 지원사업은 본인부담 검사비·진료비·수술비를
          <strong>한쪽 최대 120만 원, 양쪽 최대 240만 원</strong> 한도로
          <strong>실비 지원</strong>합니다. 간병비·상급병실료·선택진료비는 지원 대상에서 제외됩니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        지원금은 현금으로 받는 것이 아니라, 퇴원 시 의료기관이 청구금액에서
        재단 지원금을 차감하는 방식으로 정산됩니다.
      </p>

      <section className="detail-card" id="amount">
        <h2 className="detail-card-head">지원 금액 요약</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>수술 구분</th><th>지원 한도</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>한쪽 무릎</strong></td><td>최대 120만 원 (실비)</td></tr>
              <tr><td><strong>양쪽 무릎</strong></td><td>최대 240만 원 (실비)</td></tr>
              <tr><td><strong>지원 항목</strong></td><td>본인부담 검사비·진료비·수술비</td></tr>
              <tr><td><strong>지급 방식</strong></td><td>퇴원 시 의료기관에서 청구금액 차감</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="exclude">
        <h2 className="detail-card-head">지원 제외 항목</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>제외 항목:</strong> 간병비, 상급병실료, 선택진료비, 보호자 식대, 제 증명료
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>무관한 비용:</strong> 수술과 관련 없는 검사비·치료비·입원료
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>선정 전 비용:</strong> 지원대상자 선정 통보 이전에 발생한 비용
          </div>
          <div className="info-box">
            <strong>중복 불가:</strong> 실손보험금 수령 또는 타 기관 의료지원 중복 시 선정 취소
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="process">
        <h2 className="detail-card-head">지원금 정산 방식</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>현금 지급 아님:</strong> 지원금은 환자에게 직접 지급되지 않음
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>차감 정산:</strong> 퇴원 시 의료기관이 청구금액에서 재단 지원분 차감
          </div>
          <div className="info-box">
            <strong>청구 기한:</strong> 의료기관이 퇴원 후 10일 이내 재단에 청구
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            신청 자격, 신청 방법, 협약병원 정보까지<br />
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

export const 노인무릎인공관절수술비지원금액한쪽120만양쪽240만SpokeContent: SpokeData = {
  h1: '무릎인공관절 수술비 지원 금액, 한쪽 120만원 양쪽 240만원 받는 조건',
  breadcrumb: '수술비지원금액한쪽120만양쪽240만',
  description:
    '노인 무릎인공관절 수술 지원: 한쪽 최대 120만 원, 양쪽 최대 240만 원 실비 지원. 본인부담 검사비·진료비·수술비 포함. 간병비·선택진료비 제외. 퇴원 시 의료기관 차감 정산.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '120만 원을 현금으로 받을 수 있나요?',
      a: '아닙니다. 지원금은 현금으로 지급되지 않습니다. 퇴원 시 의료기관이 청구금액에서 재단 지원분을 차감하는 방식으로 정산됩니다.',
      source: '노인의료나눔재단',
      sourceUrl: 'https://www.ok6595.or.kr/client/info/knee03.asp',
    },
    {
      q: '실손보험이 있으면 지원을 받을 수 없나요?',
      a: '실손보험금을 수령하거나 타 기관에서 의료비를 중복으로 지원받으면 이 사업의 선정이 취소됩니다. 실손보험 적용 여부를 사전에 재단(02-711-6599)에 확인하는 것이 좋습니다.',
      source: '노인의료나눔재단',
      sourceUrl: 'https://www.ok6595.or.kr/client/info/knee03.asp',
    },
    {
      q: '실제 수술비가 120만 원보다 적으면 어떻게 되나요?',
      a: '실비 지원이므로 실제 본인부담금이 120만 원 이하라면 실제 금액만 지원됩니다. 한도(120만 원)까지 무조건 지급되는 것이 아닙니다.',
      source: '노인의료나눔재단',
      sourceUrl: 'https://www.ok6595.or.kr/client/info/knee03.asp',
    },
    {
      q: '간병비도 지원이 되나요?',
      a: '간병비는 지원 제외 항목입니다. 간병비·상급병실료·선택진료비·보호자 식대·제 증명료 등은 지원받을 수 없습니다.',
      source: '노인의료나눔재단',
      sourceUrl: 'https://www.ok6595.or.kr/client/info/knee03.asp',
    },
    {
      q: '선정 전에 수술을 받으면 지원이 되나요?',
      a: '지원대상자로 선정 통보가 나기 전에 발생한 비용은 지원 대상에서 제외됩니다. 반드시 선정 통보를 받은 후 협약병원에서 수술을 받아야 합니다.',
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
