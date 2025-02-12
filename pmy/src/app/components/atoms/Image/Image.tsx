import React, { useEffect, useState } from 'react';
import { image, ImageVariantProps } from './index.css';

type ImageProps = {
  url: string | undefined;
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
      className={`${className} ${image({ sizes, radius, cover })} ${
        isLoaded ? 'loaded' : 'loading'
      }`}
      style={style}
    >
      {children}
    </p>
  );
};
