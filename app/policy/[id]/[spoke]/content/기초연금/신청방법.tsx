import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      {/* 빠른 답변 */}
      <div className="answer-box">
        <p>
          자격이 되는 건 알겠는데, 어디서 어떻게 신청하는지 막막하시죠?
          복지로(온라인), 읍면동 행정복지센터(방문), 국민연금공단 지사(방문)
          이렇게 3곳에서 신청할 수 있습니다.
          신분증과 통장 사본만 챙기면 됩니다.
        </p>
      </div>

      {/* [기] 서론 */}
      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        자격이 된다는 건 확인했는데, 막상 신청하려니 어디로 가야 하는지
        모르겠죠? 온라인과 방문 두 가지 방법이 있고, 준비물도 간단합니다.
        아래 순서대로 따라하면 10분이면 신청이 끝납니다.
      </p>

      {/* H2-1: 어디서 신청하나 */}
      <section className="detail-card" id="where">
        <h2 className="detail-card-head">온라인 vs 방문, 어디서 신청하나?</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>채널</th><th>방법</th><th>비고</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>복지로 (온라인)</strong></td>
                <td>www.bokjiro.go.kr → 로그인 → 서비스신청 → 기초연금</td>
                <td>24시간 가능, 공인인증서 필요</td>
              </tr>
              <tr>
                <td><strong>행정복지센터</strong></td>
                <td>주소지 관할 읍면동 센터 방문</td>
                <td>주소지 관할만 가능 (다른 동네 불가)</td>
              </tr>
              <tr>
                <td><strong>국민연금공단 지사</strong></td>
                <td>가까운 지사 방문 또는 ☎1355 전화 예약</td>
                <td>예약하면 대기 시간 줄어듦</td>
              </tr>
            </tbody>
          </table>
          <p>
            본인이 직접 가기 어려우면 가족(배우자, 자녀, 형제자매 등)이
            대리 신청할 수 있습니다. 이때 위임장, 대리인 신분증, 수급희망자
            신분증을 함께 가져가야 합니다.
          </p>
        </div>
      </section>

      {/* H2-2: 서류 체크리스트 */}
      <section className="detail-card" id="documents">
        <h2 className="detail-card-head">가져갈 서류 체크리스트</h2>
        <div className="detail-card-body">
          <p><strong>필수 서류 (본인 신청 시)</strong></p>
          <ul style={{ listStyle: 'disc', paddingLeft: 20, lineHeight: 2 }}>
            <li>신분증 (주민등록증, 운전면허증, 여권 중 하나)</li>
            <li>본인 명의 통장 사본</li>
            <li>금융정보등 제공동의서 (현장에서 작성 가능)</li>
          </ul>
          <p style={{ marginTop: 12 }}><strong>대리 신청 시 추가 서류</strong></p>
          <ul style={{ listStyle: 'disc', paddingLeft: 20, lineHeight: 2 }}>
            <li>위임장 (행정복지센터 홈페이지에서 양식 다운로드 가능)</li>
            <li>대리인 신분증</li>
            <li>수급희망자 신분증 (원본 또는 사본)</li>
          </ul>
          <div className="warning-box">
            <strong>추가 요청 가능:</strong> 소득재산 조사 과정에서 임대차계약서,
            소득확인서류 등을 추가로 요청받을 수 있습니다.
            미리 준비하면 처리가 빨라집니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      {/* H2-3: 소요 기간 */}
      <section className="detail-card" id="timeline">
        <h2 className="detail-card-head">신청 후 입금까지 얼마나 걸리나?</h2>
        <div className="detail-card-body">
          <ol style={{ listStyle: 'decimal', paddingLeft: 20, lineHeight: 2.2 }}>
            <li><strong>신청서 접수</strong> — 방문 당일 또는 온라인 즉시</li>
            <li><strong>소득·재산 조사</strong> — 공적자료 조회 (약 2~3주)</li>
            <li><strong>결정 통지</strong> — 선정 또는 탈락 문자/우편 안내</li>
            <li><strong>첫 입금</strong> — 선정되면 다음 달 25일에 계좌 입금</li>
          </ol>
          <p>
            빠르면 신청 후 약 한 달 만에 첫 입금을 받습니다.
            서류 보완 요청이 오면 두 달까지 걸릴 수 있으니,
            요청받은 서류는 바로 제출하세요.
          </p>
        </div>
      </section>

      {/* H2-4: 사전 신청 */}
      <section className="detail-card" id="early">
        <h2 className="detail-card-head">65세 전에 미리 신청하는 법</h2>
        <div className="detail-card-body">
          <p>
            만 65세 생일이 속하는 달의 <strong>1개월 전 첫날</strong>부터
            신청할 수 있습니다. 미리 신청해도 불이익은 전혀 없습니다.
          </p>
          <table className="compare-table">
            <thead>
              <tr><th>생년월일 예시</th><th>신청 가능일</th></tr>
            </thead>
            <tbody>
              <tr><td>1961년 8월생</td><td><strong>2026년 7월 1일</strong>부터</td></tr>
              <tr><td>1961년 12월생</td><td><strong>2026년 11월 1일</strong>부터</td></tr>
              <tr><td>1962년 3월생</td><td><strong>2027년 2월 1일</strong>부터</td></tr>
            </tbody>
          </table>
          <p>
            사전 신청을 하면 65세가 되는 달부터 바로 지급이 시작됩니다.
            생일이 지나고 신청하면 신청한 달부터만 받을 수 있으니,
            가능하면 미리 넣는 게 유리합니다.
          </p>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      {/* CTA */}
      <section className="detail-card" id="action">
        <h2 className="detail-card-head">지금 바로 신청하세요</h2>
        <div className="detail-card-body">
          <p>
            온라인이 편하다면 복지로에서 바로 신청할 수 있습니다.
            방문이 낫다면 주소지 관할 행정복지센터에 신분증과 통장 사본을
            가져가세요.
          </p>
          <a href="https://www.bokjiro.go.kr" className="btn-cta">
            복지로에서 바로 신청하기
          </a>
        </div>
      </section>
    </>
  );
}

export const 신청방법SpokeContent: SpokeData = {
  h1: '기초연금 신청방법 — 어디서 어떻게, 서류는 뭐가 필요한가',
  breadcrumb: '신청방법',
  description:
    '기초연금 신청은 복지로(온라인), 행정복지센터, 국민연금공단 3곳에서 가능합니다. 필요 서류, 대리 신청 방법, 사전 신청 시기, 입금까지 걸리는 기간을 정리했습니다.',
  datePublished: '2026-01-10T09:00:00+09:00',
  dateModified: '2026-03-21T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '다른 동네 행정복지센터에서도 신청 가능한가요?',
      a: '주소지 관할 센터에서만 가능합니다. 복지로 온라인 신청은 어디서든 할 수 있습니다.',
      source: '보건복지부 기초연금 안내',
      sourceUrl: 'https://basicpension.mohw.go.kr',
    },
    {
      q: '본인이 직접 못 가면 어떻게 하나요?',
      a: '가족(배우자, 자녀 등)이 위임장과 양쪽 신분증을 가지고 대리 신청할 수 있습니다.',
      source: '보건복지부 기초연금 안내',
      sourceUrl: 'https://basicpension.mohw.go.kr',
    },
    {
      q: '신청 후 탈락하면 다시 신청할 수 있나요?',
      a: '가능합니다. 소득이나 재산 상황이 바뀌면 언제든 다시 신청할 수 있습니다.',
      source: '복지로 기초연금 FAQ',
      sourceUrl: 'https://www.bokjiro.go.kr',
    },
  ],
  sources: [
    { name: 'K-공감 기초연금 안내 (2026.03.03)', url: 'https://gonggam.korea.kr' },
    { name: '보건복지부 기초연금 제도안내', url: 'https://basicpension.mohw.go.kr' },
    { name: '복지로 기초연금 신청', url: 'https://www.bokjiro.go.kr' },
  ],
};
