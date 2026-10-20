const out = [];
// 고향사랑·정치자금 입력 상한
for (const a of [13_000_000, 15_000_000, 18_000_000, 20_000_000, 21_000_000, 25_000_000]) {
  out.push({ id: `h4-gen-${a}`, salary: 150_000_000, donation: [{ kind: '고향사랑기부금(일반)', year: 2026, amt: a }] });
  out.push({ id: `h4-dis-${a}`, salary: 150_000_000, donation: [{ kind: '고향사랑기부금(특별재난지역)', year: 2026, amt: a }] });
}
for (const a of [30_000_000, 31_000_000, 60_000_000, 100_000_000]) out.push({ id: `h4-pol-${a}`, salary: 250_000_000, donation: [{ kind: '정치자금기부금', year: 2026, amt: a }] });
// 월세 한도·경계
for (const a of [8_000_000, 10_000_000, 10_010_000, 12_000_000, 15_000_000]) out.push({ id: `rt-${a}`, salary: 40_000_000, other: { rent: a } });
for (const s of [54_990_000, 55_000_000, 55_010_000, 79_990_000, 80_000_000, 80_010_000]) out.push({ id: `rs-${s}`, salary: s, other: { rent: 6_000_000 } });
// 총급여 7천만 경계 (카드 한도·청약 가능 여부·문화체육)
for (const s of [69_990_000, 70_000_000, 70_010_000]) {
  out.push({ id: `b7-card-${s}`, salary: s, card: { credit: 50_000_000, market: 8_000_000, transit: 8_000_000, cultCredit: 6_000_000 } });
  out.push({ id: `b7-sub-${s}`, salary: s, subscription: { comp: 2_000_000 } });
}
// 소기업 한도 경계 (근로소득금액 4천만·6천만·1억 근처)
for (const s of [52_360_000, 52_380_000, 73_400_000, 73_440_000, 115_030_000, 115_070_000]) out.push({ id: `bs-${s}`, salary: s, smallBiz: { amt: 8_000_000 } });
// 근로소득세액공제 한도 경계
for (const s of [33_000_000, 33_010_000, 70_000_000, 70_010_000, 120_000_000, 120_010_000, 125_000_000]) out.push({ id: `ec-${s}`, salary: s });
// 근로소득공제 경계
for (const s of [5_000_000, 5_010_000, 15_000_000, 15_010_000, 45_000_000, 45_010_000, 100_000_000, 100_010_000, 300_000_000, 500_000_000]) out.push({ id: `ed2-${s}`, salary: s });
// 과세표준 세율 경계(총급여로 맞추기 어려우니 큰 값들)
for (const s of [20_000_000, 62_000_000, 105_000_000, 180_000_000, 350_000_000, 600_000_000, 1_300_000_000]) out.push({ id: `tb-${s}`, salary: s });
// 소득공제 종합한도(2,500만원)
out.push({ id: 'cap2', salary: 300_000_000, smallBiz: { amt: 8_000_000 }, card: { credit: 200_000_000, market: 60_000_000, transit: 60_000_000 }, personalPension: { amt: 5_000_000 } });
out.push({ id: 'cap3', salary: 400_000_000, card: { credit: 700_000_000, debit: 100_000_000 } });
// 자녀세액공제 조합
for (const k of [1, 2, 3, 4, 5]) out.push({ id: `ch-${k}`, salary: 150_000_000, human: { children: k } });
out.push({ id: 'ch-birth1', salary: 150_000_000, human: { children: 2 }, child: { count: 2, first: 1 } });
out.push({ id: 'ch-birth2', salary: 150_000_000, human: { children: 3 }, child: { count: 3, second: 1 } });
out.push({ id: 'ch-birth3', salary: 150_000_000, human: { children: 4 }, child: { count: 4, third: 2 } });
out.push({ id: 'ch-birth4', salary: 150_000_000, child: { first: 1, second: 1, third: 1 } });
// 납세조합·주택차입금·외국납부 단독
out.push({ id: 'ot-union', salary: 150_000_000, other: { union: 3_000_000 } });
out.push({ id: 'ot-hl', salary: 150_000_000, other: { houseLoan: 3_000_000 } });
out.push({ id: 'ot-fr1', salary: 150_000_000, other: { foreignTax: 3_000_000, foreignPay: 20_000_000 } });
out.push({ id: 'ot-fr2', salary: 150_000_000, other: { foreignTax: 300_000, foreignPay: 20_000_000 } });
console.log(JSON.stringify(out));
