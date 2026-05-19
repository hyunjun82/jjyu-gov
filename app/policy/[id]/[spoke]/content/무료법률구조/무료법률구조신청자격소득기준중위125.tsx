import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          대한법률구조공단의 무료법률구조는 <strong>기준 중위소득 125% 이하</strong>인 국민이면 신청할 수 있습니다.
          소득 외에 농·어업인, 장애인, 한부모가족 등 특정 대상자는 소득 기준과 무관하게 지원받을 수 있습니다.
        </p>
      </div>

      <section className="detail-card" id="income">
        <h2 className="detail-card-head">소득 기준 (기준 중위소득 125%)</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>가구원 수</th><th>기준 중위소득 100%</th><th>신청 기준 125%</th></tr></thead>
            <tbody>
              <tr><td>1인</td><td>2,392,013원</td><td>2,990,016원 이하</td></tr>
              <tr><td>2인</td><td>3,932,658원</td><td>4,915,823원 이하</td></tr>
              <tr><td>3인</td><td>5,025,353원</td><td>6,281,691원 이하</td></tr>
              <tr><td>4인</td><td>6,097,773원</td><td>7,622,216원 이하</td></tr>
              <tr><td>5인</td><td>7,108,192원</td><td>8,885,240원 이하</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            월 평균 소득액 기준이며, 재산도 함께 심사합니다.
            금융재산·부동산 등을 포함한 환산 소득이 기준을 초과하면 일부 비용을 부담할 수 있습니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="special">
        <h2 className="detail-card-head">소득 무관 우선 지원 대상</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>대상</th><th>근거</th></tr></thead>
            <tbody>
              <tr><td>농·어업인</td><td>농어업인 삶의 질 향상 특별법</td></tr>
              <tr><td>장애인</td><td>장애인복지법</td></tr>
              <tr><td>한부모가족</td><td>한부모가족지원법</td></tr>
              <tr><td>북한이탈주민</td><td>북한이탈주민법</td></tr>
              <tr><td>성폭력·가정폭력 피해자</td><td>관련 특별법</td></tr>
              <tr><td>국가유공자</td><td>국가유공자법</td></tr>
              <tr><td>결혼이민자·다문화가족</td><td>다문화가족지원법</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            위 대상자는 소득 기준을 별도로 심사하지 않고 우선 지원합니다.
            법원을 통한 소송구조도 별도로 신청할 수 있습니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="howcheck">
        <h2 className="detail-card-head">소득 기준 확인 방법</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>방법</th><th>안내</th></tr></thead>
            <tbody>
              <tr><td>전화 상담</td><td>☎ 132 (법률구조공단 콜센터, 24시간)</td></tr>
              <tr><td>온라인 신청</td><td>klac.or.kr → 법률지원 → 소송구조 신청</td></tr>
              <tr><td>방문 상담</td><td>전국 공단 지부·출장소 방문, 소득 서류 지참</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            소득 기준이 애매한 경우에도 일단 132번에 전화하면 자격 여부를 무료로 안내받을 수 있습니다.
          </div>
        </div>
      </section>
    </>
  );
}

export const 무료법률구조무료법률구조신청자격소득기준중위125SpokeContent: SpokeData = {
  h1: '무료법률구조 신청 자격 소득 기준 중위소득 125%',
  breadcrumb: '무료법률구조신청자격소득기준중위125',
  description: '대한법률구조공단 무료법률구조 신청 자격인 기준 중위소득 125% 이하 기준과 소득 무관 우선 지원 대상을 정리합니다.',
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
