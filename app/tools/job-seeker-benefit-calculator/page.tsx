import Calculator from './Calculator';

export const metadata = {
  title: '구직급여(실업급여) 모의계산기 — 내 예상 수급액 1분 확인 | 정부지원사업',
  description: '최근 3개월 급여와 나이, 고용보험 가입기간만 입력하면 구직급여(실업급여) 1일 지급액과 총 수급액을 바로 계산해볼 수 있습니다.',
};

export default function Page() {
  return <Calculator />;
}
