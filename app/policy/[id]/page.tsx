export const runtime = 'edge';
import PolicyDetailClient from './PolicyDetailClient';

export default function PolicyDetailPage({ params }: { params: { id: string } }) {
  return <PolicyDetailClient params={params} />;
}
