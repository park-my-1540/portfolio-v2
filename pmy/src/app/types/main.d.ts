import { ValueOfUnion } from "@/utils/utils";

const pageValue = ["main", "about", "some"] as const;
export type pageType = ValueOfUnion<typeof pageValue>;

// export const enumPage = ["main", "about", "some"];
