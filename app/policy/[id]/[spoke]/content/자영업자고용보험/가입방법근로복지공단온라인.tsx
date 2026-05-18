import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      {/* 빠른 답변 */}
      <div className="answer-box">
        <p>
          자영업자 고용보험은 <strong>고용·산재보험 토탈서비스(total.kcomwel.or.kr)</strong> 온라인 또는
          <strong>근로복지공단 지사 방문</strong>으로 가입 신청합니다.
          준비 서류는 <strong>사업자등록증, 신분증</strong>이며,
          가입은 사업 시작일로부터 언제든 가능합니다(소급 적용 불가).
        </p>
      </div>

      {/* 서론 */}
      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        자영업자 고용보험은 임의가입 제도로, 원하면 언제든지 가입할 수 있습니다.
        단, 소급 적용이 안 되기 때문에 가입 전 폐업은 보장되지 않습니다.
        지금 바로 가입해두어야 나중에 폐업 시 실업급여를 받을 수 있습니다.
      </p>

      {/* H2-1: 온라인 vs 방문 비교 */}
      <section className="detail-card" id="channel-compare">
        <h2 className="detail-card-head">온라인 신청 vs 방문 신청 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr>
                <th>구분</th>
                <th>온라인(토탈서비스)</th>
                <th>근로복지공단 방문</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>신청 채널</td>
                <td>total.kcomwel.or.kr</td>
                <td>가까운 근로복지공단 지사</td>
              </tr>
              <tr>
                <td>이용 시간</td>
                <td>24시간(점검 시간 제외)</td>
                <td>평일 09:00~18:00</td>
              </tr>
              <tr>
                <td>준비 서류</td>
                <td>공동인증서 + 사업자등록번호</td>
                <td>사업자등록증 원본, 신분증</td>
              </tr>
              <tr>
                <td>처리 속도</td>
                <td>즉시 처리(영업일 기준)</td>
                <td>당일 처리</td>
              </tr>
              <tr>
                <td>등급 선택</td>
                <td>온라인에서 직접 선택</td>
                <td>담당자 상담 후 선택</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box">
            <strong>추천:</strong> 첫 가입이라면 등급 선택이나 지원율 계산 등을
            담당자에게 안내받을 수 있는 방문 신청을 추천합니다.
            이미 내용을 알고 있다면 온라인이 더 빠릅니다.
          </div>
        </div>
      </section>

      {/* H2-2: 온라인 신청 단계별 절차 */}
      <section className="detail-card" id="online-process">
        <h2 className="detail-card-head">토탈서비스 온라인 가입 신청 절차</h2>
        <div className="detail-card-body">
          <ol style={{ listStyle: 'decimal', paddingLeft: 20, lineHeight: 2.2 }}>
            <li>
              <strong>접속:</strong> 고용·산재보험 토탈서비스(total.kcomwel.or.kr) 접속
            </li>
            <li>
              <strong>로그인:</strong> 공동인증서로 로그인
            </li>
            <li>
              <strong>메뉴 선택:</strong> 보험가입신청 → 자영업자 고용보험 가입 신청
            </li>
            <li>
              <strong>등급 선택:</strong> 1~7등급 중 원하는 기준보수 등급 선택
            </li>
            <li>
              <strong>신청 완료:</strong> 신청 확인 문자 수신 후 다음 달부터 보험료 고지
            </li>
          </ol>
          <div className="info-box">
            <strong>보험료 납부:</strong> 가입 후 매월 말일까지 보험료를 납부합니다.
            자동이체 신청 시 0.5% 할인 혜택이 있습니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      {/* H2-3: 가입 가능 대상 */}
      <section className="detail-card" id="eligible">
        <h2 className="detail-card-head">자영업자 고용보험 가입 가능 대상</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr>
                <th>구분</th>
                <th>가입 여부</th>
                <th>비고</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1인 자영업자(근로자 없음)</td>
                <td><strong>가입 가능(임의)</strong></td>
                <td>가장 일반적인 경우</td>
              </tr>
              <tr>
                <td>근로자 50인 미만 고용 사업주</td>
                <td><strong>가입 가능(임의)</strong></td>
                <td>직원 보험과 별도 가입</td>
              </tr>
              <tr>
                <td>근로자 50인 이상 고용 사업주</td>
                <td><strong>가입 불가</strong></td>
                <td>고용보험법 제49조의2</td>
              </tr>
              <tr>
                <td>농업·임업·어업·수렵업</td>
                <td>일부 제한</td>
                <td>개별 확인 필요</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box">
            <strong>근로자 고용 여부 무관:</strong> 직원이 없는 1인 자영업자도,
            직원 50인 미만을 고용한 사업주도 모두 자영업자 고용보험에 임의가입할 수 있습니다.
            직원 보험료(사업주 부담분)와 자영업자 본인 보험료는 별도로 납부합니다.
          </div>
        </div>
      </section>

      {/* H2-4: 소급 적용 불가 주의사항 */}
      <section className="detail-card" id="no-retroactive">
        <h2 className="detail-card-head">가입 전 폐업은 보장 안 됨 — 소급 불가</h2>
        <div className="detail-card-body">
          <div className="info-box">
            <strong>소급 적용 불가:</strong> 자영업자 고용보험은 가입 신청일 이후부터
            보험 기간이 시작됩니다. 폐업을 고려 중이라도 가입 후 최소 1년이 지나야
            실업급여를 받을 수 있습니다. 지금 바로 가입하는 것이 중요한 이유입니다.
          </div>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>연체 시 불이익:</strong> 보험료를 6개월 이상 연체하면
            고용보험 자격이 취소될 수 있습니다. 폐업 시 실업급여를 받으려면
            꾸준히 납부 유지가 필수입니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      {/* CTA */}
      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            자영업자 고용보험 등급별 보험료, 정부 지원율, 폐업 후 실업급여 조건을 확인하세요.
          </p>
          <a href="/policy/self-employed-employment-insurance" className="btn-cta">자영업자고용보험 전체 정보 보기 →</a>
        </div>
      </section>
    </>
  );
}

export const 자영업자고용보험가입방법근로복지공단온라인SpokeContent: SpokeData = {
  h1: '자영업자고용보험 가입 방법, 근로복지공단 온라인 신청',
  breadcrumb: '가입방법근로복지공단온라인',
  description:
    '자영업자 고용보험은 고용·산재보험 토탈서비스(total.kcomwel.or.kr) 온라인 또는 근로복지공단 지사 방문으로 신청합니다. 가입 대상, 온라인 신청 절차 5단계, 소급 불가 주의사항을 정리했습니다.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '자영업자 고용보험 온라인으로 신청하려면 무엇이 필요한가요?',
      a: '공동인증서와 사업자등록번호가 필요합니다. 고용·산재보험 토탈서비스(total.kcomwel.or.kr)에 접속해 로그인 후 가입 신청을 합니다.',
      source: '근로복지공단 자영업자 고용보험 안내',
      sourceUrl: 'https://www.kcomwel.or.kr',
    },
    {
      q: '가입 신청 후 언제부터 보험료가 부과되나요?',
      a: '가입 신청일이 속한 달의 다음 달부터 보험료가 부과됩니다. 당월분은 부과되지 않습니다.',
      source: '근로복지공단 자영업자 고용보험 안내',
      sourceUrl: 'https://www.kcomwel.or.kr',
    },
    {
      q: '직원이 있는 사업주도 자영업자 고용보험에 가입할 수 있나요?',
      a: '네, 근로자 50인 미만을 고용한 사업주는 임의로 가입할 수 있습니다. 직원의 고용보험료(사업주 부담분)와는 별도로 납부합니다.',
      source: '근로복지공단 자영업자 고용보험 안내',
      sourceUrl: 'https://www.kcomwel.or.kr',
    },
    {
      q: '보험료를 연체하면 어떻게 되나요?',
      a: '6개월 이상 연체하면 고용보험 자격이 취소될 수 있습니다. 폐업 시 실업급여를 받으려면 꾸준한 납부 유지가 필수입니다.',
      source: '근로복지공단 자영업자 고용보험 안내',
      sourceUrl: 'https://www.kcomwel.or.kr',
    },
    {
      q: '가입 시 등급은 어떻게 선택하나요?',
      a: '1~7등급(기준보수 월 182만원~338만원) 중 원하는 등급을 선택합니다. 등급이 높을수록 보험료가 높고 실업급여도 많습니다. 연 1회 변경 가능합니다.',
      source: '근로복지공단 자영업자 고용보험 안내',
      sourceUrl: 'https://www.kcomwel.or.kr',
    },
  ],
  sources: [
    { name: '근로복지공단 자영업자 고용보험 안내', url: 'https://www.kcomwel.or.kr' },
    { name: '고용·산재보험 토탈서비스', url: 'https://total.kcomwel.or.kr' },
  ],
};
