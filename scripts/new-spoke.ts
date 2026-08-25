/**
 * new-spoke.ts — 스포크 뼈대를 만들고 배선까지 끝낸다. 손으로 할 것을 남기지 않는다.
 *
 * 왜 만들었나 (2026-08-19)
 *   write.ts 는 "outline 을 만드세요 / factsheet 를 채우세요" 를 출력만 하고 실행하지
 *   않는다. 일의 90%인 2·3단계가 사람 판단에 맡겨져 있었고, 검사는 다 쓴 뒤 push 에서만
 *   돌았다. 그래서 실손 20편에서 이런 게 한꺼번에 터졌다:
 *     · act 를 qa 인덱스 2·4·마지막 밖에 넣어 버튼이 화면에 안 나온 글 6편
 *     · 추출본(source-{slug}.txt)을 안 만들어 원문 대조가 불가능했던 글 12편
 *     · registry.ts / 허브 Spokes 배열 등록 누락 시 404
 *     · sourceNote 를 적었는데 렌더러에 없어 죽은 코드였던 글 119편(전체)
 *   전부 "규칙은 문서에 있고 강제하는 게 없다" 는 한 가지 원인이다.
 *   검사기를 더 만들지 않고, 틀릴 수 없는 뼈대를 찍는다.
 *
 * 사용:
 *   npx tsx scripts/new-spoke.ts --spec scripts/output/spec-{slug}.json
 *   npx tsx scripts/new-spoke.ts --spec ... --dry     # 파일 안 쓰고 미리보기
 *
 * spec 형식 (JSON):
 *   {
 *     "slug": "cataract-multifocal",           // URL. 영문 lowercase-hyphen 만
 *     "policyDir": "실손보험",                  // content/{policyDir}/
 *     "fileName": "백내장다초점",                // {fileName}.tsx · export 이름의 뿌리
 *     "hubSlug": "indemnity-insurance-generations",
 *     "hubVar": "indemnityInsuranceGenerationsSpokes",
 *     "role": "eligibility",
 *     "h1": "백내장 수술 받았는데 실손보험 청구 되나요? …",
 *     "breadcrumb": "백내장 다초점",
 *     "description": "…",
 *     "sourceFile": "scripts/output/source-cataract-multifocal.txt",
 *     "sourceName": "국가법령정보센터 — …",
 *     "sourceUrl": "https://…",
 *     "hubPath": "/policy/indemnity-insurance-generations",
 *     "qa": ["실검색어 PAA 질문1", "질문2", … ],   // 3개 이상. 소제목은 PAA 그대로
 *     "faq": ["질문1", "질문2", … ]                // 5개 권장
 *   }
 */
import fs from 'fs';
import path from 'path';

const ROOT = process.cwd();
const args = process.argv.slice(2);
const specPath = args[args.indexOf('--spec') + 1];
const DRY = args.includes('--dry');

if (!specPath || !fs.existsSync(specPath)) {
  console.error('사용: npx tsx scripts/new-spoke.ts --spec scripts/output/spec-{slug}.json');
  process.exit(1);
}
const S = JSON.parse(fs.readFileSync(specPath, 'utf8'));

/* ── 막을 것은 만들기 전에 막는다 ── */
const die = (m: string) => { console.error(`❌ ${m}`); process.exit(1); };

if (!/^[a-z0-9-]+$/.test(S.slug)) die(`slug 는 영문 lowercase-hyphen 만: ${S.slug}`);
if (!S.sourceFile || !fs.existsSync(S.sourceFile))
  die(`추출본이 없다: ${S.sourceFile}\n   원문을 먼저 뜬다. 추출본 없이 쓴 글은 push 에서 막힌다.`);
if (!Array.isArray(S.qa) || S.qa.length < 3) die('qa 는 3개 이상이어야 한다');

const contentPath = path.join('app', 'policy', '[id]', '[spoke]', 'content', S.policyDir, `${S.fileName}.tsx`);
if (fs.existsSync(contentPath)) die(`이미 있다: ${contentPath} — 덮어쓰지 않는다`);

/* ── 버튼 슬롯: SpokeClient 는 qa 인덱스 2·4·마지막에만 렌더한다 ──
   여기서 자리를 잡아 두면 "내용상 어울리는 카드에 넣었다가 안 보이는" 일이 없다. */
const n = S.qa.length;
const SLOTS = [...new Set([2, 4, n - 1].filter((i) => i >= 0 && i < n))];

const exportName = `${S.policyDir}${S.fileName}SpokeContent`;
const hubPath = S.hubPath ?? `/policy/${S.hubSlug}`;

const qaBlocks = S.qa.map((q: string, i: number) => {
  const anchor = `q${i + 1}`;
  const act = SLOTS.includes(i)
    ? `      act: {
        cue: 'TODO 누를 이유 한 줄 — 바로 위 문단에서 이어져야 한다. 앞에서 안 꺼낸 얘기를 버튼 문구로 쓰지 않는다.',
        label: 'TODO 버튼 문구',
        url: HUB,
      },\n`
    : '';
  return `    {
      q: '${q.replace(/'/g, "\\'")}', anchor: '${anchor}',
      intro:
        'TODO 본문. 이 질문은 실검색어(PAA)다. 답도 검색한 사람 기준으로 쓴다.',
      highlights: ['TODO', 'TODO', 'TODO', 'TODO'],
${act}      sourceNote: '* 출처: ${S.sourceName} (${new Date().toISOString().slice(0, 10)} 확인)',
    },`;
}).join('\n');

const faqBlocks = (S.faq ?? []).map((q: string) => `    {
      q: '${q.replace(/'/g, "\\'")}',
      a: 'TODO 답. 추출본에 있는 말로만 쓴다.',
      source: '${S.sourceName}', sourceUrl: SRC_URL_PLACEHOLDER,
    },`).join('\n').replace(/SRC_URL_PLACEHOLDER/g, 'SRC');

const file = `import type { SpokeData } from '../../SpokeClient';

/* 추출본: ${S.sourceFile}
 * 1차 출처: ${S.sourceName}
 *   ${S.sourceUrl}
 * 쓰지 않는 것:
 *   - TODO 검증 못 한 항목을 사유와 함께 여기 적는다 (본문에 쓰지 않는다)
 */

const SRC = '${S.sourceUrl}';
const HUB = '${hubPath}';

export const ${exportName}: SpokeData = {
  h1: '${S.h1.replace(/'/g, "\\'")}',
  breadcrumb: '${S.breadcrumb}',
  description:
    '${(S.description ?? 'TODO').replace(/'/g, "\\'")}',
  datePublished: '${new Date().toISOString().slice(0, 19)}+09:00',
  dateModified: '${new Date().toISOString().slice(0, 19)}+09:00',
  keyFacts: {
    'TODO 항목': 'TODO 값 — 추출본에 있는 숫자만',
  },
  keyFactsHighlights: {},
  qa: [
${qaBlocks}
  ],
  faqData: [
${faqBlocks}
  ],
  sources: [
    { name: '${S.sourceName}', url: SRC },
  ],
};
`;

/* ── 배선: registry.ts + 허브 Spokes 배열. 하나라도 빠지면 404 ── */
const REG = 'data/spokes/registry.ts';
const HUBFILE = `data/policies/${S.hubSlug}.ts`;
let reg = fs.readFileSync(REG, 'utf8');
let hub = fs.readFileSync(HUBFILE, 'utf8');

if (reg.includes(`'${S.slug}':`)) die(`registry 에 이미 있다: ${S.slug}`);

const importLine = `import { ${exportName} } from '@/app/policy/[id]/[spoke]/content/${S.policyDir}/${S.fileName}';`;
const lastImport = reg.lastIndexOf("\nimport { ");
const impEnd = reg.indexOf('\n', reg.indexOf(';', lastImport));
reg = reg.slice(0, impEnd) + '\n' + importLine + reg.slice(impEnd);

const mapKey = `  '${S.hubSlug}': {`;
/* 허브의 첫 스포크면 registry 에 칸이 없다. 죽지 말고 만든다(2026-08-25). */
if (!reg.includes(mapKey)) {
  const anchor = 'export const SpokesRegistry: Record<string, Record<string, SpokeData>> = {';
  if (!reg.includes(anchor)) die(`registry 형태가 바뀌었다 — SpokesRegistry 선언을 못 찾음`);
  reg = reg.replace(anchor, `${anchor}\n  '${S.hubSlug}': {\n  },`);
  console.log(`   registry 에 허브 칸 신설: ${S.hubSlug}`);
}
reg = reg.replace(mapKey, `${mapKey}\n    '${S.slug}': ${exportName},`);

/* hubVar 는 허브 파일에서 읽는다. spec 에 적게 하면 매번 틀린다(2026-08-25 실제로 틀렸다). */
if (!S.hubVar) {
  const m = hub.match(/export const (\w+Spokes)\s*=\s*\[/);
  if (!m) die(`허브 파일에 Spokes 배열이 없다: ${HUBFILE}`);
  S.hubVar = m[1];
  console.log(`   hubVar 자동 인식: ${S.hubVar}`);
}
const hubKey = `export const ${S.hubVar} = [`;
if (!hub.includes(hubKey)) die(`허브에 Spokes 배열이 없다: ${S.hubVar}`);
hub = hub.replace(hubKey,
  `${hubKey}\n  { slug: '${S.slug}', role: '${S.role ?? 'eligibility'}', title: '${S.h1.replace(/'/g, "\\'")}' },`);

if (DRY) {
  console.log(`── ${contentPath} (미리보기) ──\n`);
  console.log(file.split('\n').slice(0, 40).join('\n'));
  console.log(`\n… qa ${n}개 · 버튼 슬롯 [${SLOTS.join(', ')}]`);
  process.exit(0);
}

fs.mkdirSync(path.dirname(contentPath), { recursive: true });
fs.writeFileSync(contentPath, file);
fs.writeFileSync(REG, reg);
fs.writeFileSync(HUBFILE, hub);

console.log(`✅ ${S.slug}`);
console.log(`   본문   ${contentPath}`);
console.log(`   배선   registry.ts + ${S.hubVar}`);
console.log(`   버튼   qa 인덱스 [${SLOTS.join(', ')}] 에 자리 잡음 (그 밖에 넣으면 화면에 안 나온다)`);
console.log(`   추출본 ${S.sourceFile}`);
console.log(`   → TODO 를 채운 뒤: npx tsx scripts/check-source-match.ts`);
