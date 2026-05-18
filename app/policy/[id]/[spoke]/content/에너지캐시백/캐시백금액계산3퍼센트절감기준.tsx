import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          에너지캐시백은 <strong>직전 2개년 동월 평균 전기 사용량 대비 3% 이상 절감</strong>해야
          지급됩니다. 캐시백 금액은 <strong>절감량(kWh) × 절감률 구간별 단가(30~100원/kWh)</strong>로
          계산하며, 다음 달 전기요금에서 자동 차감됩니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        절감률이 높을수록 단가가 올라갑니다. 20% 이상 줄이면 1kWh당 100원(최대 단가)을 받으며,
        참여 가구 연평균 혜택은 약 4만 9,000원입니다.
      </p>

      <section className="detail-card" id="rate">
        <h2 className="detail-card-head">절감률 구간별 캐시백 단가</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>절감률 구간</th><th>캐시백 단가 (1kWh당)</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>3% 이상 5% 미만</strong></td><td>30원/kWh</td></tr>
              <tr><td><strong>5% 이상 10% 미만</strong></td><td>60원/kWh</td></tr>
              <tr><td><strong>10% 이상 20% 미만</strong></td><td>80원/kWh</td></tr>
              <tr><td><strong>20% 이상</strong></td><td>100원/kWh (최대)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="example">
        <h2 className="detail-card-head">캐시백 계산 예시</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>기준:</strong> 직전 2개년 7월 평균 사용량 300kWh
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>이번 달 사용:</strong> 260kWh → 절감량 40kWh / 절감률 13.3%
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>적용 단가:</strong> 10~20% 구간 → 80원/kWh
          </div>
          <div className="info-box">
            <strong>캐시백:</strong> 40kWh × 80원 = <strong>3,200원</strong> 다음 달 전기요금 차감
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="criteria">
        <h2 className="detail-card-head">3% 기준 핵심 정리</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>비교 기준:</strong> 동일 월 직전 2개년 평균 (예: 26년 7월 → 24·25년 7월 평균)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>최소 절감률:</strong> 3% 미만이면 캐시백 미지급
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>사용 이력 조건:</strong> 직전 2개년 중 최소 1개년 사용 이력 필요
          </div>
          <div className="info-box">
            <strong>지급 방식:</strong> 현금 아님 — 다음 달 전기요금에서 자동 차감
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            신청 방법, 신청 자격, 에너지바우처 비교까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/energy-cashback" className="btn-cta">
            에너지캐시백 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 에너지캐시백캐시백금액계산3퍼센트절감기준SpokeContent: SpokeData = {
  h1: '에너지캐시백 캐시백 금액 계산법, 직전 2개년 대비 3% 절감 기준과 단가표',
  breadcrumb: '캐시백금액계산3퍼센트절감기준',
  description:
    '에너지캐시백 계산: 직전 2개년 동월 평균 대비 3% 이상 절감 시 지급. 절감률 구간별 단가 30~100원/kWh (3~5%=30원, 5~10%=60원, 10~20%=80원, 20%↑=100원). 다음 달 전기요금 자동 차감.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '절감률 3%를 달성하기 어렵지 않나요?',
      a: '300kWh 기준으로는 9kWh만 줄이면 3%가 됩니다. 에어컨 설정 온도 1℃ 올리거나 LED로 교체하는 것만으로도 달성할 수 있습니다. en-ter.co.kr의 스마트 모니터링으로 목표 달성률을 실시간 확인할 수 있습니다.',
      source: '한국전력공사 에너지캐시백',
      sourceUrl: 'https://en-ter.co.kr/ec/apply/info/info.do',
    },
    {
      q: '캐시백이 전기요금보다 많으면 남은 금액은 환급되나요?',
      a: '아닙니다. 캐시백이 해당 달 전기요금을 초과하면 나머지는 소멸됩니다. 이월이나 현금 환급은 되지 않으므로 캐시백 금액이 크게 나올 가능성이 있다면 미리 참고하세요.',
      source: 'KEPCO 웹진',
      sourceUrl: 'https://en-ter.co.kr/ec/apply/info/info.do',
    },
    {
      q: '직전 2개년 평균이 없는 새 아파트면 신청이 안 되나요?',
      a: '직전 2개년 중 최소 1개년 사용 이력이 있어야 신청이 가능합니다. 새 아파트에 처음 입주해서 이력이 전혀 없다면 신청이 어렵고, 1년 이상 거주 후 신청하는 것이 좋습니다.',
      source: '한국전력공사 에너지캐시백',
      sourceUrl: 'https://en-ter.co.kr/ec/main/main.do',
    },
    {
      q: '여름(7월)이 기준이면 겨울(1월)은 다른 기준인가요?',
      a: '네. 매월 동일 월 직전 2개년 평균과 비교합니다. 1월은 전년도·전전년도 1월 평균, 7월은 7월 평균이 각각 기준이 됩니다. 계절마다 독립적으로 계산됩니다.',
      source: 'KEPCO 웹진',
      sourceUrl: 'https://en-ter.co.kr/ec/apply/info/info.do',
    },
    {
      q: '세대당 연평균 4만 9,000원이면 월평균 얼마인가요?',
      a: '연평균 약 4만 9,000원이면 월평균 약 4,083원입니다. 여름·겨울 전기 사용량이 많은 달에 캐시백도 함께 커지므로 실제로는 특정 달에 집중되는 경향이 있습니다.',
      source: '한국전력공사 에너지캐시백',
      sourceUrl: 'https://en-ter.co.kr/ec/apply/info/info.do',
    },
  ],
  sources: [
    { name: '한국전력공사 에너지캐시백 신청 안내', url: 'https://en-ter.co.kr/ec/apply/info/info.do' },
    { name: '한국전력공사 에너지캐시백 공식 사이트', url: 'https://en-ter.co.kr/ec/main/main.do' },
  ],
};
