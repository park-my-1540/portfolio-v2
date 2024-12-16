import { atom } from "jotai";
import { ThemeMode } from "@/types/styles"

// viewState 타입 정의
type themeType = {
  mode: ThemeMode;
};

// viewState atom 정의
export const themeState = atom<themeType>({
  mode: "light",
});
