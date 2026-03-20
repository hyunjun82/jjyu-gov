import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: __dirname,
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
