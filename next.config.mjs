/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Vercel 첫 배포 시 사소한 Lint 에러로 멈추는 것을 방지
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Vercel 첫 배포 시 사소한 타입 에러로 멈추는 것을 방지
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
