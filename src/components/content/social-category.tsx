import React from "react";

import { SocialCategoryProps } from "@/src/config/content/social-categories";
import styles from "@/src/styles/scroll-animated.module.css";

/**
 * Social category component
 *
 * @param props     Category properties.
 * @param className Category component class name.
 * @param children  Category content.
 * @constructor
 */
export default function SocialCategory({
  props,
  className,
  children,
}: {
  props: SocialCategoryProps;
  className?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      {props.title ? (
        <h1 className={`${styles.scrollAnimated} text-2xl font-bold`}>
          {props.title}
        </h1>
      ) : null}
      <p
        className={`${styles.scrollAnimated} text-lg text-neutral-600 dark:text-neutral-300 mb-8`}
      >
        {props.subtitle}
      </p>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] gap-4">
        {children}
      </div>
    </div>
  );
}
