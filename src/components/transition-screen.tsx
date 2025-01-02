import React from "react";

import { useTransition } from "@/src/context/transition-сontext";

export const TransitionScreen = () => {
  const { isContentVisible } = useTransition();

  return (
    <div
      className={`fixed inset-0 bg-background z-50 duration-500 ${
        isContentVisible
          ? "opacity-0 pointer-events-none transition-opacity-out"
          : "opacity-100 transition-opacity-in"
      }`}
    />
  );
};
