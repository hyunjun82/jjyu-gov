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
          navy: "#003D88",      // KRDS 표준 정부 블루 (기존 사이트와 일치)
          "navy-dark": "#002F6B",
          "navy-light": "#0066CC",
          "navy-bg": "#EEF3FB",
          orange: "#F5A623",    // 번호 배지 (주황)
          highlight: "#FFE873", // 핵심 단어 형광 (노랑)
          bg: "#F7F8FA",        // 페이지 배경 (KRDS 일치)
          text: "#191F28",      // KRDS 일치
          muted: "#8B95A1",     // KRDS 일치
          border: "#E5E8EB",    // KRDS 일치
          danger: "#E8344E",    // KRDS 일치
        },
      },
    },
  },
  plugins: [],
};
export default config;
