'use client';
/* 홈 검색 — 고른 성씨·지역 페이지로 이동시킨다 (이동이 곧 수익 동선) */
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function PatriotSearch({
  surnames,
  regions,
}: {
  surnames: [string, number][];
  regions: [string, number][];
}) {
  const router = useRouter();
  const [sur, setSur] = useState('');
  const [reg, setReg] = useState('');

  const go = () => {
    if (sur) router.push(`/guide/patriots/surname/${encodeURIComponent(sur)}/`);
    else if (reg) router.push(`/guide/patriots/region/${encodeURIComponent(reg)}/`);
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center', margin: '18px 0 6px' }}>
      <select
        value={sur}
        onChange={(e) => { setSur(e.target.value); if (e.target.value) setReg(''); }}
        style={{ padding: '12px 14px', fontSize: 16, borderRadius: 10, border: '1.5px solid #0B2148', minWidth: 150 }}
        aria-label="성씨 선택"
      >
        <option value="">성씨 선택</option>
        {surnames.map(([s, c]) => (
          <option key={s} value={s}>{s}씨 ({c.toLocaleString()}명)</option>
        ))}
      </select>
      <select
        value={reg}
        onChange={(e) => { setReg(e.target.value); if (e.target.value) setSur(''); }}
        style={{ padding: '12px 14px', fontSize: 16, borderRadius: 10, border: '1.5px solid #0B2148', minWidth: 170 }}
        aria-label="본적 지역 선택"
      >
        <option value="">본적(지역) 선택</option>
        {regions.map(([r, c]) => (
          <option key={r} value={r}>{r} ({c.toLocaleString()}명)</option>
        ))}
      </select>
      <button
        onClick={go}
        disabled={!sur && !reg}
        style={{
          padding: '12px 26px', fontSize: 16, fontWeight: 700, borderRadius: 10,
          border: 'none', cursor: 'pointer', color: '#fff',
          background: (sur || reg) ? '#003D88' : '#9AA7BD',
        }}
      >
        명단 보기 →
      </button>
    </div>
  );
}
