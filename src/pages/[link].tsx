import { GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Error from "next/error";

import RedirectLayout from "@/src/layouts/redirect";
import { redirectMap, Redirect } from "@/src/config/redirects";
import { RedirectHead } from "@/src/layouts/redirect-head";

export default function RedirectPage({
  redirect,
}: {
  redirect: Redirect | null;
}) {
  const router = useRouter();

  useEffect(() => {
    if (redirect?.href) {
      router.replace(redirect.href);
    }
  }, [router, redirect]);

  if (!redirect) {
    return <Error statusCode={404} />;
  }

  return (
    <>
      <RedirectHead redirect={redirect} />
      <RedirectLayout />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const link = params?.link as keyof typeof redirectMap;
  const redirect = redirectMap[link] || null;

  return !redirect ? { notFound: true } : { props: { redirect } };
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: Object.keys(redirectMap).map((link) => ({ params: { link } })),
  fallback: false,
});
