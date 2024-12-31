import { BoxProps } from "@/types/styles"

// Props picker utility
/**
 * Picks specific properties from props based on the provided keys.
 * @param props - The properties object.
 * @param keys - The array of keys to pick from the properties object.
 * @returns A new object containing only the picked properties.
 */
export const pickProps = (props: BoxProps, keys: (keyof BoxProps)[]): Partial<BoxProps> => {
  return keys.reduce((acc, key) => {
    if (props[key]) {
      acc[key] = props[key] as any;
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
