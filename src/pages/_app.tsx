import type { AppProps } from "next/app";

import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider } from "next-themes";
import { useRouter } from "next/router";
import "@/src/styles/globals.css";

import TransitionProvider from "@/src/context/transition-screen-context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider navigate={useRouter().push}>
      <ThemeProvider defaultTheme="dark">
        <TransitionProvider>
          <Component {...pageProps} />
        </TransitionProvider>
      </ThemeProvider>
    </NextUIProvider>
  );
}
