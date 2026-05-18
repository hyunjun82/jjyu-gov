import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      {/* 빠른 답변 */}
      <div className="answer-box">
        <p>
          근로자휴가지원사업 신청 자격은 <strong>중소기업·중견기업 소속 고용보험 가입 근로자</strong>입니다.
          단, 기업이 먼저 휴가샵에 참여 등록을 해야 근로자 신청이 가능합니다.
          특수고용직·프리랜서·일용직은 참여할 수 없으며, 소득 기준은 없습니다.
        </p>
      </div>

      {/* 서론 */}
      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        &quot;내가 다니는 회사가 참여 가능한지&quot;, &quot;나는 자격이 되는지&quot; 확인하는 방법을 아래에서 정리했습니다.
        기업 규모와 고용 형태를 먼저 체크하세요.
      </p>

      {/* H2-1: 자격 기준 */}
      <section className="detail-card" id="eligibility">
        <h2 className="detail-card-head">신청 자격 한눈에 보기</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr>
                <th>조건</th>
                <th>내용</th>
                <th>해당 여부</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>기업 규모</td>
                <td>중소기업(우선지원대상기업), 중견기업</td>
                <td>✅ 가능</td>
              </tr>
              <tr>
                <td>고용 형태</td>
                <td>고용보험 가입 근로자</td>
                <td>✅ 가능</td>
              </tr>
              <tr>
                <td>고용 규모</td>
                <td>2인 이상 고용 사업장</td>
                <td>✅ 가능</td>
              </tr>
              <tr>
                <td>대기업</td>
                <td>상호출자제한기업집단 소속</td>
                <td>❌ 불가</td>
              </tr>
              <tr>
                <td>공공기관</td>
                <td>공기업·준정부기관 등</td>
                <td>❌ 불가</td>
              </tr>
              <tr>
                <td>특수고용·프리랜서</td>
                <td>고용보험 미가입</td>
                <td>❌ 불가</td>
              </tr>
              <tr>
                <td>일용직</td>
                <td>일용근로자</td>
                <td>❌ 불가</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>소득 기준 없음:</strong> 연봉이 얼마인지와 관계없이 중소·중견기업 재직 여부와
            고용보험 가입 여부만 확인합니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      {/* H2-2: 확인 방법 */}
      <section className="detail-card" id="how-to-check">
        <h2 className="detail-card-head">내 회사 참여 여부 확인 방법</h2>
        <div className="detail-card-body">
          <div className="info-box">
            <strong>Step 1. 기업 규모 확인</strong><br />
            중소기업 여부는 중소기업현황정보시스템(sminfo.mss.go.kr)에서 사업자등록번호로
            조회할 수 있습니다.
          </div>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>Step 2. 휴가샵 기업 참여 확인</strong><br />
            휴가샵(vacationshop.or.kr) → 기업 검색에서 소속 회사명 입력.
            목록에 있으면 참여 기업이므로 근로자 신청이 가능합니다.
          </div>
          <ol style={{ listStyle: 'decimal', paddingLeft: 20, lineHeight: 2.2, marginTop: 12 }}>
            <li>회사가 목록에 없는 경우 → 인사팀에 기업 신청 요청</li>
            <li>기업 신청 완료 후 → 개인 회원가입 및 근로자 신청 진행</li>
            <li>근로자 분담금 20만원 납입 → 적립금 40만원 확인</li>
          </ol>
          <table className="compare-table" style={{ marginTop: 16 }}>
            <thead>
              <tr>
                <th>확인 방법</th>
                <th>경로</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>중소기업 여부 확인</td>
                <td>sminfo.mss.go.kr (사업자번호 조회)</td>
              </tr>
              <tr>
                <td>기업 참여 여부 확인</td>
                <td>vacationshop.or.kr 기업 검색</td>
              </tr>
              <tr>
                <td>고용보험 가입 확인</td>
                <td>고용24(work.go.kr) 개인 로그인</td>
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
            자격 확인 후 신청 방법, 40만원 구성, 사용처까지 전체 정보를 확인하세요.
          </p>
          <a href="/policy/worker-vacation-support" className="btn-cta">
            근로자휴가지원 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 근로자휴가지원중소기업재직자신청자격확인SpokeContent: SpokeData = {
  h1: '근로자휴가지원 중소기업 재직자 신청 자격 확인 방법',
  breadcrumb: '중소기업재직자신청자격확인',
  description:
    '근로자휴가지원사업 신청 자격(중소·중견기업 고용보험 가입 근로자)과 회사 참여 여부 확인 방법을 안내합니다. 대기업·공공기관·프리랜서 불가, 소득 기준 없음.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '계약직·기간제 직원도 신청할 수 있나요?',
      a: '네. 고용 형태(정규직·계약직·기간제)와 무관하게 중소·중견기업에 재직하면서 고용보험에 가입된 근로자라면 신청 가능합니다.',
      source: '한국관광공사 근로자휴가지원사업 안내',
      sourceUrl: 'https://www.visitkorea.or.kr',
    },
    {
      q: '1인 사업장(대표 혼자)도 참여할 수 있나요?',
      a: '불가합니다. 2인 이상 고용된 사업장이어야 합니다. 대표자 혼자 운영하는 1인 사업장은 참여할 수 없습니다.',
      source: '한국관광공사 근로자휴가지원사업 안내',
      sourceUrl: 'https://www.visitkorea.or.kr',
    },
    {
      q: '입사 후 몇 개월이 지나야 신청할 수 있나요?',
      a: '별도의 재직 기간 요건은 없습니다. 신청일 기준으로 해당 기업 소속 근로자이고 고용보험에 가입된 상태라면 입사 직후에도 신청 가능합니다.',
      source: '한국관광공사 근로자휴가지원사업 안내',
      sourceUrl: 'https://www.visitkorea.or.kr',
    },
    {
      q: '중견기업인지 어떻게 확인하나요?',
      a: '한국중견기업연합회(fkme.or.kr) 또는 중소기업현황정보시스템(sminfo.mss.go.kr)에서 사업자등록번호로 확인할 수 있습니다. 인사팀에 문의하는 것이 가장 빠릅니다.',
      source: '한국관광공사 근로자휴가지원사업 안내',
      sourceUrl: 'https://www.visitkorea.or.kr',
    },
    {
      q: '퇴사 후에도 적립금을 사용할 수 있나요?',
      a: '신청 및 납입 당시 재직 상태였다면 퇴사 후에도 적립금은 12월 31일까지 사용 가능합니다. 단, 퇴사 후 신규 신청은 불가합니다.',
      source: '한국관광공사 근로자휴가지원사업 안내',
      sourceUrl: 'https://www.visitkorea.or.kr',
    },
  ],
  sources: [
    { name: '한국관광공사 근로자휴가지원사업', url: 'https://www.visitkorea.or.kr' },
    { name: '중소기업현황정보시스템', url: 'https://sminfo.mss.go.kr' },
  ],
};
