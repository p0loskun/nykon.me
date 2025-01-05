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
  links: {
    email: string;
    minersstudios: string;
    whomine: string;
    github: string;
    telegram: string;
    youtube: string;
    twitch: string;
    tiktok: string;
    x: string;
    reddit: string;
    linkedin: string;
    medium: string;
    npm: string;
    spotify: string;
    wakatime: string;
    steam: string;
    patreon: string;
    streamlabs: string;
    donatello: string;
  };
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
  links: {
    email: "mailto:contact@nykon.me",
    minersstudios: "https://minersstudios.com",
    whomine: "https://whomine.com",
    github: "https://git.nykon.me",
    telegram: "https://t.me/nykon_ashotovich",
    youtube: "https://youtube.com/c/Enchig",
    twitch: "https://twitch.tv/nykon_ashotovich",
    tiktok: "https://tiktok.com/@nykon_ashotovich",
    x: "https://x.com/p0loskun",
    reddit: "https://reddit.com/u/TheDrMine/",
    linkedin: "https://linkedin.com/in/nykon",
    medium: "https://nykon.medium.com/",
    npm: "https://npmjs.com/~nykon",
    spotify: "https://open.spotify.com/user/3134n7xeq35mbd6dnipewpgoujku",
    wakatime: "https://wakatime.com/@nykon",
    steam: "https://steamcommunity.com/id/p0loskun/",
    patreon: "https://patreon.com/c/Nykon",
    streamlabs: "https://streamlabs.com/nykon_ashotovich/tip",
    donatello: "https://donatello.to/nykon",
  },
};
