import { GetServerSideProps } from "next";

import { siteConfig } from "@/src/config/site";

const RedirectPage = () => {
  return null;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { link } = context.params!;
  const targetUrl = siteConfig.links[link as keyof typeof siteConfig.links];

  if (!targetUrl) {
    return {
      notFound: true,
    };
  }

  return {
    redirect: {
      destination: targetUrl,
      permanent: true,
    },
  };
};

export default RedirectPage;
