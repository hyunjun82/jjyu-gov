/**
 * 타이틀 낱말 중복 점검 — 한 타이틀 안에서 같은 말(2글자 이상)이 서로 다른 낱말에 두 번 나오면 알린다 (2026-10-10)
 *   node scripts/gov/check-title-dup.mjs [spec.md …]     인자가 없으면 scripts/specs/*.md 전부
 * 사장님 규칙: "같은 단어를 두 번 쓰지 않는다"(예: 서류, 제출서류). 낱말 안의 겹침(매매계약·계약금)은 의미가 달라 목록으로만 보여 준다.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
export function titleDup(title) {
  const STOP = new Set(['부터', '까지', '에서', '하는', '있는', '하면', '했을', '때']);
  const words = title.split(/[s,·]+/).filter(Boolean);
  const hit = new Set();
  for (let i = 0; i < words.length; i++) for (let j = i + 1; j < words.length; j++) {
    const a = words[i], b = words[j];
    for (let k = 0; k + 2 <= a.length; k++) { const g = a.slice(k, k + 2); if (!STOP.has(g) && b.includes(g)) hit.add(g); }
  }
  return [...hit];
}
const isMain = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
const files = !isMain ? [] : process.argv.slice(2).length ? process.argv.slice(2) : fs.readdirSync('scripts/specs').filter((f) => f.endsWith('.md')).map((f) => path.join('scripts/specs', f));
const STOP = new Set(['부터', '까지', '에서', '하는', '있는', '하면', '했을', '때']);
let bad = 0;
for (const f of files) {
  const t = (fs.readFileSync(f, 'utf8').match(/^title:\s*(.+)$/m) || [])[1];
  if (!t) continue;
  const words = t.split(/[\s,·]+/).filter(Boolean);
  const hit = new Set();
  for (let i = 0; i < words.length; i++) for (let j = i + 1; j < words.length; j++) {
    const a = words[i], b = words[j];
    for (let k = 0; k + 2 <= a.length; k++) {
      const g = a.slice(k, k + 2);
      if (!STOP.has(g) && b.includes(g)) hit.add(g);
    }
  }
  if (hit.size) { bad++; console.log(`⚠ ${path.basename(f, '.md')} — ${[...hit].join('·')} 겹침: ${t}`); }
}
console.log(bad ? `\n${bad}건에서 겹침이 보인다 — 의미가 다른 낱말(예: 계약·계약금)인지 눈으로 확인` : '✅ 겹침 없음');
