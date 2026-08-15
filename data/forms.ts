/* 서식 다운로드 페이지 데이터 (2026-08-15 신설)
 *
 * 왜 페이지를 따로 두나
 *   글 본문에서 PDF 직링크로 바로 내려받게 하면 노출 슬롯이 한 세트로 끝난다.
 *   글 → 양식 페이지 → 다운로드 로 한 단계를 두면 페이지가 하나 더 열리므로
 *   광고 노출과 전면광고 기회가 한 번 더 생기고, "○○ 서식 다운로드" 검색도 이 페이지가 받는다.
 *
 * 모든 수치는 국가법령정보센터 원문(PDF) 대조 — 근거는 각 스포크 팩트시트에 있다.
 */

export type FormEntry = {
  slug: string;
  name: string;          // 서식 이름
  formNo: string;        // 별지 번호
  law: string;           // 근거 법령
  revised: string;       // 서식 개정일
  pages: number;         // 쪽수
  pdf: string;           // 국가법령정보센터 다운로드 직링크
  viewer: string;        // 뷰어(원문 확인용)
  who: string;           // 누가 쓰는 서식인가
  where: string;         // 어디에 내는가
  note: string;          // 이 서식에서 가장 자주 틀리는 지점
  tips: string[];        // 작성 전 확인할 것 2~3개
  article: string;       // 이 서식을 다루는 글 (내부 이동)
  articleLabel: string;
};

const LAW = '노인장기요양보험법 시행규칙';
const V = (bylNo: string) =>
  `https://www.law.go.kr/LSW/lsBylInfoPLinkR.do?lsiSeq=0&bylNo=${bylNo}&bylBrNo=00&bylCls=BF&bylEfYd=&bylEfYdYn=Y&lsNm=%EB%85%B8%EC%9D%B8%EC%9E%A5%EA%B8%B0%EC%9A%94%EC%96%91%EB%B3%B4%ED%97%98%EB%B2%95%20%EC%8B%9C%ED%96%89%EA%B7%9C%EC%B9%99`;

export const FORMS: FormEntry[] = [
  {
    slug: 'ltci-application',
    name: '장기요양인정 신청서',
    formNo: '별지 제1호의2서식',
    law: LAW,
    revised: '2022. 12. 30.',
    pages: 3,
    pdf: 'https://www.law.go.kr/LSW/flDownload.do?flSeq=159225813&bylClsCd=110202',
    viewer: V('0001'),
    who: '등급을 받으려는 어르신 본인 또는 대리인',
    where: '국민건강보험공단 (처리기간 30일)',
    note: '실제 거주지를 비워 두면 방문조사와 판정결과 우편물이 주민등록지로 갑니다.',
    tips: [
      '인정·갱신·등급변경·급여종류변경 네 가지가 한 장이라 맨 위 체크만 바꾸면 됩니다',
      '접수번호와 접수일시 칸은 공단이 적으니 비워 둡니다',
      '65세 미만이면 3쪽 노인성 질병 목록에 해당해야 신청됩니다',
    ],
    article: '/policy/ltci-application-form',
    articleLabel: '신청서 작성법 자세히 보기',
  },
  {
    slug: 'ltci-doctor-opinion',
    name: '의사소견서',
    formNo: '별지 제2호서식',
    law: LAW,
    revised: '2022. 12. 30.',
    pages: 4,
    pdf: 'https://www.law.go.kr/LSW/flDownload.do?flSeq=159225823&bylClsCd=110202',
    viewer: V('0002'),
    who: '의사 또는 한의사가 작성 (어르신이 직접 진료를 받아야 함)',
    where: '국민건강보험공단 — 등급판정위원회 제출용',
    note: '유효기간이 발급일부터 30일입니다. 미리 떼어 두면 그새 지나 다시 받게 됩니다.',
    tips: [
      '최근 3개월 이상 진료를 담당한 의사가 쓰는 것이 권고됩니다',
      '보호자 대리진료로는 작성되지 않습니다',
      '진찰료 외 검사비용은 신청인 부담이라고 서식에 적혀 있습니다',
    ],
    article: '/policy/ltci-doctor-opinion-form',
    articleLabel: '소견서 항목 전체 보기',
  },
  {
    slug: 'ltci-opinion-referral',
    name: '의사소견서 발급의뢰서',
    formNo: '별지 제3호서식',
    law: LAW,
    revised: '2019. 6. 12.',
    pages: 1,
    pdf: 'https://www.law.go.kr/LSW/flDownload.do?flSeq=159225835',
    viewer: V('0003'),
    who: '국민건강보험공단이 발행 (신청인이 작성하는 서식이 아님)',
    where: '병원 접수처에 제시',
    note: '이 종이를 내면 병원은 본인부담분만 받고 나머지는 공단에 청구합니다.',
    tips: [
      '본인부담은 일반 20%, 경감대상자 10%, 의료급여 일부는 면제입니다',
      '치매진단 확인이 필요하면 보완 서류 칸이 예로 표시되어 옵니다',
      '창구에서 전액을 요구받으면 의뢰서를 제시했는지 확인하세요',
    ],
    article: '/policy/ltci-opinion-referral',
    articleLabel: '본인부담 구분 보기',
  },
  {
    slug: 'ltci-survey-sheet',
    name: '장기요양인정조사표',
    formNo: '별지 제5호서식',
    law: LAW,
    revised: '2025. 12. 12.',
    pages: 8,
    pdf: 'https://www.law.go.kr/LSW/flDownload.do?flSeq=159225849',
    viewer: V('0005'),
    who: '국민건강보험공단 조사원이 방문조사 때 작성',
    where: '공단 내부 — 등급판정 자료',
    note: '대부분 최근 한 달 기준으로 평가합니다. 조사 당일 컨디션이 기준이 아닙니다.',
    tips: [
      '신체 13·사회 10·인지 10·행동 22·간호 10 항목이 정해져 있습니다',
      '간호처치 영역만 최근 2주 기준입니다',
      '재활 항목은 직접 움직여 보게 한 뒤 표시합니다',
    ],
    article: '/policy/ltci-survey-sheet',
    articleLabel: '조사 항목 전부 보기',
  },
  {
    slug: 'ltci-care-plan',
    name: '개인별장기요양이용계획서',
    formNo: '별지 제7호서식',
    law: LAW,
    revised: '2021. 6. 30.',
    pages: 1,
    pdf: 'https://www.law.go.kr/LSW/flDownload.do?flSeq=159225875',
    viewer: V('0007'),
    who: '국민건강보험공단이 발급 (등급 판정 후 인정서와 함께)',
    where: '장기요양기관과 계약할 때 제시',
    note: '보관용이 아닙니다. 계약 자리에 가져가라고 서식 첫 줄에 적혀 있습니다.',
    tips: [
      '재가급여 월 한도액과 본인부담률(발급일 기준)이 적힙니다',
      '시설급여는 다섯 유형으로 나뉘어 1일당 금액이 들어갑니다',
      '기관 계약서의 횟수·금액을 이 표와 대조하세요',
    ],
    article: '/policy/ltci-care-plan',
    articleLabel: '계약 전 확인할 칸 보기',
  },
  {
    slug: 'ltci-agent-designation',
    name: '대리인 지정서',
    formNo: '별지 제9호서식',
    law: LAW,
    revised: '2019. 6. 12.',
    pages: 1,
    pdf: 'https://www.law.go.kr/LSW/flDownload.do?flSeq=159225887',
    viewer: V('0009'),
    who: '시장·군수·구청장이 발행',
    where: '국민건강보험공단 이사장',
    note: '가족·친족이 계시면 이 종이 없이 신분증만으로 대리 신청이 됩니다.',
    tips: [
      '가족·사회복지전담공무원이 신청할 수 없을 때의 경로입니다',
      '인정·갱신·등급변경·급여종류변경 신청을 대리할 수 있습니다',
      '가족요양비 신청 때도 이 지정서 1부를 냅니다',
    ],
    article: '/policy/ltci-agent-designation',
    articleLabel: '지정 순서 자세히 보기',
  },
  {
    slug: 'ltci-family-care-benefit',
    name: '가족요양비 지급 신청서',
    formNo: '별지 제17호서식',
    law: LAW,
    revised: '2021. 1. 18.',
    pages: 3,
    pdf: 'https://www.law.go.kr/LSW/flDownload.do?flSeq=159226007',
    viewer: V('0017'),
    who: '수급자 본인 또는 대리인',
    where: '국민건강보험공단 (처리기간 30일 · 수수료 없음)',
    note: '지급계좌는 반드시 수급자 본인 명의여야 합니다. 자녀 계좌면 지급되지 않습니다.',
    tips: [
      '신청 사유는 도서·벽지, 천재지변, 신체·정신·성격 등 세 가지뿐입니다',
      '받으면 재가·시설급여는 함께 못 받고 복지용구만 예외입니다',
      '변경신청 없이 다른 급여를 쓰면 비용 전액 본인 부담입니다',
    ],
    article: '/policy/ltci-family-care-benefit-form',
    articleLabel: '못 받는 급여 확인하기',
  },
  {
    slug: 'ltci-nursing-order',
    name: '방문간호지시서 (의사·한의사용)',
    formNo: '별지 제29호서식',
    law: LAW,
    revised: '2019. 6. 12.',
    pages: 1,
    pdf: 'https://www.law.go.kr/LSW/flDownload.do?flSeq=159226151',
    viewer: V('0029'),
    who: '의사 또는 한의사가 작성',
    where: '방문간호를 제공할 장기요양기관',
    note: '유효기간이 발급일부터 180일입니다. 소견서(30일)와 헷갈리기 쉽습니다.',
    tips: [
      '방문간격이 주 몇 회로 적히고 그 숫자가 이용 횟수의 기준입니다',
      '환자내원과 의사방문 두 가지가 모두 인정됩니다',
      '치과 영역은 별지 제30호서식으로 갈립니다',
    ],
    article: '/policy/ltci-nursing-order',
    articleLabel: '지시 항목 전부 보기',
  },
  {
    slug: 'ltci-review-request',
    name: '심사청구서',
    formNo: '별지 제32호서식',
    law: LAW,
    revised: '2021. 6. 30.',
    pages: 2,
    pdf: 'https://www.law.go.kr/LSW/flDownload.do?flSeq=159226171',
    viewer: V('0032'),
    who: '공단 처분에 이의가 있는 수급자·기관',
    where: '국민건강보험공단 이사장 (처리기간 60일)',
    note: '처분이 있음을 안 날부터 90일 이내에 내야 합니다. 처분일부터 180일이 지나면 제기하지 못합니다.',
    tips: [
      '적는 칸은 청구인·처분의 요지·처분이 있은 날·청구 취지 네 개뿐입니다',
      '처분이 있은 날 칸이 90일 계산의 시작점입니다',
      '주장을 뒷받침할 자료를 첨부합니다',
    ],
    article: '/policy/ltci-review-request-form',
    articleLabel: '기한 계산법 보기',
  },
  {
    slug: 'ltci-rereview-request',
    name: '재심사청구서',
    formNo: '별지 제37호서식',
    law: LAW,
    revised: '2021. 6. 30.',
    pages: 2,
    pdf: 'https://www.law.go.kr/LSW/flDownload.do?flSeq=159226211',
    viewer: V('0037'),
    who: '심사청구 결정에 불복하는 사람',
    where: '보건복지부 장기요양재심사위원회 (수수료 없음)',
    note: '재심사를 거치면 행정심판은 청구할 수 없습니다. 행정소송은 따로 가능합니다.',
    tips: [
      '심사결정서를 받은 날부터 90일 이내입니다',
      '피청구인은 공단, 재결청은 보건복지부장관입니다',
      '대리인이 낼 때는 위임장과 증명 서류를 함께 제출합니다',
    ],
    article: '/policy/ltci-review-request-form',
    articleLabel: '심사청구와 차이 보기',
  },
];

export const FormsBySlug: Record<string, FormEntry> = Object.fromEntries(
  FORMS.map((f) => [f.slug, f]),
);
