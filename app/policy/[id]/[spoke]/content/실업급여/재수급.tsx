import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          실업급여 재수급은 가능합니다. 단, <strong>2026년부터 5년 내 3회 이상 수급하면 급여가 삭감</strong>됩니다.
          3회 차는 10% 감액, 6회 이상은 최대 50% 감액이며 대기기간도 최대 4주로 늘어납니다.
          재취업 후 다시 조건을 충족하면 기본 수급 자격은 유지됩니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "한 번 실업급여를 받으면 다시는 못 받나요?" 아닙니다.
        재취업 후 다시 비자발적으로 퇴직하고 고용보험 가입기간 180일을 채우면 다시 신청할 수 있습니다.
        단, 2026년부터 반복 수급 횟수에 따라 급여가 줄어드는 페널티가 생겼습니다.
      </p>

      <section className="detail-card" id="basic">
        <h2 className="detail-card-head">재수급 기본 조건</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>조건</th><th>기준</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>재취업 후 재이직</td>
                <td>재취업 후 다시 비자발적으로 이직해야 함</td>
              </tr>
              <tr>
                <td>고용보험 가입기간</td>
                <td>이직 전 18개월 내 피보험단위기간 180일 이상</td>
              </tr>
              <tr>
                <td>이직 사유</td>
                <td>비자발적 이직 (권고사직·계약만료·폐업·정리해고 등)</td>
              </tr>
              <tr>
                <td>구직 의사</td>
                <td>재취업 의사 있고 적극적 구직활동 중</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>적용 시점:</strong> 2026년 1월 1일 이후 이직(퇴사)한 분부터 2026년 개정 기준 적용.
            2025년에 퇴사하고 수급 중인 분은 구 기준이 그대로 적용됩니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="penalty">
        <h2 className="detail-card-head">2026년 반복수급 페널티 (5년 내 횟수별)</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>5년 내 수급 횟수</th><th>구직급여 감액률</th><th>대기기간</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>1~2회</td>
                <td>감액 없음 (일반 수급)</td>
                <td>7일 (기본)</td>
              </tr>
              <tr>
                <td>3회</td>
                <td>10% 감액</td>
                <td>2주</td>
              </tr>
              <tr>
                <td>4회</td>
                <td>25% 감액</td>
                <td>4주</td>
              </tr>
              <tr>
                <td>5회</td>
                <td>40% 감액</td>
                <td>4주</td>
              </tr>
              <tr>
                <td>6회 이상</td>
                <td>50% 감액</td>
                <td>4주</td>
              </tr>
            </tbody>
          </table>
          <div className="warning-box" style={{ marginTop: 12 }}>
            <strong>주의:</strong> 감액 후 금액이 하한액보다 낮아질 수 있습니다.
            5년 내 수급 횟수는 고용24(work24.go.kr)에서 확인 가능합니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="exception">
        <h2 className="detail-card-head">반복수급 감액 면제 대상 (예외)</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>예외 대상</th><th>내용</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>저임금 근로자</td>
                <td>이직 전 임금이 고용노동부 고시 하한선 미만인 경우</td>
              </tr>
              <tr>
                <td>적극적 재취업 노력자</td>
                <td>고용센터 심층 상담·장기 직업훈련 이수자</td>
              </tr>
              <tr>
                <td>경영상 해고</td>
                <td>정리해고 등 본인 의사와 무관한 대규모 감원</td>
              </tr>
              <tr>
                <td>불가항력적 사업 중단</td>
                <td>재해·천재지변 등으로 사업장 폐쇄</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="early">
        <h2 className="detail-card-head">조기재취업수당 — 빨리 취업할수록 이득</h2>
        <div className="detail-card-body">
          <p style={{ lineHeight: 1.8 }}>
            실업급여 수급 기간의 <strong>절반 이상이 남은 상태</strong>에서 재취업하여
            12개월 이상 계속 근무하면, 남은 급여의 <strong>50%를 일시에 지급</strong>받는
            조기재취업수당을 받을 수 있습니다.
          </p>
          <div className="info-box" style={{ marginTop: 12 }}>
            반복수급 패널티를 받을 상황이라면 빠른 재취업으로 조기재취업수당을 받는 것이
            장기적으로 더 유리할 수 있습니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            자발적 퇴사 조건, 지급일, 수급 기간 등<br />
            실업급여 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/job-seeker-benefit" className="btn-cta">
            실업급여 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 재수급SpokeContent: SpokeData = {
  h1: '실업급여 몇 번까지 받을 수 있나 | 5년 내 3회부터 10~50% 감액',
  breadcrumb: '재수급',
  description: '실업급여는 여러 번 받을 수 있습니다. 단, 2026년부터 5년 내 3회 이상 수급 시 감액됩니다. 3회 10%, 4회 25%, 5회 40%, 6회 이상 50% 감액. 재수급 조건은 고용보험 피보험단위기간 180일 재충족 필요.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '실업급여를 한 번 받은 후 다시 받을 수 있나요?',
      a: '가능합니다. 재취업 후 비자발적으로 이직하고 고용보험 180일 조건을 충족하면 다시 신청할 수 있습니다. 5년 내 3회 이상이면 감액 패널티가 적용됩니다.',
      source: '고용보험 실업급여 안내',
      sourceUrl: 'https://www.ei.go.kr',
    },
    {
      q: '5년 내 3번째 실업급여는 얼마나 줄어드나요?',
      a: '3회 차는 구직급여의 10%가 감액되고 대기기간이 2주로 늘어납니다. 4회는 25%, 5회는 40%, 6회 이상은 50% 감액입니다.',
      source: '고용노동부 2026년 실업급여 개편안',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '정리해고 된 경우에도 반복수급 감액이 되나요?',
      a: '아니요. 경영상 해고(정리해고)는 반복수급 감액 예외 대상입니다. 본인 의사와 무관한 대규모 감원이면 감액 없이 전액 수급 가능합니다.',
      source: '고용보험 실업급여 반복수급 예외 안내',
      sourceUrl: 'https://www.ei.go.kr',
    },
    {
      q: '조기재취업수당은 무엇인가요?',
      a: '수급 기간의 절반 이상이 남은 상태에서 재취업해 12개월 이상 근무하면 남은 급여의 50%를 일시에 받는 제도입니다. 빠른 재취업을 장려합니다.',
      source: '고용보험 조기재취업수당 안내',
      sourceUrl: 'https://www.ei.go.kr',
    },
    {
      q: '나의 실업급여 수급 횟수는 어떻게 확인하나요?',
      a: '고용24(work24.go.kr)에 로그인하면 실업급여 수급 이력을 조회할 수 있습니다. 퇴사 결정 전 미리 확인해보는 것을 권장합니다.',
      source: '고용24 포털',
      sourceUrl: 'https://www.work24.go.kr',
    },
  ],
  sources: [
    { name: '고용보험 실업급여 안내 (ei.go.kr)', url: 'https://www.ei.go.kr' },
    { name: '고용24 통합포털 수급이력 조회', url: 'https://www.work24.go.kr' },
    { name: '고용노동부 2026년 실업급여 개편안', url: 'https://www.moel.go.kr' },
  ],
};
