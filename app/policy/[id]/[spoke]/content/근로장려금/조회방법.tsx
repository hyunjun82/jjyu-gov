import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          홈택스(PC) 또는 손택스(앱) → 장려금·연말정산·전자기부금 →
          <strong> 장려금 심사 진행 상황 조회</strong>에서 신청 내역·심사 결과·지급 예정일을
          모두 확인할 수 있습니다. 로그인 없이 개별인증번호로도 조회 가능합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        신청은 마쳤는데 내 신청이 제대로 접수됐는지, 심사 결과는 어떻게 됐는지,
        언제 입금되는지 궁금한 분들을 위해 조회 방법을 단계별로 정리했습니다.
        PC·모바일·전화 세 가지 방법 모두 안내합니다.
      </p>

      <section className="detail-card" id="hometax">
        <h2 className="detail-card-head">홈택스(PC)에서 조회하는 방법</h2>
        <div className="detail-card-body">
          <ol style={{ listStyle: 'decimal', paddingLeft: 20, lineHeight: 2.4 }}>
            <li>홈택스(hometax.go.kr) 접속 후 로그인 (공동·금융인증서, 간편인증)</li>
            <li>상단 메뉴 → <strong>장려금·연말정산·전자기부금</strong> 클릭</li>
            <li>근로·자녀장려금 → <strong>장려금 심사 진행 상황 조회</strong> 선택</li>
            <li>신청 내역 확인 / 심사 단계 / 심사 결과 순으로 확인</li>
          </ol>
          <div className="info-box">
            <strong>로그인 없이 조회하려면:</strong> 국세청에서 발송한 안내문의
            <strong> 개별인증번호(8자리)</strong>로 간편 조회가 가능합니다.
            안내문을 받지 못한 경우 로그인 후 조회하세요.
          </div>
        </div>
      </section>

      <section className="detail-card" id="sontax">
        <h2 className="detail-card-head">손택스(모바일 앱)에서 조회하는 방법</h2>
        <div className="detail-card-body">
          <ol style={{ listStyle: 'decimal', paddingLeft: 20, lineHeight: 2.4 }}>
            <li>손택스 앱 실행 후 로그인</li>
            <li>하단 또는 메뉴 → <strong>장려금·연말정산</strong> 탭 선택</li>
            <li><strong>근로·자녀장려금 정기/반기 신청</strong> 선택</li>
            <li>신청내역 확인 → 심사 진행 상황 확인</li>
          </ol>
          <table className="compare-table">
            <thead>
              <tr><th>확인 항목</th><th>내용</th></tr>
            </thead>
            <tbody>
              <tr><td>신청 접수 여부</td><td>신청일자·신청금액 확인</td></tr>
              <tr><td>심사 진행 단계</td><td>접수 → 심사 중 → 결정 단계로 표시</td></tr>
              <tr><td>지급 결정 금액</td><td>최종 지급 예정 금액 확인</td></tr>
              <tr><td>지급 완료 여부</td><td>입금 처리 완료 여부 표시</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="ars">
        <h2 className="detail-card-head">전화로 조회하는 방법 (ARS)</h2>
        <div className="detail-card-body">
          <p>
            인터넷 사용이 어려운 경우, 전화로도 조회할 수 있습니다.
          </p>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>국세상담센터 ☎1544-9944</strong> (ARS 자동응답)<br />
            음성 안내에 따라 주민등록번호를 입력하면 심사 결과 및 예상 지급액을 안내받습니다.
          </div>
          <div className="info-box">
            <strong>국세청 상담 ☎126</strong> (상담원 연결)<br />
            평일 9시~18시. 조회 외에 신청 오류·환수 통보 등 복잡한 상담도 가능합니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="status">
        <h2 className="detail-card-head">심사 단계별 의미는?</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>조회 결과</th><th>의미</th><th>다음 단계</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>접수 완료</strong></td>
                <td>신청이 정상 접수됨</td>
                <td>국세청 심사 대기 중</td>
              </tr>
              <tr>
                <td><strong>심사 중</strong></td>
                <td>소득·재산 자료 검토 중</td>
                <td>결과까지 수주 소요 가능</td>
              </tr>
              <tr>
                <td><strong>지급 결정</strong></td>
                <td>지급액 확정</td>
                <td>지급일(정기 9월 말)에 입금</td>
              </tr>
              <tr>
                <td><strong>지급 완료</strong></td>
                <td>계좌 입금 처리됨</td>
                <td>미입금 시 계좌 확인 필요</td>
              </tr>
              <tr>
                <td><strong>지급 불능</strong></td>
                <td>계좌 오류 등</td>
                <td>홈택스에서 계좌 수정 후 재지급</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="eligibility-check">
        <h2 className="detail-card-head">신청 전 대상자 여부 미리 확인하는 방법</h2>
        <div className="detail-card-body">
          <p>
            신청하기 전에 내가 근로장려금 대상인지 먼저 확인하려면 아래 두 가지 방법을 이용하세요.
          </p>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>홈택스 모의계산:</strong> 홈택스 → 장려금·연말정산·전자기부금 → 모의계산<br />
            가구 유형·소득·재산 입력 시 지급 예상 금액 확인 가능
          </div>
          <div className="info-box">
            <strong>신청 자격 확인:</strong> 홈택스 → 조회/발급 → 근로자녀장려금 → 신청 자격 확인<br />
            주민번호 및 관련 정보를 입력하면 자격 해당 여부 조회
          </div>
        </div>
      </section>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            지급 금액 기준(단독 165만·홑벌이 285만·맞벌이 330만원),<br />
            신청 조건, 반기·정기 차이 등 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/earned-income-tax-credit" className="btn-cta">
            2026 근로장려금 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 조회방법SpokeContent: SpokeData = {
  h1: '근로장려금 조회 신청 후 지급 예정일 확인하는 방법',
  breadcrumb: '조회방법',
  description:
    '근로장려금 조회 방법을 정리했습니다. 홈택스·손택스·ARS 전화 세 가지 방법으로 신청 접수 여부, 심사 진행 단계, 지급 결정 금액을 확인할 수 있습니다. 심사 단계별 의미도 안내합니다.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '근로장려금 신청 후 접수가 됐는지 어떻게 확인하나요?',
      a: '홈택스(hometax.go.kr) 또는 손택스 앱 → 장려금·연말정산·전자기부금 → 장려금 심사 진행 상황 조회에서 신청 접수 여부와 심사 진행 단계를 확인할 수 있습니다.',
      source: '국세청 홈택스',
      sourceUrl: 'https://hometax.go.kr',
    },
    {
      q: '인터넷 없이 전화로 근로장려금 조회가 가능한가요?',
      a: '가능합니다. 국세상담센터 ☎1544-9944 ARS에 전화해 주민등록번호를 입력하면 심사 결과와 예상 지급액을 안내받을 수 있습니다.',
      source: '위기브 근로장려금 지급일 확인 안내',
      sourceUrl: 'https://www.wegive.co.kr/wezine/detail?id=2145',
    },
    {
      q: '지급 결정이 됐는데 돈이 안 들어왔어요.',
      a: '계좌번호가 잘못됐거나 지급 불능 상태일 수 있습니다. 홈택스에서 계좌를 확인·수정하면 다음 지급 차수에 재입금됩니다.',
      source: '국세청 손택스 심사진행 안내',
      sourceUrl: 'https://mob.tbwf.hometax.go.kr',
    },
    {
      q: '로그인 없이 근로장려금을 조회할 수 있나요?',
      a: '국세청에서 받은 안내문의 개별인증번호(8자리)가 있다면 로그인 없이 간편 조회가 가능합니다. 안내문이 없으면 로그인 후 조회하세요.',
      source: '국세청 홈택스',
      sourceUrl: 'https://hometax.go.kr',
    },
    {
      q: '신청 자격이 되는지 미리 확인할 수 있나요?',
      a: '홈택스 모의계산 또는 조회/발급 → 신청 자격 확인 메뉴에서 가구 유형·소득·재산을 입력하면 지급 예상 금액과 자격 해당 여부를 미리 확인할 수 있습니다.',
      source: '네이버 블로그 근로장려금 대상 확인 방법',
      sourceUrl: 'https://blog.naver.com/meaning87',
    },
  ],
  sources: [
    { name: '국세청 근로·자녀장려금 심사 및 지급', url: 'https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?mi=2341&cntntsId=7933' },
    { name: '국세청 홈택스 장려금 심사진행 조회', url: 'https://hometax.go.kr' },
    { name: '위기브 근로장려금 지급일 확인 안내 (2025.07.12)', url: 'https://www.wegive.co.kr/wezine/detail?id=2145' },
  ],
};
