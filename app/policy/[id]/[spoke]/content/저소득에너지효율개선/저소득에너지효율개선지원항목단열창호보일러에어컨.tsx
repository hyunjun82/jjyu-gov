import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          저소득층 에너지효율 개선사업은 <strong>단열재·창호·보일러·에어컨</strong>을 포함한 다양한 항목을 지원합니다.
          주택 현황 조사 후 필요한 항목을 선정해 무상으로 시공해 줍니다.
        </p>
      </div>

      <section className="detail-card" id="items">
        <h2 className="detail-card-head">지원 항목</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>구분</th><th>지원 항목</th></tr></thead>
            <tbody>
              <tr><td>단열</td><td>지붕·벽·바닥 단열재 시공, 창호 교체</td></tr>
              <tr><td>난방</td><td>보일러 교체 (가스·기름·전기)</td></tr>
              <tr><td>냉방</td><td>에어컨 설치 또는 교체</td></tr>
              <tr><td>기타</td><td>환기 설비, 조명 LED 교체 등</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            모든 항목이 동시에 지원되는 것은 아닙니다. 주택 현황 조사 결과에 따라 필요한 항목이 선정됩니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="survey">
        <h2 className="detail-card-head">시공 전 현황 조사</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>조사 항목</th><th>내용</th></tr></thead>
            <tbody>
              <tr><td>주택 노후도</td><td>건축 연도, 단열 상태, 창호 상태</td></tr>
              <tr><td>난방 방식</td><td>보일러 종류, 연식, 작동 여부</td></tr>
              <tr><td>에너지 사용량</td><td>최근 전기·가스·등유 사용량 확인</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            한국에너지재단 직원이 현장 방문해 조사를 진행합니다.
            조사 결과에 따라 지원 항목과 시공 순서가 결정됩니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="contact">
        <h2 className="detail-card-head">문의처</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>채널</th><th>연락처</th></tr></thead>
            <tbody>
              <tr><td>한국에너지재단 콜센터</td><td>☎ 1670-7653</td></tr>
              <tr><td>온라인</td><td>kew.or.kr</td></tr>
              <tr><td>방문</td><td>주민센터 사회복지 담당자</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export const 저소득에너지효율개선저소득에너지효율개선지원항목단열창호보일러에어컨SpokeContent: SpokeData = {
  h1: '저소득 에너지효율 개선 지원 항목 단열 창호 보일러 에어컨',
  breadcrumb: '저소득에너지효율개선지원항목단열창호보일러에어컨',
  description: '저소득층 에너지효율 개선사업 지원 항목인 단열재·창호·보일러·에어컨 시공 내용과 현황 조사 절차를 정리합니다.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    { q: '저소득층 에너지효율 개선 사업 신청 대상은 누구인가요?', a: '기초생활수급자, 차상위계층, 에너지 바우처 수급자 등 저소득 취약계층 가구가 주 대상입니다. 노후 주택에 거주하는 경우 우선 지원됩니다.', source: '한국에너지공단 공식 안내', sourceUrl: 'https://www.kemco.or.kr' },
    { q: '어떤 공사를 지원받을 수 있나요?', a: '단열재 보강, 창호 교체, 고효율 보일러·LED 교체, 단열 창문 시공 등 에너지 절감에 효과적인 공사를 지원합니다.', source: '한국에너지공단 공식 안내', sourceUrl: 'https://www.kemco.or.kr' },
    { q: '신청은 어디서 하나요?', a: '한국에너지공단(kemco.or.kr) 또는 주민센터(읍면동사무소)를 통해 신청할 수 있습니다. 지자체별 별도 접수처가 있는 경우도 있습니다.', source: '한국에너지공단 공식 안내', sourceUrl: 'https://www.kemco.or.kr' },
    { q: '본인 부담금이 있나요?', a: '지원 대상에 따라 전액 무료 또는 일부 자부담이 발생할 수 있습니다. 기초수급자는 전액 무료가 원칙이며, 차상위계층은 일부 자부담이 있을 수 있습니다.', source: '한국에너지공단 공식 안내', sourceUrl: 'https://www.kemco.or.kr' },
    { q: '임차인도 신청할 수 있나요?', a: '임차인도 신청 가능하지만, 공사 진행을 위해 집주인 동의가 필요한 경우가 많습니다. 주민센터에서 사전 상담을 받으시기 바랍니다.', source: '한국에너지공단 공식 안내', sourceUrl: 'https://www.kemco.or.kr' },
  ],
  sources: [{ name: '한국에너지공단 공식 안내', url: 'https://www.kemco.or.kr' }],
};
