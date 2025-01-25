import type { IconId } from "@type/icon";

import { AnchorHTMLAttributes, ImgHTMLAttributes } from "react";

/* Social card types */

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

/* Social category types */

/** Social category properties type. */
export type SocialCategoryProps = {
  title?: string;
  subtitle?: string;
};

/** Social card category type. */
export type SocialCategoryId = "default" | "work" | "donate";
