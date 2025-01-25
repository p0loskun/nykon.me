import React, { ReactElement } from "react";
import useTransitionScreen from "@hooks/use-transition-screen";

/**
 * A screen that covers the content.
 * <p>Used to create a transition effect when navigating between pages.</p>
 *
 * @constructor
 * @see setContentVisible
 */
export default function TransitionScreen(): ReactElement {
  /*
   * Transition context, used to get the content visibility state.
   * Use `setContentVisible` to change the visibility state.
   */
  const { isContentVisible } = useTransitionScreen();

  return (
    <div
      className={`fixed inset-0 bg-background z-50 duration-500 ${
        isContentVisible
          ? "opacity-0 pointer-events-none transition-opacity-out"
          : "opacity-100 transition-opacity-in"
      }`}
    />
  );
}
