import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      {/* 빠른 답변 */}
      <div className="answer-box">
        <p>
          기금e든든(enhuf.molit.go.kr)에서 집 계약 전에 <strong>대출 가능 여부·한도·금리를 미리 확인</strong>할 수 있습니다.
          신청 후 <strong>1~3 영업일</strong> 내 결과가 나오며, 심사 결과는 <strong>3개월간 유효</strong>합니다.
          공인인증서(또는 공동인증서) 로그인 후 온라인으로 5분 내 신청 가능합니다.
        </p>
      </div>

      {/* 서론 */}
      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        전세 집을 계약하고 나서 대출이 안 된다는 통보를 받으면 계약금을 돌려받지 못하는
        최악의 상황이 생길 수 있습니다. 기금e든든 사전심사는 계약 전에 이런 리스크를
        차단할 수 있는 가장 중요한 첫 단계입니다.
      </p>

      {/* H2-1: 사전심사 단계별 절차 */}
      <section className="detail-card" id="process">
        <h2 className="detail-card-head">기금e든든 사전심사 신청 절차 (5단계)</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr>
                <th>단계</th>
                <th>내용</th>
                <th>소요 시간</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>① 접속</td>
                <td>기금e든든(enhuf.molit.go.kr) 접속</td>
                <td>즉시</td>
              </tr>
              <tr>
                <td>② 상품 선택</td>
                <td>청년전세자금 사전심사 선택</td>
                <td>즉시</td>
              </tr>
              <tr>
                <td>③ 로그인</td>
                <td>공동인증서(공인인증서) 로그인</td>
                <td>1~2분</td>
              </tr>
              <tr>
                <td>④ 정보 입력</td>
                <td>소득·재산·세대 정보 입력</td>
                <td>3~5분</td>
              </tr>
              <tr>
                <td>⑤ 결과 확인</td>
                <td>1~3 영업일 후 결과 통보(문자/이메일)</td>
                <td>1~3 영업일</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box">
            <strong>사전심사 유효기간:</strong> 심사 결과는 3개월간 유효합니다.
            3개월 내 전세 계약을 체결하고 해당 결과를 은행에 제출하면 본심사가 간소화됩니다.
          </div>
        </div>
      </section>

      {/* H2-2: 준비 서류 */}
      <section className="detail-card" id="documents">
        <h2 className="detail-card-head">사전심사 시 필요한 준비 서류</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr>
                <th>서류</th>
                <th>발급처</th>
                <th>비고</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>공동인증서</td>
                <td>은행·금융기관</td>
                <td>본인 명의 필수</td>
              </tr>
              <tr>
                <td>건강보험료 납부확인서</td>
                <td>국민건강보험공단</td>
                <td>소득 추정용</td>
              </tr>
              <tr>
                <td>근로소득원천징수영수증</td>
                <td>회사·홈택스</td>
                <td>근로소득자의 경우</td>
              </tr>
              <tr>
                <td>주민등록등본</td>
                <td>정부24·주민센터</td>
                <td>세대 구성 확인용</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box">
            <strong>온라인 정보 자동 조회:</strong> 사전심사 시 행정정보공동이용 동의를 하면
            주민등록·건강보험·세금 정보가 자동으로 조회되어 서류 제출 없이 진행 가능합니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      {/* H2-3: 사전심사 결과 활용 */}
      <section className="detail-card" id="result-usage">
        <h2 className="detail-card-head">사전심사 결과 이후 흐름</h2>
        <div className="detail-card-body">
          <p style={{ fontSize: 15, lineHeight: 1.8, margin: '0 0 16px' }}>
            사전심사 결과를 바탕으로 집 계약 후 본심사(은행 방문)까지 이어지는 전체 흐름입니다.
          </p>
          <ol style={{ listStyle: 'decimal', paddingLeft: 20, lineHeight: 2.2 }}>
            <li>기금e든든 사전심사 신청 → 결과 확인(한도·금리 확인)</li>
            <li>결과 바탕으로 전세 집 탐색 및 계약(3개월 유효)</li>
            <li>전세 계약서 지참, 우리은행·신한·국민·하나·농협 등 취급 은행 방문</li>
            <li>본심사 서류 제출 → 은행 심사(3~5 영업일)</li>
            <li>대출 승인 후 전세 잔금일에 임대인 계좌로 직접 지급</li>
          </ol>
          <div className="info-box">
            <strong>취급 은행:</strong> 우리은행, 신한은행, 국민은행, 하나은행, 농협은행,
            기업은행, 부산은행, 대구은행, 경남은행, 광주은행, 전북은행.
            지점마다 처리 속도가 다르므로 잔금일 최소 2주 전에 은행을 방문하는 것이 좋습니다.
          </div>
        </div>
      </section>

      {/* H2-4: 사전심사 통과 후 주의사항 */}
      <section className="detail-card" id="caution">
        <h2 className="detail-card-head">사전심사 통과해도 본심사 탈락하는 경우</h2>
        <div className="detail-card-body">
          <div className="info-box">
            <strong>주택 요건 불충족:</strong> 사전심사는 개인 조건만 검토합니다.
            계약한 주택이 전세보증금 3억원 초과, 전용면적 초과 등 요건 미달이면 본심사 탈락합니다.
          </div>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>소득 변동:</strong> 사전심사 후 소득·재산 상태가 변동되면
            본심사 결과가 달라질 수 있습니다. 3개월 내에 신청을 마무리하는 것이 안전합니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      {/* CTA */}
      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            청년버팀목전세자금대출 한도·금리·우대조건 전체 정보를 확인하세요.
          </p>
          <a href="/policy/youth-housing-support" className="btn-cta">청년버팀목전세자금대출 전체 정보 보기 →</a>
        </div>
      </section>
    </>
  );
}

export const 청년버팀목전세자금대출기금e든든사전심사신청방법SpokeContent: SpokeData = {
  h1: '청년버팀목전세자금대출 기금e든든 사전심사 신청 방법',
  breadcrumb: '기금e든든사전심사신청방법',
  description:
    '청년버팀목전세자금대출 기금e든든 사전심사는 집 계약 전 대출 가능 여부·한도·금리를 미리 확인하는 서비스입니다. 신청 절차 5단계, 준비 서류, 결과 활용 방법을 정리했습니다.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '기금e든든 사전심사는 무료인가요?',
      a: '네, 무료입니다. 기금e든든(enhuf.molit.go.kr)에 접속해 공동인증서 로그인 후 무료로 사전심사를 신청할 수 있습니다.',
      source: '주택도시기금 기금e든든 안내',
      sourceUrl: 'https://enhuf.molit.go.kr',
    },
    {
      q: '사전심사 결과가 나오는 데 얼마나 걸리나요?',
      a: '신청 후 1~3 영업일 내에 문자 또는 이메일로 결과를 통보받습니다. 결과는 기금e든든 사이트에서도 확인할 수 있습니다.',
      source: '주택도시기금 기금e든든 안내',
      sourceUrl: 'https://enhuf.molit.go.kr',
    },
    {
      q: '사전심사 결과가 유효한 기간은 얼마나 되나요?',
      a: '3개월입니다. 사전심사 결과를 받은 날로부터 3개월 내에 전세 계약을 체결하고 은행 본심사를 신청해야 합니다.',
      source: '주택도시기금 기금e든든 안내',
      sourceUrl: 'https://enhuf.molit.go.kr',
    },
    {
      q: '사전심사를 통과하면 대출이 확정되는 건가요?',
      a: '아닙니다. 사전심사는 개인 조건 기준의 예비 확인입니다. 계약한 주택이 요건(전세보증금 3억원 이하, 면적 기준 등)을 충족해야 본심사에서 최종 승인됩니다.',
      source: '주택도시기금 청년버팀목전세자금대출 안내',
      sourceUrl: 'https://nhuf.molit.go.kr',
    },
    {
      q: '어느 은행에서 대출 실행이 되나요?',
      a: '우리은행, 신한은행, 국민은행, 하나은행, 농협은행, 기업은행, 부산·대구·경남·광주·전북은행 등에서 취급합니다. 잔금일 최소 2주 전에 방문하는 것을 권장합니다.',
      source: '주택도시기금 청년버팀목전세자금대출 안내',
      sourceUrl: 'https://nhuf.molit.go.kr',
    },
  ],
  sources: [
    { name: '주택도시기금 기금e든든 사전심사 서비스', url: 'https://enhuf.molit.go.kr' },
    { name: '주택도시기금 청년버팀목전세자금대출 안내', url: 'https://nhuf.molit.go.kr' },
  ],
};
