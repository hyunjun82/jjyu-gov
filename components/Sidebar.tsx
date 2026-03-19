import React from 'react';

export default function Sidebar() {
  const spokes = [
    { name: "청년 특화 지원금 바로가기", url: "https://spoke1.com" },
    { name: "소상공인 대출 가이드", url: "https://spoke2.com" },
    { name: "저소득층 환급금 찾기", url: "https://spoke3.com" }
  ];

  return (
    <aside className="w-full md:w-80 flex-shrink-0 space-y-6">
      {/* CTA Button */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 sticky top-4">
        <h3 className="font-bold text-lg mb-3">지금 바로 확인하세요</h3>
        <button className="w-full bg-[#14C38E] hover:bg-[#11A87A] text-white font-bold py-4 rounded-lg shadow-md transition-all text-lg">
          지원금 신청하기
        </button>
        <p className="text-xs text-center text-gray-500 mt-2">마감일이 얼마 남지 않았습니다.</p>
      </div>

      {/* Spoke Links */}
      <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
        <h3 className="font-bold text-gray-800 mb-4 pb-2 border-b">관련 정보 더보기</h3>
        <ul className="space-y-3">
          {spokes.map((spoke, idx) => (
            <li key={idx}>
              <a href={spoke.url} className="flex items-center text-gray-600 hover:text-[#14C38E] group transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-[#14C38E] mr-2"></span>
                <span className="text-sm font-medium">{spoke.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Sidebar Ad Placeholder */}
      <div className="bg-gray-100 w-full h-[600px] rounded-xl flex items-center justify-center text-gray-400 text-sm border border-gray-200">
        [구글 애드센스 우측 하단 광고]
      </div>
    </aside>
  );
}
