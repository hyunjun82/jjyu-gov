/**
 * 카페 글 검사기 — docs/cafe-post-baseline.md 의 규칙을 코드로 강제한다. (2026-09-29)
 *
 *   node scripts/cafe/check-cafe.mjs scripts/cafe/{slug}.md ...
 *
 * 통과 못 하면 exit 1 — post.mjs 가 임시등록을 하지 않는다.
 * 사실 대조: 글 속 숫자는 링크한 gov 글(허브 포함)에 있어야 한다. 계산 줄(=·×·÷ 가 든 줄)과 "예를 들어" 예시 안의 결과값은 건너뛴다.
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const files = process.argv.slice(2).filter((a) => !a.startsWith('--'));
if (!files.length) { console.error('사용: node scripts/cafe/check-cafe.mjs <글 파일>...'); process.exit(2); }

const read = (p) => (fs.existsSync(p) ? fs.readFileSync(p, 'utf8') : '');

/** gov 주소 → 그 글의 소스 텍스트(허브 파일 + 스포크 파일) */
function govText(url) {
  const m = url.match(/gov\.jjyu\.co\.kr\/policy\/([^/\s?#]+)(?:\/([^/\s?#]+))?/);
  if (!m) return null;
  const [, slug, spoke] = m;
  let text = '';
  const hub = path.join(ROOT, 'data/policies', `${slug}.ts`);
  if (!fs.existsSync(hub)) return null;
  text += read(hub);
  if (spoke) {
    const reg = read(path.join(ROOT, 'data/spokes/registry.ts'));
    const line = reg.match(new RegExp(`'${spoke}':\\s*([^,\\s]+),`));
    if (!line) return null;
    const imp = reg.match(new RegExp(`import \\{ ${line[1]} \\} from '([^']+)'`));
    if (!imp) return null;
    const file = path.join(ROOT, imp[1].replace('@/', '') + '.tsx');
    if (!fs.existsSync(file)) return null;
    text += '\n' + read(file);
  }
  return text;
}

const nums = (t) => [...t.matchAll(/\d[\d,]*(?:\.\d+)?/g)].map((m) => m[0].replace(/,/g, ''));
const stripCommas = (t) => t.replace(/(\d),(?=\d)/g, '$1');

let bad = 0;
for (const f of files) {
  const raw = read(f).replace(/\r\n/g, '\n');
  const errors = [];
  const title = (raw.match(/^제목:\s*(.+)/m) || [])[1] || '';
  const body = raw.replace(/^제목:.*\n/, '');
  const lines = body.split('\n');
  const tagLine = (lines.find((l) => l.startsWith('태그:')) || '').slice(3);
  const tags = tagLine.split(/[,，]/).map((t) => t.trim()).filter(Boolean);
  const linkLines = lines.filter((l) => l.startsWith('링크:'));
  const text = lines.filter((l) => !/^(링크|태그|인용구|이미지):/.test(l)).join('\n');

  // 제목
  const tl = [...title].length;
  if (tl < 30 || tl > 85) errors.push(`[제목] ${tl}자 — 30~85자. 독자가 자기 일로 느끼는 한 줄 + 핵심 사실 + 검색어`);
  if (!/\d/.test(title)) errors.push('[제목] 핵심 사실(숫자)이 없다');
  if (/방법$|정리$|총정리|한눈에/.test(title.trim())) errors.push('[제목] 설명형 끝말(방법·정리·한눈에) — 독자의 상황·핵심 사실로 시작한다');

  // 구조
  const heads = lines.filter((l) => l.startsWith('■'));
  if (heads.length < 4) errors.push(`[소제목] ${heads.length}개 — 4개 이상(■)`);
  const labelHeads = heads.filter((h) => !/[다요죠까]\s*$/.test(h.replace(/[.?!]+$/, '')) && !/[?]/.test(h));
  if (labelHeads.length) errors.push(`[소제목] 답을 말하는 문장이 아니라 키워드 라벨이다: ${labelHeads.slice(0, 2).map((h) => `"${h.slice(0, 30)}"`).join(' ')} — 결론을 문장으로(~입니다·~습니다)`);
  if (!/핵심 요약/.test(text)) errors.push('[요약] "핵심 요약" 번호 3~4줄이 없다 — 서론 뒤에 결론 숫자를 먼저 준다');
  else {
    const numbered = lines.filter((l) => /^\d\.\s/.test(l)).length;
    if (numbered < 3) errors.push(`[요약] 번호줄 ${numbered}개 — 3~4개`);
  }
  if (linkLines.length < 2) errors.push(`[링크] ${linkLines.length}개 — 서론 뒤와 맨 아래 2개 이상`);
  else if (linkLines.some((l) => !/^링크:\s*.+\|\s*https:\/\/gov\.jjyu\.co\.kr\/policy\//.test(l))) errors.push('[링크] 형식은 "링크: 글자 | https://gov.jjyu.co.kr/policy/…"');
  if (tags.length < 8 || tags.length > 10) errors.push(`[태그] ${tags.length}개 — 8~10개`);
  if (!/예를 들어|예시/.test(text)) errors.push('[예시] "예를 들어" 예시가 없다 — 계산·비교·상황 예시 하나');
  if (!/판단|넘었는지|해당하는지|어느 쪽/.test(text)) errors.push('[판단 기준] 독자가 자기 상황을 대입할 조건 문장이 없다');

  // 소제목별 분량
  const sections = text.split(/\n(?=■)/).slice(1);
  sections.forEach((s) => {
    const paras = s.split(/\n{2,}/).filter((p) => p.trim()).length - 1;
    if (paras < 3) errors.push(`[본문] "${s.split('\n')[0].slice(0, 28)}" 아래 문단 ${paras}개 — 3개 이상(답 → 이유 → 예외·주의)`);
  });

  // 문체 — 스트레이트 텍스트, 합쇼체
  const bullets = lines.filter((l) => /^\s*[-•·]\s/.test(l));
  if (bullets.length) errors.push(`[문체] 목록줄 ${bullets.length}개("- …") — 목록 대신 문장으로`);
  const sentences = text.split(/(?<=[.?!])\s+/).filter((s) => /[가-힣]/.test(s));
  const hae = sentences.filter((s) => /[가-힣]요[.?!]?\s*$/.test(s.trim())).length;
  if (sentences.length && hae / sentences.length > 0.12) errors.push(`[문체] 해요체 ${hae}/${sentences.length}문장 — 합쇼체(~입니다·~습니다)로`);
  if (/[다]고요[.]|답해 두었/.test(text)) errors.push('[문체] 시비조·메타 서술 금지');

  // 사실 — 링크한 gov 글에 있는 숫자만
  const url = (linkLines[0] || '').match(/https:\/\/\S+/)?.[0] || '';
  const gov = url ? govText(url) : null;
  if (!gov) errors.push(`[링크] 첫 링크가 열리는 gov 글이 아니다(${url || '없음'}) — 소스 파일을 못 찾았다`);
  else {
    const allowed = new Set(nums(stripCommas(gov)));
    // 가정한 예시(예를 들어…)와 그 계산 결과는 새 숫자여도 된다 — 계산에 쓴 공식·기준값은 위 문단들이 gov 글에서 온 것이어야 한다
    const exemptParas = new Set();
    const NL = String.fromCharCode(10);
    body.split(NL + NL).forEach((para) => {
      const t = para.trim();
      if (t.startsWith('예를 들어') || /^(합계|근로소득|금융재산|재산|소득)[^:]{0,6}:/.test(t)) para.split(NL).forEach((x) => exemptParas.add(x));
    });
    for (const x of exemptParas) for (const n of nums(stripCommas(x))) allowed.add(n);   // 예시에서 가정한 값을 뒤 문장이 다시 말하는 건 허용
    const factLines = lines.filter((l) => !/^(링크|태그|인용구|이미지):/.test(l) && !/[=×÷]/.test(l) && !/^\d\.\s/.test(l) && !exemptParas.has(l));
    const missing = new Map();
    for (const l of factLines) {
      for (const n of nums(stripCommas(l))) {
        if (n.length < 2 && !n.includes('.')) continue;            // 한 자리 숫자(1위·3개월 등)는 세지 않는다
        if (!allowed.has(n) && !missing.has(n)) missing.set(n, l.trim().slice(0, 50));
      }
    }
    // 계산 결과 문단("합계:", "예를 들어" 다음 줄들)은 계산 줄이므로 제외됨. 나머지에서 gov 에 없는 숫자만 보고한다
    for (const [n, l] of missing) errors.push(`[숫자] ${n} — 링크한 gov 글에 없다: "${l}"`);
  }

  console.log(`${errors.length ? '❌' : '✅'} ${path.basename(f)} — ${errors.length ? errors.length + '건' : '통과'} (제목 ${tl}자 · 소제목 ${heads.length} · 링크 ${linkLines.length} · 태그 ${tags.length})`);
  errors.forEach((e) => console.log(`   ${e}`));
  if (errors.length) bad += 1;
}
process.exit(bad ? 1 : 0);
