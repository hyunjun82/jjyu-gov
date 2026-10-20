// 케이스(JSON) → 홈택스 2026년 귀속 연말정산 자동계산 화면에 입력 → 계산 → 응답 반환
// 화면이 막아 둔(비활성) 칸은 건너뛰고, 홈택스가 실제로 받아들인 값만 eff(유효 케이스)에 남긴다.
const { open, POP } = require('./ht-lib.cjs');
const SUB = '#mf_txppWframe_pfm_subFrame_';
const T = 8000;
let LAST_REJECT = '';

async function visLoc(p, tag, suffix) {
  return p.locator(`${tag}[id$="${suffix}"]:visible`).last();
}
// 숫자칸 입력. 비활성이면 건너뛰고 obj[key] 를 지운다. 반환: 입력했는지
async function put(p, suffix, obj, key) {
  const val = obj[key];
  if (!val) return false;
  const loc = await visLoc(p, 'input', suffix);
  await loc.waitFor({ state: 'visible', timeout: T });
  if (await loc.isDisabled()) { delete obj[key]; return false; }
  await loc.click({ timeout: T });
  await p.keyboard.press('Control+A');
  await p.keyboard.type(String(val));
  await p.keyboard.press('Tab');
  const shown = String(await loc.inputValue()).replace(/[^0-9]/g, '');
  if (shown !== String(val)) throw new Error('입력 확인 실패 ' + suffix + ': 넣은 값 ' + val + ' / 화면 값 ' + shown);
  return true;
}
async function clickBtn(p, suffix) {
  try {
    await p.locator(`input[id$="${suffix}"]:visible`).last().click({ timeout: T });
  } catch (e) {
    const vis = await p.evaluate(() => [...document.querySelectorAll('div.w2window')].filter((d) => window.__vis(d)).map((d) => d.id.slice(-26) + ' [' + [...d.querySelectorAll('input[type=button]')].filter((x) => window.__vis(x)).map((x) => x.id.slice(-18) + ':' + x.value).join(',') + ']').join(' ; '));
    const al = await p.evaluate(() => [...document.querySelectorAll('div.w2window')].filter((d) => window.__vis(d) && /yesno|info|alert|error/.test(d.id)).map((d) => d.innerText.split(String.fromCharCode(10)).filter((x) => x.trim()).join(' ')).join(' | ').slice(0, 200));
    throw new Error('clickBtn ' + suffix + ' not found. alerts: ' + al + ' visible: ' + vis);
  }
}
async function confirmIfAsked(p) {
  let clicked = 0;
  for (let i = 0; i < 24; i++) {
    const did = await p.evaluate(() => {
      const btn = [...document.querySelectorAll('input[type=button][id$=_btn_confirm]')].filter((e) => window.__vis(e)).pop();
      if (btn) { btn.click(); return true; }
      return false;
    });
    if (did) { clicked++; await p.waitForTimeout(700); i = Math.max(i, 18); continue; }
    if (clicked) return;
    await p.waitForTimeout(250);
  }
}
async function closeInfo(p) {
  for (let i = 0; i < 4; i++) {
    const ok = p.locator('[id^=mf_txppWframe_info] input[type=button]:visible, [id*=_info][id$=_btn_confirm]:visible');
    if (await ok.count()) { await ok.first().click().catch(() => {}); await p.waitForTimeout(600); } else break;
  }
}
async function openItem(p, btn) {
  try {
    await p.click(SUB + btn, { timeout: 5000 });
  } catch (e) {
    const ok = await p.evaluate((id) => { const el = document.getElementById(id); if (!el) return false; el.scrollIntoView({ block: 'center' }); el.click(); return true; }, 'mf_txppWframe_pfm_subFrame_' + btn);
    if (!ok) throw e;
  }
  await p.waitForTimeout(1800);
}
async function applyAny(p) {
  const has = await p.locator('input[id$="btn_apply"]:visible').count();
  await clickBtn(p, has ? 'btn_apply' : 'btn_cmApply');
  const msg0 = await readAlerts(p);
  await confirmIfAsked(p);
  await p.waitForTimeout(800);
  await closeInfo(p);
  await p.waitForTimeout(1500);
  await closeInfo(p);
  // 항목 팝업(uteysej0eNNN, 하위 1NN 제외)이 아직 보이면 거절된 것
  const rejected = await p.evaluate(() => {
    const pops = [...document.querySelectorAll('div.w2window')].filter((d) => window.__vis(d) && /uteysej0e0[0-9][0-9]popup$/.test(d.id) && !/yesno|info|alert|error/.test(d.id));
    const top = pops[pops.length - 1];
    if (!top) return null;
    const btn = [...top.querySelectorAll('input[type=button]')].filter((e) => window.__vis(e) && /닫기/.test(e.value)).pop();
    if (btn) btn.click();
    return top.id.slice(-12);
  });
  if (process.env.DBG) console.log('applyAny rejected=', rejected, 'msg=', msg0);
  if (rejected) { await p.waitForTimeout(800); await closeInfo(p); LAST_REJECT = msg0 || rejected; return false; }
  return true;
}
// 반환: null(반영됨) 또는 거절 사유 문자열
async function applySub(p, id, frag) {
  await clickBtn(p, id);
  await confirmIfAsked(p);
  await p.waitForTimeout(800);
  let alertText = await readAlerts(p);
  await closeInfo(p);
  const still = await p.locator(`div.w2window[id*="${frag}"]`).filter({ has: p.locator('input[type=button]:visible') }).count();
  const open = await p.evaluate((f) => [...document.querySelectorAll('div.w2window')].some((d) => window.__vis(d) && d.id.includes(f) && !/yesno|info|alert|error/.test(d.id)), frag);
  if (open) {
    alertText = alertText || (await readAlerts(p)) || '(경고 없음)';
    await closeInfo(p);
    await p.evaluate((f) => {
      const top = [...document.querySelectorAll('div.w2window')].filter((d) => window.__vis(d) && d.id.includes(f) && !/yesno|info|alert|error/.test(d.id)).pop();
      const btn = top && [...top.querySelectorAll('input[type=button]')].filter((e) => window.__vis(e) && /닫기/.test(e.value)).pop();
      if (btn) btn.click();
    }, frag);
    await p.waitForTimeout(800);
    return alertText;
  }
  return null;
}
async function readAlerts(p) {
  return p.evaluate(() => [...document.querySelectorAll('div.w2window')].filter((d) => window.__vis(d) && /yesno|info|alert|error/.test(d.id)).map((d) => d.innerText.split(String.fromCharCode(10)).filter((x) => x.trim() && !/레이어|알림|확인|닫기/.test(x)).join(' ')).join(' | ').slice(0, 160));
}
// 체크박스·라디오(숨겨진 입력 → 라벨 클릭). 비활성이면 false
async function tick(p, idSuffix) {
  const r = await p.evaluate((suf) => {
    const els = [...document.querySelectorAll('input[id$="' + suf + '"]')].filter((e) => e.closest('div.w2window') && e.closest('div.w2window').offsetWidth);
    const el = els[els.length - 1];
    if (!el) return 'none';
    if (el.disabled) return 'disabled';
    const lab = document.querySelector('label[for="' + el.id + '"]');
    (lab || el).click();
    return 'ok';
  }, idSuffix);
  await p.waitForTimeout(300);
  return r === 'ok';
}
async function selectOpt(p, suffix, label) {
  const loc = await visLoc(p, 'select', suffix);
  await loc.waitFor({ state: 'visible', timeout: T });
  if (await loc.isDisabled()) return false;
  await loc.selectOption({ label });
  return true;
}

async function fillCase(p, c) {
  const eff = JSON.parse(JSON.stringify(c));
  // 인적공제
  const h = eff.human;
  if (h) {
    await openItem(p, 'btn_humnDdcTrgtAmt');
    if (h.spouse != null) { if (!(await tick(p, 'rad_spsDdcAmt_input_' + (h.spouse ? 0 : 1)))) delete h.spouse; }
    for (const [k, id] of [['parents', 'ibx_cnt01'], ['children', 'ibx_cnt02'], ['otherDesc', 'ibx_cnt03'], ['siblings', 'ibx_cnt04'], ['recipient', 'ibx_cnt05'], ['foster', 'ibx_cnt06'], ['senior', 'ibx_cnt07'], ['disabled', 'ibx_cnt08']]) await put(p, id, h, k);
    if (h.woman != null) { if (!(await tick(p, 'rad_wmnHshrDdcAmt_input_' + (h.woman ? 0 : 1)))) delete h.woman; }
    if (h.singleParent != null) { if (!(await tick(p, 'rad_snprntFmlyDdcAmt_input_' + (h.singleParent ? 0 : 1)))) delete h.singleParent; }
    if (!(await applyAny(p))) delete eff.human;
  }
  const simple = [
    ['pension', 'btn_pnsnInfeeDdcTrgtAmt', { np: 'ibx_npInfeeTrgtAmt', gov: 'ibx_pspPnsnTrgtAmt', mil: 'ibx_sodrPnsnTrgtAmt', school: 'ibx_piaSchlSprPnsnTrgtAmt', post: 'ibx_sctgPoPnsnTrgtAmt' }],
    ['insurance', 'btn_spcHifeDdcTrgtAmt', { health: 'ibx_hltInfeeTrgtAmt', employ: 'ibx_empInfeeTrgtAmt' }],
    ['housing', 'btn_hsngFndsDdcTrgtAmt', 'housing'],
    ['personalPension', 'btn_NtplPnsnSvngDdcTrgtAmt', { amt: 'ibx_NtplPnsnSvngDdcTrgtAmt' }],
    ['smallBiz', 'btn_SmceDdcTrgtAmt', { amt: 'ibx_smceDdcTrgtAmt' }],
    ['subscription', 'btn_HsngPrptSvngDdcTrgtAmt', { saving: 'ibx_sbcSvngDdcTrgtAmt', comp: 'ibx_hsngSbcSynSvngDdcTrgtAmt', worker: 'ibx_lbrrHsngPrptSvngDdcTrgtAmt' }],
    ['card', 'btn_CrdCardDdcTrgtAmt', { credit: 'ibx_crdcUseAmt', debit: 'ibx_drtpCardUseAmt', cash: 'ibx_cshptUseAmt', cultCredit: 'ibx_cltrCrdcUseAmt', cultDebit: 'ibx_cltrDrtpCardUseAmt', cultCash: 'ibx_cltrCshptUseAmt', market: 'ibx_tdmrUseAmt', transit: 'ibx_pbtUseAmt' }],
  ];
  for (const [key, btn, map] of simple) {
    const v = eff[key];
    if (!v) continue;
    await openItem(p, btn);
    if (map === 'housing') { for (const code of Object.keys(v)) await put(p, 'ibx_useAmt' + code, v, code); }
    else for (const [k, id] of Object.entries(map)) await put(p, id, v, k);
    if (!(await applyAny(p))) delete eff[key];
  }
  if (eff.reduction) {
    await openItem(p, 'btn_TxamtReDdcTrgtAmt');
    for (const id of Object.keys(eff.reduction)) await put(p, id, eff.reduction, id);
    if (!(await applyAny(p))) delete eff.reduction;
  }
  if (eff.marriage) {
    // 혼인세액공제: 대상이 아니면 상세보기 링크가 눌리지 않는다
    let opened = false;
    try { await p.click(SUB + 'btn_WdngDdcTrgtAmt', { timeout: 4000 }); await p.waitForTimeout(1800); opened = true; } catch (_) {}
    if (opened) { if (await tick(p, 'cbx_wdngDdcYN_input_0')) { if (!(await applyAny(p))) delete eff.marriage; } else { delete eff.marriage; await clickBtn(p, 'btn_close1').catch(() => {}); } }
    else delete eff.marriage;
  }
  if (eff.child) {
    await openItem(p, 'btn_ChldDdcTrgtAmt');
    const v = eff.child;
    await put(p, 'ibx_chidCnt', v, 'count');
    if (v.first) { if (!(await tick(p, 'cbx_firstCnt_input_0'))) delete v.first; }
    if (v.second) { if (!(await tick(p, 'cbx_secondCnt_input_0'))) delete v.second; }
    await put(p, 'ibx_thirdCnt', v, 'third');
    if (!(await applyAny(p))) delete eff.child;
  }
  if (eff.pensionAcc) {
    await openItem(p, 'btn_PnsnAccDdcTrgtAmt');
    const v = eff.pensionAcc;
    for (const [k, id] of [['sci', 'ibx_sctcHpTrgtAmt'], ['retire', 'ibx_rtpnAmt'], ['savings', 'ibx_pnsnSvngAmt'], ['isaRetire', 'ibx_rtpnISAAmt'], ['isaSavings', 'ibx_pnsnISAAmt']]) await put(p, id, v, k);
    if (!(await applyAny(p))) delete eff.pensionAcc;
  }
  if (eff.cover) {
    await openItem(p, 'btn_cvrgInfeeDdcTrgtAmt');
    await put(p, 'ibx_cvrgInscSdcAmt', eff.cover, 'general');
    await put(p, 'ibx_dsbrCvrgInscSdcAmt', eff.cover, 'disabled');
    if (!(await applyAny(p))) delete eff.cover;
  }
  if (eff.medical) {
    await openItem(p, 'btn_MdxpsDdcTrgtAmt');
    for (let i = 0; i < eff.medical.length; i++) {
      const row = eff.medical[i];
      if (i >= 3) { await clickBtn(p, 'btn_etcAdd'); await p.waitForTimeout(800); }
      await p.locator('button:visible', { hasText: '수정' }).nth(i).click({ timeout: T });
      await p.waitForTimeout(1200);
      for (const [k, id] of [['general', 'ibx_amt8721'], ['premature', 'ibx_amt8729'], ['infertility', 'ibx_amt8725'], ['special', 'ibx_amt8720'], ['insurance', 'ibx_amt8728']]) await put(p, id, row, k);
      const rej = await applySub(p, 'btn_cmApply', 'e119');
      if (rej) { row.rejected = rej; for (const k of ['general', 'premature', 'infertility', 'special', 'insurance']) delete row[k]; }
    }
    if (!(await applyAny(p))) delete eff.medical;
  }
  if (eff.education) {
    await openItem(p, 'btn_ScxpsDdcTrgtAmt');
    for (const r of eff.education) {
      await clickBtn(p, 'btn_etcAdd');
      await p.waitForTimeout(1200);
      await selectOpt(p, 'sbx_amtClusCd', r.kind);
      await put(p, 'ibx_scxpsPymAmt', r, 'fee');
      await put(p, 'ibx_shufPrchXpns', r, 'uniform');
      await put(p, 'ibx_exprnStudXpns', r, 'field');
      const rej = await applySub(p, 'btn_cmApply', 'e120');
      if (rej) { r.rejected = rej; delete r.fee; delete r.uniform; delete r.field; }
    }
    if (!(await applyAny(p))) delete eff.education;
  }
  if (eff.donation) {
    await openItem(p, 'btn_ConbDdcTrgtAmt');
    for (const r of eff.donation) {
      await clickBtn(p, 'btn_add');
      await p.waitForTimeout(1200);
      await selectOpt(p, 'sbx_amtClusCd', r.kind);
      if (r.year) { if (!(await selectOpt(p, 'sbx_dtnYr', String(r.year)))) r.yearLocked = true; }
      await put(p, 'ibx_dtnAmt', r, 'amt');
      const rej = await applySub(p, 'btn_apply', 'e108');
      if (rej) { r.rejected = rej; r.amt = 0; }
    }
    if (!(await applyAny(p))) delete eff.donation;
  }
  if (eff.other) {
    await openItem(p, 'btn_TxpAsctDdcTrgtAmt');
    const v = eff.other;
    for (const [k, id] of [['union', 'ibx_txpAsctDdcTxamt'], ['houseLoan', 'ibx_hsngLnpbIntrRdmp'], ['foreignTax', 'ibx_frgnPmtTxamt'], ['foreignPay', 'ibx_frgnPmtItrfAmt'], ['rent', 'ibx_mmrPymn']]) await put(p, id, v, k);
    if (!(await applyAny(p))) delete eff.other;
  }
  return eff;
}

async function runCase(c, { headless = true } = {}) {
  let captured = null;
  const onResp = async (r) => {
    if (!/ATEYSEDA001L01/.test(r.url()) || r.request().method() !== 'POST') return;
    try {
      const req = r.request().postData() || '';
      const chk = (req.match(/"v_calChk":"([^"]*)"/) || [])[1];
      const txt = await r.text();
      const j = JSON.parse(txt.slice(0, txt.lastIndexOf('}') + 1));
      if (chk && (j.yrsTaxClcDetailDVOList || []).length > 100) captured = j;
    } catch (_) {}
  };
  const { b, p } = await open(headless, onResp);
  await p.evaluate(() => { window.__vis = (e) => !!(e && e.offsetWidth && (e.checkVisibility ? e.checkVisibility({ visibilityProperty: true, opacityProperty: true }) : true)); });
  try {
    await p.click('#mf_txppWframe_btn_MainTotaSnwAmt', { timeout: 40000 });
    await p.waitForTimeout(1500);
    await p.click(POP + 'ibx_totaSnwAmt'); await p.keyboard.type(String(c.salary));
    await p.click(POP + 'ibx_inctxPpmTxamt'); await p.keyboard.type(String(c.paid || 0));
    await p.click(POP + 'wq_uuid_981');
    await confirmIfAsked(p);
    await closeInfo(p);
    await p.waitForTimeout(1200);
    await p.click('#mf_txppWframe_btn_edit', { timeout: 20000 });
    await p.waitForTimeout(2500);
    const eff = await fillCase(p, c);
    await p.click(SUB + 'btn_calc', { timeout: T });
    await p.waitForTimeout(3500);
    await closeInfo(p);
    if (!captured) { await p.waitForTimeout(2500); }
    // 입력이 어긋난 응답(총급여·기납부가 케이스와 다름)은 버린다
    const bsc = captured && captured.yrsTaxClcBscList && captured.yrsTaxClcBscList[0];
    if (bsc && (Number(bsc.totaSnwAmt) !== Number(c.salary) || Number(bsc.ppmTxamt || 0) !== Number(c.paid || 0))) throw new Error('입력 불일치: 총급여/기납부가 케이스와 다름 ' + bsc.totaSnwAmt + '/' + bsc.ppmTxamt);
    return { captured, eff };
  } finally { await b.close(); }
}

module.exports = { runCase };
if (require.main === module) {
  (async () => {
    const c = JSON.parse(process.argv[2]);
    const r = await runCase(c);
    console.log('EFF', JSON.stringify(r.eff));
    if (r.captured) {
      const L = r.captured.yrsTaxClcDetailDVOList;
      console.log('NONZERO', L.filter((x) => x.ddcAmt || x.useAmt).map((x) => `${x.amtClusCd}:use${x.useAmt}/trgt${x.ddcTrgtAmt}/ddc${x.ddcAmt}`).join(' '));
    } else console.log('NO RESPONSE CAPTURED');
  })().catch((e) => { console.error('ERR', e.message.split('\n').slice(0, 6).join(' / ')); process.exit(1); });
}
