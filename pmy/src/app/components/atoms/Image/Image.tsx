import React from 'react';
import { image, ImageVariantProps } from './image.css';

type ImageProps = {
  url: string;
  sizes: ImageVariantProps;
  cover?: ImageVariantProps;
  radius?: ImageVariantProps;
  children?: React.ReactNode;
  className?: string;
};

export const Image: React.FC<ImageProps & ImageVariantProps> = ({
  sizes,
  radius,
  cover,
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
    <p
      className={`${className} ${image({ sizes, radius, cover })}`}
      style={style}
    >
      {children}
    </p>
  );
};
