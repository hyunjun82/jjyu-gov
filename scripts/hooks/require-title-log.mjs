#!/usr/bin/env node
/* 타이틀 훅 — 하는 일은 하나다.
 *
 *   "이 글을 위해 reference/titles/ 캡처를 열었는가"
 *
 * 안 열었으면 글 저장을 막는다. 그게 전부다.
 *
 * 2026-08-15: 281줄 → 이 크기로 줄였다.
 *   원래는 구성표 유무·사장님 승인·출처 캡처·버튼 목적지·서론·라벨 길이까지
 *   일곱 가지를 막고 있었다. 전부 내가 규칙을 어길 때마다 덧붙인 것이고,
 *   결과적으로 글 하나 쓰는 데 여섯 번씩 되돌리게 만들었다.
 *   사장님 지시로 "캡처 확인" 한 가지만 남긴다.
 */
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

const ROOT = process.env.CLAUDE_PROJECT_DIR || process.cwd();

/* 사람이 끄고 싶을 때: touch .claude/hooks-off */
if (existsSync(join(ROOT, '.claude', 'hooks-off'))) process.exit(0);

let input = '';
try { input = readFileSync(0, 'utf8'); } catch { process.exit(0); }

let payload;
try { payload = JSON.parse(input); } catch { process.exit(0); }

const file = payload?.tool_input?.file_path || '';
if (!/data[\\/]policies[\\/][a-z0-9-]+\.ts$/i.test(file)) process.exit(0);
if (/manifest\.ts$/.test(file)) process.exit(0);

const slug = file.split(/[\\/]/).pop().replace(/\.ts$/, '');

/* docs/title-log.md 에 이 글의 캡처 기록이 있는가 */
const logPath = join(ROOT, 'docs', 'title-log.md');
const log = existsSync(logPath) ? readFileSync(logPath, 'utf8') : '';
const block = log.split(/^## /m).find((b) => b.startsWith(slug));

if (!block || !/^- 캡처:/m.test(block)) {
  console.error(
    [
      `[타이틀 훅] ${slug} — 캡처를 열고 기록해야 저장할 수 있다.`,
      '',
      '  1. reference/titles/ 중 주제와 가까운 1장을 Read 로 연다',
      '  2. docs/title-log.md 에 적는다:',
      `     ## ${slug}`,
      '     - 캡처: <파일명> — "<캡처에서 본 타이틀 한 줄 그대로>"',
      '     - 타이틀: <확정 타이틀>',
      '',
      '  (사장님이 타이틀을 직접 주셨으면 캡처 줄에 그렇게 적는다)',
      '  끄려면: touch .claude/hooks-off',
    ].join('\n'),
  );
  process.exit(2);
}

process.exit(0);
