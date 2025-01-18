import { useState, useEffect } from "react";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import { SwitchProps, useSwitch } from "@nextui-org/switch";
import { useTheme } from "next-themes";
import clsx from "clsx";

import { SunIcon, MoonIcon } from "@/src/components/icons";

/**
 * A switch component to switch between light and dark themes.
 *
 * @param className  Switch class name.
 * @param classNames Switch class names.
 * @constructor
 */
export default function ThemeSwitch({
  className,
  classNames,
}: {
  className?: string;
  classNames?: SwitchProps["classNames"];
}) {
  /* State to store the mounted state of the component */
  const [isMounted, setIsMounted] = useState(false);
  /* Theme context */
  const { theme, setTheme } = useTheme();
  /* Switch handler */
  const onChange = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  /* Switch hook */
  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch({
    isSelected: theme === "light",
    onChange,
  });

  useEffect(() => {
    setIsMounted(true);
  }, [isMounted]);

  if (!isMounted) {
    return <div className="w-6 h-6" />;
  }

  return (
    <Component
      aria-label={isSelected ? "Switch to dark mode" : "Switch to light mode"}
      {...getBaseProps({
        className: clsx(
          "px-px cursor-pointer hover-target",
          className,
          classNames?.base,
        ),
      })}
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <div
        {...getWrapperProps()}
        className={slots.wrapper({
          class: clsx(
            [
              "w-auto h-auto",
              "bg-transparent",
              "rounded-lg",
              "flex items-center justify-center",
              "group-data-[selected=true]:bg-transparent",
              "!text-default-500",
              "px-0",
              "mx-0",
            ],
            classNames?.wrapper,
          ),
        })}
      >
        {isSelected ? <MoonIcon size={22} /> : <SunIcon size={22} />}
      </div>
    </Component>
  );
}
