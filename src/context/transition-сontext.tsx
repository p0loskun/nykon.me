import React, { createContext, useContext, useState } from "react";

/** Context to manage the visibility of the transition screen overlay. */
const TransitionContext = createContext<{
  isContentVisible: boolean;
  setContentVisible: (visible: boolean) => void;
} | null>(null);

/**
 * Provider for the transition screen context that manages the visibility of the
 * transition screen overlay.
 *
 * @param children The children to render within the provider.
 * @constructor
 */
export const TransitionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  /* State to track the visibility of the content */
  const [isContentVisible, setContentVisible] = useState(true);

  return (
    <TransitionContext.Provider value={{ isContentVisible, setContentVisible }}>
      {children}
    </TransitionContext.Provider>
  );
};

/**
 * Hook to access the transition screen context.
 *
 * @returns The transition screen context.
 * @throws {Error} If the hook is used outside the provider.
 */
export function useTransition() {
  const context = useContext(TransitionContext);

  if (!context) {
    throw new Error("useTransition must be used within TransitionProvider");
  }

  return context;
}
