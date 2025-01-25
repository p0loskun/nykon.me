// noinspection JSUnusedGlobalSymbols

import type { SocialCategoryId, SocialCategoryProps } from "@type/social";

/** Social categories data. */
export const socialCategories: {
  id: SocialCategoryId;
  props: SocialCategoryProps;
}[] = [
  {
    id: "default",
    props: {
      title: "Socials",
      subtitle: "Follow me on social media",
    },
  },
  {
    id: "donate",
    props: {
      title: "Donate",
      subtitle: "Support me by donating",
    },
  },
];

export default socialCategories;
