import React, { createContext, useContext, useState } from "react";

const TransitionContext = createContext<{
  isContentVisible: boolean;
  setContentVisible: (visible: boolean) => void;
} | null>(null);

export const TransitionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isContentVisible, setIsContentVisible] = useState(true);

  const setContentVisible = (visible: boolean) => {
    setIsContentVisible(visible);
  };

  return (
    <TransitionContext.Provider value={{ isContentVisible, setContentVisible }}>
      {children}
    </TransitionContext.Provider>
  );
};

export const useTransition = () => {
  const context = useContext(TransitionContext);

  if (!context) {
    throw new Error("useTransition must be used within TransitionProvider");
  }

  return context;
};
