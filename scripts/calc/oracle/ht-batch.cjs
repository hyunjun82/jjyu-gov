// 사용: node ht-batch.cjs cases.json out.json [workers=4]
// cases.json: [{id, ...case}]  →  out.json: [{id, case, codes:{amtClusCd:[use,trgt,ddc]}, bsc:{...}}]
const fs = require('fs');
const { runCase } = require('./ht-run.cjs');
const [, , inFile, outFile, w] = process.argv;
const cases = JSON.parse(fs.readFileSync(inFile, 'utf8'));
let out = fs.existsSync(outFile) ? JSON.parse(fs.readFileSync(outFile, 'utf8')) : [];
const done = new Set(out.map((x) => x.id));
const todo = cases.filter((c) => !done.has(c.id));
const WORKERS = Number(w || 4);
let idx = 0;
const save = () => fs.writeFileSync(outFile, JSON.stringify(out));
async function worker(n) {
  while (idx < todo.length) {
    const c = todo[idx++];
    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        const r = await runCase(c); const effCase = { ...r.eff };
        if (!r.captured) throw new Error('no response');
        const codes = {};
        for (const x of r.captured.yrsTaxClcDetailDVOList) if (x.useAmt || x.ddcAmt || x.ddcTrgtAmt) codes[x.amtClusCd] = [x.useAmt, x.ddcTrgtAmt, x.ddcAmt];
        const bsc = r.captured.yrsTaxClcBscList && r.captured.yrsTaxClcBscList[0];
        out.push({ id: c.id, case: effCase, orig: c, codes, bsc: bsc && { erinAmt: bsc.erinAmt, totaSnwAmt: bsc.totaSnwAmt, ppmTxamt: bsc.ppmTxamt } });
        save();
        console.log(`[w${n}] ok ${c.id} (${out.length}/${cases.length})`);
        break;
      } catch (e) {
        console.log(`[w${n}] fail ${c.id} try${attempt}: ${e.message.split('\n')[0].slice(0, 100)}`);
        if (attempt === 3) out.push({ id: c.id, case: c, error: e.message.split('\n')[0].slice(0, 200) }), save();
      }
    }
  }
}
(async () => {
  await Promise.all(Array.from({ length: WORKERS }, (_, i) => worker(i + 1)));
  console.log('DONE', out.length, 'errors', out.filter((x) => x.error).length);
})();
