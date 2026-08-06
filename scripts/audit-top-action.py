# 상단 승부처 전수 감사 — 제목 행동성 × 상단 버튼 유무 (2026-08-06)
# 근거: Clarity 6페이지 실측 — 상단 버튼 클릭 50~57% vs 중간 0~1클릭.
#   "상단 버튼에서 애드센스는 끝난다" + "행동이 없는 제목도 문제" (사장님 확정)
# 사용: python scripts/audit-top-action.py
import io, glob, re, os

ACTION = re.compile(r'신청|조회|발급|계산|확인|다운로드|예매|예약|접수|가입|환급|받는|받나|받기|찾기|바로가기|등록|신고')

def hub_rows():
    rows = []
    for f in glob.glob('data/policies/*.ts'):
        if os.path.basename(f) in ('manifest.ts', 'index.ts'):
            continue
        s = io.open(f, encoding='utf-8').read()
        ti = re.search(r"^\s*title: '([^']+)'", s, re.M)
        sl = re.search(r"slug: '([^']+)'", s)
        if not (ti and sl):
            continue
        rows.append({
            'type': '허브', 'slug': sl.group(1), 'title': ti.group(1),
            'title_action': bool(ACTION.search(ti.group(1))),
            'top_button': bool(re.search(r"applyUrl:", s)),
            'hook': bool(re.search(r"heroHook:", s)),
        })
    return rows

def spoke_rows():
    rows = []
    for f in glob.glob('app/policy/[[]id[]]/[[]spoke[]]/content/**/*.tsx', recursive=True):
        s = io.open(f, encoding='utf-8').read()
        h1 = re.search(r"h1: '([^']+)'", s)
        if not h1:
            continue
        rel = f.replace('\\', '/').split('content/')[-1].replace('.tsx', '')
        rows.append({
            'type': '스포크', 'slug': rel, 'title': h1.group(1),
            'title_action': bool(ACTION.search(h1.group(1))),
            'top_button': bool(re.search(r"heroAct:", s)),
            'hook': bool(re.search(r"heroHook:", s)),
        })
    return rows

rows = hub_rows() + spoke_rows()
both_bad = [r for r in rows if not r['title_action'] and not r['top_button']]
no_button = [r for r in rows if r['title_action'] and not r['top_button']]
no_action_title = [r for r in rows if not r['title_action'] and r['top_button']]

print(f"전체 {len(rows)}개 (허브 {sum(1 for r in rows if r['type']=='허브')} / 스포크 {sum(1 for r in rows if r['type']=='스포크')})")
print(f"\n[최악] 제목 행동 X + 상단 버튼 X : {len(both_bad)}개  ← 카드세액공제형(그냥 이탈)")
for r in both_bad[:20]:
    print(f"   {r['type']} {r['slug']} — {r['title'][:44]}")
if len(both_bad) > 20:
    print(f"   … 외 {len(both_bad)-20}개")

print(f"\n[구멍] 제목은 행동인데 상단 버튼 X : {len(no_button)}개  ← 출산휴가형(글자라도 누름)")
for r in no_button[:20]:
    print(f"   {r['type']} {r['slug']} — {r['title'][:44]}")
if len(no_button) > 20:
    print(f"   … 외 {len(no_button)-20}개")

print(f"\n[약함] 버튼은 있는데 제목에 행동 X : {len(no_action_title)}개  ← 들어올 이유가 약함")
for r in no_action_title[:12]:
    print(f"   {r['type']} {r['slug']} — {r['title'][:44]}")
if len(no_action_title) > 12:
    print(f"   … 외 {len(no_action_title)-12}개")
