import { chromium } from 'playwright';
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 430, height: 900 } });   // 모바일 화면
await p.goto('https://gov.jjyu.co.kr/policy/roots-info-site/', { waitUntil: 'domcontentloaded', timeout: 40000 });
await p.waitForTimeout(3000);
const html = await p.content();

// 첫 화면(스크롤 없이)에 버튼이 들어오나
const y = await p.evaluate(() => {
  const a = document.querySelector('a.btn-cta');
  if (!a) return null;
  const r = a.getBoundingClientRect();
  return { top: Math.round(r.top + window.scrollY), text: a.textContent.trim(), href: a.getAttribute('href') };
}).catch(() => null);

console.log('상단 버튼:', y ? `${y.text} → ${y.href}` : '(못 찾음)');
console.log('버튼 위치: 페이지 상단에서', y ? y.top : '?', 'px');
console.log('모바일 첫 화면(900px) 안에 보이나:', y && y.top < 900 ? '예' : '아니오');
console.log('배포 반영:', html.includes('info/home') ? '새 버전' : '옛 버전');
console.log('서론 길이 확인:', (html.match(/안 열린다는 분이 많으시죠/) ? '축약본 반영됨' : '옛 서론'));
await b.close();
