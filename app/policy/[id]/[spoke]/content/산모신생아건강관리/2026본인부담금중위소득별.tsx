import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          산모신생아 건강관리 지원사업은 <strong>기준 중위소득 150% 이하</strong> 가구가 대상이며,
          소득 수준에 따라 <strong>본인부담금이 차등</strong> 적용됩니다.
          기초수급자·차상위는 본인부담금 없이 전액 지원받고,
          중위소득이 높아질수록 본인부담 비율이 올라갑니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        2026년 기준 가구 유형별·소득 구간별 본인부담금을 미리 확인하세요.
      </p>

      <section className="detail-card" id="table">
        <h2 className="detail-card-head">2026년 소득 구간별 본인부담금</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>소득 기준</th><th>정부 지원</th><th>본인부담</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>기초수급자·차상위</strong></td><td>전액</td><td>없음</td></tr>
              <tr><td><strong>중위소득 40% 이하</strong></td><td>90%</td><td>10%</td></tr>
              <tr><td><strong>중위소득 40~60% 이하</strong></td><td>80%</td><td>20%</td></tr>
              <tr><td><strong>중위소득 60~80% 이하</strong></td><td>70%</td><td>30%</td></tr>
              <tr><td><strong>중위소득 80~100% 이하</strong></td><td>60%</td><td>40%</td></tr>
              <tr><td><strong>중위소득 100~150% 이하</strong></td><td>50%</td><td>50%</td></tr>
            </tbody>
          </table>
          <p style={{ fontSize: 13, color: '#8B95A1', marginTop: 8 }}>
            ※ 실제 금액은 서비스 제공 기간·인력 유형에 따라 다름
          </p>
        </div>
      </section>

      <section className="detail-card" id="service">
        <h2 className="detail-card-head">서비스 제공 기간</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>출산 유형</th><th>제공 기간</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>첫째아 단태아</strong></td><td>5일 (표준)</td></tr>
              <tr><td><strong>둘째아 단태아</strong></td><td>10일</td></tr>
              <tr><td><strong>셋째아 이상</strong></td><td>15일</td></tr>
              <tr><td><strong>쌍태아</strong></td><td>10일</td></tr>
              <tr><td><strong>삼태아 이상</strong></td><td>15일</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="note">
        <h2 className="detail-card-head">소득 확인 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>건강보험료:</strong> 건강보험료 납부액 기준으로 소득 구간 판정
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>확인처:</strong> 사회서비스 전자바우처(socialservice.or.kr) 또는 주민센터
          </div>
          <div className="info-box">
            <strong>최근 월:</strong> 신청 시점 직전 월 건강보험료 기준 적용
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            신청 기간, 쌍둥이 예외 지원, 산후도우미 비용 비교까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/maternal-newborn-care" className="btn-cta">
            산모신생아 건강관리 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 산모신생아건강관리2026본인부담금중위소득별SpokeContent: SpokeData = {
  h1: '2026 산모신생아 건강관리 본인부담금, 중위소득별 지원 비율 총정리',
  breadcrumb: '2026본인부담금중위소득별',
  description:
    '산모신생아 건강관리 지원: 기초수급자 전액, 중위소득 40% 이하 10% 부담, 150% 이하 50% 부담. 첫째 5일, 둘째 10일, 셋째 이상 15일 서비스. 건강보험료 기준 소득 판정.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '중위소득 150%를 초과하면 지원을 못 받나요?',
      a: '기본적으로 중위소득 150% 이하가 대상입니다. 단 쌍둥이 이상, 셋째아, 희귀난치질환·장애인 산모는 소득 기준 예외 적용이 가능합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.socialservice.or.kr',
    },
    {
      q: '소득 구간은 어떻게 확인하나요?',
      a: '건강보험료 납부액을 기준으로 소득 구간을 산정합니다. 신청 시 주민센터 또는 사회서비스 포털에서 확인할 수 있습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.socialservice.or.kr',
    },
    {
      q: '서비스 기간을 연장할 수 있나요?',
      a: '예외적인 경우(다태아, 산모 질환 등)에 한해 연장 지원이 가능합니다. 담당 기관에 사전 확인하세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.socialservice.or.kr',
    },
    {
      q: '하루 몇 시간 서비스를 받을 수 있나요?',
      a: '기본형은 하루 9시간, 종일형은 12시간 서비스가 제공됩니다. 선택한 유형에 따라 본인부담금도 달라집니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.socialservice.or.kr',
    },
    {
      q: '산후조리원을 이용하면 이 서비스는 못 받나요?',
      a: '산후조리원과 산모신생아 건강관리 지원사업은 각각 별도 사업입니다. 산후조리원 이용 후 귀가한 뒤 서비스를 이용하는 것도 가능합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.socialservice.or.kr',
    },
  ],
  sources: [
    { name: '사회서비스 전자바우처', url: 'https://www.socialservice.or.kr' },
    { name: '보건복지부', url: 'https://www.mohw.go.kr' },
    { name: '복지로', url: 'https://www.bokjiro.go.kr' },
  ],
};
