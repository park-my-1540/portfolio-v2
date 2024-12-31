import { atom } from "jotai";
import LocomotiveScroll from "locomotive-scroll";

// viewState 타입 정의
type viewType = {
  cursorRef?: React.RefObject<HTMLDivElement>|null;
  containerRef?: React.RefObject<HTMLDivElement>|null;
  scrollStart?: boolean;
  locoScroll?: LocomotiveScroll | undefined;
};

// viewState atom 정의
export const viewState = atom<viewType>({
  cursorRef: null,
  containerRef: null,
  scrollStart: false,
  locoScroll: undefined,
});
