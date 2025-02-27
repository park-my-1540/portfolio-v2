// layers.css.ts
// layer 함수를 이용해서 reset 레이어와 components 레이어를 생성합니다.
import { layer } from '@vanilla-extract/css';

export const reset = layer('reset');
export const components = layer('components');
