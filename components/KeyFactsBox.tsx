// components/KeyFactsBox.tsx
// 정부 카드뉴스 형식의 핵심콕콕 박스 (스니펫 노림)

import { Fragment } from 'react';

interface Props {
  facts: Record<string, string>;
  highlights?: Record<string, string[]>;
  title?: string;
  brand?: string;
}

export default function KeyFactsBox({
  facts,
  highlights = {},
  title = '핵심콕콕',
  brand = '한눈에 보는 정책 요약',
}: Props) {
  const entries = Object.entries(facts);

  return (
    <div
      className="bg-white rounded-2xl overflow-hidden border border-gov-border my-6"
      style={{ boxShadow: '0 4px 16px rgba(0, 61, 136, 0.08)' }}
    >
      {/* 카드뉴스 헤더 — 네이비 박스 */}
      <div className="bg-gov-navy px-6 pt-6 pb-6 sm:px-8 sm:pt-7 sm:pb-7">
        <p
          className="m-0 mb-2 text-[11px] sm:text-[12px] font-medium tracking-[0.15em] uppercase"
          style={{ color: '#FFD477' }}
        >
          {brand}
        </p>
        <h2
          className="text-white m-0"
          style={{
            fontSize: 'clamp(20px, 2.6vw, 24px)',
            fontWeight: 700,
            letterSpacing: '-0.01em',
          }}
        >
          📌 {title}
        </h2>
      </div>

      {/* 본문 — 키-값 리스트 (큰 폰트) */}
      <dl className="px-6 py-4 sm:px-8 sm:py-5 m-0">
        {entries.map(([key, value], i) => (
          <div
            key={key}
            className={`grid gap-3 ${
              i < entries.length - 1 ? 'border-b border-gov-border' : ''
            }`}
            style={{
              gridTemplateColumns: '90px 1fr',
              padding: '14px 0',
            }}
          >
            <dt
              className="text-gov-muted"
              style={{
                fontSize: '13px',
                fontWeight: 500,
                lineHeight: 1.6,
              }}
            >
              {key}
            </dt>
            <dd
              className="text-gov-text m-0"
              style={{
                fontSize: '15px',
                lineHeight: 1.6,
                letterSpacing: '-0.005em',
              }}
            >
              {renderWithHighlights(value, highlights[key] || [])}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function renderWithHighlights(text: string, words: string[]) {
  if (!words.length) return text;

  const sortedWords = [...words].sort((a, b) => b.length - a.length);
  const escaped = sortedWords.map((w) =>
    w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  );
  const pattern = new RegExp(`(${escaped.join('|')})`, 'g');
  const parts = text.split(pattern);

  return parts.map((part, idx) => {
    if (words.includes(part)) {
      return (
        <mark
          key={idx}
          className="bg-gov-highlight rounded text-gov-text font-bold"
          style={{ padding: '2px 6px' }}
        >
          {part}
        </mark>
      );
    }
    return <Fragment key={idx}>{part}</Fragment>;
  });
}
