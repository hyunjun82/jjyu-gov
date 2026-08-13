import { SpokesRegistry } from '../data/spokes/registry';
import { PoliciesBySlug } from '../data/policies/manifest';

const params: { id: string; spoke: string }[] = [];
for (const [policySlug, spokes] of Object.entries(SpokesRegistry)) {
  const policy = (PoliciesBySlug as any)[policySlug];
  for (const spokeKey of Object.keys(spokes as any)) {
    params.push({ id: policySlug, spoke: spokeKey });
    if (policy?.id) params.push({ id: String(policy.id), spoke: spokeKey });
  }
}

console.log('TOTAL params:', params.length);
console.log('after-school-childcare-fee:', params.filter(p => p.id === 'after-school-childcare-fee'));
console.log('id=80:', params.filter(p => p.id === '80'));
console.log('basic-pension:', params.filter(p => p.id === 'basic-pension').slice(0, 5));
console.log('artist-pension:', params.filter(p => p.id === 'artist-pension'));
console.log('id=50:', params.filter(p => p.id === '50'));
