import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      {/* 빠른 답변 */}
      <div className="answer-box">
        <p>
          자영업자 고용보험에 <strong>1년(12개월) 이상 납부</strong>하고
          <strong>비자발적 폐업</strong>(경영악화, 매출감소 등)을 했다면 실업급여를 받을 수 있습니다.
          수급액은 <strong>기준보수의 60%</strong>이며, 가입 기간에 따라 <strong>120~210일</strong> 지급됩니다.
        </p>
      </div>

      {/* 서론 */}
      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        자영업자도 폐업 후 실업급여를 받을 수 있다는 것을 모르는 분들이 많습니다.
        단, 1년 이상 보험료를 납부한 뒤 비자발적 폐업이어야 하는 조건이 있으므로,
        지금 당장 가입해두면 나중에 큰 도움이 됩니다.
      </p>

      {/* H2-1: 수급 요건 */}
      <section className="detail-card" id="requirements">
        <h2 className="detail-card-head">폐업 후 실업급여 수급 3가지 요건</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr>
                <th>요건</th>
                <th>내용</th>
                <th>비고</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>① 가입 기간</td>
                <td><strong>폐업일 전 24개월 중 1년(12개월) 이상 납부</strong></td>
                <td>연속 납부 아니어도 됨</td>
              </tr>
              <tr>
                <td>② 비자발적 폐업</td>
                <td>경영악화, 매출감소, 자연재해 등</td>
                <td>본인 의지로 폐업 시 불가</td>
              </tr>
              <tr>
                <td>③ 적자 요건</td>
                <td>폐업일 전 3개월 이상 적자(손실) 발생</td>
                <td>세무 장부 증빙 필요</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box">
            <strong>비자발적 폐업 인정 사유:</strong> 매출이 전년 동기 대비 20% 이상 감소,
            부도·파산, 폐업 신고 후 재취업 활동 중인 경우 등이 인정됩니다.
            단순 사업 전환이나 개인 사정에 의한 폐업은 인정되지 않습니다.
          </div>
        </div>
      </section>

      {/* H2-2: 실업급여 금액 및 수급 기간 */}
      <section className="detail-card" id="benefit-amount">
        <h2 className="detail-card-head">실업급여 금액 및 수급 기간</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr>
                <th>가입 기간</th>
                <th>수급 기간</th>
                <th>월 수급액 범위(등급별)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1년 이상 ~ 3년 미만</td>
                <td>120일</td>
                <td>월 약 109만원(1등급) ~ 202만원(7등급)</td>
              </tr>
              <tr>
                <td>3년 이상 ~ 5년 미만</td>
                <td>150일</td>
                <td>월 약 109만원(1등급) ~ 202만원(7등급)</td>
              </tr>
              <tr>
                <td>5년 이상 ~ 10년 미만</td>
                <td>180일</td>
                <td>월 약 109만원(1등급) ~ 202만원(7등급)</td>
              </tr>
              <tr>
                <td>10년 이상</td>
                <td>210일</td>
                <td>월 약 109만원(1등급) ~ 202만원(7등급)</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box">
            <strong>계산 기준:</strong> 월 수급액 = 선택 등급 기준보수 × 60%.
            1등급(기준보수 182만원) → 월 약 109만원, 7등급(338만원) → 월 약 202만원.
            최대 총 수급액은 약 1,400만원(7등급 × 210일 기준).
            수급 기간은 폐업일 이후 12개월 내에 소진해야 합니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      {/* H2-3: 신청 절차 */}
      <section className="detail-card" id="apply-process">
        <h2 className="detail-card-head">폐업 후 실업급여 신청 절차</h2>
        <div className="detail-card-body">
          <ol style={{ listStyle: 'decimal', paddingLeft: 20, lineHeight: 2.2 }}>
            <li>
              <strong>폐업 신고:</strong> 세무서에 폐업 신고(사업자등록 말소)
            </li>
            <li>
              <strong>고용센터 방문 또는 온라인:</strong> 고용보험 홈페이지(ei.go.kr) 또는 가까운 고용센터 방문
            </li>
            <li>
              <strong>수급자격 인정 신청:</strong> 폐업 관련 증빙 서류 제출(매출 감소 내역 등)
            </li>
            <li>
              <strong>인정 심사:</strong> 고용센터에서 비자발적 폐업 여부 확인(1~2주 소요)
            </li>
            <li>
              <strong>실업 인정 후 수급 시작:</strong> 구직 활동 신고(4주에 1회)
            </li>
          </ol>
          <div className="info-box">
            <strong>신청 기한:</strong> 폐업 후 12개월 이내에 수급자격 신청을 해야 합니다.
            기한을 초과하면 수급 자격이 소멸합니다.
          </div>
        </div>
      </section>

      {/* H2-4: 주의사항 */}
      <section className="detail-card" id="caution">
        <h2 className="detail-card-head">실업급여 수급 중 주의사항</h2>
        <div className="detail-card-body">
          <div className="info-box">
            <strong>재취업 또는 재창업 시:</strong> 실업급여 수급 중 취업하거나
            새 사업을 시작하면 즉시 고용센터에 신고해야 합니다. 신고 없이 수령하면
            부정수급으로 전액 환수 및 제재를 받습니다.
          </div>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>구직활동 의무:</strong> 실업 인정을 받으려면 4주마다 1회 이상
            구직활동(구직 신청, 취업 면접 등)을 하고 고용센터에 신고해야 합니다.
            미신고 시 해당 기간 실업급여가 지급되지 않습니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      {/* CTA */}
      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            자영업자 고용보험 가입 방법, 등급별 보험료, 정부 지원 기준 전체를 확인하세요.
          </p>
          <a href="/policy/self-employed-employment-insurance" className="btn-cta">자영업자고용보험 전체 정보 보기 →</a>
        </div>
      </section>
    </>
  );
}

export const 자영업자고용보험폐업후실업급여1년가입조건SpokeContent: SpokeData = {
  h1: '자영업자고용보험 폐업 후 실업급여 수급, 1년 가입 조건',
  breadcrumb: '폐업후실업급여1년가입조건',
  description:
    '자영업자 고용보험 1년 이상 납부 후 비자발적 폐업 시 실업급여를 받을 수 있습니다. 수급액은 기준보수의 60%, 120~210일 지급. 수급 요건 3가지와 신청 절차를 정리했습니다.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '자발적으로 폐업해도 실업급여를 받을 수 있나요?',
      a: '불가합니다. 자영업자 고용보험 실업급여는 비자발적 폐업(경영악화, 매출감소 등) 시에만 지급됩니다. 개인 사정이나 사업 전환 목적의 폐업은 인정되지 않습니다.',
      source: '근로복지공단 자영업자 고용보험 안내',
      sourceUrl: 'https://www.kcomwel.or.kr',
    },
    {
      q: '가입 1년이 지났는데 폐업 전 3개월 적자 기준은 어떻게 증명하나요?',
      a: '세무 신고 자료, 부가세 신고서, 손익계산서 등으로 3개월 이상 적자 또는 매출 감소를 증빙합니다. 세무사를 통해 관련 서류를 발급받아 고용센터에 제출합니다.',
      source: '근로복지공단 자영업자 고용보험 안내',
      sourceUrl: 'https://www.kcomwel.or.kr',
    },
    {
      q: '실업급여 신청은 폐업 후 언제까지 해야 하나요?',
      a: '폐업 후 12개월 이내에 수급자격 인정 신청을 해야 합니다. 12개월을 초과하면 수급 자격이 소멸하므로 폐업 신고 후 바로 신청하는 것을 권장합니다.',
      source: '근로복지공단 자영업자 고용보험 안내',
      sourceUrl: 'https://www.kcomwel.or.kr',
    },
    {
      q: '수급 기간 중 재창업하면 어떻게 되나요?',
      a: '재창업 즉시 고용센터에 신고해야 합니다. 신고 없이 실업급여를 수령하면 부정수급으로 간주되어 전액 환수 및 최대 5배 추가 징수의 제재를 받습니다.',
      source: '근로복지공단 자영업자 고용보험 안내',
      sourceUrl: 'https://www.kcomwel.or.kr',
    },
    {
      q: '실업급여를 받으면서 구직활동을 해야 하나요?',
      a: '네, 4주마다 1회 이상 구직활동(구직 신청, 취업 면접 등)을 하고 고용센터에 신고해야 실업 인정이 됩니다. 미신고 시 해당 기간 실업급여가 지급되지 않습니다.',
      source: '고용노동부 실업급여 안내',
      sourceUrl: 'https://www.moel.go.kr',
    },
  ],
  sources: [
    { name: '근로복지공단 자영업자 고용보험 안내', url: 'https://www.kcomwel.or.kr' },
    { name: '고용보험 홈페이지', url: 'https://www.ei.go.kr' },
  ],
};
