import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      {/* 빠른 답변 */}
      <div className="answer-box">
        <p>
          기초생활수급자인 한부모가족은 <strong>아동양육비 중복수급이 불가</strong>합니다.
          기초급여에 양육비 성격의 금액이 포함되어 있기 때문입니다.
          단, <strong>아동수당(월 10만원, 만 8세 미만)</strong>과
          <strong>교육급여·의료급여</strong> 등 별도 급여는 중복 수령이 가능합니다.
        </p>
      </div>

      {/* 서론 */}
      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        기초생활수급자로 지정된 한부모가족이라면 한부모 지원과 중복해서 받을 수 있는 것과
        받을 수 없는 것을 명확히 구분해야 불이익 없이 최대 혜택을 누릴 수 있습니다.
        아래 표로 항목별 중복 여부를 한눈에 확인하세요.
      </p>

      {/* H2-1: 중복 수급 가능 여부 표 */}
      <section className="detail-card" id="overlap-table">
        <h2 className="detail-card-head">항목별 중복수급 가능 여부</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr>
                <th>지원 항목</th>
                <th>기초수급자 중복</th>
                <th>비고</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>아동양육비(한부모)</td>
                <td><strong style={{ color: '#c0392b' }}>불가</strong></td>
                <td>생계급여에 포함된 것으로 간주</td>
              </tr>
              <tr>
                <td>아동수당(만 8세 미만 월 10만원)</td>
                <td><strong style={{ color: '#27ae60' }}>가능</strong></td>
                <td>소득·수급 여부 무관 지급</td>
              </tr>
              <tr>
                <td>교육급여(한부모 학비)</td>
                <td><strong style={{ color: '#27ae60' }}>가능</strong></td>
                <td>교육급여와 별도 지원</td>
              </tr>
              <tr>
                <td>의료급여</td>
                <td><strong style={{ color: '#27ae60' }}>가능</strong></td>
                <td>기초수급 의료급여 유지</td>
              </tr>
              <tr>
                <td>주거급여</td>
                <td><strong style={{ color: '#27ae60' }}>가능</strong></td>
                <td>한부모 주거 지원과 별도</td>
              </tr>
              <tr>
                <td>차상위계층 혜택</td>
                <td><strong style={{ color: '#27ae60' }}>가능</strong></td>
                <td>기초수급 탈락 후 전환 시</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box">
            <strong>핵심 원칙:</strong> 같은 목적의 급여(양육비 성격)는 중복 지급 불가.
            목적이 다른 급여(교육·의료·주거)는 중복 지급 가능.
            아동수당은 보편 수당이므로 수급 여부와 무관하게 받습니다.
          </div>
        </div>
      </section>

      {/* H2-2: 기초수급 탈락 시 전환 */}
      <section className="detail-card" id="transition">
        <h2 className="detail-card-head">기초수급 탈락 시 한부모 지원으로 전환</h2>
        <div className="detail-card-body">
          <p style={{ fontSize: 15, lineHeight: 1.8, margin: '0 0 16px' }}>
            소득이 올라 기초생활수급자에서 탈락해도, 한부모가족 소득 기준을 충족하면
            한부모가족 지원으로 자동 전환을 신청할 수 있습니다.
          </p>
          <table className="compare-table">
            <thead>
              <tr>
                <th>구분</th>
                <th>기초생활수급자</th>
                <th>한부모가족 지원</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>소득 기준</td>
                <td>중위소득 30~50%</td>
                <td>중위소득 65% 이하</td>
              </tr>
              <tr>
                <td>아동양육비</td>
                <td>생계급여 포함</td>
                <td>월 23만원 별도 지급</td>
              </tr>
              <tr>
                <td>주거 지원</td>
                <td>주거급여</td>
                <td>공공임대 우선 공급</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box">
            <strong>전환 신청 시기:</strong> 기초수급 탈락 통보를 받은 후
            30일 이내에 주민센터에 한부모가족 지원 신청을 하면 공백 없이 이어받을 수 있습니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      {/* H2-3: 차상위계층 동시 수급 */}
      <section className="detail-card" id="near-poor">
        <h2 className="detail-card-head">차상위계층이면 한부모 + 차상위 동시 가능</h2>
        <div className="detail-card-body">
          <p style={{ fontSize: 15, lineHeight: 1.8, margin: '0 0 16px' }}>
            기초생활수급자에서 벗어나 차상위계층(중위소득 50% 이하)에 해당하면,
            한부모가족 지원과 차상위계층 혜택을 <strong>동시에</strong> 받을 수 있습니다.
          </p>
          <div className="info-box">
            <strong>차상위 + 한부모 동시 가능 항목:</strong>
            <ul style={{ listStyle: 'disc', paddingLeft: 20, marginTop: 8, lineHeight: 2 }}>
              <li>한부모 아동양육비(월 23만원)</li>
              <li>차상위 의료비 지원</li>
              <li>차상위 교육비 지원</li>
              <li>차상위 문화누리카드</li>
              <li>아동수당(만 8세 미만)</li>
            </ul>
          </div>
          <p style={{ fontSize: 15, lineHeight: 1.8, margin: '16px 0 0' }}>
            단, 같은 항목을 두 제도에서 중복으로 지급받는 것은 불가합니다.
            예를 들어 차상위 교육비와 한부모 학비 지원이 겹치는 경우, 더 유리한 쪽을 선택합니다.
          </p>
        </div>
      </section>

      {/* H2-4: 신청 및 확인 방법 */}
      <section className="detail-card" id="check">
        <h2 className="detail-card-head">내 중복 수급 가능 항목 확인하는 방법</h2>
        <div className="detail-card-body">
          <ol style={{ listStyle: 'decimal', paddingLeft: 20, lineHeight: 2.2 }}>
            <li>
              <strong>복지로(bokjiro.go.kr):</strong> 복지서비스 모의계산 → 한부모·기초수급 동시 조회
            </li>
            <li>
              <strong>주민센터 방문:</strong> 사회복지 담당자가 내 상황에 맞는 항목을 직접 안내
            </li>
            <li>
              <strong>복지 상담 전화:</strong> ☎129(보건복지상담센터), 평일 24시간 운영
            </li>
          </ol>
          <div className="info-box">
            <strong>팁:</strong> 복지로 로그인 후 &quot;나의 복지급여&quot;에서 현재 수급 중인 항목을
            확인하고, 추가 신청 가능한 서비스를 한눈에 볼 수 있습니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      {/* CTA */}
      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            한부모가족 지원 전체 항목과 소득 기준, 신청 방법을 한 번에 확인하세요.
          </p>
          <a href="/policy/low-income-single-parent" className="btn-cta">한부모가족지원 전체 정보 보기 →</a>
        </div>
      </section>
    </>
  );
}

export const 한부모가족지원중복수급기초수급동시가능여부SpokeContent: SpokeData = {
  h1: '한부모가족 지원과 기초생활수급자 중복수급 가능 여부',
  breadcrumb: '중복수급기초수급동시가능여부',
  description:
    '기초생활수급자인 한부모가족은 아동양육비 중복수급이 불가합니다. 아동수당·교육급여·의료급여는 중복 가능. 기초수급 탈락 시 한부모 지원으로 전환 방법과 차상위 동시 수급 항목을 정리했습니다.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '기초생활수급자인데 한부모가족 아동양육비를 따로 받을 수 있나요?',
      a: '불가합니다. 기초생활수급자는 생계급여에 양육비 성격의 지원이 포함되어 있어, 한부모가족 아동양육비를 중복으로 수령할 수 없습니다.',
      source: '여성가족부 한부모가족 지원사업 안내',
      sourceUrl: 'https://www.mogef.go.kr',
    },
    {
      q: '아동수당은 기초수급자도 받을 수 있나요?',
      a: '네, 아동수당(만 8세 미만, 월 10만원)은 소득이나 수급 여부와 관계없이 모든 아동에게 지급됩니다. 기초수급자·한부모가족 모두 중복 수령이 가능합니다.',
      source: '보건복지부 아동수당 안내',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '소득이 올라 기초수급에서 탈락하면 한부모 지원이 자동으로 전환되나요?',
      a: '자동 전환이 아닙니다. 탈락 통보 후 30일 이내에 주민센터에 한부모가족 지원 신청을 별도로 해야 합니다. 소득이 중위소득 63% 이하라면 전환 가능합니다.',
      source: '여성가족부 한부모가족 지원사업 안내',
      sourceUrl: 'https://www.mogef.go.kr',
    },
    {
      q: '차상위계층 한부모가족이면 어떤 혜택을 동시에 받을 수 있나요?',
      a: '차상위 의료비, 교육비, 문화누리카드와 한부모 아동양육비(월 23만원)를 동시에 받을 수 있습니다. 같은 목적의 중복 지급만 불가능하고, 다른 목적의 혜택은 중복 가능합니다.',
      source: '보건복지부 차상위계층 지원 안내',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '내가 받을 수 있는 중복 항목을 어디서 확인하나요?',
      a: '복지로(bokjiro.go.kr)에서 복지서비스 모의계산을 이용하거나, 주민센터 사회복지 담당자 또는 복지 상담 전화 ☎129를 통해 확인할 수 있습니다.',
      source: '복지로 서비스 안내',
      sourceUrl: 'https://www.bokjiro.go.kr',
    },
  ],
  sources: [
    { name: '여성가족부 한부모가족 지원사업 안내', url: 'https://www.mogef.go.kr' },
    { name: '복지로 한부모가족 지원 서비스 안내', url: 'https://www.bokjiro.go.kr' },
  ],
};
