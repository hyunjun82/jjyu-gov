import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FORMS, FormsBySlug } from '@/data/forms';
import AdSense from '@/components/AdSense';

export function generateStaticParams() {
  return FORMS.map((f) => ({ slug: f.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const f = FormsBySlug[params.slug];
  if (!f) return {};
  return {
    title: `${f.name} 다운로드 — ${f.formNo} 원본 (${f.revised} 개정) | 정부지원사업`,
    description: `${f.name}는 ${f.law} ${f.formNo}입니다. ${f.pages}쪽, 서식 개정일 ${f.revised}. 국가법령정보센터 원본을 그대로 내려받고, ${f.where}에 제출합니다. ${f.note}`,
    alternates: { canonical: `https://gov.jjyu.co.kr/forms/${f.slug}` },
  };
}

const card: React.CSSProperties = {
  border: '1px solid var(--border, #E5E8EB)',
  borderRadius: 12,
  padding: '18px 18px',
  marginBottom: 18,
  background: 'var(--card-bg, #fff)',
};

export default function FormPage({ params }: { params: { slug: string } }) {
  const f = FormsBySlug[params.slug];
  if (!f) notFound();
  const others = FORMS.filter((x) => x.slug !== f.slug).slice(0, 6);

  return (
    <main className="container" style={{ padding: '28px 16px 60px', maxWidth: 760 }}>
      <nav style={{ fontSize: 13.5, color: 'var(--text-secondary, #4E5968)', marginBottom: 12 }}>
        <Link href="/policy/ltci-forms-download">장기요양 서식</Link> · {f.name}
      </nav>

      <h1 style={{ fontSize: 25, fontWeight: 800, lineHeight: 1.35, marginBottom: 8 }}>
        {f.name} 다운로드
      </h1>
      <p style={{ fontSize: 15.5, lineHeight: 1.75, color: 'var(--text-secondary, #4E5968)', marginBottom: 18 }}>
        {f.law} {f.formNo}입니다. 국가법령정보센터에 올라온 원본 그대로이고, 서식 개정일은 {f.revised}
        이며 모두 {f.pages}쪽입니다. 블로그에 떠도는 파일은 개정 전 판이 섞여 있어 반려 사유가 되니
        여기서 받아 쓰시면 됩니다.
      </p>

      <a
        href={f.pdf}
        className="btn-cta"
        rel="noopener"
        style={{ display: 'block', textAlign: 'center', marginBottom: 10 }}
      >
        {f.name} PDF 내려받기
      </a>
      <p style={{ fontSize: 13, color: 'var(--text-secondary, #4E5968)', marginBottom: 22 }}>
        국가법령정보센터 원문 파일로 연결됩니다.
      </p>

      <AdSense slot="7082828373" />

      <div style={card}>
        <table style={{ width: '100%', fontSize: 15, lineHeight: 1.8 }}>
          <tbody>
            <tr><td style={{ color: '#6B7684', width: 108 }}>서식 번호</td><td>{f.formNo}</td></tr>
            <tr><td style={{ color: '#6B7684' }}>근거 법령</td><td>{f.law}</td></tr>
            <tr><td style={{ color: '#6B7684' }}>서식 개정일</td><td>{f.revised}</td></tr>
            <tr><td style={{ color: '#6B7684' }}>분량</td><td>{f.pages}쪽</td></tr>
            <tr><td style={{ color: '#6B7684' }}>작성자</td><td>{f.who}</td></tr>
            <tr><td style={{ color: '#6B7684' }}>제출처</td><td>{f.where}</td></tr>
          </tbody>
        </table>
      </div>

      <div style={{ ...card, borderLeft: '4px solid #1B3A6B' }}>
        <strong style={{ display: 'block', marginBottom: 6 }}>가장 자주 걸리는 지점</strong>
        <p style={{ fontSize: 15, lineHeight: 1.75, margin: 0 }}>{f.note}</p>
      </div>

      <h2 style={{ fontSize: 19, fontWeight: 700, margin: '26px 0 10px' }}>받기 전에 확인할 것</h2>
      <ul style={{ fontSize: 15.5, lineHeight: 1.85, paddingLeft: 20, marginBottom: 22 }}>
        {f.tips.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>

      <p style={{ fontSize: 15.5, lineHeight: 1.75, marginBottom: 10 }}>
        칸을 어떻게 채우는지, 어디에 언제까지 내는지는 따로 정리해 뒀습니다.
      </p>
      <Link href={f.article} className="btn-cta" style={{ display: 'block', textAlign: 'center', marginBottom: 26 }}>
        {f.articleLabel}
      </Link>

      <AdSense slot="4660679163" />

      <h2 style={{ fontSize: 19, fontWeight: 700, margin: '26px 0 10px' }}>다른 장기요양 서식</h2>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {others.map((o) => (
          <li key={o.slug} style={{ borderBottom: '1px solid var(--border, #E5E8EB)' }}>
            <Link
              href={`/forms/${o.slug}`}
              style={{ display: 'block', padding: '13px 2px', fontSize: 15.5 }}
            >
              {o.name} <span style={{ color: '#6B7684', fontSize: 13.5 }}>· {o.formNo}</span>
            </Link>
          </li>
        ))}
      </ul>

      <p style={{ fontSize: 13, color: '#6B7684', lineHeight: 1.7, marginTop: 26 }}>
        출처: 국가법령정보센터 <a href={f.viewer} rel="noopener">{f.formNo} 원문 보기</a> · 2026.08.15 검수 ·
        정부지원사업 에디터. 이 페이지는 서식 원본을 안내하는 자료이며, 최종 자격과 처리 결과는 공식 채널에서 확인하세요.
      </p>
    </main>
  );
}
