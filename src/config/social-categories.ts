// noinspection JSUnusedGlobalSymbols

/** Social card category type. */
export type SocialCategoryId = "default" | "work" | "donate";

/** Social category data type. */
export type SocialCategoryParams = {
  title?: string;
  subtitle?: string;
};

/** Social categories data type. */
export type SocialCategories = typeof socialCategories;

/** Social categories data. */
export const socialCategories: {
  id: SocialCategoryId;
  params: SocialCategoryParams;
}[] = [
  {
    id: "work",
    params: {},
  },
  {
    id: "default",
    params: {
      title: "Socials",
      subtitle: "Follow me on social media",
    },
  },
  {
    id: "donate",
    params: {
      title: "Donate",
      subtitle: "Support me by donating",
    },
  },
];
