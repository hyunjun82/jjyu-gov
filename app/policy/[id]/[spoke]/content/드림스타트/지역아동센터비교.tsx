import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          드림스타트는 <strong>가정 방문형 사례관리</strong>가 중심이고,
          지역아동센터는 <strong>센터 방문형 돌봄·교육</strong>이 중심입니다.
          두 제도는 성격이 달라 <strong>동시 이용이 가능</strong>하며,
          소득 기준에서도 차이가 있습니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "드림스타트와 지역아동센터가 어떻게 다른가요? 두 곳을 동시에 다닐 수 있나요?"
        두 제도의 차이점과 중복 이용 여부를 정리했습니다.
      </p>

      <section className="detail-card" id="compare">
        <h2 className="detail-card-head">드림스타트 vs 지역아동센터 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>드림스타트</th><th>지역아동센터</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>서비스 유형</strong></td>
                <td>가정 방문형 사례관리 중심</td>
                <td>센터 방문형 돌봄·교육 중심</td>
              </tr>
              <tr>
                <td><strong>대상 연령</strong></td>
                <td>0세(임산부) ~ 12세</td>
                <td>만 18세 미만 (초등 중심)</td>
              </tr>
              <tr>
                <td><strong>소득 기준</strong></td>
                <td>기초수급·차상위 (위기 가구 예외)</td>
                <td>저소득 우선, 일반 가구도 일부 가능</td>
              </tr>
              <tr>
                <td><strong>주요 서비스</strong></td>
                <td>사례관리·건강·학습·사회성·부모교육</td>
                <td>방과후 보호·학습·급식·문화 활동</td>
              </tr>
              <tr>
                <td><strong>비용</strong></td>
                <td>무료</td>
                <td>저소득 무료, 일반 월 0~3만원</td>
              </tr>
              <tr>
                <td><strong>중복 이용</strong></td>
                <td colSpan={2}>가능 (시간대 조율 필요)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="dual-use">
        <h2 className="detail-card-head">동시 이용 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            드림스타트는 가정을 방문하거나 사업단에 방문하는 방식이고,
            지역아동센터는 방과 후 시간대에 센터에서 운영됩니다.
            시간이 겹치지 않으면 동시 이용이 가능합니다.
          </div>
          <div className="info-box">
            <strong>예시:</strong> 오후 드림스타트 사례관리 → 이후 지역아동센터 방과후 프로그램
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="apply">
        <h2 className="detail-card-head">각각 신청 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>드림스타트:</strong> 시·군·구 드림스타트 사업단 또는 정부24
          </div>
          <div className="info-box">
            <strong>지역아동센터:</strong> 거주지 읍·면·동 행정복지센터 또는 icareinfo.go.kr
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            드림스타트 신청 자격, 7대 서비스 등<br />
            드림스타트 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/dream-start" className="btn-cta">
            드림스타트 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 드림스타트지역아동센터비교SpokeContent: SpokeData = {
  h1: '드림스타트가 지역아동센터와 다른 점, 두 곳을 동시에 이용할 수 있는지',
  breadcrumb: '지역아동센터비교',
  description:
    '드림스타트(가정 방문형 사례관리·0~12세·무료) vs 지역아동센터(센터 방문형 돌봄·18세 미만·저소득 무료). 동시 이용 가능(시간대 조율). 소득 기준 차이 있음.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '드림스타트와 지역아동센터의 가장 큰 차이점은 무엇인가요?',
      a: '드림스타트는 가정 방문형 개인 사례관리가 중심이고, 지역아동센터는 센터 방문형 방과후 돌봄·교육이 중심입니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '드림스타트와 지역아동센터를 동시에 이용할 수 있나요?',
      a: '네, 시간대가 겹치지 않으면 동시 이용이 가능합니다. 두 서비스의 성격이 다르기 때문에 중복 이용이 허용됩니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '지역아동센터는 일반 가구도 이용할 수 있나요?',
      a: '지역아동센터는 저소득 가구 우선이지만, 지역에 따라 일반 가구 아동도 일부 이용이 가능합니다. 월 0~3만원 비용이 발생할 수 있습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '드림스타트는 아이가 직접 센터에 가야 하나요?',
      a: '드림스타트는 가정 방문이 기본이며, 필요에 따라 사업단 방문도 병행합니다. 매일 통원이 필요한 지역아동센터와 다릅니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '지역아동센터 찾기는 어디서 하나요?',
      a: 'icareinfo.go.kr 또는 복지로(bokjiro.go.kr)에서 가까운 지역아동센터를 검색할 수 있습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
  ],
  sources: [
    { name: '보건복지부', url: 'https://www.mohw.go.kr' },
    { name: '아동권리보장원', url: 'https://www.ncrc.or.kr' },
    { name: '지역아동센터 찾기', url: 'https://www.icareinfo.go.kr' },
  ],
};
