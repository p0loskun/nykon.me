import type { AppProps } from "next/app";

import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider } from "next-themes";
import { useRouter } from "next/router";

import TransitionProvider from "@/src/context/transition-screen-context";
import CustomCursor from "@/src/components/cursor";
import "@/src/styles/globals.css";
import "@/src/config/fonts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider navigate={useRouter().push}>
      <ThemeProvider defaultTheme="dark">
        <TransitionProvider>
          <CustomCursor />
          <Component {...pageProps} />
        </TransitionProvider>
      </ThemeProvider>
    </NextUIProvider>
  );
}
