/**
 * 글 한 편의 정체 — 허브인지 스포크인지, 파일이 어디 있는지 (2026-09-23)
 *
 * 산출물 폴더 scripts/output/gov/<key>/ 에 meta.json 으로 남긴다. 검사기·게이트는 이것만 본다.
 *   허브   key = slug                    file = data/policies/<slug>.ts
 *   스포크 key = <hub>--<slug>            file = app/policy/[id]/[spoke]/content/<dir>/<fileName>.tsx
 *          (스포크 slug 는 허브별 키라 허브를 붙여야 겹치지 않는다 — 실손보험·기초생활수급 payment-suspension 등)
 */
import fs from 'node:fs';
import path from 'node:path';

export const OUT_ROOT = path.join('scripts', 'output', 'gov');
export const CONTENT_DIR = path.join('app', 'policy', '[id]', '[spoke]', 'content');
export const REG = path.join('data', 'spokes', 'registry.ts');

export const keyOf = ({ hub, slug }) => (hub ? `${hub}--${slug}` : slug);
/** 스포크 파일 이름 — slug 를 이어 붙인 PascalCase. 숫자로 시작하면 앞에 N (식별자 규칙) */
export const fileNameOf = (slug) => {
  const s = slug.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join('');
  return /^\d/.test(s) ? `N${s}` : s;
};

export function targetOf({ hub, dir, slug }) {
  if (!hub) return { kind: 'hub', key: slug, slug, file: path.join('data', 'policies', `${slug}.ts`) };
  const fileName = fileNameOf(slug);
  return {
    kind: 'spoke', key: keyOf({ hub, slug }), slug, hub, dir, fileName,
    exportName: `${dir}${fileName}SpokeContent`,
    file: path.join(CONTENT_DIR, dir, `${fileName}.tsx`),
  };
}

export function saveMeta(t) {
  const d = path.join(OUT_ROOT, t.key);
  fs.mkdirSync(d, { recursive: true });
  const f = path.join(d, 'meta.json');
  // created 는 처음 쓴 시각 — 서론 틀 반복을 "먼저 쓴 글"과만 비교하는 기준이라 다시 돌려도 바꾸지 않는다
  const created = fs.existsSync(f) ? JSON.parse(fs.readFileSync(f, 'utf8')).created : undefined;
  fs.writeFileSync(f, JSON.stringify({ ...t, created: created || new Date().toISOString() }, null, 2));
}

/** 새 파이프라인 글 전부 (meta + facts 가 있는 것) — created 순 */
export function allArticles() {
  if (!fs.existsSync(OUT_ROOT)) return [];
  return fs.readdirSync(OUT_ROOT)
    .filter((k) => fs.existsSync(path.join(OUT_ROOT, k, 'meta.json')) && fs.existsSync(path.join(OUT_ROOT, k, 'facts.json')))
    .map((k) => JSON.parse(fs.readFileSync(path.join(OUT_ROOT, k, 'meta.json'), 'utf8')))
    .filter((m) => fs.existsSync(m.file))
    // 같은 커밋에 올라간 글은 시각이 같다 — 그때는 key 이름순으로 선후를 정한다(판정이 매번 같아야 한다)
    .sort((a, b) => (Date.parse(a.created) || 0) - (Date.parse(b.created) || 0) || a.key.localeCompare(b.key));
}

/** key → meta. meta 가 없으면 옛 허브 방식(key = slug, data/policies) 으로 본다 */
export function metaOf(key) {
  const f = path.join(OUT_ROOT, key, 'meta.json');
  if (fs.existsSync(f)) return JSON.parse(fs.readFileSync(f, 'utf8'));
  return { kind: 'hub', key, slug: key, file: path.join('data', 'policies', `${key}.ts`) };
}

/** 글 파일 경로 → 새 파이프라인 key (facts.json 이 있을 때만). 게이트가 "새 글이면 새 검사기로" 넘길 때 쓴다 */
export function keyOfFile(file) {
  const want = path.normalize(file).replace(/\\/g, '/');
  if (!fs.existsSync(OUT_ROOT)) return null;
  for (const k of fs.readdirSync(OUT_ROOT)) {
    const m = path.join(OUT_ROOT, k, 'meta.json');
    if (!fs.existsSync(m) || !fs.existsSync(path.join(OUT_ROOT, k, 'facts.json'))) continue;
    if (path.normalize(JSON.parse(fs.readFileSync(m, 'utf8')).file).replace(/\\/g, '/') === want) return k;
  }
  // 허브는 meta 없이도 slug 폴더에 facts.json 이 있으면 새 글이다
  const hub = want.match(/^data\/policies\/([\w-]+)\.ts$/)?.[1];
  return hub && fs.existsSync(path.join(OUT_ROOT, hub, 'facts.json')) ? hub : null;
}

/**
 * 스포크 배선 — registry.ts 에 import 와 허브 블록 항목, 허브 파일의 Spokes 배열에 한 줄.
 * 이미 걸려 있으면 건드리지 않는다. 옛 new-spoke.ts 를 대신한다.
 */
export function wireSpoke(t, { title, role = 'guide' }) {
  let reg = fs.readFileSync(REG, 'utf8');
  const nl = reg.includes('\r\n') ? '\r\n' : '\n';
  const imp = `import { ${t.exportName} } from '@/app/policy/[id]/[spoke]/content/${t.dir}/${t.fileName}';`;
  if (!reg.includes(imp)) {
    const lastImport = [...reg.matchAll(/^import .*;\r?$/gm)].pop();
    if (!lastImport) throw new Error('registry.ts 에 import 줄이 없다');
    const at = lastImport.index + lastImport[0].length;
    reg = reg.slice(0, at) + nl + imp + reg.slice(at);
  }
  const head = `  '${t.hub}': {`;
  if (!reg.includes(head)) {
    // 허브에 스포크가 처음이면 블록을 만든다 — SpokesRegistry 객체의 마지막 닫는 줄 앞에
    const start = reg.indexOf('export const SpokesRegistry');
    const close = reg.indexOf(`${nl}};`, start);
    if (start < 0 || close < 0) throw new Error('registry.ts 에서 SpokesRegistry 객체 끝을 못 찾았다');
    reg = reg.slice(0, close) + `${nl}  '${t.hub}': {${nl}  },${nl}` + reg.slice(close);
  }
  const hi = reg.indexOf(head);
  const blockEnd = reg.indexOf(`${nl}  },`, hi);
  if (!reg.slice(hi, blockEnd).includes(`'${t.slug}':`)) {
    const at = hi + head.length;
    reg = reg.slice(0, at) + `${nl}    '${t.slug}': ${t.exportName},` + reg.slice(at);
  }
  fs.writeFileSync(REG, reg);

  const hubFile = path.join('data', 'policies', `${t.hub}.ts`);
  let hub = fs.readFileSync(hubFile, 'utf8');
  const arr = hub.match(/export const \w+Spokes\s*=\s*\[/);
  if (!arr) throw new Error(`${hubFile} 에 Spokes 배열이 없다`);
  if (!hub.includes(`slug: '${t.slug}'`)) {
    const at = arr.index + arr[0].length;
    const hnl = hub.includes('\r\n') ? '\r\n' : '\n';
    hub = hub.slice(0, at) + `${hnl}  { slug: '${t.slug}', role: '${role}', title: '${title.replace(/'/g, "\\'")}' },` + hub.slice(at);
    fs.writeFileSync(hubFile, hub);
  }
}
