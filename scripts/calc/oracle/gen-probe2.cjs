const out = [];
// 소기업·소상공인 공제부금 한도: 총급여 구간별
for (const s of [20, 30, 40, 50, 60, 70, 80, 100, 120, 150, 200]) out.push({ id: `sb-${s}`, salary: s * 1_000_000, smallBiz: { amt: 8_000_000 } });
// 주택마련저축: 청약·종합·근로자 조합
const sub = [
  ['s35', { saving: 3_500_000 }], ['c35', { comp: 3_500_000 }], ['w35', { worker: 3_500_000 }],
  ['s1c1', { saving: 1_000_000, comp: 1_000_000 }], ['s2c2', { saving: 2_000_000, comp: 2_000_000 }], ['s3c3', { saving: 3_000_000, comp: 3_000_000 }],
  ['s2w2', { saving: 2_000_000, worker: 2_000_000 }], ['c2w2', { comp: 2_000_000, worker: 2_000_000 }], ['s1c1w1', { saving: 1_000_000, comp: 1_000_000, worker: 1_000_000 }],
  ['s3c2', { saving: 3_000_000, comp: 2_000_000 }], ['s23c33', { saving: 2_300_000, comp: 3_300_000 }],
];
for (const [k, v] of sub) out.push({ id: `sv-${k}`, salary: 40_000_000, subscription: v });
// 세액감면 항목별 (총급여 3천만, 감면대상 급여 전액/일부)
for (const [k, id] of [['8601', 'ibx_8601'], ['8602', 'ibx_8602'], ['8607', 'ibx_8607'], ['8608', 'ibx_8608'], ['8609', 'ibx_8609'], ['8610', 'ibx_8610'], ['8606', 'ibx_8606'], ['8611', 'ibx_8611'], ['8612', 'ibx_8612'], ['8614', 'ibx_8614'], ['8616', 'ibx_8616'], ['8617', 'ibx_8617']]) {
  out.push({ id: `rd-${k}-a`, salary: 30_000_000, reduction: { [id]: 30_000_000 } });
  out.push({ id: `rd-${k}-b`, salary: 80_000_000, reduction: { [id]: 40_000_000 } });
}
// 개인연금저축·기타 상한
for (const a of [1_000_000, 1_800_000, 2_400_000, 5_000_000]) out.push({ id: `pp-${a}`, salary: 40_000_000, personalPension: { amt: a } });
// 연금계좌 조합 (총급여 구간별 공제율 변화 포함)
for (const [s, pa] of [[40, { savings: 6_000_000 }], [54, { savings: 6_000_000, retire: 3_000_000 }], [56, { savings: 6_000_000, retire: 3_000_000 }], [80, { savings: 7_000_000, retire: 5_000_000 }], [40, { retire: 10_000_000 }], [40, { sci: 3_000_000, savings: 4_000_000 }], [40, { savings: 6_000_000, retire: 3_000_000, isaRetire: 1_000_000 }], [40, { isaSavings: 4_000_000 }]]) out.push({ id: `pa-${s}-${JSON.stringify(pa).replace(/[^a-zA-Z0-9]/g, '').slice(0, 24)}`, salary: s * 1_000_000, pensionAcc: pa });
console.log(JSON.stringify(out));
