import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          맞벌이 초등학생 가구라면 상황에 따라 선택이 달라집니다.
          <strong>다함께돌봄센터</strong>는 월 10만원 이내로 정해진 시간에 기관에서 돌봄을 받고,
          <strong>아이돌봄서비스</strong>는 집으로 돌봄 선생님이 방문해 유연하게 이용할 수 있지만 시간당 본인부담금이 있습니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "아이돌봄서비스와 다함께돌봄센터, 맞벌이 가구는 어디를 신청하는 게 유리한가요?"
        두 서비스를 비교 정리했습니다.
      </p>

      <section className="detail-card" id="compare">
        <h2 className="detail-card-head">아이돌봄서비스 vs 다함께돌봄센터 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>다함께돌봄센터</th><th>아이돌봄서비스</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>대상</strong></td>
                <td>만 6~12세 초등학생</td>
                <td>만 12세 이하 (영유아~초등)</td>
              </tr>
              <tr>
                <td><strong>장소</strong></td>
                <td>센터(기관)</td>
                <td>가정 방문</td>
              </tr>
              <tr>
                <td><strong>비용</strong></td>
                <td>월 10만원 이내</td>
                <td>시간당 1,918~12,790원 (소득별)</td>
              </tr>
              <tr>
                <td><strong>시간</strong></td>
                <td>학기 14~20시 / 방학 9~18시</td>
                <td>유연 (필요한 시간)</td>
              </tr>
              <tr>
                <td><strong>주관</strong></td>
                <td>보건복지부</td>
                <td>여성가족부</td>
              </tr>
              <tr>
                <td><strong>중복 이용</strong></td>
                <td colSpan={2}>가능 (두 서비스 동시 이용 가능)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="which-to-choose">
        <h2 className="detail-card-head">어떤 경우에 어디를 선택할까</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>다함께돌봄센터가 유리한 경우:</strong><br />
            학교 수업 후 일정 시간(오후 2~8시) 돌봄이 필요한 경우. 월정액(10만원 이내)으로 비용 예측이 쉽고 단체 프로그램도 제공됩니다.
          </div>
          <div className="info-box">
            <strong>아이돌봄서비스가 유리한 경우:</strong><br />
            야간 야근·교대 근무로 불규칙한 시간에 돌봄이 필요하거나, 영아~초등 다양한 연령 자녀를 함께 돌봄 받아야 하는 경우.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="overlap">
        <h2 className="detail-card-head">두 서비스 동시 이용</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            아이돌봄서비스와 다함께돌봄센터는 <strong>중복 이용이 가능</strong>합니다.
          </div>
          <div className="info-box">
            예를 들어 평일에는 다함께돌봄센터를 이용하고, 부모 야근이나 긴급 상황에는 아이돌봄서비스를 활용하는 방식으로 조합할 수 있습니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            이용료, 신청 방법, 운영 시간 등<br />
            다함께돌봄센터 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/community-care-center" className="btn-cta">
            다함께돌봄센터 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 다함께돌봄아이돌봄비교SpokeContent: SpokeData = {
  h1: '아이돌봄서비스와 다함께돌봄센터, 초등학생 맞벌이 가구는 어디를 신청해야 하나',
  breadcrumb: '아이돌봄비교',
  description:
    '다함께돌봄센터(기관, 월 10만원 이내, 학기 14~20시)와 아이돌봄서비스(가정방문, 시간당 소득별 부담) 비교. 중복 이용 가능. 맞벌이 가구 상황에 따라 선택.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '다함께돌봄센터와 아이돌봄서비스를 동시에 이용할 수 있나요?',
      a: '네, 두 서비스는 중복 이용이 가능합니다. 평일 정규 돌봄은 센터, 야근이나 긴급 상황에는 아이돌봄서비스를 조합할 수 있습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '비용 면에서 어느 쪽이 더 저렴한가요?',
      a: '다함께돌봄센터는 월 10만원 이내 정액이라 장시간 이용 시 유리합니다. 아이돌봄서비스는 소득이 낮을수록 시간당 부담이 줄어들어 가형(중위 75% 이하)은 시간당 1,918원으로 저렴합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '초등학생도 아이돌봄서비스를 이용할 수 있나요?',
      a: '네, 아이돌봄서비스는 만 12세 이하라면 이용 가능합니다.',
      source: '여성가족부',
      sourceUrl: 'https://www.mogef.go.kr',
    },
    {
      q: '다함께돌봄센터가 좋은 이유가 있나요?',
      a: '월정액(10만원 이내)으로 비용이 예측 가능하고, 학습·놀이·체험 등 다양한 프로그램이 포함됩니다. 방학 중에도 오전부터 운영해 맞벌이 가정에 유리합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '아이돌봄서비스가 좋은 이유가 있나요?',
      a: '가정 방문형으로 유연하게 시간을 조정할 수 있어 야간·새벽 근무 등 불규칙한 일정의 부모에게 적합합니다.',
      source: '여성가족부',
      sourceUrl: 'https://www.mogef.go.kr',
    },
  ],
  sources: [
    { name: '보건복지부', url: 'https://www.mohw.go.kr' },
    { name: '여성가족부', url: 'https://www.mogef.go.kr' },
  ],
};
