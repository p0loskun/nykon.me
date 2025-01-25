import { GalleryCardProps } from "@type/gallery";
import { Card } from "@heroui/card";
import React, { ReactElement } from "react";
import clsx from "clsx";
import { fontMono } from "@configs/fonts";
import { Image } from "@heroui/image";
import styles from "@styles/module/scroll-animated.module.css";

/**
 * Gallery card component.
 *
 * @param properties The properties to render the gallery card.
 * @constructor
 */
export function GalleryCard({
  properties,
}: {
  properties: GalleryCardProps;
}): ReactElement | null {
  if (properties.hidden) {
    return null;
  }

  return (
    <Card
      className={clsx([
        styles.scrollAnimated,
        "w-full h-full min-h-52 md:min-h-64",
        "flex flex-col justify-center items-center",
        "rounded-[2.5rem]",
        "hover-target",
      ])}
    >
      <Image
        removeWrapper
        alt={properties.image.alt as string}
        className="z-0 w-full h-full object-cover"
        loading="lazy"
        src={properties.image.src as string}
      />
      {properties.title ? (
        <h1
          className={clsx(
            "absolute text-l font-light font-mono bottom-4 top-auto",
            fontMono.variable,
          )}
        >
          {properties.title}
        </h1>
      ) : null}
      {properties.subtitle ? (
        <h2
          className={clsx(
            "absolute text-sm font-light font-mono bottom-0 top-auto",
            fontMono.variable,
          )}
        >
          {properties.subtitle}
        </h2>
      ) : null}
    </Card>
  );
}

export function Gallery({
  children,
}: {
  children: React.ReactNode;
}): ReactElement {
  return (
    <section className="grid grid-cols-[repeat(auto-fit,minmax(26rem,1fr))] gap-4">
      {children}
    </section>
  );
}
