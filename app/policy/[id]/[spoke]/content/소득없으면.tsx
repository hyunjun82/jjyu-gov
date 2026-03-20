import Link from 'next/link';
import type { SpokeData } from '../page';

function Content() {
  return (
    <>
      {/* 답변 박스 */}
      <div className="answer-box">
        <p>
          소득이 완전히 0원이면 가입할 수 없습니다.
          하지만 알바·프리랜서·비정규직이라도 국세청에 소득이 신고되어 있으면 가입 가능합니다.
          소득이 적을수록 정부기여금 비율이 높아져 오히려 유리합니다.
        </p>
      </div>

      {/* H2-1 */}
      <section className="detail-card" id="who">
        <h2 className="detail-card-head">무직·대학생·알바·프리랜서, 누가 가입 가능한가?</h2>
        <div className="detail-card-body" style={{ padding: 0 }}>
          <div style={{ overflowX: 'auto' }}>
            <table className="compare-table">
              <caption className="sr-only">고용 유형별 가입 가능 여부</caption>
              <thead>
                <tr>
                  <th scope="col">유형</th>
                  <th scope="col">가입 가능?</th>
                  <th scope="col">조건</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="compare-label">직장인 (4대보험)</td>
                  <td className="text-success" style={{fontWeight:600}}>가능</td>
                  <td>총급여 7,500만원 이하</td>
                </tr>
                <tr>
                  <td className="compare-label">알바 (4대보험 가입)</td>
                  <td className="text-success" style={{fontWeight:600}}>가능</td>
                  <td>근로소득으로 자동 신고됨</td>
                </tr>
                <tr>
                  <td className="compare-label">알바 (3.3% 원천징수)</td>
                  <td className="text-success" style={{fontWeight:600}}>가능</td>
                  <td>종합소득세 신고 필수 (5월)</td>
                </tr>
                <tr>
                  <td className="compare-label">프리랜서</td>
                  <td className="text-success" style={{fontWeight:600}}>가능</td>
                  <td>종합소득세 신고로 소득 증빙</td>
                </tr>
                <tr>
                  <td className="compare-label">대학생 (소득 있음)</td>
                  <td className="text-success" style={{fontWeight:600}}>가능</td>
                  <td>알바·프리랜서 소득이 신고되어야 함</td>
                </tr>
                <tr>
                  <td className="compare-label">대학생 (소득 없음)</td>
                  <td className="text-danger" style={{fontWeight:600}}>불가</td>
                  <td>소득 0원은 가입 안 됨</td>
                </tr>
                <tr>
                  <td className="compare-label">완전 무직</td>
                  <td className="text-danger" style={{fontWeight:600}}>불가</td>
                  <td>국세청 소득확인증명 불가</td>
                </tr>
                <tr>
                  <td className="compare-label">취업 예정자</td>
                  <td style={{fontWeight:600, color: '#B45309'}}>대기</td>
                  <td>취업 후 소득 확정되면 가입 가능</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="source-inline" style={{ padding: '12px 20px' }}>
            출처: <a href="https://www.fsc.go.kr/po020201/80171" target="_blank" rel="noopener noreferrer">금융위원회 Q&A</a>
            {' / '}<a href="https://blog.bokjiro.go.kr/1365" target="_blank" rel="noopener noreferrer">복지로 블로그</a>
          </p>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      {/* H2-2 */}
      <section className="detail-card" id="freelance">
        <h2 className="detail-card-head">3.3% 알바, 소득 인정받으려면 어떻게 하나?</h2>
        <div className="detail-card-body">
          <div className="answer-box-inline">
            3.3% 떼는 알바는 &quot;사업소득&quot;으로 분류됩니다.
            5월에 종합소득세 신고를 해야 국세청에 소득이 잡히고,
            그 이후 소득확인증명서 발급이 가능합니다.
          </div>
          <div className="info-checklist">
            <strong>3.3% 알바 → 도약계좌 가입 절차</strong>
            <ul>
              <li><span style={{ color: 'var(--gov-primary)', fontWeight: 700, marginRight: 8 }}>1단계</span> 5월에 홈택스에서 종합소득세 신고 (알바 수입 전부 합산)</li>
              <li><span style={{ color: 'var(--gov-primary)', fontWeight: 700, marginRight: 8 }}>2단계</span> 7월 이후 홈택스에서 &quot;소득확인증명서 (청년도약계좌용)&quot; 발급</li>
              <li><span style={{ color: 'var(--gov-primary)', fontWeight: 700, marginRight: 8 }}>3단계</span> 은행 앱에서 청년도약계좌 가입 신청</li>
            </ul>
          </div>
          <div className="warning-box">
            <strong>주의:</strong> 종소세 신고를 안 하면 국세청에 소득이 안 잡혀서 가입이 불가합니다.
            신고는 무료이고, 홈택스에서 10분이면 끝납니다.
          </div>
        </div>
      </section>

      {/* H2-3 */}
      <section className="detail-card" id="benefit">
        <h2 className="detail-card-head">소득 적으면 가입 의미 있나?</h2>
        <div className="detail-card-body">
          <div className="answer-box-inline">
            오히려 유리합니다. 소득 2,400만원 이하면 기여금 비율이 6%로 가장 높고,
            월 1만원만 넣어도 됩니다 (자유납입). 적게 넣더라도 기여금+비과세 혜택은 받습니다.
          </div>
          <table className="mini-table">
            <caption className="sr-only">소득 수준별 가입 실익</caption>
            <thead>
              <tr>
                <th scope="col">연소득</th>
                <th scope="col">월 10만원 납입 시</th>
                <th scope="col">월 40만원 납입 시</th>
                <th scope="col">기여금 비율</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{fontWeight:600}}>200만원</td>
                <td>5년 후 약 660만원</td>
                <td>5년 후 약 2,640만원</td>
                <td className="text-success" style={{fontWeight:600}}>6.0% (최고)</td>
              </tr>
              <tr>
                <td style={{fontWeight:600}}>1,200만원</td>
                <td>5년 후 약 660만원</td>
                <td>5년 후 약 2,640만원</td>
                <td className="text-success" style={{fontWeight:600}}>6.0% (최고)</td>
              </tr>
              <tr>
                <td style={{fontWeight:600}}>3,000만원</td>
                <td>5년 후 약 650만원</td>
                <td>5년 후 약 2,590만원</td>
                <td>4.6%</td>
              </tr>
              <tr>
                <td style={{fontWeight:600}}>5,500만원</td>
                <td>5년 후 약 640만원</td>
                <td>5년 후 약 2,550만원</td>
                <td>3.0%</td>
              </tr>
            </tbody>
          </table>
          <p style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 12 }}>
            연소득 200만원이어도 월 10만원씩 5년 넣으면 약 660만원. 납입금 600만원에 기여금+이자로 60만원 추가.
            은행 적금에 넣는 것보다 수익률이 압도적으로 높습니다.
          </p>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      {/* H2-4 */}
      <section className="detail-card" id="when">
        <h2 className="detail-card-head">올해 취업했는데 언제부터 가입 가능한가?</h2>
        <div className="detail-card-body">
          <div className="answer-box-inline">
            소득 확정 시기에 따라 다릅니다. 올해 처음 취업했다면,
            내년 5월 종소세 신고 후 7월부터 가입 가능합니다.
            전전년도 소득이 있다면 바로 신청할 수 있습니다.
          </div>
          <table className="mini-table">
            <caption className="sr-only">가입 시기별 소득 기준</caption>
            <thead>
              <tr>
                <th scope="col">가입 시기</th>
                <th scope="col">소득 기준</th>
                <th scope="col">예시 (2026년)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td style={{fontWeight:600}}>1~6월 가입</td><td>전전년도 소득</td><td>2024년 소득 기준</td></tr>
              <tr><td style={{fontWeight:600}}>7~12월 가입</td><td>직전년도 소득</td><td>2025년 소득 기준</td></tr>
              <tr><td style={{fontWeight:600}}>올해 첫 취업</td><td>내년 소득 확정 후</td><td>2027년 7월부터 가능</td></tr>
              <tr><td style={{fontWeight:600}}>전전년도 소득 있음</td><td>해당 소득 기준</td><td>바로 가입 가능</td></tr>
            </tbody>
          </table>
          <div className="warning-box">
            <strong>일몰 주의:</strong> 청년도약계좌 신규 가입은 2025년 12월 31일까지입니다.
            소득 확정이 늦어지면 가입 자체가 불가능할 수 있으니 서둘러 확인하세요.
          </div>
          <p className="source-inline">
            출처: <a href="https://ylaccount.kinfa.or.kr/main" target="_blank" rel="noopener noreferrer">서민금융진흥원 – 가입 안내</a>
          </p>
        </div>
      </section>
    </>
  );
}

export const NoIncomeSpokeContent: SpokeData = {
  h1: '청년도약계좌, 소득 없으면 가입 못 하나?',
  breadcrumb: '소득 없으면',
  description: '청년도약계좌 무직·대학생·알바·프리랜서 가입 가능 여부와 소득 증빙 방법 총정리.',
  datePublished: '2026-02-20T09:00:00+09:00',
  dateModified: '2026-03-20T09:00:00+09:00',
  Content,
  faqData: [
    { q: '소득이 1원이라도 있으면 가입 가능한가요?', a: '국세청 소득확인증명서에 금액이 찍히면 가입 가능합니다. 최소 소득 금액 기준은 따로 없습니다. 핵심은 "국세청에 신고된 소득이 있느냐"입니다.', source: '금융위원회 Q&A', sourceUrl: '/policy/1#details' },
    { q: '3.3% 떼는 알바인데 종소세 신고 안 했어요. 지금이라도 되나요?', a: '기한 후 신고가 가능합니다. 홈택스에서 과거 연도 종합소득세 신고를 하면 소득이 잡힙니다. 신고 후 소득확인증명서 발급까지 약 2~4주 걸립니다.', source: '국세청 홈택스', sourceUrl: '/policy/1' },
    { q: '부모님 소득은 상관없나요?', a: '가구소득 중위 250% 기준은 가구원 전체 소득으로 판단합니다. 하지만 개인소득 요건(7,500만원 이하)은 본인 소득만 봅니다. 부모님 소득이 높으면 가구소득 기준에서 탈락할 수 있습니다.', source: '청년도약계좌 자격확인', sourceUrl: '/policy/1#eligibility' },
    { q: '가입 후 퇴직하면 해지해야 하나요?', a: '아닙니다. 계좌는 유지되고, 유지심사 시 전년도 소득 기준으로 판단합니다. 소득이 0이 되더라도 이미 가입된 계좌는 유지됩니다. 기여금은 전년도 소득 기준으로 계속 적용됩니다.', source: '서민금융진흥원 유지심사', sourceUrl: '/policy/1' },
  ],
  sources: [
    { name: '금융위원회 – 청년도약계좌 Q&A', url: 'https://www.fsc.go.kr/po020201/80171' },
    { name: '복지로 블로그 – 주요 질답', url: 'https://blog.bokjiro.go.kr/1365' },
    { name: '서민금융진흥원 – 가입 안내', url: 'https://ylaccount.kinfa.or.kr/main' },
    { name: '금융위원회 – 기여금 확대 보도자료', url: 'https://www.fsc.go.kr/no010101/83729' },
  ],
};
