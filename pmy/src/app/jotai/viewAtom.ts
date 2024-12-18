import { atom } from "jotai";

// viewState 타입 정의
type viewType = {
  ref?: React.RefObject<HTMLDivElement>|null;
  containerRef?: React.RefObject<HTMLDivElement>|null;
  scrollStart?: boolean;
};

// viewState atom 정의
export const viewState = atom<viewType>({
  ref: null,
  containerRef: null,
  scrollStart: false,
});
