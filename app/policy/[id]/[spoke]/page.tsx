export const runtime = 'edge';
import SpokeClient from './SpokeClient';

export default function SpokePage({ params }: { params: { id: string; spoke: string } }) {
  return <SpokeClient params={params} />;
}
