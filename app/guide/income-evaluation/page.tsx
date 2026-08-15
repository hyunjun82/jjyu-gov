/* 소득평가액 — 실제소득에서 무엇을 빼는가
 * 1차 출처: 국민기초생활 보장법 시행령 제5조(실제소득), 제5조의2(소득평가액) 조문 원문
 *           찾기쉬운 생활법령 「소득 기준 확인하기」 (2026.7.31 기준)
 * 수치·근거는 data/income-recognition.ts 주석 참고.
 */
import Link from 'next/link';
import { SRC, INCOME_DEDUCTION } from '@/data/income-recognition';
import { articleSchema, breadcrumbSchema, faqSchema, organizationSchema, personSchema, toJsonLd } from '@/lib/schema';

const URL = 'https://gov.jjyu.co.kr/guide/income-evaluation';

export const metadata = {
  title: '소득평가액 계산 — 근로소득 30% 공제, 실제소득에서 빼는 것 전부 | 정부지원사업',
  description:
    '소득평가액은 실제소득에서 가구특성별 지출비용과 근로소득공제를 뺀 금액입니다. 학생·장애인·노인·18~24세의 근로·사업소득은 100분의 30, 장애인 직업재활 소득은 100분의 50을 공제합니다. 시행령 제5조의2 기준으로 정리했습니다.',
  alternates: { canonical: URL },
  openGraph: {
    type: 'article', url: URL, siteName: '정부지원사업', locale: 'ko_KR',
    title: '소득평가액 계산 — 근로소득 30% 공제',
    description: '일해서 번 돈이 그대로 잡히지 않습니다. 공제 항목을 조문 기준으로 정리했습니다.',
  },
};

const NAVY = '#003D88';
const DEEP = '#0B2148';
const SKY = '#7FB3F5';
const card: React.CSSProperties = { background: '#fff', borderRadius: 16, padding: '22px 20px', marginBottom: 16 };
const th: React.CSSProperties = { background: '#F2F4F6', fontSize: 13, fontWeight: 700, padding: '10px 8px', border: '1px solid #E5E8EB', textAlign: 'left' };
const td: React.CSSProperties = { fontSize: 14.5, padding: '12px 8px', border: '1px solid #E5E8EB', color: '#191F28' };

const FAQ = [
  { q: '월급이 200만원이면 소득이 200만원으로 잡히나요?', a: '아닙니다. 근로소득공제와 가구특성별 지출비용을 뺀 금액이 소득평가액입니다. 학생·장애인·노인·18~24세라면 근로·사업소득의 100분의 30을 먼저 뺍니다.' },
  { q: '어떤 소득이 실제소득에 들어가나요?', a: '근로소득, 사업소득, 재산소득(임대·이자·연금), 이전소득을 합칩니다. 소득세법상 비과세 근로소득은 원칙적으로 빠집니다.' },
  { q: '자활근로 급여도 소득인가요?', a: '소득에 들어가되 자활기업이나 자활근로 대상사업에 참여해 받은 소득은 100분의 30을 공제합니다.' },
  { q: '장애인연금이나 장애수당도 소득으로 잡히나요?', a: '아닙니다. 장애인연금 기초급여·부가급여, 장애수당, 장애아동수당과 보호수당은 소득평가액에서 빠집니다.' },
  { q: '한부모 아동양육비는요?', a: '한부모가족지원법에 따른 아동양육비도 소득평가액에서 제외됩니다.' },
  { q: '병원비가 많이 나가는데 반영되나요?', a: '만성질환 등의 치료·요양·재활로 지속적으로 지출하는 의료비는 소득에서 뺍니다.' },
  { q: '해외에서 번 돈은 어떻게 되나요?', a: '국외 근로 보수 중 월 100만원 이내 비과세 급여는 근로소득에 포함됩니다. 원양어업 선박이나 국외 건설현장 등은 월 300만원 이내 금액이 포함됩니다.' },
  { q: '재산은 여기서 안 보나요?', a: '소득평가액은 소득만 봅니다. 재산은 따로 소득으로 환산해 더합니다.' },
];

export default function IncomeEvaluationPage() {
  return (
    <div style={{ background: '#F7F8FA' }}>
      <div style={{ background: DEEP, color: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
          <Link href="/guide/income-recognition" style={{ color: '#fff', fontWeight: 800, fontSize: 17 }}>소득인정액</Link>
          <nav style={{ display: 'flex', gap: 16, fontSize: 14.5, color: '#C9C9C9', flexWrap: 'wrap' }}>
            <a href="#real" style={{ color: SKY, fontWeight: 700 }}>실제소득</a>
            <a href="#deduction">공제 항목</a>
            <a href="#faq">자주 묻는 것</a>
          </nav>
          <Link href="/guide/property-conversion" style={{ marginLeft: 'auto', fontSize: 13, color: '#9AA0A6' }}>재산 환산 →</Link>
        </div>
      </div>

      <div style={{ background: DEEP, color: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', padding: '40px 18px 46px' }}>
          <p style={{ color: SKY, fontSize: 13.5, fontWeight: 700, letterSpacing: 1, margin: 0 }}>소득인정액의 첫 갈래</p>
          <h1 style={{ fontSize: 36, fontWeight: 800, lineHeight: 1.3, margin: '12px 0 14px' }}>소득평가액 계산</h1>
          <p style={{ fontSize: 16.5, lineHeight: 1.8, color: '#C9CDD2', margin: 0, maxWidth: 720 }}>
            일해서 번 돈이 그대로 소득으로 잡히지 않습니다. 시행령이 정한 항목을 빼고 남은 금액이
            소득평가액이고, 근로·사업소득은 100분의 30을 빼는 것이 기본입니다.
          </p>
          <div style={{ background: 'rgba(255,255,255,.08)', border: `1px solid ${SKY}`, borderRadius: 14, padding: '18px 20px', marginTop: 22, maxWidth: 760 }}>
            <p style={{ fontSize: 18.5, fontWeight: 800, margin: 0, lineHeight: 1.6 }}>
              소득평가액 = 실제소득 − 가구특성별 지출비용 − (근로소득공제 + 그 밖의 추가 지출)
            </p>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '28px 18px 60px' }}>
        <section id="real" style={card}>
          <h2 style={{ fontSize: 20, fontWeight: 800, margin: '0 0 10px' }}>
            <span style={{ color: NAVY }}>▍</span> 실제소득에 들어가는 것
          </h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 520 }}>
              <thead><tr><th style={th}>구분</th><th style={th}>내용</th></tr></thead>
              <tbody>
                <tr><td style={{ ...td, fontWeight: 700, width: 110 }}>근로소득</td><td style={td}>일해서 받는 급여. 소득세법상 비과세 근로소득은 원칙적으로 제외하되, 생산직 야간·휴일근로 비과세 급여와 국외 근로 보수 중 월 100만원(원양어업·국외 건설현장 등은 월 300만원) 이내 금액은 포함</td></tr>
                <tr><td style={{ ...td, fontWeight: 700 }}>사업소득</td><td style={td}>농업·임업·어업 소득과 도매업·소매업·제조업 등 그 밖의 사업소득</td></tr>
                <tr><td style={{ ...td, fontWeight: 700 }}>재산소득</td><td style={td}>임대소득, 이자소득(복지부장관이 정하는 금액 이상), 연금소득</td></tr>
                <tr><td style={{ ...td, fontWeight: 700 }}>이전소득</td><td style={td}>친족·후원자에게 정기적으로 받는 금품, 국민연금·기초연금·공무원연금·고용보험·산재보험 등에서 정기적으로 지급되는 수당·연금·급여</td></tr>
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 13, color: '#6B7684', marginTop: 12, marginBottom: 0 }}>
            근거: 국민기초생활 보장법 시행령 제5조제1항
          </p>
        </section>

        <section id="deduction" style={card}>
          <h2 style={{ fontSize: 20, fontWeight: 800, margin: '0 0 6px' }}>
            <span style={{ color: NAVY }}>▍</span> 빼주는 것 — 시행령 제5조의2
          </h2>
          <p style={{ fontSize: 14.5, color: '#4E5968', margin: '0 0 12px', lineHeight: 1.75 }}>
            조문은 열두 가지를 열거합니다. 실제로 자주 걸리는 항목만 추리면 이렇습니다.
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 560 }}>
              <thead><tr><th style={th}>무엇을</th><th style={{ ...th, textAlign: 'center', width: 220 }}>얼마나</th></tr></thead>
              <tbody>
                {INCOME_DEDUCTION.map((d) => (
                  <tr key={d.no}>
                    <td style={td}>{d.what}</td>
                    <td style={{ ...td, textAlign: 'center', fontWeight: 700, color: NAVY }}>{d.rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ background: '#F8F9FA', borderRadius: 12, padding: '14px 16px', marginTop: 14 }}>
            <b style={{ display: 'block', marginBottom: 6 }}>아예 소득으로 안 보는 것</b>
            <p style={{ fontSize: 14.5, lineHeight: 1.8, margin: 0, color: '#333D4B' }}>
              장애인연금 기초급여·부가급여, 장애수당·장애아동수당·보호수당, 한부모가족 아동양육비,
              고엽제후유의증 수당, 독립유공자·국가유공자·보훈보상대상자 생활조정수당은
              소득평가액에서 빠집니다.
            </p>
          </div>
        </section>

        <section style={card}>
          <h2 style={{ fontSize: 20, fontWeight: 800, margin: '0 0 10px' }}>
            <span style={{ color: NAVY }}>▍</span> 계산해 보면
          </h2>
          <p style={{ fontSize: 15.5, lineHeight: 1.85, margin: 0, color: '#333D4B' }}>
            22세 청년이 월 150만원을 벌면, 시행령 제5조의2 제10호에 따라 100분의 30인 45만원을 뺍니다.
            남은 105만원이 소득평가액의 기본이 되고, 여기서 만성질환 의료비 같은 가구특성별 지출이 있으면
            더 빠집니다. 재산이 없다면 이 금액이 곧 소득인정액이 됩니다.
          </p>
          <Link href="/guide/property-conversion" className="btn-cta"
                style={{ display: 'block', textAlign: 'center', marginTop: 16 }}>
            재산은 어떻게 소득으로 바뀌는지 보기
          </Link>
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
          출처: <a href={SRC.decree} rel="noopener">국민기초생활 보장법 시행령 제5조·제5조의2</a> · 찾기쉬운 생활법령정보
          「기초생활보장 신청하기 — 소득 기준 확인하기」 · 2026.08.15 검수 · 정부지원사업 에디터.
        </p>
      </div>

      {[
        organizationSchema(), personSchema(),
        breadcrumbSchema([
          { name: '홈', url: 'https://gov.jjyu.co.kr' },
          { name: '소득인정액', url: 'https://gov.jjyu.co.kr/guide/income-recognition' },
          { name: '소득평가액' },
        ]),
        articleSchema({
          title: '소득평가액 계산 — 근로소득 30% 공제와 제외 소득',
          description: '실제소득에서 빼는 항목을 시행령 제5조의2 기준으로 정리했습니다.',
          datePublished: '2026-08-15T11:20:00+09:00',
          dateModified: '2026-08-15T11:20:00+09:00',
          url: URL,
        }),
        faqSchema(FAQ),
      ].map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(schema) }} />
      ))}
    </div>
  );
}
