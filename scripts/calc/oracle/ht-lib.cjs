// 홈택스 2026년 귀속 "(모의계산) 연말정산 자동계산" 조작 도우미
const { chromium } = require('playwright');
const URL = 'https://hometax.go.kr/websquare/websquare.html?w2xPath=/ui/pp/index_pp.xml&tmIdx=45&tm2lIdx=4505100000&tm3lIdx=4505101200';
const POP = '#mf_txppWframe_uteysej0e003popup_wframe_';

async function open(headless = true, onResponse = null) {
  const b = await chromium.launch({ headless });
  const ctx = await b.newContext({ viewport: { width: 1400, height: 1000 } });
  if (onResponse) ctx.on('response', onResponse);
  const p = await ctx.newPage();
  p.setDefaultTimeout(15000);
  await p.goto(URL, { waitUntil: 'networkidle', timeout: 60000 });
  await p.waitForTimeout(3500);
  return { b, ctx, p };
}

async function setSalary(p, total, paid = 0) {
  await p.click('#mf_txppWframe_btn_MainTotaSnwAmt');
  await p.waitForTimeout(1500);
  await p.click(POP + 'ibx_totaSnwAmt');
  await p.keyboard.type(String(total));
  await p.click(POP + 'ibx_inctxPpmTxamt');
  await p.keyboard.type(String(paid));
  await p.click(POP + 'wq_uuid_981');
  await p.waitForTimeout(1200);
  await p.locator('input[type=button][id$=_btn_confirm]:visible').first().click();
  await p.waitForTimeout(2000);
  await p.click('#mf_txppWframe_btn_edit');
  await p.waitForTimeout(2500);
}

// 현재 화면에서 보이는 입력칸·버튼·라디오·선택 상자를 사람이 읽을 수 있게 덤프
function dumpVisible(p, filterRe) {
  return p.evaluate((fr) => {
    const re = fr ? new RegExp(fr) : null;
    return [...document.querySelectorAll('input,select,textarea')]
      .filter((e) => e.offsetWidth && e.offsetHeight && !/wfHeader|wfFooter/.test(e.id))
      .map((e) => {
        const row = e.closest('tr') || e.closest('li') || e.parentElement.parentElement;
        const txt = (row ? row.innerText : '').split('\n').join(' ').slice(0, 90);
        return `${e.id.replace('mf_txppWframe_', '')}[${e.type}${e.type === 'radio' || e.type === 'checkbox' ? ':' + e.value : ''}] val=${e.value || ''} :: ${txt}`;
      })
      .filter((s) => !re || re.test(s))
      .join('\n');
  }, filterRe ? filterRe.source : null);
}

module.exports = { open, setSalary, dumpVisible, POP };
