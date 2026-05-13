import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gov: {
          navy: "#2B3A7C",      // Q&A 카드 헤더 (진한 네이비)
          "navy-dark": "#1F2A5C",
          orange: "#F5A623",    // 번호 배지 (주황)
          "orange-light": "#FFD477",
          highlight: "#FFE873", // 핵심 단어 형광 (노랑)
          bg: "#F5F6FA",        // 페이지 배경 (연한 회색)
          text: "#2C2C2C",      // 본문 텍스트
          muted: "#6E6E6E",     // 보조 텍스트
          border: "#ECECEC",    // 경계선
          danger: "#E84A4A",    // 마감임박/경고
          success: "#0F6E56",   // 통과/성공
        },
      },
    },
  },
  plugins: [],
};
export default config;
