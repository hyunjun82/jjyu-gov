import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      {/* 빠른 답변 */}
      <div className="answer-box">
        <p>
          청년버팀목전세자금대출 기본금리는 소득 구간에 따라 <strong>연 2.2~3.3%</strong>입니다(변동금리).
          우대금리를 적용받으면 최저 <strong>연 1.0%</strong>까지 낮아질 수 있습니다.
          주요 우대 항목은 기초수급·차상위(1.0%p), 만 25세 미만 단독세대주(0.3%p),
          중소기업 취업청년(0.3%p), 부동산 전자계약(0.1%p) 등입니다.
        </p>
      </div>

      {/* 서론 */}
      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        청년버팀목 대출은 소득 구간별로 기본금리가 다르고, 본인 상황에 맞는 우대금리를
        모두 적용하면 시중 전세대출보다 훨씬 낮은 금리를 받을 수 있습니다.
        우대금리 항목을 하나도 빠뜨리지 않고 챙기는 것이 핵심입니다.
      </p>

      {/* H2-1: 소득 구간별 기본금리 */}
      <section className="detail-card" id="base-rate">
        <h2 className="detail-card-head">소득 구간별 기본금리 (변동금리)</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr>
                <th>부부합산 연소득</th>
                <th>기본금리(연)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2,000만원 이하</td>
                <td><strong>2.2%</strong></td>
              </tr>
              <tr>
                <td>2,000만원 초과 ~ 4,000만원 이하</td>
                <td><strong>2.5%</strong></td>
              </tr>
              <tr>
                <td>4,000만원 초과 ~ 6,000만원 이하</td>
                <td><strong>2.9%</strong></td>
              </tr>
              <tr>
                <td>6,000만원 초과 ~ 7,500만원 이하</td>
                <td><strong>3.3%</strong></td>
              </tr>
            </tbody>
          </table>
          <div className="info-box">
            <strong>변동금리(국토교통부 고시):</strong> 청년버팀목 대출은 변동금리입니다.
            국토교통부가 고시하는 기준금리가 변경되면 금리도 조정됩니다.
            지방 소재 주택은 0.2%p 추가 인하 적용됩니다.
          </div>
        </div>
      </section>

      {/* H2-2: 우대금리 항목 */}
      <section className="detail-card" id="preferential-rate">
        <h2 className="detail-card-head">우대금리 항목별 할인폭</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>금리우대 (아래 중 하나만, 중복 적용 불가)</strong>
          </div>
          <table className="compare-table">
            <thead>
              <tr>
                <th>우대 항목</th>
                <th>할인율</th>
                <th>조건</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>기초생활수급권자·차상위계층</td>
                <td>1.0%p</td>
                <td>연소득 4,000만원 이하</td>
              </tr>
              <tr>
                <td>한부모가구</td>
                <td>1.0%p</td>
                <td>연소득 5,000만원 이하</td>
              </tr>
              <tr>
                <td>장애인·다문화·노인부양·고령자가구</td>
                <td>0.2%p</td>
                <td>해당 가구 요건 충족</td>
              </tr>
              <tr>
                <td>다자녀가구</td>
                <td>0.7%p</td>
                <td>자녀 3인 이상 (2자녀 0.5%p, 1자녀 0.3%p)</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12, marginBottom: 12 }}>
            <strong>추가우대금리 (중복 적용 가능)</strong>
          </div>
          <table className="compare-table">
            <thead>
              <tr>
                <th>추가우대 항목</th>
                <th>할인율</th>
                <th>조건</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>만 25세 미만 단독세대주</td>
                <td>0.3%p</td>
                <td>전용 60㎡ 이하, 보증금 3억 이하, 대출 1.2억 이하</td>
              </tr>
              <tr>
                <td>중소기업취업(창업)청년</td>
                <td>0.3%p</td>
                <td>중소·중견기업 재직자 또는 기금 지원 청년창업자</td>
              </tr>
              <tr>
                <td>주거안정 월세대출 성실납부자</td>
                <td>0.2%p</td>
                <td>기금 월세대출 성실 납부 이력</td>
              </tr>
              <tr>
                <td>부동산 전자계약 체결</td>
                <td>0.1%p</td>
                <td>전자계약시스템으로 체결 (2026.12.31까지)</td>
              </tr>
              <tr>
                <td>대출 신청금액 30% 이하</td>
                <td>0.2%p</td>
                <td>심사 산정금액의 30% 이하 신청 (2024.7.31부터)</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>최저금리 하한:</strong> 우대금리 적용 후 최종금리가 연 1.0% 미만인 경우
            연 1.0%로 적용됩니다. 우대 적용 상한: 기초수급·차상위·한부모 1.0%p, 다자녀 0.7%p, 그 외 0.5%p.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      {/* H2-3: 우대금리 시뮬레이션 */}
      <section className="detail-card" id="simulation">
        <h2 className="detail-card-head">우대금리 적용 시뮬레이션</h2>
        <div className="detail-card-body">
          <p style={{ fontSize: 15, lineHeight: 1.8, margin: '0 0 16px' }}>
            소득 3,000만원인 청년이 중소기업 재직 + 전자계약을 적용할 경우:
          </p>
          <table className="compare-table">
            <thead>
              <tr>
                <th>항목</th>
                <th>금리</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>기본금리(연소득 2,000~4,000만원)</td>
                <td>2.5%</td>
              </tr>
              <tr>
                <td>중소기업취업청년 추가우대</td>
                <td>-0.3%p</td>
              </tr>
              <tr>
                <td>부동산 전자계약 추가우대</td>
                <td>-0.1%p</td>
              </tr>
              <tr>
                <td><strong>최종 적용 금리</strong></td>
                <td><strong>2.1%</strong></td>
              </tr>
            </tbody>
          </table>
          <div className="info-box">
            <strong>기초수급자(연소득 2,000만원 이하) + 만25세 미만 + 전자계약 조합:</strong>
            2.2% - 1.0%p(기초수급) - 0.3%p(만25세) - 0.1%p(전자계약) = 0.8% → 하한 적용 <strong>연 1.0%</strong>.
          </div>
        </div>
      </section>

      {/* H2-4: 금리 재산정 */}
      <section className="detail-card" id="rate-renewal">
        <h2 className="detail-card-head">연장 시 금리 재산정 방식</h2>
        <div className="detail-card-body">
          <p style={{ fontSize: 15, lineHeight: 1.8, margin: '0 0 16px' }}>
            청년버팀목 대출은 변동금리로, 국토교통부 고시 기준금리 변경 시 금리가 조정됩니다.
            최장 10년 이용 가능(2년 단위 갱신).
          </p>
          <div className="info-box">
            <strong>연장 방식:</strong> 2년 만기 후 최장 10년까지 연장 가능.
            연장 시점의 국토교통부 고시 금리로 재산정됩니다.
          </div>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>우대금리 재확인:</strong> 연장 시 우대 조건(중소기업 재직 여부, 자녀 수 등)
            변동 여부를 다시 확인하고 서류를 제출해야 우대금리가 계속 적용됩니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      {/* CTA */}
      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            청년버팀목전세자금대출 한도·신청 절차·사전심사 방법까지 전체 정보를 확인하세요.
          </p>
          <a href="/policy/youth-housing-support" className="btn-cta">청년버팀목전세자금대출 전체 정보 보기 →</a>
        </div>
      </section>
    </>
  );
}

export const 청년버팀목전세자금대출금리연1점3~4점3우대금리조건SpokeContent: SpokeData = {
  h1: '청년버팀목전세자금대출 금리 연 2.2~3.3%, 우대금리 조건 정리',
  breadcrumb: '금리연1점3~4점3우대금리조건',
  description:
    '청년버팀목전세자금대출 기본금리는 소득에 따라 연 2.2~3.3%(변동금리). 기초수급·차상위 1.0%p, 만 25세 미만 단독세대주 0.3%p, 중소기업취업청년 0.3%p 등 우대 시 최저 연 1.0%.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '청년버팀목 대출 금리는 고정금리인가요, 변동금리인가요?',
      a: '변동금리(국토교통부 고시)입니다. 국토교통부가 고시하는 기준금리가 변경되면 금리도 조정됩니다. 연장 시점의 금리로 재산정됩니다.',
      source: '주택도시기금 청년전용 버팀목전세자금대출 안내',
      sourceUrl: 'https://nhuf.molit.go.kr/FP/FP05/FP0502/FP05020301.jsp',
    },
    {
      q: '만 25세 미만 단독세대주 우대금리 0.3%p 조건이 무엇인가요?',
      a: '전용면적 60㎡ 이하 주택, 보증금 3억원 이하, 대출금 1.2억원 이하인 경우 만 25세 미만 단독세대주에게 추가우대금리 0.3%p가 적용됩니다.',
      source: '주택도시기금 청년전용 버팀목전세자금대출 안내',
      sourceUrl: 'https://nhuf.molit.go.kr/FP/FP05/FP0502/FP05020301.jsp',
    },
    {
      q: '중소기업 재직자 우대금리는 어떻게 받나요?',
      a: '중소·중견기업에 재직 중인 청년이면 추가우대금리 0.3%p를 받을 수 있습니다. 단 대기업·사행성 업종·공기업 근무자는 제외입니다.',
      source: '주택도시기금 청년전용 버팀목전세자금대출 안내',
      sourceUrl: 'https://nhuf.molit.go.kr/FP/FP05/FP0502/FP05020301.jsp',
    },
    {
      q: '부동산 전자계약을 하면 금리가 얼마나 낮아지나요?',
      a: '부동산거래 전자계약시스템으로 전세계약을 체결하면 추가우대금리 0.1%p가 최초 대출기한 1회 적용됩니다. 2026년 12월 31일까지 신규 접수분에 적용됩니다.',
      source: '주택도시기금 청년전용 버팀목전세자금대출 안내',
      sourceUrl: 'https://nhuf.molit.go.kr/FP/FP05/FP0502/FP05020301.jsp',
    },
    {
      q: '우대금리 최저 금리는 얼마까지 낮아지나요?',
      a: '우대금리 적용 후 최종금리가 연 1.0% 미만이 되더라도 최저 연 1.0%로 적용됩니다. 기초수급·차상위계층의 경우 최대 1.0%p 우대가 가능합니다.',
      source: '주택도시기금 청년전용 버팀목전세자금대출 안내',
      sourceUrl: 'https://nhuf.molit.go.kr/FP/FP05/FP0502/FP05020301.jsp',
    },
  ],
  sources: [
    { name: '주택도시기금 청년전용 버팀목전세자금대출 안내', url: 'https://nhuf.molit.go.kr/FP/FP05/FP0502/FP05020301.jsp' },
    { name: '기금e든든 사전심사 서비스', url: 'https://enhuf.molit.go.kr' },
  ],
};
