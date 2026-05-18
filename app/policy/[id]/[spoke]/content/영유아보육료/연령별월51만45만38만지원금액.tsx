import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          영유아보육료는 <strong>만 0세 월 51만원·만 1세 45만원·만 2세 38만원</strong>을
          어린이집에 직접 지급합니다.
          소득·재산 조건 없이 어린이집을 이용하는 만 0~2세 영유아 모두가 대상이며,
          부모가 별도로 수령하는 것이 아니라 정부가 어린이집에 직접 납부합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        만 3~5세는 누리과정으로 별도 지원됩니다.
        보육료 외 식대·특별활동비(영어·음악 등)는 어린이집마다 별도 자부담이 발생할 수 있으나,
        기본 보육료는 정부가 전액 부담합니다.
      </p>

      <section className="detail-card" id="amount">
        <h2 className="detail-card-head">2026년 연령별 영유아보육료</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>연령</th><th>월 지원액</th><th>지급 대상</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>만 0세</strong></td><td>510,000원</td><td>어린이집 이용 만 0세</td></tr>
              <tr><td><strong>만 1세</strong></td><td>450,000원</td><td>어린이집 이용 만 1세</td></tr>
              <tr><td><strong>만 2세</strong></td><td>380,000원</td><td>어린이집 이용 만 2세</td></tr>
              <tr><td><strong>만 3~5세</strong></td><td>누리과정 별도 지원</td><td>어린이집·유치원 모두 적용</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="how">
        <h2 className="detail-card-head">지급 방식</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>지급 주체:</strong> 정부(보건복지부) → 어린이집 직접 지급
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>부모 부담:</strong> 기본 보육료 없음 (식대·특별활동비 일부 자부담)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>소득 조건:</strong> 없음 (전 소득 계층 보편 지원)
          </div>
          <div className="info-box">
            <strong>지급 주기:</strong> 매월 (어린이집 이용 등록 후 자동 지급)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="self">
        <h2 className="detail-card-head">자부담 항목 (어린이집별 다를 수 있음)</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>월 평균</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>식대·간식비</strong></td><td>3~5만원</td></tr>
              <tr><td><strong>특별활동비</strong></td><td>2~5만원</td></tr>
              <tr><td><strong>현장학습비</strong></td><td>1~2만원</td></tr>
            </tbody>
          </table>
          <p style={{ fontSize: 13, color: '#8B95A1', marginTop: 8 }}>※ 자부담 항목과 금액은 어린이집마다 다릅니다. 입소 전 확인 권장.</p>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            신청 방법, 가정양육수당과 차이, 누리과정까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/infant-childcare-fee" className="btn-cta">
            영유아보육료 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 영유아보육료연령별월51만45만38만지원금액SpokeContent: SpokeData = {
  h1: '영유아보육료 연령별 금액, 만 0세 51만·1세 45만·2세 38만원 어린이집 직접 지급',
  breadcrumb: '연령별월51만45만38만지원금액',
  description:
    '2026 영유아보육료: 만 0세 51만원·1세 45만원·2세 38만원, 소득 무관 보편 지원, 어린이집 직접 지급. 3~5세는 누리과정. 식대·특별활동비는 자부담. 복지로·행정복지센터 신청.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '보육료가 어린이집에 직접 가면 부모는 어떻게 확인하나요?',
      a: '아이행복카드(국민행복카드)로 어린이집 결제가 이루어지며, 앱이나 카드사 명세서에서 이용 내역을 확인할 수 있습니다. 보육료는 어린이집에 직접 지급되므로 부모가 따로 내지 않아도 됩니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '만 0세는 언제부터 어린이집에 보낼 수 있나요?',
      a: '생후 6주 이후부터 어린이집에 등록할 수 있습니다. 만 0세는 보육료가 가장 높아(51만원) 정부 지원이 충분하게 이루어집니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '아이가 중간에 어린이집을 그만두면 어떻게 되나요?',
      a: '어린이집 이용을 중단하면 보육료 지원도 함께 중단됩니다. 대신 가정에서 양육하는 경우 가정양육수당을 신청하면 됩니다. 주민센터에 변경 신고를 해야 합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '특별활동비가 너무 비싸면 어린이집에 거부할 수 있나요?',
      a: '특별활동(영어·음악·체육 등)은 선택 사항이므로 참여를 원치 않으면 어린이집에 거부 의사를 밝힐 수 있습니다. 어린이집이 강제로 특별활동비를 징수하는 것은 금지되어 있습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '어린이집이 가득 차 있으면 어떻게 하나요?',
      a: '어린이집 입소 대기는 어린이집 정보공개포털(info.childcare.go.kr)에서 온라인 대기 신청을 할 수 있습니다. 대기 중에는 가정양육수당을 신청해 지원을 받을 수 있습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
  ],
  sources: [
    { name: '보건복지부 영유아보육료', url: 'https://www.mohw.go.kr' },
    { name: '복지로', url: 'https://www.bokjiro.go.kr' },
  ],
};
