import { GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";
import Error from "next/error";

import { siteConfig } from "@/src/config/site";
import RedirectLayout from "@/src/layouts/redirect";

export default function RedirectPage({ url }: { url: string | null }) {
  const router = useRouter();

  if (!url) {
    return <Error statusCode={404} />;
  }

  if (typeof window !== "undefined") {
    router.replace(url);
  }

  return <RedirectLayout />;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const link = params?.link as string | undefined;

  if (!link || !siteConfig.links[link as keyof typeof siteConfig.links]) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      url: siteConfig.links[link as keyof typeof siteConfig.links],
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(siteConfig.links).map((link) => ({
    params: { link },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};
