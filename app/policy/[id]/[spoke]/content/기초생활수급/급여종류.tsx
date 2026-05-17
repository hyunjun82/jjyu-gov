import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          기초생활수급 급여는 <strong>생계·의료·주거·교육</strong> 4가지입니다.
          각각 선정기준(소득인정액 한도)이 다르며,
          여러 급여를 <strong>동시에 중복 수령</strong>할 수 있습니다.
          소득인정액이 낮을수록 더 많은 급여를 받을 수 있습니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "생계급여랑 주거급여 둘 다 받을 수 있나요?" 동시에 받을 수 있습니다.
        급여별 기준과 어떤 급여에 해당하는지 확인하는 방법을 정리했습니다.
      </p>

      <section className="detail-card" id="types">
        <h2 className="detail-card-head">기초생활수급 생계·의료·주거·교육급여 중 어디에 해당하는지 확인하는 법</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>급여 종류</th><th>기준 중위소득</th><th>1인 기준</th><th>주요 내용</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>생계급여</strong></td>
                <td>32% 이하</td>
                <td>820,556원</td>
                <td>현금 지급 (선정기준 - 소득인정액)</td>
              </tr>
              <tr>
                <td><strong>의료급여</strong></td>
                <td>40% 이하</td>
                <td>1,025,695원</td>
                <td>의료비 본인부담금 대폭 경감</td>
              </tr>
              <tr>
                <td><strong>주거급여</strong></td>
                <td>48% 이하</td>
                <td>1,230,834원</td>
                <td>임차료 지원 또는 자가 수선비</td>
              </tr>
              <tr>
                <td><strong>교육급여</strong></td>
                <td>50% 이하</td>
                <td>1,282,119원</td>
                <td>교육활동지원비·교재비 지원</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            소득인정액이 낮을수록 더 많은 급여를 동시에 받을 수 있습니다.
            예를 들어 소득인정액이 생계급여 기준 이하면 4가지 모두 수령 가능합니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="detail">
        <h2 className="detail-card-head">급여별 지원 내용 상세</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>생계급여:</strong> 매월 현금 통장 입금. 지급액 = 선정기준 − 소득인정액.
            소득이 없으면 1인 기준 820,556원 전액 지급.
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>의료급여:</strong> 1종(근로능력 없는 수급자), 2종(근로능력 있는 수급자)으로 구분.
            병원 본인부담금이 일반인보다 크게 낮아집니다.
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>주거급여:</strong> 임차가구는 지역·가구원 수에 따른 임차료(기준임대료) 지원.
            자가가구는 주택 수선비 지원 (경보수·중보수·대보수).
          </div>
          <div className="info-box">
            <strong>교육급여:</strong> 초·중·고교생 자녀 대상 교육활동지원비.
            2026년 초등학생 487,000원·중학생 679,000원·고등학생 768,000원 (연 1회).
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="check">
        <h2 className="detail-card-head">내가 어떤 급여에 해당하는지 확인하는 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>① 복지로 모의계산:</strong> bokjiro.go.kr → 복지서비스 모의계산 →
            기초생활보장 → 소득·재산 입력 → 수급 가능 급여 확인
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>② 주민센터 상담:</strong> 거주지 행정복지센터 방문 →
            사회복지 담당자와 정확한 소득인정액 산정 후 해당 급여 확인
          </div>
          <div className="info-box">
            <strong>③ 상담센터:</strong> 보건복지상담센터 ☎129 (연중무휴) 전화 상담
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            소득 기준, 탈락 조건, 65세 이상 조건 등<br />
            기초생활수급 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/basic-livelihood-allowance" className="btn-cta">
            기초생활수급 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 기초수급급여종류SpokeContent: SpokeData = {
  h1: '기초생활수급 생계·의료·주거·교육급여 중 어디에 해당하는지 확인하는 법',
  breadcrumb: '급여종류',
  description:
    '기초생활수급 4가지 급여: 생계(32%), 의료(40%), 주거(48%), 교육(50%) 이하. 소득인정액이 낮을수록 더 많은 급여 동시 수령 가능. 복지로(bokjiro.go.kr) 모의계산 또는 주민센터에서 해당 급여 확인.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '생계급여와 주거급여를 동시에 받을 수 있나요?',
      a: '네. 소득인정액이 각 급여 선정기준 이하면 동시 수령이 가능합니다. 생계급여 대상(32%)이면 의료·주거·교육급여 기준(40·48·50%)도 충족하므로 4가지 모두 받을 수 있습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '의료급여와 건강보험은 어떻게 다른가요?',
      a: '의료급여는 수급자가 의료기관을 이용할 때 본인부담금을 크게 줄여주는 제도입니다. 일반 건강보험보다 본인부담 비율이 낮습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '주거급여는 자가 주택 소유자도 받을 수 있나요?',
      a: '네. 자가 가구는 임차료 대신 주택 수선비(경보수·중보수·대보수)를 지원받습니다. 임차 가구는 지역·가구원 수에 따른 기준임대료를 지원받습니다.',
      source: '국토교통부 주거급여 안내',
      sourceUrl: 'https://www.myhome.go.kr',
    },
    {
      q: '교육급여는 아이가 없으면 못 받나요?',
      a: '교육급여는 초·중·고교생 자녀가 있는 경우에만 해당됩니다. 자녀가 없다면 교육급여는 받지 못하지만 다른 급여(생계·의료·주거)는 수급 가능합니다.',
      source: '교육부 교육급여 안내',
      sourceUrl: 'https://www.moe.go.kr',
    },
    {
      q: '내가 어떤 급여를 받을 수 있는지 어떻게 확인하나요?',
      a: '복지로(bokjiro.go.kr) 복지서비스 모의계산에서 소득·재산을 입력해 1차 확인하거나, 거주지 주민센터 또는 보건복지상담센터(☎129)에서 상담하세요.',
      source: '복지로',
      sourceUrl: 'https://www.bokjiro.go.kr',
    },
  ],
  sources: [
    { name: '보건복지부 수급자선정기준', url: 'https://www.mohw.go.kr/menu.es?mid=a10708010300' },
    { name: '복지로', url: 'https://www.bokjiro.go.kr' },
  ],
};
