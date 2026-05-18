import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          꿈사다리 장학금과 드림장학금은 모두 저소득층 학생을 지원하지만
          <strong>대상 학년과 목적이 다른 별개의 제도</strong>입니다.
          꿈사다리는 <strong>초5~고3 국내 연계 장학금</strong>이고,
          드림장학금은 <strong>고2~3 해외유학 전문 장학금</strong>입니다.
          두 제도를 동시에 수령하려면 중복 여부를 사전에 확인해야 합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        이름이 비슷해 혼동하기 쉬운 두 장학금을 명확히 비교합니다.
        본인의 상황에 맞는 장학금을 선택하세요.
      </p>

      <section className="detail-card" id="compare">
        <h2 className="detail-card-head">꿈사다리 장학금 vs 드림장학금 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>꿈사다리 장학금</th><th>드림장학금</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>대상 학년</strong></td><td>초5 ~ 고3</td><td>고2 ~ 고3</td></tr>
              <tr><td><strong>목적</strong></td><td>국내 대학까지 연계 지원</td><td>해외유학 기회 제공</td></tr>
              <tr><td><strong>소득 기준</strong></td><td>기초·차상위</td><td>기초·차상위</td></tr>
              <tr><td><strong>지원 내용</strong></td><td>학업장려비 + 멘토링 + 대학 연계</td><td>월 50~70만원 + 멘토링 + 유학 정보</td></tr>
              <tr><td><strong>선발 인원</strong></td><td>약 3,000명</td><td>소수 선발</td></tr>
              <tr><td><strong>주관</strong></td><td>교육부·한국장학재단</td><td>교육부·한국장학재단</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="choice">
        <h2 className="detail-card-head">상황별 선택 기준</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>국내 대학 진학 목표:</strong> 꿈사다리 장학금 (초등~대학 연계)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>해외유학 목표:</strong> 드림장학금 (고2~3, 월 학업장려비)
          </div>
          <div className="info-box">
            <strong>중복 수령:</strong> 사전에 한국장학재단에 중복 여부 확인 필수
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="tip">
        <h2 className="detail-card-head">신청 전 확인사항</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>꿈사다리 신청:</strong> 복지로(bokjiro.go.kr) 또는 한국장학재단
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>드림장학금 신청:</strong> 한국장학재단 누리집(kosaf.go.kr), 매년 3~4월 공고
          </div>
          <div className="info-box">
            <strong>공통 조건:</strong> 기초생활수급자 또는 차상위계층 증명서 필요
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            드림장학금 신청 자격, 지원 내용, 멘토링 안내까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/dream-scholarship" className="btn-cta">
            드림장학금 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 드림장학금꿈사다리드림장학금비교SpokeContent: SpokeData = {
  h1: '꿈사다리 장학금과 드림장학금 어떻게 다른가, 학년과 대상 기준 비교',
  breadcrumb: '꿈사다리드림장학금비교',
  description:
    '꿈사다리 장학금(초5~고3 국내 연계)과 드림장학금(고2~3 해외유학 전문)은 별개 제도. 국내 대학 목표는 꿈사다리, 해외유학 목표는 드림장학금. 소득 기준 동일(기초·차상위). 중복 여부 사전 확인 필요.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '꿈사다리 장학금과 드림장학금을 동시에 받을 수 있나요?',
      a: '동시 수령 가능 여부는 한국장학재단에 사전 확인이 필요합니다. 동일 소득 기준을 쓰는 두 제도이므로 중복 지원 시 제한이 있을 수 있습니다.',
      source: '교육부·한국장학재단',
      sourceUrl: 'https://www.kosaf.go.kr',
    },
    {
      q: '두 장학금의 가장 큰 차이는 무엇인가요?',
      a: '꿈사다리 장학금은 초등학교 5학년부터 대학까지 국내 연계 지원이고, 드림장학금은 고2~3 학생을 대상으로 해외유학을 지원하는 전문 장학금입니다.',
      source: '교육부·한국장학재단',
      sourceUrl: 'https://www.kosaf.go.kr',
    },
    {
      q: '초등학생이라면 드림장학금을 신청할 수 없나요?',
      a: '드림장학금은 고등학교 2~3학년 대상입니다. 초등학생은 꿈사다리 장학금(초5부터)을 신청하세요.',
      source: '교육부·한국장학재단',
      sourceUrl: 'https://www.kosaf.go.kr',
    },
    {
      q: '해외유학을 목표로 하는 고2라면 어떤 장학금이 더 유리한가요?',
      a: '해외유학이 목표라면 드림장학금이 더 적합합니다. 월 학업장려비 외에 유학 설명회·1:1 멘토링 등 유학 준비에 특화된 지원이 포함됩니다.',
      source: '교육부·한국장학재단',
      sourceUrl: 'https://www.kosaf.go.kr',
    },
    {
      q: '꿈사다리 장학금을 받다가 드림장학금으로 전환할 수 있나요?',
      a: '두 제도는 별개로 운영됩니다. 꿈사다리 수령 중 드림장학금 신청이 가능한지는 한국장학재단에 문의하여 확인하세요.',
      source: '한국장학재단',
      sourceUrl: 'https://www.kosaf.go.kr',
    },
  ],
  sources: [
    { name: '교육부', url: 'https://www.moe.go.kr' },
    { name: '한국장학재단', url: 'https://www.kosaf.go.kr' },
    { name: '복지로', url: 'https://www.bokjiro.go.kr' },
  ],
};
