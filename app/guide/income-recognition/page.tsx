/* 소득인정액 계산법 — 원페이지 (기초생활보장 판정의 뿌리)
 *
 * 1차 출처는 data/income-recognition.ts 주석에 정리했다.
 * 이 페이지는 공식과 구조를 잡고, 세부 항목은 하위 글로 내려보낸다.
 *   ├ 소득평가액 → /guide/income-evaluation
 *   ├ 재산 환산  → /guide/property-conversion
 *   │    ├ 기본재산액 → /guide/basic-property
 *   │    ├ 주거용재산 → /guide/housing-property
 *   │    └ 금융·자동차 → /guide/financial-car-property
 *   └ 모의계산기 → /calc/median-income
 */
import Link from 'next/link';
import { SRC, REGIONS, BASIC_PROPERTY, HOUSING_LIMIT, CONVERSION_RATE, SUPPORT_DUTY } from '@/data/income-recognition';
import { BENEFIT_STANDARD } from '@/data/median-2027';
import { articleSchema, breadcrumbSchema, faqSchema, organizationSchema, personSchema, toJsonLd } from '@/lib/schema';

const URL = 'https://gov.jjyu.co.kr/guide/income-recognition';

export const metadata = {
  title: '소득인정액 계산법 — 소득평가액 + 재산 환산액, 내 기준으로 계산하기 | 정부지원사업',
  description:
    '기초생활 급여는 세전 소득이 아니라 소득인정액으로 판정합니다. 소득인정액은 소득평가액과 재산의 소득환산액을 더한 값이고, 재산에서는 기본재산액(서울 9,900만원 등)과 부채를 먼저 뺍니다. 환산율은 주거용 1.04%, 일반 4.17%, 금융 6.26%입니다.',
  alternates: { canonical: URL },
  openGraph: {
    type: 'article', url: URL, siteName: '정부지원사업', locale: 'ko_KR',
    title: '소득인정액 계산법 — 소득평가액 + 재산 환산액',
    description: '재산이 있어도 기본재산액과 부채를 먼저 뺍니다. 공식과 구간별 환산율을 원문 기준으로 정리했습니다.',
  },
};

const NAVY = '#003D88';
const DEEP = '#0B2148';
const SKY = '#7FB3F5';
const W = (n: number) => n.toLocaleString('ko-KR');
const M = (n: number) => `${(n / 10000).toLocaleString('ko-KR')}만원`;

const FAQ = [
  {
    q: '소득인정액이 뭔가요?',
    a: '보장기관이 급여를 결정하려고 산출하는 금액으로, 소득평가액과 재산의 소득환산액을 합친 값입니다. 통장에 찍히는 월급이 아니라 이 금액으로 수급 여부를 가립니다.',
  },
  {
    q: '재산이 있으면 무조건 탈락인가요?',
    a: '아닙니다. 재산가액에서 기본재산액과 부채를 먼저 뺀 뒤 남은 금액에만 환산율을 곱합니다. 기본재산액은 서울 9,900만원, 경기 8,000만원, 광역·세종·창원 7,700만원, 그 외 지역 5,300만원입니다.',
  },
  {
    q: '환산율은 얼마인가요?',
    a: '월 기준으로 주거용재산 1.04%, 일반재산 4.17%, 금융재산 6.26%이고 일부 자동차는 100%입니다. 부양의무자는 주거용 1.04%, 일반 2.08%가 적용됩니다.',
  },
  {
    q: '일하면 소득이 그대로 잡히나요?',
    a: '그렇지 않습니다. 학생, 장애인, 노인, 18~24세가 얻은 근로·사업소득은 100분의 30을 빼고 계산합니다. 그 밖의 근로·사업소득도 100분의 30 범위에서 정한 비율을 공제합니다.',
  },
  {
    q: '차가 있으면 안 되나요?',
    a: '자동차는 원칙적으로 월 100% 환산이라 불리하지만, 장애의 정도가 심한 장애인 본인의 2,000cc 미만 자동차 1대, 국가유공자 상이등급 1~3급 본인의 2,000cc 미만 자동차 1대, 생업용 자동차 1대는 재산 범위에서 제외됩니다.',
  },
  {
    q: '부양의무자 때문에 안 되는 것 아닌가요?',
    a: '부양의무자 기준은 의료급여에만 적용되고 생계·주거·교육급여에는 적용되지 않습니다. 다만 생계급여는 부양의무자의 소득이 연 1.3억원이거나 일반재산이 12억원을 넘으면 대상에서 제외됩니다.',
  },
  {
    q: '부채도 빼주나요?',
    a: '뺍니다. 임대보증금과 금융회사 대출금, 주택연금·농지연금 누적액, 공공기관 대출금, 법에 근거한 공제회 대출금, 법원이 확인한 사채 중 미상환액이 부채로 인정됩니다.',
  },
  {
    q: '계산이 어려운데 어디서 해보나요?',
    a: '이 사이트의 중위소득 계산기에서 가구원 수와 소득을 넣으면 급여별 문턱 금액과 비교할 수 있습니다. 정확한 판정은 주민센터나 복지로 모의계산에서 확인하세요.',
  },
];

const card: React.CSSProperties = { background: '#fff', borderRadius: 16, padding: '22px 20px', marginBottom: 16 };
const th: React.CSSProperties = { background: '#F2F4F6', fontSize: 13, fontWeight: 700, padding: '10px 8px', border: '1px solid #E5E8EB', textAlign: 'center', whiteSpace: 'nowrap' };
const td: React.CSSProperties = { fontSize: 14, padding: '11px 8px', border: '1px solid #E5E8EB', textAlign: 'center', color: '#191F28' };

export default function IncomeRecognitionPage() {
  return (
    <div style={{ background: '#F7F8FA' }}>
      <div style={{ background: DEEP, color: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: '#fff', fontWeight: 800, fontSize: 17 }}>소득인정액</Link>
          <nav style={{ display: 'flex', gap: 16, fontSize: 14.5, color: '#C9C9C9', flexWrap: 'wrap' }}>
            <a href="#formula" style={{ color: SKY, fontWeight: 700 }}>계산식</a>
            <a href="#steps">단계별</a>
            <a href="#rate">환산율</a>
            <a href="#duty">부양의무자</a>
            <a href="#faq">자주 묻는 것</a>
          </nav>
          <Link href="/guide/median-income-2027" style={{ marginLeft: 'auto', fontSize: 13, color: '#9AA0A6' }}>2027년 기준 중위소득 →</Link>
        </div>
      </div>

      <div style={{ background: DEEP, color: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', padding: '40px 18px 46px' }}>
          <p style={{ color: SKY, fontSize: 13.5, fontWeight: 700, letterSpacing: 1, margin: 0 }}>기초생활보장 판정의 뿌리</p>
          <h1 style={{ fontSize: 36, fontWeight: 800, lineHeight: 1.3, margin: '12px 0 14px' }}>
            소득인정액 계산법
          </h1>
          <p style={{ fontSize: 16.5, lineHeight: 1.8, color: '#C9CDD2', margin: '0 0 22px', maxWidth: 720 }}>
            급여 판정은 통장에 찍히는 월급이 아니라 소득인정액으로 합니다. 재산이 있어도 기본재산액과
            부채를 먼저 빼고, 남은 금액에만 환산율을 곱합니다. 그래서 집이 있다고 무조건 탈락하는 것이 아닙니다.
          </p>
          <div style={{ background: 'rgba(255,255,255,.08)', border: `1px solid ${SKY}`, borderRadius: 14, padding: '20px 22px', maxWidth: 760 }}>
            <p style={{ fontSize: 21, fontWeight: 800, margin: 0, lineHeight: 1.5 }}>
              소득인정액 = 소득평가액 + 재산의 소득환산액
            </p>
            <p style={{ fontSize: 14.5, color: '#C9CDD2', margin: '10px 0 0', lineHeight: 1.8 }}>
              소득평가액 = 실제소득 − 가구특성별 지출비용 − (근로소득공제 + 그 밖의 추가 지출)<br />
              재산의 소득환산액 = (재산가액 − 기본재산액 − 부채) × 소득환산율
            </p>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '28px 18px 60px' }}>
        {/* 단계별 */}
        <section id="steps" style={card}>
          <h2 style={{ fontSize: 20, fontWeight: 800, margin: '0 0 12px' }}>
            <span style={{ color: NAVY }}>▍</span> 어떻게 계산되나 — 네 단계
          </h2>
          <ol style={{ fontSize: 15.5, lineHeight: 1.9, paddingLeft: 22, margin: 0 }}>
            <li><b>실제소득을 모은다</b> — 근로·사업·재산·이전소득을 합칩니다. 비과세 근로소득은 원칙적으로 빠집니다.</li>
            <li><b>공제를 뺀다</b> — 학생·장애인·노인·18~24세의 근로·사업소득은 100분의 30을 뺍니다. 만성질환 치료비 같은 가구특성별 지출도 뺍니다.</li>
            <li><b>재산을 소득으로 환산한다</b> — 재산가액에서 기본재산액과 부채를 뺀 뒤 종류별 환산율을 곱합니다.</li>
            <li><b>둘을 더해 기준과 비교한다</b> — 소득평가액 + 재산 환산액이 급여별 선정기준 이하면 대상입니다.</li>
          </ol>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 16 }}>
            <Link href="/guide/income-evaluation" style={{ fontSize: 14, background: '#F2F6FC', color: '#1E4C8F', borderRadius: 8, padding: '9px 13px' }}>① 소득평가액 자세히</Link>
            <Link href="/guide/property-conversion" style={{ fontSize: 14, background: '#F2F6FC', color: '#1E4C8F', borderRadius: 8, padding: '9px 13px' }}>② 재산 환산 자세히</Link>
            <Link href="/guide/basic-property" style={{ fontSize: 14, background: '#F2F6FC', color: '#1E4C8F', borderRadius: 8, padding: '9px 13px' }}>③ 기본재산액</Link>
            <Link href="/guide/housing-property" style={{ fontSize: 14, background: '#F2F6FC', color: '#1E4C8F', borderRadius: 8, padding: '9px 13px' }}>④ 주거용재산 한도</Link>
            <Link href="/guide/financial-car-property" style={{ fontSize: 14, background: '#F2F6FC', color: '#1E4C8F', borderRadius: 8, padding: '9px 13px' }}>⑤ 금융재산·자동차</Link>
          </div>
        </section>

        {/* 공제 */}
        <section id="formula" style={card}>
          <h2 style={{ fontSize: 20, fontWeight: 800, margin: '0 0 6px' }}>
            <span style={{ color: NAVY }}>▍</span> 재산에서 먼저 빼는 것
          </h2>
          <p style={{ fontSize: 14.5, color: '#4E5968', margin: '0 0 12px', lineHeight: 1.75 }}>
            지역에 따라 빼주는 금액이 다릅니다. 이 금액 아래로는 재산이 소득으로 환산되지 않습니다.
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 560 }}>
              <thead>
                <tr>
                  <th style={th}>구분</th>
                  {REGIONS.map((r) => <th key={r} style={th}>{r}</th>)}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ ...td, fontWeight: 700 }}>기본재산액</td>
                  {BASIC_PROPERTY.map((v, i) => (
                    <td key={i} style={{ ...td, fontWeight: 700, color: NAVY }}>{M(v)}</td>
                  ))}
                </tr>
                <tr>
                  <td style={{ ...td, fontWeight: 700 }}>주거용재산 한도액</td>
                  {HOUSING_LIMIT.map((v, i) => <td key={i} style={td}>{M(v)}</td>)}
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 13, color: '#6B7684', marginTop: 12, marginBottom: 0, lineHeight: 1.7 }}>
            기본재산액은 가구 규모와 관계없이 적용됩니다. 부채(임대보증금·금융회사 대출금 등)도 함께 뺍니다.
          </p>
        </section>

        {/* 환산율 */}
        <section id="rate" style={card}>
          <h2 style={{ fontSize: 20, fontWeight: 800, margin: '0 0 6px' }}>
            <span style={{ color: NAVY }}>▍</span> 재산 종류별 소득환산율 (월)
          </h2>
          <p style={{ fontSize: 14.5, color: '#4E5968', margin: '0 0 12px', lineHeight: 1.75 }}>
            같은 1억이라도 어떤 재산이냐에 따라 소득으로 잡히는 금액이 6배까지 벌어집니다.
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 560 }}>
              <thead>
                <tr>
                  <th style={th}>구분</th>
                  <th style={th}>주거용재산</th>
                  <th style={th}>일반재산</th>
                  <th style={th}>금융재산</th>
                  <th style={th}>자동차</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ ...td, fontWeight: 700 }}>수급(권)자</td>
                  <td style={{ ...td, color: NAVY, fontWeight: 700 }}>월 {CONVERSION_RATE.수급권자.주거용재산}%</td>
                  <td style={td}>월 {CONVERSION_RATE.수급권자.일반재산}%</td>
                  <td style={td}>월 {CONVERSION_RATE.수급권자.금융재산}%</td>
                  <td style={{ ...td, color: '#C0392B', fontWeight: 700 }}>월 {CONVERSION_RATE.수급권자.자동차}%</td>
                </tr>
                <tr>
                  <td style={{ ...td, fontWeight: 700 }}>부양의무자</td>
                  <td style={td}>월 {CONVERSION_RATE.부양의무자.주거용재산}%</td>
                  <td style={td}>월 {CONVERSION_RATE.부양의무자.일반재산}%</td>
                  <td style={{ ...td, color: '#8B95A1' }}>—</td>
                  <td style={{ ...td, color: '#8B95A1' }}>—</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style={{ background: '#F8F9FA', borderRadius: 12, padding: '14px 16px', marginTop: 14 }}>
            <b style={{ display: 'block', marginBottom: 6 }}>예시로 보면</b>
            <p style={{ fontSize: 14.5, lineHeight: 1.8, margin: 0, color: '#333D4B' }}>
              공제 후 남은 재산이 1,000만원일 때 주거용재산이면 월 10만 4천원, 일반재산이면 월 41만 7천원,
              금융재산이면 월 62만 6천원이 소득으로 잡힙니다. 자동차는 100%라 차값이 그대로 월 소득으로 계산됩니다.
            </p>
          </div>
        </section>

        {/* 소득평가액 공제 */}
        <section style={card}>
          <h2 style={{ fontSize: 20, fontWeight: 800, margin: '0 0 6px' }}>
            <span style={{ color: NAVY }}>▍</span> 일해서 번 돈은 30%를 빼줍니다
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.8, margin: '0 0 12px', color: '#333D4B' }}>
            시행령 제5조의2는 학생과 장애인, 노인, 18세 이상 24세 이하인 사람이 얻은 근로·사업소득의
            100분의 30을 빼도록 정하고 있습니다. 그 밖의 근로·사업소득도 100분의 30 범위에서 정한 비율만큼
            공제합니다. 자활기업이나 자활근로 사업에 참여해 받은 소득도 100분의 30을 뺍니다.
            장애인 직업재활시설에서 받은 소득은 100분의 50입니다.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.8, margin: 0, color: '#333D4B' }}>
            여기에 만성질환 치료·요양·재활로 지속 지출하는 의료비, 장애인연금 기초급여·부가급여, 장애수당,
            한부모가족 아동양육비 같은 항목도 소득에서 빠집니다. 그래서 <b>실제 소득보다 낮은 금액</b>으로
            판정되는 경우가 생깁니다.
          </p>
          <Link href="/guide/income-evaluation" className="btn-cta"
                style={{ display: 'block', textAlign: 'center', marginTop: 16 }}>
            소득평가액 공제 항목 전부 보기
          </Link>
        </section>

        {/* 부양의무자 */}
        <section id="duty" style={card}>
          <h2 style={{ fontSize: 20, fontWeight: 800, margin: '0 0 10px' }}>
            <span style={{ color: NAVY }}>▍</span> 부양의무자 기준
          </h2>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
              <tr><td style={{ ...td, textAlign: 'left', color: '#6B7684', width: 110 }}>범위</td><td style={{ ...td, textAlign: 'left' }}>{SUPPORT_DUTY.범위}</td></tr>
              <tr><td style={{ ...td, textAlign: 'left', color: '#6B7684' }}>적용</td><td style={{ ...td, textAlign: 'left', fontWeight: 700 }}>{SUPPORT_DUTY.적용}</td></tr>
              <tr><td style={{ ...td, textAlign: 'left', color: '#6B7684' }}>미적용</td><td style={{ ...td, textAlign: 'left' }}>{SUPPORT_DUTY.미적용}</td></tr>
              <tr><td style={{ ...td, textAlign: 'left', color: '#6B7684' }}>생계급여 예외</td><td style={{ ...td, textAlign: 'left', color: '#C0392B' }}>{SUPPORT_DUTY.생계급여예외}</td></tr>
            </tbody>
          </table>
        </section>

        {/* 기준과 비교 */}
        <section style={card}>
          <h2 style={{ fontSize: 20, fontWeight: 800, margin: '0 0 10px' }}>
            <span style={{ color: NAVY }}>▍</span> 계산한 소득인정액을 어디와 비교하나
          </h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 520 }}>
              <thead>
                <tr><th style={th}>급여</th><th style={th}>기준</th><th style={th}>2027년 1인</th><th style={th}>2027년 4인</th></tr>
              </thead>
              <tbody>
                {BENEFIT_STANDARD.map((b) => (
                  <tr key={b.name}>
                    <td style={{ ...td, fontWeight: 700 }}>{b.name}</td>
                    <td style={td}>중위 {b.pct}% 이하</td>
                    <td style={{ ...td, textAlign: 'right' }}>{W(b.y27[0])}원</td>
                    <td style={{ ...td, textAlign: 'right' }}>{W(b.y27[3])}원</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Link href="/calc/median-income" className="btn-cta"
                style={{ display: 'block', textAlign: 'center', marginTop: 16 }}>
            내 가구 기준 문턱 금액 계산하기
          </Link>
        </section>

        {/* FAQ */}
        <section id="faq" style={card}>
          <h2 style={{ fontSize: 20, fontWeight: 800, margin: '0 0 6px' }}>
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
          출처: <a href={SRC.decree} rel="noopener">국민기초생활 보장법 시행령 제5조의2</a> ·{' '}
          <a href={SRC.notice} rel="noopener">기본재산액 고시(제2025-204호, 2026.1.1 시행)</a> ·{' '}
          <a href={SRC.easylaw} rel="noopener">찾기쉬운 생활법령 「재산의 소득환산율」</a> ·{' '}
          <a href={SRC.bokjiro} rel="noopener">복지로 생계급여</a> · 2026.08.15 검수 · 정부지원사업 에디터.
          최종 판정은 주민센터와 복지로 모의계산에서 확인하세요.
        </p>
      </div>

      {[
        organizationSchema(),
        personSchema(),
        breadcrumbSchema([
          { name: '홈', url: 'https://gov.jjyu.co.kr' },
          { name: '복지', url: 'https://gov.jjyu.co.kr/category/welfare' },
          { name: '소득인정액 계산법' },
        ]),
        articleSchema({
          title: '소득인정액 계산법 — 소득평가액 + 재산의 소득환산액',
          description: '기초생활 급여 판정 기준인 소득인정액의 계산 구조와 기본재산액·환산율을 원문 기준으로 정리했습니다.',
          datePublished: '2026-08-15T11:00:00+09:00',
          dateModified: '2026-08-15T11:00:00+09:00',
          url: URL,
        }),
        faqSchema(FAQ),
      ].map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(schema) }} />
      ))}
    </div>
  );
}
