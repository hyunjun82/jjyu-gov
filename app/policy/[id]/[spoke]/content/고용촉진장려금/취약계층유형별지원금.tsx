import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          고용촉진장려금은 취약계층 근로자 <strong>1인당 최대 720만원</strong>이
          사업주에게 지급됩니다.
          <strong>6개월 근속 시 360만원</strong>, <strong>12개월 근속 시 360만원</strong>
          두 차례로 나뉘어 지급됩니다.
          대상이 되는 취약계층은 장애인·고령자·여성가장·취업지원 참여자 등입니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        취약계층 유형별로 지원 대상 조건을 확인하고, 채용 계획에 맞는 장려금 수령액을 계산해 보세요.
      </p>

      <section className="detail-card" id="amount">
        <h2 className="detail-card-head">지원 금액 구조</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>시점</th><th>지급액</th><th>조건</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>6개월 근속</strong></td><td>360만원</td><td>1차 지급</td></tr>
              <tr><td><strong>12개월 근속</strong></td><td>360만원</td><td>2차 지급</td></tr>
              <tr><td><strong>1년 합계</strong></td><td>720만원</td><td>1인당 최대</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="target-types">
        <h2 className="detail-card-head">취약계층 유형별 대상 조건</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>유형</th><th>조건</th><th>확인 서류</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>장애인</strong></td><td>등록 장애인</td><td>장애인 등록증</td></tr>
              <tr><td><strong>고령자</strong></td><td>만 55세 이상</td><td>주민등록증</td></tr>
              <tr><td><strong>여성가장</strong></td><td>한부모 등</td><td>한부모가족 증명서</td></tr>
              <tr><td><strong>취업성공패키지</strong></td><td>참여자</td><td>참여증</td></tr>
              <tr><td><strong>국민취업지원제도</strong></td><td>참여자</td><td>참여 증빙</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="conditions">
        <h2 className="detail-card-head">근로 조건 — 이것을 충족해야 지급</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>근로시간:</strong> 주 30시간 이상
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>고용 형태:</strong> 정규직 또는 무기 계약직
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>4대 보험:</strong> 가입 필수
          </div>
          <div className="info-box">
            <strong>제외:</strong> 단기 계약직, 주 30시간 미만 시간제, 일용직
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            사전 신청 방법, 중도 퇴사 처리, 다른 장려금과 중복 여부까지<br />
            고용촉진장려금 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/employment-promotion" className="btn-cta">
            고용촉진장려금 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 고용촉진장려금취약계층유형별지원금SpokeContent: SpokeData = {
  h1: '고용촉진장려금 지원 대상과 금액, 취약계층 유형별 1인당 얼마나 나오나',
  breadcrumb: '취약계층유형별지원금',
  description:
    '고용촉진장려금: 취약계층 1인당 최대 720만원(6개월 360만원+12개월 360만원). 대상: 장애인, 고령자(55세+), 여성가장, 취업성공패키지·국민취업지원제도 참여자. 주 30시간 이상 정규직 필수.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '고용촉진장려금은 1인당 얼마나 받나요?',
      a: '근로자 1인당 최대 720만원이 사업주에게 지급됩니다. 6개월 근속 시 360만원, 12개월 근속 시 360만원으로 나뉘어 지급됩니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '어떤 취약계층을 채용해야 받을 수 있나요?',
      a: '장애인, 만 55세 이상 고령자, 여성가장(한부모 등), 취업성공패키지 참여자, 국민취업지원제도 참여자 등이 해당합니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '파트타임으로 채용해도 받을 수 있나요?',
      a: '아니요. 주 30시간 이상 정규직 또는 무기 계약직으로 채용해야 합니다. 단기 계약직이나 주 30시간 미만 시간제는 제외됩니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '여러 명 취약계층을 채용하면 여러 명 분 장려금을 받나요?',
      a: '네. 각 취약계층 근로자마다 1인당 최대 720만원씩 지급됩니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '대기업도 신청할 수 있나요?',
      a: '아니요. 우선지원대상기업, 중견기업, 사회적기업만 신청 가능합니다. 대기업은 제외됩니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
  ],
  sources: [
    { name: '고용노동부', url: 'https://www.moel.go.kr' },
    { name: '고용24', url: 'https://www.work24.go.kr' },
    { name: '고용24 고용촉진장려금 안내', url: 'https://www.work24.go.kr' },
  ],
};
