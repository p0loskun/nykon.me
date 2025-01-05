import React from "react";

import { SocialCategoryParams } from "@/src/config/social-categories";

export const SocialCategory = ({
  category,
  className,
  children,
}: {
  category: SocialCategoryParams;
  className?: string | undefined;
  children: React.ReactNode;
}) => {
  return (
    <div className={className}>
      {category.title ? (
        <h1 className="text-2xl font-bold">{category.title}</h1>
      ) : null}
      <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8">
        {category.subtitle}
      </p>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] gap-4">
        {children}
      </div>
    </div>
  );
};
