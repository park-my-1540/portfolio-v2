import React from 'react';
import Box from '@/components/layouts/Box/Box';

type ResponsiveBoxProps = {
  children: React.ReactNode;
  width?: string;
  padding?: number | string;
  gap?: number | string;
  columns?: {
    desktop: string;
    tablet: string;
    mobile: string;
  };
};

export const ResponsiveBox = ({
  children,
  width = '100%',
  padding = 30,
  gap = 20,
  columns = {
    desktop: 'single',
    tablet: 'single',
    mobile: 'single',
  },
  ...rest
}: ResponsiveBoxProps) => (
  <Box
    {...rest}
    responsive={{
      display: {
        desktop: 'grid',
        tablet: 'grid',
        mobile: 'grid',
      },
      gridTemplateColumns: {
        mobile: 'single',
        tablet: 'single',
        desktop: 'single', // 사용자 정의 레이아웃 사용
      },
      width: {
        desktop: 'expanded',
        tablet: 'shrink',
        mobile: 'full',
      },
    }}
    padding={padding}
  >
    {children}
  </Box>
);
