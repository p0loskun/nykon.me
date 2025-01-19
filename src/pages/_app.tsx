import type { AppProps } from "next/app";

import { HeroUIProvider } from "@heroui/system";
import { ThemeProvider } from "next-themes";
import { useRouter } from "next/router";
import { TransitionProvider } from "@contexts/transition-screen";
import Cursor from "@components/cursor";
import "@styles/globals.css";
import "@configs/fonts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <HeroUIProvider navigate={useRouter().push}>
      <ThemeProvider defaultTheme="dark">
        <TransitionProvider>
          <Cursor />
          <Component {...pageProps} />
        </TransitionProvider>
      </ThemeProvider>
    </HeroUIProvider>
  );
}
