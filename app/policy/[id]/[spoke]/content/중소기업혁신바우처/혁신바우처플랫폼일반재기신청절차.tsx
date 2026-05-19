import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box"><p>혁신바우처 신청은 <strong>혁신플랫폼(mssmiv.com)</strong>에서 온라인으로만 가능합니다. <strong>일반바우처</strong>는 일반 제조 중소기업용, <strong>재기바우처</strong>는 경영 위기·재기 중 기업을 위한 별도 트랙입니다.</p></div>
      <section className="detail-card" id="steps"><h2 className="detail-card-head">신청 단계</h2><div className="detail-card-body"><table className="compare-table"><thead><tr><th>단계</th><th>내용</th></tr></thead><tbody><tr><td>① 회원가입</td><td>mssmiv.com → 수요기업 회원가입</td></tr><tr><td>② 기업 진단</td><td>온라인 역량 진단 설문 완료</td></tr><tr><td>③ 신청 유형 선택</td><td>일반바우처 / 재기바우처 선택</td></tr><tr><td>④ 사업계획서 작성</td><td>혁신 필요성·활용 계획 등 온라인 입력</td></tr><tr><td>⑤ 서류 제출</td><td>사업자등록증·재무제표 등 업로드</td></tr><tr><td>⑥ 심사·선정</td><td>서면 심사 후 결과 통보</td></tr></tbody></table></div></section>
      <section className="detail-card" id="diff"><h2 className="detail-card-head">일반 vs 재기바우처 차이</h2><div className="detail-card-body"><table className="compare-table"><thead><tr><th>항목</th><th>일반바우처</th><th>재기바우처</th></tr></thead><tbody><tr><td>대상</td><td>일반 제조 중소기업</td><td>경영 위기·회생·재기 기업</td></tr><tr><td>지원 한도</td><td>최대 5,000만 원</td><td>별도 한도</td></tr><tr><td>자부담</td><td>20~30%</td><td>일부 완화</td></tr></tbody></table></div></section>
    </>
  );
}

export const 중소기업혁신바우처혁신바우처플랫폼일반재기신청절차SpokeContent: SpokeData = {
  h1: '혁신바우처 플랫폼 등록 — 일반·재기바우처 신청 절차',
  breadcrumb: '혁신바우처플랫폼일반재기신청절차',
  description: '혁신플랫폼(mssmiv.com) 수요기업 등록부터 일반바우처·재기바우처 신청까지 단계별 절차를 정리합니다.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '플랫폼 등록 절차는 어떻게 되나요?',
      a: '혁신바우처 플랫폼(voucher.smtech.go.kr) 회원가입 → 기업 정보 등록 → 공고 신청 → 서류 업로드 → 심사 순서입니다.',
      source: '중소기업 혁신바우처 플랫폼',
      sourceUrl: 'https://voucher.smtech.go.kr',
    },
    {
      q: '일반바우처와 재기바우처의 차이는 무엇인가요?',
      a: '일반바우처는 성장 단계 중소기업 대상, 재기바우처는 폐업 후 재창업·재기 중소기업 대상입니다. 지원 금액과 자격 기준이 다릅니다.',
      source: '중소벤처기업부',
      sourceUrl: 'https://www.mss.go.kr',
    },
    {
      q: '신청 후 선정까지 얼마나 걸리나요?',
      a: '공고 마감 후 서류 심사·발표까지 통상 1~2개월 소요됩니다.',
      source: '중소기업 혁신바우처 플랫폼',
      sourceUrl: 'https://voucher.smtech.go.kr',
    },
    {
      q: '자부담금은 언제 납부하나요?',
      a: '선정 후 협약 체결 시 자부담금(30%)을 플랫폼 내 가상계좌로 납부합니다.',
      source: '중소벤처기업부',
      sourceUrl: 'https://www.mss.go.kr',
    },
    {
      q: '바우처 사용 기간은 얼마인가요?',
      a: '협약일로부터 통상 6개월~1년 이내에 사용해야 합니다. 기간 내 미사용 잔액은 반환해야 합니다.',
      source: '중소기업 혁신바우처 플랫폼',
      sourceUrl: 'https://voucher.smtech.go.kr',
    }
  ],
  sources: [
    { name: '중소기업 혁신바우처 플랫폼', url: 'https://voucher.smtech.go.kr' },
  ],
};
