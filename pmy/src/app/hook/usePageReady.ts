import { useEffect, useState } from 'react';

export default function usePageReady() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const check = async () => {
      if (document.readyState !== 'complete') {
        await new Promise<void>((res) => window.addEventListener('load', () => res(), { once: true }));
      }
      // 웹폰트까지 기다리고 싶으면
      if (document.fonts?.ready) await document.fonts.ready;

      setReady(true);
    };
    check();
  }, []);

  console.log(`시작!!!  ${ready}`);
  return ready;
}
