import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          아이돌봄서비스는 <strong>시간제</strong>와 <strong>종합형</strong> 두 가지로 나뉩니다.
          시간제는 <strong>필요한 시간만큼</strong> 이용하며 연 960시간 한도,
          종합형은 <strong>1일 9시간 이내</strong>로 매일 이용하는 방식입니다.
          시간제는 시간당 12,790원, 종합형은 별도 요금 체계가 적용됩니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "아이돌봄서비스 시간제랑 종합형이 어떻게 다른가요?"
        두 유형의 차이와 선택 기준을 정리했습니다.
      </p>

      <section className="detail-card" id="comparison">
        <h2 className="detail-card-head">아이돌봄서비스 시간제 vs 종합형 — 차이와 선택 기준</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>구분</th><th>시간제</th><th>종합형</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>이용 방식</td>
                <td>필요할 때 시간 단위로 이용</td>
                <td>정기적으로 매일 이용</td>
              </tr>
              <tr>
                <td>이용 시간</td>
                <td>연 960시간 (가·나·다형 기준)</td>
                <td>1일 최대 9시간</td>
              </tr>
              <tr>
                <td>대상 연령</td>
                <td>생후 3개월 ~ 만 12세</td>
                <td>생후 3개월 ~ 만 12세</td>
              </tr>
              <tr>
                <td>기준 요금</td>
                <td>시간당 12,790원</td>
                <td>시간당 14,290원 (야간 등 별도)</td>
              </tr>
              <tr>
                <td>적합 상황</td>
                <td>학교 하교 후, 병원 진료, 급한 돌봄 공백</td>
                <td>맞벌이 등 전일 정기 돌봄 필요</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="which-to-choose">
        <h2 className="detail-card-head">어떤 유형을 선택해야 할까</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>시간제가 적합한 경우:</strong> 부모 중 한 명이 재택근무나 파트타임으로 일부 돌봄이 가능하고, 특정 시간대만 돌봄 지원이 필요한 경우
          </div>
          <div className="info-box">
            <strong>종합형이 적합한 경우:</strong> 맞벌이로 하루 종일 정기적 돌봄이 필요한 경우. 어린이집·유치원에 다니는 아이가 방과 후에도 돌봄이 필요한 경우
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="apply">
        <h2 className="detail-card-head">신청 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>온라인:</strong> 아이돌봄서비스(idolbom.go.kr) — 유형 선택 후 신청
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>방문:</strong> 거주지 읍·면·동 주민센터
          </div>
          <div className="info-box">
            <strong>문의:</strong> 아이돌봄서비스 콜센터 ☎1577-2514
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            본인부담금, 소득 기준, 맞벌이 신청 방법 등<br />
            아이돌봄서비스 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/child-care-service" className="btn-cta">
            아이돌봄서비스 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 아이돌봄시간제종합형SpokeContent: SpokeData = {
  h1: '아이돌봄서비스 시간제 vs 종합형 — 차이와 선택 기준',
  breadcrumb: '시간제종합형',
  description:
    '아이돌봄서비스 시간제(연 960시간, 시간당 12,790원)와 종합형(1일 최대 9시간, 시간당 14,290원) 비교. 시간제는 필요 시간만, 종합형은 매일 정기 이용. 생후 3개월~만 12세 대상. idolbom.go.kr 신청.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '시간제와 종합형의 가장 큰 차이는 무엇인가요?',
      a: '시간제는 필요한 시간만큼 이용하는 방식(연 960시간 한도)이고, 종합형은 매일 정기적으로 이용하는 방식(1일 최대 9시간)입니다.',
      source: '여성가족부',
      sourceUrl: 'https://www.mogef.go.kr',
    },
    {
      q: '시간제와 종합형을 동시에 이용할 수 있나요?',
      a: '시간제와 종합형을 동시에 신청하는 것은 원칙적으로 불가합니다. 가구의 돌봄 상황에 맞는 유형 하나를 선택해 이용해야 합니다.',
      source: '아이돌봄서비스',
      sourceUrl: 'https://www.idolbom.go.kr',
    },
    {
      q: '아이가 어린이집에 다니는데 시간제를 이용할 수 있나요?',
      a: '네. 어린이집 등원 전·하원 후 등 필요한 시간대에 시간제 돌봄을 이용할 수 있습니다.',
      source: '아이돌봄서비스',
      sourceUrl: 'https://www.idolbom.go.kr',
    },
    {
      q: '종합형은 하루 9시간을 꼭 다 써야 하나요?',
      a: '아닙니다. 1일 최대 9시간이 한도이며, 실제 이용한 시간만큼 요금이 계산됩니다.',
      source: '아이돌봄서비스',
      sourceUrl: 'https://www.idolbom.go.kr',
    },
    {
      q: '어디서 신청하나요?',
      a: '아이돌봄서비스 홈페이지(idolbom.go.kr)에서 온라인 신청하거나, 거주지 주민센터를 방문해 신청할 수 있습니다. 문의는 ☎1577-2514입니다.',
      source: '아이돌봄서비스',
      sourceUrl: 'https://www.idolbom.go.kr',
    },
  ],
  sources: [
    { name: '여성가족부', url: 'https://www.mogef.go.kr' },
    { name: '아이돌봄서비스', url: 'https://www.idolbom.go.kr' },
  ],
};
