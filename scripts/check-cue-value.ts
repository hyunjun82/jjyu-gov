/**
 * check-cue-value.ts — 허브 카드마다 "누를 이유(cue) + 버튼"이 있는지 검사
 *
 * 왜 이 게이트가 필요했나 (2026-07-30):
 *   버튼 앞 문구가 이 프로젝트에서 가장 중요한 규칙인데도, 게이트 5개 전부에
 *   act/cue를 보는 코드가 0줄이었다. 결과는 허브 703개 중 문구가 있는 게 9개(1.3%).
 *   Format A·qa≥7·Q1~Q13처럼 게이트가 붙은 규칙은 거의 100% 지켜졌다.
 *   → 검사하지 않는 규칙은 지켜지지 않는다. 그래서 검사한다.
 *
 * 이 게이트가 하지 않는 일:
 *   cue 문장을 자동 생성하지 않는다. 주제를 모르는 템플릿 문장을 703개에 뿌리면
 *   그게 곧 도배다(과거 hubCue() 자동생성을 만들었다가 폐기한 이유).
 *   문장은 사람이 주제를 보고 쓴다. 게이트는 "빠졌는지"와 "베껴 썼는지"만 본다.
 *
 * 검사 항목:
 *   A 문구 누락    qa 카드 수만큼 act.cue 가 있는가
 *   B 문구 도배    다른 정책 파일의 cue 와 문장이 똑같지 않은가
 *   C 목적지 뭉침  한 글의 act.url 이 전부 같은 곳을 가리키지 않는가
 *   D 딥링크 아님  act.url 이 기관 메인/루트가 아닌가 (그 카드의 행동 지점인가)
 *   E 어미 반복    한 글 안에서 같은 종결 표현이 3회 이상 반복되지 않는가
 *   F 라벨 정보형  버튼 라벨이 '…안내 보기'가 아니라 실제 행동인가
 *   H 후킹 부재    문구에 숫자·손실·기한·물음 중 하나라도 실렸는가 (docs/hook-patterns.md)
 *   I 작성자 입장  제도 설명이 아니라 읽는 사람의 손해를 말하는가 (docs/button-copy.md)
 *   J 버튼 설명문  버튼이 14자 이내 행동인가, 기관명이 안 붙었는가
 *   K 비문         한국어로 말이 되는 문장인가 (지적받은 어색한 표현 재발 차단)
 *   L 버튼 도배    한 글의 버튼이 전부 같은 동사(…확인하기)로 끝나지 않는가
 *   M 읽는 버튼    버튼이 읽어보는 동사뿐이 아닌가 (사용자 목적 = 신청·접수·발급)
 *
 * 사용:
 *   npx tsx scripts/check-cue-value.ts          # 변경된 허브만 (pre-push, 차단)
 *   npx tsx scripts/check-cue-value.ts --all    # 전체 현황 (차단 안 함)
 *   npx tsx scripts/check-cue-value.ts --draft <파일>  # 본문 쓰기 전 문구 초안만 검사
 */
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const ROOT = 'data/policies';

/**
 * 기관 메인/루트 — 그 카드의 행동 지점이 아니라 "홈페이지 가세요"에 가깝다.
 * 좁게 잡는다: 사업 전용 경로의 랜딩(fill4young.kinfa.or.kr/yfs/main 등)은
 * 그 사업의 안내 화면이라 딥링크로 인정한다. 오탐으로 push를 막으면 게이트를
 * 우회하게 되고, 그러면 게이트가 없는 것과 같아진다.
 */
const SHALLOW_PATTERNS: RegExp[] = [
  /^https?:\/\/[^/]+\/?$/i,                        // 도메인 루트
  /^https?:\/\/[^/]+\/(main|index)(\.\w+)?\/?$/i,   // 도메인 직하위 main
  /^https?:\/\/[^/]+\/\w+\/(main|index)\.\w+$/i,    // 포털 메인 (…/nportal/main.do)
];
/**
 * 쿼리스트링이 붙으면 딥링크로 본다.
 * ticket.melon.com/performance/index.htm?prodId=212031 처럼 파일명이 index여도
 * 파라미터가 특정 공연·특정 공고를 가리키면 그건 그 카드의 행동 지점이다.
 */
const isShallow = (u: string) => {
  const [base, query] = u.split('?');
  if (query && query.length > 2) return false;
  return SHALLOW_PATTERNS.some((r) => r.test(base));
};

/**
 * 버튼 라벨은 행동이어야 한다.
 * "상품 안내 보기 / 자세히 보기"는 정보라 눌릴 이유가 없다 — 실제로 이 라벨을 단
 * 카드가 클릭을 못 받았다(2026-07-30). 보는 건 행동이 아니다.
 */
/**
 * 버튼 라벨 판정 — 화이트리스트가 아니라 구조로 본다.
 *
 * 2026-08-01 재설계: 원래는 행동 동사 목록에 매칭하는 방식이었는데 양쪽으로 다 샜다.
 *   오탐 — "이용시간 기준 점검하기", "우리 아이 유형 판정하기"처럼 멀쩡한 라벨이
 *          목록에 없는 동사(점검·판정)라는 이유로 막혔다. 새 표현마다 목록을 늘려야 했다.
 *   미탐 — 정작 "확인하기", "그냥 확인", "홈페이지 확인하기", "정보 확인하기"는
 *          '확인'이 목록에 있다는 이유로 전부 통과했다. 우리가 없애려던 바로 그 문구다.
 * 목록을 늘리는 건 답이 아니다. 좋은 라벨의 조건은 어휘가 아니라 구조다:
 *   [구체적인 대상] + [행동으로 끝나는 동사구]
 * 대상이 없으면("확인하기") 무엇을 확인하는지 모르고,
 * 대상이 빈말이면("홈페이지 확인하기") 누를 이유가 안 된다.
 */
const LABEL_IDIOM = /(안내|정보|내용|자료)\s*(보기|확인)$|자세히\s*보기|^바로가기$|^보기$/;
/** 그 자체로는 아무것도 가리키지 않는 말 — 대상으로 쳐주지 않는다 */
const WEAK_WORD =
  /^(안내|정보|자료|내용|페이지|홈페이지|사이트|여기|이곳|저기|더|그냥|각종|관련|해당|자세히|상세|눌러|눌러서|클릭|바로)$/;
/** 행동으로 끝나는가 — 동사를 나열하지 않는다. 한국어 동사의 명사형 '…기' 종결이면 행동으로 본다.
    (목록 방식은 '점검·판정·챙기기'처럼 새 동사가 나올 때마다 오탐이 났다.
     구체적 대상이 있는지는 아래에서 따로 보므로, 종결형은 넓게 인정해도 안전하다) */
const VERB_END = /기$/;

/**
 * 정본: docs/button-copy.md
 *
 * I 작성자 입장 — 문구가 제도를 설명하고 있는가, 그 사람의 손해를 말하는가.
 *   기준 예시(임영웅): "매년 실패하시는 분들이 많으실 텐데, 일정이 지금 나왔으니
 *   이번에는 예매 성공하시길 바랍니다." — 주어가 '제도'가 아니라 '그 사람'이다.
 *   2026-08-02 신설: H축(숫자·기한 유무)만으로는 "이 제도는 …사업입니다" 같은
 *   안내문이 그대로 통과했다. 숫자가 있어도 사용자 이야기가 아니면 안 눌린다.
 *
 * J 버튼 길이·기관명 — 버튼은 설명이 아니라 출구다.
 *   "지금 다자녀 통행료 할인 사전등록하기 (한국도로공사 공식)" 26자 → "다자녀 할인 등록하기" 9자.
 */
/** 주어가 제도·기관이면 작성자 입장이다 */
const WRITER_SUBJECT =
  /^(이|그|해당|본)?\s*(제도|사업|정책|지원금|지원사업|기관|공단|재단|공사|정부|국가|시|군|구청|협회)(는|가|은|이|에서는|에서)/;
/** 읽는 사람을 향한 표지 — 하나도 없으면 남 이야기다 */
const USER_MARK =
  /(신 적|셨다면|셨을|하셨|계실|많으실|아셨다면|생각하셨|놓치신|받으신|겪으신|이실|드실|텐데|분들|여러분|당신|내가|우리)/;
/** 버튼에 들어가면 안 되는 기관명·수식어 */
const ORG_IN_LABEL = /(공단|재단|공사|정부24|복지로|홈택스|고용24|한국장학재단|공식|바로가기\s*\()/;
/** 공백 제외 이 길이를 넘으면 버튼이 설명문이 된다 */
const LABEL_MAX = 14;

/* 비문·어색한 표현 목록. 사용자가 잡아준 것을 하나씩 등록해 재발을 막는다.
   화이트리스트가 아니라 블랙리스트인 이유: 자연스러운 한국어는 무한하지만
   우리가 반복해서 저지르는 비문은 몇 가지 패턴으로 수렴한다. */
const AWKWARD: { re: RegExp; why: string }[] = [
  { re: /[가-힣]{1,6}(을|를)\s*맞추십니다|시(를|을)\s*맞추/, why: '"6시를 맞추십니다"는 한국어가 아니다 — 마감은 "…까지이니 미리 신청하시길 바랍니다"' },
  { re: /대주(는데|는|고|며|지만)|대줍니다|대준다/, why: '"300만원을 대주는데"는 구어 비속 표현 — 지원합니다' },
  { re: /끝내십니다|끝내십시오|마치십니다|해치우십니다/, why: '명령형 종결이 어색하다 — "오늘 접수하시길 바랍니다"' },
  { re: /걸리십니다|걸리실\s*겁니다/, why: '자격 미달을 "걸리십니다"로 쓰면 위압적이다 — "이번에는 신청하실 수 없습니다"' },
  { re: /남으셨는데요|남으셨습니다/, why: '"며칠 안 남으셨는데요"는 주어가 어긋난다 — "며칠 남지 않았습니다"' },
  { re: /계산이\s*섭니다|판단이\s*섭니다|각이\s*나옵니다/, why: '속어에 가깝다 — "계산됩니다"·"판단하실 수 있습니다"' },
];

function judgeLabel(raw: string): string | null {
  const t = raw.trim();
  if (LABEL_IDIOM.test(t)) return '"…안내 보기 / 자세히 보기" 류 관용구 — 정보지 행동이 아니다';
  if (!VERB_END.test(t)) return '행동으로 끝나지 않는다 — 무엇을 하는 버튼인지 안 보인다';
  const words = t.split(/\s+/);
  if (words.length < 2) return `대상 없이 동사만 있다 — 무엇을 ${t.replace(/하기$/, '')}하는지 없다`;
  const object = words.slice(0, -1);
  const real = object.filter((w) => !WEAK_WORD.test(w));
  if (real.length === 0) return `대상이 빈말이다("${object.join(' ')}") — 그 카드에서 다룬 구체적 대상을 넣는다`;
  if (real.join('').length < 2) return '대상이 너무 짧아 무엇인지 알 수 없다';
  return null;
}

type Issue = { axis: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M'; msg: string; fix: string };

/** 파일에서 cue/label/url 과 qa 카드 수를 뽑는다 (TS 실행 없이 정적 파싱) */
function parse(file: string) {
  const c = fs.readFileSync(file, 'utf8');
  const consts = new Map<string, string>();
  for (const m of c.matchAll(/^const\s+([A-Z0-9_]+)\s*=\s*'([^']+)'/gm)) {
    consts.set(m[1], m[2]);
  }
  const qaCount = (c.match(/^\s{4,6}anchor: '/gm) || []).length
    || (c.match(/anchor: '/g) || []).length;

  /* 문구 안에 작은따옴표가 있으면 "…" 로 감싸 쓴다(예: '대상 불가'로 끝납니다).
     한 종류만 읽으면 있는 문구를 없다고 잡아 헛차단이 난다 — 세 종류 다 읽는다. */
  const cues: string[] = [];
  for (const m of c.matchAll(/cue:\s*'((?:[^'\\]|\\.)*)'/g)) cues.push(m[1]);
  for (const m of c.matchAll(/cue:\s*"((?:[^"\\]|\\.)*)"/g)) cues.push(m[1]);
  for (const m of c.matchAll(/cue:\s*`((?:[^`\\]|\\.)*)`/g)) cues.push(m[1]);

  const labels: string[] = [];
  const urls: string[] = [];
  // act 블록 안의 url 만 — sources/faq 의 url 은 제외한다
  for (const m of c.matchAll(/act:\s*\{[\s\S]{0,900}?\}/g)) {
    const raw = m[0].match(/url:\s*(?:'([^']+)'|([A-Z0-9_]+))/);
    if (!raw) continue;
    urls.push(raw[1] ?? consts.get(raw[2] ?? '') ?? raw[2] ?? '');
    const lm = m[0].match(/label:\s*'([^']+)'/) ?? m[0].match(/label:\s*"([^"]+)"/);
    if (lm) labels.push(lm[1]);
  }

  const slug = c.match(/slug: '([^']+)'/)?.[1] ?? path.basename(file, '.ts');
  const heroHook = c.match(/heroHook:\s*'([^']*)'/)?.[1] ?? '';
  return { slug, qaCount, cues, urls, labels, heroHook };
}

/** 종결 표현 — 마지막 어절 기준으로 거칠게 본다 */
function ending(s: string): string {
  const t = s.trim().replace(/[.!?~]+$/, '');
  const last = t.split(/[\s,]/).filter(Boolean).pop() ?? '';
  return last.slice(-6);
}

function checkHub(file: string, cueIndex: Map<string, string>): Issue[] {
  const { slug, qaCount, cues, urls, labels, heroHook } = parse(file);
  const issues: Issue[] = [];

  // ── A. 문구 누락 ────────────────────────────────────
  if (cues.length < qaCount) {
    issues.push({
      axis: 'A',
      msg: `qa ${qaCount}개인데 act.cue ${cues.length}개 — ${qaCount - cues.length}개 카드가 문구 없이 버튼만 붙는다`,
      fix: '카드마다 act: { cue, label, url } 을 넣는다. 문구 없는 버튼은 눌리지 않는다',
    });
  }

  // ── B. 다른 글에서 그대로 베낀 문구 ──────────────────
  for (const cue of cues) {
    const key = cue.replace(/\s+/g, '');
    const owner = cueIndex.get(key);
    if (owner && owner !== slug) {
      issues.push({
        axis: 'B',
        msg: `문구가 ${owner} 와 완전히 동일: "${cue.slice(0, 34)}…"`,
        fix: '이 글의 주제·상황으로 다시 쓴다. 같은 문장이 여러 글에 있으면 도배로 읽힌다',
      });
    } else if (!owner) {
      cueIndex.set(key, slug);
    }
  }

  // ── C. 목적지가 한 곳으로 뭉쳤는가 ───────────────────
  if (urls.length >= 3 && new Set(urls).size === 1) {
    issues.push({
      axis: 'C',
      msg: `act.url ${urls.length}개가 모두 같은 곳 — 카드마다 하고 싶어진 행동이 다른데 목적지가 하나다`,
      fix: '금액 카드는 조회 화면, 신청 카드는 접수 화면처럼 그 카드의 행동 지점으로 나눈다',
    });
  }

  // ── D. 기관 메인으로 보내는가 ────────────────────────
  for (const u of urls) {
    if (isShallow(u)) {
      issues.push({
        axis: 'D',
        msg: `기관 메인/루트로 보냄: ${u}`,
        fix: '그 카드에서 하려는 행동의 실제 화면(조회·접수·다운로드 페이지)으로 바꾼다',
      });
    }
  }

  // ── F. 버튼 라벨이 [대상 + 행동] 구조인가 ────────────
  for (const L of labels) {
    const why = judgeLabel(L);
    if (why) {
      issues.push({
        axis: 'F',
        msg: `버튼 라벨: "${L}" — ${why}`,
        fix: '[구체적 대상] + [행동] 으로 쓴다 — "대출 한도 조회하기", "공고문 PDF 내려받기", "가까운 센터 찾기"',
      });
    }
  }

  // ── H. 문구에 누를 이유가 실리는가 (후킹 부재) ────────
  // 정본: docs/hook-patterns.md — 손실회피·숫자대비·시간압박·자기대입 4축.
  // 숫자도, 잃는 것도, 물음도, 기한도 없는 문구는 정중한 설명일 뿐 눌리지 않는다.
  // 2026-08-01 신설: "문구가 있는가"만 보던 게이트에 "누르고 싶은가"를 더했다.
  /* 숫자가 있다고 후킹이 아니다. "1번 항목", "3페이지"처럼 순번·위치를 가리키는 숫자는
     읽는 사람의 손익과 무관하다. 금액·기간·비율처럼 단위가 붙은 숫자여야 후킹이 된다.
     (2026-08-01: 원래 정규식은 숫자 하나만 있으면 통과시켜 밋밋한 문구를 다 놓쳤다) */
  const NUM_WITH_UNIT =
    /[0-9０-９][0-9０-９,.]*\s*(?:원|만원|천원|억|만|배|퍼센트|%|일|주|개월|달|년|시간|분|회|건|명|번째|배수|p)|[일이삼사오육칠팔구십백천만억]\s*(?:원|만원|천원|억|배|개월|일|년|시간)/;
  const LOSS = /못 받|안 받|놓치|사라지|소멸|끊기|막히|잃|날아가|깎이|물립|불이익|가산세|과태료|반려|탈락|헛걸음|두 번|되돌아/;
  const DEADLINE = /지나면|넘기면|늦으면|마감|기한|까지만|남았|이내|전까지|안에/;
  const QUESTION = /나요\?|인가요\?|을까\?|나\?|다면\?|될까|얼마|어디/;
  const CONTRAST = /vs|갈립니다|갈린다|차이 납|배 차이|반면|대신/;
  const hasHook = (c: string) =>
    NUM_WITH_UNIT.test(c) || LOSS.test(c) || DEADLINE.test(c) || QUESTION.test(c) || CONTRAST.test(c);

  const flat = cues.filter((c) => !hasHook(c));
  if (cues.length >= 3 && flat.length > Math.floor(cues.length / 2)) {
    issues.push({
      axis: 'H',
      msg: `후킹 없는 설명형 문구가 ${flat.length}/${cues.length}개 — 예: "${flat[0].slice(0, 30)}…"`,
      fix: '숫자·잃는 것·기한·물음 중 하나를 앞세운다 (docs/hook-patterns.md 4축, 절반 이상은 후킹 필수)',
    });
  }

  // ── I. 작성자 입장인가 (사용자 이야기가 아닌가) ──────
  const writerVoice = cues.filter((c) => {
    const t = c.trim();
    return WRITER_SUBJECT.test(t) || !USER_MARK.test(t);
  });
  if (cues.length >= 3 && writerVoice.length > Math.floor(cues.length / 2)) {
    issues.push({
      axis: 'I',
      msg: `제도를 설명하는 문구가 ${writerVoice.length}/${cues.length}개 — 예: "${writerVoice[0].slice(0, 30)}…"`,
      fix: '주어를 읽는 사람으로 바꾼다 — "이 제도는 …입니다"가 아니라 "…하신 적 있으실 겁니다" (docs/button-copy.md 규칙 1)',
    });
  }

  // ── J. 버튼이 설명문이 됐는가 ────────────────────────
  for (const L of labels) {
    const len = L.replace(/\s/g, '').length;
    if (len > LABEL_MAX) {
      issues.push({
        axis: 'J',
        msg: `버튼이 ${len}자로 길다: "${L}"`,
        fix: `버튼은 출구다 — 설명은 문구가 이미 했다. ${LABEL_MAX}자 이내로 (docs/button-copy.md 규칙 3)`,
      });
    }
    if (ORG_IN_LABEL.test(L)) {
      issues.push({
        axis: 'J',
        msg: `버튼에 기관명·수식어가 붙었다: "${L}"`,
        fix: '"(한국도로공사 공식)" 같은 꼬리를 뗀다 — 누를 사람은 기관명을 보고 누르지 않는다',
      });
    }
  }

  // ── K. 한국어로 말이 되는 문장인가 ──────────────────
  /* 2026-08-02: 게이트가 주어(I축)·길이(J축)는 봤는데 "문장이 성립하느냐"는 안 봤다.
     후킹을 세게 만들려다 "8월 7일 6시를 맞추십니다", "300만원을 대주는데",
     "팩스 한 통으로 오늘 끝내십니다" 같은 비문이 그대로 통과했다.
     읽는 사람은 어색한 문장에서 걸리고, 걸리면 버튼까지 가지 않는다.
     지적받은 표현은 여기 등록해 다시 나오지 않게 한다. */
  for (const cue of [...cues, heroHook].filter(Boolean)) {
    for (const { re, why } of AWKWARD) {
      const m = cue.match(re);
      if (m) {
        issues.push({
          axis: 'K',
          msg: `어색한 표현 "${m[0]}" — ${why}`,
          fix: '종결은 평범하게(지원합니다·신청하시길 바랍니다), 압박은 숫자·기한 같은 사실로 준다 (docs/button-copy.md 규칙 6)',
        });
        break;
      }
    }
  }

  // ── L. 버튼이 전부 같은 동사인가 ────────────────────
  /* 2026-08-02: 의왕시 글의 버튼 7개가 전부 "…확인하기"였는데 통과했다.
     F축은 라벨 하나하나의 구조만 봤고, E축은 cue 어미만 보고 label 은 안 봤다.
     한 글 안에서 버튼이 다 같은 동사면 어느 것을 눌러도 같아 보여서 아무것도 안 눌린다.
     카드마다 하는 일이 다르면 동사도 달라야 한다 — 확인·조회·내려받기·접수하기. */
  if (labels.length >= 3) {
    const verbs = labels.map((l) => l.trim().split(/\s+/).pop() ?? '');
    const vTally = new Map<string, number>();
    for (const v of verbs) vTally.set(v, (vTally.get(v) ?? 0) + 1);
    for (const [v, n] of vTally) {
      if (n > Math.floor(labels.length / 2)) {
        issues.push({
          axis: 'L',
          msg: `버튼 ${labels.length}개 중 ${n}개가 "${v}" — 어느 걸 눌러도 같아 보인다`,
          fix: '카드마다 하는 일이 다르면 동사도 다르게 한다 (확인·조회·내려받기·접수하기). 마지막 카드는 실제 행동으로 끝낸다',
        });
      }
    }
  }

  // ── M. 버튼이 정보 동사뿐인가 ───────────────────────
  /* 2026-08-02: L축을 넣자 동사를 흩으려다 확인하기 → 살펴보기·훑어보기·따져보기로
     바뀌었을 뿐, 전부 "읽어보는" 동사가 됐다. 사용자가 원하는 건 정보가 아니라
     이자를 받는 것이다. 기준은 임영웅 예시의 버튼 — "콘서트 예매 바로가기",
     즉 그 사람의 목적 행위 자체다. 정보 동사가 과반이면 차단하고,
     실제 행동(신청·접수·발급·다운로드) 버튼이 최소 하나는 있게 한다. */
  if (labels.length >= 3) {
    const INFO_VERB = /(확인|보기|살펴|훑어|읽어|알아|따져|재보|비교|점검)/;
    const ACT_VERB = /(신청|접수|등록|발급|예매|예약|가입|받기|내려받|다운|찾기|조회|계산|제출|납부)/;
    const info = labels.filter((l) => INFO_VERB.test(l) && !ACT_VERB.test(l));
    if (info.length > Math.floor(labels.length / 2)) {
      issues.push({
        axis: 'M',
        msg: `버튼 ${labels.length}개 중 ${info.length}개가 읽어보는 동사 — 예: "${info[0]}"`,
        fix: '버튼은 그 사람의 목적 행위다("콘서트 예매 바로가기"). 확인·살펴보기 대신 신청·접수·발급·찾기로 바꾼다',
      });
    }
    if (!labels.some((l) => ACT_VERB.test(l))) {
      issues.push({
        axis: 'M',
        msg: '실제 행동으로 가는 버튼이 하나도 없다 — 전부 읽고 끝난다',
        fix: '최소 한 곳은 신청·접수·발급 같은 실제 행동 지점으로 연결한다 (절대규칙 1: 행동 키워드)',
      });
    }
  }

  // ── E. 한 글 안에서 어미가 반복되는가 ────────────────
  const tally = new Map<string, number>();
  for (const cue of cues) {
    const e = ending(cue);
    if (e) tally.set(e, (tally.get(e) ?? 0) + 1);
  }
  for (const [e, n] of tally) {
    if (n >= 3) {
      issues.push({
        axis: 'E',
        msg: `"…${e}" 로 끝나는 문구가 ${n}개 — 한 글 안에서 어미가 반복된다`,
        fix: '상황마다 맺음을 다르게 한다 (설명형·조건형·물음형을 섞는다)',
      });
    }
  }

  return issues;
}

// ── 대상 선정 ────────────────────────────────────────────
const argv = process.argv.slice(2);
const all = argv.includes('--all');
const draftIdx = argv.indexOf('--draft');
const draftFile = draftIdx >= 0 ? argv[draftIdx + 1] : '';

/* --draft <파일> : 본문을 쓰기 전에 문구·버튼 초안만 먼저 검사한다.
   2026-08-02 신설. 그동안 게이트는 글을 다 쓴 뒤에만 돌았고, 그래서
   "대주는데"(비문)와 버튼 7개 전부 확인하기(도배)를 사후에 발견했다.
   문구가 이 프로젝트에서 제일 중요한데 제일 마지막에 검사받고 있었던 셈이다.
   초안 파일은 heroHook / act:{cue,label,url} 만 있으면 되고,
   anchor 수를 맞추면 A축(문구 누락)까지 같이 본다. */
function allHubs(): string[] {
  if (!fs.existsSync(ROOT)) return [];
  return fs
    .readdirSync(ROOT)
    .filter((f) => f.endsWith('.ts') && f !== 'manifest.ts')
    .map((f) => path.join(ROOT, f));
}

let targets: string[];
if (all) {
  targets = allHubs();
} else {
  let diff = '';
  try {
    diff = execSync(`git diff --name-only origin/main...HEAD -- "${ROOT}"`, { encoding: 'utf8' });
  } catch {
    try {
      diff = execSync(`git diff --name-only HEAD~1 -- "${ROOT}"`, { encoding: 'utf8' });
    } catch {
      diff = '';
    }
  }
  targets = diff
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => l.endsWith('.ts') && !l.endsWith('manifest.ts') && fs.existsSync(l));
}

/* ── 스포크 버튼 슬롯 검사 ──────────────────────────────
   SpokeClient 는 [...new Set([2, 4, qa.length - 1])] 세 자리에만 버튼을 렌더링한다.
   그 자리에 act.cue 가 없으면 문구 없는 버튼이 그대로 노출된다.
   허브만 보던 이 게이트가 못 잡아 2026-07-31 스포크 7곳이 그 상태로 통과했다. */
const SPOKE_ROOT = 'app/policy/[id]/[spoke]/content';

function allSpokes(): string[] {
  const out: string[] = [];
  const walk = (d: string) => {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const q = path.join(d, e.name);
      if (e.isDirectory()) walk(q);
      else if (e.name.endsWith('.tsx')) out.push(q);
    }
  };
  if (fs.existsSync(SPOKE_ROOT)) walk(SPOKE_ROOT);
  return out;
}

function checkSpokeSlots(file: string): string[] {
  const src = fs.readFileSync(file, 'utf8');
  const anchors = [...src.matchAll(/anchor: '([^']+)'/g)].map((m) => m[1]);
  if (anchors.length < 3) return [];
  const hasAct = anchors.map((a, i) => {
    const st = src.indexOf("anchor: '" + a + "'");
    const en = i + 1 < anchors.length ? src.indexOf("anchor: '" + anchors[i + 1] + "'") : src.length;
    return src.slice(st, en).includes('act:');
  });
  const slots = [...new Set([2, 4, anchors.length - 1])].filter((i) => i >= 0 && i < anchors.length);
  return slots.filter((i) => !hasAct[i]).map((i) => (i + 1) + '번째 카드(' + anchors[i] + ')');
}

let spokeTargets: string[];
if (all) {
  spokeTargets = allSpokes();
} else {
  let sdiff = '';
  try {
    sdiff = execSync('git diff --name-only origin/main...HEAD -- "' + SPOKE_ROOT + '"', { encoding: 'utf8' });
  } catch {
    try {
      sdiff = execSync('git diff --name-only HEAD~1 -- "' + SPOKE_ROOT + '"', { encoding: 'utf8' });
    } catch {
      sdiff = '';
    }
  }
  spokeTargets = sdiff
    .split(String.fromCharCode(10))
    .map((l) => l.trim())
    .filter((l) => l.endsWith('.tsx') && fs.existsSync(l));
}

// ── 실행 ────────────────────────────────────────────────
if (!draftFile) {
  console.log('='.repeat(60));
  console.log(' 문구·버튼 검사 — 누를 이유가 버튼 앞에 있는가');
  console.log('='.repeat(60));
}

if (!targets.length && !spokeTargets.length) {
  console.log(' 변경된 허브 없음 — 검사 생략');
  process.exit(0);
}

/* 도배 검사는 전체 허브를 기준으로 봐야 의미가 있다.
   변경분만 볼 때도 나머지 허브의 cue 를 먼저 색인해 둔다. */
const cueIndex = new Map<string, string>();
if (!all) {
  const targetSet = new Set(targets.map((t) => path.resolve(t)));
  for (const f of allHubs()) {
    if (targetSet.has(path.resolve(f))) continue;
    const { slug, cues } = parse(f);
    for (const cue of cues) {
      const key = cue.replace(/\s+/g, '');
      if (!cueIndex.has(key)) cueIndex.set(key, slug);
    }
  }
}

const AXIS = {
  A: '문구 누락',
  B: '문구 도배',
  C: '목적지 뭉침',
  D: '딥링크 아님',
  E: '어미 반복',
  F: '라벨 정보형',
  G: '버튼 슬롯 빈 문구',
  H: '후킹 부재',
  I: '작성자 입장',
  J: '버튼 설명문',
  K: '비문·어색한 표현',
  L: '버튼 동사 도배',
  M: '읽는 버튼뿐',
} as const;

if (draftFile) {
  if (!fs.existsSync(draftFile)) {
    console.log(`초안 파일이 없다: ${draftFile}`);
    process.exit(1);
  }
  const issues = checkHub(draftFile, new Map());
  console.log('='.repeat(60));
  console.log(' 문구 초안 검사 — 본문 쓰기 전에 먼저 본다');
  console.log('='.repeat(60));
  if (!issues.length) {
    console.log('\n ✅ 문구·버튼 확정 — 이대로 본문을 써도 된다');
    process.exit(0);
  }
  for (const i of issues) {
    console.log(`\n❌ [${AXIS[i.axis]}] ${i.msg}`);
    console.log(`   → ${i.fix}`);
  }
  console.log('\n문구부터 고친다. 본문을 쓴 뒤에 고치면 문단까지 손봐야 한다.');
  process.exit(1);
}


let failed = 0;
let cueTotal = 0;
let qaTotal = 0;
const count = { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0 };

for (const f of targets) {
  const { qaCount, cues } = parse(f);
  qaTotal += qaCount;
  cueTotal += cues.length;

  const issues = checkHub(f, cueIndex);
  if (!issues.length) continue;
  failed++;
  issues.forEach((i) => count[i.axis]++);
  if (!all || issues.some((i) => i.axis === 'K' || i.axis === 'L' || i.axis === 'M')) {
    console.log(`\n❌ ${path.basename(f, '.ts')}`);
    for (const i of issues) {
      console.log(`   [${AXIS[i.axis]}] ${i.msg}`);
      console.log(`      → ${i.fix}`);
    }
  }
}

let spokeFailed = 0;
for (const sf of spokeTargets) {
  const miss = checkSpokeSlots(sf);
  if (!miss.length) continue;
  spokeFailed++;
  count.G += miss.length;
  if (!all) {
    console.log('');
    console.log('❌ ' + path.basename(sf, '.tsx') + ' (스포크)');
    console.log('   [' + AXIS.G + '] 버튼이 뜨는 자리에 문구가 없음: ' + miss.join(', '));
    console.log('      → 스포크는 2·4·마지막 카드에만 버튼이 렌더링된다. 그 카드에 act:{cue,label,url} 을 넣는다');
  }
}

console.log(`\n검사 허브 ${targets.length}개 · 스포크 ${spokeTargets.length}개 / 문제 ${failed + spokeFailed}개`);
console.log(`  문구 ${cueTotal} / 카드 ${qaTotal}`);
console.log(
  `  문구누락 ${count.A}  문구도배 ${count.B}  목적지뭉침 ${count.C}  딥링크아님 ${count.D}  어미반복 ${count.E}  라벨정보형 ${count.F}  버튼슬롯 ${count.G}  후킹부재 ${count.H}  작성자입장 ${count.I}  버튼설명문 ${count.J}  비문 ${count.K}  버튼도배 ${count.L}  읽는버튼 ${count.M}`,
);

if (all) {
  console.log('\n(--all 은 현황 파악용 — 차단하지 않는다)');
  process.exit(0);
}

if (failed || spokeFailed) {
  console.log('\n' + '='.repeat(60));
  console.log(` 문구·버튼 기준 미달 ${failed + spokeFailed}개 — push 차단`);
  console.log(' 버튼만 놓으면 아무도 안 누른다. 누를 이유를 버튼 바로 위에 둔다.');
  console.log('='.repeat(60));
  process.exit(1);
}

console.log('\n ✅ 통과 — 카드마다 누를 이유가 있고, 목적지가 그 행동으로 나뉘어 있다');
