import React from "react";

import styles from "@/src/styles/redirect-layout.module.css";
import { fontMono } from "@/src/config/fonts";

export default function RedirectLayout() {
  return (
    <div
      className={`w-full h-[100vh] flex items-center justify-center font-mono ${fontMono.variable}`}
    >
      <span className={styles.redirectText}>
        Redirecting<span className={styles.dots} />
      </span>
    </div>
  );
}
