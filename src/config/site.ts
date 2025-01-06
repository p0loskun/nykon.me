// noinspection JSUnusedGlobalSymbols

import { AnchorHTMLAttributes } from "react";

import { IconId } from "@/src/components/icons";

/** Navigation item type. */
export type NavItemProps = {
  label: string;
  link: AnchorHTMLAttributes<HTMLAnchorElement>;
  icon: IconId;
};

/** Site configuration type. */
export type SiteConfig = {
  name: string;
  description: string;
  navItems: NavItemProps[];
};

/** Site configuration data. */
export const siteConfig: SiteConfig = {
  name: "Nykon Hrytsyshyn",
  description: "Personal website of Nykon Hrytsyshyn",
  navItems: [
    {
      label: "Home",
      link: {
        href: "/",
      },
      icon: "home",
    },
    {
      label: "Work",
      link: {
        href: "/work",
      },
      icon: "work",
    },
    {
      label: "Blog",
      link: {
        href: "/blog",
      },
      icon: "blog",
    },
    {
      label: "Gallery",
      link: {
        href: "/gallery",
      },
      icon: "gallery",
    },
  ],
};
