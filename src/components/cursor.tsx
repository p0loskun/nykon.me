import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import gsap from "gsap";
import clsx from "clsx";

import isMobile from "@/src/utils/isMobile";

export default function CustomCursor() {
  /* State to store cursor visibility */
  const [isVisible, setIsVisible] = useState(false);
  /* Router instance */
  const router = useRouter();

  /* Handles the cursor movement */
  useEffect(() => {
    if (isMobile(navigator.userAgent)) {
      return;
    }

    /* Cursor element */
    const cursor = document.getElementById("cursor");
    /* Animates the cursor to the specified x position. */
    const xTo = gsap.quickTo(cursor, "left", {
      duration: 0.3,
      ease: "power3",
    });
    /* Animates the cursor to the specified y position. */
    const yTo = gsap.quickTo(cursor, "top", {
      duration: 0.3,
      ease: "power3",
    });

    /**
     * Handles the mouse move event.
     * <p>Shows the cursor if it is not visible.</p>
     * <p>Moves the cursor to the mouse position.</p>
     *
     * @param event
     */
    const onMouseMove = (event: MouseEvent) => {
      if (!isVisible) {
        gsap.to(cursor, { opacity: 1, scale: 1, duration: 0.3 });
        setIsVisible(true);
      }

      xTo(event.clientX);
      yTo(event.clientY);
    };

    /**
     * Handles the mouse out event.
     * <p>Hides the cursor if the related target is null.</p>
     *
     * @param event
     */
    const onMouseOut = (event: MouseEvent) => {
      if (!event.relatedTarget) {
        gsap.to(cursor, { opacity: 0, scale: 0, duration: 0.3 });
        setIsVisible(false);
      }
    };

    /**
     * Scales the cursor to the specified value.
     *
     * @param value The scale value.
     */
    const scaleCursor = (value: gsap.TweenValue) => {
      gsap.to(cursor, { scale: value, duration: 0.35 });
    };

    /**
     * Attaches hover events to the specified targets.
     *
     * @param targets The hover targets.
     * @returns The detach function.
     */
    const attachHoverEvents = (targets: NodeListOf<Element>) => {
      targets.forEach((target) => {
        target.addEventListener("mouseenter", () => scaleCursor(3));
        target.addEventListener("mouseleave", () => scaleCursor(1));
      });

      return () => {
        targets.forEach((target) => {
          target.removeEventListener("mouseenter", () => scaleCursor(3));
          target.removeEventListener("mouseleave", () => scaleCursor(1));
        });
      };
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseout", onMouseOut);

    const detachHoverEvents = attachHoverEvents(
      document.querySelectorAll("a, button, .hover-target"),
    );

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseout", onMouseOut);
      detachHoverEvents();
    };
  }, [router.pathname, isVisible]);

  return (
    <div
      className={clsx(
        "w-4 h-4 fixed z-50 pointer-events-none",
        "transform translate-x-[-50%] translate-y-[-50%]",
        "bg-white rounded-full mix-blend-difference opacity-0",
      )}
      id="cursor"
    />
  );
}
