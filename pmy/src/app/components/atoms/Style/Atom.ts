import clsx from "clsx";
import { sprinkles, Sprinkles } from "@/styles/common/sprinkles.css";
export interface Atoms extends Sprinkles {
  reset?: keyof JSX.IntrinsicElements;
  className?: string | string[];
}

export function atoms(atoms: Atoms) {
  const { reset, className, ...rest } = atoms;
  const sprinklesClassNames = sprinkles(rest);

  return clsx(
    sprinklesClassNames,
    className,
  );
}