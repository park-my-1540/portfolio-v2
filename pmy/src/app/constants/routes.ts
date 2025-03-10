export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000';
export const GIT = 'https://github.com/park-my-1540';
export const NOTION = 'https://amusing-sparrow-b19.notion.site/1af927ab97618019894fc32e3b1a8a7a';

// 페이지 경로
export const ROUTES = {
  HOME: '/',
  PROJECTS_JDI: `${API_BASE_URL}/project/JDI`,
  PROJECTS_ADC: `${API_BASE_URL}/project/ADC`,
};
