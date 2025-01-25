/* eslint-disable react/no-unknown-property */

import type { RedirectProps } from "@type/redirect";

import React, { ReactElement } from "react";
import Head from "next/head";

/**
 * Default head component for redirect pages that injects elements to `<head>`
 * of the page.
 *
 * @constructor
 */
export default function RedirectHead({
  redirect,
}: {
  redirect: RedirectProps;
}): ReactElement {
  return (
    <Head>
      <title>{redirect.title}</title>
      <meta key="title" content={redirect.title} property="og:title" />
      <meta content={redirect.description} property="og:description" />
      <meta content={redirect.description} name="description" />
      <meta content={`0; URL=${redirect.href}`} http-equiv="refresh" />
      <link href="/favicon.ico" rel="icon" />
    </Head>
  );
}
