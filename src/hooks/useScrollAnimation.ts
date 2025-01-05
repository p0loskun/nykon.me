import { useEffect } from "react";

import styles from "@/src/styles/scroll-animated.module.css";

export const useScrollAnimation = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(`.${styles.scrollAnimated}`);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animate);
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
