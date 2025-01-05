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
