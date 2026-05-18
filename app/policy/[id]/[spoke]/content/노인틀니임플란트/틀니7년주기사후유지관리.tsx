import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          의료급여 노인 틀니는 원칙적으로 <strong>7년에 1회</strong> 의료급여가 적용됩니다.
          틀니 장착 후 <strong>3개월 이내 6회까지</strong> 사후 유지관리(조정·수리)를
          진찰료만 내고 받을 수 있습니다.
          7년이 지나지 않아도 구강 상태가 급격히 변한 경우 심사를 거쳐 재급여가 가능합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        임플란트는 평생 2개 한도이며 별도의 주기 제한이 없습니다.
        사후 유지관리 기간(3개월 이내)이 지난 후 수리가 필요하면 추가 본인부담이 발생할 수 있으니
        3개월 내에 불편한 점을 꼭 확인하세요.
      </p>

      <section className="detail-card" id="cycle">
        <h2 className="detail-card-head">틀니·임플란트 주기 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>주기</th><th>예외</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>완전틀니</strong></td><td>7년에 1회</td><td>구강 급격 변화 시 심사 후 재급여</td></tr>
              <tr><td><strong>부분틀니</strong></td><td>7년에 1회</td><td>동일</td></tr>
              <tr><td><strong>치과임플란트</strong></td><td>평생 2개 한도</td><td>별도 주기 제한 없음</td></tr>
              <tr><td><strong>사후 유지관리</strong></td><td>장착 후 3개월 이내 6회</td><td>진찰료만 본인부담</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="maintenance">
        <h2 className="detail-card-head">사후 유지관리 활용 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>기간:</strong> 틀니 장착 후 3개월 이내
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>횟수:</strong> 6회까지 (진찰료만 본인부담, 수리 비용 추가 없음)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>내용:</strong> 틀니 조정·수리, 잇몸 맞춤, 불편함 해소
          </div>
          <div className="info-box">
            <strong>주의:</strong> 3개월 이후 수리는 추가 본인부담 발생 가능
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="exception">
        <h2 className="detail-card-head">7년 이전 재급여 신청 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>사유:</strong> 사고·외상, 잇몸 급격 변화, 심한 무게 감소 등 구강 상태가 급격히 변한 경우
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>절차:</strong> 의료급여 지정 치과 → 심사 신청 → 국민건강보험공단·심사평가원 심사 → 승인 시 재급여
          </div>
          <div className="info-box">
            <strong>문의:</strong> ☎1577-1000 (국민건강보험공단)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            1종·2종 본인부담, 임플란트 신청 방법까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/medical-aid-elderly-denture" className="btn-cta">
            노인 틀니·임플란트 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 노인틀니임플란트틀니7년주기사후유지관리SpokeContent: SpokeData = {
  h1: '노인 틀니 7년 주기와 장착 후 3개월 무상 수리 6회 이용 방법',
  breadcrumb: '틀니7년주기사후유지관리',
  description:
    '의료급여 노인 틀니 주기: 7년에 1회 급여 적용. 사후 유지관리 장착 후 3개월 이내 6회 진찰료만 부담. 임플란트는 평생 2개 한도. 구강 급격 변화 시 7년 이전 심사 후 재급여 가능.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '틀니를 5년 만에 분실했는데 다시 받을 수 있나요?',
      a: '원칙적으로 7년에 1회이므로 5년 후에는 급여 적용이 어렵습니다. 단, 심사를 거쳐 구강 상태 변화가 인정되면 재급여가 가능할 수 있으니 ☎1577-1000으로 문의하세요.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.nhis.or.kr',
    },
    {
      q: '3개월 지난 후에 틀니가 맞지 않으면 어떻게 하나요?',
      a: '3개월 이후 수리는 유지관리 무상 지원 기간이 지나 추가 본인부담이 발생할 수 있습니다. 의료급여 지정 치과에서 비용을 확인 후 처치받으세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '사후 유지관리 6회를 꼭 다 사용해야 하나요?',
      a: '아닙니다. 불편함이 없다면 사용하지 않아도 됩니다. 불편함이 있다면 3개월 이내에 최대 6회 조정 방문을 적극적으로 활용하는 것이 좋습니다.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.nhis.or.kr',
    },
    {
      q: '틀니를 7년 전에 받았는데 지금 다시 받을 수 있나요?',
      a: '네. 7년이 지났다면 다시 의료급여 혜택으로 틀니를 받을 수 있습니다. 의료급여 지정 치과를 방문해 사전 등록 후 시술을 진행하세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '틀니와 임플란트를 같이 받을 수 있나요?',
      a: '임플란트 2개 한도와 틀니 7년 1회 한도는 별개입니다. 구강 상황에 따라 틀니와 임플란트를 함께 받을 수 있습니다. 치과에서 구강 상태에 맞는 시술을 선택하세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
  ],
  sources: [
    { name: '보건복지부 의료급여 틀니·임플란트 지원', url: 'https://www.mohw.go.kr' },
    { name: '국민건강보험공단', url: 'https://www.nhis.or.kr' },
  ],
};
