import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          일반건강검진 기본 항목은 <strong>진찰·신체계측·시력·청력·혈압·흉부방사선·혈액검사·요검사·구강검진</strong>입니다.
          여기에 연령과 성별에 따라 <strong>암검진(위암·대장암·유방암 등)</strong>과
          <strong>생애전환기검진(66세)</strong>이 추가됩니다. 모두 같은 날 같은 검진기관에서 받을 수 있습니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        별도로 신청하지 않아도 대상자라면 검진표에 받아야 할 항목이 자동으로 표시됩니다.
        검진기관 방문 시 신분증만 지참하면 됩니다.
      </p>

      <section className="detail-card" id="basic">
        <h2 className="detail-card-head">일반건강검진 공통 항목</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>검사 항목</th><th>내용</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>진찰 및 상담</strong></td><td>의사 문진 및 건강 상담</td></tr>
              <tr><td><strong>신체계측</strong></td><td>신장·체중·허리둘레·비만도(BMI)</td></tr>
              <tr><td><strong>시력·청력</strong></td><td>기본 시력·청력 검사</td></tr>
              <tr><td><strong>혈압 측정</strong></td><td>고혈압 여부 확인</td></tr>
              <tr><td><strong>흉부방사선</strong></td><td>폐결핵·심장 이상 확인</td></tr>
              <tr><td><strong>혈액검사</strong></td><td>혈색소·공복혈당·간수치(AST·ALT·γ-GTP)·신장(크레아티닌·eGFR)·이상지질혈증</td></tr>
              <tr><td><strong>요검사</strong></td><td>신장·방광 이상 확인</td></tr>
              <tr><td><strong>구강검진</strong></td><td>치아·잇몸 건강 확인</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="age">
        <h2 className="detail-card-head">연령·성별별 추가 검사</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>대상</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>이상지질혈증(콜레스테롤)</strong></td><td>남 24세 이상, 여 40세 이상 (4년마다)</td></tr>
              <tr><td><strong>B형간염</strong></td><td>40세 (보균자·면역자 제외)</td></tr>
              <tr><td><strong>C형간염</strong></td><td>56세</td></tr>
              <tr><td><strong>폐기능검사</strong></td><td>56세·66세</td></tr>
              <tr><td><strong>골밀도 검사</strong></td><td>54세·60세·66세 여성</td></tr>
              <tr><td><strong>인지기능장애 검사</strong></td><td>66세 이상 (2년마다)</td></tr>
              <tr><td><strong>정신건강(우울증)</strong></td><td>20~34세(2년마다), 35세 이상 각 연령대 1회</td></tr>
              <tr><td><strong>노인신체기능</strong></td><td>66세·70세·80세</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="cancer">
        <h2 className="detail-card-head">암검진 대상 (연령별)</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>위암:</strong> 만 40세 이상, 2년마다 — 위내시경 또는 위장조영촬영
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>대장암:</strong> 만 50세 이상, 매년 — 분변잠혈검사 (이상 시 대장내시경)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>유방암:</strong> 만 40세 이상 여성, 2년마다 — 유방촬영술
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>자궁경부암:</strong> 만 20세 이상 여성, 2년마다 — 자궁경부세포검사
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>간암:</strong> 고위험군(간경변증·B·C형간염 보균자) 만 40세 이상, 6개월마다
          </div>
          <div className="info-box">
            <strong>폐암:</strong> 만 54~74세 중 30갑년 이상 흡연자, 2년마다
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            대상자 확인, 예약 방법, 미수검 불이익까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/national-health-checkup" className="btn-cta">
            국민건강검진 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 국민건강검진검진항목암검진생애전환기통합SpokeContent: SpokeData = {
  h1: '국민건강검진 검사 항목, 일반·암·생애전환기 검진 한번에 받는 방법',
  breadcrumb: '검진항목암검진생애전환기통합',
  description:
    '국민건강검진 공통 항목: 신체계측·혈압·혈액·요검사·구강검진. 연령별 추가: 이상지질혈증·골밀도·인지기능. 암검진: 위암(40세↑)·대장암(50세↑)·유방암(40세↑여성) 등. 같은 날 통합 수검 가능.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '위내시경과 위장조영촬영 중 어떤 걸 선택해야 하나요?',
      a: '위암검진은 위내시경 또는 위장조영촬영 중 선택할 수 있습니다. 위내시경이 정확도가 높고 폴립 발견 시 즉시 제거도 가능합니다. 다만 수면 내시경의 경우 추가 비용이 발생할 수 있으니 검진기관에 확인하세요.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.nhis.or.kr/nhis/healthin/wbhaca04500m01.do',
    },
    {
      q: '대장암 검진에서 이상 소견이 나오면 어떻게 하나요?',
      a: '분변잠혈검사에서 양성이 나오면 확진 검사로 대장내시경을 받습니다. 확진 검사도 국가 암검진 대상이면 무료 또는 저렴하게 받을 수 있습니다.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.nhis.or.kr/nhis/healthin/wbhaca04500m01.do',
    },
    {
      q: '혈액검사 전 공복이 필요한가요?',
      a: '네. 검진 전날 저녁 9시 이후 금식이 필요합니다. 검진 당일 물·커피·주스·껌 등도 삼가야 합니다. 오후에 받는 경우 최소 8시간 이상 공복을 유지해야 합니다.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.nhis.or.kr/nhis/healthin/wbhaca04500m01.do',
    },
    {
      q: '암검진도 무료인가요?',
      a: '국가 암검진 대상자는 무료(의료급여수급자·건강보험료 하위 50%)이거나 본인부담 10%로 매우 저렴하게 받을 수 있습니다. 검진기관에서 건강보험증(또는 신분증)을 제시하면 자동으로 처리됩니다.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.nhis.or.kr/nhis/healthin/wbhaca04500m01.do',
    },
    {
      q: '66세 생애전환기검진은 일반검진과 다른 건가요?',
      a: '66세 대상자는 일반건강검진에 인지기능장애 검사, 노인신체기능검사, 골밀도 검사, 생활습관평가 등이 추가됩니다. 같은 검진기관에서 한 번에 받을 수 있습니다.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.nhis.or.kr/nhis/healthin/wbhaca04500m01.do',
    },
  ],
  sources: [
    { name: '국민건강보험 일반건강검진 안내', url: 'https://www.nhis.or.kr/nhis/healthin/wbhaca04500m01.do' },
    { name: '국민건강보험공단', url: 'https://www.nhis.or.kr' },
  ],
};
