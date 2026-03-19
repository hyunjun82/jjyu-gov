"use client";
import React, { useState } from 'react';

export default function EligibilityChecker() {
  const [checks, setChecks] = useState({
    age: false,
    income: false,
    employment: false
  });

  const checkCount = Object.values(checks).filter(Boolean).length;
  const isEligible = checkCount === 3;

  return (
    <div className="bg-green-50 border border-green-200 rounded-xl p-6 my-8">
      <h3 className="font-bold text-xl text-green-900 mb-2">내 상황 체크해보세요 (자격조건 확인)</h3>
      <p className="text-sm text-green-700 mb-5">아래 조건에 모두 해당하면 신청 가능 확률이 매우 높습니다.</p>
      
      <div className="space-y-4">
        <label className="flex items-start space-x-3 cursor-pointer p-2 hover:bg-green-100 rounded-lg transition-colors">
          <input 
            type="checkbox" 
            className="w-5 h-5 mt-0.5 text-[#14C38E] border-gray-300 rounded focus:ring-[#14C38E]"
            checked={checks.age}
            onChange={(e) => setChecks({...checks, age: e.target.checked})}
          />
          <span className="text-gray-800 font-medium">만 19세 ~ 34세 청년에 해당해요</span>
        </label>

        <label className="flex items-start space-x-3 cursor-pointer p-2 hover:bg-green-100 rounded-lg transition-colors">
          <input 
            type="checkbox" 
            className="w-5 h-5 mt-0.5 text-[#14C38E] border-gray-300 rounded focus:ring-[#14C38E]"
            checked={checks.income}
            onChange={(e) => setChecks({...checks, income: e.target.checked})}
          />
          <span className="text-gray-800 font-medium">기준 중위소득 100% 이하 가구원이에요</span>
        </label>

        <label className="flex items-start space-x-3 cursor-pointer p-2 hover:bg-green-100 rounded-lg transition-colors">
          <input 
            type="checkbox" 
            className="w-5 h-5 mt-0.5 text-[#14C38E] border-gray-300 rounded focus:ring-[#14C38E]"
            checked={checks.employment}
            onChange={(e) => setChecks({...checks, employment: e.target.checked})}
          />
          <span className="text-gray-800 font-medium">현재 고용보험에 가입되어 있지 않아요 (미취업)</span>
        </label>
      </div>

      <div className={`mt-6 p-4 rounded-lg text-center font-bold transition-all ${isEligible ? 'bg-[#14C38E] text-white shadow-md' : 'bg-white text-gray-500 border border-gray-200'}`}>
        {isEligible 
          ? "🎉 축하합니다! 지원금 신청 대상자에 해당할 확률이 높습니다." 
          : "체크박스를 클릭하여 자격 조건을 확인해보세요."}
      </div>
    </div>
  );
}
