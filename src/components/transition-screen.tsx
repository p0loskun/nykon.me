import React from "react";

export const TransitionScreen = ({
  isVisible,
}: {
  isVisible: boolean;
}) => {
  return (
    <div
      className={`fixed inset-0 bg-background z-50 transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    />
  );
};
