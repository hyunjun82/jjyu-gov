import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          TIPS 선정 시 정부는 <strong>R&amp;D 최대 5억 원 + 창업사업화 최대 1억 원 + 해외마케팅 최대 1억 원</strong>을
          지원합니다. 운영사의 민간 투자 1억 원에 정부 지원 최대 <strong>7억 원</strong>이 더해지는 구조로,
          실제 확보 가능한 총 자금은 <strong>최대 8억 원</strong>입니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0', color: 'var(--text-secondary)' }}>
        TIPS 지원금은 목적별로 R&D 자금, 창업사업화 자금, 해외마케팅 자금으로 구분됩니다.
        각각 사용 목적과 정산 기준이 다르기 때문에 선정 전에 반드시 이해해야 합니다.
      </p>

      <section className="detail-card" id="amount">
        <h2 className="detail-card-head">TIPS 지원금 구조 — 항목별 금액</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>지원 항목</th><th>최대 금액</th><th>지원 기간</th><th>지급 주체</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>R&amp;D 지원금</strong></td>
                <td><strong>5억 원</strong></td>
                <td>2년</td>
                <td>중소벤처기업부</td>
              </tr>
              <tr>
                <td><strong>창업사업화 지원금</strong></td>
                <td><strong>1억 원</strong></td>
                <td>2년</td>
                <td>중소벤처기업부</td>
              </tr>
              <tr>
                <td><strong>해외마케팅 지원금</strong></td>
                <td><strong>1억 원</strong></td>
                <td>2년</td>
                <td>중소벤처기업부</td>
              </tr>
              <tr>
                <td>운영사 민간 투자</td>
                <td><strong>1억 원 이상</strong></td>
                <td>-</td>
                <td>TIPS 운영사</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 700 }}>총 확보 가능 자금</td>
                <td style={{ fontWeight: 700, color: '#003D88' }}>최대 8억 원+</td>
                <td>-</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="use">
        <h2 className="detail-card-head">지원금 항목별 사용 가능 비용</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>지원 항목</th><th>사용 가능 비용</th><th>사용 불가 비용</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>R&amp;D 자금</strong></td>
                <td>인건비·재료비·외주개발비·장비구입·지식재산권 취득비</td>
                <td>접대비·마케팅비·시설 임차료</td>
              </tr>
              <tr>
                <td><strong>창업사업화 자금</strong></td>
                <td>시제품 제작·인증·특허·홍보·멘토링·컨설팅비</td>
                <td>R&amp;D 인건비와 중복 집행</td>
              </tr>
              <tr>
                <td><strong>해외마케팅 자금</strong></td>
                <td>해외전시 참가비·현지 마케팅·해외출장비·번역비</td>
                <td>국내 마케팅 비용</td>
              </tr>
            </tbody>
          </table>

          <div className="info-box" style={{ marginTop: 16 }}>
            <strong>정산 방식:</strong> 분기별 연구비 정산 보고서를 제출해야 합니다.
            영수증·계약서 등 증빙 서류를 체계적으로 관리해야 하며, 미비 시 해당 비용은 불인정됩니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="schedule">
        <h2 className="detail-card-head">지원금 지급 일정 및 방식</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>시점</th><th>지급 내용</th><th>조건</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>협약 후 1개월 내</td>
                <td>1차 지원금 선지급 (연간 지원금의 50%)</td>
                <td>협약서 제출</td>
              </tr>
              <tr>
                <td>중간 점검 후</td>
                <td>2차 지원금 지급 (나머지 50%)</td>
                <td>중간 실적 보고 통과</td>
              </tr>
              <tr>
                <td>2년차</td>
                <td>2년차 지원금 (1년차와 동일 방식)</td>
                <td>1년차 최종 보고 통과</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="warning-box">
        <strong>⚠️ 지원금 반환 조건</strong><br />
        목표 달성률이 기준 미달(통상 60% 이하)이거나 부정 집행이 확인되면
        지원금 일부 또는 전액을 반환해야 합니다. 반환 이자도 부과될 수 있습니다.
        연구비 관리는 선정 첫날부터 철저하게 해야 합니다.
      </div>
    </>
  );
}

export const 팁스TIPS팁스창업사업화RD지원금SpokeContent: SpokeData = {
  h1: 'TIPS 창업사업화·R&D 지원금 금액과 사용 조건 총정리',
  breadcrumb: '팁스창업사업화RD지원금',
  description: 'TIPS 프로그램에서 정부가 지원하는 R&D(최대 5억)·창업사업화(1억)·해외마케팅(1억) 지원금 구조와 사용 기준을 정리합니다.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: 'TIPS 선정되면 지원금을 바로 받을 수 있나요?',
      a: '선정 후 협약 체결까지 1~2개월이 소요됩니다. 협약 후 1개월 이내에 연간 지원금의 약 50%가 먼저 지급되고, 중간 점검 통과 후 나머지가 지급됩니다.',
      source: '중소벤처기업부 TIPS 운영 공고',
      sourceUrl: 'https://www.jointips.or.kr',
    },
    {
      q: 'R&D 지원금으로 대표이사 급여를 줄 수 있나요?',
      a: '대표이사 인건비는 원칙적으로 R&D 지원금 집행 불가 항목입니다. 연구 전담 직원(연구원)의 인건비는 가능하지만, 영업·관리직 인건비는 불가합니다.',
      source: '중소벤처기업부 TIPS 운영 공고',
      sourceUrl: 'https://www.jointips.or.kr',
    },
    {
      q: '창업사업화 지원금과 R&D 지원금을 합쳐서 쓸 수 있나요?',
      a: '두 항목은 별도 계정으로 관리해야 하며 혼용 집행은 불가합니다. 각 항목에 맞는 비용만 해당 계정에서 집행해야 합니다.',
      source: '중소벤처기업부 TIPS 운영 공고',
      sourceUrl: 'https://www.jointips.or.kr',
    },
    {
      q: '2년 안에 지원금을 다 쓰지 못하면 어떻게 되나요?',
      a: '집행하지 못한 잔액은 반납해야 합니다. 따라서 선정 후 연간 지출 계획을 사전에 철저히 수립하고 분기별로 집행 현황을 점검하는 것이 중요합니다.',
      source: '중소벤처기업부 TIPS 운영 공고',
      sourceUrl: 'https://www.jointips.or.kr',
    },
    {
      q: 'TIPS 지원금으로 해외 법인 설립 비용을 쓸 수 있나요?',
      a: '해외 법인 설립 비용 자체는 지원 항목이 아닙니다. 다만 해외마케팅 지원금으로 해외 출장, 현지 전시회 참가, 현지 마케팅 비용은 집행 가능합니다.',
      source: '중소벤처기업부 TIPS 운영 공고',
      sourceUrl: 'https://www.jointips.or.kr',
    },
  ],
  sources: [
    { name: '중소벤처기업부 TIPS 프로그램 공식 안내', url: 'https://www.jointips.or.kr' },
    { name: '중소벤처기업부 창업지원포털', url: 'https://www.k-startup.go.kr' },
  ],
};
