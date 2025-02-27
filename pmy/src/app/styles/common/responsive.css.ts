export const responsiveStyle = ({
  mobile,
  tablet,
  desktop,
}: {
  mobile?: object;
  tablet?: object;
  desktop?: object;
}) => ({
  '@media': {
    'screen and (max-width: 768px)': mobile || {},
    'screen and (min-width: 768px) and (max-width: 1024px)': tablet || {},
    'screen and (min-width: 1024px)': desktop || {},
  },
});
