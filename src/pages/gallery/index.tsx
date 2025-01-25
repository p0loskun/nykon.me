import DefaultLayout from "@layouts/default";
import useScrollAnimation from "@hooks/use-scroll-animation";
import React, { ReactElement } from "react";
import galleryCards from "@configs/content/gallery-cards";
import { Gallery, GalleryCard } from "@components/content/gallery";
import { GalleryCardProps } from "@type/gallery";

export default function GalleryPage(): ReactElement {
  useScrollAnimation();

  const cards = initCards();

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <Gallery>{cards}</Gallery>
      </section>
    </DefaultLayout>
  );
}

function initCards() {
  const cards: ReactElement[] = [];

  galleryCards.forEach((properties: GalleryCardProps) => {
    cards.push(<GalleryCard properties={properties} />);
  });

  return cards;
}
