import Image from "next/image";
import React, { ReactElement } from "react";
import { Link } from "@nextui-org/link";

import { siteConfig } from "@/src/config/site";
import DefaultLayout from "@/src/layouts/default";
import { socialCards } from "@/src/config/social-cards";
import { SocialCard } from "@/src/components/social-card";
import {
  socialCategories,
  SocialCategoryId,
} from "@/src/config/social-categories";
import { SocialCategory } from "@/src/components/social-category";

export default function IndexPage() {
  const cardMap = new Map<string, ReactElement[]>();

  socialCards.forEach((card) => {
    const category: SocialCategoryId = card.category || "default";
    const cards = cardMap.get(category) || [];

    cards.push(<SocialCard key={card.link.href} card={card} />);
    cardMap.set(category, cards);
  });

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-12 py-8 md:py-10">
        <article
          className="scroll-animated flex flex-col max-w-lg text-center justify-center items-center content-center"
          id="about"
        >
          <Image
            alt="Gigacock"
            className="scroll-animated rounded-full shadow-lg my-6 border-1 border-solid border-neutral-500"
            height={200}
            src="/img/gigacock.jpg"
            width={200}
          />
          <h1 className="scroll-animated text-4xl font-bold">{siteConfig.name}</h1>
          <p className="scroll-animated text-lg text-neutral-600 dark:text-neutral-300 py-3 leading-5">
            Working on{" "}
            <Link className="text-neutral-400" href="/minersstudios">
              @MinersStudios
            </Link>
            <br />
            Open source software developer
          </p>
        </article>
        <article className="flex flex-col justify-center gap-10 w-full">
          {socialCategories.map((category) => (
            <SocialCategory
              key={category.id}
              category={category.params}
              className="scroll-animated text-center"
            >
              {cardMap.get(category.id)}
            </SocialCategory>
          ))}
        </article>
      </section>
    </DefaultLayout>
  );
}
