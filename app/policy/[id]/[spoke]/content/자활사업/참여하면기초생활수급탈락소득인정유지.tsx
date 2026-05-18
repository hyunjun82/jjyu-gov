import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          자활사업 참여로 발생한 소득은 일정 부분 <strong>소득공제</strong>가 적용되어
          수급 자격이 바로 탈락되지 않도록 보호됩니다.
          단, 소득인정액이 선정 기준을 넘으면 수급에서 제외될 수 있으므로
          담당자와 사전에 확인하는 것이 중요합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        자활사업의 목적 자체가 수급자의 자립이므로 초기에는 소득 일부를 공제하여
        수급 유지를 돕습니다. 소득이 지속적으로 늘면 단계적으로 급여가 조정됩니다.
      </p>

      <section className="detail-card" id="deduct">
        <h2 className="detail-card-head">자활 소득 공제 구조</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>근로·자활 소득 공제:</strong> 자활사업 소득의 30%를 공제 후 나머지를 소득인정액에 반영
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>자활급여특례:</strong> 자활사업 참여 후 소득이 선정 기준 초과 시 일정 기간 의료급여 특례 유지 가능
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>탈락 기준:</strong> 소득인정액이 급여 선정 기준을 초과하면 해당 급여 수급 중단
          </div>
          <div className="info-box">
            <strong>재신청:</strong> 소득 감소로 다시 기준 이하가 되면 재신청 가능
          </div>
        </div>
      </section>

      <section className="detail-card" id="special">
        <h2 className="detail-card-head">자활급여특례·이행급여특례</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>자활급여특례:</strong> 자활사업 참여 소득이 기준 초과 시 1년간 의료급여 유지
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>이행급여특례:</strong> 탈수급 후 취업 성공 시 일정 기간 의료급여 등 유지
          </div>
          <div className="info-box">
            <strong>희망저축계좌 연계:</strong> 적립 중에는 해당 저축액 소득인정 제외
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="tip">
        <h2 className="detail-card-head">수급 유지를 위한 체크리스트</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>매월 소득 신고:</strong> 자활근로 소득을 주민센터에 신고 (누락 시 과오지급 발생 가능)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>추가 소득 발생 시:</strong> 즉시 담당자에게 신고하여 수급 조정
          </div>
          <div className="info-box">
            <strong>탈락 예고 시:</strong> 이의신청 또는 자활급여특례 연계 요청
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            참여자격, 급여 단가, 사업 종류까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/self-sufficiency-program" className="btn-cta">
            자활사업 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 자활사업참여하면기초생활수급탈락소득인정유지SpokeContent: SpokeData = {
  h1: '자활사업 참여하면 기초생활수급 탈락되나, 소득 인정과 수급 유지',
  breadcrumb: '참여하면기초생활수급탈락소득인정유지',
  description:
    '자활사업 소득 30% 공제 후 소득인정액 반영. 기준 초과 시 해당 급여 중단. 자활급여특례로 1년간 의료급여 유지 가능. 매월 소득 신고 필수.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '자활근로 소득이 생기면 생계급여가 바로 줄어드나요?',
      a: '소득의 30%를 공제 후 나머지가 소득인정액에 반영됩니다. 생계급여는 소득인정액만큼 감액되어 지급됩니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '소득이 늘어 수급에서 탈락하면 의료급여도 끊기나요?',
      a: '자활사업 참여로 인한 탈락의 경우 자활급여특례로 1년간 의료급여를 유지받을 수 있습니다. 담당자에게 특례 신청을 요청하세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '다시 수입이 줄면 수급을 재신청할 수 있나요?',
      a: '소득인정액이 다시 선정 기준 이하로 떨어지면 재신청이 가능합니다. 주민센터에서 변경된 소득 자료를 제출하고 재신청하세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '자활사업 외 아르바이트를 하면 신고해야 하나요?',
      a: '네. 자활사업 참여 중 추가로 발생하는 모든 소득은 담당 공무원에게 신고해야 합니다. 미신고 시 나중에 과오지급 환수가 발생할 수 있습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '가족 중 한 명만 자활사업에 참여해도 가구 전체 수급에 영향이 있나요?',
      a: '자활사업 참여자의 소득은 해당 가구의 소득인정액에 반영되므로 가구 전체 수급에 영향을 줍니다. 가구원 상황을 담당자와 미리 상담하세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
  ],
  sources: [
    { name: '보건복지부 자활사업', url: 'https://www.mohw.go.kr' },
    { name: '찾기쉬운 생활법령정보 기초생활보장', url: 'https://easylaw.go.kr' },
  ],
};
