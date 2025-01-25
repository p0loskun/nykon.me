import type { SocialCategoryId } from "@type/social";

import React, { ReactElement } from "react";
import { Link } from "@heroui/link";
import { Image } from "@heroui/image";
import styles from "@styles/module/scroll-animated.module.css";
import siteConfig from "@configs/site";
import DefaultLayout from "@layouts/default";
import socialCards from "@configs/content/social-cards";
import socialCategories from "@configs/content/social-categories";
import useScrollAnimation from "@hooks/use-scroll-animation";
import redirect from "@utils/redirect";
import { SocialCard, SocialCategory } from "@components/content/social";

export default function HomePage(): ReactElement {
  useScrollAnimation();

  const cardMap = initCards();

  return (
    <DefaultLayout>
      <section className="container mx-auto max-w-7xl flex flex-col items-center justify-center gap-12 py-8 md:py-10">
        <article
          className={`${styles.scrollAnimated} flex flex-col max-w-lg text-center justify-center items-center content-center`}
          id="about"
        >
          <Image
            isBlurred
            alt="Gigacock"
            className={`${styles.scrollAnimated} rounded-full shadow-lg my-6`}
            height={200}
            src="/img/gigacock.webp"
            width={200}
          />
          <h1 className={`${styles.scrollAnimated} text-4xl font-bold`}>
            {siteConfig.name}
          </h1>
          <p
            className={`${styles.scrollAnimated} text-lg text-neutral-600 dark:text-neutral-300 py-3 leading-5`}
          >
            Working on{" "}
            <Link
              className="text-neutral-400"
              href={redirect("minersstudios")}
              target="_blank"
            >
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
              className="text-center"
              props={category.props}
            >
              {cardMap.get(category.id)}
            </SocialCategory>
          ))}
        </article>
      </section>
    </DefaultLayout>
  );
}

/**
 * Initialize the social cards.
 */
function initCards() {
  const cardMap = new Map<
    string,
    ReactElement<React.JSXElementConstructor<any>>[]
  >();

  socialCards.forEach((properties) => {
    const category: SocialCategoryId = properties.category || "default";
    const cards = cardMap.get(category) || [];

    cards.push(
      <SocialCard key={properties.link.href} properties={properties} />,
    );
    cardMap.set(category, cards);
  });

  return cardMap;
}
