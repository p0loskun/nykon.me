import React, { useState, useEffect } from "react";
import { Head } from "@/src/layouts/head";
import { Navbar } from "@/src/components/navbar";

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

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative flex flex-col">
      <Head />
      <Navbar iconOnly={isMobileView} />
      <main className="container mx-auto max-w-7xl px-6 flex-grow md:pt-16">
        {children}
      </main>
    </div>
  );
}
