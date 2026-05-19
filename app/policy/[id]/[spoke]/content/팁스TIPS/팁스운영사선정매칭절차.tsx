import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          TIPS 운영사는 <strong>벤처캐피털(VC)·액셀러레이터·기업형 CVC</strong> 중
          중소벤처기업부가 선정한 기관입니다. 현재 약 <strong>70~80개 운영사</strong>가 활동 중이며,
          분야별 전문성이 다릅니다. 내 스타트업의 기술 분야와 맞는 운영사를 찾아
          <strong>직접 IR을 요청하는 것</strong>이 TIPS 선정의 첫 단계입니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0', color: 'var(--text-secondary)' }}>
        운영사 선정은 단순히 투자금을 받는 것이 아니라, TIPS 심사를 함께 통과해야 하는 파트너를 찾는 과정입니다.
        운영사의 포트폴리오·분야·심사 성공률을 꼼꼼히 비교해야 합니다.
      </p>

      <section className="detail-card" id="type">
        <h2 className="detail-card-head">TIPS 운영사 유형별 특징</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>운영사 유형</th><th>특징</th><th>주로 투자하는 단계</th><th>선택 시 고려사항</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>벤처캐피털(VC)</strong></td>
                <td>대형 펀드, 체계적 심사 프로세스</td>
                <td>Pre-A ~ 시리즈 A</td>
                <td>포트폴리오 분야 일치 여부</td>
              </tr>
              <tr>
                <td><strong>액셀러레이터</strong></td>
                <td>보육·멘토링 지원, 소규모 투자</td>
                <td>시드 ~ Pre-A</td>
                <td>멘토 네트워크 품질</td>
              </tr>
              <tr>
                <td><strong>기업형 CVC</strong></td>
                <td>대기업 계열 전략적 투자</td>
                <td>시드 ~ 시리즈 B</td>
                <td>모회사와 시너지 가능성</td>
              </tr>
              <tr>
                <td><strong>전문투자조합</strong></td>
                <td>특정 분야(바이오·소재 등) 특화</td>
                <td>다양</td>
                <td>기술 분야 전문성</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="process">
        <h2 className="detail-card-head">운영사 매칭 → TIPS 선정 전체 절차</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>단계</th><th>내용</th><th>기간</th><th>팁</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>① 운영사 리서치</strong></td>
                <td>jointips.or.kr에서 활동 운영사 목록 확인, 포트폴리오·투자 분야 분석</td>
                <td>1~2주</td>
                <td>3~5개 후보 운영사 선정</td>
              </tr>
              <tr>
                <td><strong>② IR 덱 준비</strong></td>
                <td>팀·기술·시장·비즈니스 모델·TIPS 활용 계획 포함 IR 자료 작성</td>
                <td>1~2주</td>
                <td>TIPS R&D 계획 별도 준비</td>
              </tr>
              <tr>
                <td><strong>③ 미팅 요청</strong></td>
                <td>이메일·LinkedIn·지인 소개로 운영사 담당자에게 IR 미팅 요청</td>
                <td>1~4주</td>
                <td>네트워킹 이벤트 활용</td>
              </tr>
              <tr>
                <td><strong>④ 투자 협상</strong></td>
                <td>운영사 내부 심사 → 투자 조건(지분율·금액·조건) 협상</td>
                <td>1~3개월</td>
                <td>법률 자문 받는 것 권장</td>
              </tr>
              <tr>
                <td><strong>⑤ TIPS 추천</strong></td>
                <td>운영사가 TIPS 시스템에 스타트업 추천 등록</td>
                <td>투자 직후</td>
                <td>운영사가 직접 진행</td>
              </tr>
              <tr>
                <td><strong>⑥ 심사 통과</strong></td>
                <td>서면 심사 → PT 발표 심사 → 최종 선정</td>
                <td>2~3개월</td>
                <td>운영사와 함께 준비</td>
              </tr>
            </tbody>
          </table>

          <div className="info-box" style={{ marginTop: 16 }}>
            <strong>평균 소요 기간:</strong> 운영사 미팅 시작부터 TIPS 최종 선정까지
            평균 <strong>4~8개월</strong>이 걸립니다. 여유 있게 준비를 시작하세요.
          </div>
        </div>
      </section>

      <section className="detail-card" id="select">
        <h2 className="detail-card-head">운영사 선택 시 반드시 확인할 사항</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>확인 항목</th><th>내용</th></tr>
            </thead>
            <tbody>
              <tr><td>분야 전문성</td><td>내 기술 분야에 투자 경험이 있는지 포트폴리오 확인</td></tr>
              <tr><td>TIPS 성공률</td><td>해당 운영사의 TIPS 추천 건수 및 선정률 확인 (공식 통계 없으면 직접 문의)</td></tr>
              <tr><td>멘토링 역량</td><td>사업화·해외진출·후속 투자 연결 역량 보유 여부</td></tr>
              <tr><td>투자 조건</td><td>지분율·투자금 규모·후속 투자 의향 사전 협의</td></tr>
              <tr><td>계약서 검토</td><td>비밀유지계약(NDA)·투자계약서 법률 검토 필수</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export const 팁스TIPS팁스운영사선정매칭절차SpokeContent: SpokeData = {
  h1: 'TIPS 운영사 선정·매칭 절차 — IR부터 선정까지',
  breadcrumb: '팁스운영사선정매칭절차',
  description: 'TIPS 프로그램 운영사 유형별 특징과 IR 미팅 요청부터 투자 협상, TIPS 추천·심사 통과까지 전체 절차를 정리합니다.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: 'TIPS 운영사를 어떻게 찾을 수 있나요?',
      a: 'jointips.or.kr에서 현재 활동 중인 운영사 목록과 포트폴리오를 확인할 수 있습니다. 스타트업 행사·데모데이·네트워킹 이벤트에서 운영사 담당자를 직접 만나는 것이 가장 효과적입니다.',
      source: 'TIPS 공식 홈페이지',
      sourceUrl: 'https://www.jointips.or.kr',
    },
    {
      q: '운영사가 투자를 결정하면 TIPS 선정도 자동으로 되나요?',
      a: '아닙니다. 운영사 투자는 TIPS 신청의 전제 조건일 뿐입니다. 이후 주관기관의 서면 심사와 발표 심사를 별도로 통과해야 최종 선정됩니다. 선정률은 운영사별로 다릅니다.',
      source: '중소벤처기업부 TIPS 운영 공고',
      sourceUrl: 'https://www.jointips.or.kr',
    },
    {
      q: '여러 운영사에 동시에 IR을 진행해도 되나요?',
      a: '가능합니다. 다만 동일한 과제로 복수의 운영사가 동시에 TIPS를 추천하는 것은 불가합니다. 최종적으로 한 운영사와 계약 후 그 운영사가 추천하게 됩니다.',
      source: 'TIPS 공식 홈페이지',
      sourceUrl: 'https://www.jointips.or.kr',
    },
    {
      q: 'TIPS 심사에서 탈락하면 다시 신청할 수 있나요?',
      a: '탈락 후 재도전이 가능하지만, 동일 운영사 또는 다른 운영사를 통해 다시 추천받아야 합니다. 탈락 사유를 파악해 R&D 계획을 보완한 뒤 재도전하는 것이 일반적입니다.',
      source: '중소벤처기업부 TIPS 운영 공고',
      sourceUrl: 'https://www.jointips.or.kr',
    },
    {
      q: '운영사와 투자 계약 후 TIPS에 떨어지면 투자금은 어떻게 되나요?',
      a: '운영사 투자금은 TIPS 선정 여부와 무관하게 투자 계약 조건대로 집행됩니다. TIPS 선정이 취소되어도 운영사 투자금은 반환 의무가 없습니다.',
      source: 'TIPS 공식 홈페이지',
      sourceUrl: 'https://www.jointips.or.kr',
    },
  ],
  sources: [
    { name: '중소벤처기업부 TIPS 프로그램 공식 안내', url: 'https://www.jointips.or.kr' },
    { name: '중소벤처기업부 창업지원포털', url: 'https://www.k-startup.go.kr' },
  ],
};
