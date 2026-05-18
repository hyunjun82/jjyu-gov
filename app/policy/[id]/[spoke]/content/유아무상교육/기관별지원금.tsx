import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          2026년 3월부터 어린이집·유치원에 다니는 <strong>만 4~5세 유아</strong>의 학부모 추가부담금이 자동 차감됩니다.
          기관 유형별 월 평균 경감액은 <strong>공립유치원 2만원, 사립유치원 11만원, 어린이집 7만원</strong>입니다.
          별도 신청 없이 자동 적용됩니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "2026 유아 무상보육·교육으로 우리 아이 다니는 기관에서 얼마나 줄어드나요?"
        기관 유형별 지원 금액을 정리했습니다.
      </p>

      <section className="detail-card" id="amount">
        <h2 className="detail-card-head">기관 유형별 월 평균 학부모 부담 경감액 (2026 기준)</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>기관 유형</th><th>월 평균 경감액</th><th>대상</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>공립유치원</strong></td>
                <td><strong>월 2만원</strong></td>
                <td>만 4~5세</td>
              </tr>
              <tr>
                <td><strong>사립유치원</strong></td>
                <td><strong>월 11만원</strong></td>
                <td>만 4~5세</td>
              </tr>
              <tr>
                <td><strong>어린이집</strong></td>
                <td><strong>월 7만원</strong></td>
                <td>만 4~5세</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            이 금액은 월 평균 경감액입니다. 실제 경감액은 기관별 수납료에 따라 다를 수 있습니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="scale">
        <h2 className="detail-card-head">사업 규모 확대</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>2025년 (5세만)</th><th>2026년 (4~5세)</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>지원 인원</td>
                <td>27.8만 명</td>
                <td><strong>50.3만 명</strong></td>
              </tr>
              <tr>
                <td>지원 예산</td>
                <td>1,289억 원</td>
                <td><strong>4,703억 원</strong></td>
              </tr>
              <tr>
                <td>적용 연령</td>
                <td>5세</td>
                <td><strong>4~5세</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="how">
        <h2 className="detail-card-head">지원 방식</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>별도 신청 불필요:</strong> 기존에 납부하는 비용에서 자동으로 차감됩니다.
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>시행 시기:</strong> 2026년 3월부터 (해당 학기부터 자동 적용)
          </div>
          <div className="info-box">
            <strong>주관:</strong> 교육부 (국가책임형 유아교육·보육 사업)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            연도별 확대 일정, 만 3세 제외 이유 등<br />
            유아 무상교육·보육 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/childcare-infant-education" className="btn-cta">
            유아 무상교육·보육 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 유아무상교육기관별지원금SpokeContent: SpokeData = {
  h1: '2026 유아 무상교육 보육, 만 4~5세 어린이집과 유치원 기관별 지원 금액',
  breadcrumb: '기관별지원금',
  description:
    '2026년 3월부터 만 4~5세 유아 무상보육·교육 확대. 공립유치원 월 2만원, 사립유치원 월 11만원, 어린이집 월 7만원 자동 차감. 별도 신청 불필요.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '사립유치원은 월 얼마나 줄어드나요?',
      a: '월 평균 11만원의 학부모 추가부담금이 줄어듭니다. 실제 금액은 기관별 수납료에 따라 다를 수 있습니다.',
      source: '교육부',
      sourceUrl: 'https://www.korea.kr/news/policyNewsView.do?newsId=148957493',
    },
    {
      q: '어린이집은 얼마나 줄어드나요?',
      a: '어린이집은 월 평균 7만원의 학부모 부담이 줄어듭니다.',
      source: '교육부',
      sourceUrl: 'https://www.korea.kr/news/policyNewsView.do?newsId=148957493',
    },
    {
      q: '별도로 신청해야 하나요?',
      a: '아니요, 별도 신청 없이 기존에 납부하는 비용에서 자동으로 차감됩니다.',
      source: '교육부',
      sourceUrl: 'https://www.korea.kr/multi/visualNewsView.do?newsId=148960352',
    },
    {
      q: '만 5세는 2025년에도 지원됐나요?',
      a: '네, 2025년 7월부터 만 5세에 먼저 시행되었고, 2026년 3월부터 만 4세까지 확대되었습니다.',
      source: '교육부',
      sourceUrl: 'https://www.korea.kr/multi/visualNewsView.do?newsId=148960352',
    },
    {
      q: '만 3세는 언제 혜택을 받을 수 있나요?',
      a: '만 3세는 2026년 현재 계획에 포함되어 있지 않습니다. 향후 확대 일정은 교육부 발표를 확인하세요.',
      source: '교육부',
      sourceUrl: 'https://www.korea.kr/news/policyNewsView.do?newsId=148957493',
    },
  ],
  sources: [
    { name: '교육부 (정책뉴스)', url: 'https://www.korea.kr/news/policyNewsView.do?newsId=148957493' },
    { name: '교육부 (카드뉴스)', url: 'https://www.korea.kr/multi/visualNewsView.do?newsId=148960352' },
  ],
};
