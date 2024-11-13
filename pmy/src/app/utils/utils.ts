/* eslint-disable import/prefer-default-export */
type Props = {
    backgroundColor?: string;
    width?: string;
    height?: string;
    display?: string;
    margin?: string;
    marginTop?: string;
    marginLeft?: string;
    marginRight?: string;
    marginBottom?: string;
    padding?: string;
    paddingTop?: string;
    paddingLeft?: string;
    paddingRight?: string;
    paddingBottom?: string;
    borderRadius?: string;
  };

export const pickProps = (props: Props, keys: (keyof Props)[]): Partial<Props> => {
  return keys.reduce((acc, key) => {
    if (props[key]) {
      acc[key] = props[key];
    }
    return acc;
  }, {} as Partial<Props>);
};
