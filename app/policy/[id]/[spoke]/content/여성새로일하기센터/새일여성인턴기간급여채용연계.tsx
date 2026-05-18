import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      {/* 빠른 답변 */}
      <div className="answer-box">
        <p>
          새일여성인턴 프로그램은 경력단절여성을 채용한 기업에{' '}
          <strong>월 급여의 80%(최대 월 80만원)</strong>를 3개월간 지원합니다.
          인턴 종료 후 정규직(상용직) 전환 후 <strong>6개월 이상 근속</strong>하면
          인턴에게 <strong>60만원</strong>, 기업에 <strong>80만원</strong>이 추가 지급됩니다.
          12개월 이상 근속 시 기업에 <strong>80만원 추가</strong> 지급됩니다.
        </p>
      </div>

      {/* 서론 */}
      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        새일여성인턴은 경력단절여성에게는 실무 경험을, 기업에는 인건비 부담 절감을 제공합니다.
        아래에서 인턴 기간, 급여 지원 방식, 정규직 전환 조건을 정확히 확인하세요.
      </p>

      {/* H2-1: 지원 구조 */}
      <section className="detail-card" id="structure">
        <h2 className="detail-card-head">새일여성인턴 지원 구조</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr>
                <th>구분</th>
                <th>내용</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>인턴 기간</td>
                <td><strong>3개월</strong></td>
              </tr>
              <tr>
                <td>인건비 지원</td>
                <td>월 급여의 <strong>80%</strong>, 최대 월 <strong>80만원</strong></td>
              </tr>
              <tr>
                <td>지원 주체</td>
                <td>고용노동부 → 새일센터 경유 기업 지급</td>
              </tr>
              <tr>
                <td>고용유지 장려금 (인턴)</td>
                <td>6개월 이상 근속 시 <strong>60만원</strong></td>
              </tr>
              <tr>
                <td>고용유지 장려금 (기업)</td>
                <td>6개월 근속 시 <strong>80만원</strong> + 12개월 근속 시 <strong>80만원</strong></td>
              </tr>
              <tr>
                <td>참여 기업 조건</td>
                <td>5인 이상 사업장, 4대보험 가입</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>1인 총액 460만원:</strong> 기업 인턴채용지원금 240만원(월 80만원×3개월) + 기업 고용유지 장려금 160만원(6개월 80만원+12개월 80만원) + 인턴 장려금 60만원 = 총 460만원.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      {/* H2-2: 신청 절차 */}
      <section className="detail-card" id="process">
        <h2 className="detail-card-head">기업·근로자별 신청 절차</h2>
        <div className="detail-card-body">
          <div className="info-box">
            <strong>기업 신청 절차</strong>
            <ol style={{ listStyle: 'decimal', paddingLeft: 20, lineHeight: 2.2, marginTop: 8 }}>
              <li>가까운 새일센터에 인턴 채용 의뢰</li>
              <li>센터가 경력단절여성 후보자 추천</li>
              <li>면접 후 인턴 협약서 체결</li>
              <li>인건비 지원금 월별 청구</li>
            </ol>
          </div>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>근로자(경력단절여성) 신청 절차</strong>
            <ol style={{ listStyle: 'decimal', paddingLeft: 20, lineHeight: 2.2, marginTop: 8 }}>
              <li>가까운 새일센터 방문 또는 홈페이지 상담 신청</li>
              <li>취업 상담 및 인턴 참여 의향 확인</li>
              <li>구인 기업 매칭 및 면접</li>
              <li>3개월 인턴 근무 후 정규직 전환 협의</li>
            </ol>
          </div>
          <table className="compare-table" style={{ marginTop: 16 }}>
            <thead>
              <tr>
                <th>단계</th>
                <th>기업</th>
                <th>근로자</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>사전 준비</td><td>새일센터 의뢰</td><td>센터 상담 등록</td></tr>
              <tr><td>매칭</td><td>후보자 면접</td><td>기업 면접</td></tr>
              <tr><td>인턴 기간</td><td>인건비 80% 수령</td><td>3개월 실무</td></tr>
              <tr><td>전환 후</td><td>인턴 60만원+기업 80만원 지원</td><td>정규직 근속</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      {/* CTA */}
      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            새일센터 직업훈련, W-UP 클래스, 센터 찾기 등 전체 정보를 확인하세요.
          </p>
          <a href="/policy/women-restart-center" className="btn-cta">
            여성새로일하기센터 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 여성새로일하기센터새일여성인턴기간급여채용연계SpokeContent: SpokeData = {
  h1: '새일여성인턴 2026 인턴 기간·급여·채용 연계 조건',
  breadcrumb: '새일여성인턴기간급여채용연계',
  description:
    '새일여성인턴 프로그램의 인턴 기간(3개월), 인건비 지원(월 급여 80%, 최대 월 80만원), 정규직 전환 후 고용유지 장려금(인턴 60만원+기업 최대 160만원) 조건을 안내합니다.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '인턴 기간 3개월 동안 급여는 얼마나 받나요?',
      a: '기업이 근로자에게 지급하는 급여는 협의에 따라 다릅니다. 정부는 기업에 월 급여의 80%(최대 월 80만원)를 지원합니다. 근로자 급여는 최저임금 이상이어야 합니다.',
      source: '여성가족부 새일여성인턴 안내',
      sourceUrl: 'https://www.mogef.go.kr',
    },
    {
      q: '인턴 3개월 후 정규직으로 안 전환되면 어떻게 되나요?',
      a: '정규직 전환이 의무는 아닙니다. 정규직(상용직) 전환 후 6개월 근속 시 인턴에게 60만원, 기업에 80만원이 지급되고, 12개월 근속 시 기업에 80만원이 추가 지급됩니다. 전환이 안 되면 인턴 기간 지원금(월 80만원×3개월)만 지급됩니다.',
      source: '여성가족부 새일여성인턴 안내',
      sourceUrl: 'https://www.mogef.go.kr',
    },
    {
      q: '5인 미만 사업장은 참여할 수 없나요?',
      a: '기본적으로 5인 이상 사업장, 4대보험 가입 기업이 참여 조건입니다. 5인 미만 사업장의 경우 가까운 새일센터에 문의하여 예외 적용 가능 여부를 확인하세요.',
      source: '여성가족부 새일여성인턴 안내',
      sourceUrl: 'https://www.mogef.go.kr',
    },
    {
      q: '경력단절 기간에 제한이 있나요?',
      a: '새일여성인턴은 경력단절여성이라면 단절 기간에 상관없이 참여할 수 있습니다. 임신·출산·육아 외 가족돌봄으로 인한 경력단절도 포함됩니다.',
      source: '여성가족부 새일여성인턴 안내',
      sourceUrl: 'https://www.mogef.go.kr',
    },
    {
      q: '같은 기업에서 동일인을 반복해서 인턴으로 쓸 수 있나요?',
      a: '동일 근로자에 대한 반복 지원은 허용되지 않습니다. 인턴 참여 이력이 있는 근로자를 같은 기업에서 재신청하면 지원금이 지급되지 않습니다.',
      source: '여성가족부 새일여성인턴 안내',
      sourceUrl: 'https://www.mogef.go.kr',
    },
  ],
  sources: [
    { name: '여성가족부 새일여성인턴 안내', url: 'https://www.mogef.go.kr' },
    { name: '새일센터 홈페이지', url: 'https://saeil.mogef.go.kr' },
  ],
};
