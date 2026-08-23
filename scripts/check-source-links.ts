/**
 * 출처 링크 검사 — 링크를 실제로 열어 "그 문서가 맞는지" 본다.
 *
 * 왜 생겼나 (2026-08-20)
 *   실손 스포크 60파일 100군데가 법제처 링크를 걸고 있었는데,
 *   admRulSeq 만 붙은 그 링크는 「별표 1」 외화유동성관리를 연다.
 *   우리가 인용한 건 「별표 15」 실손의료보험 표준약관이다.
 *   추출본은 올바른 문서로 떴기 때문에 check-source-match 는 통과시켰다.
 *   숫자 대조로는 절대 못 잡는 구멍이라 링크 자체를 연다.
 *
 * 사용
 *   npx tsx scripts/check-source-links.ts            # 변경된 글의 링크만
 *   npx tsx scripts/check-source-links.ts --all      # 전부
 */
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const ROOT = path.join('app', 'policy', '[id]', '[spoke]', 'content');

/** 링크를 열었을 때 제목·본문에 이게 없으면 엉뚱한 문서다 */
const EXPECT: { pattern: RegExp; mustHave: RegExp; why: string }[] = [
  {
    pattern: /law\.go\.kr.*admRulBylInfoPLinkR/,
    mustHave: /표준약관|별표\s*15/,
    why: 'admRulSeq 만 걸면 별표 1(외화유동성관리)이 열린다. bylSeq·bylNo 를 붙여야 별표 15 가 열린다',
  },
];

function targets(): string[] {
  if (process.argv.includes('--all')) {
    const out: string[] = [];
    const walk = (d: string) => {
      for (const e of fs.readdirSync(d, { withFileTypes: true })) {
        const p = path.join(d, e.name);
        if (e.isDirectory()) walk(p);
        else if (e.name.endsWith('.tsx')) out.push(p);
      }
    };
    if (fs.existsSync(ROOT)) walk(ROOT);
    return out;
  }
  let raw = '';
  try { raw = execSync(`git diff --name-only origin/main...HEAD -- "${ROOT}"`, { encoding: 'utf8' }); }
  catch { try { raw = execSync(`git diff --name-only HEAD~1 -- "${ROOT}"`, { encoding: 'utf8' }); } catch {} }
  try { raw += execSync(`git ls-files --others --exclude-standard -- "${ROOT}"`, { encoding: 'utf8' }); } catch {}
  return [...new Set(raw.split('\n').map((s) => s.trim()).filter((s) => s.endsWith('.tsx')))];
}

async function head(url: string): Promise<string> {
  const r = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
  if (!r.ok) return `__HTTP_${r.status}__`;
  const html = await r.text();
  const t = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? '';
  /* 제목만으로 판단이 안 서는 뷰어형 페이지가 있어 앞부분 본문도 같이 본다 */
  return t + ' ' + html.replace(/<[^>]+>/g, ' ').slice(0, 4000);
}

(async () => {
  console.log('='.repeat(60));
  console.log(' 출처 링크 검사 — 링크를 열면 그 문서가 나오나');
  console.log('='.repeat(60));

  const files = targets().filter(fs.existsSync);
  if (!files.length) { console.log(' 변경된 글 없음 — 생략'); process.exit(0); }

  const seen = new Map<string, string>();   // url -> 본문 (같은 URL 은 한 번만 연다)
  let fail = 0, checked = 0;

  for (const f of files) {
    const src = fs.readFileSync(f, 'utf8');
    const name = f.replace(/\\/g, '/').split('/').slice(-2).join('/');
    const urls = [...new Set([...src.matchAll(/https?:\/\/[^\s'"`)]+/g)].map((m) => m[0]))];

    for (const url of urls) {
      const rule = EXPECT.find((e) => e.pattern.test(url));
      if (!rule) continue;
      checked++;
      let body = seen.get(url);
      if (body === undefined) {
        try { body = await head(url); } catch (e: any) { body = `__ERR_${e?.message ?? e}__`; }
        seen.set(url, body);
      }
      if (body.startsWith('__')) {
        console.log(`\n⚠ ${name} — 링크를 열지 못했다 (${body.slice(0, 30)})`);
        console.log(`   ${url.slice(0, 90)}`);
        continue;   // 네트워크 문제로 push 를 막지는 않는다
      }
      if (!rule.mustHave.test(body)) {
        fail++;
        console.log(`\n❌ ${name} — 링크가 엉뚱한 문서를 연다`);
        console.log(`   ${url.slice(0, 110)}`);
        console.log(`   ${rule.why}`);
      }
    }
  }

  console.log('');
  if (fail) { console.log(` ${fail}건 — 링크를 고친다.`); process.exit(1); }
  console.log(` 통과 — 검사한 링크 ${checked}개, 전부 맞는 문서를 연다`);
})();
