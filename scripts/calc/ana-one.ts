import fs from 'node:fs';
import { computeYearEnd } from '../../lib/year-end-tax/engine';
const rows = process.argv[2].split(',').flatMap((f) => JSON.parse(fs.readFileSync(f, 'utf8')));
const r = rows.find((x: any) => x.id === process.argv[3]);
const out = computeYearEnd(r.case);
console.log('oracle:', Object.entries(r.codes).filter(([k]) => +k >= 8700 && +k < 8800 || ['8923', '8924', '8990'].includes(k)).map(([k, v]: any) => k + ':' + v.join('/')).join('  '));
console.log('engine:', JSON.stringify(out.detail), 'reduction', out.reduction, 'credit', out.creditTotal);
