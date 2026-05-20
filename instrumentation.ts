export async function register() {
  // output: 'export' 정적 빌드 시 Node.js 환경에서
  // lucide-react 등이 참조하는 브라우저 전용 전역변수 polyfill
  if (typeof globalThis.self === 'undefined') {
    (globalThis as unknown as Record<string, unknown>).self = globalThis;
  }
}
