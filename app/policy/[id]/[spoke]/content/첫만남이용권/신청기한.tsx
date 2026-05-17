import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          출산 후 신청을 <strong>60일 넘겨도</strong> 첫만남이용권을 받을 수 있습니다.
          출생 후 <strong>1년 이내까지 소급 신청이 가능</strong>합니다.
          단, 출생 후 2년이 지나면 <strong>신청 자체가 불가</strong>하고 권리가 소멸됩니다.
          늦게 신청할수록 사용 가능한 기간이 줄어드니 최대한 빨리 신청하는 것이 좋습니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "출산 후 바빠서 60일이 지났습니다. 어떻게 되나요?"
        60일이 지나도 포기하지 마세요. 신청 가능 시점과 각 시점별 불이익을 정리했습니다.
      </p>

      <section className="detail-card" id="deadline">
        <h2 className="detail-card-head">출산 후 신청을 60일 넘기면 첫만남이용권은 어떻게 되나</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>신청 시점</th><th>신청 가능 여부</th><th>불이익</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>출생 후 60일 이내</td>
                <td><strong>○ 가능 (권장)</strong></td>
                <td>없음 — 가장 빠른 지급</td>
              </tr>
              <tr>
                <td>60일 초과 ~ 1년 이내</td>
                <td><strong>○ 소급 신청 가능</strong></td>
                <td>사용기간 단축 (2년 중 일부 경과)</td>
              </tr>
              <tr>
                <td>1년 초과 ~ 2년 이내</td>
                <td>△ 가능하나 사용기간 매우 짧음</td>
                <td>잔여 사용기간 1년 미만</td>
              </tr>
              <tr>
                <td>출생 후 2년 경과</td>
                <td><strong>× 불가 — 권리 소멸</strong></td>
                <td>신청도 지급도 불가</td>
              </tr>
            </tbody>
          </table>
          <div className="warning-box" style={{ marginTop: 12 }}>
            <strong>핵심:</strong> 60일 기한은 소급 적용 권장 기한이지, 절대 기한이 아닙니다.
            2년 기한이 절대 기한입니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="apply">
        <h2 className="detail-card-head">신청 방법 — 지금 신청하는 법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>① 주민센터 방문 신청:</strong> 신분증 지참 후 아동 주민등록 주소지
            행정복지센터 방문 → 첫만남이용권 신청서 작성 제출
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>② 복지로 온라인:</strong> bokjiro.go.kr → 서비스 신청 → 첫만남이용권
            (공동인증서 또는 간편인증 필요)
          </div>
          <div className="info-box">
            <strong>③ 정부24:</strong> gov.kr → 행복출산 원스톱 → 첫만남이용권 포함 일괄 신청
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="after">
        <h2 className="detail-card-head">신청 후 얼마 만에 받을 수 있나</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>구분</th><th>내용</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>지급 방식</td>
                <td>국민행복카드 포인트 충전</td>
              </tr>
              <tr>
                <td>지급 소요시간</td>
                <td>신청 승인 후 영업일 기준 약 14일 이내</td>
              </tr>
              <tr>
                <td>국민행복카드 없는 경우</td>
                <td>협약 카드사(BC·농협·KB·신한·하나·우리 등)에서 먼저 발급</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            지급 금액, 사용처, 유효기간 등<br />
            첫만남이용권 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/first-meet" className="btn-cta">
            첫만남이용권 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 첫만남신청기한SpokeContent: SpokeData = {
  h1: '출산 후 신청을 60일 넘기면 첫만남이용권은 어떻게 되나',
  breadcrumb: '신청기한',
  description:
    '첫만남이용권은 출생 후 60일 이후에도 1년 이내까지 소급 신청이 가능합니다. 60일 기한은 권장 시점이지 절대 기한이 아닙니다. 출생 후 2년이 지나면 신청 자체가 불가합니다. 늦을수록 사용기간이 줄어드니 빨리 신청하세요.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '출생 후 60일이 지났는데 신청할 수 있나요?',
      a: '네, 신청할 수 있습니다. 1년 이내까지 소급 신청이 가능합니다. 단, 늦게 신청할수록 2년 유효기간 중 남은 사용 기간이 줄어듭니다.',
      source: '보건복지부 첫만남이용권 안내',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '출생 후 1년이 넘었는데 신청 가능한가요?',
      a: '출생 후 2년 이내라면 신청 가능합니다. 단, 잔여 사용기간이 매우 짧을 수 있습니다. 2년이 지나면 신청 자체가 불가합니다.',
      source: '보건복지부 첫만남이용권 안내',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '어디에서 신청하나요?',
      a: '주민센터(행정복지센터) 방문, 복지로(bokjiro.go.kr) 온라인, 정부24(gov.kr) 행복출산 원스톱 세 곳에서 신청 가능합니다.',
      source: '정부24 행복출산 원스톱',
      sourceUrl: 'https://www.gov.kr',
    },
    {
      q: '신청하면 얼마 만에 받을 수 있나요?',
      a: '신청 승인 후 영업일 기준 약 14일 이내에 국민행복카드 포인트로 충전됩니다. 국민행복카드가 없다면 협약 카드사(BC·농협·KB·신한 등)에서 먼저 발급받아야 합니다.',
      source: '보건복지부 첫만남이용권 안내',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '60일 기한이 절대 기한인가요?',
      a: '아닙니다. 60일은 권장 신청 기한이고, 절대 기한은 출생 후 2년입니다. 2년이 지나면 신청이 불가하고 권리가 소멸됩니다.',
      source: '보건복지부 첫만남이용권 안내',
      sourceUrl: 'https://www.mohw.go.kr',
    },
  ],
  sources: [
    { name: '보건복지부 첫만남이용권 안내', url: 'https://www.mohw.go.kr' },
    { name: '정부24 행복출산 원스톱', url: 'https://www.gov.kr' },
  ],
};
