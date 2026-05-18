import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      {/* 빠른 답변 */}
      <div className="answer-box">
        <p>
          한부모가족 지원 아동 연령은 기본 <strong>만 18세 미만</strong>까지입니다.
          단, 자녀가 <strong>고등학교에 재학 중</strong>이라면
          <strong>만 22세까지 연장</strong>해서 지원받을 수 있습니다.
          연장 시 아동양육비와 함께 입학금·수업료 등 <strong>학비 전액</strong>이 지원됩니다.
        </p>
      </div>

      {/* 서론 */}
      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        한부모가족 지원을 받다가 자녀가 18세가 넘으면 자동 종료되는 것인지 걱정되시는 분들이 많습니다.
        고등학교 재학 여부에 따라 22세까지 지원이 이어지므로, 자녀 나이와 학적 상태를 먼저 확인하세요.
      </p>

      {/* H2-1: 연령 연장 기준 */}
      <section className="detail-card" id="age-extension">
        <h2 className="detail-card-head">22세까지 연장되는 조건</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr>
                <th>구분</th>
                <th>기본</th>
                <th>연장</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>지원 연령</td>
                <td>만 18세 미만</td>
                <td><strong>만 22세 미만</strong></td>
              </tr>
              <tr>
                <td>연장 조건</td>
                <td>-</td>
                <td>고등학교 재학 중</td>
              </tr>
              <tr>
                <td>지원 종료 시점</td>
                <td>만 18세 생일이 속한 달</td>
                <td>고등학교 졸업(또는 만 22세)</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box">
            <strong>핵심 포인트:</strong> 만 18~21세 자녀가 고등학교를 재학 중이면
            주민센터에 재학 증빙(재학증명서)을 제출해 연장 신청을 해야 합니다.
            자동 연장이 아니므로 기간 내 신청이 중요합니다.
          </div>
        </div>
      </section>

      {/* H2-2: 지원 항목 */}
      <section className="detail-card" id="support-items">
        <h2 className="detail-card-head">22세 연장 시 지원되는 항목</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr>
                <th>지원 항목</th>
                <th>내용</th>
                <th>비고</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>아동양육비</td>
                <td>월 23만원(중위소득 65% 이하)</td>
                <td>소득 기준 충족 시</td>
              </tr>
              <tr>
                <td>고등학교 입학금</td>
                <td>전액 지원</td>
                <td>공·사립 모두 해당</td>
              </tr>
              <tr>
                <td>고등학교 수업료</td>
                <td>전액 지원</td>
                <td>분기별 납입 후 환급 또는 면제</td>
              </tr>
              <tr>
                <td>아동교육지원비(학용품비)</td>
                <td>자녀 1인당 연 10만원</td>
                <td>초등학생·중학생·고등학생 자녀</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box">
            <strong>학비 지원 신청:</strong> 고등학교 학비는 학교에서 교육청으로
            신청하는 경우도 있으므로, 학교 행정실에도 한부모가족 여부를 알려두면
            좋습니다. 중복 신청 방지를 위해 복지로와 학교 양쪽 확인이 필요합니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      {/* H2-3: 지원 종료 사유 */}
      <section className="detail-card" id="termination">
        <h2 className="detail-card-head">22세 이전에도 지원이 끊기는 경우</h2>
        <div className="detail-card-body">
          <p style={{ fontSize: 15, lineHeight: 1.8, margin: '0 0 16px' }}>
            고등학교를 재학 중이더라도 아래 사유가 발생하면 지원이 중단됩니다.
          </p>
          <table className="compare-table">
            <thead>
              <tr>
                <th>종료 사유</th>
                <th>설명</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>만 22세 초과</td>
                <td>재학 중이어도 만 22세 생일이 속한 달에 종료</td>
              </tr>
              <tr>
                <td>고등학교 자퇴·졸업</td>
                <td>학적 상실 즉시 학비 지원 종료</td>
              </tr>
              <tr>
                <td>소득 초과</td>
                <td>가구 소득인정액이 기준 초과 시 아동양육비 종료</td>
              </tr>
              <tr>
                <td>혼인</td>
                <td>자녀 본인이 혼인하면 지원 대상에서 제외</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box">
            <strong>검정고시 준비생 주의:</strong> 학교 밖 청소년으로 검정고시를
            준비 중인 경우는 고등학교 재학생이 아니므로 22세 연장 대상에 해당하지 않습니다.
            이 경우 청소년 한부모 지원(만 24세 이하 부 또는 모)으로 별도 확인이 필요합니다.
          </div>
        </div>
      </section>

      {/* H2-4: 신청 방법 */}
      <section className="detail-card" id="how-to-apply">
        <h2 className="detail-card-head">신청 방법과 필요 서류</h2>
        <div className="detail-card-body">
          <p style={{ fontSize: 15, lineHeight: 1.8, margin: '0 0 16px' }}>
            22세 연장 지원은 자동 적용이 아니므로 반드시 별도 신청이 필요합니다.
          </p>
          <ol style={{ listStyle: 'decimal', paddingLeft: 20, lineHeight: 2.2 }}>
            <li>
              <strong>방문 신청:</strong> 거주지 읍·면·동 주민센터(행정복지센터)
            </li>
            <li>
              <strong>온라인 신청:</strong> 복지로(bokjiro.go.kr) → 서비스 신청 → 복지급여신청
            </li>
            <li>
              <strong>정부24:</strong> 정부24(gov.kr)에서 &quot;한부모가족 지원&quot; 검색 후 신청
            </li>
          </ol>
          <div className="info-box">
            <strong>필요 서류:</strong> 사회보장급여 신청서, 재학증명서(고등학교 발급),
            소득·재산 증빙 서류, 가족관계증명서. 주민센터 방문 시 담당자가 서류 안내를 도와드립니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      {/* CTA */}
      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            한부모가족 지원 전체 항목(아동양육비·청소년 한부모·자립 지원 등)을 한 번에 확인하세요.
          </p>
          <a href="/policy/low-income-single-parent" className="btn-cta">한부모가족지원 전체 정보 보기 →</a>
        </div>
      </section>
    </>
  );
}

export const 한부모가족지원고등학교학비지원22세연장조건SpokeContent: SpokeData = {
  h1: '한부모가족 고등학교 학비지원 22세까지 연장 조건',
  breadcrumb: '고등학교학비지원22세연장조건',
  description:
    '한부모가족 지원 아동 연령은 기본 만 18세 미만이지만, 고등학교 재학 중이면 만 22세까지 연장됩니다. 연장 조건과 지원 항목(입학금·수업료 전액), 신청 방법을 정리했습니다.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '고등학교 재학 중인 19세 자녀도 한부모 지원을 받을 수 있나요?',
      a: '네, 가능합니다. 만 18세 이상이더라도 고등학교에 재학 중이면 만 22세까지 아동양육비와 학비 지원을 받을 수 있습니다. 주민센터에 재학증명서를 제출해 연장 신청하세요.',
      source: '여성가족부 한부모가족 지원사업 안내',
      sourceUrl: 'https://www.mogef.go.kr',
    },
    {
      q: '고등학교 자퇴하면 학비 지원이 바로 끊기나요?',
      a: '네, 고등학교 학적이 상실되면 학비 지원은 즉시 종료됩니다. 다만 아동양육비는 만 18세 미만이라면 계속 지급될 수 있으니 담당 주민센터에 문의하세요.',
      source: '여성가족부 한부모가족 지원사업 안내',
      sourceUrl: 'https://www.mogef.go.kr',
    },
    {
      q: '사립고등학교도 학비 지원이 되나요?',
      a: '네, 공립과 사립 모두 입학금·수업료 전액 지원 대상입니다. 다만 지원 방식이 학교마다 다를 수 있으니 학교 행정실에 한부모가족 여부를 알려두세요.',
      source: '여성가족부 한부모가족 지원사업 안내',
      sourceUrl: 'https://www.mogef.go.kr',
    },
    {
      q: '22세 연장 지원은 자동으로 되나요?',
      a: '자동이 아닙니다. 만 18세가 지나면 주민센터 또는 복지로에 재학증명서를 제출하고 별도로 연장 신청을 해야 합니다. 신청하지 않으면 지원이 중단됩니다.',
      source: '복지로 한부모가족 지원 안내',
      sourceUrl: 'https://www.bokjiro.go.kr',
    },
    {
      q: '청소년 한부모(부 또는 모가 24세 이하)와 일반 한부모 지원은 다른가요?',
      a: '네, 청소년 한부모(부 또는 모 24세 이하)는 추가 지원이 있습니다. 아동양육비 외에 자립지원촉진수당, 검정고시 학습비 등 별도 항목이 있으니 여성가족부 또는 주민센터에서 확인하세요.',
      source: '여성가족부 한부모가족 지원사업 안내',
      sourceUrl: 'https://www.mogef.go.kr',
    },
  ],
  sources: [
    { name: '여성가족부 한부모가족 지원사업 안내', url: 'https://www.mogef.go.kr' },
    { name: '복지로 한부모가족 지원 서비스 안내', url: 'https://www.bokjiro.go.kr' },
  ],
};
