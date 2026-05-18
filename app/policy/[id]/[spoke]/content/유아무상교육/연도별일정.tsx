import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          만 3세는 2026년 무상보육·교육 확대에 포함되지 않습니다.
          2026년 3월 기준 대상은 <strong>만 4~5세</strong>입니다.
          교육부는 단계적으로 연령을 확대하는 방침이나,
          만 3세 적용 시기는 아직 공식 발표되지 않았습니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "만 3세는 왜 2026년 무상보육에서 빠졌나요? 언제 혜택을 받나요?"
        연도별 확대 일정을 정리했습니다.
      </p>

      <section className="detail-card" id="timeline">
        <h2 className="detail-card-head">유아 무상교육·보육 연도별 확대 일정</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>시행 시기</th><th>대상 연령</th><th>내용</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>2025년 7월</td>
                <td><strong>만 5세</strong></td>
                <td>어린이집·유치원 5세 학부모 추가부담금 첫 지원</td>
              </tr>
              <tr>
                <td><strong>2026년 3월</strong></td>
                <td><strong>만 4~5세</strong></td>
                <td>만 4세까지 확대. 지원 인원 50.3만 명, 예산 4,703억 원</td>
              </tr>
              <tr>
                <td>추후 발표</td>
                <td>만 3세</td>
                <td>공식 시행 시기 미발표</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="why-not-3">
        <h2 className="detail-card-head">만 3세가 2026년에 포함되지 않은 이유</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            교육부는 예산과 기관 준비 상황을 고려해 <strong>단계적으로</strong> 지원 연령을 확대하는 방식을 선택했습니다.
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            2025년 5세 → 2026년 4세 순서로 확대되었으며, 만 3세는 이후 단계에서 검토 예정입니다.
          </div>
          <div className="info-box">
            지원 예산이 2025년 1,289억 원에서 2026년 4,703억 원으로 3.6배 늘었음에도 만 3세까지 한 번에 포함하기 어렵다는 판단이 있었습니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="current">
        <h2 className="detail-card-head">현재 만 3세에게 적용되는 보육 지원</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>누리과정 보육료 지원:</strong> 만 3~5세는 누리과정을 통해 보육료·교육비를 정부가 어린이집·유치원에 지급합니다. (이 지원은 별개로 계속 유지)
          </div>
          <div className="info-box">
            2026 무상보육·교육은 누리과정 위의 추가 학부모 부담 비용을 경감하는 제도입니다. 만 3세는 현재 추가 경감 없이 누리과정만 적용됩니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            기관별 지원 금액, 신청 방법 등<br />
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

export const 유아무상교육연도별일정SpokeContent: SpokeData = {
  h1: '만 3세는 왜 2026 무상보육에서 빠졌나, 연도별 확대 일정과 적용 시기',
  breadcrumb: '연도별일정',
  description:
    '2025년 7월 만 5세 시작 → 2026년 3월 만 4~5세 확대. 만 3세는 공식 시행 시기 미발표. 예산 1,289억→4,703억 3.6배 증가. 만 3세는 현재 누리과정만 적용.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '만 3세는 언제 무상보육 혜택을 받을 수 있나요?',
      a: '교육부가 아직 공식 시행 시기를 발표하지 않았습니다. 향후 교육부 발표를 확인하세요.',
      source: '교육부',
      sourceUrl: 'https://www.korea.kr/multi/visualNewsView.do?newsId=148960352',
    },
    {
      q: '2026년 3월부터 혜택을 받는 나이는 정확히 어떻게 되나요?',
      a: '2026년 3월 기준 만 4세(2021년생)와 만 5세(2020년생) 유아가 어린이집·유치원에 다니는 경우 대상입니다.',
      source: '교육부',
      sourceUrl: 'https://www.korea.kr/multi/visualNewsView.do?newsId=148960352',
    },
    {
      q: '만 3세는 현재 보육 지원이 전혀 없나요?',
      a: '아니요, 누리과정 보육료 지원은 만 3~5세에 계속 적용됩니다. 2026 무상보육은 누리과정 위의 추가 학부모 부담을 경감하는 것으로, 만 3세는 추가 경감 없이 누리과정만 유지됩니다.',
      source: '교육부',
      sourceUrl: 'https://www.korea.kr/news/policyNewsView.do?newsId=148957493',
    },
    {
      q: '왜 단계적으로 확대하나요?',
      a: '예산과 기관 준비 상황을 고려해 단계적으로 연령을 확대하는 방식을 택했습니다. 2025년 5세 → 2026년 4세 순으로 진행되었습니다.',
      source: '교육부',
      sourceUrl: 'https://www.korea.kr/multi/visualNewsView.do?newsId=148960352',
    },
    {
      q: '2026년 지원 인원과 예산은 얼마나 되나요?',
      a: '지원 인원은 50.3만 명(2025년 27.8만 명 대비 확대), 예산은 4,703억 원(2025년 1,289억 원의 3.6배)입니다.',
      source: '교육부',
      sourceUrl: 'https://www.korea.kr/multi/visualNewsView.do?newsId=148960352',
    },
  ],
  sources: [
    { name: '교육부 (정책뉴스)', url: 'https://www.korea.kr/news/policyNewsView.do?newsId=148957493' },
    { name: '교육부 (카드뉴스)', url: 'https://www.korea.kr/multi/visualNewsView.do?newsId=148960352' },
  ],
};
