const fs = require('fs');
const [, , file, ...ids] = process.argv;
const o = JSON.parse(fs.readFileSync(file, 'utf8'));
for (const id of ids) {
  const x = o.find((r) => r.id === id);
  if (!x) { console.log('없음', id); continue; }
  console.log('==', id, JSON.stringify(x.case).slice(0, 700));
  console.log(Object.entries(x.codes).map(([k, v]) => `${k}:${v.join('/')}`).join('  '));
}
