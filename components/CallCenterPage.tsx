'use client';

/* 보험사 고객센터 전용 화면.
 *
 * 이 파일은 Downloads/db-customer-center.html 원본을 그대로 옮긴 것이다.
 * 원본은 인라인 style 122곳 + {{ }} 자리표시자 구조였고, 자리표시자에
 * data/call-centers/{회사}.json 을 그대로 꽂았다. 디자인은 손대지 않는다.
 *
 * 원본과 다르게 한 것은 세 가지뿐이다.
 *   1) 모든 링크가 같은 창에서 열린다 (target="_blank" 전부 제거).
 *      새 창으로 나가면 그 순간 이탈이고 전면광고도 안 뜬다.
 *   2) @media 가 0개였다 — 모바일 브레이크포인트를 넣었다.
 *   3) 상태 판정(지금 상담 가능?)·번호 복사가 원본은 빈 껍데기였다 — 붙였다.
 *
 * 글(SpokeData)은 그대로 살아 있다. 이 컴포넌트는 화면일 뿐이라
 * 팩트시트·원문대조·버튼 게이트가 예전과 똑같이 심판한다.
 */

import { useEffect, useState } from 'react';
import Link from 'next/link';
import type { SpokeData } from '@/app/policy/[id]/[spoke]/SpokeClient';

/* ── 회사 JSON 모양 (data/call-centers/*.json) ───────────────── */
export interface CallCenterData {
  slug: string;
  name: string;
  /* 검색용 다른 이름 — 허브 검색창이 "디비손해보험" 으로도 찾게 해준다 */
  aliases?: string[];
  brandColor: string;
  official: string;
  sourceUrl: string;
  sourceName: string;
  verifiedAt: string;
  main: { label: string; tel: string };
  hours: { weekday: string; night: string; holiday: string; lunch?: string };
  callFee?: string;
  ars: { day: { key: string; what: string }[]; night: { key: string; what: string }[] };
  /* smsOnly: 전화가 안 되는 문자 전용 번호. 여기에 tel: 을 걸면 안 걸린다 */
  numbers: { label: string; tel: string; note?: string; smsOnly?: boolean }[];
  /* 본사 주소 — 없어도 페이지는 성립한다. 없으면 위치 카드가 지도 검색으로 바뀐다 */
  hq?: string;
  hqZip?: string;
}

/* ── 브랜드색 한 개로 그라데이션 3단 만들기 ──────────────────
   원본은 DB 초록 #056B36 / #009B4B / #22B573 이 박혀 있었다.
   회사마다 색이 다르니 brandColor 하나에서 뽑는다. */
function mix(hex: string, target: number, amt: number) {
  const h = hex.replace('#', '');
  const n = parseInt(h.length === 3 ? h.split('').map((c) => c + c).join('') : h, 16);
  const ch = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((v) =>
    Math.round(v + (target - v) * amt),
  );
  return '#' + ch.map((v) => v.toString(16).padStart(2, '0')).join('');
}
const darken = (hex: string, amt: number) => mix(hex, 0, amt);
const lighten = (hex: string, amt: number) => mix(hex, 255, amt);

/* CI 색을 그대로 쓰면 밝은 회사는 흰 글자가 묻힌다.
   KB 노랑 #FBAE14 에 흰 글자를 얹으면 대비 1.88 — 햇빛 아래 폰에서 안 읽힌다.
   색상(hue)은 건드리지 않고 읽힐 때까지만 어둡게 내린다. 삼성 남색처럼 이미 어두운 곳은 그대로 나온다. */
function relLum(hex: string) {
  const n = parseInt(hex.slice(1), 16);
  const c = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((v) => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
}
export function readable(hex: string, ratio = 4.5) {
  let out = hex;
  for (let i = 0; i < 14; i++) {
    if (1.05 / (relLum(out) + 0.05) >= ratio) break;
    out = darken(hex, 0.07 * (i + 1));
  }
  return out;
}

const telHref = (t: string) => `tel:${String(t).replace(/[^0-9+]/g, '')}`;

/* 상담 가능 시간 판정.
   "월~금요일 09시 ~ 18시" 같은 한글 문장에서 시각 두 개를 뽑는다.
   못 뽑으면 판정을 포기하고 시간표만 보여준다 — 틀린 판정을 띄우느니 안 띄운다. */
function parseWeekdayHours(s: string): { from: number; to: number } | null {
  /* 회사마다 표기가 다르다 — DB "09시 ~ 18시", 삼성화재 "09:00~18:00".
     한 쪽만 읽으면 나머지 회사는 판정이 조용히 죽는다(에러 없이 시간표만 나온다). */
  const m = String(s).match(/(\d{1,2})\s*(?::\d{2}|시)/g);
  if (!m || m.length < 2) return null;
  const from = parseInt(m[0], 10);
  const to = parseInt(m[1], 10);
  if (isNaN(from) || isNaN(to) || to <= from) return null;
  return { from, to };
}

export default function CallCenterPage({
  cc,
  spoke,
  policyId,
  policyTitle,
  hubHref,
  siblings = [],
}: {
  cc: CallCenterData;
  spoke: SpokeData;
  policyId: string;
  policyTitle: string;
  hubHref: string;
  /* 같은 업종 다른 회사 — 내부 이동을 만드는 자리다(전면광고가 여기서 뜬다) */
  siblings?: { slug: string; cc: { name: string; main: { tel: string }; brandColor: string } }[];
}) {
  const [copied, setCopied] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 720px)');
    setMobile(mq.matches);
    const h = (e: MediaQueryListEvent) => setMobile(e.matches);
    mq.addEventListener('change', h);
    setNow(new Date());
    return () => mq.removeEventListener('change', h);
  }, []);

  /* 회사색은 행동 버튼에만 쓴다. 나머지는 원본 템플릿의 고정 팔레트 —
     브랜드색을 전체에 뿌리면 회사마다 화면이 통째로 물들어 조잡해진다. */
  const NAVY = '#14395C';   // 번호·숫자
  const BLUE = '#1F4E79';   // 링크·머리표
  const BLUE2 = '#2A6099';  // 호버·그라데이션 위쪽
  const TINT = '#EEF3F9';   // 옅은 배경
  const EDGE = '#C9D8E8';   // 호버 테두리

  /* 히어로 카드·버튼은 이 색 위에 흰 글자를 얹는다. 그래서 읽히는 선까지 내린 값을 쓴다.
     회사 고유색은 유지된다 — KB는 여전히 노랑 계열, 현대해상은 여전히 주황 계열이다. */
  const BRAND = readable(cc.brandColor || '#1F4E79');
  const B_DARK = darken(BRAND, 0.42);
  const B_MID = BRAND;
  const B_LIGHT = lighten(BRAND, 0.22);
  const B_TINT = lighten(BRAND, 0.9);
  const B_EDGE = lighten(BRAND, 0.62);

  const TEL = telHref(cc.main.tel);
  /* ARS 단축번호를 공개하지 않는 회사가 있다(구성도가 이미지이거나 메뉴 이름만 있는 곳).
     번호를 순서로 추정하면 사람이 엉뚱한 메뉴를 누른다. 없으면 없다고 쓴다. */
  const hasArs = cc.ars.day.length > 0;
  const agent = cc.ars.day.find((x) => /상담사|상담원/.test(x.what));
  const agentKey = agent ? agent.key : '0';
  const wh = parseWeekdayHours(cc.hours.weekday);

  /* 지금 상담 가능한가 — 서버 렌더 때는 판정하지 않는다(하이드레이션 불일치 방지) */
  const open =
    now && wh
      ? now.getDay() >= 1 && now.getDay() <= 5 && now.getHours() >= wh.from && now.getHours() < wh.to
      : null;
  const statusLabel = open === null ? cc.hours.weekday : open ? '상담 가능 시간' : '상담 시간 종료';
  const statusDetail =
    open === null
      ? '상담사 연결은 평일 상담시간에만 됩니다. 그 밖의 시간은 사고접수·긴급출동만 돌아갑니다.'
      : open
        ? hasArs
          ? `지금 전화하면 ARS 에서 ${agentKey}번을 눌러 상담사와 연결됩니다.`
          : '지금 전화하면 상담사 연결이 가능합니다.'
        : `지금은 사고접수·긴급출동만 연결됩니다. 일반 상담은 ${cc.hours.weekday}에 가능합니다.`;

  const copy = () => {
    try {
      navigator.clipboard?.writeText(cc.main.tel);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* 클립보드 막힌 브라우저 — 번호는 화면에 그대로 보인다 */
    }
  };

  const steps = [
    { no: '1', title: `${cc.main.tel} 연결`, body: '휴대전화·일반전화 모두 같은 번호로 들어갑니다.' },
    { no: '2', title: '본인 확인', body: '계약자 주민번호·증권번호를 미리 꺼내 두면 절차가 짧아집니다.' },
    { no: '3', title: 'ARS 끝까지 듣기', body: '상담사 연결은 안내의 마지막에 나오는 경우가 많습니다.' },
    hasArs
      ? { no: '4', title: `${agentKey}번 상담사 연결`, body: `${agentKey}번을 누르면 순번 대기 후 상담이 시작됩니다.` }
      : { no: '4', title: '상담사 연결', body: '공식 안내에 단축번호가 없어, 안내 음성에서 상담사 연결 항목을 고르시면 됩니다.' },
  ];

  /* 점심시간은 공식 안내에 있을 때만 보여준다.
     원본 템플릿은 "12:00–13:00 지연"을 박아뒀는데 DB 공식 안내에는 그런 말이 없다.
     검색은 많이 되는 말이라 넣고 싶지만, 없는 걸 지어내면 그 순간 이 글은 못 쓴다. */
  const hourRows = [
    { k: '평일 상담', v: cc.hours.weekday },
    { k: '평일 야간', v: cc.hours.night },
    { k: '공휴일', v: cc.hours.holiday },
    ...(cc.hours.lunch ? [{ k: '점심시간', v: cc.hours.lunch }] : []),
    ...(hasArs ? [{ k: '상담사 연결', v: `ARS ${agentKey}번` }] : []),
  ];

  /* 지역별 — 지점 주소는 저장하지 않는다. 수시로 바뀌고 우리가 확인할 수 없다.
     대신 그 지역 지점을 지도에서 바로 띄운다. "대구·부산·인천 고객센터"로
     들어오는 사람이 빈손으로 나가지 않게. */
  const REGIONS = ['서울', '부산', '대구', '인천', '광주', '대전', '울산', '수원'];

  /* 지도 — 회사명으로 검색하면 전국 지점 목록이 뜬다.
     본사 주소로 걸면 그 건물에 핀이 바로 꽂힌다(괄호 안 건물명은 뺀다). */
  const map = `https://map.naver.com/p/search/${encodeURIComponent(cc.hq ? cc.hq.replace(/\(.*$/, '').trim() : cc.name)}`;
  const reviewed = cc.verifiedAt;

  /* 서론 — heroHook 대신 description 을 쓴다.
     heroHook 은 "그럼 지금 바로 거시는 게 빠르겠죠" 로 버튼까지 다리를 놓는 문장인데,
     이 화면은 바로 아래가 대표번호 카드라 다리가 필요 없다.
     description 은 타이틀 내용을 그대로 편 문장이라 검색어로도 잡힌다. */
  const lead = spoke.description;

  /* 스타일 — 원본 인라인을 그대로 두되, 반응형·호버만 클래스로 뺐다 */
  const card: React.CSSProperties = {
    background: '#fff',
    border: '1px solid #EAEDF2',
    borderRadius: 18,
    boxShadow: '0 4px 0 #EEF1F6',
  };
  const h2: React.CSSProperties = {
    margin: 0,
    fontSize: 27,
    fontWeight: 800,
    letterSpacing: '-0.03em',
    color: '#101828',
  };
  const eyebrow: React.CSSProperties = {
    fontSize: 12.5,
    fontWeight: 700,
    letterSpacing: '0.08em',
    color: 'rgba(255,255,255,.78)',
  };

  return (
    <div
      className="cc-root"
      style={{
        background: '#FBFCFD',
        minHeight: '100vh',
        color: '#48505F',
        fontSize: 17,
        lineHeight: 1.7,
        paddingBottom: 100,
      }}
    >
      <style>{`
        .cc-root a { color: ${BLUE}; text-decoration: none; }
        .cc-root a:hover { color: ${BLUE2}; }
        @keyframes ccPulse { 0%,100% { opacity: 1; transform: scale(1); } 50% { opacity: .25; transform: scale(.65); } }
        .cc-pulse { animation: ccPulse 1.9s ease-in-out infinite; }
        .cc-lift { transition: transform .12s ease, box-shadow .12s ease, border-color .12s ease; }
        .cc-lift:hover { transform: translateY(-3px); border-color: ${EDGE}; }
        .cc-lift:active { transform: translateY(1px); }
        .cc-chip:hover { background: rgba(255,255,255,.3) !important; color: #fff !important; }
        .cc-nav a { padding: 8px 12px; border-radius: 9px; color: #5B6474; }
        .cc-nav a:hover { background: ${TINT}; color: ${BLUE}; }
        .cc-hero { display: grid; grid-template-columns: minmax(0,1.4fr) minmax(0,1fr); gap: 20px; align-items: start; }
        .cc-two { display: grid; grid-template-columns: minmax(0,1fr) minmax(0,1fr); gap: 20px; }
        .cc-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px,1fr)); gap: 14px; }
        .cc-steps { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px,1fr)); gap: 14px; }
        .cc-wrap { max-width: 1120px; margin: 0 auto; padding: 0 28px; }
        .cc-h1 { margin: 16px 0 0; font-size: 42px; line-height: 1.24; letter-spacing: -0.035em; font-weight: 800; color: #101828; max-width: 20em; }
        .cc-big { font-size: 64px; line-height: 1.02; font-weight: 800; letter-spacing: -0.045em; color: #fff; }
        .cc-heroCard { border-radius: 24px; padding: 34px; }
        @media (max-width: 900px) {
          .cc-hero, .cc-two { grid-template-columns: minmax(0,1fr); }
          .cc-h1 { font-size: 32px; }
          .cc-big { font-size: 48px; }
        }
        @media (max-width: 720px) {
          .cc-wrap { padding: 0 16px; }
          .cc-nav { display: none; }
          .cc-h1 { font-size: 27px; }
          .cc-big { font-size: 40px; }
          .cc-heroCard { padding: 22px; border-radius: 18px; }
          .cc-grid { grid-template-columns: minmax(0,1fr); }
        }
      `}</style>

      {/* 헤더 — 로고와 브레드크럼은 내부 이동이다. 여기서 전면광고가 뜬다 */}
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
            href={hubHref}
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
              {cc.name.slice(0, 1)}
            </span>
            보험 고객센터
          </Link>
          <nav className="cc-nav" style={{ display: 'flex', alignItems: 'center', gap: 2, fontSize: 14.5, fontWeight: 600 }}>
            <a href="#numbers">번호안내</a>
            <a href="#connect">상담원 연결</a>
            <a href="#hours">영업시간</a>
            <a href="#location">위치</a>
            <a href="#faq">FAQ</a>
          </nav>
        </div>
      </header>

      <main id="top" className="cc-wrap">
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13.5, color: '#8D96A6', padding: '26px 0 0', flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: '#8D96A6' }}>홈</Link>
          <span>›</span>
          <Link href={hubHref} style={{ color: '#8D96A6' }}>{policyTitle}</Link>
          <span>›</span>
          <span style={{ color: '#5B6474', fontWeight: 600 }}>{cc.name}</span>
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
            {cc.name} 고객센터
          </div>
          <h1 className="cc-h1">{spoke.h1}</h1>
          <p style={{ margin: '18px 0 0', fontSize: 19, lineHeight: 1.68, color: '#5B6474', maxWidth: '43em' }}>
            {lead}
          </p>
          <div style={{ margin: '14px 0 0', fontSize: 13.5, color: '#98A1B0' }}>
            정부지원사업 에디터 · {reviewed} 검수 ·{' '}
            <a href={cc.sourceUrl} rel="noopener">{cc.sourceName}</a>
          </div>
        </section>

        {/* 대표번호 카드 + 사이드 2장 */}
        <section className="cc-hero" style={{ margin: '30px 0 0' }}>
          <div
            className="cc-heroCard"
            style={{
              position: 'relative',
              overflow: 'hidden',
              background: `linear-gradient(158deg, ${B_DARK} 0%, ${B_MID} 46%, ${B_LIGHT} 100%)`,
              color: '#fff',
              boxShadow: `0 30px 60px -34px ${B_DARK}a6, inset 0 1px 0 rgba(255,255,255,.22)`,
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: -110,
                right: -90,
                width: 300,
                height: 300,
                borderRadius: 999,
                background: 'radial-gradient(circle, rgba(255,255,255,.16), transparent 70%)',
              }}
            />
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
              <div style={eyebrow}>{cc.name} 고객센터 대표 전화번호</div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 7,
                  padding: '5px 12px',
                  borderRadius: 999,
                  background: 'rgba(255,255,255,.16)',
                  color: '#fff',
                  fontSize: 13,
                  fontWeight: 700,
                }}
              >
                <span className="cc-pulse" style={{ width: 7, height: 7, borderRadius: 999, background: '#fff' }} />
                {statusLabel}
              </div>
            </div>

            {/* color 를 인라인으로 박는다 — .cc-root a 규칙이 클래스보다 세서
                안 박으면 초록 카드 위에 초록 글씨가 된다 */}
            <a href={TEL} className="cc-big" style={{ position: 'relative', display: 'block', margin: '18px 0 0', color: '#fff' }}>
              {cc.main.tel}
            </a>
            <div style={{ position: 'relative', margin: '12px 0 0', fontSize: 13.5, color: 'rgba(255,255,255,.7)' }}>
              {cc.main.label} · {cc.callFee ?? '통화료는 발신자 요금제 기준으로 부과됩니다.'}
            </div>

            <div style={{ position: 'relative', margin: '26px 0 0', display: 'flex', flexWrap: 'wrap', gap: 14 }}>
              <a
                href={TEL}
                style={{
                  flex: '1 1 210px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 10,
                  height: 60,
                  padding: '0 24px',
                  borderRadius: 16,
                  whiteSpace: 'nowrap',
                  background: `linear-gradient(180deg, #FFFFFF, ${lighten(BRAND, 0.88)})`,
                  color: B_DARK,
                  fontSize: 18,
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                  boxShadow: `0 6px 0 ${lighten(BRAND, 0.55)}, 0 18px 26px -14px rgba(0,0,0,.4), inset 0 1px 0 #fff`,
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
                </svg>
                대표번호 전화 걸기
              </a>
              <a
                href={cc.official}
                rel="noopener"
                style={{
                  flex: '1 1 190px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 10,
                  height: 60,
                  padding: '0 24px',
                  borderRadius: 16,
                  whiteSpace: 'nowrap',
                  background: '#fff',
                  border: `1.5px solid ${lighten(BRAND, 0.6)}`,
                  color: B_DARK,
                  fontSize: 18,
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                  boxShadow: `0 6px 0 ${lighten(BRAND, 0.55)}, 0 16px 24px -16px rgba(0,0,0,.35), inset 0 1px 0 #fff`,
                }}
              >
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 3h6v6" />
                  <path d="M10 14 21 3" />
                  <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
                </svg>
                공식 홈페이지
              </a>
            </div>

            <button
              onClick={copy}
              style={{
                position: 'relative',
                margin: '14px 0 0',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                height: 44,
                padding: '0 18px',
                borderRadius: 12,
                background: 'rgba(255,255,255,.1)',
                border: '1px dashed rgba(255,255,255,.45)',
                color: 'rgba(255,255,255,.9)',
                fontFamily: 'inherit',
                fontSize: 14.5,
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              {copied ? '복사 완료' : '번호 복사하기'}
            </button>

            {/* ARS — 원본은 4개짜리 예시였다. 우리는 공식 안내의 주간 전부를 넣는다 */}
            {hasArs && <div
              style={{
                position: 'relative',
                margin: '22px 0 0',
                padding: '18px 20px',
                borderRadius: 16,
                background: 'rgba(255,255,255,.13)',
                border: '1px solid rgba(255,255,255,.28)',
              }}
            >
              <div style={eyebrow}>ARS 바로 누르기 · 평일 주간</div>
              <div style={{ margin: '12px 0 0', display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {cc.ars.day.map((a) => (
                  <a
                    key={`d${a.key}`}
                    href={TEL}
                    className="cc-chip"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 7,
                      padding: '8px 13px',
                      borderRadius: 999,
                      background: 'rgba(255,255,255,.16)',
                      border: '1px solid rgba(255,255,255,.28)',
                      fontSize: 14,
                      fontWeight: 700,
                      color: '#fff',
                    }}
                  >
                    <span style={{ display: 'grid', placeItems: 'center', width: 20, height: 20, borderRadius: 999, background: '#fff', color: B_DARK, fontSize: 12, fontWeight: 800 }}>
                      {a.key}
                    </span>
                    {a.what}
                  </a>
                ))}
              </div>

              {cc.ars.night.length > 0 && (
                <>
                  <div style={{ ...eyebrow, margin: '18px 0 0' }}>야간·공휴일 ARS</div>
                  <div style={{ margin: '12px 0 0', display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {cc.ars.night.map((a) => (
                      <a
                        key={`n${a.key}`}
                        href={TEL}
                        className="cc-chip"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 7,
                          padding: '8px 13px',
                          borderRadius: 999,
                          background: 'rgba(255,255,255,.08)',
                          border: '1px dashed rgba(255,255,255,.35)',
                          fontSize: 14,
                          fontWeight: 700,
                          color: '#fff',
                        }}
                      >
                        <span style={{ display: 'grid', placeItems: 'center', width: 20, height: 20, borderRadius: 999, background: 'rgba(255,255,255,.85)', color: B_DARK, fontSize: 12, fontWeight: 800 }}>
                          {a.key}
                        </span>
                        {a.what}
                      </a>
                    ))}
                  </div>
                </>
              )}
            </div>}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ ...card, borderRadius: 20, padding: 24, boxShadow: '0 18px 36px -30px rgba(16,24,40,.45)' }}>
              <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.08em', color: '#8D96A6' }}>지금 상담 가능 여부</div>
              <div style={{ margin: '10px 0 0', fontSize: 24, fontWeight: 800, letterSpacing: '-0.03em', color: '#101828' }}>{statusLabel}</div>
              <div style={{ margin: '6px 0 0', fontSize: 14.5, color: '#5B6474' }}>{statusDetail}</div>
              <div style={{ margin: '18px 0 0', display: 'flex', flexDirection: 'column', gap: 10, fontSize: 15 }}>
                {hourRows.map((r, i) => (
                  <div
                    key={r.k}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      gap: 12,
                      paddingBottom: i === hourRows.length - 1 ? 0 : 10,
                      borderBottom: i === hourRows.length - 1 ? 'none' : '1px solid #F1F3F7',
                    }}
                  >
                    <span style={{ color: '#8D96A6' }}>{r.k}</span>
                    <strong style={{ color: '#101828', fontWeight: 700, textAlign: 'right' }}>{r.v}</strong>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ flex: 1, background: `linear-gradient(180deg, #F5F8FC, ${TINT})`, border: '1px solid #E3E9F2', borderRadius: 20, padding: 24 }}>
              <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.08em', color: BLUE }}>빠른 상담원 연결 팁</div>
              <div style={{ margin: '12px 0 0', fontSize: 15.5, lineHeight: 1.65, color: '#48505F' }}>
                {hasArs ? (
                  <>대표번호 연결 후 ARS 안내를 끝까지 듣고 <strong style={{ color: '#101828' }}>{agentKey}번(상담사 연결)</strong>을 누르면 순번 대기 후 상담이 시작됩니다.</>
                ) : (
                  <>공식 안내에 ARS 단축번호가 공개돼 있지 않습니다. 안내 음성을 끝까지 듣고 상담사 연결 항목을 고르시면 됩니다.</>
                )} 문의를 한 문장으로 정리해 두면 부서 이관 횟수를 줄일 수 있습니다.
              </div>
              <a href="#connect" style={{ margin: '16px 0 0', display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 15, fontWeight: 700, color: BLUE }}>
                연결 순서 자세히 보기 →
              </a>
            </div>
          </div>
        </section>

        {/* 번호 모음 */}
        <section id="numbers" style={{ margin: '56px 0 0', scrollMarginTop: 84 }}>
          <h2 style={h2}>{cc.name} 고객센터 전화번호 모음</h2>
          <p style={{ margin: '8px 0 0', fontSize: 16.5, color: '#5B6474' }}>
            용건에 맞는 번호로 바로 걸면 상담 연결이 빨라집니다. 카드를 누르면 전화가 걸립니다.
          </p>
          <div className="cc-grid" style={{ margin: '20px 0 0' }}>
            {cc.numbers.map((n) => {
              const smsOnly = n.smsOnly === true || /문자/.test(n.label) || /문자/.test(n.note ?? '');
              return (
                <a
                  key={n.label + n.tel}
                  href={smsOnly ? `sms:${n.tel.replace(/-/g, '')}` : telHref(n.tel)}
                  className="cc-lift"
                  style={{ ...card, display: 'flex', flexDirection: 'column', gap: 6, padding: 20, boxShadow: '0 4px 0 #EEF1F6, 0 16px 30px -26px rgba(16,24,40,.5)' }}
                >
                  <span style={{ fontSize: 14, fontWeight: 700, color: '#5B6474' }}>{n.label}</span>
                  <span style={{ fontSize: 26, fontWeight: 800, letterSpacing: '-0.035em', color: NAVY }}>{n.tel}</span>
                  <span style={{ fontSize: 13.5, color: '#8D96A6' }}>{n.note ?? (smsOnly ? '문자 전용' : ' ')}</span>
                </a>
              );
            })}
          </div>
          <p style={{ margin: '12px 0 0', fontSize: 13.5, color: '#98A1B0' }}>
            * 출처: <a href={cc.sourceUrl} rel="noopener">{cc.sourceName}</a> ({reviewed} 확인)
          </p>
        </section>

        {/* 상담원 연결 방법 */}
        <section id="connect" style={{ margin: '56px 0 0', scrollMarginTop: 84 }}>
          <h2 style={h2}>{cc.name} 고객센터 상담원(상담사) 연결 방법</h2>
          <p style={{ margin: '8px 0 0', fontSize: 16.5, color: '#5B6474' }}>
            {cc.main.tel} 연결 후 아래 순서대로 진행하면 대기 시간을 줄일 수 있습니다.
          </p>
          <div style={{ margin: '18px 0 0', display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <a
              href={TEL}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 9,
                height: 54,
                padding: '0 24px',
                borderRadius: 15,
                whiteSpace: 'nowrap',
                background: `linear-gradient(180deg, ${B_LIGHT}, ${B_MID})`,
                color: '#fff',
                fontSize: 17,
                fontWeight: 800,
                boxShadow: `0 5px 0 ${B_DARK}, 0 14px 22px -14px ${B_DARK}cc, inset 0 1px 0 rgba(255,255,255,.4)`,
              }}
            >
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
              </svg>
              {cc.main.tel} 상담원 연결하기
            </a>
            <Link
              href={hubHref}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                height: 54,
                padding: '0 22px',
                borderRadius: 15,
                whiteSpace: 'nowrap',
                background: '#fff',
                border: '1.5px solid #E1E8F1',
                color: BLUE,
                fontSize: 17,
                fontWeight: 800,
                boxShadow: '0 4px 0 #E8EDF4',
              }}
            >
              다른 보험사 번호 찾기
            </Link>
          </div>
          <div className="cc-steps" style={{ margin: '20px 0 0' }}>
            {steps.map((s) => (
              <div key={s.no} style={{ ...card, position: 'relative', padding: '24px 22px' }}>
                <div
                  style={{
                    display: 'grid',
                    placeItems: 'center',
                    width: 34,
                    height: 34,
                    borderRadius: 11,
                    background: `linear-gradient(160deg, ${BLUE2}, ${NAVY})`,
                    color: '#fff',
                    fontSize: 15,
                    fontWeight: 800,
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,.3), 0 6px 12px -6px rgba(20,57,92,.7)',
                  }}
                >
                  {s.no}
                </div>
                <div style={{ margin: '14px 0 0', fontSize: 17, fontWeight: 800, letterSpacing: '-0.02em', color: '#101828' }}>{s.title}</div>
                <div style={{ margin: '6px 0 0', fontSize: 15, lineHeight: 1.6, color: '#5B6474' }}>{s.body}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 영업시간 + 자주 찾는 문의 */}
        <section id="hours" className="cc-two" style={{ margin: '56px 0 0', scrollMarginTop: 84 }}>
          <div style={{ ...card, borderRadius: 20, padding: 28, boxShadow: '0 18px 36px -32px rgba(16,24,40,.5)' }}>
            <h2 style={{ ...h2, fontSize: 22 }}>고객센터 영업시간·운영시간</h2>
            <p style={{ margin: '8px 0 0', fontSize: 15.5, color: '#5B6474' }}>
              운영시간은 바뀔 수 있으니 통화 전 공식 홈페이지에서 한 번 더 확인하세요.
            </p>
            <div style={{ margin: '18px 0 0', display: 'flex', flexDirection: 'column' }}>
              {hourRows.map((r) => (
                <div key={r.k} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, padding: '13px 2px', borderBottom: '1px solid #F1F3F7', fontSize: 16 }}>
                  <span style={{ color: '#5B6474' }}>{r.k}</span>
                  <strong style={{ color: '#101828', fontWeight: 700, textAlign: 'right' }}>{r.v}</strong>
                </div>
              ))}
            </div>
          </div>
          <div style={{ ...card, borderRadius: 20, padding: 28, boxShadow: '0 18px 36px -32px rgba(16,24,40,.5)' }}>
            <h2 style={{ ...h2, fontSize: 22 }}>자주 찾는 문의</h2>
            <p style={{ margin: '8px 0 0', fontSize: 15.5, color: '#5B6474' }}>
              {hasArs ? `아래 유형은 대표번호(${cc.main.tel}) 연결 후 ARS 안내에 따라 선택하세요.` : `용건별 번호가 따로 있습니다. 대표번호(${cc.main.tel})로 걸어도 연결됩니다.`}
            </p>
            <div style={{ margin: '18px 0 0', display: 'flex', flexWrap: 'wrap', gap: 9 }}>
              {(hasArs
                ? cc.ars.day.map((a) => ({ key: a.key, text: `${a.key}번 ${a.what}` }))
                : cc.numbers.map((n) => ({ key: n.tel, text: n.label }))
              ).map((a) => (
                <span
                  key={`t${a.key}`}
                  style={{ padding: '9px 15px', borderRadius: 999, background: '#F4F7FB', border: '1px solid #E6EBF3', fontSize: 14.5, fontWeight: 600, color: '#48505F' }}
                >
                  {a.text}
                </span>
              ))}
            </div>
            <div style={{ margin: '22px 0 0', padding: 18, borderRadius: 14, background: TINT, fontSize: 15, lineHeight: 1.6, color: BLUE }}>
              {cc.hours.night} 과 {cc.hours.holiday} 에는 사고접수·긴급출동 위주로 돌아갑니다. 계약 조회·변경과 보험금 청구는 평일 상담시간에 거는 편이 빠릅니다.
            </div>
          </div>
        </section>

        {/* 위치 */}
        <section id="location" style={{ margin: '56px 0 0', scrollMarginTop: 84 }}>
          <h2 style={h2}>{cc.name} 고객센터 위치</h2>
          <p style={{ margin: '8px 0 0', fontSize: 16.5, color: '#5B6474' }}>
            대부분의 업무는 전화·앱으로 끝납니다. 방문이 필요하면 아래에서 위치를 확인하세요.
          </p>
          <div className="cc-grid" style={{ margin: '20px 0 0' }}>
            <div style={{ ...card, padding: 24 }}>
              <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.07em', color: BLUE }}>{cc.hq ? '본사' : '가까운 지점'}</div>
              <div style={{ margin: '10px 0 0', fontSize: 18, fontWeight: 800, letterSpacing: '-0.02em', color: '#101828' }}>{cc.name}</div>
              <div style={{ margin: '6px 0 0', fontSize: 15, lineHeight: 1.6, color: '#5B6474' }}>
                {cc.hq
                  ? `${cc.hq}${cc.hqZip ? ` (우 ${cc.hqZip})` : ''}`
                  : '지점·서비스망 위치는 수시로 바뀌어 적어두지 않습니다. 지도에서 지금 운영 중인 곳을 확인하세요.'}
              </div>
              <a
                href={map}
                rel="noopener"
                style={{ margin: '14px 0 0', display: 'inline-flex', alignItems: 'center', gap: 6, height: 40, padding: '0 14px', borderRadius: 11, background: '#F4F7FB', border: '1px solid #E1E8F1', fontSize: 14.5, fontWeight: 700, color: BLUE, boxShadow: '0 3px 0 #E4EAF3' }}
              >
                지도에서 열기 ↗
              </a>
            </div>
            <div style={{ ...card, padding: 24 }}>
              <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.07em', color: BLUE }}>비대면</div>
              <div style={{ margin: '10px 0 0', fontSize: 18, fontWeight: 800, letterSpacing: '-0.02em', color: '#101828' }}>공식 홈페이지·앱</div>
              <div style={{ margin: '6px 0 0', fontSize: 15, lineHeight: 1.6, color: '#5B6474' }}>
                지점 위치와 방문 상담 가능 여부는 공식 홈페이지 안내에서 확인하세요.
              </div>
              <a
                href={cc.official}
                rel="noopener"
                style={{ margin: '14px 0 0', display: 'inline-flex', alignItems: 'center', gap: 6, height: 40, padding: '0 14px', borderRadius: 11, background: '#F4F7FB', border: '1px solid #E1E8F1', fontSize: 14.5, fontWeight: 700, color: BLUE, boxShadow: '0 3px 0 #E4EAF3' }}
              >
                공식 홈페이지 열기 ↗
              </a>
            </div>
          </div>
        </section>

        {/* 지역별 — 대구·부산·인천 고객센터로 들어오는 검색을 받는다 */}
        <section id="regions" style={{ margin: '40px 0 0', scrollMarginTop: 84 }}>
          <h2 style={{ ...h2, fontSize: 22 }}>{cc.name} 고객센터 지역별로 찾기</h2>
          <p style={{ margin: '8px 0 0', fontSize: 15.5, color: '#5B6474' }}>
            대구·부산·인천처럼 지역 고객센터를 찾으신다면, 지점·서비스망 위치는 수시로 바뀌어 여기 적어두지 않습니다. 지역을 누르면 지금 열려 있는 지점이 지도에 표시됩니다. 전화 상담은 지역과 관계없이 {cc.main.tel} 한 번호로 연결됩니다.
          </p>
          <div style={{ margin: '16px 0 0', display: 'flex', flexWrap: 'wrap', gap: 9 }}>
            {REGIONS.map((r) => (
              <a
                key={r}
                href={`https://map.naver.com/p/search/${encodeURIComponent(`${cc.name} ${r}`)}`}
                rel="noopener"
                className="cc-lift"
                style={{
                  padding: '9px 15px',
                  borderRadius: 999,
                  background: '#fff',
                  border: '1px solid #E6EBF3',
                  fontSize: 14.5,
                  fontWeight: 700,
                  color: BLUE,
                }}
              >
                {r} 지점 지도 ↗
              </a>
            ))}
          </div>
        </section>

        {/* FAQ — 글(SpokeData)의 faqData 를 그대로 쓴다 */}
        <section id="faq" style={{ margin: '56px 0 0', scrollMarginTop: 84 }}>
          <h2 style={h2}>자주 묻는 질문</h2>
          <div style={{ margin: '20px 0 0', display: 'flex', flexDirection: 'column', gap: 12 }}>
            {spoke.faqData.map((f, i) => (
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

        {/* 같은 업종 다른 회사 — 여기가 내부 이동을 만든다.
            전에는 회사 페이지에서 내부로 갈 곳이 허브 하나뿐이었다. 외부 링크는 12개인데. */}
        {siblings.length > 0 && (
          <section id="others" style={{ margin: '56px 0 0', scrollMarginTop: 84 }}>
            <h2 style={h2}>다른 회사 고객센터 번호도 필요하신가요?</h2>
            <p style={{ margin: '8px 0 0', fontSize: 16.5, color: '#5B6474' }}>
              한 곳만 쓰는 경우는 드뭅니다. 자주 찾는 곳을 먼저 걸어 뒀습니다.
            </p>
            <div className="cc-grid" style={{ margin: '20px 0 0' }}>
              {siblings.map((s) => (
                <Link
                  key={s.slug}
                  href={`/policy/${policyId}/${s.slug}`}
                  className="cc-lift"
                  style={{ ...card, padding: '18px 20px', display: 'flex', alignItems: 'center', gap: 12 }}
                >
                  <span
                    style={{
                      display: 'grid',
                      placeItems: 'center',
                      width: 34,
                      height: 34,
                      borderRadius: 10,
                      background: readable(s.cc.brandColor || BLUE),
                      color: '#fff',
                      fontSize: 15,
                      fontWeight: 800,
                      flexShrink: 0,
                    }}
                  >
                    {s.cc.name.slice(0, 1)}
                  </span>
                  <span style={{ minWidth: 0 }}>
                    <span style={{ display: 'block', fontSize: 16.5, fontWeight: 800, letterSpacing: '-0.02em', color: '#101828' }}>
                      {s.cc.name} 고객센터
                    </span>
                    <span style={{ display: 'block', margin: '3px 0 0', fontSize: 14.5, color: '#8D96A6' }}>
                      {s.cc.main.tel}
                    </span>
                  </span>
                  <span style={{ marginLeft: 'auto', color: BLUE, fontWeight: 800 }}>→</span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* 마무리 CTA — 전화 + 내부 이동 */}
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
              {cc.name} 고객센터 {cc.main.tel}
            </div>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a
              href={TEL}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 9,
                height: 56,
                padding: '0 26px',
                borderRadius: 15,
                whiteSpace: 'nowrap',
                background: `linear-gradient(180deg, ${B_LIGHT}, ${B_MID})`,
                color: '#fff',
                fontSize: 17,
                fontWeight: 800,
                boxShadow: `0 6px 0 ${B_DARK}, 0 16px 24px -14px rgba(0,0,0,.6), inset 0 1px 0 rgba(255,255,255,.45)`,
              }}
            >
              {spoke.heroAct?.label ?? `${cc.main.tel} 전화 걸기`}
            </a>
            <Link
              href={hubHref}
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
              보험사 번호 전체보기
            </Link>
          </div>
        </section>

        {/* 출처·면책 — 배포 필수 표기 */}
        <section style={{ margin: '40px 0 0' }}>
          <h2 style={{ ...h2, fontSize: 18 }}>이 글의 출처</h2>
          <ul style={{ margin: '10px 0 0', padding: '0 0 0 18px', fontSize: 14.5, color: '#5B6474' }}>
            {spoke.sources.map((s, i) => (
              <li key={i} style={{ margin: '4px 0' }}>
                <a href={s.url} rel="noopener">{s.name}</a>
              </li>
            ))}
          </ul>
          <p style={{ margin: '18px 0 0', fontSize: 13.5, lineHeight: 1.7, color: '#98A1B0' }}>
            본 페이지는 공개된 고객센터 안내를 정리한 것으로 {cc.name}과 무관합니다. 번호·운영시간은 바뀔 수 있으니 최종 자격과 내용은 공식 채널에서 확인하세요. 정부지원사업 에디터 · {reviewed} 검수.
          </p>
          <Link href={hubHref} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '16px 0', fontSize: 14, fontWeight: 700, color: BLUE }}>
            ← {policyTitle} 전체 정보 보기
          </Link>
        </section>
      </main>

      {/* 모바일 하단 고정 바 */}
      {mobile && (
        <div
          style={{
            position: 'fixed',
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 50,
            padding: '12px 16px calc(12px + env(safe-area-inset-bottom))',
            background: 'rgba(255,255,255,.94)',
            backdropFilter: 'blur(12px)',
            borderTop: '1px solid #EAEDF2',
          }}
        >
          <a
            href={TEL}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 10,
              height: 56,
              borderRadius: 15,
              background: `linear-gradient(180deg, ${B_LIGHT}, ${B_MID})`,
              color: '#fff',
              fontSize: 17,
              fontWeight: 800,
              boxShadow: `0 5px 0 ${B_DARK}, 0 14px 22px -14px ${B_DARK}e6, inset 0 1px 0 rgba(255,255,255,.4)`,
            }}
          >
            {spoke.heroAct?.label ?? `${cc.main.tel} 전화 걸기`}
          </a>
        </div>
      )}
    </div>
  );
}
