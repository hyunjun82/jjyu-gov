import type { Metadata } from 'next';
import Link from 'next/link';
import { SURNAMES, REGIONS, MOVEMENTS, bySurname } from '@/lib/patriots';

export function generateStaticParams() {
  return SURNAMES.map(([s]) => ({ s }));
}
export const dynamicParams = false;

export async function generateMetadata(props: { params: Promise<{ s: string }> }): Promise<Metadata> {
  const { s } = await props.params;
  const sur = decodeURIComponent(s);
  const n = bySurname(sur).length;
  return {
    title: `${sur}씨 독립유공자 ${n.toLocaleString()}명 명단 — 성씨로 찾는 역사 인물 기록 | 정부지원사업`,
    description: `국가보훈부 공공데이터 기준 ${sur}씨 성을 가진 독립유공자는 ${n.toLocaleString()}명입니다. 성함·생몰년·본적·운동계열·훈격을 표로 확인하고 후손 등록 절차로 이어집니다.`,
    alternates: { canonical: `https://gov.jjyu.co.kr/guide/patriots/surname/${encodeURIComponent(sur)}/` },
  };
}

export default async function SurnamePage(props: { params: Promise<{ s: string }> }) {
  const { s } = await props.params;
  const sur = decodeURIComponent(s);
  const list = bySurname(sur);
  // 지역별로 묶는다 — 한 표가 너무 길지 않게
  const groups = new Map<string, typeof list>();
  for (const p of list) {
    const k = p.r1 || '미상';
    if (!groups.has(k)) groups.set(k, []);
    groups.get(k)!.push(p);
  }
  const ordered = [...groups.entries()].sort((a, b) => b[1].length - a[1].length);
  const idx = SURNAMES.findIndex(([x]) => x === sur);
  const neighbors = SURNAMES.slice(Math.max(0, idx - 3), idx + 4).filter(([x]) => x !== sur);

  return (
    <main style={{ maxWidth: 880, margin: '0 auto', padding: '28px 16px 60px' }}>
      <p style={{ fontSize: 13.5 }}>
        <Link href="/guide/patriots/" style={{ color: '#003D88' }}>독립유공자 명단</Link> › 성씨별
      </p>
      <h1 style={{ fontSize: 27, fontWeight: 800, color: '#0B2148', margin: '4px 0 6px' }}>
        {sur}씨 독립유공자 {list.length.toLocaleString()}명
      </h1>
      <p style={{ fontSize: 15, color: '#40507a', lineHeight: 1.7 }}>
        국가보훈부 공공데이터 기준 성이 {sur}씨인 독립유공자 명단입니다. 본적(지역)별로 묶었고,
        같은 성씨라는 사실이 혈연관계를 뜻하지는 않습니다. 집안 어른 성함이 보이면
        공훈전자사료관에서 성함으로 상세 공적을 확인해 보세요.
      </p>

      <div style={{
        background: '#FFF8E6', border: '1px solid #F0DFAE', borderRadius: 12,
        padding: '13px 16px', fontSize: 14.5, lineHeight: 1.7, margin: '14px 0 6px',
      }}>
        명단에서 집안 어른을 찾으셨다면 —{' '}
        <Link href="/policy/veteran-family-registration/" style={{ color: '#003D88', fontWeight: 800 }}>
          독립유공자 유족 등록 절차 확인하기 →
        </Link>
      </div>

      {ordered.map(([region, people]) => (
        <section key={region} style={{ marginTop: 22 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: '#0B2148' }}>
            <Link href={`/guide/patriots/region/${encodeURIComponent(region)}/`} style={{ color: '#0B2148' }}>
              {region}
            </Link>{' '}
            <span style={{ color: '#003D88' }}>{people.length.toLocaleString()}명</span>
          </h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
              <thead>
                <tr style={{ background: '#F4F7FB' }}>
                  <th style={{ padding: '7px 8px', textAlign: 'left' }}>성명</th>
                  <th style={{ padding: '7px 8px', textAlign: 'left' }}>생몰년</th>
                  <th style={{ padding: '7px 8px', textAlign: 'left' }}>본적</th>
                  <th style={{ padding: '7px 8px', textAlign: 'left' }}>운동계열</th>
                  <th style={{ padding: '7px 8px', textAlign: 'left' }}>훈격(포상년도)</th>
                </tr>
              </thead>
              <tbody>
                {people.map((p, i) => (
                  <tr key={i} style={{ borderTop: '1px solid #E4EAF2' }}>
                    <td style={{ padding: '6px 8px', fontWeight: 700 }}>{p.n}</td>
                    <td style={{ padding: '6px 8px' }}>{p.b || '?'}–{p.d || '?'}</td>
                    <td style={{ padding: '6px 8px' }}>{p.r1}{p.r2 ? ` ${p.r2}` : ''}</td>
                    <td style={{ padding: '6px 8px' }}>{p.m}</td>
                    <td style={{ padding: '6px 8px' }}>{p.h}{p.y ? ` (${p.y})` : ''}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ))}

      <section style={{ marginTop: 30 }}>
        <h2 style={{ fontSize: 18, fontWeight: 800, color: '#0B2148' }}>다른 성씨 명단</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 8 }}>
          {neighbors.map(([x, c]) => (
            <Link key={x} href={`/guide/patriots/surname/${encodeURIComponent(x)}/`}
              style={{ padding: '9px 14px', borderRadius: 10, border: '1px solid #D8E0EC', color: '#0B2148', textDecoration: 'none' }}>
              {x}씨 {c.toLocaleString()}명
            </Link>
          ))}
          <Link href="/guide/patriots/" style={{ padding: '9px 14px', borderRadius: 10, background: '#003D88', color: '#fff', textDecoration: 'none', fontWeight: 700 }}>
            전체 성씨·지역 보기 →
          </Link>
        </div>
      </section>

      <section style={{ marginTop: 26 }}>
        <h2 style={{ fontSize: 18, fontWeight: 800, color: '#0B2148' }}>운동계열로도 찾아보기</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 8 }}>
          {MOVEMENTS.slice(0, 6).map(([m, c]) => (
            <Link key={m} href={`/guide/patriots/movement/${encodeURIComponent(m)}/`}
              style={{ padding: '9px 14px', borderRadius: 10, border: '1px solid #D8E0EC', color: '#0B2148', textDecoration: 'none' }}>
              {m} {c.toLocaleString()}명
            </Link>
          ))}
        </div>
      </section>

      <p style={{ color: '#8b97ad', fontSize: 13, marginTop: 24, lineHeight: 1.7 }}>
        출처: 공공데이터포털 「국가보훈부_독립유공자 명단」(2026-07-22 수정, 이용허락범위 제한 없음) ·
        검수일 2026-08-17 · 같은 성씨·본적은 혈연관계 증명이 아니며, 상세 공적과 최종 확인은
        국가보훈부 공훈전자사료관 등 공식 채널에서 하시기 바랍니다.
      </p>
    </main>
  );
}
