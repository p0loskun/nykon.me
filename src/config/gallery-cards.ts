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

export default galleryCards;
