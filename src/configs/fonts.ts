import {
  Inconsolata as FontMono,
  Inter as FontSans,
  Righteous as FontRighteous,
} from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontRighteous = FontRighteous({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-righteous",
});

/** Fonts */
export const fonts = {
  sans: fontSans.style.fontFamily,
  mono: fontMono.style.fontFamily,
  righteous: fontRighteous.style.fontFamily,
};

export default fonts;
