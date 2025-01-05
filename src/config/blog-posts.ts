// noinspection JSUnusedGlobalSymbols

/** Blog post type. */
export type BlogPost = {
  title: string;
  description: string;
  date: string;
  content: string;
};

/** Blog posts data type. */
export type BlogPosts = typeof blogPosts;

/** Blog posts data. */
export const blogPosts = [];
