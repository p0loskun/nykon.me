import { SVGProps } from "react";

/**
 * Props for the SVG icon component.
 *
 * @param size Icon size, sets both width and height (default: 24)
 *
 * @see BaseIcon
 * @see Icon
 */
export type IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

/** Icon id type */
export type IconId =
  | "home"
  | "work"
  | "gallery"
  | "mail"
  | "minersstudios"
  | "whomine"
  | "github"
  | "telegram"
  | "youtube"
  | "twitch"
  | "tiktok"
  | "x"
  | "reddit"
  | "linkedin"
  | "medium"
  | "npm"
  | "spotify"
  | "wakatime"
  | "steam"
  | "patreon"
  | "streamlabs"
  | "donatello"
  | "discord"
  | "moon"
  | "sun";
