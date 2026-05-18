import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      {/* 빠른 답변 */}
      <div className="answer-box">
        <p>
          2026년 근로자휴가지원사업은 중소·중견기업 재직자를 대상으로{' '}
          <strong>총 10만명</strong>을 선착순으로 모집합니다.
          상반기(3~4월)와 하반기(7~8월 예정) 두 차례 나눠 모집하며,
          선착순 마감이므로 신청 기간 시작 즉시 접수하는 것이 유리합니다.
        </p>
      </div>

      {/* 서론 */}
      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        매년 빠르게 마감되는 제도인 만큼 일정과 신청 방법을 미리 파악해두는 것이 중요합니다.
        아래에서 2026년 모집 일정, 기업·근로자 각각의 신청 절차를 확인하세요.
      </p>

      {/* H2-1: 모집 일정 */}
      <section className="detail-card" id="schedule">
        <h2 className="detail-card-head">2026년 모집 일정·규모</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr>
                <th>모집 차수</th>
                <th>신청 기간(예정)</th>
                <th>모집 규모</th>
                <th>비고</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>상반기 1차</td>
                <td>3~4월</td>
                <td>선착순</td>
                <td>기업 먼저 신청 필요</td>
              </tr>
              <tr>
                <td>하반기 2차</td>
                <td>7~8월(예정)</td>
                <td>선착순</td>
                <td>1차 미신청자 대상</td>
              </tr>
              <tr>
                <td>연간 합계</td>
                <td>—</td>
                <td><strong>총 10만명</strong></td>
                <td>중소·중견기업 재직자</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>선착순 마감 주의:</strong> 모집 정원이 다 차면 즉시 마감됩니다.
            한국관광공사 홈페이지(visitkorea.or.kr) 또는 휴가샵(vacationshop.or.kr)에서
            신청 시작일을 미리 확인하세요.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      {/* H2-2: 신청 절차 */}
      <section className="detail-card" id="process">
        <h2 className="detail-card-head">기업·근로자 신청 절차</h2>
        <div className="detail-card-body">
          <div className="info-box">
            <strong>기업 신청 (선행 필수)</strong>
            <ol style={{ listStyle: 'decimal', paddingLeft: 20, lineHeight: 2.2, marginTop: 8 }}>
              <li>휴가샵(vacationshop.or.kr) 기업 회원가입</li>
              <li>사업 참여 신청서 작성 및 제출</li>
              <li>기업 분담금 10만원 × 참여 인원 납부</li>
              <li>승인 완료 후 근로자에게 신청 링크 공유</li>
            </ol>
          </div>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>근로자 신청 (기업 승인 후)</strong>
            <ol style={{ listStyle: 'decimal', paddingLeft: 20, lineHeight: 2.2, marginTop: 8 }}>
              <li>휴가샵 개인 회원가입</li>
              <li>소속 기업 선택 후 참여 신청</li>
              <li>본인 분담금 20만원 납입</li>
              <li>적립금 40만원 자동 부여 확인</li>
            </ol>
          </div>
          <table className="compare-table" style={{ marginTop: 16 }}>
            <thead>
              <tr>
                <th>구분</th>
                <th>대기업</th>
                <th>중견기업</th>
                <th>중소기업</th>
                <th>공공기관</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>참여 가능</td>
                <td>❌</td>
                <td>✅</td>
                <td>✅</td>
                <td>❌</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      {/* CTA */}
      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            신청 자격, 40만원 구성, 휴가샵 사용법까지 전체 내용을 한 페이지에서 확인하세요.
          </p>
          <a href="/policy/worker-vacation-support" className="btn-cta">
            근로자휴가지원 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 근로자휴가지원2026선착순10만명신청기간SpokeContent: SpokeData = {
  h1: '2026 근로자휴가지원 10만명 선착순 신청 기간·일정',
  breadcrumb: '2026선착순10만명신청기간',
  description:
    '2026년 근로자휴가지원사업 10만명 선착순 모집 일정(상반기 3~4월, 하반기 7~8월)과 기업·근로자 신청 절차를 정리합니다. 중소·중견기업 재직자 대상.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '2026년 근로자휴가지원 상반기 신청은 언제 시작되나요?',
      a: '2026년 상반기 모집은 3~4월 중 진행됩니다. 정확한 시작일은 한국관광공사 또는 휴가샵 홈페이지에서 확인하세요. 선착순 마감이므로 공지 즉시 신청하는 것이 좋습니다.',
      source: '한국관광공사 근로자휴가지원사업 안내',
      sourceUrl: 'https://www.visitkorea.or.kr',
    },
    {
      q: '상반기를 놓치면 하반기에 신청할 수 있나요?',
      a: '네. 하반기 모집(7~8월 예정)이 별도로 진행됩니다. 단, 하반기도 선착순으로 마감되며 12월 31일까지만 적립금을 사용할 수 있어 사용 기간이 짧아집니다.',
      source: '한국관광공사 근로자휴가지원사업 안내',
      sourceUrl: 'https://www.visitkorea.or.kr',
    },
    {
      q: '기업이 신청하지 않으면 근로자도 못 받나요?',
      a: '그렇습니다. 기업이 먼저 휴가샵에 참여 등록을 완료해야 소속 근로자가 신청할 수 있습니다. 인사담당자나 경영진에게 먼저 기업 참여를 요청하세요.',
      source: '한국관광공사 근로자휴가지원사업 안내',
      sourceUrl: 'https://www.visitkorea.or.kr',
    },
    {
      q: '10만명 정원이 차면 어떻게 되나요?',
      a: '선착순 마감 후에는 추가 접수가 불가합니다. 잔여 인원이 있을 경우 하반기 모집에 포함될 수 있으나 보장되지 않으므로 상반기에 신청하는 것을 권장합니다.',
      source: '한국관광공사 근로자휴가지원사업 안내',
      sourceUrl: 'https://www.visitkorea.or.kr',
    },
    {
      q: '대기업 직원도 신청할 수 있나요?',
      a: '불가합니다. 근로자휴가지원사업은 중소기업(우선지원대상기업)과 중견기업 재직자만 참여할 수 있습니다. 대기업과 공공기관은 지원 대상에서 제외됩니다.',
      source: '한국관광공사 근로자휴가지원사업 안내',
      sourceUrl: 'https://www.visitkorea.or.kr',
    },
  ],
  sources: [
    { name: '한국관광공사 근로자휴가지원사업', url: 'https://www.visitkorea.or.kr' },
    { name: '휴가샵 공식 홈페이지', url: 'https://www.vacationshop.or.kr' },
  ],
};
