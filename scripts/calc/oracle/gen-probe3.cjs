const out = [];
const K = ['정치자금기부금', '고향사랑기부금(일반)', '고향사랑기부금(특별재난지역)', '특례기부금', '우리사주조합기부금', '일반기부금(종교단체 외)', '일반기부금(종교단체)'];
// 기부금: 산출세액이 충분히 큰 총급여 1.5억에서 종류별 금액을 바꿔 본다
K.forEach((k, i) => [50_000, 100_000, 150_000, 300_000, 1_000_000, 5_000_000, 12_000_000, 40_000_000].forEach((a) => out.push({ id: `dn-${i}-${a}`, salary: 150_000_000, donation: [{ kind: k, year: 2026, amt: a }] })));
// 기부금 한도(소득금액 비례) 확인: 총급여 4천만
K.forEach((k, i) => out.push({ id: `dl-${i}`, salary: 40_000_000, donation: [{ kind: k, year: 2026, amt: 30_000_000 }] }));
// 의료비
const med = (id, rows, salary = 50_000_000) => out.push({ id: 'md-' + id, salary, medical: rows });
med('inf2', [{}, { infertility: 2_000_000 }]); med('pre2', [{}, { premature: 2_000_000 }]);
med('inf1g1', [{ general: 1_000_000, infertility: 1_000_000 }]); med('pre1g1', [{ general: 1_000_000, premature: 1_000_000 }]);
med('all3', [{ general: 3_000_000, infertility: 3_000_000, premature: 3_000_000 }]);
med('fsp2g1', [{ general: 1_000_000 }, { special: 2_000_000 }]); med('fg9', [{}, { general: 9_000_000 }]);
med('g1fg9', [{ general: 1_000_000 }, { general: 9_000_000 }]); med('f4f4', [{}, { general: 4_000_000 }, { general: 4_000_000 }]);
med('ins1g4', [{ general: 4_000_000, insurance: 1_000_000 }]); med('fsp1g2', [{}, { special: 1_000_000, general: 2_000_000 }]);
med('inf5ins1', [{ infertility: 5_000_000, insurance: 1_000_000 }]); med('g20', [{ general: 20_000_000 }]);
med('s80', [{ general: 3_000_000 }], 80_000_000); med('s130', [{ general: 8_000_000 }], 130_000_000);
med('inf-hi', [{ infertility: 8_000_000, general: 1_000_000 }], 130_000_000);
// 교육비
const edu = (id, rows, salary = 150_000_000) => out.push({ id: 'ed-' + id, salary, education: rows });
edu('self', [{ kind: '소득자본인', fee: 20_000_000 }]); edu('pre', [{ kind: '미취학아동 교육비', fee: 5_000_000 }]);
edu('mid', [{ kind: '초중고 교육비', fee: 4_000_000 }]); edu('midu', [{ kind: '초중고 교육비', fee: 2_000_000, uniform: 700_000 }]);
edu('midf', [{ kind: '초중고 교육비', fee: 2_000_000, field: 400_000 }]); edu('univ', [{ kind: '대학교 교육비', fee: 12_000_000 }]);
edu('dis', [{ kind: '장애인', fee: 6_000_000 }]); edu('two-univ', [{ kind: '대학교 교육비', fee: 8_000_000 }, { kind: '대학교 교육비', fee: 8_000_000 }]);
edu('two-mid', [{ kind: '초중고 교육비', fee: 2_000_000 }, { kind: '초중고 교육비', fee: 2_000_000 }]);
// 신용카드 등
const card = (id, c, salary = 50_000_000) => out.push({ id: 'cd-' + id, salary, card: c });
card('cr20', { credit: 20_000_000 }); card('db20', { debit: 20_000_000 }); card('ca20', { cash: 20_000_000 }); card('mk20', { market: 20_000_000 });
card('tr20', { transit: 20_000_000 }); card('cu20', { cultCredit: 20_000_000 }); card('cr13mk5', { credit: 13_000_000, market: 5_000_000 });
card('db15tr3mk2', { debit: 15_000_000, transit: 3_000_000, market: 2_000_000 }); card('cr40', { credit: 40_000_000 });
card('mix1', { credit: 4_000_000, debit: 3_000_000, cash: 2_000_000, market: 1_000_000, transit: 1_000_000, cultCredit: 1_000_000 });
card('mix2', { credit: 30_000_000, market: 10_000_000, transit: 10_000_000, cultCredit: 5_000_000 });
card('s80mix', { credit: 40_000_000, market: 10_000_000, transit: 10_000_000, cultCredit: 5_000_000 }, 80_000_000);
card('s130mix', { credit: 50_000_000, debit: 30_000_000, market: 10_000_000, transit: 10_000_000 }, 130_000_000);
card('cultcash', { cultDebit: 3_000_000, cultCash: 3_000_000, credit: 14_000_000 });
// 주택자금: 종류별 큰 금액
for (const k of ['8311', '8312', '8321', '8322', '8323', '8324', '8325', '8326', '8327', '8328', '8329']) out.push({ id: `hs-${k}`, salary: 40_000_000, housing: { [k]: 30_000_000 } });
out.push({ id: 'hs-mix1', salary: 40_000_000, housing: { '8311': 20_000_000, '8324': 20_000_000 } });
out.push({ id: 'hs-mix2', salary: 40_000_000, housing: { '8311': 5_000_000, '8321': 4_000_000 } });
out.push({ id: 'hs-mix3', salary: 40_000_000, housing: { '8322': 6_000_000, '8328': 6_000_000 } });
// 소득공제 종합한도
out.push({ id: 'cap-1', salary: 150_000_000, smallBiz: { amt: 5_000_000 }, card: { credit: 80_000_000, market: 30_000_000, transit: 30_000_000 }, personalPension: { amt: 3_000_000 } });
// 인적공제 상세
for (const [k, h] of [['sp', { spouse: 1 }], ['par', { parents: 2 }], ['kid', { children: 3 }], ['od', { otherDesc: 2 }], ['sib', { siblings: 2 }], ['rec', { recipient: 2 }], ['fos', { foster: 2 }], ['sen', { spouse: 1, parents: 2, senior: 2 }], ['dis', { parents: 1, disabled: 2 }], ['wom', { woman: 1 }], ['sg', { singleParent: 1, children: 1 }], ['womhi', { woman: 1 }]]) out.push({ id: `hm-${k}`, salary: k === 'womhi' ? 60_000_000 : 28_000_000, human: h });
console.log(JSON.stringify(out));
