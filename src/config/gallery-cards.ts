// noinspection JSUnusedGlobalSymbols

import { ImageProps } from "next/image";

/** Gallery card type. */
export type GalleryCard = {
  image: ImageProps;
  title?: string;
  subtitle?: string;
};

/** Gallery cards data type. */
export type GalleryCards = typeof galleryCards;

/** Gallery cards data. */
export const galleryCards: GalleryCard[] = [
  {
    image: {
      src: "/img/gallery/001.jpg",
      alt: "",
    },
    title: "",
    subtitle: "",
  },
  {
    image: {
      src: "/img/gallery/002.jpg",
      alt: "",
    },
    title: "",
    subtitle: "",
  },
  {
    image: {
      src: "/img/gallery/003.jpg",
      alt: "",
    },
    title: "",
    subtitle: "",
  },
  {
    image: {
      src: "/img/gallery/004.jpg",
      alt: "",
    },
    title: "",
    subtitle: "",
  },
  {
    image: {
      src: "/img/gallery/005.jpg",
      alt: "",
    },
    title: "",
    subtitle: "",
  },
  {
    image: {
      src: "/img/gallery/006.jpg",
      alt: "",
    },
    title: "",
    subtitle: "",
  },
  {
    image: {
      src: "/img/gallery/007.jpg",
      alt: "",
    },
    title: "",
    subtitle: "",
  },
  {
    image: {
      src: "/img/gallery/008.jpg",
      alt: "",
    },
    title: "",
    subtitle: "",
  },
  {
    image: {
      src: "/img/gallery/009.jpg",
      alt: "",
    },
    title: "",
    subtitle: "",
  },
];
