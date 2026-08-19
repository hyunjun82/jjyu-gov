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
import { 미래적금군인SpokeContent } from '@/app/policy/[id]/[spoke]/content/청년미래적금/군인';
import { 미래적금은행별SpokeContent } from '@/app/policy/[id]/[spoke]/content/청년미래적금/은행별비교';
import { 미래적금갈아타기SpokeContent } from '@/app/policy/[id]/[spoke]/content/청년미래적금/갈아타기';
import { 미래적금정정원상복구SpokeContent } from '@/app/policy/[id]/[spoke]/content/청년미래적금/정정원상복구';
import { 미래적금우대형SpokeContent } from '@/app/policy/[id]/[spoke]/content/청년미래적금/우대형';
import { 미래적금프리랜서SpokeContent } from '@/app/policy/[id]/[spoke]/content/청년미래적금/프리랜서';
import { 장병적금은행별SpokeContent } from '@/app/policy/[id]/[spoke]/content/청년미래적금/장병적금-은행별비교';
import { 미래적금심사일정SpokeContent } from '@/app/policy/[id]/[spoke]/content/청년미래적금/심사일정';

/* ── 노령연금 감액 기준 상향 (slug: national-pension-reduction) ── */
import { 노령연금감액기준SpokeContent } from '@/app/policy/[id]/[spoke]/content/노령연금감액/감액기준';
import { 노령연금감액기간SpokeContent } from '@/app/policy/[id]/[spoke]/content/노령연금감액/감액기간';
import { 노령연금감액회피SpokeContent } from '@/app/policy/[id]/[spoke]/content/노령연금감액/감액회피';
import { 노령연금환급SpokeContent } from '@/app/policy/[id]/[spoke]/content/노령연금감액/환급';
import { 노령연금감액계산SpokeContent } from '@/app/policy/[id]/[spoke]/content/노령연금감액/감액계산';
import { 노령연금부양가족연금SpokeContent } from '@/app/policy/[id]/[spoke]/content/노령연금감액/부양가족연금';

/* ── 청년내일저축계좌 (slug: youth-tomorrow-savings) ── */
import { 군인SpokeContent }    from '@/app/policy/[id]/[spoke]/content/청년내일저축계좌/군인';
import { 중도해지SpokeContent } from '@/app/policy/[id]/[spoke]/content/청년내일저축계좌/중도해지';
import { 신청기간SpokeContent as 내일저축신청기간SpokeContent } from '@/app/policy/[id]/[spoke]/content/청년내일저축계좌/신청기간';
import { 청년내일저축가입자격SpokeContent } from '@/app/policy/[id]/[spoke]/content/청년내일저축계좌/가입자격';
import { 청년내일저축만기SpokeContent } from '@/app/policy/[id]/[spoke]/content/청년내일저축계좌/만기수령액';
import { 청년내일저축유지SpokeContent } from '@/app/policy/[id]/[spoke]/content/청년내일저축계좌/유지조건';
import { 청년내일저축비교SpokeContent } from '@/app/policy/[id]/[spoke]/content/청년내일저축계좌/비교';
import { 청년내일저축신청SpokeContent } from '@/app/policy/[id]/[spoke]/content/청년내일저축계좌/신청방법';

/* ── 실업급여 (slug: job-seeker-benefit) ── */
import { 자발적퇴사SpokeContent } from '@/app/policy/[id]/[spoke]/content/실업급여/자발적퇴사';
import { 재수급SpokeContent }    from '@/app/policy/[id]/[spoke]/content/실업급여/재수급';
import { 알바단기SpokeContent }  from '@/app/policy/[id]/[spoke]/content/실업급여/알바단기';
import { 실업급여프리랜서소득신고SpokeContent } from '@/app/policy/[id]/[spoke]/content/실업급여/프리랜서소득신고';
import { 실업급여수급자격SpokeContent } from '@/app/policy/[id]/[spoke]/content/실업급여/수급자격';
import { 실업급여수급유예SpokeContent } from '@/app/policy/[id]/[spoke]/content/실업급여/수급유예';
import { 미지급실업급여SpokeContent } from '@/app/policy/[id]/[spoke]/content/실업급여/미지급실업급여';
import { 실업급여이의제기심사청구SpokeContent } from '@/app/policy/[id]/[spoke]/content/실업급여/이의제기심사청구';
import { 실업급여해외여행SpokeContent } from '@/app/policy/[id]/[spoke]/content/실업급여/해외여행';
import { 실업급여자격증구직활동SpokeContent } from '@/app/policy/[id]/[spoke]/content/실업급여/자격증구직활동';
import { 실업급여임금체불SpokeContent } from '@/app/policy/[id]/[spoke]/content/실업급여/임금체불';
import { 실업급여동거친족SpokeContent } from '@/app/policy/[id]/[spoke]/content/실업급여/동거친족';
import { 실업급여국민취업지원중복SpokeContent } from '@/app/policy/[id]/[spoke]/content/실업급여/국민취업지원중복';
import { 실업급여실업크레딧SpokeContent } from '@/app/policy/[id]/[spoke]/content/실업급여/실업크레딧';
import { 퇴직금계산법SpokeContent } from '@/app/policy/[id]/[spoke]/content/퇴직금/계산법';
import { 퇴직금지급기한SpokeContent } from '@/app/policy/[id]/[spoke]/content/퇴직금/지급기한';
import { 퇴직금대상조건SpokeContent } from '@/app/policy/[id]/[spoke]/content/퇴직금/대상조건';
import { 퇴직금중간정산SpokeContent } from '@/app/policy/[id]/[spoke]/content/퇴직금/중간정산';
import { 퇴직금퇴직연금SpokeContent } from '@/app/policy/[id]/[spoke]/content/퇴직금/퇴직연금';
import { 퇴직금청구권SpokeContent } from '@/app/policy/[id]/[spoke]/content/퇴직금/청구권';
import { 퇴직금일용직SpokeContent } from '@/app/policy/[id]/[spoke]/content/퇴직금/일용직';
import { 퇴직금세금SpokeContent } from '@/app/policy/[id]/[spoke]/content/퇴직금/세금';
import { 채무조정개인회생자격SpokeContent } from '@/app/policy/[id]/[spoke]/content/채무조정/개인회생자격';
import { 채무조정개인파산면책SpokeContent } from '@/app/policy/[id]/[spoke]/content/채무조정/개인파산면책';
import { 채무조정워크아웃SpokeContent } from '@/app/policy/[id]/[spoke]/content/채무조정/워크아웃';
import { 채무조정차이비교SpokeContent } from '@/app/policy/[id]/[spoke]/content/채무조정/차이비교';
import { 채무조정변제변경SpokeContent } from '@/app/policy/[id]/[spoke]/content/채무조정/변제변경';
import { 채무조정신청서류SpokeContent } from '@/app/policy/[id]/[spoke]/content/채무조정/신청서류';
import { 채무조정면책SpokeContent } from '@/app/policy/[id]/[spoke]/content/채무조정/면책';
import { 채무조정재산처리SpokeContent } from '@/app/policy/[id]/[spoke]/content/채무조정/재산처리';
import { 채무조정개인파산자격SpokeContent } from '@/app/policy/[id]/[spoke]/content/채무조정/개인파산자격';
import { 채무조정개인파산절차SpokeContent } from '@/app/policy/[id]/[spoke]/content/채무조정/개인파산절차';
import { 채무조정신속채무조정SpokeContent } from '@/app/policy/[id]/[spoke]/content/채무조정/신속채무조정';
import { 채무조정단계별비교SpokeContent } from '@/app/policy/[id]/[spoke]/content/채무조정/단계별비교';
import { 상속포기기한SpokeContent } from '@/app/policy/[id]/[spoke]/content/상속포기/기한';
import { 상속포기한정승인SpokeContent } from '@/app/policy/[id]/[spoke]/content/상속포기/한정승인';
import { 상속포기특별한정승인SpokeContent } from '@/app/policy/[id]/[spoke]/content/상속포기/특별한정승인';
import { 상속포기상속순위SpokeContent } from '@/app/policy/[id]/[spoke]/content/상속포기/상속순위';
import { 상속포기서류SpokeContent } from '@/app/policy/[id]/[spoke]/content/상속포기/서류';
import { 상속분할법정상속분SpokeContent } from '@/app/policy/[id]/[spoke]/content/상속분할/법정상속분';
import { 상속분할상속재산분할SpokeContent } from '@/app/policy/[id]/[spoke]/content/상속분할/상속재산분할';
import { 상속분할유류분SpokeContent } from '@/app/policy/[id]/[spoke]/content/상속분할/유류분';
import { 상속분할상속세SpokeContent } from '@/app/policy/[id]/[spoke]/content/상속분할/상속세';
import { 전세대항력SpokeContent } from '@/app/policy/[id]/[spoke]/content/전세/대항력우선변제권';
import { 전세사기예방SpokeContent } from '@/app/policy/[id]/[spoke]/content/전세/전세사기예방';
import { 전세보증금반환SpokeContent } from '@/app/policy/[id]/[spoke]/content/전세/보증금반환';
import { 전세계약갱신SpokeContent } from '@/app/policy/[id]/[spoke]/content/전세/계약갱신증액';
import { 청년문화예술패스신청시기지원금사용기한SpokeContent } from '@/app/policy/[id]/[spoke]/content/청년문화예술패스/신청시기지원금사용기한';
import { 확정일자온라인신청SpokeContent } from '@/app/policy/[id]/[spoke]/content/전세/확정일자온라인신청';
import { 위고비실비청구기준SpokeContent } from '@/app/policy/[id]/[spoke]/content/위고비/실비청구기준';
import { 노령연금청구서류지급일SpokeContent } from '@/app/policy/[id]/[spoke]/content/노령연금/청구서류지급일';
import { 노령연금세금건강보험료SpokeContent } from '@/app/policy/[id]/[spoke]/content/노령연금/세금건강보험료';
import { 노령연금유족연금중복SpokeContent } from '@/app/policy/[id]/[spoke]/content/노령연금/유족연금중복';
import { 노령연금주택연금감액SpokeContent } from '@/app/policy/[id]/[spoke]/content/노령연금/주택연금감액';
import { 노령연금지급정지복구SpokeContent } from '@/app/policy/[id]/[spoke]/content/노령연금/지급정지복구';
import { trafficCriminal12SpokeContent } from '@/app/policy/[id]/[spoke]/content/traffic-accident/criminal-penalty-12-negligence';
import { trafficSettlementSpokeContent } from '@/app/policy/[id]/[spoke]/content/traffic-accident/settlement-criminal-agreement';
import { trafficCompensationSpokeContent } from '@/app/policy/[id]/[spoke]/content/traffic-accident/compensation-fault-ratio';
import { trafficResponseSpokeContent } from '@/app/policy/[id]/[spoke]/content/traffic-accident/accident-response-hit-and-run';
import { drunkPenaltyStandardSpokeContent } from '@/app/policy/[id]/[spoke]/content/drunk-driving/penalty-standard';
import { drunkLicenseSpokeContent } from '@/app/policy/[id]/[spoke]/content/drunk-driving/license-revocation';
import { drunkRefusalRepeatSpokeContent } from '@/app/policy/[id]/[spoke]/content/drunk-driving/breath-test-refusal-repeat';
import { drunkAccidentSpokeContent } from '@/app/policy/[id]/[spoke]/content/drunk-driving/drunk-driving-accident';
import { unpaidReportSpokeContent } from '@/app/policy/[id]/[spoke]/content/unpaid-wages/report-procedure';
import { unpaidPenaltySpokeContent } from '@/app/policy/[id]/[spoke]/content/unpaid-wages/criminal-penalty-delay-interest';
import { unpaidGuaranteeSpokeContent } from '@/app/policy/[id]/[spoke]/content/unpaid-wages/wage-guarantee-fund';
import { unpaidCivilSpokeContent } from '@/app/policy/[id]/[spoke]/content/unpaid-wages/civil-execution';
import { superIsaLaunchSpokeContent } from '@/app/policy/[id]/[spoke]/content/super-isa/launch-schedule';
import { superIsaYouthSpokeContent } from '@/app/policy/[id]/[spoke]/content/super-isa/youth-isa';
import { superIsaNationalGrowthSpokeContent } from '@/app/policy/[id]/[spoke]/content/super-isa/national-growth-isa';
import { superIsaVsExistingSpokeContent } from '@/app/policy/[id]/[spoke]/content/super-isa/vs-existing-isa';
import { kPassWhatIsModuSpokeContent } from '@/app/policy/[id]/[spoke]/content/k-pass-modu-card/what-is-modu-card';
import { kPassGeneralPlusSpokeContent } from '@/app/policy/[id]/[spoke]/content/k-pass-modu-card/general-vs-plus-type';
import { kPassRefundRateSpokeContent } from '@/app/policy/[id]/[spoke]/content/k-pass-modu-card/refund-rate-by-target';
import { kPassTemporaryBoostSpokeContent } from '@/app/policy/[id]/[spoke]/content/k-pass-modu-card/temporary-boost-2026';
import { seoulHousingEligibilitySpokeContent } from '@/app/policy/[id]/[spoke]/content/seoul-childbirth-housing-support/eligibility-requirements';
import { seoulHousingAmountPaymentSpokeContent } from '@/app/policy/[id]/[spoke]/content/seoul-childbirth-housing-support/amount-payment-method';
import { seoulHousingHowToApplySpokeContent } from '@/app/policy/[id]/[spoke]/content/seoul-childbirth-housing-support/how-to-apply';
import { seoulHousingExtensionOverlapSpokeContent } from '@/app/policy/[id]/[spoke]/content/seoul-childbirth-housing-support/extension-and-overlap';
import { hiddenInsuranceHowToFindSpokeContent } from '@/app/policy/[id]/[spoke]/content/hidden-insurance-money/how-to-find';
import { hiddenInsuranceLimitationPeriodSpokeContent } from '@/app/policy/[id]/[spoke]/content/hidden-insurance-money/limitation-period';
import { hiddenInsuranceInheritanceCheckSpokeContent } from '@/app/policy/[id]/[spoke]/content/hidden-insurance-money/inheritance-check';
import { hiddenInsuranceClaimRefundSpokeContent } from '@/app/policy/[id]/[spoke]/content/hidden-insurance-money/claim-and-refund';
import { vatRealEstateRentalErrorFixSpokeContent } from '@/app/policy/[id]/[spoke]/content/value-added-tax/real-estate-rental-error-fix';
import { voicePhishingRefundProcedureSpokeContent } from '@/app/policy/[id]/[spoke]/content/voice-phishing-crypto-refund/refund-procedure';
import { voicePhishingDecreeChangesSpokeContent } from '@/app/policy/[id]/[spoke]/content/voice-phishing-crypto-refund/decree-changes';
import { voicePhishingDeadlineMissedSpokeContent } from '@/app/policy/[id]/[spoke]/content/voice-phishing-crypto-refund/deadline-missed';
import { samsungMisoOnlineApplicationSpokeContent } from '@/app/policy/[id]/[spoke]/content/samsung-miso-finance-loan/online-application';
import { samsungMisoEligibilityDetailsSpokeContent } from '@/app/policy/[id]/[spoke]/content/samsung-miso-finance-loan/eligibility-details';
import { samsungMisoLoanProductsComparisonSpokeContent } from '@/app/policy/[id]/[spoke]/content/samsung-miso-finance-loan/loan-products-comparison';
import { samsungMisoRequiredDocumentsSpokeContent } from '@/app/policy/[id]/[spoke]/content/samsung-miso-finance-loan/required-documents';
import { samsungMisoApplicationPeriodSpokeContent } from '@/app/policy/[id]/[spoke]/content/samsung-miso-finance-loan/application-period';
import { samsungMisoUnemployedSpokeContent } from '@/app/policy/[id]/[spoke]/content/samsung-miso-finance-loan/unemployed';
import { marriageBirthMoveOnestopSpokeContent } from '@/app/policy/[id]/[spoke]/content/marriage-report/marriage-birth-move-onestop';
import { autoInsurancePremiumCalculationTipsSpokeContent } from '@/app/policy/[id]/[spoke]/content/자동차보험/보험료계산방법및절약팁';
import { autoInsurancePremiumSavingSpokeContent } from '@/app/policy/[id]/[spoke]/content/자동차보험/premium-saving-special-terms';
import { applianceRebateProgramStatusSpokeContent } from '@/app/policy/[id]/[spoke]/content/생활정보/에어컨지원금현황';
import { 실업급여상한하한SpokeContent } from '@/app/policy/[id]/[spoke]/content/실업급여/상한하한액';
import { 실업급여수령액SpokeContent } from '@/app/policy/[id]/[spoke]/content/실업급여/수령액계산';
import { 실업급여소정일수SpokeContent } from '@/app/policy/[id]/[spoke]/content/실업급여/소정급여일수';
import { 실업급여모의계산SpokeContent } from '@/app/policy/[id]/[spoke]/content/실업급여/모의계산';
import { 실업급여권고사직SpokeContent } from '@/app/policy/[id]/[spoke]/content/실업급여/권고사직';
import { 실업급여계약만료SpokeContent } from '@/app/policy/[id]/[spoke]/content/실업급여/계약만료';
import { 실업급여이직확인서SpokeContent } from '@/app/policy/[id]/[spoke]/content/실업급여/이직확인서';
import { 실업급여임신질병SpokeContent } from '@/app/policy/[id]/[spoke]/content/실업급여/임신질병';
import { 실업급여신청방법SpokeContent } from '@/app/policy/[id]/[spoke]/content/실업급여/신청방법';
import { 실업급여신청기간SpokeContent } from '@/app/policy/[id]/[spoke]/content/실업급여/신청기간';
import { 실업급여구직활동SpokeContent } from '@/app/policy/[id]/[spoke]/content/실업급여/구직활동';
import { 실업급여입금일SpokeContent } from '@/app/policy/[id]/[spoke]/content/실업급여/입금일';
import { 실업급여부정수급SpokeContent } from '@/app/policy/[id]/[spoke]/content/실업급여/부정수급';
import { 실업급여세금SpokeContent } from '@/app/policy/[id]/[spoke]/content/실업급여/세금';
import { 실업급여퇴직금SpokeContent } from '@/app/policy/[id]/[spoke]/content/실업급여/퇴직금';
import { 실업급여조기재취업SpokeContent } from '@/app/policy/[id]/[spoke]/content/실업급여/조기재취업';
import { 실업급여일용직SpokeContent } from '@/app/policy/[id]/[spoke]/content/실업급여/일용직';
import { 실업급여자영업자SpokeContent } from '@/app/policy/[id]/[spoke]/content/실업급여/자영업자';
import { 실업급여65세SpokeContent } from '@/app/policy/[id]/[spoke]/content/실업급여/65세';
import { 실업급여예술인SpokeContent } from '@/app/policy/[id]/[spoke]/content/실업급여/예술인특고';
import { 실업급여건보연금SpokeContent } from '@/app/policy/[id]/[spoke]/content/실업급여/건보국민연금';
import { 실업급여상병급여SpokeContent } from '@/app/policy/[id]/[spoke]/content/실업급여/상병급여';

/* ── 기초연금 (slug: basic-pension) ── */
import { 수급자격SpokeContent }     from '@/app/policy/[id]/[spoke]/content/기초연금/수급자격';
import { 기초연금이의신청SpokeContent } from '@/app/policy/[id]/[spoke]/content/기초연금/이의신청';
import { 금액SpokeContent }         from '@/app/policy/[id]/[spoke]/content/기초연금/금액';
import { 소득인정액계산SpokeContent } from '@/app/policy/[id]/[spoke]/content/기초연금/소득인정액-계산';
import { 재산기준SpokeContent }      from '@/app/policy/[id]/[spoke]/content/기초연금/재산기준';
import { 집있으면SpokeContent }      from '@/app/policy/[id]/[spoke]/content/기초연금/집-있으면';
import { 신청방법SpokeContent }      from '@/app/policy/[id]/[spoke]/content/기초연금/신청방법';
import { 국민연금차이SpokeContent }  from '@/app/policy/[id]/[spoke]/content/기초연금/국민연금-차이';
import { 기초연금노령연금중복신청SpokeContent } from '@/app/policy/[id]/[spoke]/content/기초연금/노령연금중복신청';
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
import { 내일배움카드지원금액SpokeContent as 지원금액SpokeContent }   from '@/app/policy/[id]/[spoke]/content/내일배움카드/지원금액';
import { 내일배움카드사용처SpokeContent as 사용처SpokeContent }     from '@/app/policy/[id]/[spoke]/content/내일배움카드/사용처';
import { 내일배움카드재직자조건SpokeContent as 재직자조건SpokeContent } from '@/app/policy/[id]/[spoke]/content/내일배움카드/재직자조건';
import { 내일배움카드실업급여병행SpokeContent as 실업급여병행SpokeContent } from '@/app/policy/[id]/[spoke]/content/내일배움카드/실업급여병행';
import { 내일배움카드신청SpokeContent } from '@/app/policy/[id]/[spoke]/content/내일배움카드/신청방법';
import { 내일배움카드유효기간SpokeContent } from '@/app/policy/[id]/[spoke]/content/내일배움카드/유효기간';
import { 내일배움카드자영업자SpokeContent } from '@/app/policy/[id]/[spoke]/content/내일배움카드/자영업자';
import { 내일배움카드자격증SpokeContent } from '@/app/policy/[id]/[spoke]/content/내일배움카드/자격증';
import { 내일배움카드장려금SpokeContent } from '@/app/policy/[id]/[spoke]/content/내일배움카드/훈련장려금';
import { 내일배움카드대상SpokeContent } from '@/app/policy/[id]/[spoke]/content/내일배움카드/대상제외';
import { 내일배움카드국취제SpokeContent } from '@/app/policy/[id]/[spoke]/content/내일배움카드/국취제';
import { 내일배움카드자비부담SpokeContent } from '@/app/policy/[id]/[spoke]/content/내일배움카드/자비부담';
import { 내일배움카드대학생SpokeContent } from '@/app/policy/[id]/[spoke]/content/내일배움카드/대학생';
import { 내일배움카드출석률패널티SpokeContent } from '@/app/policy/[id]/[spoke]/content/내일배움카드/출석률패널티';
import { 내일배움카드계약직기간제SpokeContent } from '@/app/policy/[id]/[spoke]/content/내일배움카드/계약직기간제';

/* ── 육아휴직급여 (slug: parental-leave-pay) ── */
import { 급여계산SpokeContent }     from '@/app/policy/[id]/[spoke]/content/육아휴직급여/급여계산';
import { 부모함께SpokeContent }     from '@/app/policy/[id]/[spoke]/content/육아휴직급여/6+6부모';
import { 육아휴직신청방법SpokeContent } from '@/app/policy/[id]/[spoke]/content/육아휴직급여/신청방법';
import { 회사부담SpokeContent }     from '@/app/policy/[id]/[spoke]/content/육아휴직급여/회사부담';
import { 육아휴직한부모SpokeContent } from '@/app/policy/[id]/[spoke]/content/육아휴직급여/한부모';
import { 육아휴직건강보험료SpokeContent } from '@/app/policy/[id]/[spoke]/content/육아휴직급여/건강보험료';
import { 육아휴직공무원SpokeContent } from '@/app/policy/[id]/[spoke]/content/육아휴직급여/공무원';
import { 육아휴직부정수급SpokeContent } from '@/app/policy/[id]/[spoke]/content/육아휴직급여/부정수급';
import { 육아휴직조건SpokeContent } from '@/app/policy/[id]/[spoke]/content/육아휴직급여/조건';
import { 육아휴직1년6개월SpokeContent } from '@/app/policy/[id]/[spoke]/content/육아휴직급여/1년6개월';
import { 육아휴직확인서발급SpokeContent } from '@/app/policy/[id]/[spoke]/content/육아휴직급여/확인서발급';
import { 실손보험가입조건SpokeContent } from '@/app/policy/[id]/[spoke]/content/실손보험/가입조건';
import { 실손보험비급여보장SpokeContent } from '@/app/policy/[id]/[spoke]/content/실손보험/비급여보장';
import { 실손보험갱신재가입SpokeContent } from '@/app/policy/[id]/[spoke]/content/실손보험/갱신재가입';
import { 실손보험압류SpokeContent } from '@/app/policy/[id]/[spoke]/content/실손보험/압류';
import { 실손보험중복보상SpokeContent } from '@/app/policy/[id]/[spoke]/content/실손보험/중복보상';
import { 실손보험만기SpokeContent } from '@/app/policy/[id]/[spoke]/content/실손보험/만기';
import { 실손보험청구방법SpokeContent } from '@/app/policy/[id]/[spoke]/content/실손보험/청구방법';
import { 실손보험실손24청구SpokeContent } from '@/app/policy/[id]/[spoke]/content/실손보험/실손24청구';
import { 실손보험비급여할증SpokeContent } from '@/app/policy/[id]/[spoke]/content/실손보험/비급여할증';
import { 실손보험치매보상SpokeContent } from '@/app/policy/[id]/[spoke]/content/실손보험/치매보상';
import { 실손보험간병비대안SpokeContent } from '@/app/policy/[id]/[spoke]/content/실손보험/간병비대안';
import { 실손보험치질수술SpokeContent } from '@/app/policy/[id]/[spoke]/content/실손보험/치질수술';
import { 실손보험요실금수술SpokeContent } from '@/app/policy/[id]/[spoke]/content/실손보험/요실금수술';
import { 실손보험한방병원MRISpokeContent } from '@/app/policy/[id]/[spoke]/content/실손보험/한방병원MRI';
import { 실손보험한의원청구SpokeContent } from '@/app/policy/[id]/[spoke]/content/실손보험/한의원청구';
import { 실손보험산부인과청구SpokeContent } from '@/app/policy/[id]/[spoke]/content/실손보험/산부인과청구';
import { 실손보험당뇨실비청구SpokeContent } from '@/app/policy/[id]/[spoke]/content/실손보험/당뇨실비청구';
import { 실손보험우울증공황장애실비SpokeContent } from '@/app/policy/[id]/[spoke]/content/실손보험/우울증공황장애실비';
import { 실손보험치과실비청구SpokeContent } from '@/app/policy/[id]/[spoke]/content/실손보험/치과실비청구';
import { 실손보험여드름실비청구SpokeContent } from '@/app/policy/[id]/[spoke]/content/실손보험/여드름실비청구';
import { 실손보험도수치료거절횟수SpokeContent } from '@/app/policy/[id]/[spoke]/content/실손보험/도수치료거절횟수';
import { 실손보험체외충격파한도SpokeContent } from '@/app/policy/[id]/[spoke]/content/실손보험/체외충격파한도';
import { 실손보험프롤로주사한도SpokeContent } from '@/app/policy/[id]/[spoke]/content/실손보험/프롤로주사한도';
import { 실손보험MRI공제한도SpokeContent } from '@/app/policy/[id]/[spoke]/content/실손보험/MRI공제한도';
import { 실손보험마운자로실비조건SpokeContent } from '@/app/policy/[id]/[spoke]/content/실손보험/마운자로실비조건';
import { 실손보험산재실비중복SpokeContent } from '@/app/policy/[id]/[spoke]/content/실손보험/산재실비중복';
import { 실손보험본인부담상한제환수SpokeContent } from '@/app/policy/[id]/[spoke]/content/실손보험/본인부담상한제환수';
import { 실손보험위고비질병코드SpokeContent } from '@/app/policy/[id]/[spoke]/content/실손보험/위고비질병코드';
import { 실손보험비타민주사면책SpokeContent } from '@/app/policy/[id]/[spoke]/content/실손보험/비타민주사면책';
import { 실손보험자동차보험실비중복SpokeContent } from '@/app/policy/[id]/[spoke]/content/실손보험/자동차보험실비중복';
import { 실손보험응급실실비면책SpokeContent } from '@/app/policy/[id]/[spoke]/content/실손보험/응급실실비면책';
import { 실손보험자의입원면책SpokeContent } from '@/app/policy/[id]/[spoke]/content/실손보험/자의입원면책';
import { 실손보험치과한방면책SpokeContent } from '@/app/policy/[id]/[spoke]/content/실손보험/치과한방면책';
import { 실손보험미용목적면책SpokeContent } from '@/app/policy/[id]/[spoke]/content/실손보험/미용목적면책';
import { 실손보험입원횟수판단SpokeContent } from '@/app/policy/[id]/[spoke]/content/실손보험/입원횟수판단';
import { 실손보험보험금지급기일SpokeContent } from '@/app/policy/[id]/[spoke]/content/실손보험/보험금지급기일';
import { 실손보험비중증제외항목SpokeContent } from '@/app/policy/[id]/[spoke]/content/실손보험/비중증제외항목';
import { 실손보험고지의무위반해지SpokeContent } from '@/app/policy/[id]/[spoke]/content/실손보험/고지의무위반해지';
import { 실손보험재가입거절불가SpokeContent } from '@/app/policy/[id]/[spoke]/content/실손보험/재가입거절불가';
import { 실손보험산정특례대상질환SpokeContent } from '@/app/policy/[id]/[spoke]/content/실손보험/산정특례대상질환';
import { 실손보험수족구실비청구SpokeContent } from '@/app/policy/[id]/[spoke]/content/실손보험/수족구실비청구';
import { 실손보험무지외반증실비청구SpokeContent } from '@/app/policy/[id]/[spoke]/content/실손보험/무지외반증실비청구';
import { 실손보험식중독실비청구SpokeContent } from '@/app/policy/[id]/[spoke]/content/실손보험/식중독실비청구';
import { 실손보험골절진단비청구SpokeContent } from '@/app/policy/[id]/[spoke]/content/실손보험/골절진단비청구';
import { 실손보험인공눈물실비청구SpokeContent } from '@/app/policy/[id]/[spoke]/content/실손보험/인공눈물실비청구';
import { 실손보험비염수술실비청구SpokeContent } from '@/app/policy/[id]/[spoke]/content/실손보험/비염수술실비청구';
import { 실손보험독감실비청구SpokeContent } from '@/app/policy/[id]/[spoke]/content/실손보험/독감실비청구';
import { 실손보험보청기급여SpokeContent } from '@/app/policy/[id]/[spoke]/content/실손보험/보청기급여';
import { 실손보험다이렉트비교SpokeContent } from '@/app/policy/[id]/[spoke]/content/실손보험/다이렉트비교';
import { 실손보험실효부활SpokeContent } from '@/app/policy/[id]/[spoke]/content/실손보험/실효부활';
import { 실손보험카드결제SpokeContent } from '@/app/policy/[id]/[spoke]/content/실손보험/카드결제';
import { 실손보험납입중지SpokeContent } from '@/app/policy/[id]/[spoke]/content/실손보험/납입중지';
import { 실손보험건강검진청구SpokeContent } from '@/app/policy/[id]/[spoke]/content/실손보험/건강검진청구';
import { 실손보험1세대해지판단SpokeContent } from '@/app/policy/[id]/[spoke]/content/실손보험/1세대해지판단';
import { 실손보험24세대전환판단SpokeContent } from '@/app/policy/[id]/[spoke]/content/실손보험/24세대전환판단';
import { 실손보험목디스크청구SpokeContent } from '@/app/policy/[id]/[spoke]/content/실손보험/목디스크청구';
import { 실손보험단체개인비교SpokeContent } from '@/app/policy/[id]/[spoke]/content/실손보험/단체개인비교';
import { 육아휴직분할SpokeContent } from '@/app/policy/[id]/[spoke]/content/육아휴직급여/분할';
import { 육아휴직복직SpokeContent } from '@/app/policy/[id]/[spoke]/content/육아휴직급여/복직';
import { 육아휴직연차SpokeContent } from '@/app/policy/[id]/[spoke]/content/육아휴직급여/연차';
import { 육아휴직퇴직금SpokeContent } from '@/app/policy/[id]/[spoke]/content/육아휴직급여/퇴직금';
import { 육아휴직남편SpokeContent } from '@/app/policy/[id]/[spoke]/content/육아휴직급여/남편';
import { 육아휴직계약직SpokeContent } from '@/app/policy/[id]/[spoke]/content/육아휴직급여/계약직';
import { 육아휴직퇴사SpokeContent } from '@/app/policy/[id]/[spoke]/content/육아휴직급여/퇴사';
import { 육아휴직국민연금SpokeContent } from '@/app/policy/[id]/[spoke]/content/육아휴직급여/국민연금';
import { 육아휴직12세SpokeContent } from '@/app/policy/[id]/[spoke]/content/육아휴직급여/12세';
import { 육아휴직단기SpokeContent } from '@/app/policy/[id]/[spoke]/content/육아휴직급여/단기육아휴직';

/* ── 근로장려금 (slug: earned-income-tax-credit) ── */
import { 지급일SpokeContent } from '@/app/policy/[id]/[spoke]/content/근로장려금/지급일';
import { 근로장려금신청자격SpokeContent } from '@/app/policy/[id]/[spoke]/content/근로장려금/신청자격';
import { 근로장려금반기신청SpokeContent } from '@/app/policy/[id]/[spoke]/content/근로장려금/반기신청';
import { 근로장려금신청방법SpokeContent } from '@/app/policy/[id]/[spoke]/content/근로장려금/신청방법';
import { 근로장려금이의신청SpokeContent } from '@/app/policy/[id]/[spoke]/content/근로장려금/이의신청';
import { 근로장려금가구구분SpokeContent } from '@/app/policy/[id]/[spoke]/content/근로장려금/가구구분';
import { 조회방법SpokeContent } from '@/app/policy/[id]/[spoke]/content/근로장려금/조회방법';
import { 환수추징SpokeContent } from '@/app/policy/[id]/[spoke]/content/근로장려금/환수추징';
import { 신청기간SpokeContent } from '@/app/policy/[id]/[spoke]/content/근로장려금/신청기간';
import { 자녀장려금SpokeContent } from '@/app/policy/[id]/[spoke]/content/근로장려금/자녀장려금';
import { 장려금모의계산SpokeContent } from '@/app/policy/[id]/[spoke]/content/근로장려금/모의계산';
import { 장려금자동신청SpokeContent } from '@/app/policy/[id]/[spoke]/content/근로장려금/자동신청';
import { 장려금지급제외SpokeContent } from '@/app/policy/[id]/[spoke]/content/근로장려금/지급제외';

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
import { 첫만남카드사별잔액조회SpokeContent } from '@/app/policy/[id]/[spoke]/content/첫만남이용권/카드사별잔액조회';
import { 국가장학금지원구간최신화SpokeContent } from '@/app/policy/[id]/[spoke]/content/국가장학금/지원구간최신화';

/* ── 장애인연금 (slug: disability-pension) ── */
import { 장애수당차이SpokeContent } from '@/app/policy/[id]/[spoke]/content/장애인연금/장애수당-차이';
import { 장애인연금금액SpokeContent } from '@/app/policy/[id]/[spoke]/content/장애인연금/금액';
import { 장애인연금3급기준SpokeContent } from '@/app/policy/[id]/[spoke]/content/장애인연금/3급기준';
import { 전세보증가입방법환급SpokeContent } from '@/app/policy/[id]/[spoke]/content/전세보증금반환보증/가입방법환급';
import { 연금저축세대별비교SpokeContent } from '@/app/policy/[id]/[spoke]/content/연금저축/세대별비교';
import { 장애인연금모의계산SpokeContent } from '@/app/policy/[id]/[spoke]/content/장애인연금/모의계산';
import { 장애인연금2026인상SpokeContent } from '@/app/policy/[id]/[spoke]/content/장애인연금/2026인상';

/* ── 기초생활수급 (slug: basic-livelihood-allowance) ── */
import { 기초수급소득기준SpokeContent } from '@/app/policy/[id]/[spoke]/content/기초생활수급/소득기준';
import { 기초수급탈락조건SpokeContent } from '@/app/policy/[id]/[spoke]/content/기초생활수급/탈락조건';
import { 기초수급65세이상SpokeContent } from '@/app/policy/[id]/[spoke]/content/기초생활수급/65세이상';
import { 기초수급급여종류SpokeContent } from '@/app/policy/[id]/[spoke]/content/기초생활수급/급여종류';
import { 기초수급신청방법SpokeContent } from '@/app/policy/[id]/[spoke]/content/기초생활수급/신청방법';
import { 기초수급부양의무자SpokeContent } from '@/app/policy/[id]/[spoke]/content/기초생활수급/부양의무자';
import { 기초수급재산기준SpokeContent } from '@/app/policy/[id]/[spoke]/content/기초생활수급/재산기준';
import { 기초수급생계급여액SpokeContent } from '@/app/policy/[id]/[spoke]/content/기초생활수급/생계급여액';
import { 기초수급2027년인상SpokeContent } from '@/app/policy/[id]/[spoke]/content/기초생활수급/2027년인상';
import { 기초수급근로소득공제SpokeContent } from '@/app/policy/[id]/[spoke]/content/기초생활수급/근로소득공제';

/* ── 에너지바우처 (slug: energy-voucher) ── */
import { 에너지바우처사용처SpokeContent } from '@/app/policy/[id]/[spoke]/content/에너지바우처/사용처';
import { 에너지바우처대상자확인SpokeContent } from '@/app/policy/[id]/[spoke]/content/에너지바우처/대상자확인';
import { 에너지바우처자동신청SpokeContent } from '@/app/policy/[id]/[spoke]/content/에너지바우처/자동신청';
import { 에너지바우처신청기간SpokeContent } from '@/app/policy/[id]/[spoke]/content/에너지바우처/신청기간';
import { 에너지바우처잔액SpokeContent } from '@/app/policy/[id]/[spoke]/content/에너지바우처/잔액조회';
import { 에너지바우처당겨쓰기SpokeContent } from '@/app/policy/[id]/[spoke]/content/에너지바우처/당겨쓰기';
import { 에너지바우처전기할인SpokeContent } from '@/app/policy/[id]/[spoke]/content/에너지바우처/전기요금할인';
import { 에너지바우처냉방지원금SpokeContent } from '@/app/policy/[id]/[spoke]/content/에너지바우처/냉방지원금';
import { 에너지바우처연탄전환SpokeContent } from '@/app/policy/[id]/[spoke]/content/에너지바우처/연탄전환';
import { 에너지바우처신청방법SpokeContent } from '@/app/policy/[id]/[spoke]/content/에너지바우처/신청방법';
/* ── 고효율가전 (slug: efficient-appliance-support) ── */
import { 효율가전대상SpokeContent } from '@/app/policy/[id]/[spoke]/content/고효율가전/대상';
import { 효율가전환급률SpokeContent } from '@/app/policy/[id]/[spoke]/content/고효율가전/환급률';
import { 효율가전품목SpokeContent } from '@/app/policy/[id]/[spoke]/content/고효율가전/품목';
import { 효율가전신청SpokeContent } from '@/app/policy/[id]/[spoke]/content/고효율가전/신청방법';
import { 효율가전에어컨SpokeContent } from '@/app/policy/[id]/[spoke]/content/고효율가전/에어컨';
/* ── 냉난방비 지원기관 안내 (slug: nationwide-energy-support-guide) ── */
import { 냉난방비냉방SpokeContent } from '@/app/policy/[id]/[spoke]/content/냉난방비안내/냉방비';
import { 냉난방비난방SpokeContent } from '@/app/policy/[id]/[spoke]/content/냉난방비안내/난방비';
import { 냉난방비문의SpokeContent } from '@/app/policy/[id]/[spoke]/content/냉난방비안내/문의처';
/* ── 노인맞춤 돌봄서비스 (slug: senior-customized-care) ── */
import { 노인맞춤돌봄신청자격SpokeContent } from '@/app/policy/[id]/[spoke]/content/노인맞춤돌봄/신청자격';
import { 노인맞춤돌봄서비스SpokeContent } from '@/app/policy/[id]/[spoke]/content/노인맞춤돌봄/서비스내용';
import { 노인맞춤돌봄신청방법SpokeContent } from '@/app/policy/[id]/[spoke]/content/노인맞춤돌봄/신청방법';
import { 노인맞춤돌봄특화SpokeContent } from '@/app/policy/[id]/[spoke]/content/노인맞춤돌봄/특화서비스';
import { 노인맞춤돌봄생활지원사SpokeContent } from '@/app/policy/[id]/[spoke]/content/노인맞춤돌봄/생활지원사';

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
import { 출산전후휴가기간SpokeContent }      from '@/app/policy/[id]/[spoke]/content/출산전후휴가급여/leave-period';
import { 출산전후휴가확인서SpokeContent }    from '@/app/policy/[id]/[spoke]/content/출산전후휴가급여/employer-confirmation';
import { 출산전후휴가급여회사정부급여구간분리SpokeContent }       from '@/app/policy/[id]/[spoke]/content/출산전후휴가급여/회사정부급여구간분리';
import { 출산전후휴가급여신청방법비과세계산SpokeContent }         from '@/app/policy/[id]/[spoke]/content/출산전후휴가급여/신청방법비과세계산';
import { 출산전후휴가급여우선지원대규모기업비교SpokeContent }     from '@/app/policy/[id]/[spoke]/content/출산전후휴가급여/우선지원대규모기업비교';

/* ── 노인장기요양보험 (slug: long-term-care-elderly) ── */
import { 노인장기요양보험신청대상등급기준서비스SpokeContent }     from '@/app/policy/[id]/[spoke]/content/노인장기요양보험/신청대상등급기준서비스';
import { 노인장기요양보험2026등급1인지지원기준SpokeContent }      from '@/app/policy/[id]/[spoke]/content/노인장기요양보험/2026등급1인지지원기준';
import { 노인장기요양보험치매부모장기요양신청절차SpokeContent }   from '@/app/policy/[id]/[spoke]/content/노인장기요양보험/치매부모장기요양신청절차';
import { 노인장기요양보험시설재가본인부담금비교SpokeContent }     from '@/app/policy/[id]/[spoke]/content/노인장기요양보험/시설재가본인부담금비교';
import { 장기요양기관계약체결SpokeContent } from '@/app/policy/[id]/[spoke]/content/노인장기요양/기관계약체결';
import { 장기요양인정조사항목SpokeContent } from '@/app/policy/[id]/[spoke]/content/노인장기요양/인정조사항목';

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
import { 케이패스환급일SpokeContent }        from '@/app/policy/[id]/[spoke]/content/케이패스/refund-payment-date';
import { 케이패스카드변경SpokeContent }      from '@/app/policy/[id]/[spoke]/content/케이패스/card-change';
import { 케이패스시차출퇴근SpokeContent }    from '@/app/policy/[id]/[spoke]/content/케이패스/off-peak-bonus';
import { 케이패스기후동행비교SpokeContent }  from '@/app/policy/[id]/[spoke]/content/케이패스/vs-climate-card';
import { 케이패스카드등록SpokeContent }      from '@/app/policy/[id]/[spoke]/content/케이패스/card-register';

/* ── 주거급여 (slug: housing-benefit) ── */
import { 주거급여1인가구소득기준임차급여SpokeContent }    from '@/app/policy/[id]/[spoke]/content/주거급여/1인가구소득기준임차급여';
import { 주거급여기초수급자임차급여신청SpokeContent }     from '@/app/policy/[id]/[spoke]/content/주거급여/기초수급자임차급여신청';
import { 주거급여중위소득48이하신청기준SpokeContent }     from '@/app/policy/[id]/[spoke]/content/주거급여/중위소득48이하신청기준';
import { 주거급여임차수선유지급여비교SpokeContent }       from '@/app/policy/[id]/[spoke]/content/주거급여/임차수선유지급여비교';

/* ── 배우자출산휴가급여 (slug: spouse-birth-leave-pay) ── */
import { 배우자출산휴가급여배우자출산휴가급여20일유급기준SpokeContent } from '@/app/policy/[id]/[spoke]/content/배우자출산휴가급여/배우자출산휴가급여20일유급기준';
import { 배우자출산휴가급여회사지급정부지원구분SpokeContent }           from '@/app/policy/[id]/[spoke]/content/배우자출산휴가급여/회사지급정부지원구분';
import { 배우자출산휴가급여급여상한액우선지원신청SpokeContent }         from '@/app/policy/[id]/[spoke]/content/배우자출산휴가급여/급여상한액우선지원신청';
import { 배우자출산휴가급여120일분할신청기한SpokeContent }             from '@/app/policy/[id]/[spoke]/content/배우자출산휴가급여/120일분할신청기한';
import { 배우자출산휴가급여확대SpokeContent }                        from '@/app/policy/[id]/[spoke]/content/배우자출산휴가급여/배우자휴가확대';

/* ── 주택연금 (slug: home-equity-pension) ── */
import { 주택연금55세가입조건신청방법SpokeContent }   from '@/app/policy/[id]/[spoke]/content/주택연금/55세가입조건신청방법';
import { 주택연금3억6억10억월수령액SpokeContent }    from '@/app/policy/[id]/[spoke]/content/주택연금/3억6억10억월수령액';
import { 주택연금기초연금중복감액여부SpokeContent }  from '@/app/policy/[id]/[spoke]/content/주택연금/기초연금중복감액여부';
import { 주택연금해지단점주의사항SpokeContent }      from '@/app/policy/[id]/[spoke]/content/주택연금/해지단점주의사항';

/* ── 국민행복카드 (slug: national-happiness-card) ── */
import { 국민행복카드발급조건카드사신청SpokeContent }       from '@/app/policy/[id]/[spoke]/content/국민행복카드/발급조건카드사신청';
import { 국민행복카드23종바우처사용처잔액조회SpokeContent } from '@/app/policy/[id]/[spoke]/content/국민행복카드/23종바우처사용처잔액조회';
import { 국민행복카드임신확인후발급순서SpokeContent }       from '@/app/policy/[id]/[spoke]/content/국민행복카드/임신확인후발급순서';
import { 국민행복카드남편명의부부중누가신청SpokeContent }   from '@/app/policy/[id]/[spoke]/content/국민행복카드/남편명의부부중누가신청';

/* ── 재난적의료비 (slug: catastrophic-medical-expenses) ── */
import { 재난적의료비중위소득100이하신청자격SpokeContent }     from '@/app/policy/[id]/[spoke]/content/재난적의료비/중위소득100이하신청자격';
import { 재난적의료비지원금액본인부담50퍼센트SpokeContent }   from '@/app/policy/[id]/[spoke]/content/재난적의료비/지원금액본인부담50퍼센트';
import { 재난적의료비암뇌혈관희귀질환신청SpokeContent }       from '@/app/policy/[id]/[spoke]/content/재난적의료비/암뇌혈관희귀질환신청';
import { 재난적의료비본인부담상한제중복가능여부SpokeContent } from '@/app/policy/[id]/[spoke]/content/재난적의료비/본인부담상한제중복가능여부';

/* ── 산모신생아건강관리 (slug: maternal-newborn-care) ── */
import { 산모신생아건강관리2026본인부담금중위소득별SpokeContent }     from '@/app/policy/[id]/[spoke]/content/산모신생아건강관리/2026본인부담금중위소득별';
import { 산모신생아건강관리신청기간출산후60일절차SpokeContent }       from '@/app/policy/[id]/[spoke]/content/산모신생아건강관리/신청기간출산후60일절차';
import { 산모신생아건강관리쌍둥이희귀질환예외지원SpokeContent }       from '@/app/policy/[id]/[spoke]/content/산모신생아건강관리/쌍둥이희귀질환예외지원';
import { 산모신생아건강관리산후도우미산후조리원비용비교SpokeContent } from '@/app/policy/[id]/[spoke]/content/산모신생아건강관리/산후도우미산후조리원비용비교';

/* ── 노인 무릎인공관절 수술 지원사업 (slug: elderly-knee-surgery) ── */
import { 노인무릎인공관절신청자격만60세저소득기준SpokeContent }     from '@/app/policy/[id]/[spoke]/content/노인무릎인공관절/신청자격만60세저소득기준';
import { 노인무릎인공관절수술비지원금액한쪽120만양쪽240만SpokeContent } from '@/app/policy/[id]/[spoke]/content/노인무릎인공관절/수술비지원금액한쪽120만양쪽240만';
import { 노인무릎인공관절신청방법보건소접수절차SpokeContent }       from '@/app/policy/[id]/[spoke]/content/노인무릎인공관절/신청방법보건소접수절차';
import { 노인무릎인공관절건강보험후국가지원본인부담금SpokeContent } from '@/app/policy/[id]/[spoke]/content/노인무릎인공관절/건강보험후국가지원본인부담금';

/* ── 법률구조제도 (slug: legal-aid-system) ── */
import { 법률구조제도중위소득125이하지원대상SpokeContent }           from '@/app/policy/[id]/[spoke]/content/법률구조제도/중위소득125이하지원대상';
import { 법률구조제도무료상담신청방법전화방문온라인SpokeContent }   from '@/app/policy/[id]/[spoke]/content/법률구조제도/무료상담신청방법전화방문온라인';
import { 법률구조제도소송대리비용무료변호사지원범위SpokeContent }   from '@/app/policy/[id]/[spoke]/content/법률구조제도/소송대리비용무료변호사지원범위';
import { 법률구조제도법률구조공단vs법률홈닥터vs마을변호사SpokeContent } from '@/app/policy/[id]/[spoke]/content/법률구조제도/법률구조공단vs법률홈닥터vs마을변호사';

/* ── 서민금융통합지원센터 (slug: seomin-financial-center) ── */
import { 서민금융통합지원센터이용대상신청자격SpokeContent }         from '@/app/policy/[id]/[spoke]/content/서민금융통합지원센터/이용대상신청자격';
import { 서민금융통합지원센터예약방법앱전화온라인SpokeContent }     from '@/app/policy/[id]/[spoke]/content/서민금융통합지원센터/예약방법앱전화온라인';
import { 서민금융통합지원센터대출종류한도서민금융상품SpokeContent } from '@/app/policy/[id]/[spoke]/content/서민금융통합지원센터/대출종류한도서민금융상품';
import { 서민금융통합지원센터신용회복위원회채무조정비교SpokeContent } from '@/app/policy/[id]/[spoke]/content/서민금융통합지원센터/신용회복위원회채무조정비교';

/* ── 불법사금융예방대출 (slug: illegal-loan-prevention) ── */
import { 불법사금융예방대출신청자격신용평점하위20기준SpokeContent } from '@/app/policy/[id]/[spoke]/content/불법사금융예방대출/신청자격신용평점하위20기준';
import { 불법사금융예방대출금리한도연9912퍼센트조건SpokeContent }   from '@/app/policy/[id]/[spoke]/content/불법사금융예방대출/금리한도연9912퍼센트조건';
import { 불법사금융예방대출신청방법앱센터방문당일대출SpokeContent } from '@/app/policy/[id]/[spoke]/content/불법사금융예방대출/신청방법앱센터방문당일대출';
import { 불법사금융예방대출햇살론비교신용낮은사람유리상품SpokeContent } from '@/app/policy/[id]/[spoke]/content/불법사금융예방대출/햇살론비교신용낮은사람유리상품';

/* ── 가정양육수당 (slug: home-childcare-allowance) ── */
import { 가정양육수당어린이집보내면중단보육료전환SpokeContent } from '@/app/policy/[id]/[spoke]/content/가정양육수당/어린이집보내면중단보육료전환';
import { 가정양육수당신청방법복지로주민센터절차SpokeContent }   from '@/app/policy/[id]/[spoke]/content/가정양육수당/신청방법복지로주민센터절차';
import { 가정양육수당부모급여종료후자동전환기준SpokeContent }   from '@/app/policy/[id]/[spoke]/content/가정양육수당/부모급여종료후자동전환기준';

/* ── 에너지캐시백 (slug: energy-cashback) ── */
import { 에너지캐시백신청방법한전홈페이지절차SpokeContent }       from '@/app/policy/[id]/[spoke]/content/에너지캐시백/신청방법한전홈페이지절차';
import { 에너지캐시백캐시백금액계산3퍼센트절감기준SpokeContent } from '@/app/policy/[id]/[spoke]/content/에너지캐시백/캐시백금액계산3퍼센트절감기준';
import { 에너지캐시백신청대상주민등록주택용기준SpokeContent }     from '@/app/policy/[id]/[spoke]/content/에너지캐시백/신청대상주민등록주택용기준';
import { 에너지캐시백에너지바우처절전요금할인비교SpokeContent }   from '@/app/policy/[id]/[spoke]/content/에너지캐시백/에너지바우처절전요금할인비교';
import { 에너지캐시백하반기SpokeContent } from '@/app/policy/[id]/[spoke]/content/에너지캐시백/하반기확대';
import { 에너지캐시백아파트SpokeContent } from '@/app/policy/[id]/[spoke]/content/에너지캐시백/아파트';
import { 에너지캐시백조회SpokeContent } from '@/app/policy/[id]/[spoke]/content/에너지캐시백/조회확인';
import { 에너지캐시백단점SpokeContent } from '@/app/policy/[id]/[spoke]/content/에너지캐시백/단점';
import { 에너지캐시백슬기로운전기생활SpokeContent } from '@/app/policy/[id]/[spoke]/content/에너지캐시백/슬기로운전기생활';

/* ── 암환자의료비지원 (slug: cancer-patient-medical-aid) ── */
import { 암환자의료비지원성인중위소득120이하300만원SpokeContent }     from '@/app/policy/[id]/[spoke]/content/암환자의료비지원/성인중위소득120이하300만원';
import { 암환자의료비지원소아암3000만원18세까지조건SpokeContent }     from '@/app/policy/[id]/[spoke]/content/암환자의료비지원/소아암3000만원18세까지조건';
import { 암환자의료비지원신청방법보건소접수서류절차SpokeContent }     from '@/app/policy/[id]/[spoke]/content/암환자의료비지원/신청방법보건소접수서류절차';
import { 암환자의료비지원산정특례건강보험중복지원여부SpokeContent }   from '@/app/policy/[id]/[spoke]/content/암환자의료비지원/산정특례건강보험중복지원여부';

/* ── 영유아건강검진 (slug: infant-health-checkup) ── */
import { 영유아건강검진검진시기8회차수표SpokeContent }           from '@/app/policy/[id]/[spoke]/content/영유아건강검진/검진시기8회차수표';
import { 영유아건강검진발달이상의심시정밀검사연계SpokeContent } from '@/app/policy/[id]/[spoke]/content/영유아건강검진/발달이상의심시정밀검사연계';
import { 영유아건강검진예약방법지정기관찾기SpokeContent }       from '@/app/policy/[id]/[spoke]/content/영유아건강검진/예약방법지정기관찾기';
import { 영유아건강검진시기놓치면어떻게되나SpokeContent }       from '@/app/policy/[id]/[spoke]/content/영유아건강검진/시기놓치면어떻게되나';

/* ── 노인틀니임플란트 (slug: medical-aid-elderly-denture) ── */
import { 노인틀니임플란트1종2종본인부담5퍼15퍼비교SpokeContent }       from '@/app/policy/[id]/[spoke]/content/노인틀니임플란트/1종2종본인부담5퍼15퍼비교';
import { 노인틀니임플란트임플란트평생2개신청방법SpokeContent }         from '@/app/policy/[id]/[spoke]/content/노인틀니임플란트/임플란트평생2개신청방법';
import { 노인틀니임플란트틀니7년주기사후유지관리SpokeContent }         from '@/app/policy/[id]/[spoke]/content/노인틀니임플란트/틀니7년주기사후유지관리';
import { 노인틀니임플란트완전틀니부분틀니임플란트종류비교SpokeContent } from '@/app/policy/[id]/[spoke]/content/노인틀니임플란트/완전틀니부분틀니임플란트종류비교';

/* ── 육아기근로시간단축급여 (slug: parental-work-reduction-pay) ── */
import { 육아기근로시간단축급여급여계산10시간250만나머지160만SpokeContent } from '@/app/policy/[id]/[spoke]/content/육아기근로시간단축급여/급여계산10시간250만나머지160만';
import { 육아기근로시간단축급여신청방법eiGovKr절차SpokeContent }           from '@/app/policy/[id]/[spoke]/content/육아기근로시간단축급여/신청방법eiGovKr절차';
import { 육아기근로시간단축급여육아휴직과차이출근하면서단축SpokeContent }   from '@/app/policy/[id]/[spoke]/content/육아기근로시간단축급여/육아휴직과차이출근하면서단축';
import { 육아기근로시간단축급여자녀만12세초등6학년대상기간SpokeContent }   from '@/app/policy/[id]/[spoke]/content/육아기근로시간단축급여/자녀만12세초등6학년대상기간';

/* ── 교육급여 (slug: education-benefit) ── */
import { 교육급여초중고교육활동지원비금액표SpokeContent }     from '@/app/policy/[id]/[spoke]/content/교육급여/초중고교육활동지원비금액표';
import { 교육급여중위소득50이하신청자격확인SpokeContent }     from '@/app/policy/[id]/[spoke]/content/교육급여/중위소득50이하신청자격확인';
import { 교육급여신청방법복지로원클릭학교신청SpokeContent }   from '@/app/policy/[id]/[spoke]/content/교육급여/신청방법복지로원클릭학교신청';
import { 교육급여고교학비무상교육과중복여부SpokeContent }     from '@/app/policy/[id]/[spoke]/content/교육급여/고교학비무상교육과중복여부';

/* ── 영유아보육료 (slug: infant-childcare-fee) ── */
import { 영유아보육료연령별월51만45만38만지원금액SpokeContent } from '@/app/policy/[id]/[spoke]/content/영유아보육료/연령별월51만45만38만지원금액';
import { 영유아보육료신청방법복지로행정복지센터절차SpokeContent } from '@/app/policy/[id]/[spoke]/content/영유아보육료/신청방법복지로행정복지센터절차';
import { 영유아보육료가정양육수당어린이집보육료차이SpokeContent } from '@/app/policy/[id]/[spoke]/content/영유아보육료/가정양육수당어린이집보육료차이';
import { 영유아보육료누리과정3세5세유아학비비교SpokeContent }   from '@/app/policy/[id]/[spoke]/content/영유아보육료/누리과정3세5세유아학비비교';

/* ── 국민취업지원제도 (slug: national-employment-support) ── */
import { 국민취업지원제도구직촉진수당월60만6개월조건SpokeContent }     from '@/app/policy/[id]/[spoke]/content/국민취업지원제도/구직촉진수당월60만6개월조건';
import { 국민취업지원제도1유형2유형자격차이신청방법SpokeContent }     from '@/app/policy/[id]/[spoke]/content/국민취업지원제도/1유형2유형자격차이신청방법';
import { 국민취업지원제도취업성공수당150만원조건SpokeContent }         from '@/app/policy/[id]/[spoke]/content/국민취업지원제도/취업성공수당150만원조건';
import { 국민취업지원제도국민취업지원실업급여차이비교SpokeContent }   from '@/app/policy/[id]/[spoke]/content/국민취업지원제도/국민취업지원실업급여차이비교';
import { 국취신청SpokeContent }     from '@/app/policy/[id]/[spoke]/content/국민취업지원제도/신청방법';
import { 국취중복SpokeContent }     from '@/app/policy/[id]/[spoke]/content/국민취업지원제도/중복';
import { 국취부정수급SpokeContent } from '@/app/policy/[id]/[spoke]/content/국민취업지원제도/부정수급';
import { 국취재참여SpokeContent }   from '@/app/policy/[id]/[spoke]/content/국민취업지원제도/재참여';
import { 국취구직활동SpokeContent } from '@/app/policy/[id]/[spoke]/content/국민취업지원제도/구직활동';
import { 국취참여제외대상SpokeContent } from '@/app/policy/[id]/[spoke]/content/국민취업지원제도/참여제외대상';
/* ── 주거안정장학금 (slug: housing-scholar) ── */
import { 주거안정장학금지원금액SpokeContent } from '@/app/policy/[id]/[spoke]/content/주거안정장학금/지원금액';
import { 주거안정장학금신청자격SpokeContent } from '@/app/policy/[id]/[spoke]/content/주거안정장학금/신청자격';
import { 주거안정장학금신청방법SpokeContent } from '@/app/policy/[id]/[spoke]/content/주거안정장학금/신청방법';
import { 주거안정장학금중복SpokeContent } from '@/app/policy/[id]/[spoke]/content/주거안정장학금/중복';
import { 주거안정장학금신청기간SpokeContent } from '@/app/policy/[id]/[spoke]/content/주거안정장학금/신청기간';

/* ── 가족돌봄휴가 (slug: family-care-leave) ── */
import { 가족돌봄휴가연10일무급유급차이신청방법SpokeContent }     from '@/app/policy/[id]/[spoke]/content/가족돌봄휴가/연10일무급유급차이신청방법';
import { 가족돌봄휴가사업주거부하면어떻게하나SpokeContent }       from '@/app/policy/[id]/[spoke]/content/가족돌봄휴가/사업주거부하면어떻게하나';
import { 가족돌봄휴가돌봄가족범위부모자녀배우자SpokeContent }     from '@/app/policy/[id]/[spoke]/content/가족돌봄휴가/돌봄가족범위부모자녀배우자';
import { 가족돌봄휴가가족돌봄휴직과휴가차이장기단기SpokeContent } from '@/app/policy/[id]/[spoke]/content/가족돌봄휴가/가족돌봄휴직과휴가차이장기단기';



/* ── 아동급식카드 (slug: child-meal-card) ── */
import { 아동급식카드지원대상결식우려아동기준중위소득SpokeContent } from '@/app/policy/[id]/[spoke]/content/아동급식카드/지원대상결식우려아동기준중위소득';
import { 아동급식카드신청방법복지로주민센터절차서류SpokeContent }   from '@/app/policy/[id]/[spoke]/content/아동급식카드/신청방법복지로주민센터절차서류';
import { 아동급식카드사용처편의점가맹점하루지원금액SpokeContent }   from '@/app/policy/[id]/[spoke]/content/아동급식카드/사용처편의점가맹점하루지원금액';
import { 아동급식카드방학중지원학기중차이이용방법주의SpokeContent } from '@/app/policy/[id]/[spoke]/content/아동급식카드/방학중지원학기중차이이용방법주의';

/* ── 청년월세 특별지원 (slug: youth-monthly-rent) ── */
import { 청년월세신청자격SpokeContent } from '@/app/policy/[id]/[spoke]/content/청년월세/신청자격';
import { 청년월세소득재산기준SpokeContent } from '@/app/policy/[id]/[spoke]/content/청년월세/소득재산기준';
import { 청년월세지원금액SpokeContent } from '@/app/policy/[id]/[spoke]/content/청년월세/지원금액';
import { 청년월세신청방법SpokeContent } from '@/app/policy/[id]/[spoke]/content/청년월세/신청방법';
import { 청년월세주거급여중복SpokeContent } from '@/app/policy/[id]/[spoke]/content/청년월세/주거급여중복';
/* ── 소상공인 정책자금·지역 육성자금 (slug: small-biz-policy-fund) ── */
import { 정책자금자금종류SpokeContent } from '@/app/policy/[id]/[spoke]/content/소상공인정책자금/자금종류';
import { 정책자금일반경영안정자금SpokeContent } from '@/app/policy/[id]/[spoke]/content/소상공인정책자금/일반경영안정자금';
import { 정책자금지역신용보증재단SpokeContent } from '@/app/policy/[id]/[spoke]/content/소상공인정책자금/지역신용보증재단';
import { 정책자금신청방법SpokeContent } from '@/app/policy/[id]/[spoke]/content/소상공인정책자금/신청방법';
import { 정책자금대상자격SpokeContent } from '@/app/policy/[id]/[spoke]/content/소상공인정책자금/대상자격';
import { 소상공인정책자금사업계획서SpokeContent } from '@/app/policy/[id]/[spoke]/content/소상공인정책자금/사업계획서';
import { 소상공인정책자금직접대출대리대출SpokeContent } from '@/app/policy/[id]/[spoke]/content/소상공인정책자금/직접대출대리대출';
import { 소상공인정책자금지원대상확인서SpokeContent } from '@/app/policy/[id]/[spoke]/content/소상공인정책자금/지원대상확인서';

/* ── 근로자 생활안정자금 이차보전 (slug: worker-livelihood-interest-subsidy) ── */
import { 근로자생활안정자금혼례비SpokeContent } from '@/app/policy/[id]/[spoke]/content/근로자생활안정자금/혼례비';

/* ── HUG 전세보증금반환보증 (slug: hug-jeonse-deposit-guarantee) ── */
import { 전세보증금반환보증보증료SpokeContent } from '@/app/policy/[id]/[spoke]/content/전세보증금반환보증/보증료';

/* ── 체불근로자 생계비 융자 (slug: worker-wage-arrears-loan) ── */
import { 체불근로자생계비대지급금비교SpokeContent } from '@/app/policy/[id]/[spoke]/content/체불근로자생계비/대지급금비교';

/* ── 신용취약소상공인자금 (slug: credit-weak-smallbiz-fund) ── */
import { 신용취약소상공인자금정책우선도평가SpokeContent } from '@/app/policy/[id]/[spoke]/content/신용취약소상공인자금/정책우선도평가';

/* ── 청년고용연계자금 (slug: youth-employment-linked-fund) ── */
import { 청년고용연계자금지원대상확인서SpokeContent } from '@/app/policy/[id]/[spoke]/content/청년고용연계자금/지원대상확인서';

/* ── 혁신성장촉진자금 (slug: innovation-growth-fund) ── */
import { 혁신성장촉진자금8월10일접수SpokeContent } from '@/app/policy/[id]/[spoke]/content/혁신성장촉진자금/8월10일접수';

/* ── 재도전특별자금 (slug: restart-special-fund) ── */
import { 재도전특별자금재창업교육SpokeContent } from '@/app/policy/[id]/[spoke]/content/재도전특별자금/재창업교육';

/* ── 소공인특화자금 (slug: small-manufacturer-fund) ── */
import { 소공인특화자금운전시설구분SpokeContent } from '@/app/policy/[id]/[spoke]/content/소공인특화자금/운전시설구분';

/* ── 긴급경영안정자금 (slug: emergency-management-fund) ── */
import { 긴급경영안정자금재해확인증SpokeContent } from '@/app/policy/[id]/[spoke]/content/긴급경영안정자금/재해확인증';

/* ── 일반경영안정자금 (slug: general-management-stability-fund) ── */
import { 일반경영안정자금업력무관SpokeContent } from '@/app/policy/[id]/[spoke]/content/일반경영안정자금/업력무관';

/* ── 장애인기업지원자금 (slug: disabled-biz-support-fund) ── */
import { 장애인기업지원자금인정서류SpokeContent } from '@/app/policy/[id]/[spoke]/content/장애인기업지원자금/인정서류';

/* ── 상생성장지원자금 (slug: win-win-growth-fund) ── */
import { 상생성장지원자금플랫폼추천SpokeContent } from '@/app/policy/[id]/[spoke]/content/상생성장지원자금/플랫폼추천';

/* ── 새희망홀씨 II (slug: new-hope-holssi) ── */
import { 새희망홀씨은행선택SpokeContent } from '@/app/policy/[id]/[spoke]/content/새희망홀씨/은행선택';

/* ── 징검다리론 (slug: stepping-stone-loan) ── */
import { 징검다리론사전신청절차SpokeContent } from '@/app/policy/[id]/[spoke]/content/징검다리론/사전신청절차';

/* ── 청년전용창업자금 (slug: youth-startup-fund) ── */
import { 청년전용창업자금평가위원회SpokeContent } from '@/app/policy/[id]/[spoke]/content/청년전용창업자금/평가위원회';

/* ── 지역신용보증재단 보증 (slug: regional-credit-guarantee) ── */
import { 지역신용보증재단보증한도계산SpokeContent } from '@/app/policy/[id]/[spoke]/content/지역신용보증재단/보증한도계산';
import { 정책자금일시적경영애로자금SpokeContent } from '@/app/policy/[id]/[spoke]/content/소상공인정책자금/일시적경영애로자금';
/* ── 소상공인 카드수수료 우대·환급 (slug: card-fee-support) ── */
import { 카드수수료우대수수료율SpokeContent } from '@/app/policy/[id]/[spoke]/content/카드수수료/우대수수료율';
import { 카드수수료대상선정SpokeContent } from '@/app/policy/[id]/[spoke]/content/카드수수료/대상선정';
import { 카드수수료수수료환급SpokeContent } from '@/app/policy/[id]/[spoke]/content/카드수수료/수수료환급';
import { 카드수수료매출세액공제SpokeContent } from '@/app/policy/[id]/[spoke]/content/카드수수료/매출세액공제';
import { 카드수수료지자체지원조회SpokeContent } from '@/app/policy/[id]/[spoke]/content/카드수수료/지자체지원조회';
/* ── 소상공인 온라인 판로지원 (slug: small-biz-online-sales) ── */
import { 판로지원지원내용SpokeContent } from '@/app/policy/[id]/[spoke]/content/소상공인판로지원/지원내용';
import { 판로지원라이브커머스SpokeContent } from '@/app/policy/[id]/[spoke]/content/소상공인판로지원/라이브커머스';
import { 판로지원쇼핑몰입점SpokeContent } from '@/app/policy/[id]/[spoke]/content/소상공인판로지원/쇼핑몰입점';
import { 판로지원신청방법SpokeContent } from '@/app/policy/[id]/[spoke]/content/소상공인판로지원/신청방법';
import { 판로지원대상자격SpokeContent } from '@/app/policy/[id]/[spoke]/content/소상공인판로지원/대상자격';
/* ── 중저신용자 생활안정자금 (slug: living-stability-loan) ── */
import { 생활안정자금대상조건SpokeContent } from '@/app/policy/[id]/[spoke]/content/생활안정자금/대상조건';
import { 생활안정자금한도금리SpokeContent } from '@/app/policy/[id]/[spoke]/content/생활안정자금/한도금리';
import { 생활안정자금주택제한SpokeContent } from '@/app/policy/[id]/[spoke]/content/생활안정자금/주택제한';
import { 생활안정자금신청방법SpokeContent } from '@/app/policy/[id]/[spoke]/content/생활안정자금/신청방법';
import { 생활안정자금서민금융비교SpokeContent } from '@/app/policy/[id]/[spoke]/content/생활안정자금/서민금융비교';
/* ── 연말정산 (slug: year-end-tax) ── */
import { 연말정산일정절차SpokeContent } from '@/app/policy/[id]/[spoke]/content/연말정산/일정절차';
import { 연말정산간소화서비스SpokeContent } from '@/app/policy/[id]/[spoke]/content/연말정산/간소화서비스';
import { 연말정산공제종류SpokeContent } from '@/app/policy/[id]/[spoke]/content/연말정산/공제종류';
import { 연말정산환급전략SpokeContent } from '@/app/policy/[id]/[spoke]/content/연말정산/환급전략';
import { 연말정산경정청구SpokeContent } from '@/app/policy/[id]/[spoke]/content/연말정산/경정청구';
/* ── 신생아 특례대출 (slug: newborn-special-loan) ── */
import { 신생아특례대출대상조건SpokeContent } from '@/app/policy/[id]/[spoke]/content/신생아특례대출/대상조건';
import { 신생아특례대출기금e든든신청SpokeContent } from '@/app/policy/[id]/[spoke]/content/신생아특례대출/기금e든든신청';
import { 신생아특례대출디딤돌구입SpokeContent } from '@/app/policy/[id]/[spoke]/content/신생아특례대출/디딤돌구입';
import { 신생아특례대출버팀목전세SpokeContent } from '@/app/policy/[id]/[spoke]/content/신생아특례대출/버팀목전세';
import { 신생아특례대출금리우대SpokeContent } from '@/app/policy/[id]/[spoke]/content/신생아특례대출/금리우대';
import { 신생아특례대출신청대환SpokeContent } from '@/app/policy/[id]/[spoke]/content/신생아특례대출/신청대환';
import { 신생아특례대출신청시기생애최초SpokeContent } from '@/app/policy/[id]/[spoke]/content/신생아특례대출/신청시기생애최초';
import { 신생아특례대출특례금리종료SpokeContent } from '@/app/policy/[id]/[spoke]/content/신생아특례대출/rate-after-special';
import { 신생아특례대출준비서류SpokeContent } from '@/app/policy/[id]/[spoke]/content/신생아특례대출/documents';
/* ── 디딤돌 대출 (slug: didimdol-loan) ── */
import { 디딤돌대출대상소득SpokeContent } from '@/app/policy/[id]/[spoke]/content/디딤돌대출/대상소득';
import { 디딤돌대출한도주택가액SpokeContent } from '@/app/policy/[id]/[spoke]/content/디딤돌대출/한도주택가액';
import { 디딤돌대출금리SpokeContent } from '@/app/policy/[id]/[spoke]/content/디딤돌대출/금리';
import { 디딤돌대출생애최초신혼우대SpokeContent } from '@/app/policy/[id]/[spoke]/content/디딤돌대출/생애최초신혼우대';
import { 디딤돌대출신청SpokeContent } from '@/app/policy/[id]/[spoke]/content/디딤돌대출/신청';
/* ── 보금자리론 (slug: bogeumjari-loan) ── */
import { 보금자리론대상소득SpokeContent } from '@/app/policy/[id]/[spoke]/content/보금자리론/대상소득';
import { 보금자리론한도주택가액SpokeContent } from '@/app/policy/[id]/[spoke]/content/보금자리론/한도주택가액';
import { 보금자리론금리우대SpokeContent } from '@/app/policy/[id]/[spoke]/content/보금자리론/금리우대';
import { 보금자리론디딤돌비교SpokeContent } from '@/app/policy/[id]/[spoke]/content/보금자리론/디딤돌비교';
import { 보금자리론신청SpokeContent } from '@/app/policy/[id]/[spoke]/content/보금자리론/신청';
/* ── 중기청 전세대출 (slug: sme-youth-jeonse-loan) ── */
import { 중기청전세대상자격SpokeContent } from '@/app/policy/[id]/[spoke]/content/중기청전세/대상자격';
import { 중기청전세한도보증금SpokeContent } from '@/app/policy/[id]/[spoke]/content/중기청전세/한도보증금';
import { 중기청전세금리SpokeContent } from '@/app/policy/[id]/[spoke]/content/중기청전세/금리';
import { 중기청전세기간연장SpokeContent } from '@/app/policy/[id]/[spoke]/content/중기청전세/기간연장';
import { 중기청전세신청방법SpokeContent } from '@/app/policy/[id]/[spoke]/content/중기청전세/신청방법';
/* ── 햇살론일반 (slug: sunshine-loan-general) ── */
import { 햇살론일반대상자격SpokeContent } from '@/app/policy/[id]/[spoke]/content/햇살론일반/대상자격';
import { 햇살론일반한도금리SpokeContent } from '@/app/policy/[id]/[spoke]/content/햇살론일반/한도금리';
import { 햇살론일반보증료우대SpokeContent } from '@/app/policy/[id]/[spoke]/content/햇살론일반/보증료우대';
import { 햇살론일반햇살론비교SpokeContent } from '@/app/policy/[id]/[spoke]/content/햇살론일반/햇살론비교';
import { 햇살론일반신청방법SpokeContent } from '@/app/policy/[id]/[spoke]/content/햇살론일반/신청방법';
/* ── 햇살론특례 (slug: sunshine-loan-special) ── */
import { 햇살론특례대상자격SpokeContent } from '@/app/policy/[id]/[spoke]/content/햇살론특례/대상자격';
import { 햇살론특례한도금리SpokeContent } from '@/app/policy/[id]/[spoke]/content/햇살론특례/한도금리';
import { 햇살론특례일반비교SpokeContent } from '@/app/policy/[id]/[spoke]/content/햇살론특례/일반비교';
import { 햇살론특례대부업대안SpokeContent } from '@/app/policy/[id]/[spoke]/content/햇살론특례/대부업대안';
import { 햇살론특례신청방법SpokeContent } from '@/app/policy/[id]/[spoke]/content/햇살론특례/신청방법';
/* ── 햇살론카드 (slug: sunshine-loan-card) ── */
import { 햇살론카드대상자격SpokeContent } from '@/app/policy/[id]/[spoke]/content/햇살론카드/대상자격';
import { 햇살론카드보증한도SpokeContent } from '@/app/policy/[id]/[spoke]/content/햇살론카드/보증한도';
import { 햇살론카드필수교육SpokeContent } from '@/app/policy/[id]/[spoke]/content/햇살론카드/필수교육';
import { 햇살론카드카드사혜택SpokeContent } from '@/app/policy/[id]/[spoke]/content/햇살론카드/카드사혜택';
import { 햇살론카드신청방법SpokeContent } from '@/app/policy/[id]/[spoke]/content/햇살론카드/신청방법';
/* ── 햇살론119 (slug: sunshine-loan-119) ── */
import { 햇살론119대상자격SpokeContent } from '@/app/policy/[id]/[spoke]/content/햇살론119/대상자격';
import { 햇살론119한도금리SpokeContent } from '@/app/policy/[id]/[spoke]/content/햇살론119/한도금리';
import { 햇살론119채무조정연계SpokeContent } from '@/app/policy/[id]/[spoke]/content/햇살론119/채무조정연계';
import { 햇살론119햇살론비교SpokeContent } from '@/app/policy/[id]/[spoke]/content/햇살론119/햇살론비교';
import { 햇살론119신청방법SpokeContent } from '@/app/policy/[id]/[spoke]/content/햇살론119/신청방법';
/* ── 청년 미래이음 대출 (slug: youth-future-link-loan) ── */
import { 청년미래이음대상자격SpokeContent } from '@/app/policy/[id]/[spoke]/content/청년미래이음/대상자격';
import { 청년미래이음한도금리SpokeContent } from '@/app/policy/[id]/[spoke]/content/청년미래이음/한도금리';
import { 청년미래이음유스비교SpokeContent } from '@/app/policy/[id]/[spoke]/content/청년미래이음/유스비교';
import { 청년미래이음상환구조SpokeContent } from '@/app/policy/[id]/[spoke]/content/청년미래이음/상환구조';
import { 청년미래이음신청방법SpokeContent } from '@/app/policy/[id]/[spoke]/content/청년미래이음/신청방법';
/* ── 햇살론유스 (slug: sunshine-youth-loan) ── */
import { 햇살론유스대상자격SpokeContent } from '@/app/policy/[id]/[spoke]/content/햇살론유스/대상자격';
import { 햇살론유스한도용도SpokeContent } from '@/app/policy/[id]/[spoke]/content/햇살론유스/한도용도';
import { 햇살론유스금리상환SpokeContent } from '@/app/policy/[id]/[spoke]/content/햇살론유스/금리상환';
import { 햇살론유스청년대출비교SpokeContent } from '@/app/policy/[id]/[spoke]/content/햇살론유스/청년대출비교';
import { 햇살론유스신청방법SpokeContent } from '@/app/policy/[id]/[spoke]/content/햇살론유스/신청방법';
/* ── 소상공인 특례 햇살론카드 (slug: sme-sunshine-card) ── */
import { 소상공인햇살론카드대상자격SpokeContent } from '@/app/policy/[id]/[spoke]/content/소상공인햇살론카드/대상자격';
import { 소상공인햇살론카드보증한도SpokeContent } from '@/app/policy/[id]/[spoke]/content/소상공인햇살론카드/보증한도';
import { 소상공인햇살론카드교육컨설팅SpokeContent } from '@/app/policy/[id]/[spoke]/content/소상공인햇살론카드/교육컨설팅';
import { 소상공인햇살론카드카드사업종SpokeContent } from '@/app/policy/[id]/[spoke]/content/소상공인햇살론카드/카드사업종';
import { 소상공인햇살론카드신청방법SpokeContent } from '@/app/policy/[id]/[spoke]/content/소상공인햇살론카드/신청방법';
/* ── 금융취약계층 생계자금 (slug: vulnerable-livelihood-loan) ── */
import { 금융취약계층생계자금대상자격SpokeContent } from '@/app/policy/[id]/[spoke]/content/금융취약계층생계자금/대상자격';
import { 금융취약계층생계자금한도금리SpokeContent } from '@/app/policy/[id]/[spoke]/content/금융취약계층생계자금/한도금리';
import { 금융취약계층생계자금추가요건SpokeContent } from '@/app/policy/[id]/[spoke]/content/금융취약계층생계자금/추가요건';
import { 금융취약계층생계자금청년비교SpokeContent } from '@/app/policy/[id]/[spoke]/content/금융취약계층생계자금/청년비교';
import { 금융취약계층생계자금신청방법SpokeContent } from '@/app/policy/[id]/[spoke]/content/금융취약계층생계자금/신청방법';
/* ── 취업촉진수당 (slug: employment-incentive-allowance) ── */
import { 취업촉진수당조기재취업수당SpokeContent } from '@/app/policy/[id]/[spoke]/content/취업촉진수당/조기재취업수당';
import { 취업촉진수당직업능력개발수당SpokeContent } from '@/app/policy/[id]/[spoke]/content/취업촉진수당/직업능력개발수당';
import { 취업촉진수당광역구직활동비이주비SpokeContent } from '@/app/policy/[id]/[spoke]/content/취업촉진수당/광역구직활동비이주비';
import { 취업촉진수당신청방법SpokeContent } from '@/app/policy/[id]/[spoke]/content/취업촉진수당/신청방법';
import { 취업촉진수당국민취업비교SpokeContent } from '@/app/policy/[id]/[spoke]/content/취업촉진수당/국민취업비교';
/* ── 구직자 도약보장 패키지 (slug: job-seeker-leap-package) ── */
import { 구직자도약보장서비스개요SpokeContent } from '@/app/policy/[id]/[spoke]/content/구직자도약보장/서비스개요';
import { 구직자도약보장참여대상SpokeContent } from '@/app/policy/[id]/[spoke]/content/구직자도약보장/참여대상';
import { 구직자도약보장AI잡케어SpokeContent } from '@/app/policy/[id]/[spoke]/content/구직자도약보장/AI잡케어';
import { 구직자도약보장경력유형SpokeContent } from '@/app/policy/[id]/[spoke]/content/구직자도약보장/경력유형';
import { 구직자도약보장신청방법SpokeContent } from '@/app/policy/[id]/[spoke]/content/구직자도약보장/신청방법';
/* ── 여성청소년 생리용품 바우처 (slug: teen-female-hygiene) ── */
import { 생리용품바우처대상자격SpokeContent } from '@/app/policy/[id]/[spoke]/content/생리용품바우처/대상자격';
import { 생리용품바우처지원금액SpokeContent } from '@/app/policy/[id]/[spoke]/content/생리용품바우처/지원금액';
import { 생리용품바우처국민행복카드SpokeContent } from '@/app/policy/[id]/[spoke]/content/생리용품바우처/국민행복카드';
import { 생리용품바우처신청방법SpokeContent } from '@/app/policy/[id]/[spoke]/content/생리용품바우처/신청방법';
import { 생리용품바우처사용처SpokeContent } from '@/app/policy/[id]/[spoke]/content/생리용품바우처/사용처';
/* ── 아동·청소년 성범죄 신고포상금 제도 (slug: child-sex-crime-report-reward) ── */
import { 신고포상금제도개요SpokeContent } from '@/app/policy/[id]/[spoke]/content/신고포상금/제도개요';
import { 신고포상금대상범죄SpokeContent } from '@/app/policy/[id]/[spoke]/content/신고포상금/대상범죄';
import { 신고포상금신고방법SpokeContent } from '@/app/policy/[id]/[spoke]/content/신고포상금/신고방법';
import { 신고포상금포상금신청SpokeContent } from '@/app/policy/[id]/[spoke]/content/신고포상금/포상금신청';
import { 신고포상금신고자보호SpokeContent } from '@/app/policy/[id]/[spoke]/content/신고포상금/신고자보호';
/* ── 경기도 청년 복지포인트 (slug: gyeonggi-youth-welfare-point) ── */
import { 경기도청년복지포인트대상자격SpokeContent } from '@/app/policy/[id]/[spoke]/content/경기도청년복지포인트/대상자격';
import { 경기도청년복지포인트지원금액SpokeContent } from '@/app/policy/[id]/[spoke]/content/경기도청년복지포인트/지원금액';
import { 경기도청년복지포인트신청방법SpokeContent } from '@/app/policy/[id]/[spoke]/content/경기도청년복지포인트/신청방법';
import { 경기도청년복지포인트사용처SpokeContent } from '@/app/policy/[id]/[spoke]/content/경기도청년복지포인트/사용처';
import { 경기도청년복지포인트통장비교SpokeContent } from '@/app/policy/[id]/[spoke]/content/경기도청년복지포인트/통장비교';
/* ── 청년 복지포인트 전국 비교 (slug: youth-welfare-point-compare) ── */
import { 청년복지포인트비교지역별비교SpokeContent } from '@/app/policy/[id]/[spoke]/content/청년복지포인트비교/지역별비교';
import { 청년복지포인트비교인천재직청년SpokeContent } from '@/app/policy/[id]/[spoke]/content/청년복지포인트비교/인천재직청년';
import { 청년복지포인트비교공통대상SpokeContent } from '@/app/policy/[id]/[spoke]/content/청년복지포인트비교/공통대상';
import { 청년복지포인트비교지급형태SpokeContent } from '@/app/policy/[id]/[spoke]/content/청년복지포인트비교/지급형태';
import { 청년복지포인트비교우리지역찾기SpokeContent } from '@/app/policy/[id]/[spoke]/content/청년복지포인트비교/우리지역찾기';
/* ── 전기요금 복지할인 (slug: electric-welfare-discount) ── */
import { 전기요금복지할인대상자격SpokeContent } from '@/app/policy/[id]/[spoke]/content/전기요금복지할인/대상자격';
import { 전기요금복지할인할인금액SpokeContent } from '@/app/policy/[id]/[spoke]/content/전기요금복지할인/할인금액';
import { 전기요금복지할인신청방법SpokeContent } from '@/app/policy/[id]/[spoke]/content/전기요금복지할인/신청방법';
import { 전기요금복지할인다자녀출산SpokeContent } from '@/app/policy/[id]/[spoke]/content/전기요금복지할인/다자녀출산';
import { 전기요금복지할인중복비교SpokeContent } from '@/app/policy/[id]/[spoke]/content/전기요금복지할인/중복비교';

/* ── 기후동행카드 환급 (slug: climate-card-refund) ── */
import { 기후동행카드환급받는방법SpokeContent } from '@/app/policy/[id]/[spoke]/content/기후동행카드환급/받는방법';
import { 기후동행카드환급신청기간SpokeContent } from '@/app/policy/[id]/[spoke]/content/기후동행카드환급/신청기간';
import { 기후동행카드환급조건SpokeContent } from '@/app/policy/[id]/[spoke]/content/기후동행카드환급/조건';
import { 기후동행카드환급대상SpokeContent } from '@/app/policy/[id]/[spoke]/content/기후동행카드환급/대상';
import { 기후동행카드환급금SpokeContent } from '@/app/policy/[id]/[spoke]/content/기후동행카드환급/환급금';
import { 기후동행카드환급후불카드SpokeContent } from '@/app/policy/[id]/[spoke]/content/기후동행카드환급/후불카드';
import { 기후동행카드환급청년권종SpokeContent } from '@/app/policy/[id]/[spoke]/content/기후동행카드환급/청년권종';
import { 기후동행카드환급신청오류SpokeContent } from '@/app/policy/[id]/[spoke]/content/기후동행카드환급/신청오류';
import { 기후동행카드환급모두의카드SpokeContent } from '@/app/policy/[id]/[spoke]/content/기후동행카드환급/모두의카드';
import { 기후동행카드환급페이백차이SpokeContent } from '@/app/policy/[id]/[spoke]/content/기후동행카드환급/페이백차이';

/* ── 국민행복카드 베팡 (slug: happiness-card-bebang) ── */
import { 국민행복카드베팡몰비교SpokeContent } from '@/app/policy/[id]/[spoke]/content/국민행복카드베팡/몰비교';
import { 국민행복카드베팡카드사혜택SpokeContent } from '@/app/policy/[id]/[spoke]/content/국민행복카드베팡/카드사혜택';
import { 국민행복카드베팡신청방법SpokeContent } from '@/app/policy/[id]/[spoke]/content/국민행복카드베팡/신청방법';
import { 국민행복카드베팡바우처등록SpokeContent } from '@/app/policy/[id]/[spoke]/content/국민행복카드베팡/바우처등록';
import { 국민행복카드베팡추천인사은품SpokeContent } from '@/app/policy/[id]/[spoke]/content/국민행복카드베팡/추천인사은품';
import { 국민행복카드베팡임신출산바우처SpokeContent } from '@/app/policy/[id]/[spoke]/content/국민행복카드베팡/임신출산바우처';
import { 국민행복카드베팡기저귀바우처SpokeContent } from '@/app/policy/[id]/[spoke]/content/국민행복카드베팡/기저귀바우처';
import { 국민행복카드베팡바우처종류SpokeContent } from '@/app/policy/[id]/[spoke]/content/국민행복카드베팡/바우처종류';
import { 국민행복카드베팡혜택총정리SpokeContent } from '@/app/policy/[id]/[spoke]/content/국민행복카드베팡/혜택총정리';

/* ── 삼성전자 온누리 환급 (slug: samsung-onnuri-refund) ── */
import { 삼성전자온누리환급방법SpokeContent } from '@/app/policy/[id]/[spoke]/content/삼성전자온누리환급/환급방법';
import { 삼성전자온누리환급기간SpokeContent } from '@/app/policy/[id]/[spoke]/content/삼성전자온누리환급/환급기간';
import { 삼성전자온누리환급액SpokeContent } from '@/app/policy/[id]/[spoke]/content/삼성전자온누리환급/환급액';
import { 삼성전자온누리환급한도대상SpokeContent } from '@/app/policy/[id]/[spoke]/content/삼성전자온누리환급/한도대상';
import { 삼성전자온누리환급참여처SpokeContent } from '@/app/policy/[id]/[spoke]/content/삼성전자온누리환급/참여처';
import { 삼성전자온누리환급K히어로SpokeContent } from '@/app/policy/[id]/[spoke]/content/삼성전자온누리환급/K히어로';
import { 삼성전자온누리환급디지털온누리사용SpokeContent } from '@/app/policy/[id]/[spoke]/content/삼성전자온누리환급/디지털온누리사용';
import { 삼성전자온누리환급주의사항SpokeContent } from '@/app/policy/[id]/[spoke]/content/삼성전자온누리환급/주의사항';

/* ── 도수치료 가격·이용기준 (slug: dosu-therapy) ── */
import { 도수치료가격SpokeContent } from '@/app/policy/[id]/[spoke]/content/도수치료/가격';
import { 도수치료실비SpokeContent } from '@/app/policy/[id]/[spoke]/content/도수치료/실비';
import { 도수치료관리급여SpokeContent } from '@/app/policy/[id]/[spoke]/content/도수치료/관리급여';
import { 도수치료횟수SpokeContent } from '@/app/policy/[id]/[spoke]/content/도수치료/횟수';
import { 도수치료물리치료비교SpokeContent } from '@/app/policy/[id]/[spoke]/content/도수치료/물리치료비교';
import { 도수치료산재SpokeContent } from '@/app/policy/[id]/[spoke]/content/도수치료/산재';

/* ── 노란우산공제 납입한도 확대 (slug: noran-umbrella) ── */
import { 노란우산공제납입한도SpokeContent } from '@/app/policy/[id]/[spoke]/content/노란우산공제/납입한도';
import { 노란우산공제소득공제SpokeContent } from '@/app/policy/[id]/[spoke]/content/노란우산공제/소득공제';
import { 노란우산공제가입방법SpokeContent } from '@/app/policy/[id]/[spoke]/content/노란우산공제/가입방법';
import { 노란우산공제대출SpokeContent } from '@/app/policy/[id]/[spoke]/content/노란우산공제/대출';
import { 노란우산공제해지SpokeContent } from '@/app/policy/[id]/[spoke]/content/노란우산공제/해지';

/* ── 폐업 소상공인 정책자금 상환부담 완화 (slug: closed-biz-repayment-relief) ── */
import { 폐업소상공인정책자금대상SpokeContent } from '@/app/policy/[id]/[spoke]/content/폐업소상공인정책자금/대상';
import { 폐업소상공인정책자금상환연장SpokeContent } from '@/app/policy/[id]/[spoke]/content/폐업소상공인정책자금/상환연장';
import { 폐업소상공인정책자금금리감면SpokeContent } from '@/app/policy/[id]/[spoke]/content/폐업소상공인정책자금/금리감면';
import { 폐업소상공인정책자금신청재기SpokeContent } from '@/app/policy/[id]/[spoke]/content/폐업소상공인정책자금/신청재기';

/* ── 양육비 선지급제 (slug: child-support-advance) ── */
import { 양육비선지급소득기준폐지SpokeContent } from '@/app/policy/[id]/[spoke]/content/양육비선지급/소득기준폐지';
import { 기초연금2027년인상SpokeContent } from '@/app/policy/[id]/[spoke]/content/기초연금/2027년인상';
import { 기초연금공무원연금중복SpokeContent } from '@/app/policy/[id]/[spoke]/content/기초연금/공무원연금중복';
import { 기초연금계산공식SpokeContent } from '@/app/policy/[id]/[spoke]/content/기초연금/계산공식';
import { 기초연금탈락조건SpokeContent } from '@/app/policy/[id]/[spoke]/content/기초연금/탈락조건';
import { 기초연금준비서류SpokeContent } from '@/app/policy/[id]/[spoke]/content/기초연금/준비서류';
import { 기초연금지급일SpokeContent } from '@/app/policy/[id]/[spoke]/content/기초연금/지급일';
import { 기초연금중복수급SpokeContent } from '@/app/policy/[id]/[spoke]/content/기초연금/중복수급';
import { 기초연금지급정지SpokeContent } from '@/app/policy/[id]/[spoke]/content/기초연금/지급정지';
import { 주민세납부대상SpokeContent } from '@/app/policy/[id]/[spoke]/content/주민세/target';
import { 주민세금액SpokeContent } from '@/app/policy/[id]/[spoke]/content/주민세/amount';
import { 주민세납부기간SpokeContent } from '@/app/policy/[id]/[spoke]/content/주민세/period';
import { 주민세조회납부SpokeContent } from '@/app/policy/[id]/[spoke]/content/주민세/how-to-pay';
import { 주민세종업원분SpokeContent } from '@/app/policy/[id]/[spoke]/content/주민세/business';
import { 보건증검사항목SpokeContent } from '@/app/policy/[id]/[spoke]/content/보건증/test-items';
import { 보건증유효기간SpokeContent } from '@/app/policy/[id]/[spoke]/content/보건증/validity';
import { 보건증기간만료SpokeContent } from '@/app/policy/[id]/[spoke]/content/보건증/expired';
import { 보건증발급비용SpokeContent } from '@/app/policy/[id]/[spoke]/content/보건증/cost';
import { 보건증오프라인발급SpokeContent } from '@/app/policy/[id]/[spoke]/content/보건증/offline';
import { 안심상속신청방법SpokeContent } from '@/app/policy/[id]/[spoke]/content/안심상속/how-to-apply';
import { 안심상속신청기간SpokeContent } from '@/app/policy/[id]/[spoke]/content/안심상속/when-apply';
import { 안심상속결과조회SpokeContent } from '@/app/policy/[id]/[spoke]/content/안심상속/result-check';
import { 안심상속방문신청대상SpokeContent } from '@/app/policy/[id]/[spoke]/content/안심상속/eligibility';
import { 안심상속준비서류SpokeContent } from '@/app/policy/[id]/[spoke]/content/안심상속/documents';
import { 양육비이행명령신청SpokeContent } from '@/app/policy/[id]/[spoke]/content/양육비이행확보/enforcement-order';
import { 양육비미지급처벌SpokeContent } from '@/app/policy/[id]/[spoke]/content/양육비이행확보/unpaid-penalty';
import { 양육비강제집행SpokeContent } from '@/app/policy/[id]/[spoke]/content/양육비이행확보/compulsory-execution';
import { 양육비소송법률지원SpokeContent } from '@/app/policy/[id]/[spoke]/content/양육비이행확보/lawsuit-support';
import { 양육비계산기SpokeContent } from '@/app/policy/[id]/[spoke]/content/양육비이행확보/calculation';
import { 양육비신청서류SpokeContent } from '@/app/policy/[id]/[spoke]/content/양육비이행확보/required-documents';
import { 양육비선지급대상조건SpokeContent } from '@/app/policy/[id]/[spoke]/content/양육비선지급/대상조건';
import { 양육비선지급금액지급일SpokeContent } from '@/app/policy/[id]/[spoke]/content/양육비선지급/금액지급일';
import { 양육비선지급신청방법SpokeContent } from '@/app/policy/[id]/[spoke]/content/양육비선지급/신청방법';
import { 양육비선지급회수SpokeContent } from '@/app/policy/[id]/[spoke]/content/양육비선지급/회수';

/* ── 고속도로 통행료 감면 (slug: highway-toll-discount) ── */
import { 고속도로통행료감면장애인유공자SpokeContent } from '@/app/policy/[id]/[spoke]/content/고속도로통행료감면/장애인유공자';
import { 고속도로통행료감면다자녀SpokeContent } from '@/app/policy/[id]/[spoke]/content/고속도로통행료감면/다자녀';
import { 고속도로통행료감면신청등록SpokeContent } from '@/app/policy/[id]/[spoke]/content/고속도로통행료감면/신청등록';
import { 고속도로통행료감면한국도로공사다자녀등록SpokeContent } from '@/app/policy/[id]/[spoke]/content/고속도로통행료감면/한국도로공사다자녀등록';

/* ── 난임치료휴가급여 확대 (slug: infertility-treatment-leave) ── */
import { 난임치료휴가급여확대SpokeContent } from '@/app/policy/[id]/[spoke]/content/난임치료휴가급여/휴가확대';

/* ── 임산부 친환경농산물 지원 (slug: pregnant-eco-food) ── */
import { 임산부친환경농산물지원금액SpokeContent } from '@/app/policy/[id]/[spoke]/content/임산부친환경농산물/지원금액';
import { 임산부친환경농산물대상SpokeContent } from '@/app/policy/[id]/[spoke]/content/임산부친환경농산물/대상';
import { 임산부친환경농산물신청방법SpokeContent } from '@/app/policy/[id]/[spoke]/content/임산부친환경농산물/신청방법';

/* ── 층간소음 기준·신고·해결 (slug: floor-noise) ── */
import { 층간소음기준SpokeContent } from '@/app/policy/[id]/[spoke]/content/층간소음/기준';
import { 층간소음신고상담SpokeContent } from '@/app/policy/[id]/[spoke]/content/층간소음/신고상담';
import { 층간소음해결방법SpokeContent } from '@/app/policy/[id]/[spoke]/content/층간소음/해결방법';

/* ── 해외여행 면세 한도 (slug: travel-duty-free) ── */
import { 해외여행면세면세한도SpokeContent } from '@/app/policy/[id]/[spoke]/content/해외여행면세/면세한도';
import { 해외여행면세가족합산SpokeContent }  from '@/app/policy/[id]/[spoke]/content/해외여행면세/family-limit';
import { 해외여행면세술담배향수SpokeContent } from '@/app/policy/[id]/[spoke]/content/해외여행면세/술담배향수';
import { 해외여행면세자진신고SpokeContent } from '@/app/policy/[id]/[spoke]/content/해외여행면세/자진신고';

/* ── 자활사업 (slug: self-sufficiency-program) ── */
import { 자활사업참여자격조건부수급자차상위계층신청SpokeContent }         from '@/app/policy/[id]/[spoke]/content/자활사업/참여자격조건부수급자차상위계층신청';
import { 자활사업급여2026근로유지형사회서비스형시장진입형SpokeContent } from '@/app/policy/[id]/[spoke]/content/자활사업/급여2026근로유지형사회서비스형시장진입형';
import { 자활사업종류자활근로자활기업취업지원비교SpokeContent }           from '@/app/policy/[id]/[spoke]/content/자활사업/종류자활근로자활기업취업지원비교';
import { 자활사업참여하면기초생활수급탈락소득인정유지SpokeContent }       from '@/app/policy/[id]/[spoke]/content/자활사업/참여하면기초생활수급탈락소득인정유지';

/* ── 청년내일채움공제 (slug: youth-tomorrow-filling) ── */
import { 청년내일채움공제신청자격제조건설업중소기업청년조건SpokeContent }   from '@/app/policy/[id]/[spoke]/content/청년내일채움공제/신청자격제조건설업중소기업청년조건';
import { 청년내일채움공제지원금액2년1200만본인기업정부적립구조SpokeContent } from '@/app/policy/[id]/[spoke]/content/청년내일채움공제/지원금액2년1200만본인기업정부적립구조';
import { 청년내일채움공제중도해지퇴사적립금환급기준손해여부SpokeContent }   from '@/app/policy/[id]/[spoke]/content/청년내일채움공제/중도해지퇴사적립금환급기준손해여부';
import { 청년내일채움공제청년도약계좌동시가입가능여부차이점SpokeContent }   from '@/app/policy/[id]/[spoke]/content/청년내일채움공제/청년도약계좌동시가입가능여부차이점';

/* ── 소상공인희망리턴패키지 (slug: small-biz-hope-return) ── */
import { 소상공인희망리턴패키지신청자격폐업소상공인60일운영조건확인SpokeContent } from '@/app/policy/[id]/[spoke]/content/소상공인희망리턴패키지/신청자격폐업소상공인60일운영조건확인';
import { 소상공인희망리턴패키지점포철거비2026최대600만조건절차신청SpokeContent } from '@/app/policy/[id]/[spoke]/content/소상공인희망리턴패키지/점포철거비2026최대600만조건절차신청';
import { 소상공인희망리턴패키지취업지원전직장려수당100만원받는방법SpokeContent } from '@/app/policy/[id]/[spoke]/content/소상공인희망리턴패키지/취업지원전직장려수당100만원받는방법';
import { 소상공인희망리턴패키지재창업지원법률채무조정컨설팅원스톱SpokeContent } from '@/app/policy/[id]/[spoke]/content/소상공인희망리턴패키지/재창업지원법률채무조정컨설팅원스톱';

/* ── 노인보청기지원 (slug: elderly-hearing-aid) ── */
import { 노인보청기지원건강보험장애인보조기기급여131만조건SpokeContent }   from '@/app/policy/[id]/[spoke]/content/노인보청기지원/건강보험장애인보조기기급여131만조건';
import { 노인보청기지원신청절차청각장애등록급여지급단계SpokeContent }     from '@/app/policy/[id]/[spoke]/content/노인보청기지원/신청절차청각장애등록급여지급단계';
import { 노인보청기지원본인부담건강보험의료급여1종2종차이비교SpokeContent } from '@/app/policy/[id]/[spoke]/content/노인보청기지원/본인부담건강보험의료급여1종2종차이비교';
import { 노인보청기지원지자체추가혜택지역별117만신청방법SpokeContent }     from '@/app/policy/[id]/[spoke]/content/노인보청기지원/지자체추가혜택지역별117만신청방법';


/* ── 특수형태근로자고용보험 (slug: platform-worker-insurance) ── */
import { 특수형태근로자고용보험적용직종12개월보수80만기준해당여부SpokeContent } from '@/app/policy/[id]/[spoke]/content/특수형태근로자고용보험/적용직종12개월보수80만기준해당여부';
import { 특수형태근로자고용보험보험료사업주절반부담두루누리지원율SpokeContent } from '@/app/policy/[id]/[spoke]/content/특수형태근로자고용보험/보험료사업주절반부담두루누리지원율';
import { 특수형태근로자고용보험실업급여가입후받는조건금액신청방법SpokeContent } from '@/app/policy/[id]/[spoke]/content/특수형태근로자고용보험/실업급여가입후받는조건금액신청방법';
import { 특수형태근로자고용보험적용제외신청원하지않으면빠지는방법SpokeContent } from '@/app/policy/[id]/[spoke]/content/특수형태근로자고용보험/적용제외신청원하지않으면빠지는방법';

/* ──────────────────────────────────────────────
 * 레지스트리 본체
 * key: 정책 slug (data/policies/*.ts 의 slug 필드와 반드시 일치)
 * ────────────────────────────────────────────── */

/* ── 자영업자고용보험 (slug: self-employed-employment-insurance) ── */
import { 자영업자고용보험7등급보험료율50to80지원기준SpokeContent }    from '@/app/policy/[id]/[spoke]/content/자영업자고용보험/7등급보험료율50to80지원기준';
import { 자영업자고용보험가입방법근로복지공단온라인SpokeContent }     from '@/app/policy/[id]/[spoke]/content/자영업자고용보험/가입방법근로복지공단온라인';
import { 자영업자고용보험직원있는사업주vs1인자영업차이SpokeContent }  from '@/app/policy/[id]/[spoke]/content/자영업자고용보험/직원있는사업주vs1인자영업차이';
import { 자영업자고용보험폐업후실업급여1년가입조건SpokeContent }     from '@/app/policy/[id]/[spoke]/content/자영업자고용보험/폐업후실업급여1년가입조건';

/* ── 여성새로일하기센터 (slug: saeil-women-intern) ── */
import { 여성새로일하기센터WUP경력단절예방프로그램신청SpokeContent }  from '@/app/policy/[id]/[spoke]/content/여성새로일하기센터/WUP경력단절예방프로그램신청';
import { 여성새로일하기센터가까운센터찾기이용절차SpokeContent }      from '@/app/policy/[id]/[spoke]/content/여성새로일하기센터/가까운센터찾기이용절차';
import { 여성새로일하기센터경력단절직업훈련무료취업연계SpokeContent } from '@/app/policy/[id]/[spoke]/content/여성새로일하기센터/경력단절직업훈련무료취업연계';
import { 여성새로일하기센터새일여성인턴기간급여채용연계SpokeContent } from '@/app/policy/[id]/[spoke]/content/여성새로일하기센터/새일여성인턴기간급여채용연계';

/* ── 한부모가족지원 (slug: low-income-single-parent) ── */
import { 한부모가족지원고등학교학비지원22세연장조건SpokeContent }    from '@/app/policy/[id]/[spoke]/content/한부모가족지원/고등학교학비지원22세연장조건';
import { 한부모가족지원아동양육비월23만원소득기준SpokeContent }      from '@/app/policy/[id]/[spoke]/content/한부모가족지원/아동양육비월23만원소득기준';
import { 한부모가족지원중복수급기초수급동시가능여부SpokeContent }    from '@/app/policy/[id]/[spoke]/content/한부모가족지원/중복수급기초수급동시가능여부';
import { 한부모가족지원청소년한부모월37만원24세이하SpokeContent }    from '@/app/policy/[id]/[spoke]/content/한부모가족지원/청소년한부모월37만원24세이하';
import { 한부모증명서SpokeContent }   from '@/app/policy/[id]/[spoke]/content/한부모가족지원/증명서';
import { 한부모기준SpokeContent }     from '@/app/policy/[id]/[spoke]/content/한부모가족지원/기준';
import { 한부모혜택SpokeContent }     from '@/app/policy/[id]/[spoke]/content/한부모가족지원/혜택';
import { 한부모신청방법SpokeContent } from '@/app/policy/[id]/[spoke]/content/한부모가족지원/신청방법';
import { 한부모지원센터SpokeContent } from '@/app/policy/[id]/[spoke]/content/한부모가족지원/지원센터';

/* ── 근로자휴가지원 (slug: worker-vacation-support) ── */
import { 근로자휴가지원2026선착순10만명신청기간SpokeContent }       from '@/app/policy/[id]/[spoke]/content/근로자휴가지원/2026선착순10만명신청기간';
import { 근로자휴가지원정부10기업10근로자20총40사용법SpokeContent }  from '@/app/policy/[id]/[spoke]/content/근로자휴가지원/정부10기업10근로자20총40사용법';
import { 근로자휴가지원중소기업재직자신청자격확인SpokeContent }      from '@/app/policy/[id]/[spoke]/content/근로자휴가지원/중소기업재직자신청자격확인';
import { 근로자휴가지원휴가샵국내여행사용처환불조건SpokeContent }    from '@/app/policy/[id]/[spoke]/content/근로자휴가지원/휴가샵국내여행사용처환불조건';

/* ── 학자금대출 (slug: income-contingent-loan) ── */
import { 학자금대출2026금리1점7취업후상환소득폐지SpokeContent }     from '@/app/policy/[id]/[spoke]/content/학자금대출/2026금리1점7취업후상환소득폐지';
import { 학자금대출상환기준소득3037만초과상환방법SpokeContent }     from '@/app/policy/[id]/[spoke]/content/학자금대출/상환기준소득3037만초과상환방법';
import { 학자금대출생활비학기당200만신청방법SpokeContent }         from '@/app/policy/[id]/[spoke]/content/학자금대출/생활비학기당200만신청방법';
import { 학자금대출일반vs취업후상환어떤걸선택SpokeContent }        from '@/app/policy/[id]/[spoke]/content/학자금대출/일반vs취업후상환어떤걸선택';

/* ── 신혼부부주거지원 (slug: newlywed-housing-support) ── */
import { 신혼부부주거지원LH매입임대1순위소득자산최장14년SpokeContent } from '@/app/policy/[id]/[spoke]/content/신혼부부주거지원/LH매입임대1순위소득자산최장14년';
import { 신혼부부주거지원신생아특례전세대출vsLH전세임대SpokeContent } from '@/app/policy/[id]/[spoke]/content/신혼부부주거지원/신생아특례전세대출vsLH전세임대';
import { 신혼부부주거지원월임대료보증금임대보증금5SpokeContent }     from '@/app/policy/[id]/[spoke]/content/신혼부부주거지원/월임대료보증금임대보증금5%';
import { 신혼부부주거지원전세임대1자격혼인7년신청방법SpokeContent }  from '@/app/policy/[id]/[spoke]/content/신혼부부주거지원/전세임대1자격혼인7년신청방법';

/* ── 창업지원 (slug: startup-support) ── */
import { 창업지원단계별비교예창패초기도약차이SpokeContent }         from '@/app/policy/[id]/[spoke]/content/창업지원/단계별비교예창패초기도약차이';
import { 창업지원예비창업패키지최대8000만신청자격SpokeContent }    from '@/app/policy/[id]/[spoke]/content/창업지원/예비창업패키지최대8000만신청자격';
import { 창업지원창업도약패키지업력3to7년최대2억SpokeContent }     from '@/app/policy/[id]/[spoke]/content/창업지원/창업도약패키지업력3to7년최대2억';
import { 창업지원청년창업사관학교만39세1억평균7천SpokeContent }    from '@/app/policy/[id]/[spoke]/content/창업지원/청년창업사관학교만39세1억평균7천';
/* ── 공공임대주택 (slug: public-rental-housing) ── */
import { 공공임대주택50년공공임대신청자격월소득기준SpokeContent } from '@/app/policy/[id]/[spoke]/content/공공임대주택/50년공공임대신청자격월소득기준';
import { 공공임대주택LH공공임대월세임대료산정방식SpokeContent } from '@/app/policy/[id]/[spoke]/content/공공임대주택/LH공공임대월세임대료산정방식';
import { 공공임대주택공공임대입주단점실거주자SpokeContent } from '@/app/policy/[id]/[spoke]/content/공공임대주택/공공임대입주단점실거주자';
import { 공공임대주택공공임대청약공고신청순서서류SpokeContent } from '@/app/policy/[id]/[spoke]/content/공공임대주택/공공임대청약공고신청순서서류';

/* ── 공공분양주택 (slug: public-housing-sale) ── */
import { 공공분양주택공공분양일반공급청약자격소득자산기준SpokeContent } from '@/app/policy/[id]/[spoke]/content/공공분양주택/공공분양일반공급청약자격소득자산기준';
import { 공공분양주택공공분양vs민간분양유리한점차이SpokeContent } from '@/app/policy/[id]/[spoke]/content/공공분양주택/공공분양vs민간분양유리한점차이';
import { 공공분양주택공공분양vs공공임대뭘신청해야하나SpokeContent } from '@/app/policy/[id]/[spoke]/content/공공분양주택/공공분양vs공공임대뭘신청해야하나';
import { 공공분양주택공공분양당첨후계약입주일정절차SpokeContent } from '@/app/policy/[id]/[spoke]/content/공공분양주택/공공분양당첨후계약입주일정절차';

/* ── 국가장학금 (slug: national-scholar) ── */
import { 국가장학금국가장학금2차신청기간2026SpokeContent } from '@/app/policy/[id]/[spoke]/content/국가장학금/국가장학금2차신청기간2026';
import { 국가장학금2차구제신청SpokeContent } from '@/app/policy/[id]/[spoke]/content/국가장학금/2차구제신청';
import { 국가장학금2차신입생SpokeContent } from '@/app/policy/[id]/[spoke]/content/국가장학금/2차신입생';
import { LH청약플러스서류제출대상자SpokeContent } from '@/app/policy/[id]/[spoke]/content/LH청약플러스/서류제출대상자';
import { LH청약플러스당첨자발표조회SpokeContent } from '@/app/policy/[id]/[spoke]/content/LH청약플러스/당첨자발표조회';
import { 국가장학금국가장학금소득분위지급금액SpokeContent } from '@/app/policy/[id]/[spoke]/content/국가장학금/국가장학금소득분위지급금액';
import { 국가장학금국가장학금F학점성적기준미달SpokeContent } from '@/app/policy/[id]/[spoke]/content/국가장학금/국가장학금F학점성적기준미달';
import { 국가장학금국가장학금지급일통장입금시기SpokeContent } from '@/app/policy/[id]/[spoke]/content/국가장학금/국가장학금지급일통장입금시기';
import { 국가장학금다자녀SpokeContent } from '@/app/policy/[id]/[spoke]/content/국가장학금/다자녀';
import { 국가장학금가구원동의SpokeContent } from '@/app/policy/[id]/[spoke]/content/국가장학금/가구원동의';
import { 국가장학금이의신청SpokeContent } from '@/app/policy/[id]/[spoke]/content/국가장학금/이의신청';
import { 국가장학금휴학복학SpokeContent } from '@/app/policy/[id]/[spoke]/content/국가장학금/휴학복학';
import { 국가장학금신청방법SpokeContent } from '@/app/policy/[id]/[spoke]/content/국가장학금/신청방법';
/* ── 재산세 (slug: property-tax) ── */
import { 재산세납부기간SpokeContent } from '@/app/policy/[id]/[spoke]/content/재산세/납부기간';
import { 재산세조회납부SpokeContent } from '@/app/policy/[id]/[spoke]/content/재산세/조회납부';
import { 재산세카드혜택SpokeContent } from '@/app/policy/[id]/[spoke]/content/재산세/카드혜택';
import { 재산세특례세율SpokeContent } from '@/app/policy/[id]/[spoke]/content/재산세/특례세율';
import { 재산세분납SpokeContent } from '@/app/policy/[id]/[spoke]/content/재산세/분납';
import { 재산세감면SpokeContent } from '@/app/policy/[id]/[spoke]/content/재산세/감면';
/* ── 국민연금 보험료 (slug: national-pension-premium) ── */
import { 국민연금보험료기준소득월액SpokeContent } from '@/app/policy/[id]/[spoke]/content/국민연금보험료/기준소득월액';
import { 국민연금보험료수령나이SpokeContent } from '@/app/policy/[id]/[spoke]/content/국민연금보험료/수령나이';
import { 국민연금보험료수령액SpokeContent } from '@/app/policy/[id]/[spoke]/content/국민연금보험료/수령액';
import { 국민연금보험료개인연금비교SpokeContent } from '@/app/policy/[id]/[spoke]/content/국민연금보험료/개인연금비교';
import { 국민연금보험료가입기간추납SpokeContent } from '@/app/policy/[id]/[spoke]/content/국민연금보험료/가입기간추납';
import { 국민연금보험료조기노령연금SpokeContent } from '@/app/policy/[id]/[spoke]/content/국민연금보험료/조기노령연금';
import { 국민연금보험료연기연금SpokeContent } from '@/app/policy/[id]/[spoke]/content/국민연금보험료/연기연금';
import { 국민연금보험료유족연금SpokeContent } from '@/app/policy/[id]/[spoke]/content/국민연금보험료/유족연금';
import { 국민연금보험료분할연금SpokeContent } from '@/app/policy/[id]/[spoke]/content/국민연금보험료/분할연금';
import { 국민연금보험료상한하한액SpokeContent } from '@/app/policy/[id]/[spoke]/content/국민연금보험료/상한하한액';
import { 국민연금보험료계산SpokeContent } from '@/app/policy/[id]/[spoke]/content/국민연금보험료/보험료계산';
import { 국민연금보험료가입자종류SpokeContent } from '@/app/policy/[id]/[spoke]/content/국민연금보험료/가입자종류';
import { 국민연금보험료납부SpokeContent } from '@/app/policy/[id]/[spoke]/content/국민연금보험료/납부';
/* ── 의료급여 (slug: medical-benefit) ── */
import { 의료급여1종2종SpokeContent } from '@/app/policy/[id]/[spoke]/content/의료급여/1종2종';
import { 의료급여본인부담금SpokeContent } from '@/app/policy/[id]/[spoke]/content/의료급여/본인부담금';
import { 의료급여수급자격SpokeContent } from '@/app/policy/[id]/[spoke]/content/의료급여/수급자격';
import { 의료급여건강생활유지비SpokeContent } from '@/app/policy/[id]/[spoke]/content/의료급여/건강생활유지비';
import { 의료급여신청방법SpokeContent } from '@/app/policy/[id]/[spoke]/content/의료급여/신청방법';
/* ── 차상위계층 (slug: near-poor) ── */
import { 차상위기준SpokeContent } from '@/app/policy/[id]/[spoke]/content/차상위계층/기준';
import { 차상위기초수급차이SpokeContent } from '@/app/policy/[id]/[spoke]/content/차상위계층/기초수급차이';
import { 차상위세부유형SpokeContent } from '@/app/policy/[id]/[spoke]/content/차상위계층/세부유형';
import { 차상위혜택SpokeContent } from '@/app/policy/[id]/[spoke]/content/차상위계층/혜택';
import { 차상위확인서SpokeContent } from '@/app/policy/[id]/[spoke]/content/차상위계층/확인서';
/* ── 긴급복지지원 (slug: emergency-welfare-support) ── */
import { 긴급복지위기사유SpokeContent } from '@/app/policy/[id]/[spoke]/content/긴급복지/위기사유';
import { 긴급복지생계지원금SpokeContent } from '@/app/policy/[id]/[spoke]/content/긴급복지/생계지원금';
import { 긴급복지소득재산기준SpokeContent } from '@/app/policy/[id]/[spoke]/content/긴급복지/소득재산기준';
import { 긴급복지신청방법SpokeContent } from '@/app/policy/[id]/[spoke]/content/긴급복지/신청방법';
import { 긴급복지지원종류SpokeContent } from '@/app/policy/[id]/[spoke]/content/긴급복지/지원종류';
/* ── 장애인 활동지원서비스 (slug: disability-activity-support) ── */
import { 장애인활동지원대상자격SpokeContent } from '@/app/policy/[id]/[spoke]/content/장애인활동지원/대상자격';
import { 장애인활동지원종합조사SpokeContent } from '@/app/policy/[id]/[spoke]/content/장애인활동지원/종합조사';
import { 장애인활동지원본인부담금SpokeContent } from '@/app/policy/[id]/[spoke]/content/장애인활동지원/본인부담금';
import { 장애인활동지원신청방법SpokeContent } from '@/app/policy/[id]/[spoke]/content/장애인활동지원/신청방법';
import { 장애인활동지원65세전환SpokeContent } from '@/app/policy/[id]/[spoke]/content/장애인활동지원/65세전환';
/* ── 버팀목 전세자금대출 (slug: beotimok-jeonse-loan) ── */
import { 버팀목자격조건SpokeContent } from '@/app/policy/[id]/[spoke]/content/버팀목전세대출/자격조건';
import { 버팀목한도SpokeContent } from '@/app/policy/[id]/[spoke]/content/버팀목전세대출/한도';
import { 버팀목금리SpokeContent } from '@/app/policy/[id]/[spoke]/content/버팀목전세대출/금리';
import { 버팀목청년버팀목SpokeContent } from '@/app/policy/[id]/[spoke]/content/버팀목전세대출/청년버팀목';
import { 버팀목신청방법SpokeContent } from '@/app/policy/[id]/[spoke]/content/버팀목전세대출/신청방법';
/* ── 산재보험 (slug: industrial-accident-insurance) ── */
import { 산재보험급여종류SpokeContent } from '@/app/policy/[id]/[spoke]/content/산재보험/보험급여종류';
import { 산재휴업급여SpokeContent } from '@/app/policy/[id]/[spoke]/content/산재보험/휴업급여';
import { 산재업무상재해SpokeContent } from '@/app/policy/[id]/[spoke]/content/산재보험/업무상재해';
import { 산재신청방법SpokeContent } from '@/app/policy/[id]/[spoke]/content/산재보험/신청방법';
import { 산재회사처리SpokeContent } from '@/app/policy/[id]/[spoke]/content/산재보험/회사처리';
import { 산재요양급여SpokeContent } from '@/app/policy/[id]/[spoke]/content/산재보험/요양급여';
import { 산재상병보상연금SpokeContent } from '@/app/policy/[id]/[spoke]/content/산재보험/상병보상연금';
import { 산재장해급여SpokeContent } from '@/app/policy/[id]/[spoke]/content/산재보험/장해급여';
import { 산재간병급여SpokeContent } from '@/app/policy/[id]/[spoke]/content/산재보험/간병급여';
import { 산재유족급여SpokeContent } from '@/app/policy/[id]/[spoke]/content/산재보험/유족급여';
import { 산재직업재활급여SpokeContent } from '@/app/policy/[id]/[spoke]/content/산재보험/직업재활급여';
import { 산재진폐특례SpokeContent } from '@/app/policy/[id]/[spoke]/content/산재보험/진폐특례';
import { 산재불복절차SpokeContent } from '@/app/policy/[id]/[spoke]/content/산재보험/불복절차';
import { 산재손해배상관계SpokeContent } from '@/app/policy/[id]/[spoke]/content/산재보험/손해배상관계';
import { 산재보험급여적정성보장SpokeContent } from '@/app/policy/[id]/[spoke]/content/산재보험/보험급여적정성보장';
import { 산재가입특례SpokeContent } from '@/app/policy/[id]/[spoke]/content/산재보험/가입특례';
import { 산재사고인정기준SpokeContent } from '@/app/policy/[id]/[spoke]/content/산재보험/사고인정기준';
import { 산재질병인정기준SpokeContent } from '@/app/policy/[id]/[spoke]/content/산재보험/질병인정기준';
import { 산재건강손상자녀SpokeContent } from '@/app/policy/[id]/[spoke]/content/산재보험/건강손상자녀';
import { 산재적용범위SpokeContent } from '@/app/policy/[id]/[spoke]/content/산재보험/적용범위';
import { 산재장해유족특별급여SpokeContent } from '@/app/policy/[id]/[spoke]/content/산재보험/장해유족특별급여';
import { 산재보험관계성립신고SpokeContent } from '@/app/policy/[id]/[spoke]/content/산재보험/보험관계성립신고';
import { 산재중소기업사업주특례SpokeContent } from '@/app/policy/[id]/[spoke]/content/산재보험/중소기업사업주특례';
import { 산재진폐업무상질병인정SpokeContent } from '@/app/policy/[id]/[spoke]/content/산재보험/진폐업무상질병인정';

/* ── 국민건강보험(직장가입자) (slug: national-health-insurance) ── */
import { 건보요양비SpokeContent } from '@/app/policy/[id]/[spoke]/content/국민건강보험/요양비';
import { 건보이의신청심판청구SpokeContent } from '@/app/policy/[id]/[spoke]/content/국민건강보험/이의신청심판청구';
import { 건보부가급여SpokeContent } from '@/app/policy/[id]/[spoke]/content/국민건강보험/부가급여';
import { 건보건강검진SpokeContent } from '@/app/policy/[id]/[spoke]/content/국민건강보험/건강검진';
import { 건보보험료체납독촉SpokeContent } from '@/app/policy/[id]/[spoke]/content/국민건강보험/보험료체납독촉';

/* ── 국민건강보험(지역가입자) (slug: national-health-insurance-regional) ── */
import { 건보지역보험료산정SpokeContent } from '@/app/policy/[id]/[spoke]/content/국민건강보험지역/보험료산정';
import { 건보지역보험료경감SpokeContent } from '@/app/policy/[id]/[spoke]/content/국민건강보험지역/보험료경감';
/* ── 전세사기 피해자 지원 (slug: jeonse-fraud-victim) ── */
import { 전세사기피해자요건SpokeContent } from '@/app/policy/[id]/[spoke]/content/전세사기/피해자요건';
import { 전세사기지원내용SpokeContent } from '@/app/policy/[id]/[spoke]/content/전세사기/지원내용';
import { 전세사기우선매수권SpokeContent } from '@/app/policy/[id]/[spoke]/content/전세사기/우선매수권';
import { 전세사기긴급주거SpokeContent } from '@/app/policy/[id]/[spoke]/content/전세사기/긴급주거';
import { 전세사기신청방법SpokeContent } from '@/app/policy/[id]/[spoke]/content/전세사기/신청방법';

/* ── 일반상환학자금대출 (slug: general-student-loan) ── */
import { 일반상환학자금대출일반상환vs취업후상환학자금선택기준SpokeContent } from '@/app/policy/[id]/[spoke]/content/일반상환학자금대출/일반상환vs취업후상환학자금선택기준';
import { 일반상환학자금대출일반상환학자금2026금리이자SpokeContent } from '@/app/policy/[id]/[spoke]/content/일반상환학자금대출/일반상환학자금2026금리이자';
import { 일반상환학자금대출일반상환학자금거치기간최대선택SpokeContent } from '@/app/policy/[id]/[spoke]/content/일반상환학자금대출/일반상환학자금거치기간최대선택';
import { 일반상환학자금대출일반상환학자금졸업후상환방법SpokeContent } from '@/app/policy/[id]/[spoke]/content/일반상환학자금대출/일반상환학자금졸업후상환방법';

/* ── 청년주거지원 (slug: youth-housing-support) ── */
import { 청년주거지원청년월세지원신청조건나이소득2026SpokeContent } from '@/app/policy/[id]/[spoke]/content/청년주거지원/청년월세지원신청조건나이소득2026';
import { 청년주거지원청년주거급여분리지급조건금액SpokeContent } from '@/app/policy/[id]/[spoke]/content/청년주거지원/청년주거급여분리지급조건금액';
import { 청년주거지원청년주거지원정책문제점못받는경우SpokeContent } from '@/app/policy/[id]/[spoke]/content/청년주거지원/청년주거지원정책문제점못받는경우';
import { 청년주거지원청년월세전세공공임대비교SpokeContent } from '@/app/policy/[id]/[spoke]/content/청년주거지원/청년월세전세공공임대비교';

/* ── 평생교육이용권 (slug: lifelong-education-voucher) ── */
import { 평생교육이용권평생교육이용권사용가능기관강좌확인SpokeContent } from '@/app/policy/[id]/[spoke]/content/평생교육이용권/평생교육이용권사용가능기관강좌확인';
import { 평생교육이용권평생교육이용권지원금우수이용자70만원SpokeContent } from '@/app/policy/[id]/[spoke]/content/평생교육이용권/평생교육이용권지원금우수이용자70만원';
import { 평생교육이용권평생교육이용권신청기간학습계획서작성SpokeContent } from '@/app/policy/[id]/[spoke]/content/평생교육이용권/평생교육이용권신청기간학습계획서작성';
import { 평생교육이용권평생교육이용권대상자기초차상위SpokeContent } from '@/app/policy/[id]/[spoke]/content/평생교육이용권/평생교육이용권대상자기초차상위';

/* ── 실업크레딧 (slug: unemployment-credit) ── */
import { 실업크레딧실업크레딧이득안하면어떻게SpokeContent } from '@/app/policy/[id]/[spoke]/content/실업크레딧/실업크레딧이득안하면어떻게';
import { 실업크레딧실업크레딧퇴사후신청방법시기SpokeContent } from '@/app/policy/[id]/[spoke]/content/실업크레딧/실업크레딧퇴사후신청방법시기';
import { 실업크레딧실업크레딧국민연금동시납부가능SpokeContent } from '@/app/policy/[id]/[spoke]/content/실업크레딧/실업크레딧국민연금동시납부가능';
import { 실업크레딧실업크레딧단점해지구직급여주의SpokeContent } from '@/app/policy/[id]/[spoke]/content/실업크레딧/실업크레딧단점해지구직급여주의';

/* ── 중소기업혁신바우처 (slug: sme-innovation-voucher) ── */
import { 중소기업혁신바우처혁신바우처공고신청자격지원금액SpokeContent } from '@/app/policy/[id]/[spoke]/content/중소기업혁신바우처/혁신바우처공고신청자격지원금액';
import { 중소기업혁신바우처혁신바우처공급기업수행기관선택SpokeContent } from '@/app/policy/[id]/[spoke]/content/중소기업혁신바우처/혁신바우처공급기업수행기관선택';
import { 중소기업혁신바우처혁신바우처사업계획서심사기준SpokeContent } from '@/app/policy/[id]/[spoke]/content/중소기업혁신바우처/혁신바우처사업계획서심사기준';
import { 중소기업혁신바우처혁신바우처플랫폼일반재기신청절차SpokeContent } from '@/app/policy/[id]/[spoke]/content/중소기업혁신바우처/혁신바우처플랫폼일반재기신청절차';

/* ── 새도약론 (slug: leap-loan) ── */
import { 새도약론새도약론신청자격대상자확인SpokeContent } from '@/app/policy/[id]/[spoke]/content/새도약론/새도약론신청자격대상자확인';
import { 새도약론새도약론취급기관대부업체목록SpokeContent } from '@/app/policy/[id]/[spoke]/content/새도약론/새도약론취급기관대부업체목록';
import { 새도약론새도약론새도약기금새출발기금차이SpokeContent } from '@/app/policy/[id]/[spoke]/content/새도약론/새도약론새도약기금새출발기금차이';
import { 새도약론새도약론소각채무탕감조건SpokeContent } from '@/app/policy/[id]/[spoke]/content/새도약론/새도약론소각채무탕감조건';

/* ── 팁스TIPS (slug: tips-program) ── */
import { 팁스TIPS팁스지원자격스타트업단계기준SpokeContent } from '@/app/policy/[id]/[spoke]/content/팁스TIPS/팁스지원자격스타트업단계기준';
import { 팁스TIPS팁스운영사선정매칭절차SpokeContent } from '@/app/policy/[id]/[spoke]/content/팁스TIPS/팁스운영사선정매칭절차';
import { 팁스TIPS팁스창업사업화RD지원금SpokeContent } from '@/app/policy/[id]/[spoke]/content/팁스TIPS/팁스창업사업화RD지원금';
import { 팁스TIPS팁스프로그램종류트랙차이SpokeContent } from '@/app/policy/[id]/[spoke]/content/팁스TIPS/팁스프로그램종류트랙차이';

/* ── 국가건강검진 (slug: national-health-checkup) ── */
import { 국가건강검진국가건강검진대상자짝수홀수출생연도SpokeContent } from '@/app/policy/[id]/[spoke]/content/국가건강검진/국가건강검진대상자짝수홀수출생연도';
import { 국가건강검진국가건강검진예약방법지정병원SpokeContent }         from '@/app/policy/[id]/[spoke]/content/국가건강검진/국가건강검진예약방법지정병원';
import { 국가건강검진국가건강검진연령별항목검사목록SpokeContent }       from '@/app/policy/[id]/[spoke]/content/국가건강검진/국가건강검진연령별항목검사목록';
import { 국가건강검진국가건강검진안하면불이익의무여부SpokeContent }     from '@/app/policy/[id]/[spoke]/content/국가건강검진/국가건강검진안하면불이익의무여부';

/* ── 새출발기금 (slug: small-biz-bank-debt) ── */
import { 새출발기금새출발기금신청자격부실차주기준SpokeContent } from '@/app/policy/[id]/[spoke]/content/새출발기금/새출발기금신청자격부실차주기준';
import { 새출발기금새출발기금원금탕감감면조건SpokeContent }     from '@/app/policy/[id]/[spoke]/content/새출발기금/새출발기금원금탕감감면조건';
import { 새출발기금새출발기금단점주의사항신청전SpokeContent }   from '@/app/policy/[id]/[spoke]/content/새출발기금/새출발기금단점주의사항신청전';
import { 새출발기금새출발기금희망리턴패키지차이SpokeContent }   from '@/app/policy/[id]/[spoke]/content/새출발기금/새출발기금희망리턴패키지차이';
import { 새출발기금감면율SpokeContent }   from '@/app/policy/[id]/[spoke]/content/새출발기금/감면율';
import { 새출발기금재산심사SpokeContent } from '@/app/policy/[id]/[spoke]/content/새출발기금/재산심사';
import { 새출발기금모의감면계산SpokeContent } from '@/app/policy/[id]/[spoke]/content/새출발기금/모의감면계산';
import { 새출발기금부실우려차주금리조정SpokeContent } from '@/app/policy/[id]/[spoke]/content/새출발기금/부실우려차주금리조정';
import { 새출발기금보이스피싱주의SpokeContent } from '@/app/policy/[id]/[spoke]/content/새출발기금/보이스피싱주의';
import { 새출발기금상환유예SpokeContent } from '@/app/policy/[id]/[spoke]/content/새출발기금/상환유예';
import { 새출발기금신용SpokeContent }     from '@/app/policy/[id]/[spoke]/content/새출발기금/신용';
import { 새출발기금vs신복위SpokeContent } from '@/app/policy/[id]/[spoke]/content/새출발기금/vs신복위';
import { 새출발기금직장인SpokeContent }   from '@/app/policy/[id]/[spoke]/content/새출발기금/직장인';

/* ── 폐업소상공인채무조정 (slug: small-biz-closed-debt) ── */
import { 폐업소상공인채무조정폐업소상공인채무조정신청방법절차SpokeContent } from '@/app/policy/[id]/[spoke]/content/폐업소상공인채무조정/폐업소상공인채무조정신청방법절차';
import { 폐업소상공인채무조정재기사업화자금SpokeContent } from '@/app/policy/[id]/[spoke]/content/폐업소상공인채무조정/재기사업화자금';
import { 폐업소상공인채무조정전직장려수당SpokeContent } from '@/app/policy/[id]/[spoke]/content/폐업소상공인채무조정/전직장려수당';
import { 폐업소상공인채무조정사업정리컨설팅SpokeContent } from '@/app/policy/[id]/[spoke]/content/폐업소상공인채무조정/사업정리컨설팅';
import { 폐업소상공인채무조정폐업소상공인점포철거비지원금액SpokeContent }   from '@/app/policy/[id]/[spoke]/content/폐업소상공인채무조정/폐업소상공인점포철거비지원금액';
import { 폐업소상공인채무조정희망리턴패키지폐업재기지원총정리SpokeContent } from '@/app/policy/[id]/[spoke]/content/폐업소상공인채무조정/희망리턴패키지폐업재기지원총정리';
import { 폐업소상공인채무조정폐업소상공인지원새출발기금차이SpokeContent }   from '@/app/policy/[id]/[spoke]/content/폐업소상공인채무조정/폐업소상공인지원새출발기금차이';

/* ── 소상공인신용회복 (slug: small-biz-credit-recovery) ── */
import { 소상공인신용회복소상공인신용회복신청자격연체기준SpokeContent }       from '@/app/policy/[id]/[spoke]/content/소상공인신용회복/소상공인신용회복신청자격연체기준';
import { 소상공인신용회복소상공인신속신용사면탕감신청방법SpokeContent }       from '@/app/policy/[id]/[spoke]/content/소상공인신용회복/소상공인신속신용사면탕감신청방법';
import { 소상공인신용회복소상공인신용회복후신용점수회복SpokeContent }         from '@/app/policy/[id]/[spoke]/content/소상공인신용회복/소상공인신용회복후신용점수회복';
import { 소상공인신용회복소상공인신용회복위원회새출발기금비교SpokeContent }   from '@/app/policy/[id]/[spoke]/content/소상공인신용회복/소상공인신용회복위원회새출발기금비교';

/* ── 대학생주거지원 (slug: college-student-housing) ── */
import { 대학생주거지원행복기숙사신청자격비용LH공공기숙사SpokeContent }       from '@/app/policy/[id]/[spoke]/content/대학생주거지원/행복기숙사신청자격비용LH공공기숙사';
import { 대학생주거지원대학생기숙사비지원한국장학재단SpokeContent }           from '@/app/policy/[id]/[spoke]/content/대학생주거지원/대학생기숙사비지원한국장학재단';
import { 대학생주거지원서울대학생공공기숙사종류신청방법SpokeContent }         from '@/app/policy/[id]/[spoke]/content/대학생주거지원/서울대학생공공기숙사종류신청방법';
import { 대학생주거지원희망하우징행복기숙사대학생비교SpokeContent }           from '@/app/policy/[id]/[spoke]/content/대학생주거지원/희망하우징행복기숙사대학생비교';

/* ── 무료법률구조 (slug: free-legal-aid) ── */
import { 무료법률구조무료법률구조신청자격소득기준중위125SpokeContent }         from '@/app/policy/[id]/[spoke]/content/무료법률구조/무료법률구조신청자격소득기준중위125';
import { 무료법률구조무료법률구조대상사건민사가사형사종류SpokeContent }         from '@/app/policy/[id]/[spoke]/content/무료법률구조/무료법률구조대상사건민사가사형사종류';
import { 무료법률구조무료법률구조신청방법132번온라인방문SpokeContent }         from '@/app/policy/[id]/[spoke]/content/무료법률구조/무료법률구조신청방법132번온라인방문';
import { 무료법률구조법률상담무료기준소송구조차이전액면제SpokeContent }         from '@/app/policy/[id]/[spoke]/content/무료법률구조/법률상담무료기준소송구조차이전액면제';

/* ── 국가근로장학금 (slug: national-work-scholarship) ── */
import { 국가근로장학금국가근로장학금시간당단가교내교외2026SpokeContent }     from '@/app/policy/[id]/[spoke]/content/국가근로장학금/국가근로장학금시간당단가교내교외2026';
import { 국가근로장학금국가근로장학금신청자격소득분위기준SpokeContent }       from '@/app/policy/[id]/[spoke]/content/국가근로장학금/국가근로장학금신청자격소득분위기준';
import { 국가근로장학금국가근로장학금신청방법한국장학재단SpokeContent }       from '@/app/policy/[id]/[spoke]/content/국가근로장학금/국가근로장학금신청방법한국장학재단';
import { 국가근로장학금국가근로장학금교내교외장학금중복가능SpokeContent }     from '@/app/policy/[id]/[spoke]/content/국가근로장학금/국가근로장학금교내교외장학금중복가능';

/* ── 가족돌봄휴가 추가 4개 (slug: family-care-leave) ── */
import { 가족돌봄휴가가족돌봄휴가시간단위분할사용방법SpokeContent }           from '@/app/policy/[id]/[spoke]/content/가족돌봄휴가/가족돌봄휴가시간단위분할사용방법';
import { 가족돌봄휴가가족돌봄휴가급여없음무급재난특례지원SpokeContent }       from '@/app/policy/[id]/[spoke]/content/가족돌봄휴가/가족돌봄휴가급여없음무급재난특례지원';
import { 가족돌봄휴가가족돌봄휴가신청서류증빙서류회사승인SpokeContent }       from '@/app/policy/[id]/[spoke]/content/가족돌봄휴가/가족돌봄휴가신청서류증빙서류회사승인';
import { 가족돌봄휴가가족돌봄휴가연장조건20일초과가능한가SpokeContent }       from '@/app/policy/[id]/[spoke]/content/가족돌봄휴가/가족돌봄휴가연장조건20일초과가능한가';

/* ── 청년일자리도약장려금 (slug: youth-job-leap-incentive) ── */
import { 청년일자리도약장려금청년일자리도약장려금지원금액수도권비수도권차이SpokeContent } from '@/app/policy/[id]/[spoke]/content/청년일자리도약장려금/청년일자리도약장려금지원금액수도권비수도권차이';
import { 청년일자리도약장려금청년일자리도약장려금신청자격기업조건SpokeContent }           from '@/app/policy/[id]/[spoke]/content/청년일자리도약장려금/청년일자리도약장려금신청자격기업조건';
import { 청년일자리도약장려금청년일자리도약장려금신청방법work24SpokeContent }             from '@/app/policy/[id]/[spoke]/content/청년일자리도약장려금/청년일자리도약장려금신청방법work24';
import { 청년일자리도약장려금청년일자리도약장려금고용유지기간조건SpokeContent }           from '@/app/policy/[id]/[spoke]/content/청년일자리도약장려금/청년일자리도약장려금고용유지기간조건';

/* ── 저소득에너지효율개선 (slug: low-income-energy-efficiency) ── */
import { 저소득에너지효율개선저소득에너지효율개선신청자격기초수급차상위SpokeContent }         from '@/app/policy/[id]/[spoke]/content/저소득에너지효율개선/저소득에너지효율개선신청자격기초수급차상위';
import { 저소득에너지효율개선저소득에너지효율개선지원항목단열창호보일러에어컨SpokeContent }   from '@/app/policy/[id]/[spoke]/content/저소득에너지효율개선/저소득에너지효율개선지원항목단열창호보일러에어컨';
import { 저소득에너지효율개선저소득에너지효율개선신청방법주민센터절차SpokeContent }           from '@/app/policy/[id]/[spoke]/content/저소득에너지효율개선/저소득에너지효율개선신청방법주민센터절차';
import { 저소득에너지효율개선저소득에너지효율개선지원금액가구당243만원SpokeContent }         from '@/app/policy/[id]/[spoke]/content/저소득에너지효율개선/저소득에너지효율개선지원금액가구당243만원';
import { 케스파컵결선티켓예매SpokeContent } from '@/app/policy/[id]/[spoke]/content/kespa-cup-2026/결선티켓예매';


import { 소상공인정책자금대상자조회SpokeContent } from '@/app/policy/[id]/[spoke]/content/small-biz-policy-fund/대상자조회';
import { 소상공인정책자금접수대기SpokeContent } from '@/app/policy/[id]/[spoke]/content/small-biz-policy-fund/접수대기';
import { 소상공인정책자금부결재신청SpokeContent } from '@/app/policy/[id]/[spoke]/content/small-biz-policy-fund/부결재신청';
import { militaryComboEligibilityCertificateSpokeContent } from '@/app/policy/[id]/[spoke]/content/military-savings-combo/eligibility-certificate';
import { militaryComboMonthlyLimitPaymentSpokeContent } from '@/app/policy/[id]/[spoke]/content/military-savings-combo/monthly-limit-payment';
import { militaryComboLastMonthSignupSpokeContent } from '@/app/policy/[id]/[spoke]/content/military-savings-combo/last-month-signup';
import { militaryComboMatchingFundPayoutSpokeContent } from '@/app/policy/[id]/[spoke]/content/military-savings-combo/matching-fund-payout';
import { militaryComboMaturityTerminationSpokeContent } from '@/app/policy/[id]/[spoke]/content/military-savings-combo/maturity-termination';
import { jointOwnershipSpecialCaseApplicationSpokeContent } from '@/app/policy/[id]/[spoke]/content/joint-ownership-couple/special-case-application';
import { jointOwnershipBetterSpokeContent } from '@/app/policy/[id]/[spoke]/content/joint-ownership-couple/joint-ownership-better';
import { jointOwnershipPropertyTaxSpokeContent } from '@/app/policy/[id]/[spoke]/content/joint-ownership-couple/joint-ownership-property-tax';
import { jointOwnershipChangeSpokeContent } from '@/app/policy/[id]/[spoke]/content/joint-ownership-couple/joint-ownership-change';
import { jointOwnershipCapitalGainsSpokeContent } from '@/app/policy/[id]/[spoke]/content/joint-ownership-couple/joint-ownership-capital-gains';
import { designatedForexBankSpokeContent } from '@/app/policy/[id]/[spoke]/content/overseas-remittance-limit/designated-forex-bank';
import { remittanceNtsReportSpokeContent } from '@/app/policy/[id]/[spoke]/content/overseas-remittance-limit/remittance-nts-report';
import { nonResidentRemittanceSpokeContent } from '@/app/policy/[id]/[spoke]/content/overseas-remittance-limit/non-resident-remittance';
import { remittanceLimitExceededSpokeContent } from '@/app/policy/[id]/[spoke]/content/overseas-remittance-limit/remittance-limit-exceeded';
import { 실손보험백내장다초점SpokeContent } from '@/app/policy/[id]/[spoke]/content/실손보험/백내장다초점';
import { 실손보험대장내시경용종SpokeContent } from '@/app/policy/[id]/[spoke]/content/실손보험/대장내시경용종';
import { 실손보험사마귀냉동치료SpokeContent } from '@/app/policy/[id]/[spoke]/content/실손보험/사마귀냉동치료';
import { 실손보험여유증지방흡입SpokeContent } from '@/app/policy/[id]/[spoke]/content/실손보험/여유증지방흡입';
import { 실손보험안검하수목적SpokeContent } from '@/app/policy/[id]/[spoke]/content/실손보험/안검하수목적';
import { 실손보험하지정맥류시술SpokeContent } from '@/app/policy/[id]/[spoke]/content/실손보험/하지정맥류시술';
import { 실손보험치과임플란트SpokeContent } from '@/app/policy/[id]/[spoke]/content/실손보험/치과임플란트';
import { 실손보험위내시경건강검진SpokeContent } from '@/app/policy/[id]/[spoke]/content/실손보험/위내시경건강검진';
import { 실손보험대상포진예방접종SpokeContent } from '@/app/policy/[id]/[spoke]/content/실손보험/대상포진예방접종';
import { 실손보험요로결석쇄석술SpokeContent } from '@/app/policy/[id]/[spoke]/content/실손보험/요로결석쇄석술';
import { 실손보험보험료인상기준SpokeContent } from '@/app/policy/[id]/[spoke]/content/실손보험/보험료인상기준';
import { 실손보험청구기간3년SpokeContent } from '@/app/policy/[id]/[spoke]/content/실손보험/청구기간3년';
import { 실손보험연간한도SpokeContent } from '@/app/policy/[id]/[spoke]/content/실손보험/연간한도';
import { 실손보험상급병실료차액SpokeContent } from '@/app/policy/[id]/[spoke]/content/실손보험/상급병실료차액';
import { 실손보험통원한도SpokeContent } from '@/app/policy/[id]/[spoke]/content/실손보험/통원한도';
import { 실손보험3대비급여SpokeContent } from '@/app/policy/[id]/[spoke]/content/실손보험/3대비급여';

export const SpokesRegistry: Record<string, Record<string, SpokeData>> = {
  'overseas-remittance-limit': {
    'designated-forex-bank': designatedForexBankSpokeContent,
    'remittance-nts-report': remittanceNtsReportSpokeContent,
    'non-resident-remittance': nonResidentRemittanceSpokeContent,
    'remittance-limit-exceeded': remittanceLimitExceededSpokeContent,
  },
  'joint-ownership-couple': {
    'special-case-application': jointOwnershipSpecialCaseApplicationSpokeContent,
    'joint-ownership-better': jointOwnershipBetterSpokeContent,
    'joint-ownership-property-tax': jointOwnershipPropertyTaxSpokeContent,
    'joint-ownership-change': jointOwnershipChangeSpokeContent,
    'joint-ownership-capital-gains': jointOwnershipCapitalGainsSpokeContent,
  },
  'military-savings-combo': {
    'eligibility-certificate': militaryComboEligibilityCertificateSpokeContent,
    'monthly-limit-payment': militaryComboMonthlyLimitPaymentSpokeContent,
    'last-month-signup': militaryComboLastMonthSignupSpokeContent,
    'matching-fund-payout': militaryComboMatchingFundPayoutSpokeContent,
    'maturity-termination': militaryComboMaturityTerminationSpokeContent,
  },

  'lh-apply-plus': {
    '서류제출대상자': LH청약플러스서류제출대상자SpokeContent,
    '당첨자발표조회': LH청약플러스당첨자발표조회SpokeContent,
  },

  'youth-future-savings': {
    '출시일정':     출시일정SpokeContent,
    'vs-도약계좌':  VsLeapSpokeContent,
    '중도해지':     CancelSpokeContent,
    '기여금-계산':  ContribSpokeContent,
    '소득없으면':   NoIncomeSpokeContent,
    '대학생':       대학생SpokeContent,
    '실수령액':     실수령액SpokeContent,
    '이자소득세':   이자소득세SpokeContent,
    '군인':         미래적금군인SpokeContent,
    '은행별비교':   미래적금은행별SpokeContent,
    '갈아타기':     미래적금갈아타기SpokeContent,
    '우대형':       미래적금우대형SpokeContent,
    'type-correction': 미래적금정정원상복구SpokeContent,
    '심사일정':     미래적금심사일정SpokeContent,
    '프리랜서':     미래적금프리랜서SpokeContent,
    '장병적금-은행별비교': 장병적금은행별SpokeContent,
  },

  'national-pension-reduction': {
    '감액기준':     노령연금감액기준SpokeContent,
    '환급':         노령연금환급SpokeContent,
    '감액계산':     노령연금감액계산SpokeContent,
    '부양가족연금': 노령연금부양가족연금SpokeContent,
    '감액기간':     노령연금감액기간SpokeContent,
    '감액회피':     노령연금감액회피SpokeContent,
  },

  'earned-income-tax-credit': {
    '지급일': 지급일SpokeContent,
    '조회방법': 조회방법SpokeContent,
    '환수추징': 환수추징SpokeContent,
    '신청기간': 신청기간SpokeContent,
    '자녀장려금': 자녀장려금SpokeContent,
    '모의계산': 장려금모의계산SpokeContent,
    '자동신청': 장려금자동신청SpokeContent,
    '지급제외': 장려금지급제외SpokeContent,
    '신청자격': 근로장려금신청자격SpokeContent,
    '반기신청': 근로장려금반기신청SpokeContent,
    '신청방법': 근로장려금신청방법SpokeContent,
    '이의신청': 근로장려금이의신청SpokeContent,
    '가구구분': 근로장려금가구구분SpokeContent,
  },

  'youth-tomorrow-savings': {
    '군인':    군인SpokeContent,
    '중도해지': 중도해지SpokeContent,
    '신청기간': 내일저축신청기간SpokeContent,
    '가입자격': 청년내일저축가입자격SpokeContent,
    '만기수령액': 청년내일저축만기SpokeContent,
    '유지조건': 청년내일저축유지SpokeContent,
    '비교':    청년내일저축비교SpokeContent,
    '신청방법': 청년내일저축신청SpokeContent,
  },

  'job-seeker-benefit': {
    'freelance-income-report': 실업급여프리랜서소득신고SpokeContent,
    '자발적퇴사': 자발적퇴사SpokeContent,
    '재수급':     재수급SpokeContent,
    '알바단기':   알바단기SpokeContent,
    '수급자격':   실업급여수급자격SpokeContent,
    '상한하한액': 실업급여상한하한SpokeContent,
    '수령액계산': 실업급여수령액SpokeContent,
    '소정급여일수': 실업급여소정일수SpokeContent,
    '모의계산':   실업급여모의계산SpokeContent,
    '권고사직':   실업급여권고사직SpokeContent,
    '계약만료':   실업급여계약만료SpokeContent,
    '이직확인서': 실업급여이직확인서SpokeContent,
    '임신질병':   실업급여임신질병SpokeContent,
    '신청방법':   실업급여신청방법SpokeContent,
    '신청기간':   실업급여신청기간SpokeContent,
    '구직활동':   실업급여구직활동SpokeContent,
    '입금일':     실업급여입금일SpokeContent,
    '부정수급':   실업급여부정수급SpokeContent,
    '세금':       실업급여세금SpokeContent,
    '퇴직금':     실업급여퇴직금SpokeContent,
    '조기재취업': 실업급여조기재취업SpokeContent,
    '일용직':     실업급여일용직SpokeContent,
    '자영업자':   실업급여자영업자SpokeContent,
    '65세':       실업급여65세SpokeContent,
    '예술인특고': 실업급여예술인SpokeContent,
    '건보국민연금': 실업급여건보연금SpokeContent,
    '상병급여':   실업급여상병급여SpokeContent,
    '수급유예':   실업급여수급유예SpokeContent,
    '해외여행':   실업급여해외여행SpokeContent,
    '자격증구직활동': 실업급여자격증구직활동SpokeContent,
    '임금체불':   실업급여임금체불SpokeContent,
    '동거친족':   실업급여동거친족SpokeContent,
    '국민취업지원중복': 실업급여국민취업지원중복SpokeContent,
    '실업크레딧': 실업급여실업크레딧SpokeContent,
    'unpaid-benefit-death-claim': 미지급실업급여SpokeContent,
    'objection-review-request':   실업급여이의제기심사청구SpokeContent,
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
    '신청방법':    내일배움카드신청SpokeContent,
    '유효기간':    내일배움카드유효기간SpokeContent,
    '자영업자':    내일배움카드자영업자SpokeContent,
    '자격증':      내일배움카드자격증SpokeContent,
    '훈련장려금':  내일배움카드장려금SpokeContent,
    '대상제외':    내일배움카드대상SpokeContent,
    '국취제':      내일배움카드국취제SpokeContent,
    '자비부담':    내일배움카드자비부담SpokeContent,
    'college-student': 내일배움카드대학생SpokeContent,
    'attendance-penalty': 내일배움카드출석률패널티SpokeContent,
    'contract-worker': 내일배움카드계약직기간제SpokeContent,
  },

  'parental-leave-pay': {
    '급여계산':  급여계산SpokeContent,
    '6+6부모':   부모함께SpokeContent,
    '신청방법':  육아휴직신청방법SpokeContent,
    '회사부담':  회사부담SpokeContent,
    '한부모':    육아휴직한부모SpokeContent,
    '건강보험료': 육아휴직건강보험료SpokeContent,
    '분할':      육아휴직분할SpokeContent,
    '복직':      육아휴직복직SpokeContent,
    '연차':      육아휴직연차SpokeContent,
    '퇴직금':    육아휴직퇴직금SpokeContent,
    '남편':      육아휴직남편SpokeContent,
    '계약직':    육아휴직계약직SpokeContent,
    '퇴사':      육아휴직퇴사SpokeContent,
    '국민연금':  육아휴직국민연금SpokeContent,
    '12세':      육아휴직12세SpokeContent,
    '단기육아휴직': 육아휴직단기SpokeContent,
    'civil-servant': 육아휴직공무원SpokeContent,
    'fraud': 육아휴직부정수급SpokeContent,
    'eligibility': 육아휴직조건SpokeContent,
    '18-months': 육아휴직1년6개월SpokeContent,
    'confirmation-letter': 육아휴직확인서발급SpokeContent,
  },

  'indemnity-insurance-generations': {
    'three-nonbenefit': 실손보험3대비급여SpokeContent,
    'outpatient-limit': 실손보험통원한도SpokeContent,
    'upper-room-charge': 실손보험상급병실료차액SpokeContent,
    'annual-limit': 실손보험연간한도SpokeContent,
    'claim-period-3y': 실손보험청구기간3년SpokeContent,
    'premium-increase': 실손보험보험료인상기준SpokeContent,
    'ureteral-stone': 실손보험요로결석쇄석술SpokeContent,
    'shingles-vaccine': 실손보험대상포진예방접종SpokeContent,
    'gastroscopy-checkup': 실손보험위내시경건강검진SpokeContent,
    'dental-implant': 실손보험치과임플란트SpokeContent,
    'varicose-vein': 실손보험하지정맥류시술SpokeContent,
    'blepharoptosis-purpose': 실손보험안검하수목적SpokeContent,
    'gynecomastia-liposuction': 실손보험여유증지방흡입SpokeContent,
    'wart-cryotherapy': 실손보험사마귀냉동치료SpokeContent,
    'colonoscopy-polyp': 실손보험대장내시경용종SpokeContent,
    'cataract-multifocal': 실손보험백내장다초점SpokeContent,
    'eligibility': 실손보험가입조건SpokeContent,
    'non-covered-benefits': 실손보험비급여보장SpokeContent,
    'renewal-reenrollment': 실손보험갱신재가입SpokeContent,
    'seizure': 실손보험압류SpokeContent,
    'duplicate-coverage': 실손보험중복보상SpokeContent,
    'maturity': 실손보험만기SpokeContent,
    'claim-documents': 실손보험청구방법SpokeContent,
    'silson24-claim': 실손보험실손24청구SpokeContent,
    'nonpayment-premium-surcharge': 실손보험비급여할증SpokeContent,
    'dementia-coverage': 실손보험치매보상SpokeContent,
    'nursing-care-alternative': 실손보험간병비대안SpokeContent,
    'hemorrhoid-surgery-claim': 실손보험치질수술SpokeContent,
    'incontinence-surgery-denied': 실손보험요실금수술SpokeContent,
    'oriental-hospital-mri': 실손보험한방병원MRISpokeContent,
    'hearing-aid-benefit': 실손보험보청기급여SpokeContent,
    'oriental-clinic-claim': 실손보험한의원청구SpokeContent,
    'gynecology-claim': 실손보험산부인과청구SpokeContent,
    'diabetes-claim': 실손보험당뇨실비청구SpokeContent,
    'mental-health-claim': 실손보험우울증공황장애실비SpokeContent,
    'dental-claim': 실손보험치과실비청구SpokeContent,
    'acne-claim': 실손보험여드름실비청구SpokeContent,
    'manual-therapy-denied': 실손보험도수치료거절횟수SpokeContent,
    'eswt-limit': 실손보험체외충격파한도SpokeContent,
    'prolotherapy-limit': 실손보험프롤로주사한도SpokeContent,
    'mri-deductible-limit': 실손보험MRI공제한도SpokeContent,
    'mounjaro-condition': 실손보험마운자로실비조건SpokeContent,
    'industrial-accident-duplicate': 실손보험산재실비중복SpokeContent,
    'copay-ceiling-refund': 실손보험본인부담상한제환수SpokeContent,
    'wegovy-disease-code': 실손보험위고비질병코드SpokeContent,
    'vitamin-injection-exclusion': 실손보험비타민주사면책SpokeContent,
    'auto-insurance-offset': 실손보험자동차보험실비중복SpokeContent,
    'emergency-room-fee': 실손보험응급실실비면책SpokeContent,
    'self-admission-denied': 실손보험자의입원면책SpokeContent,
    'dental-oriental-exclusion': 실손보험치과한방면책SpokeContent,
    'cosmetic-purpose-exclusion': 실손보험미용목적면책SpokeContent,
    'admission-count-rule': 실손보험입원횟수판단SpokeContent,
    'claim-payment-deadline': 실손보험보험금지급기일SpokeContent,
    'nonsevere-excluded-items': 실손보험비중증제외항목SpokeContent,
    'disclosure-duty-breach': 실손보험고지의무위반해지SpokeContent,
    'reenrollment-no-rejection': 실손보험재가입거절불가SpokeContent,
    'severe-disease-scope': 실손보험산정특례대상질환SpokeContent,
    'hfmd-child-claim': 실손보험수족구실비청구SpokeContent,
    'bunion-claim': 실손보험무지외반증실비청구SpokeContent,
    'food-poisoning-claim': 실손보험식중독실비청구SpokeContent,
    'fracture-diagnosis-benefit': 실손보험골절진단비청구SpokeContent,
    'artificial-tears-claim': 실손보험인공눈물실비청구SpokeContent,
    'rhinitis-surgery-claim': 실손보험비염수술실비청구SpokeContent,
    'influenza-claim': 실손보험독감실비청구SpokeContent,
    'direct-comparison': 실손보험다이렉트비교SpokeContent,
    'lapse-revival': 실손보험실효부활SpokeContent,
    'card-payment': 실손보험카드결제SpokeContent,
    'payment-suspension': 실손보험납입중지SpokeContent,
    'health-checkup-claim': 실손보험건강검진청구SpokeContent,
    'first-gen-cancel-check': 실손보험1세대해지판단SpokeContent,
    'second-fourth-gen-conversion': 실손보험24세대전환판단SpokeContent,
    'neck-disc-claim': 실손보험목디스크청구SpokeContent,
    'group-vs-individual': 실손보험단체개인비교SpokeContent,
  },

  'new-leap': {
    '신청방법':    새도약기금신청방법SpokeContent,
    '자격조건':    자격조건SpokeContent,
    '채무소각':    채무소각SpokeContent,
    '대상자조회':  대상자조회SpokeContent,
  },

  'first-meet': {
    'card-balance-check': 첫만남카드사별잔액조회SpokeContent,
    '사용처':    첫만남사용처SpokeContent,
    '유효기간':  첫만남유효기간SpokeContent,
    '신청기한':  첫만남신청기한SpokeContent,
    '잔액조회':  첫만남잔액조회SpokeContent,
  },

  'pension-insurance-vs-savings': {
    'generation-comparison': 연금저축세대별비교SpokeContent,
  },

  'disability-pension': {
    'mock-calculation': 장애인연금모의계산SpokeContent,
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
    '신청방법': 기초수급신청방법SpokeContent,
    '부양의무자': 기초수급부양의무자SpokeContent,
    '재산기준': 기초수급재산기준SpokeContent,
    '생계급여액': 기초수급생계급여액SpokeContent,
    '2027-increase': 기초수급2027년인상SpokeContent,
    '근로소득공제': 기초수급근로소득공제SpokeContent,
  },

  'energy-voucher': {
    '사용처':      에너지바우처사용처SpokeContent,
    '대상자확인':  에너지바우처대상자확인SpokeContent,
    '자동신청':    에너지바우처자동신청SpokeContent,
    '신청기간':    에너지바우처신청기간SpokeContent,
    '잔액조회':    에너지바우처잔액SpokeContent,
    '당겨쓰기':    에너지바우처당겨쓰기SpokeContent,
    '전기요금할인': 에너지바우처전기할인SpokeContent,
    '냉방지원금':   에너지바우처냉방지원금SpokeContent,
    '연탄전환':     에너지바우처연탄전환SpokeContent,
    '신청방법':     에너지바우처신청방법SpokeContent,
  },

  'efficient-appliance-support': {
    '대상':       효율가전대상SpokeContent,
    '환급률':     효율가전환급률SpokeContent,
    '품목':       효율가전품목SpokeContent,
    '신청방법':   효율가전신청SpokeContent,
    '에어컨':     효율가전에어컨SpokeContent,
  },

  'nationwide-energy-support-guide': {
    '냉방비':     냉난방비냉방SpokeContent,
    '난방비':     냉난방비난방SpokeContent,
    '문의처':     냉난방비문의SpokeContent,
  },

  'senior-customized-care': {
    '신청자격':   노인맞춤돌봄신청자격SpokeContent,
    '서비스내용': 노인맞춤돌봄서비스SpokeContent,
    '신청방법':   노인맞춤돌봄신청방법SpokeContent,
    '특화서비스': 노인맞춤돌봄특화SpokeContent,
    '생활지원사': 노인맞춤돌봄생활지원사SpokeContent,
  },

  'housing-scholar': {
    '지원금액':   주거안정장학금지원금액SpokeContent,
    '신청자격':   주거안정장학금신청자격SpokeContent,
    '신청방법':   주거안정장학금신청방법SpokeContent,
    '중복':       주거안정장학금중복SpokeContent,
    '신청기간':   주거안정장학금신청기간SpokeContent,
  },

  'after-school-childcare-fee': {
    '신청방법':      방과후보육료신청방법SpokeContent,
    '초등어린이집':  초등어린이집SpokeContent,
    '연장보육료중복': 연장보육료중복SpokeContent,
    '장애아대상':    장애아대상SpokeContent,
  },

  'artist-pension': {
    '신청자격기간':  예술인연금신청자격SpokeContent,
    '신청절차':      예술인연금신청절차SpokeContent,
    '지역가입자':    예술인연금지역가입자SpokeContent,
    '두루누리중복':  예술인연금두루누리SpokeContent,
  },

  'birth-care-employment-grant': {
    '사업주신청':  출산장려금사업주신청SpokeContent,
    '대체인력':    출산장려금대체인력SpokeContent,
    '중복수령':    출산장려금중복수령SpokeContent,
    '복직후지급':  출산장려금복직후지급SpokeContent,
  },

  'child-care-service': {
    '본인부담금':    아이돌봄본인부담금SpokeContent,
    '소득기준':      아이돌봄소득기준SpokeContent,
    '맞벌이신청':    아이돌봄맞벌이신청SpokeContent,
    '시간제종합형':  아이돌봄시간제종합형SpokeContent,
  },

  'child-development-account': {
    '매칭신청':      디딤씨앗매칭신청SpokeContent,
    '가입자격':      디딤씨앗가입자격SpokeContent,
    '가정위탁신청':  디딤씨앗가정위탁SpokeContent,
    '해지조건':      디딤씨앗해지조건SpokeContent,
  },

  'disabled-women-childcare': {
    '우선입소신청':      여성장애인우선입소신청SpokeContent,
    '정원초과우선입소':  여성장애인정원초과우선입소SpokeContent,
    '보육료비교':        여성장애인보육료비교SpokeContent,
    '장애아보육료기준':  여성장애인장애아보육료기준SpokeContent,
  },

  'hypertension-medical-fee': {
    '신청절차':      고혈압당뇨신청절차SpokeContent,
    '진료비절감':    고혈압당뇨진료비절감SpokeContent,
    '참여지역확인':  고혈압당뇨참여지역확인SpokeContent,
    '2026변경조건':  고혈압당뇨2026변경조건SpokeContent,
  },

  'pregnancy-medical-benefit': {
    '지원금액신청':  임신출산지원금액신청SpokeContent,
    '다태아지원':    임신출산다태아지원SpokeContent,
    '잔액사용기간':  임신출산잔액사용기간SpokeContent,
    '사용처범위':    임신출산사용처범위SpokeContent,
  },

  'childcare-infant-education': {
    '기관별지원금':    유아무상교육기관별지원금SpokeContent,
    '사립유치원4세':   유아무상교육사립유치원4세SpokeContent,
    '어린이집4세확대': 유아무상교육어린이집4세확대SpokeContent,
    '연도별일정':      유아무상교육연도별일정SpokeContent,
  },

  'community-care-center': {
    '신청이용료':    다함께돌봄신청이용료SpokeContent,
    '방학운영':      다함께돌봄방학운영SpokeContent,
    '아이돌봄비교':  다함께돌봄아이돌봄비교SpokeContent,
    '대기대안':      다함께돌봄대기대안SpokeContent,
  },

  'community-child-center': {
    '우리동네찾기':      지역아동센터우리동네찾기SpokeContent,
    '맞벌이돌봄서비스':  지역아동센터맞벌이돌봄서비스SpokeContent,
    '다함께돌봄중복':    지역아동센터다함께돌봄중복SpokeContent,
    '2026변경사항':      지역아동센터2026변경사항SpokeContent,
  },

  'crime-victim-aid': {
    '지급금액자격':  범죄피해구조금지급금액자격SpokeContent,
    '유족신청':      범죄피해구조금유족신청SpokeContent,
    '2026증액기준':  범죄피해구조금2026증액기준SpokeContent,
    '가해자있을때':  범죄피해구조금가해자있을때SpokeContent,
  },

  'crime-victim-stable': {
    '350만원신청':    범죄피해자생활안정비350만원신청SpokeContent,
    '5주이상치료':    범죄피해자생활안정비5주이상치료SpokeContent,
    '구조금중복신청': 범죄피해자생활안정비구조금중복신청SpokeContent,
    '생계위기소득기준': 범죄피해자생활안정비생계위기소득기준SpokeContent,
  },

  'crisis-youth-support': {
    '신청자격금액':    위기청소년신청자격금액SpokeContent,
    '보호자없는청소년': 위기청소년보호자없는청소년SpokeContent,
    '학교밖청소년':    위기청소년학교밖청소년SpokeContent,
    '8개분야지원':     위기청소년8개분야지원SpokeContent,
  },

  'dementia-center': {
    '무료검사서비스':  치매안심센터무료검사서비스SpokeContent,
    '치매증상절차':    치매안심센터치매증상절차SpokeContent,
    '검사결과정상':    치매안심센터검사결과정상SpokeContent,
    '2026무료서비스':  치매안심센터2026무료서비스SpokeContent,
  },

  'dementia-helpline': {
    '의심증상전화':    치매상담콜센터의심증상전화SpokeContent,
    '상담범위대상':    치매상담콜센터상담범위대상SpokeContent,
    '가족돌봄스트레스': 치매상담콜센터가족돌봄스트레스SpokeContent,
    '가족전화상담':    치매상담콜센터가족전화상담SpokeContent,
  },

  'direct-payment': {
    '2026변경기준':  공익직불제2026변경기준SpokeContent,
    '신청준비사항':  공익직불제신청준비사항SpokeContent,
    '신청절차서류':  공익직불제신청절차서류SpokeContent,
    '농외소득기준':  공익직불제농외소득기준SpokeContent,
  },

  'disability-allowance': {
    '장애수당연금차이': 장애수당장애수당연금차이SpokeContent,
    '성인수급자자격':   장애수당성인수급자자격SpokeContent,
    '성인아동금액비교': 장애수당성인아동금액비교SpokeContent,
    '차상위추가지원':   장애수당차상위추가지원SpokeContent,
  },

  'disability-child-allowance': {
    '중증경증금액확인': 장애아동수당중증경증금액확인SpokeContent,
    '18세이후전환':     장애아동수당18세이후전환SpokeContent,
    '대상조건금액':     장애아동수당대상조건금액SpokeContent,
    '아동연금차이':     장애아동수당아동연금차이SpokeContent,
  },

  'dream-start': {
    '무료서비스내용':    드림스타트무료서비스내용SpokeContent,
    '신청자격7대영역':   드림스타트신청자격7대영역SpokeContent,
    '일반가구신청':      드림스타트일반가구신청SpokeContent,
    '지역아동센터비교':  드림스타트지역아동센터비교SpokeContent,
  },

  'dv-shelter-leaver-aid': {
    '퇴소후자립금조건':  가정폭력자립지원금퇴소후자립금조건SpokeContent,
    '퇴소전챙길항목':    가정폭력자립지원금퇴소전챙길항목SpokeContent,
    '유자녀추가지원':    가정폭력자립지원금유자녀추가지원SpokeContent,
    '입소퇴소지원비교':  가정폭력자립지원금입소퇴소지원비교SpokeContent,
  },

  'elderly-continue-employ': {
    '정년후사업주지원금': 계속고용장려금정년후사업주지원금SpokeContent,
    '월30만원3년기준':    계속고용장려금월30만원3년기준SpokeContent,
    '재고용신청방법':     계속고용장려금재고용신청방법SpokeContent,
    '세가지고용방법차이': 계속고용장려금세가지고용방법차이SpokeContent,
  },

  'elderly-emergency-safety': {
    '무료신청대상장비':   응급안전안심서비스무료신청대상장비SpokeContent,
    '부모님응급신청절차': 응급안전안심서비스부모님응급신청절차SpokeContent,
    '소득기준자격확인':   응급안전안심서비스소득기준자격확인SpokeContent,
    'ICT무상설치이유':    응급안전안심서비스ICT무상설치이유SpokeContent,
  },

  'elderly-job': {
    '2026유형별월급비교':    노인일자리2026유형별월급비교SpokeContent,
    '60세일하고싶다면':      노인일자리60세일하고싶다면SpokeContent,
    '공익활동사회서비스비교': 노인일자리공익활동사회서비스비교SpokeContent,
    '노인일자리취업알선차이': 노인일자리노인일자리취업알선차이SpokeContent,
  },

  'employment-promotion': {
    '사전신청먼저이유':      고용촉진장려금사전신청먼저이유SpokeContent,
    '취약계층유형별지원금':  고용촉진장려금취약계층유형별지원금SpokeContent,
    '채용지원금중복차이':    고용촉진장려금채용지원금중복차이SpokeContent,
    '사전신청필수절차':      고용촉진장려금사전신청필수절차SpokeContent,
  },

  'dream-ladder': {
    '저소득초중고선발기준': 꿈사다리장학사업저소득초중고선발기준SpokeContent,
    '초등대학연계지원조건': 꿈사다리장학사업초등대학연계지원조건SpokeContent,
    '신청자격사용처안내':   꿈사다리장학사업신청자격사용처안내SpokeContent,
    '대학생연계여부확인':   꿈사다리장학사업대학생연계여부확인SpokeContent,
  },

  'dream-scholarship': {
    '저소득고교해외유학조건': 드림장학금저소득고교해외유학조건SpokeContent,
    '기초수급차상위우수학생': 드림장학금기초수급차상위우수학생SpokeContent,
    '신청자격학업장려비':     드림장학금신청자격학업장려비SpokeContent,
    '꿈사다리드림장학금비교': 드림장학금꿈사다리드림장학금비교SpokeContent,
  },

  'elderly-driver-safety': {
    '65세75세교육차이':    고령운전자교통안전교육65세75세교육차이SpokeContent,
    '면허갱신75세의무확인': 고령운전자교통안전교육면허갱신75세의무확인SpokeContent,
    '2026온라인이수방법':   고령운전자교통안전교육2026온라인이수방법SpokeContent,
    '65세무료75세의무비교': 고령운전자교통안전교육65세무료75세의무비교SpokeContent,
  },

  'rental-dispute-mediation': {
    '소송없이60일분쟁해결': 임대차분쟁조정위원회소송없이60일분쟁해결SpokeContent,
    '보증금반환조정신청':   임대차분쟁조정위원회보증금반환조정신청SpokeContent,
    '신청자격조정절차안내': 임대차분쟁조정위원회신청자격조정절차안내SpokeContent,
    '소송분쟁조정비교':     임대차분쟁조정위원회소송분쟁조정비교SpokeContent,
  },

  'debtor-lawyer-free-support': {
    '불법추심변호사무료신청':      채무자대리인무료지원불법추심변호사무료신청SpokeContent,
    '불법사금융피해자신청':        채무자대리인무료지원불법사금융피해자신청SpokeContent,
    '신청대상최고금리초과':        채무자대리인무료지원신청대상최고금리초과SpokeContent,
    '채무자대리인일반변호사비교':  채무자대리인무료지원채무자대리인일반변호사비교SpokeContent,
  },

  'maternity-leave-pay': {
    '2026우선지원대상기업기준': 출산전후휴가급여2026우선지원대상기업기준SpokeContent,
    '회사정부급여구간분리':     출산전후휴가급여회사정부급여구간분리SpokeContent,
    '신청방법비과세계산':       출산전후휴가급여신청방법비과세계산SpokeContent,
    '우선지원대규모기업비교':   출산전후휴가급여우선지원대규모기업비교SpokeContent,
    'leave-period':           출산전후휴가기간SpokeContent,
    'employer-confirmation':  출산전후휴가확인서SpokeContent,
  },

  'long-term-care-elderly': {
    '신청대상등급기준서비스':   노인장기요양보험신청대상등급기준서비스SpokeContent,
    '2026등급1인지지원기준':    노인장기요양보험2026등급1인지지원기준SpokeContent,
    '치매부모장기요양신청절차': 노인장기요양보험치매부모장기요양신청절차SpokeContent,
    '시설재가본인부담금비교':   노인장기요양보험시설재가본인부담금비교SpokeContent,
    'facility-contract-guide':  장기요양기관계약체결SpokeContent,
    'recognition-survey-items': 장기요양인정조사항목SpokeContent,
  },

  'durunuri-social-insurance': {
    '지원대상10인미만소득기준': 두루누리사회보험지원대상10인미만소득기준SpokeContent,
    '10인미만80%지원신청':      두루누리사회보험10인미만80퍼센트지원신청SpokeContent,
    '2026신규가입36개월기준':   두루누리사회보험2026신규가입36개월기준SpokeContent,
    '고용보험국민연금절감신청': 두루누리사회보험고용보험국민연금절감신청SpokeContent,
  },

  'k-pass': {
    '신청등록카드사비교':       케이패스신청등록카드사비교SpokeContent,
    '모두의카드환급형비교':     케이패스모두의카드환급형비교SpokeContent,
    '청년환급률30%신청방법':    케이패스청년환급률30퍼센트신청방법SpokeContent,
    '2026환급률일반청년저소득': 케이패스2026환급률일반청년저소득SpokeContent,
    'refund-payment-date':      케이패스환급일SpokeContent,
    'card-change':             케이패스카드변경SpokeContent,
    'off-peak-bonus':          케이패스시차출퇴근SpokeContent,
    'vs-climate-card':         케이패스기후동행비교SpokeContent,
    'card-register':           케이패스카드등록SpokeContent,
  },

  'housing-benefit': {
    '1인가구소득기준임차급여':  주거급여1인가구소득기준임차급여SpokeContent,
    '기초수급자임차급여신청':   주거급여기초수급자임차급여신청SpokeContent,
    '중위소득48이하신청기준':   주거급여중위소득48이하신청기준SpokeContent,
    '임차수선유지급여비교':     주거급여임차수선유지급여비교SpokeContent,
  },

  'spouse-birth-leave-pay': {
    '배우자출산휴가급여20일유급기준': 배우자출산휴가급여배우자출산휴가급여20일유급기준SpokeContent,
    '회사지급정부지원구분':           배우자출산휴가급여회사지급정부지원구분SpokeContent,
    '급여상한액우선지원신청':         배우자출산휴가급여급여상한액우선지원신청SpokeContent,
    '120일분할신청기한':             배우자출산휴가급여120일분할신청기한SpokeContent,
    '휴가확대':                     배우자출산휴가급여확대SpokeContent,
  },

  'home-equity-pension': {
    '55세가입조건신청방법': 주택연금55세가입조건신청방법SpokeContent,
    '3억6억10억월수령액':   주택연금3억6억10억월수령액SpokeContent,
    '기초연금중복감액여부': 주택연금기초연금중복감액여부SpokeContent,
    '해지단점주의사항':     주택연금해지단점주의사항SpokeContent,
  },

  'national-happiness-card': {
    '발급조건카드사신청':       국민행복카드발급조건카드사신청SpokeContent,
    '23종바우처사용처잔액조회': 국민행복카드23종바우처사용처잔액조회SpokeContent,
    '임신확인후발급순서':       국민행복카드임신확인후발급순서SpokeContent,
    '남편명의부부중누가신청':   국민행복카드남편명의부부중누가신청SpokeContent,
  },

  'catastrophic-medical-expenses': {
    '중위소득100이하신청자격':     재난적의료비중위소득100이하신청자격SpokeContent,
    '지원금액본인부담50퍼센트':   재난적의료비지원금액본인부담50퍼센트SpokeContent,
    '암뇌혈관희귀질환신청':       재난적의료비암뇌혈관희귀질환신청SpokeContent,
    '본인부담상한제중복가능여부': 재난적의료비본인부담상한제중복가능여부SpokeContent,
  },

  'maternal-newborn-care': {
    '2026본인부담금중위소득별':     산모신생아건강관리2026본인부담금중위소득별SpokeContent,
    '신청기간출산후60일절차':       산모신생아건강관리신청기간출산후60일절차SpokeContent,
    '쌍둥이희귀질환예외지원':       산모신생아건강관리쌍둥이희귀질환예외지원SpokeContent,
    '산후도우미산후조리원비용비교': 산모신생아건강관리산후도우미산후조리원비용비교SpokeContent,
  },

  'elderly-knee-surgery': {
    '신청자격만60세저소득기준':         노인무릎인공관절신청자격만60세저소득기준SpokeContent,
    '수술비지원금액한쪽120만양쪽240만': 노인무릎인공관절수술비지원금액한쪽120만양쪽240만SpokeContent,
    '신청방법보건소접수절차':           노인무릎인공관절신청방법보건소접수절차SpokeContent,
    '건강보험후국가지원본인부담금':     노인무릎인공관절건강보험후국가지원본인부담금SpokeContent,
  },

  'legal-aid-system': {
    '중위소득125이하지원대상':           법률구조제도중위소득125이하지원대상SpokeContent,
    '무료상담신청방법전화방문온라인':   법률구조제도무료상담신청방법전화방문온라인SpokeContent,
    '소송대리비용무료변호사지원범위':   법률구조제도소송대리비용무료변호사지원범위SpokeContent,
    '법률구조공단vs법률홈닥터vs마을변호사': 법률구조제도법률구조공단vs법률홈닥터vs마을변호사SpokeContent,
  },

  'seomin-financial-center': {
    '이용대상신청자격':         서민금융통합지원센터이용대상신청자격SpokeContent,
    '예약방법앱전화온라인':     서민금융통합지원센터예약방법앱전화온라인SpokeContent,
    '대출종류한도서민금융상품': 서민금융통합지원센터대출종류한도서민금융상품SpokeContent,
    '신용회복위원회채무조정비교': 서민금융통합지원센터신용회복위원회채무조정비교SpokeContent,
  },

  'illegal-loan-prevention': {
    '신청자격신용평점하위20기준': 불법사금융예방대출신청자격신용평점하위20기준SpokeContent,
    '금리한도연9912퍼센트조건':   불법사금융예방대출금리한도연9912퍼센트조건SpokeContent,
    '신청방법앱센터방문당일대출': 불법사금융예방대출신청방법앱센터방문당일대출SpokeContent,
    '햇살론비교신용낮은사람유리상품': 불법사금융예방대출햇살론비교신용낮은사람유리상품SpokeContent,
  },

  'basic-pension': {
    'old-age-pension-overlap-apply': 기초연금노령연금중복신청SpokeContent,
    '2027-increase': 기초연금2027년인상SpokeContent,
    'civil-service-pension-overlap': 기초연금공무원연금중복SpokeContent,
    'payment-suspension': 기초연금지급정지SpokeContent,
    'calculation-formula': 기초연금계산공식SpokeContent,
    'disqualification': 기초연금탈락조건SpokeContent,
    'required-documents': 기초연금준비서류SpokeContent,
    'payment-day': 기초연금지급일SpokeContent,
    'duplicate-benefit': 기초연금중복수급SpokeContent,
    '수급자격':          수급자격SpokeContent,
    '이의신청':          기초연금이의신청SpokeContent,
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

  'home-childcare-allowance': {
    '어린이집보내면중단보육료전환': 가정양육수당어린이집보내면중단보육료전환SpokeContent,
    '신청방법복지로주민센터절차':   가정양육수당신청방법복지로주민센터절차SpokeContent,
    '부모급여종료후자동전환기준':   가정양육수당부모급여종료후자동전환기준SpokeContent,
  },

  'energy-cashback': {
    '신청방법한전홈페이지절차':       에너지캐시백신청방법한전홈페이지절차SpokeContent,
    '캐시백금액계산3퍼센트절감기준': 에너지캐시백캐시백금액계산3퍼센트절감기준SpokeContent,
    '신청대상주민등록주택용기준':     에너지캐시백신청대상주민등록주택용기준SpokeContent,
    '에너지바우처절전요금할인비교':   에너지캐시백에너지바우처절전요금할인비교SpokeContent,
    '하반기확대':       에너지캐시백하반기SpokeContent,
    '슬기로운전기생활': 에너지캐시백슬기로운전기생활SpokeContent,
    '아파트':     에너지캐시백아파트SpokeContent,
    '조회확인':   에너지캐시백조회SpokeContent,
    '단점':       에너지캐시백단점SpokeContent,
  },

  'cancer-patient-medical-aid': {
    '성인중위소득120이하300만원':   암환자의료비지원성인중위소득120이하300만원SpokeContent,
    '소아암3000만원18세까지조건':   암환자의료비지원소아암3000만원18세까지조건SpokeContent,
    '신청방법보건소접수서류절차':   암환자의료비지원신청방법보건소접수서류절차SpokeContent,
    '산정특례건강보험중복지원여부': 암환자의료비지원산정특례건강보험중복지원여부SpokeContent,
  },

  'infant-health-checkup': {
    '검진시기8회차수표':         영유아건강검진검진시기8회차수표SpokeContent,
    '발달이상의심시정밀검사연계': 영유아건강검진발달이상의심시정밀검사연계SpokeContent,
    '예약방법지정기관찾기':       영유아건강검진예약방법지정기관찾기SpokeContent,
    '시기놓치면어떻게되나':       영유아건강검진시기놓치면어떻게되나SpokeContent,
  },

  'medical-aid-elderly-denture': {
    '1종2종본인부담5퍼15퍼비교':       노인틀니임플란트1종2종본인부담5퍼15퍼비교SpokeContent,
    '임플란트평생2개신청방법':         노인틀니임플란트임플란트평생2개신청방법SpokeContent,
    '틀니7년주기사후유지관리':         노인틀니임플란트틀니7년주기사후유지관리SpokeContent,
    '완전틀니부분틀니임플란트종류비교': 노인틀니임플란트완전틀니부분틀니임플란트종류비교SpokeContent,
  },

  'parental-work-reduction-pay': {
    '급여계산10시간250만나머지160만': 육아기근로시간단축급여급여계산10시간250만나머지160만SpokeContent,
    '신청방법eiGovKr절차':           육아기근로시간단축급여신청방법eiGovKr절차SpokeContent,
    '육아휴직과차이출근하면서단축':   육아기근로시간단축급여육아휴직과차이출근하면서단축SpokeContent,
    '자녀만12세초등6학년대상기간':   육아기근로시간단축급여자녀만12세초등6학년대상기간SpokeContent,
  },

  'education-benefit': {
    '초중고교육활동지원비금액표':   교육급여초중고교육활동지원비금액표SpokeContent,
    '중위소득50이하신청자격확인':   교육급여중위소득50이하신청자격확인SpokeContent,
    '신청방법복지로원클릭학교신청': 교육급여신청방법복지로원클릭학교신청SpokeContent,
    '고교학비무상교육과중복여부':   교육급여고교학비무상교육과중복여부SpokeContent,
  },

  'infant-childcare-fee': {
    '연령별월51만45만38만지원금액':   영유아보육료연령별월51만45만38만지원금액SpokeContent,
    '신청방법복지로행정복지센터절차': 영유아보육료신청방법복지로행정복지센터절차SpokeContent,
    '가정양육수당어린이집보육료차이': 영유아보육료가정양육수당어린이집보육료차이SpokeContent,
    '누리과정3세5세유아학비비교':     영유아보육료누리과정3세5세유아학비비교SpokeContent,
  },

  'national-employment-support': {
    '구직촉진수당월60만6개월조건':   국민취업지원제도구직촉진수당월60만6개월조건SpokeContent,
    '1유형2유형자격차이신청방법':     국민취업지원제도1유형2유형자격차이신청방법SpokeContent,
    '취업성공수당150만원조건':         국민취업지원제도취업성공수당150만원조건SpokeContent,
    '국민취업지원실업급여차이비교':   국민취업지원제도국민취업지원실업급여차이비교SpokeContent,
    '신청방법':   국취신청SpokeContent,
    '중복':       국취중복SpokeContent,
    '부정수급':   국취부정수급SpokeContent,
    '재참여':     국취재참여SpokeContent,
    '구직활동':   국취구직활동SpokeContent,
    'ineligible-participants': 국취참여제외대상SpokeContent,
  },

  'family-care-leave': {
    '연10일무급유급차이신청방법':       가족돌봄휴가연10일무급유급차이신청방법SpokeContent,
    '사업주거부하면어떻게하나':         가족돌봄휴가사업주거부하면어떻게하나SpokeContent,
    '돌봄가족범위부모자녀배우자':       가족돌봄휴가돌봄가족범위부모자녀배우자SpokeContent,
    '가족돌봄휴직과휴가차이장기단기':   가족돌봄휴가가족돌봄휴직과휴가차이장기단기SpokeContent,
    '가족돌봄휴가시간단위분할사용방법': 가족돌봄휴가가족돌봄휴가시간단위분할사용방법SpokeContent,
    '가족돌봄휴가급여없음무급재난특례지원': 가족돌봄휴가가족돌봄휴가급여없음무급재난특례지원SpokeContent,
    '가족돌봄휴가신청서류증빙서류회사승인': 가족돌봄휴가가족돌봄휴가신청서류증빙서류회사승인SpokeContent,
    '가족돌봄휴가연장조건20일초과가능한가': 가족돌봄휴가가족돌봄휴가연장조건20일초과가능한가SpokeContent,
  },

  'child-meal-card': {
    '지원대상결식우려아동기준중위소득': 아동급식카드지원대상결식우려아동기준중위소득SpokeContent,
    '신청방법복지로주민센터절차서류':   아동급식카드신청방법복지로주민센터절차서류SpokeContent,
    '사용처편의점가맹점하루지원금액':   아동급식카드사용처편의점가맹점하루지원금액SpokeContent,
    '방학중지원학기중차이이용방법주의': 아동급식카드방학중지원학기중차이이용방법주의SpokeContent,
  },

  'electric-welfare-discount': {
    '대상자격': 전기요금복지할인대상자격SpokeContent,
    '할인금액': 전기요금복지할인할인금액SpokeContent,
    '신청방법': 전기요금복지할인신청방법SpokeContent,
    '다자녀출산': 전기요금복지할인다자녀출산SpokeContent,
    '중복비교': 전기요금복지할인중복비교SpokeContent,
  },

  'samsung-onnuri-refund': {
    '환급방법': 삼성전자온누리환급방법SpokeContent,
    '환급기간': 삼성전자온누리환급기간SpokeContent,
    '환급액': 삼성전자온누리환급액SpokeContent,
    '한도대상': 삼성전자온누리환급한도대상SpokeContent,
    '참여처': 삼성전자온누리환급참여처SpokeContent,
    'K히어로': 삼성전자온누리환급K히어로SpokeContent,
    '디지털온누리사용': 삼성전자온누리환급디지털온누리사용SpokeContent,
    '주의사항': 삼성전자온누리환급주의사항SpokeContent,
  },

  'happiness-card-bebang': {
    '몰비교': 국민행복카드베팡몰비교SpokeContent,
    '카드사혜택': 국민행복카드베팡카드사혜택SpokeContent,
    '신청방법': 국민행복카드베팡신청방법SpokeContent,
    '바우처등록': 국민행복카드베팡바우처등록SpokeContent,
    '추천인사은품': 국민행복카드베팡추천인사은품SpokeContent,
    '임신출산바우처': 국민행복카드베팡임신출산바우처SpokeContent,
    '기저귀바우처': 국민행복카드베팡기저귀바우처SpokeContent,
    '바우처종류': 국민행복카드베팡바우처종류SpokeContent,
    '혜택총정리': 국민행복카드베팡혜택총정리SpokeContent,
  },

  'dosu-therapy': {
    '가격': 도수치료가격SpokeContent,
    '실비': 도수치료실비SpokeContent,
    '관리급여': 도수치료관리급여SpokeContent,
    '횟수': 도수치료횟수SpokeContent,
    '물리치료비교': 도수치료물리치료비교SpokeContent,
    '산재': 도수치료산재SpokeContent,
  },

  'noran-umbrella': {
    '납입한도': 노란우산공제납입한도SpokeContent,
    '소득공제': 노란우산공제소득공제SpokeContent,
    '가입방법': 노란우산공제가입방법SpokeContent,
    '대출': 노란우산공제대출SpokeContent,
    '해지': 노란우산공제해지SpokeContent,
  },

  'closed-biz-repayment-relief': {
    '대상': 폐업소상공인정책자금대상SpokeContent,
    '상환연장': 폐업소상공인정책자금상환연장SpokeContent,
    '금리감면': 폐업소상공인정책자금금리감면SpokeContent,
    '신청재기': 폐업소상공인정책자금신청재기SpokeContent,
  },

  'resident-tax': {
    'target':      주민세납부대상SpokeContent,
    'amount':      주민세금액SpokeContent,
    'period':      주민세납부기간SpokeContent,
    'how-to-pay':  주민세조회납부SpokeContent,
    'business':    주민세종업원분SpokeContent,
  },

  'health-certificate': {
    'test-items':  보건증검사항목SpokeContent,
    'validity':    보건증유효기간SpokeContent,
    'expired':     보건증기간만료SpokeContent,
    'cost':        보건증발급비용SpokeContent,
    'offline':     보건증오프라인발급SpokeContent,
  },

  'safe-inheritance-onestop': {
    'how-to-apply':   안심상속신청방법SpokeContent,
    'when-apply':     안심상속신청기간SpokeContent,
    'result-check':   안심상속결과조회SpokeContent,
    'eligibility':    안심상속방문신청대상SpokeContent,
    'documents':      안심상속준비서류SpokeContent,
  },

  'child-support-enforcement': {
    'enforcement-order':     양육비이행명령신청SpokeContent,
    'unpaid-penalty':        양육비미지급처벌SpokeContent,
    'compulsory-execution':  양육비강제집행SpokeContent,
    'lawsuit-support':       양육비소송법률지원SpokeContent,
    'calculation':           양육비계산기SpokeContent,
    'required-documents':    양육비신청서류SpokeContent,
  },

  'child-support-advance': {
    '소득기준폐지': 양육비선지급소득기준폐지SpokeContent,
    '대상조건': 양육비선지급대상조건SpokeContent,
    '금액지급일': 양육비선지급금액지급일SpokeContent,
    '신청방법': 양육비선지급신청방법SpokeContent,
    '회수': 양육비선지급회수SpokeContent,
  },

  'highway-toll-discount': {
    '장애인유공자': 고속도로통행료감면장애인유공자SpokeContent,
    '다자녀': 고속도로통행료감면다자녀SpokeContent,
    '신청등록': 고속도로통행료감면신청등록SpokeContent,
    '한국도로공사다자녀등록': 고속도로통행료감면한국도로공사다자녀등록SpokeContent,
  },

  'infertility-treatment-leave': {
    '휴가확대': 난임치료휴가급여확대SpokeContent,
  },

  'pregnant-eco-food': {
    '지원금액': 임산부친환경농산물지원금액SpokeContent,
    '대상': 임산부친환경농산물대상SpokeContent,
    '신청방법': 임산부친환경농산물신청방법SpokeContent,
  },

  'floor-noise': {
    '기준': 층간소음기준SpokeContent,
    '신고상담': 층간소음신고상담SpokeContent,
    '해결방법': 층간소음해결방법SpokeContent,
  },

  'travel-duty-free': {
    '면세한도': 해외여행면세면세한도SpokeContent,
    '술담배향수': 해외여행면세술담배향수SpokeContent,
    '자진신고': 해외여행면세자진신고SpokeContent,
    'family-limit':  해외여행면세가족합산SpokeContent,
  },

  'climate-card-refund': {
    '받는방법': 기후동행카드환급받는방법SpokeContent,
    '신청기간': 기후동행카드환급신청기간SpokeContent,
    '조건': 기후동행카드환급조건SpokeContent,
    '대상': 기후동행카드환급대상SpokeContent,
    '환급금': 기후동행카드환급금SpokeContent,
    '후불카드': 기후동행카드환급후불카드SpokeContent,
    '청년권종': 기후동행카드환급청년권종SpokeContent,
    '신청오류': 기후동행카드환급신청오류SpokeContent,
    '모두의카드': 기후동행카드환급모두의카드SpokeContent,
    '페이백차이': 기후동행카드환급페이백차이SpokeContent,
  },

  'youth-welfare-point-compare': {
    '지역별비교':   청년복지포인트비교지역별비교SpokeContent,
    '인천재직청년': 청년복지포인트비교인천재직청년SpokeContent,
    '공통대상':     청년복지포인트비교공통대상SpokeContent,
    '지급형태':     청년복지포인트비교지급형태SpokeContent,
    '우리지역찾기': 청년복지포인트비교우리지역찾기SpokeContent,
  },

  'gyeonggi-youth-welfare-point': {
    '대상자격': 경기도청년복지포인트대상자격SpokeContent,
    '지원금액': 경기도청년복지포인트지원금액SpokeContent,
    '신청방법': 경기도청년복지포인트신청방법SpokeContent,
    '사용처':   경기도청년복지포인트사용처SpokeContent,
    '통장비교': 경기도청년복지포인트통장비교SpokeContent,
  },

  'child-sex-crime-report-reward': {
    '제도개요':   신고포상금제도개요SpokeContent,
    '대상범죄':   신고포상금대상범죄SpokeContent,
    '신고방법':   신고포상금신고방법SpokeContent,
    '포상금신청': 신고포상금포상금신청SpokeContent,
    '신고자보호': 신고포상금신고자보호SpokeContent,
  },

  'teen-female-hygiene': {
    '대상자격':     생리용품바우처대상자격SpokeContent,
    '지원금액':     생리용품바우처지원금액SpokeContent,
    '국민행복카드': 생리용품바우처국민행복카드SpokeContent,
    '신청방법':     생리용품바우처신청방법SpokeContent,
    '사용처':       생리용품바우처사용처SpokeContent,
  },

  'employment-incentive-allowance': {
    '조기재취업수당':       취업촉진수당조기재취업수당SpokeContent,
    '직업능력개발수당':     취업촉진수당직업능력개발수당SpokeContent,
    '광역구직활동비이주비': 취업촉진수당광역구직활동비이주비SpokeContent,
    '신청방법':             취업촉진수당신청방법SpokeContent,
    '국민취업비교':         취업촉진수당국민취업비교SpokeContent,
  },

  'job-seeker-leap-package': {
    '서비스개요': 구직자도약보장서비스개요SpokeContent,
    '참여대상':   구직자도약보장참여대상SpokeContent,
    'AI잡케어':   구직자도약보장AI잡케어SpokeContent,
    '경력유형':   구직자도약보장경력유형SpokeContent,
    '신청방법':   구직자도약보장신청방법SpokeContent,
  },

  'sunshine-youth-loan': {
    '대상자격':     햇살론유스대상자격SpokeContent,
    '한도용도':     햇살론유스한도용도SpokeContent,
    '금리상환':     햇살론유스금리상환SpokeContent,
    '청년대출비교': 햇살론유스청년대출비교SpokeContent,
    '신청방법':     햇살론유스신청방법SpokeContent,
  },

  'sme-sunshine-card': {
    '대상자격':   소상공인햇살론카드대상자격SpokeContent,
    '보증한도':   소상공인햇살론카드보증한도SpokeContent,
    '교육컨설팅': 소상공인햇살론카드교육컨설팅SpokeContent,
    '카드사업종': 소상공인햇살론카드카드사업종SpokeContent,
    '신청방법':   소상공인햇살론카드신청방법SpokeContent,
  },

  'vulnerable-livelihood-loan': {
    '대상자격': 금융취약계층생계자금대상자격SpokeContent,
    '한도금리': 금융취약계층생계자금한도금리SpokeContent,
    '추가요건': 금융취약계층생계자금추가요건SpokeContent,
    '청년비교': 금융취약계층생계자금청년비교SpokeContent,
    '신청방법': 금융취약계층생계자금신청방법SpokeContent,
  },

  'sunshine-loan-general': {
    '대상자격':   햇살론일반대상자격SpokeContent,
    '한도금리':   햇살론일반한도금리SpokeContent,
    '보증료우대': 햇살론일반보증료우대SpokeContent,
    '햇살론비교': 햇살론일반햇살론비교SpokeContent,
    '신청방법':   햇살론일반신청방법SpokeContent,
  },

  'sunshine-loan-special': {
    '대상자격':   햇살론특례대상자격SpokeContent,
    '한도금리':   햇살론특례한도금리SpokeContent,
    '일반비교':   햇살론특례일반비교SpokeContent,
    '대부업대안': 햇살론특례대부업대안SpokeContent,
    '신청방법':   햇살론특례신청방법SpokeContent,
  },

  'sunshine-loan-card': {
    '대상자격':   햇살론카드대상자격SpokeContent,
    '보증한도':   햇살론카드보증한도SpokeContent,
    '필수교육':   햇살론카드필수교육SpokeContent,
    '카드사혜택': 햇살론카드카드사혜택SpokeContent,
    '신청방법':   햇살론카드신청방법SpokeContent,
  },

  'sunshine-loan-119': {
    '대상자격':     햇살론119대상자격SpokeContent,
    '한도금리':     햇살론119한도금리SpokeContent,
    '채무조정연계': 햇살론119채무조정연계SpokeContent,
    '햇살론비교':   햇살론119햇살론비교SpokeContent,
    '신청방법':     햇살론119신청방법SpokeContent,
  },

  'youth-future-link-loan': {
    '대상자격':   청년미래이음대상자격SpokeContent,
    '한도금리':   청년미래이음한도금리SpokeContent,
    '유스비교':   청년미래이음유스비교SpokeContent,
    '상환구조':   청년미래이음상환구조SpokeContent,
    '신청방법':   청년미래이음신청방법SpokeContent,
  },

  'sme-youth-jeonse-loan': {
    '대상자격':   중기청전세대상자격SpokeContent,
    '한도보증금': 중기청전세한도보증금SpokeContent,
    '금리':       중기청전세금리SpokeContent,
    '기간연장':   중기청전세기간연장SpokeContent,
    '신청방법':   중기청전세신청방법SpokeContent,
  },

  'bogeumjari-loan': {
    '대상소득':       보금자리론대상소득SpokeContent,
    '한도주택가액':   보금자리론한도주택가액SpokeContent,
    '금리우대':       보금자리론금리우대SpokeContent,
    '디딤돌비교':     보금자리론디딤돌비교SpokeContent,
    '신청':           보금자리론신청SpokeContent,
  },

  'didimdol-loan': {
    '대상소득':         디딤돌대출대상소득SpokeContent,
    '한도주택가액':     디딤돌대출한도주택가액SpokeContent,
    '금리':             디딤돌대출금리SpokeContent,
    '생애최초신혼우대': 디딤돌대출생애최초신혼우대SpokeContent,
    '신청':             디딤돌대출신청SpokeContent,
  },

  'newborn-special-loan': {
    '대상조건':   신생아특례대출대상조건SpokeContent,
    '디딤돌구입': 신생아특례대출디딤돌구입SpokeContent,
    '버팀목전세': 신생아특례대출버팀목전세SpokeContent,
    '금리우대':   신생아특례대출금리우대SpokeContent,
    '신청대환':   신생아특례대출신청대환SpokeContent,
    'application-timing-first-buyer': 신생아특례대출신청시기생애최초SpokeContent,
    'rate-after-special': 신생아특례대출특례금리종료SpokeContent,
    'documents': 신생아특례대출준비서류SpokeContent,
    'edndn-apply': 신생아특례대출기금e든든신청SpokeContent,
  },

  'year-end-tax': {
    '일정절차':     연말정산일정절차SpokeContent,
    '간소화서비스': 연말정산간소화서비스SpokeContent,
    '공제종류':     연말정산공제종류SpokeContent,
    '환급전략':     연말정산환급전략SpokeContent,
    '경정청구':     연말정산경정청구SpokeContent,
  },

  'living-stability-loan': {
    '대상조건':     생활안정자금대상조건SpokeContent,
    '한도금리':     생활안정자금한도금리SpokeContent,
    '주택제한':     생활안정자금주택제한SpokeContent,
    '신청방법':     생활안정자금신청방법SpokeContent,
    '서민금융비교': 생활안정자금서민금융비교SpokeContent,
  },

  'small-biz-online-sales': {
    '지원내용':     판로지원지원내용SpokeContent,
    '라이브커머스': 판로지원라이브커머스SpokeContent,
    '쇼핑몰입점':   판로지원쇼핑몰입점SpokeContent,
    '신청방법':     판로지원신청방법SpokeContent,
    '대상자격':     판로지원대상자격SpokeContent,
  },

  'card-fee-support': {
    '우대수수료율':   카드수수료우대수수료율SpokeContent,
    '대상선정':       카드수수료대상선정SpokeContent,
    '수수료환급':     카드수수료수수료환급SpokeContent,
    '매출세액공제':   카드수수료매출세액공제SpokeContent,
    '지자체지원조회': 카드수수료지자체지원조회SpokeContent,
  },

  'small-biz-policy-fund': {
    '자금종류':         정책자금자금종류SpokeContent,
    '일반경영안정자금': 정책자금일반경영안정자금SpokeContent,
    '지역신용보증재단': 정책자금지역신용보증재단SpokeContent,
    '신청방법':         정책자금신청방법SpokeContent,
    '대상자격':         정책자금대상자격SpokeContent,
    'temporary-hardship-fund': 정책자금일시적경영애로자금SpokeContent,
    'business-plan-form': 소상공인정책자금사업계획서SpokeContent,
    'direct-vs-agency-loan': 소상공인정책자금직접대출대리대출SpokeContent,
    'eligibility-certificate': 소상공인정책자금지원대상확인서SpokeContent,
    'target-check': 소상공인정책자금대상자조회SpokeContent,
    'queue-wait': 소상공인정책자금접수대기SpokeContent,
    'rejected-retry': 소상공인정책자금부결재신청SpokeContent,
  },

  'worker-livelihood-interest-subsidy': {
    'wedding-loan': 근로자생활안정자금혼례비SpokeContent,
  },

  'hug-jeonse-deposit-guarantee': {
    'how-to-join-and-refund': 전세보증가입방법환급SpokeContent,
    'guarantee-fee': 전세보증금반환보증보증료SpokeContent,
  },

  'worker-wage-arrears-loan': {
    'wage-subsidy-compare': 체불근로자생계비대지급금비교SpokeContent,
  },

  'credit-weak-smallbiz-fund': {
    'priority-evaluation': 신용취약소상공인자금정책우선도평가SpokeContent,
  },

  'youth-employment-linked-fund': {
    'eligibility-certificate': 청년고용연계자금지원대상확인서SpokeContent,
  },

  'innovation-growth-fund': {
    'august-application': 혁신성장촉진자금8월10일접수SpokeContent,
  },

  'restart-special-fund': {
    'restart-education': 재도전특별자금재창업교육SpokeContent,
  },

  'small-manufacturer-fund': {
    'working-vs-facility': 소공인특화자금운전시설구분SpokeContent,
  },

  'emergency-management-fund': {
    'disaster-certificate': 긴급경영안정자금재해확인증SpokeContent,
  },

  'general-management-stability-fund': {
    'no-business-age-limit': 일반경영안정자금업력무관SpokeContent,
  },

  'disabled-biz-support-fund': {
    'accepted-documents': 장애인기업지원자금인정서류SpokeContent,
  },

  'win-win-growth-fund': {
    'platform-recommendation': 상생성장지원자금플랫폼추천SpokeContent,
  },

  'new-hope-holssi': {
    'bank-choice': 새희망홀씨은행선택SpokeContent,
  },

  'stepping-stone-loan': {
    'pre-application': 징검다리론사전신청절차SpokeContent,
  },

  'youth-startup-fund': {
    'evaluation-committee': 청년전용창업자금평가위원회SpokeContent,
  },

  'regional-credit-guarantee': {
    'guarantee-limit': 지역신용보증재단보증한도계산SpokeContent,
  },

  'youth-monthly-rent': {
    '신청자격':     청년월세신청자격SpokeContent,
    '소득재산기준': 청년월세소득재산기준SpokeContent,
    '지원금액':     청년월세지원금액SpokeContent,
    '신청방법':     청년월세신청방법SpokeContent,
    '주거급여중복': 청년월세주거급여중복SpokeContent,
  },

  'self-sufficiency-program': {
    '참여자격조건부수급자차상위계층신청':         자활사업참여자격조건부수급자차상위계층신청SpokeContent,
    '급여2026근로유지형사회서비스형시장진입형': 자활사업급여2026근로유지형사회서비스형시장진입형SpokeContent,
    '종류자활근로자활기업취업지원비교':           자활사업종류자활근로자활기업취업지원비교SpokeContent,
    '참여하면기초생활수급탈락소득인정유지':       자활사업참여하면기초생활수급탈락소득인정유지SpokeContent,
  },

  'youth-tomorrow-filling': {
    '신청자격제조건설업중소기업청년조건':   청년내일채움공제신청자격제조건설업중소기업청년조건SpokeContent,
    '지원금액2년1200만본인기업정부적립구조': 청년내일채움공제지원금액2년1200만본인기업정부적립구조SpokeContent,
    '중도해지퇴사적립금환급기준손해여부':   청년내일채움공제중도해지퇴사적립금환급기준손해여부SpokeContent,
    '청년도약계좌동시가입가능여부차이점':   청년내일채움공제청년도약계좌동시가입가능여부차이점SpokeContent,
  },

  'small-biz-hope-return': {
    '신청자격폐업소상공인60일운영조건확인': 소상공인희망리턴패키지신청자격폐업소상공인60일운영조건확인SpokeContent,
    '점포철거비2026최대600만조건절차신청': 소상공인희망리턴패키지점포철거비2026최대600만조건절차신청SpokeContent,
    '취업지원전직장려수당100만원받는방법': 소상공인희망리턴패키지취업지원전직장려수당100만원받는방법SpokeContent,
    '재창업지원법률채무조정컨설팅원스톱': 소상공인희망리턴패키지재창업지원법률채무조정컨설팅원스톱SpokeContent,
  },

  'elderly-hearing-aid': {
    '건강보험장애인보조기기급여131만조건':   노인보청기지원건강보험장애인보조기기급여131만조건SpokeContent,
    '신청절차청각장애등록급여지급단계':       노인보청기지원신청절차청각장애등록급여지급단계SpokeContent,
    '본인부담건강보험의료급여1종2종차이비교': 노인보청기지원본인부담건강보험의료급여1종2종차이비교SpokeContent,
    '지자체추가혜택지역별117만신청방법':     노인보청기지원지자체추가혜택지역별117만신청방법SpokeContent,
  },

  'tips-program': {
    '팁스지원자격스타트업단계기준': 팁스TIPS팁스지원자격스타트업단계기준SpokeContent,
    '팁스운영사선정매칭절차':       팁스TIPS팁스운영사선정매칭절차SpokeContent,
    '팁스창업사업화RD지원금':       팁스TIPS팁스창업사업화RD지원금SpokeContent,
    '팁스프로그램종류트랙차이':     팁스TIPS팁스프로그램종류트랙차이SpokeContent,
  },

  'national-health-checkup': {
    '국가건강검진대상자짝수홀수출생연도': 국가건강검진국가건강검진대상자짝수홀수출생연도SpokeContent,
    '국가건강검진예약방법지정병원':       국가건강검진국가건강검진예약방법지정병원SpokeContent,
    '국가건강검진연령별항목검사목록':     국가건강검진국가건강검진연령별항목검사목록SpokeContent,
    '국가건강검진안하면불이익의무여부':   국가건강검진국가건강검진안하면불이익의무여부SpokeContent,
  },

  'small-biz-bank-debt': {
    '재산심사':             새출발기금재산심사SpokeContent,
    '모의감면계산':         새출발기금모의감면계산SpokeContent,
    '부실우려차주금리조정': 새출발기금부실우려차주금리조정SpokeContent,
    '보이스피싱주의':       새출발기금보이스피싱주의SpokeContent,
    '새출발기금신청자격부실차주기준': 새출발기금새출발기금신청자격부실차주기준SpokeContent,
    '새출발기금원금탕감감면조건':     새출발기금새출발기금원금탕감감면조건SpokeContent,
    '새출발기금단점주의사항신청전':   새출발기금새출발기금단점주의사항신청전SpokeContent,
    '새출발기금희망리턴패키지차이':   새출발기금새출발기금희망리턴패키지차이SpokeContent,
    '감면율':     새출발기금감면율SpokeContent,
    '상환유예':   새출발기금상환유예SpokeContent,
    '신용':       새출발기금신용SpokeContent,
    'vs신복위':   새출발기금vs신복위SpokeContent,
    '직장인':     새출발기금직장인SpokeContent,
  },

  'small-biz-closed-debt': {
    '폐업소상공인채무조정신청방법절차':       폐업소상공인채무조정폐업소상공인채무조정신청방법절차SpokeContent,
    '폐업소상공인점포철거비지원금액':         폐업소상공인채무조정폐업소상공인점포철거비지원금액SpokeContent,
    '희망리턴패키지폐업재기지원총정리':       폐업소상공인채무조정희망리턴패키지폐업재기지원총정리SpokeContent,
    '폐업소상공인지원새출발기금차이':         폐업소상공인채무조정폐업소상공인지원새출발기금차이SpokeContent,
    '재기사업화자금':                         폐업소상공인채무조정재기사업화자금SpokeContent,
    '전직장려수당':                           폐업소상공인채무조정전직장려수당SpokeContent,
    '사업정리컨설팅':                         폐업소상공인채무조정사업정리컨설팅SpokeContent,
  },

  'small-biz-credit-recovery': {
    '소상공인신용회복신청자격연체기준':       소상공인신용회복소상공인신용회복신청자격연체기준SpokeContent,
    '소상공인신속신용사면탕감신청방법':       소상공인신용회복소상공인신속신용사면탕감신청방법SpokeContent,
    '소상공인신용회복후신용점수회복':         소상공인신용회복소상공인신용회복후신용점수회복SpokeContent,
    '소상공인신용회복위원회새출발기금비교':   소상공인신용회복소상공인신용회복위원회새출발기금비교SpokeContent,
  },

  'college-student-housing': {
    '행복기숙사신청자격비용LH공공기숙사':   대학생주거지원행복기숙사신청자격비용LH공공기숙사SpokeContent,
    '대학생기숙사비지원한국장학재단':       대학생주거지원대학생기숙사비지원한국장학재단SpokeContent,
    '서울대학생공공기숙사종류신청방법':     대학생주거지원서울대학생공공기숙사종류신청방법SpokeContent,
    '희망하우징행복기숙사대학생비교':       대학생주거지원희망하우징행복기숙사대학생비교SpokeContent,
  },

  'free-legal-aid': {
    '무료법률구조신청자격소득기준중위125': 무료법률구조무료법률구조신청자격소득기준중위125SpokeContent,
    '무료법률구조대상사건민사가사형사종류': 무료법률구조무료법률구조대상사건민사가사형사종류SpokeContent,
    '무료법률구조신청방법132번온라인방문': 무료법률구조무료법률구조신청방법132번온라인방문SpokeContent,
    '법률상담무료기준소송구조차이전액면제': 무료법률구조법률상담무료기준소송구조차이전액면제SpokeContent,
  },

  'national-work-scholarship': {
    '국가근로장학금시간당단가교내교외2026': 국가근로장학금국가근로장학금시간당단가교내교외2026SpokeContent,
    '국가근로장학금신청자격소득분위기준':   국가근로장학금국가근로장학금신청자격소득분위기준SpokeContent,
    '국가근로장학금신청방법한국장학재단':   국가근로장학금국가근로장학금신청방법한국장학재단SpokeContent,
    '국가근로장학금교내교외장학금중복가능': 국가근로장학금국가근로장학금교내교외장학금중복가능SpokeContent,
  },

  'youth-job-leap-incentive': {
    '청년일자리도약장려금지원금액수도권비수도권차이': 청년일자리도약장려금청년일자리도약장려금지원금액수도권비수도권차이SpokeContent,
    '청년일자리도약장려금신청자격기업조건':           청년일자리도약장려금청년일자리도약장려금신청자격기업조건SpokeContent,
    '청년일자리도약장려금신청방법work24':             청년일자리도약장려금청년일자리도약장려금신청방법work24SpokeContent,
    '청년일자리도약장려금고용유지기간조건':           청년일자리도약장려금청년일자리도약장려금고용유지기간조건SpokeContent,
  },

  'low-income-energy-efficiency': {
    '저소득에너지효율개선신청자격기초수급차상위':         저소득에너지효율개선저소득에너지효율개선신청자격기초수급차상위SpokeContent,
    '저소득에너지효율개선지원항목단열창호보일러에어컨':   저소득에너지효율개선저소득에너지효율개선지원항목단열창호보일러에어컨SpokeContent,
    '저소득에너지효율개선신청방법주민센터절차':           저소득에너지효율개선저소득에너지효율개선신청방법주민센터절차SpokeContent,
    '저소득에너지효율개선지원금액가구당243만원':         저소득에너지효율개선저소득에너지효율개선지원금액가구당243만원SpokeContent,
  },


  'self-employed-employment-insurance': {
    '7등급보험료율50to80지원기준':      자영업자고용보험7등급보험료율50to80지원기준SpokeContent,
    '가입방법근로복지공단온라인':      자영업자고용보험가입방법근로복지공단온라인SpokeContent,
    '직원있는사업주vs1인자영업차이':   자영업자고용보험직원있는사업주vs1인자영업차이SpokeContent,
    '폐업후실업급여1년가입조건':       자영업자고용보험폐업후실업급여1년가입조건SpokeContent,
  },

  'saeil-women-intern': {
    'WUP경력단절예방프로그램신청':   여성새로일하기센터WUP경력단절예방프로그램신청SpokeContent,
    '가까운센터찾기이용절차':         여성새로일하기센터가까운센터찾기이용절차SpokeContent,
    '경력단절직업훈련무료취업연계':   여성새로일하기센터경력단절직업훈련무료취업연계SpokeContent,
    '새일여성인턴기간급여채용연계':   여성새로일하기센터새일여성인턴기간급여채용연계SpokeContent,
  },

  'low-income-single-parent': {
    '고등학교학비지원22세연장조건':   한부모가족지원고등학교학비지원22세연장조건SpokeContent,
    '아동양육비월23만원소득기준':     한부모가족지원아동양육비월23만원소득기준SpokeContent,
    '중복수급기초수급동시가능여부':   한부모가족지원중복수급기초수급동시가능여부SpokeContent,
    '청소년한부모월37만원24세이하':   한부모가족지원청소년한부모월37만원24세이하SpokeContent,
    '증명서':     한부모증명서SpokeContent,
    '기준':       한부모기준SpokeContent,
    '혜택':       한부모혜택SpokeContent,
    '신청방법':   한부모신청방법SpokeContent,
    '지원센터':   한부모지원센터SpokeContent,
  },

  'worker-vacation-support': {
    '2026선착순10만명신청기간':          근로자휴가지원2026선착순10만명신청기간SpokeContent,
    '정부10기업10근로자20총40사용법':    근로자휴가지원정부10기업10근로자20총40사용법SpokeContent,
    '중소기업재직자신청자격확인':        근로자휴가지원중소기업재직자신청자격확인SpokeContent,
    '휴가샵국내여행사용처환불조건':      근로자휴가지원휴가샵국내여행사용처환불조건SpokeContent,
  },

  'income-contingent-loan': {
    '2026금리1점7취업후상환소득폐지':   학자금대출2026금리1점7취업후상환소득폐지SpokeContent,
    '상환기준소득3037만초과상환방법':   학자금대출상환기준소득3037만초과상환방법SpokeContent,
    '생활비학기당200만신청방법':        학자금대출생활비학기당200만신청방법SpokeContent,
    '일반vs취업후상환어떤걸선택':       학자금대출일반vs취업후상환어떤걸선택SpokeContent,
  },

  'newlywed-housing-support': {
    'LH매입임대1순위소득자산최장14년':       신혼부부주거지원LH매입임대1순위소득자산최장14년SpokeContent,
    '신생아특례전세대출vsLH전세임대':        신혼부부주거지원신생아특례전세대출vsLH전세임대SpokeContent,
    '월임대료보증금임대보증금5%':            신혼부부주거지원월임대료보증금임대보증금5SpokeContent,
    '전세임대1자격혼인7년신청방법':          신혼부부주거지원전세임대1자격혼인7년신청방법SpokeContent,
  },

  'startup-support': {
    '단계별비교예창패초기도약차이':          창업지원단계별비교예창패초기도약차이SpokeContent,
    '예비창업패키지최대8000만신청자격':      창업지원예비창업패키지최대8000만신청자격SpokeContent,
    '창업도약패키지업력3to7년최대2억':        창업지원창업도약패키지업력3to7년최대2억SpokeContent,
    '청년창업사관학교만39세1억평균7천':      창업지원청년창업사관학교만39세1억평균7천SpokeContent,
  },

  'public-rental-housing': {
    '50년공공임대신청자격월소득기준':    공공임대주택50년공공임대신청자격월소득기준SpokeContent,
    'LH공공임대월세임대료산정방식':      공공임대주택LH공공임대월세임대료산정방식SpokeContent,
    '공공임대입주단점실거주자':          공공임대주택공공임대입주단점실거주자SpokeContent,
    '공공임대청약공고신청순서서류':      공공임대주택공공임대청약공고신청순서서류SpokeContent,
  },

  'public-housing-sale': {
    '공공분양일반공급청약자격소득자산기준':   공공분양주택공공분양일반공급청약자격소득자산기준SpokeContent,
    '공공분양vs민간분양유리한점차이':         공공분양주택공공분양vs민간분양유리한점차이SpokeContent,
    '공공분양vs공공임대뭘신청해야하나':       공공분양주택공공분양vs공공임대뭘신청해야하나SpokeContent,
    '공공분양당첨후계약입주일정절차':         공공분양주택공공분양당첨후계약입주일정절차SpokeContent,
  },

  'jeonse-fraud-victim': {
    '피해자요건':   전세사기피해자요건SpokeContent,
    '지원내용':     전세사기지원내용SpokeContent,
    '우선매수권':   전세사기우선매수권SpokeContent,
    '긴급주거':     전세사기긴급주거SpokeContent,
    '신청방법':     전세사기신청방법SpokeContent,
  },

  'industrial-accident-insurance': {
    '보험급여종류': 산재보험급여종류SpokeContent,
    '휴업급여':     산재휴업급여SpokeContent,
    '업무상재해':   산재업무상재해SpokeContent,
    '신청방법':     산재신청방법SpokeContent,
    '회사처리':     산재회사처리SpokeContent,
    'medical-care-benefit-application':      산재요양급여SpokeContent,
    'injury-disease-compensation-pension':   산재상병보상연금SpokeContent,
    'disability-benefit-grade-check':        산재장해급여SpokeContent,
    'nursing-care-benefit-application':      산재간병급여SpokeContent,
    'survivor-benefit-funeral-expense':      산재유족급여SpokeContent,
    'vocational-rehabilitation-benefit':     산재직업재활급여SpokeContent,
    'pneumoconiosis-special-provision':      산재진폐특례SpokeContent,
    'review-request-procedure':              산재불복절차SpokeContent,
    'civil-damages-claim-relation':          산재손해배상관계SpokeContent,
    'max-min-compensation-standard-check':   산재보험급여적정성보장SpokeContent,
    'labor-provider-special-provision':      산재가입특례SpokeContent,
    'accident-recognition-standard':         산재사고인정기준SpokeContent,
    'occupational-disease-recognition':      산재질병인정기준SpokeContent,
    'health-impaired-child-benefit':         산재건강손상자녀SpokeContent,
    'coverage-scope-check':                  산재적용범위SpokeContent,
    'disability-survivor-special-benefit':   산재장해유족특별급여SpokeContent,
    'insurance-relation-report':             산재보험관계성립신고SpokeContent,
    'small-business-owner-special-provision': 산재중소기업사업주특례SpokeContent,
    'pneumoconiosis-occupational-disease-check': 산재진폐업무상질병인정SpokeContent,
  },

  'national-health-insurance': {
    'medical-expense-reimbursement': 건보요양비SpokeContent,
    'objection-appeal-procedure':    건보이의신청심판청구SpokeContent,
    'maternity-benefit-card':        건보부가급여SpokeContent,
    'health-checkup-schedule':       건보건강검진SpokeContent,
    'premium-arrears-installment':   건보보험료체납독촉SpokeContent,
  },

  'national-health-insurance-regional': {
    'premium-scoring-calculation':   건보지역보험료산정SpokeContent,
    'premium-reduction-eligibility': 건보지역보험료경감SpokeContent,
  },

  'beotimok-jeonse-loan': {
    '자격조건':   버팀목자격조건SpokeContent,
    '한도':       버팀목한도SpokeContent,
    '금리':       버팀목금리SpokeContent,
    '청년버팀목': 버팀목청년버팀목SpokeContent,
    '신청방법':   버팀목신청방법SpokeContent,
  },

  'disability-activity-support': {
    '대상자격':     장애인활동지원대상자격SpokeContent,
    '종합조사':     장애인활동지원종합조사SpokeContent,
    '본인부담금':   장애인활동지원본인부담금SpokeContent,
    '신청방법':     장애인활동지원신청방법SpokeContent,
    '65세전환':     장애인활동지원65세전환SpokeContent,
  },

  'emergency-welfare-support': {
    '위기사유':     긴급복지위기사유SpokeContent,
    '생계지원금':   긴급복지생계지원금SpokeContent,
    '소득재산기준': 긴급복지소득재산기준SpokeContent,
    '신청방법':     긴급복지신청방법SpokeContent,
    '지원종류':     긴급복지지원종류SpokeContent,
  },

  'near-poor': {
    '기준':         차상위기준SpokeContent,
    '기초수급차이': 차상위기초수급차이SpokeContent,
    '세부유형':     차상위세부유형SpokeContent,
    '혜택':         차상위혜택SpokeContent,
    '확인서':       차상위확인서SpokeContent,
  },

  'medical-benefit': {
    '1종2종':       의료급여1종2종SpokeContent,
    '본인부담금':   의료급여본인부담금SpokeContent,
    '수급자격':     의료급여수급자격SpokeContent,
    '건강생활유지비': 의료급여건강생활유지비SpokeContent,
    '신청방법':     의료급여신청방법SpokeContent,
  },

  'national-pension-premium': {
    '수령나이':     국민연금보험료수령나이SpokeContent,
    '수령액':       국민연금보험료수령액SpokeContent,
    '가입기간추납': 국민연금보험료가입기간추납SpokeContent,
    '조기노령연금': 국민연금보험료조기노령연금SpokeContent,
    '연기연금':     국민연금보험료연기연금SpokeContent,
    '유족연금':     국민연금보험료유족연금SpokeContent,
    '분할연금':     국민연금보험료분할연금SpokeContent,
    '기준소득월액': 국민연금보험료기준소득월액SpokeContent,
    '상한하한액':   국민연금보험료상한하한액SpokeContent,
    '보험료계산':   국민연금보험료계산SpokeContent,
    '가입자종류':   국민연금보험료가입자종류SpokeContent,
    '납부':         국민연금보험료납부SpokeContent,
    '개인연금비교': 국민연금보험료개인연금비교SpokeContent,
  },

  'property-tax': {
    '납부기간': 재산세납부기간SpokeContent,
    '조회납부': 재산세조회납부SpokeContent,
    '카드혜택': 재산세카드혜택SpokeContent,
    '특례세율': 재산세특례세율SpokeContent,
    '분납':     재산세분납SpokeContent,
    '감면':     재산세감면SpokeContent,
  },

  'national-scholar': {
    'bracket-update': 국가장학금지원구간최신화SpokeContent,
    '국가장학금2차신청기간2026':     국가장학금국가장학금2차신청기간2026SpokeContent,
    '2차구제신청':                 국가장학금2차구제신청SpokeContent,
    '2차신입생':                   국가장학금2차신입생SpokeContent,
    '국가장학금소득분위지급금액':    국가장학금국가장학금소득분위지급금액SpokeContent,
    '국가장학금F학점성적기준미달':   국가장학금국가장학금F학점성적기준미달SpokeContent,
    '국가장학금지급일통장입금시기':  국가장학금국가장학금지급일통장입금시기SpokeContent,
    '다자녀':     국가장학금다자녀SpokeContent,
    '가구원동의': 국가장학금가구원동의SpokeContent,
    '이의신청':   국가장학금이의신청SpokeContent,
    '휴학복학':   국가장학금휴학복학SpokeContent,
    '신청방법':   국가장학금신청방법SpokeContent,
  },

  'general-student-loan': {
    '일반상환vs취업후상환학자금선택기준':   일반상환학자금대출일반상환vs취업후상환학자금선택기준SpokeContent,
    '일반상환학자금2026금리이자':           일반상환학자금대출일반상환학자금2026금리이자SpokeContent,
    '일반상환학자금거치기간최대선택':       일반상환학자금대출일반상환학자금거치기간최대선택SpokeContent,
    '일반상환학자금졸업후상환방법':         일반상환학자금대출일반상환학자금졸업후상환방법SpokeContent,
  },

  'youth-housing-support': {
    '청년월세지원신청조건나이소득2026':   청년주거지원청년월세지원신청조건나이소득2026SpokeContent,
    '청년주거급여분리지급조건금액':       청년주거지원청년주거급여분리지급조건금액SpokeContent,
    '청년주거지원정책문제점못받는경우':   청년주거지원청년주거지원정책문제점못받는경우SpokeContent,
    '청년월세전세공공임대비교':           청년주거지원청년월세전세공공임대비교SpokeContent,
  },

  'lifelong-education-voucher': {
    '평생교육이용권사용가능기관강좌확인':   평생교육이용권평생교육이용권사용가능기관강좌확인SpokeContent,
    '평생교육이용권지원금우수이용자70만원': 평생교육이용권평생교육이용권지원금우수이용자70만원SpokeContent,
    '평생교육이용권신청기간학습계획서작성': 평생교육이용권평생교육이용권신청기간학습계획서작성SpokeContent,
    '평생교육이용권대상자기초차상위':       평생교육이용권평생교육이용권대상자기초차상위SpokeContent,
  },

  'unemployment-credit': {
    '실업크레딧이득안하면어떻게':      실업크레딧실업크레딧이득안하면어떻게SpokeContent,
    '실업크레딧퇴사후신청방법시기':    실업크레딧실업크레딧퇴사후신청방법시기SpokeContent,
    '실업크레딧국민연금동시납부가능':  실업크레딧실업크레딧국민연금동시납부가능SpokeContent,
    '실업크레딧단점해지구직급여주의':  실업크레딧실업크레딧단점해지구직급여주의SpokeContent,
  },

  'sme-innovation-voucher': {
    '혁신바우처공고신청자격지원금액':    중소기업혁신바우처혁신바우처공고신청자격지원금액SpokeContent,
    '혁신바우처공급기업수행기관선택':    중소기업혁신바우처혁신바우처공급기업수행기관선택SpokeContent,
    '혁신바우처사업계획서심사기준':      중소기업혁신바우처혁신바우처사업계획서심사기준SpokeContent,
    '혁신바우처플랫폼일반재기신청절차':  중소기업혁신바우처혁신바우처플랫폼일반재기신청절차SpokeContent,
  },

  'leap-loan': {
    '새도약론신청자격대상자확인':        새도약론새도약론신청자격대상자확인SpokeContent,
    '새도약론취급기관대부업체목록':      새도약론새도약론취급기관대부업체목록SpokeContent,
    '새도약론새도약기금새출발기금차이':  새도약론새도약론새도약기금새출발기금차이SpokeContent,
    '새도약론소각채무탕감조건':          새도약론새도약론소각채무탕감조건SpokeContent,
  },

  'platform-worker-insurance': {
    '적용직종12개월보수80만기준해당여부':         특수형태근로자고용보험적용직종12개월보수80만기준해당여부SpokeContent,
    '보험료사업주절반부담두루누리지원율':          특수형태근로자고용보험보험료사업주절반부담두루누리지원율SpokeContent,
    '실업급여가입후받는조건금액신청방법':          특수형태근로자고용보험실업급여가입후받는조건금액신청방법SpokeContent,
    '적용제외신청원하지않으면빠지는방법':          특수형태근로자고용보험적용제외신청원하지않으면빠지는방법SpokeContent,
  },

  'severance-pay': {
    '계산법': 퇴직금계산법SpokeContent,
    '지급기한': 퇴직금지급기한SpokeContent,
    '대상조건': 퇴직금대상조건SpokeContent,
    '중간정산': 퇴직금중간정산SpokeContent,
    '퇴직연금': 퇴직금퇴직연금SpokeContent,
    '청구권': 퇴직금청구권SpokeContent,
    '일용직': 퇴직금일용직SpokeContent,
    '세금': 퇴직금세금SpokeContent,
  },

  'debt-restructuring': {
    'personal-rehabilitation-eligibility': 채무조정개인회생자격SpokeContent,
    'bankruptcy-discharge': 채무조정개인파산면책SpokeContent,
    'credit-recovery-workout': 채무조정워크아웃SpokeContent,
    'debt-relief-comparison': 채무조정차이비교SpokeContent,
    'rehabilitation-repayment-change': 채무조정변제변경SpokeContent,
    'rehabilitation-documents': 채무조정신청서류SpokeContent,
    'rehabilitation-discharge': 채무조정면책SpokeContent,
    'rehabilitation-asset-treatment': 채무조정재산처리SpokeContent,
    'personal-bankruptcy-eligibility': 채무조정개인파산자격SpokeContent,
    'personal-bankruptcy-procedure': 채무조정개인파산절차SpokeContent,
    'speedy-debt-adjustment': 채무조정신속채무조정SpokeContent,
    'stage-comparison': 채무조정단계별비교SpokeContent,
  },

  'inheritance-renunciation': {
    '기한': 상속포기기한SpokeContent,
    '한정승인': 상속포기한정승인SpokeContent,
    '특별한정승인': 상속포기특별한정승인SpokeContent,
    '상속순위': 상속포기상속순위SpokeContent,
    '서류': 상속포기서류SpokeContent,
  },

  'inheritance-division': {
    '법정상속분': 상속분할법정상속분SpokeContent,
    '상속재산분할': 상속분할상속재산분할SpokeContent,
    '유류분': 상속분할유류분SpokeContent,
    '상속세': 상속분할상속세SpokeContent,
  },

  'old-age-pension': {
    'claim-documents-payday': 노령연금청구서류지급일SpokeContent,
    'pension-tax-health-insurance': 노령연금세금건강보험료SpokeContent,
    'survivor-pension-overlap': 노령연금유족연금중복SpokeContent,
    'housing-pension-reduction': 노령연금주택연금감액SpokeContent,
    'payment-suspension-restore': 노령연금지급정지복구SpokeContent,
  },

  'wegovy-price-comparison': {
    'insurance-claim-criteria': 위고비실비청구기준SpokeContent,
  },

  'youth-culture-arts-pass': {
    'apply-period-amount-deadline': 청년문화예술패스신청시기지원금사용기한SpokeContent,
  },

  'jeonse-protection': {
    'online-fixed-date-apply': 확정일자온라인신청SpokeContent,
    '대항력우선변제권': 전세대항력SpokeContent,
    '전세사기예방': 전세사기예방SpokeContent,
    '보증금반환': 전세보증금반환SpokeContent,
    '계약갱신증액': 전세계약갱신SpokeContent,
  },

  'traffic-accident': {
    'criminal-penalty-12-negligence': trafficCriminal12SpokeContent,
    'settlement-criminal-agreement': trafficSettlementSpokeContent,
    'compensation-fault-ratio': trafficCompensationSpokeContent,
    'accident-response-hit-and-run': trafficResponseSpokeContent,
  },

  'drunk-driving': {
    'penalty-standard': drunkPenaltyStandardSpokeContent,
    'license-revocation': drunkLicenseSpokeContent,
    'breath-test-refusal-repeat': drunkRefusalRepeatSpokeContent,
    'drunk-driving-accident': drunkAccidentSpokeContent,
  },

  'unpaid-wages': {
    'report-procedure': unpaidReportSpokeContent,
    'criminal-penalty-delay-interest': unpaidPenaltySpokeContent,
    'wage-guarantee-fund': unpaidGuaranteeSpokeContent,
    'civil-execution': unpaidCivilSpokeContent,
  },

  'super-isa': {
    'launch-schedule': superIsaLaunchSpokeContent,
    'youth-isa': superIsaYouthSpokeContent,
    'national-growth-isa': superIsaNationalGrowthSpokeContent,
    'vs-existing-isa': superIsaVsExistingSpokeContent,
  },

  'k-pass-modu-card': {
    'what-is-modu-card': kPassWhatIsModuSpokeContent,
    'general-vs-plus-type': kPassGeneralPlusSpokeContent,
    'refund-rate-by-target': kPassRefundRateSpokeContent,
    'temporary-boost-2026': kPassTemporaryBoostSpokeContent,
  },

  'seoul-childbirth-housing-support': {
    'eligibility-requirements': seoulHousingEligibilitySpokeContent,
    'amount-payment-method': seoulHousingAmountPaymentSpokeContent,
    'how-to-apply': seoulHousingHowToApplySpokeContent,
    'extension-and-overlap': seoulHousingExtensionOverlapSpokeContent,
  },

  'samsung-miso-finance-loan': {
    'online-application': samsungMisoOnlineApplicationSpokeContent,
    'eligibility-details': samsungMisoEligibilityDetailsSpokeContent,
    'loan-products-comparison': samsungMisoLoanProductsComparisonSpokeContent,
    'required-documents': samsungMisoRequiredDocumentsSpokeContent,
    'application-period': samsungMisoApplicationPeriodSpokeContent,
    'unemployed': samsungMisoUnemployedSpokeContent,
  },

  'marriage-report': {
    'marriage-birth-move-onestop': marriageBirthMoveOnestopSpokeContent,
  },

  'hidden-insurance-money': {
    'how-to-find': hiddenInsuranceHowToFindSpokeContent,
    'limitation-period': hiddenInsuranceLimitationPeriodSpokeContent,
    'inheritance-check': hiddenInsuranceInheritanceCheckSpokeContent,
    'claim-and-refund': hiddenInsuranceClaimRefundSpokeContent,
  },

  'value-added-tax': {
    'real-estate-rental-error-fix': vatRealEstateRentalErrorFixSpokeContent,
  },

  'voice-phishing-crypto-refund': {
    'refund-procedure': voicePhishingRefundProcedureSpokeContent,
    'decree-changes': voicePhishingDecreeChangesSpokeContent,
    'deadline-missed': voicePhishingDeadlineMissedSpokeContent,
  },

  'auto-insurance-loss-ratio': {
    'premium-calculation-tips': autoInsurancePremiumCalculationTipsSpokeContent,
    'premium-saving-special-terms': autoInsurancePremiumSavingSpokeContent,
  },

  'inverter-ac-electricity-saving': {
    'appliance-rebate-program-status': applianceRebateProgramStatusSpokeContent,
  },

  'kespa-cup-2026': {
    '결선티켓예매': 케스파컵결선티켓예매SpokeContent,
  },

};
