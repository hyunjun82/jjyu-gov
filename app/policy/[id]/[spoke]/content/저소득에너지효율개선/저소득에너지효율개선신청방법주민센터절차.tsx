import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          저소득층 에너지효율 개선사업은 <strong>주민센터(읍·면·동) 방문 신청</strong>이 기본입니다.
          한국에너지재단 콜센터(☎ 1670-7653) 전화 신청도 가능합니다.
        </p>
      </div>

      <section className="detail-card" id="step">
        <h2 className="detail-card-head">신청 절차</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>단계</th><th>내용</th></tr></thead>
            <tbody>
              <tr><td>1단계</td><td>주민센터 방문 또는 ☎ 1670-7653 전화 신청</td></tr>
              <tr><td>2단계</td><td>기초수급·차상위 자격 확인 (공단 연계 자동 조회)</td></tr>
              <tr><td>3단계</td><td>한국에너지재단 담당자 현장 방문 조사</td></tr>
              <tr><td>4단계</td><td>지원 항목·시공 계획 결정 및 통보</td></tr>
              <tr><td>5단계</td><td>시공 업체 방문 → 공사 진행</td></tr>
              <tr><td>6단계</td><td>완공 확인 및 사후 점검</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="docs">
        <h2 className="detail-card-head">준비 서류</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>서류</th><th>비고</th></tr></thead>
            <tbody>
              <tr><td>신분증</td><td>주민등록증 또는 운전면허증</td></tr>
              <tr><td>수급자 증명서</td><td>기초생활수급자 증명서 또는 차상위 확인서</td></tr>
              <tr><td>주택 서류</td><td>자가: 등기부등본 / 임차: 임대차계약서 + 집주인 동의서</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            수급자 증명서는 주민센터에서 즉시 발급받을 수 있습니다.
            임차 가구는 집주인 동의서 없이 신청이 불가합니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="timing">
        <h2 className="detail-card-head">신청 시기</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>항목</th><th>내용</th></tr></thead>
            <tbody>
              <tr><td>신청 기간</td><td>연중 수시 (예산 소진 시 조기 마감)</td></tr>
              <tr><td>시공 시기</td><td>신청 후 수개월 내 (대기 순번에 따라 상이)</td></tr>
              <tr><td>난방 공사</td><td>동절기 이전 시공 우선 배정</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            예산 소진 전에 빨리 신청할수록 해당 연도 내 시공 가능성이 높아집니다.
          </div>
        </div>
      </section>
    </>
  );
}

export const 저소득에너지효율개선저소득에너지효율개선신청방법주민센터절차SpokeContent: SpokeData = {
  h1: '저소득 에너지효율 개선 신청 방법 주민센터 절차와 서류',
  breadcrumb: '저소득에너지효율개선신청방법주민센터절차',
  description: '저소득층 에너지효율 개선사업 주민센터 방문 신청 절차, 준비 서류, 신청 시기를 정리합니다.',
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
