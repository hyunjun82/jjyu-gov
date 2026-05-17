'use client';
import { useState } from 'react';
import type { SpokeData } from '../SpokeClient';

const HOMETAX = 'https://www.hometax.go.kr';

type UserType =
  | null
  | 'worker'
  | 'alba4'
  | 'alba33'
  | 'freelancer'
  | 'smallbiz'
  | 'student_income'
  | 'student_none'
  | 'unemployed';

interface TypeResult {
  ok: boolean;
  title: string;
  desc: string;
  steps: { label: string; link?: string; linkLabel?: string }[];
}

const typeResults: Record<Exclude<UserType, null>, TypeResult> = {
  worker: {
    ok: true,
    title: '가입 가능합니다',
    desc: '4대보험 가입 직장인은 근로소득이 자동 신고됩니다. 총급여 7,500만원 이하이고 가구 중위소득 200% 이하면 바로 신청하세요.',
    steps: [
      { label: '소득확인증명서 온라인 무료 발급 (1분)', link: HOMETAX, linkLabel: '홈택스 발급' },
      { label: '6월 또는 12월 모집 기간에 취급 금융기관 앱으로 신청' },
    ],
  },
  alba4: {
    ok: true,
    title: '가입 가능합니다',
    desc: '4대보험 가입 알바는 근로소득이 자동 신고됩니다. 소득이 낮을수록 기여금 비율이 높아 일반형(6%) 기준도 충분히 유리합니다.',
    steps: [
      { label: '소득확인증명서 온라인 무료 발급 (1분)', link: HOMETAX, linkLabel: '홈택스 발급' },
      { label: '6월 또는 12월 모집 기간에 금융기관 앱으로 신청' },
    ],
  },
  alba33: {
    ok: true,
    title: '가입 가능 (종합소득세 신고 먼저)',
    desc: '3.3% 원천징수 알바는 사업소득입니다. 5월 홈택스에서 종합소득세 신고를 먼저 완료해야 소득이 국세청에 잡힙니다.',
    steps: [
      { label: '5월 종합소득세 신고 (10분, 무료)', link: HOMETAX, linkLabel: '신고하러 가기' },
      { label: '신고 후 소득확인증명서 발급', link: HOMETAX, linkLabel: '발급받기' },
      { label: '6월 또는 12월 모집 기간에 금융기관 앱으로 신청' },
    ],
  },
  freelancer: {
    ok: true,
    title: '가입 가능 (종합소득세 신고 필수)',
    desc: '프리랜서는 종합소득세 신고로 소득을 증빙합니다. 신고하지 않으면 소득 확인이 불가하여 가입할 수 없습니다.',
    steps: [
      { label: '5월 종합소득세 신고 (10분, 무료)', link: HOMETAX, linkLabel: '신고하러 가기' },
      { label: '소득확인증명서 발급 (신고 후 가능)', link: HOMETAX, linkLabel: '발급받기' },
      { label: '6월 또는 12월 모집 기간에 금융기관 앱으로 신청' },
    ],
  },
  smallbiz: {
    ok: true,
    title: '가입 가능 (연매출 증빙 필요)',
    desc: '소상공인은 전년도 사업소득이 국세청에 신고되어야 합니다. 연매출 3억원 이하이고 가구 중위소득 200% 이하면 일반형(6%), 연매출 1억원 이하이고 중위 150% 이하면 우대형(12%) 대상입니다.',
    steps: [
      { label: '사업소득 종합소득세 신고 여부 확인', link: HOMETAX, linkLabel: '홈택스 조회' },
      { label: '사업소득 원천징수영수증 또는 소득확인증명서 발급', link: HOMETAX, linkLabel: '발급받기' },
      { label: '6월 또는 12월 모집 기간에 금융기관 앱으로 신청' },
    ],
  },
  student_income: {
    ok: true,
    title: '가입 가능합니다',
    desc: '알바·프리랜서 소득이 국세청에 신고되어 있으면 가입됩니다. 소득이 낮을수록 기여금 비율이 높습니다.',
    steps: [
      { label: '내 소득 신고 여부 확인', link: HOMETAX, linkLabel: '홈택스 조회' },
      { label: '3.3% 알바면 5월 종합소득세 신고 먼저', link: HOMETAX, linkLabel: '신고하러 가기' },
      { label: '소득확인증명서 발급 후 금융기관 앱 신청' },
    ],
  },
  student_none: {
    ok: false,
    title: '현재 가입 불가',
    desc: '소득이 0원이면 가입할 수 없습니다. 아르바이트를 시작하고 소득이 국세청에 신고된 후 다음 모집 기간(6월·12월)에 신청하세요.',
    steps: [
      { label: '4대보험 가입 알바 시작 (소득 자동 신고)' },
      { label: '소득 발생 후 소득확인증명서 발급', link: HOMETAX, linkLabel: '발급받기' },
      { label: '6월 또는 12월 모집 기간에 금융기관 앱으로 신청' },
    ],
  },
  unemployed: {
    ok: false,
    title: '현재 가입 불가',
    desc: '국세청 소득확인증명서에 소득이 있어야 합니다. 취업 후 소득이 확정되면 다음 모집 기간(6월·12월)에 신청하세요.',
    steps: [
      { label: '취업 후 소득 확정까지 대기' },
      { label: '소득확인증명서 무료 발급 (1분)', link: HOMETAX, linkLabel: '발급받기' },
      { label: '6월 또는 12월 금융기관 앱으로 신청' },
    ],
  },
};

function Content() {
  const [selected, setSelected] = useState<UserType>(null);
  const r = selected ? typeResults[selected] : null;

  return (
    <>
      <div className="answer-box">
        <p>
          소득이 완전히 0원이면 청년미래적금에 가입할 수 없습니다.
          알바·프리랜서·소상공인이라도 국세청에 소득이 신고되어 있으면 가입 가능합니다.
          단 1원이라도 소득확인증명서에 기재되면 자격 요건을 갖춥니다.
        </p>
      </div>

      {/* ── 1. 판별 체커 ── */}
      <section className="detail-card" id="checker">
        <h2 className="detail-card-head">나는 가입할 수 있나?</h2>
        <div className="detail-card-body">
          <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 16 }}>
            본인 상황에 해당하는 항목을 선택하세요.
          </p>

          <fieldset className="elig-fieldset">
            <legend className="sr-only">고용 유형별 가입 가능 확인</legend>
            {([
              { key: 'worker' as const, label: '직장인 (4대보험 가입)' },
              { key: 'alba4' as const, label: '알바 (4대보험 가입)' },
              { key: 'alba33' as const, label: '알바 (3.3% 원천징수)' },
              { key: 'freelancer' as const, label: '프리랜서' },
              { key: 'smallbiz' as const, label: '소상공인 / 자영업자' },
              { key: 'student_income' as const, label: '대학생 (알바 소득 있음)' },
              { key: 'student_none' as const, label: '대학생 (소득 없음)' },
              { key: 'unemployed' as const, label: '무직 / 소득 0원' },
            ]).map((item) => (
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

              <div style={{ marginTop: 16, background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', padding: '16px' }}>
                <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 12, color: 'var(--text-primary)' }}>
                  다음 행동
                </div>
                {r.steps.map((step, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '8px 0',
                      borderBottom: i < r.steps.length - 1 ? '1px solid var(--border-light)' : 'none',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <span
                        style={{
                          width: 22,
                          height: 22,
                          borderRadius: '50%',
                          background: 'var(--gov-primary)',
                          color: '#fff',
                          fontSize: 12,
                          fontWeight: 700,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        {i + 1}
                      </span>
                      <span style={{ fontSize: 14, color: 'var(--text-secondary)' }}>{step.label}</span>
                    </div>
                    {step.link && (
                      <a
                        href={step.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontSize: 12,
                          fontWeight: 600,
                          color: 'var(--gov-primary)',
                          whiteSpace: 'nowrap',
                          padding: '4px 10px',
                          background: 'var(--gov-primary-bg)',
                          borderRadius: 'var(--radius-xs)',
                        }}
                      >
                        {step.linkLabel}
                      </a>
                    )}
                  </div>
                ))}
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
            3.3% 떼는 알바는 사업소득입니다.
            5월 종합소득세 신고를 해야 국세청에 소득이 잡히고 소득확인증명서 발급이 가능합니다.
          </div>

          <div style={{ marginTop: 16 }}>
            <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 12 }}>필요 서류</div>
            {[
              { doc: '원천징수영수증', desc: '알바처에서 수령 (없으면 고용주에게 요청)', link: '', linkLabel: '' },
              { doc: '종합소득세 신고', desc: '5월, 홈택스 10분이면 완료 (무료)', link: HOMETAX, linkLabel: '지금 신고하기' },
              { doc: '소득확인증명서', desc: '신고 후 온라인 무료 발급 (1분)', link: HOMETAX, linkLabel: '지금 발급받기' },
              { doc: '신분증', desc: '주민등록증·운전면허증·여권 중 택1', link: '', linkLabel: '' },
            ].map((item, i) => (
              <div
                key={i}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid var(--border-light)' }}
              >
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-primary)' }}>{item.doc}</div>
                  <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{item.desc}</div>
                </div>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: 12,
                      fontWeight: 600,
                      color: 'var(--gov-primary)',
                      whiteSpace: 'nowrap',
                      padding: '4px 10px',
                      background: 'var(--gov-primary-bg)',
                      borderRadius: 'var(--radius-xs)',
                    }}
                  >
                    {item.linkLabel}
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="warning-box" style={{ marginTop: 16 }}>
            <strong>종소세 신고 안 하면?</strong> 소득이 국세청에 잡히지 않아 소득확인증명서 발급이 불가하고, 가입 자체가 안 됩니다.
            기한 후 신고도 가능하니 신고하지 않은 과거 연도가 있으면 지금 바로 하세요.
          </div>
        </div>
      </section>

      {/* ── 3. 소득 없을 때 대안 ── */}
      <section className="detail-card" id="alternative">
        <h2 className="detail-card-head">지금 당장 가입 불가라면? 대안 제도</h2>
        <div className="detail-card-body">
          <div className="answer-box-inline">
            소득이 없거나 자격 미달이면 유사 제도를 먼저 활용하세요.
          </div>
          <table className="mini-table">
            <caption className="sr-only">소득 없는 경우 대안 제도</caption>
            <thead>
              <tr>
                <th scope="col">제도</th>
                <th scope="col">대상</th>
                <th scope="col">특징</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ fontWeight: 600 }}>청년내일저축계좌</td>
                <td>월 소득 10만~50만원 이하</td>
                <td>정부 매칭 월 10만원</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 600 }}>근로장려금</td>
                <td>소득 있는 저소득 청년</td>
                <td>세액공제 방식 현금 지급</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 600 }}>청년미래적금</td>
                <td>소득 있는 만 19~34세</td>
                <td>기여금 6%/12% + 비과세</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>
    </>
  );
}

export const NoIncomeSpokeContent: SpokeData = {
  h1: '청년미래적금, 소득 없으면 가입 못 한다',
  breadcrumb: '소득 없으면',
  description: '청년미래적금 소득 없는 경우 가입 불가. 직장인·알바·프리랜서·소상공인·무직 유형별 판별 체커와 대안 제도.',
  datePublished: '2026-04-24T09:00:00+09:00',
  dateModified: '2026-05-13T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '소득이 1원이라도 있으면 가입 가능한가요?',
      a: '국세청 소득확인증명서에 금액이 기재되면 가능합니다. 최소 금액 기준은 없으며, 소득이 낮을수록 기여금 비율이 높습니다.',
      source: '금융위원회 카드뉴스 (2026.04.24)',
      sourceUrl: 'https://www.fsc.go.kr/no040101?cnId=3187',
    },
    {
      q: '종합소득세 신고를 안 했는데 지금이라도 되나요?',
      a: '기한 후 신고가 가능합니다. 홈택스에서 과거 연도 신고를 완료한 후 소득확인증명서를 발급받으면 됩니다. 신고 후 2~4주가 지나야 발급됩니다.',
      source: '국세청 홈택스',
      sourceUrl: 'https://www.hometax.go.kr',
    },
    {
      q: '부모님 소득이 높으면 가입 안 되나요?',
      a: '가구 중위소득 200% 기준은 가구원 전체 소득을 합산합니다. 부모님 소득이 포함될 수 있으니 가구소득 기준을 먼저 확인하세요.',
      source: '금융위원회 카드뉴스 (2026.04.24)',
      sourceUrl: 'https://www.fsc.go.kr/no040101?cnId=3187',
    },
    {
      q: '가입 후 퇴직해서 소득이 없어지면 어떻게 되나요?',
      a: '계좌는 유지됩니다. 이미 납입한 기여금은 유지되며, 퇴직은 특별 중도해지 사유에 해당하여 기여금 보전 해지도 가능합니다.',
      source: '금융위원회 카드뉴스 (2026.04.24)',
      sourceUrl: 'https://www.fsc.go.kr/no040101?cnId=3187',
    },
    {
      q: '올해 처음 취업했는데 언제 가입할 수 있나요?',
      a: '당해연도 소득은 다음 해 5월 종합소득세 신고 후 7월부터 확정됩니다. 4대보험 가입 직장인이라면 근로소득이 바로 확인되어 빠르게 가입 신청이 가능합니다.',
      source: '금융위원회 카드뉴스 (2026.04.24)',
      sourceUrl: 'https://www.fsc.go.kr/no040101?cnId=3187',
    },
  ],
  sources: [
    { name: '금융위원회 카드뉴스 (2026.04.24)', url: 'https://www.fsc.go.kr/no040101?cnId=3187' },
    { name: '금융위원회', url: 'https://www.fsc.go.kr' },
    { name: '서민금융진흥원', url: 'https://www.kinfa.or.kr' },
  ],
};
                                                                                                                                                                                                                                                                                                                                                                           