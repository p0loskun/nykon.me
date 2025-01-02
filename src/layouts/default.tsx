import React from "react";
import { ScrollShadow } from "@nextui-org/scroll-shadow";

import { Head } from "@/src/layouts/head";
import { Navbar } from "@/src/components/navbar";
import { TransitionScreen } from "@/src/components/transition-screen";
import { TransitionProvider } from "@/src/context/transition-сontext";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TransitionProvider>
      <Head />
      <TransitionScreen />
      <Navbar />
      <ScrollShadow className="w-full h-screen" hideScrollBar={true} size={100}>
        <main className="container mx-auto max-w-7xl px-6 flex-grow md:pt-16">
          {children}
        </main>
      </ScrollShadow>
    </TransitionProvider>
  );
}
