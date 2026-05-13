// components/QACard.tsx
// 정부 디자인 시스템 Q&A 카드
// 네이비 헤더 + 오렌지 번호 배지 + 노랑 형광 강조

import { ReactNode } from 'react';

interface Props {
  number: number;
  q: string;
  anchor: string;
  children: ReactNode;
}

export default function QACard({ number, q, anchor, children }: Props) {
  return (
    <section
      id={anchor}
      className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gov-border my-4 scroll-mt-20"
    >
      <div className="bg-gov-navy px-4 py-3.5 flex items-center gap-2.5">
        <div className="w-6 h-6 rounded-full bg-gov-orange flex items-center justify-center text-white text-xs font-medium flex-shrink-0">
          {number}
        </div>
        <h2 className="text-white text-base font-medium m-0 leading-snug">
          {q}
        </h2>
      </div>

      <div className="p-4 text-[13px] text-gov-text leading-[1.7]">
        {children}
      </div>
    </section>
  );
}

export function Hi({ children }: { children: ReactNode }) {
  return (
    <mark className="bg-gov-highlight px-1 rounded-sm text-gov-text font-medium">
      {children}
    </mark>
  );
}

export function QABox({ children, label }: { children: ReactNode; label?: string }) {
  return (
    <div className="bg-gov-bg rounded-lg p-3 my-2">
      {label && (
        <p className="text-[11px] text-gov-navy m-0 mb-1.5 font-medium">{label}</p>
      )}
      <div className="text-[12px] text-gov-text leading-[1.7]">{children}</div>
    </div>
  );
}

export function QATable({
  headers,
  rows,
  caption,
}: {
  headers: string[];
  rows: string[][];
  caption?: string;
}) {
  return (
    <div className="border border-gov-border rounded-md overflow-hidden text-[11px] my-3">
      {caption && (
        <div className="bg-gov-navy text-white px-3 py-2 font-medium text-center">
          {caption}
        </div>
      )}
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gov-bg">
            {headers.map((h, i) => (
              <th
                key={i}
                className="px-2 py-2 text-center text-gov-navy font-medium border-b border-gov-border"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr
              key={ri}
              className={ri < rows.length - 1 ? 'border-b border-gov-border' : ''}
            >
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className={`px-2 py-2 text-gov-text ${
                    ci === 0 ? 'text-left' : 'text-center font-medium'
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
