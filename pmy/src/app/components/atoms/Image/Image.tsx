import React, { useEffect, useState } from 'react';
import { image, ImageVariantProps } from './index.css';
import ImageNext from 'next/image';

type ImageProps = {
  url: string;
  sizes: ImageVariantProps;
  cover?: ImageVariantProps;
  radius?: ImageVariantProps;
  children?: React.ReactNode;
  className?: string;
  alt?: string;
};

export const Image: React.FC<ImageProps & ImageVariantProps> = ({
  sizes,
  radius,
  cover,
  url,
  children,
  className,
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
    <div className={`${image({ sizes, radius, cover })}`} {...rest}>
      <p
        style={{ position: 'relative' }}
        className={`${className} ${image({ sizes, radius, cover })} ${
          isLoaded ? 'loaded' : 'loading'
        }`}
      >
        <ImageNext src={url} alt={alt} style={{ objectFit: 'cover' }} fill />
      </p>
      {children}
    </div>
  );
};
