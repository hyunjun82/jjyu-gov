import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          보호자가 없거나 가출한 청소년도 위기청소년 특별지원을 신청할 수 있습니다.
          ☎ <strong>1388</strong>에 전화하면 24시간 상담을 통해 신청 절차를 안내받을 수 있으며,
          <strong>비밀이 보장</strong>됩니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "집에서 나왔는데 부모님이 도움을 안 줘요. 저도 위기청소년 지원을 받을 수 있나요?"
        보호자 없는 청소년이 신청하는 절차를 정리했습니다.
      </p>

      <section className="detail-card" id="who">
        <h2 className="detail-card-head">보호자 없는 청소년도 해당되는 위기 유형</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>위기 유형</th><th>지원 가능 여부</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>가출 청소년 (가정 이탈)</td>
                <td><strong>가능</strong></td>
              </tr>
              <tr>
                <td>보호자가 실질적 보호를 못 하는 경우</td>
                <td><strong>가능</strong></td>
              </tr>
              <tr>
                <td>가정 해체 (이혼·사망 등)</td>
                <td><strong>가능</strong></td>
              </tr>
              <tr>
                <td>학대 피해 청소년</td>
                <td><strong>가능</strong></td>
              </tr>
              <tr>
                <td>은둔형 외톨이 (가족 있어도)</td>
                <td><strong>가능</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="process">
        <h2 className="detail-card-head">신청 절차</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>① 1388 전화:</strong> 24시간 운영. 전화 한 통으로 상담 후 신청 방향 결정.
            신원을 밝히지 않아도 상담 가능합니다.
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>② 청소년상담복지센터 방문:</strong> 전국 시·군·구에 설치. 청소년 혼자
            방문 가능. 상담사가 위기 유형 확인 후 지원 연계.
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>③ 서류 지원:</strong> 보호자가 없어 서류 준비가 어려운 경우, 센터에서
            지원 방법을 안내합니다.
          </div>
          <div className="info-box">
            <strong>④ 지원 연계:</strong> 생활지원(월 65만원), 의료지원(연 200만원) 등
            필요한 분야에 연계됩니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="privacy">
        <h2 className="detail-card-head">비밀 보장</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            1388 상담 내용은 비밀이 보장됩니다. 부모님이나 학교에 알리지 않아도 됩니다.
          </div>
          <div className="info-box">
            단, 청소년의 생명이나 안전이 위협받는 상황에서는 관계 기관에 알릴 수 있습니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            지원 금액, 학교 밖 청소년 해당 여부 등<br />
            위기청소년 특별지원 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/crisis-youth-support" className="btn-cta">
            위기청소년 특별지원 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 위기청소년보호자없는청소년SpokeContent: SpokeData = {
  h1: '보호자가 없거나 가출한 청소년이라면 위기청소년 특별지원을 신청하는 방법',
  breadcrumb: '보호자없는청소년',
  description:
    '가출·학대·가정해체 청소년 위기청소년 특별지원 가능. 1388 24시간 비밀 상담 신청. 청소년 혼자 방문 가능. 생활지원 월 65만원 의료지원 연 200만원 등.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '부모가 없어도 위기청소년 특별지원을 신청할 수 있나요?',
      a: '네, 보호자가 없거나 실질적인 보호를 받지 못하는 청소년도 신청할 수 있습니다. 1388에 전화하거나 청소년상담복지센터를 방문하세요.',
      source: '여성가족부',
      sourceUrl: 'https://www.mogef.go.kr',
    },
    {
      q: '1388은 언제 전화할 수 있나요?',
      a: '24시간 365일 운영됩니다. 신원을 밝히지 않아도 상담이 가능합니다.',
      source: '청소년 전화 1388',
      sourceUrl: 'https://www.cyber1388.kr',
    },
    {
      q: '상담 내용이 부모님이나 학교에 알려지나요?',
      a: '원칙적으로 비밀이 보장됩니다. 단, 생명·안전이 위협받는 상황에서는 관계 기관에 알릴 수 있습니다.',
      source: '여성가족부',
      sourceUrl: 'https://www.mogef.go.kr',
    },
    {
      q: '가출 청소년도 지원을 받을 수 있나요?',
      a: '네, 가출 청소년은 위기청소년 유형에 해당합니다. 1388에 연락하면 지원 연계를 받을 수 있습니다.',
      source: '여성가족부',
      sourceUrl: 'https://www.mogef.go.kr',
    },
    {
      q: '서류 준비가 어려우면 어떻게 하나요?',
      a: '보호자가 없어 서류 준비가 어려운 경우 청소년상담복지센터에서 지원 방법을 안내합니다.',
      source: '여성가족부',
      sourceUrl: 'https://www.mogef.go.kr',
    },
  ],
  sources: [
    { name: '여성가족부', url: 'https://www.mogef.go.kr' },
    { name: '청소년 전화 1388', url: 'https://www.cyber1388.kr' },
    { name: '복지로', url: 'https://www.bokjiro.go.kr' },
  ],
};
