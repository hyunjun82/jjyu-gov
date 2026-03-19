'use client';
import Link from 'next/link';
import { ArrowLeft, Building2, Calendar, Eye, Share2, ExternalLink, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const policy = {
  title: '2026 청년 도약 계좌 지원금',
  org: '금융위원회',
  cat: '지원금',
  amount: '최대 5,000만원',
  deadline: '2026.06.30',
  views: 12847,
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
    { q: '만 19세 이상 34세 이하입니까?', key: 'age' },
    { q: '개인 소득이 연 7,500만원 이하입니까?', key: 'income' },
    { q: '가구 소득이 중위소득 250% 이하입니까?', key: 'household' },
    { q: '기존 청년희망적금 가입 이력이 없습니까?', key: 'nodup' },
  ],
  related: [
    { id: '2', title: '청년 월세 특별지원 (3차)', cat: '지원금' },
    { id: '5', title: '서울시 청년 교통비 지원', cat: '환급금' },
    { id: '6', title: '국민취업지원제도 (1유형)', cat: '지원금' },
    { id: '4', title: '근로장려금 반기 신청', cat: '환급금' },
  ],
};

export default function PolicyDetailPage() {
  const [checks, setChecks] = useState<Record<string, boolean | null>>({});
  const d = policy;

  const totalQ = d.eligibility.length;
  const answered = Object.keys(checks).length;
  const passed = Object.values(checks).filter(v => v === true).length;
  const allDone = answered === totalQ;
  const allPass = allDone && passed === totalQ;

  return (
    <>
      {/* ── Detail Header ── */}
      <div className="detail-header">
        <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 13, color: 'var(--text-muted)', marginBottom: 16 }}>
          <ArrowLeft size={16} /> 목록
        </Link>

        <div className="meta">
          <span className={`tag ${d.cat === '지원금' ? 'tag-fund' : 'tag-refund'}`}>{d.cat}</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Building2 size={14} /> {d.org}</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Eye size={14} /> {d.views.toLocaleString()}명 조회</span>
        </div>

        <h1>{d.title}</h1>

        <div className="benefit-box">
          <div>
            <div className="amount-label">지원 금액</div>
            <div className="amount-value">{d.amount}</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>신청 마감</div>
            <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--text-primary)' }}>{d.deadline}</div>
          </div>
        </div>
      </div>

      {/* ── Anchor Navigation (gg24.kr style) ── */}
      <div className="anchor-nav">
        <a href="#overview" className="active">사업 개요</a>
        <a href="#details">상세 정보</a>
        <a href="#eligibility">자격 확인</a>
        <a href="#related">관련 정책</a>
      </div>

      {/* ── 사업 개요 ── */}
      <div className="detail-section" id="overview">
        <h2>📋 사업 개요</h2>
        <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.7 }}>{d.summary}</p>
      </div>

      {/* ── 상세 정보 ── */}
      <div className="detail-section" id="details">
        <h2>📑 상세 정보</h2>
        {d.details.map((item, i) => (
          <div className="info-row" key={i}>
            <div className="label">{item.label}</div>
            <div className="value">{item.value}</div>
          </div>
        ))}
      </div>

      {/* ── 광고 ── */}
      <div className="detail-section" style={{ borderBottom: 'none', paddingTop: 0, paddingBottom: 0 }}>
        <div className="ad-slot">광고 영역 (인라인 Ad)</div>
      </div>

      {/* ── 자격 조건 체크 ── */}
      <div className="detail-section" id="eligibility">
        <h2>✅ 자격 조건 체크</h2>
        <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 16 }}>아래 항목을 클릭해서 자격 여부를 확인해 보세요.</p>
        {d.eligibility.map((item, i) => {
          const val = checks[item.key];
          const cls = val === true ? 'yes' : val === false ? 'no' : '';
          return (
            <div className={`check-item ${cls}`} key={i}>
              <span className="q">{item.q}</span>
              <div className="check-btns">
                <button
                  className={val === true ? 'selected-yes' : ''}
                  onClick={() => setChecks(p => ({ ...p, [item.key]: true }))}
                >예</button>
                <button
                  className={val === false ? 'selected-no' : ''}
                  onClick={() => setChecks(p => ({ ...p, [item.key]: false }))}
                >아니오</button>
              </div>
            </div>
          );
        })}

        {allDone && (
          <div style={{
            marginTop: 16, padding: '18px 20px', borderRadius: 12,
            background: allPass ? '#F0FDF4' : '#FEF2F2',
            border: `1px solid ${allPass ? '#86EFAC' : '#FECACA'}`,
          }}>
            {allPass ? (
              <div style={{ fontSize: 15, fontWeight: 700, color: '#166534' }}>
                🎉 축하합니다! 자격 조건을 모두 충족합니다. 아래 버튼으로 바로 신청하세요!
              </div>
            ) : (
              <div style={{ fontSize: 15, fontWeight: 700, color: '#991B1B' }}>
                일부 조건이 맞지 않습니다. 아래 관련 정책을 확인해 보세요.
              </div>
            )}
          </div>
        )}
      </div>

      {/* ── 관련 정책 (내부 링크) ── */}
      <div className="detail-section" id="related" style={{ borderBottom: 'none' }}>
        <h2>📎 관련 정책</h2>
        {d.related.map((r, i) => (
          <Link href={`/policy/${r.id}`} key={i} className="p-card" style={{ padding: 16, marginBottom: 8 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span className={`tag ${r.cat === '지원금' ? 'tag-fund' : 'tag-refund'}`}>{r.cat}</span>
              <span style={{ flex: 1, fontSize: 14, fontWeight: 600 }}>{r.title}</span>
              <ChevronRight size={16} color="#999" />
            </div>
          </Link>
        ))}
      </div>

      {/* ── Sticky CTA Bar (gg24.kr style) ── */}
      <div className="sticky-cta">
        <button className="share-btn" aria-label="공유"><Share2 size={20} /></button>
        <a href={d.applyUrl} target="_blank" rel="noopener noreferrer">
          <button className="cta-main">신청하기</button>
        </a>
      </div>
    </>
  );
}
