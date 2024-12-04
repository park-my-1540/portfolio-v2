import React from 'react';
import { image,ImageVariantProps } from './image.css';

type ImageProps= {
  url: string,
  sizes: ImageVariantProps,
  radius?: ImageVariantProps,
  children?: React.ReactNode,
} ;

export const Image: React.FC<ImageProps & ImageVariantProps> = ({
  sizes,
  radius,
  url,
  children,
  ...rest
}) => {
  const style = {
    ...rest?.style,
    backgroundImage: `url(${url})`,
  };
  return (
    <p className={image({ sizes, radius })} style={style}>{children}</p>
  );
};
