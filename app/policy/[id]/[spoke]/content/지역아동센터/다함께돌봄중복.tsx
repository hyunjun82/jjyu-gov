import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          지역아동센터와 다함께돌봄센터는 <strong>동시 이용이 가능</strong>합니다.
          단, 두 곳의 운영 시간이 겹치는 경우 실질적으로 동시 출석은 어렵습니다.
          각 센터에 사전에 확인하는 것이 좋습니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "지역아동센터를 이미 다니는데 다함께돌봄센터도 신청할 수 있나요?"
        두 서비스의 차이와 중복 이용 기준을 비교했습니다.
      </p>

      <section className="detail-card" id="compare">
        <h2 className="detail-card-head">지역아동센터 vs 다함께돌봄센터 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>지역아동센터</th><th>다함께돌봄센터</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>대상</strong></td>
                <td>만 18세 미만 (저소득 우선)</td>
                <td>만 6~12세 초등학생</td>
              </tr>
              <tr>
                <td><strong>비용</strong></td>
                <td>저소득 무료 / 일반 월 0~3만원</td>
                <td>월 10만원 이내</td>
              </tr>
              <tr>
                <td><strong>학기 중 시간</strong></td>
                <td>14:00 ~ 19:00</td>
                <td>14:00 ~ 20:00</td>
              </tr>
              <tr>
                <td><strong>방학 중 시간</strong></td>
                <td>09:00 ~ 18:00</td>
                <td>09:00 ~ 18:00</td>
              </tr>
              <tr>
                <td><strong>소득 기준</strong></td>
                <td>저소득 우선 (일반도 가능)</td>
                <td>소득 무관</td>
              </tr>
              <tr>
                <td><strong>주관</strong></td>
                <td>보건복지부</td>
                <td>보건복지부</td>
              </tr>
              <tr>
                <td><strong>중복 이용</strong></td>
                <td colSpan={2}>가능 (시간대 조율 필요)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="overlap">
        <h2 className="detail-card-head">어떤 경우에 어디를 선택하면 좋을까</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>지역아동센터가 유리한 경우:</strong><br />
            저소득 가구로 비용 부담을 최소화하고 싶거나, 초등학생 외 중학생 자녀도 함께
            이용해야 하는 경우. 정서지원·상담 등 복지 서비스도 함께 받고 싶은 경우.
          </div>
          <div className="info-box">
            <strong>다함께돌봄센터가 유리한 경우:</strong><br />
            소득 기준 없이 초등학생 자녀를 오후에 안전하게 맡기고 싶은 경우.
            학기 중 오후 8시까지 이용이 필요한 경우.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="both">
        <h2 className="detail-card-head">두 서비스 동시 이용 시 주의사항</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            법적으로는 두 서비스를 동시에 이용하는 것이 금지되어 있지 않습니다.
          </div>
          <div className="info-box">
            다만 학기 중 운영 시간이 비슷하게 겹쳐 실질적으로 동일 시간대 이용은 어렵습니다.
            지역아동센터와 다함께돌봄센터 각각에 상황을 알리고 조율하는 것을 권장합니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            이용료, 신청 방법, 프로그램 등<br />
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

export const 지역아동센터다함께돌봄중복SpokeContent: SpokeData = {
  h1: '지역아동센터와 다함께돌봄센터, 같은 아이가 두 곳을 동시에 이용할 수 있는지',
  breadcrumb: '다함께돌봄중복',
  description:
    '지역아동센터(저소득 우선, 월 0~3만원)와 다함께돌봄센터(소득무관, 월 10만원 이내) 중복 이용 가능. 시간대 겹침 주의. 두 기관에 사전 조율 필요.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '지역아동센터와 다함께돌봄센터를 동시에 등록할 수 있나요?',
      a: '법적으로 금지된 것은 아닙니다. 다만 운영 시간이 겹치므로 두 기관에 상황을 알리고 조율하는 것이 좋습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '지역아동센터와 다함께돌봄센터의 가장 큰 차이가 무엇인가요?',
      a: '지역아동센터는 만 18세 미만이 대상으로 저소득 가구 우선이며, 다함께돌봄센터는 만 6~12세 초등학생을 소득 무관하게 이용할 수 있습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '중학생 자녀는 다함께돌봄센터를 이용할 수 없나요?',
      a: '다함께돌봄센터는 만 6~12세(초등학생)만 이용할 수 있습니다. 중학생은 지역아동센터를 이용하는 것이 적합합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '비용은 어느 쪽이 더 저렴한가요?',
      a: '저소득 가구라면 지역아동센터가 무료라 더 유리합니다. 일반 가구는 지역아동센터(월 0~3만원)와 다함께돌봄센터(월 10만원 이내)를 비교해 선택하세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '두 곳 모두 보건복지부 소관인가요?',
      a: '네, 지역아동센터와 다함께돌봄센터 모두 보건복지부가 주관합니다.',
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
