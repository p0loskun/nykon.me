import type { NavItemProps } from "@type/navigation";

/** Site configuration type. */
export type SiteConfig = {
  name: string;
  description: string;
  navItems: NavItemProps[];
};
