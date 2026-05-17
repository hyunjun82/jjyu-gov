import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          기존 장애 3급은 <strong>2019년 7월 이후 개편된 기준</strong>에 따라
          장애인연금 대상(심한 장애)에 포함될 수도, 포함되지 않을 수도 있습니다.
          3급 중 중복장애가 있으면 <strong>심한 장애(중증)</strong>로 분류되어 연금 대상이 되고,
          그렇지 않으면 <strong>심하지 않은 장애(경증)</strong>로 분류되어 장애수당 대상이 됩니다.
          정확한 판정은 거주지 <strong>행정복지센터</strong>에서 확인해야 합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "3급인데 장애인연금을 못 받는다고 했습니다. 이유가 뭔가요?"
        2019년 등급제 개편 때 3급 분류 방식이 바뀌었습니다. 개편 전·후 차이와 현재 기준을 정리했습니다.
      </p>

      <section className="detail-card" id="grade-reform">
        <h2 className="detail-card-head">3급 장애인인데 장애인연금을 못 받는다면 | 2019년 등급 개편 기준</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>개편 전 (2019.6 이전)</th><th>개편 후 (2019.7 이후)</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>1·2급: 중증<br />3급: 중증 (조건부)<br />4·5·6급: 경증</td>
                <td><strong>심한 장애 (구 1·2급 + 중복 3급)</strong><br /><strong>심하지 않은 장애 (구 3·4·5·6급 일부)</strong></td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>핵심:</strong> 기존 3급이라도 중복장애 여부에 따라 '심한 장애'(연금) 또는
            '심하지 않은 장애'(수당)로 나뉩니다. 자신의 현재 판정이 어느 분류인지는
            장애인등록증 또는 행정복지센터에서 확인하세요.
          </div>
        </div>
      </section>

      <section className="detail-card" id="criteria">
        <h2 className="detail-card-head">현재 기준으로 연금 대상 여부 확인 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>① 장애인등록증 확인:</strong> 장애인등록증에 "장애 정도가 심한 장애인"이라고
            적혀 있으면 연금 대상. "장애 정도가 심하지 않은 장애인"이면 수당 대상.
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>② 행정복지센터 상담:</strong> 거주지 읍·면·동 행정복지센터 방문 →
            장애인연금 신청 자격 확인 요청
          </div>
          <div className="info-box">
            <strong>③ 복지로 온라인:</strong> bokjiro.go.kr → 복지서비스 모의계산에서 장애인연금
            수급 가능 여부 1차 확인 가능
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="fallback">
        <h2 className="detail-card-head">연금 대상이 아닌 경우 — 장애수당과 다른 지원</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>제도</th><th>대상</th><th>월 금액</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>장애수당</td>
                <td>경증 + 기초수급자·차상위</td>
                <td>6만원</td>
              </tr>
              <tr>
                <td>장애아동수당</td>
                <td>만 18세 미만 + 수급·차상위</td>
                <td>최대 22만원</td>
              </tr>
              <tr>
                <td>장애인 활동지원</td>
                <td>만 6~65세 심한 장애인</td>
                <td>활동시간 지원</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            지급 금액, 장애수당 차이, 신청 방법 등<br />
            장애인연금 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/disability-pension" className="btn-cta">
            장애인연금 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 장애인연금3급기준SpokeContent: SpokeData = {
  h1: '3급 장애인인데 장애인연금을 못 받는다면 | 등급 기준과 대상자 확인',
  breadcrumb: '3급 기준',
  description:
    '2019년 7월 장애 등급제 개편으로 3급은 중복장애 여부에 따라 "심한 장애"(연금)와 "심하지 않은 장애"(수당)로 나뉩니다. 장애인등록증에 적힌 분류 또는 행정복지센터에서 정확한 수급 자격을 확인하세요.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '기존 3급 장애인인데 장애인연금을 받을 수 있나요?',
      a: '2019년 7월 이후 등급제 개편으로 3급은 중복장애 여부에 따라 "심한 장애"(연금 대상)와 "심하지 않은 장애"(수당 대상)로 나뉩니다. 장애인등록증 또는 행정복지센터에서 확인하세요.',
      source: '보건복지부 장애인연금 안내',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '장애인등록증에 어떻게 표시되어 있나요?',
      a: '"장애 정도가 심한 장애인"이면 연금 대상, "장애 정도가 심하지 않은 장애인"이면 장애수당 대상입니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '연금 대상이 아닌 경우 어떤 지원을 받을 수 있나요?',
      a: '경증 판정을 받은 경우 기초생활수급자·차상위계층이면 장애수당(월 6만원)을 받을 수 있습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '장애 판정을 다시 받을 수 있나요?',
      a: '장애 상태가 변화했다면 재심사 신청이 가능합니다. 거주지 행정복지센터에서 재심사 절차를 안내받을 수 있습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '장애인연금 신청 자격이 되는지 어떻게 확인하나요?',
      a: '복지로(bokjiro.go.kr) 복지서비스 모의계산에서 1차 확인하거나, 거주지 행정복지센터에서 직접 상담하면 됩니다.',
      source: '복지로',
      sourceUrl: 'https://www.bokjiro.go.kr',
    },
  ],
  sources: [
    { name: '보건복지부 장애인연금 안내', url: 'https://www.mohw.go.kr' },
    { name: '복지로', url: 'https://www.bokjiro.go.kr' },
  ],
};
