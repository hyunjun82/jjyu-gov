import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      {/* 빠른 답변 */}
      <div className="answer-box">
        <p>
          청년버팀목은 <strong>연소득 5,000만원 이하</strong> 청년이 대상(한도 1.5억, 금리 연 2.2~3.3%(우대 최저 1.0%)),
          중소기업청년은 <strong>중소·중견기업 재직자</strong>가 대상(한도 1억, 금리 연 1.2%)입니다.
          두 상품은 <strong>동시 적용 불가</strong>하므로 본인 상황에 유리한 하나를 선택해야 합니다.
        </p>
      </div>

      {/* 서론 */}
      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        청년 전세대출 상품을 알아보다 보면 청년버팀목과 중소기업청년 전세대출 두 가지가
        자주 비교됩니다. 재직 조건과 금리·한도가 달라 어떤 것이 유리한지 꼼꼼히 따져봐야 합니다.
      </p>

      {/* H2-1: 핵심 조건 비교표 */}
      <section className="detail-card" id="compare">
        <h2 className="detail-card-head">청년버팀목 vs 중소기업청년 핵심 조건 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr>
                <th>구분</th>
                <th>청년버팀목전세자금대출</th>
                <th>중소기업청년 전세대출</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>대상</td>
                <td>만 19~34세 무주택 청년</td>
                <td>중소·중견기업 재직 청년(만 34세 이하)</td>
              </tr>
              <tr>
                <td>소득 기준</td>
                <td>연소득 5,000만원 이하</td>
                <td>연소득 3,500만원 이하</td>
              </tr>
              <tr>
                <td>대출 한도</td>
                <td><strong>1억 5천만원</strong></td>
                <td><strong>1억원</strong></td>
              </tr>
              <tr>
                <td>금리(연)</td>
                <td>2.2~3.3%(우대 최저 1.0%)</td>
                <td><strong>1.2%(고정)</strong></td>
              </tr>
              <tr>
                <td>전세보증금 상한</td>
                <td>3억원 이하</td>
                <td>2억원 이하</td>
              </tr>
              <tr>
                <td>재직 조건</td>
                <td>없음</td>
                <td>중소·중견기업 재직 필수</td>
              </tr>
              <tr>
                <td>전용면적</td>
                <td>85㎡ 이하</td>
                <td>85㎡ 이하</td>
              </tr>
              <tr>
                <td>대출 기간</td>
                <td>최대 10년(2년 + 4회 연장)</td>
                <td>최대 10년(2년 + 4회 연장)</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box">
            <strong>중복 적용 불가:</strong> 두 상품을 동시에 이용할 수 없습니다.
            본인의 소득, 재직 여부, 전세보증금 규모를 기준으로 더 유리한 상품 하나를 선택하세요.
          </div>
        </div>
      </section>

      {/* H2-2: 상황별 유리한 상품 */}
      <section className="detail-card" id="which-better">
        <h2 className="detail-card-head">내 상황에 맞는 상품은?</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr>
                <th>상황</th>
                <th>유리한 상품</th>
                <th>이유</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>중소기업 재직 + 전세보증금 2억 이하</td>
                <td><strong>중소기업청년</strong></td>
                <td>금리 연 1.2%로 더 낮음</td>
              </tr>
              <tr>
                <td>전세보증금 2억 초과 ~ 3억</td>
                <td><strong>청년버팀목</strong></td>
                <td>중소기업청년 한도 1억 초과 시</td>
              </tr>
              <tr>
                <td>프리랜서·공무원·대기업 재직</td>
                <td><strong>청년버팀목</strong></td>
                <td>중소기업청년 재직 요건 미충족</td>
              </tr>
              <tr>
                <td>연소득 3,500만원 초과 ~ 5,000만원</td>
                <td><strong>청년버팀목</strong></td>
                <td>중소기업청년 소득 기준 초과</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box">
            <strong>팁:</strong> 중소기업 재직자라도 전세보증금이 2억원을 넘거나
            소득이 3,500만원 초과라면 청년버팀목이 유일한 선택지입니다.
            1억원 한도 이내라면 금리 낮은 중소기업청년을 우선 검토하세요.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      {/* H2-3: 중소기업청년 전세대출 자격 요건 */}
      <section className="detail-card" id="smb-detail">
        <h2 className="detail-card-head">중소기업청년 전세대출 자격 요건 상세</h2>
        <div className="detail-card-body">
          <p style={{ fontSize: 15, lineHeight: 1.8, margin: '0 0 16px' }}>
            중소기업청년 전세대출은 재직 요건이 핵심입니다. 아래 조건을 모두 충족해야 합니다.
          </p>
          <div className="info-box">
            <strong>재직 요건:</strong>
            <ul style={{ listStyle: 'disc', paddingLeft: 20, marginTop: 8, lineHeight: 2 }}>
              <li>중소기업기본법상 중소기업 또는 중견기업 재직자</li>
              <li>재직기간 무관(입사 당일도 가능)</li>
              <li>정규직·계약직 모두 가능(일부 은행 상이)</li>
              <li>건강보험 직장가입자 자격 보유 필수</li>
            </ul>
          </div>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>퇴직 후:</strong> 재직 중 대출을 실행했다면 퇴직 후에도 대출이 유지됩니다.
            단, 연장 신청 시 재직 여부를 다시 확인하므로 퇴직 후 연장은 불가할 수 있습니다.
          </div>
        </div>
      </section>

      {/* H2-4: 신청 채널 비교 */}
      <section className="detail-card" id="apply-channel">
        <h2 className="detail-card-head">신청 채널 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr>
                <th>구분</th>
                <th>청년버팀목</th>
                <th>중소기업청년</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>사전심사</td>
                <td>기금e든든(enhuf.molit.go.kr)</td>
                <td>기금e든든(enhuf.molit.go.kr)</td>
              </tr>
              <tr>
                <td>취급 은행</td>
                <td>우리·신한·국민·하나·농협 등 11개</td>
                <td>우리·신한·국민·하나·농협 등 11개</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box">
            <strong>동시 신청 주의:</strong> 두 상품 모두 기금e든든에서 사전심사를 진행할 수 있습니다.
            단, 최종 대출 실행은 하나의 상품만 가능합니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      {/* CTA */}
      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            청년버팀목전세자금대출 한도·금리·사전심사 신청 방법 전체를 확인하세요.
          </p>
          <a href="/policy/youth-housing-support" className="btn-cta">청년버팀목전세자금대출 전체 정보 보기 →</a>
        </div>
      </section>
    </>
  );
}

export const 청년버팀목전세자금대출vs중소기업청년전세대출비교SpokeContent: SpokeData = {
  h1: '청년버팀목 vs 중소기업청년 전세대출 차이 비교',
  breadcrumb: 'vs중소기업청년전세대출비교',
  description:
    '청년버팀목(한도 1.5억, 금리 연 2.2~3.3%(우대 최저 1.0%))과 중소기업청년 전세대출(한도 1억, 금리 연 1.2%)의 조건 차이를 비교합니다. 상황별 유리한 상품 선택 기준과 중복 적용 불가 주의사항을 정리했습니다.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '청년버팀목과 중소기업청년 전세대출을 동시에 받을 수 있나요?',
      a: '불가합니다. 두 상품은 동시에 이용할 수 없으며, 본인 조건에 맞는 하나의 상품만 선택할 수 있습니다.',
      source: '주택도시기금 청년버팀목전세자금대출 안내',
      sourceUrl: 'https://nhuf.molit.go.kr',
    },
    {
      q: '중소기업 재직자인데 청년버팀목도 신청할 수 있나요?',
      a: '네, 중소기업 재직자도 청년버팀목을 신청할 수 있습니다. 다만, 중소기업청년 전세대출과 동시 이용은 불가하므로 조건을 비교해 유리한 상품 하나를 선택하세요.',
      source: '주택도시기금 청년버팀목전세자금대출 안내',
      sourceUrl: 'https://nhuf.molit.go.kr',
    },
    {
      q: '전세보증금이 2억 5천만원인데 어떤 상품이 적합한가요?',
      a: '중소기업청년 전세대출 한도는 1억원(전세보증금 2억원 이하)이므로, 보증금 2억 5천만원이면 청년버팀목(최대 1.5억, 보증금 3억 이하)만 이용 가능합니다.',
      source: '주택도시기금 청년버팀목전세자금대출 안내',
      sourceUrl: 'https://nhuf.molit.go.kr',
    },
    {
      q: '중소기업청년 전세대출에서 퇴직하면 대출이 즉시 회수되나요?',
      a: '즉시 회수되지는 않습니다. 다만 연장 신청 시 재직 여부를 재확인하므로 퇴직 상태라면 연장이 거절될 수 있습니다. 이 경우 청년버팀목으로 전환을 검토하세요.',
      source: '주택도시기금 중소기업청년 전세대출 안내',
      sourceUrl: 'https://nhuf.molit.go.kr',
    },
    {
      q: '연소득이 4,000만원이라면 어느 상품이 유리한가요?',
      a: '중소기업청년(소득 3,500만원 이하 기준)에 해당하지 않으므로 청년버팀목을 이용해야 합니다. 청년버팀목은 연소득 5,000만원 이하까지 가능합니다.',
      source: '주택도시기금 청년버팀목전세자금대출 안내',
      sourceUrl: 'https://nhuf.molit.go.kr',
    },
  ],
  sources: [
    { name: '주택도시기금 청년버팀목전세자금대출 안내', url: 'https://nhuf.molit.go.kr' },
    { name: '기금e든든 사전심사 서비스', url: 'https://enhuf.molit.go.kr' },
  ],
};
