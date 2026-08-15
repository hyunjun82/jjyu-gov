/* 건강보험료로 소득을 판정하는 사업 — 구조와 읽는 법
 * 1차 출처: 여성가족부 아이돌봄서비스 「2026년 건강보험료 소득판정기준표」 PDF (Playwright 다운로드 후 텍스트 대조)
 *   수치·주의사항은 data/health-insurance-bands.ts 주석 참고.
 * ⚠ 사업마다 표가 다르다는 점을 본문에서 분명히 밝힌다.
 */
import Link from 'next/link';
import { HI_BANDS, HI_SOURCE } from '@/data/health-insurance-bands';
import { articleSchema, breadcrumbSchema, faqSchema, organizationSchema, personSchema, toJsonLd } from '@/lib/schema';

const URL = 'https://gov.jjyu.co.kr/guide/health-insurance-standard';

export const metadata = {
  title: '건강보험료 소득판정기준 — 내 건보료로 중위소득 몇 %인지 보는 법 | 정부지원사업',
  description:
    '많은 지원사업이 소득 대신 건강보험료 본인부담금으로 대상을 가릅니다. 직장·지역·혼합 가입자별로 기준액이 다르고 장기요양보험료 포함 여부에 따라 또 갈립니다. 2026년 판정표로 읽는 법을 정리했습니다.',
  alternates: { canonical: URL },
  openGraph: {
    type: 'article', url: URL, siteName: '정부지원사업', locale: 'ko_KR',
    title: '건강보험료 소득판정기준 읽는 법',
    description: '직장·지역·혼합, 장기요양보험료 포함 여부까지 — 내 건보료가 어느 칸인지 찾는 법',
  },
};

const NAVY = '#003D88';
const DEEP = '#0B2148';
const SKY = '#7FB3F5';
const W = (n: number) => n.toLocaleString('ko-KR');
const card: React.CSSProperties = { background: '#fff', borderRadius: 16, padding: '22px 20px', marginBottom: 16 };
const th: React.CSSProperties = { background: '#F2F4F6', fontSize: 12.5, fontWeight: 700, padding: '9px 6px', border: '1px solid #E5E8EB', textAlign: 'center', whiteSpace: 'nowrap' };
const td: React.CSSProperties = { fontSize: 13.5, padding: '10px 6px', border: '1px solid #E5E8EB', textAlign: 'right', color: '#191F28' };
const tdc: React.CSSProperties = { ...td, textAlign: 'center' };

const FAQ = [
  { q: '왜 소득이 아니라 건강보험료로 보나요?', a: '가구 소득을 일일이 확인하는 대신 이미 부과된 건강보험료로 소득 수준을 가늠하면 절차가 빨라지기 때문입니다. 그래서 많은 지원사업이 건보료 본인부담금 기준표를 씁니다.' },
  { q: '내 건강보험료는 어디서 확인하나요?', a: '건강보험공단 홈페이지나 앱, 고지서에서 확인할 수 있습니다. 판정에 쓰이는 것은 본인부담금이고, 회사가 내는 몫은 빠집니다.' },
  { q: '직장가입자와 지역가입자 기준이 왜 다른가요?', a: '보험료를 매기는 방식이 다르기 때문입니다. 직장은 보수월액, 지역은 소득과 재산을 함께 점수로 매겨 부과하므로 같은 소득이라도 금액이 달라집니다.' },
  { q: '혼합은 무슨 뜻인가요?', a: '한 가구 안에 직장가입자와 지역가입자가 섞여 있는 경우입니다. 이때는 혼합 칸의 기준을 봅니다.' },
  { q: '장기요양보험료 포함이 무슨 말인가요?', a: '건강보험료에 장기요양보험료가 함께 부과되는데, 사업에 따라 이를 포함한 금액으로 볼지 뺀 금액으로 볼지가 다릅니다. 공고문에 어느 쪽인지 적혀 있습니다.' },
  { q: '표가 사업마다 다른가요?', a: '다릅니다. 같은 중위소득 150%라도 가구원 수 구간과 포함 여부 기준이 사업마다 달라 판정표가 따로 나옵니다. 반드시 신청하려는 사업의 공고문에 붙은 표를 봐야 합니다.' },
  { q: '기준을 조금 넘으면 방법이 없나요?', a: '건보료는 전년도 소득 등을 반영해 부과되므로 실직이나 휴업으로 사정이 바뀌었다면 조정 신청을 한 뒤 다시 확인해 보는 방법이 있습니다. 사업 담당 부서에 문의하세요.' },
  { q: '기초생활 급여도 건보료로 판정하나요?', a: '아닙니다. 기초생활보장 급여는 소득인정액으로 판정합니다. 소득평가액과 재산의 소득환산액을 더해 계산합니다.' },
];

export default function HealthInsuranceStandardPage() {
  return (
    <div style={{ background: '#F7F8FA' }}>
      <div style={{ background: DEEP, color: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: '#fff', fontWeight: 800, fontSize: 17 }}>건강보험료 기준</Link>
          <nav style={{ display: 'flex', gap: 16, fontSize: 14.5, color: '#C9C9C9', flexWrap: 'wrap' }}>
            <a href="#how" style={{ color: SKY, fontWeight: 700 }}>읽는 법</a>
            <a href="#table">판정표</a>
            <a href="#caution">주의</a>
            <a href="#faq">자주 묻는 것</a>
          </nav>
          <Link href="/guide/income-recognition" style={{ marginLeft: 'auto', fontSize: 13, color: '#9AA0A6' }}>소득인정액 기준 →</Link>
        </div>
      </div>

      <div style={{ background: DEEP, color: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', padding: '40px 18px 46px' }}>
          <p style={{ color: SKY, fontSize: 13.5, fontWeight: 700, letterSpacing: 1, margin: 0 }}>소득 서류 없이 가르는 기준</p>
          <h1 style={{ fontSize: 36, fontWeight: 800, lineHeight: 1.3, margin: '12px 0 14px' }}>건강보험료 소득판정기준</h1>
          <p style={{ fontSize: 16.5, lineHeight: 1.8, color: '#C9CDD2', margin: 0, maxWidth: 740 }}>
            공고문에 “중위소득 150% 이하”라고 써 있어도 실제로는 건강보험료 본인부담금으로 가릅니다.
            직장이냐 지역이냐, 장기요양보험료를 포함하느냐에 따라 기준액이 갈립니다.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '28px 18px 60px' }}>
        <section id="how" style={card}>
          <h2 style={{ fontSize: 20, fontWeight: 800, margin: '0 0 12px' }}>
            <span style={{ color: NAVY }}>▍</span> 세 가지만 맞추면 됩니다
          </h2>
          <ol style={{ fontSize: 15.5, lineHeight: 1.95, paddingLeft: 22, margin: 0, color: '#333D4B' }}>
            <li><b>가구원 수</b> — 건강보험 피부양자를 포함한 가구원 수로 줄을 찾습니다.</li>
            <li><b>가입 형태</b> — 직장가입자인지, 지역가입자인지, 한 가구에 둘이 섞인 혼합인지 고릅니다.</li>
            <li><b>장기요양보험료 포함 여부</b> — 공고문이 어느 쪽 기준을 쓰는지 확인하고 그 줄의 금액과 내 본인부담금을 비교합니다.</li>
          </ol>
          <div style={{ background: '#F8F9FA', borderRadius: 12, padding: '14px 16px', marginTop: 14 }}>
            <p style={{ fontSize: 14.5, lineHeight: 1.8, margin: 0, color: '#333D4B' }}>
              내 건강보험료 본인부담금이 해당 칸의 금액 <b>이하</b>면 그 구간에 듭니다. 회사가 부담하는 몫은
              계산에 넣지 않습니다.
            </p>
          </div>
        </section>

        <section id="table" style={card}>
          <h2 style={{ fontSize: 20, fontWeight: 800, margin: '0 0 4px' }}>
            <span style={{ color: NAVY }}>▍</span> 2026년 판정표 (아이돌봄서비스 기준)
          </h2>
          <p style={{ fontSize: 14, color: '#6B7684', margin: '0 0 12px' }}>
            단위: 원 · 위 칸은 장기요양보험료 미포함, 아래 칸은 포함
          </p>
          {HI_BANDS.map((b) => (
            <div key={b.pct} style={{ marginBottom: 22 }}>
              <p style={{ fontSize: 15.5, fontWeight: 800, margin: '0 0 8px', color: NAVY }}>
                기준 중위소득 {b.pct}% ({b.type})
              </p>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 600 }}>
                  <thead>
                    <tr>
                      <th style={th}>가구원 수</th>
                      <th style={th}>소득기준</th>
                      <th style={th}>장기요양</th>
                      <th style={th}>직장가입자</th>
                      <th style={th}>지역가입자</th>
                      <th style={th}>혼합</th>
                    </tr>
                  </thead>
                  <tbody>
                    {b.rows.map((r) => (
                      <>
                        <tr key={`${r.size}-ex`}>
                          <td style={{ ...tdc, fontWeight: 700 }} rowSpan={2}>{r.size}</td>
                          <td style={{ ...td, fontWeight: 700 }} rowSpan={2}>{W(r.income)}</td>
                          <td style={tdc}>미포함</td>
                          <td style={td}>{W(r.ex.직장)}</td>
                          <td style={td}>{W(r.ex.지역)}</td>
                          <td style={td}>{W(r.ex.혼합)}</td>
                        </tr>
                        <tr key={`${r.size}-inc`}>
                          <td style={{ ...tdc, background: '#F7FAFF' }}>포함</td>
                          <td style={{ ...td, background: '#F7FAFF' }}>{W(r.inc.직장)}</td>
                          <td style={{ ...td, background: '#F7FAFF' }}>{W(r.inc.지역)}</td>
                          <td style={{ ...td, background: '#F7FAFF' }}>{W(r.inc.혼합)}</td>
                        </tr>
                      </>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
          <p style={{ fontSize: 13, color: '#6B7684', margin: 0, lineHeight: 1.7 }}>
            표는 7~10인 가구까지 이어집니다. 원문에서 전체 구간을 확인하세요.
          </p>
        </section>

        <section id="caution" style={{ ...card, borderLeft: `4px solid ${NAVY}` }}>
          <h2 style={{ fontSize: 20, fontWeight: 800, margin: '0 0 10px' }}>이 표를 다른 사업에 그대로 쓰면 안 됩니다</h2>
          <p style={{ fontSize: 15.5, lineHeight: 1.85, margin: 0, color: '#333D4B' }}>
            같은 “중위소득 150%”라도 사업마다 가구원 수를 묶는 방식과 장기요양보험료 포함 여부가 달라
            판정표가 따로 만들어집니다. 위 표는 여성가족부 아이돌봄서비스 기준이고, 국가장학금이나
            지자체 사업은 각자의 표를 씁니다. <b>신청하려는 사업 공고문에 붙은 표</b>를 확인하셔야 합니다.
          </p>
        </section>

        <section style={card}>
          <h2 style={{ fontSize: 20, fontWeight: 800, margin: '0 0 10px' }}>
            <span style={{ color: NAVY }}>▍</span> 건보료 기준과 소득인정액 기준은 다릅니다
          </h2>
          <p style={{ fontSize: 15.5, lineHeight: 1.85, margin: '0 0 14px', color: '#333D4B' }}>
            기초생활 생계·의료·주거·교육급여는 건강보험료가 아니라 <b>소득인정액</b>으로 판정합니다.
            소득평가액에 재산의 소득환산액을 더해 계산하고, 재산에서는 기본재산액과 부채를 먼저 뺍니다.
            같은 “중위소득 몇 %”라는 말을 써도 재는 자가 다릅니다.
          </p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <Link href="/guide/income-recognition" style={{ fontSize: 14, background: '#F2F6FC', color: '#1E4C8F', borderRadius: 8, padding: '9px 13px' }}>소득인정액 계산법</Link>
            <Link href="/guide/median-income-2027" style={{ fontSize: 14, background: '#F2F6FC', color: '#1E4C8F', borderRadius: 8, padding: '9px 13px' }}>2027년 기준 중위소득</Link>
            <Link href="/calc/median-income" style={{ fontSize: 14, background: '#F2F6FC', color: '#1E4C8F', borderRadius: 8, padding: '9px 13px' }}>중위소득 % 계산기</Link>
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
          출처: 여성가족부 아이돌봄서비스{' '}
          <a href={HI_SOURCE} rel="noopener">「2026년 건강보험료 소득판정기준표」</a> ·
          2026.08.15 검수 · 정부지원사업 에디터. 사업마다 기준표가 다르므로 신청 전 해당 공고문을 확인하세요.
        </p>
      </div>

      {[
        organizationSchema(), personSchema(),
        breadcrumbSchema([
          { name: '홈', url: 'https://gov.jjyu.co.kr' },
          { name: '복지', url: 'https://gov.jjyu.co.kr/category/welfare' },
          { name: '건강보험료 소득판정기준' },
        ]),
        articleSchema({
          title: '건강보험료 소득판정기준 읽는 법',
          description: '직장·지역·혼합과 장기요양보험료 포함 여부에 따라 갈리는 건강보험료 기준표를 2026년 판정표로 정리했습니다.',
          datePublished: '2026-08-15T13:00:00+09:00',
          dateModified: '2026-08-15T13:00:00+09:00',
          url: URL,
        }),
        faqSchema(FAQ),
      ].map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(schema) }} />
      ))}
    </div>
  );
}
