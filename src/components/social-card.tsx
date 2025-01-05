import { Link } from "@nextui-org/link";
import { Card } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import clsx from "clsx";

import { SocialCardParams } from "@/src/config/social-cards";
import { Icon } from "@/src/components/icons";
import { fontMono } from "@/src/config/fonts";

export const SocialCard = ({ card }: { card: SocialCardParams }) => {
  if (card.disabled) {
    return null;
  }

  return (
    <Link
      key={card.link.href}
      className="w-full"
      href={card.link.href}
      target={card.link.target}
    >
      <Card className="w-full h-full min-h-52 md:min-h-64 flex flex-col justify-center items-center gap-2">
        {card.background ? (
          <Image
            removeWrapper
            alt={card.background.alt}
            className="z-0 w-full h-full object-cover"
            src={card.background.src}
          />
        ) : null}
        {card.icon ? (
          <div className="flex items-center justify-center">
            <Icon id={card.icon} size={card.iconSize || 52} />
          </div>
        ) : null}
        {card.title ? (
          <h1
            className={clsx(
              "absolute text-l font-light font-mono bottom-4 top-auto",
              fontMono.variable,
            )}
          >
            {card.title}
          </h1>
        ) : null}
      </Card>
    </Link>
  );
};
