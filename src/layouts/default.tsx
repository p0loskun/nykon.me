import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Head } from "@/src/layouts/head";
import { Navbar } from "@/src/components/navbar";
import { TransitionScreen } from "@/src/components/transition-screen";
import { ScrollShadow } from "@nextui-org/scroll-shadow";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileView, setIsMobileView] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    const handleRouteChangeStart = () => {
      setIsTransitioning(true);
    };

    const handleRouteChangeComplete = () => {
      setTimeout(() => {
        setIsTransitioning(false);
      }, 1000);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    return () => {
      window.removeEventListener("resize", handleResize);
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, [router.events]);

  return (
    <div className="relative flex flex-col">
      <TransitionScreen isVisible={isTransitioning} />
      <Head />
      <Navbar iconOnly={isMobileView} />
      <ScrollShadow className="w-full h-screen" size={100} hideScrollBar={true}>
        <main className="container mx-auto max-w-7xl px-6 flex-grow md:pt-16">
          {children}
        </main>
      </ScrollShadow>
    </div>
  );
}
