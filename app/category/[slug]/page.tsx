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
  medical: '의료',
  insurance: '보험',
  life:    '생활정보',
  issue:   '발급·신청',
  housing: '주거',
};

/* 정부지원금이 아닌(생활정보·지식·FAQ) 카테고리 — h1 접미사·설명을 다르게 */
const NON_SUBSIDY_CATS = new Set(['life', 'issue']);

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(CATEGORY_LABELS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const label = CATEGORY_LABELS[slug] ?? slug;
  const count = Object.values(PoliciesBySlug).filter((p: any) => p.catSlug === slug).length;
  const title = NON_SUBSIDY_CATS.has(slug)
    ? `${label} | 정부지원사업`
    : `${label} 정부지원금 총정리 | 정부지원사업`;
  /* 카테고리 설명은 카테고리마다 다른 문장이어야 한다.
     2026-08-03: 네이버 웹마스터가 "동일 설명문"으로 지적했다. 틀은 같고 숫자만
     바뀌는 문장("OO 분야 정부지원금 N건을 …")이 4개 카테고리에 그대로 붙어 있었다.
     검색엔진은 뒷부분이 같으면 중복으로 본다. 카테고리별로 실제 무엇을 다루는지 쓴다. */
  const CAT_DESC: Record<string, string> = {
    fund: `근로장려금·소상공인 정책자금처럼 신청해야 받는 지원금 ${count}건. 대상이 되는지, 얼마를 받는지, 언제까지 신청하는지 정부 공고 기준으로 확인하세요.`,
    refund: `안 찾아가면 사라지는 환급금 ${count}건. 미수령 국세·보험료 과오납처럼 신청해야 돌려받는 돈을 조회 방법까지 정리했습니다.`,
    loan: `햇살론·버팀목 같은 정책 대출 ${count}건. 한도와 금리, 신용점수 조건이 상품마다 어떻게 갈리는지 비교해 보세요.`,
    youth: `청년만 신청할 수 있는 지원 ${count}건. 나이와 소득 기준이 상품마다 달라서, 내가 어느 쪽에 해당하는지부터 확인이 필요합니다.`,
    welfare: `기초생활보장·장애인·노인 복지 ${count}건. 소득인정액과 부양의무자 기준 때문에 포기하셨다면 바뀐 기준부터 보세요.`,
    tax: `재산세·자동차세처럼 매년 내는 세금 ${count}건. 납부 기한과 감면 대상, 분납 방법을 정리했습니다.`,
    medical: `진료비·검진 지원 ${count}건. 건강보험으로 어디까지 되고 무엇이 본인부담인지 항목별로 확인하세요.`,
    insurance: `4대보험과 민간보험 관련 ${count}건. 가입 자격과 보험료 경감 요건을 기준으로 정리했습니다.`,
    housing: `전세·임대·주거급여 ${count}건. 보증금 한도와 소득 요건이 제도마다 달라 내 조건에 맞는 쪽을 골라야 합니다.`,
    life: `등본 발급부터 각종 신고까지 생활 절차 ${count}건. 어디서 떼는지, 수수료가 얼마인지, 며칠 걸리는지 확인하세요.`,
    issue: `증명서 발급과 신청 절차 ${count}건. 준비물과 접수 기관을 미리 챙기면 헛걸음하지 않습니다.`,
  };
  const description =
    CAT_DESC[slug] ??
    (NON_SUBSIDY_CATS.has(slug)
      ? `${label} 관련 발급·신청 절차 ${count}건을 정부 공식 자료 기준으로 정리했습니다.`
      : `${label} 분야 정부지원금 ${count}건을 신청자격·지원금액·신청방법까지 정리했습니다.`);
  return { title, description };
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
          {NON_SUBSIDY_CATS.has(slug) ? label : `${label} 정부지원금`}
        </h1>

        {policies.length === 0 ? (
          <p style={{ color: 'var(--text-muted)' }}>
            해당 카테고리에 등록된 글이 없습니다.
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
