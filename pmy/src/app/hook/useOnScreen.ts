import { useState, useEffect } from 'react';

// 요소가 화면에 보이는지 여부를 감지하는 커스텀 훅
/**
 * 지정한 참조 요소가 화면에 보이는지 여부를 반환하는 커스텀 훅.
 * @param ref - 관찰할 요소의 React 참조
 * @param threshold - 요소의 몇 퍼센트가 화면에 보이면 True로 간주할지 설정
 * @returns 참조된 요소가 화면에 보이면 true, 아니면 false
 */
export default function useOnScreen(
  ref: React.RefObject<HTMLElement>,
  threshold = 0.3,
) {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry?.isIntersecting ?? false);
      },
      {
        rootMargin: '0px',
        threshold,
      },
    );
    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, threshold]); // Empty array ensures that effect is only run on mount and unmount

  return isIntersecting;
}
