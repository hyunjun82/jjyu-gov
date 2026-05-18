import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          <strong>정원이 다 찬 상태에서도</strong> 장애인 부모 자녀는 1순위(100점) 우선 입소 대기에 등록됩니다.
          현재 입소 아동이 퇴소하거나 자리가 생기면 대기 순위에 따라 <strong>가장 먼저 입소</strong>할 수 있으며,
          어린이집은 정원 초과 특례 규정에 따라 일부 경우 정원 외 입소를 허용할 수 있습니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "어린이집 정원이 다 찼다고 하는데, 장애인 부모 자녀면 먼저 들어갈 수 있나요?"
        정원 초과 상황에서 우선 입소 규정이 어떻게 적용되는지 정리했습니다.
      </p>

      <section className="detail-card" id="waitlist">
        <h2 className="detail-card-head">정원 가득 찬 경우, 입소 대기 신청 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>1단계:</strong> 아이사랑 포털(childcare.go.kr)에서 원하는 어린이집 입소 대기 신청 (장애부모 1순위 선택)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>2단계:</strong> 100점(장애인 부모 자녀) 또는 200점(맞벌이)으로 대기 등록
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>3단계:</strong> 자리가 생기면 대기 순위 1위부터 순서대로 연락
          </div>
          <div className="info-box">
            <strong>팁:</strong> 여러 어린이집에 동시 대기 신청하면 입소 가능성이 높아집니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="special-rule">
        <h2 className="detail-card-head">정원 외 입소 특례 (장애아동 우선 규정)</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>구분</th><th>내용</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>일반 입소</strong></td>
                <td>정원 내 대기 순서대로 배정</td>
              </tr>
              <tr>
                <td><strong>우선 입소 (1순위)</strong></td>
                <td>정원 내 가장 먼저 배정 (장애인 부모 자녀 포함)</td>
              </tr>
              <tr>
                <td><strong>정원 외 특례</strong></td>
                <td>장애아 전담·통합 어린이집은 지자체 승인으로 정원 외 입소 가능</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            정원 외 특례 입소는 어린이집 유형(장애아 전담·통합)과 지자체 방침에 따라 다릅니다.
            거주지 시·군·구청 보육 담당 부서에 문의하세요.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="tips">
        <h2 className="detail-card-head">입소 대기 기간을 줄이는 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>복수 신청:</strong> 아이사랑 포털에서 여러 어린이집에 동시 대기 신청 가능
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>장애아 전담 시설 우선:</strong> 장애아 전담 어린이집은 장애아동 비율이 높아 입소 가능성이 높음
          </div>
          <div className="info-box">
            <strong>인근 구·동 포함:</strong> 거주지 인근 다른 행정구역 어린이집에도 신청 가능
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            우선 입소 자격, 보육료 지원, 신청 서류 등<br />
            여성장애인 보육 특례 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/disabled-women-childcare" className="btn-cta">
            여성장애인 보육 특례 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 여성장애인정원초과우선입소SpokeContent: SpokeData = {
  h1: '어린이집 정원이 다 찼는데 장애인 부모 자녀면 먼저 들어갈 수 있나',
  breadcrumb: '정원초과우선입소',
  description:
    '정원이 가득 찬 어린이집이라도 장애인 부모 자녀는 1순위(100점) 대기 등록 후 자리가 생기면 최우선 배정. 장애아 전담 어린이집은 정원 외 특례 입소 가능. 아이사랑 포털에서 복수 신청 권장.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '정원이 다 찬 어린이집에도 신청할 수 있나요?',
      a: '네, 아이사랑 포털(childcare.go.kr)에서 입소 대기 신청을 하면 1순위(100점)로 대기 등록됩니다. 자리가 생기면 대기 순위 1위부터 연락이 옵니다.',
      source: '중앙육아종합지원센터',
      sourceUrl: 'https://central.childcare.go.kr',
    },
    {
      q: '정원 외 입소 특례가 있나요?',
      a: '장애아 전담·통합 어린이집의 경우 지자체 승인으로 정원 외 입소가 가능할 수 있습니다. 거주지 시·군·구청 보육 담당 부서에 문의하세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '대기 기간을 줄이려면 어떻게 하나요?',
      a: '아이사랑 포털에서 여러 어린이집에 동시 대기 신청하거나, 장애아 전담 어린이집을 우선 검색해 신청하면 입소 가능성이 높아집니다.',
      source: '아이사랑 포털',
      sourceUrl: 'https://www.childcare.go.kr',
    },
    {
      q: '부모가 맞벌이면 점수가 더 높아지나요?',
      a: '네, 장애인 부모 자녀(100점) + 부모 모두 취업(100점) = 200점이 부여됩니다.',
      source: '중앙육아종합지원센터',
      sourceUrl: 'https://central.childcare.go.kr',
    },
    {
      q: '거주지 바깥 어린이집에도 신청할 수 있나요?',
      a: '네, 거주지 인근 다른 구·동의 어린이집에도 아이사랑 포털에서 대기 신청이 가능합니다.',
      source: '아이사랑 포털',
      sourceUrl: 'https://www.childcare.go.kr',
    },
  ],
  sources: [
    { name: '보건복지부', url: 'https://www.mohw.go.kr' },
    { name: '중앙육아종합지원센터', url: 'https://central.childcare.go.kr' },
    { name: '아이사랑 포털', url: 'https://www.childcare.go.kr' },
  ],
};
