/**
 * 네이버 카페 임시등록 자동화 — 사장님 PC 에서 창을 띄워 사람이 하듯 입력한다 (API 없음). 2026-09-29
 *
 *   node scripts/cafe/post.mjs --all                        아직 안 올린 글(scripts/cafe/*.md) 전부를 임시등록 (매일 쓰는 방식)
 *   node scripts/cafe/post.mjs scripts/cafe/{slug}.md ...   지정한 글만 임시등록
 *   node scripts/cafe/post.mjs scripts/cafe/{slug}.md --publish   한 편을 등록까지 (사장님 승인 뒤에만)
 *   옵션: --board=정부지원금   (기본 '금융 경제')   --again  이미 올린 글도 다시
 *
 * 매일의 흐름: gov 글 작성 → 그날 글의 카페 글 파일 작성 → 사장님이 창에서 로그인 → 전부 임시등록 → 사장님이 임시등록 글을 보고 이미지를 넣어 등록
 *
 * 글 파일 형식 (scripts/cafe/{slug}.md):
 *   제목: ○○○
 *   인용구: ○○○                     본문 맨 앞 인용구(선택)
 *   (본문)                          ■ 줄 = 24pt 굵은 소제목, 그 밖은 15pt, 빈 줄은 그대로
 *   링크: 글자 | https://...         가운데 강조 링크(굵게·밑줄·노란 형광)
 *   이미지: 경로                     사진(선택 — 보통은 사장님이 임시등록 글에 직접 넣는다)
 *   태그: a, b, c                    하단 태그(최대 10)
 *
 * - 로그인은 사장님이 창에서 직접 한다("로그인 상태 유지" 체크). 상태는 scripts/cafe/.profile 에 남는다(git 제외). 비밀번호는 다루지 않는다.
 * - 임시등록만 자동. 공개 등록(--publish)은 사장님 승인 뒤에만, 하루 3편·편 사이 2분 이상.
 * - 네이버 화면이 바뀌면 선택자가 깨진다 → 못 찾으면 진단(debug.json·png)을 남기고 그 편은 건너뛴다.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';
import { spawnSync } from 'node:child_process';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const CAFE_ID = '31711613', MENU_ID = '2'; // 금융 경제,moneywik — 게시판 menus/2
const WRITE = `https://cafe.naver.com/ca-fe/cafes/${CAFE_ID}/articles/write?boardType=L&menuId=${MENU_ID}`;
const PROFILE = path.join(HERE, '.profile');
const STATE = path.join(HERE, '.state.json');
const DAILY_MAX = 3, GAP_MS = 2 * 60 * 1000;

const args = process.argv.slice(2);
const flag = (n) => args.includes(`--${n}`);
const BOARD = (args.find((a) => a.startsWith('--board=')) || '--board=금융 경제').slice(8);
const publish = flag('publish'), again = flag('again');
const today = new Date(Date.now() + 9 * 3600e3).toISOString().slice(0, 10);
const state = fs.existsSync(STATE) ? JSON.parse(fs.readFileSync(STATE, 'utf8')) : {};
state.drafted ||= {};
if (state.day !== today) { state.day = today; state.count = 0; state.last = 0; }
const save = () => fs.writeFileSync(STATE, JSON.stringify(state, null, 1));

let files = args.filter((a) => !a.startsWith('--'));
if (flag('all')) files = fs.readdirSync(HERE).filter((f) => f.endsWith('.md')).map((f) => path.join(HERE, f)).filter((f) => again || !state.drafted[path.basename(f, '.md')]);
files = files.filter((f) => fs.existsSync(f));
if (!files.length) { console.log('올릴 글이 없다 (이미 다 임시등록됨 — 다시 하려면 --again)'); process.exit(0); }
if (publish && files.length !== 1) { console.error('--publish 는 한 편씩만'); process.exit(2); }

// 품질 검사 — docs/cafe-post-baseline.md. 통과 못 한 글은 올리지 않는다(리셋해도 같은 품질이 나오게)
if (!flag('skip-check')) {
  const passed = [];
  for (const f of files) {
    const r = spawnSync('node', [path.join(HERE, 'check-cafe.mjs'), f], { encoding: 'utf8' });
    process.stdout.write(r.stdout || '');
    if (r.status === 0) passed.push(f);
    else console.error(`✗ ${path.basename(f)} — 검사 미통과, 임시등록하지 않는다. 고친 뒤 다시 실행`);
  }
  files = passed;
  if (!files.length) process.exit(4);
}

// ── 글 파일 → 제목·편집기용 HTML·태그·이미지 ──
const esc = (t) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
function parse(file) {
  const raw = fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n');
  const m = raw.match(/^제목:\s*(.+)\n+([\s\S]+)$/);
  if (!m) throw new Error('첫 줄이 "제목: ..." 이어야 한다');
  const title = m[1].trim();
  const lines = m[2].trim().split('\n');
  const tags = ((lines.find((l) => l.startsWith('태그:')) || '').slice(3)).split(/[,，]/).map((t) => t.replace(/^#/, '').replace(/\s+/g, '').trim()).filter(Boolean).slice(0, 10);
  const body = lines.filter((l) => !l.startsWith('태그:') && !l.startsWith('근거:') && !l.startsWith('썸네일:')).join('\n').trim();
  if (title.length < 5 || body.length < 200) throw new Error('제목·본문이 너무 짧다');
  const images = [], blocks = [];
  for (const line of body.split('\n')) {
    const t = line.trimEnd();
    let mm;
    if (!t.trim()) blocks.push(['blank']);
    else if (t.startsWith('■')) blocks.push(['h', t]);
    else if ((mm = t.match(/^링크:\s*(.+?)\s*\|\s*(https?:\/\/\S+)\s*$/))) blocks.push(['link', mm[1], mm[2]]);
    else if (t.startsWith('인용구:')) blocks.push(['quote', t.slice(4).trim()]);
    else if (t.startsWith('이미지:')) images.push(t.slice(4).trim());
    else blocks.push(['p', t]);
  }
  const gapped = [];   // 소제목·링크 앞뒤에 빈 줄이 하나씩 있게 (연속 빈 줄은 하나로)
  for (const b of blocks) {
    const prev = gapped[gapped.length - 1];
    if ((b[0] === 'h' || b[0] === 'link') && prev && prev[0] !== 'blank') gapped.push(['blank']);
    if (prev && (prev[0] === 'link' || prev[0] === 'h') && b[0] !== 'blank') gapped.push(['blank']);
    if (b[0] === 'blank' && prev && prev[0] === 'blank') continue;
    gapped.push(b);
  }
  const html = gapped.map((b) => {
    if (b[0] === 'blank') return '<p><br></p>';
    if (b[0] === 'h') return `<p><span style="font-size:24px"><b>${esc(b[1])}</b></span></p>`;
    if (b[0] === 'link') return `<p style="text-align:center"><span style="background-color:#fff59d"><b><u><a href="${esc(b[2])}">${esc(b[1])}</a></u></b></span></p>`;
    if (b[0] === 'quote') return `<blockquote><p>${esc(b[1])}</p></blockquote>`;
    return `<p>${esc(b[1])}</p>`;
  }).join('');
  return { title, html, tags, images };
}
const parsed = files.map((f) => { try { return { f, ...parse(f) }; } catch (e) { console.error(`✗ ${path.basename(f)} — ${e.message}`); return null; } }).filter(Boolean);
if (!parsed.length) process.exit(2);

if (publish) {
  if (state.count >= DAILY_MAX) { console.error(`오늘 ${DAILY_MAX}편을 이미 올렸다 — 내일 올린다`); process.exit(3); }
  const wait = state.last + GAP_MS - Date.now();
  if (wait > 0) { console.log(`앞 글과 간격을 둔다 — ${Math.ceil(wait / 1000)}초 기다림`); await new Promise((r) => setTimeout(r, wait)); }
}

const pause = (a = 400, b = 900) => new Promise((r) => setTimeout(r, a + Math.random() * (b - a)));
const ctx = await chromium.launchPersistentContext(PROFILE, { headless: false, viewport: { width: 1280, height: 900 }, locale: 'ko-KR', args: ['--remote-debugging-port=9333'] });
await ctx.grantPermissions(['clipboard-read', 'clipboard-write'], { origin: 'https://cafe.naver.com' }).catch(() => {});
const page = ctx.pages()[0] || await ctx.newPage();
page.on('dialog', (d) => d.accept().catch(() => {}));

const isLogin = () => /nid\.naver\.com|nidlogin|login/.test(page.url());
async function openWrite() {
  await page.goto(WRITE, { waitUntil: 'domcontentloaded' });
  await page.waitForLoadState('networkidle').catch(() => {});
  await pause(2500, 3500);
  if (isLogin()) {
    console.log('▶ 열린 창에서 네이버 로그인을 해 주세요. "로그인 상태 유지"를 체크하세요 (최대 5분)…');
    await page.waitForURL((u) => !/nid\.naver\.com|nidlogin|login/.test(u.toString()), { timeout: 5 * 60 * 1000 });
    await pause(1500, 2500);
    await page.goto(WRITE, { waitUntil: 'domcontentloaded' });
    await page.waitForLoadState('networkidle').catch(() => {});
  }
  await pause(1500, 2500);
}

// 못 찾으면 화면 구조를 남기고 이 편은 건너뛴다 — 선택자를 이 진단으로 고친다
class Stuck extends Error {}
async function stuck(why) {
  console.error(`⚠ ${why}`);
  try {
    await page.screenshot({ path: path.join(HERE, 'debug.png') });
    const info = await page.evaluate(() => ({
      url: location.href, title: document.title,
      fields: [...document.querySelectorAll('input,textarea,[contenteditable="true"],button')].slice(0, 80).map((e) => ({
        tag: e.tagName, cls: String(e.className).slice(0, 60), ph: e.getAttribute('placeholder') || '', txt: (e.innerText || '').trim().slice(0, 20) })),
    }));
    fs.writeFileSync(path.join(HERE, 'debug.json'), JSON.stringify(info, null, 1));
    console.error('  진단 저장: scripts/cafe/debug.json · debug.png');
  } catch (e) { console.error('  진단 실패', e.message); }
  throw new Stuck(why);
}

async function fill(a) {
  // 게시판 — 주소의 menuId 만으로는 선택되지 않는다. 이름으로 고른다
  await page.getByText('게시판을 선택해 주세요.').first().click().catch(() => {});
  await pause(500, 900);
  const opt = page.getByText(BOARD, { exact: true }).first();
  if (!(await opt.count())) await stuck(`게시판 '${BOARD}' 를 못 찾았다`);
  await opt.click(); await pause();

  const titleBox = page.locator('textarea[placeholder*="제목"], input[placeholder*="제목"]').first();
  if (!(await titleBox.count())) await stuck('제목 입력칸을 못 찾았다');
  await titleBox.click(); await pause();
  await titleBox.fill(a.title); await pause();

  // 사진 — 글 맨 위에 넣는다: 썸네일(scripts/cafe/thumbs/{slug}.png, 있으면 자동) + `이미지:` 줄. 사장님이 따로 올릴 필요가 없다
  const slug = path.basename(a.f, '.md');
  const thumb = path.join(HERE, 'thumbs', `${slug}.png`);
  const imgs = [...(fs.existsSync(thumb) ? [thumb] : []), ...a.images].map((x) => path.resolve(x));
  const body0 = page.locator('.se-content .se-text-paragraph').first();
  if (!(await body0.count())) await stuck('본문 편집 영역을 못 찾았다');
  await body0.click(); await pause();
  for (const img of imgs) {
    if (!fs.existsSync(img)) { console.error(`  이미지를 못 찾아 건너뜀: ${img}`); continue; }
    const chooser = page.waitForEvent('filechooser', { timeout: 10000 });
    await page.locator('.se-image-toolbar-button').first().click();
    try { (await chooser).setFiles(img); await pause(4000, 6000); console.log(`  🖼 이미지 올림: ${path.basename(img)}`); }
    catch { console.error('  사진 올리기 실패 — 직접 넣어 주세요'); }
  }

  // 본문 — 스마트에디터에 HTML 을 클립보드로 붙여넣는다(글자 크기·링크·인용구·정렬이 그대로 들어간다). 사진 뒤 마지막 문단에서 시작
  // 큰 이미지를 올린 뒤에는 마지막 문단이 화면 가장자리에 걸려 떠 있는 툴바(se-flayer-unified-toolbar)가 클릭을 가로챈다 (2026-09-30 실측 — 3편 모두 30초 대기 후 실패)
  //   → 문단을 화면 가운데로 스크롤해 누른다. 그래도 막히면 문서 끝에 커서를 직접 둔다
  const editor = page.locator('.se-content .se-text-paragraph').last();
  await editor.evaluate((el) => el.scrollIntoView({ block: 'center' })); await pause(300, 600);
  try { await editor.click({ timeout: 6000 }); }
  catch {
    console.error('  본문 끝 클릭이 막혀 커서를 직접 둔다');
    await page.keyboard.press('Escape').catch(() => {});
    await editor.evaluate((el) => {
      const root = el.closest('[contenteditable="true"]') || el;
      root.focus();
      const r = document.createRange(); r.selectNodeContents(el); r.collapse(false);
      const s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
    });
  }
  await pause();
  await page.keyboard.press('Control+End');
  await page.evaluate(async (h) => {
    await navigator.clipboard.write([new ClipboardItem({ 'text/html': new Blob([h], { type: 'text/html' }), 'text/plain': new Blob([' '], { type: 'text/plain' }) })]);
  }, a.html);
  await page.keyboard.press('Control+v');
  await pause(1500, 2500);

  const tagBox = page.locator('input.tag_input').first();   // 태그 — 하단 태그 칸에 하나씩
  if (a.tags.length && (await tagBox.count())) {
    for (const t of a.tags) { await tagBox.click(); await tagBox.fill(t); await page.keyboard.press('Enter'); await pause(200, 500); }
  }
  await pause(800, 1500);
}

let done = 0;
for (const a of parsed) {
  const slug = path.basename(a.f, '.md');
  try {
    await openWrite();
    await fill(a);
    if (!publish) {
      const draft = page.getByRole('button', { name: /임시등록|임시저장/ }).first();
      if (!(await draft.count())) await stuck('임시등록 버튼을 못 찾았다');
      await draft.click();
      await page.getByText('임시등록이 완료되었습니다').first().waitFor({ timeout: 15000 }).catch(() => {});
      state.drafted[slug] = today; save(); done += 1;
      console.log(`✅ 임시등록 ${done}/${parsed.length}: ${a.title}`);
      await pause(2000, 3500);
    } else {
      const submit = page.getByRole('button', { name: /^등록$/ }).first();
      if (!(await submit.count())) await stuck('등록 버튼을 못 찾았다');
      await submit.click();
      await page.waitForURL(/articles\/\d+|ArticleRead|\/moneywik\/\d+/, { timeout: 30000 }).catch(() => {});
      state.count += 1; state.last = Date.now(); save();
      console.log(`✅ 등록 완료 (${today} ${state.count}/${DAILY_MAX}) → ${page.url()}`);
    }
  } catch (e) {
    if (!(e instanceof Stuck)) console.error(`✗ ${slug} — ${e.message}`);
  }
}
console.log(`끝 — 임시등록 ${done}편. 카페 "임시등록 글"에서 확인하고 이미지를 넣어 등록하세요. 창을 닫아도 됩니다.`);
await ctx.close();
