import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          청년내일채움공제와 청년도약계좌는 <strong>현재 중복 가입이 제한</strong>됩니다.
          두 제도는 대상·기간·업종·목적이 다릅니다.
          내일채움공제는 <strong>제조·건설 중소기업 재직자 2년</strong>,
          도약계좌는 <strong>만 19~34세 연소득 6,000만원 이하 5년</strong>이 기준입니다.
          가입 전 관할 고용센터에서 중복 허용 여부를 반드시 확인하세요.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        두 제도 모두 청년 자산형성을 지원하지만 지원 주체, 대상 업종, 기간, 금액이 다릅니다.
        헷갈리기 쉬운 차이점을 표로 정리하고, 중복 가입 문제도 함께 살펴봅니다.
      </p>

      <section className="detail-card" id="compare">
        <h2 className="detail-card-head">두 제도 핵심 차이점 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>청년내일채움공제</th><th>청년도약계좌</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>주관</td>
                <td>고용노동부</td>
                <td>금융위원회</td>
              </tr>
              <tr>
                <td>대상</td>
                <td>제조·건설업 5~50인 중소기업 재직 청년(만 15~34세)</td>
                <td>만 19~34세, 연소득 6,000만원 이하</td>
              </tr>
              <tr>
                <td>가입 기간</td>
                <td><strong>2년</strong></td>
                <td><strong>5년</strong></td>
              </tr>
              <tr>
                <td>만기 수령액</td>
                <td><strong>1,200만원 + 이자</strong></td>
                <td><strong>최대 5,000만원 + 이자</strong></td>
              </tr>
              <tr>
                <td>월 납입 한도</td>
                <td>약 16.7만원(고정)</td>
                <td>최대 70만원</td>
              </tr>
              <tr>
                <td>업종 제한</td>
                <td><strong>제조·건설업만</strong></td>
                <td>업종 무관</td>
              </tr>
              <tr>
                <td>목적</td>
                <td>중소기업 청년 장기재직 유도</td>
                <td>청년 자산형성</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="overlap">
        <h2 className="detail-card-head">동시 가입 가능한가?</h2>
        <div className="detail-card-body">
          <div className="warning-box">
            <strong>중복 가입 원칙적 제한:</strong> 청년내일채움공제와 청년도약계좌는 중복 가입이 제한됩니다.
            두 제도 모두 정부 재정 지원이 포함된 자산형성 제도이므로 동시 혜택 수령은 허용되지 않는 것이 원칙입니다.
          </div>
          <p style={{ lineHeight: 1.8, marginTop: 12 }}>
            다만 제도별 운영 지침이 변경될 수 있으므로, 가입 전 반드시 <strong>관할 고용센터</strong>(청년내일채움공제) 및
            <strong>취급 금융기관</strong>(청년도약계좌)에 최신 중복 허용 여부를 확인하세요.
          </p>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="qualify">
        <h2 className="detail-card-head">어느 제도가 더 유리한가?</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>상황</th><th>유리한 제도</th><th>이유</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>제조·건설 중소기업 재직 중, 2년 안에 목돈 필요</td>
                <td><strong>청년내일채움공제</strong></td>
                <td>2년 만기, 기업·정부 적립으로 빠른 수령</td>
              </tr>
              <tr>
                <td>업종 무관, 5년 장기 자산형성</td>
                <td><strong>청년도약계좌</strong></td>
                <td>최대 5,000만원, 납입 한도 유연</td>
              </tr>
              <tr>
                <td>내일채움공제 만기 후</td>
                <td><strong>청년도약계좌</strong></td>
                <td>내일채움공제 수령 후 도약계좌로 전환 가능 여부 확인 필요</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>순차 가입:</strong> 청년내일채움공제 만기 수령 후 청년도약계좌에 가입하는 순차 활용이 가능한지
            금융위원회 공식 안내를 확인하세요.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            신청자격, 지원금액, 중도해지 기준 등<br />
            청년내일채움공제 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/youth-tomorrow-filling" className="btn-cta">
            청년내일채움공제 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 청년내일채움공제청년도약계좌동시가입가능여부차이점SpokeContent: SpokeData = {
  h1: '청년내일채움공제 vs 청년도약계좌, 동시 가입 가능 여부와 차이점',
  breadcrumb: '도약계좌 비교',
  description:
    '청년내일채움공제와 청년도약계좌는 중복 가입이 원칙적으로 제한됩니다. 내일채움공제는 제조·건설업 중소기업 재직 2년 1,200만원, 도약계좌는 업종 무관 5년 최대 5,000만원이 기준입니다. 가입 전 고용센터와 금융기관에서 최신 중복 허용 여부를 확인하세요.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '청년내일채움공제와 청년도약계좌를 동시에 가입할 수 있나요?',
      a: '원칙적으로 중복 가입이 제한됩니다. 두 제도 모두 정부 재정 지원이 포함된 자산형성 제도이므로 동시 혜택 수령은 허용되지 않는 것이 원칙입니다. 가입 전 고용센터와 취급 금융기관에서 최신 기준을 확인하세요.',
      source: '고용노동부 청년내일채움공제 안내',
      sourceUrl: 'https://www.work24.go.kr',
    },
    {
      q: '두 제도의 가장 큰 차이점은 무엇인가요?',
      a: '내일채움공제는 제조·건설업 중소기업(5~50인) 재직자만 가입 가능하며 2년 만기, 1,200만원을 수령합니다. 도약계좌는 업종 무관, 5년 만기, 최대 5,000만원입니다.',
      source: '금융위원회 청년도약계좌 안내',
      sourceUrl: 'https://www.fsc.go.kr',
    },
    {
      q: '내일채움공제 만기 후 도약계좌에 가입할 수 있나요?',
      a: '청년내일채움공제 만기 수령 후 청년도약계좌에 신규 가입하는 것은 가능할 수 있습니다. 다만 나이 요건(만 34세 이하) 등 도약계좌 자격을 충족해야 합니다. 가입 시점의 공식 안내를 확인하세요.',
      source: '금융위원회 청년도약계좌 FAQ',
      sourceUrl: 'https://www.fsc.go.kr',
    },
    {
      q: '서비스업 종사자는 어떤 제도를 선택해야 하나요?',
      a: '서비스업 종사자는 청년내일채움공제에 가입할 수 없습니다(제조·건설업만 가능). 청년도약계좌는 업종 제한이 없으므로 서비스업 종사자는 도약계좌를 선택하세요.',
      source: '고용노동부 청년내일채움공제 업종 기준',
      sourceUrl: 'https://www.work24.go.kr',
    },
    {
      q: '두 제도 중 더 빨리 목돈을 모을 수 있는 것은?',
      a: '내일채움공제가 2년 만기로 더 빠릅니다. 본인 납부 400만원으로 1,200만원을 수령합니다. 도약계좌는 5년 만기지만 최대 5,000만원으로 최종 금액이 훨씬 큽니다.',
      source: '고용노동부·금융위원회 청년자산형성 비교 안내',
      sourceUrl: 'https://www.work24.go.kr',
    },
  ],
  sources: [
    { name: '고용노동부 청년내일채움공제 안내', url: 'https://www.work24.go.kr' },
    { name: '금융위원회 청년도약계좌 안내', url: 'https://www.fsc.go.kr' },
  ],
};
