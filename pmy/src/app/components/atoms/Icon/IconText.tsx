import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'; // Icon 타입 import
import { textColor, TextColorVariantProps } from '@/styles/common/theme.css';

type IconTextProps<T = unknown> = {
  icon: IconDefinition;  // 아이콘 종류를 props로 전달
  fontSize?: string;     // 아이콘 크기 조절
  style?: React.CSSProperties; // style 속성을 추가
} & T & TextColorVariantProps;

export const IconText: React.FC<IconTextProps> = ({
  icon,
  fontSize = '16px', // 기본 폰트 크기
  color,     // 기본 색상 (검정)
  ...rest
}) => {
  return (
    <FontAwesomeIcon 
      className={textColor({color})}
      icon={icon} 
      style={{ fontSize, color }} 
      {...rest}
    />
  );
};
// type IconButtonProps = {
//   icon: IconDefinition;  // 아이콘 종류를 props로 전달
//   fonstSize?: string;     // 아이콘 크기 조절
//   disable?: boolean,
//   style?: React.CSSProperties; // style 속성을 추가
//   onClick?: React.MouseEventHandler<HTMLButtonElement>;
// } & TextColorVariantProps;

// export const IconButton: React.FC<IconButtonProps> = ({
//   icon,
//   disable = false,
//   fonstSize = '16px', // 기본 폰트 크기
//   color,     // 기본 색상 (검정)
//   onClick,
//   ...rest
// }) => {
//   return (
//     <button type="button" onClick={onClick} disabled = {disable}>
//       <FontAwesomeIcon icon={icon} style={{ fontSize : fonstSize }} className={textColor({color})} {...rest}/>
//     </button>
//   );
// };
