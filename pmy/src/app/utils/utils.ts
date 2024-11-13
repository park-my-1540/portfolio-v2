import { BoxProps } from "@/types/styles"

export const pickProps = (props: BoxProps, keys: (keyof BoxProps)[]): Partial<BoxProps> => {
  return keys.reduce((acc, key) => {
    if (props[key]) {
      acc[key] = props[key];
    }
    return acc;
  }, {} as Partial<BoxProps>);
};

type ObjectUnion<T extends {[key:string]: unknown}> = keyof T;
type ArrayUnion<T extends ReadonlyArray<any>> = T[number];
export type ValueOfUnion<T> = T extends {[key:string]:unknown}
      ? ObjectUnion<T>
      : T extends ReadonlyArray<any>
      ? ArrayUnion<T>
      : never