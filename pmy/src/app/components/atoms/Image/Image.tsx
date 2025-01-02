import React from 'react';
import { image, ImageVariantProps } from './image.css';

type ImageProps = {
  url: string;
  sizes: ImageVariantProps;
  radius?: ImageVariantProps;
  children?: React.ReactNode;
  className?: string;
};

export const Image: React.FC<ImageProps & ImageVariantProps> = ({
  sizes,
  radius,
  url,
  children,
  className,
  ...rest
}) => {
  const style = {
    ...rest,
    backgroundImage: `url(${url})`,
  };
  return (
    <p className={`${className} ${image({ sizes, radius })}`} style={style}>
      {children}
    </p>
  );
};
