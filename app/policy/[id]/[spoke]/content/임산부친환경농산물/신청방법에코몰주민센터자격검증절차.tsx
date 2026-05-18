import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          임산부 친환경농산물은 <strong>에코몰(ecoemall.com) 온라인</strong> 또는
          <strong>주민센터(읍·면·동) 방문</strong>으로 신청할 수 있습니다.
          비대면 자격검증 시스템을 통해 서류 제출이 간소화되었으며,
          신청 → 자격 확인 → 꾸러미 주문 → 배송 순서로 진행됩니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        에코몰 온라인 신청이 가장 빠르고 편리합니다.
        자격 검증 완료 후 에코몰에서 직접 꾸러미를 주문하며, 배송까지 보통 3~7일 소요됩니다.
      </p>

      <section className="detail-card" id="process">
        <h2 className="detail-card-head">신청 절차</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>단계</th><th>내용</th><th>방법</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>1단계</strong></td><td>신청</td><td>에코몰 온라인 또는 주민센터 방문</td></tr>
              <tr><td><strong>2단계</strong></td><td>자격 확인</td><td>비대면 자격검증 시스템 (서류 간소화)</td></tr>
              <tr><td><strong>3단계</strong></td><td>꾸러미 주문</td><td>에코몰에서 업체 선택 후 주문</td></tr>
              <tr><td><strong>4단계</strong></td><td>배송</td><td>자택으로 친환경 농산물 꾸러미 배송</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="channel">
        <h2 className="detail-card-head">신청 채널별 비교</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>에코몰(온라인):</strong> ecoemall.com 접속 → 회원가입 → 임산부 신청 → 자격검증 → 주문
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>주민센터(방문):</strong> 읍·면·동 행정복지센터 방문 → 신청서 작성 → 서류 제출 → 에코몰 계정 발급
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>서류:</strong> 임신확인서·출생증명서·산모수첩 중 1개 (비대면 간소화 적용)
          </div>
          <div className="info-box">
            <strong>문의:</strong> 에코몰 고객센터 또는 거주 지자체 농업 담당 부서
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            신청 자격, 지원 금액, 산모신생아 중복 여부까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/pregnant-eco-farm" className="btn-cta">
            임산부친환경농산물 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 임산부친환경농산물신청방법에코몰주민센터자격검증절차SpokeContent: SpokeData = {
  h1: '임산부 친환경농산물 신청방법, 에코몰·주민센터·자격검증 절차 안내',
  breadcrumb: '신청방법에코몰주민센터자격검증절차',
  description:
    '임산부 친환경농산물 신청: 에코몰(ecoemall.com) 온라인 또는 주민센터 방문. 비대면 자격검증 서류 간소화. 신청→자격확인→꾸러미 주문→배송 4단계 절차.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '에코몰 회원가입은 무료인가요?',
      a: '에코몰(ecoemall.com) 회원가입은 무료입니다. 임산부 자격을 인증받으면 정부 지원 혜택이 적용된 꾸러미를 주문할 수 있습니다.',
      source: '농림축산식품부',
      sourceUrl: 'https://www.mafra.go.kr',
    },
    {
      q: '주민센터에서 신청하면 에코몰을 따로 가입해야 하나요?',
      a: '주민센터 방문 신청 시 에코몰 계정을 발급받을 수 있습니다. 이후 에코몰에서 꾸러미를 직접 주문해야 배송이 시작됩니다.',
      source: '농림축산식품부',
      sourceUrl: 'https://www.mafra.go.kr',
    },
    {
      q: '자격검증이 완료되는 데 얼마나 걸리나요?',
      a: '비대면 자격검증 시스템을 통해 통상 1~3 영업일 내에 처리됩니다. 서류 이상이나 추가 확인이 필요한 경우 시간이 더 소요될 수 있습니다.',
      source: '농림축산식품부',
      sourceUrl: 'https://www.mafra.go.kr',
    },
    {
      q: '신청 후 꾸러미 업체를 변경할 수 있나요?',
      a: '에코몰에서 등록된 업체 중 원하는 곳을 선택해 주문할 수 있으며, 주문마다 업체를 변경하는 것도 가능합니다. 단, 이미 진행 중인 주문은 취소 후 재주문해야 합니다.',
      source: '농림축산식품부',
      sourceUrl: 'https://www.mafra.go.kr',
    },
    {
      q: '신청 기간이 따로 있나요?',
      a: '에코몰 신청은 연중 가능하지만 지자체 예산 한도 내에서 선착순으로 운영됩니다. 지역마다 예산 소진 시기가 다르므로 임신·출산 후 가능한 빨리 신청하는 것이 좋습니다.',
      source: '농림축산식품부',
      sourceUrl: 'https://www.mafra.go.kr',
    },
  ],
  sources: [
    { name: '농림축산식품부 임산부 친환경농산물', url: 'https://www.mafra.go.kr' },
    { name: '에코몰(ecoemall.com)', url: 'https://www.ecoemall.com' },
  ],
};
