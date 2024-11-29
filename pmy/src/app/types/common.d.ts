import { SwiperRef } from 'swiper/react';
import { ValueOfUnion } from "@/utils/utils";

const pageValue = ["main", "about", "some"] as const;

export type PageType = ValueOfUnion<typeof pageValue>;
export type SwiperRefType = SwiperRef;

interface BaseProps {
    currentPage: PageType;
}
  
interface HeaderProps extends BaseProps {
    // BaseProps의 currentPage를 상속받고, 추가적인 prop을 정의
    title: string;
}
  
interface NavigationProps extends BaseProps {
    slideRef: React.RefObject<HTMLElement>;
    enumPage: readonly PageType[];
    currentIdx: number;
    onBulletClick: (index: number) => void;
}
  
interface ScrollIndicatorProps extends BaseProps {
    slideRef: React.RefObject<HTMLDivElement>;
}

interface SwiperProps {
    onSlideChange: (index: number) => void;
    swiperRef: React.RefObject<SwiperRefType>;
    pages: React.ReactNode[];
}