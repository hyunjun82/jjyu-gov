/**
 * scripts/collect-multi-source.ts
 * Multi-source collection: government sites + Naver SERP data.
 * Usage: npx tsx scripts/collect-multi-source.ts <keyword> <slug>
 * Output: data/raw/<slug>.json + data/keywords/<slug>.json
 */

import * as fs from 'fs';
import * as path from 'path';

const ROOT = process.cwd();
const RAW_DIR = path.join(ROOT, 'data', 'raw');
const KW_DIR = path.join(ROOT, 'data', 'keywords');

interface SourceHit {
  source: string;
  url: string;
  title?: string;
  text: string;
  fetchedAt: string;
}

interface NaverKeywords {
  paa: string[];
  related: string[];
  autocomplete: string[];
}

interface RawCollection {
  keyword: string;
  slug: string;
  collectedAt: string;
  sources: SourceHit[];
  naver: NaverKeywords;
}

// Government site list - search URLs for each domain
const GOV_SITES = [
  { name: 'korea.kr',           urlBuilder: (kw: string) => 'https://www.korea.kr/search/search.do?searchKey=ALL&searchKeyword=' + encodeURIComponent(kw) },
  { name: 'mohw.go.kr',         urlBuilder: (kw: string) => 'https://www.mohw.go.kr/search/srcWordSearch.es?searchWord=' + encodeURIComponent(kw) + '&mid=a10100000000' },
  { name: 'bokjiro.go.kr',      urlBuilder: (kw: string) => 'https://www.bokjiro.go.kr/ssis-tbu/search/search.do?searchWrd=' + encodeURIComponent(kw) },
  { name: 'gov.kr',             urlBuilder: (kw: string) => 'https://www.gov.kr/portal/search?query=' + encodeURIComponent(kw) },
  { name: 'voucher.go.kr',      urlBuilder: (kw: string) => 'https://www.socialservice.or.kr/user/htmlEditor/list2.do?searchWord=' + encodeURIComponent(kw) },
  { name: 'law.go.kr',          urlBuilder: (kw: string) => 'https://www.law.go.kr/LSW/lsScSc.do?menuId=1&query=' + encodeURIComponent(kw) },
  { name: 'epeople.go.kr',      urlBuilder: (kw: string) => 'https://www.epeople.go.kr/jsp/user/UserMain.paid?keyword=' + encodeURIComponent(kw) },
  { name: 'work24.go.kr',       urlBuilder: (kw: string) => 'https://www.work24.go.kr/cm/search/searchSubject.do?searchWord=' + encodeURIComponent(kw) },
  { name: 'seoul.go.kr',        urlBuilder: (kw: string) => 'https://www.seoul.go.kr/search/integratedSearch.do?searchVal=' + encodeURIComponent(kw) },
];

const NAVER_SEARCH = (kw: string) => 'https://search.naver.com/search.naver?query=' + encodeURIComponent(kw);

/**
 * Stub collector. In production this calls Claude in Chrome MCP or Playwright.
 * For now, this writes a skeleton JSON the human can fill, or that
 * a separate collector script (running in Claude context) will populate.
 */
async function collect(keyword: string, slug: string): Promise<RawCollection> {
  const now = new Date().toISOString();
  const sources: SourceHit[] = GOV_SITES.map((s) => ({
    source: s.name,
    url: s.urlBuilder(keyword),
    text: '',  // to be filled by MCP scraper
    fetchedAt: now,
  }));
  sources.push({
    source: 'naver',
    url: NAVER_SEARCH(keyword),
    text: '',
    fetchedAt: now,
  });

  return {
    keyword,
    slug,
    collectedAt: now,
    sources,
    naver: {
      paa: [],            // People Also Ask (3 items)
      related: [],        // related search box (7-8 items)
      autocomplete: [],   // autocomplete chips (6 items)
    },
  };
}

async function main() {
  const keyword = process.argv[2];
  const slug = process.argv[3];
  if (!keyword || !slug) {
    console.error('Usage: npx tsx scripts/collect-multi-source.ts <keyword> <slug>');
    process.exit(1);
  }

  if (!fs.existsSync(RAW_DIR)) fs.mkdirSync(RAW_DIR, { recursive: true });
  if (!fs.existsSync(KW_DIR)) fs.mkdirSync(KW_DIR, { recursive: true });

  const data = await collect(keyword, slug);

  const rawPath = path.join(RAW_DIR, slug + '.json');
  const kwPath = path.join(KW_DIR, slug + '.json');
  fs.writeFileSync(rawPath, JSON.stringify(data, null, 2), 'utf-8');
  fs.writeFileSync(kwPath, JSON.stringify(data.naver, null, 2), 'utf-8');

  console.log('Skeleton written to:');
  console.log('  ' + rawPath);
  console.log('  ' + kwPath);
  console.log('');
  console.log('NEXT: fill source.text and naver fields via Claude in Chrome MCP.');
  console.log('Targets:');
  data.sources.forEach((s) => console.log('  - ' + s.source + ': ' + s.url));
  console.log('  - naver SERP for PAA/related/autocomplete');
}

main().catch((e) => { console.error(e); process.exit(1); });
