// noinspection JSUnusedGlobalSymbols

import { AnchorHTMLAttributes, ImgHTMLAttributes } from "react";

import { IconId } from "@/src/components/icons";
import { SocialCategoryId } from "@/src/config/content/social-categories";
import redirect from "@/src/utils/redirect";

/** Social card properties type. */
export type SocialCardProps = {
  title?: string;
  icon?: IconId;
  iconSize?: number;
  link: AnchorHTMLAttributes<HTMLAnchorElement>;
  background?: ImgHTMLAttributes<HTMLImageElement>;
  category?: SocialCategoryId;
  disabled?: boolean;
};

/** Social cards data. */
export const socialCards: SocialCardProps[] = [
  {
    link: {
      href: redirect("whomine"),
      target: "_blank",
    },
    background: {
      src: "/img/social_cards/whomine.webp",
      alt: "WhoMine card background",
    },
    category: "work",
  },
  {
    icon: "minersstudios",
    iconSize: 78,
    link: {
      href: redirect("minersstudios"),
      target: "_blank",
    },
    category: "work",
  },
  {
    title: "Mail",
    icon: "mail",
    link: {
      href: redirect("email"),
    },
  },
  {
    title: "Telegram",
    icon: "telegram",
    link: {
      href: redirect("telegram"),
      target: "_blank",
    },
  },
  {
    title: "GitHub",
    icon: "github",
    link: {
      href: redirect("github"),
      target: "_blank",
    },
  },
  {
    title: "YouTube",
    icon: "youtube",
    link: {
      href: redirect("youtube"),
      target: "_blank",
    },
  },
  {
    title: "Twitch",
    icon: "twitch",
    link: {
      href: redirect("twitch"),
      target: "_blank",
    },
  },
  {
    title: "TikTok",
    icon: "tiktok",
    link: {
      href: redirect("tiktok"),
      target: "_blank",
    },
  },
  {
    title: "X (Twitter)",
    icon: "x",
    link: {
      href: redirect("x"),
      target: "_blank",
    },
  },
  {
    title: "Reddit",
    icon: "reddit",
    link: {
      href: redirect("reddit"),
      target: "_blank",
    },
  },
  {
    title: "LinkedIn",
    icon: "linkedin",
    link: {
      href: redirect("linkedin"),
      target: "_blank",
    },
  },
  {
    disabled: true,
    title: "Medium",
    icon: "medium",
    link: {
      href: redirect("medium"),
      target: "_blank",
    },
  },
  {
    disabled: true,
    title: "NPM",
    icon: "npm",
    link: {
      href: redirect("npm"),
      target: "_blank",
    },
  },
  {
    title: "Spotify",
    icon: "spotify",
    link: {
      href: redirect("spotify"),
      target: "_blank",
    },
  },
  {
    title: "WakaTime",
    icon: "wakatime",
    link: {
      href: redirect("wakatime"),
      target: "_blank",
    },
  },
  {
    title: "Steam",
    icon: "steam",
    link: {
      href: redirect("steam"),
      target: "_blank",
    },
  },
  {
    title: "Patreon",
    icon: "patreon",
    link: {
      href: redirect("patreon"),
      target: "_blank",
    },
    category: "donate",
  },
  {
    title: "Streamlabs",
    icon: "streamlabs",
    link: {
      href: redirect("streamlabs"),
      target: "_blank",
    },
    category: "donate",
  },
  {
    title: "Donatello",
    icon: "donatello",
    link: {
      href: redirect("donatello"),
      target: "_blank",
    },
    category: "donate",
  },
];

export default socialCards;
