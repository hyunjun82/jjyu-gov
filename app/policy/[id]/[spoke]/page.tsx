export const runtime = 'edge';
import SpokeClient from './SpokeClient';

export default async function SpokePage(props: { params: Promise<{ id: string; spoke: string }> }) {
  const params = await props.params;
  return <SpokeClient params={params} />;
}
