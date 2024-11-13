import { atom } from "recoil";
import { OptionType, ThemeColor } from "@/types/styles";

export type ThemeMode = "light" | "dark";
export type HighlightColor = ThemeColor;

// 초기값 설정
export const optionState = atom<OptionType>({
  key: "optionState", // 고유 key
  default: {
    mode: "light", // 초기 모드는 라이트
  },
});
