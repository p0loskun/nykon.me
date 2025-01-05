import type { AppProps } from "next/app";

import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/router";
import "@/src/styles/globals.css";

import { fontSans, fontMono } from "@/src/config/fonts";
import { TransitionProvider } from "@/src/context/transition-сontext";
import { useScrollAnimation } from "@/src/hooks/useScrollAnimation";

export default function App({ Component, pageProps }: AppProps) {
  useScrollAnimation();

  return (
    <NextUIProvider navigate={useRouter().push}>
      <NextThemesProvider>
        <TransitionProvider>
          <Component {...pageProps} />
        </TransitionProvider>
      </NextThemesProvider>
    </NextUIProvider>
  );
}

export const fonts = {
  sans: fontSans.style.fontFamily,
  mono: fontMono.style.fontFamily,
};
