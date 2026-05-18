import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          기본형 공익직불금은 <strong>매년 3월 1일~5월 31일</strong> 신청합니다.
          스마트폰 앱 또는 읍·면·동 행정복지센터 방문으로 신청하며,
          농업경영체 등록과 의무교육 이수가 완료된 상태여야 합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "공익직불금은 어떻게 신청하고 언제 입금되나요? 서류는 무엇이 필요한가요?"
        신청 단계별 절차를 정리했습니다.
      </p>

      <section className="detail-card" id="steps">
        <h2 className="detail-card-head">신청 단계</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>단계</th><th>내용</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1단계</strong></td>
                <td>농업경영체 등록 확인 (미등록 시 사전 등록)</td>
              </tr>
              <tr>
                <td><strong>2단계</strong></td>
                <td>의무교육 이수 여부 확인 (미이수 시 이수)</td>
              </tr>
              <tr>
                <td><strong>3단계</strong></td>
                <td>신청: 3~5월 내 스마트폰 앱 또는 읍·면·동 방문</td>
              </tr>
              <tr>
                <td><strong>4단계</strong></td>
                <td>자격 심사 (농지 면적·농외소득·부정 수급 검증)</td>
              </tr>
              <tr>
                <td><strong>5단계</strong></td>
                <td>직불금 지급 (심사 후 해당 연도 내 계좌 입금)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="docs">
        <h2 className="detail-card-head">준비 서류</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>신분증:</strong> 주민등록증 또는 운전면허증
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>농업경영체 등록증:</strong> 농산물품질관리원 발급
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>의무교육 이수증:</strong> 농업인 교육 플랫폼 수료증
          </div>
          <div className="info-box">
            <strong>계좌 정보:</strong> 직불금 수령 계좌 (본인 명의)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="timeline">
        <h2 className="detail-card-head">신청 일정</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>신청 기간:</strong> 2026.03.01 ~ 05.31
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>문의:</strong> ☎ 1334 또는 읍·면·동 행정복지센터
          </div>
          <div className="info-box">
            <strong>지급:</strong> 심사 완료 후 해당 연도 내 계좌 입금
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            자격 기준, 농외소득 상향, 2026년 변경 사항 등<br />
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

export const 공익직불제신청절차서류SpokeContent: SpokeData = {
  h1: '기본형 공익직불금 신청부터 지급까지 농가가 준비할 서류와 절차',
  breadcrumb: '신청절차서류',
  description:
    '공익직불금 5단계 신청: 경영체 등록→의무교육→신청(3~5월)→자격 심사→지급. 준비 서류: 신분증·경영체 등록증·의무교육 이수증·계좌. 문의 1334.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '공익직불금은 언제 신청하나요?',
      a: '매년 3월 1일부터 5월 31일까지 신청합니다. 기간을 놓치면 해당 연도는 신청이 불가합니다.',
      source: '농림축산식품부',
      sourceUrl: 'https://www.mafra.go.kr',
    },
    {
      q: '온라인으로 신청하려면 어디서 하나요?',
      a: '스마트폰 앱으로 신청이 가능합니다. 앱 이름과 방법은 1334 또는 읍·면·동 행정복지센터에 문의하시면 안내받을 수 있습니다.',
      source: '농림축산식품부',
      sourceUrl: 'https://www.mafra.go.kr',
    },
    {
      q: '직불금은 언제 입금되나요?',
      a: '심사 완료 후 해당 연도 내에 본인 계좌로 입금됩니다. 정확한 시기는 지역별로 다를 수 있습니다.',
      source: '농림축산식품부',
      sourceUrl: 'https://www.mafra.go.kr',
    },
    {
      q: '농업경영체 등록은 어디서 하나요?',
      a: '농산물품질관리원에서 등록할 수 있습니다. 읍·면·동 행정복지센터에서도 안내받을 수 있습니다.',
      source: '농림축산식품부',
      sourceUrl: 'https://www.mafra.go.kr',
    },
    {
      q: '의무교육은 어디서 받나요?',
      a: '농업인 교육 플랫폼에서 이수할 수 있습니다. 자세한 내용은 1334로 문의하시면 됩니다.',
      source: '농림축산식품부',
      sourceUrl: 'https://www.mafra.go.kr',
    },
  ],
  sources: [
    { name: '농림축산식품부', url: 'https://www.mafra.go.kr' },
    { name: '농사로', url: 'https://www.nongsaro.go.kr' },
  ],
};
