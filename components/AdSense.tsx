'use client';

import { useEffect, useRef } from 'react';

const CLIENT = 'ca-pub-2442517902625121';

/**
 * 구글 애드센스 광고 단위.
 * 로더 스크립트(adsbygoogle.js)는 app/layout.tsx <head> 에서 1회만 로드됨.
 * 이 컴포넌트는 <ins> 만 그리고 push() 호출 (단위마다 1회 가드).
 */
export default function AdSense({
  slot,
  format = 'auto',
  className,
  style,
}: {
  slot: string;
  format?: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const pushed = useRef(false);

  useEffect(() => {
    if (pushed.current) return;
    try {
      // @ts-expect-error adsbygoogle 는 외부 스크립트가 주입
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      pushed.current = true;
    } catch {
      /* 광고 차단기 등으로 실패해도 페이지는 정상 */
    }
  }, []);

  return (
    <ins
      className={`adsbygoogle${className ? ` ${className}` : ''}`}
      style={{ display: 'block', ...style }}
      data-ad-client={CLIENT}
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive="true"
    />
  );
}
