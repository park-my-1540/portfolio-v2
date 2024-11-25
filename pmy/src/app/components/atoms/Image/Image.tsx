import React from 'react';
import { image,ImageVariantProps } from './image.css';

type ImageProps= {
  url: string,
  sizes: ImageVariantProps,
  children?: React.ReactNode,
} ;

export const Image: React.FC<ImageProps & ImageVariantProps> = ({
  sizes,
  url,
  children,
  ...rest
}) => {
  const style = {
    ...rest?.style,
    backgroundImage: `url(${url})`,
  };
  return (
    <p className={image({ sizes })} style={style}>{children}</p>
  );
};
