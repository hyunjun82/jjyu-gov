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

/* ──────────────────────────────────────────────
 * 레지스트리 본체
 * key: 정책 slug (data/policies/*.ts 의 slug 필드와 반드시 일치)
 * ────────────────────────────────────────────── */
export const SpokesRegistry: Record<string, Record<string, SpokeData>> = {

  'youth-future-savings': {
    '출시일정':     출시일정SpokeContent,
    'vs-도약계좌':  VsLeapSpokeContent,
    '중도해지':     CancelSpokeContent,
    '기여금-계산':  ContribSpokeContent,
    '소득없으면':   NoIncomeSpokeContent,
    '대학생':       대학생SpokeContent,
    '실수령액':     실수령액SpokeContent,
    '이자소득세':   이자소득세SpokeContent,
  },

  'earned-income-tax-credit': {
    '지급일': 지급일SpokeContent,
    '조회방법': 조회방법SpokeContent,
    '환수추징': 환수추징SpokeContent,
    '신청기간': 신청기간SpokeContent,
  },

  'youth-tomorrow-savings': {
    '군인':    군인SpokeContent,
    '중도해지': 중도해지SpokeContent,
    '신청기간': 내일저축신청기간SpokeContent,
  },

  'job-seeker-benefit': {
    '자발적퇴사': 자발적퇴사SpokeContent,
    '재수급':     재수급SpokeContent,
    '알바단기':   알바단기SpokeContent,
  },

  'parent-allowance': {
    '지급금액':    부모급여지급금액SpokeContent,
    '어린이집전환': 어린이집전환SpokeContent,
    '신청지급일':  부모급여신청지급일SpokeContent,
    '육아휴직중복': 육아휴직중복SpokeContent,
  },

  'learning-card': {
    '지원금액':    지원금액SpokeContent,
    '사용처':      사용처SpokeContent,
    '재직자조건':  재직자조건SpokeContent,
    '실업급여병행': 실업급여병행SpokeContent,
  },

  'parental-leave-pay': {
    '급여계산':  급여계산SpokeContent,
    '6+6부모':   부모함께SpokeContent,
    '신청방법':  육아휴직신청방법SpokeContent,
    '회사부담':  회사부담SpokeContent,
  },

  'new-leap': {
    '신청방법':    새도약기금신청방법SpokeContent,
    '자격조건':    자격조건SpokeContent,
    '채무소각':    채무소각SpokeContent,
    '대상자조회':  대상자조회SpokeContent,
  },

  'first-meet': {
    '사용처':    첫만남사용처SpokeContent,
    '유효기간':  첫만남유효기간SpokeContent,
    '신청기한':  첫만남신청기한SpokeContent,
    '잔액조회':  첫만남잔액조회SpokeContent,
  },

  'disability-pension': {
    '장애수당-차이': 장애수당차이SpokeContent,
    '금액':          장애인연금금액SpokeContent,
    '3급기준':       장애인연금3급기준SpokeContent,
    '2026인상':      장애인연금2026인상SpokeContent,
  },

  'basic-livelihood-allowance': {
    '소득기준': 기초수급소득기준SpokeContent,
    '탈락조건': 기초수급탈락조건SpokeContent,
    '65세이상': 기초수급65세이상SpokeContent,
    '급여종류': 기초수급급여종류SpokeContent,
  },

  'energy-voucher': {
    '사용처':      에너지바우처사용처SpokeContent,
    '대상자확인':  에너지바우처대상자확인SpokeContent,
    '자동신청':    에너지바우처자동신청SpokeContent,
    '신청기간':    에너지바우처신청기간SpokeContent,
  },

  'basic-pension': {
    '수급자격':          수급자격SpokeContent,
    '금액':              금액SpokeContent,
    '소득인정액-계산':   소득인정액계산SpokeContent,
    '재산기준':          재산기준SpokeContent,
    '집-있으면':         집있으면SpokeContent,
    '신청방법':          신청방법SpokeContent,
    '국민연금-차이':     국민연금차이SpokeContent,
    '부부감액':          부부감액SpokeContent,
    '감액기준':          감액기준SpokeContent,
    '40만원인상':        금액인상SpokeContent,
    '자동지급':          자동지급SpokeContent,
    '개인연금감액':      개인연금감액SpokeContent,
  },

};
