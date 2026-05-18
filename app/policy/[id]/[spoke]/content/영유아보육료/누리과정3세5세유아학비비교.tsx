import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          만 3~5세는 영유아보육료가 아닌 <strong>누리과정</strong>으로 지원됩니다.
          어린이집과 유치원 모두에 적용되는 공통 교육과정으로,
          부모 추가 부담 없이 이용할 수 있습니다.
          2026년부터 4~5세 무상교육·보육이 확대되어 학부모 부담이 더욱 줄어들었습니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        누리과정은 어린이집(보건복지부 소관)과 유치원(교육부 소관) 공통 교육과정입니다.
        부모는 자녀를 어린이집과 유치원 중 원하는 곳에 보낼 수 있으며, 모두 누리과정 지원을 받습니다.
      </p>

      <section className="detail-card" id="compare">
        <h2 className="detail-card-head">누리과정 vs 영유아보육료 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>영유아보육료 (0~2세)</th><th>누리과정 (3~5세)</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>대상 연령</strong></td><td>만 0~2세</td><td>만 3~5세</td></tr>
              <tr><td><strong>이용 기관</strong></td><td>어린이집</td><td>어린이집 + 유치원 모두</td></tr>
              <tr><td><strong>주관 부처</strong></td><td>보건복지부</td><td>교육부·보건복지부 공동</td></tr>
              <tr><td><strong>소득 조건</strong></td><td>없음</td><td>없음</td></tr>
              <tr><td><strong>부모 부담</strong></td><td>식대·특활 일부 자부담</td><td>식대·특활 일부 자부담</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="childcare-vs-kindergarten">
        <h2 className="detail-card-head">어린이집 vs 유치원 선택 시 차이</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>어린이집</th><th>유치원</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>운영 시간</strong></td><td>종일 가능 (7:30~19:30)</td><td>오전반 + 돌봄 (지역별 상이)</td></tr>
              <tr><td><strong>담당 부처</strong></td><td>보건복지부</td><td>교육부</td></tr>
              <tr><td><strong>누리과정 지원</strong></td><td>적용</td><td>적용</td></tr>
              <tr><td><strong>추가 비용</strong></td><td>식대·특별활동</td><td>방과후 비용·급식비</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="fee">
        <h2 className="detail-card-head">누리과정 자부담 항목</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>기본 보육·교육:</strong> 정부 전액 지원 (부모 부담 없음)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>급식비:</strong> 어린이집·유치원별 자부담 (지역별 지원 차이)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>방과후 과정:</strong> 유치원 방과후 과정은 별도 지원 (저렴)
          </div>
          <div className="info-box">
            <strong>특별활동:</strong> 선택 사항, 별도 자부담
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            연령별 금액, 신청 방법, 가정양육수당 비교까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/infant-childcare-fee" className="btn-cta">
            영유아보육료 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 영유아보육료누리과정3세5세유아학비비교SpokeContent: SpokeData = {
  h1: '만 3~5세 누리과정, 어린이집·유치원 모두 무료 — 영유아보육료와 차이',
  breadcrumb: '누리과정3세5세유아학비비교',
  description:
    '만 3~5세 누리과정: 어린이집·유치원 모두 소득 무관 적용. 영유아보육료(0~2세)와 달리 기관 선택 자유. 기본 보육·교육 정부 전액 지원, 식대·특별활동은 자부담. 2026년 4~5세 무상 확대.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '만 3세가 되면 어린이집에서 유치원으로 이동해야 하나요?',
      a: '아닙니다. 만 3~5세도 어린이집을 계속 이용할 수 있습니다. 어린이집과 유치원 모두 누리과정 지원을 받으므로 어느 곳을 이용해도 됩니다. 종일 보육이 필요하면 어린이집이 유리할 수 있습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '유치원은 오전에만 운영하나요?',
      a: '유치원 기본 교육과정은 오전 위주이지만 방과후 과정(방과후반)이 있어 늦게까지 이용할 수 있습니다. 방과후 비용도 별도 지원이 있어 부담이 크지 않습니다. 개별 유치원에서 확인하세요.',
      source: '교육부',
      sourceUrl: 'https://www.moe.go.kr',
    },
    {
      q: '사립 유치원도 누리과정 지원을 받나요?',
      a: '네. 공·사립 유치원 모두 누리과정 지원을 받습니다. 다만 사립 유치원은 공립보다 추가 비용(특별활동·재료비 등)이 더 높을 수 있으니 입소 전 확인하세요.',
      source: '교육부',
      sourceUrl: 'https://www.moe.go.kr',
    },
    {
      q: '누리과정 어린이집은 따로 신청해야 하나요?',
      a: '만 3세가 되면 보육료 지원이 자동으로 누리과정으로 전환됩니다. 별도 신청 없이 자동 전환되므로 만 2세 때 보육료를 받고 있었다면 따로 신청하지 않아도 됩니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '초등학교 취학 직전 해 유아는 더 지원받나요?',
      a: '2026년부터 4~5세 무상 교육·보육이 확대되었습니다. 취학 직전 유아를 위한 추가 지원이 있을 수 있으니 교육부 누리집(moe.go.kr)에서 최신 내용을 확인하세요.',
      source: '교육부',
      sourceUrl: 'https://www.moe.go.kr',
    },
  ],
  sources: [
    { name: '보건복지부 영유아보육료', url: 'https://www.mohw.go.kr' },
    { name: '교육부 누리과정', url: 'https://www.moe.go.kr' },
  ],
};
