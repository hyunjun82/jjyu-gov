/**
 * IndexNow 일괄 제출 — 빙·네이버·얀덱스 등에 URL 즉시 통보(크롤 가속).
 * 구글은 IndexNow 미지원(효과 없음).
 *
 * 사용:  npx tsx scripts/indexnow-submit.ts
 * 배포(사이트 반영) 후 실행해야 함 — 키 파일이 라이브에 있어야 검증됨.
 */
import { PoliciesBySlug } from '../data/policies/manifest';
import { SpokesRegistry } from '../data/spokes/registry';

const HOST = 'gov.jjyu.co.kr';
const KEY = '25963bccc123dce6c1c1b48af0840c8b';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const ENDPOINT = 'https://api.indexnow.org/indexnow'; // 참여 엔진(빙·네이버·얀덱스 등)에 자동 분배

function buildUrlList(): string[] {
  const base = `https://${HOST}`;
  const urls: string[] = [
    `${base}/`,
    `${base}/category/fund/`,
    `${base}/category/refund/`,
    `${base}/category/loan/`,
    `${base}/category/youth/`,
    `${base}/category/welfare/`,
    `${base}/category/tax/`,
    `${base}/category/medical/`,
    `${base}/category/life/`,
  ];
  // 정책 허브
  for (const slug of Object.keys(PoliciesBySlug)) {
    urls.push(`${base}/policy/${slug}/`);
  }
  // 스포크
  for (const [policySlug, spokes] of Object.entries(SpokesRegistry)) {
    if (!spokes || typeof spokes !== 'object') continue;
    for (const spokeKey of Object.keys(spokes as Record<string, unknown>)) {
      urls.push(`${base}/policy/${policySlug}/${encodeURIComponent(spokeKey)}/`);
    }
  }
  return [...new Set(urls)];
}

async function main() {
  const urlList = buildUrlList();
  console.log(`총 ${urlList.length}개 URL을 IndexNow에 제출합니다 (host=${HOST})`);

  // IndexNow는 1회 최대 10,000개. 안전하게 1000개씩 청크 분할.
  const CHUNK = 1000;
  for (let i = 0; i < urlList.length; i += CHUNK) {
    const chunk = urlList.slice(i, i + CHUNK);
    const body = { host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList: chunk };
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(body),
    });
    console.log(`  청크 ${i / CHUNK + 1}: ${chunk.length}개 → HTTP ${res.status} ${res.statusText}`);
    // 200/202 = 성공적으로 접수. 4xx면 키 파일 검증 실패 등.
    if (res.status >= 400) {
      const t = await res.text().catch(() => '');
      console.log(`    응답: ${t.slice(0, 300)}`);
    }
  }
  console.log('완료. 빙 웹마스터 / 네이버 서치어드바이저에서 수집 반영을 확인하세요.');
  console.log('※ 구글은 IndexNow 미지원 — 구글은 GSC 색인 요청으로 별도 진행.');
}

main().catch((e) => { console.error(e); process.exit(1); });
