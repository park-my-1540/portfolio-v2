import { atom } from "jotai";
import { PageType } from "@/types/common";

// viewState 타입 정의
type viewType = {
  locoScroll: unknown;
  containerRef: unknown;
};

// viewState atom 정의
export const viewState = atom<viewType>({
  containerRef: null,
  locoScroll: null,
});
