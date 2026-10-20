const out = [];
const card = (id, salary, c, human) => out.push({ id, salary, card: c, ...(human ? { human } : {}) });
// 자녀등 있을 때 신용카드 한도 (법 제126조의2 제10항): 7천 이하 1명 350/2명+ 400, 초과 275/300
for (const k of [0, 1, 2, 3]) {
  card(`k5-50-c${k}`, 50_000_000, { credit: 60_000_000 }, k ? { children: k } : undefined);
  card(`k5-100-c${k}`, 100_000_000, { credit: 90_000_000 }, k ? { children: k } : undefined);
}
card('k5-50-od1', 50_000_000, { credit: 60_000_000 }, { otherDesc: 1 });
card('k5-50-fo1', 50_000_000, { credit: 60_000_000 }, { foster: 1 });
card('k5-50-par1', 50_000_000, { credit: 60_000_000 }, { parents: 1 });
card('k5-50-sib1', 50_000_000, { credit: 60_000_000 }, { siblings: 1 });
card('k5-50-sp1', 50_000_000, { credit: 60_000_000 }, { spouse: 1 });
// 추가한도: 전통시장·대중교통 공제분 합계(법: 연 200만, 7천 이하 문화체육 포함 300만)와 한도 초과분 중 작은 값
card('x5-mk40', 50_000_000, { market: 40_000_000 });
card('x5-tr40', 50_000_000, { transit: 40_000_000 });
card('x5-cu40', 50_000_000, { cultCredit: 40_000_000 });
card('x5-mk6tr6', 50_000_000, { market: 6_000_000, transit: 6_000_000 });
card('x5-cr30mk15', 50_000_000, { credit: 30_000_000, market: 15_000_000 });
card('x5-cr30tr15', 50_000_000, { credit: 30_000_000, transit: 15_000_000 });
card('x5-cr30cu15', 50_000_000, { credit: 30_000_000, cultCredit: 15_000_000 });
card('x5-cr40mk30tr30', 50_000_000, { credit: 40_000_000, market: 30_000_000, transit: 30_000_000 });
card('x5-hi-mk40', 100_000_000, { market: 60_000_000 });
card('x5-hi-cr60mk20', 100_000_000, { credit: 60_000_000, market: 20_000_000 });
card('x5-hi-cr60tr20', 100_000_000, { credit: 60_000_000, transit: 20_000_000 });
card('x5-k1-cr60mk30', 50_000_000, { credit: 60_000_000, market: 30_000_000 }, { children: 1 });
card('x5-k2-cr60mk30tr20', 50_000_000, { credit: 60_000_000, market: 30_000_000, transit: 20_000_000 }, { children: 2 });
console.log(JSON.stringify(out));
