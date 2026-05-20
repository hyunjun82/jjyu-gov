import { PoliciesById, PoliciesBySlug } from '@/data/policies/manifest';
import PolicyDetailClient from './PolicyDetailClient';

// edge runtime 제거 — output:export 정적 생성

export function generateStaticParams() {
  const params: { id: string }[] = [];
  // 숫자 ID 기반 (/policy/2)
  for (const id of Object.keys(PoliciesById)) {
    params.push({ id });
  }
  // slug 기반 (/policy/basic-pension)
  for (const slug of Object.keys(PoliciesBySlug)) {
    params.push({ id: slug });
  }
  return params;
}

export const dynamicParams = false;

export default async function PolicyDetailPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  return <PolicyDetailClient params={params} />;
}
