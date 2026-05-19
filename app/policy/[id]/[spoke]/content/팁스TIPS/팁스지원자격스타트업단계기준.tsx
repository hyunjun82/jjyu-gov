import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          TIPS는 <strong>창업자가 직접 신청할 수 없는 프로그램</strong>입니다.
          반드시 <strong>TIPS 운영사(VC·액셀러레이터)로부터 1억 원 이상 투자</strong>를 받은 뒤
          운영사가 추천해야만 신청이 가능합니다. 창업 업력은 <strong>7년 이내</strong>가 기본이며,
          딥테크·AI·바이오 등 기술 기반 분야에서 우대됩니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0', color: 'var(--text-secondary)' }}>
        "TIPS를 신청하고 싶은데 어떤 단계의 스타트업이어야 하나요?" — 가장 많이 받는 질문입니다.
        TIPS는 단계별 트랙이 구분되어 있어서, 내 회사 상황에 맞는 트랙을 먼저 파악해야 합니다.
      </p>

      <section className="detail-card" id="req">
        <h2 className="detail-card-head">TIPS 신청 자격 요건 전체 정리</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>기준</th><th>비고</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>운영사 투자</strong></td>
                <td>TIPS 운영사가 <strong>1억 원 이상</strong> 투자 또는 투자 약정</td>
                <td>투자 없으면 신청 불가</td>
              </tr>
              <tr>
                <td><strong>창업 업력</strong></td>
                <td>법인 설립일 기준 <strong>7년 이내</strong></td>
                <td>예비창업자 일부 가능</td>
              </tr>
              <tr>
                <td><strong>기술 분야</strong></td>
                <td>딥테크·AI·바이오·소재·ICT 등 기술 기반</td>
                <td>일반 서비스업 제외</td>
              </tr>
              <tr>
                <td><strong>신청 방식</strong></td>
                <td>운영사를 통한 추천 신청만 가능</td>
                <td>직접 신청 불가</td>
              </tr>
              <tr>
                <td><strong>기업 형태</strong></td>
                <td>국내 법인 (중소기업 기준)</td>
                <td>개인사업자 불가</td>
              </tr>
              <tr>
                <td><strong>중복 수혜</strong></td>
                <td>동일 과제로 타 정부 R&D 수행 중 불가</td>
                <td>사전 확인 필수</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="track">
        <h2 className="detail-card-head">단계별 TIPS 트랙 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>트랙</th><th>대상 단계</th><th>R&D 지원</th><th>사업화 지원</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>일반 TIPS</strong></td>
                <td>초기 스타트업 (시드~Pre-A)</td>
                <td>최대 <strong>5억 원</strong> / 2년</td>
                <td>최대 <strong>2억 원</strong> / 2년</td>
              </tr>
              <tr>
                <td><strong>딥테크 TIPS</strong></td>
                <td>딥테크 특화 (AI·바이오·소재)</td>
                <td>최대 <strong>10억 원</strong> / 3년</td>
                <td>별도 한도</td>
              </tr>
              <tr>
                <td><strong>포스트 TIPS</strong></td>
                <td>TIPS 졸업 후 성장 단계</td>
                <td>최대 <strong>10억 원</strong></td>
                <td>추가 지원</td>
              </tr>
              <tr>
                <td><strong>글로벌 TIPS</strong></td>
                <td>해외 진출 준비 단계</td>
                <td>R&D + 해외마케팅</td>
                <td>최대 <strong>1억 원</strong> 해외비용</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="process">
        <h2 className="detail-card-head">TIPS 선정까지 단계별 절차</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>단계</th><th>주체</th><th>내용</th></tr>
            </thead>
            <tbody>
              <tr><td>①</td><td>스타트업</td><td>운영사 목록 파악 → IR 덱 준비 → 미팅 요청</td></tr>
              <tr><td>②</td><td>운영사</td><td>스타트업 심사 → 투자 결정 → 투자 계약</td></tr>
              <tr><td>③</td><td>운영사</td><td>TIPS 운영사 시스템(jointips.or.kr)에 추천 등록</td></tr>
              <tr><td>④</td><td>주관기관</td><td>서면 심사 → 발표 심사 (2~3개월 소요)</td></tr>
              <tr><td>⑤</td><td>중기부</td><td>최종 선정 통보 → 협약 체결 → 지원금 지급 시작</td></tr>
            </tbody>
          </table>

          <div className="info-box" style={{ marginTop: 16 }}>
            <strong>핵심 포인트:</strong> TIPS 선정까지 운영사 투자 협상 + 심사 기간 포함
            평균 <strong>3~6개월</strong>이 걸립니다. 선정 후 협약까지 1~2개월 추가 소요됩니다.
          </div>
        </div>
      </section>

      <div className="warning-box" style={{ marginTop: 0 }}>
        <strong>⚠️ 주의: 직접 신청 사기 주의</strong><br />
        "TIPS 신청을 도와주겠다"며 수수료를 요구하는 브로커·컨설팅 업체가 있습니다.
        TIPS는 운영사만 추천할 수 있으며, <strong>수수료를 받고 신청을 대행해주는 제도가 아닙니다.</strong>
        jointips.or.kr에서 공식 운영사 목록을 직접 확인하세요.
      </div>
    </>
  );
}

export const 팁스TIPS팁스지원자격스타트업단계기준SpokeContent: SpokeData = {
  h1: 'TIPS 지원자격 — 스타트업 단계별 신청 기준 총정리',
  breadcrumb: '팁스지원자격스타트업단계기준',
  description: 'TIPS 프로그램 신청 자격(업력·기술분야·운영사 투자 조건)과 일반·딥테크·포스트·글로벌 트랙별 차이를 정리합니다.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: 'TIPS를 창업자가 직접 신청할 수 있나요?',
      a: '아닙니다. TIPS는 반드시 TIPS 운영사(VC·액셀러레이터)가 투자 후 추천해야만 신청이 가능합니다. 창업자가 TIPS 홈페이지에서 직접 신청하는 방식은 없습니다.',
      source: '중소벤처기업부 TIPS 운영 공고',
      sourceUrl: 'https://www.jointips.or.kr',
    },
    {
      q: '창업한 지 7년이 넘었는데 TIPS를 받을 수 있나요?',
      a: '일반 TIPS는 창업 7년 이내가 기본 요건입니다. 다만 딥테크·포스트TIPS 등 일부 트랙은 요건이 다를 수 있으니 해당 공고를 확인하세요.',
      source: '중소벤처기업부 TIPS 운영 공고',
      sourceUrl: 'https://www.jointips.or.kr',
    },
    {
      q: '운영사 투자 없이 TIPS에 선정된 사례가 있나요?',
      a: '없습니다. 운영사의 투자는 TIPS 신청의 전제 조건입니다. 투자 약정 단계에서도 추천이 가능하지만, 실제 투자 집행이 확인되어야 최종 선정됩니다.',
      source: '중소벤처기업부 TIPS 운영 공고',
      sourceUrl: 'https://www.jointips.or.kr',
    },
    {
      q: 'TIPS 운영사를 어떻게 찾나요?',
      a: 'jointips.or.kr에서 현재 활동 중인 운영사 목록을 확인할 수 있습니다. 내 기술 분야에 투자 경험이 있는 운영사를 골라 IR(투자설명) 미팅을 요청하는 것이 일반적인 방법입니다.',
      source: 'TIPS 공식 홈페이지',
      sourceUrl: 'https://www.jointips.or.kr',
    },
    {
      q: '다른 정부 R&D 과제를 수행 중이어도 TIPS에 신청할 수 있나요?',
      a: '동일 과제와 중복되는 경우에는 불가합니다. 단, 별도 과제라면 중복 수혜가 가능할 수 있으나 사전에 주관기관에 확인이 필요합니다.',
      source: '중소벤처기업부 TIPS 운영 공고',
      sourceUrl: 'https://www.jointips.or.kr',
    },
  ],
  sources: [
    { name: '중소벤처기업부 TIPS 프로그램 공식 안내', url: 'https://www.jointips.or.kr' },
    { name: '중소벤처기업부 창업지원포털', url: 'https://www.k-startup.go.kr' },
  ],
};
