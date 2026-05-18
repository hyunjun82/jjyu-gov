import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          2026년 기준 장애아 보육료는 <strong>종일반 월 63.4만원, 방과후 월 31.7만원</strong>입니다.
          소득과 무관하게 만 12세 이하 장애아동이면 지원받을 수 있으며,
          이 금액은 어린이집에 직접 지급됩니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "장애아동 보육료가 63.4만원이라는데, 소득과 관계없이 모두 받나요?"
        2026년 장애아 보육료 단가와 적용 조건을 정리했습니다.
      </p>

      <section className="detail-card" id="fee-table">
        <h2 className="detail-card-head">2026년 장애아 보육료 단가</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>유형</th><th>월 지원액</th><th>대상</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>종일반</strong></td>
                <td><strong>63.4만원</strong></td>
                <td>만 12세 이하 미취학 장애아동</td>
              </tr>
              <tr>
                <td><strong>방과후</strong></td>
                <td><strong>31.7만원</strong></td>
                <td>취학 장애아동 (초등학생 등)</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            이 금액은 정부가 어린이집에 직접 지급합니다. 부모의 본인 부담은 식대·특별활동비 등 일부에 한정됩니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="conditions">
        <h2 className="detail-card-head">지원 조건과 적용 시설</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>소득 조건:</strong> 없음. 가구 소득·재산과 무관하게 지원됩니다.
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>아동 조건:</strong> 장애인복지카드 소지 만 12세 이하 / 또는 장애 소견 진단서 제출 아동
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>시설 조건:</strong> 교사 대 아동 비율 1:3을 편성하고 장애아 전담 교사를 배치한 어린이집
          </div>
          <div className="info-box">
            <strong>중복 제한:</strong> 누리과정 보육료와 동시 수령 불가. 만 3~5세 장애아동은 더 유리한 장애아 보육료(63.4만원) 적용을 권장합니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="apply">
        <h2 className="detail-card-head">신청 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>온라인:</strong> 복지로(bokjiro.go.kr) → 복지서비스 신청 → 장애아 보육료 지원
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>방문:</strong> 거주지 읍·면·동 주민센터 방문 신청
          </div>
          <div className="info-box">
            <strong>시기:</strong> 어린이집 입소 후 신청. 자격 확인 후 다음 달부터 지원 적용.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            우선 입소 신청, 일반보육료 비교, 서류 안내 등<br />
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

export const 여성장애인장애아보육료기준SpokeContent: SpokeData = {
  h1: '장애아동 종일반 63.4만원 방과후 31.7만원, 소득과 관계없이 지원되나',
  breadcrumb: '장애아보육료기준',
  description:
    '2026년 장애아 보육료 종일반 63.4만원, 방과후 31.7만원. 소득 무관. 만 12세 이하 장애아동 대상, 교사 1:3 배치 시설 지급. 복지로 또는 주민센터 신청.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '2026년 장애아 보육료는 얼마인가요?',
      a: '종일반 월 63.4만원, 방과후 월 31.7만원입니다. 이 금액은 어린이집에 직접 지급됩니다.',
      source: '중앙육아종합지원센터',
      sourceUrl: 'https://central.childcare.go.kr',
    },
    {
      q: '소득이 높아도 장애아 보육료를 받을 수 있나요?',
      a: '네, 소득 기준이 없습니다. 장애아동이면 가구 소득과 무관하게 지원받습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '만 3세도 종일반 63.4만원을 받나요?',
      a: '네, 장애아 보육료는 만 12세 이하 장애아동 전체에 적용됩니다. 누리과정 대상(만 3~5세)보다 금액이 높으므로 장애아 보육료를 선택하는 것이 유리합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '어느 어린이집에서나 63.4만원을 받나요?',
      a: '교사 대 아동 비율 1:3을 편성하고 장애아 전담 교사를 배치한 어린이집이어야 합니다. 장애아 전담·통합 어린이집이 해당됩니다.',
      source: '중앙육아종합지원센터',
      sourceUrl: 'https://central.childcare.go.kr',
    },
    {
      q: '양육수당과 중복으로 받을 수 있나요?',
      a: '아니요, 어린이집을 이용하면 보육료가 적용되고 양육수당은 받을 수 없습니다. 어린이집 미이용 시에만 양육수당이 지급됩니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
  ],
  sources: [
    { name: '보건복지부', url: 'https://www.mohw.go.kr' },
    { name: '중앙육아종합지원센터', url: 'https://central.childcare.go.kr' },
  ],
};
