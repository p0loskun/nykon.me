import { Navbar as NextUINavbar, NavbarContent } from "@nextui-org/navbar";

import { siteConfig } from "@/src/config/site";
import { ThemeSwitch } from "@/src/components/theme-switch";
import styles from "@/src/styles/navbar.module.css";
import { NavButton } from "@/src/components/navbutton";

export const Navbar = ({ iconOnly }: { iconOnly?: boolean }) => {
  return (
    <NextUINavbar
      className={`${styles.navbar} backdrop-blur-none bg-background-none`}
      isBlurred={false}
    >
      <NavbarContent className="basis-full" justify="center">
        <div className="flex gap-1 backdrop-blur-md bg-transparent border-1 border-neutral-600 rounded-2xl h-10 items-center px-1 py-5">
          {siteConfig.navItems.map((item) => (
            <NavButton
              key={item.href}
              href={item.href}
              icon={item.icon}
              iconOnly={iconOnly}
              label={item.label}
            />
          ))}
        </div>
        <ThemeSwitch className="backdrop-blur-md bg-transparent border-1 border-neutral-600 hover:bg-default/40 transition-all rounded-large max-h-10 max-w-10 min-w-10 min-h-10 justify-center" />
      </NavbarContent>
    </NextUINavbar>
  );
};
