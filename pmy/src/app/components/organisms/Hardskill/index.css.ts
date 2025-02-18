import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/common/createThemeContract.css';
import { colors } from '@/styles/tokens/colors.css';

export const listBox = style({
  display: 'inline-block',
  padding: 5,
  margin: '3px 5px',
  borderRadius: '0.6rem',
  background: '#fff',
});
export const content = style({
  width: '30%',
  padding: '30px 0 25px',
  margin: '0 20px',
  textAlign: 'center',
  background: '#acc9ff',
  borderRadius: 30,
  transform: 'translate(0%, 50%)',
  opacity: 0,
});
export const inner = style({
  width: '60%',
  paddingTop: '20px',
  marginLeft: '20%',
});
