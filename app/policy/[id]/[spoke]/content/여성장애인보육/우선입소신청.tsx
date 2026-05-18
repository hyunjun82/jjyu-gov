import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          네, 장애인 부모의 자녀는 <strong>영유아보육법 제28조에 따라 어린이집 1순위 우선 입소 대상</strong>입니다.
          입소 점수 <strong>100점</strong>(부모 모두 취업 시 200점)이 부여되며,
          소득 기준 없이 아이사랑 포털(childcare.go.kr) 또는 원하는 어린이집에 직접 신청합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "장애인 부모 자녀라고 하면 어린이집에 먼저 들어갈 수 있나요?"
        근거 법령과 신청 방법을 정리했습니다.
      </p>

      <section className="detail-card" id="priority">
        <h2 className="detail-card-head">어린이집 우선 입소 1순위 자격</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>구분</th><th>근거</th><th>입소 점수</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>장애인 부모 자녀</strong></td>
                <td>영유아보육법 제28조</td>
                <td>100점</td>
              </tr>
              <tr>
                <td><strong>장애인 부모 자녀 + 맞벌이</strong></td>
                <td>동법 동조 (1순위×2)</td>
                <td>200점</td>
              </tr>
              <tr>
                <td>2순위 항목 (기타 우선 대상)</td>
                <td>동법 동조</td>
                <td>50점</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            동점자는 대기 신청 순서로 순위가 결정됩니다. 점수가 높을수록 입소 가능성이 높습니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="how-to-apply">
        <h2 className="detail-card-head">신청 방법 (아이사랑 포털)</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>온라인:</strong> 아이사랑 포털(childcare.go.kr) → 로그인 → 입소대기 신청 → 장애부모 1순위 선택 → 장애인복지카드 정보 입력
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>방문:</strong> 원하는 어린이집에 직접 방문하여 입소 신청서 + 장애인복지카드(등록증) 제출
          </div>
          <div className="info-box">
            <strong>필요 서류:</strong> 장애인복지카드(또는 장애인 등록증), 가족관계증명서, 신분증
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="eligibility">
        <h2 className="detail-card-head">신청 자격 상세</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            장애인 부모란 <strong>장애인복지법 제2조</strong>에 따른 등록 장애인(여성장애인 포함)을 말합니다.
            장애 유형·등급 제한은 없으며, 소득 기준도 없습니다.
          </div>
          <div className="info-box">
            자녀가 장애아동인 경우 <strong>장애아 보육료 지원</strong>(종일 63.4만원/방과후 31.7만원)도 별도 신청할 수 있습니다.
            우선 입소 신청과 보육료 신청은 각각 따로 진행합니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            장애아 보육료 단가, 서류, 중복 지원 여부 등<br />
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

export const 여성장애인우선입소신청SpokeContent: SpokeData = {
  h1: '장애인 부모 자녀라면 어린이집 우선 입소가 되나, 1순위 자격과 신청 방법',
  breadcrumb: '우선입소신청',
  description:
    '장애인 부모 자녀는 영유아보육법 제28조에 따라 어린이집 1순위(100점) 우선 입소 대상. 부모 모두 취업 시 200점. 아이사랑 포털(childcare.go.kr) 또는 어린이집 방문 신청. 소득 무관.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '장애인 부모 자녀는 어린이집 몇 순위인가요?',
      a: '영유아보육법 제28조에 따라 1순위(100점)입니다. 부모가 모두 취업 중이면 200점이 부여됩니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '어느 어린이집이든 우선 입소가 되나요?',
      a: '원하는 어린이집에 아이사랑 포털로 대기 신청하거나 직접 방문 신청하면 됩니다. 단, 해당 어린이집의 대기 순위에 따라 실제 입소 시기가 다를 수 있습니다.',
      source: '중앙육아종합지원센터',
      sourceUrl: 'https://central.childcare.go.kr',
    },
    {
      q: '장애인복지카드가 없으면 어떻게 하나요?',
      a: '장애인 등록이 안 된 경우 복지카드 발급이 선행되어야 합니다. 주민센터나 보건복지부를 통해 장애 등록 절차를 먼저 진행하세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '우선 입소 신청 후 얼마나 기다리나요?',
      a: '지역별·시설별 대기 상황에 따라 다릅니다. 입소 점수(100~200점)가 높아 일반 대기자보다 우선 배정되지만, 대기 신청 후 센터에 문의해 현황을 확인하는 것이 좋습니다.',
      source: '중앙육아종합지원센터',
      sourceUrl: 'https://central.childcare.go.kr',
    },
    {
      q: '자녀가 장애아동인 경우 보육료도 따로 지원받나요?',
      a: '네, 자녀가 장애아동(만 12세 이하)이면 종일 63.4만원, 방과후 31.7만원의 장애아 보육료를 별도로 신청할 수 있습니다. 우선 입소와 보육료 지원은 각각 별도 신청입니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
  ],
  sources: [
    { name: '보건복지부', url: 'https://www.mohw.go.kr' },
    { name: '중앙육아종합지원센터', url: 'https://central.childcare.go.kr' },
    { name: '아이사랑 포털', url: 'https://www.childcare.go.kr' },
  ],
};
