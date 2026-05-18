import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          국민취업지원제도 1유형(저소득층)은 <strong>구직촉진수당 월 60만원을 6개월간</strong> 지급합니다.
          부양가족(18세 이하·70세 이상·중증장애인)이 있으면 1인당 월 10만원씩
          최대 40만원을 추가로 받을 수 있습니다.
          취업 후 6개월·12개월 이상 유지하면 <strong>최대 150만원 취업성공수당</strong>도 받습니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        구직촉진수당은 1유형(저소득) 참여자에게만 지급됩니다.
        2유형은 수당 없이 취업 지원 서비스만 제공됩니다.
        수당을 받으려면 고용센터에서 취업활동계획을 성실히 이행해야 합니다.
      </p>

      <section className="detail-card" id="allowance">
        <h2 className="detail-card-head">구직촉진수당 상세</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>내용</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>기본 수당</strong></td><td>월 60만원 × 6개월 = 최대 360만원</td></tr>
              <tr><td><strong>부양가족 추가</strong></td><td>1인당 월 10만원, 최대 월 40만원 (4인 이상)</td></tr>
              <tr><td><strong>지급 방식</strong></td><td>취업활동 이행 확인 후 매월 지급</td></tr>
              <tr><td><strong>지급 중단 조건</strong></td><td>취업활동 불이행, 취업·창업 등</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="success">
        <h2 className="detail-card-head">취업성공수당 (구직촉진수당과 별도)</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>취업 후 6개월 이상 유지:</strong> 50만원 지급
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>취업 후 12개월 이상 유지:</strong> 100만원 추가 지급
          </div>
          <div className="info-box">
            <strong>합계:</strong> 최대 150만원 (6개월 50만 + 12개월 100만)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="condition">
        <h2 className="detail-card-head">수당 수령 조건 (1유형)</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>소득 기준:</strong> 가구 소득·본인 소득 각각 중위소득 60% 이하 (청년 120% 이하)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>재산 기준:</strong> 4억원 이하 (청년 5억원 이하)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>연령:</strong> 만 15~69세
          </div>
          <div className="info-box">
            <strong>의무:</strong> 취업활동계획 성실 이행 — 미이행 시 수당 지급 중단
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            1유형·2유형 차이, 신청 방법, 실업급여와 비교까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/national-employment-support" className="btn-cta">
            국민취업지원제도 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 국민취업지원제도구직촉진수당월60만6개월조건SpokeContent: SpokeData = {
  h1: '국민취업지원제도 구직촉진수당 월 60만원, 6개월 수령 조건과 취업성공수당까지',
  breadcrumb: '구직촉진수당월60만6개월조건',
  description:
    '국민취업지원 1유형: 구직촉진수당 월 60만원×6개월(최대 360만). 부양가족 1인당 10만원 추가(최대 40만). 취업성공수당 최대 150만원(6개월 50만+12개월 100만). 소득 중위 60% 이하.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '수당을 받으면서 알바를 하면 수당이 줄어드나요?',
      a: '구직촉진수당 지급 중 소득이 발생하면 수당이 감액되거나 중단될 수 있습니다. 소득 발생 시 고용센터에 반드시 신고해야 합니다. 미신고 시 부정 수급으로 환수 처리됩니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.work24.go.kr',
    },
    {
      q: '부양가족이 3명이면 수당이 얼마인가요?',
      a: '기본 60만원 + 부양가족 3인×10만원 = 월 90만원입니다. 부양가족은 18세 이하 미성년자, 70세 이상 고령자, 중증 장애인이 해당됩니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.work24.go.kr',
    },
    {
      q: '취업성공수당은 어떤 직장이든 받을 수 있나요?',
      a: '고용보험에 가입된 직장에 취업하여 6개월·12개월 이상 계속 근무한 경우 지급됩니다. 일용직이나 단기 계약직은 조건을 충족하기 어려울 수 있으니 고용센터에서 확인하세요.',
      source: '고용노동부',
      sourceUrl: 'https://www.work24.go.kr',
    },
    {
      q: '6개월을 다 채워야 수당을 전부 받나요?',
      a: '네. 구직촉진수당은 매월 취업활동 이행을 확인하고 지급되므로, 6개월 동안 성실히 참여해야 전액을 받을 수 있습니다. 중도 취업·이행 불량 시 남은 수당은 지급되지 않습니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.work24.go.kr',
    },
    {
      q: '취업활동계획은 무엇인가요?',
      a: '고용센터 담당자와 1:1로 수립하는 개인별 취업 준비 계획입니다. 직업훈련·취업상담·일경험·자기소개서 작성 등이 포함되며, 이를 성실히 이행해야 수당이 지급됩니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.work24.go.kr',
    },
  ],
  sources: [
    { name: '고용노동부 국민취업지원제도', url: 'https://www.work24.go.kr' },
    { name: '고용24', url: 'https://www.work24.go.kr' },
  ],
};
