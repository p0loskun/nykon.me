import type { IconId } from "@type/icon";

import { AnchorHTMLAttributes } from "react";

/** Navigation item properties type. */
export type NavItemProps = {
  label: string;
  link: AnchorHTMLAttributes<HTMLAnchorElement>;
  icon: IconId;
};
