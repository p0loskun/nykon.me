// noinspection JSUnusedGlobalSymbols

/** Social card category type. */
export type SocialCategoryId = "default" | "work" | "donate";

/** Social category properties type. */
export type SocialCategoryProps = {
  title?: string;
  subtitle?: string;
};

/** Social categories data type. */
export type SocialCategories = typeof socialCategories;

/** Social categories data. */
export const socialCategories: {
  id: SocialCategoryId;
  props: SocialCategoryProps;
}[] = [
  {
    id: "work",
    props: {},
  },
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
