import React, { ReactElement, useEffect, useState } from "react";
import { Navbar } from "@components/navigation";
import Head from "@layouts/head";
import TransitionScreen from "@components/transition-screen";
import { TransitionProvider } from "@contexts/transition-screen";

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
}): ReactElement {
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
      <main className="px-6 md:pt-16 max-md:pb-20">{children}</main>
    </TransitionProvider>
  );
}
