export const runtime = 'edge';
import PolicyDetailClient from './PolicyDetailClient';

export default async function PolicyDetailPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  return <PolicyDetailClient params={params} />;
}
