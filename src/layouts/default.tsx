import React, { useEffect, useState } from "react";

import { Head } from "@/src/layouts/head";
import { Navbar } from "@/src/components/navbar";
import { TransitionScreen } from "@/src/components/transition-screen";
import { TransitionProvider } from "@/src/context/transition-сontext";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
  });

  return (
    <TransitionProvider>
      <Head />
      <TransitionScreen />
      <Navbar iconOnly={isMobileView} />
      <main className="container mx-auto max-w-7xl px-6 flex-grow md:pt-16 max-md:pb-20">
        {children}
      </main>
    </TransitionProvider>
  );
}
