# gov-policy-writer 워크플로우

## 작동 원칙

1. **추정 0%** — 모든 수치·자격·기간은 정부 카드뉴스 원본 텍스트와 1:1 매칭
2. **placeholder 0개** — `__FILL_*__` 같은 임시 표식 절대 금지
3. **데이터 없는 필드** — 빈 값 또는 명시적 "정부 공식 자료 확인" 안내문
4. **사용자 중심 풀어쓰기** — 정부 어투 그대로 X, 일반인이 이해할 표현으로 변환

## 단계별 워크플로우

### Phase 1: 카드뉴스 페이지 접속
- `mcp__Claude_in_Chrome__navigate` 로 정부 카드뉴스 페이지 진입
- 우선순위: korea.kr/multi/visualNewsView.do > 부처 사이트 보도자료 > 부처 메인 카드뉴스
- 키워드로 검색 후 가장 최신 + 가장 권위 있는 1차 출처 선택

### Phase 2: 텍스트 완전 추출
- `mcp__Claude_in_Chrome__get_page_text` 로 카드 N장 전체 텍스트 추출
- 카드별 번호·핵심·디테일·주의사항 분리 식별
- 추출된 텍스트를 `data/raw/{slug}.txt`에 저장

### Phase 3: 데이터 구조화
- 추출 텍스트만 사용 (내 일반 지식 추가 금지)
- `keyFacts` 9개 모두 원본에서 발췌
- `qa` 7개 카드 = 카드 N장과 1:1 매칭
- 각 qa: intro(200자+) + table 또는 box + highlights 3개+
- `faq` 5개: 카드뉴스 Q&A 또는 부처 공식 FAQ
- `sources` 3개+: 카드뉴스 URL + 부처 메인 + 신청처

### Phase 4: 사용자 중심 풀어쓰기
- 정부 어투 → 일반인 어투 변환 (단, 수치·법령명은 원본 유지)
- "70%의 국민을 대상으로" → "소득 하위 70%까지 받습니다"
- 어려운 행정 용어는 괄호로 풀이 추가

### Phase 5: 자동 검증
- `npm run verify -- {slug}` 실행
- 80% 미만이면 부족 필드 보강 후 재실행
- 100% 통과까지 반복

### Phase 6: 1:1 출처 검증
- `npm run verify-policy -- {slug}` 실행
- 모든 keyFacts.source.text가 실제 카드뉴스 페이지에 존재하는지 확인
- 불일치 발견 시 수정

### Phase 7: index.ts 등록 + 푸시
- `data/policies/index.ts`에 추가
- 사이트맵 자동 등록 확인
- 사용자 승인 후 git push

## SGE(구글 AI 개요) 노출 최적화

- 질문 형식 Q&A 7개 (검색 의도와 정확히 일치)
- 핵심 데이터 표 1개+ (수치 비교용)
- FAQ 섹션 (구글이 SGE 답변 소스로 활용)
- JSON-LD 4종 (Article, Breadcrumb, FAQPage, ItemList)
- 정부 1차 출처 URL (E-E-A-T 신뢰도 가산점)

## 절대 금지

- 카드뉴스 원본에 없는 수치 추가
- "약 N", "정도", "대략" 등 추측 표현
- 일반 지식·기억으로 빈 값 채우기
- placeholder 표식 박고 저장
- verify 미통과 상태로 푸시
