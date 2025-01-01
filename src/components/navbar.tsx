import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";

import { siteConfig } from "@/src/config/site";
import { ThemeSwitch } from "@/src/components/theme-switch";
import { Icon } from "@/src/components/icons";
import styles from "@/src/styles/navbar.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export const NavButton = ({
  href,
  label,
  icon,
  iconOnly,
}: {
  href: string;
  label: string;
  icon: string;
  iconOnly?: boolean;
}) => {
  const [currentPath, setCurrentPath] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }
  }, [router]);

  const isActive = href === currentPath;

  const handleNavigation = () => {
    if (href !== currentPath) {
      router.push(href);
    }
  };

  return (
    <NavbarItem>
      <Button
        className={[
          isActive
            ? "bg-default/40 border-neutral-600 text-default-900"
            : "border-transparent text-default-500",
          styles.navButton,
          "min-w-14 transition-all border-1 hover:border-neutral-600 focus:border-neutral-600",
        ].join(" ")}
        color="default"
        isIconOnly={iconOnly}
        radius="md"
        size="sm"
        startContent={<Icon name={icon} size={16} />}
        variant="light"
        onPress={handleNavigation}
      >
        <h2 className="text-sm">{iconOnly ? null : label}</h2>
      </Button>
    </NavbarItem>
  );
};


export const Navbar = ({ iconOnly }:{ iconOnly?: boolean; }) => {
  return (
    <NextUINavbar
      isBlurred={false}
      className={`${styles.navbar} backdrop-blur-none bg-background-none`}
    >
      <NavbarContent className="basis-full" justify="center">
        <div className="flex gap-1 backdrop-blur-md bg-transparent border-1 border-neutral-600 rounded-2xl h-10 items-center px-1 py-5">
          {siteConfig.navItems.map((item) => (
            <NavButton
              key={item.href}
              href={item.href}
              icon={item.icon}
              label={item.label}
              iconOnly={iconOnly}
            />
          ))}
        </div>
        <ThemeSwitch className="backdrop-blur-md bg-transparent border-1 border-neutral-600 hover:bg-default/40 transition-all rounded-large max-h-10 max-w-10 min-w-10 min-h-10 justify-center" />
      </NavbarContent>
    </NextUINavbar>
  );
};
