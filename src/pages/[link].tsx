import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Error from "next/error";

import { siteConfig } from "@/src/config/site";
import RedirectLayout from "@/src/layouts/redirect";

export default function RedirectPage() {
  const router = useRouter();
  const { link } = router.query;
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!link) {
      return;
    }

    const url = siteConfig.links[link as keyof typeof siteConfig.links];

    if (url) {
      router.replace(url);
    } else {
      setNotFound(true);
    }
  }, [link, router]);

  if (notFound) {
    return <Error statusCode={404} />;
  }

  return <RedirectLayout />;
}
