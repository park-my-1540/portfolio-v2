import { atom } from "jotai";
import { PageType } from "@/types/common";

// viewState 타입 정의
type viewType = {
  currentIdx: number;
  currentPage: PageType;
};

// viewState atom 정의
export const viewState = atom<viewType>({
  currentIdx: 0,
  currentPage: "main"
});
