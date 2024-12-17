import { atom } from "jotai";

// viewState 타입 정의
type viewType = {
  ref: React.RefObject<HTMLDivElement>|null;
};

// viewState atom 정의
export const viewState = atom<viewType>({
  ref: null,
});
