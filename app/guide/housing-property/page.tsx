/* 주거용재산 한도액 — 어디까지 1.04%로 봐주나
 * 1차 출처: 「국민기초생활 보장법상 재산의 소득환산율 고시」 제2조제1항 각 호 (주거용재산 범위)
 *   찾기쉬운 생활법령 「재산의 소득환산율」(2026.7.31 기준) — 한도액 표, 화면 캡처 확인
 *   (.playwright-mcp 캡처: conversion-rate-source.png)
 */
import Link from 'next/link';
import { SRC, REGIONS, HOUSING_LIMIT, BASIC_PROPERTY, CONVERSION_RATE } from '@/data/income-recognition';
import { articleSchema, breadcrumbSchema, faqSchema, organizationSchema, personSchema, toJsonLd } from '@/lib/schema';

const URL = 'https://gov.jjyu.co.kr/guide/housing-property';

export const metadata = {
  title: '주거용재산 한도액 — 서울 1억 7,200만원까지 1.04%로 보는 이유 | 정부지원사업',
  description:
    '사는 집은 주거용재산으로 보아 월 1.04%만 소득으로 환산합니다. 다만 한도가 있어 서울 1억 7,200만원, 경기 1억 5,100만원, 광역·세종·창원 1억 4,600만원, 그 외 1억 1,200만원을 넘으면 초과분은 일반재산 4.17%가 적용됩니다.',
  alternates: { canonical: URL },
  openGraph: {
    type: 'article', url: URL, siteName: '정부지원사업', locale: 'ko_KR',
    title: '주거용재산 한도액 — 넘으면 4배 비싸게 환산',
    description: '서울 1억 7,200만원 · 경기 1억 5,100만원 · 광역·세종·창원 1억 4,600만원 · 그 외 1억 1,200만원',
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
  { q: '주거용재산이 뭔가요?', a: '거주를 목적으로 하는 재산입니다. 단독주택·공동주택·준주택의 전부 또는 일부와 그 부속토지, 그리고 이들에 대한 임차보증금(전세금 포함)이 들어갑니다.' },
  { q: '한도액을 넘으면 어떻게 되나요?', a: '넘는 금액은 일반재산으로 넘어가 월 4.17%가 적용됩니다. 한도 안쪽만 월 1.04%입니다.' },
  { q: '집이 두 채면요?', a: '수급권자의 주거용재산은 실제 거주하는 1호(戶) 또는 1세대에 한해 인정됩니다. 나머지는 일반재산입니다.' },
  { q: '전세로 살아도 해당되나요?', a: '됩니다. 단독주택·공동주택·준주택에 대한 임차보증금(전세금 포함)이 주거용재산에 들어갑니다.' },
  { q: '오피스텔이나 고시원은요?', a: '주택법상 준주택에 해당하면 주거용재산으로 봅니다. 기숙사, 고시원, 노인복지주택, 오피스텔 등이 준주택입니다.' },
  { q: '가게 딸린 집은 어떻게 되나요?', a: '소매점이나 미용원처럼 준주택에 해당하지 않아도, 그 재산이 거주 목적이고 수급권자나 부양의무자가 실제 거주한다고 시장·군수·구청장이 인정하면 1호에 한해 주거용재산으로 봅니다.' },
  { q: '상가 보증금도 주거용인가요?', a: '아닙니다. 주택·상가 등에 대한 임차보증금 중 주택이 아닌 것은 일반재산입니다.' },
  { q: '한도액과 기본재산액은 다른 건가요?', a: '다릅니다. 한도액은 어디까지 주거용으로 볼지 정하는 선이고, 기본재산액은 거기서 다시 빼주는 금액입니다. 순서대로 적용됩니다.' },
];

export default function HousingPropertyPage() {
  return (
    <div style={{ background: '#F7F8FA' }}>
      <div style={{ background: DEEP, color: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
          <Link href="/guide/income-recognition" style={{ color: '#fff', fontWeight: 800, fontSize: 17 }}>소득인정액</Link>
          <nav style={{ display: 'flex', gap: 16, fontSize: 14.5, color: '#C9C9C9', flexWrap: 'wrap' }}>
            <a href="#limit" style={{ color: SKY, fontWeight: 700 }}>한도액</a>
            <a href="#scope">어디까지 주거용</a>
            <a href="#faq">자주 묻는 것</a>
          </nav>
          <Link href="/guide/financial-car-property" style={{ marginLeft: 'auto', fontSize: 13, color: '#9AA0A6' }}>금융재산·자동차 →</Link>
        </div>
      </div>

      <div style={{ background: DEEP, color: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', padding: '40px 18px 46px' }}>
          <p style={{ color: SKY, fontSize: 13.5, fontWeight: 700, letterSpacing: 1, margin: 0 }}>사는 집은 다르게 본다</p>
          <h1 style={{ fontSize: 36, fontWeight: 800, lineHeight: 1.3, margin: '12px 0 14px' }}>주거용재산 한도액</h1>
          <p style={{ fontSize: 16.5, lineHeight: 1.8, color: '#C9CDD2', margin: 0, maxWidth: 720 }}>
            살고 있는 집은 월 1.04%만 소득으로 환산합니다. 일반재산 4.17%의 4분의 1 수준입니다.
            다만 한도가 있어서, 넘는 금액은 일반재산으로 넘어갑니다.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '28px 18px 60px' }}>
        <section id="limit" style={card}>
          <h2 style={{ fontSize: 20, fontWeight: 800, margin: '0 0 4px' }}>
            <span style={{ color: NAVY }}>▍</span> 지역별 한도액
          </h2>
          <p style={{ fontSize: 14, color: '#6B7684', margin: '0 0 12px' }}>생계·의료·주거·교육급여 공통</p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 520 }}>
              <thead>
                <tr><th style={th}>구분</th>{REGIONS.map((r) => <th key={r} style={th}>{r}</th>)}</tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ ...td, fontWeight: 700 }}>주거용재산 한도액</td>
                  {HOUSING_LIMIT.map((v, i) => (
                    <td key={i} style={{ ...td, fontWeight: 800, color: NAVY, fontSize: 16 }}>{M(v)}</td>
                  ))}
                </tr>
                <tr>
                  <td style={{ ...td, fontWeight: 700 }}>여기서 다시 빼는 기본재산액</td>
                  {BASIC_PROPERTY.map((v, i) => <td key={i} style={td}>{M(v)}</td>)}
                </tr>
              </tbody>
            </table>
          </div>
          <div style={{ background: '#F8F9FA', borderRadius: 12, padding: '14px 16px', marginTop: 14 }}>
            <b style={{ display: 'block', marginBottom: 6 }}>넘으면 4배 비싸집니다</b>
            <p style={{ fontSize: 14.5, lineHeight: 1.8, margin: 0, color: '#333D4B' }}>
              한도 안쪽은 월 {CONVERSION_RATE.수급권자.주거용재산}%, 넘는 금액은 일반재산으로 넘어가
              월 {CONVERSION_RATE.수급권자.일반재산}%가 적용됩니다. 같은 1,000만원이라도 10만 4천원이냐
              41만 7천원이냐로 갈립니다.
            </p>
          </div>
        </section>

        <section style={card}>
          <h2 style={{ fontSize: 20, fontWeight: 800, margin: '0 0 10px' }}>
            <span style={{ color: NAVY }}>▍</span> 순서대로 따라가 보면
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.85, margin: '0 0 10px', color: '#333D4B' }}>
            세종시에서 주거용재산 1억 6,600만원, 일반재산 3,000만원을 가진 가구의 예입니다.
          </p>
          <ol style={{ fontSize: 15, lineHeight: 2, paddingLeft: 22, margin: 0, color: '#333D4B' }}>
            <li>세종시 한도액은 1억 4,600만원 → 초과한 <b>2,000만원</b>은 일반재산으로 이동</li>
            <li>일반재산 합계 5,000만원에 <b>월 4.17%</b> 적용</li>
            <li>한도액 1억 4,600만원에서 기본재산액 7,700만원 공제 → <b>6,900만원</b></li>
            <li>이 금액에 <b>월 1.04%</b> 적용</li>
          </ol>
        </section>

        <section id="scope" style={card}>
          <h2 style={{ fontSize: 20, fontWeight: 800, margin: '0 0 10px' }}>
            <span style={{ color: NAVY }}>▍</span> 어디까지 주거용재산인가
          </h2>
          <ul style={{ fontSize: 15.5, lineHeight: 1.95, paddingLeft: 20, margin: 0, color: '#333D4B' }}>
            <li>건축법상 <b>단독주택</b>의 전부 또는 일부와 그 부속토지</li>
            <li>건축법상 <b>공동주택</b>의 일부와 그 부속토지</li>
            <li>주택법상 <b>준주택</b>과 그 부속토지 — 기숙사, 고시원, 노인복지주택, 오피스텔 등</li>
            <li>위 주택·준주택에 대한 <b>임차보증금(전세금 포함)</b></li>
            <li>소매점·미용원 등이라도 거주 목적이고 실제 거주한다고 시장·군수·구청장이 인정하는 경우(1호 한정)</li>
          </ul>
          <p style={{ fontSize: 14, color: '#6B7684', marginTop: 12, marginBottom: 0, lineHeight: 1.7 }}>
            수급권자의 주거용재산은 실제 거주하는 1호(戶) 또는 1세대에 한해 인정됩니다.
          </p>
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

        <Link href="/guide/basic-property" className="btn-cta" style={{ display: 'block', textAlign: 'center', marginBottom: 22 }}>
          한도에서 다시 빼는 기본재산액 보기
        </Link>

        <p style={{ fontSize: 12.5, color: '#8B95A1', lineHeight: 1.8, margin: 0 }}>
          출처: <a href={SRC.rateNotice} rel="noopener">재산의 소득환산율 고시 제2조</a> ·{' '}
          <a href={SRC.easylaw} rel="noopener">찾기쉬운 생활법령 「재산의 소득환산율」</a>(2026.7.31 기준) ·
          2026.08.15 검수 · 정부지원사업 에디터.
        </p>
      </div>

      {[
        organizationSchema(), personSchema(),
        breadcrumbSchema([
          { name: '홈', url: 'https://gov.jjyu.co.kr' },
          { name: '소득인정액', url: 'https://gov.jjyu.co.kr/guide/income-recognition' },
          { name: '주거용재산 한도액' },
        ]),
        articleSchema({
          title: '주거용재산 한도액 — 지역별 기준과 초과분 처리',
          description: '주거용재산으로 인정되는 범위와 지역별 한도액, 한도를 넘었을 때의 환산율을 정리했습니다.',
          datePublished: '2026-08-15T12:20:00+09:00',
          dateModified: '2026-08-15T12:20:00+09:00',
          url: URL,
        }),
        faqSchema(FAQ),
      ].map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(schema) }} />
      ))}
    </div>
  );
}
