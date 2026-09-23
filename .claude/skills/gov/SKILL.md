---
name: gov
description: gov-jjyu 글 한 편을 새 파이프라인(scripts/gov)으로 끝까지 쓴다. "기초연금 spec 돌려", "/gov 기초연금", "이 타이틀·소제목으로 글 써", 키워드 표나 공식 페이지 URL과 함께 글을 요청하면 이 스킬로 시작한다. 사장님이 준 타이틀·소제목은 절대 바꾸지 않는다.
---

# /gov — spec 하나 → 명령 한 줄 → 보고서 (2026-09-23 전환)

판정은 전부 코드가 한다. 모델은 사실 뽑기·작성 두 번만 부른다. **돌리는 동안 끼어들어 고치지 않는다** —
결과가 이상하면 원인은 지시문(`scripts/gov/run.mjs` 의 프롬프트)이나 검사기이고, 고친 뒤 `test-mutations.mjs` 로 다시 시험한다.

## 0. spec — `scripts/specs/{주제}.md`

```
slug: english-lowercase-hyphen
cat: 생활            catSlug: life        ← 기존 카테고리만 (새 catSlug 는 CATEGORY_LABELS 등록 필요)
title: 타이틀
sub: 소제목 1        ← 정확히 4줄
sub: 소제목 2
sub: 소제목 3
sub: 소제목 4
source: 1차 출처 URL  ← 공식 페이지·보도자료·법령·PDF. 시민기자·블로그는 넣어도 코드가 제외한다
button: 버튼 목적지 URL (원문 '행동 링크'에 없는 신청 사이트일 때만)
```

- **사장님이 타이틀·소제목을 주면 글자 그대로.** 바꾸자고 제안하지 않는다.
- **한 편짜리를 맡기면** 내가 짓는다: 네이버 자동완성(`ac.search.naver.com`, Playwright)에 뜬 말만 쓰고 행동 키워드(신청·교환·조회·찾기)를 넣는다.
- **키워드 표를 주면** 의도별로 묶는다. 같은 의도(홈페이지·온라인·인터넷 방법)는 한 소제목. 의도가 4개면 한 편, 그보다 많이 갈리면 허브·스포크를 사장님께 묻는다.
- source 는 Playwright 로 공식 누리집을 열어 찾는다. 네이버 AI 요약·블로그는 공식 페이지를 찾는 단서로만.

## 1. 실행

```bash
node scripts/gov/run.mjs scripts/specs/{주제}.md                 # 전부 (약 9분)
node scripts/gov/run.mjs scripts/specs/{주제}.md --from write    # 사실은 두고 다시 쓰기
node scripts/gov/run.mjs scripts/specs/{주제}.md --to facts      # 사실까지만
```

## 2. 보고서 → 승인 → push

`scripts/reports/{slug}.md` — 대조 결과, 합격 시험, 사실·원문 인용, **한정 표현 판단(살림/안 살린 이유)**, 🖼 이미지 사실.
사장님 확인 뒤 커밋·푸시. 자동 푸시 금지. 스포크(허브 확장)는 아직 옛 `npm run article`.

## 하지 말 것

- 돌리는 중에 글을 손으로 고치기 — 검사기를 우회하게 된다
- 검사기를 느슨하게 해서 통과시키기 — 오탐이면 규칙을 고치고 `test-mutations.mjs` 가 전부 잡는지 다시 본다
- 추정·예시 수치, 블로그·언론을 1차 출처로, 정부 슬로건·로고, 자동 푸시
