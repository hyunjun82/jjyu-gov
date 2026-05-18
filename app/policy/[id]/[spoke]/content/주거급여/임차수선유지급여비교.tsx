import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          주거급여는 거주 형태에 따라 두 가지로 나뉩니다.
          <strong>임차급여</strong>는 월세·전세로 사는 분에게 매달 지원되는 현금이고,
          <strong>수선유지급여</strong>는 자가(본인 소유) 주택에 사는 분에게
          노후 주택 수리 비용을 지원하는 제도입니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        임차급여와 수선유지급여는 대상도 지원 방식도 완전히 다릅니다.
        본인 상황에 맞는 급여 종류를 먼저 파악하세요.
      </p>

      <section className="detail-card" id="compare">
        <h2 className="detail-card-head">임차급여 vs 수선유지급여 전체 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>임차급여</th><th>수선유지급여</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>대상</strong></td><td>임차(월세·전세) 거주자</td><td>자가(본인 소유) 거주자</td></tr>
              <tr><td><strong>지원 방식</strong></td><td>현금 매달 지급</td><td>공사비 현물 지원</td></tr>
              <tr><td><strong>지원 기준</strong></td><td>지역·가구원 수별 기준임대료</td><td>수선 주기·보수 범위별</td></tr>
              <tr><td><strong>최대 지원액</strong></td><td>서울 1인 341,000원/월</td><td>최대 1,241만원 (대수선)</td></tr>
              <tr><td><strong>신청 경로</strong></td><td>복지로·주민센터</td><td>복지로·주민센터</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="repair">
        <h2 className="detail-card-head">수선유지급여 보수 범위와 금액</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>구분</th><th>보수 범위</th><th>지원 한도</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>경보수</strong></td><td>도배, 장판, 창호 등</td><td>457만원</td></tr>
              <tr><td><strong>중보수</strong></td><td>지붕, 단열, 창문 등</td><td>849만원</td></tr>
              <tr><td><strong>대수선</strong></td><td>기초, 기둥, 지붕 구조체</td><td>1,241만원</td></tr>
            </tbody>
          </table>
          <p style={{ fontSize: 13, color: '#8B95A1', marginTop: 8 }}>※ 수선 주기: 경보수 3년, 중보수 5년, 대수선 7년</p>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="apply">
        <h2 className="detail-card-head">신청 방법 (공통)</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>온라인:</strong> 복지로(bokjiro.go.kr) → 서비스 신청
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>방문:</strong> 주민등록지 읍·면·동 주민센터
          </div>
          <div className="info-box">
            <strong>문의:</strong> 주거급여 콜센터 1600-0777
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            소득 기준, 1인 가구 금액, 지역별 임차급여 차이까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/housing-benefit" className="btn-cta">
            주거급여 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 주거급여임차수선유지급여비교SpokeContent: SpokeData = {
  h1: '주거급여 임차급여와 수선유지급여 어떻게 다른가, 대상과 금액 비교',
  breadcrumb: '임차수선유지급여비교',
  description:
    '주거급여 2종: 임차급여(월세·전세 거주, 매달 현금, 서울 1인 341,000원) vs 수선유지급여(자가 거주, 경보수 457만·중보수 849만·대수선 1,241만원). 복지로(bokjiro.go.kr) 신청.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '임차급여와 수선유지급여를 동시에 받을 수 있나요?',
      a: '두 급여는 거주 형태가 다르므로 동시 수급은 불가능합니다. 임차 거주자는 임차급여, 자가 거주자는 수선유지급여 중 하나만 받습니다.',
      source: '국토교통부',
      sourceUrl: 'https://www.molit.go.kr',
    },
    {
      q: '수선유지급여는 현금으로 받을 수 없나요?',
      a: '수선유지급여는 현금 지급이 아니라 지정 업체가 주택 수리 공사를 직접 시행하는 현물 지원 방식입니다.',
      source: '국토교통부',
      sourceUrl: 'https://www.molit.go.kr',
    },
    {
      q: '부모 소유 집에 살고 있는데 수선유지급여를 받을 수 있나요?',
      a: '수선유지급여는 해당 주택의 소유자가 수급자 본인이어야 합니다. 부모 소유 주택에 거주하는 경우 임차급여 대상이 됩니다.',
      source: '국토교통부',
      sourceUrl: 'https://www.molit.go.kr',
    },
    {
      q: '수선유지급여 공사는 내가 원하는 업체를 선택할 수 있나요?',
      a: '수선유지급여 공사는 LH(한국토지주택공사)가 지정한 업체가 시행합니다. 임의로 업체를 선택하거나 직접 공사 후 비용을 청구하는 것은 불가능합니다.',
      source: '국토교통부',
      sourceUrl: 'https://www.molit.go.kr',
    },
    {
      q: '경보수 3년이 지나지 않아도 재신청이 가능한가요?',
      a: '원칙적으로 수선 주기 이내에는 동일 항목 재신청이 어렵습니다. 긴급 수선이 필요한 경우 주민센터나 주거급여 콜센터(1600-0777)에 문의하세요.',
      source: '국토교통부',
      sourceUrl: 'https://www.molit.go.kr',
    },
  ],
  sources: [
    { name: '국토교통부 주거급여', url: 'https://www.molit.go.kr' },
    { name: '복지로', url: 'https://www.bokjiro.go.kr' },
    { name: 'LH 주거급여', url: 'https://www.lh.or.kr' },
  ],
};
