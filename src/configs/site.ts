// noinspection JSUnusedGlobalSymbols

import type { SiteConfig } from "@type/site";

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
      label: "Gallery",
      link: {
        href: "/gallery",
      },
      icon: "gallery",
    },
  ],
};

export default siteConfig;
