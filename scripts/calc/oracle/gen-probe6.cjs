const out = [];
const don = (id, salary, rows, extra = {}) => out.push({ id, salary, donation: rows.map(([kind, amt]) => ({ kind, year: 2026, amt })), ...extra });
const G = '일반기부금(종교단체 외)', R = '일반기부금(종교단체)', T = '특례기부금', W = '우리사주조합기부금', P = '정치자금기부금', H = '고향사랑기부금(일반)';
// 소득금액 한도(저소득에서 한도에 걸리게)
don('d6-g20', 20_000_000, [[G, 10_000_000]]);
don('d6-r20', 20_000_000, [[R, 10_000_000]]);
don('d6-g5r5', 30_000_000, [[G, 5_000_000], [R, 5_000_000]]);
don('d6-g2r8', 30_000_000, [[G, 2_000_000], [R, 8_000_000]]);
don('d6-g9r9', 30_000_000, [[G, 9_000_000], [R, 9_000_000]]);
don('d6-r9', 30_000_000, [[R, 9_000_000]]);
don('d6-w20', 30_000_000, [[W, 20_000_000]]);
don('d6-w20g20', 30_000_000, [[W, 20_000_000], [G, 20_000_000]]);
don('d6-t30', 30_000_000, [[T, 30_000_000]]);
don('d6-t30g10', 30_000_000, [[T, 25_000_000], [G, 10_000_000]]);
don('d6-t5w5g5r5', 150_000_000, [[T, 5_000_000], [W, 5_000_000], [G, 5_000_000], [R, 5_000_000]]);
don('d6-t8g8', 150_000_000, [[T, 8_000_000], [G, 8_000_000]]);
don('d6-p5h5g5', 150_000_000, [[P, 5_000_000], [H, 5_000_000], [G, 5_000_000]]);
don('d6-p20', 30_000_000, [[P, 20_000_000]]);
don('d6-h15', 20_000_000, [[H, 15_000_000]]);
don('d6-all', 80_000_000, [[P, 1_000_000], [H, 1_000_000], [T, 2_000_000], [W, 2_000_000], [G, 3_000_000], [R, 3_000_000]]);
// 부녀자 소득 경계(근로소득금액 3천만원 안팎)
for (const s of [36_170_000, 36_177_000, 36_190_000]) out.push({ id: `w6-${s}`, salary: s, human: { woman: 1 } });
// 한부모+자녀 조합, 경로우대+장애
out.push({ id: 'h6-sg2', salary: 40_000_000, human: { singleParent: 1, children: 2 } });
out.push({ id: 'h6-wsg', salary: 28_000_000, human: { woman: 1, singleParent: 1, children: 1 } });
out.push({ id: 'h6-mix', salary: 60_000_000, human: { spouse: 1, parents: 2, children: 2, otherDesc: 1, siblings: 1, recipient: 1, foster: 1, senior: 3, disabled: 2, woman: 1 } });
// 의료비 경계: 문턱·700만·65세 등
const med = (id, salary, rows) => out.push({ id, salary, medical: rows });
med('m6-a', 40_000_000, [{ general: 1_200_000 }, { general: 900_000, special: 600_000 }]);
med('m6-b', 40_000_000, [{ general: 500_000 }, { general: 8_000_000 }, { general: 8_000_000 }]);
med('m6-c', 40_000_000, [{}, { general: 2_000_000, premature: 500_000 }]);
med('m6-d', 40_000_000, [{ infertility: 1_000_000, premature: 3_000_000, general: 2_000_000 }]);
med('m6-e', 40_000_000, [{ general: 1_300_000, insurance: 300_000 }, { general: 400_000, insurance: 900_000, special: 300_000 }]);
med('m6-f', 200_000_000, [{ general: 30_000_000, premature: 5_000_000, infertility: 5_000_000 }]);
// 교육비+교복 경계
out.push({ id: 'e6-a', salary: 60_000_000, education: [{ kind: '초중고 교육비', fee: 2_900_000, uniform: 400_000 }, { kind: '미취학아동 교육비', fee: 3_200_000, field: 250_000 }] });
out.push({ id: 'e6-b', salary: 60_000_000, education: [{ kind: '대학교 교육비', fee: 9_500_000 }, { kind: '소득자본인', fee: 3_000_000 }, { kind: '장애인', fee: 2_000_000 }] });
// 신용카드 7천 경계+자녀
for (const [s, k] of [[69_990_000, 2], [70_010_000, 2], [70_010_000, 1], [100_000_000, 3]]) out.push({ id: `k6-${s}-${k}`, salary: s, human: { children: k }, card: { credit: 70_000_000, market: 12_000_000, transit: 12_000_000, cultDebit: 4_000_000 } });
console.log(JSON.stringify(out));
