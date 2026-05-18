import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          가정양육수당을 받다가 아이를 어린이집에 보내면 <strong>입소 다음 달부터 양육수당이 중단</strong>됩니다.
          대신 <strong>보육료 바우처</strong>로 자동 전환되지 않으며,
          <strong>복지로(bokjiro.go.kr) 또는 주민센터에서 별도 신청</strong>해야 보육료 지원을 받을 수 있습니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        어린이집을 그만두고 다시 가정 양육으로 돌아오면 재신청을 통해 양육수당을 다시 받을 수 있습니다.
        단, 재신청일부터 지급되므로 공백이 생기지 않도록 미리 신청하는 것이 중요합니다.
      </p>

      <section className="detail-card" id="switch">
        <h2 className="detail-card-head">어린이집 입소 시 전환 흐름</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>단계</th><th>내용</th><th>비고</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>1단계</strong></td><td>어린이집 입소 확정</td><td>입소일 기준으로 양육수당 중단 처리</td></tr>
              <tr><td><strong>2단계</strong></td><td>양육수당 자동 중단</td><td>입소 다음 달부터 미지급</td></tr>
              <tr><td><strong>3단계</strong></td><td>보육료 바우처 신청</td><td>복지로 또는 주민센터 — 별도 신청 필수</td></tr>
              <tr><td><strong>4단계</strong></td><td>보육료 지원 개시</td><td>국공립·직장·민간·가정어린이집 모두 지원</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="howto">
        <h2 className="detail-card-head">보육료 전환 신청 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>온라인:</strong> 복지로(bokjiro.go.kr) → 서비스 신청 → 보육료 지원
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>방문:</strong> 주민센터(읍·면·동) 방문 → 보육료 지원 신청서 제출
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>지참물:</strong> 신분증, 아동 건강보험증(또는 주민등록등본)
          </div>
          <div className="info-box">
            <strong>주의:</strong> 어린이집 입소 후 신청 지연 시 그 기간은 지원이 없으므로 입소 즉시 신청
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="return">
        <h2 className="detail-card-head">어린이집 그만두고 다시 가정 양육 시</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>재신청:</strong> 복지로 또는 주민센터에서 가정양육수당 재신청
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>지급 시작:</strong> 재신청일 기준 (소급 없음) — 퇴소 즉시 신청 권장
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>전환 횟수:</strong> 제한 없음 — 어린이집 ↔ 가정 양육 반복 전환 가능
          </div>
          <div className="info-box">
            <strong>보육료 중단:</strong> 퇴소 다음 달부터 보육료 지원 자동 종료
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            지급 금액, 신청 방법, 부모급여 전환 기준까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/home-childcare-allowance" className="btn-cta">
            가정양육수당 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 가정양육수당어린이집보내면중단보육료전환SpokeContent: SpokeData = {
  h1: '가정양육수당 받다 어린이집 보내면, 중단 시기와 보육료 전환 신청 방법',
  breadcrumb: '어린이집보내면중단보육료전환',
  description:
    '가정양육수당 중 어린이집 입소 시 입소 다음 달부터 자동 중단. 보육료 바우처는 자동 전환 아님 — 복지로·주민센터에서 별도 신청 필수. 퇴소 후 재신청 시 소급 없으므로 즉시 신청.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '어린이집 입소 당월도 양육수당을 받나요?',
      a: '입소한 달은 일할 계산 없이 지급 여부가 입소일 기준으로 결정됩니다. 일반적으로 입소 다음 달부터 양육수당이 중단됩니다. 정확한 기준은 주민센터 또는 ☎129로 확인하세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '보육료 신청을 늦게 하면 소급되나요?',
      a: '보육료 지원은 신청일 기준으로 지급됩니다. 소급 지원은 원칙적으로 되지 않으므로 어린이집 입소 즉시 복지로나 주민센터에서 보육료 신청을 해야 합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '가정어린이집도 보육료 지원이 되나요?',
      a: '네. 국공립·직장·법인·민간·가정어린이집 모두 보육료 지원 대상입니다. 다만 지원 금액은 어린이집 유형과 아동 연령에 따라 다르니 보육료 신청 시 확인하세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '어린이집을 잠깐 다니다 다시 집에서 키우려면 어떻게 하나요?',
      a: '어린이집 퇴소 후 가정양육수당을 재신청하면 됩니다. 복지로(bokjiro.go.kr) 또는 주민센터에서 신청하며, 신청일부터 지급되므로 퇴소 즉시 신청하는 것이 좋습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '유치원을 보내면 양육수당도 중단되나요?',
      a: '네. 유치원에 다니는 경우에도 양육수당은 중단됩니다. 대신 유아학비(누리과정)를 신청하면 지원받을 수 있습니다. 어린이집과 마찬가지로 별도 신청이 필요합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
  ],
  sources: [
    { name: '보건복지부 가정양육수당', url: 'https://www.mohw.go.kr' },
    { name: '복지로', url: 'https://www.bokjiro.go.kr' },
  ],
};
