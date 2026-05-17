import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          부모급여는 <strong>출생일 포함 60일 이내</strong>에 신청하면 출생월부터 소급해서 받을 수 있습니다.
          60일이 지나 신청하면 <strong>신청한 달부터만 지급</strong>됩니다.
          신청 창구는 행정복지센터(주민센터), 복지로(bokjiro.go.kr), 정부24(gov.kr) 세 곳입니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "언제까지 신청해야 하나요?" 출생 후 60일 이내가 핵심입니다.
        이 기한을 넘기면 그 달 급여를 소급받을 수 없습니다. 신청 방법과 지급일을 정리했습니다.
      </p>

      <section className="detail-card" id="deadline">
        <h2 className="detail-card-head">출생 후 60일 기한 — 놓치면 소급 안 된다</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>신청 시기</th><th>지급 시작 시점</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>출생일부터 60일 이내 신청</td>
                <td><strong>출생월부터 소급 지급</strong></td>
              </tr>
              <tr>
                <td>출생 61일 이후 신청</td>
                <td><strong>신청한 달부터만 지급</strong> (소급 불가)</td>
              </tr>
            </tbody>
          </table>
          <div className="warning-box" style={{ marginTop: 12 }}>
            <strong>예시:</strong> 3월 1일 출생, 4월 30일 신청 → 3월분부터 소급 지급 OK (60일 이내)
            <br />3월 1일 출생, 5월 2일 신청 → 5월분부터만 지급 (61일 초과, 3~4월분 소급 불가)
          </div>
        </div>
      </section>

      <section className="detail-card" id="how-to">
        <h2 className="detail-card-head">신청 방법 — 온라인·방문 3가지 창구</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>① 행정복지센터 방문:</strong> 출생 신고 시 행정복지센터(주민센터)에서
            부모급여를 함께 신청할 수 있습니다. 출생신고와 원스톱으로 처리 가능합니다.
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>② 복지로 온라인:</strong> bokjiro.go.kr → 서비스 신청 → 부모급여 신청
            (공동인증서 또는 간편인증 필요)
          </div>
          <div className="info-box">
            <strong>③ 정부24 온라인:</strong> gov.kr → 출생신고 원스톱 서비스에서 함께 신청 가능
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="payment">
        <h2 className="detail-card-head">지급일과 입금 계좌</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>구분</th><th>지급일</th><th>방식</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>가정 양육 (어린이집 미이용)</td>
                <td><strong>매월 25일</strong></td>
                <td>보호자 계좌 현금 입금</td>
              </tr>
              <tr>
                <td>어린이집 이용 (차액)</td>
                <td><strong>익월 20일</strong></td>
                <td>보육료 제외 차액 현금 입금</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            지급 계좌는 신청 시 등록한 보호자 명의 계좌입니다.
            계좌 변경은 복지로 또는 행정복지센터에서 가능합니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="docs">
        <h2 className="detail-card-head">신청 시 준비물</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>방문 신청:</strong> 신분증, 지급 계좌 통장 사본 (보호자 명의)
          </div>
          <div className="info-box">
            <strong>온라인 신청:</strong> 공동인증서 또는 카카오·네이버 간편인증
            (별도 서류 업로드 불필요)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            지급금액, 어린이집 전환, 육아휴직 중복 등<br />
            부모급여 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/parent-allowance" className="btn-cta">
            부모급여 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 부모급여신청지급일SpokeContent: SpokeData = {
  h1: '부모급여 신청 방법과 지급일 | 출생 후 60일 기한 놓치면 소급 안 된다',
  breadcrumb: '신청·지급일',
  description:
    '부모급여는 출생 후 60일 이내 신청 시 출생월부터 소급 지급됩니다. 61일 이후 신청하면 신청월부터만 지급. 신청처: 행정복지센터·복지로·정부24. 가정양육 지급일 매월 25일, 어린이집 차액은 익월 20일.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '부모급여 언제까지 신청해야 하나요?',
      a: '출생일부터 60일 이내에 신청해야 출생월부터 소급받을 수 있습니다. 60일을 초과하면 신청한 달부터만 지급되어 그 이전 기간은 소급되지 않습니다.',
      source: '보건복지부 부모급여 신청 안내',
      sourceUrl: 'https://www.bokjiro.go.kr',
    },
    {
      q: '부모급여 어디서 신청하나요?',
      a: '행정복지센터(주민센터) 방문, 복지로(bokjiro.go.kr) 온라인, 정부24(gov.kr) 온라인 세 곳에서 신청할 수 있습니다. 출생 신고 시 행정복지센터에서 원스톱으로 함께 신청 가능합니다.',
      source: '복지로 부모급여 신청 안내',
      sourceUrl: 'https://www.bokjiro.go.kr',
    },
    {
      q: '부모급여 지급일이 언제인가요?',
      a: '가정에서 양육하는 경우 매월 25일(주말·공휴일은 직전 평일), 어린이집을 이용하는 경우 보육료 차액이 익월 20일에 지급됩니다.',
      source: '보건복지부 부모급여 지급일 안내',
      sourceUrl: 'https://www.bokjiro.go.kr',
    },
    {
      q: '출생 후 60일이 지났는데 소급 신청이 안 되나요?',
      a: '원칙적으로 불가합니다. 60일 이후 신청하면 신청한 달부터만 지급됩니다. 가능한 빨리 신청하는 것이 좋습니다.',
      source: '보건복지부 부모급여 소급 지급 안내',
      sourceUrl: 'https://www.bokjiro.go.kr',
    },
    {
      q: '온라인 신청 시 서류가 필요한가요?',
      a: '온라인 신청 시 공동인증서 또는 카카오·네이버 간편인증으로 본인 확인하면 됩니다. 별도 서류 업로드는 필요하지 않습니다.',
      source: '복지로 부모급여 온라인 신청 안내',
      sourceUrl: 'https://www.bokjiro.go.kr',
    },
  ],
  sources: [
    { name: '복지로 부모급여 신청', url: 'https://www.bokjiro.go.kr' },
    { name: '보건복지부 2026년 부모급여 안내', url: 'https://www.mohw.go.kr' },
  ],
};
