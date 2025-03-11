import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import { image, ImageVariantProps } from './index.css';
import * as styles from './styles.css';

type ImageProps = {
  url: string;
  sizes: ImageVariantProps;
  cover?: 'cover' | 'contain' | 'fill' | 'scale-down';
  radius?: ImageVariantProps;
  loading?: 'eager' | 'lazy';
  children?: React.ReactNode;
  className?: string;
  alt?: string;
};

const Image: React.FC<ImageProps & ImageVariantProps> = ({
  sizes,
  radius,
  cover = 'contain',
  url = '',
  children,
  className,
  ...rest
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  // for smooth image load
  useEffect(() => {
    const img = new window.Image();
    img.src = url;
    img.onload = () => setIsLoaded(true);
    img.onerror = () => console.error(`Failed to load image: ${url}`);
  }, [url]);

  const style = {
    ...rest,
    backgroundImage: isLoaded ? `url(${url})` : undefined,
  };

  return (
    <p
      className={`${className} ${image({ sizes, radius, cover })} 
      ${cn(styles.loadtyles[isLoaded ? 'loaded' : 'loading'])}`}
      style={style}
    >
      {children}
    </p>
  );
};

export default Image;
