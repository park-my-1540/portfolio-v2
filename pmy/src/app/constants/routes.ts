export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000';
export const GIT = 'https://github.com/park-my-1540';
export const NOTION = 'https://www.notion.so/0f834567330e47c6badc68700c5e96eb';

// 페이지 경로
export const ROUTES = {
  HOME: '/',
  PROJECTS_JDI: `${API_BASE_URL}/project/JDI`,
  PROJECTS_ADC: `${API_BASE_URL}/project/ADC`,
};
