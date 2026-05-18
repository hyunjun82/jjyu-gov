import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          디딤씨앗통장은 아동이 월 최대 <strong>5만원을 저축</strong>하면
          정부가 <strong>2배(최대 10만원)를 매칭 지원</strong>합니다.
          신청은 <strong>거주지 읍·면·동 주민센터</strong>에서 연중 받을 수 있으며,
          아동 명의 통장 개설 후 자동이체를 등록하면 됩니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "디딤씨앗통장은 어떻게 신청하고, 정부 매칭은 어떻게 받나요?"
        매칭 구조와 신청 방법을 정리했습니다.
      </p>

      <section className="detail-card" id="matching">
        <h2 className="detail-card-head">디딤씨앗통장 1:2 정부 매칭 구조와 신청 방법</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>구분</th><th>내용</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>아동 저축</td>
                <td>월 1,000원 ~ 최대 50,000원</td>
              </tr>
              <tr>
                <td>정부 매칭</td>
                <td>아동 저축액의 <strong>2배</strong> (월 최대 100,000원)</td>
              </tr>
              <tr>
                <td>매칭 적립 시점</td>
                <td>매월 아동 저축 확인 후 다음 달 자동 적립</td>
              </tr>
              <tr>
                <td>만기</td>
                <td>만 18세 (보호 종료 시점)</td>
              </tr>
              <tr>
                <td>지원 기간</td>
                <td>가입일부터 만 18세까지</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            아동이 월 5만원 저축을 꾸준히 하면, 만 18세까지 최대 약 2,160만원(아동 저축 720만원 + 정부 매칭 1,440만원)을 모을 수 있습니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="apply-steps">
        <h2 className="detail-card-head">신청 절차</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>단계</th><th>내용</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1단계</strong></td>
                <td>거주지 읍·면·동 주민센터 방문 → 디딤씨앗통장 신청</td>
              </tr>
              <tr>
                <td><strong>2단계</strong></td>
                <td>아동 명의 은행 통장 개설 (협약 은행: NH농협, 우체국 등)</td>
              </tr>
              <tr>
                <td><strong>3단계</strong></td>
                <td>매월 자동이체 등록 (아동 저축액 설정)</td>
              </tr>
              <tr>
                <td><strong>4단계</strong></td>
                <td>정부 매칭금 자동 적립</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="notes">
        <h2 className="detail-card-head">주의사항</h2>
        <div className="detail-card-body">
          <div className="warning-box" style={{ marginBottom: 12 }}>
            <strong>저축 중단 시:</strong> 해당 월 저축이 없으면 그달 정부 매칭도 지급되지 않습니다.
          </div>
          <div className="info-box">
            <strong>정부 매칭은 만기 시 수령:</strong> 정부 매칭금은 만 18세 보호 종료 후 자립 목적(주거·교육·의료·창업)으로만 사용 가능합니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            가입 자격, 가정위탁 신청 방법, 해지 조건 등<br />
            디딤씨앗통장 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/child-development-account" className="btn-cta">
            디딤씨앗통장 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 디딤씨앗매칭신청SpokeContent: SpokeData = {
  h1: '디딤씨앗통장 1:2 정부 매칭 구조와 신청 방법',
  breadcrumb: '매칭신청',
  description:
    '디딤씨앗통장: 아동 월 최대 5만원 저축 시 정부가 2배(월 최대 10만원) 매칭. 만 18세까지 최대 약 2,160만원 적립 가능. 거주지 주민센터 연중 신청. NH농협·우체국 등 협약 은행 통장 개설.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '정부 매칭은 얼마나 되나요?',
      a: '아동이 저축한 금액의 2배를 정부가 매칭합니다. 월 최대 10만원까지 지원됩니다. 예를 들어 아동이 월 5만원 저축하면 정부가 10만원을 추가로 적립합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '어디서 신청하나요?',
      a: '거주지 읍·면·동 주민센터를 방문해 신청합니다. 신청 후 협약 은행(NH농협, 우체국 등)에서 아동 명의 통장을 개설하고 자동이체를 등록하면 됩니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '한 달이라도 저축을 빠뜨리면 어떻게 되나요?',
      a: '저축하지 않은 달에는 정부 매칭도 지급되지 않습니다. 해당 월의 매칭은 소급되지 않으니 꾸준히 저축하는 것이 중요합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '만기까지 얼마를 모을 수 있나요?',
      a: '아동이 월 5만원씩 만 18세까지 꾸준히 저축하면 최대 약 2,160만원(아동 저축 720만원 + 정부 매칭 1,440만원)을 적립할 수 있습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '정부 매칭금은 언제 받을 수 있나요?',
      a: '정부 매칭금은 만 18세 보호 종료 후 자립 목적(주거·교육·의료·창업)으로 사용할 수 있습니다. 만기 전에는 임의로 인출할 수 없습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
  ],
  sources: [
    { name: '보건복지부', url: 'https://www.mohw.go.kr' },
    { name: '아동권리보장원', url: 'https://www.ncrc.or.kr' },
  ],
};
