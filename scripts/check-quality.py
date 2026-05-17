"""
Q1~Q9 품질 검증 스크립트
사용법:
  python3 scripts/check-quality.py              # 전체 검증
  python3 scripts/check-quality.py earned-income-tax-credit  # 특정 파일
"""

import os, re, sys

POLICIES_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'data', 'policies')


def extract_string(text, start_pos):
    result = []
    i = start_pos
    while i < len(text):
        if text[i] == '\\' and i + 1 < len(text) and text[i + 1] == "'":
            result.append("'")
            i += 2
        elif text[i] == "'":
            return ''.join(result), i
        else:
            result.append(text[i])
            i += 1
    return ''.join(result), i


def find_block(text, key):
    key = key.strip().rstrip(':')
    pattern = re.compile(r'\b' + re.escape(key) + r'\s*:', re.MULTILINE)
    m = pattern.search(text)
    if not m:
        return ''
    start = text.find('[', m.end())
    if start == -1:
        return ''
    depth = 0
    i = start
    while i < len(text):
        if text[i] == '[':
            depth += 1
        elif text[i] == ']':
            depth -= 1
            if depth == 0:
                return text[start:i + 1]
        i += 1
    return ''


def count_intros(qa_block):
    intros = []
    i = 0
    while i < len(qa_block):
        m = re.search(r"intro:\s*'", qa_block[i:])
        if not m:
            break
        pos = i + m.end()
        s, end_pos = extract_string(qa_block, pos)
        intros.append(s)
        i = pos + end_pos
    return intros


def count_tables(b):
    return len(re.findall(r'\btable\s*:', b))

def count_boxes(b):
    return len(re.findall(r'\bbox2?\s*:', b))

def count_highlights(b):
    total = 0
    for m in re.finditer(r'highlights\s*:\s*\[', b):
        depth = 1
        i = m.end()
        while i < len(b) and depth > 0:
            if b[i] == '[': depth += 1
            elif b[i] == ']': depth -= 1
            i += 1
        total += len(re.findall(r"'[^']*'", b[m.end():i - 1]))
    return total

def count_sources_in_qa(b):
    return len(re.findall(r'sourceNote\s*:', b)) + len(re.findall(r'source\s*:\s*\{', b))

def count_faq(b):
    return max(len(re.findall(r'\bq\s*:', b)), len(re.findall(r'\bquestion\s*:', b)))

def count_sources_arr(text):
    sb = find_block(text, 'sources:')
    return len(re.findall(r'url\s*:', sb)) if sb else 0

def check_visual_missing(b):
    items = re.split(r'\{\s*\n\s*anchor\s*:', b)
    return sum(
        1 for item in items[1:]
        if not re.search(r'\b(table|box|box2|hasEligibilityChecker|hasApplyMethodTabs)\s*:', item)
    )


def check_file(path):
    text = open(path, encoding='utf-8', errors='replace').read()
    qa_block = find_block(text, 'qa:')
    if not qa_block:
        return None
    qa_count = len(re.findall(r'anchor\s*:', qa_block))
    if qa_count == 0:
        return None

    faq_block = find_block(text, 'faq:')
    intros = count_intros(qa_block)
    short = [(i+1, len(s)) for i, s in enumerate(intros) if len(s) < 200]

    errs = []
    if qa_count < 7:                              errs.append(f'Q1(qa:{qa_count})')
    if short:                                     errs.append(f'Q2({len(short)}개: min {min(l for _,l in short)}자)')
    if check_visual_missing(qa_block) > 0:        errs.append(f'Q3(시각없음:{check_visual_missing(qa_block)}개)')
    if count_tables(qa_block) < 2:                errs.append(f'Q4(table:{count_tables(qa_block)})')
    if count_boxes(qa_block) < 3:                 errs.append(f'Q5(box:{count_boxes(qa_block)})')
    if count_highlights(qa_block) < 15:           errs.append(f'Q6(highlights:{count_highlights(qa_block)})')
    if count_sources_in_qa(qa_block) < qa_count:  errs.append(f'Q7(source:{count_sources_in_qa(qa_block)}/{qa_count})')
    if count_faq(faq_block) < 5:                  errs.append(f'Q8(faq:{count_faq(faq_block) if faq_block else 0})')
    if count_sources_arr(text) < 3:               errs.append(f'Q9(sources:{count_sources_arr(text)})')
    return errs


def main():
    target = sys.argv[1] if len(sys.argv) > 1 else None
    policies_dir = os.path.abspath(POLICIES_DIR)
    skip = {'index.ts', 'manifest.ts'}

    if target:
        slug = target if target.endswith('.ts') else target + '.ts'
        if slug not in os.listdir(policies_dir):
            print(f'파일 없음: {slug}')
            sys.exit(1)
        files = [slug]
    else:
        files = sorted(f for f in os.listdir(policies_dir) if f.endswith('.ts') and f not in skip)

    total = pass_ = old_fmt = content_err = 0
    errors = []

    for fname in files:
        result = check_file(os.path.join(policies_dir, fname))
        total += 1
        if result is None:
            old_fmt += 1
        elif result:
            content_err += 1
            errors.append((fname[:-3], result))
        else:
            pass_ += 1

    print(f'총: {total} | PASS: {pass_} | 구형포맷(qa없음): {old_fmt} | 내용오류: {content_err}')
    if errors:
        print('=== 품질 오류 ===')
        for name, errs in errors:
            print(f'  [{name}]: {" | ".join(errs)}')
    else:
        print('=== 품질 오류 없음 ✓ ===')
    sys.exit(1 if content_err > 0 else 0)


if __name__ == '__main__':
    main()
