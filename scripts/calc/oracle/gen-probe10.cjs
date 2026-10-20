const out = [];
const M = 100_000; // 10만원 단위
const m = (id, rows, salary = 50_000_000) => out.push({ id, salary, medical: rows });
// 총급여 5천만 → 문턱 150만원
m('q10-1', [{ general: 2 * M }, { premature: 10 * M }]);
m('q10-2', [{}, { premature: 30 * M }]);
m('q10-3', [{}, { premature: 50 * M }]);
m('q10-4', [{ general: 5 * M }, { premature: 30 * M }]);
m('q10-5', [{ general: 10 * M }, { premature: 30 * M }]);
m('q10-6', [{ general: 14 * M }, { premature: 30 * M }]);
m('q10-7', [{ general: 15 * M }, { premature: 30 * M }]);
m('q10-8', [{ general: 16 * M }, { premature: 30 * M }]);
m('q10-9', [{}, { premature: 30 * M, infertility: 10 * M }]);
m('q10-10', [{}, { premature: 10 * M, infertility: 10 * M }]);
m('q10-11', [{ general: 10 * M }, { infertility: 10 * M, premature: 30 * M }]);
m('q10-12', [{ general: 5 * M }, { infertility: 5 * M, premature: 30 * M }]);
m('q10-13', [{ general: 5 * M }, { premature: 5 * M }]);
m('q10-14', [{ general: 12 * M }, { premature: 4 * M }]);
console.log(JSON.stringify(out));
