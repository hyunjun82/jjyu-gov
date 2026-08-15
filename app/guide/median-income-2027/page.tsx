/* 2027년 기준 중위소득 및 기초생활 소득기준액 발표 — 원페이지
 *
 * 1차 출처: 보건복지부 보도자료(2026-07-28, 제80차 중앙생활보장위원회)
 *   https://www.mohw.go.kr/board.es?mid=a10503010100&bid=0027&list_no=1491453&act=view
 *   Playwright 로 원문을 열어 급여별 선정기준표·기준임대료표까지 그대로 대조했다.
 *   수치와 검산은 data/median-2027.ts 주석 참고.
 *
 * 내부 이동: 계산기(/calc/median-income) ↔ 이 페이지 ↔ 중위소득 기준 제도 글들
 */
import Link from 'next/link';
import { MEDIAN_100, BENEFIT_STANDARD, RENT_STANDARD, REPAIR_COST, GROWTH_HISTORY, MOHW_RELEASE } from '@/data/median-2027';
import { MEDIAN_BANDS } from '@/data/median-bands';
import { articleSchema, breadcrumbSchema, faqSchema, organizationSchema, personSchema, toJsonLd } from '@/lib/schema';

const URL = 'https://gov.jjyu.co.kr/guide/median-income-2027';

export const metadata = {
  title: '2027년 기준 중위소득 발표 — 6.70% 인상, 급여별 소득기준액 전체표 | 정부지원사업',
  description:
    '2027년 기준 중위소득이 6.70% 올라 4인 가구 692만 9,885원으로 결정됐습니다. 생계급여 32%, 의료 40%, 주거 48%, 교육 50% 선정기준과 2026년 대비 증가액, 기준임대료까지 보건복지부 원문 그대로 정리했습니다.',
  alternates: { canonical: URL },
  openGraph: {
    type: 'article',
    url: URL,
    title: '2027년 기준 중위소득 발표 — 6.70% 역대 최대 인상',
    description: '4인 가구 692만 9,885원 · 생계급여 1인 87만 5,533원 · 급여별 선정기준 전체표',
    siteName: '정부지원사업',
    locale: 'ko_KR',
  },
};

const NAVY = '#003D88';
const DEEP = '#0B2148';
const SKY = '#7FB3F5';

const W = (n: number) => n.toLocaleString('ko-KR');

const FAQ = [
  {
    q: '2027년 기준 중위소득은 얼마인가요?',
    a: '4인 가구 기준 692만 9,885원입니다. 1인 가구는 273만 6,042원이고, 2026년 대비 6.70% 올랐습니다.',
  },
  {
    q: '왜 6.70%나 올랐나요?',
    a: '중앙생활보장위원회가 K자형 양극화에 대응할 필요가 있다고 보고 결정했습니다. 2015년 기준 중위소득 결정이 시작된 이후 가장 높은 증가율이며, 종전 최고치인 2026년 6.51%를 넘었습니다.',
  },
  {
    q: '생계급여는 얼마나 오르나요?',
    a: '1인 가구 최대 지급액이 82만 556원에서 87만 5,533원으로 약 5만 5천 원, 4인 가구는 207만 8,316원에서 221만 7,563원으로 약 14만 원 오릅니다.',
  },
  {
    q: '급여별 선정기준 비율도 바뀌나요?',
    a: '바뀌지 않습니다. 2027년에도 생계급여 32%, 의료급여 40%, 주거급여 48%, 교육급여 50%로 2026년과 같습니다.',
  },
  {
    q: '생계급여는 선정기준액만큼 다 받나요?',
    a: '아닙니다. 실제 지급액은 가구원 수별 선정기준액에서 그 가구의 소득인정액을 뺀 금액입니다.',
  },
  {
    q: '주거급여 기준임대료도 오르나요?',
    a: '급지와 가구원 수에 따라 1만 2천 원에서 5만 원까지 오릅니다. 자가가구 수선비용은 경보수 590만 원, 중보수 1,095만 원, 대보수 1,601만 원으로 2026년 수준을 유지합니다.',
  },
  {
    q: '기준 중위소득은 어디에 쓰이나요?',
    a: '기초생활보장제도를 비롯해 15개 중앙부처 80개 복지사업의 선정기준으로 쓰입니다.',
  },
  {
    q: '내년 기준 중위소득은 어떻게 정해지나요?',
    a: '당해년도 기준 중위소득에 가계금융복지조사 중위소득의 최신 3년 평균 증가율을 적용하는 것이 원칙이고, 소비자물가지수와 실질경제성장률 등을 반영해 증가율을 보정할 수 있습니다. 이 방식은 3년간 적용한 뒤 평가합니다.',
  },
];

const th: React.CSSProperties = {
  background: '#F2F4F6', fontSize: 13, fontWeight: 700, padding: '10px 8px',
  border: '1px solid #E5E8EB', textAlign: 'center', whiteSpace: 'nowrap',
};
const td: React.CSSProperties = {
  fontSize: 14, padding: '11px 8px', border: '1px solid #E5E8EB', textAlign: 'right', color: '#191F28',
};
const tdc: React.CSSProperties = { ...td, textAlign: 'center' };
const card: React.CSSProperties = { background: '#fff', borderRadius: 16, padding: '22px 20px', marginBottom: 16 };

export default function Median2027Page() {
  const sizes = ['1인', '2인', '3인', '4인', '5인', '6인'];

  return (
    <div style={{ background: '#F7F8FA' }}>
      {/* 상단 바 */}
      <div style={{ background: DEEP, color: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: '#fff', fontWeight: 800, fontSize: 17 }}>기준 중위소득</Link>
          <nav style={{ display: 'flex', gap: 16, fontSize: 14.5, color: '#C9C9C9', flexWrap: 'wrap' }}>
            <a href="#table" style={{ color: SKY, fontWeight: 700 }}>2027년 표</a>
            <a href="#benefit">급여별 기준</a>
            <a href="#rent">기준임대료</a>
            <a href="#bands">%별 제도</a>
            <a href="#faq">자주 묻는 것</a>
          </nav>
          <span style={{ marginLeft: 'auto', fontSize: 13, color: '#9AA0A6' }}>보건복지부 2026.07.28 발표</span>
        </div>
      </div>

      {/* 히어로 */}
      <div style={{ background: DEEP, color: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', padding: '42px 18px 48px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 28, alignItems: 'center' }}>
          <div>
            <p style={{ color: SKY, fontSize: 13.5, fontWeight: 700, letterSpacing: 1, margin: 0 }}>제80차 중앙생활보장위원회 의결</p>
            <h1 style={{ fontSize: 36, fontWeight: 800, lineHeight: 1.28, margin: '12px 0 14px' }}>
              2027년 기준 중위소득 및<br />기초생활 소득기준액 발표
            </h1>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: '#C9CDD2', margin: '0 0 22px' }}>
              6.70% 올랐습니다. 2015년 이후 가장 높은 증가율이고, 생계급여는 1인 가구 기준
              약 5만 5천 원, 4인 가구는 약 14만 원 늘어납니다.
            </p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <Link href="/calc/median-income"
                    style={{ background: '#1E5AA8', color: '#fff', fontWeight: 800, fontSize: 16, padding: '14px 24px', borderRadius: 10 }}>
                내 가구 기준 계산하기
              </Link>
              <a href={MOHW_RELEASE} rel="noopener"
                 style={{ border: `1px solid ${SKY}`, color: SKY, fontWeight: 800, fontSize: 16, padding: '14px 24px', borderRadius: 10 }}>
                복지부 발표 원문 보기
              </a>
            </div>
          </div>

          <div style={{ background: `linear-gradient(140deg, ${NAVY} 0%, #1E5AA8 100%)`, color: '#fff', borderRadius: 18, padding: '22px 24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: 14, fontWeight: 700 }}>2027년 4인 가구</span>
              <span style={{ background: 'rgba(255,255,255,.22)', borderRadius: 20, padding: '4px 12px', fontSize: 12.5, fontWeight: 700 }}>+6.70%</span>
            </div>
            <p style={{ fontSize: 40, fontWeight: 800, margin: '10px 0 4px', lineHeight: 1 }}>
              {W(MEDIAN_100['2027'][3])}<span style={{ fontSize: 19, fontWeight: 700 }}>원</span>
            </p>
            <p style={{ fontSize: 14, margin: '0 0 16px', opacity: 0.9 }}>2026년 {W(MEDIAN_100['2026'][3])}원에서 인상</p>
            <div style={{ borderTop: '1px solid rgba(255,255,255,.25)', paddingTop: 14, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              <div>
                <p style={{ fontSize: 12.5, margin: 0, opacity: 0.75 }}>1인 가구</p>
                <p style={{ fontSize: 18, fontWeight: 800, margin: '2px 0 0' }}>{W(MEDIAN_100['2027'][0])}원</p>
              </div>
              <div>
                <p style={{ fontSize: 12.5, margin: 0, opacity: 0.75 }}>생계급여 1인</p>
                <p style={{ fontSize: 18, fontWeight: 800, margin: '2px 0 0' }}>{W(BENEFIT_STANDARD[0].y27[0])}원</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '28px 18px 60px' }}>
        {/* 기준 중위소득 100% */}
        <section id="table" style={card}>
          <h2 style={{ fontSize: 20, fontWeight: 800, margin: '0 0 4px' }}>
            <span style={{ color: NAVY }}>▍</span> 기준 중위소득 100%
          </h2>
          <p style={{ fontSize: 14, color: '#6B7684', margin: '0 0 12px' }}>단위: 원/월 · 2026년 대비 증가액 포함</p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 560 }}>
              <thead>
                <tr>
                  <th style={th}>가구원 수</th>
                  <th style={th}>2026년</th>
                  <th style={{ ...th, background: '#EAF1FB', color: NAVY }}>2027년</th>
                  <th style={th}>증가액</th>
                </tr>
              </thead>
              <tbody>
                {sizes.map((s, i) => (
                  <tr key={s}>
                    <td style={tdc}>{s} 가구</td>
                    <td style={td}>{W(MEDIAN_100['2026'][i])}</td>
                    <td style={{ ...td, fontWeight: 800, color: NAVY, background: '#F7FAFF' }}>{W(MEDIAN_100['2027'][i])}</td>
                    <td style={{ ...td, color: '#C0392B' }}>+{W(MEDIAN_100['2027'][i] - MEDIAN_100['2026'][i])}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 13, color: '#6B7684', marginTop: 12, marginBottom: 0, lineHeight: 1.7 }}>
            기준 중위소득은 기초생활보장제도를 비롯해 <b>15개 중앙부처 80개 복지사업</b>의 선정기준으로 쓰입니다.
          </p>
        </section>

        {/* 급여별 선정기준 */}
        <section id="benefit" style={card}>
          <h2 style={{ fontSize: 20, fontWeight: 800, margin: '0 0 4px' }}>
            <span style={{ color: NAVY }}>▍</span> 급여별 선정기준
          </h2>
          <p style={{ fontSize: 14, color: '#6B7684', margin: '0 0 12px' }}>
            비율은 2026년과 같습니다 — 생계 32%, 의료 40%, 주거 48%, 교육 50%
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 720 }}>
              <thead>
                <tr>
                  <th style={th}>급여</th>
                  <th style={th}>연도</th>
                  {sizes.map((s) => <th key={s} style={th}>{s}</th>)}
                </tr>
              </thead>
              <tbody>
                {BENEFIT_STANDARD.map((b) => (
                  <>
                    <tr key={`${b.name}-27`}>
                      <td style={{ ...tdc, fontWeight: 800, borderBottom: 'none' }} rowSpan={2}>
                        {b.name}<br /><span style={{ fontSize: 12.5, color: '#6B7684' }}>중위 {b.pct}%</span>
                      </td>
                      <td style={{ ...tdc, fontWeight: 700, color: NAVY, background: '#F7FAFF' }}>2027</td>
                      {b.y27.map((v, i) => (
                        <td key={i} style={{ ...td, fontWeight: 700, color: NAVY, background: '#F7FAFF' }}>{W(v)}</td>
                      ))}
                    </tr>
                    <tr key={`${b.name}-26`}>
                      <td style={tdc}>2026</td>
                      {b.y26.map((v, i) => <td key={i} style={td}>{W(v)}</td>)}
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
          <ul style={{ fontSize: 14, color: '#4E5968', lineHeight: 1.85, paddingLeft: 20, margin: '12px 0 0' }}>
            {BENEFIT_STANDARD.map((b) => (
              <li key={b.name}><b>{b.name}</b> — {b.note}</li>
            ))}
          </ul>
        </section>

        {/* 기준임대료 */}
        <section id="rent" style={card}>
          <h2 style={{ fontSize: 20, fontWeight: 800, margin: '0 0 4px' }}>
            <span style={{ color: NAVY }}>▍</span> 2027년 기준임대료
          </h2>
          <p style={{ fontSize: 14, color: '#6B7684', margin: '0 0 12px' }}>단위: 만원/월 · 괄호는 2026년 대비 증가액</p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 620 }}>
              <thead>
                <tr>
                  <th style={th}>가구원 수</th>
                  {RENT_STANDARD.headers.map((h) => <th key={h} style={th}>{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {RENT_STANDARD.rows.map((r) => (
                  <tr key={r.size}>
                    <td style={tdc}>{r.size}</td>
                    {r.v.map((v, i) => (
                      <td key={i} style={tdc}>
                        {v.toFixed(1)}
                        <span style={{ color: '#C0392B', fontSize: 12.5 }}> (+{r.up[i].toFixed(1)})</span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 13, color: '#6B7684', marginTop: 12, marginBottom: 10 }}>{RENT_STANDARD.note}</p>
          <p style={{ fontSize: 14.5, lineHeight: 1.8, margin: 0 }}>
            자가가구 수선비용은 2026년 수준을 유지합니다 —{' '}
            {REPAIR_COST.map((r, i) => (
              <span key={r.name}>{i > 0 && ', '}<b>{r.name}</b> {W(r.amount)}원</span>
            ))}.
          </p>
        </section>

        {/* 역대 증가율 */}
        <section style={card}>
          <h2 style={{ fontSize: 20, fontWeight: 800, margin: '0 0 12px' }}>
            <span style={{ color: NAVY }}>▍</span> 역대 증가율 (4인 가구 기준)
          </h2>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, overflowX: 'auto', paddingBottom: 6 }}>
            {GROWTH_HISTORY.map((g) => (
              <div key={g.year} style={{ textAlign: 'center', minWidth: 44 }}>
                <div style={{ fontSize: 11.5, color: '#6B7684', marginBottom: 4 }}>{g.v}%</div>
                <div style={{
                  height: Math.round(g.v * 16) + 6,
                  background: g.year === '’27' ? NAVY : '#C9D8EE',
                  borderRadius: '4px 4px 0 0',
                }} />
                <div style={{ fontSize: 12, marginTop: 5, fontWeight: g.year === '’27' ? 800 : 400 }}>{g.year}</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 13.5, color: '#4E5968', marginTop: 12, marginBottom: 0, lineHeight: 1.7 }}>
            2027년 6.70%는 기준 중위소득 결정이 시작된 2015년 이후 가장 높은 증가율입니다.
          </p>
        </section>

        {/* %별 제도 — 내부 링크 */}
        <section id="bands" style={card}>
          <h2 style={{ fontSize: 20, fontWeight: 800, margin: '0 0 4px' }}>
            <span style={{ color: NAVY }}>▍</span> 중위소득 %별로 걸리는 제도
          </h2>
          <p style={{ fontSize: 14, color: '#6B7684', margin: '0 0 14px' }}>
            내 소득이 중위소득 몇 %인지 알면 어떤 제도를 볼지 정해집니다. 구간별로 우리가 다룬 글을 붙였습니다.
          </p>
          {MEDIAN_BANDS.map((b) => (
            <div key={b.pct} style={{ display: 'grid', gridTemplateColumns: '96px 1fr', gap: 12, padding: '12px 0', borderBottom: '1px solid #F2F4F6' }}>
              <div>
                <div style={{ fontWeight: 800, fontSize: 16, color: NAVY }}>{b.pct}%</div>
                <div style={{ fontSize: 12.5, color: '#6B7684' }}>
                  1인 {W(Math.round(MEDIAN_100['2027'][0] * b.pct / 100))}원
                </div>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {b.links.map((l) => (
                  <Link key={l.slug} href={`/policy/${l.slug}`}
                        style={{ fontSize: 13.5, background: '#F2F6FC', color: '#1E4C8F', borderRadius: 8, padding: '7px 11px', lineHeight: 1.4 }}>
                    {l.title.length > 26 ? `${l.title.slice(0, 26)}…` : l.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <p style={{ fontSize: 13, color: '#6B7684', marginTop: 14, marginBottom: 0 }}>
            2027년 기준 금액입니다. 급여 판정은 세전 소득이 아니라 소득인정액으로 합니다.
          </p>
        </section>

        <Link href="/calc/median-income" className="btn-cta"
              style={{ display: 'block', textAlign: 'center', marginBottom: 22 }}>
          내 소득이 중위소득 몇 %인지 계산하기
        </Link>

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
          출처: 보건복지부 <a href={MOHW_RELEASE} rel="noopener">「내년 기준 중위소득 6.70% 역대 최대 인상」</a>{' '}
          (2026.07.28, 제80차 중앙생활보장위원회 심의·의결) · 2026.08.15 검수 · 정부지원사업 에디터.
          최종 자격과 지급액은 주민센터와 복지로에서 확인하세요.
        </p>
      </div>

      {[
        organizationSchema(),
        personSchema(),
        breadcrumbSchema([
          { name: '홈', url: 'https://gov.jjyu.co.kr' },
          { name: '복지', url: 'https://gov.jjyu.co.kr/category/welfare' },
          { name: '2027년 기준 중위소득' },
        ]),
        articleSchema({
          title: '2027년 기준 중위소득 및 기초생활 소득기준액 발표',
          description:
            '2027년 기준 중위소득 6.70% 인상, 4인 가구 692만 9,885원. 생계·의료·주거·교육급여 선정기준과 기준임대료까지.',
          datePublished: '2026-08-15T10:00:00+09:00',
          dateModified: '2026-08-15T10:00:00+09:00',
          url: URL,
        }),
        faqSchema(FAQ),
      ].map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(schema) }} />
      ))}
    </div>
  );
}
