// noinspection JSUnusedGlobalSymbols

import type { SocialCardProps } from "@type/social";

import redirect from "@utils/redirect";

/** Social cards data. */
export const socialCards: SocialCardProps[] = [
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
