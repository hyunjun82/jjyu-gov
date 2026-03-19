'use client';
import Link from 'next/link';
import { ArrowLeft, Calendar, Building2, Users, FileText, ExternalLink, ChevronRight, CheckCircle2, XCircle, AlertCircle, Zap } from 'lucide-react';
import { useState } from 'react';

/* 더미 정책 데이터 (향후 Supabase 연동) */
const policyData = {
  title: '2026 청년 도약 계좌 지원금',
  org: '금융위원회',
  category: '지원금',
  amount: '최대 5,000만원',
  deadline: '2026.06.30',
  applyUrl: 'https://www.gov.kr',
  summary: '만 19~34세 청년이 5년간 월 최대 70만원을 납입하면, 정부가 기여금을 추가 지원하여 5,000만원까지 목돈을 마련할 수 있는 제도입니다.',
  details: [
    { label: '지원대상', value: '만 19~34세 청년 (병역이행기간 최대 6년 추가 인정)' },
    { label: '소득요건', value: '개인소득 7,500만원 이하, 가구소득 중위 250% 이하' },
    { label: '지원내용', value: '정부기여금 월 최대 40만원 + 비과세 + 이자소득 추가 지원' },
    { label: '신청방법', value: '시중은행 앱 또는 영업점 방문 신청' },
    { label: '신청기간', value: '2026년 1월 1일 ~ 2026년 6월 30일' },
    { label: '문의처', value: '금융위원회 1332, 서민금융콜센터 1397' },
  ],
  eligibility: [
    { question: '만 19세 이상 34세 이하입니까?', key: 'age' },
    { question: '개인 소득이 연 7,500만원 이하입니까?', key: 'income' },
    { question: '가구 소득이 중위소득 250% 이하입니까?', key: 'household' },
    { question: '기존 청년희망적금 가입 이력이 없습니까?', key: 'nodup' },
  ],
  related: [
    { id: '2', title: '청년 월세 특별지원 (3차)', category: '지원금' },
    { id: '5', title: '서울시 청년 교통비 지원', category: '환급금' },
    { id: '6', title: '국민취업지원제도 (1유형)', category: '지원금' },
    { id: '4', title: '근로장려금 반기 신청', category: '환급금' },
  ]
};

const spokeLinks = [
  { name: '대출 비교', url: 'https://loan-jjyu.co.kr', emoji: '💳' },
  { name: '계산기', url: 'https://calc-jjyu.co.kr', emoji: '🧮' },
  { name: 'QnA', url: 'https://qna-jjyu.co.kr', emoji: '❓' },
  { name: '법률 정보', url: 'https://law-jjyu.co.kr', emoji: '⚖️' },
  { name: '약국 정보', url: 'https://pharm.jjyu.co.kr', emoji: '💊' },
  { name: '머니위키', url: 'https://moneywiki.co.kr', emoji: '📚' },
];

export default function PolicyDetailPage() {
  const [checks, setChecks] = useState<Record<string, boolean>>({});
  const d = policyData;

  const totalChecks = d.eligibility.length;
  const passedChecks = Object.values(checks).filter(Boolean).length;
  const allAnswered = Object.keys(checks).length === totalChecks;
  const allPassed = allAnswered && passedChecks === totalChecks;

  return (
    <div style={{ display: 'flex', gap: 28 }}>
      {/* ────── 본문 ────── */}
      <div style={{ flex: 1, minWidth: 0 }}>
        {/* 뒤로가기 */}
        <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14, color: '#6b7280', textDecoration: 'none', marginBottom: 20, fontWeight: 500 }}>
          <ArrowLeft style={{ width: 16, height: 16 }} /> 목록으로
        </Link>

        {/* 헤더 카드 */}
        <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 20, padding: '32px', marginBottom: 20 }}>
          <div style={{ display: 'flex', gap: 8, marginBottom: 14 }}>
            <span className="badge badge-green">지원금</span>
            <span className="badge badge-red">🔥 인기</span>
          </div>
          <h1 style={{ fontSize: 28, fontWeight: 800, color: '#1a1a2e', lineHeight: 1.3, marginBottom: 12 }}>{d.title}</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap', marginBottom: 20 }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 14, color: '#6b7280' }}><Building2 style={{ width: 16, height: 16 }} /> {d.org}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 14, color: '#6b7280' }}><Calendar style={{ width: 16, height: 16 }} /> ~ {d.deadline}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '20px 24px', background: '#f0f7ff', borderRadius: 14 }}>
            <div>
              <div style={{ fontSize: 13, color: '#6b7280', marginBottom: 4 }}>지원 금액</div>
              <div style={{ fontSize: 28, fontWeight: 800, color: '#0066ff' }}>{d.amount}</div>
            </div>
            <a href={d.applyUrl} target="_blank" rel="noopener noreferrer" style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 8, padding: '14px 28px', background: '#0066ff', color: '#fff', borderRadius: 14, textDecoration: 'none', fontWeight: 700, fontSize: 16, transition: 'all 0.15s' }}>
              신청하기 <ExternalLink style={{ width: 18, height: 18 }} />
            </a>
          </div>
        </div>

        {/* 요약 */}
        <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 20, padding: 32, marginBottom: 20 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}><FileText style={{ width: 22, height: 22, color: '#0066ff' }} /> 사업 개요</h2>
          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.8 }}>{d.summary}</p>
        </div>

        {/* 상세 정보 테이블 */}
        <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 20, padding: 32, marginBottom: 20 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 20 }}>📋 상세 정보</h2>
          <div style={{ display: 'grid', gap: 0 }}>
            {d.details.map((item, i) => (
              <div key={i} style={{ display: 'flex', padding: '16px 0', borderBottom: i < d.details.length - 1 ? '1px solid #f3f4f6' : 'none' }}>
                <div style={{ width: 120, flexShrink: 0, fontSize: 14, fontWeight: 700, color: '#0066ff' }}>{item.label}</div>
                <div style={{ fontSize: 15, color: '#374151', lineHeight: 1.6 }}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 광고 영역 */}
        <div style={{ background: '#f1f3f5', borderRadius: 16, padding: 24, textAlign: 'center', marginBottom: 20, border: '1px dashed #d1d5db' }}>
          <span style={{ fontSize: 13, color: '#9ca3af' }}>광고 영역 (인라인 Ad Unit)</span>
        </div>

        {/* ✅ 자격조건 체커 */}
        <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 20, padding: 32, marginBottom: 20 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 6, display: 'flex', alignItems: 'center', gap: 8 }}>
            <Users style={{ width: 22, height: 22, color: '#0066ff' }} /> 자격 조건 체크
          </h2>
          <p style={{ fontSize: 14, color: '#6b7280', marginBottom: 20 }}>아래 항목을 클릭해서 내가 해당 조건을 만족하는지 확인해 보세요.</p>
          
          <div style={{ display: 'grid', gap: 10 }}>
            {d.eligibility.map((item, i) => {
              const checked = checks[item.key];
              const isYes = checked === true;
              const isNo = checked === false;
              return (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '16px 20px', background: isYes ? '#f0fdf4' : isNo ? '#fef2f2' : '#f7f8fa', borderRadius: 14, border: `1px solid ${isYes ? '#86efac' : isNo ? '#fca5a5' : '#e5e7eb'}`, transition: 'all 0.2s' }}>
                  <span style={{ flex: 1, fontSize: 15, fontWeight: 500, color: '#1a1a2e' }}>{item.question}</span>
                  <button 
                    onClick={() => setChecks(prev => ({ ...prev, [item.key]: true }))}
                    style={{ padding: '8px 16px', borderRadius: 10, border: `1px solid ${isYes ? '#22c55e' : '#d1d5db'}`, background: isYes ? '#22c55e' : '#fff', color: isYes ? '#fff' : '#374151', fontSize: 13, fontWeight: 700, cursor: 'pointer', transition: 'all 0.15s' }}
                  >
                    예 ✓
                  </button>
                  <button 
                    onClick={() => setChecks(prev => ({ ...prev, [item.key]: false }))}
                    style={{ padding: '8px 16px', borderRadius: 10, border: `1px solid ${isNo ? '#ef4444' : '#d1d5db'}`, background: isNo ? '#ef4444' : '#fff', color: isNo ? '#fff' : '#374151', fontSize: 13, fontWeight: 700, cursor: 'pointer', transition: 'all 0.15s' }}
                  >
                    아니오 ✗
                  </button>
                </div>
              );
            })}
          </div>

          {/* 결과 */}
          {allAnswered && (
            <div style={{ marginTop: 20, padding: '20px 24px', borderRadius: 14, background: allPassed ? '#f0fdf4' : '#fef2f2', border: `1px solid ${allPassed ? '#86efac' : '#fca5a5'}`, display: 'flex', alignItems: 'center', gap: 12 }}>
              {allPassed ? (
                <>
                  <CheckCircle2 style={{ width: 28, height: 28, color: '#22c55e', flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: 17, fontWeight: 800, color: '#166534' }}>🎉 축하합니다! 자격 조건을 충족합니다!</div>
                    <div style={{ fontSize: 14, color: '#166534', marginTop: 4 }}>위의 &apos;신청하기&apos; 버튼을 눌러 바로 신청해 보세요.</div>
                  </div>
                </>
              ) : (
                <>
                  <AlertCircle style={{ width: 28, height: 28, color: '#dc2626', flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: 17, fontWeight: 800, color: '#991b1b' }}>일부 조건을 충족하지 못합니다.</div>
                    <div style={{ fontSize: 14, color: '#991b1b', marginTop: 4 }}>아래 관련 정책 중 조건에 맞는 다른 지원금을 확인해 보세요.</div>
                  </div>
                </>
              )}
            </div>
          )}
        </div>

        {/* 관련 정책 (나무위키식 내부 링크) */}
        <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 20, padding: 32 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>📎 관련 정책 더보기</h2>
          <div style={{ display: 'grid', gap: 8 }}>
            {d.related.map((r, i) => (
              <Link key={i} href={`/policy/${r.id}`} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 18px', background: '#f7f8fa', borderRadius: 12, textDecoration: 'none', color: '#374151', transition: 'all 0.15s', border: '1px solid transparent' }}>
                <span className={`badge ${r.category === '지원금' ? 'badge-green' : 'badge-orange'}`}>{r.category}</span>
                <span style={{ flex: 1, fontSize: 15, fontWeight: 600 }}>{r.title}</span>
                <ChevronRight style={{ width: 18, height: 18, color: '#9ca3af' }} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ────── 사이드바 ────── */}
      <aside style={{ width: 300, flexShrink: 0, display: 'flex', flexDirection: 'column', gap: 20 }}>
        {/* 신청 CTA (고정형) */}
        <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 20, padding: 24, position: 'sticky', top: 84 }}>
          <div style={{ fontSize: 13, color: '#6b7280', marginBottom: 4 }}>지원 금액</div>
          <div style={{ fontSize: 26, fontWeight: 800, color: '#0066ff', marginBottom: 4 }}>{d.amount}</div>
          <div style={{ fontSize: 13, color: '#9ca3af', marginBottom: 16 }}>마감 ~ {d.deadline}</div>
          <a href={d.applyUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'block', textAlign: 'center', padding: '14px 0', background: '#0066ff', color: '#fff', borderRadius: 14, textDecoration: 'none', fontWeight: 700, fontSize: 16, marginBottom: 10 }}>
            신청하기 →
          </a>
          <a href={d.applyUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'block', textAlign: 'center', padding: '12px 0', background: '#f7f8fa', color: '#374151', borderRadius: 14, textDecoration: 'none', fontWeight: 600, fontSize: 14, border: '1px solid #e5e7eb' }}>
            공식 홈페이지
          </a>
        </div>

        {/* 네트워크 사이트 */}
        <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #e5e7eb', padding: 20 }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: '#1a1a2e', marginBottom: 14 }}>🔗 네트워크 사이트</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            {spokeLinks.map((s, i) => (
              <a key={i} href={s.url} target="_blank" rel="noopener noreferrer" style={{
                display: 'flex', alignItems: 'center', gap: 8, padding: '10px 12px', background: '#f7f8fa', borderRadius: 10, textDecoration: 'none', color: '#374151', fontSize: 13, fontWeight: 600
              }}>
                <span style={{ fontSize: 18 }}>{s.emoji}</span>
                {s.name}
              </a>
            ))}
          </div>
        </div>

        {/* 사이드바 광고 */}
        <div style={{ background: '#f1f3f5', borderRadius: 16, padding: '40px 20px', textAlign: 'center', border: '1px dashed #d1d5db' }}>
          <span style={{ fontSize: 12, color: '#9ca3af' }}>광고 영역<br/>(Sidebar Ad)</span>
        </div>
      </aside>
    </div>
  );
}
