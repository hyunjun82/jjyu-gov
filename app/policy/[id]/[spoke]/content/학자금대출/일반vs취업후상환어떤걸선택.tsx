import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          일반 학자금대출과 취업후상환 학자금대출 모두 <strong>금리는 연 1.7%</strong>로 동일합니다.
          가장 큰 차이는 <strong>상환 시작 시점</strong>입니다.
          일반 대출은 <strong>졸업 즉시 상환 시작</strong>, 취업후상환은
          <strong>취업 후 소득 2,851만원 초과 시</strong>부터 상환이 시작됩니다.
          두 가지 병용도 가능하므로 상황에 맞게 선택하세요.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        졸업 후 빠르게 취업하고 소득이 안정적이라면 일반 학자금대출이 총 이자 부담 면에서 유리할 수 있습니다.
        반면 취업 시기가 불확실하거나 대학원 진학 등 졸업 후 계획이 유동적이라면 취업후상환이 안전망 역할을 합니다.
        두 유형을 동시에 이용할 경우 대출 한도가 각각 적용됩니다.
      </p>

      <section className="detail-card" id="compare-table">
        <h2 className="detail-card-head">일반 학자금대출 vs 취업후상환 학자금대출 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>일반 학자금대출</th><th>취업후상환 학자금대출</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>금리</strong></td>
                <td>연 1.7%</td>
                <td>연 1.7%</td>
              </tr>
              <tr>
                <td><strong>상환 시작</strong></td>
                <td>졸업·중퇴 후 즉시</td>
                <td>취업 후 소득 2,851만원 초과 시</td>
              </tr>
              <tr>
                <td><strong>상환 방식</strong></td>
                <td>최장 10년 분할 상환</td>
                <td>소득비례 상환(원천징수)</td>
              </tr>
              <tr>
                <td><strong>소득 요건</strong></td>
                <td>8구간 이하(기초~중위소득)</td>
                <td>2026년부터 폐지(소득 무관)</td>
              </tr>
              <tr>
                <td><strong>미취업 시</strong></td>
                <td>상환 유예 신청 가능</td>
                <td>상환 의무 없음(자동 유예)</td>
              </tr>
              <tr>
                <td><strong>병용 가능</strong></td>
                <td colSpan={2}>가능 (각각 한도 별도 적용)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="choice-guide">
        <h2 className="detail-card-head">상황별 선택 가이드</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>졸업 후 빠른 취업 예상:</strong> 일반 학자금대출 선택. 상환 기간이 명확하고, 취업 후 소득으로 빠르게 상환하면 총 이자 부담이 줄어듭니다.
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>취업 시기 불확실·대학원 진학 예정:</strong> 취업후상환 선택. 취업 전까지 상환 의무가 없어 재정 부담이 없습니다.
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>등록금이 많이 부족한 경우:</strong> 두 유형 병용. 일반(등록금) + 취업후상환(생활비) 조합으로 한도를 최대로 활용할 수 있습니다.
          </div>
          <div className="info-box">
            <strong>주의:</strong> 취업후상환은 취업 후 회사에서 원천징수 방식으로 상환되므로 별도 관리가 필요 없지만, 상환액이 급여에서 자동 차감됩니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            생활비 대출 한도, 신청 방법, 상환 기준까지<br />
            학자금대출 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/general-student-loan" className="btn-cta">학자금대출 전체 정보 보기 →</a>
        </div>
      </section>
    </>
  );
}

export const 학자금대출일반vs취업후상환어떤걸선택SpokeContent: SpokeData = {
  h1: '일반 학자금 vs 취업후상환 학자금대출, 어떤 걸 선택해야 하나',
  breadcrumb: '일반vs취업후상환어떤걸선택',
  description:
    '일반 학자금대출(졸업 즉시 상환, 연 1.7%, 최장 10년)과 취업후상환(소득 2,851만원 초과 시 상환, 연 1.7%)을 비교. 상황별 선택 기준과 병용 방법 안내.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '일반과 취업후상환을 동시에 받을 수 있나요?',
      a: '네, 병용이 가능합니다. 일반 학자금대출과 취업후상환 학자금대출은 한도가 각각 별도로 적용되므로 두 가지를 동시에 이용할 수 있습니다. 다만 총 대출 한도 범위 내에서 신청해야 합니다.',
      source: '한국장학재단',
      sourceUrl: 'https://www.kosaf.go.kr',
    },
    {
      q: '일반 학자금대출을 받았는데 취업이 늦어지면 어떻게 되나요?',
      a: '일반 학자금대출은 졸업 후 바로 상환이 시작되지만, 취업 준비 중이거나 소득이 없는 경우 상환 유예를 신청할 수 있습니다. 유예 기간에도 이자는 발생합니다.',
      source: '한국장학재단',
      sourceUrl: 'https://www.kosaf.go.kr',
    },
    {
      q: '취업후상환 대출의 소득 2,851만원 기준은 세전인가요?',
      a: '연소득 2,851만원은 세전 총급여 기준입니다. 연말정산 또는 종합소득세 신고 자료를 바탕으로 국세청이 소득을 확인하고 상환 개시 여부를 결정합니다.',
      source: '한국장학재단',
      sourceUrl: 'https://www.kosaf.go.kr',
    },
    {
      q: '재학 중에 두 유형을 바꿀 수 있나요?',
      a: '학기별로 대출 유형을 변경해 신청할 수 있습니다. 이전 학기에 일반 대출을 받았더라도 다음 학기에 취업후상환으로 신청이 가능합니다.',
      source: '한국장학재단',
      sourceUrl: 'https://www.kosaf.go.kr',
    },
    {
      q: '취업후상환 대출은 공무원·자영업자도 상환 의무가 생기나요?',
      a: '네. 공무원, 자영업자 등 모든 소득 형태에 대해 연소득이 2,851만원을 초과하면 상환 의무가 발생합니다. 근로소득 외 사업소득·기타소득도 합산됩니다.',
      source: '한국장학재단',
      sourceUrl: 'https://www.kosaf.go.kr',
    },
  ],
  sources: [
    { name: '한국장학재단 학자금대출', url: 'https://www.kosaf.go.kr' },
    { name: '교육부 학자금 지원 안내', url: 'https://www.moe.go.kr' },
  ],
};
