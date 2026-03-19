'use client';
import Link from 'next/link';
import { ChevronRight, ExternalLink, Share2 } from 'lucide-react';
import { useState } from 'react';

const policy = {
  title: '2026 청년 도약 계좌 지원금',
  org: '금융위원회',
  cat: '지원금',
  amount: '최대 5,000만원',
  deadline: '2026.06.30',
  views: 12847,
  applyUrl: 'https://www.gov.kr',
  summary: '만 19~34세 청년이 5년간 월 최대 70만원을 납입하면, 정부가 기여금을 추가 지원하여 5,000만원까지 목돈을 마련할 수 있는 청년 자산형성 지원 제도입니다.',
  details: [
    { label: '지원대상', value: '만 19~34세 청년 (병역이행기간 최대 6년 추가 인정)' },
    { label: '소득요건', value: '개인소득 7,500만원 이하, 가구소득 중위 250% 이하' },
    { label: '지원유형', value: '현금(기여금) + 비과세 혜택' },
    { label: '지원내용', value: '정부기여금 월 최대 40만원 + 비과세 + 이자소득 추가 지원' },
    { label: '신청방법', value: '시중은행 앱(국민·신한·하나·우리·농협) 또는 영업점 방문 신청' },
    { label: '신청기간', value: '2026년 1월 1일 ~ 2026년 6월 30일' },
    { label: '제출서류', value: '신분증, 소득확인증명서, 가구원 관계증명서' },
    { label: '문의처', value: '금융위원회 ☎ 1332, 서민금융콜센터 ☎ 1397' },
  ],
  eligibility: [
    { q: '만 19세 이상 34세 이하입니까?', key: 'age' },
    { q: '개인 소득이 연 7,500만원 이하입니까?', key: 'income' },
    { q: '가구 소득이 중위소득 250% 이하입니까?', key: 'household' },
    { q: '기존 청년희망적금 가입 이력이 없습니까?', key: 'nodup' },
    { q: '금융소득종합과세 대상자가 아닙니까?', key: 'nofinance' },
  ],
  related: [
    { id: '2', title: '청년 월세 특별지원 (3차)', cat: '지원금' },
    { id: '5', title: '서울시 청년 교통비 지원', cat: '환급금' },
    { id: '6', title: '국민취업지원제도 (1유형)', cat: '지원금' },
    { id: '4', title: '근로장려금 반기 신청', cat: '환급금' },
  ],
};

const spokeLinks = [
  { name: '대출 비교', url: '#', emoji: '💳' },
  { name: '계산기', url: '#', emoji: '🧮' },
  { name: 'QnA 상담', url: '#', emoji: '❓' },
  { name: '법률 정보', url: '#', emoji: '⚖️' },
  { name: '약국 찾기', url: '#', emoji: '💊' },
  { name: '머니위키', url: '#', emoji: '📖' },
  { name: '보험 비교', url: '#', emoji: '🛡️' },
  { name: '세금 계산', url: '#', emoji: '🧾' },
  { name: '부동산', url: '#', emoji: '🏠' },
  { name: '취업 정보', url: '#', emoji: '💼' },
];

export default function PolicyDetailPage() {
  const [checks, setChecks] = useState<Record<string, boolean | null>>({});
  const d = policy;

  const totalQ = d.eligibility.length;
  const answered = Object.keys(checks).length;
  const passed = Object.values(checks).filter(v => v === true).length;
  const allDone = answered === totalQ;
  const allPass = allDone && passed === totalQ;

  return (
    <div className="gov-wrap">
      {/* ══════ 메인 콘텐츠 ══════ */}
      <div className="gov-main">

        {/* 브레드크럼 */}
        <div className="detail-breadcrumb">
          <Link href="/">홈</Link> <ChevronRight size={12} />
          <Link href="/category/fund">지원금</Link> <ChevronRight size={12} />
          <span style={{ color: '#222', fontWeight: 600 }}>{d.title}</span>
        </div>

        {/* 정책 제목 헤더 */}
        <div className="detail-box">
          <div style={{ padding: '24px 20px' }}>
            <div style={{ display: 'flex', gap: 6, marginBottom: 12 }}>
              <span className="p-cat cat-fund">{d.cat}</span>
              <span className="p-cat cat-hot">🔥 인기</span>
            </div>
            <h1 style={{ fontSize: 24, fontWeight: 800, lineHeight: 1.35, marginBottom: 8 }}>{d.title}</h1>
            <div style={{ display: 'flex', gap: 16, fontSize: 13, color: '#888', flexWrap: 'wrap' }}>
              <span>🏛️ {d.org}</span>
              <span>📅 마감: {d.deadline}</span>
              <span>👁️ {d.views.toLocaleString()}명 조회</span>
            </div>
          </div>
          <div style={{ padding: '0 20px 20px' }}>
            <div style={{ background: '#f0f5fb', borderRadius: 8, padding: '20px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: 12, color: '#888', marginBottom: 4 }}>지원 금액</div>
                <div style={{ fontSize: 28, fontWeight: 900, color: '#003d88' }}>{d.amount}</div>
              </div>
              <a href={d.applyUrl} target="_blank" rel="noopener noreferrer" style={{ padding: '14px 32px', background: '#003d88', color: '#fff', borderRadius: 8, fontWeight: 700, fontSize: 16, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6 }}>
                신청하기 <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* 사업 개요 */}
        <div className="detail-box">
          <div className="detail-box-head">사업 개요</div>
          <div className="detail-box-body">
            <p style={{ fontSize: 15, lineHeight: 1.8, color: '#444' }}>{d.summary}</p>
          </div>
        </div>

        {/* 상세 정보 (정부 스타일 테이블) */}
        <div className="detail-box">
          <div className="detail-box-head">상세 정보</div>
          <div className="detail-box-body" style={{ padding: 0 }}>
            <table className="info-table">
              <tbody>
                {d.details.map((item, i) => (
                  <tr key={i}>
                    <th>{item.label}</th>
                    <td>{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 광고 */}
        <div className="ad-slot" style={{ margin: '16px 0' }}>광고 영역 (인라인 Ad Unit)</div>

        {/* 자격조건 체커 */}
        <div className="detail-box">
          <div className="detail-box-head">자격 조건 확인</div>
          <div className="detail-box-body">
            <p style={{ fontSize: 13, color: '#888', marginBottom: 16 }}>아래 항목을 클릭하여 자격 조건 충족 여부를 확인하세요.</p>
            {d.eligibility.map((item, i) => {
              const val = checks[item.key];
              const cls = val === true ? 'pass' : val === false ? 'fail' : '';
              return (
                <div className={`elig-item ${cls}`} key={i}>
                  <span className="q">{item.q}</span>
                  <div className="elig-btns">
                    <button className={val === true ? 'yes-active' : ''} onClick={() => setChecks(p => ({ ...p, [item.key]: true }))}>예</button>
                    <button className={val === false ? 'no-active' : ''} onClick={() => setChecks(p => ({ ...p, [item.key]: false }))}>아니오</button>
                  </div>
                </div>
              );
            })}
            {allDone && (
              <div style={{ marginTop: 16, padding: '16px 20px', borderRadius: 6, background: allPass ? '#f0fdf4' : '#fef2f2', border: `1px solid ${allPass ? '#86efac' : '#fecaca'}` }}>
                {allPass ? (
                  <div style={{ fontWeight: 700, color: '#166534' }}>🎉 축하합니다! 자격 조건을 모두 충족합니다. 위의 신청하기 버튼을 이용하세요.</div>
                ) : (
                  <div style={{ fontWeight: 700, color: '#991b1b' }}>일부 조건이 맞지 않습니다. 아래 관련 정책을 확인해 보세요.</div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* 관련 정책 (나무위키식 내부 링크) */}
        <div className="detail-box">
          <div className="detail-box-head">관련 정책 더보기</div>
          <div>
            {d.related.map((r, i) => (
              <Link href={`/policy/${r.id}`} key={i} className="policy-item" style={{ padding: '14px 20px' }}>
                <div className="p-info">
                  <div style={{ display: 'flex', gap: 4, marginBottom: 4 }}>
                    <span className={`p-cat ${r.cat === '지원금' ? 'cat-fund' : 'cat-refund'}`}>{r.cat}</span>
                  </div>
                  <div className="p-title" style={{ fontSize: 15 }}>{r.title}</div>
                </div>
                <ChevronRight size={16} style={{ color: '#ccc', flexShrink: 0 }} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ══════ 우측 사이드바 ══════ */}
      <div className="gov-sidebar">
        {/* 신청하기 CTA (고정) */}
        <div className="side-card" style={{ position: 'sticky', top: 84 }}>
          <div className="side-card-body">
            <div style={{ fontSize: 12, color: '#888', marginBottom: 4 }}>지원 금액</div>
            <div style={{ fontSize: 24, fontWeight: 900, color: '#003d88', marginBottom: 4 }}>{d.amount}</div>
            <div style={{ fontSize: 12, color: '#888', marginBottom: 16 }}>마감: {d.deadline}</div>
            <a href={d.applyUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'block', textAlign: 'center', padding: '14px 0', background: '#003d88', color: '#fff', borderRadius: 6, fontWeight: 700, fontSize: 16, textDecoration: 'none', marginBottom: 8 }}>
              신청하기 →
            </a>
            <button style={{ width: '100%', padding: '10px 0', background: '#f4f6f9', border: '1px solid #dde1e6', borderRadius: 6, fontSize: 13, fontWeight: 600, color: '#555', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
              <Share2 size={14} /> 공유하기
            </button>
          </div>
        </div>

        {/* 연계 서비스 (스포크 사이트) */}
        <div className="side-card">
          <div className="side-card-head">🔗 연계 서비스</div>
          <div className="side-card-body">
            {spokeLinks.slice(0, 6).map((s, i) => (
              <a key={i} href={s.url} className="spoke-link">
                <span className="s-icon">{s.emoji}</span>
                {s.name}
                <ExternalLink size={12} style={{ marginLeft: 'auto', color: '#ccc' }} />
              </a>
            ))}
          </div>
        </div>

        {/* 사이드바 광고 */}
        <div className="ad-slot">광고 영역 (Sidebar Ad)</div>
      </div>
    </div>
  );
}
