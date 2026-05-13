// components/KeyFactsBox.tsx
// 핵심콕콕 — 한 줄 정리 박스 (구글 스니펫 노림)

import { Pin } from 'lucide-react';
import { Fragment } from 'react';

interface Props {
  facts: Record<string, string>;
  highlights?: Record<string, string[]>;
  title?: string;
}

export default function KeyFactsBox({
  facts,
  highlights = {},
  title = '핵심콕콕 — 한 줄 정리',
}: Props) {
  const entries = Object.entries(facts);

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gov-border my-4">
      <div className="bg-gov-navy px-4 py-3 flex items-center gap-2">
        <Pin size={16} className="text-gov-orange" aria-hidden="true" />
        <h2 className="text-white text-sm font-medium m-0">{title}</h2>
      </div>

      <dl className="px-4 py-2 m-0">
        {entries.map(([key, value], i) => (
          <div
            key={key}
            className={`grid grid-cols-[80px_1fr] gap-3 py-2.5 ${
              i < entries.length - 1 ? 'border-b border-gov-border' : ''
            }`}
          >
            <dt className="text-xs text-gov-muted leading-relaxed">{key}</dt>
            <dd className="text-sm text-gov-text leading-relaxed m-0">
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
          className="bg-gov-highlight px-1 rounded-sm text-gov-text font-medium"
        >
          {part}
        </mark>
      );
    }
    return <Fragment key={idx}>{part}</Fragment>;
  });
}
