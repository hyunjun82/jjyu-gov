import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          새도약기금은 <strong>이자와 원금 모두</strong> 소각 대상이 될 수 있습니다.
          채무자별 최대 <strong>5천만원 소각</strong>이 가능하며,
          연체이자·지연배상금 포함 채권 전체가 매입 대상입니다.
          상환능력 심사에서 능력 없음으로 판정되면 <strong>1년 이내 소각</strong>됩니다.
          상환능력이 있다고 판정되면 소각 대신 <strong>채무조정(30~80% 감면)</strong>이 적용됩니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "이자만 면제되는 건가요, 원금도 없어지나요?" 원금도 소각 가능합니다.
        소각과 채무조정의 차이와 각각의 조건을 정리했습니다.
      </p>

      <section className="detail-card" id="cancel-vs-adjust">
        <h2 className="detail-card-head">채무 소각 vs 채무조정 — 상환능력 심사로 결정</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>구분</th><th>소각 (상환능력 없음)</th><th>채무조정 (상환능력 있음)</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>기준</td>
                <td>중위소득 60% 이하 + 무재산 + 출입국 2회 이하</td>
                <td>위 기준 중 하나라도 미달</td>
              </tr>
              <tr>
                <td>처리 내용</td>
                <td><strong>원금+이자 전액 소각</strong></td>
                <td><strong>30~80% 감면 + 분할상환</strong></td>
              </tr>
              <tr>
                <td>한도</td>
                <td>채무자별 최대 5천만원</td>
                <td>신용회복위원회 기준 적용</td>
              </tr>
              <tr>
                <td>기간</td>
                <td>1년 이내 소각</td>
                <td>최장 10년 분할상환</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            소각이 되면 채무자별 5천만원 한도 내에서 원금·이자·지연배상금 포함
            채권 전체가 없어집니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="interest">
        <h2 className="detail-card-head">연체이자는 어떻게 되나 — 이자도 소각 대상</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>소각 대상:</strong> 원금, 확정이자, 미확정이자, 지연배상금(연체이자) 포함
            채권 전체. 별도로 이자만 따로 처리하지 않습니다.
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>5천만원 초과 부분:</strong> 5천만원을 넘는 채무는 소각 대상이 아닙니다.
            초과분은 별도 채무조정 프로그램(개인 워크아웃 등)을 통해 처리합니다.
          </div>
          <div className="info-box">
            <strong>매입 즉시:</strong> 정부가 채권을 매입하는 순간 추심이 중단됩니다.
            소각 완료 전이라도 더 이상 독촉·추심을 받지 않습니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="credit">
        <h2 className="detail-card-head">소각 후 신용기록은 어떻게 되나</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>내용</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>신용정보 등록</td>
                <td>소각 완료 후 등록 해제 절차 진행</td>
              </tr>
              <tr>
                <td>신용회복 지원</td>
                <td>신용회복위원회(1600-5500) 연계 안내</td>
              </tr>
              <tr>
                <td>금융 재기</td>
                <td>소각 후 서민금융·저금리 대출 연계 가능</td>
              </tr>
            </tbody>
          </table>
          <div className="warning-box" style={{ marginTop: 12 }}>
            신용기록 해제는 소각 완료 후 별도 절차가 필요합니다.
            신용회복위원회(1600-5500)에 문의하면 자세한 안내를 받을 수 있습니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            신청 방법, 자격 조건, 대상자 조회 등<br />
            새도약기금 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/new-leap" className="btn-cta">
            새도약기금 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 채무소각SpokeContent: SpokeData = {
  h1: '새도약기금으로 이자가 전액 면제되는 건가, 원금까지 소각되는 건가',
  breadcrumb: '채무소각',
  description:
    '새도약기금은 원금·이자·지연배상금 포함 채권 전체가 소각 대상입니다. 채무자별 최대 5천만원 한도. 상환능력 심사에서 능력 없음이면 1년 이내 소각, 능력 있음이면 30~80% 감면 후 최장 10년 분할상환(채무조정).',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '원금도 없어지나요, 이자만 면제되나요?',
      a: '상환능력 없음으로 판정되면 원금·이자·연체이자(지연배상금) 포함 채권 전체가 소각됩니다. 이자만 따로 면제하는 것이 아닙니다.',
      source: '새도약기금 제도안내',
      sourceUrl: 'https://www.newleap.or.kr/about/rules.do',
    },
    {
      q: '5천만원 한도는 원금 기준인가요, 이자 포함인가요?',
      a: '채무자별 소각 한도가 5천만원입니다. 원금 기준으로 5천만원 이하인 경우 이자를 포함한 채권 전체가 소각됩니다.',
      source: '새도약기금 제도안내',
      sourceUrl: 'https://www.newleap.or.kr/about/rules.do',
    },
    {
      q: '소각 대신 채무조정을 받으면 얼마나 감면되나요?',
      a: '신용회복위원회의 강화된 채무조정으로 30~80% 감면 후 최장 10년 분할상환이 적용됩니다. 감면 비율은 상환능력에 따라 결정됩니다.',
      source: '새도약기금 제도안내',
      sourceUrl: 'https://www.newleap.or.kr/about/rules.do',
    },
    {
      q: '소각이 되면 추심도 멈추나요?',
      a: '채권 매입 즉시 추심이 중단됩니다. 소각 완료 전이라도 정부가 채권을 매입하는 순간부터 더 이상 독촉·추심을 받지 않습니다.',
      source: '새도약기금 제도안내',
      sourceUrl: 'https://www.newleap.or.kr/about/rules.do',
    },
    {
      q: '소각 후 신용불량 기록도 없어지나요?',
      a: '소각 완료 후 신용정보 등록 해제 절차가 진행됩니다. 신용회복위원회(1600-5500)에 문의하면 신용회복 관련 자세한 안내를 받을 수 있습니다.',
      source: '새도약기금 상담센터',
      sourceUrl: 'https://www.newleap.or.kr/help/info.do',
    },
  ],
  sources: [
    { name: '새도약기금 제도안내', url: 'https://www.newleap.or.kr/about/rules.do' },
    { name: '신용회복위원회', url: 'https://www.ccrs.or.kr' },
  ],
};
