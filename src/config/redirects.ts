// noinspection JSUnusedGlobalSymbols

/** Redirect properties type. */
export type RedirectProps = {
  href: string;
  title: string;
  description: string;
};

/** Redirect data. */
export const redirects: Record<string, RedirectProps> = {
  email: {
    href: "mailto:contact@nykon.me",
    title: "Email",
    description: "Contact me via email",
  },
  minersstudios: {
    href: "https://minersstudios.com",
    title: "Miners Studios",
    description: "Visit Miners Studios website",
  },
  whomine: {
    href: "https://whomine.net",
    title: "WhoMine",
    description: "Visit WhoMine website",
  },
  github: {
    href: "https://git.nykon.me",
    title: "GitHub",
    description: "Visit my GitHub profile",
  },
  telegram: {
    href: "https://t.me/nykon_ashotovich",
    title: "Telegram",
    description: "Contact me via Telegram",
  },
  youtube: {
    href: "https://youtube.com/c/Enchig",
    title: "YouTube",
    description: "Visit my YouTube channel",
  },
  twitch: {
    href: "https://twitch.tv/nykon_ashotovich",
    title: "Twitch",
    description: "Visit my Twitch channel",
  },
  tiktok: {
    href: "https://tiktok.com/@nykon_ashotovich",
    title: "TikTok",
    description: "Visit my TikTok profile",
  },
  x: {
    href: "https://x.com/p0loskun",
    title: "X",
    description: "Visit my X profile",
  },
  reddit: {
    href: "https://reddit.com/u/TheDrMine/",
    title: "Reddit",
    description: "Visit my Reddit profile",
  },
  linkedin: {
    href: "https://linkedin.com/in/nykon",
    title: "LinkedIn",
    description: "Visit my LinkedIn profile",
  },
  medium: {
    href: "https://nykon.medium.com/",
    title: "Medium",
    description: "Visit my Medium profile",
  },
  npm: {
    href: "https://npmjs.com/~nykon",
    title: "npm",
    description: "Visit my npm profile",
  },
  spotify: {
    href: "https://open.spotify.com/user/3134n7xeq35mbd6dnipewpgoujku",
    title: "Spotify",
    description: "Visit my Spotify profile",
  },
  wakatime: {
    href: "https://wakatime.com/@nykon",
    title: "WakaTime",
    description: "Visit my WakaTime profile",
  },
  steam: {
    href: "https://steamcommunity.com/id/p0loskun/",
    title: "Steam",
    description: "Visit my Steam profile",
  },
  patreon: {
    href: "https://patreon.com/c/Nykon",
    title: "Patreon",
    description: "Support me on Patreon",
  },
  streamlabs: {
    href: "https://streamlabs.com/nykon_ashotovich/tip",
    title: "Streamlabs",
    description: "Support me on Streamlabs",
  },
  donatello: {
    href: "https://donatello.to/nykon",
    title: "Donatello",
    description: "Support me on Donatello",
  },
};

export default redirects;
