import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Cloudflare Pages 정적 호스팅 — 어댑터 없이도 모든 페이지 서빙
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  outputFileTracingRoot: __dirname,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config, { isServer }) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@': __dirname,
    };

    /* 청크를 쪼갠다 (2026-08-31)
     *
     * 왜
     *   data/spokes/registry.ts 가 스포크 1,330개를 전부 static import 한다.
     *   그게 통째로 한 청크(753-*.js)가 되어 26.7 MB 가 됐고,
     *   Cloudflare Pages 는 파일 하나에 25 MiB 까지만 받는다 —
     *   빌드는 성공하는데 업로드 단계에서 죽어서 2026-08-27 이후 배포가 통째로 실패했다.
     *     ✘ Pages only supports files up to 25 MiB in size
     *       _next/static/chunks/753-*.js is 25.5 MiB in size
     *
     *   maxSize 만 주면 webpack 이 그 크기에 맞춰 여러 파일로 나눈다.
     *   내용은 그대로이고 파일만 쪼개지므로 화면·데이터는 달라지지 않는다.
     *
     * 주의
     *   이건 업로드를 통과시키는 임시 조치다. 페이지 하나가 5.35 MB 를 내려받는 건
     *   그대로다 — registry 를 동적 import 로 바꿔야 근본이 풀린다.
     */
    if (!isServer) {
      config.optimization = config.optimization || {};
      config.optimization.splitChunks = {
        ...(config.optimization.splitChunks || {}),
        maxSize: 12 * 1024 * 1024,   // 12 MB — 25 MiB 한도에 여유를 둔다
        minSize: 20 * 1024,
      };
    }
    return config;
  },
};

export default nextConfig;
