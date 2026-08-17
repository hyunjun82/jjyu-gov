import type { Metadata } from 'next';
import Link from 'next/link';
import { PATRIOTS, SURNAMES, REGIONS, MOVEMENTS } from '@/lib/patriots';
import PatriotSearch from './PatriotSearch';

export const metadata: Metadata = {
  title: '독립유공자 명단 조회 — 성씨·지역으로 찾는 역사 인물 기록 | 정부지원사업',
  description:
    '국가보훈부 공공데이터 독립유공자 18,776명 명단을 성씨별·지역별·운동계열별로 조회합니다. 우리 성씨, 우리 고향에서 몇 분이 서훈되셨는지 확인하고 후손 등록 방법까지 이어집니다.',
  alternates: { canonical: 'https://gov.jjyu.co.kr/guide/patriots/' },
};

const card: React.CSSProperties = {
  display: 'block', padding: '14px 16px', borderRadius: 12,
  border: '1px solid #D8E0EC', textDecoration: 'none', color: '#0B2148', background: '#fff',
};

export default function PatriotsHome() {
  const total = PATRIOTS.length;
  return (
    <main style={{ maxWidth: 880, margin: '0 auto', padding: '28px 16px 60px' }}>
      <header style={{ textAlign: 'center', marginBottom: 8 }}>
        <h1 style={{ fontSize: 30, fontWeight: 800, color: '#0B2148', margin: '6px 0' }}>
          독립유공자 명단 — 성씨·지역으로 찾기
        </h1>
        <p style={{ fontSize: 16, color: '#40507a', margin: '6px 0 0' }}>
          국가에서 서훈한 독립유공자 <strong>{total.toLocaleString()}명</strong>의 기록을
          성씨와 본적(지역)으로 찾아봅니다.
        </p>
      </header>

      <PatriotSearch surnames={SURNAMES} regions={REGIONS} />

      <div style={{
        background: '#F4F7FB', border: '1px solid #D8E0EC', borderRadius: 12,
        padding: '14px 16px', fontSize: 14.5, lineHeight: 1.7, color: '#33415e', margin: '16px 0 26px',
      }}>
        <strong>꼭 읽어주세요.</strong> 같은 성씨·같은 본적이라는 사실은 직계 혈연관계를 뜻하지 않습니다.
        이 페이지는 사망한 역사 인물에 대한 국가 공인 공개 기록만을 보여드립니다.
        자료는 국가보훈부가 공공데이터포털에 개방한 「독립유공자 명단」(2026년 7월 22일 수정본,
        이용허락범위 제한 없음)이며, 국가보훈부는 이 명단을 <em>독립유공자 후손 찾기</em> 등을 위해
        생몰년월일을 포함해 제공하고 있습니다. 내 직계 조상 확인은 제적등본으로 합니다.
      </div>

      <section style={{ marginBottom: 26 }}>
        <h2 style={{ fontSize: 20, fontWeight: 800, color: '#0B2148' }}>성씨별 독립유공자</h2>
        <p style={{ fontSize: 14.5, color: '#40507a', margin: '4px 0 12px' }}>
          성씨를 누르면 해당 성씨 전체 명단이 나옵니다. 상위 24개 성씨입니다 — 전체 {SURNAMES.length}개 성씨는 검색으로 찾아보세요.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: 8 }}>
          {SURNAMES.slice(0, 24).map(([s, c]) => (
            <Link key={s} href={`/guide/patriots/surname/${encodeURIComponent(s)}/`} style={card}>
              <strong style={{ fontSize: 17 }}>{s}씨</strong>
              <span style={{ float: 'right', color: '#003D88', fontWeight: 700 }}>{c.toLocaleString()}명</span>
            </Link>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: 26 }}>
        <h2 style={{ fontSize: 20, fontWeight: 800, color: '#0B2148' }}>지역(본적)별 독립유공자</h2>
        <p style={{ fontSize: 14.5, color: '#40507a', margin: '4px 0 12px' }}>
          우리 고향에서 몇 분이 나오셨는지 봅니다. 본적 기준이라 현재 행정구역과 다를 수 있습니다.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 8 }}>
          {REGIONS.map(([r, c]) => (
            <Link key={r} href={`/guide/patriots/region/${encodeURIComponent(r)}/`} style={card}>
              {r} <span style={{ float: 'right', color: '#003D88', fontWeight: 700 }}>{c.toLocaleString()}명</span>
            </Link>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: 26 }}>
        <h2 style={{ fontSize: 20, fontWeight: 800, color: '#0B2148' }}>운동계열별 기록</h2>
        <p style={{ fontSize: 14.5, color: '#40507a', margin: '4px 0 12px' }}>
          3.1운동부터 광복군까지 — 어떤 활동으로 서훈되셨는지로 찾아봅니다.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 8 }}>
          {MOVEMENTS.map(([m, c]) => (
            <Link key={m} href={`/guide/patriots/movement/${encodeURIComponent(m)}/`} style={card}>
              {m} <span style={{ float: 'right', color: '#003D88', fontWeight: 700 }}>{c.toLocaleString()}명</span>
            </Link>
          ))}
        </div>
      </section>

      <section style={{
        background: '#0B2148', color: '#fff', borderRadius: 14, padding: '20px 20px 22px', marginBottom: 26,
      }}>
        <h2 style={{ fontSize: 19, fontWeight: 800, margin: '0 0 8px' }}>조상이 독립유공자라면 — 후손이 받을 수 있는 것</h2>
        <p style={{ fontSize: 14.5, lineHeight: 1.7, margin: '0 0 14px', color: '#D7E1F2' }}>
          독립유공자 후손으로 등록되면 보훈급여와 취업 지원 등이 열립니다.
          명단에서 집안 어른 성함을 보셨다면 유족 등록 절차부터 확인해 보세요.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          <Link href="/policy/veteran-family-registration/" style={{ ...card, background: '#FFD75E', border: 'none', fontWeight: 800 }}>
            유족 등록 절차 확인하기 →
          </Link>
          <Link href="/policy/veteran-employment-support/" style={{ ...card, background: '#ffffff22', color: '#fff', border: '1px solid #ffffff55' }}>
            유공자·유가족 취업 지원 보기
          </Link>
        </div>
      </section>

      <section style={{ fontSize: 14, lineHeight: 1.8, color: '#33415e' }}>
        <h2 style={{ fontSize: 18, fontWeight: 800, color: '#0B2148' }}>자주 묻는 질문</h2>
        <p><strong>Q. 훈격은 무엇인가요?</strong><br />
          서훈의 등급입니다. 이 명단 기준으로 건국훈장 11,934명, 포장 1,571명, 표창(대통령표창) 5,271명입니다.</p>
        <p><strong>Q. 여기서 내 직계 조상이 확인되나요?</strong><br />
          아닙니다. 같은 성씨·본적은 혈연 증명이 아닙니다. 직계 확인은 제적등본(대법원 전자가족관계등록시스템)으로 하고,
          독립유공자 공적의 상세 기록은 국가보훈부 공훈전자사료관에서 성함으로 검색합니다.</p>
        <p><strong>Q. 친일파 명단도 여기서 보나요?</strong><br />
          이 페이지는 독립유공자 명단만 다룹니다. 친일반민족행위 관련 기록은 친일반민족행위진상규명위원회 보고서(국가기록물)가 원본입니다.</p>
        <p style={{ color: '#8b97ad', fontSize: 13, marginTop: 18 }}>
          출처: 공공데이터포털 「국가보훈부_독립유공자 명단」(2026-07-22 수정, 이용허락범위 제한 없음) ·
          본 페이지 집계 기준 {total.toLocaleString()}명 · 검수일 2026-08-17 ·
          최종 확인은 국가보훈부 공훈전자사료관 등 공식 채널에서 하시기 바랍니다.
        </p>
      </section>
    </main>
  );
}
