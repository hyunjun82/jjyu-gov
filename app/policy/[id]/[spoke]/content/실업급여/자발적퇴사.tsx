import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          원칙적으로 자발적 퇴사는 실업급여를 받을 수 없습니다. 단,
          <strong> 고용보험법에서 정한 정당한 사유</strong>에 해당하면 자진퇴사도
          실업급여(구직급여)를 받을 수 있습니다. 권고사직은 비자발적 이직으로
          분류되어 원칙적으로 수급이 가능합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "내가 먼저 사표 썼으면 실업급여 못 받는 거 아닌가요?" 많은 분들이 잘못 알고 있는 부분입니다.
        자진퇴사라도 아래 사유 중 하나에 해당하면 실업급여를 받을 수 있습니다.
        상황별로 구체적으로 정리했습니다.
      </p>

      <section className="detail-card" id="principle">
        <h2 className="detail-card-head">원칙: 자발적 퇴사는 수급 불가, 단 예외 있음</h2>
        <div className="detail-card-body">
          <p>
            고용보험법 제58조 제2호는 "자기 사정으로 이직한 경우" 실업급여 수급자격을
            원칙적으로 인정하지 않습니다. 하지만 같은 법 시행규칙 [별표2]에
            <strong>정당한 퇴직사유</strong> 목록이 규정되어 있어, 이에 해당하면 예외적으로 인정됩니다.
          </p>
          <table className="compare-table">
            <thead>
              <tr><th>퇴사 유형</th><th>실업급여 수급</th><th>비고</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>해고·계약만료</td>
                <td><strong>✅ 가능</strong></td>
                <td>비자발적 이직</td>
              </tr>
              <tr>
                <td>권고사직</td>
                <td><strong>✅ 가능</strong></td>
                <td>비자발적으로 분류됨</td>
              </tr>
              <tr>
                <td>자진퇴사 (정당한 사유)</td>
                <td><strong>✅ 가능</strong></td>
                <td>아래 8가지 해당 시</td>
              </tr>
              <tr>
                <td>자진퇴사 (단순 불만)</td>
                <td><strong>❌ 불가</strong></td>
                <td>직장생활 불만족 등</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="valid-reasons">
        <h2 className="detail-card-head">자진퇴사도 실업급여 받을 수 있는 8가지 사유</h2>
        <div className="detail-card-body">
          <p>
            고용보험법 시행규칙 [별표2]에 따른 정당한 퇴직사유입니다.
            해당 사유를 <strong>증명할 서류</strong>가 필요하니 퇴사 전 미리 준비하세요.
          </p>
          <div className="info-box" style={{ marginBottom: 10 }}>
            <strong>① 임금 체불</strong><br />
            퇴사 전 1년간 임금 체불 기간의 합계가 2개월 이상이거나, 임금이 2개월 이상 지연 지급된 경우
          </div>
          <div className="info-box" style={{ marginBottom: 10 }}>
            <strong>② 최저임금 미만 지급</strong><br />
            법정 최저임금(2026년 시간당 10,030원)보다 낮은 임금을 받은 경우
          </div>
          <div className="info-box" style={{ marginBottom: 10 }}>
            <strong>③ 직장 내 괴롭힘·성희롱·차별</strong><br />
            괴롭힘·성희롱·부당한 차별·인격 침해로 근무가 불가능한 경우
          </div>
          <div className="info-box" style={{ marginBottom: 10 }}>
            <strong>④ 통근 곤란</strong><br />
            결혼·배우자 이직 등으로 주거지가 변경되어 편도 통근 시간이 3시간 이상 걸리는 경우
          </div>
          <div className="info-box" style={{ marginBottom: 10 }}>
            <strong>⑤ 건강 악화</strong><br />
            본인의 질병·부상으로 담당 업무를 계속 수행하기 어렵고, 사업주가 업무 전환을 거부한 경우
          </div>
          <div className="info-box" style={{ marginBottom: 10 }}>
            <strong>⑥ 가족 간병 필요</strong><br />
            부모·배우자·자녀 등 가족의 질병·부상으로 30일 이상 본인이 직접 간호해야 하는 경우
          </div>
          <div className="info-box" style={{ marginBottom: 10 }}>
            <strong>⑦ 배우자 사업장 이전 동반 이주</strong><br />
            배우자의 근무지 이전·전직 등으로 함께 이주해야 하는 경우
          </div>
          <div className="info-box">
            <strong>⑧ 사업장 축소·도산·임박</strong><br />
            사업 일부 폐지, 업종 전환, 도산 예고 등으로 고용 지속이 어렵다고 판단되는 경우
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="gonggo">
        <h2 className="detail-card-head">권고사직은 자진퇴사와 다릅니다</h2>
        <div className="detail-card-body">
          <p>
            권고사직은 회사가 먼저 퇴사를 권유한 것이므로 비자발적 이직으로 분류됩니다.
            설령 본인이 사직서를 쓴다 하더라도, 실질적으로 회사의 요구에 의한 것이라면
            실업급여 수급자격이 인정됩니다.
          </p>
          <div className="warning-box">
            <strong>주의:</strong> 회사가 "자진퇴사로 처리하자"고 압박하는 경우,
            이직확인서의 이직 사유 코드가 중요합니다. 코드 26(권고사직) 또는
            23(경영상 필요에 의한 권고사직)이어야 수급 자격이 인정됩니다.
            이직확인서 발급을 거부하는 회사는 고용노동부에 신고할 수 있습니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="requirements">
        <h2 className="detail-card-head">자진퇴사 실업급여 신청, 공통 요건</h2>
        <div className="detail-card-body">
          <p>정당한 사유가 인정되더라도 아래 공통 요건을 함께 충족해야 합니다.</p>
          <table className="compare-table">
            <thead>
              <tr><th>요건</th><th>기준</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>고용보험 가입 기간</td>
                <td>퇴사 전 18개월 이내에 피보험 단위기간 <strong>180일 이상</strong></td>
              </tr>
              <tr>
                <td>재취업 의사</td>
                <td>적극적으로 구직 활동을 할 의사와 능력이 있어야 함</td>
              </tr>
              <tr>
                <td>이직 사유 신고</td>
                <td>정당한 자진퇴사 사유를 고용센터에 서류로 입증해야 함</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="docs">
        <h2 className="detail-card-head">사유별 필요 서류</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>퇴사 사유</th><th>필요 서류 예시</th></tr>
            </thead>
            <tbody>
              <tr><td>임금 체불</td><td>체불 임금 확인서, 급여명세서, 진정서 접수 확인</td></tr>
              <tr><td>건강 악화</td><td>진단서·소견서 (담당 의사 발급)</td></tr>
              <tr><td>직장 내 괴롭힘</td><td>신고 접수 확인서, 관련 증거 자료</td></tr>
              <tr><td>통근 곤란</td><td>주민등록등본 (주소 변경 확인), 지도 거리 증빙</td></tr>
              <tr><td>가족 간병</td><td>가족 진단서, 간병 필요 소견서</td></tr>
            </tbody>
          </table>
          <p style={{ marginTop: 10, fontSize: 14, color: '#666' }}>
            ※ 구비 서류는 퇴사 사유에 따라 다를 수 있습니다. 가까운 고용센터 또는 ☎1350에서 사전 확인하세요.
          </p>
        </div>
      </section>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            수급 금액(1일 66,048~68,100원), 수급 기간, 신청 방법 등<br />
            실업급여 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/job-seeker-benefit" className="btn-cta">
            2026 실업급여 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 자발적퇴사SpokeContent: SpokeData = {
  h1: '자발적 퇴사도 실업급여 받을 수 있나요 권고사직 기준',
  breadcrumb: '자발적퇴사',
  description:
    '자발적 퇴사는 원칙적으로 실업급여를 받을 수 없지만, 고용보험법 시행규칙 별표2의 정당한 사유(임금 체불, 건강 악화, 직장 내 괴롭힘 등 8가지)에 해당하면 수급 가능합니다. 권고사직은 비자발적 이직으로 분류됩니다.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '자진퇴사하면 실업급여를 받을 수 없나요?',
      a: '원칙적으로 불가하지만, 임금 체불·직장 내 괴롭힘·건강 악화·통근 곤란 등 고용보험법이 정한 정당한 사유 8가지에 해당하면 자진퇴사도 실업급여를 받을 수 있습니다.',
      source: '고용보험법 제58조 및 시행규칙 별표2',
      sourceUrl: 'https://www.nodong.kr/silup',
    },
    {
      q: '권고사직도 실업급여를 받을 수 있나요?',
      a: '네. 권고사직은 비자발적 이직으로 분류되므로 피보험 단위기간 180일 이상 등 기본 요건만 충족하면 실업급여를 받을 수 있습니다.',
      source: '캡틴법률사무소 권고사직 실업급여 안내 (2026.04.07)',
      sourceUrl: 'https://www.captainlawfirm.com/corporate_news/view/120',
    },
    {
      q: '회사가 자진퇴사로 처리하라고 하면 어떻게 하나요?',
      a: '이직확인서의 이직 사유 코드가 핵심입니다. 권고사직은 코드 26 또는 23이어야 합니다. 회사가 이직확인서 발급을 거부하면 고용노동부(☎1350)에 신고할 수 있습니다.',
      source: '고용보험 이직확인서 관련 안내',
      sourceUrl: 'https://clobe.ai/경리-가이드/이직확인서',
    },
    {
      q: '건강 악화로 자진퇴사했는데 실업급여를 받을 수 있나요?',
      a: '본인의 질병·부상으로 현재 담당 업무를 계속 수행하기 어렵고, 사업주가 업무 전환을 거부한 경우 정당한 사유로 인정됩니다. 의사의 진단서·소견서가 필요합니다.',
      source: '고용보험법 시행규칙 별표2',
      sourceUrl: 'https://www.nodong.kr/silup',
    },
    {
      q: '자진퇴사 실업급여 신청 시 어떤 서류가 필요한가요?',
      a: '퇴사 사유에 맞는 증빙 서류가 필요합니다. 임금 체불은 체불 확인서, 건강 악화는 진단서, 통근 곤란은 주민등록등본 등입니다. 가까운 고용센터 또는 ☎1350에서 사전 확인하세요.',
      source: '고용노동부 고객상담센터 ☎1350',
      sourceUrl: 'https://1350.moel.go.kr',
    },
  ],
  sources: [
    { name: '고용보험법 제58조 및 시행규칙 별표2 (노동OK)', url: 'https://www.nodong.kr/silup' },
    { name: '고용노동부 고객상담센터 자진퇴사 실업급여 안내', url: 'https://1350.moel.go.kr/rtmview' },
    { name: '캡틴법률사무소 권고사직 실업급여 5가지 상황 (2026.04.07)', url: 'https://www.captainlawfirm.com/corporate_news/view/120' },
  ],
};
