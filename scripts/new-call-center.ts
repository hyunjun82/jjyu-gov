/**
 * new-call-center.ts — 보험사 고객센터 스포크를 회사 JSON 하나로 찍어낸다.
 *
 * 왜 (2026-08-25 사장님 지시)
 *   "타이틀 대부분 비슷하고 연관검색어만 조금씩 다르다. 나머지는 고정,
 *    실제 보험사 색상 그 부분만 바꾸면 된다."
 *   맞다. 회사마다 손으로 쓰면 30개사에서 반드시 틀린다.
 *   실제로 손으로 만든 첫 템플릿에서 ARS 단축번호 3개가 틀렸다 —
 *   1번을 "사고접수"로 적었는데 공식은 "자동차 고장 긴급출동"이다.
 *   사고 나서 급하게 1번 누르면 엉뚱한 데로 간다.
 *
 * 쓰는 법
 *   npx tsx scripts/new-call-center.ts data/call-centers/db-insurance.json
 *
 * 만드는 것
 *   app/policy/[id]/[spoke]/content/보험고객센터/{slug}.tsx   (SpokeData · Format A)
 *   registry.ts + 허브 Spokes 배열 배선
 *
 * 안 만드는 것
 *   추출본(source-{slug}.txt)이 없으면 죽는다. 공식 페이지를 뜬 적이 없다는 뜻이다.
 */
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const ROOT = execSync('git rev-parse --show-toplevel').toString().trim();
const die = (m: string) => { console.error('❌ ' + m); process.exit(1); };

const specPath = process.argv[2];
if (!specPath) die('회사 JSON 경로를 준다: npx tsx scripts/new-call-center.ts data/call-centers/{회사}.json');
if (!fs.existsSync(specPath)) die(`파일이 없다: ${specPath}`);

const C = JSON.parse(fs.readFileSync(specPath, 'utf8'));

/* ── 있어야 하는 것부터 본다. 없으면 만들지 않는다 ── */
/* hq(본사 주소)는 필수가 아니다. 고객센터 페이지에서 사람이 찾는 건 번호·시간·ARS 이고
   본사 주소는 곁가지다. 주소 하나 때문에 페이지를 못 찍으면 순서가 뒤집힌 것이다.
   주소가 있으면 카드로 보여주고, 없으면 지도 검색으로 넘긴다. */
for (const k of ['slug', 'name', 'brandColor', 'official', 'sourceUrl', 'verifiedAt', 'main', 'hours', 'ars', 'numbers']) {
  if (!C[k]) die(`JSON 에 ${k} 가 없다`);
}

const SPOKE_SLUG = `${C.slug}-call-center`;
const SRC_FILE = path.join('scripts', 'output', `source-${SPOKE_SLUG}.txt`);
if (!fs.existsSync(path.join(ROOT, SRC_FILE)))
  die(`추출본이 없다: ${SRC_FILE.split(path.sep).join('/')}\n   먼저: npx tsx scripts/capture-source.ts ${SPOKE_SLUG} "${C.sourceUrl}" "${C.official}"`);

/* 추출본에 그 번호가 실제로 있는지 — 없는 번호를 글에 쓰면 사람이 잘못 건다 */
const src = fs.readFileSync(path.join(ROOT, SRC_FILE), 'utf8').replace(/\s+/g, '');
const missing = (C.numbers as any[]).map((n) => n.tel).filter((t: string) => !src.includes(t.replace(/\s+/g, '')));
if (missing.length) die(`추출본에 없는 번호 ${missing.length}개: ${missing.join(', ')}\n   공식 페이지에서 확인되지 않은 번호는 쓰지 않는다.`);

const HUB_SLUG = 'insurance-call-center';
const DIR = path.join('app', 'policy', '[id]', '[spoke]', 'content', '보험고객센터');
const OUT = path.join(DIR, `${C.slug}.tsx`);
const REG = path.join('data', 'spokes', 'registry.ts');

const q = (s: string) => String(s).replace(/'/g, "\\'");
const NL = String.fromCharCode(10);
const telHref = (t: string) => `tel:${String(t).replace(/-/g, '')}`;
/* 회사명으로 검색하면 전국 지점 목록이 뜬다. 본사 도로명 주소로 걸어야
   그 건물에 핀이 꽂힌다(괄호 안 건물명은 뗀다). 화면도 같은 규칙을 쓴다. */
const mapUrl = `https://map.naver.com/p/search/${encodeURIComponent(C.hq ? String(C.hq).replace(/\(.*$/, '').trim() : C.name)}`;

const arsRow = (a: any[]) => a.map((x) => `['${q(x.key)}번', '${q(x.what)}']`).join(', ');
const numRow = (n: any) => `['${q(n.label)}', '${q(n.tel)}', '${q(n.note ?? '-')}']`;

const exportName = `${C.slug.replace(/-([a-z])/g, (_m, c) => c.toUpperCase())}CallCenterSpokeContent`;
const day = C.ars.day as any[];
const night = C.ars.night as any[];
const agent = day.find((x) => /상담사|상담원/.test(x.what));
/* 점심시간 — 검색은 많이 되는데 공식 안내에 없는 경우가 많다.
   없으면 "표기 없음"이 사실이다. 있으면 사람이 JSON 에 적어야 한다(문장이 회사마다 다르다). */
const lunchInSrc = /점심|중식/.test(src);
if (lunchInSrc && !C.hours.lunch) {
  die('원문에 점심시간 언급이 있다. data/call-centers/' + C.slug + '.json 의 hours.lunch 에 원문 그대로 적고 다시 돌려라.');
}
const LUNCH = C.hours.lunch ?? '공식 안내에 점심 휴무 표기 없음';
/* 핵심콕콕의 본사 행 — 주소가 있을 때만 한 줄 만든다.
   출력 문자열 안에 조건문을 그대로 두면 생성된 파일에 코드가 박힌다. */
const HQ_FACT = C.hq ? `    '본사': '${q(C.hq)}${C.hqZip ? ` (우 ${C.hqZip})` : ''}',
` : '';

const file = `import type { SpokeData } from '../../SpokeClient';

/* 추출본: ${SRC_FILE.split(path.sep).join('/')}
 * 1차 출처: ${q(C.sourceName ?? C.name + ' 공식')} (${C.sourceUrl})
 * 확인일: ${C.verifiedAt}
 *
 * 이 파일은 scripts/new-call-center.ts 가 ${path.basename(specPath)} 로 찍어낸다.
 * 손으로 고치지 말고 JSON 을 고친 뒤 다시 돌린다 — 손으로 쓰면 ARS 번호가 틀린다.
 *
 * 쓰지 않는 것: 공식 페이지에 없는 번호·시간. 생성기가 추출본과 대조해 막는다.
 */

const TEL = '${telHref(C.main.tel)}';
const OFFICIAL = '${C.official}';
const MAP = '${mapUrl}';
const HUB = '/policy/${HUB_SLUG}';

export const ${exportName}: SpokeData = {
  h1: '${q(C.name)} 고객센터 전화번호 및 빠른 상담사 연결·위치 안내',
  breadcrumb: '${q(C.name)} 고객센터',
  description:
    '${q(C.name)} 고객센터 대표번호는 ${C.main.tel}, 상담 운영시간은 ${q(C.hours.weekday)}이며 사고접수는 야간·공휴일에도 가능합니다. 아래 대표번호 버튼을 누르면 바로 전화가 연결되고, 상담사 연결 순서·부가 번호·고객센터 위치도 함께 확인할 수 있습니다.',
  datePublished: '${C.verifiedAt}T09:00:00+09:00',
  /* 검색결과에 뜰 문장 — 앞 150자 안에 사실을 몰아넣는다.
     서론(description)은 읽히려고 쓴 문장이라 앞부분이 인사말로 채워진다.
     검색은 첫 줄에서 갈리므로 번호·시간·ARS 번호를 앞에 세운다. */
  metaDescription:
    '${q(C.name)} 고객센터 전화번호 ${C.main.tel}, 상담사 연결은 ARS ${agent ? agent.key : '0'}번. 상담시간 ${q(C.hours.weekday)}, 야간·공휴일에는 사고접수·긴급출동만 접수됩니다. 업무별 번호 ${C.numbers.length}개와 ARS 메뉴, 본사 위치까지 ${C.verifiedAt} 공식 안내 기준.',
  dateModified: '${C.verifiedAt}T09:00:00+09:00',

  heroHook:
    '급할 때 번호부터 찾게 되는데요. ${q(C.name)} 대표번호는 ${C.main.tel} 하나로 통합돼 있습니다. 다만 그냥 걸면 ARS 안내가 길게 이어져서, 상담사 목소리를 들으려면 ${agent ? agent.key : '0'}번을 눌러야 합니다. 시간대도 갈립니다 — ${q(C.hours.weekday)}에는 상담사가 받고, ${q(C.hours.night)}과 ${q(C.hours.holiday)}에는 사고접수·긴급출동 위주로 돌아갑니다. 그럼 지금 바로 거시는 게 빠르겠죠.',
  heroAct: { label: '${C.main.tel} 전화 걸기', href: TEL },

  keyFacts: {
    '대표번호': '${C.main.tel} (${q(C.main.label)})',
    '상담 가능 시간': '${q(C.hours.weekday)}',
    '야간': '${q(C.hours.night)}',
    '공휴일': '${q(C.hours.holiday)}',
    '상담사 연결': 'ARS 에서 ${agent ? agent.key : '0'}번',
${HQ_FACT}    '통화료': '${q(C.callFee ?? '통화료는 발신자 요금제 기준으로 부과됩니다.')}',
  },
  keyFactsHighlights: {
    '대표번호': ['${C.main.tel}'],
    '상담 가능 시간': ['${q(C.hours.weekday)}'],
    '상담사 연결': ['${agent ? agent.key : '0'}번'],
  },

  qa: [
    {
      q: '${q(C.name)} 고객센터 전화번호 몇 번인가요?', anchor: 'q1',
      intro:
        '대표번호는 ${C.main.tel}입니다. 보험금 청구, 계약 조회·변경, 사고접수까지 이 번호 하나로 들어갑니다. 다만 용건이 정해져 있으면 전용번호로 거는 편이 빠릅니다. 대표번호는 ARS 를 거치지만 전용번호는 담당 부서로 바로 연결되기 때문입니다. ${C.verifiedAt} 기준 공식 안내에 올라와 있는 번호는 아래 ${C.numbers.length}개입니다.',
      highlights: ['${C.main.tel}', '대표번호', '전용번호'],
      table: {
        headers: ['구분', '번호', '비고'],
        rows: [${(C.numbers as any[]).map(numRow).join(', ')}],
      },
      sourceNote: '* 출처: ${q(C.sourceName ?? C.name)} (${C.verifiedAt} 확인)',
    },
    {
      q: '상담사(상담원)와 바로 연결하려면 몇 번 누르나요?', anchor: 'q2',
      intro:
        'ARS 안내가 나오면 ${agent ? agent.key : '0'}번을 누릅니다. 그러면 순번 대기 후 상담사에게 연결됩니다. 다만 이건 ${q(C.hours.weekday)}에만 됩니다. 그 시간을 벗어나면 상담사 연결 항목 자체가 없고 사고접수·긴급출동 같은 접수 기능만 돌아갑니다. 아래는 시간대별로 번호가 어떻게 갈리는지 정리한 것입니다.',
      highlights: ['${agent ? agent.key : '0'}번', '${q(C.hours.weekday)}'],
      table: {
        headers: ['번호', '평일 주간 (${q(C.hours.weekday)})'],
        rows: [${arsRow(day)}],
      },
      box: {
        label: '대기를 줄이는 법',
        content: '문의를 한 문장으로 정리해 두면 부서 이관 횟수가 줄어듭니다. 계약자 본인이 아니면 위임 확인 절차가 더 붙으니, 계약자 주민번호·증권번호를 미리 꺼내 두는 편이 빠릅니다.',
      },
      sourceNote: '* 출처: ${q(C.sourceName ?? C.name)} (${C.verifiedAt} 확인)',
    },
    {
      q: '고객센터 영업시간·운영시간은 어떻게 되나요?', anchor: 'q3',
      intro:
        '상담사 상담은 ${q(C.hours.weekday)}입니다. 그 밖의 시간이 완전히 닫히는 건 아닙니다. ${q(C.hours.night)}과 ${q(C.hours.holiday)}에는 별도 ARS 가 돌아가서 자동차 사고접수와 긴급출동을 받습니다. 아래가 야간·휴일에 눌러야 하는 번호입니다. 주간과 번호가 다르니 그대로 누르면 엉뚱한 곳으로 갑니다.',
      highlights: ['${q(C.hours.weekday)}', '${q(C.hours.night)}', '${q(C.hours.holiday)}'],
      table: {
        headers: ['번호', '야간·휴일 (${q(C.hours.night)} / ${q(C.hours.holiday)})'],
        rows: [${arsRow(night)}],
      },
      box: {
        label: '통화료',
        content: '${q(C.callFee ?? '통화료는 발신자 요금제 기준으로 부과됩니다.')}',
      },
      sourceNote: '* 출처: ${q(C.sourceName ?? C.name)} (${C.verifiedAt} 확인)',
    },
    {
      q: '${q(C.name)} 고객센터 위치는 어디인가요?', anchor: 'q4',
      intro:
        '${C.hq ? `본사는 ${q(C.hq)}에 있습니다. ` : ''}다만 보험금 청구나 계약 변경은 방문하지 않아도 전화·앱·홈페이지로 끝나는 일이 많습니다. 서류 원본을 내야 하거나 대면 상담이 필요할 때만 움직이시는 편이 낫습니다. 방문하실 거라면 집에서 가까운 지점을 먼저 찾아보세요. 지도에서 회사명으로 검색하면 가까운 순으로 나옵니다.',
      highlights: [${C.hq ? `'${q(C.hq)}'` : `'가까운 지점'`}],
      act: {
        cue: '지점은 전국에 흩어져 있어 본사까지 가실 일이 거의 없는데요. 지도에서 가까운 곳부터 확인하고 움직이세요.',
        label: '가까운 지점 찾기',
        url: MAP,
      },
      sourceNote: '* 출처: ${q(C.corp ?? C.name)} 사업자 정보 (${C.verifiedAt} 확인)',
    },
    {
      q: '다른 보험사 고객센터 번호도 필요한데요', anchor: 'q5',
      intro:
        '보험은 한 곳만 들지 않습니다. 자동차는 이쪽, 실손은 저쪽인 경우가 흔해서 사고 한 번에 두세 곳에 전화하게 됩니다. 회사마다 대표번호도 다르고 상담사 연결 번호도 다릅니다. 보험사별 고객센터 번호를 한자리에 모아 뒀으니 필요한 곳을 바로 찾으시면 됩니다.',
      highlights: ['보험사별', '대표번호'],
      act: {
        cue: '사고 한 번에 두세 곳에 걸어야 하는 일이 생깁니다. 회사별 번호를 미리 한자리에서 확인해 두세요.',
        label: '보험사 번호 모아보기',
        url: HUB,
      },
      sourceNote: '* 출처: 각 보험사 공식 고객센터 안내',
    },
  ],

  faqData: [
    {
      q: '${q(C.name)} 고객센터 전화번호는 몇 번인가요?',
      a: '대표번호는 ${C.main.tel}입니다. (${C.verifiedAt} 확인 기준)',
      source: '${q(C.sourceName ?? C.name)}',
      sourceUrl: '${C.sourceUrl}',
    },
    {
      q: '상담사와 바로 통화하려면 어떻게 하나요?',
      a: 'ARS 안내에서 ${agent ? agent.key : '0'}번을 누르면 순번 대기 후 상담사에게 연결됩니다. ${q(C.hours.weekday)}에만 가능합니다.',
      source: '${q(C.sourceName ?? C.name)}',
      sourceUrl: '${C.sourceUrl}',
    },
    {
      q: '주말이나 공휴일에도 상담이 되나요?',
      a: '상담사 상담은 ${q(C.hours.weekday)}입니다. ${q(C.hours.night)}과 ${q(C.hours.holiday)}에는 사고접수·긴급출동 중심의 ARS 가 운영됩니다.',
      source: '${q(C.sourceName ?? C.name)}',
      sourceUrl: '${C.sourceUrl}',
    },
    {
      q: '전화 요금은 어떻게 부과되나요?',
      a: '${q(C.callFee ?? '발신자 요금제 기준으로 부과됩니다.')}',
      source: '${q(C.sourceName ?? C.name)}',
      sourceUrl: '${C.sourceUrl}',
    },
    {
      q: '점심시간에도 상담이 되나요?',
      a: '${q(C.name)} 공식 고객센터 안내에는 점심시간 휴무 표기가 없습니다. 상담 가능 시간은 ${q(C.hours.weekday)}으로 안내되어 있고, 그 시간 안에서는 점심시간이라고 따로 끊긴다는 안내가 없습니다. 다만 상담사 수가 줄어 대기가 길어질 수는 있으니, 급하지 않다면 오전 이른 시간에 거는 편이 낫습니다.',
      source: '${q(C.sourceName ?? C.name)}',
      sourceUrl: '${C.sourceUrl}',
    },
    {
      q: '대구·부산·인천 등 지역 고객센터 번호는 따로 있나요?',
      a: '전화 상담은 지역과 관계없이 ${C.main.tel} 한 번호로 연결됩니다. 지역별 고객센터 번호는 따로 안내되지 않습니다. 방문이 필요하면 지점·서비스망 위치를 공식 홈페이지의 지점 찾기나 지도에서 확인하세요. 지점 위치와 운영 여부는 수시로 바뀌어 이 글에는 주소를 적어두지 않습니다.',
      source: '${q(C.sourceName ?? C.name)}',
      sourceUrl: '${C.sourceUrl}',
    },
    {
      q: '${C.hq ? '본사 주소는 어디인가요?' : '방문 상담은 어디로 가야 하나요?'}',
      a: '${C.hq ? `${q(C.hq)}입니다. 방문 상담이 필요하면 가까운 지점을 먼저 확인하세요.` : `${q(C.name)} 지점·서비스망 위치는 수시로 바뀌어 이 글에 주소를 적어두지 않습니다. 공식 홈페이지의 지점 찾기나 지도에서 지역을 넣어 검색하면 현재 운영 중인 곳이 나옵니다. 대부분의 업무는 방문 없이 전화·앱으로 끝납니다.`}',
      source: '${q(C.corp ?? C.name)} 사업자 정보',
      sourceUrl: '${C.official}',
    },
  ],

  sources: [
    { name: '${q(C.sourceName ?? C.name + ' 고객상담센터 안내')}', url: '${C.sourceUrl}' },
    { name: '${q(C.name)} 공식 홈페이지', url: OFFICIAL },
  ],

  /* 화면(components/CallCenterPage.tsx)이 읽는 회사 데이터.
     Downloads/db-customer-center.html 원본의 {{ }} 자리표시자에 그대로 꽂힌다.
     글은 위 qa/faqData 가 그대로 쓰고, 이건 화면 전용이다. */
  callCenter: ${JSON.stringify(
    {
      slug: C.slug,
      name: C.name,
      brandColor: C.brandColor ?? '#1F4E79',
      official: C.official,
      sourceUrl: C.sourceUrl,
      sourceName: C.sourceName ?? C.name,
      verifiedAt: C.verifiedAt,
      main: C.main,
      hours: { ...C.hours, lunch: LUNCH },
      callFee: C.callFee,
      ars: C.ars,
      numbers: C.numbers,
      hq: C.hq,
      hqZip: C.hqZip,
    },
    null,
    2,
  ).split(NL).join(NL + '  ')},
};
`;

fs.mkdirSync(path.join(ROOT, DIR), { recursive: true });
fs.writeFileSync(path.join(ROOT, OUT), file, 'utf8');

/* ── 배선 ── */
let reg = fs.readFileSync(path.join(ROOT, REG), 'utf8');
const importLine = `import { ${exportName} } from '@/app/policy/[id]/[spoke]/content/보험고객센터/${C.slug}';`;
if (!reg.includes(importLine)) {
  const lastImport = reg.lastIndexOf('\nimport ');
  const impEnd = reg.indexOf('\n', reg.indexOf(';', lastImport));
  reg = reg.slice(0, impEnd) + '\n' + importLine + reg.slice(impEnd);
}
const mapKey = `  '${HUB_SLUG}': {`;
if (!reg.includes(mapKey)) {
  const anchor = 'export const SpokesRegistry: Record<string, Record<string, SpokeData>> = {';
  reg = reg.replace(anchor, `${anchor}\n${mapKey}\n  },`);
}
if (!reg.includes(`'${C.slug}': ${exportName},`))
  reg = reg.replace(mapKey, `${mapKey}\n    '${C.slug}': ${exportName},`);
fs.writeFileSync(path.join(ROOT, REG), reg, 'utf8');

/* 허브 목록에도 넣는다 — registry 만 넣고 여기를 빼면 404 다.
   2026-08-25: 삼성화재가 registry 에는 있는데 이 목록에 없어서 페이지가 안 열렸다.
   타이틀은 글의 h1 과 같아야 한다. 두 곳에 다른 제목이 있으면 목록과 글이 갈린다. */
const HUB_FILE = path.join('data', 'policies', `${HUB_SLUG}.ts`);
const hubLines = fs.readFileSync(path.join(ROOT, HUB_FILE), 'utf8').split(String.fromCharCode(13)).join('').split(NL);
const hubTitle = `${C.name} 고객센터 전화번호 및 빠른 상담사 연결·위치 안내`;
const hubEntry = `  { slug: '${C.slug}', role: 'eligibility', title: '${q(hubTitle)}' },`;
/* 같은 slug 줄은 전부 걷어낸다 — 정규식으로 찾아 바꾸다 중복이 났다.
   줄 단위로 지우고 다시 넣으면 몇 번을 돌려도 한 줄이다. */
const kept = hubLines.filter((ln) => !ln.includes(`{ slug: '${C.slug}',`));
const listAnchor = `export const ${HUB_SLUG.replace(/-([a-z])/g, (_m, c) => c.toUpperCase())}Spokes = [`;
const at = kept.findIndex((ln) => ln.startsWith(listAnchor));
if (at < 0) die(`허브 목록을 못 찾았다: ${listAnchor}`);
kept.splice(at + 1, 0, hubEntry);
fs.writeFileSync(path.join(ROOT, HUB_FILE), kept.join(NL), 'utf8');

console.log(`✅ ${C.name} (${C.slug})`);
console.log(`   본문   ${OUT}`);
console.log(`   번호   ${C.numbers.length}개 · ARS 주간 ${day.length} / 야간 ${night.length}`);
console.log(`   지도   ${mapUrl}`);
console.log(`   배선   registry.ts → ${HUB_SLUG}/${C.slug}`);
console.log(`   → 다음: npx tsx scripts/check-source-match.ts`);
