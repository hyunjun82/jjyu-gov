import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          디딤씨앗통장은 <strong>만 18세 보호 종료 전에는 임의 해지가 원칙적으로 불가</strong>합니다.
          단, <strong>사망, 해외 이민</strong> 등 부득이한 사유가 있을 때 예외적으로 해지할 수 있으며,
          이 경우 <strong>정부 매칭금은 반환</strong>되고 아동 저축분만 돌려받을 수 있습니다.
          만 18세 정상 종료 시에는 자립 목적으로 전액 수령합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "디딤씨앗통장을 중간에 해지하면 어떻게 되나요?"
        해지 조건과 환급 방식을 정리했습니다.
      </p>

      <section className="detail-card" id="termination">
        <h2 className="detail-card-head">디딤씨앗통장 중도 해지 조건 | 정부 매칭금 반환 여부</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>해지 유형</th><th>환급 내용</th><th>정부 매칭금</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>만 18세 정상 종료</strong></td>
                <td>아동 저축 + 정부 매칭금 전액</td>
                <td>전액 지급</td>
              </tr>
              <tr>
                <td><strong>사망</strong></td>
                <td>아동 저축분만 환급</td>
                <td>전액 반환</td>
              </tr>
              <tr>
                <td><strong>해외 이민</strong></td>
                <td>아동 저축분만 환급</td>
                <td>전액 반환</td>
              </tr>
              <tr>
                <td><strong>임의 해지 (원칙 불가)</strong></td>
                <td>사유에 따라 결정</td>
                <td>반환 원칙</td>
              </tr>
            </tbody>
          </table>
          <div className="warning-box" style={{ marginTop: 12 }}>
            중도 해지 시 정부 매칭금은 반환됩니다. 불필요한 해지는 적립금 손실로 이어집니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="usage-conditions">
        <h2 className="detail-card-head">만기(만 18세) 후 자립 지원금 수령 조건</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>용도 제한:</strong> 자립 목적(주거·교육·의료·창업)으로만 사용 가능
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>증빙 서류:</strong> 사용 목적에 맞는 영수증, 계약서 등 제출 필요
          </div>
          <div className="info-box">
            <strong>미사용 시:</strong> 자립 목적에 해당하지 않는 용도로 사용 불가. 주민센터 또는 아동권리보장원에 사용 용도 확인 후 인출
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="저축중단">
        <h2 className="detail-card-head">저축을 잠시 못 하면 통장이 해지되나요?</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            저축을 하지 않아도 통장이 자동 해지되지는 않습니다.
            단, <strong>저축하지 않은 달에는 정부 매칭금이 지급되지 않습니다.</strong>
          </div>
          <div className="info-box">
            저축을 재개하면 그달부터 다시 매칭금이 적립됩니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            매칭 구조, 가입 자격, 가정위탁 신청 방법 등<br />
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

export const 디딤씨앗해지조건SpokeContent: SpokeData = {
  h1: '디딤씨앗통장 중도 해지 조건 | 정부 매칭금 반환 여부',
  breadcrumb: '해지조건',
  description:
    '디딤씨앗통장 중도 해지: 만 18세 전 임의 해지 원칙 불가. 사망·해외 이민 등 부득이한 사유 시 아동 저축분만 환급(정부 매칭금 반환). 저축 중단 시 통장 유지되나 해당 월 매칭금 미지급.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '디딤씨앗통장을 중간에 해지할 수 있나요?',
      a: '만 18세 보호 종료 전 임의 해지는 원칙적으로 불가합니다. 사망, 해외 이민 등 부득이한 사유가 있을 때만 예외적으로 가능합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '중도 해지하면 정부 매칭금도 받을 수 있나요?',
      a: '아닙니다. 중도 해지 시 정부 매칭금은 반환되고, 아동이 직접 저축한 금액만 돌려받을 수 있습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '한 달 저축을 못 하면 통장이 해지되나요?',
      a: '아닙니다. 저축을 하지 않아도 통장 자체가 해지되지는 않습니다. 단, 저축하지 않은 달에는 정부 매칭금이 지급되지 않으며, 다시 저축을 시작하면 그달부터 매칭이 재개됩니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '만 18세가 되면 어떻게 수령하나요?',
      a: '만 18세 보호 종료 후 자립 목적(주거·교육·의료·창업)으로 사용할 수 있습니다. 사용 용도에 맞는 증빙 서류를 제출해야 합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '자립 목적 외에 돈을 꺼낼 수 없나요?',
      a: '정부 매칭금은 자립 목적(주거·교육·의료·창업)으로만 인출 가능합니다. 그 외 용도로는 사용할 수 없습니다. 아동 저축분도 같은 기준이 적용됩니다.',
      source: '아동권리보장원',
      sourceUrl: 'https://www.ncrc.or.kr',
    },
  ],
  sources: [
    { name: '보건복지부', url: 'https://www.mohw.go.kr' },
    { name: '아동권리보장원', url: 'https://www.ncrc.or.kr' },
  ],
};
