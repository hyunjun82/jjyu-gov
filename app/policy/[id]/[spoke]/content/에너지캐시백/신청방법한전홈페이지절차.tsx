import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          에너지캐시백은 <strong>에너지캐시백 공식 홈페이지(en-ter.co.kr)</strong> 온라인 신청 또는
          <strong>가까운 한전 지사 방문</strong>으로 신청할 수 있습니다.
          신청일이 속하는 달부터 바로 적용되며, 별도 서류 없이 회원가입 후 온라인으로 5분 안에 완료됩니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        신청 후에는 직전 2개년 평균 전기 사용량 대비 3% 이상 절감하면 캐시백이 자동으로 계산되어
        다음 달 전기요금에서 차감됩니다. 한전ON 앱에서도 신청 및 절감 현황 확인이 가능합니다.
      </p>

      <section className="detail-card" id="steps">
        <h2 className="detail-card-head">온라인 신청 절차 5단계</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>단계</th><th>내용</th><th>비고</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>1단계</strong></td><td>사이트 접속</td><td>en-ter.co.kr/ec/main/main.do</td></tr>
              <tr><td><strong>2단계</strong></td><td>회원가입 또는 로그인</td><td>한전통합회원 계정 사용 가능</td></tr>
              <tr><td><strong>3단계</strong></td><td>에너지캐시백 신청 클릭</td><td>상단 메뉴 → 에너지캐시백 신청</td></tr>
              <tr><td><strong>4단계</strong></td><td>주소 확인 + 동의</td><td>주민등록 주소 자동 확인, 필수 약관 동의</td></tr>
              <tr><td><strong>5단계</strong></td><td>신청 완료</td><td>당월부터 절감량 자동 집계 시작</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="channels">
        <h2 className="detail-card-head">신청 채널 비교</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>온라인 홈페이지:</strong> en-ter.co.kr/ec/main/main.do — 가장 빠르고 간편
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>한전ON 앱:</strong> 모바일 앱에서도 신청·절감 현황 확인 가능
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>한전 지사 방문:</strong> 신분증 지참 후 가까운 한전 지사에서 신청
          </div>
          <div className="info-box">
            <strong>신청 시기:</strong> 연중 상시 신청 가능 (신청 당월부터 적용)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="after">
        <h2 className="detail-card-head">신청 후 확인 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>실시간 절감 현황:</strong> en-ter.co.kr 로그인 → 나의 캐시백 조회
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>캐시백 예상 금액:</strong> 월별 절감률·절감량 확인 후 예상 캐시백 계산
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>지급 확인:</strong> 전기요금 청구서 캐시백 차감 내역 확인
          </div>
          <div className="info-box">
            <strong>문의:</strong> 한국전력 고객센터 ☎123
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            캐시백 금액 계산, 신청 자격, 에너지바우처 비교까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/energy-cashback" className="btn-cta">
            에너지캐시백 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 에너지캐시백신청방법한전홈페이지절차SpokeContent: SpokeData = {
  h1: '에너지캐시백 신청 방법, 한전 홈페이지 en-ter.co.kr 5단계 절차',
  breadcrumb: '신청방법한전홈페이지절차',
  description:
    '에너지캐시백 신청: en-ter.co.kr/ec/main/main.do 접속 → 회원가입 → 신청 → 당월부터 적용. 한전ON 앱·한전 지사 방문 신청도 가능. 연중 상시 신청. 신청 후 실시간 절감 현황 확인.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '신청하면 얼마나 빨리 적용되나요?',
      a: '신청일이 속하는 달부터 즉시 적용됩니다. 예를 들어 5월에 신청하면 5월 사용량부터 직전 2개년 평균과 비교해 절감량이 집계됩니다.',
      source: '한국전력공사 에너지캐시백',
      sourceUrl: 'https://en-ter.co.kr/ec/main/main.do',
    },
    {
      q: '한전ON 앱으로 신청하면 홈페이지와 동일한가요?',
      a: '네. 한전ON 앱과 en-ter.co.kr 모두 동일한 에너지캐시백 신청이며, 절감 현황도 앱에서 실시간으로 확인할 수 있습니다.',
      source: '한국전력공사 에너지캐시백',
      sourceUrl: 'https://en-ter.co.kr/ec/main/main.do',
    },
    {
      q: '이사를 가면 재신청해야 하나요?',
      a: '네. 이사 후 새 주소지에서 다시 신청해야 합니다. 새 주소지의 직전 2개년 사용 이력을 기준으로 새로 산정되며, 이전 주소지의 실적은 인계되지 않습니다.',
      source: '한국전력공사 에너지캐시백',
      sourceUrl: 'https://en-ter.co.kr/ec/main/main.do',
    },
    {
      q: '신청 취소도 가능한가요?',
      a: '네. en-ter.co.kr 홈페이지 로그인 후 신청 취소가 가능합니다. 취소 후에는 절감량 집계가 중단되며, 재신청 시 신청일 기준으로 다시 적용됩니다.',
      source: '한국전력공사 에너지캐시백',
      sourceUrl: 'https://en-ter.co.kr/ec/main/main.do',
    },
    {
      q: '세입자도 신청할 수 있나요?',
      a: '네. 신청 주소지에 주민등록이 되어 있으면 세입자도 신청 가능합니다. 임대인(집주인)이 아닌 실제 거주하며 전기요금을 내는 사람이 신청하면 됩니다.',
      source: '한국전력공사 에너지캐시백',
      sourceUrl: 'https://en-ter.co.kr/ec/main/main.do',
    },
  ],
  sources: [
    { name: '한국전력공사 에너지캐시백 공식 사이트', url: 'https://en-ter.co.kr/ec/main/main.do' },
    { name: '정책브리핑 에너지캐시백 신청기', url: 'https://www.korea.kr/news/reporterView.do?newsId=148916204' },
  ],
};
