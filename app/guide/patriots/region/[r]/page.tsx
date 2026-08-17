import type { Metadata } from 'next';
import Link from 'next/link';
import { REGIONS, SURNAMES, byRegion } from '@/lib/patriots';

export function generateStaticParams() {
  return REGIONS.map(([r]) => ({ r }));
}
export const dynamicParams = false;

export async function generateMetadata(props: { params: Promise<{ r: string }> }): Promise<Metadata> {
  const { r } = await props.params;
  const region = decodeURIComponent(r);
  const n = byRegion(region).length;
  return {
    title: `${region} 독립유공자 ${n.toLocaleString()}명 명단 — 우리 고향의 역사 인물 기록 | 정부지원사업`,
    description: `국가보훈부 공공데이터 기준 본적이 ${region}인 독립유공자는 ${n.toLocaleString()}명입니다. 시군별·성함별 명단과 운동계열, 훈격을 확인하고 후손 등록 절차로 이어집니다.`,
    alternates: { canonical: `https://gov.jjyu.co.kr/guide/patriots/region/${encodeURIComponent(region)}/` },
  };
}

export default async function RegionPage(props: { params: Promise<{ r: string }> }) {
  const { r } = await props.params;
  const region = decodeURIComponent(r);
  const list = byRegion(region);
  // 시군별 묶음
  const groups = new Map<string, typeof list>();
  for (const p of list) {
    const k = p.r2 || '(시군 미상)';
    if (!groups.has(k)) groups.set(k, []);
    groups.get(k)!.push(p);
  }
  const ordered = [...groups.entries()].sort((a, b) => b[1].length - a[1].length);

  return (
    <main style={{ maxWidth: 880, margin: '0 auto', padding: '28px 16px 60px' }}>
      <p style={{ fontSize: 13.5 }}>
        <Link href="/guide/patriots/" style={{ color: '#003D88' }}>독립유공자 명단</Link> › 지역별
      </p>
      <h1 style={{ fontSize: 27, fontWeight: 800, color: '#0B2148', margin: '4px 0 6px' }}>
        {region} 독립유공자 {list.length.toLocaleString()}명
      </h1>
      <p style={{ fontSize: 15, color: '#40507a', lineHeight: 1.7 }}>
        본적이 {region}인 독립유공자 명단입니다. 본적은 당시 호적 기준이라 현재 행정구역과 다를 수 있습니다.
        시군별로 묶어 인원이 많은 곳부터 보여드립니다.
      </p>

      <div style={{
        background: '#FFF8E6', border: '1px solid #F0DFAE', borderRadius: 12,
        padding: '13px 16px', fontSize: 14.5, lineHeight: 1.7, margin: '14px 0 6px',
      }}>
        집안 어른 성함을 찾으셨다면 —{' '}
        <Link href="/policy/veteran-family-registration/" style={{ color: '#003D88', fontWeight: 800 }}>
          독립유공자 유족 등록 절차 확인하기 →
        </Link>
      </div>

      {ordered.map(([gu, people]) => (
        <section key={gu} style={{ marginTop: 22 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: '#0B2148' }}>
            {region} {gu} <span style={{ color: '#003D88' }}>{people.length.toLocaleString()}명</span>
          </h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
              <thead>
                <tr style={{ background: '#F4F7FB' }}>
                  <th style={{ padding: '7px 8px', textAlign: 'left' }}>성명</th>
                  <th style={{ padding: '7px 8px', textAlign: 'left' }}>생몰년</th>
                  <th style={{ padding: '7px 8px', textAlign: 'left' }}>운동계열</th>
                  <th style={{ padding: '7px 8px', textAlign: 'left' }}>훈격(포상년도)</th>
                </tr>
              </thead>
              <tbody>
                {people.map((p, i) => (
                  <tr key={i} style={{ borderTop: '1px solid #E4EAF2' }}>
                    <td style={{ padding: '6px 8px', fontWeight: 700 }}>
                      <Link href={`/guide/patriots/surname/${encodeURIComponent(p.n[0])}/`} style={{ color: '#0B2148' }}>
                        {p.n}
                      </Link>
                    </td>
                    <td style={{ padding: '6px 8px' }}>{p.b || '?'}–{p.d || '?'}</td>
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
        <h2 style={{ fontSize: 18, fontWeight: 800, color: '#0B2148' }}>다른 지역 명단</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 8 }}>
          {REGIONS.filter(([x]) => x !== region).slice(0, 8).map(([x, c]) => (
            <Link key={x} href={`/guide/patriots/region/${encodeURIComponent(x)}/`}
              style={{ padding: '9px 14px', borderRadius: 10, border: '1px solid #D8E0EC', color: '#0B2148', textDecoration: 'none' }}>
              {x} {c.toLocaleString()}명
            </Link>
          ))}
          <Link href="/guide/patriots/" style={{ padding: '9px 14px', borderRadius: 10, background: '#003D88', color: '#fff', textDecoration: 'none', fontWeight: 700 }}>
            전체 보기 →
          </Link>
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
