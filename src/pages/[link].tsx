import { GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Error from "next/error";
import RedirectLayout from "@layouts/redirect";
import RedirectHead from "@layouts/redirect-head";
import { redirects, RedirectProps } from "@configs/redirects";

export default function RedirectPage({
  redirect,
}: {
  redirect: RedirectProps | null;
}) {
  const router = useRouter();

  useEffect(() => {
    const handleRedirect = async () => {
      if (redirect?.href) {
        await router.replace(redirect.href);
      }
    };

    // noinspection JSIgnoredPromiseFromCall
    handleRedirect();
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
  const link = params?.link as keyof typeof redirects;
  const redirect = redirects[link] || null;

  return redirect ? { props: { redirect } } : { notFound: true };
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: Object.keys(redirects).map((link) => ({ params: { link } })),
  fallback: false,
});
