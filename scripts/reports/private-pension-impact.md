# ✅ 통과 — private-pension-impact

- 타이틀: 개인연금 받으면 기초연금 깎이나요, 연금저축·즉시연금 반영 차이 (spec 고정 — 사장님이 줌)
- 키워드: 기초연금 · 허브: 기초연금 월 34만9700원, 소득인정액 기준과 국민연금 감액 여부 (/policy/basic-pension) · 폴더: 기초연금
- 실행: 2026. 9. 19. 오후 7:23:12 · 총 10.5분 · 고친 횟수 0 · 모델 sonnet
- 글: app/policy/[id]/[spoke]/content/기초연금/개인연금영향차이.tsx → https://gov.jjyu.co.kr/policy/basic-pension/private-pension-impact/
- 정본으로 쓴 글: app/policy/[id]/[spoke]/content/실손보험/나이별실비보험료.tsx

## 단계별 시간·사용량
| 단계 | 시간 | 모델 호출 | 입력 토큰 | 출력 토큰 | 환산 $ |
|---|---|---|---|---|---|
| guard | 0.0분 | - | - | - | - |
| plan | 1.7분 | 1 | 70k | 7k | 0.38 |
| cta | 0.1분 | - | - | - | - |
| collect | 0.8분 | - | - | - | - |
| captures | 0.3분 | 1 | 266k | 953 | 0.17 |
| write | 6.5분 | 1 | 103k | 37k | 0.73 |
| gates | 1.1분 | - | - | - | - |
| **합계** | **10.5분** | **3** | **439k** | **45k** | **1.27** |

> 구독이라 실제 청구는 없습니다. 환산 $ 는 사용 한도를 얼마나 먹었는지의 척도입니다. 호출마다 고정비(시스템 프롬프트) 약 3만 토큰이 붙습니다.

## 설계도 (구성표)
- 타이틀·소제목: spec 고정 (글자 그대로)
1. 개인연금은 직접 감액인가요, 소득인정액에 더해지는 건가요?
2. 연금저축·퇴직연금·즉시연금은 각각 어떻게 잡히나요?
3. 개인연금 월 얼마까지는 기초연금에 영향이 없나요?  ← 버튼 슬롯
4. 수령 방식을 바꾸면 소득인정액이 달라지나요?  ← 버튼 슬롯
- 상단 버튼: [내 연금 한눈에 조회하기] → https://www.fss.or.kr/fss/lifeplan/lifeplanIndex/index.do?menuNo=201101
- qa3 버튼: [국민연금 감액 비교하기] → /policy/basic-pension/national-pension-linked-reduction/
- qa4 버튼: [내 소득인정액 계산하기] → /policy/basic-pension/income-recognition-calc/
  - ✓ https://www.fss.or.kr/fss/lifeplan/lifeplanIndex/index.do?menuNo=201101 (통합연금포털 | 통합연금포털 | 금융소비자보호 |)
  - ✓ /policy/basic-pension/national-pension-linked-reduction/ (내부 경로)
  - ✓ /policy/basic-pension/income-recognition-calc/ (내부 경로)
- 출처: https://www.fss.or.kr/edu/fec/contMng/view.do?menuNo=300017&contentsSlno=636 , ✗ https://www.law.go.kr/%ED%96%89%EC%A0%95%EA%B7%9C%EC%B9%99/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EC%A7%80%EA%B8%89%EB%8C%80%EC%83%81%EC%9E%90%EC%84%A0%EC%A0%95%EA%B8%B0%EC%A4%80%EC%95%A1,%EA%B8%B0%EC%A4%80%EC%97%B0%EA%B8%88%EC%95%A1%EB%B0%8F%EC%86%8C%EB%93%9D%EC%9D%B8%EC%A0%95%EC%95%A1%EC%82%B0%EC%A0%95%EC%84%B8%EB%B6%80%EA%B8%B0%EC%A4%80 , https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EB%B2%95/(20251001,21065,20251001)/%EC%A0%9C10%EC%A1%B0 , ✗ https://www.fss.or.kr/fss/main/contents.do?menuNo=200978
- 오해 소지: 개인연금도 국민연금처럼 연계감액 대상이라고 착각 / 일시금으로 받으면 소득인정액에 전혀 안 잡힌다고 오해 / 개인연금 자체가 직접 감액 사유라고 착각(실제로는 소득인정액 항목에 더해지는 구조)

## 증거
- 추출본 scripts/output/source-private-pension-impact.txt 35879자 · 캡처 4장 (scripts/output/captures/private-pension-impact-*.png)
  - private-pension-impact-1.png: 금융감독원 e-금융교육센터, [플러스 연금 Cafe] '기초연금 받는다면 국민연금이 줄어들까?' 영상 상세페이지, 제작 투자자교육협의회·조회수 40회·17분 41초, 개발연도 2023·교육대상 중장년기/노년기/장애인
  - private-pension-impact-2.png: 국가법령정보센터, '해당 한글주소명을 찾을 수 없습니다' 오류 페이지 — 한글 법령주소 접속 실패, 표·조문 내용 없음
  - private-pension-impact-3.png: 국가법령정보센터 기초연금법 조문 화면(시행 2025.10.1, 법률 제21065호), 제10조(기초연금 지급의 신청)·제10조의2(기초연금 관련 정보의 제공)·제11조(조사·질문 등) 전문 노출, 국민연금·개인연금 감액 관련 조항은 안 보임
  - private-pension-impact-4.png: 금융감독원 통합연금포털 '소비자 유의사항 > 유지/해지 단계' 페이지, 해지(중도인출)시 과세 표(구분: 부득이한 사유/그 외 사유 × 개시 전/개시 후 연금수령 한도내·초과 — 기타소득세 16.5%, 연금소득세 3.3~5.5%), 하단 자금 인출 순서 플로우(과세제외금액→이연퇴직소득→과세대상소득, 퇴직소득세 70%, 분리과세 1,500만원 기준 3.3~5.5%/16.5%)

## 검사 (회차별)
| 검사 | 초안 |
|---|---|
| tsc (타입) | ✓ |
| 원문 대조 (check-source-match) | ✓ |
| 수치 ↔ 출처 (check-source-backing) | ✓ |
| 버튼 도배 (check-button-variety) | ✓ |
| 승인 도장 (check-stage-approval) | ✓ |
| 출처 링크 (check-source-links) | ✓ |
| 배선 (verify-integrity) | ✓ |
| 화면 (dev 렌더) | ✓ |

## 메모
- 근거로 쓰지 않은 출처: https://www.law.go.kr/%ED%96%89%EC%A0%95%EA%B7%9C%EC%B9%99/%EA%B8%B0%EC%B4%88%EC%97%B0%EA%B8%88%EC%A7%80%EA%B8%89%EB%8C%80%EC%83%81%EC%9E%90%EC%84%A0%EC%A0%95%EA%B8%B0%EC%A4%80%EC%95%A1,%EA%B8%B0%EC%A4%80%EC%97%B0%EA%B8%88%EC%95%A1%EB%B0%8F%EC%86%8C%EB%93%9D%EC%9D%B8%EC%A0%95%EC%95%A1%EC%82%B0%EC%A0%95%EC%84%B8%EB%B6%80%EA%B8%B0%EC%A4%80 (본문에 주제어(기초연금)가 없다 — 다른 문서) / https://www.fss.or.kr/fss/main/contents.do?menuNo=200978 (본문에 주제어(기초연금)가 없다 — 다른 문서)

## 렌더 캡처
![private-pension-impact](private-pension-impact.png)

## 다음
- 이 보고서와 캡처를 보고 승인 → 배치가 다 끝나면 한 번에 커밋·푸시 (pre-push 게이트가 한 번 더 본다). 자동 푸시는 없다.
- 산출물: scripts/output/{plan,stage2,outline,factsheet,spec}-private-pension-impact.* · source-private-pension-impact.txt · captures/private-pension-impact-*.png
