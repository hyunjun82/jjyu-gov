import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>청년 주거지원은 예산 소진으로 <strong>선착순 마감</strong>되거나,
        <strong>부모 소득 합산 기준</strong>에서 탈락하거나, <strong>중복 수급 제한</strong>에 걸려 못 받는 경우가 많습니다.
        신청 시기와 서류 준비가 중요합니다.</p>
      </div>
      <section className="detail-card" id="issues">
        <h2 className="detail-card-head">주요 탈락·제한 사유</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>사유</th><th>내용</th></tr></thead>
            <tbody>
              <tr><td>예산 소진 선착순 마감</td><td>공고 후 며칠 내 마감. 알림 신청 필수</td></tr>
              <tr><td>부모 소득 합산 초과</td><td>본인 소득은 낮아도 가구 소득이 기준 초과 시 탈락</td></tr>
              <tr><td>중복 수급 불가</td><td>LH 임대·청년전세자금대출 수혜 중이면 월세 지원 불가</td></tr>
              <tr><td>보증금 초과</td><td>보증금 5,000만 원 초과 주택은 신청 불가</td></tr>
              <tr><td>월세 형태 아님</td><td>전세·보증금만 있는 경우 해당 없음</td></tr>
              <tr><td>부모와 같은 주소</td><td>주민등록상 부모와 동일 주소 시 분리 인정 안 됨</td></tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="detail-card" id="tips">
        <h2 className="detail-card-head">통과 확률 높이는 방법</h2>
        <div className="detail-card-body">
          <p style={{lineHeight:1.8}}>① 공고 첫날 신청<br/>② 주민등록 분리 완료 확인<br/>③ 월세 계약서·통장 이체 내역 준비<br/>④ 복지로에서 사전 모의 자격 확인</p>
        </div>
      </section>
    </>
  );
}

export const 청년주거지원청년주거지원정책문제점못받는경우SpokeContent: SpokeData = {
  h1: '청년 주거지원 정책 문제점 — 자격 있어도 못 받는 경우',
  breadcrumb: '청년주거지원정책문제점못받는경우',
  description: '청년 주거지원 정책에서 자격 기준 충족에도 지원을 못 받는 실제 사례와 이유를 정리합니다.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '자격이 있는데 왜 못 받을 수 있나요?',
      a: '소득 산정 방식, 부모 소득 포함 여부, 주소지 이전 시점 등 세부 기준을 충족하지 못하는 경우가 많습니다.',
      source: '국토교통부 청년주거지원',
      sourceUrl: 'https://www.molit.go.kr',
    },
    {
      q: '부모 집에 주소가 있어도 청년 지원을 받을 수 있나요?',
      a: '청년월세 특별지원은 부모와 별도 거주·전입신고가 필수입니다. 주소가 부모 집이면 신청이 어렵습니다.',
      source: '국토교통부',
      sourceUrl: 'https://www.molit.go.kr',
    },
    {
      q: '월세가 60만 원 초과하면 아예 불가한가요?',
      a: '청년월세 특별지원은 불가하지만, 주거급여 또는 버팀목 전세 대출 등 다른 지원을 받을 수 있습니다.',
      source: '국토교통부',
      sourceUrl: 'https://www.molit.go.kr',
    },
    {
      q: '원가구 소득 기준 초과로 탈락한 경우 다른 방법은?',
      a: '청년 본인 소득만 보는 청년 전용 버팀목 전세 대출이나 주거급여를 확인하세요. 부모 소득을 보지 않는 유형도 있습니다.',
      source: '주택도시기금',
      sourceUrl: 'https://nhuf.molit.go.kr',
    },
    {
      q: '신청 후 탈락 통보를 받으면 이의신청이 가능한가요?',
      a: '네. 처분 통보 후 90일 이내에 관할 행정청에 이의신청을 할 수 있습니다. 증빙 서류를 추가 제출하면 재심사가 가능합니다.',
      source: '국토교통부',
      sourceUrl: 'https://www.molit.go.kr',
    }
  ],
  sources: [
    { name: '국토교통부·마이홈포털', url: 'https://www.myhome.go.kr' },
  ],
};
