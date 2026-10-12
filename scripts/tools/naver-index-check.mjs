/**
 * 네이버 웹문서 검색 — 사람들이 실제로 치는 짧은 키워드로 gov 글이 몇 위에 뜨는지, 그 위에 누가 있는지 모은다 (2026-10-12)
 *
 *   node scripts/tools/naver-index-check.mjs [--gap=3000]
 *
 * - 아래 KW 표: [글 slug, 사람이 치는 키워드, 구분(비교용 노출글=ctrl / 노출 0 글=zero)]
 * - 읽기 전용(검색 화면만 연다). 로그인 세션은 scripts/cafe/.profile. 결과: scripts/output/naver-kw-check-{날짜}.json
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const GAP = Number((process.argv.find((a) => a.startsWith('--gap=')) || '').split('=')[1]) || 3000;
const H = 'indemnity-insurance-generations/';
const KW = [
  // 비교용: 노출이 있는 글
  ['varicose-vein', '하지정맥류 실비', 'ctrl'], ['prostate', '전립선비대증 실비', 'ctrl'], ['nerve-plasty', '신경성형술 실비', 'ctrl'],
  ['mental-health-claim', '정신과 실비', 'ctrl'], ['shingles-vaccine', '대상포진 실비', 'ctrl'],
  // 노출 0 글
  ['thyroid', '갑상선 실비', 'zero'], ['septal-deviation', '비중격만곡증 실비', 'zero'], ['mirena', '미레나 실비', 'zero'], ['lumbar-disc', '허리디스크 실비', 'zero'],
  ['plantar-fasciitis', '족저근막염 실비', 'zero'], ['hemorrhoid-surgery-claim', '치질 수술 실비', 'zero'], ['incontinence-surgery-denied', '요실금 수술 실비', 'zero'],
  ['rhinitis-surgery-claim', '비염 수술 실비', 'zero'], ['cataract-multifocal', '백내장 실비', 'zero'], ['blepharoptosis-purpose', '안검하수 실비', 'zero'],
  ['gynecomastia-liposuction', '여유증 실비', 'zero'], ['wart-cryotherapy', '사마귀 냉동치료 실비', 'zero'], ['diabetes-claim', '당뇨 실비', 'zero'],
  ['dental-implant', '임플란트 실비', 'zero'], ['artificial-tears-claim', '인공눈물 실비', 'zero'], ['gastroscopy-checkup', '수면내시경 실비', 'zero'],
  ['icu-claim', '중환자실 실비', 'zero'], ['emergency-room-fee', '응급실 실비', 'zero'], ['upper-room-charge', '2인실 실비', 'zero'],
  ['oriental-clinic-claim', '한의원 실비', 'zero'], ['oriental-hospital-mri', '한방병원 MRI 실비', 'zero'], ['mri-deductible-limit', 'MRI 실비 한도', 'zero'],
  ['mri-checkup-center', '검진센터 MRI 실비', 'zero'], ['vitamin-injection-exclusion', '영양주사 실비', 'zero'], ['manual-therapy-denied', '도수치료 실비 거절', 'zero'],
  ['nonsevere-excluded-items', '비중증 도수치료 실비', 'zero'], ['colonoscopy-ultrasound-claim', '대장내시경 초음파 실비', 'zero'], ['fracture-diagnosis-benefit', '골절 진단비 실비', 'zero'],
  ['dental-oriental-exclusion', '치과 한방 성장호르몬 실비', 'zero'], ['cosmetic-purpose-exclusion', '미용 목적 실비', 'zero'], ['ortho-documents', '정형외과 실비 서류', 'zero'],
  ['claim-documents', '실비 청구 서류', 'zero'], ['company-documents', '실비 신청 서류', 'zero'], ['receipt-only', '실비 영수증만 청구', 'zero'],
  ['medical-certificate', '진단서 없이 실비', 'zero'], ['claim-denied', '실비 청구 거절', 'zero'], ['claim-rejected-docs', '실비 서류 반려', 'zero'],
  ['retroactive-claim', '실비 소급 청구', 'zero'], ['claim-period-3y', '실비 청구 기간', 'zero'], ['claim-payment-deadline', '실비 지급 기간', 'zero'],
  ['silson24-claim', '실손24 청구', 'zero'], ['admission-count-rule', '실비 입원 횟수', 'zero'], ['self-admission-denied', '입원 실비 면책', 'zero'],
  ['auto-insurance-offset', '자동차보험 실비 중복', 'zero'], ['industrial-accident-duplicate', '산재 실비 중복', 'zero'], ['copay-ceiling-refund', '본인부담상한제 실비', 'zero'],
  ['duplicate-coverage', '실비 중복 가입', 'zero'], ['group-vs-individual', '단체실손 개인실손', 'zero'], ['seizure', '실비 압류', 'zero'],
  ['disclosure-duty-breach', '실비 고지의무 위반', 'zero'], ['reenrollment-no-rejection', '실비 재가입 거절', 'zero'], ['first-gen-cancel-check', '1세대 실손 해지', 'zero'],
  ['second-fourth-gen-conversion', '실손 5세대 전환', 'zero'], ['generation-check', '내 실손보험 세대 확인', 'zero'], ['indemnity-premium-by-age', '40대 실비보험료', 'zero'],
  ['nonpayment-premium-surcharge', '실손 할증', 'zero'], ['fetal-insurance', '태아 실비보험', 'zero'], ['copay-rate', '실손 자기부담금', 'zero'],
  ['non-covered-benefits', '실비 비급여 보장', 'zero'], ['coverage-change', '실손보험 보장 변경', 'zero'], ['severe-disease-scope', '실비 중증 산정특례', 'zero'],
  ['nursing-care-alternative', '간병비 실손', 'zero'],
];
const OUT = path.join(ROOT, 'scripts', 'output', `naver-kw-check-${new Date().toISOString().slice(0, 10)}.json`);
const res = {};
const ctx = await chromium.launchPersistentContext(path.join(ROOT, 'scripts', 'cafe', '.profile'), { headless: false, viewport: { width: 1400, height: 1200 }, locale: 'ko-KR' });
const p = ctx.pages()[0] ?? await ctx.newPage();
const UI = /(^|\.)(naver\.com|naver\.net|pstatic\.net|naver\.me)$/;
let i = 0;
for (const [slug, kw, kind] of KW) {
  i++;
  await p.goto(`https://search.naver.com/search.naver?where=web&query=${encodeURIComponent(kw)}`, { waitUntil: 'domcontentloaded', timeout: 45000 }).catch(() => {});
  await p.waitForTimeout(1800);
  if (/nid\.naver\.com|captcha|security/.test(p.url())) { console.error('보안 확인/로그인 화면 — 중단'); break; }
  const links = await p.evaluate(() => [...document.querySelectorAll('a[href^="http"]')].map((a) => a.href));
  const seen = [];
  for (const h of links) { const u = new URL(h); if (UI.test(u.hostname) && !/(blog|cafe|post|kin)\.naver\.com/.test(u.hostname)) continue; const k = u.hostname + u.pathname.replace(/\/$/, ''); if (!seen.includes(k)) seen.push(k); }
  const mineIdx = seen.findIndex((k) => k.startsWith('gov.jjyu.co.kr'));
  const mineKey = mineIdx >= 0 ? seen[mineIdx] : null;
  res[slug] = { kw, kind, rank: mineIdx >= 0 ? mineIdx + 1 : null, govPath: mineKey ? mineKey.replace('gov.jjyu.co.kr', '') : null, correctPage: mineKey ? mineKey.endsWith(H + slug) : false, top: seen.slice(0, 6).map((k) => k.split('/')[0]) };
  console.log(`${String(i).padStart(2)} [${kind}] ${kw.padEnd(16)} ${mineIdx >= 0 ? '순위' + (mineIdx + 1) + (res[slug].correctPage ? '' : ' (다른 gov 글: ' + res[slug].govPath + ')') : '없음'} | ${res[slug].top.slice(0, 4).join(', ')}`);
  fs.writeFileSync(OUT, JSON.stringify(res, null, 1));
  await p.waitForTimeout(GAP);
}
await ctx.close();
for (const kind of ['ctrl', 'zero']) {
  const v = Object.values(res).filter((o) => o.kind === kind);
  console.log(`\n[${kind}] 키워드 ${v.length}개 중 gov 글 등장 ${v.filter((o) => o.rank).length}, 해당 글 자체 등장 ${v.filter((o) => o.correctPage).length}`);
}
console.log('저장:', path.relative(ROOT, OUT));
