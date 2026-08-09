'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';

type Row = { t: string; u: string; k?: string; c?: string; h?: string };

const CAT_LABEL: Record<string, string> = {
  fund: '지원금',
  refund: '환급금',
  loan: '대출',
  youth: '청년',
  welfare: '복지',
  pension: '연금',
  insurance: '보험',
  life: '생활정보',
  issue: '발급·신청',
  tax: '세금',
};

/* 점수: 제목에서 맞은 게 본문에서 맞은 것보다 위로 온다.
   제목 맨 앞에서 맞으면 더 위로 — "기초연금"을 치면 기초연금 글이 먼저 나와야 한다. */
function score(row: Row, terms: string[]): number {
  const t = row.t.toLowerCase();
  const k = row.k || '';
  let s = 0;
  for (const q of terms) {
    const inT = t.indexOf(q);
    if (inT === 0) s += 100;
    else if (inT > 0) s += 60;
    else if (k.includes(q)) s += 20;
    else return -1; // 한 단어라도 아예 없으면 탈락
  }
  if (!row.h) s += 15; // 허브를 스포크보다 살짝 위로
  s -= Math.min(row.t.length, 60) / 10; // 짧고 정확한 제목 우대
  return s;
}

export default function SearchClient() {
  const [q, setQ] = useState('');
  const [rows, setRows] = useState<Row[] | null>(null);
  const [err, setErr] = useState(false);

  /* 주소창의 ?q= 를 초기값으로 (헤더 검색창이 여기로 보낸다) */
  useEffect(() => {
    const p = new URLSearchParams(window.location.search).get('q');
    if (p) setQ(p);
  }, []);

  useEffect(() => {
    fetch('/search-index.json')
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then(setRows)
      .catch(() => setErr(true));
  }, []);

  const terms = useMemo(
    () => q.trim().toLowerCase().split(/\s+/).filter(Boolean),
    [q],
  );

  const hits = useMemo(() => {
    if (!rows || !terms.length) return [];
    const out: { r: Row; s: number }[] = [];
    for (const r of rows) {
      const s = score(r, terms);
      if (s >= 0) out.push({ r, s });
    }
    out.sort((a, b) => b.s - a.s);
    return out.slice(0, 60).map((x) => x.r);
  }, [rows, terms]);

  return (
    <div className="search-page">
      <div className="search-box">
        <input
          type="text"
          value={q}
          autoFocus
          placeholder="지원금, 환급금, 정책명으로 검색"
          onChange={(e) => setQ(e.target.value)}
          aria-label="검색어"
        />
      </div>

      {err && <p className="search-msg">검색 자료를 불러오지 못했습니다. 새로고침해 주세요.</p>}
      {!err && !rows && <p className="search-msg">검색 준비 중입니다…</p>}

      {rows && !terms.length && (
        <p className="search-msg">찾으시는 제도 이름을 입력해 주세요. 예: 기초연금, 실업급여, 전세</p>
      )}

      {rows && terms.length > 0 && (
        <>
          <p className="search-count">
            <strong>{hits.length}건</strong>
            {hits.length === 60 ? ' 이상' : ''} 찾았습니다
          </p>

          {hits.length === 0 ? (
            <p className="search-msg">
              결과가 없습니다. 띄어쓰기를 줄이거나 짧은 말로 다시 찾아보세요.
            </p>
          ) : (
            <ul className="search-list">
              {hits.map((r) => (
                <li key={r.u}>
                  <Link href={r.u}>
                    <span className="search-title">{r.t}</span>
                    <span className="search-meta">
                      {r.c && CAT_LABEL[r.c] && <em className="search-cat">{CAT_LABEL[r.c]}</em>}
                      {r.h && <span className="search-hub">{r.h}</span>}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
}
