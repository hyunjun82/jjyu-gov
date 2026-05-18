import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          청년내일채움공제 신청 대상은 <strong>만 15~34세 청년</strong>으로,
          군복무 기간을 더하면 최대 만 39세까지 인정됩니다.
          기업은 <strong>고용보험 피보험자 5인 이상 50인 미만 제조업·건설업 중소기업</strong>이어야 합니다.
          정규직으로 신규 취업했고, 고용보험 가입 이력이 총 12개월 이하인 청년이 대상입니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        청년내일채움공제는 업종과 기업 규모 조건이 엄격합니다.
        "제조·건설업에 5인 이상 50인 미만 중소기업"이라는 두 축이 동시에 충족돼야 합니다.
        청년 본인 조건과 기업 조건을 순서대로 확인하세요.
      </p>

      <section className="detail-card" id="youth-condition">
        <h2 className="detail-card-head">청년 본인 자격 조건 4가지</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>기준</th><th>비고</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>나이</td>
                <td><strong>만 15~34세</strong></td>
                <td>군복무 기간(최대 6년) 차감 시 최대 만 39세까지 인정</td>
              </tr>
              <tr>
                <td>취업 형태</td>
                <td><strong>정규직 신규 취업자</strong></td>
                <td>계약직·파견직 불가</td>
              </tr>
              <tr>
                <td>고용보험 이력</td>
                <td><strong>총 12개월 이하</strong></td>
                <td>생애 최초 취업자 또는 이전 직장 합산 12개월 이하</td>
              </tr>
              <tr>
                <td>취업 시점</td>
                <td>지원 공고 기간 내 신규 취업</td>
                <td>재직 중 신청 불가, 취업 후 6개월 내 신청 필요</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>군복무 나이 특례:</strong> 병역 이행 기간(현역·산업기능요원·사회복무요원 등)은 참여 제한 연령에서 빠집니다.
            예를 들어 2년 복무했다면 만 36세까지 신청 가능합니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="company-condition">
        <h2 className="detail-card-head">기업 자격 조건 — 제조·건설업 5~50인 중소기업</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>기준</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>업종</td>
                <td><strong>제조업 또는 건설업</strong></td>
              </tr>
              <tr>
                <td>기업 규모</td>
                <td><strong>고용보험 피보험자 5인 이상 50인 미만</strong></td>
              </tr>
              <tr>
                <td>기업 형태</td>
                <td>중소기업기본법 상 중소기업</td>
              </tr>
              <tr>
                <td>임금 체불 여부</td>
                <td>임금체불 사업장 제외</td>
              </tr>
            </tbody>
          </table>
          <div className="warning-box" style={{ marginTop: 12 }}>
            <strong>제외 기업:</strong> 대기업·공공기관·50인 이상 기업, 서비스업·도소매업·유통업은 신청 불가합니다.
            업종 코드 기준으로 판단하므로, 실제 업무가 제조 관련이어도 업종 코드가 다르면 제외될 수 있습니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="ineligible">
        <h2 className="detail-card-head">신청할 수 없는 경우</h2>
        <div className="detail-card-body">
          <ul style={{ listStyle: 'disc', paddingLeft: 20, lineHeight: 2.2 }}>
            <li>기업 규모가 50인 이상이거나 5인 미만</li>
            <li>제조·건설업 이외 업종(서비스업, 유통업, IT업 등)</li>
            <li>정규직이 아닌 계약직·파견직·아르바이트</li>
            <li>고용보험 이전 가입 이력 합산 12개월 초과</li>
            <li>공공기관·준정부기관 취업자</li>
            <li>임금체불 기업 재직자</li>
          </ul>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            지원금액, 중도해지, 도약계좌 비교 등<br />
            청년내일채움공제 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/youth-tomorrow-filling" className="btn-cta">
            청년내일채움공제 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 청년내일채움공제신청자격제조건설업중소기업청년조건SpokeContent: SpokeData = {
  h1: '청년내일채움공제 신청자격, 제조·건설업 5~50인 중소기업 청년 조건',
  breadcrumb: '신청자격',
  description:
    '청년내일채움공제 신청자격을 상세히 안내합니다. 청년은 만 15~34세(군복무 최대 39세), 정규직 신규 취업자, 고용보험 이력 12개월 이하. 기업은 제조·건설업 고용보험 피보험자 5인 이상 50인 미만 중소기업이어야 합니다.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '만 35세인데 군복무 2년 했으면 신청 가능한가요?',
      a: '네, 가능합니다. 군복무 기간(현역 기준 18~24개월)을 차감하면 만 35세는 나이 요건을 충족합니다. 복무 확인서(병적증명서)를 첨부해야 합니다.',
      source: '고용노동부 청년내일채움공제 안내',
      sourceUrl: 'https://www.work24.go.kr',
    },
    {
      q: '이전 직장에서 6개월 일했는데 고용보험 이력이 있어도 되나요?',
      a: '고용보험 총 가입 이력이 12개월 이하라면 신청 가능합니다. 이전 직장 6개월은 12개월 이하이므로 조건을 충족합니다.',
      source: '고용노동부 청년내일채움공제 Q&A',
      sourceUrl: 'https://www.work24.go.kr',
    },
    {
      q: '피보험자 50인 이상 기업에 다니는데 신청할 수 없나요?',
      a: '네, 고용보험 피보험자 수가 50인 이상이면 청년내일채움공제 대상 기업이 아닙니다. 공고 기준 피보험자 수로 판단합니다.',
      source: '고용노동부 청년내일채움공제 기업 조건',
      sourceUrl: 'https://www.work24.go.kr',
    },
    {
      q: 'IT·서비스업 회사도 신청할 수 있나요?',
      a: '불가합니다. 청년내일채움공제는 제조업과 건설업만 신청할 수 있습니다. 업종코드로 판단하므로 실제 업무와 무관하게 사업자등록상 업종이 기준입니다.',
      source: '고용노동부 청년내일채움공제 업종 기준',
      sourceUrl: 'https://www.work24.go.kr',
    },
    {
      q: '계약직으로 입사했는데 나중에 정규직 전환되면 신청 가능한가요?',
      a: '정규직 전환 시점부터 신청 가능 여부를 확인해야 합니다. 다만 지원 공고 기간 내 정규직 취업이 기준이므로, 계약직으로 입사한 경우 소급 적용이 어려울 수 있습니다. 고용센터에 개별 확인하세요.',
      source: '고용노동부 청년내일채움공제 안내',
      sourceUrl: 'https://www.work24.go.kr',
    },
  ],
  sources: [
    { name: '고용노동부 청년내일채움공제 안내', url: 'https://www.work24.go.kr' },
    { name: '중소기업청년지원사업 공고', url: 'https://www.work24.go.kr/cm/c/d/0201/selectNoticeList.do' },
  ],
};
