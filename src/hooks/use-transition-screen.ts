import type { TransitionContextState } from "@type/transition-context";

import { useContext } from "react";
import { TransitionContext } from "@contexts/transition-screen";

/**
 * Hook to access the transition screen context.
 *
 * @returns The transition screen {@link TransitionContext context}.
 * @throws {Error} If the hook is used outside the provider.
 */
export default function useTransitionScreen(): TransitionContextState {
  const context = useContext(TransitionContext);

  if (!context) {
    throw new Error(
      "useTransitionScreen must be used within TransitionProvider",
    );
  }

  return context;
}
