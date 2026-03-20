'use client';
import { useState } from 'react';
import Link from 'next/link';
import type { SpokeData } from '../page';

type UserType = null | 'worker' | 'alba4' | 'alba33' | 'freelancer' | 'student_income' | 'student_none' | 'unemployed' | 'upcoming';

const typeResults: Record<Exclude<UserType, null>, { ok: boolean; title: string; desc: string; action: string }> = {
  worker: { ok: true, title: '가입 가능합니다', desc: '4대보험 가입 근로자는 소득이 자동 신고됩니다. 총급여 7,500만원 이하면 바로 신청하세요.', action: '은행 앱에서 바로 신청' },
  alba4: { ok: true, title: '가입 가능합니다', desc: '4대보험 가입 알바는 근로소득이 국세청에 자동 신고됩니다. 소득이 적을수록 기여금 비율이 높아 오히려 유리합니다.', action: '은행 앱에서 바로 신청' },
  alba33: { ok: true, title: '가입 가능 — 종소세 신고 먼저', desc: '3.3% 원천징수 알바는 사업소득입니다. 5월에 홈택스에서 종합소득세 신고를 해야 국세청에 소득이 잡히고, 그 후 소득확인증명서를 발급받을 수 있습니다.', action: '① 5월 종소세 신고 → ② 7월 소득확인증명서 발급 → ③ 은행 앱 신청' },
  freelancer: { ok: true, title: '가입 가능 — 종소세 신고 필수', desc: '프리랜서는 종합소득세 신고로 소득을 증빙합니다. 신고를 안 하면 국세청에 소득이 안 잡혀 가입이 불가합니다.', action: '① 5월 종소세 신고 → ② 7월 소득확인증명서 → ③ 은행 앱 신청' },
  student_income: { ok: true, title: '가입 가능합니다', desc: '대학생이라도 알바·프리랜서 소득이 국세청에 신고되어 있으면 가입됩니다. 소득 2,400만원 이하면 기여금 6%로 가장 유리한 구간입니다.', action: '소득 유형에 따라 위 알바/프리랜서 절차 따르기' },
  student_none: { ok: false, title: '가입 불가 — 소득 필요', desc: '소득이 0원이면 가입할 수 없습니다. 아르바이트를 시작하고 소득이 국세청에 신고된 후 가입하세요. 4대보험 알바면 즉시, 3.3% 알바면 종소세 신고 후 가능합니다.', action: '소득 발생 후 → 소득확인증명서 발급 → 은행 앱 신청' },
  unemployed: { ok: false, title: '가입 불가 — 소득 필요', desc: '국세청 소득확인증명서에 금액이 찍혀야 합니다. 취업 후 소득이 확정되면 가입 가능합니다. 최소 소득 금액 하한선은 없습니다.', action: '취업 → 소득 확정 (보통 다음 해 7월) → 은행 앱 신청' },
  upcoming: { ok: false, title: '지금은 불가 — 소득 확정 후 가능', desc: '올해 취업했다면 내년 5월 종소세 신고 후 7월부터 가입 가능합니다. 전전년도 소득이 있다면 그 기준으로 바로 신청할 수 있습니다.', action: '소득 확정 시점까지 대기 → 확정 후 즉시 신청' },
};

function Content() {
  const [selected, setSelected] = useState<UserType>(null);
  const r = selected ? typeResults[selected] : null;

  return (
    <>
      <div className="answer-box">
        <p>
          소득이 완전히 0원이면 가입할 수 없습니다.
          하지만 알바·프리랜서·비정규직이라도 국세청에 소득이 신고되어 있으면 가입 가능합니다.
          소득이 적을수록 기여금 비율이 높아져 오히려 유리합니다.
        </p>
      </div>

      {/* ── 1. 가입 가능 판별 체커 ── */}
      <section className="detail-card" id="checker">
        <h2 className="detail-card-head">나는 가입할 수 있나?</h2>
        <div className="detail-card-body">
          <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 16 }}>
            본인 상황에 맞는 항목을 선택하세요.
          </p>

          <fieldset className="elig-fieldset">
            <legend className="sr-only">고용 유형별 가입 가능 확인</legend>
            {([
              { key: 'worker' as const, label: '직장인 (4대보험 가입)' },
              { key: 'alba4' as const, label: '알바 — 4대보험 가입' },
              { key: 'alba33' as const, label: '알바 — 3.3% 원천징수' },
              { key: 'freelancer' as const, label: '프리랜서 / 자영업' },
              { key: 'student_income' as const, label: '대학생 — 알바 소득 있음' },
              { key: 'student_none' as const, label: '대학생 — 소득 없음' },
              { key: 'unemployed' as const, label: '무직 (소득 0원)' },
              { key: 'upcoming' as const, label: '올해 취업 예정 / 최근 취업' },
            ]).map(item => (
              <div
                key={item.key}
                className={`elig-item ${selected === item.key ? (typeResults[item.key].ok ? 'pass' : 'fail') : ''}`}
                onClick={() => setSelected(item.key)}
                style={{ cursor: 'pointer' }}
              >
                <div style={{ flex: 1 }}>
                  <span className="elig-q">{item.label}</span>
                </div>
              </div>
            ))}
          </fieldset>

          {r && (
            <div className={`elig-result ${r.ok ? 'pass' : 'fail'}`} style={{ marginTop: 16 }}>
              <div style={{ fontWeight: 700, fontSize: 16, color: r.ok ? 'var(--success)' : 'var(--danger)' }}>
                {r.title}
              </div>
              <p style={{ fontSize: 14, color: 'var(--text-secondary)', marginTop: 8, lineHeight: 1.7 }}>
                {r.desc}
              </p>
              <div style={{
                marginTop: 12,
                padding: '10px 14px',
                background: r.ok ? 'var(--success-bg)' : 'var(--danger-bg)',
                borderRadius: 'var(--radius-xs)',
                fontSize: 13,
                lineHeight: 1.6,
              }}>
                <strong>다음 행동:</strong> {r.action}
              </div>
            </div>
          )}
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      {/* ── 2. 3.3% 알바 절차 ── */}
      <section className="detail-card" id="howto">
        <h2 className="detail-card-head">3.3% 알바, 소득 인정받으려면?</h2>
        <div className="detail-card-body">
          <div className="answer-box-inline">
            3.3% 떼는 알바는 &quot;사업소득&quot;입니다.
            5월 종합소득세 신고를 해야 국세청에 소득이 잡힙니다.
          </div>
          <div className="info-checklist">
            <strong>3.3% 알바 → 도약계좌 가입 절차</strong>
            <ul>
              <li><span style={{ color: 'var(--gov-primary)', fontWeight: 700, marginRight: 8 }}>1</span> 5월에 홈택스 종합소득세 신고 (10분, 무료)</li>
              <li><span style={{ color: 'var(--gov-primary)', fontWeight: 700, marginRight: 8 }}>2</span> 7월 이후 홈택스에서 &quot;소득확인증명서 (청년도약계좌용)&quot; 발급</li>
              <li><span style={{ color: 'var(--gov-primary)', fontWeight: 700, marginRight: 8 }}>3</span> 은행 앱에서 청년도약계좌 가입 신청</li>
            </ul>
          </div>
          <div className="warning-box">
            <strong>종소세 신고 안 하면?</strong> 국세청에 소득이 안 잡혀서 가입 불가입니다.
            기한 후 신고도 가능하니 아직 안 했다면 지금 바로 홈택스에서 하세요.
          </div>
        </div>
      </section>

      {/* ── 3. 소득 적을 때 실익 ── */}
      <section className="detail-card" id="benefit">
        <h2 className="detail-card-head">소득 적으면 가입 의미 있나?</h2>
        <div className="detail-card-body">
          <div className="answer-box-inline">
            오히려 유리합니다. 소득 2,400만원 이하면 기여금 비율 6%로 가장 높습니다.
            월 1만원만 넣어도 됩니다 (자유납입).
          </div>
          <div className="highlight-numbers">
            <div className="highlight-num-item primary">
              <span className="highlight-num-label">월 10만원 × 5년</span>
              <span className="highlight-num-value">약 760만원</span>
              <span className="highlight-num-sub">납입 600만 + 기여금·이자 160만</span>
            </div>
            <div className="highlight-num-vs">→</div>
            <div className="highlight-num-item">
              <span className="highlight-num-label">일반 적금 대비</span>
              <span className="highlight-num-value">+130만원</span>
              <span className="highlight-num-sub">기여금 + 비과세 혜택</span>
            </div>
          </div>
          <p style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 16, textAlign: 'center' }}>
            연소득 200만원이어도 월 10만원씩 넣으면 은행 적금 대비 130만원 이상 이득입니다.
          </p>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      {/* ── 4. 가입 시기 ── */}
      <section className="detail-card" id="when">
        <h2 className="detail-card-head">올해 취업했는데 언제부터 가입 가능한가?</h2>
        <div className="detail-card-body">
          <div className="answer-box-inline">
            소득 확정 시기에 따라 다릅니다.
            올해 처음 취업했다면 내년 종소세 신고 후 7월부터 가능합니다.
          </div>
          <table className="mini-table">
            <caption className="sr-only">가입 시기별 소득 기준</caption>
            <thead><tr><th scope="col">가입 시기</th><th scope="col">소득 기준</th><th scope="col">예시 (2026년)</th></tr></thead>
            <tbody>
              <tr><td style={{fontWeight:600}}>1~6월</td><td>전전년도 소득</td><td>2024년 소득 기준</td></tr>
              <tr><td style={{fontWeight:600}}>7~12월</td><td>직전년도 소득</td><td>2025년 소득 기준</td></tr>
              <tr><td style={{fontWeight:600}}>올해 첫 취업</td><td>내년 확정 후</td><td>2027년 7월부터</td></tr>
            </tbody>
          </table>
          <div className="warning-box">
            <strong>일몰 주의:</strong> 청년도약계좌 신규 가입은 2025년 12월 31일까지입니다.
            소득 확정이 늦으면 가입 자체가 불가할 수 있습니다.
          </div>
        </div>
      </section>
    </>
  );
}

export const NoIncomeSpokeContent: SpokeData = {
  h1: '청년도약계좌, 소득 없으면 가입 못 하나?',
  breadcrumb: '소득 없으면',
  description: '청년도약계좌 무직·대학생·알바·프리랜서 가입 가능 여부를 즉시 확인. 유형별 판별 체커.',
  datePublished: '2026-02-20T09:00:00+09:00',
  dateModified: '2026-03-20T09:00:00+09:00',
  Content,
  faqData: [
    { q: '소득이 1원이라도 있으면 가능한가요?', a: '국세청 소득확인증명서에 금액이 찍히면 가능합니다. 최소 금액 기준은 없습니다.', source: '금융위원회 Q&A', sourceUrl: '/policy/1#details' },
    { q: '종소세 신고 안 했는데 지금이라도 되나요?', a: '기한 후 신고 가능합니다. 홈택스에서 과거 연도 신고하면 됩니다. 신고 후 2~4주 뒤 소득확인증명서 발급 가능합니다.', source: '국세청 홈택스', sourceUrl: '/policy/1' },
    { q: '부모님 소득은 상관없나요?', a: '가구소득 중위 250% 기준은 가구원 전체 소득입니다. 개인소득 요건(7,500만원)은 본인만 봅니다.', source: '자격확인', sourceUrl: '/policy/1#eligibility' },
    { q: '가입 후 퇴직하면 해지해야 하나요?', a: '아닙니다. 계좌 유지되고 전년도 소득 기준으로 기여금이 적용됩니다.', source: '서민금융진흥원', sourceUrl: '/policy/1' },
  ],
  sources: [
    { name: '금융위원회 – 청년도약계좌 Q&A', url: 'https://www.fsc.go.kr/po020201/80171' },
    { name: '복지로 블로그 – 주요 질답', url: 'https://blog.bokjiro.go.kr/1365' },
    { name: '서민금융진흥원 – 가입 안내', url: 'https://ylaccount.kinfa.or.kr/main' },
  ],
};
