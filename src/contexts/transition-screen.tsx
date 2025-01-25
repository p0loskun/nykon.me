import type { TransitionContextState } from "@type/transition-context";

import React, { createContext, ReactElement, useState } from "react";

/** Context to manage the visibility of the transition screen overlay. */
export const TransitionContext = createContext<TransitionContextState | null>(
  null,
);

/**
 * Provider for the transition screen context that manages the visibility of the
 * transition screen overlay.
 *
 * @param children The children to render within the provider.
 * @constructor
 */
export function TransitionProvider({
  children,
}: {
  children: React.ReactNode;
}): ReactElement {
  /* State to track the visibility of the content */
  const [isContentVisible, setContentVisible] = useState(true);

  return (
    <TransitionContext.Provider value={{ isContentVisible, setContentVisible }}>
      {children}
    </TransitionContext.Provider>
  );
}
