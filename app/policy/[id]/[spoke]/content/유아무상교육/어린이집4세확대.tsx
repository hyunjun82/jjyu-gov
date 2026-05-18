import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          어린이집에 다니는 만 4세 아이도 <strong>2026년 3월부터 월 평균 7만원</strong>의 학부모 추가부담금이 자동으로 줄어듭니다.
          별도 신청 없이 자동 적용됩니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "어린이집 다니는 만 4세인데, 2026년 무상보육 확대로 추가 지원이 생기나요?"
        어린이집 4세 확대 내용을 정리했습니다.
      </p>

      <section className="detail-card" id="before-after">
        <h2 className="detail-card-head">어린이집 만 4세, 2025 vs 2026</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>2025년</th><th>2026년 3월부터</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>어린이집 4세 대상 여부</strong></td>
                <td>미포함</td>
                <td><strong>포함</strong></td>
              </tr>
              <tr>
                <td><strong>학부모 부담 경감</strong></td>
                <td>없음</td>
                <td><strong>월 평균 7만원 차감</strong></td>
              </tr>
              <tr>
                <td><strong>신청</strong></td>
                <td>—</td>
                <td>별도 신청 없이 자동 적용</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            2025년까지는 어린이집 만 5세만 무상보육 확대 대상이었으나, 2026년 3월부터 만 4세까지 확대되었습니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="compare-facility">
        <h2 className="detail-card-head">어린이집 vs 유치원 경감액 비교</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>어린이집 (만 4~5세):</strong> 월 평균 7만원 경감
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>공립유치원 (만 4~5세):</strong> 월 평균 2만원 경감
          </div>
          <div className="info-box">
            <strong>사립유치원 (만 4~5세):</strong> 월 평균 11만원 경감
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="who">
        <h2 className="detail-card-head">지원 대상 확인</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>대상:</strong> 2026년 3월 기준 어린이집에 재원 중인 만 4세(2021년생) 또는 만 5세(2020년생) 유아
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>만 3세(2022년생):</strong> 2026년 현재 대상에 포함되지 않습니다.
          </div>
          <div className="info-box">
            <strong>소득 기준:</strong> 없음. 모든 가정의 만 4~5세 유아 해당
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            연도별 확대 일정, 사립유치원 지원, 기관별 금액 비교 등<br />
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

export const 유아무상교육어린이집4세확대SpokeContent: SpokeData = {
  h1: '어린이집 다니는 만 4세인데 2026 무상보육 확대로 추가 지원이 생기나',
  breadcrumb: '어린이집4세확대',
  description:
    '2026년 3월부터 어린이집 만 4세 무상보육 확대 적용. 월 평균 7만원 학부모 추가부담금 자동 차감. 2025년까지는 5세만 대상. 별도 신청 불필요.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '어린이집 만 4세도 2026년부터 무상보육이 되나요?',
      a: '네, 2026년 3월부터 어린이집 만 4세 유아도 무상보육 확대 대상에 포함됩니다. 월 평균 7만원의 학부모 추가부담금이 줄어듭니다.',
      source: '교육부',
      sourceUrl: 'https://www.korea.kr/multi/visualNewsView.do?newsId=148960352',
    },
    {
      q: '2025년에는 어린이집 4세가 혜택을 받았나요?',
      a: '아니요, 2025년에는 만 5세만 대상이었습니다. 2026년 3월부터 만 4세까지 확대되었습니다.',
      source: '교육부',
      sourceUrl: 'https://www.korea.kr/multi/visualNewsView.do?newsId=148960352',
    },
    {
      q: '별도로 신청해야 하나요?',
      a: '아니요, 별도 신청 없이 기존에 납부하는 비용에서 자동으로 차감됩니다.',
      source: '교육부',
      sourceUrl: 'https://www.korea.kr/news/policyNewsView.do?newsId=148957493',
    },
    {
      q: '어린이집과 사립유치원 중 어디가 더 많이 지원받나요?',
      a: '사립유치원이 월 평균 11만원으로 가장 많고, 어린이집은 7만원, 공립유치원은 2만원입니다.',
      source: '교육부',
      sourceUrl: 'https://www.korea.kr/news/policyNewsView.do?newsId=148957493',
    },
    {
      q: '만 3세 어린이집도 언제 혜택을 받을 수 있나요?',
      a: '2026년 현재 만 3세는 대상에 포함되어 있지 않습니다. 향후 확대 계획은 교육부 발표를 확인하세요.',
      source: '교육부',
      sourceUrl: 'https://www.korea.kr/multi/visualNewsView.do?newsId=148960352',
    },
  ],
  sources: [
    { name: '교육부 (정책뉴스)', url: 'https://www.korea.kr/news/policyNewsView.do?newsId=148957493' },
    { name: '교육부 (카드뉴스)', url: 'https://www.korea.kr/multi/visualNewsView.do?newsId=148960352' },
  ],
};
