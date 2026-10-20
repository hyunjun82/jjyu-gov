// 세액공제 적용 순서 탐지: 총급여 1천만원(산출세액이 아주 작음)에서 공제 두 개씩 넣어 누가 먼저 받는지 본다
const items = {
  marriage: (c) => { c.marriage = 1; },
  child: (c) => { c.human = { ...(c.human || {}), children: 1 }; },
  insurance: (c) => { c.cover = { general: 1_000_000 }; },
  medical: (c) => { c.medical = [{ general: 5_000_000 }]; },
  education: (c) => { c.education = [{ kind: '소득자본인', fee: 1_000_000 }]; },
  donation: (c) => { c.donation = [{ kind: '일반기부금(종교단체 외)', year: 2026, amt: 1_000_000 }]; },
  pensionAcc: (c) => { c.pensionAcc = { savings: 1_000_000 }; },
  union: (c) => { c.other = { ...(c.other || {}), union: 300_000 }; },
  houseLoan: (c) => { c.other = { ...(c.other || {}), houseLoan: 600_000 }; },
  foreign: (c) => { c.other = { ...(c.other || {}), foreignTax: 300_000, foreignPay: 8_000_000 }; },
  rent: (c) => { c.other = { ...(c.other || {}), rent: 1_000_000 }; },
  standard: () => {},
};
const keys = Object.keys(items);
const out = [{ id: 'o-base', salary: 10_000_000 }];
for (let i = 0; i < keys.length; i++) for (let j = i + 1; j < keys.length; j++) {
  if (keys[i] === 'standard' && ['insurance', 'medical', 'education', 'donation', 'rent'].includes(keys[j])) continue; // 특별공제가 있으면 표준은 안 쓰인다
  const c = { id: `o-${keys[i]}-${keys[j]}`, salary: 10_000_000 };
  items[keys[i]](c); items[keys[j]](c);
  out.push(c);
}
console.log(JSON.stringify(out));
