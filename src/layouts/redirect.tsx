import React from "react";

import styles from "@/src/styles/animated-dots.module.css";
import { fontMono } from "@/src/config/fonts";

/**
 * Default layout for redirecting pages, it shows a message with animated dots.
 *
 * @constructor
 */
export default function RedirectLayout() {
  return (
    <div
      className={`w-full h-screen flex items-center justify-center font-mono ${fontMono.variable}`}
    >
      <span className="text-2xl bold">
        Redirecting
        <span className={styles.dots} />
      </span>
    </div>
  );
}
