import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          취업후상환 학자금대출 생활비 대출은 <strong>학기당 최대 200만원</strong>까지 신청할 수 있습니다.
          방학 중에는 <strong>추가 100만원</strong>을 별도 신청할 수 있으며,
          신청은 <strong>한국장학재단 홈페이지(kosaf.go.kr)</strong> 또는
          <strong>모바일 앱 '장학금앱'</strong>을 통해 매학기 개별 신청해야 합니다.
          2026년부터 소득요건이 폐지되어 소득분위와 무관하게 신청 가능합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        생활비 대출은 등록금 대출과 별도로 신청합니다. 학기 시작 전 신청 기간에 맞춰 신청해야 하며,
        신청 후 심사를 거쳐 지정 계좌로 입금됩니다. 생활비 용도는 주거비, 식비, 교통비 등 학업과 관련된
        생활비 전반에 사용할 수 있으며 영수증 제출 의무는 없습니다.
      </p>

      <section className="detail-card" id="limit-table">
        <h2 className="detail-card-head">생활비 대출 한도 및 조건 한눈에 보기</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>구분</th><th>학기 중</th><th>방학 중</th><th>비고</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>대출 한도</strong></td>
                <td>최대 200만원</td>
                <td>최대 100만원</td>
                <td>학기·방학 각각 신청</td>
              </tr>
              <tr>
                <td><strong>금리</strong></td>
                <td>연 1.7%</td>
                <td>연 1.7%</td>
                <td>2026년 기준</td>
              </tr>
              <tr>
                <td><strong>소득 요건</strong></td>
                <td>폐지(무관)</td>
                <td>폐지(무관)</td>
                <td>2026년부터 폐지</td>
              </tr>
              <tr>
                <td><strong>상환 시작</strong></td>
                <td colSpan={2}>취업 후 연소득 2,851만원 초과 시</td>
                <td>취업후상환 방식</td>
              </tr>
              <tr>
                <td><strong>신청 채널</strong></td>
                <td colSpan={2}>kosaf.go.kr / 장학금앱</td>
                <td>매학기 개별 신청</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="apply-steps">
        <h2 className="detail-card-head">신청 방법 단계별 안내</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>① 한국장학재단 홈페이지:</strong> kosaf.go.kr 접속 → 로그인 → 장학금·학자금 대출 → 학자금대출 신청 → 생활비 대출 선택 → 금액 입력 → 제출
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>② 모바일 앱 '장학금앱':</strong> 앱스토어 또는 플레이스토어에서 '장학금앱' 검색 → 설치 → 공인인증서(또는 간편인증) 로그인 → 학자금대출 메뉴 → 생활비 신청
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>③ 신청 시기:</strong> 학기 시작 약 3개월 전부터 신청 가능. 1학기는 보통 12월~2월, 2학기는 6월~8월 신청 기간 운영. 방학 생활비는 방학 시작 전후 별도 신청.
          </div>
          <div className="info-box">
            <strong>④ 준비 서류:</strong> 별도 서류 없음(재학증명은 학교 연동). 계좌는 본인 명의 계좌로 사전 등록 필요.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            등록금 대출, 상환 방법, 취업후상환 기준까지<br />
            학자금대출 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/general-student-loan" className="btn-cta">학자금대출 전체 정보 보기 →</a>
        </div>
      </section>
    </>
  );
}

export const 학자금대출생활비학기당200만신청방법SpokeContent: SpokeData = {
  h1: '학자금대출 생활비 학기당 200만원 신청 방법',
  breadcrumb: '생활비학기당200만신청방법',
  description:
    '취업후상환 학자금대출 생활비: 학기당 최대 200만원, 방학 중 100만원 추가. 한국장학재단(kosaf.go.kr) 또는 장학금앱으로 매학기 신청. 2026년부터 소득요건 폐지.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '생활비 대출 200만원은 한 번에 받나요, 나눠서 받나요?',
      a: '신청 후 심사 통과 시 신청 금액 전액을 한 번에 지정 계좌로 입금합니다. 학기 중 분할 지급은 없으며, 방학 생활비는 별도로 신청해야 합니다.',
      source: '한국장학재단',
      sourceUrl: 'https://www.kosaf.go.kr',
    },
    {
      q: '소득분위가 높아도 생활비 대출 신청이 되나요?',
      a: '2026년부터 생활비 대출 소득요건이 폐지되어 소득분위와 무관하게 신청 가능합니다. 단, 취업후상환 학자금대출 자격(재학생·휴학생 등 기본 요건)은 충족해야 합니다.',
      source: '한국장학재단',
      sourceUrl: 'https://www.kosaf.go.kr',
    },
    {
      q: '생활비 대출 용도를 증명해야 하나요?',
      a: '아닙니다. 생활비 대출은 주거비, 식비, 교통비 등 학업 관련 생활비 전반에 자유롭게 사용할 수 있으며, 영수증 등 용도 증명 서류를 제출할 의무가 없습니다.',
      source: '한국장학재단',
      sourceUrl: 'https://www.kosaf.go.kr',
    },
    {
      q: '방학 생활비 100만원은 방학이 시작해야 신청 가능한가요?',
      a: '방학 생활비는 방학 시작 전후 일정 기간 동안 신청할 수 있습니다. 정확한 신청 기간은 한국장학재단 홈페이지 공지사항에서 학기별로 확인하세요.',
      source: '한국장학재단',
      sourceUrl: 'https://www.kosaf.go.kr',
    },
    {
      q: '졸업 후 취업하지 못하면 생활비 대출은 언제 갚나요?',
      a: '취업후상환 방식이므로 취업 후 연소득이 2,851만원을 초과하는 시점부터 상환이 시작됩니다. 미취업 상태이거나 소득이 기준 이하이면 상환 의무가 발생하지 않습니다.',
      source: '한국장학재단',
      sourceUrl: 'https://www.kosaf.go.kr',
    },
  ],
  sources: [
    { name: '한국장학재단 학자금대출', url: 'https://www.kosaf.go.kr' },
    { name: '교육부 학자금 지원 안내', url: 'https://www.moe.go.kr' },
  ],
};
