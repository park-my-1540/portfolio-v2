import React, { useEffect, useState } from 'react';
import { image, ImageVariantProps } from './index.css';
import ImageNext from 'next/image';

type ImageProps = {
  url: string;
  sizes: ImageVariantProps;
  cover?: 'cover' | 'contain' | 'fill' | 'scale-down';
  radius?: ImageVariantProps;
  loading: 'eager' | 'lazy';
  children?: React.ReactNode;
  className?: string;
  alt?: string;
};

export const Image: React.FC<ImageProps & ImageVariantProps> = ({
  sizes,
  radius,
  cover = 'contain',
  url,
  children,
  className,
  loading,
  alt = 'image',
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

  return (
    <div className={`${className} ${image({ sizes, radius })}`} {...rest}>
      <p
        style={{ position: 'relative' }}
        className={` ${image({ sizes, radius })} ${
          isLoaded ? 'loaded' : 'loading'
        }`}
      >
        <ImageNext
          src={url}
          alt={alt}
          style={{ objectFit: cover }}
          fill
          loading={loading}
        />
      </p>
      {children}
    </div>
  );
};
