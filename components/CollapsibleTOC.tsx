// components/CollapsibleTOC.tsx
// 접이식 목차 (구글 점프 링크 노림, 기본 닫힘)

import { List, ChevronDown } from 'lucide-react';

interface Props {
  items: { q: string; anchor: string }[];
  title?: string;
}

export default function CollapsibleTOC({ items, title = '목차' }: Props) {
  return (
    <details className="bg-white rounded-2xl shadow-sm border border-gov-border my-4 group [&_summary::-webkit-details-marker]:hidden">
      <summary className="px-4 py-3 flex items-center justify-between cursor-pointer select-none list-none">
        <div className="flex items-center gap-2">
          <List size={16} className="text-gov-navy" aria-hidden="true" />
          <span className="text-sm font-medium text-gov-text">
            {title} ({items.length}개 질문)
          </span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-xs text-gov-muted group-open:hidden">열기</span>
          <span className="text-xs text-gov-muted hidden group-open:inline">접기</span>
          <ChevronDown
            size={14}
            className="text-gov-muted transition-transform group-open:rotate-180"
            aria-hidden="true"
          />
        </div>
      </summary>
      <nav aria-label="페이지 내 목차" className="px-4 pb-4 pt-3 border-t border-gov-border">
        <ol className="m-0 p-0 list-none space-y-2">
          {items.map((item, i) => (
            <li key={i}>
              <a
                href={`#${item.anchor}`}
                className="text-sm text-gov-text hover:text-gov-navy hover:underline no-underline block py-0.5"
              >
                {i + 1}. {item.q}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </details>
  );
}
