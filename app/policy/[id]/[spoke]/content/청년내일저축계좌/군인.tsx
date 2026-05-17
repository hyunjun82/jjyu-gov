import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          <strong>직업군인·산업체 복무요원</strong>은 근로소득이 발생하므로 가입 가능합니다.
          <strong>일반 현역 병사</strong>는 월급만으로는 가입 불가하지만, 복무기관장 승인을 받은
          별도 근로·사업소득이 있다면 가입할 수 있습니다. 가입 후 입대하는 경우에는
          최대 2년까지 유예가 가능합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "군인은 청년내일저축계좌 못 받는 거 아닌가요?" 많은 분이 궁금해하는 질문입니다.
        군인이라도 유형에 따라 가입 가능 여부가 달라집니다. 내 상황이 해당되는지 바로 확인하세요.
      </p>

      <section className="detail-card" id="types">
        <h2 className="detail-card-head">군인 유형별 청년내일저축계좌 가입 가능 여부</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>유형</th><th>가입 가능 여부</th><th>이유</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>직업군인 (하사 이상)</td>
                <td><strong>✅ 가능</strong></td>
                <td>근로소득 발생</td>
              </tr>
              <tr>
                <td>산업체 복무요원</td>
                <td><strong>✅ 가능</strong></td>
                <td>근로소득 발생</td>
              </tr>
              <tr>
                <td>사회복무요원 (공익)</td>
                <td><strong>조건부 가능</strong></td>
                <td>별도 소득 있으면 가능</td>
              </tr>
              <tr>
                <td>일반 현역 병사</td>
                <td><strong>⚠️ 원칙 불가</strong></td>
                <td>월급만으로는 해당 안 됨</td>
              </tr>
              <tr>
                <td>현역 병사 + 별도 소득</td>
                <td><strong>조건부 가능</strong></td>
                <td>복무기관장 승인 필요</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>핵심 기준:</strong> 군인 신분 자체가 문제가 아니라
            <strong>월 10만원 이상의 근로·사업소득이 발생하는지</strong>가 기준입니다.
            (복지로 공식 조건, 2026년 기준)
          </div>
        </div>
      </section>

      <section className="detail-card" id="common">
        <h2 className="detail-card-head">가입 가능한 군인이 갖춰야 할 공통 조건</h2>
        <div className="detail-card-body">
          <p>직업군인·산업체 복무요원 등 가입 가능한 경우라도 아래 조건을 모두 충족해야 합니다.</p>
          <table className="compare-table">
            <thead>
              <tr><th>조건</th><th>기준 (2026년)</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>나이</td>
                <td>신청 당시 만 15세 이상 ~ 만 39세 이하</td>
              </tr>
              <tr>
                <td>근로·사업소득</td>
                <td>월 <strong>10만원 이상</strong> 발생</td>
              </tr>
              <tr>
                <td>가구 소득</td>
                <td>기준 중위소득 <strong>50% 이하</strong></td>
              </tr>
              <tr>
                <td>가구 재산</td>
                <td>대도시 3.5억 / 중소도시 2억 / 농어촌 1.7억 이하</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="during-service">
        <h2 className="detail-card-head">가입 후 군 입대하면 어떻게 되나요?</h2>
        <div className="detail-card-body">
          <p>
            가입한 뒤 군에 입대하게 되는 경우, 즉시 해지하면 손해입니다.
            청년내일저축계좌는 <strong>최대 2년까지 유예</strong>가 가능합니다.
          </p>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>유예 기간 중:</strong> 저축 납입 중단, 정부 기여금 적립 중단<br />
            <strong>전역 후:</strong> 유예 전 남은 기간만큼 재개. 3년 만기를 채울 수 있습니다.
          </div>
          <div className="warning-box">
            <strong>주의:</strong> 유예를 신청하지 않고 납입을 장기간 중단하면 자격이 박탈될 수 있습니다.
            입대 전 반드시 담당 주민센터 또는 복지로에 유예 신청을 하세요.
          </div>
        </div>
      </section>

      <section className="detail-card" id="apply-process">
        <h2 className="detail-card-head">직업군인 신청 절차</h2>
        <div className="detail-card-body">
          <ol style={{ listStyle: 'decimal', paddingLeft: 20, lineHeight: 2.4 }}>
            <li>복지로(bokjiro.go.kr) 온라인 신청 또는 행정복지센터 방문</li>
            <li>신분 서류: 신분증, 복지로 로그인 (공동인증서 등)</li>
            <li>소득 증빙: 급여명세서, 근로소득 원천징수 영수증 등</li>
            <li>가구 정보: 가구원 동의 절차 (복지로 가구원 동의 메뉴)</li>
            <li>2026년 모집: 5월 4일~20일 (마감 기간 확인 필수)</li>
          </ol>
          <div className="info-box" style={{ marginTop: 10 }}>
            군인 신분이라면 <strong>복무기관 재직 증명서 또는 발령 명령서</strong>를 함께 준비하면
            소득 증빙이 더 원활합니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="faq-quick">
        <h2 className="detail-card-head">자주 묻는 질문</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>Q. 공무원도 가입할 수 있나요?</strong><br />
            네. 공무원도 근로소득이 발생하고 소득·재산 기준을 충족하면 가입 가능합니다.
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>Q. 병역특례(산업기능요원)는 가능한가요?</strong><br />
            산업체 복무요원은 해당 사업체에서 근로소득이 발생하므로 가입 가능합니다.
          </div>
          <div className="info-box">
            <strong>Q. 현역 병사인데 투잡(사업소득)이 있으면 가입할 수 있나요?</strong><br />
            복무기관장의 승인을 받은 별도 소득이 있다면 가입할 수 있습니다.
            단, 승인 없이 부업 소득을 신고하면 문제가 될 수 있으니 반드시 확인하세요.
          </div>
        </div>
      </section>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            정부 기여금 월 30만원, 만기 1,440만원, 신청 방법 등<br />
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

export const 군인SpokeContent: SpokeData = {
  h1: '청년내일저축계좌 군인 현역 복무 중에도 가입할 수 있나요',
  breadcrumb: '군인',
  description:
    '청년내일저축계좌 군인 가입 가능 여부를 정리했습니다. 직업군인·산업체 복무요원은 가능, 일반 현역 병사는 별도 소득 없으면 불가. 가입 후 입대 시 최대 2년 유예 방법도 안내합니다.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '현역 병사도 청년내일저축계좌에 가입할 수 있나요?',
      a: '일반 현역 병사의 군 월급만으로는 가입 불가합니다. 단, 복무기관장 승인을 받은 별도 근로·사업소득(월 10만원 이상)이 있다면 가입할 수 있습니다.',
      source: '네이버 지식iN 청년내일저축계좌 군인 관련',
      sourceUrl: 'https://m.kin.naver.com',
    },
    {
      q: '직업군인은 청년내일저축계좌 가입 가능한가요?',
      a: '네, 직업군인(하사 이상)은 근로소득이 발생하므로 가입이 가능합니다. 나이(만 15~39세)·소득(중위소득 50% 이하)·재산 기준만 충족하면 됩니다.',
      source: '뱅크샐러드 청년내일저축계좌 군인·공무원 안내',
      sourceUrl: 'https://www.banksalad.com/articles/청년내일저축계좌',
    },
    {
      q: '청년내일저축계좌 가입 후 군대에 가면 어떻게 되나요?',
      a: '즉시 해지하면 손해입니다. 최대 2년까지 유예를 신청할 수 있습니다. 전역 후 남은 기간만큼 재개해 3년 만기를 채울 수 있습니다.',
      source: '네이버 지식iN 청년내일저축계좌 군 전역 후 질문',
      sourceUrl: 'https://m.kin.naver.com',
    },
    {
      q: '공무원도 청년내일저축계좌에 가입할 수 있나요?',
      a: '가능합니다. 공무원도 근로소득이 발생하므로, 나이·소득·재산 기준만 충족하면 가입할 수 있습니다.',
      source: '뱅크샐러드 청년내일저축계좌 안내',
      sourceUrl: 'https://www.banksalad.com',
    },
    {
      q: '산업기능요원(병역특례)은 가입할 수 있나요?',
      a: '산업체 복무요원은 해당 사업체에서 근로소득이 발생하므로 가입 가능합니다. 소득·재산 기준만 충족하면 됩니다.',
      source: '네이버 지식iN 청년내일저축계좌 군인 관련',
      sourceUrl: 'https://m.kin.naver.com',
    },
  ],
  sources: [
    { name: '복지로 청년내일저축계좌 지원대상 안내', url: 'https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveTWAT52011M.do?wlfareInfoId=WLF00004098' },
    { name: '뱅크샐러드 청년내일저축계좌 군인·공무원 가입 안내', url: 'https://www.banksalad.com/articles/청년내일저축계좌' },
    { name: '네이버 지식iN 청년내일저축계좌 군인 가입 관련 (2026)', url: 'https://m.kin.naver.com' },
  ],
};
