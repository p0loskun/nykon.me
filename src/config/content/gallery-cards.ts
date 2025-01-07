// noinspection JSUnusedGlobalSymbols

import { ImageProps } from "next/image";

/** Gallery card properties type. */
export type GalleryCardProps = {
  image: ImageProps;
  title?: string;
  subtitle?: string;
};

/** Gallery cards data. */
export const galleryCards: GalleryCardProps[] = [
  {
    image: {
      src: "/img/gallery/001.webp",
      alt: "",
    },
    title: "",
    subtitle: "",
  },
  {
    image: {
      src: "/img/gallery/002.webp",
      alt: "",
    },
    title: "",
    subtitle: "",
  },
  {
    image: {
      src: "/img/gallery/003.webp",
      alt: "",
    },
    title: "",
    subtitle: "",
  },
  {
    image: {
      src: "/img/gallery/004.webp",
      alt: "",
    },
    title: "",
    subtitle: "",
  },
  {
    image: {
      src: "/img/gallery/005.webp",
      alt: "",
    },
    title: "",
    subtitle: "",
  },
  {
    image: {
      src: "/img/gallery/006.webp",
      alt: "",
    },
    title: "",
    subtitle: "",
  },
  {
    image: {
      src: "/img/gallery/007.webp",
      alt: "",
    },
    title: "",
    subtitle: "",
  },
  {
    image: {
      src: "/img/gallery/008.webp",
      alt: "",
    },
    title: "",
    subtitle: "",
  },
  {
    image: {
      src: "/img/gallery/009.webp",
      alt: "",
    },
    title: "",
    subtitle: "",
  },
];

export default galleryCards;
