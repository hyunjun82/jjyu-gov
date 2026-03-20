import Link from 'next/link';
import type { SpokeData } from '../page';

const comparison = [
  { label: '가입 나이', doyak: '만 19~34세', hope: '만 19~34세' },
  { label: '납입 기간', doyak: '5년', hope: '2년' },
  { label: '월 납입 한도', doyak: '최대 70만원', hope: '최대 50만원' },
  { label: '만기 수령액', doyak: '최대 5,000만원', hope: '최대 1,260만원' },
  { label: '정부 지원', doyak: '기여금 월 최대 40만원', hope: '이자 지원 (저축장려금)' },
  { label: '비과세', doyak: '이자소득 비과세', hope: '이자소득 비과세' },
  { label: '소득 조건', doyak: '7,500만원 이하', hope: '3,600만원 이하' },
  { label: '중복 가입', doyak: '동시 불가', hope: '동시 불가' },
  { label: '신청 상태', doyak: '2026년 신청 가능', hope: '2024년 만기 종료' },
];

function Content() {
  return (
    <>
      {/* 답변 박스 */}
      <div className="answer-box">
        <p>
          청년도약계좌는 5년간 월 70만원을 납입해 최대 5,000만원을 만드는 제도이고,
          청년희망적금은 2년간 월 50만원으로 최대 1,260만원을 만드는 제도였습니다.
          희망적금은 2024년 만기 종료. 현재 신청 가능한 건 도약계좌뿐입니다.
        </p>
      </div>

      {/* H2-1 */}
      <section className="detail-card" id="comparison">
        <h2 className="detail-card-head">만기 수령액, 얼마나 차이 나나?</h2>
        <div className="detail-card-body" style={{ padding: 0 }}>
          <div className="highlight-numbers">
            <div className="highlight-num-item primary">
              <span className="highlight-num-label">청년도약계좌</span>
              <span className="highlight-num-value">최대 5,000만원</span>
              <span className="highlight-num-sub">5년 · 월 70만원 · 기여금 포함</span>
            </div>
            <div className="highlight-num-vs">vs</div>
            <div className="highlight-num-item">
              <span className="highlight-num-label">청년희망적금</span>
              <span className="highlight-num-value">최대 1,260만원</span>
              <span className="highlight-num-sub">2년 · 월 50만원 · 이자지원</span>
            </div>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table className="compare-table">
              <caption className="sr-only">청년도약계좌와 청년희망적금 9개 항목 비교표</caption>
              <thead>
                <tr>
                  <th scope="col">항목</th>
                  <th scope="col" className="highlight">청년도약계좌</th>
                  <th scope="col">청년희망적금</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={i}>
                    <td className="compare-label">{row.label}</td>
                    <td className="compare-doyak">{row.doyak}</td>
                    <td className="compare-hope">{row.hope}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      {/* H2-2 */}
      <section className="detail-card" id="transfer">
        <h2 className="detail-card-head">희망적금 끝났는데 도약계좌로 갈아탈 수 있나?</h2>
        <div className="detail-card-body">
          <div className="answer-box-inline">
            가능합니다. 희망적금 만기 후 2개월 안에 도약계좌로 전환 신청하면 됩니다.
            만기금을 도약계좌에 일시납입할 수도 있습니다.
          </div>
          <div className="info-checklist">
            <strong>갈아타기 조건 3가지</strong>
            <ul>
              <li><span className="check-icon">&#10003;</span> 희망적금 만기 완료 (중도해지는 해당 없음)</li>
              <li><span className="check-icon">&#10003;</span> 도약계좌 자격 조건 충족 (나이 만 19~34세, 소득 7,500만원 이하)</li>
              <li><span className="check-icon">&#10003;</span> 만기일로부터 2개월 이내 전환 신청</li>
            </ul>
          </div>
          <div className="warning-box">
            <strong>주의:</strong> 2개월 기한을 넘기면 전환이 아닌 일반 신규 가입 절차를 밟아야 합니다.
          </div>
          <p className="source-inline">
            출처: <a href="https://www.korea.kr/multi/visualNewsView.do?newsId=148925112" target="_blank" rel="noopener noreferrer">정책브리핑 – 갈아타기 총정리</a>
          </p>
        </div>
      </section>

      {/* H2-3 */}
      <section className="detail-card" id="overlap">
        <h2 className="detail-card-head">도약계좌와 희망적금, 동시 가입은 안 되나?</h2>
        <div className="detail-card-body">
          <div className="answer-box-inline">
            동시 가입은 불가합니다. 희망적금 만기 후 순차 가입, 중도해지 후 신규 가입은 가능합니다.
          </div>
          <table className="mini-table">
            <caption className="sr-only">중복가입 가능 여부 정리</caption>
            <thead><tr><th scope="col">상황</th><th scope="col">가능 여부</th></tr></thead>
            <tbody>
              <tr><td>희망적금 유지 중 + 도약계좌 신규</td><td className="text-danger">불가</td></tr>
              <tr><td>희망적금 만기 후 → 도약계좌 전환</td><td className="text-success">가능 (2개월 내)</td></tr>
              <tr><td>희망적금 중도해지 후 → 도약계좌 신규</td><td className="text-success">가능</td></tr>
              <tr><td>도약계좌 + 청년미래적금 동시</td><td className="text-danger">불가 (예정)</td></tr>
            </tbody>
          </table>
          <p className="source-inline">
            출처: <a href="https://www.fsc.go.kr/no010101/81550" target="_blank" rel="noopener noreferrer">금융위원회 FAQ</a>
          </p>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      {/* H2-4 */}
      <section className="detail-card" id="action">
        <h2 className="detail-card-head">지금 뭘 해야 하나?</h2>
        <div className="detail-card-body">
          <div className="action-split">
            <div className="action-case">
              <strong>희망적금 만기자라면</strong>
              <ul>
                <li>은행 앱에서 만기일 확인</li>
                <li>만기 후 2개월 내 전환 신청</li>
                <li>만기금 일시납입 여부 결정</li>
              </ul>
            </div>
            <div className="action-case">
              <strong>처음 가입하는 청년이라면</strong>
              <ul>
                <li>나이·소득 조건 확인</li>
                <li>은행 앱 설치 후 신청</li>
                <li>소득확인증명서 홈택스 발급</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export const VsHopeSpokeContent: SpokeData = {
  h1: '청년도약계좌 vs 청년희망적금, 뭐가 다를까?',
  breadcrumb: 'vs 희망적금 차이',
  description: '청년도약계좌와 청년희망적금의 만기수령액·납입한도·정부지원 9가지를 비교합니다.',
  datePublished: '2026-01-20T09:00:00+09:00',
  dateModified: '2026-03-20T09:00:00+09:00',
  Content,
  faqData: [
    { q: '희망적금 중도해지 후에도 도약계좌에 가입할 수 있나요?', a: '가능합니다. 자격 조건(나이·소득)만 충족하면 신규 가입됩니다. 다만 저축장려금은 돌려받지 못합니다.', source: '청년도약계좌 자격확인', sourceUrl: '/policy/1#eligibility' },
    { q: '만기 수령액이 왜 4배나 차이 나나요?', a: '납입 기간(5년 vs 2년)과 한도(70만원 vs 50만원)가 다릅니다. 정부기여금 방식도 이자 보조에서 직접 지급으로 바뀌어 차이가 더 벌어집니다.', source: '정부기여금 계산법', sourceUrl: '/policy/1/기여금-계산' },
    { q: '희망적금 만기금을 도약계좌에 일시납입할 수 있나요?', a: '전환 신청 시 가능합니다. 만기 수령액 범위 내에서 일시납입하며, 만기 후 2개월 내에 해야 합니다.', source: '청년도약계좌 전체 정보', sourceUrl: '/policy/1' },
  ],
  sources: [
    { name: '금융위원회 – 청년도약계좌 안내', url: 'https://www.fsc.go.kr/no010101/81550' },
    { name: '정책브리핑 – 희망적금→도약계좌 갈아타기', url: 'https://www.korea.kr/multi/visualNewsView.do?newsId=148925112' },
    { name: '서민금융진흥원 – 상품안내', url: 'https://www.kinfa.or.kr' },
  ],
};
