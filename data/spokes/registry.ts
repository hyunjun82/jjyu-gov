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

/* ── 근로장려금 (slug: earned-income-tax-credit) ── */
import { 지급일SpokeContent } from '@/app/policy/[id]/[spoke]/content/근로장려금/지급일';

/* ──────────────────────────────────────────────
 * 레지스트리 본체
 * key: 정책 slug (data/policies/*.ts 의 slug 필드와 반드시 일치)
 * ────────────────────────────────────────────── */
export const SpokesRegistry: Record<string, Record<string, SpokeData>> = {

  'youth-future-savings': {
    'vs-도약계좌':  VsLeapSpokeContent,
    '중도해지':     CancelSpokeContent,
    '기여금-계산':  ContribSpokeContent,
    '소득없으면':   NoIncomeSpokeContent,
  },

  'earned-income-tax-credit': {
    '지급일': 지급일SpokeContent,
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
  },

};
