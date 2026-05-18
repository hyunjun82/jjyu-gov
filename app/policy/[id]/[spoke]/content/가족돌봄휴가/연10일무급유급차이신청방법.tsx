import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          가족돌봄휴가는 <strong>연간 최대 10일</strong>을 1일 단위로 사용할 수 있는 법정 권리입니다.
          원칙적으로 <strong>무급</strong>이지만, 저소득·중소기업 근로자에게는 1일당 일정액을 정부가 지원하는
          별도 사업이 운영됩니다.
          신청은 사업주에게 하며 사전 2~3일 또는 응급 시 사후 통보도 가능합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        가족돌봄휴가는 연차와 별개 권리입니다.
        연차를 다 써도 추가로 10일의 가족돌봄휴가를 사용할 수 있습니다.
        사업주는 사업 운영에 중대한 지장이 없는 한 거부할 수 없습니다.
      </p>

      <section className="detail-card" id="basic">
        <h2 className="detail-card-head">가족돌봄휴가 기본 정보</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>내용</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>연 한도</strong></td><td>최대 10일</td></tr>
              <tr><td><strong>사용 단위</strong></td><td>1일 단위 (분할 가능)</td></tr>
              <tr><td><strong>임금</strong></td><td>무급 원칙</td></tr>
              <tr><td><strong>정부 지원</strong></td><td>저소득·중소기업 근로자 일부 일당 지원 (고용센터 신청)</td></tr>
              <tr><td><strong>근거 법령</strong></td><td>남녀고용평등법 제22조의2</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="apply">
        <h2 className="detail-card-head">신청 방법</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>단계</th><th>내용</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>1단계</strong></td><td>가족 돌봄 사유 발생 확인</td></tr>
              <tr><td><strong>2단계</strong></td><td>사업주에게 가족돌봄휴가 신청서 제출 (최소 2~3일 전)</td></tr>
              <tr><td><strong>3단계</strong></td><td>사업주 승인 후 휴가 사용</td></tr>
              <tr><td><strong>4단계</strong></td><td>응급 시 먼저 사용 후 사후 통보 가능</td></tr>
              <tr><td><strong>5단계</strong></td><td>거부 시 서면 사유 요청 → ☎1350 또는 고용센터 진정</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="support">
        <h2 className="detail-card-head">정부 지원금 (저소득·중소기업 근로자)</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>대상:</strong> 저소득·중소기업 근로자 (가족돌봄휴가 사용자)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>금액:</strong> 1일당 일정액 지원 (연도별 변동 — 고용센터 확인)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>신청:</strong> 고용센터 또는 고용24(work24.go.kr) — 휴가 사용 후 사후 청구
          </div>
          <div className="info-box">
            <strong>문의:</strong> ☎1350 (고용노동부 콜센터)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            사업주 거부 시 대처, 돌봄 가족 범위, 가족돌봄휴직까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/family-care-leave" className="btn-cta">
            가족돌봄휴가 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 가족돌봄휴가연10일무급유급차이신청방법SpokeContent: SpokeData = {
  h1: '가족돌봄휴가 연 10일, 무급 원칙과 저소득 정부 지원 차이 및 신청 방법',
  breadcrumb: '연10일무급유급차이신청방법',
  description:
    '가족돌봄휴가: 연 최대 10일, 1일 단위. 무급 원칙. 저소득·중소기업 근로자는 정부 일당 지원(고용센터 신청). 사업주에게 2~3일 전 신청, 거부 시 ☎1350. 연차와 별도 권리.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '가족돌봄휴가는 반드시 하루 단위로 써야 하나요?',
      a: '원칙적으로 1일 단위이지만, 노사 합의나 취업규칙에 따라 반일 단위로도 사용할 수 있는 경우가 있습니다. 본인 사업장의 취업규칙을 확인하거나 사업주와 협의하세요.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '매년 10일이 새로 생기나요?',
      a: '네. 가족돌봄휴가는 매년 1월 1일 기준으로 10일이 새로 부여됩니다. 이전 연도에 남은 휴가는 다음 해로 이월되지 않습니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '정부 일당 지원은 얼마인가요?',
      a: '정부 지원액은 연도별로 변동되며, 최신 금액은 고용센터 또는 ☎1350에서 확인하는 것이 정확합니다. 저소득·중소기업 근로자의 무급 부담을 일부 보전하는 성격입니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '부모님이 갑자기 병원에 입원했는데 당일 사용할 수 있나요?',
      a: '응급 상황은 먼저 휴가를 사용하고 사후 통보·신청하는 것이 가능합니다. 사후 신청 시 사유를 소명할 수 있으면 정당한 휴가로 인정됩니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '가족돌봄휴가는 연차와 별도인가요?',
      a: '네. 가족돌봄휴가는 연차유급휴가와 별개 권리입니다. 연차를 모두 소진해도 연 10일의 가족돌봄휴가를 추가로 사용할 수 있습니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
  ],
  sources: [
    { name: '고용노동부 가족돌봄휴가', url: 'https://www.moel.go.kr' },
    { name: '남녀고용평등법 제22조의2', url: 'https://www.law.go.kr' },
  ],
};
