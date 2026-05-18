import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          중도해지 시 <strong>청년 본인 납부금은 전액 환급</strong>됩니다.
          기업·정부 적립금은 <strong>퇴직 사유와 재직 기간</strong>에 따라 달라집니다.
          1년 미만 자발적 퇴사는 본인 납부분만 돌려받고, 기업 귀책(해고·폐업 등)이면
          기업 적립금도 청년에게 지급됩니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        중도해지는 크게 두 가지로 나뉩니다. 청년이 스스로 그만두는 "청년 귀책"과,
        회사가 해고·폐업하거나 임금을 체불해 어쩔 수 없이 나오는 "기업 귀책"입니다.
        어느 쪽이냐에 따라 돌려받는 금액이 달라집니다.
      </p>

      <section className="detail-card" id="compare">
        <h2 className="detail-card-head">귀책 사유별 환급금 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>구분</th><th>청년 귀책 (자발적 퇴사)</th><th>기업 귀책 (해고·폐업·임금체불)</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>청년 납부금</td>
                <td><strong>전액 환급</strong></td>
                <td><strong>전액 환급</strong></td>
              </tr>
              <tr>
                <td>기업 적립금</td>
                <td>미지급 (기업에 반환)</td>
                <td><strong>청년에게 지급</strong></td>
              </tr>
              <tr>
                <td>정부 기여금</td>
                <td>미지급 (회수)</td>
                <td>미지급 (회수)</td>
              </tr>
            </tbody>
          </table>
          <div className="warning-box" style={{ marginTop: 12 }}>
            <strong>정부 기여금(400만원)은 귀책 사유와 무관하게 만기 수령 시에만 지급됩니다.</strong>
            중도해지 시에는 정부 기여금을 받을 수 없습니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="period">
        <h2 className="detail-card-head">재직 기간별 환급 기준</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>재직 기간</th><th>청년 귀책 시 수령액</th><th>기업 귀책 시 수령액</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>1년 미만</td>
                <td>본인 납부액 전액</td>
                <td>본인 납부액 + 기업 적립액 전액</td>
              </tr>
              <tr>
                <td>1년 이상 2년 미만</td>
                <td>본인 납부액 전액</td>
                <td>본인 납부액 + 기업 적립액 전액</td>
              </tr>
              <tr>
                <td>2년 만기</td>
                <td colspan={2} style={{ textAlign: 'center' }}><strong>1,200만원 + 이자 전액 수령</strong></td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>기업 귀책 인정 사례:</strong> 해고, 권고사직, 사업장 폐업·도산, 임금 2개월 이상 체불,
            불합리한 근무환경 변경(임금 삭감·전환배치 거부) 등이 해당합니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="process">
        <h2 className="detail-card-head">중도해지 신청 절차</h2>
        <div className="detail-card-body">
          <ol style={{ listStyle: 'decimal', paddingLeft: 20, lineHeight: 2.2 }}>
            <li>
              <strong>퇴사 확정 후</strong> 관할 고용센터 또는 고용24(work24.go.kr)에 중도해지 신청
            </li>
            <li>
              <strong>귀책 사유 확인 서류 제출</strong> (해고 통지서·폐업 사실증명원 등)
            </li>
            <li>
              <strong>심사 후 환급 결정</strong> — 청년 귀책·기업 귀책 여부 판단
            </li>
            <li>
              <strong>환급금 지급</strong> — 등록 계좌로 지급
            </li>
          </ol>
          <div className="warning-box" style={{ marginTop: 12 }}>
            <strong>주의:</strong> 중도해지 신청을 미루면 불이익이 생길 수 있습니다.
            퇴사 후 빠른 시일 내에 고용센터에 신고하세요.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            신청자격, 지원금액, 도약계좌 비교 등<br />
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

export const 청년내일채움공제중도해지퇴사적립금환급기준손해여부SpokeContent: SpokeData = {
  h1: '청년내일채움공제 중도해지, 퇴사하면 적립금 어떻게 되나 환급 기준',
  breadcrumb: '중도해지',
  description:
    '청년내일채움공제 중도해지 시 청년 본인 납부금은 전액 환급됩니다. 기업 귀책(해고·폐업·임금체불)이면 기업 적립금도 청년에게 지급되고, 자발적 퇴사면 본인 납부분만 환급됩니다. 정부 기여금은 중도해지 시 수령 불가합니다.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '자발적으로 퇴사하면 본인 납부금은 다 돌려받나요?',
      a: '네, 자발적 퇴사(청년 귀책)에도 본인이 납부한 400만원은 전액 환급됩니다. 다만 기업 적립금과 정부 기여금은 받을 수 없습니다.',
      source: '고용노동부 청년내일채움공제 중도해지 안내',
      sourceUrl: 'https://www.work24.go.kr',
    },
    {
      q: '회사가 폐업해서 나오게 됐는데, 기업 적립금도 받을 수 있나요?',
      a: '네, 폐업은 기업 귀책 사유에 해당합니다. 이 경우 본인 납부금 전액과 기업 적립금도 청년에게 지급됩니다. 폐업 사실증명원을 고용센터에 제출하면 됩니다.',
      source: '고용노동부 청년내일채움공제 귀책 사유 안내',
      sourceUrl: 'https://www.work24.go.kr',
    },
    {
      q: '1년 일하고 그만두면 정부 기여금은 얼마나 받나요?',
      a: '중도해지 시 정부 기여금은 귀책 사유와 무관하게 수령할 수 없습니다. 정부 기여금 400만원은 2년 만기 완성 시에만 지급됩니다.',
      source: '고용노동부 청년내일채움공제 기여금 지급 기준',
      sourceUrl: 'https://www.work24.go.kr',
    },
    {
      q: '임금이 두 달째 안 들어오는데 기업 귀책으로 해지할 수 있나요?',
      a: '임금 2개월 이상 체불은 기업 귀책 사유에 해당합니다. 체불 사실을 고용센터에 신고하고 임금체불 확인서를 첨부하면 기업 적립금도 청년에게 지급됩니다.',
      source: '고용노동부 청년내일채움공제 Q&A',
      sourceUrl: 'https://www.work24.go.kr',
    },
    {
      q: '해지 후 환급까지 얼마나 걸리나요?',
      a: '귀책 사유 확인 및 심사 기간 포함 통상 수 주가 소요됩니다. 서류 제출 후 고용센터 담당자가 개별 안내합니다.',
      source: '고용노동부 청년내일채움공제 안내',
      sourceUrl: 'https://www.work24.go.kr',
    },
  ],
  sources: [
    { name: '고용노동부 청년내일채움공제 중도해지 안내', url: 'https://www.work24.go.kr' },
    { name: '고용24 청년내일채움공제 Q&A', url: 'https://www.work24.go.kr/cm/c/d/0201/selectNoticeList.do' },
  ],
};
