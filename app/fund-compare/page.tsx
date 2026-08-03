/* 2026 소상공인 정책자금 4차 — 공식 「정책자금 한눈에보기」를 한 페이지로.
 *
 * 왜 이 형태인가 (2026-08-03):
 *   소진공 공식 페이지는 공통 지원자격 → 금리 안내 → 직접대출 세부 지원요건 →
 *   대리대출 세부 지원요건 순으로 한 화면에 다 있다. 사용자는 거기서 자기 자금을
 *   찾는다. 우리도 같은 구성으로 담되, 자금마다 우리 허브로 가는 버튼을 남긴다.
 *   외부 신청 화면으로 바로 내보내면 조건도 모른 채 나가고 그 순간 이탈이다.
 *
 * 수치 출처(전부 Playwright 대조, 2026-08-03):
 *   ols.semas.or.kr 정책자금한눈에보기 · 금리안내(3/4분기, 7.10 적용)
 *   · 융자계획 변경(4차) 공고 · 대출신청안내
 */
import Link from 'next/link';

export const metadata = {
  title: '2026 소상공인 정책자금 4차 자금별 조건 한눈에 | 정부지원사업',
  description:
    '소상공인 정책자금 16개의 신청요건·한도·금리·대출기간을 공식 자료 기준으로 한 화면에 정리했습니다. 기준금리 3.85%, 한도 3,000만원~시설 10억원.',
};

const HUB = '/policy/688';

type Fund = {
  name: string;
  req: string;    // 신청요건 (공식 표 기준)
  term: string;   // 대출기간(거치)
  limit: string;
  rate: string;
  href?: string;
};

/* 직접대출 — 소진공이 신청·심사·실행·상환관리까지 */
const DIRECT: Fund[] = [
  { name: '혁신성장촉진자금 (혁신형)', req: '수출, 2년 연속 매출 10% 이상 신장, 스마트공장 도입, 강한소상공인·로컬크리에이터, 졸업후보기업, 직접대출 성실상환', term: '운전 5년 / 시설 8년', limit: '운전 2억원 / 시설 10억원', rate: '기준+0.4%p → 연 4.25%', href: '/policy/670' },
  { name: '혁신성장촉진자금 (일반형)', req: '스마트기술, 백년가게, 사회연대경제조직, 신사업창업사관학교 수료생', term: '운전 5년 / 시설 8년', limit: '운전 1억원 / 시설 5억원', rate: '기준+0.4%p → 연 4.25%', href: '/policy/670' },
  { name: '민간투자연계형 매칭융자', req: '민간투자 연계형 매칭융자 주관기관에서 투자를 받고 소상공인 선투자 추천서를 발급받은 소상공인', term: '8년(거치 3년 이내)', limit: '5억원', rate: '기준+0.4%p → 연 4.25%' },
  { name: '상생성장지원자금', req: 'TOPS 프로그램 1·2단계 선정, 소진공 상생협약 온라인 플랫폼 입점, Post-TOPS 선정 소상공인', term: '운전 5년 / 시설 8년', limit: '일반 7,000만원 / 도약형 운전 2억·시설 10억', rate: '기준+0.4%p → 연 4.25%', href: '/policy/677' },
  { name: '재도전특별자금 (도약형)', req: '재창업 업력 2년 이상 7년 미만 + 매출·고용 성장 + 소진공 대출 성실상환', term: '5년(거치 2년)', limit: '2억원', rate: '기준+0.4%p → 연 4.25%', href: '/policy/673' },
  { name: '재도전특별자금 (희망형)', req: '2025년 희망리턴패키지 재기사업화 완료 또는 2026년 재기사업화 협약 완료', term: '5년(거치 2년)', limit: '1억원', rate: '기준+0.6%p → 연 4.45%', href: '/policy/673' },
  { name: '재도전특별자금 (일반형)', req: '재창업 준비단계(재창업교육 수료), 재창업 초기단계(업력 7년 미만), 채무조정 성실상환자', term: '5년(거치 2년)', limit: '7,000만원', rate: '기준+1.6%p → 연 5.45%', href: '/policy/673' },
  { name: '일시적경영애로자금', req: '연매출 1억 400만원 미만 + 업력 7년 미만 + 일시적 경영애로 사유 (4차 변경으로 고용위기선제대응지역 추가)', term: '5년(거치 2년)', limit: '7,000만원', rate: '기준+0.0%p → 연 3.85%', href: '/policy/674' },
  { name: '신용취약소상공인자금', req: '소상공인 지식배움터에서 신용관리 교육을 사전 이수한 NCB 839점 이하 중·저신용 소상공인', term: '5년(거치 2년)', limit: '3,000만원', rate: '기준+1.6%p → 연 5.45%', href: '/policy/669' },
];

/* 대리대출 — 소진공은 지원대상만 확인, 은행이 심사·실행 */
const AGENCY: Fund[] = [
  { name: '소공인특화자금', req: '제조업을 영위하는 상시근로자 10인 미만 소공인', term: '운전 5년 / 시설 8년', limit: '운전 1억원 / 시설 5억원', rate: '기준+0.6%p → 연 4.45%', href: '/policy/672' },
  { name: '일반경영안정자금', req: '업력 무관 소상공인', term: '5년(거치 2년)', limit: '7,000만원', rate: '기준+0.6%p → 연 4.45%', href: '/policy/675' },
  { name: '긴급경영안정자금 (재해피해)', req: '재해 피해를 입고 지자체에서 재해 중소기업(소상공인) 확인증을 발급받은 소상공인', term: '5년(거치 2년)', limit: '1억원', rate: '고정 연 2.00%', href: '/policy/674' },
  { name: '긴급경영안정자금 (일시적 경영애로)', req: '지역경제 위기가 우려되는 지역 또는 감염병 등으로 영업 피해를 입은 소상공인', term: '5년(거치 2년)', limit: '7,000만원', rate: '기준+0.0%p → 연 3.85%', href: '/policy/674' },
  { name: '장애인기업지원자금', req: '장애인기업 확인서를 보유한 소상공인', term: '7년(거치 2년)', limit: '1억원', rate: '고정 연 2.00%', href: '/policy/676' },
  { name: '청년고용연계자금', req: '만 39세 이하 청년 대표 또는 청년을 고용한 소상공인', term: '5년(거치 2년)', limit: '7,000만원', rate: '기준+0.0%p → 연 3.85%', href: '/policy/671' },
  { name: '대환대출', req: '금리 4.5% 이상 사업자대출을 보유한 소상공인', term: '10년(거치 2년)', limit: '5,000만원', rate: '고정 연 4.50%', href: '/policy/668' },
];

function FundTable({ rows }: { rows: Fund[] }) {
  return (
    <div className="fc-list">
      {rows.map((f) => (
        <div className="fc-row" key={f.name}>
          <div className="fc-info">
            <div className="fc-name">{f.href ? <Link href={f.href}>{f.name}</Link> : f.name}</div>
            <div className="fc-req"><span className="fc-tag">신청요건</span>{f.req}</div>
            <div className="fc-meta">
              <span><b>한도</b> {f.limit}</span>
              <span><b>금리</b> {f.rate}</span>
              <span><b>기간</b> {f.term}</span>
            </div>
          </div>
          <div className="fc-right">
            <Link href={f.href || HUB} className="fc-btn">신청 조건 보기</Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function FundComparePage() {
  return (
    <main className="container" style={{ padding: '32px 16px 60px', maxWidth: 960 }}>
      <h1 style={{ fontSize: 26, fontWeight: 800, lineHeight: 1.35, marginBottom: 10 }}>
        2026 소상공인 정책자금 4차, 자금별 조건 한눈에
      </h1>
      <p style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--text-secondary, #4E5968)', marginBottom: 18 }}>
        자금이 열여섯 개라 이름만 봐서는 어디에 넣어야 할지 알 수 없습니다.
        신청요건과 한도, 금리, 기간을 공식 자료 그대로 정리했으니 내 조건에 맞는 자금부터 찾아보세요.
      </p>

      <section className="fc-box">
        <h2 className="fc-box-title">공통 지원자격</h2>
        <ul className="fc-ul">
          <li>소상공인 보호 및 지원에 관한 법률상 <b>상시근로자 5인 미만</b> 업체</li>
          <li>제조업·건설업·운수업·광업은 <b>상시근로자 10인 미만</b></li>
          <li>사업자등록증을 소지하고 <b>영업 중</b>이어야 하며 예비창업자는 신청 불가</li>
          <li className="fc-warn">제외업종 — 유흥·향락 업종, 전문업종, 금융업, 보험업, 부동산업 등</li>
          <li className="fc-warn">세금 체납 등 대출제한 사항이 확인되면 접수·지원이 거절됩니다</li>
        </ul>
      </section>

      <section className="fc-box">
        <h2 className="fc-box-title">금리 안내</h2>
        <p className="fc-formula">대출금리 = 기준금리(분기별 변동) + 가산금리</p>
        <p style={{ fontSize: 14.5, color: '#4E5968', lineHeight: 1.7 }}>
          2026년 3/4분기 정책자금 기준금리는 <b>연 3.85%</b>이며 7월 10일부터 적용됩니다.
          자금별 가산금리는 0.0%p에서 1.6%p까지이고, 긴급경영안정자금 재해피해와 장애인기업지원자금은 고정 연 2.00%,
          대환대출은 고정 연 4.50%입니다. 기업당 한도는 대출잔액과 신규 대출예정액을 합쳐
          <b> 운전자금 5억원 이내</b>, 시설자금을 포함하면 <b>10억원 이내</b>입니다.
        </p>
      </section>

      <section className="fc-sec">
        <h2 className="fc-sec-title">직접대출 세부 지원요건</h2>
        <p className="fc-sec-desc">소진공이 신청·접수부터 심사평가, 대출 실행, 상환 관리까지 진행합니다. 접수는 매월 첫째주에 개시됩니다.</p>
        <FundTable rows={DIRECT} />
      </section>

      <section className="fc-sec">
        <h2 className="fc-sec-title">대리대출 세부 지원요건</h2>
        <p className="fc-sec-desc">소진공이 지원대상 여부만 확인하고 금융기관이 심사·실행합니다. 지원대상 확인서를 먼저 발급받아야 하며 접수는 매분기 첫째주에 개시됩니다.</p>
        <FundTable rows={AGENCY} />
      </section>

      <section className="fc-box">
        <h2 className="fc-box-title">신청 절차</h2>
        <ol className="fc-steps">
          <li><b>업체·자금 선택</b> 사업자번호를 넣고 받을 자금을 고릅니다</li>
          <li><b>약관 동의</b></li>
          <li><b>신청서 작성</b></li>
          <li><b>서류 제출</b> 기한이 지나면 신청이 자동 취소됩니다</li>
          <li><b>최종 제출</b> 여기까지 해야 접수가 완료됩니다</li>
          <li><b>결과 확인</b> 마이페이지에서 조회하고 문자·알림톡으로도 안내됩니다</li>
        </ol>
      </section>

      <div className="fc-foot">
        <p>
          <Link href={HUB}>자금 선택부터 신청까지 전체 안내 보기 →</Link>
        </p>
        <p className="fc-src">
          출처: 소상공인정책자금 정책자금한눈에보기·금리안내(2026년 3/4분기, 7월 10일 적용)·융자계획 변경(4차) 공고·대출신청안내 · 2026.08.03 확인.
          본 사이트는 정부 공식 사이트가 아닙니다. 최종 조건은 소상공인정책자금 누리집과 소상공인 통합콜센터(1533-0100, 1번 정책자금)에서 확인하시기 바랍니다.
        </p>
      </div>
    </main>
  );
}
