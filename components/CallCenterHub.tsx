'use client';

/* 고객센터 목록(허브) 화면 — 보험사·증권사가 같은 화면을 쓴다.
 *
 * 구조는 db-customer-center.html 을 그대로 따른다 — 회사 상세(CallCenterPage)와 같은 뼈대다.
 *   헤더 네비 → 브레드크럼 → h1·리드 → 히어로 2단
 *   → #numbers → #connect → #hours → #faq → 마감 배너 → 출처
 * 상세는 "회사 한 곳"을 그 뼈대에 담고, 허브는 "회사 26곳"을 같은 뼈대에 담는다.
 *
 * 본문 문장은 data/policies/insurance-call-center.ts 의 승인된 텍스트를 그대로 쓴다.
 * 여기서 새로 지어내면 원문 대조 게이트가 잡는다.
 *
 * 목록에서 회사를 누르면 내부 이동이다 — 전면광고가 뜨는 지점이 바로 여기다.
 */

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { readable, type CallCenterData } from '@/components/CallCenterPage';

/* 브랜드색 한 개로 밝기 조절 — 회사 페이지와 같은 함수 */
function mix(hex: string, target: number, amt: number) {
  const h = hex.replace('#', '');
  const n = parseInt(h.length === 3 ? h.split('').map((c) => c + c).join('') : h, 16);
  const ch = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((v) =>
    Math.round(v + (target - v) * amt),
  );
  return '#' + ch.map((v) => v.toString(16).padStart(2, '0')).join('');
}
const darken = (hex: string, amt: number) => mix(hex, 0, amt);

const telHref = (t: string) => `tel:${String(t).replace(/[^0-9+]/g, '')}`;

function parseWeekdayHours(s: string): { from: number; to: number } | null {
  const m = String(s).match(/(\d{1,2})\s*(?::\d{2}|시)/g);
  if (!m || m.length < 2) return null;
  const from = parseInt(m[0], 10);
  const to = parseInt(m[1], 10);
  if (isNaN(from) || isNaN(to) || to <= from) return null;
  return { from, to };
}

const NAVY = '#14395C';
const BLUE = '#1F4E79';
const BLUE2 = '#2A6099';
const TINT = '#EEF3F9';
const EDGE = '#C9D8E8';

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
type HubPolicy = any;

/* 업종 말 — 허브가 보험사 하나였을 때는 '보험사'를 박아 뒀다.
   증권사가 붙으면서 slug 로 고른다.
 *
 * 2026-09-01 사장님 지적으로 찾았다 — 카드·통신·온라인·대출 4개 허브가
 * 이 표에 없어서 전부 "회사 고객센터 전화번호 모음" 으로 나가고 있었다 (140편).
 * "대출 고객센터" 로 검색해서 들어온 사람이 h1 에서 '대출' 을 못 보는 상태였다.
 *
 * 말을 셋으로 나눈 이유
 *   보험·증권은 "보험사 고객센터" 로 제목과 주체가 우연히 같았다. 다른 업종은 안 그렇다.
 *     title  제목에 쓰는 말   — 검색어와 같아야 한다 ("대출 고객센터", "온라인 고객센터")
 *     word   주체를 부르는 말 — "각 금융사가 공개한 안내" (대출사 라는 말은 없다)
 *     unit   낱개를 부르는 말 — 목록에서 "회사를 누르면" / 공공기관은 "기관을 누르면"
 *   새 허브를 만들면 여기 한 줄을 반드시 더한다. 안 하면 또 '회사' 로 떨어진다. */
const WORD: Record<string, { word: string; title: string; unit: string; mark: string; label: string }> = {
  'insurance-call-center': { word: '보험사', title: '보험사', unit: '회사', mark: '보', label: '보험 고객센터' },
  'securities-call-center': { word: '증권사', title: '증권사', unit: '회사', mark: '증', label: '증권 고객센터' },
  'card-call-center': { word: '카드사', title: '카드사', unit: '회사', mark: '카', label: '카드 고객센터' },
  'telecom-call-center': { word: '통신사', title: '통신사', unit: '회사', mark: '통', label: '통신 고객센터' },
  'online-call-center': { word: '온라인 서비스', title: '온라인', unit: '서비스', mark: '온', label: '온라인 고객센터' },
  'loan-call-center': { word: '금융사', title: '대출', unit: '회사', mark: '대', label: '대출 고객센터' },
  'public-call-center': { word: '공공기관', title: '공공기관', unit: '기관', mark: '공', label: '공공기관 고객센터' },
};

/* 받침에 따라 조사를 고른다 — "공공기관가 공개한" 이 되면 안 된다 */
const eun = (w: string) => (jongseong(w) ? '은' : '는');
const ga = (w: string) => (jongseong(w) ? '이' : '가');
const gwa = (w: string) => (jongseong(w) ? '과' : '와');
const eul = (w: string) => (jongseong(w) ? '을' : '를');
function jongseong(w: string): boolean {
  const ch = String(w).trim().slice(-1);
  const code = ch.charCodeAt(0);
  if (code >= 0xac00 && code <= 0xd7a3) return (code - 0xac00) % 28 !== 0;
  return false;
}

export default function CallCenterHub({
  companies,
  policyId,
  policy,
}: {
  companies: { slug: string; cc: CallCenterData }[];
  policyId: string;
  policy: HubPolicy;
}) {
  const [now, setNow] = useState<Date | null>(null);
  const [q, setQ] = useState('');
  const IND = WORD[String(policy?.slug)] ?? { word: '회사', title: '회사', unit: '회사', mark: '고', label: '고객센터' };

  useEffect(() => {
    setNow(new Date());
  }, []);

  const isOpen = (cc: CallCenterData) => {
    const wh = parseWeekdayHours(cc.hours.weekday);
    if (!now || !wh) return null;
    return now.getDay() >= 1 && now.getDay() <= 5 && now.getHours() >= wh.from && now.getHours() < wh.to;
  };

  const kw = q.trim().toLowerCase();
  const list = kw
    ? companies.filter(
        ({ cc }) =>
          cc.name.toLowerCase().includes(kw) ||
          cc.main.tel.includes(kw) ||
          (cc.aliases ?? []).some((a) => a.toLowerCase().includes(kw)),
      )
    : companies;

  const openCount = now ? companies.filter(({ cc }) => isOpen(cc) === true).length : 0;

  /* 승인된 본문에서 그대로 가져온다 — 문장을 여기서 새로 짓지 않는다 */
  const qaBy = (anchor: string) => (policy?.qa ?? []).find((x: { anchor?: string }) => x.anchor === anchor);
  const qApply = qaBy('q-apply');
  const qNight = qaBy('q-night');
  const qFee = qaBy('q-fee');
  const qNumbers = qaBy('q-numbers');
  const qLocation = qaBy('q-location');
  const faqList: { q: string; a: string; source?: string; sourceUrl?: string }[] = policy?.faq ?? [];
  const sources: { name: string; url: string }[] = policy?.sources ?? [];
  const reviewed = String(policy?.dateModified ?? '').slice(0, 10) || '2026-08-25';

  const card = {
    background: '#fff',
    border: '1px solid #EAEDF2',
    borderRadius: 18,
    boxShadow: '0 4px 0 #EEF1F6, 0 16px 30px -26px rgba(16,24,40,.5)',
  } as const;
  const h2 = {
    margin: 0,
    fontSize: 27,
    fontWeight: 800,
    letterSpacing: '-0.03em',
    color: '#101828',
  } as const;

  return (
    <div
      className="cc-root"
      style={{
        background: '#FBFCFD',
        color: '#101828',
        fontSize: 17,
        lineHeight: 1.7,
        paddingBottom: 80,
      }}
    >
      <style>{`
        .cc-root a { color: ${BLUE}; text-decoration: none; }
        .cc-root a:hover { color: ${BLUE2}; }
        .cc-wrap { max-width: 1120px; margin: 0 auto; padding: 0 28px; }
        .cc-h1 { margin: 16px 0 0; font-size: 42px; line-height: 1.24; letter-spacing: -0.035em; font-weight: 800; color: #101828; max-width: 20em; }
        .cc-nav a { color: #5B6474; padding: 8px 11px; border-radius: 10px; }
        .cc-nav a:hover { color: ${BLUE}; background: ${TINT}; }
        .cc-hero { display: grid; grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr); gap: 20px; align-items: start; }
        .cc-two { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 20px; }
        .cc-cards { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 14px; }
        .cc-lift { transition: transform .12s ease, box-shadow .12s ease, border-color .12s ease; }
        .cc-lift:hover { transform: translateY(-3px); border-color: ${EDGE}; box-shadow: 0 7px 0 #E6ECF4, 0 22px 34px -24px rgba(16,24,40,.5); }
        .cc-lift:active { transform: translateY(1px); }
        @media (max-width: 900px) {
          .cc-h1 { font-size: 32px; }
          .cc-hero, .cc-two { grid-template-columns: minmax(0,1fr); }
          .cc-nav { display: none; }
        }
        @media (max-width: 720px) {
          .cc-wrap { padding: 0 16px; }
          .cc-h1 { font-size: 27px; }
          .cc-cards { grid-template-columns: minmax(0,1fr); }
        }
      `}</style>

      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 40,
          background: 'rgba(251,252,253,.86)',
          backdropFilter: 'saturate(180%) blur(14px)',
          borderBottom: '1px solid #EAEDF2',
        }}
      >
        <div
          className="cc-wrap"
          style={{ height: 62, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}
        >
          <Link
            href={`/policy/${policyId}`}
            style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 18, fontWeight: 800, letterSpacing: '-0.03em', color: '#101828' }}
          >
            <span
              style={{
                display: 'grid',
                placeItems: 'center',
                width: 27,
                height: 27,
                borderRadius: 9,
                background: `linear-gradient(160deg, ${BLUE2}, ${NAVY})`,
                color: '#fff',
                fontSize: 14,
                fontWeight: 800,
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,.35), 0 3px 8px -3px rgba(20,57,92,.6)',
              }}
            >
              {IND.mark}
            </span>
            {IND.label}
          </Link>
          <nav className="cc-nav" style={{ display: 'flex', alignItems: 'center', gap: 2, fontSize: 14.5, fontWeight: 600 }}>
            <a href="#numbers">{IND.unit} 찾기</a>
            <a href="#connect">상담원 연결</a>
            <a href="#hours">영업시간</a>
            <a href="#faq">FAQ</a>
          </nav>
        </div>
      </header>

      <main id="top" className="cc-wrap">
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13.5, color: '#8D96A6', padding: '26px 0 0' }}>
          <Link href="/" style={{ color: '#8D96A6' }}>홈</Link>
          <span>›</span>
          <span style={{ color: '#5B6474', fontWeight: 600 }}>{IND.label}</span>
        </div>

        <section style={{ padding: '16px 0 0' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 7,
              padding: '5px 12px',
              borderRadius: 999,
              background: TINT,
              color: BLUE,
              fontSize: 12.5,
              fontWeight: 700,
              letterSpacing: '0.07em',
            }}
          >
            {IND.title} 고객센터 {companies.length}곳
          </div>
          <h1 className="cc-h1">{IND.title} 고객센터 전화번호 모음, 상담사 연결 번호까지</h1>
          <p style={{ margin: '18px 0 0', fontSize: 19, lineHeight: 1.68, color: '#5B6474', maxWidth: '43em' }}>
            {IND.word} {companies.length}곳의 대표번호와 상담사 연결 방법을 {IND.unit}별로 정리했습니다. {IND.unit}{eun(IND.unit)} 누르면 업무별 번호와 ARS 단축번호, 영업시간, 위치가 한 화면에 나옵니다.
          </p>
          <div style={{ margin: '14px 0 0', fontSize: 13.5, color: '#98A1B0' }}>
            정부지원사업 에디터 · {reviewed} 검수 ·{' '}
            {sources[0] ? <a href={sources[0].url} rel="noopener">{sources[0].name}</a> : `각 ${IND.word} 공식 고객센터 안내`}
          </div>
        </section>

        {/* 히어로 2단 — 상세의 대표번호 카드 자리에 허브는 검색 카드가 들어간다 */}
        <section className="cc-hero" style={{ margin: '30px 0 0' }}>
          <div
            style={{
              position: 'relative',
              overflow: 'hidden',
              background: `linear-gradient(158deg, #101828 0%, ${NAVY} 46%, ${BLUE2} 100%)`,
              borderRadius: 22,
              padding: 30,
              color: '#fff',
              boxShadow: '0 30px 56px -36px rgba(16,24,40,.8)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
              <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.08em', color: 'rgba(255,255,255,.72)' }}>
                {IND.title} 고객센터 번호 찾기
              </div>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 7,
                  padding: '5px 13px',
                  borderRadius: 999,
                  background: 'rgba(255,255,255,.16)',
                  border: '1px solid rgba(255,255,255,.28)',
                  fontSize: 12.5,
                  fontWeight: 700,
                }}
              >
                <span style={{ width: 7, height: 7, borderRadius: 999, background: openCount > 0 ? '#7BE3A8' : 'rgba(255,255,255,.55)' }} />
                {now && openCount > 0 ? `지금 상담 가능 ${openCount}곳` : '지금은 상담시간 밖'}
              </span>
            </div>

            <div style={{ margin: '14px 0 0', fontSize: 34, fontWeight: 800, letterSpacing: '-0.035em', lineHeight: 1.2 }}>
              {IND.unit} 이름만 넣으면 번호가 나옵니다
            </div>

            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={`${IND.unit} 이름이나 번호로 찾기 (예: ${companies[0]?.cc.name ?? ''})`}
              aria-label={`${IND.word} 이름이나 번호로 찾기`}
              style={{
                width: '100%',
                height: 56,
                margin: '20px 0 0',
                padding: '0 20px',
                borderRadius: 15,
                border: '1px solid rgba(255,255,255,.3)',
                background: 'rgba(255,255,255,.95)',
                fontSize: 17,
                color: '#101828',
                outline: 'none',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,.6), 0 8px 18px -12px rgba(0,0,0,.7)',
              }}
            />

            <div style={{ margin: '18px 0 0', padding: 16, borderRadius: 14, background: 'rgba(255,255,255,.12)', border: '1px solid rgba(255,255,255,.2)' }}>
              <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.05em', color: 'rgba(255,255,255,.78)' }}>바로 이동</div>
              <div style={{ margin: '11px 0 0', display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {[
                  { href: '#numbers', text: `${IND.unit}별 번호 ${companies.length}곳` },
                  { href: '#connect', text: '상담원 연결' },
                  { href: '#hours', text: '영업시간' },
                  { href: '#faq', text: '자주 묻는 질문' },
                ].map((t) => (
                  <a
                    key={t.href}
                    href={t.href}
                    style={{
                      padding: '8px 14px',
                      borderRadius: 999,
                      background: 'rgba(255,255,255,.16)',
                      border: '1px solid rgba(255,255,255,.26)',
                      color: '#fff',
                      fontSize: 14,
                      fontWeight: 700,
                    }}
                  >
                    {t.text}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ ...card, borderRadius: 20, padding: 26 }}>
              <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.07em', color: '#8D96A6' }}>지금 상담 가능 여부</div>
              <div style={{ margin: '10px 0 0', fontSize: 24, fontWeight: 800, letterSpacing: '-0.03em' }}>
                {now && openCount > 0 ? `${openCount}곳 연결됩니다` : '상담시간이 지났습니다'}
              </div>
              <p style={{ margin: '10px 0 0', fontSize: 15.5, lineHeight: 1.65, color: '#5B6474' }}>
                {now && openCount > 0
                  ? '평일 상담시간에 든 회사입니다. 사고접수는 시간과 관계없이 받는 곳이 많습니다.'
                  : '지금은 대부분 상담시간이 지났습니다. 사고접수는 대체로 24시간 받습니다.'}
              </p>
              <div style={{ margin: '18px 0 0', display: 'flex', flexDirection: 'column' }}>
                {[
                  { k: `수록 ${IND.unit}`, v: `${companies.length}곳` },
                  { k: '상담사 상담', v: '평일 주간이 기본' },
                  { k: '사고접수', v: '야간·공휴일에도 접수' },
                ].map((r) => (
                  <div
                    key={r.k}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, padding: '12px 2px', borderBottom: '1px solid #F1F3F7', fontSize: 15.5 }}
                  >
                    <span style={{ color: '#5B6474' }}>{r.k}</span>
                    <strong style={{ color: '#101828', fontWeight: 700, textAlign: 'right' }}>{r.v}</strong>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ borderRadius: 20, padding: 26, background: TINT, border: `1px solid ${EDGE}` }}>
              <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: '0.04em', color: BLUE }}>빠른 상담원 연결 팁</div>
              <p style={{ margin: '10px 0 0', fontSize: 15.5, lineHeight: 1.66, color: '#41506A' }}>
                대표번호는 {IND.unit}마다 하나로 통합돼 있어 찾기는 쉽습니다. 문제는 그다음입니다. 상담사를 만나려면 정해진 번호를 눌러야 하는데, 그 번호가 낮과 밤이 다릅니다.
              </p>
              <a href="#connect" style={{ margin: '14px 0 0', display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 700, color: BLUE }}>
                연결 순서 자세히 보기 →
              </a>
            </div>
          </div>
        </section>

        {/* 회사별 번호 — 상세의 id="numbers" 자리 */}
        <section id="numbers" style={{ margin: '56px 0 0', scrollMarginTop: 84 }}>
          <h2 style={h2}>{IND.title} 고객센터 전화번호 모음</h2>
          <p style={{ margin: '8px 0 0', fontSize: 16.5, color: '#5B6474' }}>
            번호를 누르면 바로 전화가 걸리고, {IND.unit} 이름을 누르면 상세 안내로 들어갑니다.
          </p>

          <div className="cc-cards" style={{ margin: '20px 0 0' }}>
            {list.map(({ slug, cc }) => {
              const open = isOpen(cc);
              /* 카드 칩·번호·버튼 전부 흰 글자거나 흰 바탕 위 글자다 — 읽히는 선까지 내린 색을 쓴다 */
              const B = readable(cc.brandColor || BLUE);
              const BD = darken(B, 0.2);
              return (
                <div
                  key={slug}
                  className="cc-lift"
                  style={{
                    background: '#fff',
                    border: '1px solid #EAEDF2',
                    borderRadius: 18,
                    padding: 20,
                    boxShadow: '0 4px 0 #EEF1F6, 0 16px 30px -26px rgba(16,24,40,.5)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 10,
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
                    <Link
                      href={`/policy/${policyId}/${slug}`}
                      style={{ display: 'flex', alignItems: 'center', gap: 9, fontSize: 17, fontWeight: 800, letterSpacing: '-0.02em', color: '#101828' }}
                    >
                      <span
                        style={{
                          display: 'grid',
                          placeItems: 'center',
                          width: 26,
                          height: 26,
                          borderRadius: 8,
                          background: B,
                          color: '#fff',
                          fontSize: 13,
                          fontWeight: 800,
                        }}
                      >
                        {cc.name.slice(0, 1)}
                      </span>
                      {cc.name}
                    </Link>
                    {open !== null && (
                      <span
                        style={{
                          padding: '4px 10px',
                          borderRadius: 999,
                          background: open ? '#E7F2EC' : '#F1F3F7',
                          color: open ? '#2E7D5B' : '#8D96A6',
                          fontSize: 12.5,
                          fontWeight: 700,
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {open ? '상담 가능' : '상담 종료'}
                      </span>
                    )}
                  </div>

                  <a
                    href={telHref(cc.main.tel)}
                    style={{ fontSize: 26, fontWeight: 800, letterSpacing: '-0.035em', color: B }}
                  >
                    {cc.main.tel}
                  </a>

                  <div style={{ fontSize: 13.5, color: '#8D96A6' }}>{cc.hours.weekday}</div>

                  <div style={{ display: 'flex', gap: 8, marginTop: 4, flexWrap: 'wrap' }}>
                    <a
                      href={telHref(cc.main.tel)}
                      style={{
                        flex: '1 1 120px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 42,
                        borderRadius: 12,
                        background: BD,
                        color: '#fff',
                        fontSize: 15,
                        fontWeight: 800,
                        whiteSpace: 'nowrap',
                      }}
                    >
                      전화 걸기
                    </a>
                    <Link
                      href={`/policy/${policyId}/${slug}`}
                      style={{
                        flex: '1 1 120px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 42,
                        borderRadius: 12,
                        background: '#F4F7FB',
                        border: '1px solid #E1E8F1',
                        color: BLUE,
                        fontSize: 15,
                        fontWeight: 800,
                        whiteSpace: 'nowrap',
                      }}
                    >
                      번호 전체보기
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {list.length === 0 && (
            <p style={{ margin: '20px 0 0', fontSize: 16, color: '#8D96A6' }}>
              찾으시는 {IND.unit}{ga(IND.unit)} 없습니다. {IND.unit} 이름을 다르게 넣어 보세요.
            </p>
          )}

          {qNumbers && (
            <div style={{ ...card, margin: '22px 0 0', borderRadius: 16, padding: '22px 24px', boxShadow: 'none' }}>
              <div style={{ fontSize: 17.5, fontWeight: 800, letterSpacing: '-0.02em', color: '#101828' }}>{qNumbers.q}</div>
              <p style={{ margin: '8px 0 0', fontSize: 16, lineHeight: 1.7, color: '#5B6474' }}>{qNumbers.intro}</p>
              <div style={{ margin: '10px 0 0', fontSize: 13.5, color: '#98A1B0' }}>{qNumbers.sourceNote}</div>
            </div>
          )}
        </section>

        {/* 상담원 연결 — 상세의 id="connect" 자리 */}
        <section id="connect" style={{ margin: '56px 0 0', scrollMarginTop: 84 }}>
          <h2 style={h2}>{IND.title} 고객센터 상담원(상담사) 연결 방법</h2>
          <p style={{ margin: '8px 0 0', fontSize: 16.5, color: '#5B6474' }}>
            {IND.unit}마다 번호가 다르고, 같은 {IND.unit}이라도 시간대에 따라 다릅니다. 아래 두 가지만 알고 걸면 헛걸음이 줄어듭니다.
          </p>

          <div className="cc-two" style={{ margin: '20px 0 0' }}>
            {[qApply, qNight].filter(Boolean).map((qa, i) => (
              <div key={i} style={{ ...card, borderRadius: 20, padding: 28, boxShadow: '0 18px 36px -32px rgba(16,24,40,.5)' }}>
                <div
                  style={{
                    display: 'grid',
                    placeItems: 'center',
                    width: 30,
                    height: 30,
                    borderRadius: 10,
                    background: `linear-gradient(160deg, ${BLUE2}, ${NAVY})`,
                    color: '#fff',
                    fontSize: 14,
                    fontWeight: 800,
                  }}
                >
                  {i + 1}
                </div>
                <h3 style={{ margin: '14px 0 0', fontSize: 20, fontWeight: 800, letterSpacing: '-0.025em', color: '#101828' }}>{qa.q}</h3>
                <p style={{ margin: '10px 0 0', fontSize: 16, lineHeight: 1.7, color: '#5B6474' }}>{qa.intro}</p>
                <div style={{ margin: '14px 0 0', fontSize: 13.5, color: '#98A1B0' }}>{qa.sourceNote}</div>
              </div>
            ))}
          </div>

          <div style={{ margin: '20px 0 0', padding: 20, borderRadius: 16, background: TINT, border: `1px solid ${EDGE}`, fontSize: 15.5, lineHeight: 1.66, color: '#41506A' }}>
            주간·야간 표는 {IND.unit}마다 다릅니다. 위 목록에서 {IND.unit}{eul(IND.unit)} 눌러 그 {IND.unit}의 표를 확인하세요.
          </div>
        </section>

        {/* 영업시간 2단 — 상세의 id="hours" 자리 */}
        <section id="hours" className="cc-two" style={{ margin: '56px 0 0', scrollMarginTop: 84 }}>
          <div style={{ ...card, borderRadius: 20, padding: 28, boxShadow: '0 18px 36px -32px rgba(16,24,40,.5)' }}>
            <h2 style={{ ...h2, fontSize: 22 }}>고객센터 영업시간·운영시간</h2>
            <p style={{ margin: '8px 0 0', fontSize: 15.5, color: '#5B6474' }}>
              운영시간은 바뀔 수 있으니 통화 전 공식 홈페이지에서 한 번 더 확인하세요.
            </p>
            <div style={{ margin: '18px 0 0', display: 'flex', flexDirection: 'column' }}>
              {[
                { k: '상담사 상담', v: '평일 주간이 기본' },
                { k: '사고접수', v: '야간·공휴일에도 접수' },
                { k: '야간·공휴일 ARS', v: '주간과 단축번호가 다름' },
                { k: `${IND.unit}별 정확한 시간`, v: `각 ${IND.unit} 페이지에서 확인` },
              ].map((r) => (
                <div
                  key={r.k}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, padding: '13px 2px', borderBottom: '1px solid #F1F3F7', fontSize: 16 }}
                >
                  <span style={{ color: '#5B6474' }}>{r.k}</span>
                  <strong style={{ color: '#101828', fontWeight: 700, textAlign: 'right' }}>{r.v}</strong>
                </div>
              ))}
            </div>
          </div>

          <div style={{ ...card, borderRadius: 20, padding: 28, boxShadow: '0 18px 36px -32px rgba(16,24,40,.5)' }}>
            <h2 style={{ ...h2, fontSize: 22 }}>{qFee ? qFee.q : '전화 요금은 누가 부담하나요?'}</h2>
            {qFee && <p style={{ margin: '10px 0 0', fontSize: 16, lineHeight: 1.7, color: '#5B6474' }}>{qFee.intro}</p>}
            {qLocation && (
              <>
                <h3 style={{ margin: '22px 0 0', fontSize: 17.5, fontWeight: 800, letterSpacing: '-0.02em', color: '#101828' }}>{qLocation.q}</h3>
                <p style={{ margin: '8px 0 0', fontSize: 16, lineHeight: 1.7, color: '#5B6474' }}>{qLocation.intro}</p>
              </>
            )}
            <div style={{ margin: '14px 0 0', fontSize: 13.5, color: '#98A1B0' }}>{qFee?.sourceNote}</div>
          </div>
        </section>

        {/* FAQ — 상세의 id="faq" 자리 */}
        <section id="faq" style={{ margin: '56px 0 0', scrollMarginTop: 84 }}>
          <h2 style={h2}>자주 묻는 질문</h2>
          <div style={{ margin: '20px 0 0', display: 'flex', flexDirection: 'column', gap: 12 }}>
            {faqList.map((f, i) => (
              <div key={i} style={{ ...card, borderRadius: 16, padding: '22px 24px', boxShadow: 'none' }}>
                <div style={{ fontSize: 17.5, fontWeight: 800, letterSpacing: '-0.02em', color: '#101828' }}>{f.q}</div>
                <div style={{ margin: '8px 0 0', fontSize: 16, lineHeight: 1.7, color: '#5B6474' }}>{f.a}</div>
                {f.sourceUrl && (
                  <a href={f.sourceUrl} rel="noopener" style={{ marginTop: 10, display: 'inline-block', fontSize: 13.5, color: '#8D96A6' }}>
                    출처: {f.source}
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 마감 배너 — 원본 HTML 의 네이비 그라데이션 자리 */}
        <section
          style={{
            margin: '56px 0 0',
            borderRadius: 22,
            padding: 34,
            background: `linear-gradient(150deg, #101828, ${NAVY})`,
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 24,
            flexWrap: 'wrap',
            boxShadow: '0 30px 56px -36px rgba(16,24,40,.8)',
          }}
        >
          <div>
            <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.08em', color: 'rgba(255,255,255,.65)' }}>지금 바로 연결</div>
            <div style={{ margin: '8px 0 0', fontSize: 26, fontWeight: 800, letterSpacing: '-0.03em' }}>
              {IND.word} {companies.length}곳 고객센터 번호
            </div>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a
              href="#numbers"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 9,
                height: 56,
                padding: '0 26px',
                borderRadius: 15,
                whiteSpace: 'nowrap',
                background: `linear-gradient(180deg, ${BLUE2}, ${BLUE})`,
                color: '#fff',
                fontSize: 17,
                fontWeight: 800,
                boxShadow: `0 6px 0 ${NAVY}, 0 16px 24px -14px rgba(0,0,0,.6), inset 0 1px 0 rgba(255,255,255,.45)`,
              }}
            >
              내 {IND.word} 번호 찾기
            </a>
            <a
              href="#connect"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 9,
                height: 56,
                padding: '0 26px',
                borderRadius: 15,
                whiteSpace: 'nowrap',
                background: 'rgba(255,255,255,.14)',
                border: '1px solid rgba(255,255,255,.35)',
                color: '#fff',
                fontSize: 17,
                fontWeight: 800,
                boxShadow: '0 6px 0 rgba(0,0,0,.35), inset 0 1px 0 rgba(255,255,255,.3)',
              }}
            >
              상담원 연결 순서 보기
            </a>
          </div>
        </section>

        {/* 출처·면책 — 배포 필수 표기 */}
        <section style={{ margin: '40px 0 0' }}>
          <h2 style={{ ...h2, fontSize: 18 }}>이 글의 출처</h2>
          <ul style={{ margin: '10px 0 0', padding: '0 0 0 18px', fontSize: 14.5, color: '#5B6474' }}>
            {sources.map((s, i) => (
              <li key={i} style={{ margin: '4px 0' }}>
                <a href={s.url} rel="noopener">{s.name}</a>
              </li>
            ))}
          </ul>
          <p style={{ margin: '18px 0 0', fontSize: 13.5, lineHeight: 1.7, color: '#98A1B0' }}>
            본 페이지는 각 {IND.word}{ga(IND.word)} 공개한 고객센터 안내를 정리한 것으로 해당 {IND.unit}{gwa(IND.unit)} 무관합니다. 번호·운영시간은 바뀔 수 있으니 최종 자격과 내용은 공식 채널에서 확인하세요. 정부지원사업 에디터 · {reviewed} 검수.
          </p>
        </section>
      </main>
    </div>
  );
}
