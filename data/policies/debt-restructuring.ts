/* 채무조정 제도 고르는 순서: 연체기간별 제도, 채무 한도와 소득, 무료 상담처, 신청 뒤 공공정보·개인회생·파산 효과
 * 추출본: scripts/output/gov/debt-restructuring/src-1.txt
 * 추출본: scripts/output/gov/debt-restructuring/src-2.txt
 * 추출본: scripts/output/gov/debt-restructuring/src-3.txt
 * 추출본: scripts/output/gov/debt-restructuring/src-4.txt
 * 추출본: scripts/output/gov/debt-restructuring/src-5.txt
 *
 * 쓰지 않는 것:
 *   - 「채무자 회생 및 파산에 관한 법률」 2028년 01월 01일 시행 개정 예정 안내(src-2·src-3) — 시행 전 개정이고 내용이 원문에 없음. 글에 쓰면 추측이 됨
 *   - 새출발기금 중개형(소상공인 부실우려차주·부실차주) — 개인사업자·소상공인 한정이라 30개 한도 안에서 우선순위가 낮음
 *   - 상환방식(원리금균등·원금균등분할상환) — 제도 고르기·신청 뒤 흐름에 직접 필요하지 않음
 *   - 개인회생 채권이의기간(개시결정일부터 2월이내)·채권자집회(3월이내)·보전처분 중지명령(img-2-1) — 개수 제한. 신청 뒤 흐름은 14일·1월·인가·미수행·면책 단계로 충분함
 *   - 개인파산·면책 절차도(img-3-1: 신청→서면심사→예납명령→파산선고→면책결정) — 개수 제한. 파산 쪽은 효과(자격 제한·법률행위 제한)를 우선함
 *   - 파산 자격 제한 예시(공무원·변호사·후견인 등)와 '불이익은 채무자 본인에게만 한정' — 개수 제한. f29로 핵심을 다룸
 *   - 신용회복위원회 상담이 무료인지 여부 — 원문에 무료라는 문구가 없음. 무료로 명시된 곳은 대한법률구조공단(img-4-1)뿐임
 *   - 신용회복위원회 해외 번호 +82-2-6337-2000 — 국내 독자 대상 글이라 필요 없음
 *   - 대한법률구조공단 상담예약 방법(홈페이지·카카오챗봇·132)과 법률구조플랫폼 35개 기관 — 개수 제한. 132와 무료 지원 사실로 대신함
 *   - 간편진단 단계별 입력 항목(무담보·담보채무액, 재산, 부양가족 정의) — 개수 제한. 결과의 한계(f15)와 소득 증빙(f16)만 남김
 *   - 신용회복위원회 방문·온라인 상담 예약 URL(f19, cyber.ccrs.or.kr) — 버튼 목록에 없는 주소라 버튼·링크로 쓰지 않고 본문에 예약 가능 사실만 적음
 */
const CCRS_COMPARE = 'https://www.ccrs.or.kr/cms/com/index.do?MENU_ID=490';
const EASYLAW_REHAB = 'https://www.easylaw.go.kr/CSP/CnpClsMain.laf?popMenu=ov&csmSeq=1286&ccfNo=1&cciNo=1&cnpClsNo=1';
const EASYLAW_BANKRUPT = 'https://www.easylaw.go.kr/CSP/CnpClsMain.laf?popMenu=ov&csmSeq=616&ccfNo=1&cciNo=1&cnpClsNo=1';
const KLAC = 'https://www.klac.or.kr/';
const CCRS_FIND = 'https://www.ccrs.or.kr/cms/com/index.do?MENU_ID=190';

export const debtRestructuringPolicy = {
  id: '207', type: 'service' as const,
  title: '채무조정 총정리, 빚이 힘들 때 제도 고르는 순서',
  titleKeywords: { k1: '채무조정 총정리', k2: '채무조정 제도 종류', k3: '신용회복위원회 채무조정', k4: '개인회생 개인파산 차이' },
  slug: 'debt-restructuring', org: '신용회복위원회·찾기쉬운 생활법령정보·대한법률구조공단', cat: '채무', catSlug: 'loan',
  amount: '신용회복위원회 채무조정 총 채무 15억원 이하(무담보 5억원, 담보 10억원)', hideAmountBox: true,
  deadline: '연체 30일 이하 · 31~89일 · 90일 이상', deadlineLabel: '제도를 가르는 연체기간', views: 0,
  titleTail: false,
  cardLayout: 'act-first' as const,
  applyUrl: CCRS_FIND,
  ctaLabel: '☞ 신용회복위원회 채무조정 상담받기',
  heroHook:
    '독촉 전화가 잦아지면 워크아웃이니 회생이니 하는 말부터 머릿속이 엉키기 일쑤입니다. 연체가 30일 이하인지, 90일 이상인지에 따라 신용회복위원회에서 들어갈 제도가 갈립니다. 오늘로 연체가 며칠째인지 세어 본 뒤 신용회복위원회 채무조정 상담을 받아 두면 할 일이 손에 잡힙니다. 제도 고르는 순서와 상담처, 신청 뒤 달라지는 점을 알아보겠습니다.',
  datePublished: '2026-07-02T09:00:00+09:00', dateModified: '2026-10-03T10:00:00+09:00',
  verifiedAt: '2026-10-03',
  summary: '채무조정 제도는 신용회복위원회의 신속채무조정·사전채무조정·개인워크아웃과 개인회생·개인파산으로 나뉩니다. 연체기간 30일 이하인 채무자는 신속채무조정, 31일 이상 89일 이하는 사전채무조정, 90일 이상은 개인워크아웃 대상입니다. 신용회복위원회 채무조정은 총 채무 15억원 이하(무담보 5억원, 담보 10억원)까지 받을 수 있고, 개인회생은 담보채무 최대 15억원·무담보채무 최대 10억원까지 변제계획안에 따라 변제한 뒤 잔여 채무를 면제받으며, 개인파산은 채무한도가 없습니다. 개인워크아웃은 연체이자·이자 감면에 더해 원금을 0~70% 감면하고, 신속채무조정·사전채무조정·개인워크아웃의 상환기간은 최장 10년이며 사전채무조정·개인워크아웃의 주택담보대출은 최장 35년입니다. 신속·사전채무조정은 공공정보에 미등재되고, 개인회생은 변제계획 인가 후 1년 이상 성실변제 시, 개인파산은 면책결정 후 5년 경과 시 해제됩니다. 개인회생·파산·면책을 무료로 돕는 곳은 대한법률구조공단이며 전화상담은 132로 할 수 있고, 법률구조공단 소송지원은 기준중위소득으로 판단한 일정 수준 이하 소득자만 받을 수 있습니다. 개인회생은 변제계획을 이행하지 않으면 폐지되어 연체정보가 재등록되고, 면책 후 5년 이내 재신청이 금지됩니다. 본 정보는 신용회복위원회, 찾기쉬운 생활법령정보, 대한법률구조공단 누리집의 안내를 확인한 내용입니다.',
  metaDescription: '채무조정 총정리, 빚이 힘들 때 제도 고르는 순서. 연체 30일 이하 신속채무조정, 31~89일 사전채무조정, 90일 이상 개인워크아웃. 신용회복위원회 한도 총 채무 15억원 이하, 변제계획안대로 갚는 개인회생과 파산의 차이, 법률구조공단 무료 지원과 전화상담 132, 개인회생 재신청 금지까지.',
  audience: '빚 상환이 버거워 신용회복위원회 채무조정과 개인회생·개인파산 가운데 맞는 제도를 고르려는 사람',
  keyFacts: {
    신속채무조정대상: { value: '연체기간 30일 이하인 채무자', source: { url: CCRS_FIND, text: '연체기간 30일 이하인 채무자', verifiedAt: '2026-10-03' } },
    개인워크아웃대상: { value: '연체기간 90일 이상인 채무자', source: { url: CCRS_FIND, text: '연체기간 90일 이상인 채무자', verifiedAt: '2026-10-03' } },
    신용회복위원회채무한도: { value: '신용회복위원회 채무조정은 총 채무 15억원 이하(무담보 5억원, 담보 10억원)', source: { url: CCRS_COMPARE, text: '| 채무액 | 총 채무 15억원 이하\n(무담보 5억원, 담보 10억원) | 총 채무 25억원 이하\n(무담보 10억원,\n담보 15억원) | 제한없음 |', verifiedAt: '2026-10-03' } },
    공공정보등재기간: { value: '신속·사전채무조정 미등재, 개인워크아웃 완제 또는 1년 경과 시 해제, 개인회생 변제계획 인가 후 1년 이상 성실변제 시 해제, 개인파산 면책결정 후 5년 경과 시 해제', source: { url: CCRS_COMPARE, text: '| 공공정보\n등재기간 | 미등재 | 미등재 | 완제 또는\n1년 경과시 해제 | 변제계획 인가 후\n1년 이상 성실변제시 해제 | 면책결정 후\n5년 경과시 해제 |', verifiedAt: '2026-10-03' } },
    법률구조공단소득기준: { value: '법률구조공단 소송지원은 일정 수준 이하의 소득이 있는 사람만 가능하며, 소득은 기준중위소득으로 판단', source: { url: KLAC, text: '공단 소송지원일정 수준 이하의 소득이 있는 분만 가능하며,그 소득은 기준중위소득으로 판단 합니다.', verifiedAt: '2026-10-03' } },
    개인회생재신청제한: { value: '개인회생 면책 후 5년 이내 재신청 금지', source: { url: EASYLAW_REHAB, text: '(5년이내 재신청 금지)', verifiedAt: '2026-10-03' } },
    파산자격제한: { value: '파산선고를 받고 복권되지 않은 사람은 공·사법상 자격 제한을 받음', source: { url: EASYLAW_BANKRUPT, text: '파산선고를 받고 복권되지 않은 사람은 다음과 같은 공·사법상의 자격 제한을 받게 됩니다.', verifiedAt: '2026-10-03' } },
  },
  qa: [
    {
      q: '어떤 제도가 있나요?', anchor: 'q-programs',
      intro: '채무조정 제도는 신용회복위원회가 운영하는 신속채무조정·사전채무조정·개인워크아웃과, 「채무자 회생 및 파산에 관한 법률」에 따른 개인회생·개인파산으로 나뉩니다. 표의 위쪽 세 줄은 연체기간으로, 아래쪽 두 줄은 소득과 재산 형편으로 대상을 가르니 내 사정이 어느 기준에 걸리는지부터 보시면 됩니다. 기준만큼이나 빚이 줄어드는 폭도 제도마다 차이가 큽니다. 신속채무조정과 사전채무조정은 둘 다 연체이자를 감면해 주는데, 약정이자율(대출 계약 때 정한 이자율) 인하 폭은 신속채무조정이 30~50%, 사전채무조정이 30~70%입니다. 개인워크아웃으로 가면 연체이자와 이자에 더해 원금도 0~70% 감면 대상이 되고요. 상환기간은 세 제도 모두 최장 10년이며, 사전채무조정과 개인워크아웃에서 주택담보대출은 최장 35년까지 늘어납니다. 개인회생과 개인파산은 갚는 방식부터 전혀 다릅니다. 개인회생은 가진 재산의 가치 이상을 변제계획안(빚을 어떻게 나눠 갚을지 정한 계획)에 따라 갚고 남은 채무를 면제받는 구조입니다. 개인파산은 보유 재산을 처분한 뒤에도 남은 채무를 면책, 즉 갚을 책임에서 벗어나게 해 주는 길입니다.',
      highlights: ['신속채무조정·사전채무조정·개인워크아웃', '위쪽 세 줄은 연체기간으로', '원금도 0~70% 감면', '주택담보대출은 최장 35년', '갚는 방식부터 전혀 다릅니다'],
      table: {
        caption: '채무조정 제도별 대상',
        headers: ['제도', '대상'],
        rows: [
          ['신속채무조정', '연체 30일 이하'],
          ['사전채무조정', '연체 31~89일'],
          ['개인워크아웃', '연체 90일 이상'],
          ['개인회생', '고정소득은 있으나 채무가 과도해 상환이 불가능한 자'],
          ['개인파산', '소득활동이 어렵고 재산을 처분해도 상환이 불가능한 자'],
        ],
      },
      sourceNote: '* 출처: 신용회복위원회 채무조정제도 비교, 찾기쉬운 생활법령정보 개인파산ㆍ면책절차 개관 (2026-10-03 확인)',
    },
    {
      q: '가장 먼저 무엇을 확인하나요?', anchor: 'q-first-check',
      intro: '가장 먼저 짚을 것은 지금 연체가 며칠째인지입니다. 연체기간 30일 이하면 신속채무조정, 31일 이상 89일 이하면 사전채무조정, 90일 이상이면 개인워크아웃으로 신용회복위원회 안에서 들어갈 문이 정해지는데요. 다음은 빚의 크기입니다. 표에서 신용회복위원회 한도 안에 드는지 보고, 그 한도를 넘는다면 개인회생과 개인파산 줄로 눈을 옮기면 됩니다. 세 번째는 소득입니다. 신용회복위원회 누리집에서 내 정보를 입력해 맞는 제도를 찾아보는 간편진단은 최근 3개월 이상 소득 증빙이 가능한지를 묻습니다. 개인회생도 채무자에게 일정한 수입이 있는 것을 전제로 하는 제도라, 벌이를 서류로 보여 줄 수 있는지가 그다음 갈림길이 됩니다. 간편진단 결과는 직접 입력한 정보만으로 낸 것이라 실제 상담 결과와 다를 수 있으니, 진단 화면에 맞는 제도가 뜨지 않았다고 곧바로 포기하실 필요는 없습니다.',
      highlights: ['지금 연체가 며칠째인지', '신용회복위원회 한도 안에 드는지', '최근 3개월 이상 소득 증빙', '실제 상담 결과와 다를 수 있으니'],
      table: {
        caption: '제도별 채무 한도',
        headers: ['구분', '채무 한도'],
        rows: [
          ['신용회복위원회 채무조정', '총 15억원 이하(무담보 5억원, 담보 10억원)'],
          ['개인회생', '담보 최대 15억원·무담보 최대 10억원, 변제계획안대로 변제'],
          ['개인파산', '채무한도 없음'],
        ],
      },
      act: {
        label: '나에게 맞는 채무조정 확인하기',
        url: CCRS_FIND,
      },
      sourceNote: '* 출처: 신용회복위원회 나에게 맞는 채무조정 찾기·채무조정제도 비교, 찾기쉬운 생활법령정보 개인회생절차 개념 및 신청자격·개인파산ㆍ면책절차 개관 (2026-10-03 확인)',
    },
    {
      q: '상담은 어디서 무료로 받나요?', anchor: 'q-free-counsel',
      intro: '상담을 무료로 돕는다고 분명히 밝힌 곳은 대한법률구조공단입니다. 개인회생과 파산·면책을 무료로 도와준다고 안내하고 있습니다. 전화상담은 132로 할 수 있고, 통화료는 거는 쪽이 냅니다. 다만 법률구조공단의 소송지원은 일정 수준 이하의 소득이 있는 사람만 받을 수 있고, 그 소득은 기준중위소득으로 판단합니다. 공단 이름을 앞세운 연락은 한 번 더 걸러 보셔야 합니다. 법률구조공단의 법률상담과 소송구조는 소셜미디어나 채팅앱으로는 받을 수 없고, 공단은 무료로 소송을 진행하면서 어떤 방식으로도 돈을 받거나 내도록 유도하지 않습니다. 신용회복위원회의 채무조정 상담은 대표번호 1375로 평일 09시부터 18시까지 연결되며, 방문 상담과 온라인 상담은 누리집에서 예약할 수 있습니다. 개인워크아웃처럼 신용회복위원회 제도를 생각한다면 이쪽을, 개인회생이나 파산을 준비한다면 법률구조공단을 먼저 떠올리시면 동선이 짧아집니다.',
      highlights: ['대한법률구조공단', '전화상담은 132', '기준중위소득으로 판단', '소셜미디어나 채팅앱으로는 받을 수 없고', '대표번호 1375'],
      act: {
        label: '법률구조공단 무료 상담 알아보기',
        url: KLAC,
      },
      sourceNote: '* 출처: 대한법률구조공단 누리집, 신용회복위원회 채무조정제도 비교 (2026-10-03 확인)',
    },
    {
      q: '신청 뒤에는 무슨 일이 생기나요?', anchor: 'q-after-apply',
      intro: '신청 뒤 공공정보(신용 관련 공공 기록)에 오르는지부터 보면, 신속채무조정과 사전채무조정은 아예 오르지 않는 미등재이고 개인회생은 변제계획 인가 후 1년 이상 성실하게 갚아야 풀립니다. 개인워크아웃과 개인파산은 등재된 뒤 풀리는 조건이 또 다르니 아래 표에서 함께 견주어 보시면 됩니다. 개인회생 쪽 흐름을 따라가 보면, 신청일부터 1월 이내에 개시결정이 나옵니다. 이후 변제계획안이 인가되면 그 사실이 은행연합회에 통보돼 연체정보 등록이 해제되고, 채권자들의 빚 독촉, 곧 추심도 받지 않을 수 있어 생활에 숨통이 트입니다. 반대로 개인회생 변제계획을 이행하지 않으면 절차가 폐지되고 연체정보가 재등록되니, 끝까지 갚을 수 있는 계획인지가 관건입니다. 면책까지 마쳐도 개인회생은 5년 이내 재신청 금지라 한 번에 끝낸다는 마음으로 계획을 세워야 하고요. 개인파산은 결과의 무게가 또 다릅니다. 파산선고를 받은 채무자는 선고 뒤 재산에 관한 법률행위를 할 수 없고, 선고를 받은 뒤 복권되지 않은 사람은 공·사법상 자격 제한을 받게 됩니다.',
      highlights: ['미등재', '변제계획 인가 후 1년 이상', '연체정보 등록이 해제', '연체정보가 재등록', '5년 이내 재신청 금지', '복권되지 않은 사람은 공·사법상 자격 제한'],
      table: {
        caption: '제도별 공공정보 등재 해제 시점',
        headers: ['제도', '해제 시점'],
        rows: [
          ['개인워크아웃', '완제 또는 1년 경과 시 해제'],
          ['개인회생', '변제계획 인가 후 1년 이상 성실변제 시 해제'],
          ['개인파산', '면책결정 후 5년 경과 시 해제'],
        ],
      },
      act: {
        label: '신청 뒤 달라지는 점 제도별로 확인하기',
        url: CCRS_COMPARE,
      },
      sourceNote: '* 출처: 신용회복위원회 채무조정제도 비교, 찾기쉬운 생활법령정보 개인회생절차 개념 및 신청자격·개인파산ㆍ면책절차 개관 (2026-10-03 확인)',
    },
  ],
  faq: [
    { q: '채무조정 중 당장 갚기 어려우면 상환을 미룰 수 있나요?', a: '신용회복위원회 제도에는 최장 3년의 상환유예가 있습니다. 신속채무조정은 유예이자율 연 3.25%, 사전채무조정과 개인워크아웃은 유예이자율 연 2%가 적용되고, 개인회생과 개인파산에는 상환유예가 해당하지 않습니다.', source: '신용회복위원회 채무조정제도 비교', sourceUrl: CCRS_COMPARE },
    { q: '개인회생 변제기간은 3년인가요, 5년인가요?', a: '찾기쉬운 생활법령정보의 개인회생 안내는 원칙적으로 3년간, 「채무자 회생 및 파산에 관한 법률」 제611조제5항 단서의 경우 5년간 원금의 일부를 변제하면 나머지를 면책받는다고 설명합니다. 같은 사이트의 개인파산ㆍ면책절차 개관은 원칙적으로 5년 이내의 기간으로 적고 있고, 신용회복위원회 비교표에도 개인회생 상환기간은 최장 3~5년으로 나와 있습니다.', source: '찾기쉬운 생활법령정보 개인회생절차 개념 및 신청자격', sourceUrl: EASYLAW_REHAB },
  ],
  sources: [
    { label: '신용회복위원회 — 채무조정 길잡이(채무조정제도 비교)', url: CCRS_COMPARE },
    { label: '찾기쉬운 생활법령정보 — 개인회생절차 개념 및 신청자격', url: EASYLAW_REHAB },
    { label: '찾기쉬운 생활법령정보 — 개인파산ㆍ면책절차 개관', url: EASYLAW_BANKRUPT },
    { label: '대한법률구조공단', url: KLAC },
    { label: '신용회복위원회 — 나에게 맞는 채무조정 찾기', url: CCRS_FIND },
  ],
} as const;

export const debtRestructuringSpokes = [
  { slug: 'workout-missing-claims', role: 'claims', title: '개인워크아웃 누락채권 추가하는 법, 편파변제 주의와 상각채권 처리 기준은?' },
  { slug: 'workout-lawyer-fee', role: 'cost', title: '개인워크아웃 법무법인 수임료 내야 하나? 무료 상담과 직접 신청 비교' },
  { slug: 'workout-reapply', role: 'reapply', title: '개인워크아웃 두 번도 되나요, 재신청 조건과 종료 후 다시 신청하는 법' },
  { slug: 'workout-vs-rehabilitation', role: 'compare2', title: '개인워크아웃과 개인회생 중 어느 쪽이 유리한가? 감면 폭과 단점 비교' },
  { slug: 'workout-asset-standard', role: 'asset', title: '개인워크아웃 재산 기준, 배우자 재산과 자가 부동산은 어디까지 보나?' },
  { slug: 'workout-vehicle-lease', role: 'vehicle', title: '개인워크아웃 중 차량 유지되나요, 중고차 구입 조건부터 장기렌트와 리스까지' },
  { slug: 'workout-phone-telecom', role: 'telecom', title: '개인워크아웃 중 통장 사용과 휴대폰 개통, 통신비도 조정 대상인가?' },
  { slug: 'workout-seizure-collection', role: 'collection', title: '개인워크아웃하면 통장압류 해지되나요, 추심 중단 시점과 독촉 대응 방법까지' },
  { slug: 'workout-credit-score', role: 'credit', title: '개인워크아웃 신용점수는 얼마나 떨어지나요, 공공정보 등재와 해제 시기' },
  { slug: 'workout-credit-card', role: 'card', title: '개인워크아웃하면 신용카드 정지되나요, 카드 사용부터 재발급 시기까지' },
  { slug: 'workout-loan-during', role: 'loan', title: '개인워크아웃 중에 대출 되나요, 햇살론부터 전세대출과 마이너스통장 한도까지' },
  { slug: 'workout-rejection-creditor', role: 'rejection', title: '개인워크아웃 부결 사유와 부동의 확률, 거절당하면 어디서부터 하나?' },
  { slug: 'workout-missed-payment-lapse', role: 'lapse', title: '개인워크아웃 미납 4회면 실효되나요, 실효 후 재조정 신청 방법' },
  { slug: 'workout-payment-deferral', role: 'deferral', title: '개인워크아웃 납입유예 신청하는 법, 유예 기간과 납입약속일 변경도 되나' },
  { slug: 'workout-early-payoff-discount', role: 'incentive', title: '개인워크아웃 완납하면 추가 감면되나요, 일시감면 조건과 조기완납 이득' },
  { slug: 'workout-payment-amount', role: 'payment', title: '개인워크아웃 변제금은 어떻게 정해지나? 예납금 계산과 상환 기간까지' },
  { slug: 'workout-reduction-rate', role: 'rate', title: '개인워크아웃 감면율은 얼마나 되나요, 원금 감면과 이자 감면이 다른 이유' },
  { slug: 'workout-apply-documents', role: 'procedure', title: '개인워크아웃 신청하는 법과 준비 서류, 접수통지가 오기까지 며칠 걸리나' },
  { slug: 'workout-unemployed-freelancer', role: 'eligibility', title: '무직자도 개인워크아웃 되나요, 프리랜서 소득 증빙부터 무직 서류까지' },
  { slug: 'workout-conditions-overdue-income', role: 'conditions', title: '개인워크아웃 조건은 연체 90일부터인가? 소득 기준과 최저생계비까지' },
  { slug: 'workout-vs-pre-workout', role: 'compare', title: '개인워크아웃 뜻과 프리워크아웃 차이, 신복위 채무조정에서 어디에 속하나?' },
  { slug: 'speedy-debt-telecom-rental', role: 'overlap', title: '신속채무조정에 통신비 들어가나요? 렌탈료와 차할부 대상까지' },
  { slug: 'speedy-debt-youth-special', role: 'overlap', title: '청년특례 신속채무조정 나이와 조건, 일반과 다른 점과 특례 신청 서류' },
  { slug: 'speedy-debt-to-rehabilitation', role: 'overlap', title: '신속채무조정 후 개인회생 되나요, 개인워크아웃 전환부터 병행 신청까지' },
  { slug: 'speedy-debt-vs-rehabilitation', role: 'compare', title: '신속채무조정과 개인회생 차이, 감면율과 단점 따지면 어느 쪽이 유리할까?' },
  { slug: 'speedy-debt-account-collection', role: 'target', title: '신속채무조정 계좌정지와 통장 사용, 추심 중단 시점과 대위변제 영향' },
  { slug: 'speedy-debt-credit-score', role: 'target', title: '신속채무조정 신용점수 얼마나 떨어질까? 공공기록 등재와 회복 시기' },
  { slug: 'speedy-debt-loan-after', role: 'target', title: '신속채무조정 끝나고 대출 언제 되나요, 햇살론과 디딤돌부터 비상금대출까지' },
  { slug: 'speedy-debt-loan-during', role: 'target', title: '신속채무조정 중에 대출 되나요, 담보대출부터 전세대출과 마이너스통장까지' },
  { slug: 'speedy-debt-credit-card', role: 'target', title: '신속채무조정 카드 정지될까? 밀린 카드값과 체크카드 사용부터 재발급까지' },
  { slug: 'speedy-debt-missed-payment-lapse', role: 'target', title: '신속채무조정 미납 몇 번이면 실효되나요, 연체 처리와 재조정 신청' },
  { slug: 'speedy-debt-rejection-creditor', role: 'target', title: '신속채무조정 부결 사유와 확률, 채권자가 부동의하면 재신청은 언제 될까?' },
  { slug: 'speedy-debt-payment-deferral', role: 'apply', title: '신속채무조정 납부유예는 어떻게 신청하나요, 유예 기간과 연장 가능 횟수' },
  { slug: 'speedy-debt-payment-interest', role: 'calc', title: '신속채무조정 납입금 얼마일까? 이자 감면과 예납금부터 중도상환까지' },
  { slug: 'speedy-debt-procedure-review', role: 'apply', title: '신속채무조정 절차와 심사 기간, 합의서 체결부터 확정까지 얼마나 걸릴까?' },
  { slug: 'speedy-debt-documents', role: 'apply', title: '신속채무조정 필요서류는 어디서 떼나요, 서류 목록과 누락 시 보완 방법' },
  { slug: 'speedy-debt-apply-online', role: 'apply', title: '신속채무조정 신청방법과 비대면 접수, 상담 예약과 접수통지 시점' },
  { slug: 'speedy-debt-unemployed-homemaker', role: 'eligibility', title: '무직자와 주부도 신속채무조정 되나요, 프리랜서 소득 증빙과 무직 서류' },
  { slug: 'speedy-debt-conditions-income-asset', role: 'eligibility', title: '신속채무조정 조건은 연체 며칠부터인가요, 소득 기준과 재산 요건까지' },
  { slug: 'speedy-debt-vs-pre-workout', role: 'compare', title: '신속채무조정과 프리워크아웃 차이, 대상자 기준부터 지원 내용까지 비교' },
  { slug: 'personal-rehabilitation-eligibility', role: 'target', title: '개인회생 자격·부채한도, 담보 15억·무담보 10억', content: '소득 있는 급여/영업소득자, 담보 15억·무담보 10억 이하. 3~5년 변제 후 면책.' },
  { slug: 'bankruptcy-discharge', role: 'compare', title: '개인파산·면책, 개인회생과 차이와 비면책채권', content: '갚을 능력 없을 때 재산 청산 후 면책(법원). 세금·벌금 등 비면책채권.' },
  { slug: 'credit-recovery-workout', role: 'apply', title: '신용회복위원회 워크아웃(채무조정), 이자 감면·상환 연장', content: '법원 아닌 신복위 채무조정. 연체 단계별 유형. 감면율은 신복위 확인.' },
  { slug: 'debt-relief-comparison', role: 'overlap', title: '개인회생 vs 개인파산 vs 워크아웃, 뭘 골라야 하나', content: '소득 있음→개인회생, 이자 조정→워크아웃, 갚기 불가→개인파산.' },
  { slug: 'rehabilitation-repayment-change', role: 'apply', title: '개인회생 변제계획 변경·수입 변동 대응(§610·§619)', content: '수입 감소 등 사정 변경 시 변제계획 변경. 폐지·특별면책 대응.' },
  { slug: 'rehabilitation-documents', role: 'apply', title: '개인회생 신청서류·채권자목록·변제계획안(§589)', content: '신청서+채권자목록·재산목록·수입지출·변제계획안·진술서.' },
  { slug: 'rehabilitation-discharge', role: 'target', title: '개인회생 면책, 변제 다 못해도 받는 특별면책(§624)', content: '변제 완료 시 면책. 책임 없는 사유+청산가치 이상이면 특별면책. 세금·벌금 등 비면책.' },
  { slug: 'rehabilitation-asset-treatment', role: 'target', title: '개인회생하면 집·차 뺏기나? 재산 유지·압류 중지', content: '재산 청산 안 하고 보유하며 변제. 개시결정 시 압류·경매 중지(§600). 청산가치 보장(§614).' },
  { slug: 'personal-bankruptcy-eligibility', role: 'compare', title: '개인파산 자격조건과 불이익, 누가 신청하나', content: '지급불능 상태의 개인. 복권 전 자격 제한(본인 한정). 면책까지 받아야 책임 면제(§566).' },
  { slug: 'personal-bankruptcy-procedure', role: 'compare', title: '개인파산 절차와 기간, 신청부터 면책까지', content: '신청→파산선고 결정→동시폐지(§317)/파산관재인(§312)→면책(§566).' },
  { slug: 'speedy-debt-adjustment', role: 'apply', title: '신속채무조정, 연체 30일 이하인데 벌써 신청되나요?', content: '연체 30일 이하(또는 연체 전 6개 요건), 이자 30~50% 인하, 최장 10년 분할, 추심 즉시 중단.' },
  { slug: 'stage-comparison', role: 'overlap', title: '신속·사전채무조정·개인워크아웃, 연체 며칠이면 뭘 신청하나요?', content: '연체 30일/31~89일/90일 이상 기준 3단계 비교. 이자조정→원금조정으로 성격 변화.' },
];
