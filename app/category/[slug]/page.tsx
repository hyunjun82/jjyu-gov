import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { PoliciesBySlug } from '@/data/policies/manifest';

const CATEGORY_LABELS: Record<string, string> = {
  fund:    '지원금',
  refund:  '환급금',
  loan:    '대출',
  youth:   '청년',
  welfare: '복지',
  tax:     '세금',
};

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(CATEGORY_LABELS).map((slug) => ({ slug }));
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const label = CATEGORY_LABELS[slug] ?? slug;

  const policies = Object.values(PoliciesBySlug).filter(
    (p: any) => p.catSlug === slug,
  ) as any[];

  return (
    <main>
      <div className="container" style={{ paddingTop: 32, paddingBottom: 48 }}>
        <nav className="breadcrumb" style={{ marginBottom: 20 }}>
          <Link href="/">홈</Link>
          <ChevronRight size={12} />
          <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{label}</span>
        </nav>

        <h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 24 }}>
          {label} 정부지원금
        </h1>

        {policies.length === 0 ? (
          <p style={{ color: 'var(--text-muted)' }}>
            해당 카테고리에 등록된 정책이 없습니다.
          </p>
        ) : (
          <div className="policy-list">
            {policies.map((p: any) => (
              <Link
                key={p.slug ?? p.id}
                href={`/policy/${p.slug ?? p.id}`}
                className="policy-card"
              >
                <div className="card-body">
                  <div className="card-badges">
                    <span className={`badge ${
                      p.catSlug === 'loan'   ? 'badge-loan'   :
                      p.catSlug === 'refund' ? 'badge-refund' : 'badge-fund'
                    }`}>{p.cat ?? label}</span>
                  </div>
                  <div className="card-title">{p.title}</div>
                  <div className="card-org">{p.org}</div>
                </div>
                <div className="card-right">
                  {p.amount && <div className="card-amount">{p.amount}</div>}
                  <div className="card-deadline">~ {p.deadline ?? '상시'}</div>
                  <span className="btn-primary">신청하기</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
