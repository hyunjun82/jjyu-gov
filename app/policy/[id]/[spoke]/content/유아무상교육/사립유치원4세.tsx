import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          사립유치원에 다니는 만 4세 아이는 <strong>2026년 3월부터 월 평균 11만원</strong>의 학부모 추가부담금이 줄어듭니다.
          별도 신청 없이 자동으로 비용에서 차감되며, 기관에 따라 실제 경감액은 다를 수 있습니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "사립유치원에 다니는 4살 아이, 2026년부터 얼마나 비용이 줄어드나요?"
        사립유치원 4세 기준 지원 내용을 정리했습니다.
      </p>

      <section className="detail-card" id="savings">
        <h2 className="detail-card-head">사립유치원 만 4세 학부모 부담 변화</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>2025년까지</th><th>2026년 3월부터</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>지원 대상</strong></td>
                <td>만 5세만</td>
                <td><strong>만 4~5세</strong></td>
              </tr>
              <tr>
                <td><strong>학부모 부담</strong></td>
                <td>기존 추가부담 유지</td>
                <td><strong>월 평균 11만원 자동 차감</strong></td>
              </tr>
              <tr>
                <td><strong>신청 방법</strong></td>
                <td>—</td>
                <td>별도 신청 없음 (자동 적용)</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            사립유치원이 학부모 추가부담금이 가장 컸기 때문에 경감 효과(11만원)도 가장 큽니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="compare">
        <h2 className="detail-card-head">기관별 경감액 비교 (2026 기준)</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>공립유치원:</strong> 월 평균 2만원 경감
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>사립유치원:</strong> 월 평균 <strong>11만원</strong> 경감 (가장 큰 혜택)
          </div>
          <div className="info-box">
            <strong>어린이집:</strong> 월 평균 7만원 경감
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="howto">
        <h2 className="detail-card-head">학부모가 해야 할 일</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            별도 신청이 필요 없습니다. 2026년 3월부터 학부모가 사립유치원에 납부하는 비용에서 자동으로 차감됩니다.
          </div>
          <div className="info-box">
            경감 내역 확인은 다니는 유치원에 문의하거나 청구서에서 확인할 수 있습니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            어린이집 지원 금액, 연도별 확대 일정 등<br />
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

export const 유아무상교육사립유치원4세SpokeContent: SpokeData = {
  h1: '사립유치원 다니는 4세 아이, 2026년부터 내는 비용이 달라지나',
  breadcrumb: '사립유치원4세',
  description:
    '2026년 3월부터 사립유치원 만 4세 학부모 추가부담금 월 평균 11만원 자동 차감. 별도 신청 불필요. 2025년까지는 5세만 대상이었으나 2026년 3월 4세로 확대.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '사립유치원 4세 아이는 2026년에 처음 혜택을 받나요?',
      a: '네, 만 4세 유아는 2026년 3월부터 처음으로 무상교육 지원이 적용됩니다. 만 5세는 2025년 7월부터 먼저 시행되었습니다.',
      source: '교육부',
      sourceUrl: 'https://www.korea.kr/multi/visualNewsView.do?newsId=148960352',
    },
    {
      q: '사립유치원 경감액이 왜 가장 크나요?',
      a: '사립유치원이 공립이나 어린이집보다 학부모 추가부담금이 높았기 때문에 경감 금액도 가장 큽니다.',
      source: '교육부',
      sourceUrl: 'https://www.korea.kr/news/policyNewsView.do?newsId=148957493',
    },
    {
      q: '신청을 따로 해야 하나요?',
      a: '아니요, 별도 신청 없이 자동으로 적용됩니다. 기존에 납부하는 비용에서 자동으로 차감됩니다.',
      source: '교육부',
      sourceUrl: 'https://www.korea.kr/news/policyNewsView.do?newsId=148957493',
    },
    {
      q: '정확히 11만원이 줄어드는 건가요?',
      a: '11만원은 월 평균 경감액입니다. 실제 금액은 각 사립유치원의 수납료에 따라 다를 수 있습니다.',
      source: '교육부',
      sourceUrl: 'https://www.korea.kr/news/policyNewsView.do?newsId=148957493',
    },
    {
      q: '만 3세 사립유치원 아이는 혜택을 받을 수 없나요?',
      a: '2026년 현재 만 4~5세만 대상입니다. 만 3세 확대 일정은 교육부 발표를 확인하세요.',
      source: '교육부',
      sourceUrl: 'https://www.korea.kr/multi/visualNewsView.do?newsId=148960352',
    },
  ],
  sources: [
    { name: '교육부 (정책뉴스)', url: 'https://www.korea.kr/news/policyNewsView.do?newsId=148957493' },
    { name: '교육부 (카드뉴스)', url: 'https://www.korea.kr/multi/visualNewsView.do?newsId=148960352' },
  ],
};
