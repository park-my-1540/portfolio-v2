import { style } from '@vanilla-extract/css';

export const swiperItem = style({
  height: 'var(--height-swiper)', // 이 부분은 환경변수로 설정한 값이 필요합니다.
  paddingLeft: '30px',
});
