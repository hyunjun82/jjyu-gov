import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          디딤씨앗통장은 <strong>만 18세 미만의 보호대상아동</strong>이 가입 대상입니다.
          구체적으로는 아동복지시설·위탁가정 보호아동, 기초생활수급 가구 아동,
          장애인연금 수급 부모의 아동 등이 해당합니다.
          소득이 높아도 <strong>수급자 또는 차상위</strong>이면 가입할 수 있습니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "디딤씨앗통장은 어떤 아동이 가입할 수 있나요?"
        가입 자격과 대상 범위를 정리했습니다.
      </p>

      <section className="detail-card" id="eligibility">
        <h2 className="detail-card-head">디딤씨앗통장 가입 자격 | 기초수급·차상위·보호대상아동 대상</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>대상 유형</th><th>세부 기준</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>보호대상아동</strong></td>
                <td>아동복지시설(보육원 등), 가정위탁, 공동생활가정 보호 아동</td>
              </tr>
              <tr>
                <td><strong>기초생활수급 아동</strong></td>
                <td>국민기초생활보장법상 수급자 가구 만 12세 이하 아동</td>
              </tr>
              <tr>
                <td><strong>한부모 아동</strong></td>
                <td>한부모가족지원법상 지원 대상 가구 아동</td>
              </tr>
              <tr>
                <td><strong>차상위 아동</strong></td>
                <td>차상위계층 가구 아동 (소득인정액 기준 중위소득 50% 이하)</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>연령 기준:</strong> 만 18세 미만 (단, 기초수급·차상위·한부모 아동은 만 12세 이하 신규 가입)
          </div>
        </div>
      </section>

      <section className="detail-card" id="ineligible">
        <h2 className="detail-card-head">가입 제외 대상</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>중위소득 50% 초과:</strong> 차상위 기준을 초과하는 일반 가구 아동은 가입 불가
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>만 12세 초과 신규 가입:</strong> 기초수급·차상위 아동은 만 13세부터 신규 가입 불가
            (기존 가입자는 만 18세까지 유지)
          </div>
          <div className="info-box">
            <strong>보호 종료 아동:</strong> 만 18세 이후 보호가 종료된 아동은 신규 가입 불가
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="apply">
        <h2 className="detail-card-head">신청 방법 및 문의</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>신청처:</strong> 거주지 읍·면·동 주민센터 방문 신청 (연중)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>시설 아동:</strong> 아동복지시설 담당자를 통해 신청
          </div>
          <div className="info-box">
            <strong>문의:</strong> 보건복지부 아동정책과 또는 아동권리보장원 ☎02-6905-0900
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            정부 매칭 방법, 가정위탁 신청, 해지 조건 등<br />
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

export const 디딤씨앗가입자격SpokeContent: SpokeData = {
  h1: '디딤씨앗통장 가입 자격 | 기초수급·차상위·보호대상아동 대상',
  breadcrumb: '가입자격',
  description:
    '디딤씨앗통장 가입 대상: 아동복지시설·위탁가정 보호아동, 기초수급 가구 아동(만 12세 이하), 한부모 가족 아동, 차상위(중위소득 50%이하) 아동. 만 18세 미만. 거주지 주민센터 신청.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '디딤씨앗통장은 누가 가입할 수 있나요?',
      a: '만 18세 미만 보호대상아동(시설·위탁가정 등), 기초생활수급 가구 아동, 한부모 가족 아동, 차상위계층 아동이 가입할 수 있습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '기초수급자 가구 아동은 몇 살까지 신규 가입이 가능한가요?',
      a: '기초수급·차상위·한부모 아동은 만 12세 이하에서만 신규 가입이 가능합니다. 기존에 가입한 아동은 만 18세까지 유지됩니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '차상위 기준은 소득이 얼마까지인가요?',
      a: '소득인정액이 기준 중위소득 50% 이하인 가구가 차상위계층에 해당합니다. 정확한 금액은 해당 연도 기준을 주민센터에서 확인하세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '일반 가정 아이도 가입할 수 있나요?',
      a: '아닙니다. 디딤씨앗통장은 보호대상아동, 기초수급·차상위·한부모 가구 아동으로 대상이 한정됩니다. 일반 가구는 가입 대상이 아닙니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '시설 아동은 어떻게 신청하나요?',
      a: '아동복지시설(보육원 등)에 거주하는 아동은 시설 담당자를 통해 신청합니다. 직접 주민센터를 방문하지 않아도 됩니다.',
      source: '아동권리보장원',
      sourceUrl: 'https://www.ncrc.or.kr',
    },
  ],
  sources: [
    { name: '보건복지부', url: 'https://www.mohw.go.kr' },
    { name: '아동권리보장원', url: 'https://www.ncrc.or.kr' },
  ],
};
