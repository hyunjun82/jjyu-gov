/* ── 전체 196개 정책 마스터 데이터 ──
 * 소스: K-공감 gonggam.korea.kr/pubSpecial.es (2026.03)
 * 각 정책의 상세 데이터는 개별 파일에서 관리
 */

export interface PolicyMeta {
  id: string;
  title: string;
  category: string;
  categorySlug: string;
  sourceUrl: string;
  status: 'draft' | 'published';
}

/* ── 카테고리 정의 ── */
export const categories = {
  'new-2026': { label: '2026 신규 민생지원 제도', group: '따뜻한 동행' },
  'local': { label: '지방우대 패키지', group: '따뜻한 동행' },
  'hidden': { label: '숨은 정부지원금 찾기', group: '따뜻한 동행' },
  'child-youth': { label: '아동·청소년', group: '생애주기별' },
  'youth-college': { label: '청년·대학생', group: '생애주기별' },
  'senior': { label: '어르신', group: '생애주기별' },
  'family-women': { label: '가족·여성', group: '생애주기별' },
  'vulnerable': { label: '취약계층', group: '분야별' },
  'disabled': { label: '장애인', group: '분야별' },
  'employment': { label: '고용·취업·창업', group: '분야별' },
  'housing': { label: '주거', group: '분야별' },
  'culture': { label: '문화', group: '분야별' },
  'health-safety': { label: '건강·안전', group: '분야별' },
} as const;

/* ── 전체 정책 목록 ── */
export const allPolicies: PolicyMeta[] = [
  // ═══ 2026 신규 민생지원 제도 (10개) ═══
  { id: 'new-01', title: '유아 단계적 무상교육·보육', category: 'new-2026', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=6f1126e8-f34d-4a98-88b2-3b1f004ffc38', status: 'draft' },
  { id: 'new-02', title: '참전유공자 등 생계지원금 지급', category: 'new-2026', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=38c39d94-8d4d-44cc-83c5-d5e6c900702c', status: 'draft' },
  { id: 'new-03', title: '새도약기금', category: 'new-2026', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=10d3c298-76ae-4292-bdb6-b3d0b3a80f99', status: 'draft' },
  { id: 'new-04', title: '새도약론', category: 'new-2026', categorySlug: 'loan', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=800910d4-bb57-4722-8c9f-0cf1c6cf5088', status: 'draft' },
  { id: 'new-05', title: '청년미래적금', category: 'new-2026', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=f5807e51-334d-4354-b315-854ecb35b5fb', status: 'draft' },
  { id: 'new-06', title: '장기간부 도약적금', category: 'new-2026', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=0f226a1f-bd45-45cb-aa0e-b455ac3fe78d', status: 'draft' },
  { id: 'new-07', title: '범죄피해구조금 확대', category: 'new-2026', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=ed441314-6c39-4f90-8864-ceef7450ed3b', status: 'draft' },
  { id: 'new-08', title: '범죄피해자 긴급 생활안정비', category: 'new-2026', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=ff98b396-4028-4107-a624-18bc927a5dfc', status: 'draft' },
  { id: 'new-09', title: '중소기업 직장인 든든한 한 끼', category: 'new-2026', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=cc9952c9-edbb-470f-bfb6-f4a2a4348fd4', status: 'draft' },
  { id: 'new-10', title: '보호대상아동 민간후원 장학사업', category: 'new-2026', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=4db4a789-a8e3-4e79-a443-5e67193b6148', status: 'draft' },

  // ═══ 지방우대 패키지 (9개) ═══
  { id: 'local-01', title: '농어촌 기본소득 시범사업', category: 'local', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=b425a7c2-5056-4864-b877-654938dc60df', status: 'draft' },
  { id: 'local-02', title: '고령자 계속고용 장려금 비수도권기업 지원 확대', category: 'local', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=c39acd7e-f7c5-4e3f-b2dd-75c347a01188', status: 'draft' },
  { id: 'local-03', title: '노인 일자리 및 사회활동 지원', category: 'local', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=4dcbe9fd-cdd7-4417-b735-b1d839b5b888', status: 'draft' },
  { id: 'local-04', title: '국민내일배움카드', category: 'local', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=13a89a08-db98-4790-88ef-48c809ce264d', status: 'draft' },
  { id: 'local-05', title: '지역사랑상품권', category: 'local', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=ddf29168-5207-4599-9def-94de87e73449', status: 'draft' },
  { id: 'local-06', title: '창업사업화지원(초기·도약패키지)', category: 'local', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=2b097cb4-86a5-48a1-ac93-81eacbe78437', status: 'draft' },
  { id: 'local-07', title: '중소기업 혁신바우처 지원', category: 'local', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=6893e1f8-0500-4281-9607-1eb622a4fafa', status: 'draft' },
  { id: 'local-08', title: '팁스(TIPS)', category: 'local', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=22169f2a-86ef-4b5a-98fa-5e1eb1157585', status: 'draft' },
  { id: 'local-09', title: '청년 일자리 도약장려금 비수도권 우대지원', category: 'local', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=d0f4f480-56e9-42aa-9638-a338ebe50455', status: 'draft' },

  // ═══ 숨은 정부지원금 찾기 (17개) ═══
  { id: 'hidden-01', title: '기본형 공익직불제', category: 'hidden', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=001e3b6b-fe8c-430a-a471-f874f0f7876e', status: 'draft' },
  { id: 'hidden-02', title: '장애수당', category: 'hidden', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=838fc92a-4c18-4b5d-950b-5a24ce2f43af', status: 'draft' },
  { id: 'hidden-03', title: '장애인연금', category: 'hidden', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=f354f59f-4a73-46e1-b304-7fcb86fc35c3', status: 'draft' },
  { id: 'hidden-04', title: '저소득 지역가입자 보험료 지원', category: 'hidden', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=ed8abecb-39cc-41b2-b0d7-0242a0dddb2b', status: 'draft' },
  { id: 'hidden-05', title: '독거노인·장애인 응급안전안심서비스', category: 'hidden', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=9c31d321-3cca-423e-acff-24ea72b5c563', status: 'draft' },
  { id: 'hidden-06', title: '여성청소년 생리용품 지원', category: 'hidden', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=df0f9420-11d0-4116-83ac-ac31b17a5a6c', status: 'draft' },
  { id: 'hidden-07', title: '청소년복지시설 퇴소청소년 자립지원수당', category: 'hidden', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=6a8e39bf-a3d1-451e-b321-9b6f68584596', status: 'draft' },
  { id: 'hidden-08', title: '장애아동수당', category: 'hidden', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=206d7263-13f1-4622-a4c6-a802a42d18d4', status: 'draft' },
  { id: 'hidden-09', title: '위기청소년 특별지원', category: 'hidden', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=9d3efe23-d63a-46d3-a14f-679093615d9d', status: 'draft' },
  { id: 'hidden-10', title: '고용촉진장려금', category: 'hidden', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=ee490be7-5d1b-4edf-9c9a-62373c4ce283', status: 'draft' },
  { id: 'hidden-11', title: '임신 사전건강관리 지원사업', category: 'hidden', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=682fa181-f3d7-4931-93b2-8cbb89a543c6', status: 'draft' },
  { id: 'hidden-12', title: '농업인 건강·연금보험료 지원', category: 'hidden', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=1145f0d3-f9e7-4775-8d87-79fa11d62aca', status: 'draft' },
  { id: 'hidden-13', title: '영농도우미 지원', category: 'hidden', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=21c54cbe-dd5e-4b1c-a582-ced323501e22', status: 'draft' },
  { id: 'hidden-14', title: '저소득 청소년한부모 아동양육 및 자립지원', category: 'hidden', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=e82b32e9-2e2b-4ad4-b00c-c19debfbd91d', status: 'draft' },
  { id: 'hidden-15', title: '저소득 청소년부모 아동양육비 지원', category: 'hidden', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=cc2ba222-ddfc-4878-a806-397f7ea9cd6a', status: 'draft' },
  { id: 'hidden-16', title: '다문화가족 자녀 기초학습·진로설계·교육활동비', category: 'hidden', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=794cc1c5-0eb6-4cb6-bc64-f12799ae7618', status: 'draft' },
  { id: 'hidden-17', title: '예술인 국민연금 보험료 지원사업', category: 'hidden', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=6a360ca1-97df-4946-a321-7b5485a5c6ba', status: 'draft' },

  // ═══ 취약계층 (19개) ═══
  { id: 'vuln-01', title: '근로장려금·자녀장려금', category: 'vulnerable', categorySlug: 'refund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=51744239-36dd-4226-bcdd-67622e55314e', status: 'draft' },
  { id: 'vuln-02', title: '청년내일저축계좌', category: 'vulnerable', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=3976444f-26f1-4ec1-9ae1-912bcac19e2a', status: 'draft' },
  { id: 'vuln-03', title: '주택·상가건물임대차 분쟁조정위원회', category: 'vulnerable', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=45a32d79-e348-46ae-b5fb-4eeb8ad4017f', status: 'draft' },
  { id: 'vuln-04', title: '채무자 대리인(변호사) 무료 지원사업', category: 'vulnerable', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=0e943248-bcf6-4d83-b99b-7572207ed44e', status: 'draft' },
  { id: 'vuln-05', title: '무릎인공관절 지원사업', category: 'vulnerable', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=d3d62ec4-7dc5-4323-ac65-7125e65fc77d', status: 'draft' },
  { id: 'vuln-06', title: '재난적 의료비 지원사업', category: 'vulnerable', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=7ca93cc6-54b9-4f88-ba9d-568d8c8a1f36', status: 'draft' },
  { id: 'vuln-07', title: '법률구조 제도', category: 'vulnerable', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=c69aed3d-7820-46c0-970e-702cbbc47bbc', status: 'draft' },
  { id: 'vuln-08', title: '서민금융통합지원센터', category: 'vulnerable', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=01de7efc-782d-433d-b0a8-335b4dcf2037', status: 'draft' },
  { id: 'vuln-09', title: '에너지바우처', category: 'vulnerable', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=c1a48fdc-00ac-40e6-a62d-16d9bb359e08', status: 'draft' },
  { id: 'vuln-10', title: '기초연금', category: 'vulnerable', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=a76bb990-b0ff-4c19-9a52-631bde93eebb', status: 'published' },
  { id: 'vuln-11', title: '불법사금융예방대출', category: 'vulnerable', categorySlug: 'loan', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=aa41b56c-fabe-4291-b972-5a2f696eb525', status: 'draft' },
  { id: 'vuln-12', title: '기초생활수급자 생계급여', category: 'vulnerable', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=a345a5f3-069e-4eb7-9404-2b19ab4fcd86', status: 'draft' },
  { id: 'vuln-13', title: '디딤씨앗통장', category: 'vulnerable', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=155cf633-18b1-48d5-9715-66dd00673616', status: 'draft' },
  { id: 'vuln-14', title: '모두의 카드(K-패스)', category: 'vulnerable', categorySlug: 'refund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=288d790b-147a-42fb-ac86-d1042418f22c', status: 'draft' },
  { id: 'vuln-15', title: '저소득층 에너지 효율 개선사업', category: 'vulnerable', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=4dbe147f-f1c6-49f1-9939-08b92500e0ab', status: 'draft' },
  { id: 'vuln-16', title: 'EERS 취약계층 가정용 가스보일러 및 단열강화 지원', category: 'vulnerable', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=ac0721d1-efb6-4a4a-867a-fff7843ac9d5', status: 'draft' },
  { id: 'vuln-17', title: '전기요금 복지할인 대상 취약계층 고효율가전 구매지원', category: 'vulnerable', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=2b13e8a1-10a5-47b7-9716-653f34b30384', status: 'draft' },
  { id: 'vuln-18', title: '에너지 취약계층 고효율 조명기기 무상교체', category: 'vulnerable', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=cfdb420c-2352-4be6-9e54-0f3ab2490b35', status: 'draft' },
  { id: 'vuln-19', title: '전국 냉·난방비 지원기관 안내', category: 'vulnerable', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=9827df4a-f94b-46d7-9630-ffad8876edb7', status: 'draft' },

  // ═══ 아동·청소년 (20개) ═══
  { id: 'child-01', title: '첫만남 이용권', category: 'child-youth', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=84a4cbae-5c5f-4cd0-9e62-ecea91f37fbe', status: 'draft' },
  { id: 'child-02', title: '3~5세 유치원 학비', category: 'child-youth', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=a92b079c-6d2a-4be0-8837-10fe7971039b', status: 'draft' },
  { id: 'child-03', title: '산모·신생아 건강관리', category: 'child-youth', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=8e96a99d-c856-44d2-a768-76d4fb1abb8e', status: 'draft' },
  { id: 'child-04', title: '영유아 건강검진', category: 'child-youth', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=4f8b9215-1b65-4e71-be73-265ea6ed6d09', status: 'draft' },
  { id: 'child-05', title: '초·중·고 학생 교육정보화 지원(PC, 인터넷 통신비)', category: 'child-youth', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=30127e7e-931f-4ae5-8d6e-4fdbec209516', status: 'draft' },
  { id: 'child-06', title: '온동네 초등돌봄·교육', category: 'child-youth', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=6eafadf6-64ef-46f0-8be0-0ff007b59c5b', status: 'draft' },
  { id: 'child-07', title: '가족돌봄휴가', category: 'child-youth', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=02101b6a-42df-48d4-a4d3-c650305afa5c', status: 'draft' },
  { id: 'child-08', title: '지역 아동센터', category: 'child-youth', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=6cec37cc-1916-4fef-a414-dce75c419885', status: 'draft' },
  { id: 'child-09', title: '저소득 한부모가족 아동양육비', category: 'child-youth', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=03c212e4-765c-4c95-bc80-6f0aeee6a49a', status: 'draft' },
  { id: 'child-10', title: '그 밖의 연장형 보육료 지원', category: 'child-youth', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=d72be785-4c2d-4b13-89d8-b0bb41cb518d', status: 'draft' },
  { id: 'child-11', title: '가족돌봄휴직', category: 'child-youth', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=e89d4ce2-a7a1-418a-9fee-9ae9bd21619d', status: 'draft' },
  { id: 'child-12', title: '가정 밖 청소년 지원', category: 'child-youth', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=8172e659-4080-4984-8e61-fd5db08464de', status: 'draft' },
  { id: 'child-13', title: '학교 밖 청소년 지원', category: 'child-youth', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=23ae1c41-bef7-4a5b-a556-31cec7648dda', status: 'draft' },
  { id: 'child-14', title: '복권기금 꿈사다리 장학사업', category: 'child-youth', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=34e4d468-7b00-455a-b30e-50d8a8f2368b', status: 'draft' },
  { id: 'child-15', title: '드림장학금(우수고등학생 해외유학장학금)', category: 'child-youth', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=8542fef7-82f2-4685-9f45-86765d0add08', status: 'draft' },
  { id: 'child-16', title: '고립·은둔 청소년 원스톱 패키지 지원', category: 'child-youth', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=b0a76f4d-cd26-4a7a-85b1-718684aefed2', status: 'draft' },
  { id: 'child-17', title: '학교 밖 청소년 자립·취업 지원', category: 'child-youth', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=e39d4b4a-3eb3-4c06-a8d8-38172c5b51ea', status: 'draft' },
  { id: 'child-18', title: '영유아보육료', category: 'child-youth', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=e4c7ef6b-3f45-4971-8b0b-8227c7bb20dd', status: 'draft' },
  { id: 'child-19', title: '인구감소지역 청소년 성장지원', category: 'child-youth', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=184b4c11-699d-4a2d-aece-a27c1a713d3a', status: 'draft' },
  { id: 'child-20', title: '방과후 보육료 지원(12세 이하 초등학교 취학아동)', category: 'child-youth', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=3c4bf282-a0d3-4cff-8ad4-3b220c648e37', status: 'draft' },

  // ═══ 청년·대학생 (12개) ═══
  { id: 'youth-01', title: '국가장학금 지원(대학생)', category: 'youth-college', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=e2d7f9e0-7de3-4ba0-a7f5-406d5d51d67a', status: 'draft' },
  { id: 'youth-02', title: '한국형 온라인 공개강좌(K-MOOC)', category: 'youth-college', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=373b7989-c94b-4927-99f9-8915a4673fee', status: 'draft' },
  { id: 'youth-03', title: '일반상환 학자금 대출', category: 'youth-college', categorySlug: 'loan', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=9c31bfaf-5947-4102-8faa-93df78277bae', status: 'draft' },
  { id: 'youth-04', title: '햇살론유스', category: 'youth-college', categorySlug: 'loan', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=5ef4cc61-57cf-4ff4-8f36-dada88f9316c', status: 'draft' },
  { id: 'youth-05', title: '해외취업지원(K-Move 스쿨)', category: 'youth-college', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=2b34ef5f-637f-4f7e-ab82-8ba318ce6ff2', status: 'draft' },
  { id: 'youth-06', title: '농촌출신대학생 학자금 대출', category: 'youth-college', categorySlug: 'loan', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=e36b33a6-c183-4cad-bd46-695fe794fee8', status: 'draft' },
  { id: 'youth-07', title: '청년창업사관학교', category: 'youth-college', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=b9e29deb-d74a-4c72-805e-f1b9365a62a1', status: 'draft' },
  { id: 'youth-08', title: '주거안정장학금', category: 'youth-college', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=65e74164-df5f-4d69-92f6-80395869f6e5', status: 'draft' },
  { id: 'youth-09', title: '청년 일자리', category: 'youth-college', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=f10f0ffd-83ac-417d-acb3-2ddd640a5f04', status: 'draft' },
  { id: 'youth-10', title: '청년 사회·복지', category: 'youth-college', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=e34e043d-996c-4bf7-9a5e-78f8a4db8c31', status: 'draft' },
  { id: 'youth-11', title: '청년 주거지원', category: 'youth-college', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=56f997b1-f1f7-4833-bc99-42e5fc57592e', status: 'draft' },
  { id: 'youth-12', title: '청년 자산형성', category: 'youth-college', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=797a62c5-9920-4013-b2dd-a3aa989d7d38', status: 'draft' },

  // ═══ 어르신 (8개) ═══
  { id: 'senior-01', title: '노인 장기요양 시설·재가서비스', category: 'senior', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=d7a96b05-6b6a-492e-abda-5e8a4c79bbff', status: 'draft' },
  { id: 'senior-02', title: '보훈 재가복지서비스 지원(노인)', category: 'senior', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=3106a469-ef2d-4718-a98a-6a722232f800', status: 'draft' },
  { id: 'senior-03', title: '의료급여수급자 노인 틀니 지원', category: 'senior', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=950d3c4b-60b0-44e5-b873-f99d4fd77182', status: 'draft' },
  { id: 'senior-04', title: '치매안심센터', category: 'senior', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=29184dac-6dbd-454f-876a-0016a1acfb13', status: 'draft' },
  { id: 'senior-05', title: '치매상담 콜센터', category: 'senior', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=520398ff-b41a-4284-816c-c037f8603206', status: 'draft' },
  { id: 'senior-06', title: '노인맞춤 돌봄서비스', category: 'senior', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=2ca40dbc-6366-4859-8ba8-400b8c62191d', status: 'draft' },
  { id: 'senior-07', title: '농지이양 은퇴 직불사업', category: 'senior', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=2c262f36-5fb5-4d09-8c9b-9a07dd01fe10', status: 'draft' },
  { id: 'senior-08', title: '고령 운전자 교통안전교육', category: 'senior', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=56e50f00-305d-44a8-bd9c-d518fb0702b0', status: 'draft' },

  // ═══ 가족·여성 (21개) ═══
  { id: 'family-01', title: '가정양육수당', category: 'family-women', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=756576ce-197d-4599-9420-b4c2cbe40a02', status: 'draft' },
  { id: 'family-02', title: '국민행복카드', category: 'family-women', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=3a19f8e4-482a-4733-9a6b-25488692d891', status: 'draft' },
  { id: 'family-03', title: '취약계층 아동통합서비스 (드림스타트)', category: 'family-women', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=d6948487-3699-44cc-b431-3d796a84db10', status: 'draft' },
  { id: 'family-04', title: '아이돌봄 서비스', category: 'family-women', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=82476ad1-9ff4-4b88-8604-28ef36fcc5e9', status: 'draft' },
  { id: 'family-05', title: '여성창업보육센터', category: 'family-women', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=0c8bed99-d19b-4bb5-a879-ceba3b4a1224', status: 'draft' },
  { id: 'family-06', title: '여성새로일하기센터', category: 'family-women', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=08e3127b-78c5-4ef4-8301-55e4bb5bf2f5', status: 'draft' },
  { id: 'family-07', title: '다함께 돌봄센터', category: 'family-women', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=ee428112-9aeb-43d0-993c-ee892bb52a4a', status: 'draft' },
  { id: 'family-08', title: '임산부 및 영유아 영양플러스', category: 'family-women', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=3073ab04-9032-41d1-8f1f-98244c6fd3a2', status: 'draft' },
  { id: 'family-09', title: '육아휴직급여+육아기 근로시간 단축급여', category: 'family-women', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=f7a257f4-8982-4a49-803c-a85551e65039', status: 'draft' },
  { id: 'family-10', title: '맘편한 임신 원스톱 서비스', category: 'family-women', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=157bf122-8fd2-48ac-aa90-12bf85675e16', status: 'draft' },
  { id: 'family-11', title: '행복출산 원스톱 서비스', category: 'family-women', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=a045eb49-e5c1-4b0d-9e35-6a8512dd315b', status: 'draft' },
  { id: 'family-12', title: '건강보험 임산·출산 진료비 지원', category: 'family-women', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=a12843bc-d874-40b7-a8bd-47f59b65a644', status: 'draft' },
  { id: 'family-13', title: '고용보험 미적용자 출산급여 지원', category: 'family-women', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=221a86d7-4002-4f5a-86f1-33ae8bbe730b', status: 'draft' },
  { id: 'family-14', title: '여성가장 창업자금지원', category: 'family-women', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=9f199d75-a0ae-4849-91fd-9ede7ba4cc45', status: 'draft' },
  { id: 'family-15', title: '부모급여', category: 'family-women', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=a649b1c7-7a65-469d-aa85-e069815b1a0d', status: 'draft' },
  { id: 'family-16', title: '한부모가족 복지시설', category: 'family-women', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=54e7cc6f-dc23-413d-b550-192b6ca33d23', status: 'draft' },
  { id: 'family-17', title: '가정폭력보호시설 퇴소자 자립지원금', category: 'family-women', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=810691c8-ccb4-44eb-8359-6fb1c1916ff2', status: 'draft' },
  { id: 'family-18', title: '출산전후(유산·사산)휴가급여+배우자 출산휴가급여+난임치료휴가급여', category: 'family-women', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=45b1e820-06d3-4828-ad6d-b206e933fd64', status: 'draft' },
  { id: 'family-19', title: '출산육아기 고용안정장려금 ① (육아휴직 지원금)', category: 'family-women', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=1e0c2f0e-a10d-461c-84a0-e300b7f0e6df', status: 'draft' },
  { id: 'family-20', title: '출산육아기 고용안정장려금 ② (대체인력지원금)', category: 'family-women', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=89f5e151-7dac-4a14-afe0-dd1be350e19a', status: 'draft' },
  { id: 'family-21', title: '출산육아기 고용안정장려금 ③ (업무분담지원금)', category: 'family-women', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=63f73479-3ff5-42e1-837e-bccc52aa7a1a', status: 'draft' },

  // ═══ 장애인 (5개) ═══
  { id: 'disabled-01', title: '영유아 발달 정밀검사비', category: 'disabled', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=00bb0e53-c45e-4dd9-8288-0d90f4b14882', status: 'draft' },
  { id: 'disabled-02', title: '장애인 보조기기 구입비 지원', category: 'disabled', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=c8bffb20-3cab-4c50-b418-7ad3362993d7', status: 'draft' },
  { id: 'disabled-03', title: '장애인 자립자금 대여사업', category: 'disabled', categorySlug: 'loan', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=b2f80c9c-0430-4b34-b1fc-2ed7d6606418', status: 'draft' },
  { id: 'disabled-04', title: '장애인 창업점포 지원', category: 'disabled', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=ba595623-cb77-4912-87b2-4ca7a89851d2', status: 'draft' },
  { id: 'disabled-05', title: '보조공학기기 지원', category: 'disabled', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=23eb3a90-20cd-43c9-b251-2da754550de9', status: 'draft' },

  // ═══ 주거 (8개) ═══
  { id: 'housing-01', title: '공공분양주택', category: 'housing', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=81de56df-868f-4229-956d-06a869df0145', status: 'draft' },
  { id: 'housing-02', title: '임대주택', category: 'housing', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=56994fdd-4206-4db0-ac7c-329ec2c7957a', status: 'draft' },
  { id: 'housing-03', title: '(예비)신혼부부 지원', category: 'housing', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=8cff2d4b-7df6-494c-af4f-93fef57f05ed', status: 'draft' },
  { id: 'housing-04', title: '대학생 주거지원', category: 'housing', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=f04a4561-2d93-449f-aafd-59554a5b697f', status: 'draft' },
  { id: 'housing-05', title: '주거지원·임대주택', category: 'housing', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=6b6ef61c-7dc9-4d66-b977-9fdc9872013c', status: 'draft' },
  { id: 'housing-06', title: '주택연금', category: 'housing', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=0ab1c232-3636-49af-b703-bb48bb379f30', status: 'draft' },
  { id: 'housing-07', title: '주거급여', category: 'housing', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=9fbd2415-ba27-4490-b42d-d5210f379f51', status: 'draft' },
  { id: 'housing-08', title: '주택개량지원', category: 'housing', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=03688787-6b51-4c6a-b98f-ac27aa28d662', status: 'draft' },

  // ═══ 문화 (11개) ═══
  { id: 'culture-01', title: '게임 과몰입 치유 프로그램', category: 'culture', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=bc975f7a-c152-47a6-abaa-f47fbea8803c', status: 'draft' },
  { id: 'culture-02', title: '스포츠강좌이용권', category: 'culture', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=214bc991-20e9-4635-a1ba-a297997d4235', status: 'draft' },
  { id: 'culture-03', title: '예술인고용보험', category: 'culture', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=ee1eedca-5341-4dfc-8196-d411d3ffd404', status: 'draft' },
  { id: 'culture-04', title: '나눔티켓', category: 'culture', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=53871bae-a528-46dc-b311-c10dd85bd0fc', status: 'draft' },
  { id: 'culture-05', title: '예술인 산재보험 보험료 지원사업', category: 'culture', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=5cf29455-2dc7-488f-a845-ebb80c877e70', status: 'draft' },
  { id: 'culture-06', title: '예술활동준비금 지원사업', category: 'culture', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=dfb2373f-f408-4280-9774-d305f3b391b5', status: 'draft' },
  { id: 'culture-07', title: '근로자휴가지원사업', category: 'culture', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=60a6b1e9-d284-4925-bb2e-a54abc368449', status: 'draft' },
  { id: 'culture-08', title: '통합문화이용권(문화누리카드)', category: 'culture', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=16116989-a349-4af9-b9e5-5b6002463248', status: 'draft' },
  { id: 'culture-09', title: '문화가 있는 날', category: 'culture', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=ecad88a7-5c3b-4f5d-abc2-ff47a7ba04c3', status: 'draft' },
  { id: 'culture-10', title: '아름다운 이야기할머니', category: 'culture', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=6c389495-90c5-4693-a10e-016987edfabe', status: 'draft' },
  { id: 'culture-11', title: '청년문화예술패스', category: 'culture', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=092441b3-970b-4b2e-9727-a05ad8c8d3a9', status: 'draft' },

  // ═══ 건강·안전 (15개) ═══
  { id: 'health-01', title: '층간소음 자가측정을 위한 소음측정기 무료대여 서비스', category: 'health-safety', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=7075f1c4-79a1-418f-8608-001722e729bd', status: 'draft' },
  { id: 'health-02', title: '암환자 의료비 지원', category: 'health-safety', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=2ce1dc7b-d073-43ae-91ae-8c1b33bcd240', status: 'draft' },
  { id: 'health-03', title: '생애주기별 국가건강검진제도', category: 'health-safety', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=7f394d4d-6979-4cee-8e18-123d67ad0cc8', status: 'draft' },
  { id: 'health-04', title: '지역사회 통합 건강증진 서비스', category: 'health-safety', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=84cbfd7e-b332-46e5-9c2e-0fe119545d12', status: 'draft' },
  { id: 'health-05', title: '생활터 금연환경 조성', category: 'health-safety', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=e8ab619c-07f6-47b1-ab10-6644e233fc6e', status: 'draft' },
  { id: 'health-06', title: "모바일 재난안전정보 포털 앱 '안전디딤돌'", category: 'health-safety', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=1f8aa465-884f-4824-a8f9-8903bd28a912', status: 'draft' },
  { id: 'health-07', title: '성범죄자 신상정보 모바일고지', category: 'health-safety', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=6579bb06-d602-4234-8981-6fe4d6b5b779', status: 'draft' },
  { id: 'health-08', title: '탄소중립포인트제 (녹색생활 실천 분야)', category: 'health-safety', categorySlug: 'refund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=d33c1fe8-82f6-4c0b-a7ae-23ecfa26ed4e', status: 'draft' },
  { id: 'health-09', title: '안심상속 원스톱 서비스', category: 'health-safety', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=75888cdc-0cf2-4061-a279-a25dde78d7e6', status: 'draft' },
  { id: 'health-10', title: '폐가전 무상 방문수거', category: 'health-safety', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=1c10f47d-ed7d-4f06-b0ae-4f4ce8cbad70', status: 'draft' },
  { id: 'health-11', title: '빈용기 보증금제도', category: 'health-safety', categorySlug: 'refund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=ddb8db29-d8cb-4bde-b16a-25c0ddd4f27e', status: 'draft' },
  { id: 'health-12', title: '혜택알리미', category: 'health-safety', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=8e1d0717-08c6-4a6f-ad10-acc4aca5ff64', status: 'draft' },
  { id: 'health-13', title: '국민비서', category: 'health-safety', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=4b6a6cd6-43a7-4421-96b4-288bf8504e20', status: 'draft' },
  { id: 'health-14', title: '119안심콜 서비스', category: 'health-safety', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=3fad48fc-d666-493a-968d-029f67c71752', status: 'draft' },
  { id: 'health-15', title: '여성긴급전화 1366', category: 'health-safety', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=b064c79c-4ee6-4746-80d8-806df2ee3187', status: 'draft' },

  // ═══ 고용·취업·창업 (41개) — 대표만 기재, 나머지는 별도 파일 ═══
  { id: 'employ-01', title: '국가근로장학금', category: 'employment', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=e9cb4320-c5d4-460e-b36a-f248ce70d52a', status: 'draft' },
  { id: 'employ-02', title: '교육급여', category: 'employment', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=9fb74207-59db-4ecb-950d-3a2b26a5ee14', status: 'draft' },
  { id: 'employ-03', title: '평생교육이용권', category: 'employment', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=046e68a2-c4c7-45a6-ac6b-f4fe748b9050', status: 'draft' },
  { id: 'employ-04', title: '취업 후 상환 학자금 대출', category: 'employment', categorySlug: 'loan', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=3a3b5c30-cd48-40f7-b884-ba482aeb1320', status: 'draft' },
  { id: 'employ-05', title: '귀농 농업창업 및 주택구입 지원사업', category: 'employment', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=e5d9d1db-0998-4d18-8de4-1dc2e2d93833', status: 'draft' },
  { id: 'employ-06', title: '실업크레딧', category: 'employment', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=63263484-2a72-4b78-a957-373e360bb2c1', status: 'draft' },
  { id: 'employ-07', title: '구직급여', category: 'employment', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=7d2cd7e3-acfe-4e6d-9647-783926c0ece4', status: 'draft' },
  { id: 'employ-08', title: '두루누리 사회보험료', category: 'employment', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=4b4810ad-1150-44f6-a301-40e1c5b5dc4a', status: 'draft' },
  { id: 'employ-23', title: '국민취업지원제도', category: 'employment', categorySlug: 'fund', sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?news_id=d0f82d4f-497b-4aa8-8403-42dfeee05e52', status: 'draft' },
  // ... 나머지 32개는 sourceUrl만 확보 상태, 별도 파일로 관리
];

/* ── 유틸 ── */
export function getPoliciesByCategory(cat: string) {
  return allPolicies.filter((p) => p.category === cat);
}

export function getPublishedPolicies() {
  return allPolicies.filter((p) => p.status === 'published');
}
