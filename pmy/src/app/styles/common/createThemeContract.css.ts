import { createThemeContract, createTheme } from "@vanilla-extract/css";
import { colors } from "./sprinkles.css";
// colors 객체 가져오기
type ColorKey = keyof typeof colors;

export const vars = createThemeContract({
  color: {
    primary: "", // primary: 주 색상 (메인 인터랙션, 버튼 등)
    subPrimary: "", // primary: 주 색상 (메인 인터랙션, 버튼 등)
    tertiary: "", // tertiary: 서브 보조 색상
    bgPrimary: "", // bgPrimary: 메인 배경 색상
    bgSecondary: "",
    bgInactive: "",
    bgInput: "",
    accent: "", // accent: 강조 색상 (알림, 중요한 정보 표시)
    highlight: "", // accent: 강조 색상 (알림, 중요한 정보 표시)
    textSecondary: "", // accent: 강조 색상 (알림, 중요한 정보 표시)
    textInfo: "", // accent: 강조 색상 (알림, 중요한 정보 표시)
    muted:"",
  },
});
export const lightTheme = createTheme(vars, {
  color: {
    primary: colors["black-100" as ColorKey],
    subPrimary: colors["black-200" as ColorKey],
    tertiary: colors["gray-400" as ColorKey],
    bgPrimary: colors["gray-300" as ColorKey],
    bgSecondary: colors["blue-500" as ColorKey],
    bgInactive: colors["gray-500" as ColorKey],
    bgInput: colors["white" as ColorKey],
    accent: colors["white" as ColorKey],
    highlight: colors["blue-600" as ColorKey],
    textSecondary: colors["gray-600" as ColorKey],
    textInfo: colors["gray-800" as ColorKey],
    muted: colors["black-700" as ColorKey],
  },
});
export const darkTheme = createTheme(vars, {
  color: {
    primary: colors["gray-500" as ColorKey],
    subPrimary: colors["gray-500" as ColorKey],
    tertiary: colors["gray-100" as ColorKey],
    bgPrimary: colors["black-100" as ColorKey],
    bgSecondary: colors["black-200" as ColorKey],
    bgInactive: colors["black-600" as ColorKey],
    bgInput: colors["black-200" as ColorKey],
    accent: colors["black-200" as ColorKey],
    highlight: colors["gray-600" as ColorKey],
    textSecondary: colors["gray-600" as ColorKey],
    textInfo: colors["gray-800" as ColorKey],
    muted: colors["gray-800" as ColorKey],
  },
});

/**
   * primary: 주 색상 (메인 인터랙션, 버튼 등)
    secondary: 보조 색상
    tertiary: 서브 보조 색상
    accent: 강조 색상 (알림, 중요한 정보 표시)
    muted: 흐린 색상 (비활성화된 요소)
    foreground: 텍스트/아이콘 색상
    background: 배경 색상

    2. 배경 색상 관련
    bgPrimary: 메인 배경 색상
    bgSecondary: 서브 배경 색상
    bgAccent: 강조 배경 색상 (예: 경고 배경)
    cardBg: 카드/컨테이너 배경
    surface: 표면(컨텐츠 영역) 배경 색상

    3. 텍스트 색상 관련
    textPrimary: 기본 텍스트 색상
    textSecondary: 보조 텍스트 색상 (설명 텍스트 등)
    textPlaceholder: 플레이스홀더 텍스트 색상
    textAccent: 강조 텍스트 색상
    textDisabled: 비활성화된 텍스트 색상

    4. 경계 및 테두리 색상
    border: 일반 경계 색상
    borderFocus: 포커스 시 경계 색상
    borderError: 에러 경계 색상
    borderMuted: 흐린 경계 색상
    5. 버튼 및 액션 색상
    buttonPrimary: 주요 버튼 색상
    buttonSecondary: 보조 버튼 색상
    buttonHover: 버튼 호버 시 색상
    buttonDisabled: 비활성화된 버튼 색상
    6. 알림 및 피드백 관련 색상
    success: 성공 상태 색상 (예: 초록색)
    warning: 경고 상태 색상 (예: 노란색)
    error: 에러 상태 색상 (예: 빨간색)
    info: 정보 알림 색상 (예: 파란색)
   */
