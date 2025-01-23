import { link, txt, sameType } from './style.css';
import './animate.css';
import cn from 'classnames';
import { textColor, TextColorVariantProps } from '@/styles/common/theme.css';
import { text, TextVariantProps } from './splitText.module.css';

type SplitTextProps = {
  splitText: string;
  url?: string;
  type?: string;
  onClick?: () => void;
};

export const SplitText = ({
  splitText,
  sizes,
  color,
  bgColor,
  weights,
  url,
  type,
  onClick,
}: SplitTextProps & Partial<TextVariantProps & TextColorVariantProps>) => {
  const className = type === 'same' ? sameType : txt;
  const linkUrl = url ? url : 'javascript:void(0)';
  return (
    <a
      href={linkUrl}
      className={`${link} link ${text({ sizes })}`}
      onClick={onClick}
    >
      <p
        className={cn(
          'txt',
          className,
          text({
            sizes,
            weights,
          }),
          textColor({ color, bgColor }),
        )}
        data-splitting
      >
        {splitText}
      </p>
      <p
        className={cn(
          'txt',
          className,
          text({
            sizes,
            weights,
          }),
          textColor({ color, bgColor }),
        )}
        data-splitting
      >
        {splitText}
      </p>
    </a>
  );
};
