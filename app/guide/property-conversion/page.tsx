/* 재산의 소득환산액 — 재산이 월 소득으로 바뀌는 구조
 * 1차 출처: 국민기초생활 보장법 제6조의3제2항, 시행령 제5조의3·제5조의4
 *   보건복지부고시 제2025-204호 별표3(기본재산액) — PDF 원문 대조
 *   국민기초생활 보장법상 재산의 소득환산율 고시 제2조
 *   찾기쉬운 생활법령 「재산의 소득환산율」(2026.7.31 기준) — 화면 캡처로 표 3종 확인
 *     (.playwright-mcp 캡처: conversion-rate-source.png)
 * 계산 예시는 위 생활법령 문답의 세종시 사례를 그대로 따라간다.
 */
import Link from 'next/link';
import { SRC, REGIONS, BASIC_PROPERTY, HOUSING_LIMIT, CONVERSION_RATE } from '@/data/income-recognition';
import { articleSchema, breadcrumbSchema, faqSchema, organizationSchema, personSchema, toJsonLd } from '@/lib/schema';

const URL = 'https://gov.jjyu.co.kr/guide/property-conversion';

export const metadata = {
  title: '재산의 소득환산액 — 집·예금·차가 월 소득으로 바뀌는 계산법 | 정부지원사업',
  description:
    '재산가액에서 기본재산액과 부채를 뺀 금액에 환산율을 곱해 월 소득으로 바꿉니다. 주거용재산 1.04%, 일반재산 4.17%, 금융재산 6.26%, 자동차 100%로 종류마다 6배 넘게 차이 납니다.',
  alternates: { canonical: URL },
  openGraph: {
    type: 'article', url: URL, siteName: '정부지원사업', locale: 'ko_KR',
    title: '재산의 소득환산액 계산법',
    description: '같은 1억이라도 주거용이냐 금융이냐에 따라 월 소득 환산액이 6배 차이 납니다.',
  },
};

const NAVY = '#003D88';
const DEEP = '#0B2148';
const SKY = '#7FB3F5';
const M = (n: number) => `${(n / 10000).toLocaleString('ko-KR')}만원`;
const card: React.CSSProperties = { background: '#fff', borderRadius: 16, padding: '22px 20px', marginBottom: 16 };
const th: React.CSSProperties = { background: '#F2F4F6', fontSize: 13, fontWeight: 700, padding: '10px 8px', border: '1px solid #E5E8EB', textAlign: 'center', whiteSpace: 'nowrap' };
const td: React.CSSProperties = { fontSize: 14, padding: '11px 8px', border: '1px solid #E5E8EB', textAlign: 'center', color: '#191F28' };

const FAQ = [
  { q: '재산이 있으면 바로 탈락인가요?', a: '아닙니다. 재산가액에서 기본재산액과 부채를 먼저 뺍니다. 그 아래 금액은 소득으로 환산되지 않습니다.' },
  { q: '환산율은 왜 종류마다 다른가요?', a: '거주에 쓰는 재산과 바로 현금화할 수 있는 재산을 같게 볼 수 없기 때문입니다. 주거용재산은 월 1.04%, 금융재산은 월 6.26%로 6배 차이가 납니다.' },
  { q: '주거용재산은 얼마까지 인정되나요?', a: '한도액이 있습니다. 서울 1억 7,200만원, 경기 1억 5,100만원, 광역·세종·창원 1억 4,600만원, 그 외 지역 1억 1,200만원이고 넘는 금액은 일반재산 환산율이 적용됩니다.' },
  { q: '부채는 어떻게 빼나요?', a: '임대보증금과 금융회사 대출금, 주택연금·농지연금 누적액, 공공기관 대출금, 법에 근거한 공제회 대출금, 법원이 확인한 사채 중 미상환액을 뺍니다.' },
  { q: '전세보증금은 어떤 재산인가요?', a: '단독주택·공동주택·준주택에 대한 임차보증금(전세금 포함)은 주거용재산에 들어갑니다. 상가 임차보증금은 일반재산입니다.' },
  { q: '부양의무자도 같은 환산율인가요?', a: '다릅니다. 부양의무자는 주거용재산 월 1.04%, 일반재산 월 2.08%가 적용됩니다.' },
  { q: '재산가액은 시세로 보나요?', a: '조사일을 기준으로 공적자료로 조회된 가격을 적용합니다.' },
  { q: '집 한 채만 있는데 환산액이 크게 나옵니다', a: '주거용재산 한도액을 넘은 부분은 일반재산 환산율 4.17%로 계산되기 때문입니다. 한도 안쪽만 1.04%가 적용됩니다.' },
];

export default function PropertyConversionPage() {
  return (
    <div style={{ background: '#F7F8FA' }}>
      <div style={{ background: DEEP, color: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
          <Link href="/guide/income-recognition" style={{ color: '#fff', fontWeight: 800, fontSize: 17 }}>소득인정액</Link>
          <nav style={{ display: 'flex', gap: 16, fontSize: 14.5, color: '#C9C9C9', flexWrap: 'wrap' }}>
            <a href="#order" style={{ color: SKY, fontWeight: 700 }}>공제 순서</a>
            <a href="#rate">환산율</a>
            <a href="#example">계산 예시</a>
            <a href="#faq">자주 묻는 것</a>
          </nav>
          <Link href="/guide/basic-property" style={{ marginLeft: 'auto', fontSize: 13, color: '#9AA0A6' }}>기본재산액 →</Link>
        </div>
      </div>

      <div style={{ background: DEEP, color: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', padding: '40px 18px 46px' }}>
          <p style={{ color: SKY, fontSize: 13.5, fontWeight: 700, letterSpacing: 1, margin: 0 }}>소득인정액의 두 번째 갈래</p>
          <h1 style={{ fontSize: 36, fontWeight: 800, lineHeight: 1.3, margin: '12px 0 14px' }}>재산의 소득환산액</h1>
          <p style={{ fontSize: 16.5, lineHeight: 1.8, color: '#C9CDD2', margin: 0, maxWidth: 720 }}>
            집이나 예금이 있으면 그 자체로 탈락하는 것이 아니라, 정해진 비율만큼 월 소득으로 바꿔서 더합니다.
            빼주는 금액이 먼저 있고, 남은 금액에만 환산율이 붙습니다.
          </p>
          <div style={{ background: 'rgba(255,255,255,.08)', border: `1px solid ${SKY}`, borderRadius: 14, padding: '18px 20px', marginTop: 22, maxWidth: 760 }}>
            <p style={{ fontSize: 19, fontWeight: 800, margin: 0, lineHeight: 1.6 }}>
              재산의 소득환산액 = (재산가액 − 기본재산액 − 부채) × 소득환산율
            </p>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '28px 18px 60px' }}>
        <section id="order" style={card}>
          <h2 style={{ fontSize: 20, fontWeight: 800, margin: '0 0 12px' }}>
            <span style={{ color: NAVY }}>▍</span> 계산 순서
          </h2>
          <ol style={{ fontSize: 15.5, lineHeight: 1.95, paddingLeft: 22, margin: 0 }}>
            <li>재산을 <b>종류별로 나눈다</b> — 주거용재산 / 일반재산 / 금융재산 / 자동차</li>
            <li>주거용재산은 <b>한도액까지만</b> 주거용으로 본다. 넘는 금액은 일반재산으로 넘어간다</li>
            <li><b>기본재산액과 부채를 뺀다</b> — 지역에 따라 5,300만원에서 9,900만원까지</li>
            <li>남은 금액에 <b>종류별 환산율</b>을 곱한다</li>
          </ol>
          <div style={{ overflowX: 'auto', marginTop: 16 }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 560 }}>
              <thead>
                <tr><th style={th}>구분</th>{REGIONS.map((r) => <th key={r} style={th}>{r}</th>)}</tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ ...td, fontWeight: 700 }}>기본재산액</td>
                  {BASIC_PROPERTY.map((v, i) => <td key={i} style={{ ...td, fontWeight: 700, color: NAVY }}>{M(v)}</td>)}
                </tr>
                <tr>
                  <td style={{ ...td, fontWeight: 700 }}>주거용재산 한도액</td>
                  {HOUSING_LIMIT.map((v, i) => <td key={i} style={td}>{M(v)}</td>)}
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="rate" style={card}>
          <h2 style={{ fontSize: 20, fontWeight: 800, margin: '0 0 10px' }}>
            <span style={{ color: NAVY }}>▍</span> 종류별 환산율 (월)
          </h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 560 }}>
              <thead>
                <tr><th style={th}>구분</th><th style={th}>주거용재산</th><th style={th}>일반재산</th><th style={th}>금융재산</th><th style={th}>자동차</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ ...td, fontWeight: 700 }}>수급(권)자</td>
                  <td style={{ ...td, color: NAVY, fontWeight: 700 }}>{CONVERSION_RATE.수급권자.주거용재산}%</td>
                  <td style={td}>{CONVERSION_RATE.수급권자.일반재산}%</td>
                  <td style={td}>{CONVERSION_RATE.수급권자.금융재산}%</td>
                  <td style={{ ...td, color: '#C0392B', fontWeight: 700 }}>{CONVERSION_RATE.수급권자.자동차}%</td>
                </tr>
                <tr>
                  <td style={{ ...td, fontWeight: 700 }}>부양의무자</td>
                  <td style={td}>{CONVERSION_RATE.부양의무자.주거용재산}%</td>
                  <td style={td}>{CONVERSION_RATE.부양의무자.일반재산}%</td>
                  <td style={{ ...td, color: '#8B95A1' }}>—</td>
                  <td style={{ ...td, color: '#8B95A1' }}>—</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 14.5, color: '#4E5968', marginTop: 12, marginBottom: 0, lineHeight: 1.8 }}>
            공제 후 1,000만원이 남았을 때 주거용재산이면 월 10만 4천원, 일반재산이면 41만 7천원,
            금융재산이면 62만 6천원이 소득으로 잡힙니다.
          </p>
        </section>

        <section id="example" style={card}>
          <h2 style={{ fontSize: 20, fontWeight: 800, margin: '0 0 10px' }}>
            <span style={{ color: NAVY }}>▍</span> 계산 예시 — 세종시 주거급여 가구
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.8, margin: '0 0 12px', color: '#333D4B' }}>
            주거용재산 1억 6,600만원과 일반재산 3,000만원이 있는 경우입니다. 찾기쉬운 생활법령정보에 실린
            사례를 그대로 따라가 봅니다.
          </p>
          <ol style={{ fontSize: 15, lineHeight: 2, paddingLeft: 22, margin: 0, color: '#333D4B' }}>
            <li>세종시 주거용재산 한도액은 <b>1억 4,600만원</b>. 이를 넘는 <b>2,000만원</b>은 일반재산으로 넘어갑니다.</li>
            <li>넘어온 2,000만원 + 원래 일반재산 3,000만원 = <b>5,000만원에 일반재산 환산율 4.17%</b> 적용.</li>
            <li>한도액 1억 4,600만원에서 세종시 기본재산액 <b>7,700만원</b>을 공제 → 차액 <b>6,900만원</b>.</li>
            <li>이 6,900만원에 <b>주거용재산 환산율 1.04%</b> 적용.</li>
          </ol>
          <div style={{ background: '#F8F9FA', borderRadius: 12, padding: '14px 16px', marginTop: 14 }}>
            <p style={{ fontSize: 14.5, lineHeight: 1.85, margin: 0, color: '#333D4B' }}>
              같은 1억 9,600만원이라도 전부 일반재산이었다면 훨씬 높은 금액이 소득으로 잡힙니다.
              어떤 재산으로 분류되는지가 판정을 가르는 이유입니다.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 16 }}>
            <Link href="/guide/housing-property" style={{ fontSize: 14, background: '#F2F6FC', color: '#1E4C8F', borderRadius: 8, padding: '9px 13px' }}>주거용재산 한도 자세히</Link>
            <Link href="/guide/basic-property" style={{ fontSize: 14, background: '#F2F6FC', color: '#1E4C8F', borderRadius: 8, padding: '9px 13px' }}>기본재산액 자세히</Link>
            <Link href="/guide/financial-car-property" style={{ fontSize: 14, background: '#F2F6FC', color: '#1E4C8F', borderRadius: 8, padding: '9px 13px' }}>금융재산·자동차</Link>
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

        <Link href="/guide/income-recognition" className="btn-cta" style={{ display: 'block', textAlign: 'center', marginBottom: 22 }}>
          소득인정액 전체 구조로 돌아가기
        </Link>

        <p style={{ fontSize: 12.5, color: '#8B95A1', lineHeight: 1.8, margin: 0 }}>
          출처: <a href={SRC.rateNotice} rel="noopener">재산의 소득환산율 고시 제2조</a> ·{' '}
          <a href={SRC.notice} rel="noopener">기본재산액 고시 별표3</a> ·{' '}
          <a href={SRC.easylaw} rel="noopener">찾기쉬운 생활법령 「재산의 소득환산율」</a>(2026.7.31 기준) ·
          2026.08.15 검수 · 정부지원사업 에디터.
        </p>
      </div>

      {[
        organizationSchema(), personSchema(),
        breadcrumbSchema([
          { name: '홈', url: 'https://gov.jjyu.co.kr' },
          { name: '소득인정액', url: 'https://gov.jjyu.co.kr/guide/income-recognition' },
          { name: '재산의 소득환산액' },
        ]),
        articleSchema({
          title: '재산의 소득환산액 계산법',
          description: '기본재산액과 부채를 뺀 뒤 종류별 환산율을 곱해 월 소득으로 바꾸는 구조를 정리했습니다.',
          datePublished: '2026-08-15T11:40:00+09:00',
          dateModified: '2026-08-15T11:40:00+09:00',
          url: URL,
        }),
        faqSchema(FAQ),
      ].map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(schema) }} />
      ))}
    </div>
  );
}
