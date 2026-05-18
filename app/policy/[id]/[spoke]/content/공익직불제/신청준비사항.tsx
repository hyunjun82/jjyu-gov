import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          기본형 공익직불금 신청 전 <strong>농업경영체 등록 여부</strong>를 먼저 확인하세요.
          농지 1,000㎡ 이상에서 직접 농사를 짓고, 농외소득 <strong>4,300만원 이하</strong>,
          의무교육 이수 여부를 점검한 뒤 신청하면 됩니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "공익직불금을 신청하려는데 어떤 조건을 갖춰야 하고 어디서 확인하나요?"
        신청 전 확인해야 할 요건을 정리했습니다.
      </p>

      <section className="detail-card" id="requirements">
        <h2 className="detail-card-head">신청 전 확인 사항</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>요건</th><th>기준</th><th>확인처</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>농지 면적</strong></td>
                <td>1,000㎡(303평) 이상 직접 경작</td>
                <td>농업경영체 등록 내역</td>
              </tr>
              <tr>
                <td><strong>농업경영체 등록</strong></td>
                <td>농산물품질관리원에 등록 필수</td>
                <td>농산물품질관리원</td>
              </tr>
              <tr>
                <td><strong>농외소득</strong></td>
                <td>4,300만원 이하 (2026 기준)</td>
                <td>국세청 소득자료</td>
              </tr>
              <tr>
                <td><strong>의무교육</strong></td>
                <td>농업인 의무교육 이수</td>
                <td>농업인 교육 플랫폼</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="docs">
        <h2 className="detail-card-head">필요 서류</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>신분증:</strong> 주민등록증 또는 운전면허증
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>농업경영체 등록증:</strong> 미등록 시 읍·면·동 사전 등록 필요
          </div>
          <div className="info-box">
            <strong>의무교육 이수증:</strong> 미이수 시 신청 기간 내 이수 필요
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="apply-method">
        <h2 className="detail-card-head">신청 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>비대면:</strong> 스마트폰 앱 또는 전화 신청 (신청 기간 3.1~5.31)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>방문:</strong> 읍·면·동 행정복지센터 방문 신청
          </div>
          <div className="info-box">
            <strong>문의:</strong> ☎ 1334 (농림축산식품부)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            2026년 변경 기준, 농외소득 기준 등<br />
            기본형 공익직불제 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/direct-payment" className="btn-cta">
            기본형 공익직불제 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 공익직불제신청준비사항SpokeContent: SpokeData = {
  h1: '농지 1,000㎡ 이상에서 직접 농사 짓는다면 공익직불금 신청 전 확인할 것들',
  breadcrumb: '신청준비사항',
  description:
    '공익직불금 신청 전 확인: 농지 1,000㎡ 이상, 농업경영체 등록, 농외소득 4,300만원 이하, 의무교육 이수. 신청 기간 2026.03.01~05.31. 비대면·방문 신청. 문의 1334.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '농업경영체 등록이 없으면 공익직불금을 신청할 수 없나요?',
      a: '농업경영체 등록은 필수입니다. 미등록 상태라면 읍·면·동 행정복지센터 또는 농산물품질관리원에서 먼저 등록해야 합니다.',
      source: '농림축산식품부',
      sourceUrl: 'https://www.mafra.go.kr',
    },
    {
      q: '의무교육을 아직 이수하지 않았는데 신청이 가능한가요?',
      a: '신청 기간(5월 31일) 이내에 이수를 완료하면 신청이 가능합니다. 미이수 시 탈락될 수 있으니 빨리 이수하세요.',
      source: '농림축산식품부',
      sourceUrl: 'https://www.mafra.go.kr',
    },
    {
      q: '농지 면적이 1,000㎡ 미만이면 신청할 수 없나요?',
      a: '기본형 공익직불금의 기본 요건이 1,000㎡(303평) 이상입니다. 미만인 경우 신청 대상이 되지 않습니다.',
      source: '농림축산식품부',
      sourceUrl: 'https://www.mafra.go.kr',
    },
    {
      q: '비대면으로 신청하면 어디서 하나요?',
      a: '스마트폰 앱 또는 전화로 신청할 수 있습니다. 자세한 방법은 읍·면·동 행정복지센터나 1334로 문의하시면 됩니다.',
      source: '농림축산식품부',
      sourceUrl: 'https://www.mafra.go.kr',
    },
    {
      q: '부정 수급이 적발되면 어떻게 되나요?',
      a: '자격 검증을 통해 부정 수급이 확인되면 사후 환수 조치가 이루어집니다.',
      source: '농림축산식품부',
      sourceUrl: 'https://www.mafra.go.kr',
    },
  ],
  sources: [
    { name: '농림축산식품부', url: 'https://www.mafra.go.kr' },
    { name: '농업경영체 등록(농산물품질관리원)', url: 'https://www.naqs.go.kr' },
    { name: '농사로', url: 'https://www.nongsaro.go.kr' },
  ],
};
