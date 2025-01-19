import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarItem,
} from "@heroui/navbar";
import { siteConfig } from "@configs/site";
import ThemeSwitch from "@components/theme-switch";
import styles from "@styles/navbar.module.css";
import { Button, ButtonProps } from "@heroui/button";
import { Icon, IconId } from "@components/icon";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useTransitionScreen from "@hooks/use-transition-screen";

/**
 * Default navbar component.
 * <p>It uses the `siteConfig.navItems` to render the navigation items.</p>
 *
 * @param iconOnly If true, only the icons will be displayed.
 *                 Otherwise, the icons and labels will be displayed.
 * @constructor
 */
export function Navbar({ iconOnly }: { iconOnly?: boolean }) {
  return (
    <HeroUINavbar
      className={`${styles.navbar} backdrop-blur-none bg-background-none`}
      isBlurred={false}
    >
      <NavbarContent className="basis-full" justify="center">
        <div className="flex gap-1 backdrop-blur-md bg-transparent border-1 border-neutral-600 rounded-2xl h-10 items-center px-1 py-5">
          {siteConfig.navItems.map((item) => (
            <NavButton
              key={item.link.href}
              href={item.link.href}
              iconId={item.icon}
              iconOnly={iconOnly}
              label={item.label}
            />
          ))}
        </div>
        <ThemeSwitch className="backdrop-blur-md bg-transparent border-1 border-neutral-600 hover:bg-default/40 transition-all rounded-large max-h-10 max-w-10 min-w-10 min-h-10 justify-center" />
      </NavbarContent>
    </HeroUINavbar>
  );
}

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
export function NavButton({
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
} & ButtonProps) {
  /* State to store the active state of the button */
  const [isActive, setActive] = useState(false);
  /* Router instance */
  const router = useRouter();
  /* Transition context, used to set the content visibility */
  const { setContentVisible } = useTransitionScreen();

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
}
