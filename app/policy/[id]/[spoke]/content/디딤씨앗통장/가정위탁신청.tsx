import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          가정위탁 아동도 디딤씨앗통장 가입 대상입니다.
          위탁아동은 <strong>일반 위탁아동과 기초수급 위탁아동 모두</strong> 가입할 수 있으며,
          신청은 <strong>위탁 가정의 주소지 읍·면·동 주민센터</strong>에서 합니다.
          시설 아동과 동일하게 <strong>정부 1:2 매칭</strong>이 적용됩니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "위탁가정에서 아이를 키우고 있는데 디딤씨앗통장을 신청할 수 있나요?"
        가정위탁 아동의 신청 자격과 방법을 정리했습니다.
      </p>

      <section className="detail-card" id="foster-eligibility">
        <h2 className="detail-card-head">가정위탁 아동 디딤씨앗통장 신청 자격과 방법</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>구분</th><th>가정위탁 아동</th><th>시설 아동</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>가입 자격</td>
                <td>✅ 가능 (위탁아동 전체)</td>
                <td>✅ 가능 (시설 보호아동 전체)</td>
              </tr>
              <tr>
                <td>정부 매칭</td>
                <td>1:2 (월 최대 10만원)</td>
                <td>1:2 (월 최대 10만원)</td>
              </tr>
              <tr>
                <td>신청처</td>
                <td>위탁 가정 주소지 주민센터</td>
                <td>시설 담당자 통해 신청</td>
              </tr>
              <tr>
                <td>통장 명의</td>
                <td>아동 본인 명의</td>
                <td>아동 본인 명의</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="apply-documents">
        <h2 className="detail-card-head">신청 시 필요 서류</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>① 가정위탁 확인서:</strong> 아동권리보장원 또는 지자체에서 발급한 위탁 결정 서류
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>② 아동 기본증명서:</strong> 주민등록 또는 가족관계증명서
          </div>
          <div className="info-box">
            <strong>③ 위탁 보호자 신분증:</strong> 위탁부모 신분증 지참
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="usage">
        <h2 className="detail-card-head">만기 후 자립 지원금 사용 범위</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>주거:</strong> 전세·월세 보증금, 주택 구입
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>교육:</strong> 대학 등록금, 직업훈련비
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>의료:</strong> 본인 및 가족 의료비
          </div>
          <div className="info-box">
            <strong>창업:</strong> 사업 초기 비용
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            매칭 구조, 가입 자격, 해지 조건 등<br />
            디딤씨앗통장 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/child-development-account" className="btn-cta">
            디딤씨앗통장 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 디딤씨앗가정위탁SpokeContent: SpokeData = {
  h1: '가정위탁 아동 디딤씨앗통장 신청 자격과 방법',
  breadcrumb: '가정위탁신청',
  description:
    '가정위탁 아동도 디딤씨앗통장 가입 가능. 시설 아동과 동일하게 1:2 정부 매칭(월 최대 10만원) 적용. 위탁 가정 주소지 주민센터에서 가정위탁 확인서 등 서류 지참 신청. 만 18세까지 유지.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '위탁 가정 아동도 디딤씨앗통장을 신청할 수 있나요?',
      a: '네. 가정위탁 아동은 시설 아동과 동일하게 디딤씨앗통장에 가입할 수 있습니다. 동일한 1:2 정부 매칭이 적용됩니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '어디서 신청하나요?',
      a: '위탁 가정의 주소지 읍·면·동 주민센터에서 신청합니다. 가정위탁 확인서와 아동 기본증명서, 위탁부모 신분증을 지참해야 합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '가정위탁 확인서는 어디서 받나요?',
      a: '아동권리보장원 또는 거주 지자체 아동복지 담당부서에서 발급받을 수 있습니다.',
      source: '아동권리보장원',
      sourceUrl: 'https://www.ncrc.or.kr',
    },
    {
      q: '위탁 해제 후 통장은 어떻게 되나요?',
      a: '위탁이 해제되고 아동이 시설로 이동하거나 가정복귀하더라도 기존 가입된 디딤씨앗통장은 만 18세까지 유지됩니다. 담당 주민센터에 상황 변경을 알리세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '만기 후 자립 지원금은 어디에 쓸 수 있나요?',
      a: '주거(전·월세 보증금, 주택 구입), 교육(등록금, 직업훈련), 의료비, 창업 비용 등 자립 목적으로만 사용할 수 있습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
  ],
  sources: [
    { name: '보건복지부', url: 'https://www.mohw.go.kr' },
    { name: '아동권리보장원', url: 'https://www.ncrc.or.kr' },
  ],
};
