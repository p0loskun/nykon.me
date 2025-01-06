import { useEffect } from "react";

import styles from "@/src/styles/scroll-animated.module.css";

/**
 * Search for elements with the `scrollAnimated` class and animate them when
 * they are in the viewport, and reverse the animation when they leave.
 */
export const useScrollAnimation = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(`.${styles.scrollAnimated}`);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animate);
            entry.target.classList.remove(styles.fadeOut);
          } else {
            entry.target.classList.remove(styles.animate);
            entry.target.classList.add(styles.fadeOut);
          }
        });
      },
      {
        threshold: 0.1,
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, []);
};
