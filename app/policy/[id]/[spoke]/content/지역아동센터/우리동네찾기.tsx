import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          <strong>icareinfo.go.kr</strong> 또는 복지로(bokjiro.go.kr)에서 지역·지도로 검색할 수 있습니다.
          전국 <strong>4,400개</strong> 센터 중 가장 가까운 곳을 찾은 뒤 해당 센터에 직접 신청하거나
          주민센터를 통해 신청하면 됩니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "지역아동센터가 어디에 있는지 모르겠어요. 어떻게 찾고 신청하나요?"
        위치 찾는 방법과 신청 조건을 정리했습니다.
      </p>

      <section className="detail-card" id="find">
        <h2 className="detail-card-head">지역아동센터 위치 찾는 방법</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>방법</th><th>경로</th><th>특징</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>온라인 지도 검색</strong></td>
                <td>icareinfo.go.kr → 지역아동센터 찾기</td>
                <td>시도·시군구별 지도 검색</td>
              </tr>
              <tr>
                <td><strong>복지로</strong></td>
                <td>bokjiro.go.kr → 서비스 신청 → 아동</td>
                <td>온라인 신청 연계 가능</td>
              </tr>
              <tr>
                <td><strong>주민센터</strong></td>
                <td>거주지 읍·면·동 주민센터 방문</td>
                <td>서류 지참 후 신청</td>
              </tr>
              <tr>
                <td><strong>보건복지상담센터</strong></td>
                <td>☎ 129</td>
                <td>센터 위치·문의 전화 안내</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="condition">
        <h2 className="detail-card-head">이용 신청 조건</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>기본 대상:</strong> 만 18세 미만 아동이면 누구나 신청할 수 있습니다.
            단, 정원이 있어 우선순위에 따라 배정됩니다.
          </div>
          <table className="compare-table" style={{ marginBottom: 12 }}>
            <thead>
              <tr><th>우선순위</th><th>대상</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1순위</strong></td>
                <td>기초생활수급 가구, 차상위계층 아동</td>
              </tr>
              <tr>
                <td><strong>2순위</strong></td>
                <td>한부모·조손가족, 다문화가족 아동</td>
              </tr>
              <tr>
                <td><strong>3순위</strong></td>
                <td>다자녀 가구, 맞벌이 가구 아동</td>
              </tr>
              <tr>
                <td><strong>4순위</strong></td>
                <td>그 외 돌봄이 필요한 아동</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box">
            <strong>이용료:</strong> 저소득 가구는 무료, 일반 가구는 월 0~3만원 수준입니다.
            센터별로 차이가 있으므로 해당 센터에 문의하세요.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="apply">
        <h2 className="detail-card-head">신청 절차</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>① 센터 찾기</strong> → icareinfo.go.kr 또는 복지로에서 가까운 센터 확인
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>② 서류 준비</strong> → 신청서, 건강보험료 납부 확인서 (우선 대상은 수급자 증명서 추가)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>③ 신청</strong> → 해당 센터 방문 또는 주민센터 경유 신청
          </div>
          <div className="info-box">
            <strong>④ 배정</strong> → 우선순위 심사 후 이용 개시
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            이용료, 프로그램, 운영 시간 등<br />
            지역아동센터 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/community-child-center" className="btn-cta">
            지역아동센터 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 지역아동센터우리동네찾기SpokeContent: SpokeData = {
  h1: '우리 동네 지역아동센터 찾는 방법과 이용 신청 조건',
  breadcrumb: '우리동네찾기',
  description:
    '지역아동센터 위치는 icareinfo.go.kr 또는 복지로에서 지도 검색. 만 18세 미만 아동 신청 가능, 저소득 우선. 비용 저소득 무료 일반 월 0~3만원.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '지역아동센터는 누구나 이용할 수 있나요?',
      a: '만 18세 미만 아동이면 신청할 수 있습니다. 다만 정원이 있어 저소득·한부모·다문화 가구가 우선 배정됩니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '지역아동센터 위치는 어디서 확인하나요?',
      a: 'icareinfo.go.kr(우리동네돌봄기관)에서 지역을 선택하면 가까운 센터 목록과 지도를 확인할 수 있습니다.',
      source: '지역아동센터중앙지원단',
      sourceUrl: 'https://www.icareinfo.go.kr',
    },
    {
      q: '이용료가 얼마인가요?',
      a: '기초생활수급 가구는 무료이며, 일반 가구는 월 0~3만원 수준입니다. 센터마다 차이가 있으므로 해당 센터에 문의하세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '신청은 어디서 하나요?',
      a: '가까운 지역아동센터에 직접 방문하거나, 거주지 읍·면·동 주민센터를 통해 신청할 수 있습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '전국에 지역아동센터가 몇 개나 있나요?',
      a: '2026년 기준 전국 약 4,400개 센터가 운영 중입니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
  ],
  sources: [
    { name: '보건복지부', url: 'https://www.mohw.go.kr' },
    { name: '지역아동센터중앙지원단', url: 'https://www.icareinfo.go.kr' },
    { name: '복지로', url: 'https://www.bokjiro.go.kr' },
  ],
};
