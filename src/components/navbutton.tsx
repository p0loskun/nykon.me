import { Button, ButtonProps } from "@nextui-org/button";
import { NavbarItem } from "@nextui-org/navbar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { Icon, IconId } from "@/src/components/icons";
import { useTransition } from "@/src/context/transition-сontext";

/**
 * A navigation button that navigates to the specified href.
 * <p>Used in the navbar to navigate to different pages.</p>
 * <p>
 * <b>NOTE:</b> Not needed to be wrapped with the {@link NavbarItem} component,
 * it is already wrapped.
 * </p>
 *
 * @param href            The href to navigate to.
 * @param label           Button label, showed when `iconOnly` is false.
 * @param iconId          Icon id, see {@link Icon}.
 * @param iconOnly        If true, only the icon of the button will be displayed.
 * @param buttonClassName Button class name.
 * @param textClassName   Text class name.
 * @param disabled
 * @param props           Additional button props.
 * @constructor
 */
export const NavButton = ({
  href,
  label,
  iconId,
  iconOnly,
  buttonClassName,
  textClassName,
  ...props
}: {
  href: string | undefined;
  label: string;
  iconId: IconId;
  iconOnly?: boolean;
  buttonClassName?: string;
  textClassName?: string;
} & ButtonProps) => {
  /* State to store the active state of the button */
  const [isActive, setActive] = useState(false);
  /* Router instance */
  const router = useRouter();
  /* Transition context, used to set the content visibility */
  const { setContentVisible } = useTransition();

  /* Sets the active state of the button based on the current path */
  useEffect(() => {
    if (typeof window !== "undefined") {
      setActive(window.location.pathname === href);
    }
  }, [router]);

  /* Handles the navigation to the specified href */
  const handleNavigation = async () => {
    if (href && !isActive && !props.disabled) {
      setContentVisible(false);
      setTimeout(() => {
        router.push(href).then(() => setContentVisible(true));
      }, 250); // Animation transition duration
    }
  };

  return (
    <NavbarItem>
      <Button
        className={[
          isActive
            ? "bg-default/60 border-neutral-600 text-default-900"
            : "border-transparent text-default-500",
          "min-w-14 transition-all border-1 hover:border-neutral-600 focus:border-neutral-600 px-4 gap-3",
          buttonClassName,
        ].join(" ")}
        color="default"
        isIconOnly={iconOnly}
        radius="md"
        size="sm"
        startContent={<Icon id={iconId} size={16} />}
        variant="light"
        onPress={handleNavigation}
        {...props}
      >
        <h2 className={`text-sm ${textClassName}`}>
          {iconOnly ? null : label}
        </h2>
      </Button>
    </NavbarItem>
  );
};
