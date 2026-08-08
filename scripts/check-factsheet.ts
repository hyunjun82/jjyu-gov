/**
 * 팩트시트 게이트 — 신규 콘텐츠는 채워진 팩트시트 없이 push 불가
 *
 * 배경 (2026-08-07): 확정일자 글에서 관할(법무부령/대법원규칙)을 안 가리고
 * 수수료 600원을 잘못 쓸 뻔했다. 원인은 "사실 검증" 단계에 게이트가 없어서
 * 사람(사용자)이 마지막 검증기 역할을 해온 것. 이 게이트가 그 구멍을 막는다.
 *
 * 규칙:
 *  1. 신규 추가되는 허브(data/policies/*.ts)·스포크(content/**\/*.tsx) 파일은
 *     파일 안에 `팩트시트: scripts/output/factsheet-<이름>.md` 주석이 있어야 한다.
 *  2. 그 팩트시트 파일이 실제로 존재해야 한다.
 *  3. 팩트시트에 미기입 흔적(템플릿 placeholder)이 남아 있으면 차단:
 *     - "(예/아니오)" 그대로 남음
 *     - 표에 빈 행만 있음 (`|  |  |` 패턴만 존재)
 *     - 콜론으로 끝나는 빈 항목 줄
 *  4. 기존 파일 수정(M)은 검사하지 않는다 — 신규(A)만. 소급 차단하면 아무것도 못 민다.
 *
 * 사용:
 *   npx tsx scripts/check-factsheet.ts          # pre-push (origin/main...HEAD 의 A 파일)
 */
import { execSync } from 'child_process';
import { existsSync, readFileSync } from 'fs';
import { join } from 'path';
import { changedFiles, partition, PROBE } from './lib/changed-files';

const ROOT = execSync('git rev-parse --show-toplevel').toString().trim();

function sh(cmd: string): string {
  try { return execSync(cmd, { cwd: ROOT }).toString(); } catch { return ''; }
}

const isContentFile = (f: string) =>
  (/^data\/policies\/[^/]+\.ts$/.test(f) && !f.endsWith('manifest.ts')) ||
  /^app\/policy\/\[id\]\/\[spoke\]\/content\/.+\.tsx$/.test(f);

/* 사실(수치·출처·본문)을 건드린 수정만 팩트시트를 요구한다.
   판정은 scripts/lib/changed-files.ts 한 곳에 있다 — 게이트마다 복사했더니
   같은 병이 factsheet → duplicate → cue-value 순으로 재발했다 (2026-08-08). */
const all = changedFiles(isContentFile);
const addedNew = all.filter((x) => x.kind === 'A').map((x) => x.file);
const modified = all.filter((x) => x.kind === 'M').map((x) => x.file);
const part = partition(modified, PROBE.facts);
const modifiedFacts = part.kept;
const metaOnly = part.skipped;
if (metaOnly > 0) {
  console.log(` ℹ 수정 ${modified.length}개 중 ${metaOnly}개는 메타데이터만 바뀜(수치·출처·본문 변경 없음) — 팩트시트 요구 안 함\n`);
}
const added = [...addedNew, ...modifiedFacts];

if (added.length === 0) {
  console.log(' 신규 허브·스포크 없음 — 팩트시트 검사 생략');
  process.exit(0);
}

console.log('============================================================');
console.log(' 팩트시트 게이트 — 사실 검증 없이 쓴 글인지 본다');
console.log('============================================================\n');


/**
 * 교차출처 자기참조 검사 (2026-08-08 신설)
 *
 * 왜: 실손 비급여 할증 글에서 협회 FAQ 요약문("100만원 이상 최대 네 배")만 인용해
 *     금융위 원문의 1~5등급 구간표를 놓쳤다. 팩트시트 '교차출처' 칸에 근거와 같은
 *     기관(협회)을 적어놓고 통과시킨 것이 원인이다.
 *     칸이 채워졌는지만 보면 같은 출처를 돌려막아도 게이트가 통과된다.
 *
 * 무엇을: 수치 표(| 수치 | 값 | 근거 | URL | 교차출처 |)의 각 행에서
 *     URL 칸의 도메인과 교차출처 칸의 도메인이 같으면 자기참조로 본다.
 *     교차출처가 "〃"(위와 같음)이면 바로 위 행의 판정을 물려받는다.
 */

/**
 * 캡처 확인 칸 검사 (2026-08-08 신설 — 절대규칙 7-A)
 *
 * 왜: "캡처를 봤는가"는 push 시점에 흔적이 남지 않아 직접 검사할 수 없다.
 *     대신 팩트시트 "0-B. 원문 캡처 확인"에 **캡처에서 본 것을 구체적으로** 적게 한다.
 *     안 보고는 못 적는다. 빈칸이거나 "예"만 있으면 차단.
 *     (2026-08-08 사장님 지적: 캡처를 넣어줬는데도 안 보고 타이틀을 지었다)
 */
function captureNotChecked(sheet) {
  const i = sheet.indexOf('0-B');
  if (i < 0) return '0-B 캡처 확인 섹션 자체가 없다';
  const seg = sheet.slice(i, i + 900);
  if (/\(예\/아니오\)/.test(seg)) return '캡처 확인 칸이 템플릿 그대로다';
  const m = seg.match(/캡처에서 확인한 것[^:]*:\s*(.*)/);
  const detail = (m && m[1] || '').trim();
  if (detail.length < 15) return '"캡처에서 확인한 것"이 비었거나 너무 짧다 — 표 구조·단서 위치를 구체적으로 적는다';
  return null;
}

/**
 * 오해 소지 검사 (2026-08-08 신설)
 *
 * 왜: 수치가 다 맞아도 "대부분/경우가 많다"처럼 원문에 없는 빈도를 붙이면 오해가 된다.
 *     2026-08-07 어제 글 11곳에서 발견해 손으로 고쳤다. 손으로 찾으면 또 놓친다.
 *     원문에 비율·통계가 없으면 빈도 표현을 쓰지 않는다.
 *     단, 독자 공감 표현("당황하셨을 겁니다")은 사실 주장이 아니므로 제외한다.
 */
/* 이스케이프 사고를 피하려고 정규식 대신 직접 파싱한다.
   (2026-08-08: new RegExp 문자열 이스케이프가 깨져 검사가 조용히 통과했다 — 검사기가 검사를 못 하면 없는 것과 같다) */
const FREQ_WORDS = ['대부분', '대개', '경우가 많', '흔합니다'];
const EMPATHY_WORDS = ['당황하셨', '놀라셨', '겪으셨', '아셨다면', '계신 분이 많', '기억나지 않는 경우가 많', '막막하셨', '포기하셨'];

/** intro:/content:/a: 뒤에 오는 작은따옴표 문자열을 모두 뽑는다 */
function quotedTexts(src) {
  const out = [];
  for (const key of ['intro:', 'content:', 'a:']) {
    let from = 0;
    for (;;) {
      const k = src.indexOf(key, from);
      if (k < 0) break;
      const q1 = src.indexOf("'", k + key.length);
      if (q1 < 0) break;
      const q2 = src.indexOf("'", q1 + 1);
      if (q2 < 0) break;
      const body = src.slice(q1 + 1, q2);
      if (body.length >= 40) out.push(body);
      from = q2 + 1;
    }
  }
  return out;
}

function riskyFrequency(src) {
  const bad = [];
  for (const text of quotedTexts(src)) {
    for (const w of FREQ_WORDS) {
      let i = text.indexOf(w);
      while (i >= 0) {
        const around = text.slice(Math.max(0, i - 40), i + 40);
        if (!EMPATHY_WORDS.some((e) => around.includes(e))) {
          bad.push(around.replace(/\s+/g, ' ').trim());
        }
        i = text.indexOf(w, i + 1);
      }
    }
  }
  return [...new Set(bad)];
}

function urlsOf(text) {
  const out = [];
  for (const m of text.matchAll(/(?:https?:\/\/)?[a-z0-9.-]+\.(?:go|or|co)\.kr[^\s|)]*/gi)) {
    out.push(m[0].toLowerCase().replace(/^https?:\/\//, '').replace(/^www\./, '').replace(/[.,)]+$/, ''));
  }
  return out;
}

function selfCitedRows(sheet) {
  const bad = [];
  let lastUrls = [];
  let lastCross = [];
  for (const line of sheet.split(String.fromCharCode(10))) {
    if (!line.trim().startsWith('|')) continue;
    const cells = line.split('|').map((c) => c.trim());
    if (cells.length < 7) continue;                 // | 수치 | 값 | 근거 | URL | 교차출처 |
    const label = cells[1];
    const url = cells[4];
    const cross = cells[5];
    if (/^-+$/.test(label) || label === '수치' || !label) continue;
    const urlU = url === '〃' ? lastUrls : urlsOf(url);
    const crossU = cross === '〃' ? lastCross : urlsOf(cross);
    lastUrls = urlU;
    lastCross = crossU;
    if (!urlU.length) continue;                     // URL 없는 행은 판단하지 않는다
    /* 교차출처에 "다른 문서 URL"이 하나도 없으면 자기참조.
       같은 기관이라도 다른 발표문(예: 금융위 2024 보도자료 ↔ 2026 보도자료)이면 교차로 인정한다.
       "Playwright 직접 열람" 같은 문구만 있고 URL이 없으면 검증한 것이 아니라 같은 문서를 본 것이다. */
    /* 미확보 판정을 먼저 한다. 사유 문장에 "law.go.kr에서 막혔다"처럼 도메인이 들어가는데,
       이걸 교차출처 URL로 세면 못 구했다고 적은 행이 오히려 통과한다 (2026-08-08 실제로 겪음). */
    const miss = cross.match(/미확보:\s*(.+)$/);
    if (miss) {
      if (miss[1].trim().length >= 15) unresolved.push(label.slice(0, 40) + ' — ' + miss[1].trim());
      else bad.push(label.slice(0, 40));
      continue;
    }
    const hasOtherDoc = crossU.some((u) => !urlU.includes(u));
    if (hasOtherDoc) continue;
    /* 교차출처를 못 구한 경우, 왜 못 구했는지를 적으면 차단 대신 경고로 넘긴다.
       (2026-08-08: 마운자로 정정 때 law.go.kr 별표·생보협회·금감원이 모두 봇 차단이라
        확인된 정정까지 못 나가는 상황이 생겼다. 다만 그냥 통과시키면 조용히 묻히므로
        push 때마다 경고 목록으로 계속 뜬다. 사유 없이 비워두면 그대로 차단.) */
    bad.push(label.slice(0, 40));
  }
  return bad;
}

/** 교차출처를 못 구했다고 사유를 적은 행 — 차단하지 않되 매번 보이게 한다 */
const unresolved: string[] = [];

const PLACEHOLDERS = [
  /\(예\/아니오\)\s*$/m,            // 관할 질문 미기입
  /^\|\s*\|\s*\|\s*\|\s*\|\s*\|$/m, // 수치 표 빈 행만
  /^-\s[^:]+:\s*$/m,                // "- 항목: " 빈 값
];

let fail = 0;
for (const f of added) {
  const src = readFileSync(join(ROOT, f), 'utf8');
  const m = src.match(/팩트시트:\s*(scripts\/output\/factsheet-[^\s'"*]+\.md)/);
  const name = f.split('/').pop();

  if (!m) {
    console.log(`❌ ${name}`);
    console.log('   [팩트시트 참조 없음] 파일 상단 주석에 `팩트시트: scripts/output/factsheet-<이름>.md` 를 적는다');
    console.log('   → 템플릿: scripts/factsheet-template.md 복사 → 관할·수치·단서·행동 검증 후 그 경로를 주석에 기재\n');
    fail++;
    continue;
  }

  const fsPath = join(ROOT, m[1]);
  if (!existsSync(fsPath)) {
    console.log(`❌ ${name}`);
    console.log(`   [팩트시트 파일 없음] ${m[1]} 이 존재하지 않는다\n`);
    fail++;
    continue;
  }

  const sheet = readFileSync(fsPath, 'utf8');
  const holes = PLACEHOLDERS.filter((r) => r.test(sheet));
  if (holes.length > 0) {
    console.log(`❌ ${name}`);
    console.log(`   [팩트시트 미기입] ${m[1]} 에 빈 칸이 남아 있다 (placeholder ${holes.length}종 검출)`);
    console.log('   → 빈 칸은 "검증 안 한 사실"이다. Playwright로 원문을 열어 채우거나, 확인 불가면 본문에서 그 수치를 뺀다\n');
    fail++;
    continue;
  }


  // 교차출처 자기참조 — 같은 기관 안에서 돌려막았는지 (2026-08-08 신설)
  const selfCited = selfCitedRows(sheet);
  if (selfCited.length > 0) {
    console.log(`❌ ${name}`);
    console.log(`   [교차출처 자기참조] ${m[1]} 의 수치 ${selfCited.length}개가 근거와 같은 기관만 인용한다`);
    console.log(`      → ${selfCited.slice(0, 4).join(' / ')}${selfCited.length > 4 ? ' …' : ''}`);
    console.log('   → 다른 기관 원문을 열어 교차출처 칸을 채운다 (예: 협회 요약문 ↔ 금융위 보도자료, 기관 안내 ↔ law.go.kr 조문)');
    console.log('      2026-08-07 실손 할증 사고: 협회 요약문만 보고 금융위 5등급 구간표를 놓쳤다');
    console.log('');
    fail++;
    continue;
  }


  // 캡처 확인 — 절대규칙 7-A (2026-08-08)
  const capMiss = captureNotChecked(sheet);
  if (capMiss) {
    console.log(`❌ ${name}`);
    console.log(`   [원문 캡처 미확인] ${m[1]} — ${capMiss}`);
    console.log('   → browser_take_screenshot 으로 원문을 캡처해 보고, 표 구조·단서 위치를 그 칸에 적는다');
    console.log('');
    fail++;
    continue;
  }

  // 오해 소지 — 원문에 없는 빈도 주장 (2026-08-08)
  const freq = riskyFrequency(src);
  if (freq.length > 0) {
    console.log(`❌ ${name}`);
    console.log(`   [근거 없는 빈도 주장] ${freq.length}곳 — 원문에 비율이 없으면 "대부분/경우가 많다"를 쓰지 않는다`);
    freq.slice(0, 3).forEach((x) => console.log(`      · …${x}…`));
    console.log('   → 조건문으로 바꾼다 ("~인 경우입니다", "~일 수 있습니다") / 통계가 원문에 있으면 그 수치를 인용한다');
    console.log('      2026-08-07 어제 글 11곳에서 같은 문제가 나왔다');
    console.log('');
    fail++;
    continue;
  }

  // 관할 섹션 존재 확인 — 이번 사고의 직접 원인
  if (!/##\s*0\.\s*관할/.test(sheet)) {
    console.log(`❌ ${name}`);
    console.log(`   [관할 섹션 없음] ${m[1]} 에 "## 0. 관할 확정" 섹션이 없다 — 기관별 적용 법령부터 가린다\n`);
    fail++;
    continue;
  }

  console.log(`✅ ${name} ← ${m[1]}`);
}

console.log('');
if (unresolved.length) {
  console.log('⚠ 교차출처 미확보 (차단 안 함 — 사유가 적혀 있음). 뚫리면 바로 채운다:');
  for (const u of unresolved) console.log(`   · ${u}`);
  console.log('   접근이 막혔을 때 순서: Claude in Chrome → law.go.kr/easylaw 원문 → korea.kr·보도자료\n');
}
if (fail > 0) {
  console.log('============================================================');
  console.log(` 팩트시트 미비 ${fail}개 — push 차단`);
  console.log(' 게이트 통과 ≠ 사실 검증 통과. 사실 검증은 팩트시트가 담당한다.');
  console.log('============================================================');
  process.exit(1);
}
console.log(' ✅ 통과 — 신규 글 전부 채워진 팩트시트가 있다');
