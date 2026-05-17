import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          청년미래적금은 <strong>2026년 6월 출시 예정</strong>입니다.
          금융위원회가 5월 말에 정확한 신청 시작일을 공식 발표할 예정이며,
          현재까지의 정보로는 <strong>6월 중순</strong>부터 비대면 앱 신청이 시작될 것으로 보입니다.
          연 2회(6월·12월) 신청 기회가 주어집니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "청년미래적금 6월이라는데 정확히 언제부터 신청할 수 있나요?" 지금 가장 많이 묻는 질문입니다.
        금융위원회 공식 자료 기준으로 출시 일정과 준비 방법을 정리했습니다.
      </p>

      <section className="detail-card" id="schedule">
        <h2 className="detail-card-head">2026년 6월 출시 일정과 신청 방법</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>내용</th><th>출처</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>출시 예정 시기</td>
                <td><strong>2026년 6월</strong></td>
                <td>금융위원회 공식 발표</td>
              </tr>
              <tr>
                <td>정확한 신청일</td>
                <td>5월 말 금융위 공식 발표 예정<br /><strong>(예상: 6월 중순)</strong></td>
                <td>2026.05.02 언론 보도</td>
              </tr>
              <tr>
                <td>신청 방법</td>
                <td>비대면 앱 (은행 앱)</td>
                <td>금융위원회</td>
              </tr>
              <tr>
                <td>연간 신청 횟수</td>
                <td>연 2회 (6월·12월)</td>
                <td>금융위원회</td>
              </tr>
              <tr>
                <td>취급 은행</td>
                <td>KB국민·신한·우리·하나·농협·기업은행 등</td>
                <td>2026.05.09 보도</td>
              </tr>
            </tbody>
          </table>
          <div className="warning-box" style={{ marginTop: 12 }}>
            <strong>주의:</strong> 정확한 신청 시작일은 금융위원회 공식 채널에서 확인하세요.
            금융위원회 인스타그램(@fsc.go.kr) 또는 공식 홈페이지(fsc.go.kr)에서
            최신 공지를 확인할 수 있습니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="overview">
        <h2 className="detail-card-head">가입 전 핵심 조건 요약</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>조건</th><th>기준</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>나이</td>
                <td>만 19세 이상 ~ 만 34세 이하</td>
              </tr>
              <tr>
                <td>소득</td>
                <td>연 소득 <strong>6,000만원 이하</strong> (근로·사업소득)</td>
              </tr>
              <tr>
                <td>월 납입 한도</td>
                <td>최대 <strong>50만원</strong> (최소 1만원)</td>
              </tr>
              <tr>
                <td>만기</td>
                <td><strong>3년</strong></td>
              </tr>
              <tr>
                <td>최대 수령액</td>
                <td>우대형 기준 <strong>최대 2,200만원</strong></td>
              </tr>
              <tr>
                <td>이자소득세</td>
                <td>면제 (비과세)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="howto">
        <h2 className="detail-card-head">6월 신청, 지금 미리 준비할 것</h2>
        <div className="detail-card-body">
          <ol style={{ listStyle: 'decimal', paddingLeft: 20, lineHeight: 2.4 }}>
            <li>
              <strong>소득 확인:</strong> 연 소득 6,000만원 이하인지 확인
              (근로소득자는 근로소득 원천징수 영수증 기준)
            </li>
            <li>
              <strong>나이 확인:</strong> 신청 시점 기준 만 19~34세 여부 확인
              (병역 복무 기간은 최대 6년 연장 인정)
            </li>
            <li>
              <strong>은행 앱 설치:</strong> 취급 은행(KB국민·신한·우리·하나·농협·기업) 앱 미리 설치
            </li>
            <li>
              <strong>금융위 공지 구독:</strong> 정확한 신청 시작일은 5월 말 금융위 공식 발표 대기
            </li>
          </ol>
          <div className="info-box" style={{ marginTop: 10 }}>
            청년도약계좌 가입자라면 <strong>미래적금으로 갈아타기(전환)</strong>도 가능합니다.
            기존 납입액이 인정되므로 전환 여부도 검토하세요.
          </div>
        </div>
      </section>

      <section className="detail-card" id="banks">
        <h2 className="detail-card-head">취급 은행별 신청 방법</h2>
        <div className="detail-card-body">
          <p>
            청년미래적금은 비대면 앱으로만 신청 가능합니다.
            아래 은행 앱을 미리 설치해두고 신청일에 바로 가입하세요.
          </p>
          <table className="compare-table">
            <thead>
              <tr><th>은행</th><th>앱 이름</th></tr>
            </thead>
            <tbody>
              <tr><td>KB국민은행</td><td>KB스타뱅킹</td></tr>
              <tr><td>신한은행</td><td>신한 쏠(SOL)</td></tr>
              <tr><td>우리은행</td><td>우리WON뱅킹</td></tr>
              <tr><td>하나은행</td><td>하나원큐</td></tr>
              <tr><td>NH농협은행</td><td>NH스마트뱅킹</td></tr>
              <tr><td>IBK기업은행</td><td>i-ONE Bank</td></tr>
            </tbody>
          </table>
          <p style={{ fontSize: 13, color: '#666', marginTop: 8 }}>
            ※ 취급 은행 및 금리는 출시 시점에 확정됩니다. 최종 확정 은행 목록은 금융위원회 공지를 확인하세요.
          </p>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            기여금 6~12% 조건, 중도해지 규정, 도약계좌 갈아타기 방법 등<br />
            청년미래적금 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/youth-future-savings" className="btn-cta">
            청년미래적금 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 출시일정SpokeContent: SpokeData = {
  h1: '2026년 6월 청년미래적금 출시 | 신청 방법·최대 7~8% 금리·취급기관 15곳',
  breadcrumb: '출시일정',
  description:
    '청년미래적금 2026년 6월 출시 예정. 기본금리 5% + 기관별 우대금리 2~3%p = 최대 7~8%. 총 15개 취급기관, 비대면 앱 신청. 월 50만원씩 3년 납입 시 최대 2,255만원 수령 가능.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '청년미래적금은 언제부터 신청할 수 있나요?',
      a: '2026년 6월 출시 예정입니다. 정확한 신청 시작일은 5월 말 금융위원회가 공식 발표합니다. 현재까지 알려진 바로는 6월 중순부터 신청이 가능할 것으로 예상됩니다.',
      source: '금융위원회 청년미래적금 안내 (2026.04.24)',
      sourceUrl: 'https://www.fsc.go.kr',
    },
    {
      q: '청년미래적금 신청은 어떻게 하나요?',
      a: 'KB국민·신한·우리·하나·농협·기업은행 등 취급 은행의 스마트폰 앱으로 비대면 신청합니다. 연 2회(6월·12월) 신청 기회가 있습니다.',
      source: '2026년 청년미래적금 출시 언론 보도 (2026.05.09)',
      sourceUrl: 'https://theroutinemag.com/청년미래적금-가입-총정리',
    },
    {
      q: '청년미래적금 가입 조건은 무엇인가요?',
      a: '만 19~34세, 연 소득 6,000만원 이하면 신청 가능합니다. 병역 복무 기간은 최대 6년까지 나이 계산에서 제외됩니다.',
      source: '위기브 청년미래적금 출시 안내 (2026.01.17)',
      sourceUrl: 'https://www.wegive.co.kr/wezine/detail',
    },
    {
      q: '3년 만기 시 얼마나 받을 수 있나요?',
      a: '월 50만원씩 3년 납입 시 우대형 기준 최대 2,200만원을 받을 수 있습니다. 이자소득세가 면제됩니다.',
      source: '경기도일자리포털 잡아바 청년미래적금 정리',
      sourceUrl: 'https://job.gg.go.kr/thema/exprcDtl',
    },
    {
      q: '청년도약계좌에서 청년미래적금으로 갈아탈 수 있나요?',
      a: '네. 청년도약계좌 → 청년미래적금 갈아타기(전환)가 허용됩니다. 기존 납입액이 인정되므로 자신에게 유리한 상품을 검토해보세요.',
      source: '금융위원회 청년미래적금 카드뉴스 (2026.04.24)',
      sourceUrl: 'https://www.fsc.go.kr/no040101?cnId=3187',
    },
  ],
  sources: [
    { name: '금융위원회 청년미래적금 카드뉴스 (2026.04.24)', url: 'https://www.fsc.go.kr/no040101?cnId=3187' },
    { name: '경기도일자리포털 잡아바 청년미래적금 총정리', url: 'https://job.gg.go.kr/thema/exprcDtl' },
    { name: '위기브 청년미래적금 출시 안내 (2026.01.17)', url: 'https://www.wegive.co.kr/wezine/detail?id=897' },
  ],
};
