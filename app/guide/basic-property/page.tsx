/* 기본재산액 — 재산에서 먼저 빼주는 금액
 * 1차 출처: 보건복지부고시 「자동차의 재산가액 산정기준과 재산가액에서 차감하는 기본재산액 및 부채」
 *   [시행 2026. 1. 1.] 제2025-204호 제4조 및 별표3 — PDF 원문 대조
 *   (.playwright-mcp 캡처: basic-property-table.png / PDF 텍스트 추출로 금액 확인)
 *   국민기초생활 보장법 시행령 제5조의4제1항, 제5조(부채) 근거
 */
import Link from 'next/link';
import { SRC, REGIONS, BASIC_PROPERTY, HOUSING_LIMIT } from '@/data/income-recognition';
import { articleSchema, breadcrumbSchema, faqSchema, organizationSchema, personSchema, toJsonLd } from '@/lib/schema';

const URL = 'https://gov.jjyu.co.kr/guide/basic-property';

export const metadata = {
  title: '기본재산액 — 서울 9,900만원, 재산에서 먼저 빼주는 금액 | 정부지원사업',
  description:
    '기본재산액은 소득환산에서 빼주는 재산액으로 서울 9,900만원, 경기 8,000만원, 광역·세종·창원 7,700만원, 그 외 지역 5,300만원입니다. 가구 규모와 관계없이 적용되고 부채도 함께 공제합니다.',
  alternates: { canonical: URL },
  openGraph: {
    type: 'article', url: URL, siteName: '정부지원사업', locale: 'ko_KR',
    title: '기본재산액 — 재산에서 먼저 빼주는 금액',
    description: '서울 9,900만원 · 경기 8,000만원 · 광역·세종·창원 7,700만원 · 그 외 5,300만원',
  },
};

const NAVY = '#003D88';
const DEEP = '#0B2148';
const SKY = '#7FB3F5';
const M = (n: number) => `${(n / 10000).toLocaleString('ko-KR')}만원`;
const card: React.CSSProperties = { background: '#fff', borderRadius: 16, padding: '22px 20px', marginBottom: 16 };
const th: React.CSSProperties = { background: '#F2F4F6', fontSize: 13, fontWeight: 700, padding: '10px 8px', border: '1px solid #E5E8EB', textAlign: 'center' };
const td: React.CSSProperties = { fontSize: 14.5, padding: '13px 8px', border: '1px solid #E5E8EB', textAlign: 'center', color: '#191F28' };

const FAQ = [
  { q: '기본재산액이 뭔가요?', a: '기초생활 유지에 필요하다고 보아 소득환산에서 빼주는 재산액입니다. 이 금액 아래로는 재산이 소득으로 환산되지 않습니다.' },
  { q: '가구원이 많으면 더 빼주나요?', a: '아닙니다. 고시가 가구 규모와 관계없이 같은 금액을 적용하도록 정하고 있습니다. 지역만 봅니다.' },
  { q: '우리 지역은 얼마인가요?', a: '서울 9,900만원, 경기 8,000만원, 광역시·세종·창원 7,700만원, 그 외 지역 5,300만원입니다.' },
  { q: '급여 종류마다 다른가요?', a: '다르지 않습니다. 생계·의료·주거·교육급여에 같은 금액이 적용됩니다.' },
  { q: '왜 지역마다 다른가요?', a: '지역별 전세가격 등 최저주거면적 전세가격 차이를 감안해 정하기 때문입니다.' },
  { q: '대출이 있으면 그것도 빼주나요?', a: '뺍니다. 임대보증금과 금융회사 대출금, 주택연금·농지연금 누적액, 공공기관 대출금, 법에 근거한 공제회 대출금, 법원이 확인한 사채 중 미상환액이 부채로 인정됩니다.' },
  { q: '부채는 용도를 따지나요?', a: '따집니다. 의료비·학비·주거 부채와 그 밖의 일반부채(토지·사업자금 마련 등)로 구분해 인정합니다.' },
  { q: '이 금액은 언제 바뀌나요?', a: '보건복지부 고시로 정해집니다. 현재 적용되는 것은 2026년 1월 1일 시행 고시(제2025-204호)입니다.' },
];

export default function BasicPropertyPage() {
  return (
    <div style={{ background: '#F7F8FA' }}>
      <div style={{ background: DEEP, color: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
          <Link href="/guide/income-recognition" style={{ color: '#fff', fontWeight: 800, fontSize: 17 }}>소득인정액</Link>
          <nav style={{ display: 'flex', gap: 16, fontSize: 14.5, color: '#C9C9C9', flexWrap: 'wrap' }}>
            <a href="#amount" style={{ color: SKY, fontWeight: 700 }}>지역별 금액</a>
            <a href="#debt">부채 공제</a>
            <a href="#faq">자주 묻는 것</a>
          </nav>
          <Link href="/guide/housing-property" style={{ marginLeft: 'auto', fontSize: 13, color: '#9AA0A6' }}>주거용재산 한도 →</Link>
        </div>
      </div>

      <div style={{ background: DEEP, color: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', padding: '40px 18px 46px' }}>
          <p style={{ color: SKY, fontSize: 13.5, fontWeight: 700, letterSpacing: 1, margin: 0 }}>재산이 있어도 되는 이유</p>
          <h1 style={{ fontSize: 36, fontWeight: 800, lineHeight: 1.3, margin: '12px 0 14px' }}>기본재산액</h1>
          <p style={{ fontSize: 16.5, lineHeight: 1.8, color: '#C9CDD2', margin: 0, maxWidth: 720 }}>
            재산을 소득으로 환산하기 전에 먼저 빼주는 금액입니다. 서울에 사시면 9,900만원까지는
            환산 대상에서 빠집니다. 가구원이 몇 명이든 금액은 같고, 지역만 봅니다.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '28px 18px 60px' }}>
        <section id="amount" style={card}>
          <h2 style={{ fontSize: 20, fontWeight: 800, margin: '0 0 4px' }}>
            <span style={{ color: NAVY }}>▍</span> 지역별 기본재산액
          </h2>
          <p style={{ fontSize: 14, color: '#6B7684', margin: '0 0 12px' }}>
            생계·의료·주거·교육급여 공통 · 가구 규모와 무관
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 520 }}>
              <thead>
                <tr><th style={th}>지역</th>{REGIONS.map((r) => <th key={r} style={th}>{r}</th>)}</tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ ...td, fontWeight: 700 }}>기본재산액</td>
                  {BASIC_PROPERTY.map((v, i) => (
                    <td key={i} style={{ ...td, fontWeight: 800, color: NAVY, fontSize: 16 }}>{M(v)}</td>
                  ))}
                </tr>
                <tr>
                  <td style={{ ...td, fontWeight: 700 }}>참고: 주거용재산 한도</td>
                  {HOUSING_LIMIT.map((v, i) => <td key={i} style={td}>{M(v)}</td>)}
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 13, color: '#6B7684', marginTop: 12, marginBottom: 0, lineHeight: 1.7 }}>
            고시가 정한 지역 구분은 서울 / 경기 / 광역시·세종·창원 / 그 외 지역 네 가지입니다.
          </p>
        </section>

        <section style={card}>
          <h2 style={{ fontSize: 20, fontWeight: 800, margin: '0 0 10px' }}>
            <span style={{ color: NAVY }}>▍</span> 얼마나 차이가 나나
          </h2>
          <p style={{ fontSize: 15.5, lineHeight: 1.85, margin: 0, color: '#333D4B' }}>
            재산이 1억원인 두 가구를 비교해 보겠습니다. 서울이면 9,900만원을 빼 100만원만 남고,
            그 외 지역이면 5,300만원을 빼 4,700만원이 남습니다. 이 남은 금액에 환산율이 붙으므로
            같은 재산이라도 사는 곳에 따라 소득인정액이 크게 달라집니다. 여기에 대출이 있다면
            부채까지 빼고 계산합니다.
          </p>
        </section>

        <section id="debt" style={card}>
          <h2 style={{ fontSize: 20, fontWeight: 800, margin: '0 0 10px' }}>
            <span style={{ color: NAVY }}>▍</span> 함께 빼는 부채
          </h2>
          <ul style={{ fontSize: 15.5, lineHeight: 1.95, paddingLeft: 20, margin: 0, color: '#333D4B' }}>
            <li>임대보증금(전세금 포함)과 금융회사 등에서 받은 대출금</li>
            <li>주택연금·농지연금의 누적액</li>
            <li>복지부장관이 정해 고시하는 금융회사 외 기관 대출금, 공공기관 대출금</li>
            <li>법에 근거한 공제회 대출금</li>
            <li>법원이 판결문이나 화해·조정조서로 확인한 사채 중 미상환액</li>
          </ul>
          <div style={{ background: '#F8F9FA', borderRadius: 12, padding: '14px 16px', marginTop: 14 }}>
            <b style={{ display: 'block', marginBottom: 6 }}>부채는 용도도 봅니다</b>
            <p style={{ fontSize: 14.5, lineHeight: 1.8, margin: 0, color: '#333D4B' }}>
              의료비 부채, 학비 부채, 주거 부채, 그 밖의 일반부채(토지·사업자금 마련 등)로 나눠 인정합니다.
              구체적인 확인 방법과 인정 범위는 보건복지부장관이 정합니다.
            </p>
          </div>
        </section>

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

        <Link href="/guide/property-conversion" className="btn-cta" style={{ display: 'block', textAlign: 'center', marginBottom: 22 }}>
          공제 후 환산율이 어떻게 붙는지 보기
        </Link>

        <p style={{ fontSize: 12.5, color: '#8B95A1', lineHeight: 1.8, margin: 0 }}>
          출처: <a href={SRC.notice} rel="noopener">보건복지부고시 제2025-204호(2026.1.1 시행) 제4조·별표3·제5조</a> ·
          국민기초생활 보장법 시행령 제5조의4 · 2026.08.15 검수 · 정부지원사업 에디터.
        </p>
      </div>

      {[
        organizationSchema(), personSchema(),
        breadcrumbSchema([
          { name: '홈', url: 'https://gov.jjyu.co.kr' },
          { name: '소득인정액', url: 'https://gov.jjyu.co.kr/guide/income-recognition' },
          { name: '기본재산액' },
        ]),
        articleSchema({
          title: '기본재산액 — 지역별 공제 금액',
          description: '서울 9,900만원부터 그 외 지역 5,300만원까지, 소득환산에서 빼주는 기본재산액을 고시 기준으로 정리했습니다.',
          datePublished: '2026-08-15T12:00:00+09:00',
          dateModified: '2026-08-15T12:00:00+09:00',
          url: URL,
        }),
        faqSchema(FAQ),
      ].map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(schema) }} />
      ))}
    </div>
  );
}
