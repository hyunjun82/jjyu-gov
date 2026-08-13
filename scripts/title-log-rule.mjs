/**
 * title-log-rule.mjs — "이 글의 캡처 확인 기록이 title-log 에 제대로 있나" 단일 판정기
 *
 * 왜 하나로 합쳤나 (2026-08-13 사장님 지시 "두 개를 하나로 만들면 되잖아"):
 *   같은 검사를 두 곳이 각각 따로 짜놨다.
 *     · scripts/hooks/require-title-log.mjs  (저장 직전, PreToolUse)
 *     · scripts/check-title-source.ts 4번    (push 직전, pre-push)
 *   따로 짜니 어긋났다 — push 게이트 쪽에는 INDEX.md 대조가 아예 빠져 있어서,
 *   캡처에 없는 제목을 지어내도 push 는 통과했다. 규칙이 둘이면 약한 쪽이 뚫린다.
 *   판정은 여기 한 곳에서만 하고, 두 검사기는 시점만 다르게 이 함수를 부른다.
 *
 * 시점을 둘로 유지하는 이유:
 *   훅은 .claude/hooks-off 로 끌 수 있다(사장님이 오판 대비로 넣으신 스위치).
 *   그때 push 게이트가 유일한 그물이 된다. 그래서 시점은 둘, 규칙은 하나다.
 */
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const norm = (s) => s.replace(/[\s"“”'’|·ㆍ!?，,.]/g, '').toLowerCase();

/**
 * @param {string} root  프로젝트 루트
 * @param {string} slug  확장자를 뗀 글 파일명
 * @returns {{ok: boolean, why: string, givenByOwner: boolean}}
 */
export function checkTitleLog(root, slug) {
  const logPath = join(root, 'docs', 'title-log.md');
  const log = existsSync(logPath) ? readFileSync(logPath, 'utf8') : '';
  const esc = slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const entryRe = new RegExp('^##[^\\n]*' + esc, 'm');

  if (!entryRe.test(log)) {
    return { ok: false, givenByOwner: false, why: `docs/title-log.md 에 "## ${slug}" 항목이 없다` };
  }
  const block = log.slice(log.search(entryRe)).split(/\n## /)[0];

  /* 사장님이 타이틀을 직접 주신 경우 — 캡처 인용 대신 실제 출처를 적는다.
     이미 받은 타이틀에 캡처 인용을 강요하면 허위 인용을 지어내게 된다(2026-08-11). */
  const givenByOwner = /- 출처:\s*사장님 지시\s*—\s*["“].+["”]/.test(block);
  const hasPat = /- 패턴:\s*[①-⑨]/.test(block);

  if (givenByOwner) {
    return hasPat
      ? { ok: true, givenByOwner: true, why: '' }
      : { ok: false, givenByOwner: true, why: '- 패턴: <①~⑨> 줄이 없다' };
  }

  /* 파일명에 공백이 있다("세금 타이틀.png") — \S+ 로 잡으면 공백에서 깨진다 */
  const capM = block.match(/- 캡처:\s*(.+?)\s*—\s*["“](.+?)["”]/);
  if (!capM) return { ok: false, givenByOwner: false, why: '- 캡처: <파일명> — "<제목>" 줄이 없다' };
  if (!hasPat) return { ok: false, givenByOwner: false, why: '- 패턴: <①~⑨> 줄이 없다' };

  /* 인용한 제목이 캡처에 실제로 있는 줄인가 (2026-08-11 신설).
     형식만 보던 시절, 채팅 스크린샷에서 본 제목을 로컬 캡처에서 본 것처럼 적은
     허위 인용 8건이 그대로 통과했다. 목록의 원천은 reference/titles/INDEX.md. */
  const indexPath = join(root, 'reference', 'titles', 'INDEX.md');
  const indexRaw = existsSync(indexPath) ? readFileSync(indexPath, 'utf8') : '';
  const knownTitles = indexRaw
    .split('\n')
    .filter((l) => /^-\s+\S/.test(l))
    .map((l) => norm(l.replace(/^-\s+/, '')))
    .filter((l) => l.length > 8);

  if (!knownTitles.length) {
    return { ok: false, givenByOwner: false, why: 'reference/titles/INDEX.md 를 읽지 못했다 — 대조 불가라 차단한다' };
  }

  const quoted = norm(capM[2]);
  const found = knownTitles.some((t) => t.includes(quoted) || quoted.includes(t));
  if (!found) {
    return {
      ok: false,
      givenByOwner: false,
      why:
        `인용한 제목이 캡처 목록에 없다: "${capM[2]}"\n` +
        '     → 그 줄은 reference/titles/ 캡처에 없는 제목이다. 채팅 스크린샷이나 기억에서\n' +
        '        가져온 것이라면 캡처를 인용하지 말고 실제 출처를 그대로 적는다.\n' +
        '        (캡처를 새로 갈아끼웠다면 reference/titles/INDEX.md 부터 갱신한다)',
    };
  }
  return { ok: true, givenByOwner: false, why: '' };
}
