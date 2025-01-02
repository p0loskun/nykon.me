import { Button } from "@nextui-org/button";
import { NavbarItem } from "@nextui-org/navbar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { Icon } from "@/src/components/icons";
import { useTransition } from "@/src/context/transition-сontext";

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
  const { setContentVisible } = useTransition();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }
  }, [router]);

  const isActive = href === currentPath;

  const handleNavigation = async () => {
    if (href !== currentPath) {
      setContentVisible(false);
      setTimeout(() => {
        router.push(href).then(() => setContentVisible(true));
      }, 250);
    }
  };

  return (
    <NavbarItem>
      <Button
        className={[
          isActive
            ? "bg-default/40 border-neutral-600 text-default-900"
            : "border-transparent text-default-500",
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
