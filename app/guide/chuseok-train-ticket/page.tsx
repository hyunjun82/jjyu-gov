/* 2026 추석 기차표 예매 — 단독 원페이지
 *
 * 1차 출처
 *   · 한국철도공사 공지 "2026년 추석 연휴 승차권 예매 안내문"
 *     https://www.korail.com/ticket/guest/notice/25563 (2026-08-13 등록)
 *     본문이 이미지라 Playwright 로 원문 이미지를 열어 캡처·대조했다.
 *   · SR 공지 "열차 승차권 예매 개시일 안내"
 *     https://etk.srail.kr/cms/article/view.do?postNo=909&pageId=TK0502000000 (2026-08-03 등록)
 *     2026년 9월 고속철도 통합 운행 — 9/1 이후 열차는 통합앱 코레일+·홈페이지·역 창구 판매
 *
 * 버튼은 KTX / SRT 두 개만 둔다.
 */
import Link from 'next/link';

export const metadata = {
  title: '추석 기차표 예매 — 2026 KTX·SRT 예매일과 시간 한 화면에 | 정부지원사업',
  description:
    '2026 추석 기차표 예매는 9월 3~4일 사전예매(장애인·경로·임산부·국가유공자), 9월 7~11일 모든 국민입니다. 1인당 최대 12매, 결제 9월 12~15일, 잔여석 9월 11일 15시부터. KTX·SRT 예매처와 환불 위약금까지 한 화면에.',
  alternates: { canonical: 'https://gov.jjyu.co.kr/guide/chuseok-train-ticket' },
};

const KTX = 'https://www.korail.com/ticket/main';
const SRT = 'https://etk.srail.kr/hpg/hra/01/selectScheduleList.do?pageId=TK0101010000';
const NOTICE = 'https://www.korail.com/ticket/guest/notice/25563';
const SR_NOTICE = 'https://etk.srail.kr/cms/article/view.do?postNo=909&pageId=TK0502000000';

/* 색은 사이트 기본 토큰(네이비)을 쓴다 — 참고 이미지에서 가져온 건 배치뿐이다. */
const NAVY = '#003D88';
const DEEP = '#0B2148';
const SKY = '#7FB3F5';   // 어두운 배경 위 강조색

const FAQ = [
  {
    q: '추석 기차표는 몇 시부터 예매하나요?',
    a: '사전예매(장애인·경로·임산부·국가유공자)는 9월 3~4일 오전 9시부터 오후 3시까지, 모든 국민 예매는 9월 7~11일 오전 7시부터 오후 1시까지입니다.',
  },
  {
    q: '역 창구에서 살 수 있나요?',
    a: '명절 예매 기간에는 역 창구 판매가 없습니다. 코레일톡(앱)과 홈페이지로만 받습니다. 9월 11일 15시부터 시작하는 잔여석은 역 창구에서도 살 수 있습니다.',
  },
  {
    q: 'SRT도 같은 곳에서 예매하나요?',
    a: '2026년 9월부터 고속철도가 통합 운행돼 9월 1일 이후 운행 열차는 통합앱 코레일+와 홈페이지, 역 창구에서 삽니다. SR 회원만 있으셨다면 통합 회원으로 전환해야 명절 예매가 됩니다.',
  },
  { q: '한 사람이 몇 장까지 살 수 있나요?', a: '1인당 최대 12매이고 한 번에는 6매까지입니다.' },
  {
    q: '예매만 하면 표가 확보되나요?',
    a: '아닙니다. 9월 12일 0시부터 15일 24시 사이에 결제해야 합니다. 사전예매 승차권은 9월 18일까지이고 고객센터 ARS 전화결제도 됩니다.',
  },
  {
    q: '임산부도 사전예매 대상인가요?',
    a: '대상입니다. 장애인, 경로, 임산부, 국가유공자가 9월 3~4일 사전예매 대상이며 국가유공자는 국가보훈부가 지정한 교통지원대상자에 한합니다.',
  },
  {
    q: '표를 못 구하면 방법이 없나요?',
    a: '9월 11일 15시부터 잔여석이 상시 판매됩니다. 앱과 홈페이지, 역 창구에서 살 수 있고 비회원은 예매 즉시 결제해야 합니다.',
  },
  {
    q: '취소하면 얼마를 떼나요?',
    a: '출발 2일 전까지 400원, 1일 전 5%, 당일 3시간 전까지 10%, 출발 전 20%입니다. 출발 후에는 20분까지 30%, 60분까지 40%, 도착시간까지 70%입니다.',
  },
  {
    q: '연휴에도 할인이 되나요?',
    a: 'KTX 마일리지와 일반열차 할인쿠폰 적립이 제외되고 노인석·자유석·유아동반석·KTX동반석과 N카드·인터넷특가·여행패스 같은 할인상품 운영도 중지됩니다.',
  },
  { q: '중간에 내리면 남은 요금을 돌려주나요?', a: '승차 후 도중역에서 내리면 남은 구간 운임은 반환되지 않습니다.' },
];

const th: React.CSSProperties = {
  fontSize: 12.5, color: '#8B95A1', fontWeight: 600, padding: '10px 8px',
  borderBottom: '1px solid #EEE', textAlign: 'left', whiteSpace: 'nowrap',
};
const td: React.CSSProperties = {
  fontSize: 14.5, padding: '13px 8px', borderBottom: '1px solid #F4F4F4', color: '#191F28',
};

export default function ChuseokTicketPage() {
  return (
    <div style={{ background: '#F7F8FA' }}>
      {/* ── 상단 바 ─────────────────────────── */}
      <div style={{ background: DEEP, color: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: '#fff', fontWeight: 800, fontSize: 17, display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ background: '#1E5AA8', color: '#fff', width: 26, height: 26, borderRadius: 7, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 15 }}>추</span>
            추석 기차표
          </Link>
          <nav style={{ display: 'flex', gap: 16, fontSize: 14.5, color: '#C9C9C9', flexWrap: 'wrap' }}>
            <a href="#schedule" style={{ color: SKY, fontWeight: 700 }}>예매 일정</a>
            <a href="#lines">노선별</a>
            <a href="#refund">환불</a>
            <a href="#faq">자주 묻는 것</a>
          </nav>
          <span style={{ marginLeft: 'auto', fontSize: 13, color: '#9AA0A6' }}>2026.08.15 기준 · 코레일 공지 원문</span>
        </div>
      </div>

      {/* ── 히어로 ─────────────────────────── */}
      <div style={{ background: DEEP, color: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', padding: '44px 18px 52px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 30, alignItems: 'center' }}>
          <div>
            <p style={{ color: SKY, fontSize: 13.5, fontWeight: 700, letterSpacing: 1.2, margin: 0 }}>2026 CHUSEOK TRAIN TICKET</p>
            <h1 style={{ fontSize: 38, fontWeight: 800, lineHeight: 1.25, margin: '12px 0 14px' }}>
              추석 기차표 예매,<br />날짜와 시간을 한 화면에
            </h1>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: '#C9CDD2', margin: '0 0 22px' }}>
              사전예매 9월 3~4일, 모든 국민 9월 7~11일입니다. 올해는 역 창구 예매가 없고
              통합 회원만 살 수 있어 전환부터 하셔야 합니다.
            </p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <a href={KTX} rel="noopener"
                 style={{ background: '#1E5AA8', color: '#fff', fontWeight: 800, fontSize: 16, padding: '14px 26px', borderRadius: 10 }}>
                KTX 예매하기
              </a>
              <a href={SRT} rel="noopener"
                 style={{ border: `1px solid ${SKY}`, color: SKY, fontWeight: 800, fontSize: 16, padding: '14px 26px', borderRadius: 10 }}>
                SRT 예매하기
              </a>
            </div>
          </div>

          {/* 핵심 수치 카드 */}
          <div style={{ background: `linear-gradient(140deg, ${NAVY} 0%, #1E5AA8 100%)`, color: '#fff', borderRadius: 18, padding: '22px 24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: 14, fontWeight: 700 }}>모든 국민 예매</span>
              <span style={{ background: 'rgba(255,255,255,.22)', borderRadius: 20, padding: '4px 12px', fontSize: 12.5, fontWeight: 700 }}>07:00~13:00</span>
            </div>
            <p style={{ fontSize: 44, fontWeight: 800, margin: '10px 0 4px', lineHeight: 1 }}>
              9월 7일<span style={{ fontSize: 20, fontWeight: 700 }}> ~ 11일</span>
            </p>
            <p style={{ fontSize: 14, margin: '0 0 16px', fontWeight: 600 }}>사전예매 9월 3~4일 (09:00~15:00)</p>
            <div style={{ borderTop: '1px solid rgba(255,255,255,.25)', paddingTop: 14, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              <div>
                <p style={{ fontSize: 12.5, margin: 0, opacity: 0.75 }}>결제기간</p>
                <p style={{ fontSize: 19, fontWeight: 800, margin: '2px 0 0' }}>9.12 ~ 9.15</p>
              </div>
              <div>
                <p style={{ fontSize: 12.5, margin: 0, opacity: 0.75 }}>1인당 매수</p>
                <p style={{ fontSize: 19, fontWeight: 800, margin: '2px 0 0' }}>최대 12매</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '30px 18px 60px' }}>
        {/* ── 큰 배너 2개 ─────────────────── */}
        <a href={KTX} rel="noopener"
           style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    background: `linear-gradient(100deg, ${NAVY} 0%, #1E5AA8 100%)`, color: '#fff',
                    borderRadius: 16, padding: '26px 28px', marginBottom: 14 }}>
          <span>
            <span style={{ display: 'block', fontSize: 27, fontWeight: 800 }}>KTX 예매</span>
            <span style={{ display: 'block', fontSize: 14.5, marginTop: 6, opacity: 0.85 }}>
              코레일톡·홈페이지 · 9월 7일부터 노선별로 열림
            </span>
          </span>
          <span style={{ fontSize: 26 }}>→</span>
        </a>

        <a href={SRT} rel="noopener"
           style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    background: DEEP, color: '#fff', border: `1px solid ${SKY}`,
                    borderRadius: 16, padding: '26px 28px', marginBottom: 26 }}>
          <span>
            <span style={{ display: 'block', fontSize: 27, fontWeight: 800 }}>SRT 예매</span>
            <span style={{ display: 'block', fontSize: 14.5, marginTop: 6, color: '#C9CDD2' }}>
              9월부터 통합 운행 · 통합앱 코레일+에서 구매
            </span>
          </span>
          <span style={{ fontSize: 26, color: SKY }}>→</span>
        </a>

        {/* ── 2열 카드: 예매 일정 / 기본 정보 ── */}
        <div id="schedule" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 16, marginBottom: 16 }}>
          <section style={{ background: '#fff', borderRadius: 16, padding: '22px 20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 8 }}>
              <h2 style={{ fontSize: 19, fontWeight: 800, margin: 0 }}>
                <span style={{ color: NAVY }}>▍</span> 예매 일정
              </h2>
              <span style={{ fontSize: 12.5, color: '#8B95A1' }}>대상별 · 시간</span>
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr><th style={th}>대상</th><th style={th}>날짜</th><th style={{ ...th, textAlign: 'right' }}>시간</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td style={td}>장애인·경로<br />임산부·국가유공자</td>
                  <td style={{ ...td, fontWeight: 700 }}>9.3(목)~9.4(금)</td>
                  <td style={{ ...td, textAlign: 'right' }}>09:00~15:00</td>
                </tr>
                <tr>
                  <td style={td}>모든 국민</td>
                  <td style={{ ...td, fontWeight: 700 }}>9.7(월)~9.11(금)</td>
                  <td style={{ ...td, textAlign: 'right' }}>07:00~13:00</td>
                </tr>
                <tr>
                  <td style={td}>잔여석</td>
                  <td style={{ ...td, fontWeight: 700 }}>9.11(금)부터</td>
                  <td style={{ ...td, textAlign: 'right' }}>15:00~ 상시</td>
                </tr>
                <tr>
                  <td style={td}>결제</td>
                  <td style={{ ...td, fontWeight: 700 }}>9.12(토)~9.15(화)</td>
                  <td style={{ ...td, textAlign: 'right' }}>00시~24시</td>
                </tr>
              </tbody>
            </table>
            <p style={{ fontSize: 12.5, color: '#8B95A1', marginTop: 12, marginBottom: 0, lineHeight: 1.7 }}>
              사전예매 승차권 결제는 9.18(금)까지 · 고객센터 ARS 전화결제 가능
            </p>
          </section>

          <section style={{ background: '#fff', borderRadius: 16, padding: '22px 20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 8 }}>
              <h2 style={{ fontSize: 19, fontWeight: 800, margin: 0 }}>
                <span style={{ color: NAVY }}>▍</span> 기본 정보
              </h2>
              <span style={{ fontSize: 12.5, color: '#8B95A1' }}>코레일 안내문</span>
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <tbody>
                <tr><td style={{ ...td, color: '#6B7684', width: 96 }}>대상기간</td><td style={td}>9.23(수)~9.27(일) 5일간<br />추석 9.25(금)</td></tr>
                <tr><td style={{ ...td, color: '#6B7684' }}>예매처</td><td style={td}>코레일톡(앱)·홈페이지<br /><span style={{ color: '#C0392B' }}>역 창구 예매 없음</span></td></tr>
                <tr><td style={{ ...td, color: '#6B7684' }}>회원</td><td style={td}>통합 회원만 가능<br />SR 회원은 전환 필요</td></tr>
                <tr><td style={{ ...td, color: '#6B7684' }}>매수</td><td style={td}>1인당 12매 (1회 6매)</td></tr>
                <tr><td style={{ ...td, color: '#6B7684' }}>문의</td><td style={td}>철도고객센터 1588-7788</td></tr>
              </tbody>
            </table>
          </section>
        </div>

        {/* ── 노선별 일정 ─────────────────── */}
        <section id="lines" style={{ background: '#fff', borderRadius: 16, padding: '22px 20px', marginBottom: 16 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 10 }}>
            <h2 style={{ fontSize: 19, fontWeight: 800, margin: 0 }}>
              <span style={{ color: NAVY }}>▍</span> 날짜별 열리는 노선
            </h2>
            <span style={{ fontSize: 12.5, color: '#8B95A1' }}>내 노선이 어느 날인지</span>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 560 }}>
              <thead>
                <tr><th style={th}>날짜</th><th style={th}>열차</th><th style={th}>노선</th></tr>
              </thead>
              <tbody>
                <tr><td style={{ ...td, fontWeight: 700, whiteSpace: 'nowrap' }}>9.3(목)</td><td style={td}>전 열차</td><td style={td}>경부·경전·동해·중부내륙·경북·대구·충북·교외선</td></tr>
                <tr><td style={{ ...td, fontWeight: 700, whiteSpace: 'nowrap' }}>9.4(금)</td><td style={td}>전 열차</td><td style={td}>호남·전라·중앙·강릉·장항·영동·태백·서해·경춘·목포보성선</td></tr>
                <tr><td style={{ ...td, fontWeight: 700, whiteSpace: 'nowrap' }}>9.7(월)</td><td style={td}>일반열차</td><td style={td}>전 노선</td></tr>
                <tr><td style={{ ...td, fontWeight: 700, whiteSpace: 'nowrap' }}>9.8(화)</td><td style={td}>KTX (서울·청량리 등)</td><td style={td}>경전선·강릉선·동해선·중앙선·중부내륙선</td></tr>
                <tr><td style={{ ...td, fontWeight: 700, whiteSpace: 'nowrap' }}>9.9(수)</td><td style={td}>KTX (용산 등)</td><td style={td}>호남선·전라선</td></tr>
                <tr><td style={{ ...td, fontWeight: 700, whiteSpace: 'nowrap' }}>9.10(목)</td><td style={td}>KTX (수서)</td><td style={td}>경부선·경전선·동해선·호남선·전라선</td></tr>
                <tr><td style={{ ...td, fontWeight: 700, whiteSpace: 'nowrap' }}>9.11(금)</td><td style={td}>KTX (서울)</td><td style={td}>경부선</td></tr>
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 12.5, color: '#8B95A1', marginTop: 12, marginBottom: 0 }}>
            사전예매 대상자는 철도고객센터(1544-8545)로도 예매할 수 있습니다.
          </p>
        </section>

        {/* ── 환불 위약금 ─────────────────── */}
        <section id="refund" style={{ background: '#fff', borderRadius: 16, padding: '22px 20px', marginBottom: 16 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 10 }}>
            <h2 style={{ fontSize: 19, fontWeight: 800, margin: 0 }}>
              <span style={{ color: NAVY }}>▍</span> 환불 위약금
            </h2>
            <span style={{ fontSize: 12.5, color: '#8B95A1' }}>취소 시점별</span>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 620 }}>
              <thead>
                <tr>
                  {['출발 2일 전', '1일 전', '당일~3시간 전', '3시간 후~출발 전', '출발 후 20분', '출발 후 60분', '도착시간까지'].map((h) => (
                    <th key={h} style={{ ...th, textAlign: 'center' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {['400원', '5%', '10%', '20%', '30%', '40%', '70%'].map((v, i) => (
                    <td key={v} style={{ ...td, textAlign: 'center', fontWeight: i === 0 ? 800 : 700, color: i >= 4 ? '#C0392B' : '#191F28' }}>{v}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 13.5, color: '#4E5968', marginTop: 12, marginBottom: 0, lineHeight: 1.7 }}>
            출발 이틀 전까지는 400원만 뗍니다. 일정이 흔들릴 것 같으면 이틀 전이 갈림길입니다.
          </p>
        </section>

        {/* ── 놓치기 쉬운 것 ──────────────── */}
        <section style={{ background: '#fff', borderRadius: 16, padding: '22px 20px', marginBottom: 16 }}>
          <h2 style={{ fontSize: 19, fontWeight: 800, margin: '0 0 12px' }}>
            <span style={{ color: NAVY }}>▍</span> 놓치기 쉬운 것
          </h2>
          <ul style={{ fontSize: 15, lineHeight: 1.95, paddingLeft: 20, margin: 0, color: '#333D4B' }}>
            <li>예매와 결제 기간이 다릅니다. 9.12~9.15에 결제하지 않으면 좌석이 풀립니다.</li>
            <li>전용 웹페이지는 8.24(월) 14시~9.2(수), 9.5(토)~9.6(일)에 미리 써 볼 수 있습니다.</li>
            <li>KTX 마일리지와 일반열차 할인쿠폰은 이번 명절 승차권 적립 대상에서 빠집니다.</li>
            <li>노인석·자유석·유아동반석·KTX동반석과 N카드·인터넷특가·여행패스 등 할인상품은 운영 중지됩니다.</li>
            <li>승차 후 도중역에서 내리면 남은 구간 운임은 반환되지 않습니다.</li>
          </ul>
        </section>

        {/* ── FAQ ─────────────────────────── */}
        <section id="faq" style={{ background: '#fff', borderRadius: 16, padding: '22px 20px', marginBottom: 16 }}>
          <h2 style={{ fontSize: 19, fontWeight: 800, margin: '0 0 6px' }}>
            <span style={{ color: NAVY }}>▍</span> 자주 묻는 것
          </h2>
          {FAQ.map((f, i) => (
            <div key={f.q} style={{ padding: '15px 0', borderBottom: i === FAQ.length - 1 ? 'none' : '1px solid #F4F4F4' }}>
              <p style={{ fontSize: 16, fontWeight: 700, margin: '0 0 6px' }}>
                <span style={{ color: NAVY, marginRight: 6 }}>Q</span>{f.q}
              </p>
              <p style={{ fontSize: 15.5, lineHeight: 1.8, margin: 0, color: '#4E5968' }}>{f.a}</p>
            </div>
          ))}
        </section>

        <p style={{ fontSize: 12.5, color: '#8B95A1', lineHeight: 1.8, margin: 0 }}>
          출처: 한국철도공사 <a href={NOTICE} rel="noopener">2026년 추석 연휴 승차권 예매 안내문</a>(2026.08.13) ·
          SR <a href={SR_NOTICE} rel="noopener">열차 승차권 예매 개시일 안내</a>(2026.08.03) · 2026.08.15 검수 ·
          정부지원사업 에디터. 예매 일정과 조건은 코레일·SR 공식 채널에서 최종 확인하세요.
        </p>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQ.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          }),
        }}
      />
    </div>
  );
}
