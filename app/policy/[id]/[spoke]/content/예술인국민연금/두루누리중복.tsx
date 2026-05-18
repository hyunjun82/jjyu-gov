import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          예술인 국민연금 보험료 지원과 두루누리 사회보험료 지원은
          <strong>중복 신청이 불가</strong>합니다.
          두루누리는 <strong>10인 미만 사업장 근로자</strong>가 대상이고,
          예술인 국민연금 지원은 <strong>지역·임의가입자 예술인</strong>이 대상이라
          수급 구조 자체가 다릅니다. 본인의 가입 유형에 맞는 제도를 선택해야 합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "예술인 국민연금 지원이랑 두루누리 지원을 동시에 받을 수 있나요?"
        두 제도는 대상이 겹치지 않습니다. 차이를 정리했습니다.
      </p>

      <section className="detail-card" id="comparison">
        <h2 className="detail-card-head">예술인 국민연금 지원과 두루누리 사회보험료 지원, 중복 신청이 되나</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>구분</th><th>예술인 국민연금 지원</th><th>두루누리 사회보험료 지원</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>주관</td>
                <td>한국예술인복지재단</td>
                <td>고용노동부</td>
              </tr>
              <tr>
                <td>대상</td>
                <td>지역·임의가입자 예술인</td>
                <td>10인 미만 사업장 근로자 (직장가입자)</td>
              </tr>
              <tr>
                <td>지원 내용</td>
                <td>국민연금 보험료 월 최대 37,950원</td>
                <td>국민연금+고용보험료 80% 지원</td>
              </tr>
              <tr>
                <td>중복 여부</td>
                <td colSpan={2}><strong>불가 (가입 유형이 달라 동시 해당 불가)</strong></td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            직장가입자는 두루누리 대상이고, 지역·임의가입자는 예술인 국민연금 지원 대상입니다.
            같은 사람이 두 가지 가입 유형을 동시에 가질 수 없으므로 중복 수령이 불가능합니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="which-to-choose">
        <h2 className="detail-card-head">어떤 지원을 받아야 하나</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>프리랜서·자영업 예술인 (지역·임의가입자):</strong>
            → 예술인 국민연금 보험료 지원 신청 (kawfartist.kr)
          </div>
          <div className="info-box">
            <strong>10인 미만 사업장 근로자 예술인 (직장가입자):</strong>
            → 두루누리 사회보험료 지원 신청 (고용24, work24.go.kr)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            신청 자격, 지원 금액, 신청 절차 등<br />
            예술인 국민연금 보험료 지원 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/artist-pension" className="btn-cta">
            예술인 국민연금 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 예술인연금두루누리SpokeContent: SpokeData = {
  h1: '예술인 국민연금 지원과 두루누리 사회보험료 지원, 중복 신청이 되나',
  breadcrumb: '두루누리중복',
  description:
    '예술인 국민연금 보험료 지원(지역·임의가입자)과 두루누리(10인 미만 직장가입자)는 대상 가입 유형이 달라 중복 수령 불가. 프리랜서 예술인은 예술인 국민연금 지원, 소규모 사업장 재직자는 두루누리 신청.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '예술인 국민연금 지원과 두루누리를 동시에 받을 수 있나요?',
      a: '불가능합니다. 두 제도는 국민연금 가입 유형이 달라 동시에 해당될 수 없습니다. 직장가입자는 두루누리, 지역·임의가입자는 예술인 국민연금 지원 대상입니다.',
      source: '한국예술인복지재단',
      sourceUrl: 'https://www.kawf.kr',
    },
    {
      q: '두루누리는 어떤 사람이 받나요?',
      a: '10인 미만 사업장에 근무하는 직장가입자 근로자가 대상입니다. 국민연금과 고용보험료를 최대 80% 지원받을 수 있습니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.work24.go.kr',
    },
    {
      q: '프리랜서로 일하다가 소규모 회사에 취직했어요. 어떤 지원을 받나요?',
      a: '직장가입자로 전환되면 두루누리 사회보험료 지원을 신청할 수 있습니다. 예술인 국민연금 지원은 지역·임의가입자 대상이므로 취직 후에는 해당하지 않습니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.work24.go.kr',
    },
    {
      q: '예술인도 두루누리를 받을 수 있나요?',
      a: '10인 미만 사업장에 근무하는 예술인이라면 직장가입자 자격으로 두루누리 지원을 받을 수 있습니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.work24.go.kr',
    },
    {
      q: '예술인 국민연금 보험료 지원은 어디서 신청하나요?',
      a: '예술인경력정보시스템(kawfartist.kr)에서 온라인으로 신청합니다. 신청 기간은 매년 2월말~8월말입니다.',
      source: '한국예술인복지재단',
      sourceUrl: 'https://www.kawf.kr',
    },
  ],
  sources: [
    { name: '한국예술인복지재단', url: 'https://www.kawf.kr' },
    { name: '예술인경력정보시스템', url: 'https://www.kawfartist.kr' },
    { name: '고용노동부', url: 'https://www.moel.go.kr' },
  ],
};
