/**
 * ── 스포크 콘텐츠 레지스트리 ──
 *
 * 정책 slug → spoke slug → SpokeData 를 한 곳에서 관리.
 *
 * ✅ 새 정책에 spoke 페이지를 추가할 때:
 *    1. app/policy/[id]/[spoke]/content/{policySlug}/{spokeSlug}.tsx 파일 생성
 *    2. 이 파일에 import 추가 후 REGISTRY 에 등록
 *
 * ❌ SpokeClient.tsx 직접 수정 금지
 *    (SpokeClient 는 이 레지스트리만 읽음)
 */

import type { SpokeData } from '@/app/policy/[id]/[spoke]/SpokeClient';

/* ── 청년미래적금 (slug: youth-future-savings) ── */
import { VsLeapSpokeContent }   from '@/app/policy/[id]/[spoke]/content/vs-도약계좌';
import { CancelSpokeContent }   from '@/app/policy/[id]/[spoke]/content/중도해지';
import { ContribSpokeContent }  from '@/app/policy/[id]/[spoke]/content/기여금계산';
import { NoIncomeSpokeContent } from '@/app/policy/[id]/[spoke]/content/소득없으면';

/* ── 청년미래적금 (slug: youth-future-savings) ── */
import { 출시일정SpokeContent } from '@/app/policy/[id]/[spoke]/content/청년미래적금/출시일정';
import { 대학생SpokeContent }   from '@/app/policy/[id]/[spoke]/content/청년미래적금/대학생';
import { 실수령액SpokeContent } from '@/app/policy/[id]/[spoke]/content/청년미래적금/실수령액';
import { 이자소득세SpokeContent } from '@/app/policy/[id]/[spoke]/content/청년미래적금/이자소득세';

/* ── 청년내일저축계좌 (slug: youth-tomorrow-savings) ── */
import { 군인SpokeContent }    from '@/app/policy/[id]/[spoke]/content/청년내일저축계좌/군인';
import { 중도해지SpokeContent } from '@/app/policy/[id]/[spoke]/content/청년내일저축계좌/중도해지';
import { 신청기간SpokeContent as 내일저축신청기간SpokeContent } from '@/app/policy/[id]/[spoke]/content/청년내일저축계좌/신청기간';

/* ── 실업급여 (slug: job-seeker-benefit) ── */
import { 자발적퇴사SpokeContent } from '@/app/policy/[id]/[spoke]/content/실업급여/자발적퇴사';
import { 재수급SpokeContent }    from '@/app/policy/[id]/[spoke]/content/실업급여/재수급';
import { 알바단기SpokeContent }  from '@/app/policy/[id]/[spoke]/content/실업급여/알바단기';

/* ── 기초연금 (slug: basic-pension) ── */
import { 수급자격SpokeContent }     from '@/app/policy/[id]/[spoke]/content/기초연금/수급자격';
import { 금액SpokeContent }         from '@/app/policy/[id]/[spoke]/content/기초연금/금액';
import { 소득인정액계산SpokeContent } from '@/app/policy/[id]/[spoke]/content/기초연금/소득인정액-계산';
import { 재산기준SpokeContent }      from '@/app/policy/[id]/[spoke]/content/기초연금/재산기준';
import { 집있으면SpokeContent }      from '@/app/policy/[id]/[spoke]/content/기초연금/집-있으면';
import { 신청방법SpokeContent }      from '@/app/policy/[id]/[spoke]/content/기초연금/신청방법';
import { 국민연금차이SpokeContent }  from '@/app/policy/[id]/[spoke]/content/기초연금/국민연금-차이';
import { 부부감액SpokeContent }      from '@/app/policy/[id]/[spoke]/content/기초연금/부부감액';
import { 감액기준SpokeContent }      from '@/app/policy/[id]/[spoke]/content/기초연금/감액기준';
import { 금액인상SpokeContent }      from '@/app/policy/[id]/[spoke]/content/기초연금/40만원인상';
import { 자동지급SpokeContent }      from '@/app/policy/[id]/[spoke]/content/기초연금/자동지급';
import { 개인연금감액SpokeContent }  from '@/app/policy/[id]/[spoke]/content/기초연금/개인연금감액';

/* ── 부모급여 (slug: parent-allowance) ── */
import { 부모급여지급금액SpokeContent }   from '@/app/policy/[id]/[spoke]/content/부모급여/지급금액';
import { 어린이집전환SpokeContent }       from '@/app/policy/[id]/[spoke]/content/부모급여/어린이집전환';
import { 부모급여신청지급일SpokeContent } from '@/app/policy/[id]/[spoke]/content/부모급여/신청지급일';
import { 육아휴직중복SpokeContent }       from '@/app/policy/[id]/[spoke]/content/부모급여/육아휴직중복';

/* ── 국민내일배움카드 (slug: learning-card) ── */
import { 지원금액SpokeContent }   from '@/app/policy/[id]/[spoke]/content/내일배움카드/지원금액';
import { 사용처SpokeContent }     from '@/app/policy/[id]/[spoke]/content/내일배움카드/사용처';
import { 재직자조건SpokeContent } from '@/app/policy/[id]/[spoke]/content/내일배움카드/재직자조건';
import { 실업급여병행SpokeContent } from '@/app/policy/[id]/[spoke]/content/내일배움카드/실업급여병행';

/* ── 육아휴직급여 (slug: parental-leave-pay) ── */
import { 급여계산SpokeContent }     from '@/app/policy/[id]/[spoke]/content/육아휴직급여/급여계산';
import { 부모함께SpokeContent }     from '@/app/policy/[id]/[spoke]/content/육아휴직급여/6+6부모';
import { 육아휴직신청방법SpokeContent } from '@/app/policy/[id]/[spoke]/content/육아휴직급여/신청방법';
import { 회사부담SpokeContent }     from '@/app/policy/[id]/[spoke]/content/육아휴직급여/회사부담';

/* ── 근로장려금 (slug: earned-income-tax-credit) ── */
import { 지급일SpokeContent } from '@/app/policy/[id]/[spoke]/content/근로장려금/지급일';
import { 조회방법SpokeContent } from '@/app/policy/[id]/[spoke]/content/근로장려금/조회방법';
import { 환수추징SpokeContent } from '@/app/policy/[id]/[spoke]/content/근로장려금/환수추징';
import { 신청기간SpokeContent } from '@/app/policy/[id]/[spoke]/content/근로장려금/신청기간';

/* ── 새도약기금 (slug: new-leap) ── */
import { 신청방법SpokeContent as 새도약기금신청방법SpokeContent } from '@/app/policy/[id]/[spoke]/content/새도약기금/신청방법';
import { 자격조건SpokeContent } from '@/app/policy/[id]/[spoke]/content/새도약기금/자격조건';
import { 채무소각SpokeContent } from '@/app/policy/[id]/[spoke]/content/새도약기금/채무소각';
import { 대상자조회SpokeContent } from '@/app/policy/[id]/[spoke]/content/새도약기금/대상자조회';

/* ── 첫만남이용권 (slug: first-meet) ── */
import { 첫만남사용처SpokeContent } from '@/app/policy/[id]/[spoke]/content/첫만남이용권/사용처';
import { 첫만남유효기간SpokeContent } from '@/app/policy/[id]/[spoke]/content/첫만남이용권/유효기간';
import { 첫만남신청기한SpokeContent } from '@/app/policy/[id]/[spoke]/content/첫만남이용권/신청기한';
import { 첫만남잔액조회SpokeContent } from '@/app/policy/[id]/[spoke]/content/첫만남이용권/잔액조회';

/* ── 장애인연금 (slug: disability-pension) ── */
import { 장애수당차이SpokeContent } from '@/app/policy/[id]/[spoke]/content/장애인연금/장애수당-차이';
import { 장애인연금금액SpokeContent } from '@/app/policy/[id]/[spoke]/content/장애인연금/금액';
import { 장애인연금3급기준SpokeContent } from '@/app/policy/[id]/[spoke]/content/장애인연금/3급기준';
import { 장애인연금2026인상SpokeContent } from '@/app/policy/[id]/[spoke]/content/장애인연금/2026인상';

/* ── 기초생활수급 (slug: basic-livelihood-allowance) ── */
import { 기초수급소득기준SpokeContent } from '@/app/policy/[id]/[spoke]/content/기초생활수급/소득기준';
import { 기초수급탈락조건SpokeContent } from '@/app/policy/[id]/[spoke]/content/기초생활수급/탈락조건';
import { 기초수급65세이상SpokeContent } from '@/app/policy/[id]/[spoke]/content/기초생활수급/65세이상';
import { 기초수급급여종류SpokeContent } from '@/app/policy/[id]/[spoke]/content/기초생활수급/급여종류';

/* ── 에너지바우처 (slug: energy-voucher) ── */
import { 에너지바우처사용처SpokeContent } from '@/app/policy/[id]/[spoke]/content/에너지바우처/사용처';
import { 에너지바우처대상자확인SpokeContent } from '@/app/policy/[id]/[spoke]/content/에너지바우처/대상자확인';
import { 에너지바우처자동신청SpokeContent } from '@/app/policy/[id]/[spoke]/content/에너지바우처/자동신청';
import { 에너지바우처신청기간SpokeContent } from '@/app/policy/[id]/[spoke]/content/에너지바우처/신청기간';

/* ── 방과후보육료 (slug: after-school-childcare-fee) ── */
import { 방과후보육료신청방법SpokeContent } from '@/app/policy/[id]/[spoke]/content/방과후보육료/신청방법';
import { 초등어린이집SpokeContent }         from '@/app/policy/[id]/[spoke]/content/방과후보육료/초등어린이집';
import { 연장보육료중복SpokeContent }       from '@/app/policy/[id]/[spoke]/content/방과후보육료/연장보육료중복';
import { 장애아대상SpokeContent }           from '@/app/policy/[id]/[spoke]/content/방과후보육료/장애아대상';

/* ── 예술인국민연금 (slug: artist-pension) ── */
import { 예술인연금신청자격SpokeContent } from '@/app/policy/[id]/[spoke]/content/예술인국민연금/신청자격기간';
import { 예술인연금신청절차SpokeContent } from '@/app/policy/[id]/[spoke]/content/예술인국민연금/신청절차';
import { 예술인연금지역가입자SpokeContent } from '@/app/policy/[id]/[spoke]/content/예술인국민연금/지역가입자';
import { 예술인연금두루누리SpokeContent }   from '@/app/policy/[id]/[spoke]/content/예술인국민연금/두루누리중복';

/* ── 출산육아기장려금 (slug: birth-care-employment-grant) ── */
import { 출산장려금사업주신청SpokeContent } from '@/app/policy/[id]/[spoke]/content/출산육아기장려금/사업주신청';
import { 출산장려금대체인력SpokeContent }   from '@/app/policy/[id]/[spoke]/content/출산육아기장려금/대체인력';
import { 출산장려금중복수령SpokeContent }   from '@/app/policy/[id]/[spoke]/content/출산육아기장려금/중복수령';
import { 출산장려금복직후지급SpokeContent } from '@/app/policy/[id]/[spoke]/content/출산육아기장려금/복직후지급';

/* ── 아이돌봄서비스 (slug: child-care-service) ── */
import { 아이돌봄본인부담금SpokeContent }   from '@/app/policy/[id]/[spoke]/content/아이돌봄서비스/본인부담금';
import { 아이돌봄소득기준SpokeContent }     from '@/app/policy/[id]/[spoke]/content/아이돌봄서비스/소득기준';
import { 아이돌봄맞벌이신청SpokeContent }   from '@/app/policy/[id]/[spoke]/content/아이돌봄서비스/맞벌이신청';
import { 아이돌봄시간제종합형SpokeContent } from '@/app/policy/[id]/[spoke]/content/아이돌봄서비스/시간제종합형';

/* ── 디딤씨앗통장 (slug: child-development-account) ── */
import { 디딤씨앗매칭신청SpokeContent }  from '@/app/policy/[id]/[spoke]/content/디딤씨앗통장/매칭신청';
import { 디딤씨앗가입자격SpokeContent }  from '@/app/policy/[id]/[spoke]/content/디딤씨앗통장/가입자격';
import { 디딤씨앗가정위탁SpokeContent }  from '@/app/policy/[id]/[spoke]/content/디딤씨앗통장/가정위탁신청';
import { 디딤씨앗해지조건SpokeContent }  from '@/app/policy/[id]/[spoke]/content/디딤씨앗통장/해지조건';

/* ── 여성장애인보육 (slug: disabled-women-childcare) ── */
import { 여성장애인우선입소신청SpokeContent }     from '@/app/policy/[id]/[spoke]/content/여성장애인보육/우선입소신청';
import { 여성장애인정원초과우선입소SpokeContent } from '@/app/policy/[id]/[spoke]/content/여성장애인보육/정원초과우선입소';
import { 여성장애인보육료비교SpokeContent }       from '@/app/policy/[id]/[spoke]/content/여성장애인보육/보육료비교';
import { 여성장애인장애아보육료기준SpokeContent } from '@/app/policy/[id]/[spoke]/content/여성장애인보육/장애아보육료기준';

/* ── 고혈압당뇨진료비 (slug: hypertension-medical-fee) ── */
import { 고혈압당뇨신청절차SpokeContent }    from '@/app/policy/[id]/[spoke]/content/고혈압당뇨진료비/신청절차';
import { 고혈압당뇨진료비절감SpokeContent }  from '@/app/policy/[id]/[spoke]/content/고혈압당뇨진료비/진료비절감';
import { 고혈압당뇨참여지역확인SpokeContent } from '@/app/policy/[id]/[spoke]/content/고혈압당뇨진료비/참여지역확인';
import { 고혈압당뇨2026변경조건SpokeContent } from '@/app/policy/[id]/[spoke]/content/고혈압당뇨진료비/2026변경조건';

/* ── 임신출산진료비 (slug: pregnancy-medical-benefit) ── */
import { 임신출산지원금액신청SpokeContent } from '@/app/policy/[id]/[spoke]/content/임신출산진료비/지원금액신청';
import { 임신출산다태아지원SpokeContent }   from '@/app/policy/[id]/[spoke]/content/임신출산진료비/다태아지원';
import { 임신출산잔액사용기간SpokeContent } from '@/app/policy/[id]/[spoke]/content/임신출산진료비/잔액사용기간';
import { 임신출산사용처범위SpokeContent }   from '@/app/policy/[id]/[spoke]/content/임신출산진료비/사용처범위';

/* ── 유아무상교육 (slug: childcare-infant-education) ── */
import { 유아무상교육기관별지원금SpokeContent }  from '@/app/policy/[id]/[spoke]/content/유아무상교육/기관별지원금';
import { 유아무상교육사립유치원4세SpokeContent } from '@/app/policy/[id]/[spoke]/content/유아무상교육/사립유치원4세';
import { 유아무상교육어린이집4세확대SpokeContent } from '@/app/policy/[id]/[spoke]/content/유아무상교육/어린이집4세확대';
import { 유아무상교육연도별일정SpokeContent }    from '@/app/policy/[id]/[spoke]/content/유아무상교육/연도별일정';

/* ── 다함께돌봄 (slug: community-care-center) ── */
import { 다함께돌봄신청이용료SpokeContent } from '@/app/policy/[id]/[spoke]/content/다함께돌봄/신청이용료';
import { 다함께돌봄방학운영SpokeContent }   from '@/app/policy/[id]/[spoke]/content/다함께돌봄/방학운영';
import { 다함께돌봄아이돌봄비교SpokeContent } from '@/app/policy/[id]/[spoke]/content/다함께돌봄/아이돌봄비교';
import { 다함께돌봄대기대안SpokeContent }   from '@/app/policy/[id]/[spoke]/content/다함께돌봄/대기대안';

/* ── 지역아동센터 (slug: community-child-center) ── */
import { 지역아동센터우리동네찾기SpokeContent }     from '@/app/policy/[id]/[spoke]/content/지역아동센터/우리동네찾기';
import { 지역아동센터맞벌이돌봄서비스SpokeContent } from '@/app/policy/[id]/[spoke]/content/지역아동센터/맞벌이돌봄서비스';
import { 지역아동센터다함께돌봄중복SpokeContent }   from '@/app/policy/[id]/[spoke]/content/지역아동센터/다함께돌봄중복';
import { 지역아동센터2026변경사항SpokeContent }     from '@/app/policy/[id]/[spoke]/content/지역아동센터/2026변경사항';

/* ── 범죄피해구조금 (slug: crime-victim-aid) ── */
import { 범죄피해구조금지급금액자격SpokeContent } from '@/app/policy/[id]/[spoke]/content/범죄피해구조금/지급금액자격';
import { 범죄피해구조금유족신청SpokeContent }     from '@/app/policy/[id]/[spoke]/content/범죄피해구조금/유족신청';
import { 범죄피해구조금2026증액기준SpokeContent } from '@/app/policy/[id]/[spoke]/content/범죄피해구조금/2026증액기준';
import { 범죄피해구조금가해자있을때SpokeContent } from '@/app/policy/[id]/[spoke]/content/범죄피해구조금/가해자있을때';

/* ── 범죄피해자생활안정비 (slug: crime-victim-stable) ── */
import { 범죄피해자생활안정비350만원신청SpokeContent }    from '@/app/policy/[id]/[spoke]/content/범죄피해자생활안정비/350만원신청';
import { 범죄피해자생활안정비5주이상치료SpokeContent }    from '@/app/policy/[id]/[spoke]/content/범죄피해자생활안정비/5주이상치료';
import { 범죄피해자생활안정비구조금중복신청SpokeContent } from '@/app/policy/[id]/[spoke]/content/범죄피해자생활안정비/구조금중복신청';
import { 범죄피해자생활안정비생계위기소득기준SpokeContent } from '@/app/policy/[id]/[spoke]/content/범죄피해자생활안정비/생계위기소득기준';

/* ── 위기청소년특별지원 (slug: crisis-youth-support) ── */
import { 위기청소년신청자격금액SpokeContent }    from '@/app/policy/[id]/[spoke]/content/위기청소년특별지원/신청자격금액';
import { 위기청소년보호자없는청소년SpokeContent } from '@/app/policy/[id]/[spoke]/content/위기청소년특별지원/보호자없는청소년';
import { 위기청소년학교밖청소년SpokeContent }    from '@/app/policy/[id]/[spoke]/content/위기청소년특별지원/학교밖청소년';
import { 위기청소년8개분야지원SpokeContent }     from '@/app/policy/[id]/[spoke]/content/위기청소년특별지원/8개분야지원';

/* ── 치매안심센터 (slug: dementia-center) ── */
import { 치매안심센터무료검사서비스SpokeContent } from '@/app/policy/[id]/[spoke]/content/치매안심센터/무료검사서비스';
import { 치매안심센터치매증상절차SpokeContent }   from '@/app/policy/[id]/[spoke]/content/치매안심센터/치매증상절차';
import { 치매안심센터검사결과정상SpokeContent }   from '@/app/policy/[id]/[spoke]/content/치매안심센터/검사결과정상';
import { 치매안심센터2026무료서비스SpokeContent } from '@/app/policy/[id]/[spoke]/content/치매안심센터/2026무료서비스';

/* ── 치매상담콜센터 (slug: dementia-helpline) ── */
import { 치매상담콜센터의심증상전화SpokeContent }   from '@/app/policy/[id]/[spoke]/content/치매상담콜센터/의심증상전화';
import { 치매상담콜센터상담범위대상SpokeContent }   from '@/app/policy/[id]/[spoke]/content/치매상담콜센터/상담범위대상';
import { 치매상담콜센터가족돌봄스트레스SpokeContent } from '@/app/policy/[id]/[spoke]/content/치매상담콜센터/가족돌봄스트레스';
import { 치매상담콜센터가족전화상담SpokeContent }   from '@/app/policy/[id]/[spoke]/content/치매상담콜센터/가족전화상담';

/* ── 기본형 공익직불제 (slug: direct-payment) ── */
import { 공익직불제2026변경기준SpokeContent }   from '@/app/policy/[id]/[spoke]/content/공익직불제/2026변경기준';
import { 공익직불제신청준비사항SpokeContent }   from '@/app/policy/[id]/[spoke]/content/공익직불제/신청준비사항';
import { 공익직불제신청절차서류SpokeContent }   from '@/app/policy/[id]/[spoke]/content/공익직불제/신청절차서류';
import { 공익직불제농외소득기준SpokeContent }   from '@/app/policy/[id]/[spoke]/content/공익직불제/농외소득기준';

/* ── 장애수당 (slug: disability-allowance) ── */
import { 장애수당장애수당연금차이SpokeContent } from '@/app/policy/[id]/[spoke]/content/장애수당/장애수당연금차이';
import { 장애수당성인수급자자격SpokeContent }   from '@/app/policy/[id]/[spoke]/content/장애수당/성인수급자자격';
import { 장애수당성인아동금액비교SpokeContent } from '@/app/policy/[id]/[spoke]/content/장애수당/성인아동금액비교';
import { 장애수당차상위추가지원SpokeContent }   from '@/app/policy/[id]/[spoke]/content/장애수당/차상위추가지원';

/* ── 장애아동수당 (slug: disability-child-allowance) ── */
import { 장애아동수당중증경증금액확인SpokeContent } from '@/app/policy/[id]/[spoke]/content/장애아동수당/중증경증금액확인';
import { 장애아동수당18세이후전환SpokeContent }     from '@/app/policy/[id]/[spoke]/content/장애아동수당/18세이후전환';
import { 장애아동수당대상조건금액SpokeContent }     from '@/app/policy/[id]/[spoke]/content/장애아동수당/대상조건금액';
import { 장애아동수당아동연금차이SpokeContent }     from '@/app/policy/[id]/[spoke]/content/장애아동수당/아동연금차이';

/* ── 드림스타트 (slug: dream-start) ── */
import { 드림스타트무료서비스내용SpokeContent }     from '@/app/policy/[id]/[spoke]/content/드림스타트/무료서비스내용';
import { 드림스타트신청자격7대영역SpokeContent }    from '@/app/policy/[id]/[spoke]/content/드림스타트/신청자격7대영역';
import { 드림스타트일반가구신청SpokeContent }       from '@/app/policy/[id]/[spoke]/content/드림스타트/일반가구신청';
import { 드림스타트지역아동센터비교SpokeContent }   from '@/app/policy/[id]/[spoke]/content/드림스타트/지역아동센터비교';

/* ── 가정폭력자립지원금 (slug: dv-shelter-leaver-aid) ── */
import { 가정폭력자립지원금퇴소후자립금조건SpokeContent }  from '@/app/policy/[id]/[spoke]/content/가정폭력자립지원금/퇴소후자립금조건';
import { 가정폭력자립지원금퇴소전챙길항목SpokeContent }    from '@/app/policy/[id]/[spoke]/content/가정폭력자립지원금/퇴소전챙길항목';
import { 가정폭력자립지원금유자녀추가지원SpokeContent }    from '@/app/policy/[id]/[spoke]/content/가정폭력자립지원금/유자녀추가지원';
import { 가정폭력자립지원금입소퇴소지원비교SpokeContent }  from '@/app/policy/[id]/[spoke]/content/가정폭력자립지원금/입소퇴소지원비교';

/* ── 계속고용장려금 (slug: elderly-continue-employ) ── */
import { 계속고용장려금정년후사업주지원금SpokeContent }    from '@/app/policy/[id]/[spoke]/content/계속고용장려금/정년후사업주지원금';
import { 계속고용장려금월30만원3년기준SpokeContent }      from '@/app/policy/[id]/[spoke]/content/계속고용장려금/월30만원3년기준';
import { 계속고용장려금재고용신청방법SpokeContent }        from '@/app/policy/[id]/[spoke]/content/계속고용장려금/재고용신청방법';
import { 계속고용장려금세가지고용방법차이SpokeContent }    from '@/app/policy/[id]/[spoke]/content/계속고용장려금/세가지고용방법차이';

/* ── 응급안전안심서비스 (slug: elderly-emergency-safety) ── */
import { 응급안전안심서비스무료신청대상장비SpokeContent }   from '@/app/policy/[id]/[spoke]/content/응급안전안심서비스/무료신청대상장비';
import { 응급안전안심서비스부모님응급신청절차SpokeContent } from '@/app/policy/[id]/[spoke]/content/응급안전안심서비스/부모님응급신청절차';
import { 응급안전안심서비스소득기준자격확인SpokeContent }  from '@/app/policy/[id]/[spoke]/content/응급안전안심서비스/소득기준자격확인';
import { 응급안전안심서비스ICT무상설치이유SpokeContent }   from '@/app/policy/[id]/[spoke]/content/응급안전안심서비스/ICT무상설치이유';

/* ── 노인일자리 (slug: elderly-job) ── */
import { 노인일자리2026유형별월급비교SpokeContent }        from '@/app/policy/[id]/[spoke]/content/노인일자리/2026유형별월급비교';
import { 노인일자리60세일하고싶다면SpokeContent }          from '@/app/policy/[id]/[spoke]/content/노인일자리/60세일하고싶다면';
import { 노인일자리공익활동사회서비스비교SpokeContent }    from '@/app/policy/[id]/[spoke]/content/노인일자리/공익활동사회서비스비교';
import { 노인일자리노인일자리취업알선차이SpokeContent }    from '@/app/policy/[id]/[spoke]/content/노인일자리/노인일자리취업알선차이';

/* ── 고용촉진장려금 (slug: employment-promotion) ── */
import { 고용촉진장려금사전신청먼저이유SpokeContent }      from '@/app/policy/[id]/[spoke]/content/고용촉진장려금/사전신청먼저이유';
import { 고용촉진장려금취약계층유형별지원금SpokeContent }  from '@/app/policy/[id]/[spoke]/content/고용촉진장려금/취약계층유형별지원금';
import { 고용촉진장려금채용지원금중복차이SpokeContent }    from '@/app/policy/[id]/[spoke]/content/고용촉진장려금/채용지원금중복차이';
import { 고용촉진장려금사전신청필수절차SpokeContent }      from '@/app/policy/[id]/[spoke]/content/고용촉진장려금/사전신청필수절차';

/* ── 꿈사다리장학사업 (slug: dream-ladder) ── */
import { 꿈사다리장학사업저소득초중고선발기준SpokeContent }   from '@/app/policy/[id]/[spoke]/content/꿈사다리장학사업/저소득초중고선발기준';
import { 꿈사다리장학사업초등대학연계지원조건SpokeContent }   from '@/app/policy/[id]/[spoke]/content/꿈사다리장학사업/초등대학연계지원조건';
import { 꿈사다리장학사업신청자격사용처안내SpokeContent }     from '@/app/policy/[id]/[spoke]/content/꿈사다리장학사업/신청자격사용처안내';
import { 꿈사다리장학사업대학생연계여부확인SpokeContent }     from '@/app/policy/[id]/[spoke]/content/꿈사다리장학사업/대학생연계여부확인';

/* ── 드림장학금 (slug: dream-scholarship) ── */
import { 드림장학금저소득고교해외유학조건SpokeContent }       from '@/app/policy/[id]/[spoke]/content/드림장학금/저소득고교해외유학조건';
import { 드림장학금기초수급차상위우수학생SpokeContent }       from '@/app/policy/[id]/[spoke]/content/드림장학금/기초수급차상위우수학생';
import { 드림장학금신청자격학업장려비SpokeContent }           from '@/app/policy/[id]/[spoke]/content/드림장학금/신청자격학업장려비';
import { 드림장학금꿈사다리드림장학금비교SpokeContent }       from '@/app/policy/[id]/[spoke]/content/드림장학금/꿈사다리드림장학금비교';

/* ── 고령운전자교통안전교육 (slug: elderly-driver-safety) ── */
import { 고령운전자교통안전교육65세75세교육차이SpokeContent }    from '@/app/policy/[id]/[spoke]/content/고령운전자교통안전교육/65세75세교육차이';
import { 고령운전자교통안전교육면허갱신75세의무확인SpokeContent } from '@/app/policy/[id]/[spoke]/content/고령운전자교통안전교육/면허갱신75세의무확인';
import { 고령운전자교통안전교육2026온라인이수방법SpokeContent }   from '@/app/policy/[id]/[spoke]/content/고령운전자교통안전교육/2026온라인이수방법';
import { 고령운전자교통안전교육65세무료75세의무비교SpokeContent } from '@/app/policy/[id]/[spoke]/content/고령운전자교통안전교육/65세무료75세의무비교';

/* ── 임대차분쟁조정위원회 (slug: rental-dispute-mediation) ── */
import { 임대차분쟁조정위원회소송없이60일분쟁해결SpokeContent } from '@/app/policy/[id]/[spoke]/content/임대차분쟁조정위원회/소송없이60일분쟁해결';
import { 임대차분쟁조정위원회보증금반환조정신청SpokeContent }   from '@/app/policy/[id]/[spoke]/content/임대차분쟁조정위원회/보증금반환조정신청';
import { 임대차분쟁조정위원회신청자격조정절차안내SpokeContent } from '@/app/policy/[id]/[spoke]/content/임대차분쟁조정위원회/신청자격조정절차안내';
import { 임대차분쟁조정위원회소송분쟁조정비교SpokeContent }     from '@/app/policy/[id]/[spoke]/content/임대차분쟁조정위원회/소송분쟁조정비교';

/* ── 채무자대리인무료지원 (slug: debtor-lawyer-free-support) ── */
import { 채무자대리인무료지원불법추심변호사무료신청SpokeContent }    from '@/app/policy/[id]/[spoke]/content/채무자대리인무료지원/불법추심변호사무료신청';
import { 채무자대리인무료지원불법사금융피해자신청SpokeContent }     from '@/app/policy/[id]/[spoke]/content/채무자대리인무료지원/불법사금융피해자신청';
import { 채무자대리인무료지원신청대상최고금리초과SpokeContent }     from '@/app/policy/[id]/[spoke]/content/채무자대리인무료지원/신청대상최고금리초과';
import { 채무자대리인무료지원채무자대리인일반변호사비교SpokeContent } from '@/app/policy/[id]/[spoke]/content/채무자대리인무료지원/채무자대리인일반변호사비교';

/* ── 출산전후휴가급여 (slug: maternity-leave-pay) ── */
import { 출산전후휴가급여2026우선지원대상기업기준SpokeContent }   from '@/app/policy/[id]/[spoke]/content/출산전후휴가급여/2026우선지원대상기업기준';
import { 출산전후휴가급여회사정부급여구간분리SpokeContent }       from '@/app/policy/[id]/[spoke]/content/출산전후휴가급여/회사정부급여구간분리';
import { 출산전후휴가급여신청방법비과세계산SpokeContent }         from '@/app/policy/[id]/[spoke]/content/출산전후휴가급여/신청방법비과세계산';
import { 출산전후휴가급여우선지원대규모기업비교SpokeContent }     from '@/app/policy/[id]/[spoke]/content/출산전후휴가급여/우선지원대규모기업비교';

/* ── 노인장기요양보험 (slug: long-term-care-elderly) ── */
import { 노인장기요양보험신청대상등급기준서비스SpokeContent }     from '@/app/policy/[id]/[spoke]/content/노인장기요양보험/신청대상등급기준서비스';
import { 노인장기요양보험2026등급1인지지원기준SpokeContent }      from '@/app/policy/[id]/[spoke]/content/노인장기요양보험/2026등급1인지지원기준';
import { 노인장기요양보험치매부모장기요양신청절차SpokeContent }   from '@/app/policy/[id]/[spoke]/content/노인장기요양보험/치매부모장기요양신청절차';
import { 노인장기요양보험시설재가본인부담금비교SpokeContent }     from '@/app/policy/[id]/[spoke]/content/노인장기요양보험/시설재가본인부담금비교';

/* ── 두루누리사회보험 (slug: durunuri-social-insurance) ── */
import { 두루누리사회보험지원대상10인미만소득기준SpokeContent }   from '@/app/policy/[id]/[spoke]/content/두루누리사회보험/지원대상10인미만소득기준';
import { 두루누리사회보험10인미만80퍼센트지원신청SpokeContent }  from '@/app/policy/[id]/[spoke]/content/두루누리사회보험/10인미만80%지원신청';
import { 두루누리사회보험2026신규가입36개월기준SpokeContent }     from '@/app/policy/[id]/[spoke]/content/두루누리사회보험/2026신규가입36개월기준';
import { 두루누리사회보험고용보험국민연금절감신청SpokeContent }   from '@/app/policy/[id]/[spoke]/content/두루누리사회보험/고용보험국민연금절감신청';

/* ── 케이패스 (slug: k-pass) ── */
import { 케이패스신청등록카드사비교SpokeContent }         from '@/app/policy/[id]/[spoke]/content/케이패스/신청등록카드사비교';
import { 케이패스모두의카드환급형비교SpokeContent }       from '@/app/policy/[id]/[spoke]/content/케이패스/모두의카드환급형비교';
import { 케이패스청년환급률30퍼센트신청방법SpokeContent } from '@/app/policy/[id]/[spoke]/content/케이패스/청년환급률30%신청방법';
import { 케이패스2026환급률일반청년저소득SpokeContent }   from '@/app/policy/[id]/[spoke]/content/케이패스/2026환급률일반청년저소득';

/* ── 주거급여 (slug: housing-benefit) ── */
import { 주거급여1인�