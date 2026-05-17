import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          2026년 청년내일저축계좌 신청기간은{' '}
          <strong>2026년 5월 4일(월) ~ 5월 20일(수) 23시 59분 59초</strong>까지입니다.
          온라인은 복지로(bokjiro.go.kr), 오프라인은 주소지 관할
          읍·면·동 행정복지센터에서 신청합니다.
          <strong>마감일 23시 59분 59초까지 제출 완료</strong>된 신청서만 접수됩니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        신청 기간이 5월 20일로 마감됩니다. 온라인 신청이 편하고 24시간 가능하지만,
        마감일 자정까지 '제출 완료' 상태여야 한다는 점을 꼭 확인하세요.
        아래에서 신청 방법, 준비 서류, 자격 확인까지 순서대로 정리했습니다.
      </p>

      <section className="detail-card" id="period">
        <h2 className="detail-card-head">2026년 신청 기간 및 방법</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>구분</th><th>내용</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>신청 기간</td>
                <td><strong>2026. 5. 4(월) ~ 5. 20(수)</strong></td>
              </tr>
              <tr>
                <td>온라인 마감</td>
                <td>2026. 5. 20(수) <strong>23시 59분 59초</strong>까지 제출 완료 필수</td>
              </tr>
              <tr>
                <td>온라인 신청</td>
                <td>복지로(www.bokjiro.go.kr) → 서비스 신청</td>
              </tr>
              <tr>
                <td>방문 신청</td>
                <td>주소지 관할 읍·면·동 행정복지센터 (동주민센터)</td>
              </tr>
              <tr>
                <td>신청 대상</td>
                <td>만 15~39세, 기준 중위소득 50% 이하, 월 소득 10만원 이상 청년</td>
              </tr>
            </tbody>
          </table>
          <div className="warning-box" style={{ marginTop: 12 }}>
            <strong>주의:</strong> 신청서 '저장' 상태는 접수 아닙니다. 반드시 <strong>'제출 완료'</strong>까지
            해야 신청이 완료됩니다. 마감 직전 트래픽 집중으로 오류가 날 수 있으니 여유 있게 신청하세요.
          </div>
        </div>
      </section>

      <section className="detail-card" id="how">
        <h2 className="detail-card-head">온라인 신청 방법 (복지로)</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>① 복지로 접속:</strong> www.bokjiro.go.kr → 로그인 (공동인증서 또는 간편인증)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>② 서비스 신청:</strong> 상단 메뉴 '복지서비스 신청' → '복지급여 신청' → 청년내일저축계좌 검색
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>③ 자가진단:</strong> 신청 전 '자가진단표'로 가입 자격 확인 (복지로 제공)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>④ 정보 입력:</strong> 가구원 정보, 소득·재산 정보, 근로·사업소득 증빙 첨부
          </div>
          <div className="info-box">
            <strong>⑤ 제출 완료:</strong> '신청하기' 클릭 후 접수번호 확인 → 완료
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="docs">
        <h2 className="detail-card-head">신청 시 필요 서류</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>서류</th><th>비고</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>신분증</td>
                <td>주민등록증, 운전면허증 등</td>
              </tr>
              <tr>
                <td>근로(사업)소득 확인 서류</td>
                <td>근로계약서, 급여명세서, 사업소득 확인서 등</td>
              </tr>
              <tr>
                <td>건강보험료 납부확인서</td>
                <td>가구 소득·재산 확인용 (국민건강보험공단 발급)</td>
              </tr>
              <tr>
                <td>통장 사본</td>
                <td>본인 명의 통장</td>
              </tr>
              <tr>
                <td>가족관계증명서</td>
                <td>가구원 확인용 (필요 시)</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>온라인 신청 시:</strong> 서류를 스캔 또는 사진으로 첨부합니다.
            방문 신청 시에는 원본 지참 또는 복지관에서 출력 가능합니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="eligibility">
        <h2 className="detail-card-head">신청 자격 요약</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>조건</th><th>기준</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>연령</td>
                <td>신청 당시 만 15세 이상 ~ 만 39세 이하</td>
              </tr>
              <tr>
                <td>소득</td>
                <td>기준 중위소득 50% 이하 (가구 규모별 상이)</td>
              </tr>
              <tr>
                <td>근로·사업소득</td>
                <td>월 10만원 이상 근로 또는 사업소득 발생 필수</td>
              </tr>
              <tr>
                <td>수급 자격</td>
                <td>기초생활수급자, 차상위계층, 저소득 근로 청년</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>2026년 신규 변경:</strong> 기준 중위소득 50% 초과~100% 이하 청년은 2026년부터
            신규 가입이 중단됩니다. 기존 가입자는 만기까지 계속 유지됩니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="process">
        <h2 className="detail-card-head">신청 후 처리 절차</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>① 신청 접수:</strong> 5월 4~20일 복지로 온라인 또는 행정복지센터
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>② 자격 심사:</strong> 시·군·구에서 소득·재산 확인 (약 1~2개월 소요)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>③ 결과 통보:</strong> 복지로 문자 또는 행정복지센터 개별 통보
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>④ 계좌 개설:</strong> 자격 확인 후 계좌 개설 안내 (우체국·농협 등)
          </div>
          <div className="info-box">
            <strong>⑤ 저축 시작:</strong> 매월 10만원 이상 납입 시 정부 월 30만원 자동 적립
          </div>
        </div>
      </section>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            지원금 금액, 중도해지 패널티, 군인 가입 조건 등<br />
            청년내일저축계좌 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/youth-tomorrow-savings" className="btn-cta">
            청년내일저축계좌 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 신청기간SpokeContent: SpokeData = {
  h1: '2026년 청년내일저축계좌 신청기간 | 복지로 온라인 신청부터 서류·결과 통보까지',
  breadcrumb: '신청기간',
  description: '2026년 청년내일저축계좌 신청기간은 5월 4일(월)~5월 20일(수) 23:59:59까지입니다. 복지로(bokjiro.go.kr) 온라인 또는 읍·면·동 행정복지센터 방문 신청. 만 15~39세, 기준 중위소득 50% 이하, 월 소득 10만원 이상 청년 대상.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '2026년 청년내일저축계좌 신청 기간은 언제인가요?',
      a: '2026년 5월 4일(월)부터 5월 20일(수) 23시 59분 59초까지입니다. 마감일 자정까지 제출 완료된 신청서만 접수됩니다.',
      source: '복지로 청년내일저축계좌 신청 안내 2026',
      sourceUrl: 'https://www.bokjiro.go.kr',
    },
    {
      q: '청년내일저축계좌 어디서 신청하나요?',
      a: '복지로(www.bokjiro.go.kr) 온라인 신청 또는 주소지 관할 읍·면·동 행정복지센터(동주민센터) 방문 신청이 가능합니다.',
      source: '복지로 공식 안내',
      sourceUrl: 'https://www.bokjiro.go.kr',
    },
    {
      q: '신청 자격이 되는지 어떻게 확인하나요?',
      a: '복지로 사이트에서 제공하는 자가진단표를 통해 사전에 자격을 확인할 수 있습니다. 만 15~39세, 기준 중위소득 50% 이하, 월 근로·사업소득 10만원 이상이 기본 조건입니다.',
      source: '복지로 청년내일저축계좌 자가진단',
      sourceUrl: 'https://www.bokjiro.go.kr',
    },
    {
      q: '온라인 신청 시 어떤 서류가 필요한가요?',
      a: '근로(사업)소득 확인 서류(급여명세서·근로계약서 등), 건강보험료 납부확인서, 통장 사본, 가족관계증명서(필요 시)를 스캔 또는 사진으로 첨부합니다.',
      source: '복지로 청년내일저축계좌 신청 안내',
      sourceUrl: 'https://www.bokjiro.go.kr',
    },
    {
      q: '신청하면 언제 결과를 알 수 있나요?',
      a: '자격 심사는 시·군·구에서 약 1~2개월 소요됩니다. 결과는 복지로 문자 또는 행정복지센터 개별 통보로 안내됩니다.',
      source: '보건복지부 청년내일저축계좌 안내',
      sourceUrl: 'https://www.mohw.go.kr',
    },
  ],
  sources: [
    { name: '복지로 청년내일저축계좌 신청 안내 (bokjiro.go.kr)', url: 'https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveTWAT52011M.do?wlfareInfoId=WLF00000060' },
    { name: '보건복지부 청년내일저축계좌 공식 안내 (mohw.go.kr)', url: 'https://www.mohw.go.kr' },
    { name: '화성시청 2026 청년내일저축계좌 안내', url: 'https://www.hscity.go.kr' },
  ],
};
