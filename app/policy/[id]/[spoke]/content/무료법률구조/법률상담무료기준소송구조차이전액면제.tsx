import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          <strong>법률 상담</strong>은 누구나 무료이고, <strong>소송구조</strong>는 소득 기준(중위소득 125% 이하)을 충족해야 받을 수 있습니다.
          소송구조를 받으면 변호사비·인지대·송달료 등 소송 비용 전액을 공단이 먼저 납부하고, 승소 후 상대방에게 청구합니다.
        </p>
      </div>

      <section className="detail-card" id="compare">
        <h2 className="detail-card-head">법률 상담 vs 소송구조 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>구분</th><th>법률 상담</th><th>소송구조</th></tr></thead>
            <tbody>
              <tr><td>대상</td><td>누구나 (소득 무관)</td><td>중위소득 125% 이하 등 자격 심사</td></tr>
              <tr><td>비용</td><td>무료</td><td>무료 (공단 선납 후 회수)</td></tr>
              <tr><td>내용</td><td>법률 조언, 서류 검토</td><td>변호사 선임, 소송 대리 전 과정</td></tr>
              <tr><td>신청 방법</td><td>☎ 132, 방문, 온라인</td><td>klac.or.kr 또는 지부 방문 심사</td></tr>
              <tr><td>소요 시간</td><td>즉시 (전화·방문)</td><td>심사 1~2주 후 결정</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="fullexempt">
        <h2 className="detail-card-head">전액 면제 vs 일부 본인부담</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>구분</th><th>기준</th><th>본인 부담</th></tr></thead>
            <tbody>
              <tr><td>전액 면제</td><td>기초생활수급자, 한부모가족, 성폭력·가정폭력 피해자 등</td><td>없음</td></tr>
              <tr><td>소득 기준 이하</td><td>중위소득 125% 이하 (일반)</td><td>없음 또는 일부 (심사 결과에 따라)</td></tr>
              <tr><td>법원 소송구조</td><td>법원에서 별도 심사·결정</td><td>없음 (인용 시)</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            소송구조 결정 후 승소하면 공단이 선납한 비용을 상대방에게서 회수합니다.
            패소 시에도 원칙적으로 신청인에게 비용을 청구하지 않습니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="courtsupport">
        <h2 className="detail-card-head">법원 소송구조와의 차이</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>구분</th><th>법률구조공단</th><th>법원 소송구조</th></tr></thead>
            <tbody>
              <tr><td>신청처</td><td>klac.or.kr / ☎ 132</td><td>담당 법원 민원실</td></tr>
              <tr><td>변호사</td><td>공단 소속·위촉 변호사</td><td>본인이 선임 (비용만 유예)</td></tr>
              <tr><td>대상</td><td>소득 기준 심사</td><td>법원이 자체 판단</td></tr>
              <tr><td>병행 신청</td><td>별도로 동시 신청 가능</td><td>별도로 동시 신청 가능</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            법률구조공단과 법원 소송구조를 동시에 신청할 수 있습니다.
            법원 소송구조는 인지대·송달료 납부를 유예·면제해 주지만, 변호사는 직접 선임해야 합니다.
          </div>
        </div>
      </section>
    </>
  );
}

export const 무료법률구조법률상담무료기준소송구조차이전액면제SpokeContent: SpokeData = {
  h1: '법률 상담 무료 기준과 소송구조 차이 전액 면제 조건',
  breadcrumb: '법률상담무료기준소송구조차이전액면제',
  description: '법률 상담(누구나 무료)과 소송구조(소득 기준 심사)의 차이, 전액 면제 대상, 법원 소송구조와의 비교를 정리합니다.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    { q: '무료법률구조는 누구나 받을 수 있나요?', a: '소득이 최저생계비 125% 이하인 분, 농어업인, 장애인, 한부모 등 취약계층이 주 대상입니다. 사건 종류와 소득 기준에 따라 무료·감액 지원 범위가 다릅니다.', source: '대한법률구조공단 공식 안내', sourceUrl: 'https://www.klac.or.kr' },
    { q: '법률구조 신청은 어떻게 하나요?', a: '대한법률구조공단(klac.or.kr) 홈페이지, 전화(☎132), 또는 전국 지부·출장소를 방문해 신청할 수 있습니다.', source: '대한법률구조공단 공식 안내', sourceUrl: 'https://www.klac.or.kr' },
    { q: '어떤 사건을 지원받을 수 있나요?', a: '민사·가사·형사·행정 사건에 대한 소송 대리, 법률 상담, 서류 작성 등을 지원합니다. 단, 일부 사건 유형은 지원 제외될 수 있습니다.', source: '대한법률구조공단 공식 안내', sourceUrl: 'https://www.klac.or.kr' },
    { q: '변호사 비용은 얼마인가요?', a: '무료법률구조 대상자는 변호사 비용·소송 비용을 공단이 대신 납부합니다. 승소 후 상대방으로부터 비용을 회수하는 경우에는 공단에 반환합니다.', source: '대한법률구조공단 공식 안내', sourceUrl: 'https://www.klac.or.kr' },
    { q: '법률 상담만 받을 수도 있나요?', a: '소송까지 진행하지 않더라도 무료 법률 상담만 받는 것이 가능합니다. 방문·전화·온라인 상담 모두 가능합니다.', source: '대한법률구조공단 공식 안내', sourceUrl: 'https://www.klac.or.kr' },
  ],
  sources: [{ name: '대한법률구조공단 공식 안내', url: 'https://www.klac.or.kr' }],
};
