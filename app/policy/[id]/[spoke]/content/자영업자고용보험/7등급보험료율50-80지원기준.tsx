import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      {/* 빠른 답변 */}
      <div className="answer-box">
        <p>
          자영업자 고용보험 보험료율은 <strong>2.25%</strong>이며, 선택한 등급에 따라
          월 40,950원(1등급)~76,050원(7등급)입니다.
          정부 지원율은 <strong>등급에 따라 50-80%</strong>로 차등 적용됩니다.
          <strong>1~2등급은 80% 지원</strong>, 3~4등급은 60%, 5~7등급은 50%이며,
          최대 5년(60개월) 동안 지원됩니다.
        </p>
      </div>

      {/* 서론 */}
      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        자영업자 고용보험은 임의가입 제도로, 본인이 원하는 등급을 선택해 납부합니다.
        낮은 등급일수록 정부 지원율이 높아 실부담이 크게 줄어들기 때문에
        등급별 보험료와 지원율을 꼭 확인하고 선택하세요.
      </p>

      {/* H2-1: 7등급 보험료 */}
      <section className="detail-card" id="grade-table">
        <h2 className="detail-card-head">2026년 자영업자 고용보험 등급별 보험료</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr>
                <th>등급</th>
                <th>기준보수(월)</th>
                <th>월 보험료(2.25%)</th>
                <th>연간 보험료</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1등급</td>
                <td>182만원</td>
                <td>40,950원</td>
                <td>491,400원</td>
              </tr>
              <tr>
                <td>2등급</td>
                <td>208만원</td>
                <td>46,800원</td>
                <td>561,600원</td>
              </tr>
              <tr>
                <td>3등급</td>
                <td>234만원</td>
                <td>52,650원</td>
                <td>631,800원</td>
              </tr>
              <tr>
                <td>4등급</td>
                <td>260만원</td>
                <td>58,500원</td>
                <td>702,000원</td>
              </tr>
              <tr>
                <td>5등급</td>
                <td>286만원</td>
                <td>64,350원</td>
                <td>772,200원</td>
              </tr>
              <tr>
                <td>6등급</td>
                <td>312만원</td>
                <td>70,200원</td>
                <td>842,400원</td>
              </tr>
              <tr>
                <td>7등급</td>
                <td>338만원</td>
                <td>76,050원</td>
                <td>912,600원</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box">
            <strong>보험료율 2.25%:</strong> 실업급여 보험료만 해당합니다.
            산재보험은 별도로 납부합니다. 등급은 매년 12월에 1회 변경 신청 가능하며,
            다음 연도 1월부터 적용됩니다.
          </div>
        </div>
      </section>

      {/* H2-2: 등급별 정부 지원율 */}
      <section className="detail-card" id="support-rate">
        <h2 className="detail-card-head">등급별 정부 지원율 50-80%</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr>
                <th>등급</th>
                <th>정부 지원율</th>
                <th>지원 기간</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1~2등급</strong></td>
                <td><strong style={{ color: '#27ae60' }}>80%</strong></td>
                <td>최대 5년(60개월)</td>
              </tr>
              <tr>
                <td><strong>3~4등급</strong></td>
                <td><strong>60%</strong></td>
                <td>최대 5년(60개월)</td>
              </tr>
              <tr>
                <td><strong>5~7등급</strong></td>
                <td>50%</td>
                <td>최대 5년(60개월)</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box">
            <strong>지원 신청 방법:</strong> 신규 가입자는 근로복지공단 고용·산재보험
            토탈서비스(total.kcomwel.or.kr) 가입 시 함께 신청합니다.
            기존 가입자는 소상공인24(sbiz24.kr)에서 별도 신청해야 합니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      {/* H2-3: 실질 부담 보험료 계산 */}
      <section className="detail-card" id="net-cost">
        <h2 className="detail-card-head">정부 지원 후 실질 부담 보험료</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr>
                <th>등급 (지원율)</th>
                <th>월 보험료</th>
                <th>정부 지원액</th>
                <th>본인 실부담(월)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1등급 (80% 지원)</td>
                <td>40,950원</td>
                <td>32,760원</td>
                <td><strong>8,190원</strong></td>
              </tr>
              <tr>
                <td>2등급 (80% 지원)</td>
                <td>46,800원</td>
                <td>37,440원</td>
                <td><strong>9,360원</strong></td>
              </tr>
              <tr>
                <td>3등급 (60% 지원)</td>
                <td>52,650원</td>
                <td>31,590원</td>
                <td><strong>21,060원</strong></td>
              </tr>
              <tr>
                <td>5등급 (50% 지원)</td>
                <td>64,350원</td>
                <td>32,175원</td>
                <td><strong>32,175원</strong></td>
              </tr>
              <tr>
                <td>7등급 (50% 지원)</td>
                <td>76,050원</td>
                <td>38,025원</td>
                <td><strong>38,025원</strong></td>
              </tr>
            </tbody>
          </table>
          <div className="info-box">
            <strong>1등급 선택 시:</strong> 월 8,190원(연 약 98,280원)만 납부하면
            자영업자 실업급여 보험에 가입할 수 있습니다. 폐업 시 월 약 109만원의
            실업급여를 받을 수 있어 매우 효율적인 안전망입니다.
          </div>
        </div>
      </section>

      {/* H2-4: 신청 방법 */}
      <section className="detail-card" id="how-to-apply">
        <h2 className="detail-card-head">가입 및 지원 신청 방법</h2>
        <div className="detail-card-body">
          <ol style={{ listStyle: 'decimal', paddingLeft: 20, lineHeight: 2.2 }}>
            <li>
              <strong>신규 가입자(원스톱 신청):</strong> 고용·산재보험 토탈서비스(total.kcomwel.or.kr) 접속
              → 자영업자 고용보험 가입 신청 시 보험료 지원 신청 동시 진행
            </li>
            <li>
              <strong>기존 가입자:</strong> 소상공인24(sbiz24.kr) 로그인
              → &quot;2026년 소상공인 고용보험료 지원사업&quot; 검색 후 신청
            </li>
            <li>
              <strong>오프라인:</strong> 관할 근로복지공단 지사 방문
              (사업자등록증, 신분증 지참)
            </li>
          </ol>
          <div className="info-box">
            <strong>예산 소진 시 마감:</strong> 2026년 1월 1일부터 예산 소진 시까지
            선착순 운영입니다. 지원금은 납부 다음 달 말에 환급(선납부 후환급) 방식으로
            지급됩니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      {/* CTA */}
      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            자영업자 고용보험 폐업 후 실업급여 수급 조건, 가입 방법 전체를 확인하세요.
          </p>
          <a href="/policy/self-employed-employment-insurance" className="btn-cta">자영업자고용보험 전체 정보 보기 →</a>
        </div>
      </section>
    </>
  );
}

export const 자영업자고용보험7등급보험료율50-80지원기준SpokeContent: SpokeData = {
  h1: '자영업자고용보험 7등급 보험료·50-80% 지원 기준 (2026)',
  breadcrumb: '7등급보험료율50-80지원기준',
  description:
    '자영업자 고용보험 1~7등급별 월 보험료(보험료율 2.25%)와 정부 지원율을 정리합니다. 1~2등급 80% 지원, 3~4등급 60%, 5~7등급 50%. 최대 5년간 지원, 1등급 실부담 월 8,190원.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '자영업자 고용보험 보험료율은 얼마인가요?',
      a: '실업급여 보험료율은 2.25%입니다. 산재보험은 별도로 납부합니다. 등급별 기준보수에 2.25%를 곱한 금액이 월 보험료로, 1등급 40,950원부터 7등급 76,050원까지입니다.',
      source: '근로복지공단 자영업자 고용보험 안내',
      sourceUrl: 'https://www.kcomwel.or.kr',
    },
    {
      q: '정부 지원 80%를 받으려면 어떤 조건인가요?',
      a: '1등급 또는 2등급을 선택하면 납부 보험료의 80%를 지원받습니다. 3~4등급은 60%, 5~7등급은 50% 지원입니다. 지원은 등급에 따라 결정되며, 소상공인 기준(업종별 매출·근로자 수)을 충족해야 합니다.',
      source: '중소벤처기업부·소상공인시장진흥공단 2026년 소상공인 고용보험료 지원사업 공고',
      sourceUrl: 'https://www.bizinfo.go.kr/sii/siia/selectSIIA200Detail.do?pblancId=PBLN_000000000117022',
    },
    {
      q: '지원 기간 5년이 끝나면 어떻게 되나요?',
      a: '5년(60개월) 지원이 끝나면 이후에는 보험료 전액을 본인이 납부해야 합니다. 가입은 계속 유지할 수 있으며, 실업급여 수급 자격은 보험료 납부 기간에 따라 유지됩니다.',
      source: '근로복지공단 자영업자 고용보험 안내',
      sourceUrl: 'https://www.kcomwel.or.kr',
    },
    {
      q: '등급을 나중에 변경할 수 있나요?',
      a: '매년 12월에 1회 등급 변경 신청이 가능하며, 다음 연도 1월부터 새 등급이 적용됩니다. 근로복지공단 토탈서비스 또는 지사 방문으로 신청합니다.',
      source: '근로복지공단 자영업자 고용보험 안내',
      sourceUrl: 'https://www.kcomwel.or.kr',
    },
    {
      q: '기존 가입자도 보험료 지원을 받을 수 있나요?',
      a: '네, 기존 가입자도 소상공인24(sbiz24.kr)에서 2026년 소상공인 고용보험료 지원사업을 신청하면 지원받을 수 있습니다. 단, 가입 시 자동 지원이 아니므로 반드시 별도 신청이 필요합니다.',
      source: '중소벤처기업부·소상공인시장진흥공단 2026년 소상공인 고용보험료 지원사업 공고',
      sourceUrl: 'https://www.bizinfo.go.kr/sii/siia/selectSIIA200Detail.do?pblancId=PBLN_000000000117022',
    },
  ],
  sources: [
    { name: '근로복지공단 자영업자 고용보험 안내', url: 'https://www.kcomwel.or.kr' },
    { name: '2026년 소상공인 고용보험료 지원사업 공고 (중기부·소진공)', url: 'https://www.bizinfo.go.kr/sii/siia/selectSIIA200Detail.do?pblancId=PBLN_000000000117022' },
  ],
};
