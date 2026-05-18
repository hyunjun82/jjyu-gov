import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          <strong>2026년 기준 75세 이상</strong> 고령운전자는
          도로교통공단 이러닝센터에서 <strong>온라인으로 교통안전교육을 이수</strong>할 수 있습니다.
          65세 이상 권장 대상자는 오프라인 교육장만 이용 가능합니다.
          온라인 교육은 <strong>무료</strong>이며 본인 명의 공동인증서로 로그인하면 됩니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        거동이 불편하거나 교육장 방문이 어렵다면 온라인 이수를 활용하세요.
        2026년 기준 온라인 이수 가능 대상과 절차를 안내합니다.
      </p>

      <section className="detail-card" id="online-target">
        <h2 className="detail-card-head">온라인 이수 가능 대상</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>연령</th><th>온라인 이수</th><th>오프라인 이수</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>65세 이상 (권장)</strong></td><td>불가</td><td>가능 (교육장 방문)</td></tr>
              <tr><td><strong>75세 이상 (의무)</strong></td><td>가능</td><td>가능</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="online-steps">
        <h2 className="detail-card-head">온라인 이수 절차 (75세 이상)</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>1단계:</strong> 도로교통공단 이러닝센터 접속 (trafficedu.koroad.or.kr)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>2단계:</strong> 공동인증서 또는 간편 인증으로 로그인
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>3단계:</strong> '고령운전자 교통안전교육' 과정 선택 후 수강
          </div>
          <div className="info-box">
            <strong>4단계:</strong> 수강 완료 후 이수증 출력 → 적성검사 시 제출
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="offline">
        <h2 className="detail-card-head">오프라인 교육장 이용 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>예약:</strong> 도로교통공단 안전운전 통합민원(safedriving.or.kr) 온라인 예약
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>방문:</strong> 전국 도로교통공단 교육장 (신분증 지참)
          </div>
          <div className="info-box">
            <strong>이수 시간:</strong> 공고별 교육 시간 확인 후 방문
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            65세·75세 이상 교육 차이, 면허 갱신 절차, 예약 방법까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/elderly-driver-safety" className="btn-cta">
            고령운전자 교통안전교육 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 고령운전자교통안전교육2026온라인이수방법SpokeContent: SpokeData = {
  h1: '2026 고령운전자 교통안전교육 온라인으로 이수하는 방법과 대상 기준',
  breadcrumb: '2026온라인이수방법',
  description:
    '2026 고령운전자 교통안전교육 온라인 이수: 75세 이상만 가능(65세는 오프라인만). 도로교통공단 이러닝센터(trafficedu.koroad.or.kr)에서 공동인증서 로그인 후 수강, 무료. 이수증 출력 후 적성검사 제출.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '온라인으로 교육을 받으려면 어느 사이트에 접속해야 하나요?',
      a: '도로교통공단 이러닝센터(trafficedu.koroad.or.kr)에서 공동인증서 또는 간편 인증으로 로그인한 후 수강할 수 있습니다.',
      source: '도로교통공단',
      sourceUrl: 'https://trafficedu.koroad.or.kr',
    },
    {
      q: '65세도 온라인으로 교육을 받을 수 있나요?',
      a: '아니요. 65세 이상 권장 대상자는 오프라인 교육장에서만 교육을 받을 수 있습니다. 온라인 이수는 75세 이상 의무 대상자에게만 가능합니다.',
      source: '도로교통공단',
      sourceUrl: 'https://www.koroad.or.kr',
    },
    {
      q: '온라인 이수 후 이수증을 어떻게 활용하나요?',
      a: '이수증을 출력하여 운전면허 적성검사 시 제출합니다. 적성검사 통과 후 면허 갱신이 완료됩니다.',
      source: '도로교통공단',
      sourceUrl: 'https://www.koroad.or.kr',
    },
    {
      q: '온라인 교육 소요 시간은 어느 정도인가요?',
      a: '교육 시간은 이러닝센터 공고를 확인하세요. 일반적으로 2시간 내외이며 중간 이탈 시 처음부터 다시 이수해야 합니다.',
      source: '도로교통공단',
      sourceUrl: 'https://trafficedu.koroad.or.kr',
    },
    {
      q: '공동인증서가 없으면 로그인이 안 되나요?',
      a: '도로교통공단 이러닝센터는 공동인증서 외에 간편 인증 방식도 지원합니다. 정확한 인증 방법은 이러닝센터 안내를 확인하세요.',
      source: '도로교통공단',
      sourceUrl: 'https://trafficedu.koroad.or.kr',
    },
  ],
  sources: [
    { name: '도로교통공단', url: 'https://www.koroad.or.kr' },
    { name: '도로교통공단 이러닝센터', url: 'https://trafficedu.koroad.or.kr' },
    { name: '도로교통공단 안전운전 통합민원', url: 'https://www.safedriving.or.kr' },
  ],
};
