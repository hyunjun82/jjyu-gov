import Link from 'next/link';
import type { SpokeData } from '../page';

function Content() {
  return (
    <>
      {/* 답변 박스 */}
      <div className="answer-box">
        <p>
          3년 미만에 해지하면 정부기여금 전액 환수 + 이자소득세 15.4% 부과.
          3년 이상 유지 후 해지하면 기여금 60%는 받고, 비과세도 유지됩니다.
          돈이 급하다면 해지보다 납입중단이나 부분인출을 먼저 검토하세요.
        </p>
      </div>

      {/* H2-1 */}
      <section className="detail-card" id="loss">
        <h2 className="detail-card-head">해지하면 돈을 얼마나 잃나?</h2>
        <div className="detail-card-body" style={{ padding: 0 }}>
          <div style={{ overflowX: 'auto' }}>
            <table className="compare-table">
              <caption className="sr-only">중도해지 시기별 손실 비교</caption>
              <thead>
                <tr>
                  <th scope="col">항목</th>
                  <th scope="col">3년 미만 해지</th>
                  <th scope="col" className="highlight">3년 이상 해지</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="compare-label">정부기여금</td><td className="text-danger" style={{fontWeight:600}}>전액 환수 (0원)</td><td className="text-success" style={{fontWeight:600}}>60% 지급</td></tr>
                <tr><td className="compare-label">이자</td><td>중도해지 금리 (기본금리의 약 60~90%)</td><td>기본금리 적용 (약 4.5%)</td></tr>
                <tr><td className="compare-label">세금</td><td className="text-danger" style={{fontWeight:600}}>이자소득세 15.4% 부과</td><td className="text-success" style={{fontWeight:600}}>비과세 유지</td></tr>
                <tr><td className="compare-label">돌려받는 것</td><td>원금 + 낮은 이자 - 세금</td><td>원금 + 이자 + 기여금 60%</td></tr>
              </tbody>
            </table>
          </div>
          <div style={{ padding: '16px 20px' }}>
            <div className="warning-box">
              <strong>핵심:</strong> 3년이 분기점입니다. 2년 11개월에 해지하면 기여금 0원,
              3년 넘기면 60%를 받습니다. 가능하면 3년까지 버티세요.
            </div>
            <p className="source-inline">
              출처: <a href="https://www.fsc.go.kr/no010101/81550" target="_blank" rel="noopener noreferrer">금융위원회 청년도약계좌 안내</a>
              {' / '}<a href="https://magazine.hankyung.com/job-joy/article/202509245745d" target="_blank" rel="noopener noreferrer">한경매거진 – 해지율 15.9%</a>
            </p>
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      {/* H2-2 */}
      <section className="detail-card" id="options">
        <h2 className="detail-card-head">납입 못 하면 바로 해지되나?</h2>
        <div className="detail-card-body">
          <div className="answer-box-inline">
            아닙니다. 청년도약계좌는 자유납입이라 0원 넣어도 계좌가 유지됩니다.
            해지는 본인이 직접 신청해야만 됩니다.
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table className="mini-table">
              <caption className="sr-only">납입중단·부분인출·해지 비교</caption>
              <thead>
                <tr>
                  <th scope="col">구분</th>
                  <th scope="col">납입중단</th>
                  <th scope="col">부분인출</th>
                  <th scope="col">해지</th>
                </tr>
              </thead>
              <tbody>
                <tr><td style={{fontWeight:600}}>조건</td><td>언제든 가능</td><td>가입 2년 경과</td><td>언제든 가능</td></tr>
                <tr><td style={{fontWeight:600}}>한도</td><td>-</td><td>납입금의 40%, 1회</td><td>전액</td></tr>
                <tr><td style={{fontWeight:600}}>기여금</td><td>해당 월 미지급</td><td>3년 이상: 60% 유지</td><td>3년 미만: 0원</td></tr>
                <tr><td style={{fontWeight:600}}>비과세</td><td>유지</td><td>3년 이상: 유지</td><td>3년 미만: 소멸</td></tr>
                <tr><td style={{fontWeight:600}}>계좌</td><td className="text-success" style={{fontWeight:600}}>유지</td><td className="text-success" style={{fontWeight:600}}>유지</td><td className="text-danger" style={{fontWeight:600}}>종료</td></tr>
              </tbody>
            </table>
          </div>
          <p className="source-inline">
            출처: <a href="https://www.bokjiro.go.kr/ssis-tbu/cms/pc/news/news/1305050_1114.html" target="_blank" rel="noopener noreferrer">복지로 Q&A</a>
            {' / '}<a href="https://job.gg.go.kr/thema/exprcDtl.do?seq=5895" target="_blank" rel="noopener noreferrer">경기도 일자리재단 – 부분인출 안내</a>
          </p>
        </div>
      </section>

      {/* H2-3 */}
      <section className="detail-card" id="special">
        <h2 className="detail-card-head">특별중도해지로 기여금 전액 받는 경우는?</h2>
        <div className="detail-card-body">
          <div className="answer-box-inline">
            아래 9가지 사유에 해당하면 해지 시기와 관계없이 정부기여금 + 비과세를 전부 받습니다.
          </div>
          <div className="info-checklist">
            <strong>특별중도해지 사유 9가지</strong>
            <ul>
              <li><span className="check-icon">&#10003;</span> 가입자 사망</li>
              <li><span className="check-icon">&#10003;</span> 해외이주</li>
              <li><span className="check-icon">&#10003;</span> 퇴직</li>
              <li><span className="check-icon">&#10003;</span> 사업장 폐업</li>
              <li><span className="check-icon">&#10003;</span> 천재지변</li>
              <li><span className="check-icon">&#10003;</span> 3개월 이상 입원·요양이 필요한 상해·질병</li>
              <li><span className="check-icon">&#10003;</span> 생애최초 주택 구입</li>
              <li><span className="check-icon">&#10003;</span> 혼인 (2024년 추가)</li>
              <li><span className="check-icon">&#10003;</span> 출산 – 배우자 출산 포함 (2024년 추가)</li>
            </ul>
          </div>
          <div className="warning-box">
            <strong>주의:</strong> 사망·해외이주 외에는 해지일로부터 6개월 이내 발생한 사유여야 합니다.
            은행 영업점 방문 신청이 필수입니다.
          </div>
          <p className="source-inline">
            출처: <a href="https://www.hankyung.com/article/2025092958461" target="_blank" rel="noopener noreferrer">한국경제 – 중도해지해도 기여금 보장</a>
          </p>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      {/* H2-4 */}
      <section className="detail-card" id="decision">
        <h2 className="detail-card-head">해지 말고 다른 방법은 없나?</h2>
        <div className="detail-card-body">
          <div className="answer-box-inline">
            급한 돈이 필요하다면 이 순서로 검토하세요.
            해지는 마지막 수단입니다.
          </div>
          <div className="info-checklist">
            <strong>의사결정 순서</strong>
            <ul>
              <li><span style={{ color: 'var(--gov-primary)', fontWeight: 700, marginRight: 8 }}>1단계</span> 이번 달만 못 넣는 거라면 → <strong>납입중단</strong> (페널티 없음, 계좌 유지)</li>
              <li><span style={{ color: 'var(--gov-primary)', fontWeight: 700, marginRight: 8 }}>2단계</span> 가입 2년 넘었고 목돈이 필요하면 → <strong>부분인출</strong> (납입금 40%, 1회)</li>
              <li><span style={{ color: 'var(--gov-primary)', fontWeight: 700, marginRight: 8 }}>3단계</span> 결혼·출산·주택구입이면 → <strong>특별중도해지</strong> (기여금 전액 보장)</li>
              <li><span style={{ color: 'var(--gov-primary)', fontWeight: 700, marginRight: 8 }}>4단계</span> 그래도 안 되면 → 3년 넘겼는지 확인 후 <strong>일반 해지</strong></li>
            </ul>
          </div>
          <p style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 12 }}>
            가입자 6명 중 1명(15.9%)이 중도해지했습니다. 해지 사유의 절반이 &quot;생활비 부족&quot;이었는데,
            납입중단으로 해결 가능한 경우가 많습니다.
          </p>
        </div>
      </section>
    </>
  );
}

export const CancelSpokeContent: SpokeData = {
  h1: '청년도약계좌 중도해지하면 얼마나 손해인가?',
  breadcrumb: '중도해지 손실',
  description: '청년도약계좌 중도해지 시 기여금 환수·세금·손실액을 정리합니다. 납입중단·부분인출·특별해지 비교.',
  datePublished: '2026-02-10T09:00:00+09:00',
  dateModified: '2026-03-20T09:00:00+09:00',
  Content,
  faqData: [
    { q: '이번 달 돈이 없어서 못 넣으면 계좌가 해지되나요?', a: '아닙니다. 0원 납입해도 계좌는 유지됩니다. 해당 월 정부기여금만 안 나옵니다. 다음 달부터 다시 넣으면 됩니다.', source: '복지로 Q&A', sourceUrl: '/policy/1' },
    { q: '해지 후 재가입할 수 있나요?', a: '해지일 포함 2개월 후 재가입 가능합니다. 단, 기여금이 (60개월-기가입기간)/60개월로 줄어듭니다. 12개월 가입 후 재가입하면 80% 수준입니다.', source: '청년도약계좌 전체 정보', sourceUrl: '/policy/1' },
    { q: '결혼하면 특별중도해지 가능한가요?', a: '가능합니다. 2024년부터 혼인과 출산(배우자 출산 포함)이 특별중도해지 사유에 추가되었습니다. 정부기여금과 비과세 전액 보장됩니다.', source: '자격확인', sourceUrl: '/policy/1#eligibility' },
    { q: '부분인출은 아무 때나 가능한가요?', a: '가입 2년 경과 후 가능하며, 납입금의 40% 이내로 가입 기간 중 1회만 됩니다. 3년 이상이면 비과세와 기여금 60%가 유지됩니다.', source: '경기도 일자리재단', sourceUrl: '/policy/1' },
  ],
  sources: [
    { name: '금융위원회 – 청년도약계좌 안내', url: 'https://www.fsc.go.kr/no010101/81550' },
    { name: '한경매거진 – 해지율 15.9% 통계', url: 'https://magazine.hankyung.com/job-joy/article/202509245745d' },
    { name: '복지로 – 납입 없어도 계좌 유지', url: 'https://www.bokjiro.go.kr/ssis-tbu/cms/pc/news/news/1305050_1114.html' },
    { name: '한국경제 – 특별중도해지 기여금 보장', url: 'https://www.hankyung.com/article/2025092958461' },
  ],
};
