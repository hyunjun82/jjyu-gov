import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          청년내일채움공제는 2년 만기 시 <strong>총 1,200만원</strong>을 받습니다.
          청년 본인이 2년간 <strong>400만원</strong>(월 약 16.7만원),
          기업이 <strong>400만원</strong>, 정부가 <strong>400만원</strong>을 각각 적립합니다.
          여기에 은행 이자가 별도로 발생합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "본인이 400만원 내면, 기업과 정부가 각각 400만원씩 더 얹어준다."
        본인 부담의 3배를 받는 구조입니다. 주체별 적립금 흐름과 월 납부액을 아래에서 확인하세요.
      </p>

      <section className="detail-card" id="accumulation">
        <h2 className="detail-card-head">3자 적립 구조 — 청년·기업·정부 각 400만원</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>적립 주체</th><th>총 적립액</th><th>월 적립액</th><th>납입 방법</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>청년 본인</td>
                <td><strong>400만원</strong></td>
                <td>약 16만 7천원</td>
                <td>자동이체(본인 계좌)</td>
              </tr>
              <tr>
                <td>기업</td>
                <td><strong>400만원</strong></td>
                <td>약 16만 7천원</td>
                <td>기업 부담 (납입 의무)</td>
              </tr>
              <tr>
                <td>정부(고용노동부)</td>
                <td><strong>400만원</strong></td>
                <td>6개월 단위 지급</td>
                <td>공제 계정으로 직접 지급</td>
              </tr>
              <tr>
                <td><strong>합계 (2년 만기)</strong></td>
                <td><strong>1,200만원 + 이자</strong></td>
                <td>-</td>
                <td>만기 일시 수령</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>정부 지원금 지급 시점:</strong> 정부 기여금 400만원은 6개월 단위로 분할 지급됩니다.
            1차(6개월), 2차(12개월), 3차(18개월), 4차(24개월)로 나뉘어 공제 계정에 적립됩니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="payout">
        <h2 className="detail-card-head">만기 수령액 — 1,200만원 + 이자</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>구분</th><th>금액</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>청년 적립금</td>
                <td>400만원</td>
              </tr>
              <tr>
                <td>기업 적립금</td>
                <td>400만원</td>
              </tr>
              <tr>
                <td>정부 기여금</td>
                <td>400만원</td>
              </tr>
              <tr>
                <td>은행 이자</td>
                <td>별도 발생 (시중은행 금리 적용)</td>
              </tr>
              <tr>
                <td><strong>만기 총 수령액</strong></td>
                <td><strong>1,200만원 + 이자</strong></td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>세제 혜택:</strong> 만기 수령액에서 이자소득세는 감면 혜택이 있습니다.
            정확한 세제 적용 여부는 취급 금융기관에 확인하세요.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="monthly-burden">
        <h2 className="detail-card-head">월 16만 7천원 납부 — 실제 부담과 수익 비교</h2>
        <div className="detail-card-body">
          <p style={{ lineHeight: 1.8 }}>
            청년 본인은 2년간 매월 약 16만 7천원을 납부합니다.
            총 납부액은 400만원입니다.
            2년 후 1,200만원을 받으므로 <strong>본인 납부액의 3배</strong>를 수령하게 됩니다.
          </p>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>실질 수익률 계산 예시:</strong><br />
            본인 납부: 400만원 → 수령: 1,200만원<br />
            순이익: 약 800만원 (기업 400만원 + 정부 400만원)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            신청자격, 중도해지, 도약계좌 비교 등<br />
            청년내일채움공제 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/youth-tomorrow-filling" className="btn-cta">
            청년내일채움공제 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 청년내일채움공제지원금액2년1200만본인기업정부적립구조SpokeContent: SpokeData = {
  h1: '청년내일채움공제 지원금액, 2년간 1,200만원 본인·기업·정부 적립 구조',
  breadcrumb: '지원금액',
  description:
    '청년내일채움공제 지원금액은 2년 만기 시 총 1,200만원입니다. 청년 본인 400만원(월 약 16.7만원), 기업 400만원, 정부 400만원을 각각 적립합니다. 본인 납부액의 3배를 수령하는 구조이며 은행 이자가 별도 발생합니다.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '청년내일채움공제 만기 수령액이 정확히 얼마인가요?',
      a: '2년 만기 시 청년 400만원 + 기업 400만원 + 정부 400만원으로 총 1,200만원과 은행 이자를 수령합니다.',
      source: '고용노동부 청년내일채움공제 안내',
      sourceUrl: 'https://www.work24.go.kr',
    },
    {
      q: '월 납부액이 고정인가요?',
      a: '청년 본인 납부액은 2년간 총 400만원이며, 월 약 16만 7천원입니다. 자동이체로 납부합니다.',
      source: '고용노동부 청년내일채움공제 안내',
      sourceUrl: 'https://www.work24.go.kr',
    },
    {
      q: '기업이 400만원을 못 내면 어떻게 되나요?',
      a: '기업 적립금은 기업 부담 의무사항입니다. 기업이 납입하지 않을 경우 공제 계약이 해지될 수 있으며, 이 경우 기업 귀책 해지로 처리되어 청년에게 유리한 방식으로 환급될 수 있습니다. 관할 고용센터에 즉시 신고하세요.',
      source: '고용노동부 청년내일채움공제 Q&A',
      sourceUrl: 'https://www.work24.go.kr',
    },
    {
      q: '정부 기여금 400만원은 언제 지급되나요?',
      a: '6개월 단위로 분할 지급됩니다. 1차(6개월 시점), 2차(12개월), 3차(18개월), 4차(24개월) 순서로 공제 계정에 적립됩니다.',
      source: '고용노동부 청년내일채움공제 기여금 지급 안내',
      sourceUrl: 'https://www.work24.go.kr',
    },
    {
      q: '만기 수령 시 세금이 부과되나요?',
      a: '이자 부분에 이자소득세가 발생할 수 있습니다. 세제 혜택 적용 여부는 취급 금융기관과 운용사에 확인하세요. 본인 납부액과 기업·정부 적립금 원금에 대한 세금 처리는 별도로 안내됩니다.',
      source: '고용노동부 청년내일채움공제 안내',
      sourceUrl: 'https://www.work24.go.kr',
    },
  ],
  sources: [
    { name: '고용노동부 청년내일채움공제 안내', url: 'https://www.work24.go.kr' },
    { name: '중소기업청년지원사업 적립금 구조', url: 'https://www.work24.go.kr/cm/c/d/0201/selectNoticeList.do' },
  ],
};
