// noinspection JSUnusedGlobalSymbols

import { AnchorHTMLAttributes, ImgHTMLAttributes } from "react";

import { IconId } from "@/src/components/icons";
import { SocialCategoryId } from "@/src/config/social-categories";

/** Social card data type. */
export type SocialCardParams = {
  title?: string;
  icon?: IconId;
  iconSize?: number;
  link: AnchorHTMLAttributes<HTMLAnchorElement>;
  background?: ImgHTMLAttributes<HTMLImageElement>;
  category?: SocialCategoryId;
  disabled?: boolean;
};

/** Social cards data type. */
export type SocialCards = typeof socialCards;

/** Social cards data. */
export const socialCards: SocialCardParams[] = [
  {
    link: {
      href: "/whomine",
      target: "_blank",
    },
    background: {
      src: "/img/social_cards/whomine.png",
      alt: "WhoMine card background",
    },
    category: "work",
  },
  {
    icon: "minersstudios",
    iconSize: 78,
    link: {
      href: "/minersstudios",
      target: "_blank",
    },
    category: "work",
  },
  {
    title: "GitHub",
    icon: "github",
    link: {
      href: "/github",
      target: "_blank",
    },
  },
  {
    title: "Telegram",
    icon: "telegram",
    link: {
      href: "/telegram",
      target: "_blank",
    },
  },
  {
    title: "YouTube",
    icon: "youtube",
    link: {
      href: "/youtube",
      target: "_blank",
    },
  },
  {
    title: "Twitch",
    icon: "twitch",
    link: {
      href: "/twitch",
      target: "_blank",
    },
  },
  {
    title: "TikTok",
    icon: "tiktok",
    link: {
      href: "/tiktok",
      target: "_blank",
    },
  },
  {
    title: "X (Twitter)",
    icon: "x",
    link: {
      href: "/x",
      target: "_blank",
    },
  },
  {
    title: "Reddit",
    icon: "reddit",
    link: {
      href: "/reddit",
      target: "_blank",
    },
  },
  {
    title: "LinkedIn",
    icon: "linkedin",
    link: {
      href: "/linkedin",
      target: "_blank",
    },
  },
  {
    disabled: true,
    title: "Medium",
    icon: "medium",
    link: {
      href: "/medium",
      target: "_blank",
    },
  },
  {
    title: "NPM",
    icon: "npm",
    link: {
      href: "/npm",
      target: "_blank",
    },
  },
  {
    title: "Spotify",
    icon: "spotify",
    link: {
      href: "/spotify",
      target: "_blank",
    },
  },
  {
    title: "WakaTime",
    icon: "wakatime",
    link: {
      href: "/wakatime",
      target: "_blank",
    },
  },
  {
    title: "Steam",
    icon: "steam",
    link: {
      href: "/steam",
      target: "_blank",
    },
  },
  {
    title: "Patreon",
    icon: "patreon",
    link: {
      href: "/patreon",
      target: "_blank",
    },
    category: "donate",
  },
  {
    title: "Streamlabs",
    icon: "streamlabs",
    link: {
      href: "/streamlabs",
      target: "_blank",
    },
    category: "donate",
  },
  {
    title: "Donatello",
    icon: "donatello",
    link: {
      href: "/donatello",
      target: "_blank",
    },
    category: "donate",
  },
];
