import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          아이돌봄서비스 소득 기준은 <strong>가구 소득이 기준 중위소득 200% 이하</strong>인 가구입니다.
          중위소득 75% 이하(가형)부터 200% 이하(라형)까지 4단계로 지원하며,
          200% 초과 가구도 서비스는 이용할 수 있지만 <strong>정부 지원 없이 전액 자부담</strong>입니다.
          소득 판정은 <strong>건강보험료 납부액</strong>을 기준으로 합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "아이돌봄서비스를 신청하려는데 소득 기준이 어떻게 되나요?"
        소득 기준과 판정 방법을 정리했습니다.
      </p>

      <section className="detail-card" id="income-table">
        <h2 className="detail-card-head">아이돌봄서비스 소득 기준 | 중위소득 75%~200% 4단계 지원</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>유형</th><th>소득 기준 (중위소득)</th><th>정부 지원율</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>가형</strong></td>
                <td>75% 이하</td>
                <td>85% 지원</td>
              </tr>
              <tr>
                <td><strong>나형</strong></td>
                <td>75% 초과 ~ 120% 이하</td>
                <td>40% 지원</td>
              </tr>
              <tr>
                <td><strong>다형</strong></td>
                <td>120% 초과 ~ 150% 이하</td>
                <td>20% 지원</td>
              </tr>
              <tr>
                <td><strong>라형</strong></td>
                <td>150% 초과 ~ 200% 이하</td>
                <td>10% 지원</td>
              </tr>
              <tr>
                <td><strong>지원 없음</strong></td>
                <td>200% 초과</td>
                <td>전액 자부담</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="income-check">
        <h2 className="detail-card-head">소득 판정 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>판정 기준:</strong> 가구 건강보험료 납부액 (직장 또는 지역가입자 기준)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>가구원 범위:</strong> 주민등록상 가구원 전체 (맞벌이 가구는 낮은 소득자의 25% 차감 후 합산)
          </div>
          <div className="info-box">
            <strong>확인 방법:</strong> 주민센터 방문 시 공적 자료로 조회하거나, 복지로(bokjiro.go.kr)에서 모의 계산 가능
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="special-cases">
        <h2 className="detail-card-head">소득 기준 예외 — 자동으로 가형 적용되는 경우</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>장애인 아동:</strong> 장애인복지법상 등록 장애아동은 가형으로 자동 분류
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>한부모 가족:</strong> 한부모가족지원법상 한부모 가구는 가형 적용
          </div>
          <div className="info-box">
            <strong>기초생활수급자:</strong> 국민기초생활보장법상 수급자는 가형 적용
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            본인부담금, 맞벌이 신청 방법 등<br />
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

export const 아이돌봄소득기준SpokeContent: SpokeData = {
  h1: '아이돌봄서비스 소득 기준 | 중위소득 75%~200% 4단계 지원',
  breadcrumb: '소득기준',
  description:
    '아이돌봄서비스 소득 기준: 기준 중위소득 200% 이하 가구 지원. 가형(75%이하)~라형(150~200%) 4단계. 200% 초과 가구도 이용 가능(전액 자부담). 건강보험료 납부액으로 소득 판정.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '아이돌봄서비스 소득 기준은 어떻게 되나요?',
      a: '기준 중위소득 200% 이하 가구가 정부 지원을 받을 수 있습니다. 75% 이하(가형)부터 150~200%(라형)까지 4단계로 나뉩니다.',
      source: '여성가족부',
      sourceUrl: 'https://www.mogef.go.kr',
    },
    {
      q: '소득 기준은 어떻게 판정하나요?',
      a: '가구 건강보험료 납부액을 기준으로 판정합니다. 맞벌이 가구는 낮은 소득자의 25%를 차감한 후 합산합니다.',
      source: '아이돌봄서비스',
      sourceUrl: 'https://www.idolbom.go.kr',
    },
    {
      q: '중위소득 200%를 넘어도 이용할 수 있나요?',
      a: '이용은 가능하지만 정부 지원이 없어 시간당 12,790원 전액을 본인이 부담해야 합니다.',
      source: '여성가족부',
      sourceUrl: 'https://www.mogef.go.kr',
    },
    {
      q: '기초생활수급자는 가형 혜택을 받나요?',
      a: '네. 기초생활수급자, 한부모 가족, 장애아동 가구는 소득 기준과 관계없이 가형으로 자동 분류되어 최대 혜택을 받습니다.',
      source: '여성가족부',
      sourceUrl: 'https://www.mogef.go.kr',
    },
    {
      q: '내 소득이 어느 유형에 해당하는지 어떻게 알 수 있나요?',
      a: '복지로(bokjiro.go.kr)의 복지서비스 모의계산 기능을 이용하거나, 주민센터를 방문해 상담받을 수 있습니다.',
      source: '복지로',
      sourceUrl: 'https://www.bokjiro.go.kr',
    },
  ],
  sources: [
    { name: '여성가족부', url: 'https://www.mogef.go.kr' },
    { name: '아이돌봄서비스', url: 'https://www.idolbom.go.kr' },
    { name: '복지로', url: 'https://www.bokjiro.go.kr' },
  ],
};
