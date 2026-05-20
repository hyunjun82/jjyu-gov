// Node.js static export 빌드 시 webpack runtime의 self 참조 polyfill
if (typeof self === 'undefined') {
  global.self = global;
}
