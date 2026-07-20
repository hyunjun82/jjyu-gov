'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import AdSense from '@/components/AdSense';

const DAILY_UPPER = 68100;
const DAILY_LOWER = 66048;

const PERIOD_OPTIONS = [
  { value: 'under1', label: '1년 미만' },
  { value: '1to3', label: '1~3년' },
  { value: '3to5', label: '3~5년' },
  { value: '5to10', label: '5~10년' },
  { value: 'over10', label: '10년 이상' },
] as const;

// 구직급여 소정급여일수 (고용보험법 제50조 별표 1)
const DAYS_TABLE: Record<string, { under50: number; over50: number }> = {
  under1: { under50: 120, over50: 120 },
  '1to3': { under50: 150, over50: 180 },
  '3to5': { under50: 180, over50: 210 },
  '5to10': { under50: 210, over50: 240 },
  over10: { under50: 240, over50: 270 },
};

export default function Calculator() {
  const [wage3m, setWage3m] = useState('');
  const [ageGroup, setAgeGroup] = useState<'under50' | 'over50'>('under50');
  const [period, setPeriod] = useState<string>('1to3');
  const [result, setResult] = useState<null | { dailyAmount: number; days: number; total: number; hitCap: 'upper' | 'lower' | null }>(null);

  function handleCalculate(e: React.FormEvent) {
    e.preventDefault();
    const total3m = Number(wage3m.replace(/[^0-9]/g, ''));
    if (!total3m || total3m <= 0) return;

    const avgDailyWage = total3m / 90; // 3개월(약 90일) 평균임금
    let dailyAmount = Math.round(avgDailyWage * 0.6);
    let hitCap: 'upper' | 'lower' | null = null;
    if (dailyAmount > DAILY_UPPER) {
      dailyAmount = DAILY_UPPER;
      hitCap = 'upper';
    } else if (dailyAmount < DAILY_LOWER) {
      dailyAmount = DAILY_LOWER;
      hitCap = 'lower';
    }

    const days = DAYS_TABLE[period][ageGroup];
    const total = dailyAmount * days;

    setResult({ dailyAmount, days, total, hitCap });
  }

  return (
    <main className="container" style={{ padding: '32px 20px 60px', maxWidth: 720 }}>
      <nav className="breadcrumb" aria-label="breadcrumb" style={{ marginBottom: 16 }}>
        <Link href="/">홈</Link>
        <ChevronRight size={12} />
        <Link href="/policy/job-seeker-benefit">구직급여(실업급여)</Link>
        <ChevronRight size={12} />
        <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>모의계산기</span>
      </nav>

      <h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8, letterSpacing: '-0.01em' }}>
        구직급여(실업급여) 모의계산기
      </h1>
      <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 24 }}>
        퇴직 전 3개월 급여 총액과 나이, 고용보험 가입기간을 입력하면 1일 구직급여액과 예상 총 수급액을 바로 계산해볼 수 있습니다.
        정식 신청 전 참고용이며, 실제 지급액은 고용센터 심사 결과에 따라 달라질 수 있습니다.
      </p>

      <div className="ad-slot" style={{ margin: '0 0 24px' }}>
        <AdSense slot="7082828373" />
      </div>

      <form
        onSubmit={handleCalculate}
        style={{
          background: '#fff',
          border: '1px solid var(--gov-border, #E5E8EB)',
          borderRadius: 16,
          padding: 24,
          boxShadow: '0 4px 16px rgba(0, 61, 136, 0.08)',
        }}
      >
        <label style={{ display: 'block', marginBottom: 16 }}>
          <span style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6 }}>
            퇴직 전 최근 3개월 급여 총액 (세전, 원)
          </span>
          <input
            type="text"
            inputMode="numeric"
            placeholder="예: 9000000"
            value={wage3m}
            onChange={(e) => setWage3m(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '10px 12px',
              border: '1px solid var(--gov-border, #E5E8EB)',
              borderRadius: 8,
              fontSize: 15,
            }}
          />
        </label>

        <label style={{ display: 'block', marginBottom: 16 }}>
          <span style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6 }}>
            나이 (이직 당시 기준)
          </span>
          <select
            value={ageGroup}
            onChange={(e) => setAgeGroup(e.target.value as 'under50' | 'over50')}
            style={{
              width: '100%',
              padding: '10px 12px',
              border: '1px solid var(--gov-border, #E5E8EB)',
              borderRadius: 8,
              fontSize: 15,
            }}
          >
            <option value="under50">50세 미만</option>
            <option value="over50">50세 이상 또는 장애인</option>
          </select>
        </label>

        <label style={{ display: 'block', marginBottom: 20 }}>
          <span style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6 }}>
            고용보험 가입기간
          </span>
          <select
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            style={{
              width: '100%',
              padding: '10px 12px',
              border: '1px solid var(--gov-border, #E5E8EB)',
              borderRadius: 8,
              fontSize: 15,
            }}
          >
            {PERIOD_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </label>

        <button
          type="submit"
          className="btn-cta"
          style={{ width: '100%', border: 'none', cursor: 'pointer' }}
        >
          예상 수급액 계산하기
        </button>
      </form>

      {result && (
        <div
          style={{
            marginTop: 20,
            background: 'var(--gov-primary, #003D88)',
            borderRadius: 16,
            padding: 24,
            color: '#fff',
          }}
        >
          <p style={{ fontSize: 13, color: '#C7D6EC', marginBottom: 4 }}>예상 1일 구직급여액</p>
          <p style={{ fontSize: 28, fontWeight: 800, marginBottom: 12 }}>
            {result.dailyAmount.toLocaleString()}원
            {result.hitCap === 'upper' && (
              <span style={{ fontSize: 13, fontWeight: 500, color: '#C7D6EC', marginLeft: 8 }}>
                (상한액 적용)
              </span>
            )}
            {result.hitCap === 'lower' && (
              <span style={{ fontSize: 13, fontWeight: 500, color: '#C7D6EC', marginLeft: 8 }}>
                (하한액 적용)
              </span>
            )}
          </p>
          <div style={{ height: 1, background: 'rgba(255,255,255,0.2)', margin: '12px 0' }} />
          <p style={{ fontSize: 13, color: '#C7D6EC', marginBottom: 4 }}>
            소정급여일수 {result.days}일 기준 예상 총 수급액
          </p>
          <p style={{ fontSize: 24, fontWeight: 800 }}>{result.total.toLocaleString()}원</p>
        </div>
      )}

      <div className="ad-slot" style={{ margin: '24px 0' }}>
        <AdSense slot="7082828373" />
      </div>

      <div
        style={{
          marginTop: 8,
          background: '#EEF3FB',
          border: '1px solid #D6E0F0',
          borderRadius: 12,
          padding: '16px 18px',
        }}
      >
        <p style={{ fontSize: 13.5, fontWeight: 600, marginBottom: 10 }}>
          이 계산 결과는 참고용입니다. 정확한 금액은 고용24 공식 모의계산기와 고용센터 심사로 확정됩니다.
        </p>
        <a
          href="https://www.work24.go.kr/cm/c/f/1200/selecSimulateCalc.do"
          className="btn-cta"
          rel="noopener"
          style={{ display: 'inline-block' }}
        >
          고용24 공식 모의계산기 →
        </a>
      </div>

      <p style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 20, lineHeight: 1.6 }}>
        * 3개월 평균임금은 총 급여 ÷ 90일로 단순 계산한 참고값입니다. 실제 기초일액은 상여금·연차수당 포함 여부 등에 따라 달라질 수 있습니다.
        <br />
        * 본 사이트는 정부 공식 사이트가 아닙니다. 최종 수급액은{' '}
        <Link href="/policy/job-seeker-benefit" style={{ color: 'var(--gov-primary, #003D88)', textDecoration: 'underline' }}>
          구직급여 안내 페이지
        </Link>
        와 고용센터에서 확인하세요.
      </p>
    </main>
  );
}
