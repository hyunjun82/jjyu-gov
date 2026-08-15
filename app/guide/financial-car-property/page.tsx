/* 금융재산과 자동차 — 가장 불리하게 환산되는 재산
 * 1차 출처: 「국민기초생활 보장법 시행령」 제5조의3제1항제2호(금융재산)·제3호(자동차)
 *   「국민기초생활 보장법상 재산의 소득환산율 고시」 제2조 — 금융 6.26%, 자동차 100%
 *   보건복지부고시 제2025-204호 별표1 — 재산 범위에서 제외하는 자동차
 *   찾기쉬운 생활법령(2026.7.31 기준) — 화면 캡처로 표 확인
 */
import Link from 'next/link';
import { SRC, CONVERSION_RATE, CAR_EXCLUDED } from '@/data/income-recognition';
import { articleSchema, breadcrumbSchema, faqSchema, organizationSchema, personSchema, toJsonLd } from '@/lib/schema';

const URL = 'https://gov.jjyu.co.kr/guide/financial-car-property';

export const metadata = {
  title: '금융재산·자동차 소득환산 — 예금 6.26%, 차는 100%인 이유 | 정부지원사업',
  description:
    '금융재산은 월 6.26%, 소득환산율 100%가 적용되는 자동차는 차값이 그대로 월 소득으로 잡힙니다. 다만 장애인·국가유공자 본인의 2,000cc 미만 자동차 1대와 생업용 자동차 1대는 재산에서 제외됩니다.',
  alternates: { canonical: URL },
  openGraph: {
    type: 'article', url: URL, siteName: '정부지원사업', locale: 'ko_KR',
    title: '금융재산·자동차 소득환산',
    description: '예금 월 6.26%, 자동차 월 100%. 제외되는 자동차 세 가지도 정리했습니다.',
  },
};

const NAVY = '#003D88';
const DEEP = '#0B2148';
const SKY = '#7FB3F5';
const card: React.CSSProperties = { background: '#fff', borderRadius: 16, padding: '22px 20px', marginBottom: 16 };
const th: React.CSSProperties = { background: '#F2F4F6', fontSize: 13, fontWeight: 700, padding: '10px 8px', border: '1px solid #E5E8EB', textAlign: 'center' };
const td: React.CSSProperties = { fontSize: 14.5, padding: '13px 8px', border: '1px solid #E5E8EB', textAlign: 'center', color: '#191F28' };

const FAQ = [
  { q: '예금이 있으면 얼마나 불리한가요?', a: '금융재산은 월 6.26%로 환산합니다. 주거용재산 1.04%의 6배입니다. 공제 후 1,000만원이 남으면 월 62만 6천원이 소득으로 잡힙니다.' },
  { q: '금융재산에는 무엇이 들어가나요?', a: '현금과 금융자산, 보험상품이 들어갑니다.' },
  { q: '차가 있으면 무조건 안 되나요?', a: '자동차는 원칙적으로 월 100% 환산이라 매우 불리하지만, 고시 별표1에 해당하는 자동차는 재산 범위에서 아예 빠집니다.' },
  { q: '어떤 차가 제외되나요?', a: '장애의 정도가 심한 장애인 본인의 이동수단인 2,000cc 미만 자동차 1대, 국가유공자·보훈보상대상자 중 상이등급 1~3급 본인의 2,000cc 미만 자동차 1대, 생계유지를 위한 직접적 수단인 생업용 자동차 1대입니다.' },
  { q: '100%라는 게 무슨 뜻인가요?', a: '차량가액이 그대로 월 소득으로 잡힌다는 뜻입니다. 1,000만원짜리 차라면 월 1,000만원이 소득인정액에 더해지는 셈이라 사실상 탈락으로 이어집니다.' },
  { q: '모든 차가 100%인가요?', a: '아닙니다. 고시 별표2가 정한 자동차는 일반재산 환산율(월 4.17%)이 적용됩니다. 어떤 차가 해당하는지는 별표에서 확인해야 합니다.' },
  { q: '보험은 해지해야 하나요?', a: '보험상품도 금융재산에 들어가지만, 해지 여부는 개인 사정에 따라 판단할 문제입니다. 판정 기준만 알아두시고 주민센터에 상담하시는 편이 안전합니다.' },
  { q: '통장에 잠깐 큰돈이 들어왔다 나가면요?', a: '조사일 기준으로 공적자료로 조회된 금액을 적용합니다. 사정이 있다면 주민센터에 소명 자료를 함께 내시는 것이 좋습니다.' },
];

export default function FinancialCarPropertyPage() {
  return (
    <div style={{ background: '#F7F8FA' }}>
      <div style={{ background: DEEP, color: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
          <Link href="/guide/income-recognition" style={{ color: '#fff', fontWeight: 800, fontSize: 17 }}>소득인정액</Link>
          <nav style={{ display: 'flex', gap: 16, fontSize: 14.5, color: '#C9C9C9', flexWrap: 'wrap' }}>
            <a href="#rate" style={{ color: SKY, fontWeight: 700 }}>환산율 비교</a>
            <a href="#car">제외되는 자동차</a>
            <a href="#faq">자주 묻는 것</a>
          </nav>
          <Link href="/guide/property-conversion" style={{ marginLeft: 'auto', fontSize: 13, color: '#9AA0A6' }}>재산 환산 전체 →</Link>
        </div>
      </div>

      <div style={{ background: DEEP, color: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', padding: '40px 18px 46px' }}>
          <p style={{ color: SKY, fontSize: 13.5, fontWeight: 700, letterSpacing: 1, margin: 0 }}>가장 불리하게 잡히는 재산</p>
          <h1 style={{ fontSize: 36, fontWeight: 800, lineHeight: 1.3, margin: '12px 0 14px' }}>금융재산과 자동차</h1>
          <p style={{ fontSize: 16.5, lineHeight: 1.8, color: '#C9CDD2', margin: 0, maxWidth: 720 }}>
            예금은 월 6.26%로 환산해 집보다 6배 무겁게 잡힙니다. 자동차는 100%라 차값이 그대로
            월 소득이 됩니다. 다만 빠지는 자동차가 세 가지 있습니다.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '28px 18px 60px' }}>
        <section id="rate" style={card}>
          <h2 style={{ fontSize: 20, fontWeight: 800, margin: '0 0 10px' }}>
            <span style={{ color: NAVY }}>▍</span> 같은 1,000만원, 얼마나 달라지나
          </h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 520 }}>
              <thead>
                <tr><th style={th}>재산 종류</th><th style={th}>환산율(월)</th><th style={th}>공제 후 1,000만원이면</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td style={td}>주거용재산</td>
                  <td style={td}>{CONVERSION_RATE.수급권자.주거용재산}%</td>
                  <td style={{ ...td, textAlign: 'right' }}>월 10만 4,000원</td>
                </tr>
                <tr>
                  <td style={td}>일반재산</td>
                  <td style={td}>{CONVERSION_RATE.수급권자.일반재산}%</td>
                  <td style={{ ...td, textAlign: 'right' }}>월 41만 7,000원</td>
                </tr>
                <tr>
                  <td style={{ ...td, fontWeight: 700 }}>금융재산</td>
                  <td style={{ ...td, fontWeight: 700, color: NAVY }}>{CONVERSION_RATE.수급권자.금융재산}%</td>
                  <td style={{ ...td, textAlign: 'right', fontWeight: 700, color: NAVY }}>월 62만 6,000원</td>
                </tr>
                <tr>
                  <td style={{ ...td, fontWeight: 700 }}>자동차(100% 적용분)</td>
                  <td style={{ ...td, fontWeight: 700, color: '#C0392B' }}>{CONVERSION_RATE.수급권자.자동차}%</td>
                  <td style={{ ...td, textAlign: 'right', fontWeight: 700, color: '#C0392B' }}>월 1,000만원</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 14, color: '#6B7684', marginTop: 12, marginBottom: 0, lineHeight: 1.7 }}>
            금융재산에는 현금과 금융자산, 보험상품이 들어갑니다. 재산가액은 조사일 기준 공적자료로 조회된 가격을 적용합니다.
          </p>
        </section>

        <section id="car" style={card}>
          <h2 style={{ fontSize: 20, fontWeight: 800, margin: '0 0 10px' }}>
            <span style={{ color: NAVY }}>▍</span> 재산에서 아예 빠지는 자동차
          </h2>
          <ul style={{ fontSize: 15.5, lineHeight: 2, paddingLeft: 20, margin: 0, color: '#333D4B' }}>
            {CAR_EXCLUDED.map((c) => <li key={c}>{c}</li>)}
          </ul>
          <div style={{ background: '#F8F9FA', borderRadius: 12, padding: '14px 16px', marginTop: 14 }}>
            <b style={{ display: 'block', marginBottom: 6 }}>100%가 아닌 자동차도 있습니다</b>
            <p style={{ fontSize: 14.5, lineHeight: 1.8, margin: 0, color: '#333D4B' }}>
              고시 별표2가 정한 자동차는 일반재산 환산율(월 4.17%)이 적용됩니다. 내 차가 어디에 해당하는지는
              주민센터에서 확인하시는 것이 정확합니다.
            </p>
          </div>
        </section>

        <section style={card}>
          <h2 style={{ fontSize: 20, fontWeight: 800, margin: '0 0 10px' }}>
            <span style={{ color: NAVY }}>▍</span> 그래서 무엇을 봐야 하나
          </h2>
          <p style={{ fontSize: 15.5, lineHeight: 1.85, margin: 0, color: '#333D4B' }}>
            재산 총액이 같아도 구성에 따라 결과가 갈립니다. 전세보증금으로 묶여 있으면 주거용재산으로 1.04%,
            같은 돈이 예금으로 있으면 6.26%로 잡힙니다. 기본재산액과 부채는 두 경우 모두 먼저 빼주므로,
            신청 전에 부채를 제대로 신고했는지부터 확인하시는 편이 실익이 큽니다.
          </p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 16 }}>
            <Link href="/guide/basic-property" style={{ fontSize: 14, background: '#F2F6FC', color: '#1E4C8F', borderRadius: 8, padding: '9px 13px' }}>기본재산액·부채 공제</Link>
            <Link href="/guide/housing-property" style={{ fontSize: 14, background: '#F2F6FC', color: '#1E4C8F', borderRadius: 8, padding: '9px 13px' }}>주거용재산 한도액</Link>
            <Link href="/calc/median-income" style={{ fontSize: 14, background: '#F2F6FC', color: '#1E4C8F', borderRadius: 8, padding: '9px 13px' }}>기준 금액 계산기</Link>
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

        <p style={{ fontSize: 12.5, color: '#8B95A1', lineHeight: 1.8, margin: 0 }}>
          출처: 국민기초생활 보장법 시행령 제5조의3제1항 ·{' '}
          <a href={SRC.rateNotice} rel="noopener">재산의 소득환산율 고시 제2조</a> ·{' '}
          <a href={SRC.notice} rel="noopener">보건복지부고시 제2025-204호 별표1·별표2</a> ·
          2026.08.15 검수 · 정부지원사업 에디터.
        </p>
      </div>

      {[
        organizationSchema(), personSchema(),
        breadcrumbSchema([
          { name: '홈', url: 'https://gov.jjyu.co.kr' },
          { name: '소득인정액', url: 'https://gov.jjyu.co.kr/guide/income-recognition' },
          { name: '금융재산·자동차' },
        ]),
        articleSchema({
          title: '금융재산·자동차 소득환산',
          description: '금융재산 월 6.26%, 자동차 월 100% 환산과 재산에서 제외되는 자동차를 정리했습니다.',
          datePublished: '2026-08-15T12:40:00+09:00',
          dateModified: '2026-08-15T12:40:00+09:00',
          url: URL,
        }),
        faqSchema(FAQ),
      ].map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(schema) }} />
      ))}
    </div>
  );
}
