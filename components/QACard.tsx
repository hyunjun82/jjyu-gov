// components/QACard.tsx
// 정부 카드뉴스 형식의 Q&A 카드 (HTML 기반, SEO 친화적)
// 정부 사이트 카드뉴스 비주얼 100% 재현 + 텍스트 검색 가능

import { ReactNode } from 'react';

interface Props {
  number: number;
  q: string;
  anchor: string;
  children: ReactNode;
  brand?: string;  // 상단 브랜드 라인 (예: "민생에 플러스 / 정책 Q&A")
}

export default function QACard({
  number,
  q,
  anchor,
  children,
  brand = '정부지원사업 Q&A',
}: Props) {
  return (
    <section
      id={anchor}
      className="bg-white rounded-2xl overflow-hidden border border-gov-border my-6 scroll-mt-20"
      style={{ boxShadow: '0 4px 16px rgba(0, 61, 136, 0.08)' }}
    >
      {/* ── 카드뉴스 헤더 (네이비 박스, 큰 비중) ── */}
      <div className="bg-gov-navy px-6 pt-6 pb-7 sm:px-8 sm:pt-7 sm:pb-8 relative">
        {/* 브랜드 라인 */}
        <p
          className="m-0 mb-3 text-[11px] sm:text-[12px] font-medium tracking-[0.15em] uppercase"
          style={{ color: '#FFD477' }}
        >
          {brand}
        </p>

        {/* 번호 + 질문 */}
        <div className="flex items-start gap-3 sm:gap-4">
          <div
            className="rounded-full bg-gov-orange flex items-center justify-center text-white font-bold flex-shrink-0 shadow-md"
            style={{
              width: '40px',
              height: '40px',
              fontSize: '16px',
              marginTop: '2px',
            }}
          >
            {number}
          </div>
          <h2
            className="text-white m-0 leading-[1.35]"
            style={{
              fontSize: 'clamp(18px, 2.4vw, 22px)',
              fontWeight: 700,
              letterSpacing: '-0.01em',
            }}
          >
            {q}
          </h2>
        </div>
      </div>

      {/* ── 본문 (큰 폰트, 넓은 패딩) ── */}
      <div
        className="px-6 py-6 sm:px-8 sm:py-7 text-gov-text"
        style={{
          fontSize: 'clamp(14px, 1.6vw, 16px)',
          lineHeight: 1.8,
          letterSpacing: '-0.005em',
        }}
      >
        {children}
      </div>
    </section>
  );
}

/**
 * 핵심 단어 형광펜 강조 (카드뉴스 스타일, 큼지막한 노란 강조)
 */
export function Hi({ children }: { children: ReactNode }) {
  return (
    <mark
      className="bg-gov-highlight rounded text-gov-text font-bold"
      style={{ padding: '2px 6px' }}
    >
      {children}
    </mark>
  );
}

/**
 * 카드뉴스 안 보조 박스 (옅은 네이비 배경)
 */
export function QABox({
  children,
  label,
}: {
  children: ReactNode;
  label?: string;
}) {
  return (
    <div
      className="rounded-xl my-3 sm:my-4 border"
      style={{
        background: '#EEF3FB',
        borderColor: '#D6E0F0',
        padding: '14px 18px',
      }}
    >
      {label && (
        <p
          className="m-0 mb-2 text-gov-navy font-bold"
          style={{ fontSize: '13px', letterSpacing: '-0.005em' }}
        >
          {label}
        </p>
      )}
      <div
        className="text-gov-text m-0"
        style={{ fontSize: '14px', lineHeight: 1.8 }}
      >
        {children}
      </div>
    </div>
  );
}

/**
 * 카드뉴스 표 (네이비 캡션 + 큰 폰트)
 */
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
    <div
      className="rounded-lg overflow-hidden my-4 border border-gov-border"
      style={{ fontSize: '13px' }}
    >
      {caption && (
        <div
          className="bg-gov-navy text-white text-center font-bold"
          style={{
            padding: '10px 14px',
            fontSize: '13px',
            letterSpacing: '-0.005em',
          }}
        >
          {caption}
        </div>
      )}
      <table className="w-full border-collapse">
        <thead>
          <tr style={{ background: '#EEF3FB' }}>
            {headers.map((h, i) => (
              <th
                key={i}
                className="text-gov-navy font-bold border-b border-gov-border"
                style={{
                  padding: '10px 12px',
                  fontSize: '12px',
                  textAlign: 'center',
                  letterSpacing: '-0.005em',
                }}
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
              {row.map((cell, ci) => {
                // 셀 값에 "표시텍스트||URL" 형식이 들어오면 클릭 가능한 링크로 렌더링 (기존 셀은 그대로 텍스트)
                const linkMatch = cell.includes('||') ? cell.split('||') : null;
                return (
                  <td
                    key={ci}
                    className="text-gov-text"
                    style={{
                      padding: '10px 12px',
                      fontSize: '13px',
                      textAlign: ci === 0 ? 'left' : 'center',
                      fontWeight: ci === 0 ? 500 : 600,
                      lineHeight: 1.6,
                    }}
                  >
                    {linkMatch ? (
                      <a
                        href={linkMatch[1]}
                        rel="noopener noreferrer"
                        className="text-gov-navy underline"
                        style={{ fontWeight: 700 }}
                      >
                        {linkMatch[0]}
                      </a>
                    ) : (
                      cell
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
