/**
 * 헤드리스 지시문 — 설계 · 캡처 읽기 · 작성 · 고치기.
 *
 * 규칙 문장은 여기 복사해 두지 않는다. 정본 파일을 실행 때 읽어 넣는다 —
 *   docs/button-copy.md · .claude/rules/action-copy.md · docs/hook-patterns.md
 *   (타이틀·소제목은 spec 으로 고정 — 2026-09-19 부터 기계가 짓지 않는다. 사장님이 준다)
 * 정본이 바뀌면 지시문도 같이 바뀐다 (CLAUDE.md "정본 색인 — 여기 복사 금지").
 * 글의 모양은 저장소의 기존 보험 스포크 한 편(CANON)을 그대로 보여 주고 그 구조로 쓰게 한다.
 */
import fs from "node:fs";
import path from "node:path";
import { slotsFor } from "./article-check.mjs";

/** 정본 — 사장님 승인·Playwright 직접 조회·표 2개·버튼 슬롯 정확·"쓰지 않는 것" 명시 (2026-09-07) */
export const CANON = path.join("app", "policy", "[id]", "[spoke]", "content", "실손보험", "나이별실비보험료.tsx");

const read = (p) => (fs.existsSync(p) ? fs.readFileSync(p, "utf8") : "");
const stripFront = (s) => s.replace(/^---[\s\S]*?---\s*/, "");
const j = (v) => JSON.stringify(v, null, 1);

function docs() {
  const hook = read(path.join("docs", "hook-patterns.md"));
  return {
    buttonCopy: read(path.join("docs", "button-copy.md")).split("\n## 검사")[0],
    actionCopy: stripFront(read(path.join(".claude", "rules", "action-copy.md"))).split("\n## 게이트")[0],
    hookPatterns: hook.split("\n## 어디부터 적용하나")[0],
  };
}

/** 추출본(source-{slug}.txt)을 지시문에 넣을 크기로 — 출처 블록마다 머리 70% + 꼬리 30%(표·숨은 레이어가 뒤에 붙는다) */
export function evidenceDigest(sourceText, { maxTotal = 70000 } = {}) {
  const text = String(sourceText || "");
  const parts = text.split(/(?=\n===== \[\d+\] )/).filter((p) => p.trim());
  if (!parts.length) return text.slice(0, maxTotal);
  const per = Math.max(6000, Math.floor(maxTotal / parts.length));
  const out = [];
  for (const p of parts) {
    if (p.length <= per) { out.push(p); continue; }
    const head = Math.floor(per * 0.7), tail = per - head;
    out.push(p.slice(0, head) + "\n…(중간 생략)…\n" + p.slice(-tail));
  }
  return out.join("\n").slice(0, maxTotal + 2000);
}

export function planPrompt({ slug, keyword, hubSlug, hubTitle, hubPath, policyDir, queries = [], byTheme, existingTitles, spokePaths, registry, found = [], topic = [], today, retryNote, fixedTitle, fixedSubheads = [] }) {
  const d = docs();
  const titleBlock = `## ★ 타이틀·소제목은 사장님이 정했습니다 — 새로 짓지도, 다듬지도, 바꾸자고 하지도 않습니다
타이틀: "${fixedTitle}"
소제목 (qa 순서 그대로):
${fixedSubheads.map((q, i) => `${i + 1}. ${q}`).join("\n")}
"title" 과 "subheads[].q" 에 이 문장들을 글자 하나 바꾸지 말고 그대로 적습니다.`;

  return `당신은 gov.jjyu.co.kr 편집자입니다. 도구를 쓰지 마세요. 필요한 자료는 전부 아래에 있습니다.
할 일: 보험 스포크(핵심콕콕 형식) 한 편의 설계도(JSON)를 만듭니다. 글은 아직 쓰지 않습니다.
설계도의 주소는 다음 단계에서 Playwright 가 실제로 엽니다 — 열리지 않는 주소는 버려지고, 살아 있는 출처가 하나도 없으면 이 글은 통째로 실패합니다.
${retryNote ? `\n※ 이전 답이 거부된 이유 — 이번엔 반드시 고칩니다:\n${retryNote}\n` : ""}
## 글
- slug: ${slug} (URL. 바꾸지 않습니다) · 주제 키워드: ${keyword} · 오늘: ${today}
- 허브: ${hubTitle} (${hubPath}) · 폴더: ${policyDir}
- 이 허브에 이미 있는 스포크 제목 (같은 제목·같은 각도 금지. 버튼 목적지로는 쓸 수 있습니다):
${existingTitles.map((t) => `  - ${t}`).join("\n") || "  (없음)"}
- 버튼 목적지로 쓸 수 있는 내부 경로: ${hubPath} (허브) ${spokePaths.length ? `· 기존 스포크 ${spokePaths.slice(0, 40).join(" , ")}` : ""}

${titleBlock}

## 참고 어휘 — 실검색어 (있으면. 본문·FAQ 낱말 고를 때 참고만)
${queries.length ? queries.map((q) => `- ${q}`).join("\n") : "  (없음)"}
${byTheme ? `\n주제별 분류: ${j(byTheme)}` : ""}

## 버튼 — 화면은 qa 인덱스 2·4·마지막 에만 버튼을 그립니다
- hero(상단) 1개 + 슬롯. 라벨은 [구체적 대상] + [행동 종결 …기], hero 16자·슬롯 18자 이내. "확인하기" 만은 금지, "~보기" 금지.
- 목적지는 그 일을 실제로 하는 화면의 딥링크 (기관 루트 금지). 정부 신청 화면이 없는 민간보험 주제면 협회 공시·조회 화면(보험다모아 e-insmarket.or.kr, 내보험찾아줌, 실손24 silson24.or.kr, 손보협회·생보협회 공시)이나 허브 경로 ${hubPath}, 기존 스포크 경로를 씁니다. 확실하지 않은 깊은 주소보다 확실한 주소가 낫습니다.
- 슬롯 버튼은 서로 다른 라벨·다른 결로. 최소 하나는 허브(${hubPath})나 기존 스포크로 보냅니다 (내부 이동).
- 문구(cue)는 지금 쓰지 않습니다. 목적지가 확정된 뒤 작성 단계가 씁니다.

## 1차 출처 (sources 2~4개) — 숫자는 여기서만 나옵니다
- ★ 출처는 **이 주제(${topic.join("·")})를 실제로 다루는 문서**여야 합니다. 열린 뒤 본문에 그 말이 없으면 기계가 버립니다. URL 경로의 영문(예: lostHealth = 실손)을 보고 무엇에 관한 페이지인지 확인합니다. 모르는 페이지에 주제 이름을 붙여 적지 않습니다.
- 공식 도메인 검색으로 찾은 페이지 (제목 | 주소). 제목이 주제와 맞는 것을 우선 고릅니다:
${found.length ? found.map((f) => `  - ${f.title} | ${f.url}`).join("\n") : "  (검색 결과 없음)"}
- 법제처(law.go.kr)·금융위(fsc.go.kr)·금감원(fss.or.kr, fine.fss.or.kr)·손보협회(knia.or.kr, kpub.knia.or.kr)·생보협회(klia.or.kr)·보험다모아(e-insmarket.or.kr)·건보공단·심평원·정부24·보험사 공식 약관/공시 페이지. 블로그·언론·위키·카페 금지.
- 이 저장소가 지금까지 Playwright 로 열어 본문 추출에 성공한 주소입니다 (앞이 안전합니다):
${registry.map((r) => `  - ${r.url} | ${r.chars}자 | ${r.hint}`).join("\n") || "  (없음)"}
- 위에 필요한 것이 없으면 새 주소를 적습니다. 목록·검색결과·로그인 화면이 아니라 그 내용이 적힌 화면이어야 합니다.

## 출력 — JSON 하나만. 설명·마크다운 펜스 없이
{
  "slug": "${slug}",
  "title": "${fixedTitle}",
  "breadcrumb": "12자 이내 명사구",
  "fileName": "한글파일명 (2~16자, 공백·기호 없이. 예: 무해지환급형해지)",
  "role": "eligibility | compare | apply | amount | caution",
  "subheads": [ ${fixedSubheads.map((q) => `{ "q": ${JSON.stringify(q)} }`).join(", ")} ],
  "buttons": {
    "hero": { "label": "내 … 조회하기", "url": "https://…" },
    "slots": [ { "qaIndex": 2, "label": "…", "url": "…" }, { "qaIndex": 4, "label": "…", "url": "…" } ]
  },
  "sources": [ { "url": "https://…", "name": "기관 — 문서명", "why": "어느 소제목의 근거인지" } ],
  "heroPlan": "서론 6단계(공감→대안이 왜 어려운가→그래서 이게 있다(금액)→다만 다 되는 건 아니다→확인부터→기간) 를 이 글에서 어떻게 채울지 한 줄씩",
  "misconceptions": ["검색자가 자주 틀리는 것 2~3개"],
  "faq": ["…인가요?", "…인가요?"]
}
slots 의 qaIndex 는 subheads 개수 n 에 대해 정확히 [2, 4, n-1] 의 집합입니다 (n=4 → [2, 3], n=5 → [2, 4], n=6 → [2, 4, 5]).`;
}

export function capturesPrompt({ files }) {
  return `아래 PNG 파일들을 Read 도구로 하나씩 열어 보세요. 다른 도구는 쓰지 마세요.
각 장에 대해 "무엇이 보이는지" 를 한국어 한 줄(60~240자)로 적습니다: 어느 사이트의 어떤 화면인지, 화면에 실제로 보이는 표의 열 이름·행 이름·금액·기한·비율·조문 번호를 구체적으로. 표가 있으면 어느 행이 어느 회사/항목인지를 적습니다 (텍스트 추출은 열을 뭉갭니다 — 그래서 눈으로 봅니다).
안 보이면(빈 상자·로그인 화면·매크로 차단·본문이 스크롤 아래) 그 사실을 그대로 적습니다. 화면에 없는 숫자를 지어내지 않습니다.

파일:
${files.map((f) => `- ${f}`).join("\n")}

출력은 JSON 하나만 (설명 없이): { "<파일명(경로 없이)>": "한 줄", … }`;
}

const RULES = ({ n, hubPath, allowedUrls, sourceUrls }) => {
  const d = docs();
  const slots = slotsFor(n);
  return `## 기계 검사 규칙 (하나라도 어기면 글이 거부되고 고치기 호출이 한 번 더 나갑니다)
숫자
- 본문의 모든 "숫자+단위"(원·만원·억원·천원·%·세·회·일·배·개월·년·명·시간·주·건·점)는 아래 추출본에 **같은 자릿수 문자열로** 있어야 합니다. 원문이 "3천만원" 이면 "3천만원", "15,027원" 이면 "15,027원". 환산·반올림·합산·평균 금지. 없으면 그 숫자가 든 문장을 통째로 뺍니다. 기억으로 채우지 않습니다.
- 근거 없는 말 금지: 약 N · 대략 · 정도 · 쯤 · 추정 · 대부분 · 대개 · 경우가 많 · 흔합니다 · 대다수 · 거의 모든 (원문이 그렇게 쓴 경우만 인용 가능).
- 확인하지 못한 것은 본문에 쓰지 말고 "notUsing" 에 사유와 함께 적습니다 (정본 글 머리의 "쓰지 않는 것" 이 이것입니다).
구조 (SpokeData — 정본 글과 같은 필드만)
- h1 = 설계도 title 글자 그대로. qa[i].q = 설계도 subheads[i].q 글자 그대로, anchor = "q1".."q${n}". qa 는 정확히 ${n}개.
- 카드마다 intro(500~900자, 검색한 사람 기준의 답. 결론부터, 근거 문장 인용하며) · highlights 3~5개(40자 이내) · 필요하면 table(headers·rows, 칸 수 일치) 또는 box(원문 인용) · sourceNote("* 출처: 기관 문서명 (${new Date().toISOString().slice(0, 10)} 확인)"). 수치를 담은 카드에는 sourceNote 를 반드시.
- 버튼(act: {cue, label, url})은 **qa 인덱스 ${slots.join("·")} 에만** 넣습니다. 다른 자리의 act 는 화면에 안 나옵니다. 슬롯은 전부 채웁니다.
- keyFacts 6~12행 (핵심콕콕 박스 — 키: 값. 값은 추출본의 숫자·문장으로). keyFactsHighlights 는 그 값 안에 실제로 있는 조각만.
- faqData 정확히 2개 (소제목 4개가 못 다룬 궁금증만 — 2026-09-19 사장님 확정), 각각 q·a(40자 이상)·source(출처 이름)·sourceUrl(허용 출처). sources 1~4개 {name, url}.
- description 60~260자(검색결과 문장, 굵은 숫자 하나). breadcrumb 20자 이내.
문구 (docs/button-copy.md · .claude/rules/action-copy.md 정본)
- heroHook 2~5문장: 1문단 장면 하나(제도 얘기 안 함, "~하시죠/~되죠" 로 동의) → 2문단 제도와 금액, 그리고 반전("다만 다 되는 건 아닙니다"). 도입 군더더기(알아보겠습니다) 금지. "…하시길 바랍니다" 맺음 금지.
- heroAct.label 16자 이내 · act.label 18자 이내. [구체적 대상] + [행동 종결 …기]. "확인하기" 만은 금지, "~보기" 금지. 라벨 4개가 서로 다른 결.
- cue 는 버튼 바로 위 한 줄(20~160자): [아픈 사실] + [버튼 누르면 해소]. 바로 위 문단에서 이어져야 합니다 — 앞에서 안 꺼낸 얘기를 버튼 문구로 쓰지 않습니다. 세 cue 의 끝 어절·첫 어절이 같으면 안 됩니다.
- 말하듯 잇습니다. 단정형으로 끊으면 공고문이 됩니다 ("최대 1억까지 지원이 가능한데요. 8월 12일까지라 열흘 정도 남았습니다").
- 정부 슬로건·로고·가짜 후기 금지.
주소
- 버튼·faq·sources 의 모든 주소는 아래 허용 목록 안에서만: ${[...allowedUrls].join(" , ")}
- 출처 주소(faqData.sourceUrl · sources.url): ${sourceUrls.join(" , ")}
- 허브 경로 ${hubPath} 는 버튼 목적지로만 씁니다.

## 정본 문구 (이 결로 씁니다)
${d.buttonCopy}

## 6단계 흐름
${d.actionCopy}

## 후킹 4축 (cue·서론에 최소 1축)
${d.hookPatterns}`;
};

export function writePrompt({ plan, digest, captures, canonSrc, n, hubPath, allowedUrls, sourceUrls, existingTitles, today }) {
  return `당신은 gov.jjyu.co.kr 편집자입니다. 도구를 쓰지 마세요. 필요한 자료는 전부 아래에 있습니다.
할 일: 설계도와 추출본만으로 보험 스포크(핵심콕콕 형식) 한 편을 JSON 으로 씁니다. 사람이 다시 손보지 않고 기계 검사를 통과해야 합니다.
글의 모양은 아래 "정본 글" 한 편과 같습니다 — 구조·어조·밀도·"쓰지 않는 것" 을 그대로 따르되, 문장과 표는 이 주제의 추출본에서 나옵니다. 정본의 숫자·회사·문장을 베끼지 않습니다.

## 1. 정본 글 (${CANON}) — 이 구조로 씁니다
${canonSrc}

## 2. 이 글의 설계도 (title·subheads·buttons 는 이대로. buttons 의 주소는 Playwright 로 열어 살아 있음을 확인한 것입니다)
${j(plan)}

## 3. 추출본 — Playwright 로 연 1차 출처 원문 (scripts/output/source-${plan.slug}.txt). 숫자와 인용은 여기서만
${digest || "(없음)"}

## 4. 캡처(화면)에서 눈으로 읽은 것 — 표의 어느 행이 어느 항목인지는 이것이 우선입니다
${captures || "(없음)"}

## 5. 이 허브의 다른 글 (겹치지 않게. 그 글이 다루는 것은 한 줄로 넘기고 버튼으로 보냅니다)
${existingTitles.map((t) => `- ${t}`).join("\n") || "(없음)"}

${RULES({ n, hubPath, allowedUrls, sourceUrls })}

## 출력 — JSON 하나만. 마크다운 펜스·설명 없이. 문자열은 한 줄(줄바꿈 금지). 작은따옴표는 ’ 로.
추출본이 이 주제를 다루지 않아 규칙대로 쓸 수 없으면, 설명 대신 { "abort": "사유 한 줄" } 만 출력합니다 (사람이 그 사유를 보고서에서 봅니다).
{
  "spoke": {
    "h1": "${plan.title}",
    "breadcrumb": "…", "description": "…",
    "heroHook": "…", "heroAct": { "label": "…", "href": "…" },
    "keyFacts": { "항목": "값", … }, "keyFactsHighlights": { "항목": ["값 안의 조각"] },
    "qa": [ { "q": "${plan.subheads[0]?.q || "…"}", "anchor": "q1", "intro": "…", "highlights": ["…"], "table": { "caption": "…", "headers": ["…"], "rows": [["…"]] }, "box": { "label": "…", "content": "원문 인용" }, "act": { "cue": "…", "label": "…", "url": "…" }, "sourceNote": "* 출처: … (${today} 확인)" } ],
    "faqData": [ { "q": "…", "a": "…", "source": "…", "sourceUrl": "…" } ],
    "sources": [ { "name": "기관 — 문서명", "url": "…" } ]
  },
  "sourceName": "1차 출처 이름 한 줄 (파일 머리 주석용)",
  "caveats": ["원문의 '다만/단서/제외' 조항 중 본문에 반영한 것 (숫자가 있으면 본문에도 같은 숫자가 있어야 함)"],
  "notUsing": ["검증 못 해 쓰지 않은 항목 — 사유와 함께"]
}`;
}

export function fixPrompt({ draft, failures, plan, digest, captures, n, hubPath, allowedUrls, sourceUrls, today }) {
  return `아래 글(JSON)이 기계 검사에서 떨어졌습니다. 실패 목록을 전부 고쳐서 같은 형태의 JSON 전체를 다시 출력하세요. 도구를 쓰지 마세요.

## 실패 목록 (검사기 출력 그대로)
${failures}

## 고치는 법
- "추출본에 없는 숫자": 아래 추출본에서 그 숫자를 찾아 같은 자릿수 문자열로 쓰거나, 없으면 그 숫자가 든 문장을 통째로 지웁니다. 숫자만 지우고 주장을 남기는 조작은 금지 — 근거 없는 주장은 통째로 뺍니다.
- "허용되지 않은 주소": 허용 목록의 다른 주소로 바꾸거나 그 버튼·출처를 뺍니다. 주소를 지어내지 않습니다.
- 버튼 슬롯·라벨 길이·소제목 불일치·anchor: 규칙대로 자리와 글자를 맞춥니다. 소제목은 설계도 글자 그대로.
- cue·라벨 도배: 끝 어절과 첫 어절을 서로 다르게, 목적지에 맞는 말로 다시 씁니다.
- 원문 대조(check-source-match)·수치 대조(check-source-backing)·타입(tsc)·버튼 도배(check-button-variety) 출력이 있으면 그 줄이 가리키는 항목만 고칩니다.
- 나머지 부분은 바꾸지 않습니다.

## 설계도
${j(plan)}

## 추출본
${digest || "(없음)"}

## 캡처에서 읽은 것
${captures || "(없음)"}

${RULES({ n, hubPath, allowedUrls, sourceUrls })}

## 현재 글
${JSON.stringify(draft)}

## 출력
{ "spoke": { … }, "sourceName": "…", "caveats": [ … ], "notUsing": [ … ] } 하나만. 설명 없이. 문자열은 한 줄, 작은따옴표는 ’ 로. (오늘 ${today})`;
}
