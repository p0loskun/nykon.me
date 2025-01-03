import React, { useEffect, useState } from "react";

import { Head } from "@/src/layouts/head";
import { Navbar } from "@/src/components/navbar";
import { TransitionScreen } from "@/src/components/transition-screen";
import { TransitionProvider } from "@/src/context/transition-сontext";

/**
 * Default layout of the application that wraps the content with the navbar and
 * transition screen.
 *
 * @param children The children to render within the layout.
 * @constructor
 */
export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  /* State to track if the view is mobile */
  const [isMobileView, setIsMobileView] = useState(false);

  /* Check if the view is mobile on resize and update the state */
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
